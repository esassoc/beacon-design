# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-fish-gantt** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/fish-gantt/
- **Section element:** `<page>`
- **Components:** esa-button (hub), esa-icon (hub), esa-icon-button (hub), esa-progress-bar (hub), esa-stat (hub)

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
            <li class="nav-item"><a href="#science-plan" class="nav-sublink"> Science Plan </a></li>
            <li class="nav-item">
              <a href="#tasking-gantt" class="nav-sublink active"> Tasking Gantt </a>
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
                <span class="breadcrumb-item" aria-current="page"> Tasking Gantt </span>
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
                Tasking Gantt
              </h1>
            </div>
            <div class="page-layout__utilities">
              <div class="bcn-gantt-utils">
                <a href="/beacon-design/prototypes/fish-studies"
                  ><span
                    class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
                  >
                    <button class="esa-button__native" type="button">
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
                      <span class="esa-button__label"> Science Plan crosswalk </span>
                    </button>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="bcn-gantt-stats">
              <div class="esa-stat esa-stat--accent">
                <div class="esa-stat__value">$51.31M</div>
                <div class="esa-stat__label">Planned funding (mock)</div>
                <div class="esa-stat__sub">WY2026–2044</div>
              </div>
              <div class="esa-stat">
                <div class="esa-stat__value">36</div>
                <div class="esa-stat__label">Studies tracked</div>
                <div class="esa-stat__sub">6 programs</div>
              </div>
              <div class="esa-stat">
                <div class="esa-stat__value">WY2026–2044</div>
                <div class="esa-stat__label">Schedule horizon</div>
                <div class="esa-stat__sub">water-year anchored</div>
              </div>
              <div class="esa-stat">
                <div class="esa-stat__value">36</div>
                <div class="esa-stat__label">Open CDFW comments</div>
                <div class="esa-stat__sub">155 deliverables</div>
              </div>
            </div>
            <p class="bcn-gantt-note">
              Recursive COA hierarchy with roll-ups in both directions — funding, schedule span, and
              status roll <strong>up</strong> the tree; program ceilings and back-scheduling anchors
              roll <strong>down</strong>. Select a study to trace its dependencies and open its
              funding plan. Illustrative planning figures — not CDFW/DWR contract values.
            </p>
            <div class="bcn-gantt">
              <div class="bcn-gantt__legend">
                <span class="bcn-gantt__legend-title">Plan status</span>
                <span class="bcn-gantt__legend-item">
                  <span class="bcn-gantt__legend-dot" style="--_c: #d73027"></span> Draft </span
                ><span class="bcn-gantt__legend-item">
                  <span class="bcn-gantt__legend-dot" style="--_c: #fc8d59"></span> Submitted to
                  CDFW </span
                ><span class="bcn-gantt__legend-item">
                  <span class="bcn-gantt__legend-dot" style="--_c: #e3c14d"></span> In Agency Review </span
                ><span class="bcn-gantt__legend-item">
                  <span class="bcn-gantt__legend-dot" style="--_c: #91cf60"></span> Revising </span
                ><span class="bcn-gantt__legend-item">
                  <span class="bcn-gantt__legend-dot" style="--_c: #1a9850"></span> Approved
                </span>
                <span class="bcn-gantt__legend-item">
                  <span class="bcn-gantt__legend-summary"></span>
                  Program roll-up
                </span>
                <span class="bcn-gantt__legend-hint"
                  >Click a study to trace its dependencies · caret to collapse a program</span
                >
              </div>
              <div class="bcn-gantt__scroll">
                <div class="bcn-gantt__canvas">
                  <!-- ── Axis header: phases / years / milestones (water-year aware) ── -->
                  <header class="bcn-gantt__axis">
                    <div class="bcn-gantt__corner">Program / study</div>
                    <div class="bcn-gantt__head-plot">
                      <div class="bcn-gantt__head-bands">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                      </div>
                      <div class="bcn-gantt__head-phases">
                        <span class="bcn-gantt__phase-tag" style="left: 15.79%; width: 26.32%">
                          Baseline </span
                        ><span class="bcn-gantt__phase-tag" style="left: 42.11%; width: 47.37%">
                          In-water construction </span
                        ><span class="bcn-gantt__phase-tag" style="left: 89.47%; width: 5.26%">
                          Phase 1 ops </span
                        ><span class="bcn-gantt__phase-tag" style="left: 94.74%; width: 5.26%">
                          Phase 2 ops
                        </span>
                      </div>
                      <div class="bcn-gantt__head-years">
                        <span class="bcn-gantt__yr" style="left: 0%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’26</span> </span
                        ><span class="bcn-gantt__yr" style="left: 5.26%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’27</span> </span
                        ><span class="bcn-gantt__yr" style="left: 10.53%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’28</span> </span
                        ><span class="bcn-gantt__yr" style="left: 15.79%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’29</span> </span
                        ><span class="bcn-gantt__yr is-five" style="left: 21.05%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’30</span> </span
                        ><span class="bcn-gantt__yr" style="left: 26.32%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’31</span> </span
                        ><span class="bcn-gantt__yr" style="left: 31.58%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’32</span> </span
                        ><span class="bcn-gantt__yr" style="left: 36.84%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’33</span> </span
                        ><span class="bcn-gantt__yr" style="left: 42.11%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’34</span> </span
                        ><span class="bcn-gantt__yr is-five" style="left: 47.37%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’35</span> </span
                        ><span class="bcn-gantt__yr" style="left: 52.63%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’36</span> </span
                        ><span class="bcn-gantt__yr" style="left: 57.89%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’37</span> </span
                        ><span class="bcn-gantt__yr" style="left: 63.16%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’38</span> </span
                        ><span class="bcn-gantt__yr" style="left: 68.42%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’39</span> </span
                        ><span class="bcn-gantt__yr is-five" style="left: 73.68%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’40</span> </span
                        ><span class="bcn-gantt__yr" style="left: 78.95%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’41</span> </span
                        ><span class="bcn-gantt__yr" style="left: 84.21%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’42</span> </span
                        ><span class="bcn-gantt__yr" style="left: 89.47%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’43</span> </span
                        ><span class="bcn-gantt__yr" style="left: 94.74%; width: 5.26%">
                          <span class="bcn-gantt__yr-label">’44</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__head-ms">
                        <span
                          class="bcn-gantt__ms-tag"
                          style="left: 26.31%"
                          title="30% design (WY2031)"
                        >
                          30% </span
                        ><span
                          class="bcn-gantt__ms-tag is-alt"
                          style="left: 31.57%"
                          title="60% design (WY2032)"
                        >
                          60% </span
                        ><span
                          class="bcn-gantt__ms-tag"
                          style="left: 44.28%"
                          title="In-water construction (cofferdam + intakes) (WY2034)"
                        >
                          In-water </span
                        ><span
                          class="bcn-gantt__ms-tag is-alt"
                          style="left: 89.47%"
                          title="Phase 1 operations (WY2043)"
                        >
                          Ph 1 ops </span
                        ><span
                          class="bcn-gantt__ms-tag"
                          style="left: 94.73%"
                          title="Phase 2 operations (WY2044)"
                        >
                          Ph 2 ops
                        </span>
                      </div>
                    </div>
                  </header>
                  <!-- ── Body: recursive rows + a dependency-edge overlay ── -->
                  <div class="bcn-gantt__body">
                    <svg class="bcn-gantt__edges" aria-hidden="true" width="100%" height="100%">
                      <defs>
                        <marker
                          id="bcn-gantt-arrow-out"
                          viewBox="0 0 10 10"
                          refX="8"
                          refY="5"
                          markerWidth="7"
                          markerHeight="7"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 0 L 10 5 L 0 10 z"></path>
                        </marker>
                        <marker
                          id="bcn-gantt-arrow-in"
                          viewBox="0 0 10 10"
                          refX="8"
                          refY="5"
                          markerWidth="7"
                          markerHeight="7"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 0 L 10 5 L 0 10 z"></path>
                        </marker>
                      </defs>
                    </svg>
                    <div
                      class="bcn-gantt__row is-program"
                      data-coa="science-plan"
                      data-kind="program"
                      data-depth="0"
                      data-parent=""
                      data-has-children="1"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 0">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse Covered Fish Species Monitoring &amp; Science Plan"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="science-plan — Covered Fish Species Monitoring &amp; Science Plan"
                          aria-label="Open science-plan Covered Fish Species Monitoring &amp; Science Plan"
                        >
                          <span class="bcn-gantt__coa">science-plan</span>
                          <span class="bcn-gantt__name"
                            >Covered Fish Species Monitoring &amp; Science Plan</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$51.31M planned · 36 studies">
                          $51.31M <span class="bcn-gantt__rollup-count">· 36</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <span
                          class="bcn-gantt__summary"
                          data-bar-coa="science-plan"
                          style="left: 1.3%; width: 95.62%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row is-program"
                      data-coa="10.19"
                      data-kind="program"
                      data-depth="1"
                      data-parent="science-plan"
                      data-has-children="1"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 1">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse Fish Migration, Survival &amp; Predation Studies"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.19 — Fish Migration, Survival &amp; Predation Studies"
                          aria-label="Open 10.19 Fish Migration, Survival &amp; Predation Studies"
                        >
                          <span class="bcn-gantt__coa">10.19</span>
                          <span class="bcn-gantt__name"
                            >Fish Migration, Survival &amp; Predation Studies</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$8.90M planned · 3 studies">
                          $8.90M <span class="bcn-gantt__rollup-count">· 3</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <span
                          class="bcn-gantt__summary"
                          data-bar-coa="10.19"
                          style="left: 6.56%; width: 90.36%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.19.1"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.19"
                      data-has-children="0"
                      data-informs="10.19.2|10.19.3|10.21.5|10.21.2|10.21.7|10.18.2|10.21.10"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.19.1 — Migration and Survival Study"
                          aria-label="Open 10.19.1 Migration and Survival Study"
                        >
                          <span class="bcn-gantt__coa">10.19.1</span>
                          <span class="bcn-gantt__name">Migration and Survival Study</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$4.30M planned · 1 study">
                          $4.30M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.19.1"
                          style="left: 6.56%; width: 37.72%; --_c: #e3c14d"
                          title="10.19.1 — Migration and Survival Study · In Agency Review"
                          aria-label="Open 10.19.1 Migration and Survival Study"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.19.2"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.19"
                      data-has-children="0"
                      data-informs="10.19.1|10.19.3|10.21.2|10.21.6|10.18.2|10.21.10"
                      data-informedby="10.20.1|10.19.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.19.2 — Predation Study"
                          aria-label="Open 10.19.2 Predation Study"
                        >
                          <span class="bcn-gantt__coa">10.19.2</span>
                          <span class="bcn-gantt__name">Predation Study</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$2.40M planned · 1 study">
                          $2.40M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.19.2"
                          style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                          title="10.19.2 — Predation Study · In Agency Review"
                          aria-label="Open 10.19.2 Predation Study"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.19.3"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.19"
                      data-has-children="0"
                      data-informs="10.19.1|10.19.2|10.21.5|10.21.2|10.18.2|10.21.10"
                      data-informedby="10.20.1|10.19.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.19.3 — Abundance and Distribution Study"
                          aria-label="Open 10.19.3 Abundance and Distribution Study"
                        >
                          <span class="bcn-gantt__coa">10.19.3</span>
                          <span class="bcn-gantt__name">Abundance and Distribution Study</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$2.20M planned · 1 study">
                          $2.20M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.19.3"
                          style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                          title="10.19.3 — Abundance and Distribution Study · In Agency Review"
                          aria-label="Open 10.19.3 Abundance and Distribution Study"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row is-program"
                      data-coa="10.20"
                      data-kind="program"
                      data-depth="1"
                      data-parent="science-plan"
                      data-has-children="1"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 1">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse Water Quality &amp; Monitoring Infrastructure"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.20 — Water Quality &amp; Monitoring Infrastructure"
                          aria-label="Open 10.20 Water Quality &amp; Monitoring Infrastructure"
                        >
                          <span class="bcn-gantt__coa">10.20</span>
                          <span class="bcn-gantt__name"
                            >Water Quality &amp; Monitoring Infrastructure</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$3.01M planned · 5 studies">
                          $3.01M <span class="bcn-gantt__rollup-count">· 5</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <span
                          class="bcn-gantt__summary"
                          data-bar-coa="10.20"
                          style="left: 5.26%; width: 91.66%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.20.1"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.20"
                      data-has-children="0"
                      data-informs="10.19.1|10.19.2|10.19.3|10.20.2|10.20.3|10.20.4|10.20.5|10.21.1|10.21.2|10.21.3|10.21.4|10.21.5|10.21.6|10.21.7|10.21.8|10.21.9|10.21.10|10.18.2"
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.20.1 — Installation of New Real-time Monitoring Station"
                          aria-label="Open 10.20.1 Installation of New Real-time Monitoring Station"
                        >
                          <span class="bcn-gantt__coa">10.20.1</span>
                          <span class="bcn-gantt__name"
                            >Installation of New Real-time Monitoring Station</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$480K planned · 1 study">
                          $480K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.20.1"
                          style="left: 5.26%; width: 15.79%; --_c: #1a9850"
                          title="10.20.1 — Installation of New Real-time Monitoring Station · Approved"
                          aria-label="Open 10.20.1 Installation of New Real-time Monitoring Station"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.20.2"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.20"
                      data-has-children="0"
                      data-informs="10.18.2|10.21.10"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.20.2 — Sediment and Turbidity Monitoring"
                          aria-label="Open 10.20.2 Sediment and Turbidity Monitoring"
                        >
                          <span class="bcn-gantt__coa">10.20.2</span>
                          <span class="bcn-gantt__name">Sediment and Turbidity Monitoring</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.10M planned · 1 study">
                          $1.10M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.20.2"
                          style="left: 6.56%; width: 90.36%; --_c: #fc8d59"
                          title="10.20.2 — Sediment and Turbidity Monitoring · Submitted to CDFW"
                          aria-label="Open 10.20.2 Sediment and Turbidity Monitoring"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.20.3"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.20"
                      data-has-children="0"
                      data-informs="10.21.2|10.18.2|10.21.10"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.20.3 — Harmful Algal Bloom Monitoring"
                          aria-label="Open 10.20.3 Harmful Algal Bloom Monitoring"
                        >
                          <span class="bcn-gantt__coa">10.20.3</span>
                          <span class="bcn-gantt__name">Harmful Algal Bloom Monitoring</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$420K planned · 1 study">
                          $420K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.20.3"
                          style="left: 63.16%; width: 33.76%; --_c: #e3c14d"
                          title="10.20.3 — Harmful Algal Bloom Monitoring · In Agency Review"
                          aria-label="Open 10.20.3 Harmful Algal Bloom Monitoring"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.20.4"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.20"
                      data-has-children="0"
                      data-informs="10.21.2|10.18.2|10.21.10"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.20.4 — Selenium Bioaccumulation Monitoring"
                          aria-label="Open 10.20.4 Selenium Bioaccumulation Monitoring"
                        >
                          <span class="bcn-gantt__coa">10.20.4</span>
                          <span class="bcn-gantt__name">Selenium Bioaccumulation Monitoring</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$560K planned · 1 study">
                          $560K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.20.4"
                          style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                          title="10.20.4 — Selenium Bioaccumulation Monitoring · In Agency Review"
                          aria-label="Open 10.20.4 Selenium Bioaccumulation Monitoring"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.20.5"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.20"
                      data-has-children="0"
                      data-informs="10.21.2|10.18.2|10.21.10"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.20.5 — Mercury Monitoring Study"
                          aria-label="Open 10.20.5 Mercury Monitoring Study"
                        >
                          <span class="bcn-gantt__coa">10.20.5</span>
                          <span class="bcn-gantt__name">Mercury Monitoring Study</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$450K planned · 1 study">
                          $450K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.20.5"
                          style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                          title="10.20.5 — Mercury Monitoring Study · In Agency Review"
                          aria-label="Open 10.20.5 Mercury Monitoring Study"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row is-program"
                      data-coa="10.21"
                      data-kind="program"
                      data-depth="1"
                      data-parent="science-plan"
                      data-has-children="1"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 1">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse Special Studies &amp; Life-Cycle Models"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21 — Special Studies &amp; Life-Cycle Models"
                          aria-label="Open 10.21 Special Studies &amp; Life-Cycle Models"
                        >
                          <span class="bcn-gantt__coa">10.21</span>
                          <span class="bcn-gantt__name"
                            >Special Studies &amp; Life-Cycle Models</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$18.80M planned · 11 studies">
                          $18.80M <span class="bcn-gantt__rollup-count">· 11</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <span
                          class="bcn-gantt__summary"
                          data-bar-coa="10.21"
                          style="left: 6.56%; width: 90.36%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.18.3"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.21.10|10.18.2"
                      data-informedby="10.18|10.19|10.20|10.21|10.21.10"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.18.3 — Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations"
                          aria-label="Open 10.18.3 Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations"
                        >
                          <span class="bcn-gantt__coa">10.18.3</span>
                          <span class="bcn-gantt__name"
                            >Evaluate Alternative Operating Criteria for the Ascending or Descending
                            Limb of the Hydrograph During Real-time Operations</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$2.10M planned · 1 study">
                          $2.10M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.18.3"
                          style="left: 10.52%; width: 63.16%; --_c: #e3c14d"
                          title="10.18.3 — Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations · In Agency Review"
                          aria-label="Open 10.18.3 Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.1"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.21.7|10.21.10"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.1 — Hydrodynamics at Georgiana Slough Monitoring"
                          aria-label="Open 10.21.1 Hydrodynamics at Georgiana Slough Monitoring"
                        >
                          <span class="bcn-gantt__coa">10.21.1</span>
                          <span class="bcn-gantt__name"
                            >Hydrodynamics at Georgiana Slough Monitoring</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.30M planned · 1 study">
                          $1.30M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.1"
                          style="left: 6.56%; width: 90.36%; --_c: #d73027"
                          title="10.21.1 — Hydrodynamics at Georgiana Slough Monitoring · Draft"
                          aria-label="Open 10.21.1 Hydrodynamics at Georgiana Slough Monitoring"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.2"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="12.6.5|10.18.2|10.21.10"
                      data-informedby="10.20.1|10.19.1|10.19.2|10.19.3|10.21.5|10.21.3|10.21.4|10.20.3|10.20.4"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.2 — Covered Fish Species Life Cycle Models"
                          aria-label="Open 10.21.2 Covered Fish Species Life Cycle Models"
                        >
                          <span class="bcn-gantt__coa">10.21.2</span>
                          <span class="bcn-gantt__name"
                            >Covered Fish Species Life Cycle Models</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$2.60M planned · 1 study">
                          $2.60M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.2"
                          style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                          title="10.21.2 — Covered Fish Species Life Cycle Models · In Agency Review"
                          aria-label="Open 10.21.2 Covered Fish Species Life Cycle Models"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.3"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.18.2|10.21.10|10.21.2"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.3 — Food Web and Larval Fishes Entrainment Study"
                          aria-label="Open 10.21.3 Food Web and Larval Fishes Entrainment Study"
                        >
                          <span class="bcn-gantt__coa">10.21.3</span>
                          <span class="bcn-gantt__name"
                            >Food Web and Larval Fishes Entrainment Study</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.40M planned · 1 study">
                          $1.40M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.3"
                          style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                          title="10.21.3 — Food Web and Larval Fishes Entrainment Study · In Agency Review"
                          aria-label="Open 10.21.3 Food Web and Larval Fishes Entrainment Study"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.4"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.18.2|10.21.2|10.21.10"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.4 — Tidal Wetland Restoration Efficacy Study"
                          aria-label="Open 10.21.4 Tidal Wetland Restoration Efficacy Study"
                        >
                          <span class="bcn-gantt__coa">10.21.4</span>
                          <span class="bcn-gantt__name"
                            >Tidal Wetland Restoration Efficacy Study</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.60M planned · 1 study">
                          $1.60M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.4"
                          style="left: 42.1%; width: 54.81%; --_c: #d73027"
                          title="10.21.4 — Tidal Wetland Restoration Efficacy Study · Draft"
                          aria-label="Open 10.21.4 Tidal Wetland Restoration Efficacy Study"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.5"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.18.2|10.21.10|10.21.2"
                      data-informedby="10.20.1|10.19.3"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.5 — Delta Smelt and Longfin Smelt Spawning Habitat Study"
                          aria-label="Open 10.21.5 Delta Smelt and Longfin Smelt Spawning Habitat Study"
                        >
                          <span class="bcn-gantt__coa">10.21.5</span>
                          <span class="bcn-gantt__name"
                            >Delta Smelt and Longfin Smelt Spawning Habitat Study</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.20M planned · 1 study">
                          $1.20M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.5"
                          style="left: 36.84%; width: 60.07%; --_c: #e3c14d"
                          title="10.21.5 — Delta Smelt and Longfin Smelt Spawning Habitat Study · In Agency Review"
                          aria-label="Open 10.21.5 Delta Smelt and Longfin Smelt Spawning Habitat Study"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.6"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.18.2|10.21.10"
                      data-informedby="10.19.2|10.19.1|10.19.3|10.18.2|10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.6 — Refugia Design and Field Study"
                          aria-label="Open 10.21.6 Refugia Design and Field Study"
                        >
                          <span class="bcn-gantt__coa">10.21.6</span>
                          <span class="bcn-gantt__name">Refugia Design and Field Study</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.90M planned · 1 study">
                          $1.90M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.6"
                          style="left: 6.56%; width: 82.91%; --_c: #d73027"
                          title="10.21.6 — Refugia Design and Field Study · Draft"
                          aria-label="Open 10.21.6 Refugia Design and Field Study"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.7"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.21.10|10.18.2|10.21.1|10.19.1"
                      data-informedby="10.20.1|10.21.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.7 — Flow Reversal and Routing Minimization"
                          aria-label="Open 10.21.7 Flow Reversal and Routing Minimization"
                        >
                          <span class="bcn-gantt__coa">10.21.7</span>
                          <span class="bcn-gantt__name"
                            >Flow Reversal and Routing Minimization</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.10M planned · 1 study">
                          $1.10M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.7"
                          style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                          title="10.21.7 — Flow Reversal and Routing Minimization · In Agency Review"
                          aria-label="Open 10.21.7 Flow Reversal and Routing Minimization"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.8"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.21.10|10.18.2"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.8 — Joint Operations Study Plan"
                          aria-label="Open 10.21.8 Joint Operations Study Plan"
                        >
                          <span class="bcn-gantt__coa">10.21.8</span>
                          <span class="bcn-gantt__name">Joint Operations Study Plan</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$900K planned · 1 study">
                          $900K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.8"
                          style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                          title="10.21.8 — Joint Operations Study Plan · In Agency Review"
                          aria-label="Open 10.21.8 Joint Operations Study Plan"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.9"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.21.10|10.18.2"
                      data-informedby="10.20.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.9 — Modeling Needed to Implement Real-time Operations"
                          aria-label="Open 10.21.9 Modeling Needed to Implement Real-time Operations"
                        >
                          <span class="bcn-gantt__coa">10.21.9</span>
                          <span class="bcn-gantt__name"
                            >Modeling Needed to Implement Real-time Operations</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.50M planned · 1 study">
                          $1.50M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.9"
                          style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                          title="10.21.9 — Modeling Needed to Implement Real-time Operations · In Agency Review"
                          aria-label="Open 10.21.9 Modeling Needed to Implement Real-time Operations"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.21.10"
                      data-kind="study"
                      data-depth="2"
                      data-parent="10.21"
                      data-has-children="0"
                      data-informs="10.18.3|10.18.2"
                      data-informedby="10.18|10.19|10.20|10.21"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.21.10 — Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph"
                          aria-label="Open 10.21.10 Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph"
                        >
                          <span class="bcn-gantt__coa">10.21.10</span>
                          <span class="bcn-gantt__name"
                            >Studies to Evaluate Differences Between Ascending and Descending Limbs
                            of the Hydrograph</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$2.30M planned · 1 study">
                          $2.30M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.21.10"
                          style="left: 6.56%; width: 10.09%; --_c: #1a9850"
                          title="10.21.10 — Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph · Approved"
                          aria-label="Open 10.21.10 Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row is-program"
                      data-coa="preconstruction"
                      data-kind="program"
                      data-depth="1"
                      data-parent="science-plan"
                      data-has-children="1"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 1">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse Preconstruction Engineering Studies"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="preconstruction — Preconstruction Engineering Studies"
                          aria-label="Open preconstruction Preconstruction Engineering Studies"
                        >
                          <span class="bcn-gantt__coa">preconstruction</span>
                          <span class="bcn-gantt__name">Preconstruction Engineering Studies</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$13.40M planned · 8 studies">
                          $13.40M <span class="bcn-gantt__rollup-count">· 8</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <span
                          class="bcn-gantt__summary"
                          data-bar-coa="preconstruction"
                          style="left: 1.3%; width: 37.72%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.23"
                      data-kind="study"
                      data-depth="2"
                      data-parent="preconstruction"
                      data-has-children="0"
                      data-informs="10.24.2"
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.23 — Sacramento River Bathymetric Surveys"
                          aria-label="Open 10.23 Sacramento River Bathymetric Surveys"
                        >
                          <span class="bcn-gantt__coa">10.23</span>
                          <span class="bcn-gantt__name">Sacramento River Bathymetric Surveys</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$700K planned · 1 study">
                          $700K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.23"
                          style="left: 1.3%; width: 37.72%; --_c: #1a9850"
                          title="10.23 — Sacramento River Bathymetric Surveys · Approved"
                          aria-label="Open 10.23 Sacramento River Bathymetric Surveys"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row is-program"
                      data-coa="10.24"
                      data-kind="program"
                      data-depth="2"
                      data-parent="preconstruction"
                      data-has-children="1"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse River &amp; Sediment Models"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.24 — River &amp; Sediment Models"
                          aria-label="Open 10.24 River &amp; Sediment Models"
                        >
                          <span class="bcn-gantt__coa">10.24</span>
                          <span class="bcn-gantt__name">River &amp; Sediment Models</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$2.30M planned · 2 studies">
                          $2.30M <span class="bcn-gantt__rollup-count">· 2</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <span
                          class="bcn-gantt__summary"
                          data-bar-coa="10.24"
                          style="left: 1.3%; width: 32.46%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.24.1"
                      data-kind="study"
                      data-depth="3"
                      data-parent="10.24"
                      data-has-children="0"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 3">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.24.1 — Sacramento River Hydraulic Model"
                          aria-label="Open 10.24.1 Sacramento River Hydraulic Model"
                        >
                          <span class="bcn-gantt__coa">10.24.1</span>
                          <span class="bcn-gantt__name">Sacramento River Hydraulic Model</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.20M planned · 1 study">
                          $1.20M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.24.1"
                          style="left: 1.3%; width: 23.69%; --_c: #1a9850"
                          title="10.24.1 — Sacramento River Hydraulic Model · Approved"
                          aria-label="Open 10.24.1 Sacramento River Hydraulic Model"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.24.2"
                      data-kind="study"
                      data-depth="3"
                      data-parent="10.24"
                      data-has-children="0"
                      data-informs="10.23|10.29"
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 3">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.24.2 — Sediment Transport Model"
                          aria-label="Open 10.24.2 Sediment Transport Model"
                        >
                          <span class="bcn-gantt__coa">10.24.2</span>
                          <span class="bcn-gantt__name">Sediment Transport Model</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.10M planned · 1 study">
                          $1.10M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.24.2"
                          style="left: 1.3%; width: 32.46%; --_c: #1a9850"
                          title="10.24.2 — Sediment Transport Model · Approved"
                          aria-label="Open 10.24.2 Sediment Transport Model"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row is-program"
                      data-coa="10.25"
                      data-kind="program"
                      data-depth="2"
                      data-parent="preconstruction"
                      data-has-children="1"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse Intake Hydraulic Models"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.25 — Intake Hydraulic Models"
                          aria-label="Open 10.25 Intake Hydraulic Models"
                        >
                          <span class="bcn-gantt__coa">10.25</span>
                          <span class="bcn-gantt__name">Intake Hydraulic Models</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$6.90M planned · 4 studies">
                          $6.90M <span class="bcn-gantt__rollup-count">· 4</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <span
                          class="bcn-gantt__summary"
                          data-bar-coa="10.25"
                          style="left: 1.3%; width: 30.27%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.25.1"
                      data-kind="study"
                      data-depth="3"
                      data-parent="10.25"
                      data-has-children="0"
                      data-informs="10.25.2"
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 3">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.25.1 — Intake Structure Hydraulic Model – Mathematical"
                          aria-label="Open 10.25.1 Intake Structure Hydraulic Model – Mathematical"
                        >
                          <span class="bcn-gantt__coa">10.25.1</span>
                          <span class="bcn-gantt__name"
                            >Intake Structure Hydraulic Model – Mathematical</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$900K planned · 1 study">
                          $900K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.25.1"
                          style="left: 1.3%; width: 23.69%; --_c: #1a9850"
                          title="10.25.1 — Intake Structure Hydraulic Model – Mathematical · Approved"
                          aria-label="Open 10.25.1 Intake Structure Hydraulic Model – Mathematical"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.25.2"
                      data-kind="study"
                      data-depth="3"
                      data-parent="10.25"
                      data-has-children="0"
                      data-informs=""
                      data-informedby="10.25.1"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 3">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.25.2 — Intake Structure Hydraulic Modeling – Physical"
                          aria-label="Open 10.25.2 Intake Structure Hydraulic Modeling – Physical"
                        >
                          <span class="bcn-gantt__coa">10.25.2</span>
                          <span class="bcn-gantt__name"
                            >Intake Structure Hydraulic Modeling – Physical</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$2.80M planned · 1 study">
                          $2.80M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.25.2"
                          style="left: 21.05%; width: 10.52%; --_c: #fc8d59"
                          title="10.25.2 — Intake Structure Hydraulic Modeling – Physical · Submitted to CDFW"
                          aria-label="Open 10.25.2 Intake Structure Hydraulic Modeling – Physical"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.25.3"
                      data-kind="study"
                      data-depth="3"
                      data-parent="10.25"
                      data-has-children="0"
                      data-informs="10.25.4"
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 3">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.25.3 — Intake Tee Screen Hydraulic Model – Mathematical"
                          aria-label="Open 10.25.3 Intake Tee Screen Hydraulic Model – Mathematical"
                        >
                          <span class="bcn-gantt__coa">10.25.3</span>
                          <span class="bcn-gantt__name"
                            >Intake Tee Screen Hydraulic Model – Mathematical</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$800K planned · 1 study">
                          $800K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.25.3"
                          style="left: 21.05%; width: 10.52%; --_c: #fc8d59"
                          title="10.25.3 — Intake Tee Screen Hydraulic Model – Mathematical · Submitted to CDFW"
                          aria-label="Open 10.25.3 Intake Tee Screen Hydraulic Model – Mathematical"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.25.4"
                      data-kind="study"
                      data-depth="3"
                      data-parent="10.25"
                      data-has-children="0"
                      data-informs=""
                      data-informedby="10.25.3"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 3">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.25.4 — Intake Tee Screen Hydraulic Model – Physical"
                          aria-label="Open 10.25.4 Intake Tee Screen Hydraulic Model – Physical"
                        >
                          <span class="bcn-gantt__coa">10.25.4</span>
                          <span class="bcn-gantt__name"
                            >Intake Tee Screen Hydraulic Model – Physical</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$2.40M planned · 1 study">
                          $2.40M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.25.4"
                          style="left: 21.05%; width: 10.52%; --_c: #d73027"
                          title="10.25.4 — Intake Tee Screen Hydraulic Model – Physical · Draft"
                          aria-label="Open 10.25.4 Intake Tee Screen Hydraulic Model – Physical"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.26"
                      data-kind="study"
                      data-depth="2"
                      data-parent="preconstruction"
                      data-has-children="0"
                      data-informs="10.18.2"
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.26 — Incorporation of Fish Guidance System into the North Delta Intake Structures"
                          aria-label="Open 10.26 Incorporation of Fish Guidance System into the North Delta Intake Structures"
                        >
                          <span class="bcn-gantt__coa">10.26</span>
                          <span class="bcn-gantt__name"
                            >Incorporation of Fish Guidance System into the North Delta Intake
                            Structures</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$3.50M planned · 1 study">
                          $3.50M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.26"
                          style="left: 1.3%; width: 25.87%; --_c: #91cf60"
                          title="10.26 — Incorporation of Fish Guidance System into the North Delta Intake Structures · Revising"
                          aria-label="Open 10.26 Incorporation of Fish Guidance System into the North Delta Intake Structures"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row is-program"
                      data-coa="operations"
                      data-kind="program"
                      data-depth="1"
                      data-parent="science-plan"
                      data-has-children="1"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 1">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse Operations Monitoring"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="operations — Operations Monitoring"
                          aria-label="Open operations Operations Monitoring"
                        >
                          <span class="bcn-gantt__coa">operations</span>
                          <span class="bcn-gantt__name">Operations Monitoring</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$4.90M planned · 6 studies">
                          $4.90M <span class="bcn-gantt__rollup-count">· 6</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <span
                          class="bcn-gantt__summary"
                          data-bar-coa="operations"
                          style="left: 86.38%; width: 10.53%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.27"
                      data-kind="study"
                      data-depth="2"
                      data-parent="operations"
                      data-has-children="1"
                      data-informs="10.18.2"
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse Hydraulic Testing for Velocity Requirements"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.27 — Hydraulic Testing for Velocity Requirements"
                          aria-label="Open 10.27 Hydraulic Testing for Velocity Requirements"
                        >
                          <span class="bcn-gantt__coa">10.27</span>
                          <span class="bcn-gantt__name"
                            >Hydraulic Testing for Velocity Requirements</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$2.70M planned · 4 studies">
                          $2.70M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.27"
                          style="left: 86.38%; width: 3.08%; --_c: #d73027"
                          title="10.27 — Hydraulic Testing for Velocity Requirements · Draft"
                          aria-label="Open 10.27 Hydraulic Testing for Velocity Requirements"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.27.1"
                      data-kind="study"
                      data-depth="3"
                      data-parent="10.27"
                      data-has-children="0"
                      data-informs="10.27"
                      data-informedby="10.27"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 3">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.27.1 — Hydraulic Testing Procedures"
                          aria-label="Open 10.27.1 Hydraulic Testing Procedures"
                        >
                          <span class="bcn-gantt__coa">10.27.1</span>
                          <span class="bcn-gantt__name">Hydraulic Testing Procedures</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$600K planned · 1 study">
                          $600K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.27.1"
                          style="left: 89.47%; width: 2.18%; --_c: #d73027"
                          title="10.27.1 — Hydraulic Testing Procedures · Draft"
                          aria-label="Open 10.27.1 Hydraulic Testing Procedures"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.27.2"
                      data-kind="study"
                      data-depth="3"
                      data-parent="10.27"
                      data-has-children="0"
                      data-informs="10.27"
                      data-informedby="10.27"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 3">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.27.2 — Approach Velocity Testing Compliance"
                          aria-label="Open 10.27.2 Approach Velocity Testing Compliance"
                        >
                          <span class="bcn-gantt__coa">10.27.2</span>
                          <span class="bcn-gantt__name">Approach Velocity Testing Compliance</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$700K planned · 1 study">
                          $700K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.27.2"
                          style="left: 89.47%; width: 7.45%; --_c: #d73027"
                          title="10.27.2 — Approach Velocity Testing Compliance · Draft"
                          aria-label="Open 10.27.2 Approach Velocity Testing Compliance"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.27.3"
                      data-kind="study"
                      data-depth="3"
                      data-parent="10.27"
                      data-has-children="0"
                      data-informs="10.27"
                      data-informedby="10.27"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 3">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.27.3 — Hydraulic Testing Reports"
                          aria-label="Open 10.27.3 Hydraulic Testing Reports"
                        >
                          <span class="bcn-gantt__coa">10.27.3</span>
                          <span class="bcn-gantt__name">Hydraulic Testing Reports</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$400K planned · 1 study">
                          $400K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.27.3"
                          style="left: 89.47%; width: 7.45%; --_c: #d73027"
                          title="10.27.3 — Hydraulic Testing Reports · Draft"
                          aria-label="Open 10.27.3 Hydraulic Testing Reports"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.29"
                      data-kind="study"
                      data-depth="2"
                      data-parent="operations"
                      data-has-children="0"
                      data-informs="10.28|10.24.2"
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.29 — Sediment Management"
                          aria-label="Open 10.29 Sediment Management"
                        >
                          <span class="bcn-gantt__coa">10.29</span>
                          <span class="bcn-gantt__name">Sediment Management</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$900K planned · 1 study">
                          $900K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.29"
                          style="left: 89.47%; width: 7.45%; --_c: #d73027"
                          title="10.29 — Sediment Management · Draft"
                          aria-label="Open 10.29 Sediment Management"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="10.3"
                      data-kind="study"
                      data-depth="2"
                      data-parent="operations"
                      data-has-children="0"
                      data-informs="10.27|10.28"
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="10.3 — Screen Impingement Study"
                          aria-label="Open 10.3 Screen Impingement Study"
                        >
                          <span class="bcn-gantt__coa">10.3</span>
                          <span class="bcn-gantt__name">Screen Impingement Study</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.30M planned · 1 study">
                          $1.30M
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="10.3"
                          style="left: 86.38%; width: 3.08%; --_c: #d73027"
                          title="10.3 — Screen Impingement Study · Draft"
                          aria-label="Open 10.3 Screen Impingement Study"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row is-program"
                      data-coa="operations-measures"
                      data-kind="program"
                      data-depth="1"
                      data-parent="science-plan"
                      data-has-children="1"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 1">
                        <button
                          type="button"
                          class="bcn-gantt__caret"
                          aria-expanded="true"
                          aria-label="Collapse Operations Covered-Species Measures"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="operations-measures — Operations Covered-Species Measures"
                          aria-label="Open operations-measures Operations Covered-Species Measures"
                        >
                          <span class="bcn-gantt__coa">operations-measures</span>
                          <span class="bcn-gantt__name">Operations Covered-Species Measures</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$1.70M planned · 3 studies">
                          $1.70M <span class="bcn-gantt__rollup-count">· 3</span>
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <span
                          class="bcn-gantt__summary"
                          data-bar-coa="operations-measures"
                          style="left: 78.95%; width: 17.97%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="11.1109"
                      data-kind="study"
                      data-depth="2"
                      data-parent="operations-measures"
                      data-has-children="0"
                      data-informs="10.21.7"
                      data-informedby="10.20.1|10.27|10.28"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="11.1109 — Velocity Requirements at North Delta Intakes"
                          aria-label="Open 11.1109 Velocity Requirements at North Delta Intakes"
                        >
                          <span class="bcn-gantt__coa">11.1109</span>
                          <span class="bcn-gantt__name"
                            >Velocity Requirements at North Delta Intakes</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$500K planned · 1 study">
                          $500K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="11.1109"
                          style="left: 89.47%; width: 7.45%; --_c: #d73027"
                          title="11.1109 — Velocity Requirements at North Delta Intakes · Draft"
                          aria-label="Open 11.1109 Velocity Requirements at North Delta Intakes"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="11.109.1"
                      data-kind="study"
                      data-depth="2"
                      data-parent="operations-measures"
                      data-has-children="0"
                      data-informs=""
                      data-informedby=""
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="11.109.1 — No Diversions Without North Delta Intake Screens"
                          aria-label="Open 11.109.1 No Diversions Without North Delta Intake Screens"
                        >
                          <span class="bcn-gantt__coa">11.109.1</span>
                          <span class="bcn-gantt__name"
                            >No Diversions Without North Delta Intake Screens</span
                          >
                        </button>
                        <span class="bcn-gantt__rollup" title="$400K planned · 1 study">
                          $400K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="11.109.1"
                          style="left: 89.47%; width: 7.45%; --_c: #d73027"
                          title="11.109.1 — No Diversions Without North Delta Intake Screens · Draft"
                          aria-label="Open 11.109.1 No Diversions Without North Delta Intake Screens"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-gantt__row"
                      data-coa="12.6.5"
                      data-kind="study"
                      data-depth="2"
                      data-parent="operations-measures"
                      data-has-children="0"
                      data-informs=""
                      data-informedby="10.21.2"
                    >
                      <div class="bcn-gantt__label" style="--_indent: 2">
                        <span class="bcn-gantt__caret-spacer"></span>
                        <button
                          type="button"
                          class="bcn-gantt__name-btn"
                          title="12.6.5 — Spring Longfin Smelt Distribution"
                          aria-label="Open 12.6.5 Spring Longfin Smelt Distribution"
                        >
                          <span class="bcn-gantt__coa">12.6.5</span>
                          <span class="bcn-gantt__name">Spring Longfin Smelt Distribution</span>
                        </button>
                        <span class="bcn-gantt__rollup" title="$800K planned · 1 study">
                          $800K
                        </span>
                      </div>
                      <div class="bcn-gantt__plot">
                        <span
                          class="bcn-gantt__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase1-ops"
                          style="left: 89.47%; width: 5.26%"
                        ></span
                        ><span
                          class="bcn-gantt__band"
                          data-phase="phase2-ops"
                          style="left: 94.74%; width: 5.26%"
                        ></span>
                        <span class="bcn-gantt__grid" style="left: 5.26%"></span
                        ><span class="bcn-gantt__grid" style="left: 10.53%"></span
                        ><span class="bcn-gantt__grid" style="left: 15.79%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 21.05%"></span
                        ><span class="bcn-gantt__grid" style="left: 26.32%"></span
                        ><span class="bcn-gantt__grid" style="left: 31.58%"></span
                        ><span class="bcn-gantt__grid" style="left: 36.84%"></span
                        ><span class="bcn-gantt__grid" style="left: 42.11%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 47.37%"></span
                        ><span class="bcn-gantt__grid" style="left: 52.63%"></span
                        ><span class="bcn-gantt__grid" style="left: 57.89%"></span
                        ><span class="bcn-gantt__grid" style="left: 63.16%"></span
                        ><span class="bcn-gantt__grid" style="left: 68.42%"></span
                        ><span class="bcn-gantt__grid is-five" style="left: 73.68%"></span
                        ><span class="bcn-gantt__grid" style="left: 78.95%"></span
                        ><span class="bcn-gantt__grid" style="left: 84.21%"></span
                        ><span class="bcn-gantt__grid" style="left: 89.47%"></span
                        ><span class="bcn-gantt__grid" style="left: 94.74%"></span>
                        <span class="bcn-gantt__ms-line" style="left: 26.31%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 31.57%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 44.28%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 89.47%"></span
                        ><span class="bcn-gantt__ms-line" style="left: 94.73%"></span>
                        <span class="bcn-gantt__today" style="left: 2.38%"></span>
                        <button
                          type="button"
                          class="bcn-gantt__bar"
                          data-bar-coa="12.6.5"
                          style="left: 78.95%; width: 10.52%; --_c: #d73027"
                          title="12.6.5 — Spring Longfin Smelt Distribution · Draft"
                          aria-label="Open 12.6.5 Spring Longfin Smelt Distribution"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <script type="module">
              const k = document.querySelectorAll(".bcn-gantt");
              k.forEach((c) => {
                const d = c.querySelector(".bcn-gantt__body"),
                  u = c.querySelector(".bcn-gantt__edges"),
                  v = c.querySelector(".bcn-gantt__scroll"),
                  g = [...c.querySelectorAll(".bcn-gantt__row")],
                  i = new Map(g.map((e) => [e.dataset.coa ?? "", e])),
                  f = new Set();
                let l = "";
                const A = (e) => {
                  let t = e.dataset.parent ?? "";
                  for (; t; ) {
                    if (f.has(t)) return !1;
                    t = i.get(t)?.dataset.parent ?? "";
                  }
                  return !0;
                };
                function $() {
                  g.forEach((e) => (e.hidden = !A(e)));
                }
                function _(e) {
                  let t = i.get(e) ?? null;
                  for (; t; ) {
                    if (!t.hidden) return t.querySelector("[data-bar-coa]");
                    t = i.get(t.dataset.parent ?? "") ?? null;
                  }
                  return null;
                }
                function B() {
                  u.querySelectorAll(".bcn-gantt__edge").forEach((e) => e.remove());
                }
                function m(e, t, r) {
                  const a = d.getBoundingClientRect(),
                    s = e.getBoundingClientRect(),
                    n = t.getBoundingClientRect(),
                    o = (r === "out" ? s.right : s.left) - a.left,
                    E = s.top + s.height / 2 - a.top,
                    h = (r === "out" ? n.left : n.right) - a.left,
                    S = n.top + n.height / 2 - a.top,
                    w = Math.max(28, Math.abs(h - o) * 0.4),
                    C = r === "out" ? o + w : o - w,
                    L = r === "out" ? h - w : h + w,
                    p = document.createElementNS("http://www.w3.org/2000/svg", "path");
                  (p.setAttribute("d", `M ${o} ${E} C ${C} ${E}, ${L} ${S}, ${h} ${S}`),
                    p.setAttribute("class", `bcn-gantt__edge is-${r}`),
                    p.setAttribute(
                      "marker-end",
                      r === "out" ? "url(#bcn-gantt-arrow-out)" : "url(#bcn-gantt-arrow-in)",
                    ),
                    u.appendChild(p));
                }
                function b() {
                  if ((B(), g.forEach((n) => n.classList.remove("is-linked")), !l)) return;
                  const e = i.get(l);
                  if (!e || e.dataset.kind !== "study") return;
                  const t = _(l);
                  if (!t) return;
                  (u.setAttribute("viewBox", `0 0 ${d.scrollWidth} ${d.scrollHeight}`),
                    u.setAttribute("width", String(d.scrollWidth)),
                    u.setAttribute("height", String(d.scrollHeight)));
                  const r = (e.dataset.informs ?? "").split("|").filter(Boolean),
                    a = (e.dataset.informedby ?? "").split("|").filter(Boolean),
                    s = new Set();
                  (r.forEach((n) => {
                    const o = _(n);
                    o &&
                      o !== t &&
                      !s.has("o" + n) &&
                      (s.add("o" + n), m(t, o, "out"), i.get(n)?.classList.add("is-linked"));
                  }),
                    a.forEach((n) => {
                      const o = _(n);
                      o &&
                        o !== t &&
                        !s.has("i" + n) &&
                        (s.add("i" + n), m(o, t, "in"), i.get(n)?.classList.add("is-linked"));
                    }));
                }
                function q(e) {
                  ((l = e),
                    g.forEach((t) => t.classList.toggle("is-selected", t.dataset.coa === e)),
                    b(),
                    c.dispatchEvent(
                      new CustomEvent("gantt-node-select", { detail: { coa: e }, bubbles: !0 }),
                    ));
                }
                c.addEventListener("click", (e) => {
                  const t = e.target.closest(".bcn-gantt__caret");
                  if (t) {
                    const s = t.closest(".bcn-gantt__row").dataset.coa ?? "",
                      n = !f.has(s);
                    (n ? f.add(s) : f.delete(s),
                      t.setAttribute("aria-expanded", String(!n)),
                      t.classList.toggle("is-collapsed", n),
                      $(),
                      b());
                    return;
                  }
                  const r = e.target.closest(".bcn-gantt__name-btn, .bcn-gantt__bar");
                  if (r) {
                    const a = r.closest(".bcn-gantt__row");
                    q(a.dataset.coa ?? "");
                  }
                });
                let y = 0;
                (v.addEventListener("scroll", () => {
                  y ||
                    (y = requestAnimationFrame(() => {
                      ((y = 0), l && b());
                    }));
                }),
                  window.addEventListener("resize", () => {
                    l && b();
                  }));
              });
            </script>
          </section>
        </div>
      </div>
      <esa-side-dialog
        id="node-drawer"
        size="md"
        data-detail-base="/beacon-design/prototypes/fish-study/"
        style="--z-modal: 1300; --z-modal-backdrop: 1250"
        position="right"
      >
        <div slot="header" class="bcn-node-head">
          <span class="bcn-node-head__coa" id="node-coa">COA —</span>
          <span class="bcn-node-head__title" id="node-title">Select a node</span>
        </div>
        <div class="bcn-node-body">
          <section
            class="bcn-node"
            data-node-panel="science-plan"
            data-node-name="Covered Fish Species Monitoring &amp; Science Plan"
            data-node-kind="program"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Program (roll-up)</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">36</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2026–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">36</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$51.31M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2026–2044 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$600K at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$50.71M rolled up from 36 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$820K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$820K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__muted">$70K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$4.87M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$4.94M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__muted">$120K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$7.50M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$7.62M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__muted">$140K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$7.94M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$8.08M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__muted">$130K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$8.62M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$8.75M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__muted">$90K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$7.02M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$7.11M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__muted">$50K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$3.93M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$3.98M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2033</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$320K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$320K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2034</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$420K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$420K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2035</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$580K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$580K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2036</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$620K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$620K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2037</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$550K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$550K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2038</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$410K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$410K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2039</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$220K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$220K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2040</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$90K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$90K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2041</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$350K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$350K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2042</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.54M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.54M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$3.46M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$3.46M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2044</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.45M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.45M</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$600K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$50.71M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$51.31M</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.19"
            data-node-name="Fish Migration, Survival &amp; Predation Studies"
            data-node-kind="program"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Program (roll-up)</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Covered Fish Species Monitoring &amp; Science Plan</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">3</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">9</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$8.90M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$0 at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$8.90M rolled up from 3 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$990K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$990K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.78M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.78M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.98M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.98M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.98M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.98M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.38M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.38M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$790K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$790K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$0</td>
                      <td class="bcn-funding__num bcn-funding__muted">$8.90M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$8.90M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.19.1"
            data-node-name="Migration and Survival Study"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Fish Migration, Survival &amp; Predation Studies</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2034</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">6</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$4.30M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$480K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$860K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$950K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$960K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$670K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$380K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$4.30M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="36"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$4.30M of $12M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$4.30M of $12M program ceiling</span>
                        <span class="esa-progress-bar__value">36%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 36%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val"
                      >In-water construction (cofferdam + intakes)</span
                    >
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-04-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.2"
                      >10.19.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.3"
                      >10.19.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.5"
                      >10.21.5</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.7"
                      >10.21.7</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.19.2"
            data-node-name="Predation Study"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Fish Migration, Survival &amp; Predation Studies</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">2</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$2.40M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$270K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$480K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$540K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$530K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$370K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$210K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$2.40M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$2.40M of $12M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$2.40M of $12M program ceiling</span>
                        <span class="esa-progress-bar__value">20%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 20%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val"
                      >In-water construction (cofferdam + intakes)</span
                    >
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-04-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.1"
                      >10.19.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.3"
                      >10.19.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.6"
                      >10.21.6</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.1"
                      >10.19.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.19.3"
            data-node-name="Abundance and Distribution Study"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Fish Migration, Survival &amp; Predation Studies</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$2.20M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$240K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$440K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$490K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$490K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$340K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$2.20M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="18"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$2.20M of $12M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$2.20M of $12M program ceiling</span>
                        <span class="esa-progress-bar__value">18%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 18%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val"
                      >In-water construction (cofferdam + intakes)</span
                    >
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-04-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.1"
                      >10.19.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.2"
                      >10.19.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.5"
                      >10.21.5</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.1"
                      >10.19.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.20"
            data-node-name="Water Quality &amp; Monitoring Infrastructure"
            data-node-kind="program"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Program (roll-up)</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Covered Fish Species Monitoring &amp; Science Plan</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">5</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="submitted"
                style="--_chip: var(--st-submitted, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Submitted to CDFW</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$3.01M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2043 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$0 at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$3.01M rolled up from 5 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$330K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$330K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$560K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$560K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$630K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$630K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$550K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$550K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$330K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$330K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$190K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$190K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2038</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$50K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$50K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2039</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$80K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$80K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2040</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$90K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$90K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2041</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$90K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$90K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2042</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$70K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$70K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$40K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$40K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$0</td>
                      <td class="bcn-funding__num bcn-funding__muted">$3.01M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$3.01M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.20.1"
            data-node-name="Installation of New Real-time Monitoring Station"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Water Quality &amp; Monitoring Infrastructure</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2030</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="approved"
                style="--_chip: var(--st-approved, #1a9850)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Approved</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="active"
                style="--_chip: var(--st-active, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Active Fieldwork</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$480K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2030 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$100K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$140K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$150K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$90K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$480K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="8"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$480K of $6M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$480K of $6M program ceiling</span>
                        <span class="esa-progress-bar__value">8%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 8%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val"
                      >In-water construction (cofferdam + intakes)</span
                    >
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.1"
                      >10.19.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.2"
                      >10.19.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.3"
                      >10.19.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.2"
                      >10.20.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.3"
                      >10.20.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.4"
                      >10.20.4</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.5"
                      >10.20.5</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.1"
                      >10.21.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.3"
                      >10.21.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.4"
                      >10.21.4</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.5"
                      >10.21.5</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.6"
                      >10.21.6</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.7"
                      >10.21.7</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.8"
                      >10.21.8</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.9"
                      >10.21.9</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.20.2"
            data-node-name="Sediment and Turbidity Monitoring"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Water Quality &amp; Monitoring Infrastructure</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="submitted"
                style="--_chip: var(--st-submitted, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Submitted to CDFW</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.10M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$120K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$220K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$250K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$240K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$170K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$100K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.10M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="18"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.10M of $6M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.10M of $6M program ceiling</span>
                        <span class="esa-progress-bar__value">18%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 18%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val"
                      >In-water construction (cofferdam + intakes)</span
                    >
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.20.3"
            data-node-name="Harmful Algal Bloom Monitoring"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Water Quality &amp; Monitoring Infrastructure</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2038–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$420K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2038–2043 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2038</th>
                      <td class="bcn-funding__num bcn-funding__strong">$50K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2039</th>
                      <td class="bcn-funding__num bcn-funding__strong">$80K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2040</th>
                      <td class="bcn-funding__num bcn-funding__strong">$90K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2041</th>
                      <td class="bcn-funding__num bcn-funding__strong">$90K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2042</th>
                      <td class="bcn-funding__num bcn-funding__strong">$70K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__strong">$40K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$420K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="7"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$420K of $6M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$420K of $6M program ceiling</span>
                        <span class="esa-progress-bar__value">7%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 7%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val"
                      >In-water construction (cofferdam + intakes)</span
                    >
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.20.4"
            data-node-name="Selenium Bioaccumulation Monitoring"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Water Quality &amp; Monitoring Infrastructure</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$560K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$60K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$110K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$130K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$120K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$90K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$50K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$560K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="9"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$560K of $6M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$560K of $6M program ceiling</span>
                        <span class="esa-progress-bar__value">9%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 9%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val"
                      >In-water construction (cofferdam + intakes)</span
                    >
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.20.5"
            data-node-name="Mercury Monitoring Study"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Water Quality &amp; Monitoring Infrastructure</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$450K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$50K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$90K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$100K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$100K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$70K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$40K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$450K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="8"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$450K of $6M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$450K of $6M program ceiling</span>
                        <span class="esa-progress-bar__value">8%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 8%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val"
                      >In-water construction (cofferdam + intakes)</span
                    >
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21"
            data-node-name="Special Studies &amp; Life-Cycle Models"
            data-node-kind="program"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Program (roll-up)</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Covered Fish Species Monitoring &amp; Science Plan</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">11</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">15</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$18.80M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2039 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$900K at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$17.90M rolled up from 11 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__muted">$140K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.93M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$2.07M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__muted">$230K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$3.29M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$3.52M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__muted">$230K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$3.45M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$3.68M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__muted">$180K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$2.83M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$3.01M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__muted">$120K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$2.13M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$2.25M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.28M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.28M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2033</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$320K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$320K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2034</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$420K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$420K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2035</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$580K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$580K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2036</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$620K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$620K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2037</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$550K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$550K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2038</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$360K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$360K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2039</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$140K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$140K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$900K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$17.90M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$18.80M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.18.3"
            data-node-name="Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2028–2040</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">6</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$2.10M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2028–2033 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$230K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$420K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$460K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$470K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$330K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2033</th>
                      <td class="bcn-funding__num bcn-funding__strong">$190K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$2.10M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="12"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$2.10M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$2.10M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">12%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 12%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.18"
                      >10.18</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.19"
                      >10.19</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.20"
                      >10.20</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.21"
                      >10.21</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.1"
            data-node-name="Hydrodynamics at Georgiana Slough Monitoring"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.30M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$140K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$260K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$290K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$290K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$120K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.30M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="7"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.30M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.30M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">7%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 7%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.7"
                      >10.21.7</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.2"
            data-node-name="Covered Fish Species Life Cycle Models"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">2</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$2.60M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$290K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$520K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$580K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$580K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$400K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$230K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$2.60M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="14"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$2.60M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$2.60M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">14%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 14%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/12.6.5"
                      >12.6.5</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.1"
                      >10.19.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.2"
                      >10.19.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.3"
                      >10.19.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.5"
                      >10.21.5</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.3"
                      >10.21.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.4"
                      >10.21.4</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.3"
                      >10.20.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.4"
                      >10.20.4</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.3"
            data-node-name="Food Web and Larval Fishes Entrainment Study"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.40M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$160K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$280K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$310K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$310K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$220K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$120K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.40M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="8"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.40M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.40M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">8%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 8%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.4"
            data-node-name="Tidal Wetland Restoration Efficacy Study"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2034–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.60M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2034–2039 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2034</th>
                      <td class="bcn-funding__num bcn-funding__strong">$180K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2035</th>
                      <td class="bcn-funding__num bcn-funding__strong">$320K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2036</th>
                      <td class="bcn-funding__num bcn-funding__strong">$350K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2037</th>
                      <td class="bcn-funding__num bcn-funding__strong">$360K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2038</th>
                      <td class="bcn-funding__num bcn-funding__strong">$250K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2039</th>
                      <td class="bcn-funding__num bcn-funding__strong">$140K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.60M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="9"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.60M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.60M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">9%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 9%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.5"
            data-node-name="Delta Smelt and Longfin Smelt Spawning Habitat Study"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2033–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.20M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2033–2038 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2033</th>
                      <td class="bcn-funding__num bcn-funding__strong">$130K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2034</th>
                      <td class="bcn-funding__num bcn-funding__strong">$240K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2035</th>
                      <td class="bcn-funding__num bcn-funding__strong">$260K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2036</th>
                      <td class="bcn-funding__num bcn-funding__strong">$270K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2037</th>
                      <td class="bcn-funding__num bcn-funding__strong">$190K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2038</th>
                      <td class="bcn-funding__num bcn-funding__strong">$110K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.20M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="7"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.20M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.20M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">7%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 7%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.3"
                      >10.19.3</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.6"
            data-node-name="Refugia Design and Field Study"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2043</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.90M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$210K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$380K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$420K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$420K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$300K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$170K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.90M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="11"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.90M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.90M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">11%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 11%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.2"
                      >10.19.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.1"
                      >10.19.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.3"
                      >10.19.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.7"
            data-node-name="Flow Reversal and Routing Minimization"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.10M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$120K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$220K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$250K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$240K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$170K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$100K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.10M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="6"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.10M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.10M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">6%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 6%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.1"
                      >10.21.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.19.1"
                      >10.19.1</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.1"
                      >10.21.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.8"
            data-node-name="Joint Operations Study Plan"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">2</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$900K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$100K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$180K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$140K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$80K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$900K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="5"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$900K of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$900K of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">5%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 5%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.9"
            data-node-name="Modeling Needed to Implement Real-time Operations"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="in-review"
                style="--_chip: var(--st-in-review, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">In Agency Review</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.50M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$170K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$300K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$340K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$330K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$230K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$130K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.50M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="8"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.50M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.50M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">8%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 8%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.10"
                      >10.21.10</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.21.10"
            data-node-name="Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val"
                  >Covered Species Monitoring &amp; Scientific Study</span
                >
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Special Studies &amp; Life-Cycle Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2027–2029</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">3</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="approved"
                style="--_chip: var(--st-approved, #1a9850)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Approved</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="active"
                style="--_chip: var(--st-active, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Active Fieldwork</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$2.30M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2027–2029 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$740K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$920K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$640K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$2.30M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="13"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$2.30M of $18M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$2.30M of $18M program ceiling</span>
                        <span class="esa-progress-bar__value">13%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 13%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">60% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.3"
                      >10.18.3</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.18"
                      >10.18</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.19"
                      >10.19</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.20"
                      >10.20</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.21"
                      >10.21</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="preconstruction"
            data-node-name="Preconstruction Engineering Studies"
            data-node-kind="program"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Program (roll-up)</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Covered Fish Species Monitoring &amp; Science Plan</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">8</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2026–2033</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">11</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$13.40M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2026–2032 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$0 at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$13.40M rolled up from 8 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$820K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$820K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.48M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.48M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.64M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.64M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.65M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.65M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$3.08M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$3.08M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$3.06M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$3.06M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.67M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.67M</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$0</td>
                      <td class="bcn-funding__num bcn-funding__muted">$13.40M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$13.40M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.23"
            data-node-name="Sacramento River Bathymetric Surveys"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2026–2033</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="approved"
                style="--_chip: var(--st-approved, #1a9850)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Approved</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="active"
                style="--_chip: var(--st-active, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Active Fieldwork</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$700K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2026–2031 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__strong">$80K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$140K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$150K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$160K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$110K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$60K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$700K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="5"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$700K of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$700K of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">5%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 5%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.24.2"
                      >10.24.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.24"
            data-node-name="River &amp; Sediment Models"
            data-node-kind="program"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Program (roll-up)</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">2</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2026–2032</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="approved"
                style="--_chip: var(--st-approved, #1a9850)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Approved</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$2.30M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2026–2031 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$0 at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$2.30M rolled up from 2 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$250K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$250K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$460K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$460K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$510K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$510K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$510K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$510K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$360K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$360K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$210K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$210K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$0</td>
                      <td class="bcn-funding__num bcn-funding__muted">$2.30M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$2.30M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="16"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$2.30M of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$2.30M of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">16%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 16%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.24.1"
            data-node-name="Sacramento River Hydraulic Model"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">River &amp; Sediment Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2026–2031</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="approved"
                style="--_chip: var(--st-approved, #1a9850)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Approved</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="active"
                style="--_chip: var(--st-active, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Active Fieldwork</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.20M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2026–2031 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__strong">$130K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$240K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$260K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$270K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$190K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$110K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.20M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="9"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.20M of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.20M of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">9%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 9%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.24.2"
            data-node-name="Sediment Transport Model"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">River &amp; Sediment Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2026–2032</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="approved"
                style="--_chip: var(--st-approved, #1a9850)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Approved</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="active"
                style="--_chip: var(--st-active, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Active Fieldwork</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.10M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2026–2031 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__strong">$120K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$220K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$250K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$240K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$170K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$100K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.10M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="8"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$1.10M of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$1.10M of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">8%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 8%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.23"
                      >10.23</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.29"
                      >10.29</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.25"
            data-node-name="Intake Hydraulic Models"
            data-node-kind="program"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Program (roll-up)</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">4</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2026–2032</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$6.90M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2026–2032 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$0 at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$6.90M rolled up from 4 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$100K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$100K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$180K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$180K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$200K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$200K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$2.07M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$2.07M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$2.48M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$2.48M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.67M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.67M</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$0</td>
                      <td class="bcn-funding__num bcn-funding__muted">$6.90M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$6.90M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="49"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$6.90M of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$6.90M of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">49%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 49%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.25.1"
            data-node-name="Intake Structure Hydraulic Model – Mathematical"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Intake Hydraulic Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2026–2031</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="approved"
                style="--_chip: var(--st-approved, #1a9850)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Approved</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="active"
                style="--_chip: var(--st-active, #e3c14d)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Active Fieldwork</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$900K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2026–2031 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__strong">$100K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$180K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$140K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$80K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$900K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="6"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$900K of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$900K of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">6%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 6%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.25.2"
                      >10.25.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.25.2"
            data-node-name="Intake Structure Hydraulic Modeling – Physical"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Intake Hydraulic Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2030–2032</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="submitted"
                style="--_chip: var(--st-submitted, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Submitted to CDFW</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$2.80M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2030–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$900K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.12M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$780K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$2.80M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$2.80M of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$2.80M of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">20%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 20%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.25.1"
                      >10.25.1</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.25.3"
            data-node-name="Intake Tee Screen Hydraulic Model – Mathematical"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Intake Hydraulic Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2030–2032</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="submitted"
                style="--_chip: var(--st-submitted, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Submitted to CDFW</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$800K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2030–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$260K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$320K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$220K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$800K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="6"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$800K of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$800K of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">6%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 6%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.25.4"
                      >10.25.4</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.25.4"
            data-node-name="Intake Tee Screen Hydraulic Model – Physical"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Intake Hydraulic Models</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2030–2032</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$2.40M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2030–2032 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$770K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$960K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2032</th>
                      <td class="bcn-funding__num bcn-funding__strong">$670K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$2.40M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="17"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$2.40M of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$2.40M of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">17%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 17%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.25.3"
                      >10.25.3</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.26"
            data-node-name="Incorporation of Fish Guidance System into the North Delta Intake Structures"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Preconstruction Engineering Studies</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2026–2031</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">11</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="revising"
                style="--_chip: var(--st-revising, #91cf60)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Revising</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="planning"
                style="--_chip: var(--st-planning, #fc8d59)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Planning</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$3.50M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2026–2031 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__strong">$390K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__strong">$700K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2028</th>
                      <td class="bcn-funding__num bcn-funding__strong">$780K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2029</th>
                      <td class="bcn-funding__num bcn-funding__strong">$780K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2030</th>
                      <td class="bcn-funding__num bcn-funding__strong">$540K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2031</th>
                      <td class="bcn-funding__num bcn-funding__strong">$310K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$3.50M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-funding__ceiling">
                    <div
                      class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="$3.50M of $14M program ceiling"
                    >
                      <div class="esa-progress-bar__header">
                        <span class="esa-progress-bar__label">$3.50M of $14M program ceiling</span>
                        <span class="esa-progress-bar__value">25%</span>
                      </div>
                      <div class="esa-progress-bar__track">
                        <div class="esa-progress-bar__fill" style="width: 25%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">30% design</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Earliest field start</span>
                    <span class="bcn-key-value__val">2027-10-01</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="operations"
            data-node-name="Operations Monitoring"
            data-node-kind="program"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Program (roll-up)</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Monitoring Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Covered Fish Species Monitoring &amp; Science Plan</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">6</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2042–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$4.90M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2042–2044 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$0 at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$4.90M rolled up from 6 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2042</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.15M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.15M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$2.75M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$2.75M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2044</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1M</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$0</td>
                      <td class="bcn-funding__num bcn-funding__muted">$4.90M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$4.90M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.27"
            data-node-name="Hydraulic Testing for Velocity Requirements"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study + sub-studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Monitoring Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Operations Monitoring</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">4</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2042–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$2.70M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2042–2044 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$1M at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$1.70M rolled up from 4 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2042</th>
                      <td class="bcn-funding__num bcn-funding__muted">$500K</td>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__strong">$500K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__muted">$500K</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.15M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.65M</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2044</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$550K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$550K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$1M</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.70M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$2.70M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">Phase 1 operations</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.18.2"
                      >10.18.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.27.1"
            data-node-name="Hydraulic Testing Procedures"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Monitoring Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Hydraulic Testing for Velocity Requirements</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2043–2043</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$600K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2043–2043 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__strong">$600K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$600K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">Phase 1 operations</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.27"
                      >10.27</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.27"
                      >10.27</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.27.2"
            data-node-name="Approach Velocity Testing Compliance"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Monitoring Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Hydraulic Testing for Velocity Requirements</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2043–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$700K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2043–2044 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__strong">$350K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2044</th>
                      <td class="bcn-funding__num bcn-funding__strong">$350K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$700K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">Phase 1 operations</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.27"
                      >10.27</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.27"
                      >10.27</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.27.3"
            data-node-name="Hydraulic Testing Reports"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Monitoring Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Hydraulic Testing for Velocity Requirements</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2043–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$400K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2043–2044 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2044</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$400K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">Phase 1 operations</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.27"
                      >10.27</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.27"
                      >10.27</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.29"
            data-node-name="Sediment Management"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Monitoring Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Operations Monitoring</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2043–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$900K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2043–2044 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__strong">$450K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2044</th>
                      <td class="bcn-funding__num bcn-funding__strong">$450K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$900K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">Phase 1 operations</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.28"
                      >10.28</a
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.24.2"
                      >10.24.2</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="10.3"
            data-node-name="Screen Impingement Study"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Monitoring Studies</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Operations Monitoring</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2042–2043</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.30M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2042–2043 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2042</th>
                      <td class="bcn-funding__num bcn-funding__strong">$650K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__strong">$650K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$1.30M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">Phase 1 operations</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.27"
                      >10.27</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.28"
                      >10.28</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="operations-measures"
            data-node-name="Operations Covered-Species Measures"
            data-node-kind="program"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Program (roll-up)</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Phases Covered Species Measures</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val"
                  >Covered Fish Species Monitoring &amp; Science Plan</span
                >
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">3</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2041–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$1.70M</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2041–2044 </span>
                  </div>
                  <div class="bcn-funding__split">
                    <span>$0 at this node</span> <span class="bcn-funding__split-sep">+</span>
                    <span>$1.70M rolled up from 3 studies</span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Sub-COAs</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2041</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$260K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$260K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2042</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$320K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$320K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$670K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$670K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2044</th>
                      <td class="bcn-funding__num bcn-funding__muted">—</td>
                      <td class="bcn-funding__num bcn-funding__muted">$450K</td>
                      <td class="bcn-funding__num bcn-funding__strong">$450K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted">$0</td>
                      <td class="bcn-funding__num bcn-funding__muted">$1.70M</td>
                      <td class="bcn-funding__num bcn-funding__strong">$1.70M</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="11.1109"
            data-node-name="Velocity Requirements at North Delta Intakes"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Phases Covered Species Measures</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Operations Covered-Species Measures</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2043–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$500K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2043–2044 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__strong">$250K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2044</th>
                      <td class="bcn-funding__num bcn-funding__strong">$250K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$500K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">Phase 1 operations</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.7"
                      >10.21.7</a
                    ></span
                  >
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.20.1"
                      >10.20.1</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.27"
                      >10.27</a
                    ><a class="bcn-node__coa-ref" href="/beacon-design/prototypes/fish-study/10.28"
                      >10.28</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="11.109.1"
            data-node-name="No Diversions Without North Delta Intake Screens"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Phases Covered Species Measures</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Operations Covered-Species Measures</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2043–2044</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$400K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2043–2044 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2044</th>
                      <td class="bcn-funding__num bcn-funding__strong">$200K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$400K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">Phase 1 operations</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="bcn-node"
            data-node-panel="12.6.5"
            data-node-name="Spring Longfin Smelt Distribution"
            data-node-kind="study"
            hidden=""
          >
            <div class="bcn-node__meta">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Type</span>
                <span class="bcn-key-value__val">Study</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Category</span>
                <span class="bcn-key-value__val">Operations Phases Covered Species Measures</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Parent program</span>
                <span class="bcn-key-value__val">Operations Covered-Species Measures</span>
              </div>
            </div>
            <div class="bcn-node__rollup">
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">1</span
                ><span class="bcn-node__rollup-lbl">studies in subtree</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">WY2041–2043</span
                ><span class="bcn-node__rollup-lbl">rolled-up span</span>
              </div>
              <div class="bcn-node__rollup-item">
                <span class="bcn-node__rollup-val">0</span
                ><span class="bcn-node__rollup-lbl">open comments</span>
              </div>
            </div>
            <div class="bcn-node__status">
              <span class="bcn-node__status-lbl">Roll-up plan status (least advanced)</span>
              <span
                class="bcn-status-chip"
                data-status="draft"
                style="--_chip: var(--st-draft, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Draft</span>
              </span>
              <span
                class="bcn-status-chip"
                data-status="not-started"
                style="--_chip: var(--st-not-started, #d73027)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Not Started</span>
              </span>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Funding plan (by water year)</h3>
              <div class="bcn-funding">
                <div class="bcn-funding__summary">
                  <div class="bcn-funding__total">
                    <span class="bcn-funding__total-val">$800K</span>
                    <span class="bcn-funding__total-lbl"> planned funding, WY2041–2043 </span>
                  </div>
                </div>
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2041</th>
                      <td class="bcn-funding__num bcn-funding__strong">$260K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2042</th>
                      <td class="bcn-funding__num bcn-funding__strong">$320K</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bcn-funding__year">WY2043</th>
                      <td class="bcn-funding__num bcn-funding__strong">$220K</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__strong">$800K</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="bcn-funding__inherited">
                  <span class="bcn-funding__inherited-title">Inherited from parent program</span>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Back-scheduled from</span>
                    <span class="bcn-key-value__val">Phase 1 operations</span>
                  </div>
                  <div class="bcn-key-value">
                    <span class="bcn-key-value__key">Contract vehicle</span>
                    <span class="bcn-key-value__val"
                      >ICF-primed DWR contract — separate from the ESA on-call</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bcn-node__section">
              <h3 class="bcn-node__section-title">Dependencies</h3>
              <div class="bcn-node__deps">
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informs</span>
                  <span class="bcn-node__dep-empty">None</span>
                </div>
                <div class="bcn-node__dep-group">
                  <span class="bcn-node__dep-lbl">Informed by</span>
                  <span class="bcn-node__dep-list"
                    ><a
                      class="bcn-node__coa-ref"
                      href="/beacon-design/prototypes/fish-study/10.21.2"
                      >10.21.2</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </section>
        </div>
        <span slot="footer" class="bcn-node__foot">
          <span id="node-open"
            ><a href="#"
              ><span
                class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
              >
                <button class="esa-button__native" type="button">
                  <span class="esa-button__label"> Open full study </span>
                </button>
              </span>
            </a></span
          >
          <span id="node-close"
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Close </span>
              </button>
            </span>
          </span>
        </span>
      </esa-side-dialog>
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
  --color-accent: #f76b15;
  --color-border: #dcdcdc;
  --color-border-light: #efefef;
  --color-border-strong: #bdbdbd;
  --color-commitment: #58508d;
  --color-primary: #005862;
  --color-primary-border: #b9d6d2;
  --color-primary-hover: #00474f;
  --color-primary-strong: #2a7e3b;
  --color-secondary: #00918b;
  --color-secondary-strong: #2a7e3b;
  --color-surface: #fcfcfc;
  --color-surface-sunken: #efefef;
  --color-text-inverse: #fcfcfc;
  --color-text-link: #005862;
  --color-text-muted: #7c7c7c;
  --color-text-primary: #3d3d3d;
  --color-text-secondary: #525252;
  --color-text-tertiary: #656565;
  --color-warning: #f2770e;
  --font-decorative: "Besley", serif;
  --font-display: "DM Sans", sans-serif;
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
  --letter-spacing-tight: -0.01em;
  --line-height-normal: 1.6;
  --line-height-tight: 1.3;
  --radius-100: 0.25rem;
  --radius-200: 0.5rem;
  --radius-full: 9999px;
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
  --type-size-500: clamp(1.125rem, 0.98rem + 0.72vw, 1.5rem);
  --type-size-700: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem);
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
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
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
:host {
  --_width: var(--side-dialog-width, 400px);
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
.page-layout__utilities {
  display: flex;
  gap: var(--spacing-200);
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
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
.esa-stat--accent .esa-stat__value {
  color: var(--_stat-accent-color);
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
.bcn-gantt-utils a {
  text-decoration: none;
}
.bcn-gantt-stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-700);
  padding: var(--spacing-400) 0 var(--spacing-500);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--spacing-400);
}
.bcn-gantt-note {
  margin: 0 0 var(--spacing-400);
  font-size: var(--type-size-100);
  color: var(--color-text-secondary);
  line-height: 1.55;
  max-width: 100ch;
}
.bcn-gantt {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  --_label-w: 380px;
  --_plot-w: 1900px;
  --_row-h: 30px;
}
.bcn-gantt__legend {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-300);
  font-size: var(--type-size-100);
  color: var(--color-text-secondary);
}
.bcn-gantt__legend-title {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
}
.bcn-gantt__legend-item {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
}
.bcn-gantt__legend-dot {
  width: 9px;
  height: 9px;
  border-radius: var(--radius-full);
  background: var(--_c);
}
.bcn-gantt__legend-summary {
  width: 20px;
  height: 6px;
  border-radius: 3px;
  background: var(--color-border-strong);
  border: 1px solid var(--color-text-tertiary);
}
.bcn-gantt__legend-hint {
  margin-left: auto;
  color: var(--color-text-muted);
  font-style: italic;
}
.bcn-gantt__scroll {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-gantt__canvas {
  min-width: calc(var(--_label-w) + var(--_plot-w));
}
.bcn-gantt__axis {
  display: grid;
  grid-template-columns: var(--_label-w) 1fr;
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}
.bcn-gantt__corner {
  display: flex;
  align-items: flex-end;
  padding: var(--spacing-200) var(--spacing-300);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  border-right: 1px solid var(--color-border);
}
.bcn-gantt__head-plot {
  position: relative;
}
.bcn-gantt__head-bands {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.bcn-gantt__band {
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-gantt__band[data-phase="baseline"] {
  background: color-mix(in srgb, var(--color-text-primary) 7%, transparent);
}
.bcn-gantt__band[data-phase="in-water-construction"] {
  background: color-mix(in srgb, var(--color-text-primary) 3%, transparent);
}
.bcn-gantt__band[data-phase="phase1-ops"] {
  background: color-mix(in srgb, var(--color-text-primary) 7%, transparent);
}
.bcn-gantt__band[data-phase="phase2-ops"] {
  background: color-mix(in srgb, var(--color-text-primary) 3%, transparent);
}
.bcn-gantt__head-phases {
  position: relative;
  z-index: 1;
  height: 18px;
}
.bcn-gantt__phase-tag {
  position: absolute;
  top: 0;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  padding: 0 var(--spacing-150);
  font-size: 0.625rem;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
}
.bcn-gantt__head-years {
  position: relative;
  z-index: 1;
  height: 20px;
}
.bcn-gantt__yr {
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 1px solid var(--color-border-light);
  display: flex;
  align-items: center;
}
.bcn-gantt__yr-label {
  font-size: 0.6875rem;
  color: var(--color-text-muted);
  padding-left: 4px;
  font-variant-numeric: tabular-nums;
}
.bcn-gantt__yr.is-five {
  border-left-color: var(--color-border-strong);
}
.bcn-gantt__yr.is-five .bcn-gantt__yr-label {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
}
.bcn-gantt__head-ms {
  position: relative;
  z-index: 1;
  height: 22px;
}
.bcn-gantt__ms-tag {
  position: absolute;
  top: 2px;
  transform: translate(-50%);
  font-size: 0.625rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  white-space: nowrap;
  background: var(--color-surface);
  padding: 0 3px;
  border: 1px solid var(--color-primary-border);
  border-radius: var(--radius-100);
}
.bcn-gantt__ms-tag.is-alt {
  top: 11px;
}
.bcn-gantt__body {
  position: relative;
}
.bcn-gantt__edges {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  overflow: visible;
}
#bcn-gantt-arrow-out path {
  fill: var(--color-commitment);
}
#bcn-gantt-arrow-in path {
  fill: var(--color-secondary);
}
.bcn-gantt__row {
  display: grid;
  grid-template-columns: var(--_label-w) 1fr;
  border-bottom: 1px solid var(--color-border-light);
}
.bcn-gantt__row.is-program {
  background: color-mix(in srgb, var(--color-text-primary) 2%, transparent);
}
.bcn-gantt__label {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  min-height: var(--_row-h);
  padding: 0 var(--spacing-200) 0 calc(var(--spacing-200) + var(--_indent) * 18px);
  border-right: 1px solid var(--color-border);
  background: var(--color-surface);
  position: sticky;
  left: 0;
  z-index: 3;
  overflow: hidden;
}
.bcn-gantt__caret {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-text-tertiary);
  cursor: pointer;
  flex-shrink: 0;
  border-radius: var(--radius-100);
}
.bcn-gantt__caret svg {
  transition: transform 0.12s ease;
}
.bcn-gantt__name-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  min-width: 0;
  flex: 1;
  padding: 2px 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  overflow: hidden;
}
.bcn-gantt__coa {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 1px 5px;
  border-radius: var(--radius-100);
}
.bcn-gantt__name {
  font-size: var(--type-size-100);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-gantt__row.is-program .bcn-gantt__name {
  font-weight: var(--font-weight-semibold);
}
.bcn-gantt__rollup {
  flex-shrink: 0;
  font-size: 0.6875rem;
  font-variant-numeric: tabular-nums;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  white-space: nowrap;
}
.bcn-gantt__rollup-count {
  color: var(--color-text-muted);
  font-weight: var(--font-weight-regular);
}
.bcn-gantt__plot {
  position: relative;
  min-height: var(--_row-h);
}
.bcn-gantt__grid {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1px solid var(--color-border-light);
}
.bcn-gantt__grid.is-five {
  border-left-color: var(--color-border);
}
.bcn-gantt__ms-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1px dashed color-mix(in srgb, var(--color-primary) 35%, transparent);
}
.bcn-gantt__today {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 2px solid var(--color-warning);
  z-index: 2;
}
.bcn-gantt__summary {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 8px;
  min-width: 5px;
  z-index: 1;
  background: color-mix(in srgb, var(--color-text-primary) 10%, transparent);
  border: 1px solid var(--color-border-strong);
  border-radius: 2px;
}
.bcn-gantt__summary:before,
.bcn-gantt__summary:after {
  content: "";
  position: absolute;
  top: -3px;
  bottom: -3px;
  width: 2px;
  background: var(--color-text-tertiary);
}
.bcn-gantt__summary:before {
  left: 0;
}
.bcn-gantt__summary:after {
  right: 0;
}
.bcn-gantt__caret-spacer {
  width: 18px;
  flex-shrink: 0;
}
.bcn-gantt__bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 15px;
  min-width: 5px;
  border: 1px solid color-mix(in srgb, var(--_c) 72%, black);
  border-radius: var(--radius-100);
  background: linear-gradient(90deg, var(--_c) 0%, color-mix(in srgb, var(--_c) 62%, white) 100%);
  padding: 0;
  cursor: pointer;
  z-index: 1;
  transition:
    filter 0.12s ease,
    box-shadow 0.12s ease;
}
.bcn-node-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  min-width: 0;
}
.bcn-node-head__coa {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
}
.bcn-node-head__title {
  font-family: var(--font-decorative);
  font-size: 1.125rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.25;
  min-width: 0;
}
.bcn-node-body {
  display: flex;
  flex-direction: column;
}
.bcn-node {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-node[hidden] {
  display: none;
}
.bcn-node__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: var(--spacing-300);
}
.bcn-node__foot a {
  text-decoration: none;
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
| `--color-accent` | `#f76b15` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-border-strong` | `#bdbdbd` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-border` | `#b9d6d2` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-primary-strong` | `#2a7e3b` | semantic |
| `--color-secondary` | `#00918b` | semantic |
| `--color-secondary-strong` | `#2a7e3b` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#fcfcfc` | semantic |
| `--color-text-link` | `#005862` | semantic |
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
| `--icon-button-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-medium` | `20px` | component |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-small` | `16px` | component |
| `--icon-size-xs` | `14px` | primitive |
| `--letter-spacing-tight` | `-.01em` | primitive |
| `--line-height-normal` | `1.6` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
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
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--type-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
