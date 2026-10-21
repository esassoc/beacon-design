# Setup Wizard: markup, part 1 of 3

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
        ><span class="project-switcher__name">Delta Conveyance</span
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
      <div class="nav-section nav-section--active">
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
            <a href="/beacon-design/prototypes/lists" class="nav-sublink">Lists</a>
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
        <section class="page-layout__content">
          <div class="bcn-swf">
            <header class="bcn-swf__head">
              <a class="bcn-swf__home" href="/beacon-design/prototypes/setup-wizard-ci"
                ><span class="bcn-swf__mark" aria-hidden="true"
                  ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                    ><svg
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
                      <circle cx="12" cy="12" r="10"></circle></svg></span
                ></span>
                <h1 class="bcn-swf__title">Setup Wizard</h1></a
              >
              <p class="bcn-swf__sub">
                From source documents to trackable actions and obligations.
              </p>
            </header>
            <nav class="bcn-swf__nav" aria-label="Setup wizard steps">
              <ol class="bcn-swf__steps">
                <li class="bcn-swf__item">
                  <a
                    class="bcn-swf__step"
                    data-complete=""
                    href="#setup-source-documents"
                    style="--_step: var(--color-source)"
                    ><span class="bcn-swf__icon" aria-hidden="true"
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
                            d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                          ></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                          <!-- …and 3 more like this (<path>) -->
                        </svg></span
                      ></span
                    ><span class="bcn-swf__label">Source Documents</span
                    ><span class="bcn-swf__check" aria-label="Step complete"
                      ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                        ><svg
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
                          <path d="M20 6 9 17l-5-5"></path></svg></span></span></a
                  ><span class="bcn-swf__connector" aria-hidden="true"></span>
                </li>
                <li class="bcn-swf__item">
                  <a
                    class="bcn-swf__step"
                    data-complete=""
                    href="#setup-commitments"
                    style="--_step: var(--color-commitment)"
                    ><span class="bcn-swf__icon" aria-hidden="true"
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
                          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                          <path
                            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                          ></path>
                          <path d="M12 11h4"></path>
                          <!-- …and 3 more like this (<path>) -->
                        </svg></span
                      ></span
                    ><span class="bcn-swf__label">Commitments</span
                    ><span class="bcn-swf__check" aria-label="Step complete"
                      ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                        ><svg
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
                          <path d="M20 6 9 17l-5-5"></path></svg></span></span></a
                  ><span class="bcn-swf__connector" aria-hidden="true"></span>
                </li>
                <!-- …and 2 more like this (<li class="bcn-swf__item">) -->
              </ol>
            </nav>
            <div class="bcn-swf__body">
              <div class="stack" data-gap="md">
                <section class="bcn-swsp" style="--_step: var(--color-obligation)">
                  <header class="bcn-swsp__header">
                    <div class="bcn-swsp__row">
                      <span class="bcn-swsp__num" aria-hidden="true">4</span>
                      <h2 class="bcn-swsp__title">
                        <span>Compliance Index</span
                        ><span class="bcn-swcb" aria-label="76 subcategories">76</span>
                      </h2>
                      <div class="bcn-swsp__actions">
                        <span
                          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
                          ><a
                            class="esa-button__native typography-microcopy-xs"
                            href="/beacon-design/prototypes/setup-wizard-ci/run"
                            role="button"
                            ><span class="esa-button__label">Run log</span></a
                          ></span
                        >
                      </div>
                    </div>
                    <p class="bcn-swsp__intro">
                      Review each subcategory: merge what says the same thing, dismiss what does not
                      belong, and mark it reviewed.
                    </p>
                  </header>
                </section>
                <section class="bcn-ciidx" data-ci-index="">
                  <div class="bcn-ciidx__rollup">
                    <div class="esa-stat">
                      <div class="esa-stat__value typography-display-sm">854</div>
                      <div class="esa-stat__label typography-label-md">Requirements read</div>
                      <div class="esa-stat__sub typography-body-sm">294 commitments</div>
                    </div>
                    <div class="esa-stat">
                      <div class="esa-stat__value typography-display-sm">267</div>
                      <div class="esa-stat__label typography-label-md">Actions</div>
                    </div>
                    <!-- …and 2 more like this (<div class="esa-stat">) -->
                    <div data-ci-approved-stat="">
                      <div class="esa-stat">
                        <div class="esa-stat__value typography-display-sm">0</div>
                        <div class="esa-stat__label typography-label-md">
                          Subcategories reviewed
                        </div>
                        <div class="esa-stat__sub typography-body-sm">of 76</div>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-ciidx__tools">
                    <esa-text-field
                      class="bcn-ciidx__search"
                      label="Search the index"
                      placeholder="e.g. Fugitive dust"
                      size="sm"
                      data-ci-search="true"
                    ></esa-text-field
                    ><esa-button-toggle
                      label="Review state"
                      size="sm"
                      value="all"
                      options='[{"label":"All","value":"all"},{"label":"Not reviewed","value":"open"},{"label":"Reviewed","value":"approved"}]'
                      data-ci-filter="true"
                    ></esa-button-toggle
                    ><span class="bcn-ciidx__verbs"
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          data-ci-expand="true"
                        >
                          <span class="esa-button__label">Expand all</span>
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          data-ci-collapse="true"
                        >
                          <span class="esa-button__label">Collapse all</span>
                        </button></span
                      ></span
                    >
                  </div>
                  <div class="bcn-ciidx__list">
                    <section class="bcn-ciidx__cat" data-cat="agency-reporting-and-approvals">
                      <h3 class="bcn-ciidx__row bcn-ciidx__row--cat">
                        Agency reporting and approvals
                      </h3>
                      <ul class="bcn-ciidx__subs">
                        <li
                          class="bcn-ciidx__sub"
                          data-bin="agency-reporting-and-approvals--agency-approvals"
                          data-name="agency reporting and approvals agency approvals"
                        >
                          <div class="bcn-ciidx__row bcn-ciidx__row--sub">
                            <button
                              type="button"
                              class="bcn-ciidx__chev"
                              aria-expanded="false"
                              aria-label="Show Agency approvals"
                              data-ci-toggle=""
                            >
                              <span class="esa-icon esa-icon--xs" aria-hidden="true"
                                ><svg
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
                                  <path d="m9 18 6-6-6-6"></path></svg
                              ></span></button
                            ><span class="bcn-ciidx__sub-name">Agency approvals</span
                            ><span class="bcn-ciidx__review" data-state-open=""
                              ><span
                                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--xs"
                                ><button
                                  class="esa-button__native typography-microcopy-2xs"
                                  type="button"
                                  data-ci-open="agency-reporting-and-approvals--agency-approvals"
                                >
                                  <span class="esa-button__label">Review</span>
                                </button></span
                              ></span
                            ><span class="bcn-ciidx__review" data-state-approved="" hidden=""
                              ><span
                                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--xs"
                                ><button
                                  class="esa-button__native typography-microcopy-2xs"
                                  type="button"
                                  data-ci-open="agency-reporting-and-approvals--agency-approvals"
                                  data-ci-reviewed="true"
                                >
                                  <span class="esa-icon esa-icon--xs" aria-hidden="true"
                                    ><svg
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
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="m9 12 2 2 4-4"></path></svg></span
                                  ><span class="esa-button__label">Reviewed</span>
                                </button></span
                              ></span
                            >
                          </div>
                          <ul class="bcn-ciidx__items" data-ci-items="" hidden="">
                            <li
                              class="bcn-ciidx__item"
                              data-ci-item="act_01M2G6Y34V8WHD9WZSVEXW30W6"
                              data-text="notify and consult cdfw on itp amendment conditions"
                            >
                              <span class="bcn-ci-chip" data-class="action" data-ci-chip=""
                                >Action</span
                              ><span class="bcn-ciidx__item-title" data-ci-title=""
                                >Notify and Consult CDFW on ITP Amendment Conditions</span
                              ><span
                                class="bcn-ciidx__item-merged"
                                data-ci-merged=""
                                hidden=""
                              ></span>
                            </li>
                            <li
                              class="bcn-ciidx__item"
                              data-ci-item="act_01M2G6Y34ZRWNWJ42W3E737QZR"
                              data-text="consult cdfw on federal biological opinions"
                            >
                              <span class="bcn-ci-chip" data-class="action" data-ci-chip=""
                                >Action</span
                              ><span class="bcn-ciidx__item-title" data-ci-title=""
                                >Consult CDFW on Federal Biological Opinions</span
                              ><span
                                class="bcn-ciidx__item-merged"
                                data-ci-merged=""
                                hidden=""
                              ></span>
                            </li>
                            <!-- …and 4 more like this (<li class="bcn-ciidx__item">) -->
                          </ul>
                        </li>
                        <li
                          class="bcn-ciidx__sub"
                          data-bin="agency-reporting-and-approvals--non-compliance-reporting"
                          data-name="agency reporting and approvals non-compliance reporting"
                        >
                          <div class="bcn-ciidx__row bcn-ciidx__row--sub">
                            <button
                              type="button"
                              class="bcn-ciidx__chev"
                              aria-expanded="false"
                              aria-label="Show Non-compliance reporting"
                              data-ci-toggle=""
                            >
                              <span class="esa-icon esa-icon--xs" aria-hidden="true"
                                ><svg
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
                                  <path d="m9 18 6-6-6-6"></path></svg
                              ></span></button
                            ><span class="bcn-ciidx__sub-name">Non-compliance reporting</span
                            ><span class="bcn-ciidx__review" data-state-open=""
                              ><span
                                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--xs"
                                ><button
                                  class="esa-button__native typography-microcopy-2xs"
                                  type="button"
                                  data-ci-open="agency-reporting-and-approvals--non-compliance-reporting"
                                >
                                  <span class="esa-button__label">Review</span>
                                </button></span
                              ></span
                            ><span class="bcn-ciidx__review" data-state-approved="" hidden=""
                              ><span
                                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--xs"
                                ><button
                                  class="esa-button__native typography-microcopy-2xs"
                                  type="button"
                                  data-ci-open="agency-reporting-and-approvals--non-compliance-reporting"
                                  data-ci-reviewed="true"
                                >
                                  <span class="esa-icon esa-icon--xs" aria-hidden="true"
                                    ><svg
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
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="m9 12 2 2 4-4"></path></svg></span
                                  ><span class="esa-button__label">Reviewed</span>
                                </button></span
                              ></span
                            >
                          </div>
                          <ul class="bcn-ciidx__items" data-ci-items="" hidden="">
                            <li
                              class="bcn-ciidx__item"
                              data-ci-item="act_01M2G6Y3RB67EQDRWNDJBKFW6N"
                              data-text="report itp non-compliance to cdfw"
                            >
                              <span class="bcn-ci-chip" data-class="action" data-ci-chip=""
                                >Action</span
                              ><span class="bcn-ciidx__item-title" data-ci-title=""
                                >Report ITP Non-Compliance to CDFW</span
                              ><span
                                class="bcn-ciidx__item-merged"
                                data-ci-merged=""
                                hidden=""
                              ></span>
                            </li>
                            <li
                              class="bcn-ciidx__item"
                              data-ci-item="act_01M2G6Y3RB67EQDRWNDJBKFW6P"
                              data-text="notify cdfw of inability to comply with the itp"
                            >
                              <span class="bcn-ci-chip" data-class="action" data-ci-chip=""
                                >Action</span
                              ><span class="bcn-ciidx__item-title" data-ci-title=""
                                >Notify CDFW of Inability to Comply with the ITP</span
                              ><span
                                class="bcn-ciidx__item-merged"
                                data-ci-merged=""
                                hidden=""
                              ></span>
                            </li>
                            <li
                              class="bcn-ciidx__item"
                              data-ci-item="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                              data-ci-also=""
                              data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            >
                              <span class="bcn-ci-chip" data-class="notify" data-ci-chip=""
                                >Notify</span
                              ><span class="bcn-ciidx__item-title" data-ci-title=""
                                >Biological Monitor daily communication and immediate reports to the
                                Designated Biologist</span
                              ><span
                                class="bcn-ciidx__item-merged"
                                data-ci-merged=""
                                hidden=""
                              ></span>
                            </li>
                          </ul>
                        </li>
                        <!-- …and 4 more like this (<li class="bcn-ciidx__sub">) -->
                      </ul>
                    </section>
                    <section class="bcn-ciidx__cat" data-cat="air-quality">
                      <h3 class="bcn-ciidx__row bcn-ciidx__row--cat">Air quality</h3>
                      <ul class="bcn-ciidx__subs">
                        <li
                          class="bcn-ciidx__sub"
                          data-bin="air-quality--fugitive-dust"
                          data-name="air quality fugitive dust"
                        >
                          <div class="bcn-ciidx__row bcn-ciidx__row--sub">
                            <button
                              type="button"
                              class="bcn-ciidx__chev"
                              aria-expanded="false"
                              aria-label="Show Fugitive dust"
                              data-ci-toggle=""
                            >
                              <span class="esa-icon esa-icon--xs" aria-hidden="true"
                                ><svg
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
                                  <path d="m9 18 6-6-6-6"></path></svg
                              ></span></button
                            ><span class="bcn-ciidx__sub-name">Fugitive dust</span
                            ><span class="bcn-ciidx__review" data-state-open=""
                              ><span
                                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--xs"
                                ><button
                                  class="esa-button__native typography-microcopy-2xs"
                                  type="button"
                                  data-ci-open="air-quality--fugitive-dust"
                                >
                                  <span class="esa-button__label">Review</span>
                                </button></span
                              ></span
                            ><span class="bcn-ciidx__review" data-state-approved="" hidden=""
                              ><span
                                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--xs"
                                ><button
                                  class="esa-button__native typography-microcopy-2xs"
                                  type="button"
                                  data-ci-open="air-quality--fugitive-dust"
                                  data-ci-reviewed="true"
                                >
                                  <span class="esa-icon esa-icon--xs" aria-hidden="true"
                                    ><svg
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
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="m9 12 2 2 4-4"></path></svg></span
                                  ><span class="esa-button__label">Reviewed</span>
                                </button></span
                              ></span
                            >
                          </div>
                          <ul class="bcn-ciidx__items" data-ci-items="" hidden="">
                            <li
                              class="bcn-ciidx__item"
                              data-ci-item="act_01M2G6Y3NMGVH2VJSMJC7KKSH8"
                              data-text="submit fugitive dust control and monitoring plan"
                            >
                              <span class="bcn-ci-chip" data-class="action" data-ci-chip=""
                                >Action</span
                              ><span class="bcn-ciidx__item-title" data-ci-title=""
                                >Submit Fugitive Dust Control and Monitoring Plan</span
                              ><span
                                class="bcn-ciidx__item-merged"
                                data-ci-merged=""
                                hidden=""
                              ></span>
                            </li>
                            <li
                              class="bcn-ciidx__item"
                              data-ci-item="act_01M2G6YKM817BXJNTVA76DKTZ5"
                              data-text="plant vegetative ground cover on disturbed areas"
                            >
                              <span class="bcn-ci-chip" data-class="action" data-ci-chip=""
                                >Action</span
                              ><span class="bcn-ciidx__item-title" data-ci-title=""
                                >Plant Vegetative Ground Cover on Disturbed Areas</span
                              ><span
                                class="bcn-ciidx__item-merged"
                                data-ci-merged=""
                                hidden=""
                              ></span>
                            </li>
                            <!-- …and 13 more like this (<li class="bcn-ciidx__item">) -->
                          </ul>
                        </li>
                      </ul>
                    </section>
                    <!-- …and 13 more like this (<section class="bcn-ciidx__cat">) -->
                    <div data-ci-empty="" hidden="">
                      <div class="esa-empty-state esa-empty-state--sm">
                        <h3 class="esa-empty-state__title typography-label-sm-strong">
                          Nothing in the index matches
                        </h3>
                        <p class="esa-empty-state__description typography-body-xs">
                          Clear the search or the review filter.
                        </p>
                        <div class="esa-empty-state__actions typography-label-md"></div>
                      </div>
                    </div>
                  </div>
                </section>
                <!-- script type="module" removed (0 bytes) -->
              </div>
              <!-- script type="module" removed (0 bytes) --><esa-dialog
                size="lg"
                class="bcn-cirev"
                data-ci-review="true"
                data-pdf="/beacon-design/source-docs/itp.pdf"
                style="--dialog-width-lg: min(1440px, 94vw); --_dialog-max-height: 90vh"
                ><div slot="header" class="bcn-cirev__head">
                  <span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      aria-label="Previous subcategory"
                      title="Previous subcategory"
                      data-rev-prev="true"
                    >
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
                          <path d="m15 18-6-6 6-6"></path></svg
                      ></span></button></span
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      aria-label="Next subcategory"
                      title="Next subcategory"
                      data-rev-next="true"
                    >
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
                          <path d="m9 18 6-6-6-6"></path></svg
                      ></span></button
                  ></span>
                  <div class="bcn-cirev__heading">
                    <span class="bcn-cirev__crumb" data-rev-cat=""></span>
                    <h2 class="bcn-cirev__title" data-rev-title="">Subcategory</h2>
                  </div>
                  <span class="bcn-cirev__pos" data-rev-pos=""></span>
                </div>
                <div class="bcn-cirev__body">
                  <div class="bcn-cirev__tree">
                    <div class="bcn-cirev__tools">
                      <div class="bcn-cirev__tools-row">
                        <span
                          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            data-rev-new="action"
                          >
                            <span class="esa-button__label">New action</span>
                          </button></span
                        ><span
                          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            data-rev-new="obligation"
                          >
                            <span class="esa-button__label">New obligation</span>
                          </button></span
                        ><span class="bcn-cirev__spacer"></span
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            data-rev-expand="true"
                          >
                            <span class="esa-button__label">Expand all</span>
                          </button></span
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            data-rev-collapse="true"
                          >
                            <span class="esa-button__label">Collapse all</span>
                          </button></span
                        >
                      </div>
                      <div class="bcn-cirev__tools-row">
                        <span class="bcn-cirev__sel" data-rev-sel="">Nothing selected</span
```
