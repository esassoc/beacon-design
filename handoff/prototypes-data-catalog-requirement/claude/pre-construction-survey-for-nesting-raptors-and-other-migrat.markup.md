# Pre-construction survey for nesting raptors and other migrat: markup

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
            ><a class="breadcrumb-item" href="#data-catalog/requirements">Requirements</a
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
            ><span class="breadcrumb-item" aria-current="page"
              >Pre-construction survey for nesting raptors and other migratory birds during nesting
              season</span
            >
          </div>
        </nav>
      </section>
      <div class="page-layout__container">
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
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
                    ><button class="esa-button__native typography-microcopy-md" type="button">
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
                          >Edit requirement</span
                        ></span
                      >
                    </button></span
                  ></span
                >
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
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
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
                                    <path d="M15 12h-5"></path>
                                    <path d="M15 8h-5"></path>
                                    <!-- …and 2 more like this (<path>) -->
                                  </svg></span
                                >View Commitment Text</span
                              ></span
                            >
                          </button></span
                        ></span
                      ><span data-bcn-source=""
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
                <!-- Actions implementing this requirement — the jump-off to scheduling /
               evidence / notification config (which the Requirement does NOT own). -->
                <section class="bcn-req__section">
                  <h2 class="bcn-section-title">
                    Actions
                    <span
                      class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">1</span></span
                    >
                  </h2>
                  <ul class="bcn-action-list">
                    <li>
                      <a
                        class="bcn-linked-action"
                        href="/beacon-design/prototypes/data-catalog-action"
                        ><span class="bcn-req__badge bcn-req__badge--commitment">MM-BIO-2</span
                        ><span class="bcn-linked-action__name"
                          >Conduct Pre-Construction Nesting Bird &amp; Raptor Survey</span
                        ><span class="bcn-req__badge bcn-req__badge--type">Survey</span
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
                  </ul>
                </section>
              </div>
              <!-- Rail — Details / Related Data / Lineage. Deliberately NO Timing and
             NO Notifications modules: those are Action config in the standard model. -->
              <aside class="bcn-req__rail">
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
                      ><span class="bcn-key-value__val">Survey</span>
                    </div>
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Scope</span
                      ><span class="bcn-key-value__val">Project</span>
                    </div>
                    <!-- …and 2 more like this (<div class="bcn-key-value">) -->
                    <p class="bcn-rail-meta">Created Feb 12, 2026 · Updated Jun 3, 2026</p>
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
                        <path
                          d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                        ></path>
                        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg></span
                    ><span class="esa-collapsible__title">Related Data</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Phases</span
                      ><span class="bcn-key-value__val">Pre-Construction</span>
                    </div>
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Species</span
                      ><span class="bcn-key-value__val">Nesting raptors, Migratory birds</span>
                    </div>
                    <!-- …and 3 more like this (<div class="bcn-key-value">) -->
                  </div>
                </details>
                <!-- Lineage — Project → Source Document → Commitment → this Requirement,
               on a connecting rail (the BcnChangeLog spine treatment). -->
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
                          ><span class="bcn-lineage__kind">Project</span
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
                          ><span class="bcn-lineage__kind">Source Document</span
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
                              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                              <path
                                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                              ></path>
                              <path d="m9 14 2 2 4-4"></path></svg></span></span
                        ><span class="bcn-lineage__body"
                          ><span class="bcn-lineage__kind">Requirement</span
                          ><span class="bcn-lineage__name bcn-lineage__name--current"
                            >Pre-construction survey for nesting raptors and other migratory birds
                            during nesting season</span
                          ></span
                        >
                      </li>
                      <!-- …and 1 more like this (<li class="bcn-lineage__node">) -->
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
        --_dialog-bg: var(--color-background-elevation-raised, #fff);
        --z-modal-backdrop: 1150;
        --z-modal: 1200;
      "
      ><div slot="header" class="bcn-editor__head">
        <span class="bcn-editor__head-title"
          >Pre-construction survey for nesting raptors and other migratory birds during nesting
          season</span
        ><span class="bcn-req__badge bcn-req__badge--type">Survey</span>
      </div>
      <div class="bcn-editor">
        <!-- LEFT: parent commitment context (read) -->
        <section class="bcn-context" aria-label="Commitment context">
          <div class="bcn-context__commitment">
            <span class="bcn-req__badge bcn-req__badge--commitment">MM-BIO-2</span
            ><span class="bcn-context__commitment-title">Nesting Birds and Raptors</span>
          </div>
          <p class="bcn-context__text">
            If construction, ground-disturbing, or vegetation-removal activities would occur during
            the nesting season (February 1 – August 31), a qualified biologist shall conduct a
            pre-construction survey for nesting raptors and other migratory birds within 14 days
            prior to the start of those activities. If active nests are found, the biologist shall
            establish appropriate no-disturbance buffer zones around each nest, to remain in place
            until young have fledged. If work must occur within an established buffer zone, it shall
            proceed only under biological monitoring, and a report of findings documenting any such
            work shall be submitted to the City.
          </p>
          <div class="bcn-context__actions">
            <span id="ctx-source"
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
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
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <!-- …and 3 more like this (<path>) -->
                    </svg></span
                  ><span class="esa-button__label">View in Source Document</span>
                </button></span
              ></span
            >
          </div>
        </section>
        <!-- RIGHT: single-pane upsert form (prod RequirementUpsertDto field set) -->
        <section class="bcn-config" aria-label="Requirement reference data">
          <div class="bcn-form">
            <esa-text-field id="d-name" label="Name" required="" size="md"></esa-text-field
            ><esa-textarea id="d-text" label="Requirement Text" rows="5" size="md"></esa-textarea>
            <div class="bcn-grid-2">
              <esa-select id="d-type" label="Type" size="md"></esa-select
              ><esa-select id="d-scope" label="Scope" size="md"></esa-select>
            </div>
            <esa-input-tag id="d-phases" label="Phases" size="md"></esa-input-tag
            ><!-- Entity fields carry the setup wizard's "+" affordance — a creation
               drawer for lookup values that don't exist yet (Tags create inline). -->
            <div class="bcn-grid-2">
              <div class="bcn-field-add">
                <esa-input-tag id="d-species" label="Species" size="md"></esa-input-tag
                ><span class="bcn-field-add__btn" data-add-entity="Species" data-target="d-species"
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-2xs"
                      type="button"
                      aria-label="Add new species"
                      title="Add new species"
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
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path></svg
                      ></span></button></span
                ></span>
              </div>
              <div class="bcn-field-add">
                <esa-input-tag id="d-seasons" label="Seasons" size="md"></esa-input-tag
                ><span class="bcn-field-add__btn" data-add-entity="Season" data-target="d-seasons"
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-2xs"
                      type="button"
                      aria-label="Add new season"
                      title="Add new season"
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
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path></svg
                      ></span></button></span
                ></span>
              </div>
            </div>
            <div class="bcn-field-add">
              <esa-input-tag
                id="d-activities"
                label="Construction Activities"
                size="md"
              ></esa-input-tag
              ><span
                class="bcn-field-add__btn"
                data-add-entity="Construction Activity"
                data-target="d-activities"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Add new construction activity"
                    title="Add new construction activity"
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
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path></svg
                    ></span></button></span
              ></span>
            </div>
            <div class="bcn-grid-2">
              <div class="bcn-field-add">
                <esa-input-tag id="d-milestones" label="Milestones" size="md"></esa-input-tag
                ><span
                  class="bcn-field-add__btn"
                  data-add-entity="Milestone"
                  data-target="d-milestones"
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-2xs"
                      type="button"
                      aria-label="Add new milestone"
                      title="Add new milestone"
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
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path></svg
                      ></span></button></span
                ></span>
              </div>
              <esa-input-tag id="d-tags" label="Tags" size="md"></esa-input-tag>
            </div>
          </div>
        </section>
      </div>
      <div slot="footer" class="bcn-editor__foot">
        <span id="er-cancel"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Cancel</span>
            </button></span
          ></span
        ><span id="er-save"
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
    ><esa-side-dialog
      id="commitment-drawer"
      heading="MM-BIO-2 — Nesting Birds and Raptors"
      style="
        --_width: 560px;
        --z-modal: 1300;
        --z-modal-backdrop: 1250;
        --side-dialog-backdrop-filter: blur(4px);
      "
      position="right"
      size="md"
      ><span slot="header" class="bcn-drawer-head"
        ><span class="bcn-req__badge bcn-req__badge--commitment">MM-BIO-2</span
        ><span class="bcn-drawer-head__title">Nesting Birds and Raptors</span></span
      >
      <div class="bcn-parsed">
        <p class="bcn-parsed__title">Mitigation Measure BIO-2: Nesting Birds and Raptors.</p>
        <ul class="bcn-parsed__list">
          <li class="bcn-parsed__item">
            <strong>Pre-Construction Survey:</strong> If construction, ground-disturbing, or
            vegetation-removal activities would occur during the nesting season (February 1 – August
            31), a qualified biologist shall conduct a pre-construction survey for nesting raptors
            and other migratory birds within 14 days prior to the start of those activities.
          </li>
          <li class="bcn-parsed__item">
            <strong>No-Disturbance Buffers:</strong> If active nests are found, the biologist shall
            establish appropriate no-disturbance buffer zones around each nest, to remain in place
            until young have fledged.
          </li>
          <!-- …and 2 more like this (<li class="bcn-parsed__item">) -->
        </ul>
      </div>
      <span slot="footer" class="bcn-source-foot"
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
          ><a
            class="esa-button__native typography-microcopy-xs"
            href="/beacon-design/prototypes/data-catalog-commitment"
            ><span class="esa-button__label">Open Commitment</span
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
    ><esa-side-dialog
      id="entity-drawer"
      heading="Add Entity"
      style="--_width: 420px; --z-modal: 1300; --z-modal-backdrop: 1250"
      position="right"
      size="md"
      ><div class="bcn-entity-form">
        <esa-text-field id="ent-name" label="Name" required="" size="md"></esa-text-field>
        <div id="ent-date-wrap" class="bcn-entity-form__date">
          <esa-date-picker id="ent-date" label="Estimated Date" size="md"></esa-date-picker
          ><span class="bcn-field__hint">Optional — leave blank if not yet known.</span>
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
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Cancel</span>
            </button></span
          ></span
        ><span id="ent-add"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Add</span>
            </button></span
          ></span
        >
      </div></esa-side-dialog
    ><!-- script type="application/json" removed (659 bytes) -->
  </div>
</div>
```
