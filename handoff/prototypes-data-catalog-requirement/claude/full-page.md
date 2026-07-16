# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-data-catalog-requirement** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/data-catalog-requirement/
- **Section element:** `<page>`
- **Components:** esa-badge (hub), esa-button (hub), esa-collapsible (hub), esa-icon (hub), esa-icon-button (hub), esa-icon-link (hub), esa-pill (hub)

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
          <span class="project-switcher__name">Select a Project</span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
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
            <li class="nav-item"><a href="#dc-projects" class="nav-sublink"> Projects </a></li>
            <li class="nav-item">
              <a href="#dc-source-documents" class="nav-sublink"> Source Documents </a>
            </li>
            <li class="nav-item">
              <a href="#dc-commitments" class="nav-sublink"> Commitments </a>
            </li>
            <li class="nav-item">
              <a href="#dc-requirements" class="nav-sublink active"> Requirements </a>
            </li>
            <li class="nav-item"><a href="#dc-actions" class="nav-sublink"> Actions </a></li>
            <li class="nav-item"><a href="#dc-components" class="nav-sublink"> Components </a></li>
            <li class="nav-item">
              <a href="#dc-evidence" class="nav-sublink"> Evidence of Compliance </a>
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
                <a class="breadcrumb-item" href="#data-catalog"> Data Catalog </a
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
                <a class="breadcrumb-item" href="#data-catalog/requirements"> Requirements </a
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
                <span class="breadcrumb-item" aria-current="page">
                  Pre-construction survey for nesting raptors and other migratory birds during
                  nesting season
                </span>
              </div>
            </nav>
          </section>
          <section class="page-layout__title">
            <div class="page-layout__title-main">
              <h1>
                Pre-construction survey for nesting raptors and other migratory birds during nesting
                season
              </h1>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="bcn-req">
              <!-- Identity header — family treatment: commitment badge on top, decorative
           name as H1, neutral type badge trailing. Edit opens the upsert modal. -->
              <header class="bcn-req__head">
                <div class="bcn-req__identity">
                  <span class="bcn-req__badge bcn-req__badge--commitment">MM-BIO-2</span>
                  <div class="bcn-req__title-row">
                    <h1 class="bcn-req__title">
                      Pre-construction survey for nesting raptors and other migratory birds during
                      nesting season
                    </h1>
                    <span class="bcn-req__badge bcn-req__badge--type">Survey</span>
                  </div>
                </div>
                <div class="bcn-req__head-actions">
                  <span id="edit-req"
                    ><span
                      class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
                    >
                      <button class="esa-button__native" type="button">
                        <span class="esa-button__label">
                          <span class="bcn-btn-ico"
                            ><span class="esa-icon esa-icon--xs" aria-hidden="true">
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
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                            Edit requirement</span
                          >
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
              </header>
              <!-- Two-column body -->
              <div class="bcn-req__body">
                <div class="bcn-req__main">
                  <!-- The requirement text — the entity's core. Serif (quoted regulatory
               voice) on a quiet card, with the source-document affordance. -->
                  <section class="bcn-req__section">
                    <h2 class="bcn-section-title">Requirement Text</h2>
                    <article class="bcn-reqtext">
                      <p class="bcn-reqtext__text">
                        Prior to ground-disturbing activities, a qualified biologist shall complete
                        pre-construction survey for nesting raptors and other migratory birds during
                        nesting season within the project area and submit findings to the City.
                      </p>
                      <footer class="bcn-reqtext__footer">
                        <span id="open-commitment"
                          ><span
                            class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm"
                          >
                            <button class="esa-button__native" type="button">
                              <span class="esa-button__label">
                                <span class="bcn-btn-ico"
                                  ><span class="esa-icon esa-icon--xs" aria-hidden="true">
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
                                      <path d="M15 12h-5"></path>
                                      <path d="M15 8h-5"></path>
                                      <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                                      <path
                                        d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
                                      ></path>
                                    </svg>
                                  </span>
                                  View Commitment Text</span
                                >
                              </span>
                            </button>
                          </span>
                        </span>
                        <span data-bcn-source=""
                          ><span
                            class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm"
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
                                  <path
                                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                  ></path>
                                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </span>
                              <span class="esa-button__label"> View in Source Document </span>
                            </button>
                          </span>
                        </span>
                      </footer>
                    </article>
                  </section>
                  <!-- Actions implementing this requirement — the jump-off to scheduling /
               evidence / notification config (which the Requirement does NOT own). -->
                  <section class="bcn-req__section">
                    <h2 class="bcn-section-title">
                      Actions
                      <span class="esa-badge esa-badge--secondary esa-badge--sm">
                        <span class="esa-badge__text">1</span>
                      </span>
                    </h2>
                    <ul class="bcn-action-list">
                      <li>
                        <a
                          class="bcn-linked-action"
                          href="/beacon-design/prototypes/data-catalog-action"
                        >
                          <span class="bcn-req__badge bcn-req__badge--commitment">MM-BIO-2</span>
                          <span class="bcn-linked-action__name"
                            >Conduct Pre-Construction Nesting Bird &amp; Raptor Survey</span
                          >
                          <span class="bcn-req__badge bcn-req__badge--type">Survey</span>
                          <span class="esa-icon esa-icon--sm" aria-hidden="true">
                            <svg
                              width="16"
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
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <!-- Rail — Details / Related Data / Lineage. Deliberately NO Timing and
             NO Notifications modules: those are Action config in the standard model. -->
                <aside class="bcn-req__rail">
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
                        <span class="bcn-key-value__key">Type</span>
                        <span class="bcn-key-value__val">Survey</span>
                      </div>
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Scope</span>
                        <span class="bcn-key-value__val">Project</span>
                      </div>
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Resource Category</span>
                        <span class="bcn-key-value__val">Biological Resources</span>
                      </div>
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Tags</span>
                        <span class="bcn-tagrow">
                          <span class="esa-pill esa-pill--default esa-pill--sm">
                            <span class="esa-pill__label">CDFW</span>
                          </span>
                          <span class="esa-pill esa-pill--default esa-pill--sm">
                            <span class="esa-pill__label">Nesting season</span>
                          </span>
                        </span>
                      </div>
                      <p class="bcn-rail-meta">Created Feb 12, 2026 · Updated Jun 3, 2026</p>
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
                          <path
                            d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                          ></path>
                          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                        </svg>
                      </span>
                      <span class="esa-collapsible__title">Related Data</span>
                    </summary>
                    <div class="esa-collapsible__body">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Phases</span>
                        <span class="bcn-key-value__val">Pre-Construction</span>
                      </div>
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Species</span>
                        <span class="bcn-key-value__val">Nesting raptors, Migratory birds</span>
                      </div>
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Seasons</span>
                        <span class="bcn-key-value__val">Nesting Bird Season (Feb 1 – Aug 31)</span>
                      </div>
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Construction Activities</span>
                        <span class="bcn-key-value__val"
                          >Ground disturbance, Vegetation removal</span
                        >
                      </div>
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Milestones</span>
                        <span class="bcn-key-value__val">Before Construction Begins</span>
                      </div>
                    </div>
                  </details>
                  <!-- Lineage — Project → Source Document → Commitment → this Requirement,
               on a connecting rail (the BcnChangeLog spine treatment). -->
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
                          <line x1="6" x2="6" y1="3" y2="15"></line>
                          <circle cx="18" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M18 9a9 9 0 0 1-9 9"></path>
                        </svg>
                      </span>
                      <span class="esa-collapsible__title">Lineage</span>
                    </summary>
                    <div class="esa-collapsible__body">
                      <ol class="bcn-lineage">
                        <li class="bcn-lineage__node">
                          <span class="bcn-lineage__icon"
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
                                  d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                                ></path>
                              </svg>
                            </span>
                          </span>
                          <span class="bcn-lineage__body">
                            <span class="bcn-lineage__kind">Project</span>
                            <a class="bcn-lineage__name" href="#data-catalog/projects/3600-alameda"
                              >3600 Alameda Avenue Project</a
                            >
                          </span>
                        </li>
                        <li class="bcn-lineage__node">
                          <span class="bcn-lineage__icon"
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                              </svg>
                            </span>
                          </span>
                          <span class="bcn-lineage__body">
                            <span class="bcn-lineage__kind">Source Document</span>
                            <a
                              class="bcn-lineage__name"
                              href="/beacon-design/prototypes/data-catalog-source-document"
                              >3600 Alameda Avenue Project FEIR</a
                            >
                          </span>
                        </li>
                        <li class="bcn-lineage__node">
                          <span class="bcn-lineage__icon"
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
                                <path d="M15 12h-5"></path>
                                <path d="M15 8h-5"></path>
                                <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                                <path
                                  d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
                                ></path>
                              </svg>
                            </span>
                          </span>
                          <span class="bcn-lineage__body">
                            <span class="bcn-lineage__kind">Commitment</span>
                            <a
                              class="bcn-lineage__name"
                              href="/beacon-design/prototypes/data-catalog-commitment"
                              >MM-BIO-2 — Nesting Birds and Raptors</a
                            >
                          </span>
                        </li>
                        <li class="bcn-lineage__node bcn-lineage__node--current">
                          <span class="bcn-lineage__icon"
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
                                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                <path
                                  d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                                ></path>
                                <path d="m9 14 2 2 4-4"></path>
                              </svg>
                            </span>
                          </span>
                          <span class="bcn-lineage__body">
                            <span class="bcn-lineage__kind">Requirement</span>
                            <span class="bcn-lineage__name bcn-lineage__name--current"
                              >Pre-construction survey for nesting raptors and other migratory birds
                              during nesting season</span
                            >
                          </span>
                        </li>
                      </ol>
                    </div>
                  </details>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </div>
      <esa-dialog
        id="edit-dialog"
        size="lg"
        style="
          --_dialog-width: 96vw;
          --_dialog-max-height: 94vh;
          --_dialog-bg: var(--color-surface, #fff);
          --z-modal-backdrop: 1150;
          --z-modal: 1200;
        "
      >
        <div slot="header" class="bcn-editor__head">
          <span class="bcn-editor__head-title"
            >Pre-construction survey for nesting raptors and other migratory birds during nesting
            season</span
          >
          <span class="bcn-req__badge bcn-req__badge--type">Survey</span>
        </div>
        <div class="bcn-editor">
          <!-- LEFT: parent commitment context (read) -->
          <section class="bcn-context" aria-label="Commitment context">
            <div class="bcn-context__commitment">
              <span class="bcn-req__badge bcn-req__badge--commitment">MM-BIO-2</span>
              <span class="bcn-context__commitment-title">Nesting Birds and Raptors</span>
            </div>
            <p class="bcn-context__text">
              If construction, ground-disturbing, or vegetation-removal activities would occur
              during the nesting season (February 1 – August 31), a qualified biologist shall
              conduct a pre-construction survey for nesting raptors and other migratory birds within
              14 days prior to the start of those activities. If active nests are found, the
              biologist shall establish appropriate no-disturbance buffer zones around each nest, to
              remain in place until young have fledged. If work must occur within an established
              buffer zone, it shall proceed only under biological monitoring, and a report of
              findings documenting any such work shall be submitted to the City.
            </p>
            <div class="bcn-context__actions">
              <span id="ctx-source"
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
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                    </span>
                    <span class="esa-button__label"> View in Source Document </span>
                  </button>
                </span>
              </span>
            </div>
          </section>
          <!-- RIGHT: single-pane upsert form (prod RequirementUpsertDto field set) -->
          <section class="bcn-config" aria-label="Requirement reference data">
            <div class="bcn-form">
              <esa-text-field id="d-name" label="Name" required="" size="md"></esa-text-field>
              <esa-textarea id="d-text" label="Requirement Text" rows="5" size="md"></esa-textarea>
              <div class="bcn-grid-2">
                <esa-select id="d-type" label="Type" size="md"></esa-select>
                <esa-select id="d-scope" label="Scope" size="md"></esa-select>
              </div>
              <esa-input-tag id="d-phases" label="Phases" size="md"></esa-input-tag>
              <!-- Entity fields carry the setup wizard's "+" affordance — a creation
               drawer for lookup values that don't exist yet (Tags create inline). -->
              <div class="bcn-grid-2">
                <div class="bcn-field-add">
                  <esa-input-tag id="d-species" label="Species" size="md"></esa-input-tag>
                  <span class="bcn-field-add__btn" data-add-entity="Species" data-target="d-species"
                    ><button
                      class="esa-icon-button esa-icon-button--xs"
                      type="button"
                      aria-label="Add new species"
                      title="Add new species"
                    >
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
                          <path d="M12 5v14"></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                </div>
                <div class="bcn-field-add">
                  <esa-input-tag id="d-seasons" label="Seasons" size="md"></esa-input-tag>
                  <span class="bcn-field-add__btn" data-add-entity="Season" data-target="d-seasons"
                    ><button
                      class="esa-icon-button esa-icon-button--xs"
                      type="button"
                      aria-label="Add new season"
                      title="Add new season"
                    >
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
                          <path d="M12 5v14"></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                </div>
              </div>
              <div class="bcn-field-add">
                <esa-input-tag
                  id="d-activities"
                  label="Construction Activities"
                  size="md"
                ></esa-input-tag>
                <span
                  class="bcn-field-add__btn"
                  data-add-entity="Construction Activity"
                  data-target="d-activities"
                  ><button
                    class="esa-icon-button esa-icon-button--xs"
                    type="button"
                    aria-label="Add new construction activity"
                    title="Add new construction activity"
                  >
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
                        <path d="M12 5v14"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </div>
              <div class="bcn-grid-2">
                <div class="bcn-field-add">
                  <esa-input-tag id="d-milestones" label="Milestones" size="md"></esa-input-tag>
                  <span
                    class="bcn-field-add__btn"
                    data-add-entity="Milestone"
                    data-target="d-milestones"
                    ><button
                      class="esa-icon-button esa-icon-button--xs"
                      type="button"
                      aria-label="Add new milestone"
                      title="Add new milestone"
                    >
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
                          <path d="M12 5v14"></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                </div>
                <esa-input-tag id="d-tags" label="Tags" size="md"></esa-input-tag>
              </div>
            </div>
          </section>
        </div>
        <div slot="footer" class="bcn-editor__foot">
          <span id="er-cancel"
            ><span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Cancel </span>
              </button>
            </span>
          </span>
          <span id="er-save"
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Save </span>
              </button>
            </span>
          </span>
        </div>
      </esa-dialog>
      <esa-side-dialog
        id="source-drawer"
        heading="3600 Alameda Avenue Project FEIR"
        size="lg"
        style="
          --_width: 66vw;
          --z-modal: 1300;
          --z-modal-backdrop: 1250;
          --backdrop-filter: blur(4px);
        "
        position="right"
      >
        <div class="bcn-source-pdf">
          <iframe
            class="bcn-source-pdf__frame"
            src="/beacon-design/source-docs/feir-sample.pdf#view=FitH&amp;navpanes=0&amp;pagemode=none"
            title="Source document — 3600 Alameda Avenue Project FEIR (sample)"
          ></iframe>
        </div>
        <span slot="footer" class="bcn-source-foot">
          <a
            class="esa-icon-link esa-icon-link--sm esa-icon-link--medium"
            href="/beacon-design/prototypes/data-catalog-source-document"
            ><span class="esa-icon-link__label">Open Source Document</span>
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
      </esa-side-dialog>
      <esa-side-dialog
        id="commitment-drawer"
        heading="MM-BIO-2 — Nesting Birds and Raptors"
        style="
          --_width: 560px;
          --z-modal: 1300;
          --z-modal-backdrop: 1250;
          --backdrop-filter: blur(4px);
        "
        position="right"
        size="md"
      >
        <span slot="header" class="bcn-drawer-head">
          <span class="bcn-req__badge bcn-req__badge--commitment">MM-BIO-2</span>
          <span class="bcn-drawer-head__title">Nesting Birds and Raptors</span>
        </span>
        <div class="bcn-parsed">
          <p class="bcn-parsed__title">Mitigation Measure BIO-2: Nesting Birds and Raptors.</p>
          <ul class="bcn-parsed__list">
            <li class="bcn-parsed__item">
              <strong>Pre-Construction Survey:</strong> If construction, ground-disturbing, or
              vegetation-removal activities would occur during the nesting season (February 1 –
              August 31), a qualified biologist shall conduct a pre-construction survey for nesting
              raptors and other migratory birds within 14 days prior to the start of those
              activities.
            </li>
            <li class="bcn-parsed__item">
              <strong>No-Disturbance Buffers:</strong> If active nests are found, the biologist
              shall establish appropriate no-disturbance buffer zones around each nest, to remain in
              place until young have fledged.
            </li>
            <li class="bcn-parsed__item">
              <strong>Work Within Buffer Zones:</strong> If work must occur within an established
              buffer zone, it shall proceed only under biological monitoring by the qualified
              biologist.
            </li>
            <li class="bcn-parsed__item">
              <strong>Reporting:</strong> A report of findings documenting any construction
              conducted within a no-disturbance buffer zone shall be submitted to the City.
            </li>
          </ul>
        </div>
        <span slot="footer" class="bcn-source-foot">
          <a
            class="esa-icon-link esa-icon-link--sm esa-icon-link--medium"
            href="/beacon-design/prototypes/data-catalog-commitment"
            ><span class="esa-icon-link__label">Open Commitment</span>
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
      </esa-side-dialog>
      <esa-side-dialog
        id="entity-drawer"
        heading="Add Entity"
        style="--_width: 420px; --z-modal: 1300; --z-modal-backdrop: 1250"
        position="right"
        size="md"
      >
        <div class="bcn-entity-form">
          <esa-text-field id="ent-name" label="Name" required="" size="md"></esa-text-field>
          <div id="ent-date-wrap" class="bcn-entity-form__date">
            <esa-date-picker id="ent-date" label="Estimated Date" size="md"></esa-date-picker>
            <span class="bcn-field__hint">Optional — leave blank if not yet known.</span>
          </div>
          <esa-textarea
            id="ent-desc"
            label="Description"
            rows="4"
            placeholder="Optional context…"
            size="md"
          ></esa-textarea>
        </div>
        <div slot="footer" class="bcn-editor__foot">
          <span id="ent-cancel"
            ><span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Cancel </span>
              </button>
            </span>
          </span>
          <span id="ent-add"
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Add </span>
              </button>
            </span>
          </span>
        </div>
      </esa-side-dialog>
      <script type="application/json" id="edit-meta">
        {
          "reqName": "Pre-construction survey for nesting raptors and other migratory birds during nesting season",
          "requirementText": "Prior to ground-disturbing activities, a qualified biologist shall complete pre-construction survey for nesting raptors and other migratory birds during nesting season within the project area and submit findings to the City.",
          "type": "Survey",
          "scope": "Project",
          "phases": ["Pre-Construction"],
          "species": ["Nesting raptors", "Migratory birds"],
          "seasons": ["Nesting Bird Season (Feb 1 – Aug 31)"],
          "constructionActivities": ["Ground disturbance", "Vegetation removal"],
          "milestones": ["Before Construction Begins"],
          "tags": ["CDFW", "Nesting season"]
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
  --badge-bg: #005862;
  --badge-height-md: 28px;
  --badge-height-sm: 22px;
  --badge-radius: 0.25rem;
  --badge-text-color: #fcfcfc;
  --bcn-gray-100: #efefef;
  --bcn-gray-200: #dcdcdc;
  --bcn-gray-300: #bdbdbd;
  --bcn-gray-400: #989898;
  --bcn-gray-50: #fafafa;
  --bcn-gray-500: #7c7c7c;
  --bcn-gray-600: #656565;
  --bcn-gray-900: #3d3d3d;
  --bcn-gray-950: #292929;
  --collapsible-bg: #fcfcfc;
  --collapsible-border-color: #dcdcdc;
  --collapsible-padding-x: 1rem;
  --collapsible-radius: 0.5rem;
  --collapsible-title-color: #3d3d3d;
  --color-accent: #f76b15;
  --color-background: #fafafa;
  --color-border: #dcdcdc;
  --color-border-light: #efefef;
  --color-commitment: #58508d;
  --color-primary: #005862;
  --color-primary-hover: #00474f;
  --color-primary-strong: #2a7e3b;
  --color-secondary: #00918b;
  --color-secondary-on-fill: #203c25;
  --color-surface: #fcfcfc;
  --color-surface-elevated: #fcfcfc;
  --color-surface-sunken: #efefef;
  --color-text-inverse: #fcfcfc;
  --color-text-link: #005862;
  --color-text-primary: #3d3d3d;
  --color-text-secondary: #525252;
  --color-text-tertiary: #656565;
  --dialog-bg: #fcfcfc;
  --dialog-border-color: #efefef;
  --dialog-radius: 0.75rem;
  --dialog-width: 480px;
  --dialog-width-lg: 640px;
  --font-decorative: "Besley", serif;
  --font-sans: "DM Sans", sans-serif;
  --font-weight-medium: 450;
  --font-weight-regular: 350;
  --font-weight-semibold: 550;
  --form-font-size-md: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --form-font-size-sm: clamp(0.625rem, 0.56rem + 0.32vw, 0.75rem);
  --form-height-md: 36px;
  --form-height-sm: 28px;
  --form-height-xs: 24px;
  --form-label-color: #525252;
  --form-padding-x-md: 0.75rem;
  --form-padding-x-sm: 0.625rem;
  --form-radius-md: 0.25rem;
  --form-radius-sm: 0.25rem;
  --icon-button-bg-hover: color-mix(in srgb, currentColor 14%, transparent);
  --icon-link-font-size-md: 1rem;
  --icon-link-font-size-sm: 0.875rem;
  --icon-link-gap: 0.375rem;
  --icon-size-md: 20px;
  --icon-size-medium: 20px;
  --icon-size-sm: 16px;
  --icon-size-small: 16px;
  --icon-size-xs: 14px;
  --pill-bg: #efefef;
  --pill-border-color: #efefef;
  --pill-height-md: 28px;
  --pill-height-sm: 22px;
  --pill-radius: 0.25rem;
  --pill-text-color: #3d3d3d;
  --radius-100: 0.25rem;
  --radius-200: 0.5rem;
  --radius-300: 0.5rem;
  --radius-400: 0.75rem;
  --radius-full: 9999px;
  --side-dialog-width: 400px;
  --side-dialog-width-lg: 520px;
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
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
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
:host([size="lg"]) {
  --_dialog-width: var(--dialog-width-lg, 640px);
}
.page-layout__title {
  display: none !important;
}
.bcn-req {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-600);
}
.bcn-req__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-400);
  padding-bottom: var(--spacing-400);
  border-bottom: 1px solid var(--color-border);
}
.bcn-req__identity {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-100);
  min-width: 0;
}
.bcn-req__badge {
  flex-shrink: 0;
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-100);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  white-space: nowrap;
}
.bcn-req__badge--commitment {
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
}
.bcn-req__title-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-req__title {
  margin: 0;
  font-family: var(--font-decorative);
  font-size: 1.5rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.2;
  color: var(--color-text-primary);
}
.bcn-req__badge--type {
  color: var(--color-text-secondary);
  background: var(--color-surface-sunken);
  transform: translateY(2px);
}
.bcn-req__head-actions {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
  flex-shrink: 0;
}
.bcn-btn-ico {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
}
.bcn-req__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: var(--spacing-600);
  align-items: start;
}
.bcn-req__main {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-600);
}
.bcn-req__section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-section-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0;
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-reqtext {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  padding: var(--spacing-500);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.bcn-reqtext__text {
  margin: 0;
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--color-text-primary);
}
.bcn-reqtext__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-100);
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-light);
}
.bcn-reqtext__footer .esa-button--color-ghost .esa-button__native {
  color: var(--color-primary);
}
.bcn-action-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-linked-action {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
  text-decoration: none;
  transition: background-color 0.12s ease;
}
.bcn-linked-action__name {
  flex: 1;
  min-width: 0;
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-linked-action .bcn-req__badge--type {
  transform: none;
}
.bcn-linked-action > .esa-icon:last-child {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
  transition:
    transform 0.12s ease,
    color 0.12s ease;
}
.bcn-req__rail {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-req__rail .esa-collapsible__title {
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
}
.bcn-tagrow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-150);
  margin-top: var(--spacing-100);
}
.bcn-tagrow .esa-pill {
  border-radius: var(--radius-100);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}
.bcn-rail-meta {
  margin: var(--spacing-300) 0 0;
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-light);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}
.bcn-lineage {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.bcn-lineage__node {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-300);
  padding-bottom: var(--spacing-400);
}
.bcn-lineage__node:before {
  content: "";
  position: absolute;
  left: 13px;
  top: 30px;
  bottom: 2px;
  width: 2px;
  background: var(--color-border);
}
.bcn-lineage__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}
.bcn-lineage__icon .esa-icon {
  --_icon-size: 14px;
}
.bcn-lineage__body {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  padding-top: 2px;
}
.bcn-lineage__kind {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.bcn-lineage__name {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-lineage__node:last-child {
  padding-bottom: 0;
}
.bcn-lineage__node:last-child:before {
  display: none;
}
.bcn-lineage__node--current .bcn-lineage__icon {
  border-color: var(--color-secondary);
  color: var(--color-secondary);
}
.bcn-lineage__name--current {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}
.bcn-editor__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}
.bcn-editor__head-title {
  font-family: var(--font-decorative);
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-editor {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  align-items: stretch;
  height: calc(86vh - 8.5rem);
  margin: calc(-1 * var(--_dialog-padding, 1.5rem));
  overflow: hidden;
}
.bcn-context {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  min-width: 0;
  height: 100%;
  overflow-y: auto;
  padding: var(--spacing-500);
  background: var(--color-background);
  border-right: 1px solid var(--color-border);
}
.bcn-context__commitment {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
}
.bcn-context__commitment-title {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-context__text {
  margin: 0;
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--color-text-primary);
}
.bcn-context__actions {
  display: flex;
}
.bcn-config {
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
}
.bcn-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  padding: var(--spacing-400) var(--spacing-500) var(--spacing-500);
}
.bcn-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-300);
}
.bcn-form esa-input-tag {
  --_chip-bg: var(--color-surface-sunken);
  --_chip-color: var(--color-text-primary);
  --_chip-radius: var(--radius-100);
}
.bcn-field-add {
  position: relative;
  min-width: 0;
}
.bcn-field-add__btn {
  position: absolute;
  right: 5px;
  bottom: 5px;
  display: inline-flex;
}
.bcn-editor__foot {
  display: flex;
  gap: var(--spacing-300);
  justify-content: flex-end;
  width: 100%;
}
.bcn-source-pdf {
  height: 100%;
  min-height: 60vh;
}
.bcn-source-pdf__frame {
  width: 100%;
  height: 100%;
  min-height: 60vh;
  border: 0;
  border-radius: var(--radius-200);
  background: var(--color-surface-sunken);
}
.bcn-source-foot {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.bcn-drawer-head {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-250);
}
.bcn-drawer-head__title {
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-parsed {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--color-text-primary);
}
.bcn-parsed__title {
  margin: 0;
  font-weight: var(--font-weight-semibold);
}
.bcn-parsed__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-entity-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-entity-form__date {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
}
.bcn-field__hint {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
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
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
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
.nav-item + .nav-item {
  margin-top: var(--spacing-050);
}
.nav-sublink.active {
  background: #0000000a;
  color: var(--color-primary);
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
.esa-badge--secondary {
  --_badge-bg: var(--color-secondary, #65ba74);
  --_badge-text: var(--color-secondary-on-fill, #203c25);
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
.esa-icon-link {
  --_il-font: var(--icon-link-font-size-md, 1rem);
  display: inline-flex;
  align-items: center;
  gap: var(--icon-link-gap, var(--spacing-150, 6px));
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: var(--_il-font);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.esa-icon-link--sm {
  --_il-font: var(--icon-link-font-size-sm, 0.875rem);
}
.esa-icon-link--medium {
  font-weight: var(--font-weight-medium, 500);
}
.esa-icon-link__label {
  display: inline-block;
}
:host {
  --_width: var(--side-dialog-width, 400px);
}
:host([size="lg"]) {
  --_width: var(--side-dialog-width-lg, 520px);
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
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
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
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
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
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
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
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-200` | `#dcdcdc` | component |
| `--bcn-gray-300` | `#bdbdbd` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-50` | `#fafafa` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-600` | `#656565` | component |
| `--bcn-gray-900` | `#3d3d3d` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--collapsible-bg` | `#fcfcfc` | component |
| `--collapsible-border-color` | `#dcdcdc` | component |
| `--collapsible-padding-x` | `1rem` | component |
| `--collapsible-radius` | `.5rem` | component |
| `--collapsible-title-color` | `#3d3d3d` | component |
| `--color-accent` | `#f76b15` | semantic |
| `--color-background` | `#fafafa` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-primary-strong` | `#2a7e3b` | semantic |
| `--color-secondary` | `#00918b` | semantic |
| `--color-secondary-on-fill` | `#203c25` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--color-surface-elevated` | `#fcfcfc` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#fcfcfc` | semantic |
| `--color-text-link` | `#005862` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--dialog-bg` | `#fcfcfc` | component |
| `--dialog-border-color` | `#efefef` | component |
| `--dialog-radius` | `.75rem` | component |
| `--dialog-width` | `480px` | component |
| `--dialog-width-lg` | `640px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-medium` | `450` | primitive |
| `--font-weight-regular` | `350` | primitive |
| `--font-weight-semibold` | `550` | primitive |
| `--form-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--form-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--form-height-md` | `36px` | component |
| `--form-height-sm` | `28px` | component |
| `--form-height-xs` | `24px` | component |
| `--form-label-color` | `#525252` | component |
| `--form-padding-x-md` | `.75rem` | component |
| `--form-padding-x-sm` | `.625rem` | component |
| `--form-radius-md` | `.25rem` | component |
| `--form-radius-sm` | `.25rem` | component |
| `--icon-button-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--icon-link-font-size-md` | `1rem` | component |
| `--icon-link-font-size-sm` | `.875rem` | component |
| `--icon-link-gap` | `.375rem` | component |
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
| `--side-dialog-width` | `400px` | component |
| `--side-dialog-width-lg` | `520px` | component |
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

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
