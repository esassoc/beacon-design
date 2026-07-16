# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-fish-studies** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/fish-studies/
- **Section element:** `<page>`
- **Components:** esa-button (hub), esa-filter-clear-button (hub), esa-filter-container (hub), esa-icon (hub), esa-icon-button (hub), esa-icon-link (hub)

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
                  >
                    <path
                      d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
                    ></path>
                    <path d="M6.453 15h11.094"></path>
                    <path d="M8.5 2h7"></path>
                  </svg>
                </span>
                Science Plan
              </h1>
            </div>
            <div class="page-layout__utilities">
              <div class="bcn-fs-utils">
                <span id="fs-generate"
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
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                      </span>
                      <span class="esa-button__label"> Generate outputs </span>
                    </button>
                  </span>
                </span>
              </div>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="bcn-filterbar">
              <div class="bcn-filterbar__top">
                <div class="bcn-filterbar__group">
                  <span class="bcn-filterbar__label">View</span>
                  <esa-button-toggle id="fs-views" value="timeline" size="md"></esa-button-toggle>
                </div>
                <div class="bcn-filterbar__group" id="fs-sort-group">
                  <span class="bcn-filterbar__label">Arrange</span>
                  <esa-button-toggle id="fs-sort" value="date" size="md"></esa-button-toggle>
                </div>
                <div class="bcn-filterbar__search">
                  <esa-text-field
                    id="fs-search"
                    placeholder="Search studies…"
                    size="md"
                  ></esa-text-field>
                  <span id="fs-search-clear" hidden=""
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
                    id="flt-category"
                    label="Category"
                    multiple=""
                    size="sm"
                  ></esa-filter-dropdown>
                  <esa-filter-dropdown
                    id="flt-lead"
                    label="DCP Lead"
                    multiple=""
                    size="sm"
                  ></esa-filter-dropdown>
                  <esa-filter-dropdown
                    id="flt-plan"
                    label="Plan Status"
                    multiple=""
                    size="sm"
                  ></esa-filter-dropdown>
                  <esa-filter-dropdown
                    id="flt-phase"
                    label="Phase"
                    multiple=""
                    size="sm"
                  ></esa-filter-dropdown>
                  <esa-filter-dropdown
                    id="flt-species"
                    label="Species"
                    multiple=""
                    size="sm"
                  ></esa-filter-dropdown>
                </div>
                <span id="fs-clear-filters" class="bcn-filterbar__clear"
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
                  </button>
                  <script type="module">
                    document.querySelectorAll("[data-esa-filter-clear]").forEach((e) => {
                      e.addEventListener("click", () => {
                        e.dispatchEvent(
                          new CustomEvent("esa-filter-clear", { bubbles: !0, composed: !0 }),
                        );
                      });
                    });
                  </script></span
                >
              </div>
            </div>
            <div class="bcn-view-pane" id="view-grid" hidden="">
              <div id="fs-grid" class="fs-grid">
                <div
                  class="ag-theme-buttonStyle-1 ag-theme-columnDropStyle-2 ag-theme-batchEditStyle-3 ag-theme-checkboxStyle-4 ag-theme-iconSet-5 ag-theme-tabStyle-6 ag-theme-inputStyle-7 ag-theme-columnDropStyle-2 ag-theme-part-8 ag-theme-params-1"
                  style="height: 100%; --ag-internal-row-border-width: 1px"
                >
                  <div class="ag-measurement-container">
                    <div style="width: var(--ag-list-item-height, 15538px)"></div>
                    <div style="width: var(--ag-row-height, 15538px)"></div>
                    <div style="width: var(--ag-header-height, 15538px)"></div>
                    <div
                      class="ag-measurement-element-border"
                      style="--ag-internal-measurement-border: var(--ag-row-border, solid 15538px)"
                    ></div>
                    <div
                      class="ag-measurement-element-border"
                      style="
                        --ag-internal-measurement-border: var(
                          --ag-pinned-row-border,
                          solid 15538px
                        );
                      "
                    ></div>
                    <div
                      class="ag-measurement-element-border"
                      style="
                        --ag-internal-measurement-border: var(
                          --ag-header-row-border,
                          solid 15538px
                        );
                      "
                    ></div>
                  </div>
                  <div
                    class="ag-aria-description-container"
                    aria-live="polite"
                    aria-relevant="additions text"
                    aria-atomic="true"
                  ></div>
                  <div
                    class="ag-root-wrapper ag-layout-normal ag-ltr"
                    role="presentation"
                    grid-id="1"
                  >
                    <div
                      class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"
                      data-ref="rootWrapperBody"
                      role="presentation"
                    >
                      <div
                        class="ag-tab-guard ag-tab-guard-top"
                        role="presentation"
                        tabindex="0"
                      ></div>
                      <!--AG-GRID-BODY-->
                      <div
                        class="ag-root ag-unselectable ag-layout-normal ag-body-vertical-content-no-gap ag-body-horizontal-content-no-gap"
                        data-ref="eGridRoot"
                        role="grid"
                        aria-colcount="10"
                        aria-rowcount="37"
                      >
                        <!--AG-HEADER-ROOT-->
                        <div
                          class="ag-header ag-focus-managed ag-pivot-off ag-header-allow-overflow"
                          role="presentation"
                          style="height: 49px; min-height: 49px"
                        >
                          <div
                            class="ag-pinned-left-header"
                            role="rowgroup"
                            style="width: 110px; max-width: 110px; min-width: 110px"
                          >
                            <div
                              class="ag-header-row ag-header-row-column"
                              role="row"
                              tabindex="0"
                              aria-rowindex="1"
                              style="top: 0px; height: 48px; width: 110px"
                            >
                              <div
                                class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                                role="columnheader"
                                col-id="coaNumber"
                                aria-colindex="1"
                                tabindex="-1"
                                aria-sort="none"
                                style="
                                  top: 0px;
                                  height: 48px;
                                  width: 110px;
                                  touch-action: none;
                                  left: 0px;
                                "
                              >
                                <div
                                  class="ag-header-cell-resize"
                                  data-ref="eResize"
                                  role="presentation"
                                  aria-hidden="false"
                                  style="touch-action: none"
                                ></div>
                                <div
                                  class="ag-header-cell-comp-wrapper"
                                  data-ref="eHeaderCompWrapper"
                                  role="presentation"
                                >
                                  <div
                                    class="ag-cell-label-container ag-header-cell-sorted-none"
                                    role="presentation"
                                  >
                                    <span
                                      class="ag-header-icon ag-header-cell-filter-button"
                                      data-ref="eFilterButton"
                                      aria-hidden="true"
                                      ><span
                                        class="ag-icon ag-icon-filter"
                                        role="presentation"
                                        unselectable="on"
                                      ></span
                                    ></span>
                                    <div
                                      class="ag-header-cell-label"
                                      data-ref="eLabel"
                                      role="presentation"
                                    >
                                      <span class="ag-header-cell-text" data-ref="eText">COA</span>
                                      <!--AG-SORT-INDICATOR--><span
                                        class="ag-sort-indicator-container"
                                        data-ref="eSortIndicator"
                                      >
                                        <span
                                          class="ag-sort-indicator-icon ag-sort-order ag-hidden"
                                          data-ref="eSortOrder"
                                          aria-hidden="true"
                                        ></span>
                                        <span
                                          class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden"
                                          data-ref="eSortAsc"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-asc"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
                                        <span
                                          class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden"
                                          data-ref="eSortDesc"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-desc"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
                                        <span
                                          class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden"
                                          data-ref="eSortMixed"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-none"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
                                        <span
                                          class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden"
                                          data-ref="eSortAbsoluteAsc"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-aasc"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
                                        <span
                                          class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden"
                                          data-ref="eSortAbsoluteDesc"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-adesc"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
                                        <span
                                          class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden"
                                          data-ref="eSortNone"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-none"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="ag-header-viewport" role="rowgroup" tabindex="-1">
                            <div
                              class="ag-header-container"
                              data-ref="eCenterContainer"
                              role="presentation"
                              style="width: 2050px"
                            >
                              <div
                                class="ag-header-row ag-header-row-column"
                                role="row"
                                tabindex="0"
                                aria-rowindex="1"
                                style="top: 0px; height: 48px; width: 2050px"
                              >
                                <div
                                  class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                                  role="columnheader"
                                  col-id="name"
                                  aria-colindex="2"
                                  tabindex="-1"
                                  aria-sort="none"
                                  style="
                                    top: 0px;
                                    height: 48px;
                                    width: 320px;
                                    touch-action: none;
                                    left: 0px;
                                  "
                                >
                                  <div
                                    class="ag-header-cell-resize"
                                    data-ref="eResize"
                                    role="presentation"
                                    aria-hidden="false"
                                    style="touch-action: none"
                                  ></div>
                                  <div
                                    class="ag-header-cell-comp-wrapper"
                                    data-ref="eHeaderCompWrapper"
                                    role="presentation"
                                  >
                                    <div class="ag-cell-label-container" role="presentation">
                                      <span
                                        class="ag-header-icon ag-header-cell-filter-button"
                                        data-ref="eFilterButton"
                                        aria-hidden="true"
                                        ><span
                                          class="ag-icon ag-icon-filter"
                                          role="presentation"
                                          unselectable="on"
                                        ></span
                                      ></span>
                                      <div
                                        class="ag-header-cell-label"
                                        data-ref="eLabel"
                                        role="presentation"
                                      >
                                        <span class="ag-header-cell-text" data-ref="eText"
                                          >Study Name</span
                                        >
                                        <!--AG-SORT-INDICATOR--><span
                                          class="ag-sort-indicator-container"
                                          data-ref="eSortIndicator"
                                        >
                                          <span
                                            class="ag-sort-indicator-icon ag-sort-order ag-hidden"
                                            data-ref="eSortOrder"
                                            aria-hidden="true"
                                          ></span>
                                          <span
                                            class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden"
                                            data-ref="eSortAsc"
                                            aria-hidden="true"
                                            ><span
                                              class="ag-icon ag-icon-asc"
                                              role="presentation"
                                              unselectable="on"
                                            ></span
                                          ></span>
                                          <span
                                            class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden"
                                            data-ref="eSortDesc"
                                            aria-hidden="true"
                                            ><span
                                              class="ag-icon ag-icon-desc"
                                              role="presentation"
                                              unselectable="on"
                                            ></span
                                          ></span>
                                          <span
                                            class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden"
                                            data-ref="eSortMixed"
                                            aria-hidden="true"
                                            ><span
                                              class="ag-icon ag-icon-none"
                                              role="presentation"
                                              unselectable="on"
                                            ></span
                                          ></span>
                                          <span
                                            class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden"
                                            data-ref="eSortAbsoluteAsc"
                                            aria-hidden="true"
                                            ><span
                                              class="ag-icon ag-icon-aasc"
                                              role="presentation"
                                              unselectable="on"
                                            ></span
                                          ></span>
                                          <span
                                            class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden"
                                            data-ref="eSortAbsoluteDesc"
                                            aria-hidden="true"
                                            ><span
                                              class="ag-icon ag-icon-adesc"
                                              role="presentation"
                                              unselectable="on"
                                            ></span
                                          ></span>
                                          <span
                                            class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden"
                                            data-ref="eSortNone"
                                            aria-hidden="true"
                                            ><span
                                              class="ag-icon ag-icon-none"
                                              role="presentation"
                                              unselectable="on"
                                            ></span
                                          ></span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ag-pinned-right-header ag-hidden"
                            role="rowgroup"
                            aria-hidden="true"
                            style="width: 0px; max-width: 0px; min-width: 0px"
                          ></div>
                        </div>
                        <div
                          class="ag-floating-top ag-invisible"
                          data-ref="eTop"
                          role="presentation"
                          style="min-height: 0px; height: 0px"
                        >
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-pinned-left-floating-top"
                            data-ref="eContainer"
                            role="rowgroup"
                            aria-hidden="false"
                            style="width: 110px; max-width: 110px; min-width: 110px"
                          ></div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-viewport ag-floating-top-viewport"
                            data-ref="eViewport"
                            role="rowgroup"
                          >
                            <div
                              class="ag-floating-top-container"
                              data-ref="eContainer"
                              role="presentation"
                              style="width: 2050px"
                            ></div>
                          </div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-pinned-right-floating-top ag-hidden"
                            data-ref="eContainer"
                            role="rowgroup"
                            aria-hidden="true"
                            style="width: 0px; max-width: 0px; min-width: 0px"
                          ></div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-floating-top-full-width-container"
                            data-ref="eContainer"
                            role="rowgroup"
                          ></div>
                        </div>
                        <div class="ag-body ag-layout-normal" data-ref="eBody" role="presentation">
                          <div
                            class="ag-body-viewport ag-layout-normal ag-row-no-animation"
                            data-ref="eBodyViewport"
                            role="presentation"
                          >
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-pinned-left-cols-container"
                              data-ref="eContainer"
                              role="rowgroup"
                              aria-hidden="false"
                              style="
                                height: 1512px;
                                width: 110px;
                                max-width: 110px;
                                min-width: 110px;
                              "
                            >
                              <div
                                role="row"
                                comp-id="46"
                                tabindex="0"
                                row-index="0"
                                class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                                aria-rowindex="2"
                                row-id="0"
                                style="transform: translateY(0px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="47"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.18.3</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="48"
                                tabindex="0"
                                row-index="1"
                                class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="3"
                                row-id="1"
                                style="transform: translateY(42px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="49"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.19.1</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="50"
                                tabindex="0"
                                row-index="2"
                                class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="4"
                                row-id="2"
                                style="transform: translateY(84px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="51"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.19.2</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="52"
                                tabindex="0"
                                row-index="3"
                                class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="5"
                                row-id="3"
                                style="transform: translateY(126px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="53"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.19.3</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="54"
                                tabindex="0"
                                row-index="4"
                                class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="6"
                                row-id="4"
                                style="transform: translateY(168px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="55"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.20.1</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="56"
                                tabindex="0"
                                row-index="5"
                                class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="7"
                                row-id="5"
                                style="transform: translateY(210px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="57"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.20.2</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="58"
                                tabindex="0"
                                row-index="6"
                                class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="8"
                                row-id="6"
                                style="transform: translateY(252px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="59"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.20.3</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="60"
                                tabindex="0"
                                row-index="7"
                                class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="9"
                                row-id="7"
                                style="transform: translateY(294px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="61"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.20.4</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="62"
                                tabindex="0"
                                row-index="8"
                                class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="10"
                                row-id="8"
                                style="transform: translateY(336px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="63"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.20.5</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="64"
                                tabindex="0"
                                row-index="9"
                                class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="11"
                                row-id="9"
                                style="transform: translateY(378px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="65"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.21.1</a>
                                </div>
                              </div>
                              <div
                                role="row"
                                comp-id="66"
                                tabindex="0"
                                row-index="10"
                                class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                aria-rowindex="12"
                                row-id="10"
                                style="transform: translateY(420px); height: 42px"
                              >
                                <div
                                  role="gridcell"
                                  comp-id="67"
                                  col-id="coaNumber"
                                  class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                  tabindex="-1"
                                  aria-colindex="1"
                                  style="left: 0px; width: 110px"
                                >
                                  <a class="bcn-grid-name" href="#">10.21.2</a>
                                </div>
                              </div>
                            </div>
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-viewport ag-center-cols-viewport"
                              data-ref="eViewport"
                              role="rowgroup"
                              style="height: 1512px"
                            >
                              <div
                                class="ag-center-cols-container"
                                data-ref="eContainer"
                                role="presentation"
                                style="width: 2050px; height: 1512px"
                              >
                                <div
                                  role="row"
                                  comp-id="68"
                                  tabindex="0"
                                  row-index="0"
                                  class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                                  aria-rowindex="2"
                                  row-id="0"
                                  style="transform: translateY(0px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="69"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#"
                                      >Evaluate Alternative Operating Criteria for the Ascending or
                                      Descending Limb of the Hydrograph During Real-time
                                      Operations</a
                                    >
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="70"
                                  tabindex="0"
                                  row-index="1"
                                  class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="3"
                                  row-id="1"
                                  style="transform: translateY(42px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="71"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#"
                                      >Migration and Survival Study</a
                                    >
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="72"
                                  tabindex="0"
                                  row-index="2"
                                  class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="4"
                                  row-id="2"
                                  style="transform: translateY(84px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="73"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#">Predation Study</a>
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="74"
                                  tabindex="0"
                                  row-index="3"
                                  class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="5"
                                  row-id="3"
                                  style="transform: translateY(126px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="75"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#"
                                      >Abundance and Distribution Study</a
                                    >
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="76"
                                  tabindex="0"
                                  row-index="4"
                                  class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="6"
                                  row-id="4"
                                  style="transform: translateY(168px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="77"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#"
                                      >Installation of New Real-time Monitoring Station</a
                                    >
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="78"
                                  tabindex="0"
                                  row-index="5"
                                  class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="7"
                                  row-id="5"
                                  style="transform: translateY(210px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="79"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#"
                                      >Sediment and Turbidity Monitoring</a
                                    >
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="80"
                                  tabindex="0"
                                  row-index="6"
                                  class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="8"
                                  row-id="6"
                                  style="transform: translateY(252px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="81"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#"
                                      >Harmful Algal Bloom Monitoring</a
                                    >
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="82"
                                  tabindex="0"
                                  row-index="7"
                                  class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="9"
                                  row-id="7"
                                  style="transform: translateY(294px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="83"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#"
                                      >Selenium Bioaccumulation Monitoring</a
                                    >
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="84"
                                  tabindex="0"
                                  row-index="8"
                                  class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="10"
                                  row-id="8"
                                  style="transform: translateY(336px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="85"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#">Mercury Monitoring Study</a>
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="86"
                                  tabindex="0"
                                  row-index="9"
                                  class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="11"
                                  row-id="9"
                                  style="transform: translateY(378px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="87"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#"
                                      >Hydrodynamics at Georgiana Slough Monitoring</a
                                    >
                                  </div>
                                </div>
                                <div
                                  role="row"
                                  comp-id="88"
                                  tabindex="0"
                                  row-index="10"
                                  class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="12"
                                  row-id="10"
                                  style="transform: translateY(420px); height: 42px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="89"
                                    col-id="name"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 0px; width: 320px"
                                  >
                                    <a class="bcn-grid-name" href="#"
                                      >Covered Fish Species Life Cycle Models</a
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-pinned-right-cols-container ag-hidden"
                              data-ref="eContainer"
                              role="rowgroup"
                              aria-hidden="true"
                              style="height: 1512px; width: 0px; max-width: 0px; min-width: 0px"
                            ></div>
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-full-width-container"
                              data-ref="eContainer"
                              role="rowgroup"
                              style="height: 1512px"
                            ></div>
                          </div>
                          <!--AG-FAKE-VERTICAL-SCROLL-->
                          <div
                            class="ag-body-vertical-scroll ag-apple-scrollbar ag-scrollbar-invisible ag-hidden"
                            aria-hidden="true"
                            style="width: 16px; max-width: 16px; min-width: 16px"
                          >
                            <div
                              class="ag-body-vertical-scroll-viewport"
                              data-ref="eViewport"
                              style="width: 16px; max-width: 16px; min-width: 16px"
                            >
                              <div
                                class="ag-body-vertical-scroll-container"
                                data-ref="eContainer"
                                style="
                                  height: 1512px;
                                  width: 16px;
                                  max-width: 16px;
                                  min-width: 16px;
                                "
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="ag-sticky-top"
                          data-ref="eStickyTop"
                          role="presentation"
                          style="top: 49px; height: 0px"
                        >
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-pinned-left-sticky-top"
                            data-ref="eContainer"
                            role="rowgroup"
                            aria-hidden="false"
                            style="width: 110px; max-width: 110px; min-width: 110px"
                          ></div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-viewport ag-sticky-top-viewport"
                            data-ref="eViewport"
                            role="rowgroup"
                          >
                            <div
                              class="ag-sticky-top-container"
                              data-ref="eContainer"
                              role="presentation"
                              style="width: 2050px"
                            ></div>
                          </div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-pinned-right-sticky-top ag-hidden"
                            data-ref="eContainer"
                            role="rowgroup"
                            aria-hidden="true"
                            style="width: 0px; max-width: 0px; min-width: 0px"
                          ></div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-sticky-top-full-width-container"
                            data-ref="eContainer"
                            role="rowgroup"
                          ></div>
                        </div>
                        <div
                          class="ag-sticky-bottom ag-invisible"
                          data-ref="eStickyBottom"
                          role="presentation"
                          style="bottom: 0px; height: 0px"
                        >
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-pinned-left-sticky-bottom"
                            data-ref="eContainer"
                            role="rowgroup"
                            aria-hidden="false"
                            style="width: 110px; max-width: 110px; min-width: 110px"
                          ></div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-viewport ag-sticky-bottom-viewport"
                            data-ref="eViewport"
                            role="rowgroup"
                          >
                            <div
                              class="ag-sticky-bottom-container"
                              data-ref="eContainer"
                              role="presentation"
                              style="width: 2050px"
                            ></div>
                          </div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-pinned-right-sticky-bottom ag-hidden"
                            data-ref="eContainer"
                            role="rowgroup"
                            aria-hidden="true"
                            style="width: 0px; max-width: 0px; min-width: 0px"
                          ></div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-sticky-bottom-full-width-container"
                            data-ref="eContainer"
                            role="rowgroup"
                          ></div>
                        </div>
                        <div
                          class="ag-floating-bottom ag-invisible"
                          data-ref="eBottom"
                          role="presentation"
                          style="min-height: 0px; height: 0px"
                        >
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-pinned-left-floating-bottom"
                            data-ref="eContainer"
                            role="rowgroup"
                            aria-hidden="false"
                            style="width: 110px; max-width: 110px; min-width: 110px"
                          ></div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-viewport ag-floating-bottom-viewport"
                            data-ref="eViewport"
                            role="rowgroup"
                          >
                            <div
                              class="ag-floating-bottom-container"
                              data-ref="eContainer"
                              role="presentation"
                              style="width: 2050px"
                            ></div>
                          </div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-pinned-right-floating-bottom ag-hidden"
                            data-ref="eContainer"
                            role="rowgroup"
                            aria-hidden="true"
                            style="width: 0px; max-width: 0px; min-width: 0px"
                          ></div>
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-floating-bottom-full-width-container"
                            data-ref="eContainer"
                            role="rowgroup"
                          ></div>
                        </div>
                        <!--AG-FAKE-HORIZONTAL-SCROLL-->
                        <div
                          class="ag-body-horizontal-scroll ag-apple-scrollbar ag-scrollbar-invisible ag-invisible"
                          aria-hidden="true"
                          style="bottom: 0px; height: 16px; max-height: 16px; min-height: 16px"
                        >
                          <div
                            class="ag-horizontal-left-spacer"
                            data-ref="eLeftSpacer"
                            style="width: 110px; max-width: 110px; min-width: 110px"
                          ></div>
                          <div
                            class="ag-body-horizontal-scroll-viewport"
                            data-ref="eViewport"
                            style="height: 16px; max-height: 16px; min-height: 16px"
                          >
                            <div
                              class="ag-body-horizontal-scroll-container"
                              data-ref="eContainer"
                              style="
                                width: 2050px;
                                height: 16px;
                                max-height: 16px;
                                min-height: 16px;
                              "
                            ></div>
                          </div>
                          <div
                            class="ag-horizontal-right-spacer ag-scroller-corner"
                            data-ref="eRightSpacer"
                            style="width: 0px; max-width: 0px; min-width: 0px"
                          ></div>
                        </div>
                        <!--AG-OVERLAY-WRAPPER-->
                        <div class="ag-overlay ag-hidden" role="presentation">
                          <div class="ag-overlay-panel" role="presentation">
                            <div
                              class="ag-overlay-wrapper ag-layout-normal"
                              data-ref="eOverlayWrapper"
                              role="presentation"
                              style="padding-top: 0px"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="ag-tab-guard ag-tab-guard-bottom"
                        role="presentation"
                        tabindex="0"
                      ></div>
                    </div>
                    <!--AG-PAGINATION-->
                    <div
                      class="ag-paging-panel ag-unselectable ag-focus-managed ag-hidden"
                      id="ag-29"
                      aria-hidden="true"
                    >
                      <div
                        class="ag-tab-guard ag-tab-guard-top"
                        role="presentation"
                        tabindex="0"
                      ></div>
                      <span class="ag-paging-page-size"
                        ><div
                          class="ag-picker-field ag-labeled ag-label-align-left ag-select"
                          role="presentation"
                        >
                          <div
                            data-ref="eLabel"
                            class="ag-label"
                            aria-hidden="false"
                            id="ag-31-label"
                          >
                            Page Size:
                          </div>
                          <div
                            class="ag-wrapper ag-picker-field-wrapper ag-picker-collapsed"
                            data-ref="eWrapper"
                            tabindex="0"
                            aria-expanded="false"
                            role="combobox"
                            aria-controls="ag-select-list-32"
                            aria-label="Page Size"
                          >
                            <div
                              class="ag-picker-field-display"
                              data-ref="eDisplayField"
                              id="ag-31-display"
                            >
                              100
                            </div>
                            <div class="ag-picker-field-icon" data-ref="eIcon" aria-hidden="true">
                              <span
                                class="ag-icon ag-icon-small-down"
                                role="presentation"
                                unselectable="on"
                              ></span>
                            </div>
                          </div></div></span
                      ><span class="ag-paging-row-summary-panel">
                        <span
                          class="ag-paging-row-summary-panel-number"
                          data-ref="lbFirstRowOnPage"
                          id="ag-29-first-row"
                          >1</span
                        >
                        <span id="ag-29-to">to</span>
                        <span
                          class="ag-paging-row-summary-panel-number"
                          data-ref="lbLastRowOnPage"
                          id="ag-29-last-row"
                          >0</span
                        >
                        <span id="ag-29-of">of</span>
                        <span
                          class="ag-paging-row-summary-panel-number"
                          data-ref="lbRecordCount"
                          id="ag-29-row-count"
                          >0</span
                        > </span
                      ><span class="ag-paging-page-summary-panel" role="presentation">
                        <div
                          class="ag-button ag-paging-button ag-disabled"
                          data-ref="btFirst"
                          role="button"
                          aria-label="First Page"
                          tabindex="0"
                          aria-disabled="true"
                        >
                          <span
                            class="ag-icon ag-icon-first"
                            role="presentation"
                            unselectable="on"
                          ></span>
                        </div>
                        <div
                          class="ag-button ag-paging-button ag-disabled"
                          data-ref="btPrevious"
                          role="button"
                          aria-label="Previous Page"
                          tabindex="0"
                          aria-disabled="true"
                        >
                          <span
                            class="ag-icon ag-icon-previous"
                            role="presentation"
                            unselectable="on"
                          ></span>
                        </div>
                        <span class="ag-paging-description">
                          <span id="ag-29-start-page">Page</span>
                          <span
                            class="ag-paging-number"
                            data-ref="lbCurrent"
                            id="ag-29-start-page-number"
                            >1</span
                          >
                          <span id="ag-29-of-page">of</span>
                          <span
                            class="ag-paging-number"
                            data-ref="lbTotal"
                            id="ag-29-of-page-number"
                            >1</span
                          >
                        </span>
                        <div
                          class="ag-button ag-paging-button ag-disabled"
                          data-ref="btNext"
                          role="button"
                          aria-label="Next Page"
                          tabindex="0"
                          aria-disabled="true"
                        >
                          <span
                            class="ag-icon ag-icon-next"
                            role="presentation"
                            unselectable="on"
                          ></span>
                        </div>
                        <div
                          class="ag-button ag-paging-button ag-disabled"
                          data-ref="btLast"
                          role="button"
                          aria-label="Last Page"
                          tabindex="0"
                          aria-disabled="true"
                        >
                          <span
                            class="ag-icon ag-icon-last"
                            role="presentation"
                            unselectable="on"
                          ></span>
                        </div>
                      </span>
                      <div
                        class="ag-tab-guard ag-tab-guard-bottom"
                        role="presentation"
                        tabindex="0"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-footer">
                <span id="fs-download"
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
                      <span class="esa-button__label"> Download crosswalk (CSV) </span>
                    </button>
                  </span>
                </span>
                <div class="row-count-data">
                  Total studies: <span id="fs-total">36</span>
                  <span id="fs-filtered" class="filtered-rows-count" hidden=""></span>
                </div>
              </div>
            </div>
            <div class="bcn-view-pane" id="view-timeline">
              <div class="bcn-timeline">
                <!-- Legend: plan-status colors -->
                <div class="bcn-timeline__legend">
                  <span class="bcn-timeline__legend-title">Plan status</span>
                  <span class="bcn-timeline__legend-item">
                    <span class="bcn-timeline__legend-dot" style="--_c: #d73027"></span>
                    Draft </span
                  ><span class="bcn-timeline__legend-item">
                    <span class="bcn-timeline__legend-dot" style="--_c: #fc8d59"></span> Submitted
                    to CDFW </span
                  ><span class="bcn-timeline__legend-item">
                    <span class="bcn-timeline__legend-dot" style="--_c: #e3c14d"></span> In Agency
                    Review </span
                  ><span class="bcn-timeline__legend-item">
                    <span class="bcn-timeline__legend-dot" style="--_c: #91cf60"></span>
                    Revising </span
                  ><span class="bcn-timeline__legend-item">
                    <span class="bcn-timeline__legend-dot" style="--_c: #1a9850"></span> Approved
                  </span>
                  <span class="bcn-timeline__legend-hint"
                    >Click a bar or study name to manage status &amp; dates</span
                  >
                </div>
                <div class="bcn-timeline__scroll">
                  <div class="bcn-timeline__canvas">
                    <!-- ── Axis header: 3 stacked rows (phases / years / milestones) ── -->
                    <header class="bcn-timeline__axis">
                      <div class="bcn-timeline__corner">Study</div>
                      <div class="bcn-timeline__head-plot">
                        <!-- continuous phase-band layer behind the whole header (phases + years + milestones) -->
                        <div class="bcn-timeline__head-bands">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                        </div>
                        <div class="bcn-timeline__head-phases">
                          <span
                            class="bcn-timeline__phase-tag"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          >
                            Baseline </span
                          ><span
                            class="bcn-timeline__phase-tag"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          >
                            In-water construction </span
                          ><span
                            class="bcn-timeline__phase-tag"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          >
                            Phase 1 ops </span
                          ><span
                            class="bcn-timeline__phase-tag"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          >
                            Phase 2 ops
                          </span>
                        </div>
                        <div class="bcn-timeline__head-years">
                          <span class="bcn-timeline__yr" style="left: 0%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’26</span> </span
                          ><span class="bcn-timeline__yr" style="left: 5.26%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’27</span> </span
                          ><span class="bcn-timeline__yr" style="left: 10.53%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’28</span> </span
                          ><span class="bcn-timeline__yr" style="left: 15.79%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’29</span> </span
                          ><span
                            class="bcn-timeline__yr is-five"
                            style="left: 21.05%; width: 5.26%"
                          >
                            <span class="bcn-timeline__yr-label">’30</span> </span
                          ><span class="bcn-timeline__yr" style="left: 26.32%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’31</span> </span
                          ><span class="bcn-timeline__yr" style="left: 31.58%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’32</span> </span
                          ><span class="bcn-timeline__yr" style="left: 36.84%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’33</span> </span
                          ><span class="bcn-timeline__yr" style="left: 42.11%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’34</span> </span
                          ><span
                            class="bcn-timeline__yr is-five"
                            style="left: 47.37%; width: 5.26%"
                          >
                            <span class="bcn-timeline__yr-label">’35</span> </span
                          ><span class="bcn-timeline__yr" style="left: 52.63%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’36</span> </span
                          ><span class="bcn-timeline__yr" style="left: 57.89%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’37</span> </span
                          ><span class="bcn-timeline__yr" style="left: 63.16%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’38</span> </span
                          ><span class="bcn-timeline__yr" style="left: 68.42%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’39</span> </span
                          ><span
                            class="bcn-timeline__yr is-five"
                            style="left: 73.68%; width: 5.26%"
                          >
                            <span class="bcn-timeline__yr-label">’40</span> </span
                          ><span class="bcn-timeline__yr" style="left: 78.95%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’41</span> </span
                          ><span class="bcn-timeline__yr" style="left: 84.21%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’42</span> </span
                          ><span class="bcn-timeline__yr" style="left: 89.47%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’43</span> </span
                          ><span class="bcn-timeline__yr" style="left: 94.74%; width: 5.26%">
                            <span class="bcn-timeline__yr-label">’44</span>
                          </span>
                        </div>
                        <div class="bcn-timeline__head-ms">
                          <span
                            class="bcn-timeline__ms-tag"
                            style="left: 26.31%"
                            title="30% design (WY2031)"
                          >
                            30% </span
                          ><span
                            class="bcn-timeline__ms-tag is-alt"
                            style="left: 31.57%"
                            title="60% design (WY2032)"
                          >
                            60% </span
                          ><span
                            class="bcn-timeline__ms-tag"
                            style="left: 44.28%"
                            title="In-water construction (cofferdam + intakes) (WY2034)"
                          >
                            In-water </span
                          ><span
                            class="bcn-timeline__ms-tag is-alt"
                            style="left: 89.47%"
                            title="Phase 1 operations (WY2043)"
                          >
                            Ph 1 ops </span
                          ><span
                            class="bcn-timeline__ms-tag"
                            style="left: 94.73%"
                            title="Phase 2 operations (WY2044)"
                          >
                            Ph 2 ops
                          </span>
                        </div>
                      </div>
                    </header>
                    <!-- ── Body: flat (headers + rows as siblings); host arranges by date | category ── -->
                    <div class="bcn-timeline__body" data-arrange="date">
                      <h3 class="bcn-timeline__lane-title" data-cat="Covered Species" hidden="">
                        Covered Species
                      </h3>
                      <h3
                        class="bcn-timeline__lane-title"
                        data-cat="Preconstruction Eng."
                        hidden=""
                      >
                        Preconstruction Eng.
                      </h3>
                      <h3
                        class="bcn-timeline__lane-title"
                        data-cat="Operations Monitoring"
                        hidden=""
                      >
                        Operations Monitoring
                      </h3>
                      <h3 class="bcn-timeline__lane-title" data-cat="Operations Measures" hidden="">
                        Operations Measures
                      </h3>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.23"
                        data-category="Preconstruction Eng."
                        data-cat-order="0"
                        data-lead="DCA"
                        data-plan="Approved"
                        data-phase="Baseline"
                        data-species=""
                        data-name="10.23 sacramento river bathymetric surveys"
                        data-start="2026-04-01"
                        data-plan-rank="0"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.23 — Sacramento River Bathymetric Surveys"
                          aria-label="Manage 10.23 Sacramento River Bathymetric Surveys"
                        >
                          <span class="bcn-timeline__coa">10.23</span>
                          <span class="bcn-timeline__name"
                            >Sacramento River Bathymetric Surveys</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.23"
                            data-start="2026-04-01"
                            data-end="2033-06-01"
                            style="left: 1.3%; width: 37.72%; --_c: #1a9850"
                            title="COA 10.23 — Sacramento River Bathymetric Surveys · Approved · 2026-04-01 → 2033-06-01"
                            aria-label="Manage 10.23 Sacramento River Bathymetric Surveys"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.24.1"
                        data-category="Preconstruction Eng."
                        data-cat-order="1"
                        data-lead="DCA"
                        data-plan="Approved"
                        data-phase="Baseline"
                        data-species=""
                        data-name="10.24.1 sacramento river hydraulic model"
                        data-start="2026-04-01"
                        data-plan-rank="0"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.24.1 — Sacramento River Hydraulic Model"
                          aria-label="Manage 10.24.1 Sacramento River Hydraulic Model"
                        >
                          <span class="bcn-timeline__coa">10.24.1</span>
                          <span class="bcn-timeline__name">Sacramento River Hydraulic Model</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.24.1"
                            data-start="2026-04-01"
                            data-end="2030-10-01"
                            style="left: 1.3%; width: 23.69%; --_c: #1a9850"
                            title="COA 10.24.1 — Sacramento River Hydraulic Model · Approved · 2026-04-01 → 2030-10-01"
                            aria-label="Manage 10.24.1 Sacramento River Hydraulic Model"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.24.2"
                        data-category="Preconstruction Eng."
                        data-cat-order="2"
                        data-lead="DCA"
                        data-plan="Approved"
                        data-phase="Baseline"
                        data-species=""
                        data-name="10.24.2 sediment transport model"
                        data-start="2026-04-01"
                        data-plan-rank="0"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.24.2 — Sediment Transport Model"
                          aria-label="Manage 10.24.2 Sediment Transport Model"
                        >
                          <span class="bcn-timeline__coa">10.24.2</span>
                          <span class="bcn-timeline__name">Sediment Transport Model</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.24.2"
                            data-start="2026-04-01"
                            data-end="2032-06-01"
                            style="left: 1.3%; width: 32.46%; --_c: #1a9850"
                            title="COA 10.24.2 — Sediment Transport Model · Approved · 2026-04-01 → 2032-06-01"
                            aria-label="Manage 10.24.2 Sediment Transport Model"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.25.1"
                        data-category="Preconstruction Eng."
                        data-cat-order="3"
                        data-lead="DCA"
                        data-plan="Approved"
                        data-phase="Baseline"
                        data-species=""
                        data-name="10.25.1 intake structure hydraulic model – mathematical"
                        data-start="2026-04-01"
                        data-plan-rank="0"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.25.1 — Intake Structure Hydraulic Model – Mathematical"
                          aria-label="Manage 10.25.1 Intake Structure Hydraulic Model – Mathematical"
                        >
                          <span class="bcn-timeline__coa">10.25.1</span>
                          <span class="bcn-timeline__name"
                            >Intake Structure Hydraulic Model – Mathematical</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.25.1"
                            data-start="2026-04-01"
                            data-end="2030-10-01"
                            style="left: 1.3%; width: 23.69%; --_c: #1a9850"
                            title="COA 10.25.1 — Intake Structure Hydraulic Model – Mathematical · Approved · 2026-04-01 → 2030-10-01"
                            aria-label="Manage 10.25.1 Intake Structure Hydraulic Model – Mathematical"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.26"
                        data-category="Preconstruction Eng."
                        data-cat-order="7"
                        data-lead="DCA"
                        data-plan="Revising"
                        data-phase="Baseline"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon|Striped bass"
                        data-name="10.26 incorporation of fish guidance system into the north delta intake structures"
                        data-start="2026-04-01"
                        data-plan-rank="1"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.26 — Incorporation of Fish Guidance System into the North Delta Intake Structures"
                          aria-label="Manage 10.26 Incorporation of Fish Guidance System into the North Delta Intake Structures"
                        >
                          <span class="bcn-timeline__coa">10.26</span>
                          <span class="bcn-timeline__name"
                            >Incorporation of Fish Guidance System into the North Delta Intake
                            Structures</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.26"
                            data-start="2026-04-01"
                            data-end="2031-03-01"
                            style="left: 1.3%; width: 25.87%; --_c: #91cf60"
                            title="COA 10.26 — Incorporation of Fish Guidance System into the North Delta Intake Structures · Revising · 2026-04-01 → 2031-03-01"
                            aria-label="Manage 10.26 Incorporation of Fish Guidance System into the North Delta Intake Structures"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.20.1"
                        data-category="Covered Species"
                        data-cat-order="4"
                        data-lead="DWR-DCO"
                        data-plan="Approved"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="10.20.1 installation of new real-time monitoring station"
                        data-start="2027-01-01"
                        data-plan-rank="0"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.20.1 — Installation of New Real-time Monitoring Station"
                          aria-label="Manage 10.20.1 Installation of New Real-time Monitoring Station"
                        >
                          <span class="bcn-timeline__coa">10.20.1</span>
                          <span class="bcn-timeline__name"
                            >Installation of New Real-time Monitoring Station</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.20.1"
                            data-start="2027-01-01"
                            data-end="2030-01-01"
                            style="left: 5.26%; width: 15.79%; --_c: #1a9850"
                            title="COA 10.20.1 — Installation of New Real-time Monitoring Station · Approved · 2027-01-01 → 2030-01-01"
                            aria-label="Manage 10.20.1 Installation of New Real-time Monitoring Station"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.10"
                        data-category="Covered Species"
                        data-cat-order="18"
                        data-lead="DWR-DISE"
                        data-plan="Approved"
                        data-phase="Baseline|Phase 1 ops|Phase 2 ops"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon"
                        data-name="10.21.10 studies to evaluate differences between ascending and descending limbs of the hydrograph"
                        data-start="2027-04-01"
                        data-plan-rank="0"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.10 — Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph"
                          aria-label="Manage 10.21.10 Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph"
                        >
                          <span class="bcn-timeline__coa">10.21.10</span>
                          <span class="bcn-timeline__name"
                            >Studies to Evaluate Differences Between Ascending and Descending Limbs
                            of the Hydrograph</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.10"
                            data-start="2027-04-01"
                            data-end="2029-03-01"
                            style="left: 6.56%; width: 10.09%; --_c: #1a9850"
                            title="COA 10.21.10 — Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph · Approved · 2027-04-01 → 2029-03-01"
                            aria-label="Manage 10.21.10 Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.19.1"
                        data-category="Covered Species"
                        data-cat-order="1"
                        data-lead="DWR-DISE"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon|White sturgeon"
                        data-name="10.19.1 migration and survival study"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.19.1 — Migration and Survival Study"
                          aria-label="Manage 10.19.1 Migration and Survival Study"
                        >
                          <span class="bcn-timeline__coa">10.19.1</span>
                          <span class="bcn-timeline__name">Migration and Survival Study</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.19.1"
                            data-start="2027-04-01"
                            data-end="2034-06-01"
                            style="left: 6.56%; width: 37.72%; --_c: #e3c14d"
                            title="COA 10.19.1 — Migration and Survival Study · In Agency Review · 2027-04-01 → 2034-06-01"
                            aria-label="Manage 10.19.1 Migration and Survival Study"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.19.2"
                        data-category="Covered Species"
                        data-cat-order="2"
                        data-lead="DWR-DISE"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon|Striped bass|Sacramento pikeminnow"
                        data-name="10.19.2 predation study"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.19.2 — Predation Study"
                          aria-label="Manage 10.19.2 Predation Study"
                        >
                          <span class="bcn-timeline__coa">10.19.2</span>
                          <span class="bcn-timeline__name">Predation Study</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.19.2"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                            title="COA 10.19.2 — Predation Study · In Agency Review · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.19.2 Predation Study"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.19.3"
                        data-category="Covered Species"
                        data-cat-order="3"
                        data-lead="DWR-DISE"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="Delta smelt|Longfin smelt|Winter-run Chinook salmon"
                        data-name="10.19.3 abundance and distribution study"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.19.3 — Abundance and Distribution Study"
                          aria-label="Manage 10.19.3 Abundance and Distribution Study"
                        >
                          <span class="bcn-timeline__coa">10.19.3</span>
                          <span class="bcn-timeline__name">Abundance and Distribution Study</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.19.3"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                            title="COA 10.19.3 — Abundance and Distribution Study · In Agency Review · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.19.3 Abundance and Distribution Study"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.20.4"
                        data-category="Covered Species"
                        data-cat-order="7"
                        data-lead="DWR-DISE"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="White sturgeon"
                        data-name="10.20.4 selenium bioaccumulation monitoring"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.20.4 — Selenium Bioaccumulation Monitoring"
                          aria-label="Manage 10.20.4 Selenium Bioaccumulation Monitoring"
                        >
                          <span class="bcn-timeline__coa">10.20.4</span>
                          <span class="bcn-timeline__name"
                            >Selenium Bioaccumulation Monitoring</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.20.4"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                            title="COA 10.20.4 — Selenium Bioaccumulation Monitoring · In Agency Review · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.20.4 Selenium Bioaccumulation Monitoring"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.20.5"
                        data-category="Covered Species"
                        data-cat-order="8"
                        data-lead="DWR-DISE"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="White sturgeon"
                        data-name="10.20.5 mercury monitoring study"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.20.5 — Mercury Monitoring Study"
                          aria-label="Manage 10.20.5 Mercury Monitoring Study"
                        >
                          <span class="bcn-timeline__coa">10.20.5</span>
                          <span class="bcn-timeline__name">Mercury Monitoring Study</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.20.5"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                            title="COA 10.20.5 — Mercury Monitoring Study · In Agency Review · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.20.5 Mercury Monitoring Study"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.2"
                        data-category="Covered Species"
                        data-cat-order="10"
                        data-lead="DWR-DCO"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon|Delta smelt|Longfin smelt"
                        data-name="10.21.2 covered fish species life cycle models"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.2 — Covered Fish Species Life Cycle Models"
                          aria-label="Manage 10.21.2 Covered Fish Species Life Cycle Models"
                        >
                          <span class="bcn-timeline__coa">10.21.2</span>
                          <span class="bcn-timeline__name"
                            >Covered Fish Species Life Cycle Models</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.2"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                            title="COA 10.21.2 — Covered Fish Species Life Cycle Models · In Agency Review · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.21.2 Covered Fish Species Life Cycle Models"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.3"
                        data-category="Covered Species"
                        data-cat-order="11"
                        data-lead="DWR-DISE"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="Delta smelt|Longfin smelt|Zooplankton"
                        data-name="10.21.3 food web and larval fishes entrainment study"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.3 — Food Web and Larval Fishes Entrainment Study"
                          aria-label="Manage 10.21.3 Food Web and Larval Fishes Entrainment Study"
                        >
                          <span class="bcn-timeline__coa">10.21.3</span>
                          <span class="bcn-timeline__name"
                            >Food Web and Larval Fishes Entrainment Study</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.3"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                            title="COA 10.21.3 — Food Web and Larval Fishes Entrainment Study · In Agency Review · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.21.3 Food Web and Larval Fishes Entrainment Study"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.7"
                        data-category="Covered Species"
                        data-cat-order="15"
                        data-lead="DWR-DCO"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon"
                        data-name="10.21.7 flow reversal and routing minimization"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.7 — Flow Reversal and Routing Minimization"
                          aria-label="Manage 10.21.7 Flow Reversal and Routing Minimization"
                        >
                          <span class="bcn-timeline__coa">10.21.7</span>
                          <span class="bcn-timeline__name"
                            >Flow Reversal and Routing Minimization</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.7"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                            title="COA 10.21.7 — Flow Reversal and Routing Minimization · In Agency Review · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.21.7 Flow Reversal and Routing Minimization"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.8"
                        data-category="Covered Species"
                        data-cat-order="16"
                        data-lead="DWR-DCO/BDO"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon|Delta smelt"
                        data-name="10.21.8 joint operations study plan"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.8 — Joint Operations Study Plan"
                          aria-label="Manage 10.21.8 Joint Operations Study Plan"
                        >
                          <span class="bcn-timeline__coa">10.21.8</span>
                          <span class="bcn-timeline__name">Joint Operations Study Plan</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.8"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                            title="COA 10.21.8 — Joint Operations Study Plan · In Agency Review · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.21.8 Joint Operations Study Plan"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.9"
                        data-category="Covered Species"
                        data-cat-order="17"
                        data-lead="DWR-DCO/BDO"
                        data-plan="In Agency Review"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="Winter-run Chinook salmon|Delta smelt"
                        data-name="10.21.9 modeling needed to implement real-time operations"
                        data-start="2027-04-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.9 — Modeling Needed to Implement Real-time Operations"
                          aria-label="Manage 10.21.9 Modeling Needed to Implement Real-time Operations"
                        >
                          <span class="bcn-timeline__coa">10.21.9</span>
                          <span class="bcn-timeline__name"
                            >Modeling Needed to Implement Real-time Operations</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.9"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #e3c14d"
                            title="COA 10.21.9 — Modeling Needed to Implement Real-time Operations · In Agency Review · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.21.9 Modeling Needed to Implement Real-time Operations"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.20.2"
                        data-category="Covered Species"
                        data-cat-order="5"
                        data-lead="DWR-DCO"
                        data-plan="Submitted to CDFW"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="10.20.2 sediment and turbidity monitoring"
                        data-start="2027-04-01"
                        data-plan-rank="3"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.20.2 — Sediment and Turbidity Monitoring"
                          aria-label="Manage 10.20.2 Sediment and Turbidity Monitoring"
                        >
                          <span class="bcn-timeline__coa">10.20.2</span>
                          <span class="bcn-timeline__name">Sediment and Turbidity Monitoring</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.20.2"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #fc8d59"
                            title="COA 10.20.2 — Sediment and Turbidity Monitoring · Submitted to CDFW · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.20.2 Sediment and Turbidity Monitoring"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.1"
                        data-category="Covered Species"
                        data-cat-order="9"
                        data-lead="DWR-DISE"
                        data-plan="Draft"
                        data-phase="Baseline|In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="10.21.1 hydrodynamics at georgiana slough monitoring"
                        data-start="2027-04-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.1 — Hydrodynamics at Georgiana Slough Monitoring"
                          aria-label="Manage 10.21.1 Hydrodynamics at Georgiana Slough Monitoring"
                        >
                          <span class="bcn-timeline__coa">10.21.1</span>
                          <span class="bcn-timeline__name"
                            >Hydrodynamics at Georgiana Slough Monitoring</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.1"
                            data-start="2027-04-01"
                            data-end="2044-06-01"
                            style="left: 6.56%; width: 90.36%; --_c: #d73027"
                            title="COA 10.21.1 — Hydrodynamics at Georgiana Slough Monitoring · Draft · 2027-04-01 → 2044-06-01"
                            aria-label="Manage 10.21.1 Hydrodynamics at Georgiana Slough Monitoring"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.6"
                        data-category="Covered Species"
                        data-cat-order="14"
                        data-lead="DWR-DCO"
                        data-plan="Draft"
                        data-phase="Baseline|In-water construction"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon|Striped bass"
                        data-name="10.21.6 refugia design and field study"
                        data-start="2027-04-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.6 — Refugia Design and Field Study"
                          aria-label="Manage 10.21.6 Refugia Design and Field Study"
                        >
                          <span class="bcn-timeline__coa">10.21.6</span>
                          <span class="bcn-timeline__name">Refugia Design and Field Study</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.6"
                            data-start="2027-04-01"
                            data-end="2043-01-01"
                            style="left: 6.56%; width: 82.91%; --_c: #d73027"
                            title="COA 10.21.6 — Refugia Design and Field Study · Draft · 2027-04-01 → 2043-01-01"
                            aria-label="Manage 10.21.6 Refugia Design and Field Study"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.18.3"
                        data-category="Covered Species"
                        data-cat-order="0"
                        data-lead="DWR-DCO/BDO"
                        data-plan="In Agency Review"
                        data-phase="Baseline|Phase 1 ops|Phase 2 ops"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon|Delta smelt"
                        data-name="10.18.3 evaluate alternative operating criteria for the ascending or descending limb of the hydrograph during real-time operations"
                        data-start="2028-01-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.18.3 — Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations"
                          aria-label="Manage 10.18.3 Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations"
                        >
                          <span class="bcn-timeline__coa">10.18.3</span>
                          <span class="bcn-timeline__name"
                            >Evaluate Alternative Operating Criteria for the Ascending or Descending
                            Limb of the Hydrograph During Real-time Operations</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.18.3"
                            data-start="2028-01-01"
                            data-end="2040-01-01"
                            style="left: 10.52%; width: 63.16%; --_c: #e3c14d"
                            title="COA 10.18.3 — Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations · In Agency Review · 2028-01-01 → 2040-01-01"
                            aria-label="Manage 10.18.3 Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.25.2"
                        data-category="Preconstruction Eng."
                        data-cat-order="4"
                        data-lead="DCA"
                        data-plan="Submitted to CDFW"
                        data-phase="Baseline"
                        data-species=""
                        data-name="10.25.2 intake structure hydraulic modeling – physical"
                        data-start="2030-01-01"
                        data-plan-rank="3"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.25.2 — Intake Structure Hydraulic Modeling – Physical"
                          aria-label="Manage 10.25.2 Intake Structure Hydraulic Modeling – Physical"
                        >
                          <span class="bcn-timeline__coa">10.25.2</span>
                          <span class="bcn-timeline__name"
                            >Intake Structure Hydraulic Modeling – Physical</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.25.2"
                            data-start="2030-01-01"
                            data-end="2032-01-01"
                            style="left: 21.05%; width: 10.52%; --_c: #fc8d59"
                            title="COA 10.25.2 — Intake Structure Hydraulic Modeling – Physical · Submitted to CDFW · 2030-01-01 → 2032-01-01"
                            aria-label="Manage 10.25.2 Intake Structure Hydraulic Modeling – Physical"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.25.3"
                        data-category="Preconstruction Eng."
                        data-cat-order="5"
                        data-lead="DCA"
                        data-plan="Submitted to CDFW"
                        data-phase="Baseline"
                        data-species=""
                        data-name="10.25.3 intake tee screen hydraulic model – mathematical"
                        data-start="2030-01-01"
                        data-plan-rank="3"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.25.3 — Intake Tee Screen Hydraulic Model – Mathematical"
                          aria-label="Manage 10.25.3 Intake Tee Screen Hydraulic Model – Mathematical"
                        >
                          <span class="bcn-timeline__coa">10.25.3</span>
                          <span class="bcn-timeline__name"
                            >Intake Tee Screen Hydraulic Model – Mathematical</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.25.3"
                            data-start="2030-01-01"
                            data-end="2032-01-01"
                            style="left: 21.05%; width: 10.52%; --_c: #fc8d59"
                            title="COA 10.25.3 — Intake Tee Screen Hydraulic Model – Mathematical · Submitted to CDFW · 2030-01-01 → 2032-01-01"
                            aria-label="Manage 10.25.3 Intake Tee Screen Hydraulic Model – Mathematical"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.25.4"
                        data-category="Preconstruction Eng."
                        data-cat-order="6"
                        data-lead="DCA"
                        data-plan="Draft"
                        data-phase="Baseline"
                        data-species=""
                        data-name="10.25.4 intake tee screen hydraulic model – physical"
                        data-start="2030-01-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.25.4 — Intake Tee Screen Hydraulic Model – Physical"
                          aria-label="Manage 10.25.4 Intake Tee Screen Hydraulic Model – Physical"
                        >
                          <span class="bcn-timeline__coa">10.25.4</span>
                          <span class="bcn-timeline__name"
                            >Intake Tee Screen Hydraulic Model – Physical</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.25.4"
                            data-start="2030-01-01"
                            data-end="2032-01-01"
                            style="left: 21.05%; width: 10.52%; --_c: #d73027"
                            title="COA 10.25.4 — Intake Tee Screen Hydraulic Model – Physical · Draft · 2030-01-01 → 2032-01-01"
                            aria-label="Manage 10.25.4 Intake Tee Screen Hydraulic Model – Physical"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.5"
                        data-category="Covered Species"
                        data-cat-order="13"
                        data-lead="DWR-DISE"
                        data-plan="In Agency Review"
                        data-phase="Baseline|Phase 1 ops|Phase 2 ops"
                        data-species="Delta smelt|Longfin smelt"
                        data-name="10.21.5 delta smelt and longfin smelt spawning habitat study"
                        data-start="2033-01-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.5 — Delta Smelt and Longfin Smelt Spawning Habitat Study"
                          aria-label="Manage 10.21.5 Delta Smelt and Longfin Smelt Spawning Habitat Study"
                        >
                          <span class="bcn-timeline__coa">10.21.5</span>
                          <span class="bcn-timeline__name"
                            >Delta Smelt and Longfin Smelt Spawning Habitat Study</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.5"
                            data-start="2033-01-01"
                            data-end="2044-06-01"
                            style="left: 36.84%; width: 60.07%; --_c: #e3c14d"
                            title="COA 10.21.5 — Delta Smelt and Longfin Smelt Spawning Habitat Study · In Agency Review · 2033-01-01 → 2044-06-01"
                            aria-label="Manage 10.21.5 Delta Smelt and Longfin Smelt Spawning Habitat Study"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.21.4"
                        data-category="Covered Species"
                        data-cat-order="12"
                        data-lead="DWR-DISE"
                        data-plan="Draft"
                        data-phase="In-water construction|Phase 1 ops|Phase 2 ops"
                        data-species="Delta smelt|Longfin smelt|Benthic macroinvertebrates"
                        data-name="10.21.4 tidal wetland restoration efficacy study"
                        data-start="2034-01-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.21.4 — Tidal Wetland Restoration Efficacy Study"
                          aria-label="Manage 10.21.4 Tidal Wetland Restoration Efficacy Study"
                        >
                          <span class="bcn-timeline__coa">10.21.4</span>
                          <span class="bcn-timeline__name"
                            >Tidal Wetland Restoration Efficacy Study</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.21.4"
                            data-start="2034-01-01"
                            data-end="2044-06-01"
                            style="left: 42.1%; width: 54.81%; --_c: #d73027"
                            title="COA 10.21.4 — Tidal Wetland Restoration Efficacy Study · Draft · 2034-01-01 → 2044-06-01"
                            aria-label="Manage 10.21.4 Tidal Wetland Restoration Efficacy Study"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.20.3"
                        data-category="Covered Species"
                        data-cat-order="6"
                        data-lead="DWR-DISE"
                        data-plan="In Agency Review"
                        data-phase="Baseline|Phase 1 ops|Phase 2 ops"
                        data-species="Harmful algal blooms"
                        data-name="10.20.3 harmful algal bloom monitoring"
                        data-start="2038-01-01"
                        data-plan-rank="2"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.20.3 — Harmful Algal Bloom Monitoring"
                          aria-label="Manage 10.20.3 Harmful Algal Bloom Monitoring"
                        >
                          <span class="bcn-timeline__coa">10.20.3</span>
                          <span class="bcn-timeline__name">Harmful Algal Bloom Monitoring</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.20.3"
                            data-start="2038-01-01"
                            data-end="2044-06-01"
                            style="left: 63.16%; width: 33.76%; --_c: #e3c14d"
                            title="COA 10.20.3 — Harmful Algal Bloom Monitoring · In Agency Review · 2038-01-01 → 2044-06-01"
                            aria-label="Manage 10.20.3 Harmful Algal Bloom Monitoring"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="12.6.5"
                        data-category="Operations Measures"
                        data-cat-order="2"
                        data-lead="DWR-DCO/BDO"
                        data-plan="Draft"
                        data-phase="Phase 1 ops|Phase 2 ops"
                        data-species="Longfin smelt"
                        data-name="12.6.5 spring longfin smelt distribution"
                        data-start="2041-01-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 12.6.5 — Spring Longfin Smelt Distribution"
                          aria-label="Manage 12.6.5 Spring Longfin Smelt Distribution"
                        >
                          <span class="bcn-timeline__coa">12.6.5</span>
                          <span class="bcn-timeline__name">Spring Longfin Smelt Distribution</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="12.6.5"
                            data-start="2041-01-01"
                            data-end="2043-01-01"
                            style="left: 78.95%; width: 10.52%; --_c: #d73027"
                            title="COA 12.6.5 — Spring Longfin Smelt Distribution · Draft · 2041-01-01 → 2043-01-01"
                            aria-label="Manage 12.6.5 Spring Longfin Smelt Distribution"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.27"
                        data-category="Operations Monitoring"
                        data-cat-order="0"
                        data-lead="DCA"
                        data-plan="Draft"
                        data-phase="Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="10.27 hydraulic testing for velocity requirements"
                        data-start="2042-06-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.27 — Hydraulic Testing for Velocity Requirements"
                          aria-label="Manage 10.27 Hydraulic Testing for Velocity Requirements"
                        >
                          <span class="bcn-timeline__coa">10.27</span>
                          <span class="bcn-timeline__name"
                            >Hydraulic Testing for Velocity Requirements</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.27"
                            data-start="2042-06-01"
                            data-end="2043-01-01"
                            style="left: 86.38%; width: 3.08%; --_c: #d73027"
                            title="COA 10.27 — Hydraulic Testing for Velocity Requirements · Draft · 2042-06-01 → 2043-01-01"
                            aria-label="Manage 10.27 Hydraulic Testing for Velocity Requirements"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.3"
                        data-category="Operations Monitoring"
                        data-cat-order="5"
                        data-lead="DWR-DISE"
                        data-plan="Draft"
                        data-phase="Phase 1 ops|Phase 2 ops"
                        data-species="Winter-run Chinook salmon|Spring-run Chinook salmon"
                        data-name="10.3 screen impingement study"
                        data-start="2042-06-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.3 — Screen Impingement Study"
                          aria-label="Manage 10.3 Screen Impingement Study"
                        >
                          <span class="bcn-timeline__coa">10.3</span>
                          <span class="bcn-timeline__name">Screen Impingement Study</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.3"
                            data-start="2042-06-01"
                            data-end="2043-01-01"
                            style="left: 86.38%; width: 3.08%; --_c: #d73027"
                            title="COA 10.3 — Screen Impingement Study · Draft · 2042-06-01 → 2043-01-01"
                            aria-label="Manage 10.3 Screen Impingement Study"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.27.1"
                        data-category="Operations Monitoring"
                        data-cat-order="1"
                        data-lead="DCA"
                        data-plan="Draft"
                        data-phase="Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="10.27.1 hydraulic testing procedures"
                        data-start="2043-01-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.27.1 — Hydraulic Testing Procedures"
                          aria-label="Manage 10.27.1 Hydraulic Testing Procedures"
                        >
                          <span class="bcn-timeline__coa">10.27.1</span>
                          <span class="bcn-timeline__name">Hydraulic Testing Procedures</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.27.1"
                            data-start="2043-01-01"
                            data-end="2043-06-01"
                            style="left: 89.47%; width: 2.18%; --_c: #d73027"
                            title="COA 10.27.1 — Hydraulic Testing Procedures · Draft · 2043-01-01 → 2043-06-01"
                            aria-label="Manage 10.27.1 Hydraulic Testing Procedures"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.27.2"
                        data-category="Operations Monitoring"
                        data-cat-order="2"
                        data-lead="DCA"
                        data-plan="Draft"
                        data-phase="Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="10.27.2 approach velocity testing compliance"
                        data-start="2043-01-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.27.2 — Approach Velocity Testing Compliance"
                          aria-label="Manage 10.27.2 Approach Velocity Testing Compliance"
                        >
                          <span class="bcn-timeline__coa">10.27.2</span>
                          <span class="bcn-timeline__name"
                            >Approach Velocity Testing Compliance</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.27.2"
                            data-start="2043-01-01"
                            data-end="2044-06-01"
                            style="left: 89.47%; width: 7.45%; --_c: #d73027"
                            title="COA 10.27.2 — Approach Velocity Testing Compliance · Draft · 2043-01-01 → 2044-06-01"
                            aria-label="Manage 10.27.2 Approach Velocity Testing Compliance"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.27.3"
                        data-category="Operations Monitoring"
                        data-cat-order="3"
                        data-lead="DCA"
                        data-plan="Draft"
                        data-phase="Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="10.27.3 hydraulic testing reports"
                        data-start="2043-01-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.27.3 — Hydraulic Testing Reports"
                          aria-label="Manage 10.27.3 Hydraulic Testing Reports"
                        >
                          <span class="bcn-timeline__coa">10.27.3</span>
                          <span class="bcn-timeline__name">Hydraulic Testing Reports</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.27.3"
                            data-start="2043-01-01"
                            data-end="2044-06-01"
                            style="left: 89.47%; width: 7.45%; --_c: #d73027"
                            title="COA 10.27.3 — Hydraulic Testing Reports · Draft · 2043-01-01 → 2044-06-01"
                            aria-label="Manage 10.27.3 Hydraulic Testing Reports"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="10.29"
                        data-category="Operations Monitoring"
                        data-cat-order="4"
                        data-lead="DCA"
                        data-plan="Draft"
                        data-phase="Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="10.29 sediment management"
                        data-start="2043-01-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 10.29 — Sediment Management"
                          aria-label="Manage 10.29 Sediment Management"
                        >
                          <span class="bcn-timeline__coa">10.29</span>
                          <span class="bcn-timeline__name">Sediment Management</span>
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="10.29"
                            data-start="2043-01-01"
                            data-end="2044-06-01"
                            style="left: 89.47%; width: 7.45%; --_c: #d73027"
                            title="COA 10.29 — Sediment Management · Draft · 2043-01-01 → 2044-06-01"
                            aria-label="Manage 10.29 Sediment Management"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="11.1109"
                        data-category="Operations Measures"
                        data-cat-order="0"
                        data-lead="DCA"
                        data-plan="Draft"
                        data-phase="Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="11.1109 velocity requirements at north delta intakes"
                        data-start="2043-01-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 11.1109 — Velocity Requirements at North Delta Intakes"
                          aria-label="Manage 11.1109 Velocity Requirements at North Delta Intakes"
                        >
                          <span class="bcn-timeline__coa">11.1109</span>
                          <span class="bcn-timeline__name"
                            >Velocity Requirements at North Delta Intakes</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="11.1109"
                            data-start="2043-01-01"
                            data-end="2044-06-01"
                            style="left: 89.47%; width: 7.45%; --_c: #d73027"
                            title="COA 11.1109 — Velocity Requirements at North Delta Intakes · Draft · 2043-01-01 → 2044-06-01"
                            aria-label="Manage 11.1109 Velocity Requirements at North Delta Intakes"
                          ></button>
                        </div>
                      </div>
                      <div
                        class="bcn-timeline__row"
                        data-coa="11.109.1"
                        data-category="Operations Measures"
                        data-cat-order="1"
                        data-lead="DWR-DCO"
                        data-plan="Draft"
                        data-phase="Phase 1 ops|Phase 2 ops"
                        data-species=""
                        data-name="11.109.1 no diversions without north delta intake screens"
                        data-start="2043-01-01"
                        data-plan-rank="4"
                      >
                        <button
                          type="button"
                          class="bcn-timeline__row-label"
                          title="COA 11.109.1 — No Diversions Without North Delta Intake Screens"
                          aria-label="Manage 11.109.1 No Diversions Without North Delta Intake Screens"
                        >
                          <span class="bcn-timeline__coa">11.109.1</span>
                          <span class="bcn-timeline__name"
                            >No Diversions Without North Delta Intake Screens</span
                          >
                        </button>
                        <div class="bcn-timeline__plot">
                          <span
                            class="bcn-timeline__band"
                            data-phase="baseline"
                            style="left: 15.79%; width: 26.32%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="in-water-construction"
                            style="left: 42.11%; width: 47.37%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase1-ops"
                            style="left: 89.47%; width: 5.26%"
                          ></span
                          ><span
                            class="bcn-timeline__band"
                            data-phase="phase2-ops"
                            style="left: 94.74%; width: 5.26%"
                          ></span>
                          <span class="bcn-timeline__grid" style="left: 5.26%"></span
                          ><span class="bcn-timeline__grid" style="left: 10.53%"></span
                          ><span class="bcn-timeline__grid" style="left: 15.79%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 21.05%"></span
                          ><span class="bcn-timeline__grid" style="left: 26.32%"></span
                          ><span class="bcn-timeline__grid" style="left: 31.58%"></span
                          ><span class="bcn-timeline__grid" style="left: 36.84%"></span
                          ><span class="bcn-timeline__grid" style="left: 42.11%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 47.37%"></span
                          ><span class="bcn-timeline__grid" style="left: 52.63%"></span
                          ><span class="bcn-timeline__grid" style="left: 57.89%"></span
                          ><span class="bcn-timeline__grid" style="left: 63.16%"></span
                          ><span class="bcn-timeline__grid" style="left: 68.42%"></span
                          ><span class="bcn-timeline__grid is-five" style="left: 73.68%"></span
                          ><span class="bcn-timeline__grid" style="left: 78.95%"></span
                          ><span class="bcn-timeline__grid" style="left: 84.21%"></span
                          ><span class="bcn-timeline__grid" style="left: 89.47%"></span
                          ><span class="bcn-timeline__grid" style="left: 94.74%"></span>
                          <span class="bcn-timeline__ms-line" style="left: 26.31%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 31.57%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 44.28%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 89.47%"></span
                          ><span class="bcn-timeline__ms-line" style="left: 94.73%"></span>
                          <span class="bcn-timeline__today" style="left: 2.38%"></span>
                          <button
                            type="button"
                            class="bcn-timeline__bar"
                            data-coa="11.109.1"
                            data-start="2043-01-01"
                            data-end="2044-06-01"
                            style="left: 89.47%; width: 7.45%; --_c: #d73027"
                            title="COA 11.109.1 — No Diversions Without North Delta Intake Screens · Draft · 2043-01-01 → 2044-06-01"
                            aria-label="Manage 11.109.1 No Diversions Without North Delta Intake Screens"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <esa-dialog id="fs-outputs" size="md" style="--_dialog-width: min(560px, 94vw)">
        <span slot="header" class="bcn-out__head">Generate outputs</span>
        <p class="bcn-out__lede">
          Every document below is generated live from this single dataset — edit a study once and
          each output regenerates. No more re-keying across four files.
        </p>
        <ul class="bcn-out__list">
          <li class="bcn-out__item">
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
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </span>
            <div>
              <strong>Covered Fish Species Monitoring &amp; Science Plan</strong
              ><span>Word — the 27 study sketches, ready for CDFW review</span>
            </div>
            <span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> .docx </span>
              </button>
            </span>
          </li>
          <li class="bcn-out__item">
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
                <path d="M12 3v18"></path>
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M3 15h18"></path>
              </svg>
            </span>
            <div>
              <strong>ITP Aquatic Study Crosswalk</strong
              ><span>Excel — the wide reference table</span>
            </div>
            <span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> .xlsx </span>
              </button>
            </span>
          </li>
          <li class="bcn-out__item">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            <div>
              <strong>Roles &amp; Responsibilities Summary</strong
              ><span>Excel — the RACI matrix</span>
            </div>
            <span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> .xlsx </span>
              </button>
            </span>
          </li>
          <li class="bcn-out__item">
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
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </span>
            <div>
              <strong>Prior-to-2030 Timeline &amp; Gantt</strong
              ><span>PDF — the water-year schedule</span>
            </div>
            <span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> .pdf </span>
              </button>
            </span>
          </li>
        </ul>
        <div slot="footer" class="bcn-out__foot">
          <span id="fs-outputs-close"
            ><span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Close </span>
              </button>
            </span>
          </span>
        </div>
      </esa-dialog>
      <esa-side-dialog
        id="fs-drawer"
        size="md"
        style="--z-modal: 1300; --z-modal-backdrop: 1250"
        position="right"
      >
        <div slot="header" class="bcn-drawer-head">
          <span class="bcn-drawer-head__badge" id="fs-drawer-coa">COA —</span>
          <span class="bcn-drawer-head__title" id="fs-drawer-title">Manage study</span>
        </div>
        <div class="bcn-drawer">
          <div class="bcn-status-select" id="fs-drawer-plan" data-value="draft">
            <span class="bcn-status-select__label">Plan status</span>
            <div class="bcn-status-select__dd">
              <button
                type="button"
                class="bcn-status-select__trigger"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span
                  class="bcn-status-select__dot bcn-status-select__dot--trigger"
                  style="background: #d73027"
                ></span>
                <span class="bcn-status-select__value">Draft</span>
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
                  data-value="draft"
                  data-label="Draft"
                  data-color="#d73027"
                  aria-selected="true"
                >
                  <span class="bcn-status-select__dot" style="background: #d73027"></span>Draft
                </li>
                <li
                  class="bcn-status-select__opt"
                  role="option"
                  data-value="submitted"
                  data-label="Submitted to CDFW"
                  data-color="#fc8d59"
                  aria-selected="false"
                >
                  <span class="bcn-status-select__dot" style="background: #fc8d59"></span>Submitted
                  to CDFW
                </li>
                <li
                  class="bcn-status-select__opt"
                  role="option"
                  data-value="in-review"
                  data-label="In Agency Review"
                  data-color="#e3c14d"
                  aria-selected="false"
                >
                  <span class="bcn-status-select__dot" style="background: #e3c14d"></span>In Agency
                  Review
                </li>
                <li
                  class="bcn-status-select__opt"
                  role="option"
                  data-value="revising"
                  data-label="Revising"
                  data-color="#91cf60"
                  aria-selected="false"
                >
                  <span class="bcn-status-select__dot" style="background: #91cf60"></span>Revising
                </li>
                <li
                  class="bcn-status-select__opt"
                  role="option"
                  data-value="approved"
                  data-label="Approved"
                  data-color="#1a9850"
                  aria-selected="false"
                >
                  <span class="bcn-status-select__dot" style="background: #1a9850"></span>Approved
                </li>
              </ul>
            </div>
          </div>
          <div class="bcn-status-select" id="fs-drawer-exec" data-value="not-started">
            <span class="bcn-status-select__label">Execution status</span>
            <div class="bcn-status-select__dd">
              <button
                type="button"
                class="bcn-status-select__trigger"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span
                  class="bcn-status-select__dot bcn-status-select__dot--trigger"
                  style="background: #d73027"
                ></span>
                <span class="bcn-status-select__value">Not Started</span>
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
                  data-value="not-started"
                  data-label="Not Started"
                  data-color="#d73027"
                  aria-selected="true"
                >
                  <span class="bcn-status-select__dot" style="background: #d73027"></span>Not
                  Started
                </li>
                <li
                  class="bcn-status-select__opt"
                  role="option"
                  data-value="planning"
                  data-label="Planning"
                  data-color="#fc8d59"
                  aria-selected="false"
                >
                  <span class="bcn-status-select__dot" style="background: #fc8d59"></span>Planning
                </li>
                <li
                  class="bcn-status-select__opt"
                  role="option"
                  data-value="active"
                  data-label="Active Fieldwork"
                  data-color="#e3c14d"
                  aria-selected="false"
                >
                  <span class="bcn-status-select__dot" style="background: #e3c14d"></span>Active
                  Fieldwork
                </li>
                <li
                  class="bcn-status-select__opt"
                  role="option"
                  data-value="complete"
                  data-label="Complete"
                  data-color="#1a9850"
                  aria-selected="false"
                >
                  <span class="bcn-status-select__dot" style="background: #1a9850"></span>Complete
                </li>
              </ul>
            </div>
          </div>
          <div class="bcn-drawer__dates">
            <esa-date-picker
              id="fs-drawer-start"
              label="Schedule start"
              size="md"
            ></esa-date-picker>
            <esa-date-picker id="fs-drawer-end" label="Schedule end" size="md"></esa-date-picker>
          </div>
          <esa-date-picker id="fs-drawer-due" label="Study plan due" size="md"></esa-date-picker>
        </div>
        <span slot="footer" class="bcn-drawer__foot">
          <span id="fs-drawer-open"
            ><a class="esa-icon-link esa-icon-link--sm esa-icon-link--medium" href="#"
              ><span class="esa-icon-link__label">Open full study</span>
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
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </span>
          <span class="bcn-drawer__foot-actions">
            <span id="fs-drawer-cancel"
              ><span
                class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
              >
                <button class="esa-button__native" type="button">
                  <span class="esa-button__label"> Cancel </span>
                </button>
              </span>
            </span>
            <span id="fs-drawer-save"
              ><span
                class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
              >
                <button class="esa-button__native" type="button">
                  <span class="esa-button__label"> Save </span>
                </button>
              </span>
            </span>
          </span>
        </span>
      </esa-side-dialog>
      <script type="application/json" id="fs-grid-data">
        {
          "rows": [
            {
              "coaNumber": "10.18.3",
              "name": "Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations",
              "category": "Covered Species",
              "studyType": "Hydrological and Biological Modeling",
              "dcpLead": "DWR-DCO/BDO",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "By 2030 use information from aquatic baseline studies to evaluate differences in impacts. Based on study results, develop alternative operational approach.",
              "comments": 6,
              "deliverables": 4,
              "phases": ["Baseline", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Winter-run Chinook salmon", "Spring-run Chinook salmon", "Delta smelt"]
            },
            {
              "coaNumber": "10.19.1",
              "name": "Migration and Survival Study",
              "category": "Covered Species",
              "studyType": "Fisheries Evaluation Studies — Biological Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 6,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": [
                "Winter-run Chinook salmon",
                "Spring-run Chinook salmon",
                "White sturgeon"
              ]
            },
            {
              "coaNumber": "10.19.2",
              "name": "Predation Study",
              "category": "Covered Species",
              "studyType": "Fisheries Evaluation Studies — Biological Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 2,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": [
                "Winter-run Chinook salmon",
                "Spring-run Chinook salmon",
                "Striped bass",
                "Sacramento pikeminnow"
              ]
            },
            {
              "coaNumber": "10.19.3",
              "name": "Abundance and Distribution Study",
              "category": "Covered Species",
              "studyType": "Fisheries Evaluation Studies — Biological Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 1,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Delta smelt", "Longfin smelt", "Winter-run Chinook salmon"]
            },
            {
              "coaNumber": "10.20.1",
              "name": "Installation of New Real-time Monitoring Station",
              "category": "Covered Species",
              "studyType": "Water Quality Evaluation Studies — Hydrological and Water Quality Monitoring",
              "dcpLead": "DWR-DCO",
              "planStatus": "approved",
              "execStatus": "active",
              "timeframe": "In-water preconstruction baseline monitoring through Phase 2 Operations. Hydraulic Data Plan before initiating operations.",
              "comments": 0,
              "deliverables": 2,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "10.20.2",
              "name": "Sediment and Turbidity Monitoring",
              "category": "Covered Species",
              "studyType": "Water Quality Evaluation Studies — Hydrological and Water Quality Monitoring",
              "dcpLead": "DWR-DCO",
              "planStatus": "submitted",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 1,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "10.20.3",
              "name": "Harmful Algal Bloom Monitoring",
              "category": "Covered Species",
              "studyType": "Water Quality Evaluation Studies — Biological Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "in-review",
              "execStatus": "not-started",
              "timeframe": "5 years prior to Phase 1 operations, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 0,
              "deliverables": 6,
              "phases": ["Baseline", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Harmful algal blooms"]
            },
            {
              "coaNumber": "10.20.4",
              "name": "Selenium Bioaccumulation Monitoring",
              "category": "Covered Species",
              "studyType": "Water Quality Evaluation Studies — Hydrological and Water Quality Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 0,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": ["White sturgeon"]
            },
            {
              "coaNumber": "10.20.5",
              "name": "Mercury Monitoring Study",
              "category": "Covered Species",
              "studyType": "Water Quality Evaluation Studies — Hydrological and Water Quality Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 0,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": ["White sturgeon"]
            },
            {
              "coaNumber": "10.21.1",
              "name": "Hydrodynamics at Georgiana Slough Monitoring",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies — Hydrological and Water Quality Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "draft",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 0,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "10.21.2",
              "name": "Covered Fish Species Life Cycle Models",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies — Biological Modeling",
              "dcpLead": "DWR-DCO",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 2,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": [
                "Winter-run Chinook salmon",
                "Spring-run Chinook salmon",
                "Delta smelt",
                "Longfin smelt"
              ]
            },
            {
              "coaNumber": "10.21.3",
              "name": "Food Web and Larval Fishes Entrainment Study",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies — Biological Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 0,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Delta smelt", "Longfin smelt", "Zooplankton"]
            },
            {
              "coaNumber": "10.21.4",
              "name": "Tidal Wetland Restoration Efficacy Study",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies — Biological Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "Following construction of tidal wetlands through Phase 2 Operations.",
              "comments": 0,
              "deliverables": 6,
              "phases": ["In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Delta smelt", "Longfin smelt", "Benthic macroinvertebrates"]
            },
            {
              "coaNumber": "10.21.5",
              "name": "Delta Smelt and Longfin Smelt Spawning Habitat Study",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies — Biological Monitoring",
              "dcpLead": "DWR-DISE",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "At least one year before initiating in-water construction activities, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 1,
              "deliverables": 6,
              "phases": ["Baseline", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Delta smelt", "Longfin smelt"]
            },
            {
              "coaNumber": "10.21.6",
              "name": "Refugia Design and Field Study",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies — Biological Monitoring and Engineering",
              "dcpLead": "DWR-DCO",
              "planStatus": "draft",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, during in-water construction.",
              "comments": 1,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction"],
              "species": ["Winter-run Chinook salmon", "Spring-run Chinook salmon", "Striped bass"]
            },
            {
              "coaNumber": "10.21.7",
              "name": "Flow Reversal and Routing Minimization",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies — Hydrological and Water Quality Monitoring",
              "dcpLead": "DWR-DCO",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 0,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Winter-run Chinook salmon", "Spring-run Chinook salmon"]
            },
            {
              "coaNumber": "10.21.8",
              "name": "Joint Operations Study Plan",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies — Hydrological and Biological Modeling",
              "dcpLead": "DWR-DCO/BDO",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 2,
              "deliverables": 6,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Winter-run Chinook salmon", "Spring-run Chinook salmon", "Delta smelt"]
            },
            {
              "coaNumber": "10.21.9",
              "name": "Modeling Needed to Implement Real-time Operations",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies — Hydrological and Biological Modeling",
              "dcpLead": "DWR-DCO/BDO",
              "planStatus": "in-review",
              "execStatus": "planning",
              "timeframe": "In-water preconstruction baseline monitoring, In-water construction monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations Monitoring.",
              "comments": 0,
              "deliverables": 5,
              "phases": ["Baseline", "In-water construction", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Winter-run Chinook salmon", "Delta smelt"]
            },
            {
              "coaNumber": "10.21.10",
              "name": "Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph",
              "category": "Covered Species",
              "studyType": "Ecological Response Evaluation Studies",
              "dcpLead": "DWR-DISE",
              "planStatus": "approved",
              "execStatus": "active",
              "timeframe": "Before and during Phase 1 and Phase 2 operations.",
              "comments": 3,
              "deliverables": 6,
              "phases": ["Baseline", "Phase 1 ops", "Phase 2 ops"],
              "species": ["Winter-run Chinook salmon", "Spring-run Chinook salmon"]
            },
            {
              "coaNumber": "10.23",
              "name": "Sacramento River Bathymetric Surveys",
              "category": "Preconstruction Eng.",
              "studyType": "Bathymetric Surveys",
              "dcpLead": "DCA",
              "planStatus": "approved",
              "execStatus": "active",
              "timeframe": "Prior to Phase 1 operations. Minimum 4 surveys before Phase 1 operations.",
              "comments": 0,
              "deliverables": 6,
              "phases": ["Baseline"],
              "species": []
            },
            {
              "coaNumber": "10.24.1",
              "name": "Sacramento River Hydraulic Model",
              "category": "Preconstruction Eng.",
              "studyType": "Mathematical Modeling Development",
              "dcpLead": "DCA",
              "planStatus": "approved",
              "execStatus": "active",
              "timeframe": "Complete before finalizing 30% Project design.",
              "comments": 0,
              "deliverables": 4,
              "phases": ["Baseline"],
              "species": []
            },
            {
              "coaNumber": "10.24.2",
              "name": "Sediment Transport Model",
              "category": "Preconstruction Eng.",
              "studyType": "Mathematical Modeling Development",
              "dcpLead": "DCA",
              "planStatus": "approved",
              "execStatus": "active",
              "timeframe": "Complete before finalizing 30% Project design.",
              "comments": 0,
              "deliverables": 4,
              "phases": ["Baseline"],
              "species": []
            },
            {
              "coaNumber": "10.25.1",
              "name": "Intake Structure Hydraulic Model – Mathematical",
              "category": "Preconstruction Eng.",
              "studyType": "North Delta Intake Hydraulic Modeling — Mathematical",
              "dcpLead": "DCA",
              "planStatus": "approved",
              "execStatus": "active",
              "timeframe": "Complete before finalizing 30% Project design.",
              "comments": 0,
              "deliverables": 4,
              "phases": ["Baseline"],
              "species": []
            },
            {
              "coaNumber": "10.25.2",
              "name": "Intake Structure Hydraulic Modeling – Physical",
              "category": "Preconstruction Eng.",
              "studyType": "North Delta Intake Hydraulic Modeling — Physical",
              "dcpLead": "DCA",
              "planStatus": "submitted",
              "execStatus": "planning",
              "timeframe": "Complete the model before finalizing 60% Project design.",
              "comments": 0,
              "deliverables": 4,
              "phases": ["Baseline"],
              "species": []
            },
            {
              "coaNumber": "10.25.3",
              "name": "Intake Tee Screen Hydraulic Model – Mathematical",
              "category": "Preconstruction Eng.",
              "studyType": "North Delta Intake Hydraulic Modeling — Mathematical",
              "dcpLead": "DCA",
              "planStatus": "submitted",
              "execStatus": "planning",
              "timeframe": "Complete the model before finalizing 60% Project design.",
              "comments": 0,
              "deliverables": 4,
              "phases": ["Baseline"],
              "species": []
            },
            {
              "coaNumber": "10.25.4",
              "name": "Intake Tee Screen Hydraulic Model – Physical",
              "category": "Preconstruction Eng.",
              "studyType": "North Delta Intake Hydraulic Modeling — Physical",
              "dcpLead": "DCA",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "Complete the model before finalizing 60% Project design.",
              "comments": 0,
              "deliverables": 4,
              "phases": ["Baseline"],
              "species": []
            },
            {
              "coaNumber": "10.26",
              "name": "Incorporation of Fish Guidance System into the North Delta Intake Structures",
              "category": "Preconstruction Eng.",
              "studyType": "Engineering and Biological",
              "dcpLead": "DCA",
              "planStatus": "revising",
              "execStatus": "planning",
              "timeframe": "Convene workgroup at least 2 years prior to 30% design. Complete implementation of the CDFW-approved study plan and provide a recommended approach to CDFW no less than one year prior to finalization of 30% Project design.",
              "comments": 11,
              "deliverables": 3,
              "phases": ["Baseline"],
              "species": ["Winter-run Chinook salmon", "Spring-run Chinook salmon", "Striped bass"]
            },
            {
              "coaNumber": "10.27",
              "name": "Hydraulic Testing for Velocity Requirements",
              "category": "Operations Monitoring",
              "studyType": "Velocity Criteria Compliance",
              "dcpLead": "DCA",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "Draft plan no later than 6 months prior to Phase 1 operations. Final plan no later than one month prior to Phase 1 operations. Implement during Phase 1 and Phase 2 operations.",
              "comments": 0,
              "deliverables": 2,
              "phases": ["Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "10.27.1",
              "name": "Hydraulic Testing Procedures",
              "category": "Operations Monitoring",
              "studyType": "Velocity Criteria Compliance",
              "dcpLead": "DCA",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "See 10.27 above.",
              "comments": 0,
              "deliverables": 1,
              "phases": ["Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "10.27.2",
              "name": "Approach Velocity Testing Compliance",
              "category": "Operations Monitoring",
              "studyType": "Velocity Criteria Compliance",
              "dcpLead": "DCA",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "Provide data to CDFW within 72 hours of each test. If non-compliant test, follow procedures in 10.27.2.",
              "comments": 0,
              "deliverables": 1,
              "phases": ["Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "10.27.3",
              "name": "Hydraulic Testing Reports",
              "category": "Operations Monitoring",
              "studyType": "Velocity Criteria Compliance",
              "dcpLead": "DCA",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "Provide hydraulic testing reports within thirty days of completion of each hydraulic test.",
              "comments": 0,
              "deliverables": 1,
              "phases": ["Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "10.29",
              "name": "Sediment Management",
              "category": "Operations Monitoring",
              "studyType": "Inspections",
              "dcpLead": "DCA",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "Minimum annual inspections after initiating Phase 1 operations. Reports within 30 days of each inspection.",
              "comments": 0,
              "deliverables": 3,
              "phases": ["Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "10.3",
              "name": "Screen Impingement Study",
              "category": "Operations Monitoring",
              "studyType": "Inspections — Biological",
              "dcpLead": "DWR-DISE",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "Draft plan 6 months prior to Phase 1 operations. Final plan one month prior to Phase 1 operations. Implement during Phase 1 and Phase 2 operations.",
              "comments": 0,
              "deliverables": 4,
              "phases": ["Phase 1 ops", "Phase 2 ops"],
              "species": ["Winter-run Chinook salmon", "Spring-run Chinook salmon"]
            },
            {
              "coaNumber": "11.1109",
              "name": "Velocity Requirements at North Delta Intakes",
              "category": "Operations Measures",
              "studyType": "Velocity Requirements",
              "dcpLead": "DCA",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "Consistent with 10.20.1, Hydraulic Data Plan before initiating operations. Implementation during Phase 1 and Phase 2 operations.",
              "comments": 0,
              "deliverables": 2,
              "phases": ["Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "11.109.1",
              "name": "No Diversions Without North Delta Intake Screens",
              "category": "Operations Measures",
              "studyType": "Velocity Requirements",
              "dcpLead": "DWR-DCO",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "During Phase 1 and Phase 2 operations.",
              "comments": 0,
              "deliverables": 0,
              "phases": ["Phase 1 ops", "Phase 2 ops"],
              "species": []
            },
            {
              "coaNumber": "12.6.5",
              "name": "Spring Longfin Smelt Distribution",
              "category": "Operations Measures",
              "studyType": "Hydrological and Biological Modeling",
              "dcpLead": "DWR-DCO/BDO",
              "planStatus": "draft",
              "execStatus": "not-started",
              "timeframe": "Collaborate with CDFW two years prior to Phase 1 operations. If applicable, implement operational scenario during Phase 1 and Phase 2 operations.",
              "comments": 0,
              "deliverables": 1,
              "phases": ["Phase 1 ops", "Phase 2 ops"],
              "species": ["Longfin smelt"]
            }
          ],
          "planMeta": {
            "draft": { "label": "Draft", "hex": "#d73027" },
            "submitted": { "label": "Submitted to CDFW", "hex": "#fc8d59" },
            "in-review": { "label": "In Agency Review", "hex": "#e3c14d" },
            "revising": { "label": "Revising", "hex": "#91cf60" },
            "approved": { "label": "Approved", "hex": "#1a9850" }
          },
          "execMeta": {
            "not-started": { "label": "Not Started", "hex": "#d73027" },
            "planning": { "label": "Planning", "hex": "#fc8d59" },
            "active": { "label": "Active Fieldwork", "hex": "#e3c14d" },
            "complete": { "label": "Complete", "hex": "#1a9850" }
          },
          "detailBase": "/beacon-design/prototypes/fish-study"
        }
      </script>
      <script type="application/json" id="fs-drawer-data">
        {
          "10.18.3": {
            "name": "Evaluate Alternative Operating Criteria for the Ascending or Descending Limb of the Hydrograph During Real-time Operations",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2028-01-01",
            "end": "2040-01-01",
            "planDue": "2026-09-01"
          },
          "10.19.1": {
            "name": "Migration and Survival Study",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2034-06-01",
            "planDue": "2026-08-01"
          },
          "10.19.2": {
            "name": "Predation Study",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.19.3": {
            "name": "Abundance and Distribution Study",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.20.1": {
            "name": "Installation of New Real-time Monitoring Station",
            "planStatus": "approved",
            "execStatus": "active",
            "start": "2027-01-01",
            "end": "2030-01-01",
            "planDue": "2026-06-01"
          },
          "10.20.2": {
            "name": "Sediment and Turbidity Monitoring",
            "planStatus": "submitted",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.20.3": {
            "name": "Harmful Algal Bloom Monitoring",
            "planStatus": "in-review",
            "execStatus": "not-started",
            "start": "2038-01-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.20.4": {
            "name": "Selenium Bioaccumulation Monitoring",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.20.5": {
            "name": "Mercury Monitoring Study",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.21.1": {
            "name": "Hydrodynamics at Georgiana Slough Monitoring",
            "planStatus": "draft",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.21.2": {
            "name": "Covered Fish Species Life Cycle Models",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.21.3": {
            "name": "Food Web and Larval Fishes Entrainment Study",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.21.4": {
            "name": "Tidal Wetland Restoration Efficacy Study",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2034-01-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.21.5": {
            "name": "Delta Smelt and Longfin Smelt Spawning Habitat Study",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2033-01-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.21.6": {
            "name": "Refugia Design and Field Study",
            "planStatus": "draft",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2043-01-01",
            "planDue": ""
          },
          "10.21.7": {
            "name": "Flow Reversal and Routing Minimization",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.21.8": {
            "name": "Joint Operations Study Plan",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.21.9": {
            "name": "Modeling Needed to Implement Real-time Operations",
            "planStatus": "in-review",
            "execStatus": "planning",
            "start": "2027-04-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.21.10": {
            "name": "Studies to Evaluate Differences Between Ascending and Descending Limbs of the Hydrograph",
            "planStatus": "approved",
            "execStatus": "active",
            "start": "2027-04-01",
            "end": "2029-03-01",
            "planDue": "2026-06-01"
          },
          "10.23": {
            "name": "Sacramento River Bathymetric Surveys",
            "planStatus": "approved",
            "execStatus": "active",
            "start": "2026-04-01",
            "end": "2033-06-01",
            "planDue": ""
          },
          "10.24.1": {
            "name": "Sacramento River Hydraulic Model",
            "planStatus": "approved",
            "execStatus": "active",
            "start": "2026-04-01",
            "end": "2030-10-01",
            "planDue": "2026-03-01"
          },
          "10.24.2": {
            "name": "Sediment Transport Model",
            "planStatus": "approved",
            "execStatus": "active",
            "start": "2026-04-01",
            "end": "2032-06-01",
            "planDue": ""
          },
          "10.25.1": {
            "name": "Intake Structure Hydraulic Model – Mathematical",
            "planStatus": "approved",
            "execStatus": "active",
            "start": "2026-04-01",
            "end": "2030-10-01",
            "planDue": ""
          },
          "10.25.2": {
            "name": "Intake Structure Hydraulic Modeling – Physical",
            "planStatus": "submitted",
            "execStatus": "planning",
            "start": "2030-01-01",
            "end": "2032-01-01",
            "planDue": ""
          },
          "10.25.3": {
            "name": "Intake Tee Screen Hydraulic Model – Mathematical",
            "planStatus": "submitted",
            "execStatus": "planning",
            "start": "2030-01-01",
            "end": "2032-01-01",
            "planDue": ""
          },
          "10.25.4": {
            "name": "Intake Tee Screen Hydraulic Model – Physical",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2030-01-01",
            "end": "2032-01-01",
            "planDue": ""
          },
          "10.26": {
            "name": "Incorporation of Fish Guidance System into the North Delta Intake Structures",
            "planStatus": "revising",
            "execStatus": "planning",
            "start": "2026-04-01",
            "end": "2031-03-01",
            "planDue": "2026-04-01"
          },
          "10.27": {
            "name": "Hydraulic Testing for Velocity Requirements",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2042-06-01",
            "end": "2043-01-01",
            "planDue": ""
          },
          "10.27.1": {
            "name": "Hydraulic Testing Procedures",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2043-01-01",
            "end": "2043-06-01",
            "planDue": ""
          },
          "10.27.2": {
            "name": "Approach Velocity Testing Compliance",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2043-01-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.27.3": {
            "name": "Hydraulic Testing Reports",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2043-01-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.29": {
            "name": "Sediment Management",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2043-01-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "10.3": {
            "name": "Screen Impingement Study",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2042-06-01",
            "end": "2043-01-01",
            "planDue": ""
          },
          "11.1109": {
            "name": "Velocity Requirements at North Delta Intakes",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2043-01-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "11.109.1": {
            "name": "No Diversions Without North Delta Intake Screens",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2043-01-01",
            "end": "2044-06-01",
            "planDue": ""
          },
          "12.6.5": {
            "name": "Spring Longfin Smelt Distribution",
            "planStatus": "draft",
            "execStatus": "not-started",
            "start": "2041-01-01",
            "end": "2043-01-01",
            "planDue": ""
          }
        }
      </script>
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
  --bcn-status-not-started: #bdbdbd;
  --color-accent: #f76b15;
  --color-border: #dcdcdc;
  --color-border-light: #efefef;
  --color-border-strong: #bdbdbd;
  --color-commitment: #58508d;
  --color-primary: #005862;
  --color-primary-border: #b9d6d2;
  --color-primary-hover: #00474f;
  --color-primary-strong: #2a7e3b;
  --color-primary-subtle: #effefb;
  --color-secondary: #00918b;
  --color-surface: #fcfcfc;
  --color-surface-elevated: #fcfcfc;
  --color-surface-sunken: #efefef;
  --color-text-inverse: #fcfcfc;
  --color-text-link: #005862;
  --color-text-muted: #7c7c7c;
  --color-text-primary: #3d3d3d;
  --color-text-secondary: #525252;
  --color-text-tertiary: #656565;
  --color-warning: #f2770e;
  --dialog-bg: #fcfcfc;
  --dialog-border-color: #efefef;
  --dialog-radius: .75rem;
  --dialog-width: 480px;
  --filter-clear-color: #7c7c7c;
  --filter-clear-color-hover: #ce2c31;
  --font-decorative: "Besley", serif;
  --font-mono: "Roboto Mono", ui-monospace, monospace;
  --font-sans: "DM Sans", sans-serif;
  --font-weight-bold: 650;
  --font-weight-medium: 450;
  --font-weight-regular: 350;
  --font-weight-semibold: 550;
  --form-bg: #fcfcfc;
  --form-border-color: #dcdcdc;
  --form-border-width: 1px;
  --form-font-size-md: clamp(.75rem, .66rem + .44vw, .9375rem);
  --form-font-size-sm: clamp(.625rem, .56rem + .32vw, .75rem);
  --form-height-md: 36px;
  --form-height-sm: 28px;
  --form-label-color: #525252;
  --form-padding-x-md: .75rem;
  --form-padding-x-sm: .625rem;
  --form-padding-y-md: .5rem;
  --form-placeholder-color: #7c7c7c;
  --form-radius-md: .25rem;
  --form-radius-sm: .25rem;
  --form-text-color: #3d3d3d;
  --icon-button-bg-hover: color-mix(in srgb, currentColor 14%, transparent);
  --icon-link-font-size-md: 1rem;
  --icon-link-font-size-sm: .875rem;
  --icon-link-gap: .375rem;
  --icon-size-md: 20px;
  --icon-size-medium: 20px;
  --icon-size-sm: 16px;
  --icon-size-small: 16px;
  --icon-size-xs: 14px;
  --radius-100: .25rem;
  --radius-200: .5rem;
  --radius-400: .75rem;
  --radius-full: 9999px;
  --shadow-300: 0 6px 24px -6px rgba(0, 0, 0, .07);
  --side-dialog-width: 400px;
  --spacing-050: .125rem;
  --spacing-100: .25rem;
  --spacing-150: .375rem;
  --spacing-200: .5rem;
  --spacing-250: .625rem;
  --spacing-300: .75rem;
  --spacing-400: 1rem;
  --spacing-500: 1.5rem;
  --spacing-600: 2rem;
  --spacing-700: 3rem;
  --transition-fast: .15s ease;
  --type-size-100: clamp(.625rem, .56rem + .32vw, .75rem);
  --type-size-150: clamp(.6875rem, .61rem + .38vw, .875rem);
  --type-size-200: clamp(.75rem, .66rem + .44vw, .9375rem);
  --type-size-500: clamp(1.125rem, .98rem + .72vw, 1.5rem);
}

:where(.ag-theme-tabStyle-6) {
.ag-tabs-header{background-color:var(--ag-tab-bar-background-color);border-bottom:var(--ag-tab-bar-border);display:flex;flex:1;gap:var(--ag-tab-spacing);padding:var(--ag-tab-bar-top-padding) var(--ag-tab-bar-horizontal-padding) 0}
.ag-tabs-header-wrapper{display:flex}
.ag-tabs-close-button-wrapper{align-items:center;border:0;display:flex;padding:var(--ag-spacing)}
:where(.ag-ltr) .ag-tabs-close-button-wrapper{border-right:solid var(--ag-border-width) var(--ag-border-color)}
:where(.ag-rtl) .ag-tabs-close-button-wrapper{border-left:solid var(--ag-border-width) var(--ag-border-color)}
.ag-tabs-close-button{background-color:unset;border:0;cursor:pointer;padding:0}
.ag-tab{align-items:center;background-color:var(--ag-tab-background-color);border-left:var(--ag-tab-selected-border-width) solid transparent;border-right:var(--ag-tab-selected-border-width) solid transparent;color:var(--ag-tab-text-color);cursor:pointer;display:flex;flex:1;justify-content:center;padding:var(--ag-tab-top-padding) var(--ag-tab-horizontal-padding) var(--ag-tab-bottom-padding);position:relative}
.ag-tab:hover{background-color:var(--ag-tab-hover-background-color);color:var(--ag-tab-hover-text-color)}
.ag-tab.ag-tab-selected{background-color:var(--ag-tab-selected-background-color);color:var(--ag-tab-selected-text-color)}
:where(.ag-ltr) .ag-tab.ag-tab-selected:where(:not(:first-of-type)){border-left-color:var(--ag-tab-selected-border-color)}
:where(.ag-rtl) .ag-tab.ag-tab-selected:where(:not(:first-of-type)){border-right-color:var(--ag-tab-selected-border-color)}
:where(.ag-ltr) .ag-tab.ag-tab-selected:where(:not(:last-of-type)){border-right-color:var(--ag-tab-selected-border-color)}
:where(.ag-rtl) .ag-tab.ag-tab-selected:where(:not(:last-of-type)){border-left-color:var(--ag-tab-selected-border-color)}
.ag-tab:after{background-color:var(--ag-tab-selected-underline-color);bottom:0;content:"";display:block;height:var(--ag-tab-selected-underline-width);left:0;opacity:0;position:absolute;right:0;transition:opacity var(--ag-tab-selected-underline-transition-duration)}
.ag-tab.ag-tab-selected:after{opacity:1}
:where(.ag-theme-batchEditStyle-3) {
.ag-cell-batch-edit{background-color:var(--ag-cell-batch-edit-background-color);color:var(--ag-cell-batch-edit-text-color);display:inherit}
.ag-row-batch-edit{background-color:var(--ag-row-batch-edit-background-color);color:var(--ag-row-batch-edit-text-color)}
.esa-button{--_btn-height: var(--form-height-md, 40px);--_btn-padding-x: var(--form-padding-x-md, 16px);--_btn-font-size: var(--form-font-size-md, 14px);--_btn-radius: var(--form-radius-md, 6px);--_accent: var(--color-primary, #46a758);--_accent-hover: var(--color-primary-hover, #3e9b4f);--_on: var(--color-text-inverse, #ffffff);--_accent-text: var(--_accent);--_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);--_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);display:inline-block}
.esa-button__native{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-200, 8px);width:100%;height:var(--_btn-height);padding-inline:var(--_btn-padding-x);border:1px solid transparent;border-radius:var(--_btn-radius);font-size:var(--_btn-font-size);font-family:var(--font-sans, system-ui, sans-serif);font-weight:var(--font-weight-medium, 500);line-height:1;text-decoration:none;cursor:pointer;transition:background var(--transition-fast, .15s ease),border-color var(--transition-fast, .15s ease);-webkit-appearance:none;appearance:none}
.esa-button--appearance-outline .esa-button__native,.esa-button--appearance-dashed .esa-button__native{background:transparent;color:var(--_accent-text);border-color:var(--_accent)}
.esa-button--color-ghost .esa-button__native{background:transparent;color:var(--color-text-primary, #171717);border-color:transparent}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native{border-color:var(--color-border, #e5e5e5)}
.esa-button__label{white-space:nowrap}
.esa-button--sm{--_btn-height: var(--form-height-sm, 32px);--_btn-padding-x: var(--form-padding-x-sm, 12px);--_btn-font-size: var(--form-font-size-sm, 12px);--_btn-radius: var(--form-radius-sm, 4px)}
.esa-button--sm .esa-button__native{height:auto;padding-block:var(--spacing-150, 6px)}
.esa-button--color-primary{--_accent-text: var(--color-primary-strong)}
.esa-button--appearance-fill .esa-button__native{background:var(--_accent);color:var(--_on);border-color:transparent}
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
.option__icon {
      width: var(--_icon-size);
      height: var(--_icon-size);
      flex-shrink: 0;
    }
:where([class^=ag-]),:where([class^=ag-]):after,:where([class^=ag-]):before{box-sizing:border-box}
.ag-measurement-container{height:0;overflow:hidden;visibility:hidden;width:0}
.ag-chart,.ag-dnd-ghost,.ag-external,.ag-popup,.ag-root-wrapper{cursor:default;line-height:normal;white-space:normal;-webkit-font-smoothing:antialiased;background-color:var(--ag-wrapper-background-color);color:var(--ag-text-color);color-scheme:var(--ag-browser-color-scheme);font-family:var(--ag-font-family);font-size:var(--ag-font-size);font-weight:var(--ag-font-weight);--ag-indentation-level:0}
:host {
      --_field-padding-y: var(--form-padding-y-md, 0.5rem);
      --_field-padding-x: var(--form-padding-x-md, 0.75rem);
      --_field-font-size: var(--form-font-size-md, 0.9375rem);
      --_field-height: var(--form-height-md, 40px);
      --_field-radius: var(--form-radius-md, 0.5rem);
      --_field-border-color: var(--form-border-color, #e5e5e5);
      --_label-font-size: var(--type-size-200, 0.9375rem);
      display: block;
      font-family: var(--font-sans, sans-serif);
    }
.field {
      display: flex;
      flex-direction: column;
    }
.control {
      display: flex;
      align-items: stretch;
      height: var(--_field-height);
      background: var(--form-bg, #fff);
      border: var(--form-border-width, 1px) solid var(--_field-border-color);
      border-radius: var(--_field-radius);
      box-sizing: border-box;
      overflow: hidden;
      transition:
        border-color var(--transition-fast, 150ms ease),
        box-shadow var(--transition-fast, 150ms ease);
    }
.input {
      flex: 1 1 auto;
      min-width: 0;
      width: 100%;
      height: 100%;
      padding: var(--_field-padding-y) var(--_field-padding-x);
      font-family: inherit;
      font-size: var(--_field-font-size);
      color: var(--form-text-color, #171717);
      background: transparent;
      border: none;
      outline: none;
      box-sizing: border-box;
    }
.input::placeholder {
      color: var(--form-placeholder-color, #737373);
    }
:host { --_width: var(--side-dialog-width, 400px); }
:host { all: initial; }
.host-root { position: fixed; inset: 0; pointer-events: none; z-index: 2147483000;
    font-family: system-ui, sans-serif; }
.host-root > * { pointer-events: auto; }
.launch { position: fixed; bottom: 22px; left: 22px; display: inline-flex; align-items: center; gap: 9px;
    padding: 13px 19px; border-radius: 999px; color: #fff; cursor: pointer; font-size: 15px; font-weight: 600;
    letter-spacing: .01em; border: 1px solid #3d6fd6;
    background: linear-gradient(180deg, #1f6feb, #1551c4);
    box-shadow: 0 10px 28px -8px rgba(31,111,235,.65), inset 0 1px 0 rgba(255,255,255,.18);
    transition: transform .15s ease, box-shadow .15s ease, filter .15s ease; }
.launch svg { flex: none; }
.panel { position: fixed; top: 18px; right: 18px; bottom: 18px; width: min(720px, 94vw);
    display: flex; flex-direction: column; color: #ffffff; border-radius: 16px;
    background: linear-gradient(155deg, rgba(26,31,40,.74), rgba(11,15,21,.86));
    backdrop-filter: blur(26px) saturate(150%); -webkit-backdrop-filter: blur(26px) saturate(150%);
    border: 1px solid rgba(255,255,255,.15);
    box-shadow: 0 28px 70px -18px rgba(0,0,0,.62), inset 0 1px 0 rgba(255,255,255,.10);
    font-size: 12.5px; overflow: hidden;
    /* slide in from the right */
    transform: translateX(calc(100% + 32px)); opacity: 0; visibility: hidden;
    transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .22s ease, visibility 0s linear .3s; }
.head { display: flex; align-items: center; gap: 8px; padding: 13px 16px; border-bottom: 1px solid rgba(255,255,255,.09); }
.head strong { font-size: 14px; }
.head .sub { flex: 1; color: #ccd5e0; font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.x { border: 0; background: none; color: #c4cdd8; font-size: 20px; line-height: 1; cursor: pointer; }
.picker { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,.09); }
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip { padding: 5px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04);
    color: #eef2f6; font: inherit; font-size: 12.5px; cursor: pointer; white-space: nowrap;
    transition: border-color .12s ease, background .12s ease, color .12s ease; }
.chip.on { background: rgba(31,111,235,.28); border-color: #4493f8; color: #fff; font-weight: 600; }
.tabs { display: flex; gap: 4px; padding: 9px 14px; border-bottom: 1px solid rgba(255,255,255,.09); }
.tabs button { padding: 5px 12px; border: 0; border-radius: 6px; background: none; color: #ccd5e0;
    font: inherit; font-size: 12.5px; cursor: pointer; }
.tabs button.on { background: rgba(255,255,255,.12); color: #fff; }
.body { overflow: auto; padding: 13px 16px; flex: 1; }
.hint { margin: 0; color: #c4cdd8; line-height: 1.6; }
.footer { position: relative; display: flex; justify-content: flex-end; gap: 8px; padding: 11px 16px;
    border-top: 1px solid rgba(255,255,255,.10); background: rgba(0,0,0,.18); }
[hidden] { display: none !important; }
.cpreview { position: absolute; left: 16px; right: 16px; bottom: calc(100% + 8px);
    background: rgba(13,17,23,.96); border: 1px solid rgba(255,255,255,.16); border-radius: 12px;
    box-shadow: 0 18px 50px -14px rgba(0,0,0,.7); padding: 12px 14px; max-height: 50vh; overflow: auto; }
.copy { color: #eef2f6; border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.05); }
.footer button { flex: none; display: inline-flex; align-items: center; justify-content: center; gap: 7px;
    padding: 8px 14px; border-radius: 8px; font: inherit; font-size: 12.5px; font-weight: 600; cursor: pointer; }
.claude { color: #fff; border: 1px solid #d97757;
    background: linear-gradient(180deg, #e0805f, #c25e3c);
    box-shadow: 0 6px 18px -6px rgba(217,119,87,.6), inset 0 1px 0 rgba(255,255,255,.2); }
.claude svg { flex: none; }
.bcn-fs-utils{display:inline-flex;align-items:center;gap:var(--spacing-200)}
.bcn-filterbar{background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-200);margin-bottom:var(--spacing-400)}
.bcn-filterbar__top{display:flex;align-items:center;gap:var(--spacing-400);padding:var(--spacing-300) var(--spacing-400);flex-wrap:wrap}
.bcn-filterbar__group{display:inline-flex;align-items:center;gap:var(--spacing-300)}
.bcn-filterbar__label{font-size:var(--type-size-150);font-weight:var(--font-weight-semibold);color:var(--color-text-tertiary);white-space:nowrap}
.bcn-filterbar__search{margin-left:auto;display:inline-flex;align-items:center;gap:var(--spacing-150);min-width:300px}
.bcn-filterbar__search esa-text-field{flex:1}
.bcn-filterbar__bottom{display:flex;align-items:center;gap:var(--spacing-300);padding:var(--spacing-300) var(--spacing-400);border-top:1px solid var(--color-border);flex-wrap:wrap}
.bcn-filterbar__clear{margin-left:auto}
.bcn-view-pane[hidden]{display:none}
.bcn-timeline{display:flex;flex-direction:column;gap:var(--spacing-300);--_label-w: 340px;--_plot-w: 1900px;--_row-h: 30px}
.bcn-timeline__legend{display:flex;align-items:center;flex-wrap:wrap;gap:var(--spacing-300);font-size:var(--type-size-100);color:var(--color-text-secondary)}
.bcn-timeline__legend-title{font-weight:var(--font-weight-semibold);color:var(--color-text-tertiary)}
.bcn-timeline__legend-item{display:inline-flex;align-items:center;gap:var(--spacing-150)}
.bcn-timeline__legend-dot{width:9px;height:9px;border-radius:var(--radius-full);background:var(--_c)}
.bcn-timeline__legend-hint{margin-left:auto;color:var(--color-text-muted);font-style:italic}
.bcn-timeline__scroll{overflow-x:auto;border:1px solid var(--color-border);border-radius:var(--radius-200);background:var(--color-surface)}
.bcn-timeline__canvas{min-width:calc(var(--_label-w) + var(--_plot-w))}
.bcn-timeline__axis{display:grid;grid-template-columns:var(--_label-w) 1fr;position:sticky;top:0;z-index:5;background:var(--color-surface);border-bottom:1px solid var(--color-border)}
.bcn-timeline__corner{display:flex;align-items:flex-end;padding:var(--spacing-200) var(--spacing-300);font-size:var(--type-size-100);font-weight:var(--font-weight-semibold);color:var(--color-text-tertiary);border-right:1px solid var(--color-border)}
.bcn-timeline__head-plot{position:relative}
.bcn-timeline__head-bands{position:absolute;inset:0;z-index:0}
.bcn-timeline__band{position:absolute;top:0;bottom:0}
.bcn-timeline__band[data-phase=baseline]{background:color-mix(in srgb,var(--color-text-primary) 7%,transparent)}
.bcn-timeline__band[data-phase=in-water-construction]{background:color-mix(in srgb,var(--color-text-primary) 3%,transparent)}
.bcn-timeline__band[data-phase=phase1-ops]{background:color-mix(in srgb,var(--color-text-primary) 7%,transparent)}
.bcn-timeline__band[data-phase=phase2-ops]{background:color-mix(in srgb,var(--color-text-primary) 3%,transparent)}
.bcn-timeline__head-phases{position:relative;z-index:1;height:18px}
.bcn-timeline__phase-tag{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;padding:0 var(--spacing-150);font-size:.625rem;font-weight:var(--font-weight-semibold);text-transform:uppercase;letter-spacing:.03em;color:var(--color-text-secondary);white-space:nowrap;overflow:hidden}
.bcn-timeline__head-years{position:relative;z-index:1;height:20px}
.bcn-timeline__yr{position:absolute;top:0;bottom:0;border-left:1px solid var(--color-border-light);display:flex;align-items:center}
.bcn-timeline__yr-label{font-size:.6875rem;color:var(--color-text-muted);padding-left:4px;font-variant-numeric:tabular-nums}
.bcn-timeline__yr.is-five{border-left-color:var(--color-border-strong)}
.bcn-timeline__yr.is-five .bcn-timeline__yr-label{color:var(--color-text-secondary);font-weight:var(--font-weight-semibold)}
.bcn-timeline__head-ms{position:relative;z-index:1;height:22px}
.bcn-timeline__ms-tag{position:absolute;top:2px;transform:translate(-50%);font-size:.625rem;font-weight:var(--font-weight-semibold);color:var(--color-primary);white-space:nowrap;background:var(--color-surface);padding:0 3px;border:1px solid var(--color-primary-border);border-radius:var(--radius-100)}
.bcn-timeline__ms-tag.is-alt{top:11px}
.bcn-timeline__lane-title{margin:0;padding:var(--spacing-150) var(--spacing-300);font-size:var(--type-size-100);font-weight:var(--font-weight-semibold);color:var(--color-text-secondary);background:var(--color-surface-sunken);border-bottom:1px solid var(--color-border);position:sticky;left:0;z-index:3}
.bcn-timeline__lane-title[hidden]{display:none}
.bcn-timeline__row{display:grid;grid-template-columns:var(--_label-w) 1fr;border-bottom:1px solid var(--color-border-light)}
.bcn-timeline__row-label{display:flex;align-items:center;gap:var(--spacing-200);padding:0 var(--spacing-300);min-height:var(--_row-h);width:100%;border:0;border-right:1px solid var(--color-border);overflow:hidden;background:var(--color-surface);position:sticky;left:0;z-index:3;cursor:pointer;text-align:left;font:inherit}
.bcn-timeline__coa{flex-shrink:0;font-family:var(--font-mono);font-size:.625rem;font-weight:var(--font-weight-semibold);color:var(--color-commitment);background:color-mix(in srgb,var(--color-commitment) 12%,white);padding:1px 5px;border-radius:var(--radius-100)}
.bcn-timeline__name{font-size:var(--type-size-200);font-weight:var(--font-weight-medium);color:var(--color-text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bcn-timeline__plot{position:relative;min-height:var(--_row-h)}
.bcn-timeline__grid{position:absolute;top:0;bottom:0;width:0;border-left:1px solid var(--color-border-light)}
.bcn-timeline__grid.is-five{border-left-color:var(--color-border)}
.bcn-timeline__ms-line{position:absolute;top:0;bottom:0;width:0;border-left:1px dashed color-mix(in srgb,var(--color-primary) 35%,transparent)}
.bcn-timeline__today{position:absolute;top:0;bottom:0;width:0;border-left:2px solid var(--color-warning);z-index:2}
.bcn-timeline__bar{position:absolute;top:50%;transform:translateY(-50%);height:16px;min-width:5px;border:1px solid color-mix(in srgb,var(--_c) 72%,black);border-radius:var(--radius-100);background:linear-gradient(90deg,var(--_c) 0%,color-mix(in srgb,var(--_c) 62%,white) 100%);padding:0;cursor:pointer;z-index:1;transition:filter .12s ease,box-shadow .12s ease}
.bcn-out__head{font-family:var(--font-decorative);font-size:1.375rem;font-weight:var(--font-weight-semibold);color:var(--color-text-primary)}
.bcn-out__lede{margin:0 0 var(--spacing-400);font-size:var(--type-size-200);color:var(--color-text-secondary);line-height:1.5}
.bcn-out__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--spacing-200)}
.bcn-out__item{display:flex;align-items:center;gap:var(--spacing-300);padding:var(--spacing-300);border:1px solid var(--color-border);border-radius:var(--radius-200)}
.bcn-out__item .esa-icon{color:var(--color-secondary);flex-shrink:0}
.bcn-out__item div{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0}
.bcn-out__item strong{font-size:var(--form-font-size-md);font-weight:var(--font-weight-semibold);color:var(--color-text-primary)}
.bcn-out__item span{font-size:.8125rem;color:var(--color-text-tertiary)}
.bcn-out__foot{display:flex;justify-content:flex-end;width:100%}
.bcn-drawer-head{display:flex;align-items:center;gap:var(--spacing-200);flex-wrap:wrap;min-width:0}
.bcn-drawer-head__badge{flex-shrink:0;font-family:var(--font-mono);font-size:var(--type-size-100);font-weight:var(--font-weight-semibold);color:var(--color-commitment);background:color-mix(in srgb,var(--color-commitment) 12%,white);padding:1px var(--spacing-200);border-radius:var(--radius-100)}
.bcn-drawer-head__title{font-family:var(--font-decorative);font-size:1.125rem;font-weight:var(--font-weight-semibold);color:var(--color-text-primary);line-height:1.25;min-width:0}
.bcn-drawer{display:flex;flex-direction:column;gap:var(--spacing-400)}
.bcn-drawer__dates{display:grid;grid-template-columns:1fr 1fr;gap:var(--spacing-300)}
.bcn-drawer__foot{display:flex;align-items:center;justify-content:space-between;width:100%;gap:var(--spacing-300)}
.bcn-drawer__foot-actions{display:inline-flex;align-items:center;gap:var(--spacing-200)}
.fs-grid{width:100%;height:calc(100vh - 300px);min-height:600px}
:has(> :where(.ag-theme-params-1)):not(:where(.ag-theme-params-1)) {
	--ag-inherited-accent-color: var(--ag-accent-color);
	--ag-inherited-advanced-filter-builder-button-bar-border: var(--ag-advanced-filter-builder-button-bar-border);
	--ag-inherited-advanced-filter-builder-column-pill-color: var(--ag-advanced-filter-builder-column-pill-color);
	--ag-inherited-advanced-filter-builder-indent-size: var(--ag-advanced-filter-builder-indent-size);
	--ag-inherited-advanced-filter-builder-join-pill-color: var(--ag-advanced-filter-builder-join-pill-color);
	--ag-inherited-advanced-filter-builder-option-pill-color: var(--ag-advanced-filter-builder-option-pill-color);
	--ag-inherited-advanced-filter-builder-value-pill-color: var(--ag-advanced-filter-builder-value-pill-color);
	--ag-inherited-background-color: var(--ag-background-color);
	--ag-inherited-border-color: var(--ag-border-color);
	--ag-inherited-border-radius: var(--ag-border-radius);
	--ag-inherited-border-width: var(--ag-border-width);
	--ag-inherited-browser-color-scheme: var(--ag-browser-color-scheme);
	--ag-inherited-button-active-background-color: var(--ag-button-active-background-color);
	--ag-inherited-button-active-border: var(--ag-button-active-border);
	--ag-inherited-button-active-text-color: var(--ag-button-active-text-color);
	--ag-inherited-button-background-color: var(--ag-button-background-color);
	--ag-inherited-button-border: var(--ag-button-border);
	--ag-inherited-button-border-radius: var(--ag-button-border-radius);
	--ag-inherited-button-disabled-background-color: var(--ag-button-disabled-background-color);
	--ag-inherited-button-disabled-border: var(--ag-button-disabled-border);
	--ag-inherited-button-disabled-text-color: var(--ag-button-disabled-text-color);
	--ag-inherited-button-font-weight: var(--ag-button-font-weight);
	--ag-inherited-button-horizontal-padding: var(--ag-button-horizontal-padding);
	--ag-inherited-button-hover-background-color: var(--ag-button-hover-background-color);
	--ag-inherited-button-hover-border: var(--ag-button-hover-border);
	--ag-inherited-button-hover-text-color: var(--ag-button-hover-text-color);
	--ag-inherited-button-text-color: var(--ag-button-text-color);
	--ag-inherited-button-vertical-padding: var(--ag-button-vertical-padding);
	--ag-inherited-card-shadow: var(--ag-card-shadow);
	--ag-inherited-cell-batch-edit-background-color: var(--ag-cell-batch-edit-background-color);
	--ag-inherited-cell-batch-edit-text-color: var(--ag-cell-batch-edit-text-color);
	--ag-inherited-cell-editing-border: var(--ag-cell-editing-border);
	--ag-inherited-cell-editing-shadow: var(--ag-cell-editing-shadow);
	--ag-inherited-cell-font-family: var(--ag-cell-font-family);
	--ag-inherited-cell-font-size: var(--ag-cell-font-size);
	--ag-inherited-cell-font-weight: var(--ag-cell-font-weight);
	--ag-inherited-cell-horizontal-padding: var(--ag-cell-horizontal-padding);
	--ag-inherited-cell-horizontal-padding-scale: var(--ag-cell-horizontal-padding-scale);
	--ag-inherited-cell-text-color: var(--ag-cell-text-color);
	--ag-inherited-cell-widget-spacing: var(--ag-cell-widget-spacing);
	--ag-inherited-chart-menu-label-color: var(--ag-chart-menu-label-color);
	--ag-inherited-chart-menu-panel-width: var(--ag-chart-menu-panel-width);
	--ag-inherited-checkbox-border-radius: var(--ag-checkbox-border-radius);
	--ag-inherited-checkbox-border-width: var(--ag-checkbox-border-width);
	--ag-inherited-checkbox-checked-background-color: var(--ag-checkbox-checked-background-color);
	--ag-inherited-checkbox-checked-border-color: var(--ag-checkbox-checked-border-color);
	--ag-inherited-checkbox-checked-shape-color: var(--ag-checkbox-checked-shape-color);
	--ag-inherited-checkbox-checked-shape-image: var(--ag-checkbox-checked-shape-image);
	--ag-inherited-checkbox-indeterminate-background-color: var(--ag-checkbox-indeterminate-background-color);
	--ag-inherited-checkbox-indeterminate-border-color: var(--ag-checkbox-indeterminate-border-color);
	--ag-inherited-checkbox-indeterminate-shape-color: var(--ag-checkbox-indeterminate-shape-color);
	--ag-inherited-checkbox-indeterminate-shape-image: var(--ag-checkbox-indeterminate-shape-image);
	--ag-inherited-checkbox-unchecked-background-color: var(--ag-checkbox-unchecked-background-color);
	--ag-inherited-checkbox-unchecked-border-color: var(--ag-checkbox-unchecked-border-color);
	--ag-inherited-chrome-background-color: var(--ag-chrome-background-color);
	--ag-inherited-color-picker-color-border-radius: var(--ag-color-picker-color-border-radius);
	--ag-inherited-color-picker-thumb-border-width: var(--ag-color-picker-thumb-border-width);
	--ag-inherited-color-picker-thumb-size: var(--ag-color-picker-thumb-size);
	--ag-inherited-color-picker-track-border-radius: var(--ag-color-picker-track-border-radius);
	--ag-inherited-color-picker-track-size: var(--ag-color-picker-track-size);
	--ag-inherited-column-border: var(--ag-column-border);
	--ag-inherited-column-drag-indicator-color: var(--ag-column-drag-indicator-color);
	--ag-inherited-column-drag-indicator-width: var(--ag-column-drag-indicator-width);
	--ag-inherited-column-drop-cell-background-color: var(--ag-column-drop-cell-background-color);
	--ag-inherited-column-drop-cell-border: var(--ag-column-drop-cell-border);
	--ag-inherited-column-drop-cell-drag-handle-color: var(--ag-column-drop-cell-drag-handle-color);
	--ag-inherited-column-drop-cell-text-color: var(--ag-column-drop-cell-text-color);
	--ag-inherited-column-hover-color: var(--ag-column-hover-color);
	--ag-inherited-column-panel-apply-button-background-color: var(--ag-column-panel-apply-button-background-color);
	--ag-inherited-column-panel-apply-button-color: var(--ag-column-panel-apply-button-color);
	--ag-inherited-column-select-indent-size: var(--ag-column-select-indent-size);
	--ag-inherited-data-background-color: var(--ag-data-background-color);
	--ag-inherited-data-font-size: var(--ag-data-font-size);
	--ag-inherited-dialog-border: var(--ag-dialog-border);
	--ag-inherited-dialog-shadow: var(--ag-dialog-shadow);
	--ag-inherited-drag-and-drop-image-background-color: var(--ag-drag-and-drop-image-background-color);
	--ag-inherited-drag-and-drop-image-border: var(--ag-drag-and-drop-image-border);
	--ag-inherited-drag-and-drop-image-not-allowed-border: var(--ag-drag-and-drop-image-not-allowed-border);
	--ag-inherited-drag-and-drop-image-shadow: var(--ag-drag-and-drop-image-shadow);
	--ag-inherited-drag-handle-color: var(--ag-drag-handle-color);
	--ag-inherited-dropdown-shadow: var(--ag-dropdown-shadow);
	--ag-inherited-filter-panel-apply-button-background-color: var(--ag-filter-panel-apply-button-background-color);
	--ag-inherited-filter-panel-apply-button-color: var(--ag-filter-panel-apply-button-color);
	--ag-inherited-filter-panel-card-subtle-color: var(--ag-filter-panel-card-subtle-color);
	--ag-inherited-filter-panel-card-subtle-hover-color: var(--ag-filter-panel-card-subtle-hover-color);
	--ag-inherited-filter-tool-panel-group-indent: var(--ag-filter-tool-panel-group-indent);
	--ag-inherited-find-active-match-background-color: var(--ag-find-active-match-background-color);
	--ag-inherited-find-active-match-color: var(--ag-find-active-match-color);
	--ag-inherited-find-match-background-color: var(--ag-find-match-background-color);
	--ag-inherited-find-match-color: var(--ag-find-match-color);
	--ag-inherited-focus-error-shadow: var(--ag-focus-error-shadow);
	--ag-inherited-focus-shadow: var(--ag-focus-shadow);
	--ag-inherited-font-family: var(--ag-font-family);
	--ag-inherited-font-size: var(--ag-font-size);
	--ag-inherited-font-weight: var(--ag-font-weight);
	--ag-inherited-footer-row-border: var(--ag-footer-row-border);
	--ag-inherited-foreground-color: var(--ag-foreground-color);
	--ag-inherited-formula-token-1-background-color: var(--ag-formula-token-1-background-color);
	--ag-inherited-formula-token-1-border: var(--ag-formula-token-1-border);
	--ag-inherited-formula-token-1-color: var(--ag-formula-token-1-color);
	--ag-inherited-formula-token-2-background-color: var(--ag-formula-token-2-background-color);
	--ag-inherited-formula-token-2-border: var(--ag-formula-token-2-border);
	--ag-inherited-formula-token-2-color: var(--ag-formula-token-2-color);
	--ag-inherited-formula-token-3-background-color: var(--ag-formula-token-3-background-color);
	--ag-inherited-formula-token-3-border: var(--ag-formula-token-3-border);
	--ag-inherited-formula-token-3-color: var(--ag-formula-token-3-color);
	--ag-inherited-formula-token-4-background-color: var(--ag-formula-token-4-background-color);
	--ag-inherited-formula-token-4-border: var(--ag-formula-token-4-border);
	--ag-inherited-formula-token-4-color: var(--ag-formula-token-4-color);
	--ag-inherited-formula-token-5-background-color: var(--ag-formula-token-5-background-color);
	--ag-inherited-formula-token-5-border: var(--ag-formula-token-5-border);
	--ag-inherited-formula-token-5-color: var(--ag-formula-token-5-color);
	--ag-inherited-formula-token-6-background-color: var(--ag-formula-token-6-background-color);
	--ag-inherited-formula-token-6-border: var(--ag-formula-token-6-border);
	--ag-inherited-formula-token-6-color: var(--ag-formula-token-6-color);
	--ag-inherited-formula-token-7-background-color: var(--ag-formula-token-7-background-color);
	--ag-inherited-formula-token-7-border: var(--ag-formula-token-7-border);
	--ag-inherited-formula-token-7-color: var(--ag-formula-token-7-color);
	--ag-inherited-full-row-edit-invalid-background-color: var(--ag-full-row-edit-invalid-background-color);
	--ag-inherited-header-background-color: var(--ag-header-background-color);
	--ag-inherited-header-cell-background-transition-duration: var(--ag-header-cell-background-transition-duration);
	--ag-inherited-header-cell-hover-background-color: var(--ag-header-cell-hover-background-color);
	--ag-inherited-header-cell-moving-background-color: var(--ag-header-cell-moving-background-color);
	--ag-inherited-header-column-border: var(--ag-header-column-border);
	--ag-inherited-header-column-border-height: var(--ag-header-column-border-height);
	--ag-inherited-header-column-resize-handle-color: var(--ag-header-column-resize-handle-color);
	--ag-inherited-header-column-resize-handle-height: var(--ag-header-column-resize-handle-height);
	--ag-inherited-header-column-resize-handle-width: var(--ag-header-column-resize-handle-width);
	--ag-inherited-header-font-family: var(--ag-header-font-family);
	--ag-inherited-header-font-size: var(--ag-header-font-size);
	--ag-inherited-header-font-weight: var(--ag-header-font-weight);
	--ag-inherited-header-height: var(--ag-header-height);
	--ag-inherited-header-row-border: var(--ag-header-row-border);
	--ag-inherited-header-text-color: var(--ag-header-text-color);
	--ag-inherited-header-vertical-padding-scale: var(--ag-header-vertical-padding-scale);
	--ag-inherited-icon-button-active-background-color: var(--ag-icon-button-active-background-color);
	--ag-inherited-icon-button-active-color: var(--ag-icon-button-active-color);
	--ag-inherited-icon-button-active-indicator-color: var(--ag-icon-button-active-indicator-color);
	--ag-inherited-icon-button-background-color: var(--ag-icon-button-background-color);
	--ag-inherited-icon-button-background-spread: var(--ag-icon-button-background-spread);
	--ag-inherited-icon-button-border-radius: var(--ag-icon-button-border-radius);
	--ag-inherited-icon-button-color: var(--ag-icon-button-color);
	--ag-inherited-icon-button-hover-background-color: var(--ag-icon-button-hover-background-color);
	--ag-inherited-icon-button-hover-color: var(--ag-icon-button-hover-color);
	--ag-inherited-icon-color: var(--ag-icon-color);
	--ag-inherited-icon-size: var(--ag-icon-size);
	--ag-inherited-input-background-color: var(--ag-input-background-color);
	--ag-inherited-input-border: var(--ag-input-border);
	--ag-inherited-input-border-radius: var(--ag-input-border-radius);
	--ag-inherited-input-disabled-background-color: var(--ag-input-disabled-background-color);
	--ag-inherited-input-disabled-border: var(--ag-input-disabled-border);
	--ag-inherited-input-disabled-text-color: var(--ag-input-disabled-text-color);
	--ag-inherited-input-focus-background-color: var(--ag-input-focus-background-color);
	--ag-inherited-input-focus-border: var(--ag-input-focus-border);
	--ag-inherited-input-focus-shadow: var(--ag-input-focus-shadow);
	--ag-inherited-input-focus-text-color: var(--ag-input-focus-text-color);
	--ag-inherited-input-height: var(--ag-input-height);
	--ag-inherited-input-icon-color: var(--ag-input-icon-color);
	--ag-inherited-input-invalid-background-color: var(--ag-input-invalid-background-color);
	--ag-inherited-input-invalid-border: var(--ag-input-invalid-border);
	--ag-inherited-input-invalid-text-color: var(--ag-input-invalid-text-color);
	--ag-inherited-input-padding-start: var(--ag-input-padding-start);
	--ag-inherited-input-placeholder-text-color: var(--ag-input-placeholder-text-color);
	--ag-inherited-input-text-color: var(--ag-input-text-color);
	--ag-inherited-invalid-color: var(--ag-invalid-color);
	--ag-inherited-list-item-height: var(--ag-list-item-height);
	--ag-inherited-menu-background-color: var(--ag-menu-background-color);
	--ag-inherited-menu-border: var(--ag-menu-border);
	--ag-inherited-menu-separator-color: var(--ag-menu-separator-color);
	--ag-inherited-menu-shadow: var(--ag-menu-shadow);
	--ag-inherited-menu-text-color: var(--ag-menu-text-color);
	--ag-inherited-modal-overlay-background-color: var(--ag-modal-overlay-background-color);
	--ag-inherited-note-indicator-color: var(--ag-note-indicator-color);
	--ag-inherited-note-indicator-size: var(--ag-note-indicator-size);
	--ag-inherited-note-popup-background-color: var(--ag-note-popup-background-color);
	--ag-inherited-note-popup-border: var(--ag-note-popup-border);
	--ag-inherited-note-popup-input-background-color: var(--ag-note-popup-input-background-color);
	--ag-inherited-note-popup-input-text-color: var(--ag-note-popup-input-text-color);
	--ag-inherited-note-popup-padding: var(--ag-note-popup-padding);
	--ag-inherited-note-popup-text-color: var(--ag-note-popup-text-color);
	--ag-inherited-odd-row-background-color: var(--ag-odd-row-background-color);
	--ag-inherited-pagination-panel-height: var(--ag-pagination-panel-height);
	--ag-inherited-panel-background-color: var(--ag-panel-background-color);
	--ag-inherited-panel-title-bar-background-color: var(--ag-panel-title-bar-background-color);
	--ag-inherited-panel-title-bar-border: var(--ag-panel-title-bar-border);
	--ag-inherited-panel-title-bar-font-family: var(--ag-panel-title-bar-font-family);
	--ag-inherited-panel-title-bar-font-size: var(--ag-panel-title-bar-font-size);
	--ag-inherited-panel-title-bar-font-weight: var(--ag-panel-title-bar-font-weight);
	--ag-inherited-panel-title-bar-height: var(--ag-panel-title-bar-height);
	--ag-inherited-panel-title-bar-icon-color: var(--ag-panel-title-bar-icon-color);
	--ag-inherited-panel-title-bar-text-color: var(--ag-panel-title-bar-text-color);
	--ag-inherited-picker-button-background-color: var(--ag-picker-button-background-color);
	--ag-inherited-picker-button-border: var(--ag-picker-button-border);
	--ag-inherited-picker-button-focus-background-color: var(--ag-picker-button-focus-background-color);
	--ag-inherited-picker-button-focus-border: var(--ag-picker-button-focus-border);
	--ag-inherited-picker-list-background-color: var(--ag-picker-list-background-color);
	--ag-inherited-picker-list-border: var(--ag-picker-list-border);
	--ag-inherited-pinned-column-border: var(--ag-pinned-column-border);
	--ag-inherited-pinned-row-background-color: var(--ag-pinned-row-background-color);
	--ag-inherited-pinned-row-border: var(--ag-pinned-row-border);
	--ag-inherited-pinned-row-font-weight: var(--ag-pinned-row-font-weight);
	--ag-inherited-pinned-row-text-color: var(--ag-pinned-row-text-color);
	--ag-inherited-pinned-source-row-background-color: var(--ag-pinned-source-row-background-color);
	--ag-inherited-pinned-source-row-font-weight: var(--ag-pinned-source-row-font-weight);
	--ag-inherited-pinned-source-row-text-color: var(--ag-pinned-source-row-text-color);
	--ag-inherited-popup-shadow: var(--ag-popup-shadow);
	--ag-inherited-radio-checked-shape-image: var(--ag-radio-checked-shape-image);
	--ag-inherited-range-header-highlight-color: var(--ag-range-header-highlight-color);
	--ag-inherited-range-selection-background-color: var(--ag-range-selection-background-color);
	--ag-inherited-range-selection-border-color: var(--ag-range-selection-border-color);
	--ag-inherited-range-selection-border-style: var(--ag-range-selection-border-style);
	--ag-inherited-range-selection-chart-background-color: var(--ag-range-selection-chart-background-color);
	--ag-inherited-range-selection-chart-category-background-color: var(--ag-range-selection-chart-category-background-color);
	--ag-inherited-range-selection-highlight-color: var(--ag-range-selection-highlight-color);
	--ag-inherited-row-batch-edit-background-color: var(--ag-row-batch-edit-background-color);
	--ag-inherited-row-batch-edit-text-color: var(--ag-row-batch-edit-text-color);
	--ag-inherited-row-border: var(--ag-row-border);
	--ag-inherited-row-drag-indicator-color: var(--ag-row-drag-indicator-color);
	--ag-inherited-row-drag-indicator-width: var(--ag-row-drag-indicator-width);
	--ag-inherited-row-group-indent-size: var(--ag-row-group-indent-size);
	--ag-inherited-row-height: var(--ag-row-height);
	--ag-inherited-row-hover-color: var(--ag-row-hover-color);
	--ag-inherited-row-loading-skeleton-effect-color: var(--ag-row-loading-skeleton-effect-color);
	--ag-inherited-row-numbers-selected-color: var(--ag-row-numbers-selected-color);
	--ag-inherited-row-vertical-padding-scale: var(--ag-row-vertical-padding-scale);
	--ag-inherited-select-cell-background-color: var(--ag-select-cell-background-color);
	--ag-inherited-select-cell-border: var(--ag-select-cell-border);
	--ag-inherited-selected-row-background-color: var(--ag-selected-row-background-color);
	--ag-inherited-set-filter-indent-size: var(--ag-set-filter-indent-size);
	--ag-inherited-side-bar-background-color: var(--ag-side-bar-background-color);
	--ag-inherited-side-bar-panel-animation-duration: var(--ag-side-bar-panel-animation-duration);
	--ag-inherited-side-bar-panel-width: var(--ag-side-bar-panel-width);
	--ag-inherited-side-button-background-color: var(--ag-side-button-background-color);
	--ag-inherited-side-button-bar-background-color: var(--ag-side-button-bar-background-color);
	--ag-inherited-side-button-bar-top-padding: var(--ag-side-button-bar-top-padding);
	--ag-inherited-side-button-border: var(--ag-side-button-border);
	--ag-inherited-side-button-hover-background-color: var(--ag-side-button-hover-background-color);
	--ag-inherited-side-button-hover-text-color: var(--ag-side-button-hover-text-color);
	--ag-inherited-side-button-left-padding: var(--ag-side-button-left-padding);
	--ag-inherited-side-button-right-padding: var(--ag-side-button-right-padding);
	--ag-inherited-side-button-selected-background-color: var(--ag-side-button-selected-background-color);
	--ag-inherited-side-button-selected-border: var(--ag-side-button-selected-border);
	--ag-inherited-side-button-selected-text-color: var(--ag-side-button-selected-text-color);
	--ag-inherited-side-button-selected-underline-color: var(--ag-side-button-selected-underline-color);
	--ag-inherited-side-button-selected-underline-transition-duration: var(--ag-side-button-selected-underline-transition-duration);
	--ag-inherited-side-button-selected-underline-width: var(--ag-side-button-selected-underline-width);
	--ag-inherited-side-button-text-color: var(--ag-side-button-text-color);
	--ag-inherited-side-button-vertical-padding: var(--ag-side-button-vertical-padding);
	--ag-inherited-side-panel-border: var(--ag-side-panel-border);
	--ag-inherited-spacing: var(--ag-spacing);
	--ag-inherited-status-bar-label-color: var(--ag-status-bar-label-color);
	--ag-inherited-status-bar-label-font-weight: var(--ag-status-bar-label-font-weight);
	--ag-inherited-status-bar-value-color: var(--ag-status-bar-value-color);
	--ag-inherited-status-bar-value-font-weight: var(--ag-status-bar-value-font-weight);
	--ag-inherited-subtle-text-color: var(--ag-subtle-text-color);
	--ag-inherited-tab-background-color: var(--ag-tab-background-color);
	--ag-inherited-tab-bar-background-color: var(--ag-tab-bar-background-color);
	--ag-inherited-tab-bar-border: var(--ag-tab-bar-border);
	--ag-inherited-tab-bar-horizontal-padding: var(--ag-tab-bar-horizontal-padding);
	--ag-inherited-tab-bar-top-padding: var(--ag-tab-bar-top-padding);
	--ag-inherited-tab-bottom-padding: var(--ag-tab-bottom-padding);
	--ag-inherited-tab-horizontal-padding: var(--ag-tab-horizontal-padding);
	--ag-inherited-tab-hover-background-color: var(--ag-tab-hover-background-color);
	--ag-inherited-tab-hover-text-color: var(--ag-tab-hover-text-color);
	--ag-inherited-tab-selected-background-color: var(--ag-tab-selected-background-color);
	--ag-inherited-tab-selected-border-color: var(--ag-tab-selected-border-color);
	--ag-inherited-tab-selected-border-width: var(--ag-tab-selected-border-width);
	--ag-inherited-tab-selected-text-color: var(--ag-tab-selected-text-color);
	--ag-inherited-tab-selected-underline-color: var(--ag-tab-selected-underline-color);
	--ag-inherited-tab-selected-underline-transition-duration: var(--ag-tab-selected-underline-transition-duration);
	--ag-inherited-tab-selected-underline-width: var(--ag-tab-selected-underline-width);
	--ag-inherited-tab-spacing: var(--ag-tab-spacing);
	--ag-inherited-tab-text-color: var(--ag-tab-text-color);
	--ag-inherited-tab-top-padding: var(--ag-tab-top-padding);
	--ag-inherited-text-color: var(--ag-text-color);
	--ag-inherited-toggle-button-height: var(--ag-toggle-button-height);
	--ag-inherited-toggle-button-off-background-color: var(--ag-toggle-button-off-background-color);
	--ag-inherited-toggle-button-on-background-color: var(--ag-toggle-button-on-background-color);
	--ag-inherited-toggle-button-switch-background-color: var(--ag-toggle-button-switch-background-color);
	--ag-inherited-toggle-button-switch-inset: var(--ag-toggle-button-switch-inset);
	--ag-inherited-toggle-button-width: var(--ag-toggle-button-width);
	--ag-inherited-tool-panel-separator-border: var(--ag-tool-panel-separator-border);
	--ag-inherited-toolbar-background-color: var(--ag-toolbar-background-color);
	--ag-inherited-toolbar-separator-border: var(--ag-toolbar-separator-border);
	--ag-inherited-toolbar-text-color: var(--ag-toolbar-text-color);
	--ag-inherited-tooltip-background-color: var(--ag-tooltip-background-color);
	--ag-inherited-tooltip-border: var(--ag-tooltip-border);
	--ag-inherited-tooltip-error-background-color: var(--ag-tooltip-error-background-color);
	--ag-inherited-tooltip-error-border: var(--ag-tooltip-error-border);
	--ag-inherited-tooltip-error-text-color: var(--ag-tooltip-error-text-color);
	--ag-inherited-tooltip-text-color: var(--ag-tooltip-text-color);
	--ag-inherited-value-change-delta-down-color: var(--ag-value-change-delta-down-color);
	--ag-inherited-value-change-delta-up-color: var(--ag-value-change-delta-up-color);
	--ag-inherited-value-change-value-highlight-background-color: var(--ag-value-change-value-highlight-background-color);
	--ag-inherited-widget-container-horizontal-padding: var(--ag-widget-container-horizontal-padding);
	--ag-inherited-widget-container-vertical-padding: var(--ag-widget-container-vertical-padding);
	--ag-inherited-widget-horizontal-spacing: var(--ag-widget-horizontal-spacing);
	--ag-inherited-widget-vertical-spacing: var(--ag-widget-vertical-spacing);
	--ag-inherited-wrapper-background-color: var(--ag-wrapper-background-color);
	--ag-inherited-wrapper-border: var(--ag-wrapper-border);
	--ag-inherited-wrapper-border-radius: var(--ag-wrapper-border-radius);
:where([data-ag-theme-mode="light"]) & {
	--ag-inherited-background-color: var(--ag-background-color);
	--ag-inherited-browser-color-scheme: var(--ag-browser-color-scheme);
	--ag-inherited-chrome-background-color: var(--ag-chrome-background-color);
}
:where([data-ag-theme-mode="dark"]) & {
	--ag-inherited-advanced-filter-builder-column-pill-color: var(--ag-advanced-filter-builder-column-pill-color);
	--ag-inherited-advanced-filter-builder-join-pill-color: var(--ag-advanced-filter-builder-join-pill-color);
	--ag-inherited-advanced-filter-builder-option-pill-color: var(--ag-advanced-filter-builder-option-pill-color);
	--ag-inherited-advanced-filter-builder-value-pill-color: var(--ag-advanced-filter-builder-value-pill-color);
	--ag-inherited-background-color: var(--ag-background-color);
	--ag-inherited-browser-color-scheme: var(--ag-browser-color-scheme);
	--ag-inherited-card-shadow: var(--ag-card-shadow);
	--ag-inherited-cell-batch-edit-background-color: var(--ag-cell-batch-edit-background-color);
	--ag-inherited-cell-batch-edit-text-color: var(--ag-cell-batch-edit-text-color);
	--ag-inherited-checkbox-unchecked-border-color: var(--ag-checkbox-unchecked-border-color);
	--ag-inherited-chrome-background-color: var(--ag-chrome-background-color);
	--ag-inherited-column-panel-apply-button-color: var(--ag-column-panel-apply-button-color);
	--ag-inherited-filter-panel-apply-button-color: var(--ag-filter-panel-apply-button-color);
	--ag-inherited-find-active-match-color: var(--ag-find-active-match-color);
	--ag-inherited-find-match-color: var(--ag-find-match-color);
	--ag-inherited-formula-token-1-color: var(--ag-formula-token-1-color);
	--ag-inherited-formula-token-2-color: var(--ag-formula-token-2-color);
	--ag-inherited-formula-token-3-color: var(--ag-formula-token-3-color);
	--ag-inherited-formula-token-4-color: var(--ag-formula-token-4-color);
	--ag-inherited-formula-token-5-color: var(--ag-formula-token-5-color);
	--ag-inherited-formula-token-6-color: var(--ag-formula-token-6-color);
	--ag-inherited-formula-token-7-color: var(--ag-formula-token-7-color);
	--ag-inherited-menu-background-color: var(--ag-menu-background-color);
	--ag-inherited-popup-shadow: var(--ag-popup-shadow);
	--ag-inherited-row-batch-edit-background-color: var(--ag-row-batch-edit-background-color);
	--ag-inherited-row-batch-edit-text-color: var(--ag-row-batch-edit-text-color);
	--ag-inherited-selected-row-background-color: var(--ag-selected-row-background-color);
	--ag-inherited-toggle-button-off-background-color: var(--ag-toggle-button-off-background-color);
}
:where([data-ag-theme-mode="dark-blue"]) & {
	--ag-inherited-advanced-filter-builder-column-pill-color: var(--ag-advanced-filter-builder-column-pill-color);
	--ag-inherited-advanced-filter-builder-join-pill-color: var(--ag-advanced-filter-builder-join-pill-color);
	--ag-inherited-advanced-filter-builder-option-pill-color: var(--ag-advanced-filter-builder-option-pill-color);
	--ag-inherited-advanced-filter-builder-value-pill-color: var(--ag-advanced-filter-builder-value-pill-color);
	--ag-inherited-background-color: var(--ag-background-color);
	--ag-inherited-browser-color-scheme: var(--ag-browser-color-scheme);
	--ag-inherited-card-shadow: var(--ag-card-shadow);
	--ag-inherited-cell-batch-edit-background-color: var(--ag-cell-batch-edit-background-color);
	--ag-inherited-cell-batch-edit-text-color: var(--ag-cell-batch-edit-text-color);
	--ag-inherited-checkbox-unchecked-border-color: var(--ag-checkbox-unchecked-border-color);
	--ag-inherited-chrome-background-color: var(--ag-chrome-background-color);
	--ag-inherited-column-panel-apply-button-color: var(--ag-column-panel-apply-button-color);
	--ag-inherited-filter-panel-apply-button-color: var(--ag-filter-panel-apply-button-color);
	--ag-inherited-find-active-match-color: var(--ag-find-active-match-color);
	--ag-inherited-find-match-color: var(--ag-find-match-color);
	--ag-inherited-formula-token-1-color: var(--ag-formula-token-1-color);
	--ag-inherited-formula-token-2-color: var(--ag-formula-token-2-color);
	--ag-inherited-formula-token-3-color: var(--ag-formula-token-3-color);
	--ag-inherited-formula-token-4-color: var(--ag-formula-token-4-color);
	--ag-inherited-formula-token-5-color: var(--ag-formula-token-5-color);
	--ag-inherited-formula-token-6-color: var(--ag-formula-token-6-color);
	--ag-inherited-formula-token-7-color: var(--ag-formula-token-7-color);
	--ag-inherited-menu-background-color: var(--ag-menu-background-color);
	--ag-inherited-popup-shadow: var(--ag-popup-shadow);
	--ag-inherited-row-batch-edit-background-color: var(--ag-row-batch-edit-background-color);
	--ag-inherited-row-batch-edit-text-color: var(--ag-row-batch-edit-text-color);
	--ag-inherited-selected-row-background-color: var(--ag-selected-row-background-color);
	--ag-inherited-toggle-button-off-background-color: var(--ag-toggle-button-off-background-color);
}
:where(.ag-theme-params-1) {
	--ag-accent-color: var(--ag-inherited-accent-color, #f9a134);
	--ag-advanced-filter-builder-button-bar-border: var(--ag-inherited-advanced-filter-builder-button-bar-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-advanced-filter-builder-column-pill-color: var(--ag-inherited-advanced-filter-builder-column-pill-color, #a6e194);
	--ag-advanced-filter-builder-indent-size: var(--ag-inherited-advanced-filter-builder-indent-size, calc( var(--ag-spacing)   *  2  +   var(--ag-icon-size) ));
	--ag-advanced-filter-builder-join-pill-color: var(--ag-inherited-advanced-filter-builder-join-pill-color, #f08e8d);
	--ag-advanced-filter-builder-option-pill-color: var(--ag-inherited-advanced-filter-builder-option-pill-color, #f3c08b);
	--ag-advanced-filter-builder-value-pill-color: var(--ag-inherited-advanced-filter-builder-value-pill-color, #85c0e4);
	--ag-background-color: var(--ag-inherited-background-color, #fff);
	--ag-border-color: var(--ag-inherited-border-color, #dcdcdc);
	--ag-border-radius: var(--ag-inherited-border-radius, 4px);
	--ag-border-width: var(--ag-inherited-border-width, 1px);
	--ag-browser-color-scheme: var(--ag-inherited-browser-color-scheme, light);
	--ag-button-active-background-color: var(--ag-inherited-button-active-background-color, var(--ag-button-hover-background-color));
	--ag-button-active-border: var(--ag-inherited-button-active-border, solid var(--ag-border-width) var(--ag-accent-color));
	--ag-button-active-text-color: var(--ag-inherited-button-active-text-color, var(--ag-button-hover-text-color));
	--ag-button-background-color: var(--ag-inherited-button-background-color, var(--ag-background-color));
	--ag-button-border: var(--ag-inherited-button-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-button-border-radius: var(--ag-inherited-button-border-radius, var(--ag-border-radius));
	--ag-button-disabled-background-color: var(--ag-inherited-button-disabled-background-color, var(--ag-input-disabled-background-color));
	--ag-button-disabled-border: var(--ag-inherited-button-disabled-border, var(--ag-input-disabled-border));
	--ag-button-disabled-text-color: var(--ag-inherited-button-disabled-text-color, var(--ag-input-disabled-text-color));
	--ag-button-font-weight: var(--ag-inherited-button-font-weight, normal);
	--ag-button-horizontal-padding: var(--ag-inherited-button-horizontal-padding, calc( var(--ag-spacing)   *  2));
	--ag-button-hover-background-color: var(--ag-inherited-button-hover-background-color, var(--ag-row-hover-color));
	--ag-button-hover-border: var(--ag-inherited-button-hover-border, var(--ag-button-border));
	--ag-button-hover-text-color: var(--ag-inherited-button-hover-text-color, var(--ag-button-text-color));
	--ag-button-text-color: var(--ag-inherited-button-text-color, inherit);
	--ag-button-vertical-padding: var(--ag-inherited-button-vertical-padding, var(--ag-spacing));
	--ag-card-shadow: var(--ag-inherited-card-shadow, 0 1px 4px 1px #00000018);
	--ag-cell-batch-edit-background-color: var(--ag-inherited-cell-batch-edit-background-color, rgba(220 181 139 / 16%));
	--ag-cell-batch-edit-text-color: var(--ag-inherited-cell-batch-edit-text-color, #422f00);
	--ag-cell-editing-border: var(--ag-inherited-cell-editing-border, solid var(--ag-border-width) var(--ag-accent-color));
	--ag-cell-editing-shadow: var(--ag-inherited-cell-editing-shadow, var(--ag-card-shadow));
	--ag-cell-font-family: var(--ag-inherited-cell-font-family, var(--ag-font-family));
	--ag-cell-font-size: var(--ag-inherited-cell-font-size, var(--ag-data-font-size));
	--ag-cell-font-weight: var(--ag-inherited-cell-font-weight, var(--ag-font-weight));
	--ag-cell-horizontal-padding: var(--ag-inherited-cell-horizontal-padding, calc( var(--ag-spacing)   *  2  *   var(--ag-cell-horizontal-padding-scale) ));
	--ag-cell-horizontal-padding-scale: var(--ag-inherited-cell-horizontal-padding-scale, 1);
	--ag-cell-text-color: var(--ag-inherited-cell-text-color, var(--ag-text-color));
	--ag-cell-widget-spacing: var(--ag-inherited-cell-widget-spacing, calc( var(--ag-spacing)   *  1.5));
	--ag-chart-menu-label-color: var(--ag-inherited-chart-menu-label-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 80%));
	--ag-chart-menu-panel-width: var(--ag-inherited-chart-menu-panel-width, 260px);
	--ag-checkbox-border-radius: var(--ag-inherited-checkbox-border-radius, var(--ag-border-radius));
	--ag-checkbox-border-width: var(--ag-inherited-checkbox-border-width, 1px);
	--ag-checkbox-checked-background-color: var(--ag-inherited-checkbox-checked-background-color, #f9a134);
	--ag-checkbox-checked-border-color: var(--ag-inherited-checkbox-checked-border-color, var(--ag-checkbox-checked-background-color));
	--ag-checkbox-checked-shape-color: var(--ag-inherited-checkbox-checked-shape-color, var(--ag-background-color));
	--ag-checkbox-checked-shape-image: var(--ag-inherited-checkbox-checked-shape-image, url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%227%22%20fill%3D%22none%22%3E%3Cpath%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.75%22%20d%3D%22M1%203.5%203.5%206l5-5%22%2F%3E%3C%2Fsvg%3E"));
	--ag-checkbox-indeterminate-background-color: var(--ag-inherited-checkbox-indeterminate-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
	--ag-checkbox-indeterminate-border-color: var(--ag-inherited-checkbox-indeterminate-border-color, var(--ag-checkbox-indeterminate-background-color));
	--ag-checkbox-indeterminate-shape-color: var(--ag-inherited-checkbox-indeterminate-shape-color, var(--ag-background-color));
	--ag-checkbox-indeterminate-shape-image: var(--ag-inherited-checkbox-indeterminate-shape-image, url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%222%22%20fill%3D%22none%22%3E%3Crect%20width%3D%2210%22%20height%3D%222%22%20fill%3D%22%23000%22%20rx%3D%221%22%2F%3E%3C%2Fsvg%3E"));
	--ag-checkbox-unchecked-background-color: var(--ag-inherited-checkbox-unchecked-background-color, var(--ag-background-color));
	--ag-checkbox-unchecked-border-color: var(--ag-inherited-checkbox-unchecked-border-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
	--ag-chrome-background-color: var(--ag-inherited-chrome-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 2%));
	--ag-color-picker-color-border-radius: var(--ag-inherited-color-picker-color-border-radius, 4px);
	--ag-color-picker-thumb-border-width: var(--ag-inherited-color-picker-thumb-border-width, 3px);
	--ag-color-picker-thumb-size: var(--ag-inherited-color-picker-thumb-size, 18px);
	--ag-color-picker-track-border-radius: var(--ag-inherited-color-picker-track-border-radius, 12px);
	--ag-color-picker-track-size: var(--ag-inherited-color-picker-track-size, 12px);
	--ag-column-border: var(--ag-inherited-column-border, solid 1px transparent);
	--ag-column-drag-indicator-color: var(--ag-inherited-column-drag-indicator-color, var(--ag-accent-color));
	--ag-column-drag-indicator-width: var(--ag-inherited-column-drag-indicator-width, 2px);
	--ag-column-drop-cell-background-color: var(--ag-inherited-column-drop-cell-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 7.000000000000001%));
	--ag-column-drop-cell-border: var(--ag-inherited-column-drop-cell-border, solid var(--ag-border-width) color-mix(in srgb, transparent, var(--ag-foreground-color) 13%));
	--ag-column-drop-cell-drag-handle-color: var(--ag-inherited-column-drop-cell-drag-handle-color, var(--ag-text-color));
	--ag-column-drop-cell-text-color: var(--ag-inherited-column-drop-cell-text-color, var(--ag-text-color));
	--ag-column-hover-color: var(--ag-inherited-column-hover-color, color-mix(in srgb, transparent, var(--ag-accent-color) 5%));
	--ag-column-panel-apply-button-background-color: var(--ag-inherited-column-panel-apply-button-background-color, var(--ag-accent-color));
	--ag-column-panel-apply-button-color: var(--ag-inherited-column-panel-apply-button-color, var(--ag-background-color));
	--ag-column-select-indent-size: var(--ag-inherited-column-select-indent-size, var(--ag-icon-size));
	--ag-data-background-color: var(--ag-inherited-data-background-color, var(--ag-background-color));
	--ag-data-font-size: var(--ag-inherited-data-font-size, 13px);
	--ag-dialog-border: var(--ag-inherited-dialog-border, solid var(--ag-border-width) color-mix(in srgb, transparent, var(--ag-foreground-color) 20%));
	--ag-dialog-shadow: var(--ag-inherited-dialog-shadow, var(--ag-popup-shadow));
	--ag-drag-and-drop-image-background-color: var(--ag-inherited-drag-and-drop-image-background-color, var(--ag-background-color));
	--ag-drag-and-drop-image-border: var(--ag-inherited-drag-and-drop-image-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-drag-and-drop-image-not-allowed-border: var(--ag-inherited-drag-and-drop-image-not-allowed-border, solid var(--ag-border-width) color-mix(in srgb, var(--ag-drag-and-drop-image-background-color), var(--ag-invalid-color) 50%));
	--ag-drag-and-drop-image-shadow: var(--ag-inherited-drag-and-drop-image-shadow, var(--ag-popup-shadow));
	--ag-drag-handle-color: var(--ag-inherited-drag-handle-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 70%));
	--ag-dropdown-shadow: var(--ag-inherited-dropdown-shadow, var(--ag-card-shadow));
	--ag-filter-panel-apply-button-background-color: var(--ag-inherited-filter-panel-apply-button-background-color, var(--ag-accent-color));
	--ag-filter-panel-apply-button-color: var(--ag-inherited-filter-panel-apply-button-color, var(--ag-background-color));
	--ag-filter-panel-card-subtle-color: var(--ag-inherited-filter-panel-card-subtle-color, color-mix(in srgb, transparent, var(--ag-text-color) 70%));
	--ag-filter-panel-card-subtle-hover-color: var(--ag-inherited-filter-panel-card-subtle-hover-color, var(--ag-text-color));
	--ag-filter-tool-panel-group-indent: var(--ag-inherited-filter-tool-panel-group-indent, var(--ag-spacing));
	--ag-find-active-match-background-color: var(--ag-inherited-find-active-match-background-color, #ffa500);
	--ag-find-active-match-color: var(--ag-inherited-find-active-match-color, var(--ag-foreground-color));
	--ag-find-match-background-color: var(--ag-inherited-find-match-background-color, #ffff00);
	--ag-find-match-color: var(--ag-inherited-find-match-color, var(--ag-foreground-color));
	--ag-focus-error-shadow: var(--ag-inherited-focus-error-shadow, 0px 0px 0px 3px color-mix(in srgb, var(--ag-background-color), var(--ag-invalid-color) 50%));
	--ag-focus-shadow: var(--ag-inherited-focus-shadow, 0px 0px 0px 3px color-mix(in srgb, transparent, var(--ag-accent-color) 50%));
	--ag-font-family: var(--ag-inherited-font-family, DM Sans, sans-serif);
	--ag-font-size: var(--ag-inherited-font-size, 14px);
	--ag-font-weight: var(--ag-inherited-font-weight, inherit);
	--ag-footer-row-border: var(--ag-inherited-footer-row-border, var(--ag-row-border));
	--ag-foreground-color: var(--ag-inherited-foreground-color, #3d3d3d);
	--ag-formula-token-1-background-color: var(--ag-inherited-formula-token-1-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-1-color) 8%));
	--ag-formula-token-1-border: var(--ag-inherited-formula-token-1-border, solid var(--ag-border-width) var(--ag-formula-token-1-color));
	--ag-formula-token-1-color: var(--ag-inherited-formula-token-1-color, #3269c6);
	--ag-formula-token-2-background-color: var(--ag-inherited-formula-token-2-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-2-color) 6%));
	--ag-formula-token-2-border: var(--ag-inherited-formula-token-2-border, solid var(--ag-border-width) var(--ag-formula-token-2-color));
	--ag-formula-token-2-color: var(--ag-inherited-formula-token-2-color, #c0343f);
	--ag-formula-token-3-background-color: var(--ag-inherited-formula-token-3-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-3-color) 8%));
	--ag-formula-token-3-border: var(--ag-inherited-formula-token-3-border, solid var(--ag-border-width) var(--ag-formula-token-3-color));
	--ag-formula-token-3-color: var(--ag-inherited-formula-token-3-color, #8156b8);
	--ag-formula-token-4-background-color: var(--ag-inherited-formula-token-4-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-4-color) 6%));
	--ag-formula-token-4-border: var(--ag-inherited-formula-token-4-border, solid var(--ag-border-width) var(--ag-formula-token-4-color));
	--ag-formula-token-4-color: var(--ag-inherited-formula-token-4-color, #007c1f);
	--ag-formula-token-5-background-color: var(--ag-inherited-formula-token-5-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-5-color) 8%));
	--ag-formula-token-5-border: var(--ag-inherited-formula-token-5-border, solid var(--ag-border-width) var(--ag-formula-token-5-color));
	--ag-formula-token-5-color: var(--ag-inherited-formula-token-5-color, #b03e85);
	--ag-formula-token-6-background-color: var(--ag-inherited-formula-token-6-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-6-color) 6%));
	--ag-formula-token-6-border: var(--ag-inherited-formula-token-6-border, solid var(--ag-border-width) var(--ag-formula-token-6-color));
	--ag-formula-token-6-color: var(--ag-inherited-formula-token-6-color, #b74900);
	--ag-formula-token-7-background-color: var(--ag-inherited-formula-token-7-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-7-color) 8%));
	--ag-formula-token-7-border: var(--ag-inherited-formula-token-7-border, solid var(--ag-border-width) var(--ag-formula-token-7-color));
	--ag-formula-token-7-color: var(--ag-inherited-formula-token-7-color, #247492);
	--ag-full-row-edit-invalid-background-color: var(--ag-inherited-full-row-edit-invalid-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-invalid-color) 25%));
	--ag-header-background-color: var(--ag-inherited-header-background-color, #005862);
	--ag-header-cell-background-transition-duration: var(--ag-inherited-header-cell-background-transition-duration, 0.2s);
	--ag-header-cell-hover-background-color: var(--ag-inherited-header-cell-hover-background-color, transparent);
	--ag-header-cell-moving-background-color: var(--ag-inherited-header-cell-moving-background-color, var(--ag-header-cell-hover-background-color));
	--ag-header-column-border: var(--ag-inherited-header-column-border, none);
	--ag-header-column-border-height: var(--ag-inherited-header-column-border-height, 100%);
	--ag-header-column-resize-handle-color: var(--ag-inherited-header-column-resize-handle-color, rgba(255, 255, 255, 0.2));
	--ag-header-column-resize-handle-height: var(--ag-inherited-header-column-resize-handle-height, 30%);
	--ag-header-column-resize-handle-width: var(--ag-inherited-header-column-resize-handle-width, 2px);
	--ag-header-font-family: var(--ag-inherited-header-font-family, DM Sans, sans-serif);
	--ag-header-font-size: var(--ag-inherited-header-font-size, 13px);
	--ag-header-font-weight: var(--ag-inherited-header-font-weight, 600);
	--ag-header-height: var(--ag-inherited-header-height, 48px);
	--ag-header-row-border: var(--ag-inherited-header-row-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-header-text-color: var(--ag-inherited-header-text-color, #ffffff);
	--ag-header-vertical-padding-scale: var(--ag-inherited-header-vertical-padding-scale, 1);
	--ag-icon-button-active-background-color: var(--ag-inherited-icon-button-active-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 28.000000000000004%));
	--ag-icon-button-active-color: var(--ag-inherited-icon-button-active-color, var(--ag-accent-color));
	--ag-icon-button-active-indicator-color: var(--ag-inherited-icon-button-active-indicator-color, var(--ag-accent-color));
	--ag-icon-button-background-color: var(--ag-inherited-icon-button-background-color, transparent);
	--ag-icon-button-background-spread: var(--ag-inherited-icon-button-background-spread, 4px);
	--ag-icon-button-border-radius: var(--ag-inherited-icon-button-border-radius, 1px);
	--ag-icon-button-color: var(--ag-inherited-icon-button-color, var(--ag-icon-color));
	--ag-icon-button-hover-background-color: var(--ag-inherited-icon-button-hover-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 10%));
	--ag-icon-button-hover-color: var(--ag-inherited-icon-button-hover-color, var(--ag-icon-button-color));
	--ag-icon-color: var(--ag-inherited-icon-color, inherit);
	--ag-icon-size: var(--ag-inherited-icon-size, 16px);
	--ag-input-background-color: var(--ag-inherited-input-background-color, var(--ag-background-color));
	--ag-input-border: var(--ag-inherited-input-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-input-border-radius: var(--ag-inherited-input-border-radius, var(--ag-border-radius));
	--ag-input-disabled-background-color: var(--ag-inherited-input-disabled-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 6%));
	--ag-input-disabled-border: var(--ag-inherited-input-disabled-border, var(--ag-input-border));
	--ag-input-disabled-text-color: var(--ag-inherited-input-disabled-text-color, color-mix(in srgb, transparent, var(--ag-text-color) 50%));
	--ag-input-focus-background-color: var(--ag-inherited-input-focus-background-color, var(--ag-input-background-color));
	--ag-input-focus-border: var(--ag-inherited-input-focus-border, solid var(--ag-border-width) var(--ag-accent-color));
	--ag-input-focus-shadow: var(--ag-inherited-input-focus-shadow, var(--ag-focus-shadow));
	--ag-input-focus-text-color: var(--ag-inherited-input-focus-text-color, var(--ag-input-text-color));
	--ag-input-height: var(--ag-inherited-input-height, calc(max( var(--ag-icon-size) ,  var(--ag-font-size) )  +   var(--ag-spacing)   *  2));
	--ag-input-icon-color: var(--ag-inherited-input-icon-color, var(--ag-input-text-color));
	--ag-input-invalid-background-color: var(--ag-inherited-input-invalid-background-color, var(--ag-input-background-color));
	--ag-input-invalid-border: var(--ag-inherited-input-invalid-border, solid var(--ag-border-width) var(--ag-invalid-color));
	--ag-input-invalid-text-color: var(--ag-inherited-input-invalid-text-color, var(--ag-input-text-color));
	--ag-input-padding-start: var(--ag-inherited-input-padding-start, var(--ag-spacing));
	--ag-input-placeholder-text-color: var(--ag-inherited-input-placeholder-text-color, color-mix(in srgb, transparent, var(--ag-input-text-color) 50%));
	--ag-input-text-color: var(--ag-inherited-input-text-color, var(--ag-text-color));
	--ag-invalid-color: var(--ag-inherited-invalid-color, #e02525);
	--ag-list-item-height: var(--ag-inherited-list-item-height, calc(max( var(--ag-icon-size) ,  var(--ag-data-font-size) )  +   var(--ag-widget-vertical-spacing) ));
	--ag-menu-background-color: var(--ag-inherited-menu-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 3%));
	--ag-menu-border: var(--ag-inherited-menu-border, solid var(--ag-border-width) color-mix(in srgb, transparent, var(--ag-foreground-color) 20%));
	--ag-menu-separator-color: var(--ag-inherited-menu-separator-color, var(--ag-border-color));
	--ag-menu-shadow: var(--ag-inherited-menu-shadow, var(--ag-popup-shadow));
	--ag-menu-text-color: var(--ag-inherited-menu-text-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 95%));
	--ag-modal-overlay-background-color: var(--ag-inherited-modal-overlay-background-color, color-mix(in srgb, transparent, var(--ag-background-color) 66%));
	--ag-note-indicator-color: var(--ag-inherited-note-indicator-color, var(--ag-accent-color));
	--ag-note-indicator-size: var(--ag-inherited-note-indicator-size, 8px);
	--ag-note-popup-background-color: var(--ag-inherited-note-popup-background-color, var(--ag-menu-background-color));
	--ag-note-popup-border: var(--ag-inherited-note-popup-border, var(--ag-dialog-border));
	--ag-note-popup-input-background-color: var(--ag-inherited-note-popup-input-background-color, var(--ag-input-background-color));
	--ag-note-popup-input-text-color: var(--ag-inherited-note-popup-input-text-color, var(--ag-input-text-color));
	--ag-note-popup-padding: var(--ag-inherited-note-popup-padding, calc( var(--ag-spacing)   *  0.5));
	--ag-note-popup-text-color: var(--ag-inherited-note-popup-text-color, color-mix(in srgb, transparent, var(--ag-menu-text-color) 75%));
	--ag-odd-row-background-color: var(--ag-inherited-odd-row-background-color, #fafafa);
	--ag-pagination-panel-height: var(--ag-inherited-pagination-panel-height, calc(max( var(--ag-row-height) , 22px)));
	--ag-panel-background-color: var(--ag-inherited-panel-background-color, var(--ag-background-color));
	--ag-panel-title-bar-background-color: var(--ag-inherited-panel-title-bar-background-color, var(--ag-header-background-color));
	--ag-panel-title-bar-border: var(--ag-inherited-panel-title-bar-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-panel-title-bar-font-family: var(--ag-inherited-panel-title-bar-font-family, var(--ag-header-font-family));
	--ag-panel-title-bar-font-size: var(--ag-inherited-panel-title-bar-font-size, var(--ag-header-font-size));
	--ag-panel-title-bar-font-weight: var(--ag-inherited-panel-title-bar-font-weight, var(--ag-header-font-weight));
	--ag-panel-title-bar-height: var(--ag-inherited-panel-title-bar-height, var(--ag-header-height));
	--ag-panel-title-bar-icon-color: var(--ag-inherited-panel-title-bar-icon-color, var(--ag-header-text-color));
	--ag-panel-title-bar-text-color: var(--ag-inherited-panel-title-bar-text-color, var(--ag-header-text-color));
	--ag-picker-button-background-color: var(--ag-inherited-picker-button-background-color, var(--ag-background-color));
	--ag-picker-button-border: var(--ag-inherited-picker-button-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-picker-button-focus-background-color: var(--ag-inherited-picker-button-focus-background-color, var(--ag-background-color));
	--ag-picker-button-focus-border: var(--ag-inherited-picker-button-focus-border, var(--ag-input-focus-border));
	--ag-picker-list-background-color: var(--ag-inherited-picker-list-background-color, var(--ag-background-color));
	--ag-picker-list-border: var(--ag-inherited-picker-list-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-pinned-column-border: var(--ag-inherited-pinned-column-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-pinned-row-background-color: var(--ag-inherited-pinned-row-background-color, var(--ag-data-background-color));
	--ag-pinned-row-border: var(--ag-inherited-pinned-row-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-pinned-row-font-weight: var(--ag-inherited-pinned-row-font-weight, 600);
	--ag-pinned-row-text-color: var(--ag-inherited-pinned-row-text-color, var(--ag-text-color));
	--ag-pinned-source-row-background-color: var(--ag-inherited-pinned-source-row-background-color, var(--ag-data-background-color));
	--ag-pinned-source-row-font-weight: var(--ag-inherited-pinned-source-row-font-weight, 600);
	--ag-pinned-source-row-text-color: var(--ag-inherited-pinned-source-row-text-color, var(--ag-text-color));
	--ag-popup-shadow: var(--ag-inherited-popup-shadow, 0 0 16px #00000026);
	--ag-radio-checked-shape-image: var(--ag-inherited-radio-checked-shape-image, url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%226%22%20height%3D%226%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E"));
	--ag-range-header-highlight-color: var(--ag-inherited-range-header-highlight-color, color-mix(in srgb, var(--ag-header-background-color), var(--ag-foreground-color) 8%));
	--ag-range-selection-background-color: var(--ag-inherited-range-selection-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 20%));
	--ag-range-selection-border-color: var(--ag-inherited-range-selection-border-color, var(--ag-accent-color));
	--ag-range-selection-border-style: var(--ag-inherited-range-selection-border-style, solid);
	--ag-range-selection-chart-background-color: var(--ag-inherited-range-selection-chart-background-color, #0058FF1A);
	--ag-range-selection-chart-category-background-color: var(--ag-inherited-range-selection-chart-category-background-color, #00FF841A);
	--ag-range-selection-highlight-color: var(--ag-inherited-range-selection-highlight-color, color-mix(in srgb, transparent, var(--ag-accent-color) 50%));
	--ag-row-batch-edit-background-color: var(--ag-inherited-row-batch-edit-background-color, var(--ag-cell-batch-edit-background-color));
	--ag-row-batch-edit-text-color: var(--ag-inherited-row-batch-edit-text-color, var(--ag-cell-batch-edit-text-color));
	--ag-row-border: var(--ag-inherited-row-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-row-drag-indicator-color: var(--ag-inherited-row-drag-indicator-color, var(--ag-range-selection-border-color));
	--ag-row-drag-indicator-width: var(--ag-inherited-row-drag-indicator-width, 2px);
	--ag-row-group-indent-size: var(--ag-inherited-row-group-indent-size, calc( var(--ag-cell-widget-spacing)   +   var(--ag-icon-size) ));
	--ag-row-height: var(--ag-inherited-row-height, 44px);
	--ag-row-hover-color: var(--ag-inherited-row-hover-color, #effefb);
	--ag-row-loading-skeleton-effect-color: var(--ag-inherited-row-loading-skeleton-effect-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 15%));
	--ag-row-numbers-selected-color: var(--ag-inherited-row-numbers-selected-color, color-mix(in srgb, transparent, var(--ag-accent-color) 50%));
	--ag-row-vertical-padding-scale: var(--ag-inherited-row-vertical-padding-scale, 1);
	--ag-select-cell-background-color: var(--ag-inherited-select-cell-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 7.000000000000001%));
	--ag-select-cell-border: var(--ag-inherited-select-cell-border, solid var(--ag-border-width) color-mix(in srgb, transparent, var(--ag-foreground-color) 13%));
	--ag-selected-row-background-color: var(--ag-inherited-selected-row-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 12%));
	--ag-set-filter-indent-size: var(--ag-inherited-set-filter-indent-size, var(--ag-icon-size));
	--ag-side-bar-background-color: var(--ag-inherited-side-bar-background-color, var(--ag-chrome-background-color));
	--ag-side-bar-panel-animation-duration: var(--ag-inherited-side-bar-panel-animation-duration, 0s);
	--ag-side-bar-panel-width: var(--ag-inherited-side-bar-panel-width, 250px);
	--ag-side-button-background-color: var(--ag-inherited-side-button-background-color, transparent);
	--ag-side-button-bar-background-color: var(--ag-inherited-side-button-bar-background-color, var(--ag-side-bar-background-color));
	--ag-side-button-bar-top-padding: var(--ag-inherited-side-button-bar-top-padding, 0px);
	--ag-side-button-border: var(--ag-inherited-side-button-border, solid 1px transparent);
	--ag-side-button-hover-background-color: var(--ag-inherited-side-button-hover-background-color, var(--ag-side-button-background-color));
	--ag-side-button-hover-text-color: var(--ag-inherited-side-button-hover-text-color, var(--ag-side-button-text-color));
	--ag-side-button-left-padding: var(--ag-inherited-side-button-left-padding, var(--ag-spacing));
	--ag-side-button-right-padding: var(--ag-inherited-side-button-right-padding, var(--ag-spacing));
	--ag-side-button-selected-background-color: var(--ag-inherited-side-button-selected-background-color, var(--ag-background-color));
	--ag-side-button-selected-border: var(--ag-inherited-side-button-selected-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-side-button-selected-text-color: var(--ag-inherited-side-button-selected-text-color, var(--ag-side-button-text-color));
	--ag-side-button-selected-underline-color: var(--ag-inherited-side-button-selected-underline-color, transparent);
	--ag-side-button-selected-underline-transition-duration: var(--ag-inherited-side-button-selected-underline-transition-duration, 0s);
	--ag-side-button-selected-underline-width: var(--ag-inherited-side-button-selected-underline-width, 2px);
	--ag-side-button-text-color: var(--ag-inherited-side-button-text-color, var(--ag-text-color));
	--ag-side-button-vertical-padding: var(--ag-inherited-side-button-vertical-padding, calc( var(--ag-spacing)   *  3));
	--ag-side-panel-border: var(--ag-inherited-side-panel-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-spacing: var(--ag-inherited-spacing, 8px);
	--ag-status-bar-label-color: var(--ag-inherited-status-bar-label-color, var(--ag-foreground-color));
	--ag-status-bar-label-font-weight: var(--ag-inherited-status-bar-label-font-weight, 500);
	--ag-status-bar-value-color: var(--ag-inherited-status-bar-value-color, var(--ag-foreground-color));
	--ag-status-bar-value-font-weight: var(--ag-inherited-status-bar-value-font-weight, 500);
	--ag-subtle-text-color: var(--ag-inherited-subtle-text-color, color-mix(in srgb, transparent, var(--ag-text-color) 50%));
	--ag-tab-background-color: var(--ag-inherited-tab-background-color, transparent);
	--ag-tab-bar-background-color: var(--ag-inherited-tab-bar-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 5%));
	--ag-tab-bar-border: var(--ag-inherited-tab-bar-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-tab-bar-horizontal-padding: var(--ag-inherited-tab-bar-horizontal-padding, 0px);
	--ag-tab-bar-top-padding: var(--ag-inherited-tab-bar-top-padding, 0px);
	--ag-tab-bottom-padding: var(--ag-inherited-tab-bottom-padding, var(--ag-spacing));
	--ag-tab-horizontal-padding: var(--ag-inherited-tab-horizontal-padding, var(--ag-spacing));
	--ag-tab-hover-background-color: var(--ag-inherited-tab-hover-background-color, var(--ag-tab-background-color));
	--ag-tab-hover-text-color: var(--ag-inherited-tab-hover-text-color, var(--ag-text-color));
	--ag-tab-selected-background-color: var(--ag-inherited-tab-selected-background-color, var(--ag-background-color));
	--ag-tab-selected-border-color: var(--ag-inherited-tab-selected-border-color, var(--ag-border-color));
	--ag-tab-selected-border-width: var(--ag-inherited-tab-selected-border-width, var(--ag-border-width));
	--ag-tab-selected-text-color: var(--ag-inherited-tab-selected-text-color, var(--ag-text-color));
	--ag-tab-selected-underline-color: var(--ag-inherited-tab-selected-underline-color, transparent);
	--ag-tab-selected-underline-transition-duration: var(--ag-inherited-tab-selected-underline-transition-duration, 0s);
	--ag-tab-selected-underline-width: var(--ag-inherited-tab-selected-underline-width, 0px);
	--ag-tab-spacing: var(--ag-inherited-tab-spacing, 0);
	--ag-tab-text-color: var(--ag-inherited-tab-text-color, color-mix(in srgb, transparent, var(--ag-text-color) 70%));
	--ag-tab-top-padding: var(--ag-inherited-tab-top-padding, var(--ag-spacing));
	--ag-text-color: var(--ag-inherited-text-color, var(--ag-foreground-color));
	--ag-toggle-button-height: var(--ag-inherited-toggle-button-height, 18px);
	--ag-toggle-button-off-background-color: var(--ag-inherited-toggle-button-off-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
	--ag-toggle-button-on-background-color: var(--ag-inherited-toggle-button-on-background-color, var(--ag-accent-color));
	--ag-toggle-button-switch-background-color: var(--ag-inherited-toggle-button-switch-background-color, var(--ag-background-color));
	--ag-toggle-button-switch-inset: var(--ag-inherited-toggle-button-switch-inset, 2px);
	--ag-toggle-button-width: var(--ag-inherited-toggle-button-width, 28px);
	--ag-tool-panel-separator-border: var(--ag-inherited-tool-panel-separator-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-toolbar-background-color: var(--ag-inherited-toolbar-background-color, var(--ag-header-background-color));
	--ag-toolbar-separator-border: var(--ag-inherited-toolbar-separator-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-toolbar-text-color: var(--ag-inherited-toolbar-text-color, var(--ag-header-text-color));
	--ag-tooltip-background-color: var(--ag-inherited-tooltip-background-color, var(--ag-chrome-background-color));
	--ag-tooltip-border: var(--ag-inherited-tooltip-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-tooltip-error-background-color: var(--ag-inherited-tooltip-error-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-invalid-color) 10%));
	--ag-tooltip-error-border: var(--ag-inherited-tooltip-error-border, solid var(--ag-border-width) color-mix(in srgb, var(--ag-background-color), var(--ag-invalid-color) 25%));
	--ag-tooltip-error-text-color: var(--ag-inherited-tooltip-error-text-color, var(--ag-invalid-color));
	--ag-tooltip-text-color: var(--ag-inherited-tooltip-text-color, var(--ag-text-color));
	--ag-value-change-delta-down-color: var(--ag-inherited-value-change-delta-down-color, #e53935);
	--ag-value-change-delta-up-color: var(--ag-inherited-value-change-delta-up-color, #43a047);
	--ag-value-change-value-highlight-background-color: var(--ag-inherited-value-change-value-highlight-background-color, #16a08580);
	--ag-widget-container-horizontal-padding: var(--ag-inherited-widget-container-horizontal-padding, calc( var(--ag-spacing)   *  1.5));
	--ag-widget-container-vertical-padding: var(--ag-inherited-widget-container-vertical-padding, calc( var(--ag-spacing)   *  1.5));
	--ag-widget-horizontal-spacing: var(--ag-inherited-widget-horizontal-spacing, calc( var(--ag-spacing)   *  1.5));
	--ag-widget-vertical-spacing: var(--ag-inherited-widget-vertical-spacing, var(--ag-spacing));
	--ag-wrapper-background-color: var(--ag-inherited-wrapper-background-color, var(--ag-background-color));
	--ag-wrapper-border: var(--ag-inherited-wrapper-border, 1px solid #dcdcdc);
	--ag-wrapper-border-radius: var(--ag-inherited-wrapper-border-radius, 4px 4px 0 0);
:where([data-ag-theme-mode="light"]) & {
	--ag-background-color: var(--ag-inherited-background-color, #fff);
	--ag-browser-color-scheme: var(--ag-inherited-browser-color-scheme, light);
	--ag-chrome-background-color: var(--ag-inherited-chrome-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 2%));
}
:where([data-ag-theme-mode="dark"]) & {
	--ag-advanced-filter-builder-column-pill-color: var(--ag-inherited-advanced-filter-builder-column-pill-color, #355f2d);
	--ag-advanced-filter-builder-join-pill-color: var(--ag-inherited-advanced-filter-builder-join-pill-color, #7a3a37);
	--ag-advanced-filter-builder-option-pill-color: var(--ag-inherited-advanced-filter-builder-option-pill-color, #5a3168);
	--ag-advanced-filter-builder-value-pill-color: var(--ag-inherited-advanced-filter-builder-value-pill-color, #374c86);
	--ag-background-color: var(--ag-inherited-background-color, hsl(217, 0%, 17%));
	--ag-browser-color-scheme: var(--ag-inherited-browser-color-scheme, dark);
	--ag-card-shadow: var(--ag-inherited-card-shadow, 0 1px 4px 1px #000A);
	--ag-cell-batch-edit-background-color: var(--ag-inherited-cell-batch-edit-background-color, rgba(220 181 139 / 16%));
	--ag-cell-batch-edit-text-color: var(--ag-inherited-cell-batch-edit-text-color, #f3d0b3);
	--ag-checkbox-unchecked-border-color: var(--ag-inherited-checkbox-unchecked-border-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 40%));
	--ag-chrome-background-color: var(--ag-inherited-chrome-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 5%));
	--ag-column-panel-apply-button-color: var(--ag-inherited-column-panel-apply-button-color, var(--ag-foreground-color));
	--ag-filter-panel-apply-button-color: var(--ag-inherited-filter-panel-apply-button-color, var(--ag-foreground-color));
	--ag-find-active-match-color: var(--ag-inherited-find-active-match-color, var(--ag-background-color));
	--ag-find-match-color: var(--ag-inherited-find-match-color, var(--ag-background-color));
	--ag-formula-token-1-color: var(--ag-inherited-formula-token-1-color, #4da3e5);
	--ag-formula-token-2-color: var(--ag-inherited-formula-token-2-color, #f55864);
	--ag-formula-token-3-color: var(--ag-inherited-formula-token-3-color, #b688f2);
	--ag-formula-token-4-color: var(--ag-inherited-formula-token-4-color, #24bb4a);
	--ag-formula-token-5-color: var(--ag-inherited-formula-token-5-color, #e772ba);
	--ag-formula-token-6-color: var(--ag-inherited-formula-token-6-color, #f69b5f);
	--ag-formula-token-7-color: var(--ag-inherited-formula-token-7-color, #a3e6ff);
	--ag-menu-background-color: var(--ag-inherited-menu-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 10%));
	--ag-popup-shadow: var(--ag-inherited-popup-shadow, 0 0px 20px #000A);
	--ag-row-batch-edit-background-color: var(--ag-inherited-row-batch-edit-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 10%));
	--ag-row-batch-edit-text-color: var(--ag-inherited-row-batch-edit-text-color, var(--ag-cell-batch-edit-text-color));
	--ag-selected-row-background-color: var(--ag-inherited-selected-row-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 20%));
	--ag-toggle-button-off-background-color: var(--ag-inherited-toggle-button-off-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 40%));
}
:where([data-ag-theme-mode="dark-blue"]) & {
	--ag-advanced-filter-builder-column-pill-color: var(--ag-inherited-advanced-filter-builder-column-pill-color, #355f2d);
	--ag-advanced-filter-builder-join-pill-color: var(--ag-inherited-advanced-filter-builder-join-pill-color, #7a3a37);
	--ag-advanced-filter-builder-option-pill-color: var(--ag-inherited-advanced-filter-builder-option-pill-color, #5a3168);
	--ag-advanced-filter-builder-value-pill-color: var(--ag-inherited-advanced-filter-builder-value-pill-color, #374c86);
	--ag-background-color: var(--ag-inherited-background-color, #1f2836);
	--ag-browser-color-scheme: var(--ag-inherited-browser-color-scheme, dark);
	--ag-card-shadow: var(--ag-inherited-card-shadow, 0 1px 4px 1px #000A);
	--ag-cell-batch-edit-background-color: var(--ag-inherited-cell-batch-edit-background-color, rgba(220 181 139 / 16%));
	--ag-cell-batch-edit-text-color: var(--ag-inherited-cell-batch-edit-text-color, #f3d0b3);
	--ag-checkbox-unchecked-border-color: var(--ag-inherited-checkbox-unchecked-border-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 40%));
	--ag-chrome-background-color: var(--ag-inherited-chrome-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 5%));
	--ag-column-panel-apply-button-color: var(--ag-inherited-column-panel-apply-button-color, var(--ag-foreground-color));
	--ag-filter-panel-apply-button-color: var(--ag-inherited-filter-panel-apply-button-color, var(--ag-foreground-color));
	--ag-find-active-match-color: var(--ag-inherited-find-active-match-color, var(--ag-background-color));
	--ag-find-match-color: var(--ag-inherited-find-match-color, var(--ag-background-color));
	--ag-formula-token-1-color: var(--ag-inherited-formula-token-1-color, #4da3e5);
	--ag-formula-token-2-color: var(--ag-inherited-formula-token-2-color, #f55864);
	--ag-formula-token-3-color: var(--ag-inherited-formula-token-3-color, #b688f2);
	--ag-formula-token-4-color: var(--ag-inherited-formula-token-4-color, #24bb4a);
	--ag-formula-token-5-color: var(--ag-inherited-formula-token-5-color, #e772ba);
	--ag-formula-token-6-color: var(--ag-inherited-formula-token-6-color, #f69b5f);
	--ag-formula-token-7-color: var(--ag-inherited-formula-token-7-color, #a3e6ff);
	--ag-menu-background-color: var(--ag-inherited-menu-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 10%));
	--ag-popup-shadow: var(--ag-inherited-popup-shadow, 0 0px 20px #000A);
	--ag-row-batch-edit-background-color: var(--ag-inherited-row-batch-edit-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 10%));
	--ag-row-batch-edit-text-color: var(--ag-inherited-row-batch-edit-text-color, var(--ag-cell-batch-edit-text-color));
	--ag-selected-row-background-color: var(--ag-inherited-selected-row-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 20%));
	--ag-toggle-button-off-background-color: var(--ag-inherited-toggle-button-off-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 40%));
}
:where(.ag-theme-iconSet-5) {
.ag-icon-aggregation::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M18%207V4H6l6%208-6%208h12v-3%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-arrows::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpolyline%20points%3D%225%209%202%2012%205%2015%22%2F%3E%3Cpolyline%20points%3D%229%205%2012%202%2015%205%22%2F%3E%3Cpolyline%20points%3D%2215%2019%2012%2022%209%2019%22%2F%3E%3Cpolyline%20points%3D%2219%209%2022%2012%2019%2015%22%2F%3E%3Cline%20x1%3D%222%22%20x2%3D%2222%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%222%22%20y2%3D%2222%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-asc::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m5%2012%207-7%207%207%22%2F%3E%3Cpath%20d%3D%22M12%2019V5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-cancel::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m18%206-12%2012%22%2F%3E%3Cpath%20d%3D%22m6%206%2012%2012%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chart::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cline%20x1%3D%2218%22%20x2%3D%2218%22%20y1%3D%2220%22%20y2%3D%2210%22%2F%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%2220%22%20y2%3D%224%22%2F%3E%3Cline%20x1%3D%226%22%20x2%3D%226%22%20y1%3D%2220%22%20y2%3D%2214%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-color-picker::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m19%2011-8-8-8.6%208.6a2%202%200%200%200%200%202.8l5.2%205.2c.8.8%202%20.8%202.8%200L19%2011Z%22%2F%3E%3Cpath%20d%3D%22m5%202%205%205%22%2F%3E%3Cpath%20d%3D%22M2%2013h15%22%2F%3E%3Cpath%20d%3D%22M22%2020a2%202%200%201%201-4%200c0-1.6%201.7-2.4%202-4%20.3%201.6%202%202.4%202%204Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-columns::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M9%203H5a2%202%200%200%200-2%202v4m6-6h10a2%202%200%200%201%202%202v4M9%203v18m0%200h10a2%202%200%200%200%202-2V9M9%2021H5a2%202%200%200%201-2-2V9m0%200h18%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-contracted::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m9%2018%206-6-6-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-copy::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Crect%20width%3D%2214%22%20height%3D%2214%22%20x%3D%228%22%20y%3D%228%22%20rx%3D%222%22%20ry%3D%222%22%2F%3E%3Cpath%20d%3D%22M4%2016c-1.1%200-2-.9-2-2V4c0-1.1.9-2%202-2h10c1.1%200%202%20.9%202%202%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-cross::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M18%206%206%2018%22%2F%3E%3Cpath%20d%3D%22m6%206%2012%2012%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-csv::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M14.5%202H6a2%202%200%200%200-2%202v16a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2V7.5L14.5%202z%22%2F%3E%3Cpolyline%20points%3D%2214%202%2014%208%2020%208%22%2F%3E%3Cpath%20d%3D%22M8%2013h2%22%2F%3E%3Cpath%20d%3D%22M8%2017h2%22%2F%3E%3Cpath%20d%3D%22M14%2013h2%22%2F%3E%3Cpath%20d%3D%22M14%2017h2%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-cut::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%223%22%2F%3E%3Cpath%20d%3D%22M8.12%208.12%2012%2012%22%2F%3E%3Cpath%20d%3D%22M20%204%208.12%2015.88%22%2F%3E%3Ccircle%20cx%3D%226%22%20cy%3D%2218%22%20r%3D%223%22%2F%3E%3Cpath%20d%3D%22M14.8%2014.8%2020%2020%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-desc::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M12%205v14%22%2F%3E%3Cpath%20d%3D%22m19%2012-7%207-7-7%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-down::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M12%205v14%22%2F%3E%3Cpath%20d%3D%22m19%2012-7%207-7-7%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-excel::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M14.5%202H6a2%202%200%200%200-2%202v16a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2V7.5L14.5%202z%22%2F%3E%3Cpolyline%20points%3D%2214%202%2014%208%2020%208%22%2F%3E%3Cpath%20d%3D%22M8%2013h2%22%2F%3E%3Cpath%20d%3D%22M8%2017h2%22%2F%3E%3Cpath%20d%3D%22M14%2013h2%22%2F%3E%3Cpath%20d%3D%22M14%2017h2%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-expanded::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m15%2018-6-6%206-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-eye::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M2%2012s3-7%2010-7%2010%207%2010%207-3%207-10%207-10-7-10-7Z%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%223%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-eye-slash::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M9.88%209.88a3%203%200%201%200%204.24%204.24%22%2F%3E%3Cpath%20d%3D%22M10.73%205.08A10.43%2010.43%200%200%201%2012%205c7%200%2010%207%2010%207a13.16%2013.16%200%200%201-1.67%202.68%22%2F%3E%3Cpath%20d%3D%22M6.61%206.61A13.526%2013.526%200%200%200%202%2012s3%207%2010%207a9.74%209.74%200%200%200%205.39-1.61%22%2F%3E%3Cline%20x1%3D%222%22%20x2%3D%2222%22%20y1%3D%222%22%20y2%3D%2222%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-filter::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M3%206h18%22%2F%3E%3Cpath%20d%3D%22M7%2012h10%22%2F%3E%3Cpath%20d%3D%22M10%2018h4%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-first::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m17%2018-6-6%206-6%22%2F%3E%3Cpath%20d%3D%22M7%206v12%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-grip::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%225%22%20cy%3D%228%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%228%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2219%22%20cy%3D%228%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%225%22%20cy%3D%2216%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2216%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2219%22%20cy%3D%2216%22%20r%3D%220.5%22%2F%3E%3Cg%20stroke%3D%22none%22%20fill%3D%22currentColor%22%3E%3Ccircle%20cx%3D%225%22%20cy%3D%228%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%228%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2219%22%20cy%3D%228%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%225%22%20cy%3D%2216%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2216%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2219%22%20cy%3D%2216%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'); }
.ag-icon-group::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M16%2012H3%22%2F%3E%3Cpath%20d%3D%22M16%2018H3%22%2F%3E%3Cpath%20d%3D%22M10%206H3%22%2F%3E%3Cpath%20d%3D%22M21%2018V8a2%202%200%200%200-2-2h-5%22%2F%3E%3Cpath%20d%3D%22m16%208-2-2%202-2%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-last::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m7%2018%206-6-6-6%22%2F%3E%3Cpath%20d%3D%22M17%206v12%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-left::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m12%2019-7-7%207-7%22%2F%3E%3Cpath%20d%3D%22M19%2012H5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-linked::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M9%2017H7A5%205%200%200%201%207%207h2%22%2F%3E%3Cpath%20d%3D%22M15%207h2a5%205%200%201%201%200%2010h-2%22%2F%3E%3Cline%20x1%3D%228%22%20x2%3D%2216%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-loading::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%222%22%20y2%3D%226%22%2F%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%2218%22%20y2%3D%2222%22%2F%3E%3Cline%20x1%3D%224.93%22%20x2%3D%227.76%22%20y1%3D%224.93%22%20y2%3D%227.76%22%2F%3E%3Cline%20x1%3D%2216.24%22%20x2%3D%2219.07%22%20y1%3D%2216.24%22%20y2%3D%2219.07%22%2F%3E%3Cline%20x1%3D%222%22%20x2%3D%226%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%2218%22%20x2%3D%2222%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%224.93%22%20x2%3D%227.76%22%20y1%3D%2219.07%22%20y2%3D%2216.24%22%2F%3E%3Cline%20x1%3D%2216.24%22%20x2%3D%2219.07%22%20y1%3D%227.76%22%20y2%3D%224.93%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-maximize::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpolyline%20points%3D%2215%203%2021%203%2021%209%22%2F%3E%3Cpolyline%20points%3D%229%2021%203%2021%203%2015%22%2F%3E%3Cline%20x1%3D%2221%22%20x2%3D%2214%22%20y1%3D%223%22%20y2%3D%2210%22%2F%3E%3Cline%20x1%3D%223%22%20x2%3D%2210%22%20y1%3D%2221%22%20y2%3D%2214%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-menu::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cline%20x1%3D%224%22%20x2%3D%2220%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%224%22%20x2%3D%2220%22%20y1%3D%226%22%20y2%3D%226%22%2F%3E%3Cline%20x1%3D%224%22%20x2%3D%2220%22%20y1%3D%2218%22%20y2%3D%2218%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-menu-alt::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%225%22%20r%3D%220.75%22%20fill%3D%22%23D9D9D9%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%220.75%22%20fill%3D%22%23D9D9D9%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2219%22%20r%3D%220.75%22%20fill%3D%22%23D9D9D9%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-minimize::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpolyline%20points%3D%224%2014%2010%2014%2010%2020%22%2F%3E%3Cpolyline%20points%3D%2220%2010%2014%2010%2014%204%22%2F%3E%3Cline%20x1%3D%2214%22%20x2%3D%2221%22%20y1%3D%2210%22%20y2%3D%223%22%2F%3E%3Cline%20x1%3D%223%22%20x2%3D%2210%22%20y1%3D%2221%22%20y2%3D%2214%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-minus::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M8%2012h8%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-next::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m9%2018%206-6-6-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-none::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m7%2015%205%205%205-5%22%2F%3E%3Cpath%20d%3D%22m7%209%205-5%205%205%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-not-allowed::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22m4.9%204.9%2014.2%2014.2%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-paste::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M15%202H9a1%201%200%200%200-1%201v2c0%20.6.4%201%201%201h6c.6%200%201-.4%201-1V3c0-.6-.4-1-1-1Z%22%2F%3E%3Cpath%20d%3D%22M8%204H6a2%202%200%200%200-2%202v14a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2M16%204h2a2%202%200%200%201%202%202v2M11%2014h10%22%2F%3E%3Cpath%20d%3D%22m17%2010%204%204-4%204%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-pin::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%2217%22%20y2%3D%2222%22%2F%3E%3Cpath%20d%3D%22M5%2017h14v-1.76a2%202%200%200%200-1.11-1.79l-1.78-.9A2%202%200%200%201%2015%2010.76V6h1a2%202%200%200%200%200-4H8a2%202%200%200%200%200%204h1v4.76a2%202%200%200%201-1.11%201.79l-1.78.9A2%202%200%200%200%205%2015.24Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-pivot::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M15%203v18%22%2F%3E%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%223%22%20rx%3D%222%22%2F%3E%3Cpath%20d%3D%22M21%209H3%22%2F%3E%3Cpath%20d%3D%22M21%2015H3%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-plus::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M8%2012h8%22%2F%3E%3Cpath%20d%3D%22M12%208v8%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-previous::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m15%2018-6-6%206-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-right::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M5%2012h14%22%2F%3E%3Cpath%20d%3D%22m12%205%207%207-7%207%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-save::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M12%2017V3%22%2F%3E%3Cpath%20d%3D%22m6%2011%206%206%206-6%22%2F%3E%3Cpath%20d%3D%22M19%2021H5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-search::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%2F%3E%3Cpath%20d%3D%22m21%2021-4.3-4.3%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-settings::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M20%207h-9%22%2F%3E%3Cpath%20d%3D%22M14%2017H5%22%2F%3E%3Ccircle%20cx%3D%2217%22%20cy%3D%2217%22%20r%3D%223%22%2F%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%223%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-small-left::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m15%2018-6-6%206-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-small-right::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m9%2018%206-6-6-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-tick::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M20%206%209%2017l-5-5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-tree-closed::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m9%2018%206-6-6-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-tree-indeterminate::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M5%2012h14%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-tree-open::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-unlinked::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M9%2017H7A5%205%200%200%201%207%207%22%2F%3E%3Cpath%20d%3D%22M15%207h2a5%205%200%200%201%204%208%22%2F%3E%3Cline%20x1%3D%228%22%20x2%3D%2212%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%222%22%20x2%3D%2222%22%20y1%3D%222%22%20y2%3D%2222%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-up::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m5%2012%207-7%207%207%22%2F%3E%3Cpath%20d%3D%22M12%2019V5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-aasc::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M13.2012%208.07928C13.6346%208.0793%2014.0128%208.15365%2014.3359%208.30193C14.6609%208.45018%2014.9141%208.65595%2015.0947%208.9201C15.2754%209.18439%2015.3683%209.49109%2015.374%209.83904H14.1904C14.1676%209.60898%2014.0695%209.4303%2013.8965%209.30291C13.7235%209.1756%2013.4889%209.1115%2013.1924%209.1115C12.9909%209.1115%2012.8204%209.1404%2012.6816%209.19744C12.543%209.25255%2012.4364%209.32917%2012.3623%209.42791C12.2901%209.52678%2012.2539%209.63933%2012.2539%209.76482C12.2501%209.8692%2012.272%209.9604%2012.3193%2010.0383C12.3688%2010.1162%2012.4369%2010.1843%2012.5225%2010.2414C12.6079%2010.2964%2012.7064%2010.3451%2012.8184%2010.3869C12.9304%2010.4268%2013.0505%2010.4609%2013.1777%2010.4894L13.7031%2010.6144C13.9578%2010.6715%2014.1914%2010.7479%2014.4043%2010.8429C14.6173%2010.938%2014.8021%2011.0547%2014.958%2011.1935C15.1138%2011.3323%2015.2348%2011.4957%2015.3203%2011.6838C15.4077%2011.8719%2015.4522%2012.088%2015.4541%2012.3312C15.4522%2012.6885%2015.3611%2012.9986%2015.1807%2013.2609C15.0019%2013.5214%2014.7427%2013.7248%2014.4043%2013.8693C14.0678%2014.0118%2013.6617%2014.0832%2013.1865%2014.0832C12.7153%2014.0832%2012.3048%2014.0107%2011.9551%2013.8664C11.6071%2013.7219%2011.3345%2013.5071%2011.1387%2013.2238C10.9449%2012.9387%2010.8435%2012.5862%2010.834%2012.1662H12.0283C12.0416%2012.362%2012.0984%2012.5252%2012.1973%2012.6564C12.298%2012.7857%2012.4323%2012.8838%2012.5996%2012.9504C12.7688%2013.0149%2012.96%2013.047%2013.1729%2013.047C13.3817%2013.047%2013.563%2013.0169%2013.7168%2012.9562C13.8727%2012.8954%2013.9935%2012.8106%2014.0791%2012.7023C14.1647%2012.5939%2014.208%2012.469%2014.208%2012.3283C14.2079%2012.1974%2014.1686%2012.0875%2014.0908%2011.9982C14.0148%2011.9089%2013.9022%2011.8324%2013.7539%2011.7697C13.6076%2011.707%2013.4276%2011.6501%2013.2148%2011.5988L12.5791%2011.4387C12.0869%2011.3189%2011.6982%2011.1318%2011.4131%2010.8771C11.128%2010.6224%2010.9855%2010.2793%2010.9873%209.84783C10.9854%209.49418%2011.0804%209.18439%2011.2705%208.9201C11.4625%208.65603%2011.7261%208.45015%2012.0605%208.30193C12.3951%208.15369%2012.7754%208.07928%2013.2012%208.07928Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.8125%2014.0002H4.48926L4.05664%2012.6681H1.94824L1.51465%2014.0002H0.19043L2.20703%208.15935H3.79883L5.8125%2014.0002ZM2.26172%2011.7043H3.74316L3.02539%209.49334H2.98047L2.26172%2011.7043Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.45215%208.15935C8.88165%208.15935%209.24031%208.22251%209.52734%208.34978C9.81445%208.47717%2010.0303%208.65477%2010.1748%208.88103C10.3192%209.10536%2010.3916%209.36368%2010.3916%209.65642C10.3916%209.88452%2010.3461%2010.085%2010.2549%2010.258C10.1637%2010.4289%2010.0384%2010.5696%209.87891%2010.6799C9.72117%2010.7882%209.54024%2010.8657%209.33691%2010.9113V10.9679C9.55917%2010.9775%209.76716%2011.0406%209.96094%2011.1564C10.1568%2011.2724%2010.3158%2011.4356%2010.4375%2011.6447C10.5591%2011.8519%2010.6201%2012.099%2010.6201%2012.3859C10.6201%2012.6958%2010.5427%2012.9727%2010.3887%2013.216C10.2366%2013.4573%2010.0113%2013.6486%209.71289%2013.7892C9.41443%2013.9299%209.04655%2014.0002%208.60938%2014.0002H6.11426V8.15935H8.45215ZM7.34863%2012.9904H8.35547C8.69943%2012.9904%208.95057%2012.9252%209.1084%2012.7941C9.26621%2012.661%209.34473%2012.4834%209.34473%2012.2629C9.34468%2012.1014%209.30643%2011.9587%209.22852%2011.8351C9.15056%2011.7116%209.03903%2011.6145%208.89453%2011.5441C8.75195%2011.4738%208.58148%2011.4387%208.38379%2011.4387H7.34863V12.9904ZM7.34863%2010.6037H8.26465C8.43369%2010.6036%208.58376%2010.5737%208.71484%2010.5148C8.84793%2010.454%208.95227%2010.3683%209.02832%2010.258C9.10628%2010.1477%209.14551%2010.0155%209.14551%209.8615C9.14546%209.65055%209.07008%209.48001%208.91992%209.35076C8.77165%209.22169%208.56064%209.15741%208.28711%209.1574H7.34863V10.6037Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20d%3D%22M7.16602%200.377127C7.44584%200.189493%207.82551%200.20905%208.08496%200.442557L11.418%203.44256C11.7257%203.71966%2011.7507%204.19428%2011.4736%204.50213C11.1966%204.80961%2010.7228%204.83441%2010.415%204.55779L7.60938%202.03338L5.11328%204.53045C4.82042%204.82326%204.34562%204.82322%204.05273%204.53045C3.75986%204.23757%203.75989%203.7628%204.05273%203.4699L7.05273%200.4699L7.16602%200.377127Z%22%20fill%3D%22black%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-adesc::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.3867%2011.4697C10.6796%2011.1771%2011.1544%2011.1769%2011.4473%2011.4697C11.7399%2011.7626%2011.7399%2012.2374%2011.4473%2012.5303L8.44727%2015.5303L8.33398%2015.623C8.05425%2015.8106%207.67449%2015.7909%207.41504%2015.5576L4.08203%2012.5576C3.77415%2012.2805%203.74927%2011.8059%204.02637%2011.498C4.30342%2011.1907%204.77722%2011.1657%205.08496%2011.4424L7.89062%2013.9668L10.3867%2011.4697Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20d%3D%22M13.2012%203.0791C13.6346%203.07912%2014.0128%203.1535%2014.3359%203.30176C14.6611%203.45006%2014.9141%203.65661%2015.0947%203.9209C15.2752%204.18513%2015.3683%204.49104%2015.374%204.83887H14.1904C14.1676%204.60882%2014.0695%204.43012%2013.8965%204.30273C13.7235%204.17546%2013.4889%204.11133%2013.1924%204.11133C12.9909%204.11133%2012.8204%204.14023%2012.6816%204.19727C12.5431%204.25236%2012.4364%204.32902%2012.3623%204.42773C12.2901%204.52659%2012.2539%204.63919%2012.2539%204.76465C12.2501%204.86901%2012.272%204.96023%2012.3193%205.03809C12.3688%205.11604%2012.4369%205.18417%2012.5225%205.24121C12.6079%205.29623%2012.7064%205.34496%2012.8184%205.38672C12.9304%205.42661%2013.0505%205.46075%2013.1777%205.48926L13.7031%205.61426C13.9578%205.67128%2014.1914%205.74776%2014.4043%205.84277C14.6172%205.93784%2014.8021%206.05457%2014.958%206.19336C15.1139%206.33216%2015.2348%206.49633%2015.3203%206.68457C15.4076%206.8727%2015.4522%207.08885%2015.4541%207.33203C15.4521%207.68929%2015.3612%207.99944%2015.1807%208.26172C15.0019%208.52216%2014.7427%208.72465%2014.4043%208.86914C14.0678%209.01165%2013.6617%209.08301%2013.1865%209.08301C12.7153%209.08299%2012.3048%209.01057%2011.9551%208.86621C11.6072%208.72173%2011.3345%208.50786%2011.1387%208.22461C10.9447%207.9394%2010.8435%207.58622%2010.834%207.16602H12.0283C12.0416%207.36176%2012.0985%207.52509%2012.1973%207.65625C12.298%207.78554%2012.4323%207.88365%2012.5996%207.9502C12.7688%208.01477%2012.96%208.04785%2013.1729%208.04785C13.3817%208.04781%2013.5629%208.01678%2013.7168%207.95605C13.8727%207.89522%2013.9935%207.81051%2014.0791%207.70215C14.1646%207.59387%2014.2079%207.46965%2014.208%207.3291C14.208%207.19796%2014.1687%207.08739%2014.0908%206.99805C14.0148%206.90868%2013.9022%206.83228%2013.7539%206.76953C13.6076%206.70685%2013.4276%206.64993%2013.2148%206.59863L12.5791%206.43848C12.0868%206.31871%2011.6982%206.13163%2011.4131%205.87695C11.1279%205.62221%2010.9855%205.27916%2010.9873%204.84766C10.9854%204.49404%2011.0804%204.18517%2011.2705%203.9209C11.4625%203.65661%2011.7259%203.45006%2012.0605%203.30176C12.3951%203.15353%2012.7754%203.0791%2013.2012%203.0791Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.8125%209H4.48926L4.05664%207.66797H1.94824L1.51465%209H0.19043L2.20703%203.15918H3.79883L5.8125%209ZM2.26172%206.7041H3.74316L3.02539%204.49414H2.98047L2.26172%206.7041Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.45215%203.15918C8.88181%203.15918%209.24025%203.22322%209.52734%203.35059C9.81445%203.47798%2010.0303%203.6546%2010.1748%203.88086C10.3193%204.10518%2010.3916%204.36351%2010.3916%204.65625C10.3916%204.88432%2010.3461%205.08484%2010.2549%205.25781C10.1636%205.4289%2010.0386%205.57039%209.87891%205.68066C9.72118%205.78898%209.54022%205.86549%209.33691%205.91113V5.96875C9.55913%205.9783%209.76719%206.04044%209.96094%206.15625C10.1568%206.27223%2010.3158%206.43538%2010.4375%206.64453C10.5591%206.85173%2010.6201%207.09875%2010.6201%207.38574C10.6201%207.69567%2010.5427%207.97245%2010.3887%208.21582C10.2366%208.45719%2010.0113%208.64841%209.71289%208.78906C9.41442%208.9297%209.04658%208.99999%208.60938%209H6.11426V3.15918H8.45215ZM7.34863%207.99023H8.35547C8.69948%207.99023%208.95057%207.92504%209.1084%207.79395C9.26621%207.66085%209.34473%207.48325%209.34473%207.2627C9.34466%207.10125%209.3064%206.95844%209.22852%206.83496C9.15056%206.71143%209.03899%206.61427%208.89453%206.54395C8.75196%206.47365%208.58145%206.43848%208.38379%206.43848H7.34863V7.99023ZM7.34863%205.60352H8.26465C8.43369%205.60347%208.58376%205.57354%208.71484%205.51465C8.84791%205.45381%208.95228%205.36807%209.02832%205.25781C9.10623%205.14755%209.14551%205.01529%209.14551%204.86133C9.14542%204.65046%209.07002%204.48078%208.91992%204.35156C8.77163%204.22228%208.56087%204.15724%208.28711%204.15723H7.34863V5.60352Z%22%20fill%3D%22black%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chevron-down::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%206L8%2010L4%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chevron-left::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2012L6%208L10%204%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chevron-right::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%2012L10%208L6%204%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chevron-up::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M4%2010L8%206L12%2010%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-column-arrow::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%2026C0%2028.2092%201.79086%2030%204%2030H14C16.2091%2030%2018%2028.2092%2018%2026V15H25.8786L24.4394%2016.4393C23.8536%2017.0251%2023.8536%2017.9749%2024.4394%2018.5607C25.0252%2019.1464%2025.9748%2019.1464%2026.5606%2018.5607L30.5606%2014.5607C31.1464%2013.9749%2031.1464%2013.0251%2030.5606%2012.4393L26.5606%208.43934C25.9748%207.85356%2025.0252%207.85356%2024.4394%208.43934C23.8536%209.02512%2023.8536%209.97488%2024.4394%2010.5607L25.8786%2012H18V6C18%203.79086%2016.2091%202%2014%202H4C1.79086%202%200%203.79086%200%206V26ZM14%205H10.5V12H15V6C15%205.44772%2014.5523%205%2014%205ZM4%205H7.5V12H3V6C3%205.44772%203.44772%205%204%205ZM10.5%2015H15V26C15%2026.5522%2014.5523%2027%2014%2027H10.5V15ZM4%2027H7.5V15H3V26C3%2026.5522%203.44772%2027%204%2027Z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-edit::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3.5%2010.6262V12.5012H5.375L10.905%206.97122L9.03%205.09622L3.5%2010.6262ZM12.355%205.52122C12.4014%205.47497%2012.4381%205.42002%2012.4632%205.35953C12.4883%205.29905%2012.5012%205.23421%2012.5012%205.16872C12.5012%205.10324%2012.4883%205.0384%2012.4632%204.97791C12.4381%204.91742%2012.4014%204.86248%2012.355%204.81622L11.185%203.64622C11.1387%203.59987%2011.0838%203.5631%2011.0233%203.53801C10.9628%203.51291%2010.898%203.5%2010.8325%203.5C10.767%203.5%2010.7022%203.51291%2010.6417%203.53801C10.5812%203.5631%2010.5263%203.59987%2010.48%203.64622L9.565%204.56122L11.44%206.43622L12.355%205.52122Z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-filter-add::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5.12126%207.75L10.8517%207.75%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M6.65934%2011.748L9.32778%2011.748%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.2943%201.04872V6.19184M14.9886%203.74341H9.68478%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M8.25488%203C8.04799%203.18323%207.91706%203.45099%207.91699%203.74902C7.91713%204.04868%208.04988%204.31681%208.25879%204.5H2C1.58579%204.5%201.25%204.16421%201.25%203.75C1.25%203.33579%201.58579%203%202%203H8.25488Z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-pinned-bottom::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20class%3D%22ag-icon%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M3.47%2012.28A.75.75%200%200%201%204%2011h8a.75.75%200%200%201%200%201.5H4a.75.75%200%200%201-.53-.22ZM12.731%205.256a.75.75%200%200%201-.2.524l-4%204a.75.75%200%200%201-1.06%200l-4-4a.75.75%200%201%201%201.06-1.06l2.72%202.72V2a.75.75%200%200%201%201.5%200v5.44l2.72-2.72a.75.75%200%200%201%201.26.536Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-pinned-top::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M12.53%203.72A.75.75%200%200%201%2012%205H4a.75.75%200%200%201%200-1.5h8a.75.75%200%200%201%20.53.22ZM3.269%2010.744a.75.75%200%200%201%20.2-.524l4-4a.75.75%200%200%201%201.06%200l4%204a.75.75%200%201%201-1.06%201.06L8.75%208.56V14a.75.75%200%200%201-1.5%200V8.56l-2.72%202.72a.75.75%200%200%201-1.26-.536Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-small-down::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22black%22%20stroke%3D%22none%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M7.334%2010.667%2016%2021.334l8.667-10.667H7.334Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-small-up::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22black%22%20stroke%3D%22none%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M7.334%2021.333%2016%2010.666l8.667%2010.667H7.334Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-un-pin::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20class%3D%22ag-icon%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M8%2011a.75.75%200%200%200-.75.75v3.333a.75.75%200%201%200%201.5%200V11.75A.75.75%200%200%200%208%2011Z%22%2F%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M13.11%201.436a.75.75%200%200%200-1.22-.872l-10%2014a.75.75%200%201%200%201.22.872L5.207%2012.5h7.376a.75.75%200%200%200%20.75-.75v-1.174a2.08%202.08%200%200%200-1.153-1.863l-1.185-.599-.005-.002a.58.58%200%200%201-.323-.522V5.165a2.083%202.083%200%200%200%201.854-2.904l.589-.825Zm-3.943%205.52v.634a2.08%202.08%200%200%200%201.153%201.863l1.185.6.005.002a.58.58%200%200%201%20.323.522V11H6.28l2.887-4.044ZM9.277%201H5.25a2.084%202.084%200%200%200-.083%204.165v1.676l1.5-2.132v-.292a.75.75%200%200%200-.75-.75H5.25a.584.584%200%200%201%200-1.167h2.972L9.277%201Z%22%2F%3E%3C%2Fsvg%3E'); }
.esa-icon{--_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));display:inline-flex;align-items:center;justify-content:center;width:var(--_icon-size);height:var(--_icon-size);line-height:1;color:inherit}
.esa-icon--xs{--_icon-size: var(--icon-size-xs, 14px)}
.esa-icon svg{display:block;width:var(--_icon-size);height:var(--_icon-size)}
.esa-icon--sm{--_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px))}
.esa-icon--md{--_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px))}
.esa-filter-container{display:flex;flex-wrap:wrap;align-items:center;gap:var(--_filter-container-row-gap, .5rem) var(--_filter-container-gap, .75rem)}
.esa-filter-clear-button{--_clear-text: var(--filter-clear-color, var(--color-primary-strong, #3a7c59));--_clear-text-hover: var(--filter-clear-color-hover, var(--color-primary-strong, #3a7c59));--_clear-font-size: var(--type-size-150, .875rem);--_clear-icon-size: 18px;display:inline-flex;align-items:center;gap:var(--spacing-100, .25rem);padding:var(--spacing-100, .25rem) var(--spacing-200, .5rem);border:none;border-radius:var(--radius-100, .25rem);background:transparent;color:var(--_clear-text);font-family:var(--font-sans, inherit);font-size:var(--_clear-font-size);font-weight:var(--font-weight-medium, 450);cursor:pointer;text-decoration:underline;text-underline-offset:2px;transition:color var(--transition-fast, .15s ease),background var(--transition-fast, .15s ease)}
.esa-filter-clear-button__icon{width:var(--_clear-icon-size);height:var(--_clear-icon-size);flex:none}
.esa-filter-clear-button__label{white-space:nowrap}
.bcn-status-select{display:flex;flex-direction:column;gap:var(--spacing-100)}
.bcn-status-select__label{font-size:.875rem;font-weight:var(--font-weight-medium);color:var(--form-label-color)}
.bcn-status-select__dd{position:relative}
.bcn-status-select__trigger{display:flex;align-items:center;gap:var(--spacing-200);width:100%;height:40px;padding:0 var(--spacing-300);font-size:.875rem;font-weight:var(--font-weight-medium);color:var(--color-text-primary);background:var(--color-surface);border:1px solid var(--form-border-color);border-radius:var(--form-radius-md);cursor:pointer;transition:border-color .15s ease,box-shadow .15s ease}
.bcn-status-select__dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.bcn-status-select__value{flex:1;text-align:left}
.bcn-status-select__chev{color:var(--color-text-tertiary);flex-shrink:0;transition:transform .15s ease}
.bcn-status-select__menu{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:20;margin:0;padding:var(--spacing-100);list-style:none;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--form-radius-md);box-shadow:var(--shadow-300)}
.bcn-status-select__menu[hidden]{display:none}
.bcn-status-select[data-value=not-started] .bcn-status-select__dot--trigger{background:var(--bcn-status-not-started)}
.esa-icon-link{--_il-font: var(--icon-link-font-size-md, 1rem);display:inline-flex;align-items:center;gap:var(--icon-link-gap, var(--spacing-150, 6px));padding:0;margin:0;border:0;background:none;color:inherit;font-family:var(--font-sans, system-ui, sans-serif);font-size:var(--_il-font);font-weight:var(--font-weight-medium, 500);line-height:1;text-decoration:none;cursor:pointer;white-space:nowrap}
.esa-icon-link--sm{--_il-font: var(--icon-link-font-size-sm, .875rem)}
.esa-icon-link--medium{font-weight:var(--font-weight-medium, 500)}
.esa-icon-link__label{display:inline-block}
:where(.ag-theme-checkboxStyle-4) {
.ag-checkbox-input-wrapper,.ag-radio-button-input-wrapper{background-color:var(--ag-checkbox-unchecked-background-color);border:solid var(--ag-checkbox-border-width) var(--ag-checkbox-unchecked-border-color);flex:none;height:var(--ag-icon-size);position:relative;width:var(--ag-icon-size);&:where(.ag-checked){background-color:var(--ag-checkbox-checked-background-color);border-color:var(--ag-checkbox-checked-border-color)}
&:where(.ag-checked):after{background-color:var(--ag-checkbox-checked-shape-color)}
&:where(.ag-disabled){filter:grayscale();opacity:.5}
.ag-checkbox-input,.ag-radio-button-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:block;height:var(--ag-icon-size);margin:0;opacity:0;width:var(--ag-icon-size)}
.ag-checkbox-input-wrapper:after,.ag-radio-button-input-wrapper:after{content:"";display:block;inset:0;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;pointer-events:none;position:absolute}
.ag-checkbox-input-wrapper:where(:focus-within,:active),.ag-radio-button-input-wrapper:where(:focus-within,:active){box-shadow:var(--ag-focus-shadow)}
.ag-checkbox-input-wrapper{border-radius:var(--ag-checkbox-border-radius);&:where(.ag-checked):after{-webkit-mask-image:var(--ag-checkbox-checked-shape-image);mask-image:var(--ag-checkbox-checked-shape-image)}
&:where(.ag-indeterminate){background-color:var(--ag-checkbox-indeterminate-background-color);border-color:var(--ag-checkbox-indeterminate-border-color)}
&:where(.ag-indeterminate):after{background-color:var(--ag-checkbox-indeterminate-shape-color);-webkit-mask-image:var(--ag-checkbox-indeterminate-shape-image);mask-image:var(--ag-checkbox-indeterminate-shape-image)}
.ag-cell-editing-error .ag-checkbox-input-wrapper:focus-within{box-shadow:var(--ag-focus-error-shadow)}
.ag-radio-button-input-wrapper{border-radius:100%;&:where(.ag-checked):after{-webkit-mask-image:var(--ag-radio-checked-shape-image);mask-image:var(--ag-radio-checked-shape-image)}
:host {
      display: inline-block;

      --_filter-height: 40px;
      --_filter-padding-x: var(--spacing-400, 1rem);
      --_filter-font-size: var(--type-size-200, 0.9375rem);
      --_filter-radius: var(--radius-200, 0.5rem);
      --_filter-bg: var(--color-surface, #fff);
      --_filter-bg-active: var(--color-primary-subtle, #f3f8fb);
      --_filter-text: var(--color-text-primary, #171717);
      --_filter-text-active: var(--color-primary, #43608a);
      --_filter-border: var(--color-border, #e5e5e5);
      --_filter-border-active: var(--color-primary, #43608a);
    }
:host([size='sm']) {
      --_filter-height: 32px;
      --_filter-padding-x: var(--spacing-300, 0.75rem);
      --_filter-font-size: var(--type-size-150, 0.875rem);
      --_filter-radius: var(--radius-100, 0.25rem);
    }
.esa-filter-dropdown {
      position: relative;
      display: inline-flex;
    }
.esa-filter-dropdown__trigger {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-100, 0.25rem);
      height: var(--_filter-height);
      padding-inline: var(--_filter-padding-x);
      border: 1px solid var(--_filter-border);
      border-radius: var(--_filter-radius);
      background: var(--_filter-bg);
      color: var(--_filter-text);
      font-family: var(--font-sans, inherit);
      font-size: var(--_filter-font-size);
      font-weight: var(--font-weight-medium, 450);
      line-height: 1;
      cursor: pointer;
      white-space: nowrap;
      transition:
        background var(--transition-fast, 150ms ease),
        border-color var(--transition-fast, 150ms ease),
        color var(--transition-fast, 150ms ease);
      -webkit-appearance: none;
      appearance: none;
    }
.esa-filter-dropdown__label {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }
.esa-filter-dropdown__arrow {
      display: inline-flex;
      width: 20px;
      height: 20px;
      transition: transform var(--transition-fast, 150ms ease);
    }
.esa-filter-dropdown__arrow svg { width: 20px; height: 20px; }
.modern-layout{display:flex;flex-direction:column;height:100vh}
.topbar{position:fixed;top:0;left:0;right:0;height:52px;background:var(--bcn-gray-100);border-bottom:1px solid var(--bcn-gray-300);z-index:1100;display:grid;grid-template-columns:auto 1fr auto;align-items:center;padding:0 var(--spacing-200)}
.topbar{padding:0 var(--spacing-400)}
.topbar__left{display:flex;align-items:center;gap:var(--spacing-200)}
.sidebar-toggle{display:flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:none;border-radius:var(--spacing-050);background:transparent;color:var(--bcn-gray-600);cursor:pointer;transition:background .15s ease,color .15s ease}
.sidebar-toggle__icon{transition:transform .15s ease}
.tenant-trigger{display:flex;align-items:center;gap:var(--spacing-100);padding:var(--spacing-100) var(--spacing-200);background:transparent;border:none;border-radius:var(--spacing-050);font-size:.875rem;font-weight:600;color:var(--bcn-gray-900);cursor:pointer;transition:background .15s ease}
.topbar__center{display:flex;align-items:center;justify-content:center;min-width:0;gap:var(--spacing-400);padding:0 var(--spacing-400)}
.bcn-search-trigger{display:flex;align-items:center;gap:var(--spacing-200);width:100%;max-width:520px;margin:0 auto;padding:var(--spacing-150) var(--spacing-300);background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-200);cursor:text;transition:border-color .15s ease,background .15s ease}
.bcn-search-trigger .esa-icon{flex:none;color:var(--color-text-tertiary)}
.bcn-search-trigger__placeholder{flex:1;min-width:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--type-size-200);color:var(--color-text-tertiary)}
.bcn-search-trigger__kbd{display:inline-flex;gap:2px;flex:none}
.bcn-search-trigger__kbd kbd{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;font-family:inherit;font-size:11px;font-weight:var(--font-weight-medium);color:var(--color-text-tertiary);background:var(--color-surface-sunken);border:1px solid var(--color-border);border-radius:4px}
.topbar__right{display:flex;align-items:center;justify-content:flex-end;gap:var(--spacing-100)}
.qa-warning{display:inline-flex;align-items:center;gap:var(--spacing-100);padding:var(--spacing-050) var(--spacing-200);font-size:.75rem;font-weight:600;background:var(--color-accent);color:var(--color-surface);border-radius:var(--spacing-100);white-space:nowrap}
.icon-button{display:flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:none;border-radius:var(--spacing-050);background:transparent;color:var(--color-text-secondary);text-decoration:none;cursor:pointer;transition:background .15s ease,color .15s ease}
.topbar__right .esa-icon-button{color:var(--color-text-secondary)}
.user-menu{position:relative}
.user-menu-trigger{display:flex;align-items:center;justify-content:center;width:44px;height:44px;padding:0;border:none;border-radius:9999px;background:transparent;cursor:pointer;transition:transform .15s ease}
.user-menu-trigger__avatar{width:32px;height:32px;border-radius:9999px;object-fit:cover;border:2px solid var(--bcn-gray-200);transition:border-color .15s ease}
.user-menu-trigger__avatar--fallback{display:flex;align-items:center;justify-content:center;background:var(--bcn-gray-200);color:var(--bcn-gray-500)}
.user-panel{position:absolute;top:calc(100% + var(--spacing-200));right:0;min-width:280px;background:var(--color-surface);border-radius:var(--spacing-200);border:1px solid var(--bcn-gray-200);box-shadow:0 4px 24px #0000001f;z-index:1200}
.user-panel[hidden]{display:none}
.modern-layout__body{display:flex;flex:1;overflow:hidden;padding-top:52px}
.side-nav{width:280px;height:100%;display:flex;flex-direction:column;background-color:var(--bcn-gray-50);font-size:.875rem;overflow:visible;transition:width .2s ease-in-out;border-right:1px solid var(--bcn-gray-200);flex-shrink:0}
.sidebar-header{flex-shrink:0;padding:var(--spacing-300) var(--spacing-400);transition:padding .2s ease-in-out}
.site-logo{display:inline-flex;align-items:center;padding:var(--spacing-200);border-radius:var(--spacing-050);text-decoration:none;transition:background .15s ease}
.site-logo__img{width:var(--spacing-700);height:3.75rem;object-fit:contain;object-position:left center;transition:all .2s ease-in-out}
.project-switcher-container{flex-shrink:0;padding:0 var(--spacing-400) var(--spacing-300);transition:padding .2s ease-in-out;min-width:0}
.project-switcher__trigger{display:flex;align-items:center;gap:var(--spacing-200);width:100%;min-width:0;box-sizing:border-box;padding:var(--spacing-200) var(--spacing-300);background:var(--color-surface);border:1px solid var(--bcn-gray-200);border-radius:var(--spacing-200);cursor:pointer;transition:all .15s ease;color:var(--bcn-gray-950);font-size:.875rem;font-weight:500}
.project-switcher__trigger>.esa-icon:first-child{flex-shrink:0;color:var(--bcn-gray-500)}
.project-switcher__name{flex:1;min-width:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.main-nav{flex:1;overflow-y:auto;overflow-x:visible;padding:0 var(--spacing-400);display:flex;flex-direction:column;gap:var(--spacing-050);transition:padding .2s ease-in-out;scrollbar-width:none;-ms-overflow-style:none}
.nav-section{display:flex;flex-direction:column;position:relative}
.nav-section__header{display:flex;align-items:center;gap:var(--spacing-300);padding:var(--spacing-250) var(--spacing-200);color:var(--bcn-gray-950);font-size:.9375rem;font-weight:550;border:none;background:transparent;border-radius:var(--spacing-050);transition:all .15s ease;white-space:nowrap;width:100%;text-align:left;cursor:pointer;text-decoration:none}
.nav-section__header>.esa-icon:first-child{flex-shrink:0;color:var(--bcn-gray-950);transition:color .15s ease}
.nav-section__title{flex:1;overflow:hidden;transition:opacity .2s ease-in-out}
.nav-section__header>.esa-icon:last-child{color:var(--bcn-gray-400);transition:transform .15s ease,opacity .2s ease-in-out;flex-shrink:0}
.nav-section--collapsed .nav-section__header>.esa-icon:last-child{transform:rotate(-90deg)}
.nav-section__items{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;overflow:hidden;max-height:500px;opacity:1;transition:max-height .2s ease-in-out,opacity .2s ease-in-out}
.nav-section--collapsed .nav-section__items{max-height:0;opacity:0}
.nav-item{padding:0 0 0 2.5rem}
.nav-sublink{display:block;padding:var(--spacing-200);color:var(--bcn-gray-950);text-decoration:none;border-radius:var(--spacing-050);font-size:.8125rem;transition:all .15s ease;line-height:1.2}
.nav-section__header:hover .esa-icon,.nav-section--active .nav-section__header,.nav-section--active .nav-section__header .esa-icon{color:var(--color-primary)}
.nav-sublink.active{background:#0000000a;color:var(--color-primary)}
.nav-divider{flex-shrink:0;height:1px;margin:var(--spacing-200) 0;border:0;background:var(--bcn-gray-200)}
.modern-layout__content{flex:1;overflow-y:auto;min-width:0}
.bcn-omni{position:fixed;inset:0;z-index:1300;display:flex;align-items:center;justify-content:center;padding:var(--spacing-500)}
.bcn-omni[hidden]{display:none}
:where(.ag-theme-buttonStyle-1) {
:where(.ag-button){background:none;border:none;color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0;text-indent:inherit;text-shadow:inherit;text-transform:inherit;word-spacing:inherit;&:disabled{cursor:default}
&:focus-visible{box-shadow:var(--ag-focus-shadow);outline:none}
.ag-standard-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--ag-button-background-color);border:var(--ag-button-border);border-radius:var(--ag-button-border-radius);color:var(--ag-button-text-color);cursor:pointer;font-weight:var(--ag-button-font-weight);padding:var(--ag-button-vertical-padding) var(--ag-button-horizontal-padding);&:active{background-color:var(--ag-button-active-background-color);border:var(--ag-button-active-border);color:var(--ag-button-active-text-color)}
&:disabled{background-color:var(--ag-button-disabled-background-color);border:var(--ag-button-disabled-border);color:var(--ag-button-disabled-text-color)}
.ag-standard-button:hover{background-color:var(--ag-button-hover-background-color);border:var(--ag-button-hover-border);color:var(--ag-button-hover-text-color)}
.page-layout{display:flex;flex-direction:column;min-height:calc(100vh - 52px);padding:var(--spacing-600);background:var(--bcn-gray-50);box-sizing:border-box}
.page-layout__container{display:flex;flex-direction:column}
.page-layout section{width:100%}
.breadcrumbs{padding:var(--spacing-400) 0}
.breadcrumbs__items{display:flex;gap:var(--spacing-100);align-items:center;flex-wrap:wrap}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.breadcrumb-item{color:var(--bcn-gray-600);text-transform:capitalize;font-size:.875rem}
a.breadcrumb-item{text-decoration:none}
.page-layout__title{border-bottom:1px solid var(--bcn-gray-200);padding:var(--spacing-500) 0;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box}
.page-layout__title-main{display:flex;align-items:center;gap:var(--spacing-200);min-width:0}
.page-layout__title h1{display:flex;align-items:center;gap:var(--spacing-200);font-family:var(--font-decorative);font-weight:var(--font-weight-bold);font-size:var(--type-size-500);margin:0;color:var(--bcn-gray-1000)}
.page-layout__title h1 .esa-icon{color:var(--bcn-gray-1000);flex-shrink:0}
.page-layout__utilities{display:flex;gap:var(--spacing-200)}
.page-layout__content{padding:var(--spacing-500) 0;min-height:70vh;position:relative}
:where(.ag-theme-part-8) {
.ag-icon-filter::before { mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolygon%20points%3D%2222%203%202%203%2010%2012.46%2010%2019%2014%2021%2014%2012.46%2022%203%22%2F%3E%3C%2Fsvg%3E"); }
;
.ag-icon-filterActive::before { mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolygon%20points%3D%2222%203%202%203%2010%2012.46%2010%2019%2014%2021%2014%2012.46%2022%203%22%2F%3E%3C%2Fsvg%3E"); }
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
.esa-icon-button{--_ib-size: var(--form-height-md, 40px);--_ib-bg-hover: var(--icon-button-bg-hover, color-mix(in srgb, currentColor 14%, transparent));display:inline-flex;align-items:center;justify-content:center;width:var(--_ib-size);height:var(--_ib-size);padding:0;border:0;border-radius:var(--radius-200, 8px);background:transparent;color:inherit;cursor:pointer;transition:background var(--transition-fast, .15s ease);-webkit-appearance:none;appearance:none}
:where(.ag-theme-inputStyle-7) {
:where(.ag-input-field-input[type=number]:not(.ag-number-field-input-stepper)){-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}
.ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){background-color:var(--ag-input-background-color);border:var(--ag-input-border);border-radius:var(--ag-input-border-radius);color:var(--ag-input-text-color);font-family:inherit;font-size:inherit;line-height:inherit;margin:0;min-height:var(--ag-input-height);padding:0;&:where(:disabled){background-color:var(--ag-input-disabled-background-color);border:var(--ag-input-disabled-border);color:var(--ag-input-disabled-text-color)}
&:where(:focus){background-color:var(--ag-input-focus-background-color);border:var(--ag-input-focus-border);box-shadow:var(--ag-input-focus-shadow);color:var(--ag-input-focus-text-color);outline:none}
&:where(:invalid){background-color:var(--ag-input-invalid-background-color);border:var(--ag-input-invalid-border);color:var(--ag-input-invalid-text-color)}
&:where(.invalid){background-color:var(--ag-input-invalid-background-color);border:var(--ag-input-invalid-border);color:var(--ag-input-invalid-text-color)}
&::-moz-placeholder{color:var(--ag-input-placeholder-text-color)}
&::placeholder{color:var(--ag-input-placeholder-text-color)}
:where(.ag-ltr) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding-left:var(--ag-input-padding-start)}
:where(.ag-rtl) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding-right:var(--ag-input-padding-start)}
&:where(.ag-ltr,.ag-rtl) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding:0 var(--ag-input-padding-start)}
:where(.ag-column-select-header-filter-wrapper),:where(.ag-filter-add-select),:where(.ag-filter-filter),:where(.ag-filter-toolpanel-search),:where(.ag-floating-filter-search-icon),:where(.ag-mini-filter){.ag-input-wrapper:before{background-color:currentcolor;color:var(--ag-input-icon-color);content:"";display:block;height:12px;-webkit-mask-image:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==");mask-image:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;opacity:.5;position:absolute;width:12px}
:where(.ag-ltr) :where(.ag-column-select-header-filter-wrapper),:where(.ag-ltr) :where(.ag-filter-add-select),:where(.ag-ltr) :where(.ag-filter-filter),:where(.ag-ltr) :where(.ag-filter-toolpanel-search),:where(.ag-ltr) :where(.ag-floating-filter-search-icon),:where(.ag-ltr) :where(.ag-mini-filter){.ag-input-wrapper:before{margin-left:var(--ag-spacing)}
.ag-number-field-input,.ag-text-field-input{padding-left:calc(var(--ag-spacing)*1.5 + 12px)}
:where(.ag-rtl) :where(.ag-column-select-header-filter-wrapper),:where(.ag-rtl) :where(.ag-filter-add-select),:where(.ag-rtl) :where(.ag-filter-filter),:where(.ag-rtl) :where(.ag-filter-toolpanel-search),:where(.ag-rtl) :where(.ag-floating-filter-search-icon),:where(.ag-rtl) :where(.ag-mini-filter){.ag-input-wrapper:before{margin-right:var(--ag-spacing)}
.ag-number-field-input,.ag-text-field-input{padding-right:calc(var(--ag-spacing)*1.5 + 12px)}
.ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){&:focus{box-shadow:var(--ag-focus-shadow);&:where(.invalid),&:where(:invalid){box-shadow:var(--ag-focus-error-shadow)}
:where(.ag-ltr){direction:ltr;.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row}
.ag-root-wrapper{border:var(--ag-wrapper-border);border-radius:var(--ag-wrapper-border-radius);container-type:inline-size;display:flex;flex-direction:column;overflow:hidden;position:relative;&.ag-layout-normal{content-visibility:auto;height:100%}
&.ag-layout-normal{content-visibility:auto;height:100%}
.ag-root-wrapper-body{display:flex;flex-direction:row;&.ag-layout-normal{flex:1 1 auto;height:0;min-height:0}
&.ag-layout-normal{flex:1 1 auto;height:0;min-height:0}
.ag-unselectable{-webkit-user-select:none;-moz-user-select:none;user-select:none}
.ag-root{display:flex;flex-direction:column;position:relative;&.ag-layout-auto-height,&.ag-layout-normal{flex:1 1 auto;overflow:hidden;width:0}
&.ag-layout-normal{height:100%}
&.ag-layout-auto-height,&.ag-layout-normal{flex:1 1 auto;overflow:hidden;width:0}
&.ag-layout-normal{height:100%}
.ag-body{display:flex;flex:1 1 auto;flex-direction:row!important;min-height:0;position:relative}
.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row}
.ag-body,.ag-floating-bottom,.ag-floating-top{background-color:var(--ag-data-background-color)}
.ag-body-horizontal-scroll-viewport,.ag-body-vertical-scroll-viewport,.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{flex:1 1 auto;height:100%;min-width:0;overflow:hidden;position:relative}
.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{overflow-x:auto;-ms-overflow-style:none!important;scrollbar-width:none!important}
.ag-body-viewport{display:flex;overflow-x:hidden;&:where(.ag-layout-normal){overflow-y:auto;-webkit-overflow-scrolling:touch}
&:where(.ag-layout-normal){overflow-y:auto;-webkit-overflow-scrolling:touch}
.ag-viewport{position:relative}
.ag-center-cols-viewport{min-height:100%;width:100%}
*,*:before,*:after{box-sizing:border-box}
body{margin:0;font-family:var(--font-sans, system-ui, sans-serif);font-weight:var(--font-weight-regular, 350);color:var(--color-text-primary, #3d3d3d);background:var(--color-surface, #fff);-webkit-font-smoothing:antialiased}
button{font-family:inherit;cursor:pointer;background:none;border:0}
a{color:var(--color-text-link, #005862);text-decoration:none}
img{display:block;max-width:100%}
:where(h1,h2,h3,h4,h5,h6,p,figure,blockquote,dl,dd,ul,ol,pre){margin:0}
:where(.ag-theme-columnDropStyle-2) {
.ag-column-drop-vertical-empty-message{align-items:center;border:dashed var(--ag-border-width);border-color:var(--ag-border-color);display:flex;inset:0;justify-content:center;margin:calc(var(--ag-spacing)*1.5) calc(var(--ag-spacing)*2);overflow:hidden;padding:calc(var(--ag-spacing)*2);position:absolute}
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
| `--bcn-status-not-started` | `#bdbdbd` | component |
| `--color-accent` | `#f76b15` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-border-strong` | `#bdbdbd` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-border` | `#b9d6d2` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-primary-strong` | `#2a7e3b` | semantic |
| `--color-primary-subtle` | `#effefb` | semantic |
| `--color-secondary` | `#00918b` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--color-surface-elevated` | `#fcfcfc` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#fcfcfc` | semantic |
| `--color-text-link` | `#005862` | semantic |
| `--color-text-muted` | `#7c7c7c` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--color-warning` | `#f2770e` | semantic |
| `--dialog-bg` | `#fcfcfc` | component |
| `--dialog-border-color` | `#efefef` | component |
| `--dialog-radius` | `.75rem` | component |
| `--dialog-width` | `480px` | component |
| `--filter-clear-color` | `#7c7c7c` | component |
| `--filter-clear-color-hover` | `#ce2c31` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-mono` | `"Roboto Mono", ui-monospace, monospace` | primitive |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-medium` | `450` | primitive |
| `--font-weight-regular` | `350` | primitive |
| `--font-weight-semibold` | `550` | primitive |
| `--form-bg` | `#fcfcfc` | component |
| `--form-border-color` | `#dcdcdc` | component |
| `--form-border-width` | `1px` | component |
| `--form-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--form-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--form-height-md` | `36px` | component |
| `--form-height-sm` | `28px` | component |
| `--form-label-color` | `#525252` | component |
| `--form-padding-x-md` | `.75rem` | component |
| `--form-padding-x-sm` | `.625rem` | component |
| `--form-padding-y-md` | `.5rem` | component |
| `--form-placeholder-color` | `#7c7c7c` | component |
| `--form-radius-md` | `.25rem` | component |
| `--form-radius-sm` | `.25rem` | component |
| `--form-text-color` | `#3d3d3d` | component |
| `--icon-button-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--icon-link-font-size-md` | `1rem` | component |
| `--icon-link-font-size-sm` | `.875rem` | component |
| `--icon-link-gap` | `.375rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-medium` | `20px` | component |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-small` | `16px` | component |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
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
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
