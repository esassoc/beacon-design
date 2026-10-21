# Attach Evidence of Compliance: markup

```html
<div class="modern-layout__body">
  <!-- ─── side-nav-modern ─── -->
  <nav class="side-nav" id="side-nav">
    <div class="sidebar-header">
      <a href="#home" class="site-logo" aria-label="Beacon home"
        ><img src="/beacon-design/beacon-icon.svg" alt="Beacon" class="site-logo__img"
      /></a>
    </div>
    <!-- project-switcher (ported from project-switcher.component) -->
    <div class="project-switcher-container">
      <button type="button" class="project-switcher__trigger">
        <span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
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
            ></path></svg></span
        ><span class="project-switcher__name">Raul</span
        ><span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m6 9 6 6 6-6"></path></svg
        ></span>
      </button>
    </div>
    <div class="main-nav">
      <div class="nav-section">
        <a href="#setup-wizard" class="nav-section__header nav-section__header--link"
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
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
              <circle cx="12" cy="12" r="10"></circle></svg></span
          ><span class="nav-section__title">Setup Wizard</span></a
        >
      </div>
      <div class="nav-section nav-section--active">
        <button type="button" class="nav-section__header" aria-expanded="true">
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
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
              <!-- …and 2 more like this (<rect>) -->
            </svg></span
          ><span class="nav-section__title">Project</span
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m6 9 6 6 6-6"></path></svg
          ></span>
        </button>
        <ul class="nav-section__items">
          <li class="nav-item"><a href="#dashboard" class="nav-sublink">Dashboard</a></li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/lists" class="nav-sublink active">Lists</a>
          </li>
          <!-- …and 2 more like this (<li class="nav-item">) -->
        </ul>
      </div>
      <hr class="nav-divider" aria-hidden="true" />
      <div class="nav-section nav-section--collapsed">
        <button type="button" class="nav-section__header" aria-expanded="false">
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
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
              <!-- …and 4 more like this (<path>) -->
              <circle cx="12" cy="12" r="2"></circle>
              <path d="m13.41 10.59 5.66-5.66"></path></svg></span
          ><span class="nav-section__title">Tracking</span
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m6 9 6 6 6-6"></path></svg
          ></span>
        </button>
        <ul class="nav-section__items">
          <li class="nav-item">
            <a href="#tracking-summary" class="nav-sublink">Tracking Summary</a>
          </li>
          <li class="nav-item">
            <a href="#project-tracking" class="nav-sublink">Project Tracking</a>
          </li>
          <!-- …and 2 more like this (<li class="nav-item">) -->
        </ul>
      </div>
      <div class="nav-section nav-section--collapsed">
        <button type="button" class="nav-section__header" aria-expanded="false">
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
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
              ></path></svg></span
          ><span class="nav-section__title">Monitoring</span
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m6 9 6 6 6-6"></path></svg
          ></span>
        </button>
        <ul class="nav-section__items">
          <li class="nav-item">
            <a href="/beacon-design/prototypes/monitoring/dashboard" class="nav-sublink"
              >Monitoring Portal</a
            >
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/site-clearance" class="nav-sublink"
              >Site Clearance</a
            >
          </li>
          <!-- …and 2 more like this (<li class="nav-item">) -->
        </ul>
      </div>
      <div class="nav-section nav-section--collapsed">
        <button type="button" class="nav-section__header" aria-expanded="false">
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
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
              <!-- …and 3 more like this (<path>) -->
            </svg></span
          ><span class="nav-section__title">Reporting</span
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m6 9 6 6 6-6"></path></svg
          ></span>
        </button>
        <ul class="nav-section__items">
          <li class="nav-item">
            <a href="#progress-report" class="nav-sublink">Progress Report</a>
          </li>
          <li class="nav-item"><a href="#report-center" class="nav-sublink">Report Center</a></li>
        </ul>
      </div>
      <hr class="nav-divider" aria-hidden="true" />
      <div class="nav-section nav-section--collapsed">
        <button type="button" class="nav-section__header" aria-expanded="false">
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
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
              <path d="M3 12A9 3 0 0 0 21 12"></path></svg></span
          ><span class="nav-section__title">Data Catalog</span
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m6 9 6 6 6-6"></path></svg
          ></span>
        </button>
        <ul class="nav-section__items">
          <li class="nav-item">
            <a href="#dc-source-documents" class="nav-sublink">Source Documents</a>
          </li>
          <li class="nav-item"><a href="#dc-commitments" class="nav-sublink">Commitments</a></li>
          <!-- …and 3 more like this (<li class="nav-item">) -->
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
      <div class="page-layout__container">
        <section class="page-layout__title">
          <div class="page-layout__title-main">
            <h1>
              <span class="esa-icon esa-icon--lg" aria-hidden="true"
                ><svg
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
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <!-- …and 3 more like this (<path>) -->
                </svg></span
              >Attach Evidence of Compliance
            </h1>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="stack" data-gap="xl">
            <section
              class="bcn-ev-entries stack"
              data-gap="md"
              aria-labelledby="bcn-ev-entries-title"
            >
              <div class="bcn-ev-entries__intro">
                <h2 class="typography-heading-md" id="bcn-ev-entries-title">Four ways in</h2>
                <p class="typography-body-md bcn-ev-entries__lede">
                  The drawer is the same workspace every time. What changes is what is already on it
                  when it opens. Try each one — then close it and open it from the Attach Evidence
                  of Compliance button in the bottom bar.
                </p>
              </div>
              <div class="bcn-ev-entries__grid">
                <!-- 1 · Cold open -->
                <div class="esa-card esa-card--outlined">
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-ev-entry">
                      <h3 class="typography-title">From anywhere</h3>
                      <p class="typography-body-sm bcn-ev-entry__blurb">
                        The Attach Evidence of Compliance button in the bottom bar, with no context
                        at all — the "I have a PDF on my desktop" case. Nothing is on the right yet;
                        the component you last worked in is already selected.
                      </p>
                      <div class="bcn-ev-entry__demo bcn-ev-entry__demo--quiet">
                        <p class="typography-body-sm">
                          The Attach Evidence of Compliance button sits in the floating bar at the
                          bottom of every page, where Search used to be.
                        </p>
                      </div>
                      <div class="bcn-ev-entry__act">
                        <span data-evidence-open="cold"
                          ><span
                            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
                            ><button
                              class="esa-button__native typography-microcopy-md"
                              type="button"
                            >
                              <span class="esa-button__label">Open the drawer</span>
                            </button></span
                          ></span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 2 · From a single action -->
                <div class="esa-card esa-card--outlined">
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-ev-entry">
                      <h3 class="typography-title">From an action</h3>
                      <p class="typography-body-sm bcn-ev-entry__blurb">
                        Add evidence from an open action opens the same global drawer with that one
                        action already on the right, instead of a drawer inside a dialog.
                      </p>
                      <div class="bcn-ev-entry__demo">
                        <p class="bcn-ev-entry__mocklabel typography-meta">An open action</p>
                        <p class="bcn-ev-entry__mocktitle">
                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-4.2</span
                          ><span>Preconstruction Swainson’s hawk nest survey</span>
                        </p>
                        <p class="typography-body-sm bcn-ev-entry__mockmeta">
                          Recurring · Nesting season 2026
                        </p>
                        <div class="bcn-ev-entry__mockact">
                          <span data-evidence-open="single-action"
                            ><span
                              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                              >
                                <span class="esa-button__label">Add evidence</span>
                              </button></span
                            ></span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- …and 2 more like this (<div class="esa-card esa-card--outlined">) --><!-- 3 · Bulk --><!-- 4 · Existing evidence -->
              </div>
            </section>
            <section class="bcn-ev-notes stack" data-gap="md" aria-labelledby="bcn-ev-notes-title">
              <div>
                <h2 class="typography-heading-md" id="bcn-ev-notes-title">About this prototype</h2>
                <p class="typography-body-md bcn-ev-notes__lede">
                  Nothing here saves. The drawer is a picture of the feature, built to be argued
                  with.
                </p>
              </div>
              <div class="bcn-ev-notes__grid">
                <div class="esa-card esa-card--outlined">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">Where it sits</h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <p class="typography-body-sm bcn-ev-notes__text">
                      Beacon’s drawers come in from the right and hold temporary work. This one is
                      app-shell furniture, like the nav and the top bar, and it layers above modals
                      so it can cover an open dialog.
                    </p>
                    <ul class="bcn-ev-notes__layers">
                      <li class="bcn-ev-notes__layer">
                        <span class="bcn-ev-notes__layername">App chrome</span
                        ><span class="bcn-ev-notes__layernote">Top bar and side nav</span>
                      </li>
                      <li class="bcn-ev-notes__layer">
                        <span class="bcn-ev-notes__layername">Dialogs</span
                        ><span class="bcn-ev-notes__layernote"
                          >The drawer covers these — that is the point</span
                        >
                      </li>
                      <!-- …and 3 more like this (<li class="bcn-ev-notes__layer">) -->
                    </ul>
                    <p class="typography-meta bcn-ev-notes__caveat">
                      The hub’s drawer lego only opens from the left or right and has no height
                      control, so the bottom drawer is built here and filed as a request upstream.
                    </p>
                  </div>
                </div>
                <div class="esa-card esa-card--outlined">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">
                          Not in this round
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <ul class="bcn-ev-notes__list">
                      <li class="bcn-ev-notes__item">
                        Triage for surveys and daily monitoring reports, which land as evidence
                        today with nothing connecting them to an action. A backlog in the tens is
                        plausibly its own page rather than a tab in here, so it gets designed on its
                        own terms.
                      </li>
                      <li class="bcn-ev-notes__item">
                        Beacon-generated reports becoming evidence once they are finalized.
                      </li>
                      <!-- …and 2 more like this (<li class="bcn-ev-notes__item">) -->
                    </ul>
                  </div>
                </div>
                <div class="esa-card esa-card--outlined">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">What to react to</h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <ol class="bcn-ev-notes__list bcn-ev-notes__list--numbered">
                      <li class="bcn-ev-notes__item">
                        Does rising from the bottom read as "this is the whole task now", or just as
                        a differently-shaped dialog?
                      </li>
                      <li class="bcn-ev-notes__item">
                        Is it obvious that the left and right sides are being joined — that you are
                        stamping actions with evidence?
                      </li>
                      <!-- …and 3 more like this (<li class="bcn-ev-notes__item">) -->
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
```
