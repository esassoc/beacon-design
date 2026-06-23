# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **fish-study** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/fish-study/10.19.1/
- **Section element:** `<page>`
- **Components:** esa-avatar (hub), esa-badge (hub), esa-button (hub), esa-collapsible (hub), esa-icon (hub), esa-icon-button (hub), esa-pill (hub)

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
                <a class="breadcrumb-item" href="/beacon-design/prototypes/fish-studies">
                  Science Plan </a
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
                <span class="breadcrumb-item" aria-current="page"> COA 10.19.1 </span>
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
                Migration and Survival Study
              </h1>
              <span class="bcn-study__badges">
                <span class="bcn-study__coa">COA 10.19.1</span>
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
              </span>
            </div>
            <div class="page-layout__utilities">
              <div class="bcn-study__utils">
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
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                    </span>
                    <span class="esa-button__label"> Generate sketch (.docx) </span>
                  </button>
                </span>
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line>
                      </svg>
                    </span>
                    <span class="esa-button__label"> Submit for CDFW review </span>
                  </button>
                </span>
              </div>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="bcn-study">
              <!-- ── Main column: sketch + agency review ── -->
              <main class="bcn-study__main">
                <article class="bcn-sketch">
                  <!-- Field 1 — Focal Species -->
                  <section class="bcn-sketch__field" data-field="focalSpeciesNote">
                    <h3 class="bcn-sketch__h">Focal Species</h3>
                    <div class="bcn-sketch__chips">
                      <span class="esa-pill esa-pill--default esa-pill--sm">
                        <span class="esa-pill__label">Winter-run Chinook salmon</span>
                      </span>
                      <span class="esa-pill esa-pill--default esa-pill--sm">
                        <span class="esa-pill__label">Spring-run Chinook salmon</span>
                      </span>
                      <span class="esa-pill esa-pill--default esa-pill--sm">
                        <span class="esa-pill__label">White sturgeon</span>
                      </span>
                    </div>
                    <p class="bcn-sketch__p">
                      Listed winter-run and spring-run Chinook salmon and white sturgeon
                      out-migrants are the focal taxa. Salmonid smolts are tagged for reach-scale
                      survival and routing; white sturgeon are tagged to characterize
                      sub-adult/juvenile movement past the north Delta intakes.
                    </p>
                  </section>
                  <!-- Field 2 — Project Effect Links -->
                  <section class="bcn-sketch__field" data-field="projectEffectLinks">
                    <h3 class="bcn-sketch__h">Project Effect Links</h3>
                    <p class="bcn-sketch__p">
                      Both near-field and far-field. Near-field: entrainment, impingement, and
                      predation at the north Delta intakes (NDD) during construction and operations.
                      Far-field: altered routing into the interior and southern Delta and reduced
                      through-Delta survival driven by diversion-modified hydrodynamics. The study
                      resolves the project effect at both scales so near-field intake performance
                      and far-field routing can be attributed separately.
                    </p>
                  </section>
                  <!-- Field 3 — Objectives, Research Questions & Hypotheses -->
                  <section class="bcn-sketch__field" data-field="objectivesSummary">
                    <h3 class="bcn-sketch__h">Objectives, Research Questions &amp; Hypotheses</h3>
                    <p class="bcn-sketch__p">
                      Establish a robust baseline of reach-specific survival and migratory routing
                      for listed out-migrants before in-water construction, then track change
                      through construction and operations. The study pairs a far-field
                      survival/routing component with a near-field intake-behavior component so that
                      any change in through-Delta survival can be attributed to its mechanism.
                    </p>
                    <ol class="bcn-sketch__rq">
                      <li>
                        What is the baseline reach-specific survival and routing of winter-run and
                        spring-run Chinook salmon and white sturgeon out-migrants prior to in-water
                        construction, and how does it change with project construction and
                        operations?
                      </li>
                      <li>
                        How does diversion at the north Delta intakes alter the probability of
                        routing into the interior and southern Delta versus remaining on the
                        mainstem Sacramento River corridor?
                      </li>
                      <li>
                        What is fish survival and behavior in the near-field of the intakes —
                        approach, residence, impingement, and predation — and how does it scale to
                        reach-level survival?
                      </li>
                    </ol>
                    <ul class="bcn-sketch__hyp">
                      <li>
                        H1: Through-reach survival of salmonid out-migrants declines measurably
                        during active diversion relative to the preconstruction baseline.
                      </li>
                      <li>
                        H2: Increased diversion fraction increases the probability of routing off
                        the mainstem corridor into the interior Delta.
                      </li>
                    </ul>
                  </section>
                  <!-- Field 4 — Background -->
                  <section class="bcn-sketch__field" data-field="background">
                    <h3 class="bcn-sketch__h">Background</h3>
                    <p class="bcn-sketch__p">
                      Builds on enhanced acoustic-tagging work, the Delta Juvenile Fish Monitoring
                      Program, and prior JSATS survival studies in the Sacramento–San Joaquin Delta.
                      The study reach and tagging design are coordinated with the Predation Study
                      (COA 10.19.2) and the Abundance and Distribution Study (COA 10.19.3) so the
                      three share a common reach framework.
                    </p>
                  </section>
                  <!-- Field 5 — Methods (Study Area + Components, or study-level methods) -->
                  <section class="bcn-sketch__field" data-field="methods">
                    <h3 class="bcn-sketch__h">Methods</h3>
                    <p class="bcn-sketch__p">
                      <span class="bcn-sketch__sub">Study area.</span> The Sacramento River from
                      upstream release sites, through the legal Delta and the north Delta diversion
                      reach, to Chipps Island at the western edge of the Delta.
                    </p>
                    <div class="bcn-sketch__components">
                      <div class="bcn-sketch__component">
                        <h4 class="bcn-sketch__component-h">
                          <span class="esa-icon esa-icon--sm" aria-hidden="true">
                            <svg
                              width="16"
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
                          Far-Field Survival and Routing
                        </h4>
                        <div class="bcn-sketch__cols">
                          <div>
                            <span class="bcn-sketch__col-label">Methods / protocols</span>
                            <ul class="bcn-sketch__list">
                              <li>Telemetry System (JSATS array)</li>
                              <li>Salmonid Tagging and Release</li>
                              <li>Sturgeon Tagging and Release</li>
                              <li>Array Maintenance and Data Management</li>
                              <li>Survival Estimation</li>
                            </ul>
                          </div>
                          <div>
                            <span class="bcn-sketch__col-label">Performance metrics</span>
                            <ul class="bcn-sketch__list">
                              <li>Reach-specific survival</li>
                              <li>Route-entrainment probabilities (interior vs. mainstem)</li>
                              <li>Travel time through the diversion reach</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="bcn-sketch__component">
                        <h4 class="bcn-sketch__component-h">
                          <span class="esa-icon esa-icon--sm" aria-hidden="true">
                            <svg
                              width="16"
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
                          Near-Field Behavior and Survival
                        </h4>
                        <div class="bcn-sketch__cols">
                          <div>
                            <span class="bcn-sketch__col-label">Methods / protocols</span>
                            <ul class="bcn-sketch__list">
                              <li>Telemetry System (fine-scale)</li>
                              <li>Fish Tagging</li>
                              <li>Near-/Intermediate-Field Hydrodynamics</li>
                              <li>Movement Analysis</li>
                            </ul>
                          </div>
                          <div>
                            <span class="bcn-sketch__col-label">Performance metrics</span>
                            <ul class="bcn-sketch__list">
                              <li>Near-field survival at the intakes</li>
                              <li>Approach and residence behavior at the screens</li>
                              <li>Predation event rate in the near-field</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- Field 6 — Performance Metrics (study-level; component metrics render above) -->
                  <!-- Field 7 — Data Management -->
                  <section class="bcn-sketch__field" data-field="dataManagement">
                    <h3 class="bcn-sketch__h">Data Management</h3>
                    <p class="bcn-sketch__p">
                      JSATS detections, tagging records, and hydrodynamic covariates are ingested to
                      the DCP fisheries data system on a standing schedule; detection efficiencies
                      and array uptime are tracked per season. Survival and routing models, code,
                      and derived estimates are versioned and archived with each interim and final
                      report.
                    </p>
                  </section>
                  <!-- Field 8 — Reporting Requirements -->
                  <section class="bcn-sketch__field" data-field="reportingRequirements">
                    <h3 class="bcn-sketch__h">Reporting Requirements</h3>
                    <p class="bcn-sketch__p">
                      Draft Study Plan and Final Study Plan to CDFW; Draft/Interim Reports each
                      field season; Draft Final Report and Final Report. Baseline reporting due
                      2030, prior to in-water construction.
                    </p>
                  </section>
                </article>
                <section class="bcn-review">
                  <header class="bcn-review__head">
                    <h3 class="bcn-review__title">
                      <span class="esa-icon esa-icon--sm" aria-hidden="true">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          focusable="false"
                        >
                          <path d="M12 7v2"></path>
                          <path d="M12 13h.01"></path>
                          <path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2V8"></path>
                        </svg>
                      </span>
                      Agency Review — CDFW
                      <span class="esa-badge esa-badge--secondary esa-badge--sm">
                        <span class="esa-badge__text">6</span>
                      </span>
                    </h3>
                    <div class="bcn-review__counts">
                      <span class="bcn-review__count" data-s="open">3 open</span>
                      <span class="bcn-review__count" data-s="addressed">2 addressed</span>
                      <span class="bcn-review__count" data-s="resolved">1 resolved</span>
                    </div>
                  </header>
                  <div class="bcn-review__groups">
                    <div class="bcn-review__group">
                      <h4 class="bcn-review__field">
                        <span class="esa-icon esa-icon--sm" aria-hidden="true">
                          <svg
                            width="16"
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
                        Pinned to: Research Questions
                      </h4>
                      <ul class="bcn-review__list">
                        <li class="bcn-review__item">
                          <span class="bcn-review__node"
                            ><span
                              class="esa-avatar esa-avatar--sm esa-avatar--circle"
                              style="--_avatar-hue: 82"
                            >
                              <span class="esa-avatar__initials">C</span>
                            </span>
                          </span>
                          <div class="bcn-review__body">
                            <div class="bcn-review__meta">
                              <span class="bcn-review__author">CDFW</span>
                              <span class="esa-badge esa-badge--warning esa-badge--sm">
                                <span class="esa-badge__text">CDFW</span>
                              </span>
                              <span class="bcn-review__time">2026-02-10</span>
                              <span class="bcn-review__tags">
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
                            <p class="bcn-review__text">
                              RQ1 should separate the baseline objective from the with-project
                              objective so the preconstruction baseline can be approved and started
                              independent of the construction-phase design.
                            </p>
                            <ul class="bcn-review__replies">
                              <li class="bcn-review__reply">
                                <span class="bcn-review__node bcn-review__node--reply"
                                  ><span
                                    class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                    style="--_avatar-hue: 233"
                                  >
                                    <span class="esa-avatar__initials">GM</span>
                                  </span>
                                </span>
                                <div class="bcn-review__body">
                                  <div class="bcn-review__meta">
                                    <span class="bcn-review__author">Greenwood, Marin</span>
                                    <span class="bcn-review__time">2026-02-24</span>
                                  </div>
                                  <p class="bcn-review__text">
                                    Split into a baseline clause and a with-project clause within
                                    RQ1; the baseline component can proceed on the 2027 field season
                                    while the construction-phase design is finalized.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="bcn-review__group">
                      <h4 class="bcn-review__field">
                        <span class="esa-icon esa-icon--sm" aria-hidden="true">
                          <svg
                            width="16"
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
                        Pinned to: Background
                      </h4>
                      <ul class="bcn-review__list">
                        <li class="bcn-review__item">
                          <span class="bcn-review__node"
                            ><span
                              class="esa-avatar esa-avatar--sm esa-avatar--circle"
                              style="--_avatar-hue: 82"
                            >
                              <span class="esa-avatar__initials">C</span>
                            </span>
                          </span>
                          <div class="bcn-review__body">
                            <div class="bcn-review__meta">
                              <span class="bcn-review__author">CDFW</span>
                              <span class="esa-badge esa-badge--warning esa-badge--sm">
                                <span class="esa-badge__text">CDFW</span>
                              </span>
                              <span class="bcn-review__time">2026-05-06</span>
                              <span class="bcn-review__tags">
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
                            <p class="bcn-review__text">
                              Background references COA 10.20.2 where the Abundance and Distribution
                              Study (10.19.2/10.19.3) is meant — please correct the
                              coordinating-study cross-reference.
                            </p>
                            <ul class="bcn-review__replies">
                              <li class="bcn-review__reply">
                                <span class="bcn-review__node bcn-review__node--reply"
                                  ><span
                                    class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                    style="--_avatar-hue: 233"
                                  >
                                    <span class="esa-avatar__initials">GM</span>
                                  </span>
                                </span>
                                <div class="bcn-review__body">
                                  <div class="bcn-review__meta">
                                    <span class="bcn-review__author">Greenwood, Marin</span>
                                    <span class="bcn-review__time">2026-05-12</span>
                                  </div>
                                  <p class="bcn-review__text">
                                    Corrected to 10.19.2 (Predation) and 10.19.3 (Abundance and
                                    Distribution); 10.20.2 reference removed.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="bcn-review__group">
                      <h4 class="bcn-review__field">
                        <span class="esa-icon esa-icon--sm" aria-hidden="true">
                          <svg
                            width="16"
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
                        Pinned to: Methods
                      </h4>
                      <ul class="bcn-review__list">
                        <li class="bcn-review__item">
                          <span class="bcn-review__node"
                            ><span
                              class="esa-avatar esa-avatar--sm esa-avatar--circle"
                              style="--_avatar-hue: 82"
                            >
                              <span class="esa-avatar__initials">C</span>
                            </span>
                          </span>
                          <div class="bcn-review__body">
                            <div class="bcn-review__meta">
                              <span class="bcn-review__author">CDFW</span>
                              <span class="esa-badge esa-badge--warning esa-badge--sm">
                                <span class="esa-badge__text">CDFW</span>
                              </span>
                              <span class="bcn-review__time">2026-03-05</span>
                              <span class="bcn-review__tags">
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
                            <p class="bcn-review__text">
                              The near-field and far-field components appear to double-count
                              survival in the immediate intake reach. Define the spatial boundary
                              between components so reach-level survival is not attributed twice.
                            </p>
                            <ul class="bcn-review__replies">
                              <li class="bcn-review__reply">
                                <span class="bcn-review__node bcn-review__node--reply"
                                  ><span
                                    class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                    style="--_avatar-hue: 233"
                                  >
                                    <span class="esa-avatar__initials">GM</span>
                                  </span>
                                </span>
                                <div class="bcn-review__body">
                                  <div class="bcn-review__meta">
                                    <span class="bcn-review__author">Greenwood, Marin</span>
                                    <span class="bcn-review__time">2026-03-21</span>
                                  </div>
                                  <p class="bcn-review__text">
                                    Added an explicit near-field/far-field boundary at the
                                    downstream extent of the intake array; near-field survival is
                                    reported as a conditional term and excluded from the far-field
                                    reach estimate.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="bcn-review__item">
                          <span class="bcn-review__node"
                            ><span
                              class="esa-avatar esa-avatar--sm esa-avatar--circle"
                              style="--_avatar-hue: 82"
                            >
                              <span class="esa-avatar__initials">C</span>
                            </span>
                          </span>
                          <div class="bcn-review__body">
                            <div class="bcn-review__meta">
                              <span class="bcn-review__author">CDFW</span>
                              <span class="esa-badge esa-badge--warning esa-badge--sm">
                                <span class="esa-badge__text">CDFW</span>
                              </span>
                              <span class="bcn-review__time">2026-04-02</span>
                              <span class="bcn-review__tags">
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
                            <p class="bcn-review__text">
                              The survival-estimation and routing models must be independently
                              peer-reviewed before the 2030 baseline reporting, including
                              documentation of detection-efficiency assumptions and model structure.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="bcn-review__group">
                      <h4 class="bcn-review__field">
                        <span class="esa-icon esa-icon--sm" aria-hidden="true">
                          <svg
                            width="16"
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
                        Pinned to: Performance Metrics
                      </h4>
                      <ul class="bcn-review__list">
                        <li class="bcn-review__item">
                          <span class="bcn-review__node"
                            ><span
                              class="esa-avatar esa-avatar--sm esa-avatar--circle"
                              style="--_avatar-hue: 82"
                            >
                              <span class="esa-avatar__initials">C</span>
                            </span>
                          </span>
                          <div class="bcn-review__body">
                            <div class="bcn-review__meta">
                              <span class="bcn-review__author">CDFW</span>
                              <span class="esa-badge esa-badge--warning esa-badge--sm">
                                <span class="esa-badge__text">CDFW</span>
                              </span>
                              <span class="bcn-review__time">2026-02-10</span>
                              <span class="bcn-review__tags">
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
                            <p class="bcn-review__text">
                              The far-field metric set must include reverse-flow frequency,
                              magnitude, and duration as a routing covariate. Flow reversal at the
                              junctions is a primary driver of interior-Delta entrainment and cannot
                              be omitted.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="bcn-review__group">
                      <h4 class="bcn-review__field">
                        <span class="esa-icon esa-icon--sm" aria-hidden="true">
                          <svg
                            width="16"
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
                        Pinned to: Reporting Requirements
                      </h4>
                      <ul class="bcn-review__list">
                        <li class="bcn-review__item">
                          <span class="bcn-review__node"
                            ><span
                              class="esa-avatar esa-avatar--sm esa-avatar--circle"
                              style="--_avatar-hue: 82"
                            >
                              <span class="esa-avatar__initials">C</span>
                            </span>
                          </span>
                          <div class="bcn-review__body">
                            <div class="bcn-review__meta">
                              <span class="bcn-review__author">CDFW</span>
                              <span class="esa-badge esa-badge--warning esa-badge--sm">
                                <span class="esa-badge__text">CDFW</span>
                              </span>
                              <span class="bcn-review__time">2026-04-02</span>
                              <span class="bcn-review__tags">
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
                            <p class="bcn-review__text">
                              CDFW approval of the Final Study Plan is required before any tagging
                              or array deployment begins. Please state the approval gate explicitly
                              in the reporting requirements.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </main>
              <!-- ── Rail: structured facts (the crosswalk + roles + planning, per study) ── -->
              <aside class="bcn-study__rail">
                <details class="esa-collapsible" open="">
                  <summary class="esa-collapsible__summary">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
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
                    <span class="esa-collapsible__title">Details</span>
                  </summary>
                  <div class="esa-collapsible__body">
                    <div class="bcn-key-value">
                      <span class="bcn-key-value__key">Category</span>
                      <span class="bcn-key-value__val"
                        >Covered Species Monitoring &amp; Scientific Study</span
                      >
                    </div>
                    <div class="bcn-key-value">
                      <span class="bcn-key-value__key">Study type</span>
                      <span class="bcn-key-value__val"
                        >Fisheries Evaluation Studies — Biological Monitoring</span
                      >
                    </div>
                    <div class="bcn-key-value">
                      <span class="bcn-key-value__key">DCP lead</span>
                      <span class="bcn-key-value__val">DWR-DISE</span>
                    </div>
                    <div class="bcn-key-value">
                      <span class="bcn-key-value__key">Agency participants</span>
                      <span class="bcn-key-value__val">CDFW</span>
                    </div>
                    <div class="bcn-key-value">
                      <span class="bcn-key-value__key">Timeframe</span>
                      <span class="bcn-key-value__val"
                        >In-water preconstruction baseline monitoring, In-water construction
                        monitoring, Phase 1 Operations Monitoring, and Phase 2 Operations
                        Monitoring.</span
                      >
                    </div>
                    <div class="bcn-study__kv">
                      <span class="bcn-study__kv-label">DCP phases</span>
                      <span class="bcn-study__chips">
                        <span class="esa-pill esa-pill--default esa-pill--sm">
                          <span class="esa-pill__label">Baseline</span>
                        </span>
                        <span class="esa-pill esa-pill--default esa-pill--sm">
                          <span class="esa-pill__label">In-water construction</span>
                        </span>
                        <span class="esa-pill esa-pill--default esa-pill--sm">
                          <span class="esa-pill__label">Phase 1 ops</span>
                        </span>
                        <span class="esa-pill esa-pill--default esa-pill--sm">
                          <span class="esa-pill__label">Phase 2 ops</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </details>
                <details class="esa-collapsible" open="">
                  <summary class="esa-collapsible__summary">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                        <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                        <line x1="8" x2="16" y1="12" y2="12"></line>
                      </svg>
                    </span>
                    <span class="esa-collapsible__title">Dependencies &amp; references</span>
                  </summary>
                  <div class="esa-collapsible__body">
                    <div class="bcn-study__kv">
                      <span class="bcn-study__kv-label">Informed by</span>
                      <span class="bcn-study__chips">
                        <a
                          class="bcn-study__coa-link"
                          href="/beacon-design/prototypes/fish-study/10.20.1"
                          >10.20.1</a
                        >
                      </span>
                    </div>
                    <div class="bcn-study__kv">
                      <span class="bcn-study__kv-label">Informs</span>
                      <span class="bcn-study__chips">
                        <a
                          class="bcn-study__coa-link"
                          href="/beacon-design/prototypes/fish-study/10.19.2"
                          >10.19.2</a
                        ><a
                          class="bcn-study__coa-link"
                          href="/beacon-design/prototypes/fish-study/10.19.3"
                          >10.19.3</a
                        ><a
                          class="bcn-study__coa-link"
                          href="/beacon-design/prototypes/fish-study/10.21.5"
                          >10.21.5</a
                        ><a
                          class="bcn-study__coa-link"
                          href="/beacon-design/prototypes/fish-study/10.21.2"
                          >10.21.2</a
                        ><a
                          class="bcn-study__coa-link"
                          href="/beacon-design/prototypes/fish-study/10.21.7"
                          >10.21.7</a
                        ><span class="bcn-study__coa-ref">10.18.2</span
                        ><a
                          class="bcn-study__coa-link"
                          href="/beacon-design/prototypes/fish-study/10.21.10"
                          >10.21.10</a
                        >
                      </span>
                    </div>
                    <div class="bcn-study__kv">
                      <span class="bcn-study__kv-label">ITP cross-references</span>
                      <span class="bcn-study__chips">
                        <span class="bcn-study__coa-ref">20.2.1</span
                        ><span class="bcn-study__coa-ref">11.115</span
                        ><span class="bcn-study__coa-ref">11.116</span
                        ><span class="bcn-study__coa-ref">11.117</span
                        ><span class="bcn-study__coa-ref">COA 7</span
                        ><span class="bcn-study__coa-ref">COA 8</span
                        ><span class="bcn-study__coa-ref">10.15</span>
                      </span>
                    </div>
                  </div>
                </details>
                <details class="esa-collapsible" open="">
                  <summary class="esa-collapsible__summary">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
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
                    <span class="esa-collapsible__title">Deliverables (6)</span>
                  </summary>
                  <div class="esa-collapsible__body">
                    <ul class="bcn-study__deliv">
                      <li class="bcn-study__deliv-row">
                        <span class="bcn-study__deliv-name">Draft Study Plan</span>
                        <span
                          class="bcn-status-chip"
                          data-status="submitted"
                          style="--_chip: var(--st-submitted, #e3c14d)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Submitted</span>
                        </span>
                      </li>
                      <li class="bcn-study__deliv-row">
                        <span class="bcn-study__deliv-name">Final Study Plan</span>
                        <span
                          class="bcn-status-chip"
                          data-status="in-progress"
                          style="--_chip: var(--st-in-progress, #fc8d59)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">In Progress</span>
                        </span>
                      </li>
                      <li class="bcn-study__deliv-row">
                        <span class="bcn-study__deliv-name">Draft Interim Reports</span>
                        <span
                          class="bcn-status-chip"
                          data-status="not-started"
                          style="--_chip: var(--st-not-started, #d73027)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Not Started</span>
                        </span>
                      </li>
                      <li class="bcn-study__deliv-row">
                        <span class="bcn-study__deliv-name">Interim Reports</span>
                        <span
                          class="bcn-status-chip"
                          data-status="not-started"
                          style="--_chip: var(--st-not-started, #d73027)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Not Started</span>
                        </span>
                      </li>
                      <li class="bcn-study__deliv-row">
                        <span class="bcn-study__deliv-name">Draft Final Report</span>
                        <span
                          class="bcn-status-chip"
                          data-status="not-started"
                          style="--_chip: var(--st-not-started, #d73027)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Not Started</span>
                        </span>
                      </li>
                      <li class="bcn-study__deliv-row">
                        <span class="bcn-study__deliv-name">Final Report</span>
                        <span
                          class="bcn-status-chip"
                          data-status="not-started"
                          style="--_chip: var(--st-not-started, #d73027)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Not Started</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
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
                    <span class="esa-collapsible__title">Roles &amp; responsibilities</span>
                  </summary>
                  <div class="esa-collapsible__body">
                    <ul class="bcn-study__roles">
                      <li class="bcn-study__role-row">
                        <span class="bcn-study__role-stream">Study / Plan Lead</span>
                        <span class="bcn-study__role-org">
                          DWR-DISE/DCO<span class="bcn-study__role-person">
                            · Kevin, Javier, Chris G.</span
                          >
                          <span class="esa-badge esa-badge--secondary esa-badge--sm">
                            <span class="esa-badge__text">tentative</span>
                          </span>
                        </span>
                      </li>
                      <li class="bcn-study__role-row">
                        <span class="bcn-study__role-stream">Study / Plan Design</span>
                        <span class="bcn-study__role-org">
                          Consultant<span class="bcn-study__role-person"> · ESA/USGS</span>
                          <span class="esa-badge esa-badge--secondary esa-badge--sm">
                            <span class="esa-badge__text">tentative</span>
                          </span>
                        </span>
                      </li>
                      <li class="bcn-study__role-row">
                        <span class="bcn-study__role-stream">Study / Plan Implementation</span>
                        <span class="bcn-study__role-org">
                          Consultant<span class="bcn-study__role-person"> · ESA/ICF/USGS</span>
                          <span class="esa-badge esa-badge--secondary esa-badge--sm">
                            <span class="esa-badge__text">tentative</span>
                          </span>
                        </span>
                      </li>
                      <li class="bcn-study__role-row">
                        <span class="bcn-study__role-stream">Compliance / CEQA / Permitting</span>
                        <span class="bcn-study__role-org">
                          DCO/Consultant<span class="bcn-study__role-person"> · ESA/ICF</span>
                          <span class="esa-badge esa-badge--secondary esa-badge--sm">
                            <span class="esa-badge__text">tentative</span>
                          </span>
                        </span>
                      </li>
                      <li class="bcn-study__role-row">
                        <span class="bcn-study__role-stream">Engineering</span>
                        <span class="bcn-study__role-org"> DCA </span>
                      </li>
                      <li class="bcn-study__role-row">
                        <span class="bcn-study__role-stream">Construction / Installation</span>
                        <span class="bcn-study__role-org">
                          DCA Contractor
                          <span class="esa-badge esa-badge--secondary esa-badge--sm">
                            <span class="esa-badge__text">tentative</span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="m12 14 4-4"></path>
                        <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                      </svg>
                    </span>
                    <span class="esa-collapsible__title">Planning</span>
                  </summary>
                  <div class="esa-collapsible__body">
                    <div class="bcn-key-value">
                      <span class="bcn-key-value__key">Study plan due</span>
                      <span class="bcn-key-value__val">2026-08-01</span>
                    </div>
                    <div class="bcn-key-value">
                      <span class="bcn-key-value__key">Complexity (1–10)</span>
                      <span class="bcn-key-value__val">9</span>
                    </div>
                    <div class="bcn-key-value">
                      <span class="bcn-key-value__key">Peak staff (FTE)</span>
                      <span class="bcn-key-value__val">12</span>
                    </div>
                    <div class="bcn-key-value">
                      <span class="bcn-key-value__key">Budget magnitude</span>
                      <span class="bcn-key-value__val">$3–5M</span>
                    </div>
                  </div>
                </details>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
:root,
[data-theme="beacon"] {
  --avatar-bg: hsl(200 45% 65%);
  --avatar-radius: 9999px;
  --avatar-size-md: 40px;
  --avatar-size-sm: 28px;
  --avatar-text-color: #ffffff;
  --badge-bg: #005862;
  --badge-height-md: 20px;
  --badge-height-sm: 16px;
  --badge-radius: 0.25rem;
  --badge-text-color: #ffffff;
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
  --collapsible-bg: #ffffff;
  --collapsible-border-color: #dcdcdc;
  --collapsible-padding-x: 1rem;
  --collapsible-radius: 0.5rem;
  --collapsible-title-color: #3d3d3d;
  --color-accent: #f9a134;
  --color-border: #dcdcdc;
  --color-border-light: #efefef;
  --color-info: #228be6;
  --color-primary: #005862;
  --color-primary-hover: #00474f;
  --color-secondary: #00918b;
  --color-success: #2e7571;
  --color-surface: #ffffff;
  --color-surface-sunken: #efefef;
  --color-text-inverse: #ffffff;
  --color-text-link: #005862;
  --color-text-muted: #7c7c7c;
  --color-text-primary: #3d3d3d;
  --color-text-secondary: #525252;
  --color-text-tertiary: #656565;
  --color-warning: #f2770e;
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
  --form-label-color: #525252;
  --form-padding-x-md: 0.75rem;
  --form-padding-x-sm: 0.625rem;
  --form-radius-md: 0.25rem;
  --form-radius-sm: 0.25rem;
  --icon-size-md: 20px;
  --icon-size-medium: 20px;
  --icon-size-sm: 16px;
  --icon-size-small: 16px;
  --icon-size-xs: 14px;
  --pill-bg: #efefef;
  --pill-border-color: #efefef;
  --pill-height-md: 28px;
  --pill-height-sm: 22px;
  --pill-radius: 9999px;
  --pill-text-color: #3d3d3d;
  --radius-100: 0.25rem;
  --radius-200: 0.5rem;
  --radius-300: 0.5rem;
  --radius-full: 9999px;
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
  --type-size-300: clamp(0.875rem, 0.77rem + 0.52vw, 1.125rem);
  --type-size-500: clamp(1.125rem, 0.98rem + 0.72vw, 1.5rem);
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
.bcn-study__badges {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
}
.bcn-study__coa {
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
}
.bcn-study__utils {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
}
.bcn-study {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: var(--spacing-600);
  align-items: start;
}
.bcn-study__main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-700);
  min-width: 0;
}
.bcn-sketch {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-600);
}
.bcn-sketch__field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-sketch__h {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0;
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  padding-bottom: var(--spacing-150);
  border-bottom: 1px solid var(--color-border);
}
.bcn-sketch__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-150);
  margin-bottom: var(--spacing-100);
}
.bcn-sketch__p {
  margin: 0;
  font-size: var(--type-size-200);
  line-height: 1.6;
  color: var(--color-text-secondary);
}
.bcn-sketch__rq {
  margin: var(--spacing-100) 0 0;
  padding-left: var(--spacing-500);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-sketch__rq li {
  font-size: var(--type-size-200);
  line-height: 1.5;
  color: var(--color-text-primary);
}
.bcn-sketch__hyp {
  margin: var(--spacing-200) 0 0;
  padding-left: var(--spacing-500);
}
.bcn-sketch__hyp li {
  font-size: var(--type-size-200);
  line-height: 1.5;
  color: var(--color-text-secondary);
  font-style: italic;
}
.bcn-sketch__sub {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-sketch__components {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-sketch__component {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-surface);
}
.bcn-sketch__component-h {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-200);
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-sketch__component-h .esa-icon {
  color: var(--color-secondary);
}
.bcn-sketch__cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-400);
}
.bcn-sketch__col-label {
  display: block;
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  margin-bottom: var(--spacing-150);
}
.bcn-sketch__list {
  margin: 0;
  padding-left: var(--spacing-500);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
}
.bcn-sketch__list li {
  font-size: var(--type-size-200);
  line-height: 1.5;
  color: var(--color-text-secondary);
}
.bcn-review {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-review__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-300);
}
.bcn-review__title {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0;
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-review__title .esa-icon {
  color: var(--color-warning);
  flex-shrink: 0;
}
.bcn-review__counts {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
  font-size: var(--type-size-100);
}
.bcn-review__count {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-text-secondary);
}
.bcn-review__count:before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
}
.bcn-review__count[data-s="open"]:before {
  background: var(--color-warning);
}
.bcn-review__count[data-s="addressed"]:before {
  background: var(--color-info);
}
.bcn-review__count[data-s="resolved"]:before {
  background: var(--color-success);
}
.bcn-review__groups {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-review__group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-review__field {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  margin: 0;
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--color-text-tertiary);
}
.bcn-review__field .esa-icon {
  color: var(--color-text-muted);
}
.bcn-review__list,
.bcn-review__replies {
  list-style: none;
  margin: 0;
  padding: 0;
}
.bcn-review__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-300);
  padding: var(--spacing-300);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-review__body {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
}
.bcn-review__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-200);
}
.bcn-review__author {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-review__time {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.bcn-review__tags {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-150);
  margin-left: auto;
}
.bcn-review__text {
  margin: 0;
  font-size: var(--type-size-200);
  line-height: 1.55;
  color: var(--color-text-secondary);
}
.bcn-review__replies {
  margin-top: var(--spacing-200);
  padding-left: var(--spacing-400);
  border-left: 2px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-review__reply {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-200);
}
.bcn-review__node--reply .esa-avatar {
  --_avatar-bg: var(--color-secondary);
}
.bcn-review__item + .bcn-review__item {
  margin-top: var(--spacing-200);
}
.bcn-study__rail {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  min-width: 0;
}
.bcn-study__kv {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
}
.bcn-study__kv-label {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--form-label-color);
}
.bcn-study__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-150);
}
.bcn-study__coa-link,
.bcn-study__coa-ref {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border);
}
.bcn-study__coa-link {
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-study__coa-ref {
  color: var(--color-text-tertiary);
}
.bcn-study__deliv,
.bcn-study__roles {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-study__deliv-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-200);
}
.bcn-study__deliv-name {
  font-size: var(--type-size-100);
  color: var(--color-text-primary);
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
.esa-collapsible {
  border: 1px solid var(--collapsible-border-color, var(--color-border, #e5e5e5));
  border-radius: var(--collapsible-radius, var(--radius-300, 0.5rem));
  background: var(--collapsible-bg, var(--color-surface, #fff));
}
.esa-collapsible__summary {
  display: flex;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--collapsible-padding-x, var(--spacing-400, 1rem));
  font-size: var(--type-size-150, 0.9375rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--collapsible-title-color, var(--color-text-primary, #171717));
  cursor: pointer;
  list-style: none;
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.esa-collapsible__summary:after {
  content: "";
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--color-text-tertiary, #737373);
  border-bottom: 2px solid var(--color-text-tertiary, #737373);
  transform: rotate(-45deg);
  transition: transform 0.15s ease;
  margin-left: auto;
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--collapsible-padding-x, var(--spacing-400, 1rem)) var(--spacing-400, 1rem);
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
.bcn-key-value__val {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
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
.esa-badge--secondary {
  --_badge-bg: var(--color-secondary, #5787b9);
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
.esa-badge--warning {
  --_badge-bg: var(--color-warning, #f59e0b);
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
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
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
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--avatar-bg` | `hsl(200 45% 65%)` | component |
| `--avatar-radius` | `9999px` | component |
| `--avatar-size-md` | `40px` | component |
| `--avatar-size-sm` | `28px` | component |
| `--avatar-text-color` | `#ffffff` | component |
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
| `--collapsible-bg` | `#ffffff` | component |
| `--collapsible-border-color` | `#dcdcdc` | component |
| `--collapsible-padding-x` | `1rem` | component |
| `--collapsible-radius` | `.5rem` | component |
| `--collapsible-title-color` | `#3d3d3d` | component |
| `--color-accent` | `#f9a134` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-info` | `#228be6` | semantic |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-secondary` | `#00918b` | semantic |
| `--color-success` | `#2e7571` | semantic |
| `--color-surface` | `#ffffff` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#ffffff` | semantic |
| `--color-text-link` | `#005862` | semantic |
| `--color-text-muted` | `#7c7c7c` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--color-warning` | `#f2770e` | semantic |
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
| `--pill-bg` | `#efefef` | component |
| `--pill-border-color` | `#efefef` | component |
| `--pill-height-md` | `28px` | component |
| `--pill-height-sm` | `22px` | component |
| `--pill-radius` | `9999px` | component |
| `--pill-text-color` | `#3d3d3d` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
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
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
