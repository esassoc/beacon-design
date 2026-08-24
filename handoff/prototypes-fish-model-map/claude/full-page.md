# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-fish-model-map** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/fish-model-map/
- **Section element:** `<page>`
- **Components:** esa-alert-box (hub), esa-badge (hub), esa-button (hub), esa-card (hub), esa-empty-state (hub), esa-icon (hub), esa-loading-spinner (hub), esa-pill (hub)

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
      <span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
        ><a
          class="esa-button__native typography-microcopy-md"
          href="/beacon-design/prototypes/settings"
          aria-label="Admin settings"
          title="Admin settings"
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
              <path
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
              ></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </span> </a
      ></span>
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
              <a href="/beacon-design/prototypes/fish-science-plan" class="nav-sublink">
                Science Plan
              </a>
            </li>
            <li class="nav-item">
              <a href="/beacon-design/prototypes/fish-gantt" class="nav-sublink">
                Study Planning
              </a>
            </li>
            <li class="nav-item">
              <a href="#model-map" class="nav-sublink active"> Data Model </a>
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
      <!-- bcn-lego-checked: esa-breadcrumbs exists, but this whole layout is a deliberate
     VERBATIM port of prod's page-layout + breadcrumbs (see the file header) so that
     ported Angular views match the live app; the lego has a different anatomy (no
     home glyph, its own spacing) and swapping it would restyle the breadcrumb row on
     all 39 pages at once. That migration is its own decision, not a side effect of
     moving where the row sits. Only the POSITION and an end slot changed here. -->
      <div class="page-layout">
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
              <span class="breadcrumb-item" aria-current="page"> Data Model </span>
            </div>
          </nav>
        </section>
        <div class="page-layout__container">
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
                Data Model
              </h1>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="bcn-model-diagram">
              <!-- ── Band 1 · Regulatory sources ── -->
              <section class="bcn-model-diagram__band">
                <h2 class="bcn-model-diagram__band-title">Regulatory sources</h2>
                <div class="bcn-model-diagram__row bcn-model-diagram__row--pair">
                  <article class="bcn-model-diagram__card" data-tone="external">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">Commitment (COA)</span>
                      <span class="bcn-model-diagram__chip" data-tone="external">Data Catalog</span>
                      <span class="bcn-model-diagram__chip" data-tone="external">external</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">
                      The ITP Condition of Approval — lives in Beacon’s Data Catalog, outside this
                      fixture. In prod the deadline citation text is THIS record.
                    </p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname">coa number</code>
                        <span class="bcn-model-diagram__fnote"
                          >"10.19" — the tracked grain; studies ref 10.19.x within it</span
                        >
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">condition text</code>
                        <span class="bcn-model-diagram__fnote">the regulatory quote</span>
                      </li>
                    </ul>
                  </article>
                  <article class="bcn-model-diagram__card" data-tone="stored">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">Milestone</span>
                      <span class="bcn-model-diagram__chip" data-tone="stored">anchor</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">
                      The immovable engineering / regulatory anchors that back-planning starts from.
                    </p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname">kind</code>
                        <span class="bcn-model-diagram__fnote"
                          >design · construction · operations · phase</span
                        >
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">month (· endMonth)</code>
                        <span class="bcn-model-diagram__fnote">phases carry a span</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">citation</code>
                        <span class="bcn-model-diagram__fnote">MMRP / ITP source line</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </section>
              <div class="bcn-model-diagram__flow" aria-hidden="true">
                <span class="bcn-model-diagram__flow-label"
                  >coaRef references · drivenBy anchors</span
                >
              </div>
              <!-- ── Band 2 · The one model (stored) ── -->
              <section class="bcn-model-diagram__band" data-tone="model">
                <h2 class="bcn-model-diagram__band-title">
                  The one model — stored in fish-plan.ts
                </h2>
                <p class="bcn-model-diagram__band-note">
                  One module owns everything below: TODAY (the plan's current-date anchor), the
                  work-breakdown forest, the milestones, and the authored satellites. The
                  type-prefixed id is the record's identity; the COA dot-number rides along as a
                  reference. Status, span, and funding are never stored on parents — they roll up.
                </p>
                <div class="bcn-model-diagram__spine">
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--tier">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">Commitment</span>
                      <span class="bcn-model-diagram__chip" data-tone="id">COA-10.19</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">
                      A tracked Condition of Approval — the Beacon Commitment this work satisfies.
                    </p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname" data-ref="commitment">id</code>
                        <span class="bcn-model-diagram__fnote">IS the COA — e.g. "COA-10.19"</span>
                      </li>
                      <li><code class="bcn-model-diagram__fname">name</code></li>
                      <li>
                        <code class="bcn-model-diagram__fname">funding[]</code>
                        <span class="bcn-model-diagram__fnote">per water year</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">children[]</code>
                        <span class="bcn-model-diagram__fnote">→ Study</span>
                      </li>
                    </ul>
                  </article>
                  <div class="bcn-model-diagram__link" aria-hidden="true">
                    <span class="bcn-model-diagram__link-label">1 — n</span>
                  </div>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--tier">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">Study</span>
                      <span class="bcn-model-diagram__chip" data-tone="id">STY-###</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">
                      An ITP study within the commitment; where the work is led &amp; scheduled.
                    </p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname" data-ref="commitment">coaRef</code>
                        <span class="bcn-model-diagram__fnote"
                          >sub-study number (e.g. 10.19.1) — within the commitment</span
                        >
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">lead</code>
                        <span class="bcn-model-diagram__fnote">accountable org</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">roles[]</code>
                        <span class="bcn-model-diagram__fnote">11 RACI work-streams</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname" data-ref="milestone">drivenBy</code>
                        <span class="bcn-model-diagram__fnote">→ Milestone</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">deadline</code>
                        <span class="bcn-model-diagram__fnote"
                          >due month from the condition text</span
                        >
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">children[]</code>
                        <span class="bcn-model-diagram__fnote">→ Sub-study</span>
                      </li>
                    </ul>
                  </article>
                  <div class="bcn-model-diagram__link" aria-hidden="true">
                    <span class="bcn-model-diagram__link-label">1 — n</span>
                  </div>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--tier">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">Sub-study</span>
                      <span class="bcn-model-diagram__chip" data-tone="id">SUB-###</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">A line of work inside a study.</p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname" data-ref="commitment">coaRef</code>
                        <span class="bcn-model-diagram__fnote">dot-letter reference</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">constraints[]</code>
                        <span class="bcn-model-diagram__fnote">back-planning rationale</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">children[]</code>
                        <span class="bcn-model-diagram__fnote">→ Task</span>
                      </li>
                    </ul>
                  </article>
                  <div class="bcn-model-diagram__link" aria-hidden="true">
                    <span class="bcn-model-diagram__link-label">1 — n</span>
                  </div>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--tier">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">Task</span>
                      <span class="bcn-model-diagram__chip" data-tone="id">TSK-###</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">The schedulable month-by-month unit.</p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname">startMonth · endMonth</code>
                        <span class="bcn-model-diagram__fnote">the schedule lives HERE</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">owner</code>
                        <span class="bcn-model-diagram__fnote">who does the work</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">status</code>
                        <span class="bcn-model-diagram__fnote">not-started → complete</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">funding[]</code>
                        <span class="bcn-model-diagram__fnote">per water year</span>
                      </li>
                    </ul>
                  </article>
                </div>
                <div class="bcn-model-diagram__row bcn-model-diagram__row--satellites">
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--satellite">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">RoleAssignment</span>
                      <span class="bcn-model-diagram__chip">on Study</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">One RACI work-stream assignment.</p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname">workstream</code>
                        <span class="bcn-model-diagram__fnote"
                          >lead · design · implementation · …</span
                        >
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">org · person? · tentative?</code>
                      </li>
                    </ul>
                  </article>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--satellite">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">FundingEntry</span>
                      <span class="bcn-model-diagram__chip">on any node</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">
                      Planned dollars entered at a node; task dollars sum upward.
                    </p>
                    <ul class="bcn-model-diagram__fields">
                      <li><code class="bcn-model-diagram__fname">waterYear · amount</code></li>
                    </ul>
                  </article>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--satellite">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">PlanAssumption</span>
                      <span class="bcn-model-diagram__chip">authored</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">
                      The judgment stratum — positions &amp; open questions no derivation can
                      produce.
                    </p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname">kind</code>
                        <span class="bcn-model-diagram__fnote">assumption · question</span>
                      </li>
                      <li><code class="bcn-model-diagram__fname">text</code></li>
                    </ul>
                  </article>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--satellite">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">StudyProfile</span>
                      <span class="bcn-model-diagram__chip">authored · by COA</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">
                      The science-plan satellite per COA: everything people WRITE about a study,
                      never its execution facts.
                    </p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname">sketch</code>
                        <span class="bcn-model-diagram__fnote">the 9-field study-plan form</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">reviewComments</code>
                        <span class="bcn-model-diagram__fnote">the CDFW comment cycle</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname"
                          >deliverables · planning · crosswalk facts</code
                        >
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">informs · informedBy</code>
                        <span class="bcn-model-diagram__fnote">COA dependency references</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </section>
              <div class="bcn-model-diagram__flow" aria-hidden="true">
                <span class="bcn-model-diagram__flow-label"
                  >derived on every render — never stored</span
                >
              </div>
              <!-- ── Band 3 · Computed at render ── -->
              <section class="bcn-model-diagram__band">
                <h2 class="bcn-model-diagram__band-title">Computed at render</h2>
                <div class="bcn-model-diagram__row bcn-model-diagram__row--pair">
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--computed">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">NodeRollUp</span>
                      <span class="bcn-model-diagram__chip" data-tone="computed"
                        >computeRollUp()</span
                      >
                    </header>
                    <p class="bcn-model-diagram__purpose">
                      Aggregates Task → Sub-study → Study → Commitment on every render.
                    </p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname">span envelope</code>
                        <span class="bcn-model-diagram__fnote"
                          >min start · max end of the subtree</span
                        >
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">aggregate status</code>
                        <span class="bcn-model-diagram__fnote"
                          >blocked &gt; at-risk &gt; complete &gt; on-track</span
                        >
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">health counts</code>
                        <span class="bcn-model-diagram__fnote"
                          >on track · at risk · blocked · complete</span
                        >
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">totalFunding · fundingByYear</code>
                      </li>
                    </ul>
                  </article>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--computed">
                    <header class="bcn-model-diagram__card-head">
                      <span class="bcn-model-diagram__card-name">Readiness chains</span>
                      <span class="bcn-model-diagram__chip" data-tone="computed">per study</span>
                    </header>
                    <p class="bcn-model-diagram__purpose">
                      The back-planning derivation the old memo maintained by hand.
                    </p>
                    <ul class="bcn-model-diagram__fields">
                      <li>
                        <code class="bcn-model-diagram__fname">must-start-by</code>
                        <span class="bcn-model-diagram__fnote">earliest task start</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">must-finish-by</code>
                        <span class="bcn-model-diagram__fnote">the study deadline</span>
                      </li>
                      <li>
                        <code class="bcn-model-diagram__fname">countdowns · flags</code>
                        <span class="bcn-model-diagram__fnote"
                          >"needs kickoff", "past deadline"</span
                        >
                      </li>
                    </ul>
                  </article>
                </div>
              </section>
              <div class="bcn-model-diagram__flow" aria-hidden="true">
                <span class="bcn-model-diagram__flow-label">rendered into</span>
              </div>
              <!-- ── Band 4 · Projections ── -->
              <section class="bcn-model-diagram__band">
                <h2 class="bcn-model-diagram__band-title">
                  Projections — one model, five surfaces
                </h2>
                <div class="bcn-model-diagram__row bcn-model-diagram__row--projections">
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--projection">
                    <span class="bcn-model-diagram__card-name">Gantt</span>
                    <p class="bcn-model-diagram__purpose">
                      the interactive plan — light CRUD at every tier via wbApi
                    </p>
                  </article>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--projection">
                    <span class="bcn-model-diagram__card-name">Roles matrix</span>
                    <p class="bcn-model-diagram__purpose">
                      the RACI pivot — study × 11 work-streams
                    </p>
                  </article>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--projection">
                    <span class="bcn-model-diagram__card-name">Readiness</span>
                    <p class="bcn-model-diagram__purpose">
                      milestones → deadline chains → field-season windows
                    </p>
                  </article>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--projection">
                    <span class="bcn-model-diagram__card-name">Detail pages</span>
                    <p class="bcn-model-diagram__purpose">
                      per-record: tree traversal, heavy editing, the authored profile
                    </p>
                  </article>
                  <article class="bcn-model-diagram__card bcn-model-diagram__card--projection">
                    <span class="bcn-model-diagram__card-name">Exports</span>
                    <p class="bcn-model-diagram__purpose">
                      PDF timelines memo · XLS workbooks — documents as outputs
                    </p>
                  </article>
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
    src="/beacon-design/_astro/BcnOmniSearch.astro_astro_type_script_index_0_lang.BrpLbMy2.js"
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
    <!-- Attach Evidence of Compliance — icon-only; the tooltip host carries the drawer's open hook.
       GLYPH NOTE: the spoke's committed evidence glyph is the paperclip in global-search's
       SCOPES (what the ⌘K palette shows for Evidence of Compliance), but esa-icon-button
       forwards only a registry `name` — no custom `paths` — and the hub registry has no
       paperclip. Using 'file-text' until paperclip is registered in the hub, the same
       constraint and the same fix as 'notepad-text' below.
       This slot used to hold a duplicate Search button. It was replaced (product meeting
       2026-08-04): search already has the top bar's own field and ⌘K, and this bar is
       where Beacon's bottom affordances live, which is where the global evidence drawer
       belongs. -->
    <esa-tooltip
      class="bcn-help-bar__tooltip"
      text="Attach Evidence of Compliance"
      position="above"
      data-evidence-trigger="true"
    >
      <span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          aria-label="Attach Evidence of Compliance"
          title="Attach Evidence of Compliance"
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          </span></button
      ></span>
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
        <span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-md"
            type="button"
            aria-label="What's new"
            title="What's new"
            aria-expanded="false"
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
            </span></button
        ></span>
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
    src="/beacon-design/_astro/BcnHelpBar.astro_astro_type_script_index_0_lang.F3A0cH0L.js"
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
                data-article-id="what-is-a-commitment"
                data-kind="glossary"
                data-title="Commitment"
                data-summary="One discrete obligation, recorded in its source document’s original language."
              >
                <span class="bcn-gd-row__text">
                  <span class="bcn-gd-row__title">Commitment</span>
                  <span class="bcn-gd-row__sub"
                    >One discrete obligation, recorded in its source document’s original
                    language.</span
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
                    >A distinct place or package of work within a project, tracked
                    independently.</span
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
        <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-md4nwazs="">
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
            data-astro-cid-md4nwazs=""
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
                  ><span
                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                  >
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
                  ><span
                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                  >
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
    src="/beacon-design/_astro/BcnGuidanceDrawer.astro_astro_type_script_index_0_lang.Cn8RQg9O.js"
  ></script>
  <!-- The global evidence workspace — the bar's third affordance. App-shell
         furniture by design: it opens from ANY page, rises from the bottom, and
         layers above dialogs (see BcnBottomDrawer for the stack). Same root
         placement as the drawers above, for the same reason. -->
  <script type="module">
    document.addEventListener(
      "click",
      (t) => {
        const s = t.target.closest?.("[data-esa-pill-remove]");
        if (!s) return;
        t.stopPropagation();
        const e = s.closest(".esa-pill");
        e && (e.dispatchEvent(new CustomEvent("removed", { bubbles: !0 })), e.remove());
      },
      !0,
    );
  </script>
  <script type="module">
    document.addEventListener("click", (o) => {
      const n = o.target.closest?.("[data-esa-alert-dismiss]");
      if (!n) return;
      const t = n.closest(".esa-alert-box");
      if (!t) return;
      const s = Array.from(document.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
          (e) => !t.contains(e) && e.offsetParent !== null,
        ),
        r =
          s.find((e) => t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING) ??
          s[s.length - 1];
      ((t.style.display = "none"),
        t.dispatchEvent(new CustomEvent("dismissed", { bubbles: !0 })),
        r?.focus());
    });
  </script>
  <bcn-bottom-drawer id="bcn-evidence-drawer" class="bcn-bottom-drawer">
    <div class="bcn-bottom-drawer__backdrop" data-drawer-backdrop=""></div>
    <div
      class="bcn-bottom-drawer__panel"
      data-drawer-panel=""
      role="dialog"
      aria-modal="true"
      aria-label="Add Evidence of Compliance"
      tabindex="-1"
    >
      <header class="bcn-bottom-drawer__head">
        <div class="bcn-bottom-drawer__headslot">
          <div class="bcn-ev__head"><h2 class="bcn-ev__title">Add Evidence of Compliance</h2></div>
        </div>
        <span class="bcn-bottom-drawer__close" data-drawer-close="">
          <span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              aria-label="Close"
              title="Close"
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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </span></button
          ></span>
        </span>
      </header>
      <div class="bcn-bottom-drawer__body">
        <div class="bcn-ev__panels">
          <div class="bcn-ev__pane bcn-ev__pane--left">
            <section class="bcn-ev-staging" aria-labelledby="bcn-ev-staging-title">
              <header class="bcn-ev-staging__head">
                <h3 class="bcn-ev-staging__title" id="bcn-ev-staging-title">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true">
                    <svg
                      width="16"
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
                        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                      ></path>
                    </svg>
                  </span>
                  Evidence
                </h3>
              </header>
              <!-- Two tabs: intake, then the list you drag from. The controller sets the labels and
       keeps a count badge on the list tab, so uploading on tab 1 has visible consequences
       even though it leaves you where you are. -->
              <div class="bcn-ev-staging__tabs">
                <esa-tab-layout
                  data-staging-tabs="true"
                  appearance="underline"
                  size="sm"
                  variant="underline"
                ></esa-tab-layout>
              </div>
              <!-- ── Tab 1 · Upload ────────────────────────────────────────────────────── -->
              <div
                class="bcn-ev-staging__panel bcn-ev-staging__panel--upload"
                data-staging-panel="upload"
              >
                <!-- The zone owns the WHOLE tab while it is the only thing to do here, and yields the
         moment there is a draft to show. No standing caption underneath: an empty tab whose
         one affordance fills it does not need to be told what it is for. -->
                <div class="bcn-ev-staging__drop" data-upload-zone="">
                  <esa-file-upload
                    label="Drop files here, or browse"
                    multiple="true"
                    max-size-mb="50"
                    data-staging-dropzone="true"
                    name="files"
                    data-bcn-chrome-trimmed="true"
                  ></esa-file-upload>
                </div>
                <!-- ── The draft ──────────────────────────────────────────────────────────
         One card, however many files land in it — this IS the "several files, one piece of
         evidence" model, made by the act of dropping rather than explained in copy. Always
         expanded: a draft you are still assembling has nothing worth hiding, so it carries
         no disclosure toggle at all. -->
                <div class="bcn-ev-staging__draft" data-draft="" hidden="">
                  <div class="esa-card esa-card--outlined">
                    <div class="esa-card__body typography-body-md">
                      <div class="bcn-ev-draft">
                        <div class="bcn-ev-draft__titlerow">
                          <h4 class="bcn-ev-draft__title" data-draft-title=""></h4>
                          <!-- Reuses bcn-ev-card__count, the staged cards' class, rather than a draft-only
                 copy: the border-only pill is already defined once there, and a second
                 definition is how the two would drift. -->
                          <span class="bcn-ev-card__count" data-draft-count="">
                            <span
                              class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                            >
                              <span class="esa-pill__label"></span>
                            </span>
                          </span>
                          <!-- A draft is unsaved BY DEFINITION — it exists only until Save commits it — so
                 this is static rather than toggled. Same glyph, wording and pink as the
                 drawer footer's marker: one condition, stated the same way wherever it
                 appears. -->
                          <span class="bcn-ev-draft__unsaved">
                            <span class="esa-icon esa-icon--sm" aria-hidden="true">
                              <svg
                                width="16"
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
                            Unsaved
                          </span>
                        </div>
                        <p class="bcn-ev-draft__notes" data-draft-notes=""></p>
                        <div class="bcn-ev-draft__filesrow">
                          <p class="bcn-ev-draft__fileslabel">Files</p>
                          <ul class="bcn-ev-draft__files" data-draft-files=""></ul>
                        </div>
                        <!-- Windows order — primary left of Cancel inside a right-aligned group, the same
               arrangement the drawer footer uses. -->
                        <footer class="bcn-ev-draft__foot">
                          <span data-draft-add="">
                            <span
                              class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                              >
                                <span class="esa-button__label">Save</span>
                              </button></span
                            >
                          </span>
                          <span data-draft-cancel="">
                            <span
                              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                              >
                                <span class="esa-button__label">Cancel</span>
                              </button></span
                            >
                          </span>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- One file pill, for filling in a NEW_SLOTS card at runtime. Cloned, never
         hand-written, so runtime-built markup still comes from the legos. -->
                <template data-file-pill="">
                  <li data-astro-cid-xyosy2wp="">
                    <span
                      class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                      data-astro-cid-heggk5tk=""
                    >
                      <span class="esa-pill__label" data-astro-cid-heggk5tk=""></span>
                    </span>
                  </li>
                </template>
                <!-- One draft file row, same bridge: <template> + clone, because Astro legos are
         compile-time and cannot be constructed from JS. -->
                <template data-draft-file-row="">
                  <li class="bcn-ev-draft__file" data-astro-cid-xyosy2wp="">
                    <span class="bcn-ev-draft__filename" data-astro-cid-xyosy2wp=""></span>
                    <span class="bcn-ev-draft__filesize" data-astro-cid-xyosy2wp=""></span>
                    <span class="bcn-ev-draft__fileremove" data-astro-cid-xyosy2wp="">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        data-astro-cid-ojgm2tjl=""
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Remove this file from the evidence"
                          title="Remove this file from the evidence"
                          data-astro-cid-xyosy2wp="true"
                          data-astro-cid-ojgm2tjl=""
                        >
                          <span
                            class="esa-icon esa-icon--sm"
                            aria-hidden="true"
                            data-astro-cid-md4nwazs=""
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              focusable="false"
                              data-astro-cid-md4nwazs=""
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </li>
                </template>
              </div>
              <!-- ── Tab 2 · The list — the one drag source ────────────────────────────── -->
              <div
                class="bcn-ev-staging__panel bcn-ev-staging__panel--list"
                data-staging-panel="list"
                hidden=""
              >
                <div class="bcn-ev-staging__search">
                  <div class="bcn-ev-search">
                    <span class="bcn-ev-search__icon" aria-hidden="true">
                      <span class="esa-icon esa-icon--sm" aria-hidden="true">
                        <svg
                          width="16"
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
                    <esa-combobox
                      data-staging-existing="true"
                      mode="autocomplete"
                      size="md"
                      aria-label="Search evidence already in Beacon"
                      placeholder="Search evidence already in Beacon"
                    ></esa-combobox>
                  </div>
                </div>
                <div class="bcn-ev-staging__scroll">
                  <!-- Pre-rendered pool; the script reveals the staged ones. Each card is a DRAG
           SOURCE — grabbed by its grip, exactly as the Setup Wizard's requirement rows
           are. `draggable` is set by the controller, not here, so a card whose evidence
           is already on every action in view can have it withdrawn. -->
                  <ul class="bcn-ev-staging__list" data-staging-list="">
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-staged-swha"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-staged-swha"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-staged-swha"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Swainson’s hawk nest survey — Jul 14</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">3 files</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-staged-swha"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Swainson’s hawk nest survey — Jul 14"
                                    title="Remove Swainson’s hawk nest survey — Jul 14"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Swainson’s hawk nest survey — Jul 14"
                                data-evidence-toggle="ev-staged-swha"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Two active nests recorded along the northern levee; surveyed by C.
                              Anderson.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >SWHA-nest-survey-2026-07-14.pdf</span
                                    >
                                  </span>
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >SWHA-nest-locations-2026-07-14.kmz</span
                                    >
                                  </span>
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >SWHA-survey-photos-2026-07-14.zip</span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-staged-training"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-staged-training"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-staged-training"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Worker training roster — Jul 16</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">1 file</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-staged-training"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Worker training roster — Jul 16"
                                    title="Remove Worker training roster — Jul 16"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Worker training roster — Jul 16"
                                data-evidence-toggle="ev-staged-training"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              34 crew signatures against the Q3 awareness curriculum.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >WEAP-training-roster-2026-07-16.pdf</span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-ggs-survey"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-ggs-survey"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-ggs-survey"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Giant garter snake preconstruction survey — Jun 29</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">1 file</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-ggs-survey"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Giant garter snake preconstruction survey — Jun 29"
                                    title="Remove Giant garter snake preconstruction survey — Jun 29"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Giant garter snake preconstruction survey — Jun 29"
                                data-evidence-toggle="ev-exist-ggs-survey"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              No individuals observed; upland refugia mapped along the north levee
                              toe.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >GGS-preconstruction-survey-2026-06-29.pdf</span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-biologist-quals"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-biologist-quals"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-biologist-quals"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Qualified biologist statements of qualification</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">4 files</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-biologist-quals"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Qualified biologist statements of qualification"
                                    title="Remove Qualified biologist statements of qualification"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Qualified biologist statements of qualification"
                                data-evidence-toggle="ev-exist-biologist-quals"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Four approved biologists covering avian, herpetological and botanical
                              scopes.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label">SOQ-C-Anderson.pdf</span>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label">SOQ-M-Okafor.pdf</span>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label">SOQ-R-Delgado.pdf</span>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label">SOQ-J-Whitfield.pdf</span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-noise-readings"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-noise-readings"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-noise-readings"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Noise level readings — week of Jul 6</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">1 file</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-noise-readings"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Noise level readings — week of Jul 6"
                                    title="Remove Noise level readings — week of Jul 6"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Noise level readings — week of Jul 6"
                                data-evidence-toggle="ev-exist-noise-readings"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Five sensitive receptors, all below the 75 dBA construction threshold.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >noise-readings-2026-07-06.xlsx</span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-swppp-inspection"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-swppp-inspection"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-swppp-inspection"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >SWPPP inspection report — Jul 9</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">1 file</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-swppp-inspection"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove SWPPP inspection report — Jul 9"
                                    title="Remove SWPPP inspection report — Jul 9"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand SWPPP inspection report — Jul 9"
                                data-evidence-toggle="ev-exist-swppp-inspection"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Two corrective actions logged at the southern stockpile; both closed
                              Jul 11.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >SWPPP-inspection-2026-07-09.pdf</span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-dust-log"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-dust-log"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-dust-log"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Dust control log — Jul 2026</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">1 file</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-dust-log"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Dust control log — Jul 2026"
                                    title="Remove Dust control log — Jul 2026"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Dust control log — Jul 2026"
                                data-evidence-toggle="ev-exist-dust-log"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Daily watering passes and wind-speed shutdowns for the month to date.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >dust-control-log-2026-07.pdf</span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-haul-agreement"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-haul-agreement"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-haul-agreement"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Executed haul route maintenance agreement</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">1 file</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-haul-agreement"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Executed haul route maintenance agreement"
                                    title="Remove Executed haul route maintenance agreement"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Executed haul route maintenance agreement"
                                data-evidence-toggle="ev-exist-haul-agreement"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Countersigned by the county public works director.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >haul-route-agreement-executed.pdf</span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-cultural-brief"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-cultural-brief"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-cultural-brief"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Cultural resources monitoring brief — Jul 8</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">1 file</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-cultural-brief"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Cultural resources monitoring brief — Jul 8"
                                    title="Remove Cultural resources monitoring brief — Jul 8"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Cultural resources monitoring brief — Jul 8"
                                data-evidence-toggle="ev-exist-cultural-brief"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              No cultural material encountered during the utility trench excavation.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >cultural-monitoring-brief-2026-07-08.pdf</span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-nesting-bird-sweep"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-nesting-bird-sweep"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-nesting-bird-sweep"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Nesting bird sweep — Jun 22</a
                                >
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">2 files</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-nesting-bird-sweep"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Nesting bird sweep — Jun 22"
                                    title="Remove Nesting bird sweep — Jun 22"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Nesting bird sweep — Jun 22"
                                data-evidence-toggle="ev-exist-nesting-bird-sweep"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Two mourning dove nests flagged with 50-ft buffers; released Jul 6.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >nesting-bird-sweep-2026-06-22.pdf</span
                                    >
                                  </span>
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  >
                                    <span class="esa-pill__label"
                                      >nest-buffer-map-2026-06-22.pdf</span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-new-1"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-new-1"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-new-1"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                ></a>
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">0 files</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span class="bcn-ev-card__remove" data-staging-remove="ev-new-1">
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove "
                                    title="Remove "
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand "
                                data-evidence-toggle="ev-new-1"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc"></p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-new-2"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-new-2"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-new-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                ></a>
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">0 files</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span class="bcn-ev-card__remove" data-staging-remove="ev-new-2">
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove "
                                    title="Remove "
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand "
                                data-evidence-toggle="ev-new-2"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc"></p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-new-3"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-new-3"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-new-3"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                ></a>
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">0 files</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span class="bcn-ev-card__remove" data-staging-remove="ev-new-3">
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove "
                                    title="Remove "
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand "
                                data-evidence-toggle="ev-new-3"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc"></p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-new-4"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-new-4"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </span>
                            </span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. -->
                                <a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-new-4"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                ></a>
                              </p>
                              <span class="bcn-ev-card__count">
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                >
                                  <span class="esa-pill__label">0 files</span>
                                </span>
                              </span>
                              <esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                              >
                                <span class="bcn-countchip__stack">
                                  <span class="bcn-countchip__icon" aria-hidden="true">
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
                                  </span>
                                  <span class="bcn-countchip__num" aria-hidden="true">
                                    <span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    >
                                  </span>
                                  <span class="bcn-countchip__sr">On 0 actions</span>
                                </span>
                              </esa-tooltip>
                              <span class="bcn-ev-card__remove" data-staging-remove="ev-new-4">
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove "
                                    title="Remove "
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                            <span class="bcn-ev-card__toggle">
                              <button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand "
                                data-evidence-toggle="ev-new-4"
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
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </button>
                            </span>
                            <!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc"></p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <!-- Nothing staged yet. -->
                  <div class="bcn-ev-staging__empty" data-staging-empty="">
                    <div class="esa-empty-state esa-empty-state--sm">
                      <h3 class="esa-empty-state__title typography-label-sm-strong">
                        Nothing added yet
                      </h3>
                      <p class="esa-empty-state__description typography-body-xs">
                        Search above for evidence already in Beacon, or upload a file on the Add New
                        tab.
                      </p>
                      <div class="esa-empty-state__actions typography-label-md"></div>
                    </div>
                  </div>
                </div>
                <!-- The match utility lives with the evidence it reads, not with the actions it
         proposes — and only on this tab, since it has nothing to read from the uploader. -->
                <footer class="bcn-ev-staging__foot">
                  <span class="bcn-ev-staging__find" data-targets-find="">
                    <span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button class="esa-button__native typography-microcopy-xs" type="button">
                        <span class="esa-button__label">Find matches</span>
                      </button></span
                    >
                  </span>
                </footer>
              </div>
            </section>
          </div>
          <!-- The seam is a 1px grid track — the rule itself, nothing more. It costs the layout
         no width, so either column can run right up to the line. -->
          <div class="bcn-ev__joint" aria-hidden="true"></div>
          <div class="bcn-ev__pane bcn-ev__pane--right">
            <section class="bcn-ev-targets" aria-labelledby="bcn-ev-targets-title">
              <header class="bcn-ev-targets__head">
                <h3 class="bcn-ev-targets__title" id="bcn-ev-targets-title">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true">
                    <svg
                      width="16"
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
                  Actions
                  <span
                    class="bcn-ev-targets__count"
                    data-targets-count=""
                    aria-hidden="true"
                  ></span>
                </h3>
              </header>
              <!-- The three facets on a ruled row, NOT in a card: its bottom border is the same
       hairline the Evidence column's tab strip draws, at the same height, so the two
       columns share one line across the seam instead of each starting differently.
       The scope lives HERE, not in the drawer header: it governs this column and nothing
       else. Component and Phase are the dimensions the Setup Wizard's Actions step filters
       on; all three are guarded while associations are unsaved (see evidence-drawer.ts). -->
              <div class="bcn-ev-targets__filters">
                <span class="bcn-ev-targets__filter">
                  <span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-component">Component</span>
                  <esa-select
                    data-evidence-component="true"
                    size="sm"
                    searchable="true"
                    aria-labelledby="bcn-ev-flabel-component"
                  ></esa-select>
                </span>
                <span class="bcn-ev-targets__filter">
                  <span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-phase">Phase</span>
                  <esa-select
                    data-targets-phase="true"
                    size="sm"
                    aria-labelledby="bcn-ev-flabel-phase"
                  ></esa-select>
                </span>
                <span class="bcn-ev-targets__filter">
                  <span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-type">Type</span>
                  <esa-select
                    data-targets-type="true"
                    size="sm"
                    aria-labelledby="bcn-ev-flabel-type"
                  ></esa-select>
                </span>
              </div>
              <div class="bcn-ev-targets__search">
                <div class="bcn-ev-search">
                  <span class="bcn-ev-search__icon" aria-hidden="true">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
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
                  <esa-combobox
                    data-targets-search="true"
                    mode="autocomplete"
                    size="md"
                    aria-label="Search actions in this component"
                    placeholder="Search actions in this component"
                  ></esa-combobox>
                </div>
              </div>
              <div class="bcn-ev-targets__scroll">
                <!-- Working state for Find matches — replaced by rows the moment it resolves. -->
                <div class="bcn-ev-targets__working" data-targets-working="" hidden="">
                  <span class="esa-loading-spinner esa-loading-spinner--sm">
                    <span class="esa-loading-spinner__ring" role="img" aria-label="Loading"></span>
                  </span>
                  <span class="type-body-small"
                    >Reading the evidence and checking actions in this component…</span
                  >
                </div>
                <!-- Find matches must never finish silently. A utility that runs and then does nothing
         visible reads as broken, and the two ways it legitimately finds nothing — no
         evidence staged, and nothing new in scope — are different answers that deserve
         different sentences. -->
                <p
                  class="bcn-ev-targets__notice type-body-small"
                  data-targets-notice=""
                  hidden=""
                ></p>
                <!-- The one list: searched rows and suggested rows together. -->
                <ul class="bcn-ev-targets__list" data-targets-list="">
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-swha-preconstruction-survey"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Preconstruction Swainson’s hawk nest survey"
                                  data-card-toggle="act-swha-preconstruction-survey"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Preconstruction Swainson’s hawk nest survey</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-4.2</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Pre-Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-swha-preconstruction-survey"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Preconstruction Swainson’s hawk nest survey"
                                    title="Remove Preconstruction Swainson’s hawk nest survey"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-swha-preconstruction-survey"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-swha-buffer-monitoring"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Swainson’s hawk active-nest buffer monitoring"
                                  data-card-toggle="act-swha-buffer-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Swainson’s hawk active-nest buffer monitoring</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-4.5</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-swha-buffer-monitoring"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Swainson’s hawk active-nest buffer monitoring"
                                    title="Remove Swainson’s hawk active-nest buffer monitoring"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-swha-buffer-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ggs-preconstruction-survey"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Giant garter snake preconstruction survey"
                                  data-card-toggle="act-ggs-preconstruction-survey"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Giant garter snake preconstruction survey</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-6.1</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Pre-Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ggs-preconstruction-survey"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Giant garter snake preconstruction survey"
                                    title="Remove Giant garter snake preconstruction survey"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ggs-preconstruction-survey"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-qualified-biologist"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Retain qualified biologist for covered species"
                                  data-card-toggle="act-qualified-biologist"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Retain qualified biologist for covered species</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-1.1</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Tracking</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Implementation Planning</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-qualified-biologist"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Retain qualified biologist for covered species"
                                    title="Remove Retain qualified biologist for covered species"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-qualified-biologist"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-worker-training"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Worker environmental awareness training"
                                  data-card-toggle="act-worker-training"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Worker environmental awareness training</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span>
                                  <esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                  >
                                    <span class="bcn-ev-row__more" aria-expanded="false">
                                      <span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 2 more</span
                                      >
                                    </span>
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle type-caption">Commitments</p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-6.4</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">CUL-1.2</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </esa-popover>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Tracking</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Pre-Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-worker-training"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Worker environmental awareness training"
                                    title="Remove Worker environmental awareness training"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-worker-training"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-daily-biological-monitoring"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Daily biological monitoring during ground disturbance"
                                  data-card-toggle="act-daily-biological-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Daily biological monitoring during ground disturbance</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-8.4</span>
                                  <esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                  >
                                    <span class="bcn-ev-row__more" aria-expanded="false">
                                      <span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 3 more</span
                                      >
                                    </span>
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle type-caption">Commitments</p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-8.4</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-4.5</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-6.1</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">CUL-3.3</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </esa-popover>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-daily-biological-monitoring"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Daily biological monitoring during ground disturbance"
                                    title="Remove Daily biological monitoring during ground disturbance"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-daily-biological-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-monthly-compliance-report"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Monthly compliance monitoring report"
                                  data-card-toggle="act-monthly-compliance-report"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Monthly compliance monitoring report</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">REP-3.1</span>
                                  <esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                  >
                                    <span class="bcn-ev-row__more" aria-expanded="false">
                                      <span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 3 more</span
                                      >
                                    </span>
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle type-caption">Commitments</p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">REP-3.1</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">REP-3.4</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">REP-5.1</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">ADM-2.2</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </esa-popover>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Reporting</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-monthly-compliance-report"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Monthly compliance monitoring report"
                                    title="Remove Monthly compliance monitoring report"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-monthly-compliance-report"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-noise-monitoring"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Construction noise level monitoring at sensitive receptors"
                                  data-card-toggle="act-noise-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Construction noise level monitoring at sensitive receptors</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">NOI-2.2</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-noise-monitoring"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Construction noise level monitoring at sensitive receptors"
                                    title="Remove Construction noise level monitoring at sensitive receptors"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-noise-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-dust-control-inspection"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Fugitive dust control inspection"
                                  data-card-toggle="act-dust-control-inspection"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Fugitive dust control inspection</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">AIR-1.4</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-dust-control-inspection"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Fugitive dust control inspection"
                                    title="Remove Fugitive dust control inspection"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-dust-control-inspection"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-swppp-inspection"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse SWPPP qualified-personnel site inspection"
                                  data-card-toggle="act-swppp-inspection"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >SWPPP qualified-personnel site inspection</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-5.2</span>
                                  <esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                  >
                                    <span class="bcn-ev-row__more" aria-expanded="false">
                                      <span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 1 more</span
                                      >
                                    </span>
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle type-caption">Commitments</p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">WQ-5.2</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">WQ-5.5</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </esa-popover>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-swppp-inspection"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove SWPPP qualified-personnel site inspection"
                                    title="Remove SWPPP qualified-personnel site inspection"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-swppp-inspection"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-cultural-monitoring"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Archaeological monitoring during excavation"
                                  data-card-toggle="act-cultural-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Archaeological monitoring during excavation</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">CUL-3.3</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-cultural-monitoring"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Archaeological monitoring during excavation"
                                    title="Remove Archaeological monitoring during excavation"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-cultural-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-haul-route-agreement"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Execute haul route maintenance agreement"
                                  data-card-toggle="act-haul-route-agreement"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Execute haul route maintenance agreement</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">TRA-2.1</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Tracking</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Implementation Planning</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-haul-route-agreement"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Execute haul route maintenance agreement"
                                    title="Remove Execute haul route maintenance agreement"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-haul-route-agreement"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-fish-screen-inspection"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Fish screen criteria compliance inspection"
                                  data-card-toggle="act-ib-fish-screen-inspection"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Fish screen criteria compliance inspection</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">FSH-2.1</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-fish-screen-inspection"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Fish screen criteria compliance inspection"
                                    title="Remove Fish screen criteria compliance inspection"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-fish-screen-inspection"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-inwater-work-window"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse In-water work window conformance record"
                                  data-card-toggle="act-ib-inwater-work-window"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >In-water work window conformance record</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">FSH-1.3</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Tracking</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-inwater-work-window"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove In-water work window conformance record"
                                    title="Remove In-water work window conformance record"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-inwater-work-window"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-turbidity-monitoring"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Turbidity monitoring during in-water construction"
                                  data-card-toggle="act-ib-turbidity-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Turbidity monitoring during in-water construction</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-2.4</span>
                                  <esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                  >
                                    <span class="bcn-ev-row__more" aria-expanded="false">
                                      <span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 2 more</span
                                      >
                                    </span>
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle type-caption">Commitments</p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">WQ-2.4</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">WQ-2.6</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">FSH-3.1</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </esa-popover>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-turbidity-monitoring"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Turbidity monitoring during in-water construction"
                                    title="Remove Turbidity monitoring during in-water construction"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-turbidity-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-worker-training"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Worker environmental awareness training"
                                  data-card-toggle="act-ib-worker-training"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Worker environmental awareness training</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Tracking</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Pre-Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-worker-training"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Worker environmental awareness training"
                                    title="Remove Worker environmental awareness training"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-worker-training"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-monthly-compliance-report"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Monthly compliance monitoring report"
                                  data-card-toggle="act-ib-monthly-compliance-report"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Monthly compliance monitoring report</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">REP-3.1</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Reporting</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-monthly-compliance-report"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Monthly compliance monitoring report"
                                    title="Remove Monthly compliance monitoring report"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-monthly-compliance-report"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-pile-driving-hydroacoustic"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Hydroacoustic monitoring during pile driving"
                                  data-card-toggle="act-ib-pile-driving-hydroacoustic"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Hydroacoustic monitoring during pile driving</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">FSH-4.2</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-pile-driving-hydroacoustic"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Hydroacoustic monitoring during pile driving"
                                    title="Remove Hydroacoustic monitoring during pile driving"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-pile-driving-hydroacoustic"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-tc-rtm-stockpile-inspection"
                    data-component="twin-cities-complex"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Reusable tunnel material stockpile inspection"
                                  data-card-toggle="act-tc-rtm-stockpile-inspection"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Reusable tunnel material stockpile inspection</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-7.1</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-tc-rtm-stockpile-inspection"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Reusable tunnel material stockpile inspection"
                                    title="Remove Reusable tunnel material stockpile inspection"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-tc-rtm-stockpile-inspection"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-tc-haul-route-agreement"
                    data-component="twin-cities-complex"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Execute haul route maintenance agreement"
                                  data-card-toggle="act-tc-haul-route-agreement"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Execute haul route maintenance agreement</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">TRA-2.1</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Tracking</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Implementation Planning</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-tc-haul-route-agreement"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Execute haul route maintenance agreement"
                                    title="Remove Execute haul route maintenance agreement"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-tc-haul-route-agreement"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-tc-worker-training"
                    data-component="twin-cities-complex"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Worker environmental awareness training"
                                  data-card-toggle="act-tc-worker-training"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Worker environmental awareness training</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Tracking</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Pre-Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-tc-worker-training"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Worker environmental awareness training"
                                    title="Remove Worker environmental awareness training"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-tc-worker-training"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-tc-nesting-bird-survey"
                    data-component="twin-cities-complex"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Nesting bird survey before vegetation removal"
                                  data-card-toggle="act-tc-nesting-bird-survey"
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
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </button>
                                <!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. -->
                                <span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span>
                                <span class="bcn-ev-row__name"
                                  >Nesting bird survey before vegetation removal</span
                                >
                                <span class="bcn-ev-row__codes">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-5.2</span>
                                  <!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. -->
                                  <esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                  >
                                    <span class="bcn-countchip__stack">
                                      <span class="bcn-countchip__icon" aria-hidden="true">
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
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__num" aria-hidden="true">
                                        <span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                        >
                                          <span class="esa-badge__text">0</span>
                                        </span>
                                      </span>
                                      <span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      >
                                    </span>
                                  </esa-tooltip>
                                </span>
                                <span class="bcn-ev-row__spacer" aria-hidden="true"></span>
                                <span class="bcn-ev-row__tags">
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Monitoring</span>
                                  </span>
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  >
                                    <span class="esa-badge__text">Pre-Construction</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-tc-nesting-bird-survey"
                              >
                                <span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Nesting bird survey before vegetation removal"
                                    title="Remove Nesting bird survey before vegetation removal"
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
                                    </span></button
                                ></span>
                              </span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-tc-nesting-bird-survey"
                            ></ul>
                            <p class="bcn-ev-row__hint type-body-small" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- An attached-evidence row, pre-rendered from the LEGOS once and cloned per
         attachment by the controller. Astro's legos are compile-time, so a template is how
         a runtime-built list still gets real esa-badge / esa-icon-button markup instead of
         hand-written copies of it (the same trick BcnGuidanceDrawer uses for its avatar). -->
                <template data-attached-row="">
                  <li class="bcn-ev-attached__row" data-astro-cid-5nz34ayf="">
                    <span class="bcn-ev-attached__name" data-astro-cid-5nz34ayf=""></span>
                    <span class="bcn-ev-attached__mark" hidden="" data-astro-cid-5nz34ayf="">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                        data-astro-cid-gz52qnjf=""
                      >
                        <span class="esa-badge__text" data-astro-cid-gz52qnjf="">Suggested</span>
                      </span>
                    </span>
                    <span class="bcn-ev-attached__remove" data-astro-cid-5nz34ayf="">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        data-astro-cid-ojgm2tjl=""
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Remove this evidence from the action"
                          title="Remove this evidence from the action"
                          data-astro-cid-5nz34ayf="true"
                          data-astro-cid-ojgm2tjl=""
                        >
                          <span
                            class="esa-icon esa-icon--sm"
                            aria-hidden="true"
                            data-astro-cid-md4nwazs=""
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              focusable="false"
                              data-astro-cid-md4nwazs=""
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </li>
                </template>
                <!-- Nothing on the list yet. -->
                <div class="bcn-ev-targets__empty" data-targets-empty="">
                  <div class="esa-empty-state esa-empty-state--sm">
                    <h3 class="esa-empty-state__title typography-label-sm-strong">
                      No actions selected
                    </h3>
                    <p class="esa-empty-state__description typography-body-xs">
                      Search above to add one, or run Find matches once you have added evidence.
                    </p>
                    <div class="esa-empty-state__actions typography-label-md"></div>
                  </div>
                </div>
              </div>
              <!-- ── What is outstanding ─────────────────────────────────────────────────
       Pinned BELOW the scroll rather than inside it: it summarises the whole
       column, so it must not scroll away from the changes it is counting. Shown
       only while associations are unsaved; the Add New tab's draft has its own
       marker and is not counted here. -->
              <div class="bcn-ev-targets__pending" data-targets-pending="" hidden="">
                <div class="esa-alert-box esa-alert-box--warning typography-body-sm">
                  <div class="esa-alert-box__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                  <div class="esa-alert-box__body">
                    <strong class="esa-alert-box__title typography-label-sm-strong"
                      >Unsaved changes</strong
                    >
                    <div class="esa-alert-box__message">
                      <span data-targets-pending-text=""></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <esa-confirm-dialog
          data-evidence-confirm="true"
          heading="Discard these associations?"
          message="Evidence you have attached in this session has not been saved. Changing the component or phase re-scopes the action list and discards it."
          variant="warning"
          confirm-label="Discard and change"
          cancel-label="Keep working"
        ></esa-confirm-dialog>
      </div>
      <footer class="bcn-bottom-drawer__foot">
        <div class="bcn-ev__foot">
          <div class="bcn-ev__actions">
            <span data-evidence-save="">
              <span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md esa-button--disabled"
                ><button
                  class="esa-button__native typography-microcopy-md"
                  type="button"
                  disabled=""
                >
                  <span class="esa-button__label">Save</span>
                </button></span
              >
            </span>
            <span data-drawer-close="">
              <span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
                ><button class="esa-button__native typography-microcopy-md" type="button">
                  <span class="esa-button__label">Cancel</span>
                </button></span
              >
            </span>
          </div>
        </div>
      </footer>
    </div>
  </bcn-bottom-drawer>
  <script
    type="module"
    src="/beacon-design/_astro/BcnEvidenceDrawer.astro_astro_type_script_index_0_lang.CmrMiaQW.js"
  ></script>
</div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
:root,
[data-theme="beacon"] {
  --animation-overlay-enter: 0.25s ease-out;
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
  --border-width-default: 1px;
  --button-radius-md: 0.5rem;
  --color-accent: #f76b15;
  --color-backdrop: rgba(0, 0, 0, 0.5);
  --color-background-brand: #46a758;
  --color-background-brand-hover: #3e9b4f;
  --color-background-elevation-raised: #fcfcfc;
  --color-border: #dcdcdc;
  --color-border-default: #cecece;
  --color-border-light: #efefef;
  --color-border-strong: #bdbdbd;
  --color-commitment: #58508d;
  --color-content-default: #202020;
  --color-content-default-knockout: #fcfcfc;
  --color-primary: #005862;
  --color-secondary: #00918b;
  --color-surface: #fcfcfc;
  --color-surface-sunken: #efefef;
  --color-text-inverse: #fcfcfc;
  --color-text-link: #46a758;
  --color-text-primary: #3d3d3d;
  --color-text-secondary: #525252;
  --color-text-tertiary: #656565;
  --elevation-4: 0 6px 24px -6px rgba(0, 0, 0, 0.07);
  --elevation-5: 0 8px 32px -8px rgba(0, 0, 0, 0.08);
  --font-decorative: "Besley", serif;
  --font-mono: "Roboto Mono", ui-monospace, monospace;
  --font-sans: "DM Sans", sans-serif;
  --font-weight-bold: 650;
  --font-weight-medium: 500;
  --font-weight-regular: 350;
  --font-weight-semibold: 550;
  --icon-size-md: 20px;
  --icon-size-sm: 16px;
  --icon-size-xs: 14px;
  --radius-100: 0.25rem;
  --radius-200: 0.5rem;
  --radius-300: 0.5rem;
  --radius-400: 0.75rem;
  --radius-full: 9999px;
  --radius-md: 0.5rem;
  --side-dialog-inset: 16px;
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
  --typography-label-md-font-family: "DM Sans", sans-serif;
  --typography-label-md-font-size: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --typography-label-md-font-weight: 500;
  --typography-label-md-letter-spacing: 0.01em;
  --typography-label-md-line-height: 1.6;
  --typography-microcopy-md-font-family: "DM Sans", sans-serif;
  --typography-microcopy-md-font-size: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --typography-microcopy-md-font-weight: 500;
  --typography-microcopy-md-letter-spacing: 0.01em;
  --typography-microcopy-md-line-height: 1;
}

.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
:host {
  --_width: var(--side-dialog-width, 400px);
}
dialog.panel {
  --_inset: var(--side-dialog-inset, 16px);
  position: fixed;
  top: var(--_inset);
  bottom: var(--_inset);
  margin: 0;
  border: none;
  padding: 0;
  width: min(var(--_width), calc(100vw - var(--_inset) * 2));
  max-width: none;
  max-height: none;
  background: var(--color-background-elevation-raised, #fcfcfc);
  color: var(--color-content-default, #202020);
  border-radius: var(--radius-md, 0.5rem);
  box-shadow: var(--elevation-5, 0 8px 32px -8px rgba(0, 0, 0, 0.2));
  outline: none;
  overflow: hidden;
  /* Hosts may re-point --side-dialog-inset while open (e.g. card-stacking a
         second dialog on top) — ease the reposition instead of jumping. */
  transition:
    top 220ms ease,
    right 220ms ease,
    bottom 220ms ease,
    left 220ms ease;
}
:host([position="right"]) dialog.panel {
  right: var(--_inset);
  animation: slide-right var(--animation-overlay-enter, 250ms ease-out);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
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
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.bcn-model-diagram {
  display: flex;
  flex-direction: column;
  color: var(--color-text-primary);
  font-size: var(--type-size-200);
  line-height: 1.5;
}
.bcn-model-diagram__band {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface, #fff);
}
.bcn-model-diagram__band-title {
  margin: 0;
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}
.bcn-model-diagram__row {
  display: grid;
  gap: var(--spacing-400);
}
.bcn-model-diagram__row--pair {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
.bcn-model-diagram__card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
  padding: var(--spacing-400);
  background: var(--color-surface, #fff);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-200);
}
.bcn-model-diagram__card[data-tone="external"] {
  border-style: dashed;
  border-color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 5%, white);
}
.bcn-model-diagram__card-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--spacing-200);
}
.bcn-model-diagram__card-name {
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}
.bcn-model-diagram__chip {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  padding: 0 6px;
  line-height: 1.5;
  white-space: nowrap;
}
.bcn-model-diagram__chip[data-tone="external"] {
  color: var(--color-commitment);
  border-color: var(--color-commitment);
  background: transparent;
}
.bcn-model-diagram__purpose {
  margin: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
}
.bcn-model-diagram__fields {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.bcn-model-diagram__fields li {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--spacing-200);
  padding: var(--spacing-150) 0;
  border-top: 1px solid var(--color-border-light);
  font-size: var(--type-size-150);
}
.bcn-model-diagram__fname {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-primary);
}
.bcn-model-diagram__fnote {
  color: var(--color-text-tertiary);
}
.bcn-model-diagram__flow {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) 0;
  margin-inline: var(--spacing-600);
}
.bcn-model-diagram__flow-label {
  position: relative;
  padding-left: var(--spacing-500);
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-model-diagram__flow-label:before {
  content: "";
  position: absolute;
  left: var(--spacing-200);
  top: -14px;
  bottom: -14px;
  width: 2px;
  background: var(--color-border-strong);
}
.bcn-model-diagram__flow-label:after {
  content: "";
  position: absolute;
  left: calc(var(--spacing-200) - 4px);
  bottom: -16px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid var(--color-border-strong);
}
.bcn-model-diagram__band[data-tone="model"] {
  background: var(--color-surface-sunken);
  border-color: var(--color-border-strong);
}
.bcn-model-diagram__band-note {
  margin: calc(-1 * var(--spacing-300)) 0 0;
  max-width: 72ch;
  color: var(--color-text-secondary);
}
.bcn-model-diagram__spine {
  display: flex;
  align-items: stretch;
  gap: var(--spacing-200);
  overflow-x: auto;
  padding-bottom: var(--spacing-200);
}
.bcn-model-diagram__spine .bcn-model-diagram__card--tier {
  flex: 1 1 0;
  min-width: 240px;
}
.bcn-model-diagram__chip[data-tone="id"] {
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-color: transparent;
}
.bcn-model-diagram__fname[data-ref="commitment"],
.bcn-model-diagram__fname[data-ref="milestone"] {
  color: var(--color-commitment);
}
.bcn-model-diagram__link {
  display: flex;
  align-items: center;
  flex: none;
  position: relative;
  width: 34px;
}
.bcn-model-diagram__link:before {
  content: "";
  position: absolute;
  left: 0;
  right: 6px;
  top: 50%;
  height: 2px;
  background: var(--color-border-strong);
}
.bcn-model-diagram__link-label {
  position: absolute;
  top: calc(50% - 26px);
  left: 50%;
  transform: translate(-50%);
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.bcn-model-diagram__link:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 7px solid var(--color-border-strong);
}
.bcn-model-diagram__row--satellites {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.bcn-model-diagram__card--satellite {
  border-color: var(--color-border);
}
.bcn-model-diagram__card--computed {
  border-style: dashed;
}
.bcn-model-diagram__chip[data-tone="computed"] {
  border-style: dashed;
}
.bcn-model-diagram__row--projections {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.bcn-model-diagram__card--projection {
  gap: var(--spacing-150);
  background: var(--color-surface-sunken);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 52px);
  padding: var(--spacing-600);
  background: var(--bcn-gray-50);
  box-sizing: border-box;
}
.page-layout section {
  width: 100%;
}
.breadcrumbs {
  padding: var(--spacing-400) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
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
.page-layout__container {
  display: flex;
  flex-direction: column;
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
:host {
  display: inline-block;
}
.esa-tooltip-anchor {
  position: relative;
  display: inline-flex;
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
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
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  text-decoration: none;
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
  border-color: var(--_accent-border, transparent);
}
.esa-button--variant-chrome .esa-button__native {
  background: transparent;
  color: inherit;
  border-color: transparent;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
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
  font-size: 0.8125rem;
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
.bcn-bottom-drawer {
  --_width: var(--bcn-bottom-drawer-width, 90vw);
  --_height: var(--bcn-bottom-drawer-height, 80vh);
  --_inset: var(--bcn-bottom-drawer-inset, 0px);
  --_z: var(--bcn-bottom-drawer-z, 1400);
  display: contents;
}
#bcn-evidence-drawer {
  --bcn-bottom-drawer-width: 96vw;
  --bcn-bottom-drawer-height: 92vh;
  --bcn-bottom-drawer-z: 1400;
  --form-border-color-focus: var(--color-secondary);
  --focus-ring-color: color-mix(in srgb, var(--color-secondary) 30%, transparent);
  --focus-ring-width: 2px;
  --color-primary-strong: var(--color-primary);
  --bcn-ev-search-gap: var(--spacing-250, 0.625rem);
  --card-padding: var(--spacing-200, 0.5rem);
}
.bcn-bottom-drawer__backdrop {
  position: fixed;
  inset: 0;
  background: var(--color-backdrop, rgba(0, 0, 0, 0.5));
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  z-index: var(--_z);
  animation: bcn-bd-fade 0.15s ease;
}
.bcn-bottom-drawer:not([open]):not([closing]) .bcn-bottom-drawer__backdrop,
.bcn-bottom-drawer:not([open]):not([closing]) .bcn-bottom-drawer__panel {
  display: none;
}
.bcn-bottom-drawer__panel {
  position: fixed;
  left: 50%;
  bottom: var(--_inset);
  transform: translate(-50%);
  width: min(var(--_width), calc(100vw - var(--_inset) * 2));
  height: var(--_height);
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-radius: var(--radius-300) var(--radius-300) 0 0;
  box-shadow: 0 -12px 48px -12px #00000052;
  z-index: calc(var(--_z) + 1);
  outline: none;
  overflow: hidden;
  animation: bcn-bd-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
:host {
  --_popover-bg: var(--color-background-elevation-raised, #fcfcfc);
  --_popover-border: var(--color-border-default, #cecece);
  --_popover-shadow: var(--elevation-4, 0 6px 24px -6px rgba(0, 0, 0, 0.07));
  --_popover-radius: var(--radius-md, 0.5rem);
  --_popover-padding: var(--spacing-300, 0.75rem);
  --_popover-arrow-size: 8px;
  --_popover-color: var(--color-content-default, #202020);
  display: inline-block;
}
.esa-popover-anchor {
  position: relative;
  display: inline-block;
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
| `--animation-overlay-enter` | `.25s ease-out` | semantic |
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
| `--border-width-default` | `1px` | semantic |
| `--button-radius-md` | `.5rem` | component |
| `--color-accent` | `#f76b15` | component |
| `--color-backdrop` | `rgba(0, 0, 0, .5)` | component |
| `--color-background-brand` | `#46a758` | semantic |
| `--color-background-brand-hover` | `#3e9b4f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-border` | `#dcdcdc` | component |
| `--color-border-default` | `#cecece` | semantic |
| `--color-border-light` | `#efefef` | component |
| `--color-border-strong` | `#bdbdbd` | component |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#202020` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-primary` | `#005862` | component |
| `--color-secondary` | `#00918b` | component |
| `--color-surface` | `#fcfcfc` | component |
| `--color-surface-sunken` | `#efefef` | component |
| `--color-text-inverse` | `#fcfcfc` | component |
| `--color-text-link` | `#46a758` | component |
| `--color-text-primary` | `#3d3d3d` | component |
| `--color-text-secondary` | `#525252` | component |
| `--color-text-tertiary` | `#656565` | component |
| `--elevation-4` | `0 6px 24px -6px rgba(0, 0, 0, .07)` | semantic |
| `--elevation-5` | `0 8px 32px -8px rgba(0, 0, 0, .08)` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-mono` | `"Roboto Mono", ui-monospace, monospace` | component |
| `--font-sans` | `"DM Sans", sans-serif` | component |
| `--font-weight-bold` | `650` | component |
| `--font-weight-medium` | `500` | component |
| `--font-weight-regular` | `350` | component |
| `--font-weight-semibold` | `550` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.5rem` | semantic |
| `--side-dialog-inset` | `16px` | component |
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
| `--transition-fast` | `.15s ease` | semantic |
| `--type-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | component |
| `--type-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--type-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | component |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | component |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | component |
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | component |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
