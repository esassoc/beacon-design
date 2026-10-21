# Nesting Birds and Raptors: markup

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
        ><span class="project-switcher__name">Select a Project</span
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
          <li class="nav-item"><a href="#dc-projects" class="nav-sublink">Projects</a></li>
          <li class="nav-item">
            <a href="#dc-source-documents" class="nav-sublink">Source Documents</a>
          </li>
          <!-- …and 5 more like this (<li class="nav-item">) -->
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
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path
                  d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                ></path></svg></span
            ><a class="breadcrumb-item" href="#data-catalog">Data Catalog</a
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
                <path d="m9 18 6-6-6-6"></path></svg></span
            ><a class="breadcrumb-item" href="#data-catalog/commitments">Commitments</a
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
                <path d="m9 18 6-6-6-6"></path></svg></span
            ><span class="breadcrumb-item" aria-current="page">MM-BIO-2</span>
          </div>
        </nav>
      </section>
      <div class="page-layout__container">
        <section class="page-layout__title">
          <div class="page-layout__title-main"><h1>Nesting Birds and Raptors</h1></div>
        </section>
        <section class="page-layout__content">
          <div class="bcn-cmt">
            <!-- Identity header — ID badge on top, serif title, type badge + version chip. -->
            <header class="bcn-cmt__head">
              <div class="bcn-cmt__identity">
                <span class="bcn-cmt__badge bcn-cmt__badge--commitment">MM-BIO-2</span>
                <div class="bcn-cmt__title-row">
                  <h1 class="bcn-cmt__title">Nesting Birds and Raptors</h1>
                  <span class="bcn-cmt__badge bcn-cmt__badge--type">Mitigation Measure</span
                  ><span class="bcn-cmt__badge bcn-cmt__badge--type">v.2</span>
                </div>
              </div>
              <div class="bcn-cmt__head-actions">
                <span id="edit-cmt"
                  ><span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
                      <span class="esa-button__label"
                        ><span class="bcn-btn-ico"
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
                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                              ></path>
                              <path d="m15 5 4 4"></path></svg></span
                          >Edit commitment</span
                        ></span
                      >
                    </button></span
                  ></span
                >
              </div>
            </header>
            <div class="bcn-cmt__body">
              <div class="bcn-cmt__main">
                <!-- Full commitment text — serif regulatory voice, bulleted as parsed. -->
                <section class="bcn-cmt__section">
                  <h2 class="bcn-section-title">Full Commitment Text</h2>
                  <article class="bcn-cmttext">
                    <ul class="bcn-cmttext__list">
                      <li class="bcn-cmttext__item">
                        <strong>Pre-Construction Survey:</strong> If construction,
                        ground-disturbing, or vegetation-removal activities would occur during the
                        nesting season (February 1 – August 31), a qualified biologist shall conduct
                        a pre-construction survey for nesting raptors and other migratory birds
                        within 14 days prior to the start of those activities.
                      </li>
                      <li class="bcn-cmttext__item">
                        <strong>No-Disturbance Buffers:</strong> If active nests are found, the
                        biologist shall establish appropriate no-disturbance buffer zones around
                        each nest, to remain in place until young have fledged.
                      </li>
                      <!-- …and 2 more like this (<li class="bcn-cmttext__item">) -->
                    </ul>
                    <footer class="bcn-cmttext__footer">
                      <span data-bcn-source=""
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                          ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <!-- …and 3 more like this (<path>) -->
                              </svg></span
                            ><span class="esa-button__label">View in Source Document</span>
                          </button></span
                        ></span
                      >
                    </footer>
                  </article>
                </section>
                <!-- Requirements — one flat list, single Add, keyword + Phase + Type filters. -->
                <section class="bcn-cmt__section">
                  <header class="bcn-cmt__section-head">
                    <h2 class="bcn-section-title">
                      Requirements
                      <span class="bcn-count-neutral"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">4</span></span
                        ></span
                      >
                    </h2>
                    <span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
                      ><a class="esa-button__native typography-microcopy-xs" href="#add-requirement"
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
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path></svg></span
                        ><span class="esa-button__label">Add requirement</span></a
                      ></span
                    >
                  </header>
                  <div class="bcn-reqfilters">
                    <esa-text-field
                      id="req-search"
                      placeholder="Search requirements…"
                      size="md"
                    ></esa-text-field>
                    <div class="bcn-reqfilters__row">
                      <div
                        class="esa-filter-container typography-label-md"
                        style="
                          --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
                          --_filter-container-row-gap: var(--spacing-200, 0.5rem);
                        "
                      >
                        <esa-filter-dropdown
                          id="flt-phase"
                          label="Phase"
                          size="sm"
                        ></esa-filter-dropdown
                        ><esa-filter-dropdown
                          id="flt-type"
                          label="Type"
                          size="sm"
                        ></esa-filter-dropdown>
                      </div>
                      <span id="req-clear-filters"
                        ><button
                          class="esa-filter-clear-button typography-microcopy-sm"
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
                          ><span class="esa-filter-clear-button__label">Clear all</span></button
                        ><!-- script type="module" removed (173 bytes) --></span
                      >
                    </div>
                  </div>
                  <ul class="bcn-row-list" id="req-list">
                    <li
                      class="bcn-row-li"
                      data-name="pre-construction survey for nesting raptors and other migratory birds during nesting season"
                      data-phase="Pre-Construction"
                      data-type="Survey"
                    >
                      <a class="bcn-row" href="/beacon-design/prototypes/data-catalog-requirement"
                        ><span class="bcn-cmt__badge bcn-cmt__badge--commitment">MM-BIO-2</span
                        ><span class="bcn-row__name"
                          >Pre-construction survey for nesting raptors and other migratory birds
                          during nesting season</span
                        ><span class="bcn-cmt__badge bcn-cmt__badge--type">Survey</span
                        ><span class="bcn-cmt__badge bcn-cmt__badge--phase">Pre-Construction</span
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
                            <path d="m9 18 6-6-6-6"></path></svg></span
                      ></a>
                    </li>
                    <li
                      class="bcn-row-li"
                      data-name="if bird nests are found, establish no-disturbance buffer zones"
                      data-phase="Construction"
                      data-type="Other"
                    >
                      <a class="bcn-row" href="#data-catalog/requirements/mm-bio-2-buffers"
                        ><span class="bcn-cmt__badge bcn-cmt__badge--commitment">MM-BIO-2</span
                        ><span class="bcn-row__name"
                          >If bird nests are found, establish no-disturbance buffer zones</span
                        ><span class="bcn-cmt__badge bcn-cmt__badge--type">Other</span
                        ><span class="bcn-cmt__badge bcn-cmt__badge--phase">Construction</span
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
                            <path d="m9 18 6-6-6-6"></path></svg></span
                      ></a>
                    </li>
                    <!-- …and 2 more like this (<li class="bcn-row-li">) -->
                  </ul>
                  <div class="bcn-reqs__empty" id="req-empty" hidden="">
                    <div class="esa-empty-state esa-empty-state--sm">
                      <h3 class="esa-empty-state__title typography-label-sm-strong">
                        No requirements match your filters
                      </h3>
                      <div class="esa-empty-state__actions typography-label-md"></div>
                    </div>
                  </div>
                </section>
                <section class="bcn-cmt__section">
                  <h2 class="bcn-section-title">
                    Files
                    <span id="cmt-files-count" class="bcn-count-neutral"
                      ><span
                        class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">2</span></span
                      ></span
                    >
                  </h2>
                  <esa-file-list
                    id="cmt-files"
                    removable=""
                    data-src="/beacon-design/source-docs/feir-sample.pdf"
                    downloadable=""
                  ></esa-file-list>
                </section>
              </div>
              <aside class="bcn-cmt__rail">
                <!-- Lineage leads the rail — one spine: ancestry (Project → Source Document →
               this Commitment, the current filled node) then child rollups. -->
                <details class="esa-collapsible" open="">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
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
                        <line x1="6" x2="6" y1="3" y2="15"></line>
                        <circle cx="18" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M18 9a9 9 0 0 1-9 9"></path></svg></span
                    ><span class="esa-collapsible__title">Lineage</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <ol class="bcn-lineage">
                      <li class="bcn-lineage__node">
                        <span class="bcn-lineage__icon"
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
                                d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                              ></path></svg></span></span
                        ><span class="bcn-lineage__body"
                          ><a class="bcn-lineage__kind" href="#data-catalog/projects">Project</a
                          ><a class="bcn-lineage__name" href="#data-catalog/projects/3600-alameda"
                            >3600 Alameda Avenue Project</a
                          ></span
                        >
                      </li>
                      <li class="bcn-lineage__node">
                        <span class="bcn-lineage__icon"
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
                        ><span class="bcn-lineage__body"
                          ><a class="bcn-lineage__kind" href="#data-catalog/source-documents"
                            >Source Document</a
                          ><a
                            class="bcn-lineage__name"
                            href="/beacon-design/prototypes/data-catalog-source-document"
                            >3600 Alameda Avenue Project FEIR</a
                          ></span
                        >
                      </li>
                      <li class="bcn-lineage__node bcn-lineage__node--current">
                        <span class="bcn-lineage__icon"
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
                              <path d="M15 12h-5"></path>
                              <path d="M15 8h-5"></path>
                              <!-- …and 2 more like this (<path>) -->
                            </svg></span
                          ></span
                        ><span class="bcn-lineage__body"
                          ><a class="bcn-lineage__kind" href="#data-catalog/commitments"
                            >Commitment</a
                          ><span class="bcn-lineage__name bcn-lineage__name--current"
                            >MM-BIO-2 — Nesting Birds and Raptors</span
                          ></span
                        >
                      </li>
                      <li class="bcn-lineage__node bcn-lineage__node--child">
                        <span class="bcn-lineage__icon"
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
                              <rect x="3" y="5" width="6" height="6" rx="1"></rect>
                              <path d="m3 17 2 2 4-4"></path>
                              <path d="M13 6h8"></path>
                              <!-- …and 2 more like this (<path>) -->
                            </svg></span
                          ></span
                        ><span class="bcn-lineage__body"
                          ><a
                            class="bcn-lineage__name"
                            href="/beacon-design/prototypes/data-catalog-requirement"
                            >Requirements</a
                          ></span
                        ><span class="bcn-count-neutral"
                          ><span
                            class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">4</span></span
                          ></span
                        >
                      </li>
                      <!-- …and 1 more like this (<li class="bcn-lineage__node">) -->
                    </ol>
                  </div>
                </details>
                <details class="esa-collapsible" open="">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path></svg></span
                    ><span class="esa-collapsible__title">Details</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Type</span
                      ><span class="bcn-key-value__val">Mitigation Measure</span>
                    </div>
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Resource Category</span
                      ><span class="bcn-key-value__val">Biological Resources</span>
                    </div>
                    <!-- …and 2 more like this (<div class="bcn-key-value">) -->
                    <p class="bcn-rail-meta">Created Jan 8, 2026 · Updated Jun 3, 2026</p>
                  </div>
                </details>
                <!-- …and 3 more like this (<details class="esa-collapsible">) --><!-- Revisions — the prod Revision History version chain. Add New Version +
               per-version Edit (current only); no delete/revert/diff (faithful to prod). -->
              </aside>
            </div>
            <!-- Danger zone — GitHub layout; opens a simple confirm, matching prod. -->
            <section class="bcn-danger-zone" aria-labelledby="bcn-danger-zone-1">
              <h2 class="bcn-danger-zone__heading" id="bcn-danger-zone-1">Danger Zone</h2>
              <div class="bcn-danger-zone__box">
                <div class="bcn-danger-zone__item">
                  <div class="bcn-danger-zone__text">
                    <h3 class="bcn-danger-zone__title">Delete this commitment</h3>
                    <p class="bcn-danger-zone__desc">
                      Deleting this commitment also deletes all requirements and actions defined
                      under it. This action cannot be undone.
                    </p>
                  </div>
                  <div class="bcn-danger-zone__action">
                    <span id="delete-cmt"
                      ><span
                        class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--md"
                        ><button class="esa-button__native typography-microcopy-md" type="button">
                          <span class="esa-button__label">Delete commitment</span>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
    <esa-dialog
      id="edit-dialog"
      heading="Edit Commitment"
      style="
        --_dialog-width: 760px;
        --_dialog-max-height: 92vh;
        --_dialog-bg: var(--color-background-elevation-raised, #fff);
        --z-modal-backdrop: 1150;
        --z-modal: 1200;
      "
      size="md"
      ><div class="bcn-form bcn-form--dialog">
        <esa-text-field id="c-title" label="Title" required="" size="md"></esa-text-field>
        <div class="bcn-grid-2">
          <esa-text-field id="c-id" label="Commitment ID" required="" size="md"></esa-text-field
          ><esa-select id="c-doc" label="Source Document" required="true" size="md"></esa-select>
        </div>
        <div class="bcn-grid-2">
          <esa-select id="c-type" label="Commitment Type" required="true" size="md"></esa-select
          ><esa-select id="c-cat" label="Resource Category" size="md"></esa-select>
        </div>
        <esa-textarea id="c-guidance" label="General Guidance" rows="3" size="md"></esa-textarea
        ><esa-input-tag id="c-tags" label="Tags" size="md"></esa-input-tag
        ><esa-textarea id="c-text" label="Full Commitment Text" rows="10" size="md"></esa-textarea>
      </div>
      <div slot="footer" class="bcn-editor__foot">
        <span id="ec-cancel"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Cancel</span>
            </button></span
          ></span
        ><span id="ec-save"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Save</span>
            </button></span
          ></span
        >
      </div></esa-dialog
    ><esa-dialog
      id="rev-add-dialog"
      heading="Add New Version"
      style="
        --_dialog-width: 640px;
        --_dialog-max-height: 92vh;
        --_dialog-bg: var(--color-background-elevation-raised, #fff);
        --z-modal-backdrop: 1150;
        --z-modal: 1200;
      "
      size="md"
      ><div class="bcn-form bcn-form--dialog">
        <esa-text-field
          id="rv-originator"
          label="Originator of Change"
          required=""
          size="md"
        ></esa-text-field
        ><esa-date-picker id="rv-effective" label="Effective Date" size="md"></esa-date-picker
        ><esa-textarea
          id="rv-summary"
          label="Summary of Change"
          rows="4"
          required=""
          size="md"
        ></esa-textarea>
        <div class="bcn-field">
          <span class="bcn-field__label">Files</span
          ><esa-file-upload
            label="Drag &amp;amp; drop files, or browse"
            multiple="true"
            accept=".pdf,.csv,.xlsx"
            name="files"
          ></esa-file-upload>
        </div>
      </div>
      <div slot="footer" class="bcn-editor__foot">
        <span id="rv-cancel"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Cancel</span>
            </button></span
          ></span
        ><span id="rv-save"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Add version</span>
            </button></span
          ></span
        >
      </div></esa-dialog
    ><esa-dialog
      id="rev-edit-dialog"
      heading="Edit Version Metadata"
      style="
        --_dialog-width: 640px;
        --_dialog-max-height: 92vh;
        --_dialog-bg: var(--color-background-elevation-raised, #fff);
        --z-modal-backdrop: 1150;
        --z-modal: 1200;
      "
      size="md"
      ><div class="bcn-form bcn-form--dialog">
        <esa-text-field
          id="re-originator"
          label="Originator of Change"
          required=""
          size="md"
        ></esa-text-field
        ><esa-date-picker id="re-effective" label="Effective Date" size="md"></esa-date-picker
        ><esa-textarea
          id="re-summary"
          label="Summary of Change"
          rows="4"
          required=""
          size="md"
        ></esa-textarea>
      </div>
      <div slot="footer" class="bcn-editor__foot">
        <span id="re-cancel"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Cancel</span>
            </button></span
          ></span
        ><span id="re-save"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Save</span>
            </button></span
          ></span
        >
      </div></esa-dialog
    ><esa-side-dialog
      id="source-drawer"
      heading="3600 Alameda Avenue Project FEIR"
      size="lg"
      style="
        --_width: 66vw;
        --z-modal: 1300;
        --z-modal-backdrop: 1250;
        --side-dialog-backdrop-filter: blur(4px);
      "
      position="right"
      ><div class="bcn-source-pdf">
        <iframe
          class="bcn-source-pdf__frame"
          src="/beacon-design/source-docs/feir-sample.pdf#view=FitH&amp;navpanes=0&amp;pagemode=none"
          title="Source document — 3600 Alameda Avenue Project FEIR (sample)"
        ></iframe>
      </div>
      <span slot="footer" class="bcn-source-foot"
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
          ><a
            class="esa-button__native typography-microcopy-xs"
            href="/beacon-design/prototypes/data-catalog-source-document"
            ><span class="esa-button__label">Open Source Document</span
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
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path></svg></span></a></span></span></esa-side-dialog
    ><esa-confirm-dialog
      id="delete-confirm"
      variant="danger"
      heading="Delete Commitment"
      message="Are you sure you want to delete this commitment? Doing so will also delete all requirements and actions defined under it. This action cannot be undone."
      confirm-label="Delete"
      cancel-label="Cancel"
      style="--z-modal: 1400; --z-modal-backdrop: 1350"
    ></esa-confirm-dialog
    ><!-- script type="application/json" removed (1 KB) --><!-- script type="application/json" removed (67 bytes) -->
  </div>
</div>
```
