# Almond: markup

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
        ><span class="project-switcher__name">Almond</span
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
        <a
          href="/beacon-design/prototypes/due-diligence-siting"
          class="nav-section__header nav-section__header--link"
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
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path></svg></span
          ><span class="nav-section__title">Site Screening</span></a
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
          ><span class="nav-section__title">Due Diligence</span
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
            <a href="/beacon-design/prototypes/due-diligence-overview" class="nav-sublink active"
              >Overview</a
            >
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/due-diligence-boundary" class="nav-sublink"
              >Project Boundary</a
            >
          </li>
          <!-- …and 3 more like this (<li class="nav-item">) -->
        </ul>
      </div>
      <hr class="nav-divider" aria-hidden="true" />
      <div class="nav-section">
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <!-- …and 3 more like this (<path>) -->
            </svg></span
          ><span class="nav-section__title">Permitting</span
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
            <a href="/beacon-design/prototypes/permitting-dashboard" class="nav-sublink"
              >Permit Dashboard</a
            >
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/permitting-details" class="nav-sublink"
              >Permit Details</a
            >
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
            ><a class="breadcrumb-item" href="/beacon-design/prototypes/due-diligence-siting"
              >Due Diligence</a
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
            ><span class="breadcrumb-item" aria-current="page">Almond</span>
          </div>
        </nav>
      </section>
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
                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                  <!-- …and 2 more like this (<rect>) -->
                </svg></span
              >Almond
            </h1>
            <div>
              <span
                class="bcn-status-chip"
                data-status="phase"
                style="--_chip: var(--st-phase, #4a90d9)"
                ><span class="bcn-status-chip__dot"></span
                ><span class="bcn-status-chip__label">Due Diligence</span></span
              ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
            </div>
          </div>
          <div class="page-layout__utilities">
            <div>
              <span id="ov-export"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
                  ><button class="esa-button__native typography-microcopy-md" type="button">
                    <span class="esa-icon esa-icon--md" aria-hidden="true"
                      ><svg
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
                        <line x1="12" x2="12" y1="15" y2="3"></line></svg></span
                    ><span class="esa-button__label">Export</span>
                  </button></span
                ></span
              ><a href="/beacon-design/prototypes/due-diligence-report"
                ><span
                  class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
                  ><button class="esa-button__native typography-microcopy-md" type="button">
                    <span class="esa-icon esa-icon--md" aria-hidden="true"
                      ><svg
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
                        <!-- …and 3 more like this (<path>) -->
                      </svg></span
                    ><span class="esa-button__label">Open report</span>
                  </button></span
                ></a
              >
            </div>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="stack" data-gap="xl">
            <div class="esa-card">
              <div class="esa-card__header">
                <div class="esa-card__header-content">
                  <div class="esa-card__titles">
                    <h3 class="esa-card__title typography-title-sm-strong">
                      Due Diligence Workflow
                    </h3>
                  </div>
                </div>
              </div>
              <div class="esa-card__body typography-body-md">
                <ol class="bcn-dds grid" data-gap="md">
                  <li class="bcn-dds__step">
                    <a
                      class="bcn-dds__tile stack"
                      data-gap="sm"
                      data-tone="success"
                      href="/beacon-design/prototypes/due-diligence-boundary"
                      ><span class="bcn-dds__top repel" data-gap="xs"
                        ><span class="bcn-dds__mark"
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
                                d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
                              ></path>
                              <circle cx="12" cy="8" r="2"></circle>
                              <path
                                d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
                              ></path></svg></span></span
                        ><span
                          class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Defined</span></span
                        ></span
                      ><span class="bcn-dds__title-row repel" data-gap="xs"
                        ><span class="bcn-dds__label typography-title">Project Boundary</span
                        ><span class="bcn-dds__chev" aria-hidden="true"
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
                              <path d="m9 18 6-6-6-6"></path></svg></span></span></span
                      ><span class="bcn-dds__desc typography-body-sm"
                        >Drawn on map · 340 ac · 4 parcels · last edited 2026-06-12</span
                      ></a
                    >
                  </li>
                  <li class="bcn-dds__step">
                    <a
                      class="bcn-dds__tile stack"
                      data-gap="sm"
                      data-tone="warning"
                      href="/beacon-design/prototypes/due-diligence-constraints"
                      ><span class="bcn-dds__top repel" data-gap="xs"
                        ><span class="bcn-dds__mark"
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
                                d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                              ></path>
                              <path
                                d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.66 0l8.58-3.9A1 1 0 0 0 22 12"
                              ></path>
                              <path
                                d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.66 0l8.58-3.9A1 1 0 0 0 22 17"
                              ></path></svg></span></span
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">2 high findings</span></span
                        ></span
                      ><span class="bcn-dds__title-row repel" data-gap="xs"
                        ><span class="bcn-dds__label typography-title"
                          >Constraints Cross-Reference</span
                        ><span class="bcn-dds__chev" aria-hidden="true"
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
                              <path d="m9 18 6-6-6-6"></path></svg></span></span></span
                      ><span class="bcn-dds__desc typography-body-sm"
                        >10 GIS layers active · 9 with overlap · hazardous waste + biological
                        flagged</span
                      ></a
                    >
                  </li>
                  <!-- …and 2 more like this (<li class="bcn-dds__step">) -->
                </ol>
              </div>
            </div>
            <div class="sidebar" style="--sidebar-width: 20rem">
              <div class="stack" data-gap="md">
                <div class="esa-card">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">Project facts</h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="stack" data-gap="xs">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">Developer</span
                        ><span class="bcn-key-value__val">Beale</span>
                      </div>
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">Location</span
                        ><span class="bcn-key-value__val">Kern County, CA</span>
                      </div>
                      <!-- …and 7 more like this (<div class="bcn-key-value">) -->
                    </div>
                  </div>
                </div>
                <div class="esa-card">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">Team</h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="stack" data-gap="md">
                      <div class="cluster" data-gap="sm">
                        <span
                          class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                          style="--_avatar-hue: 345"
                          ><span class="esa-avatar__initials">PA</span></span
                        >
                        <div class="stack" data-gap="none">
                          <span
                            class="typography-body-md"
                            style="font-weight: var(--typography-font-weight-semibold)"
                            >Priya Anand</span
                          ><span
                            class="typography-body-sm"
                            style="color: var(--color-content-default-tertiary)"
                            >Project Manager</span
                          >
                        </div>
                      </div>
                      <div class="cluster" data-gap="sm">
                        <span
                          class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                          style="--_avatar-hue: 216"
                          ><span class="esa-avatar__initials">MA</span></span
                        >
                        <div class="stack" data-gap="none">
                          <span
                            class="typography-body-md"
                            style="font-weight: var(--typography-font-weight-semibold)"
                            >Marcus Reyes, AICP</span
                          ><span
                            class="typography-body-sm"
                            style="color: var(--color-content-default-tertiary)"
                            >Project Director · QA/QC</span
                          >
                        </div>
                      </div>
                      <div class="cluster" data-gap="sm">
                        <span
                          class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                          style="--_avatar-hue: 359"
                          ><span class="esa-avatar__initials">TP</span></span
                        >
                        <div class="stack" data-gap="none">
                          <span
                            class="typography-body-md"
                            style="font-weight: var(--typography-font-weight-semibold)"
                            >Talia Novak, PMP</span
                          ><span
                            class="typography-body-sm"
                            style="color: var(--color-content-default-tertiary)"
                            >Strategic Advisor</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="stack" data-gap="md">
                <div class="esa-card">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">Critical issues</h3>
                        <p class="esa-card__subtitle typography-body-sm">
                          Headline issues that may impact feasibility, schedule, or cost
                        </p>
                      </div>
                    </div>
                    <div class="esa-card__actions typography-label-md">
                      <a href="/beacon-design/prototypes/due-diligence-report"
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                          ><button class="esa-button__native typography-microcopy-xs" type="button">
                            <span class="esa-button__label">Open report</span>
                          </button></span
                        ></a
                      >
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <ul class="ov-issue-list">
                      <li>
                        Biological resources: the site is adjacent to designated Critical Habitat
                        for the Mohave ground squirrel and carries CNDDB occurrences of burrowing
                        owl and western Joshua tree — protocol surveys and possible incidental-take
                        authorization are likely schedule-critical.
                      </li>
                      <li>
                        Hazardous materials: two closed LUST sites and one open Voluntary Cleanup
                        Program case sit within a mile of the boundary — a Phase I ESA is
                        recommended before grading.
                      </li>
                      <!-- …and 4 more like this (<li>) -->
                    </ul>
                  </div>
                </div>
                <div class="esa-card">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">
                          Findings by severity
                        </h3>
                        <p class="esa-card__subtitle typography-body-sm">
                          Auto-derived from the current GIS data sync
                        </p>
                      </div>
                    </div>
                    <div class="esa-card__actions typography-label-md">
                      <a href="/beacon-design/prototypes/due-diligence-constraints"
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                          ><button class="esa-button__native typography-microcopy-xs" type="button">
                            <span class="esa-button__label">Open constraints</span>
                          </button></span
                        ></a
                      >
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="grid" data-gap="md" style="--grid-min: 12rem">
                      <div class="stack" data-gap="xs">
                        <div class="cluster" data-gap="xs">
                          <span
                            class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">2</span></span
                          ><span
                            class="typography-body-sm"
                            style="
                              font-weight: var(--typography-font-weight-semibold);
                              color: var(--color-content-default);
                            "
                            >High</span
                          >
                        </div>
                        <div
                          class="esa-progress-bar esa-progress-bar--md esa-progress-bar--danger"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label="Progress"
                        >
                          <div class="esa-progress-bar__track">
                            <div class="esa-progress-bar__fill" style="width: 50%"></div>
                          </div>
                        </div>
                        <span
                          class="typography-body-sm"
                          style="color: var(--color-content-default-tertiary)"
                          >DTSC EnviroStor · CNDDB +</span
                        >
                      </div>
                      <div class="stack" data-gap="xs">
                        <div class="cluster" data-gap="xs">
                          <span
                            class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">4</span></span
                          ><span
                            class="typography-body-sm"
                            style="
                              font-weight: var(--typography-font-weight-semibold);
                              color: var(--color-content-default);
                            "
                            >Medium</span
                          >
                        </div>
                        <div
                          class="esa-progress-bar esa-progress-bar--md esa-progress-bar--warning"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label="Progress"
                        >
                          <div class="esa-progress-bar__track">
                            <div class="esa-progress-bar__fill" style="width: 100%"></div>
                          </div>
                        </div>
                        <span
                          class="typography-body-sm"
                          style="color: var(--color-content-default-tertiary)"
                          >Zoning · CAL FIRE · Cultural Sensitivity · NHD /</span
                        >
                      </div>
                      <!-- …and 2 more like this (<div class="stack">) -->
                    </div>
                  </div>
                </div>
                <div class="esa-card">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">Activity</h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <ul class="ov-activity">
                      <li>
                        <span class="ov-activity__dot"></span
                        ><span class="ov-activity__text"
                          ><strong>EnviroStor sync</strong> · 2 closed LUST + 1 open VCP within 1 mi
                          flagged as new high-severity findings.</span
                        ><span class="ov-activity__time">2 hr ago</span>
                      </li>
                      <li>
                        <span class="ov-activity__dot"></span
                        ><span class="ov-activity__text"
                          ><strong>CalFire FHSZ update</strong> · NE corner of boundary now overlaps
                          Moderate FHSZ (2025 update).</span
                        ><span class="ov-activity__time">1 day ago</span>
                      </li>
                      <!-- …and 3 more like this (<li>) -->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
```
