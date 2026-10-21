# Critical Issues Assessment: markup

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
            <a href="/beacon-design/prototypes/due-diligence-overview" class="nav-sublink"
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
            ><a class="breadcrumb-item" href="/beacon-design/prototypes/due-diligence-overview"
              >Almond</a
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
            ><span class="breadcrumb-item" aria-current="page">CIA Report</span>
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
                  <path d="M8 2v4"></path>
                  <path d="M12 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="16" height="18" x="4" y="4" rx="2"></rect>
                  <path d="M8 10h6"></path>
                  <path d="M8 14h8"></path>
                  <path d="M8 18h5"></path></svg></span
              >Critical Issues Assessment
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
        </section>
        <section class="page-layout__content">
          <div class="stack" data-gap="lg">
            <div class="esa-alert-box esa-alert-box--info typography-body-sm">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <div class="esa-alert-box__body">
                <strong class="esa-alert-box__title typography-label-sm-strong"
                  >Auto-assembled from your project data</strong
                >
                <div class="esa-alert-box__message">
                  This CIA is composed from the boundary, constraint findings, and permit matrix
                  reviewed on the prior steps. Each section is editable — click any heading to
                  override.
                </div>
              </div>
            </div>
            <!-- script type="module" removed (449 bytes) -->
            <section class="bcn-cia">
              <!-- Document utilities. Print is wired locally (it acts on this document);
       anything that navigates is the host's, via the `actions` slot. -->
              <div class="bcn-cia__utilities repel" data-gap="sm">
                <p class="bcn-cia__utilities-note typography-body-sm">
                  Section structure follows ESA's standard CIA template — Findings and
                  Recommendations per resource, permit matrix, explicit limitations.
                </p>
                <div class="cluster" data-gap="xs" data-justify="end">
                  <a href="/beacon-design/prototypes/permitting-dashboard"
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
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path></svg></span
                        ><span class="esa-button__label">Advance to Permitting</span>
                      </button></span
                    ></a
                  >
                </div>
              </div>
              <div class="bcn-cia__shell sidebar" data-gap="lg">
                <!-- ── Table of contents (scroll-spy) ── -->
                <aside class="bcn-cia__aside">
                  <nav class="bcn-cia__toc" aria-label="Report contents">
                    <p class="bcn-cia__toc-heading typography-body-md">Contents</p>
                    <ul class="bcn-cia__toc-list">
                      <li class="bcn-cia__toc-item" data-level="1">
                        <a
                          class="bcn-cia__toc-link typography-body-sm is-active"
                          href="#cia-summary"
                          data-toc-for="cia-summary"
                          aria-current="location"
                          ><span class="bcn-cia__toc-text">Executive Summary</span></a
                        >
                      </li>
                      <li class="bcn-cia__toc-item" data-level="1">
                        <a
                          class="bcn-cia__toc-link typography-body-sm"
                          href="#cia-project"
                          data-toc-for="cia-project"
                          ><span class="bcn-cia__toc-text">1. Project Description</span></a
                        >
                      </li>
                      <!-- …and 16 more like this (<li class="bcn-cia__toc-item">) -->
                    </ul>
                  </nav>
                </aside>
                <!-- ── The document ── -->
                <article class="bcn-cia__doc stack" data-gap="xl">
                  <header class="bcn-cia__masthead stack" data-gap="sm">
                    <div class="repel" data-gap="sm" data-align="start">
                      <h1 class="bcn-cia__h1 typography-heading-lg">Critical Issues Assessment</h1>
                      <span
                        class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Draft v0.3</span></span
                      >
                    </div>
                    <p class="bcn-cia__subtitle typography-body-lg">
                      Project Almond — Kern County, CA · Kern County
                    </p>
                    <dl class="bcn-cia__meta">
                      <dt class="bcn-cia__meta-term typography-body-sm">Prepared for</dt>
                      <dd class="bcn-cia__meta-def typography-body-sm">Beale</dd>
                      <dt class="bcn-cia__meta-term typography-body-sm">Prepared by</dt>
                      <dd class="bcn-cia__meta-def typography-body-sm">
                        Environmental Science Associates — Beacon Due Diligence module
                      </dd>
                      <dt class="bcn-cia__meta-term typography-body-sm">Project Manager</dt>
                      <dd class="bcn-cia__meta-def typography-body-sm">Priya Anand</dd>
                      <dt class="bcn-cia__meta-term typography-body-sm">Project Director</dt>
                      <dd class="bcn-cia__meta-def typography-body-sm">Marcus Reyes, AICP</dd>
                      <dt class="bcn-cia__meta-term typography-body-sm">Capacity</dt>
                      <dd class="bcn-cia__meta-def typography-body-sm">
                        180 MW critical IT load (Phase 1)
                      </dd>
                      <dt class="bcn-cia__meta-term typography-body-sm">Site footprint</dt>
                      <dd class="bcn-cia__meta-def typography-body-sm">
                        340 acres (237-104-007, 237-104-008, 237-104-011, 237-104-014)
                      </dd>
                      <dt class="bcn-cia__meta-term typography-body-sm">Report status</dt>
                      <dd class="bcn-cia__meta-def typography-body-sm">Draft v0.3 · 2026-08-18</dd>
                    </dl>
                  </header>
                  <!-- ── Executive summary ── -->
                  <section class="bcn-cia__sec stack" data-gap="sm" id="cia-summary">
                    <h2 class="bcn-cia__h2 typography-heading-md">Executive Summary</h2>
                    <p class="bcn-cia__p typography-body-md">
                      Environmental Science Associates (ESA) is pleased to present Beale with this
                      Critical Issues Assessment (CIA) for the proposed Project Almond — Kern
                      County, CA. The Project would occupy a 340-acre site (237-104-007,
                      237-104-008, 237-104-011, 237-104-014) within unincorporated Kern County,
                      California.
                    </p>
                    <p class="bcn-cia__p typography-body-md">
                      The purpose of this CIA is to identify environmental resources, federal,
                      State, and local planning decisions, and potential development constraints
                      that may impact Project feasibility, cost, or schedule. The CIA includes a
                      desktop-level environmental characteristics discussion utilizing publicly
                      available data from federal, State, and local sources.
                      <strong>No field work was performed as part of this effort.</strong>
                    </p>
                    <p class="bcn-cia__p typography-body-md">
                      Following the environmental characteristics discussion in Section 3, critical
                      issues and recommendations are summarized in Section 4. A summary of the
                      permits and approvals that may be necessary for construction of the Project is
                      presented in Section 5, and limitations to the CIA are presented in Section 6.
                    </p>
                    <h3 class="bcn-cia__h4 typography-body-md">Summary of findings</h3>
                    <ul class="bcn-cia__list typography-body-md">
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
                  </section>
                  <!-- ── 1. Project description ── -->
                  <section class="bcn-cia__sec stack" data-gap="sm" id="cia-project">
                    <h2 class="bcn-cia__h2 typography-heading-md">1. Project Description</h2>
                    <p class="bcn-cia__p typography-body-md">
                      The Project site is located at 14250 Stockyard Road, Mojave, CA 93501
                      (unincorporated Kern County), approximately 0.6 mile southeast of the existing
                      Mojave Stockyard Substation. The site consists of four parcels (237-104-007,
                      237-104-008, 237-104-011, 237-104-014) totaling 340 acres of vacant land
                      currently designated M-1 Light Industrial. The site is bounded on the north
                      and east by existing industrial uses, with a Class I rail spur to the south.
                    </p>
                    <p class="bcn-cia__p typography-body-md">
                      The proposed Project would include Four hyperscale data halls + a centralized
                      utility yard; site master-planned to 320 MW at full build-out. — four
                      hyperscale data halls, mechanical/electrical yards, emergency standby
                      generators with on-site fuel storage, perimeter security fencing, and an
                      access drive off Stockyard Road. The facility will be remotely monitored with
                      periodic on-site staffing. The Project would interconnect to the existing
                      Mojave Stockyard Substation (230 kV) via a short underground service
                      connection to Southern California Edison.
                    </p>
                  </section>
                  <!-- ── 2. Methodology ── --><!-- ── 3. Environmental characteristics ── -->
                  <section class="bcn-cia__sec bcn-cia__resource stack" data-gap="sm" id="land-use">
                    <h3 class="bcn-cia__h3 typography-title">
                      <span class="bcn-cia__num">3.1</span>Land Use, Zoning &amp; Planning
                    </h3>
                    <div class="bcn-cia__resource-summary cluster" data-gap="sm">
                      <span class="bcn-cia__field-label typography-body-sm">Severity</span
                      ><span class="bcn-cia__risk cluster"
                        ><span
                          class="bcn-cia__dot"
                          style="--_risk-dot: undefined"
                          aria-hidden="true"
                        ></span
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Medium</span></span
                        ></span
                      ><span class="bcn-cia__field-label typography-body-sm">Lead agency</span
                      ><span class="typography-body-sm"
                        >Kern County Planning and Natural Resources Department</span
                      >
                    </div>
                    <h4 class="bcn-cia__h4 typography-body-md">Findings</h4>
                    <p class="bcn-cia__p typography-body-md">
                      The Project site is designated M-1 (Light Industrial) under the Kern County
                      zoning ordinance, with an underlying General Plan designation of Industrial
                      Employment Center. Data center use with on-site backup generation is
                      consistent with the zoning, but is expected to require a Conditional Use
                      Permit (CUP) given the scale of standby generation and mechanical equipment.
                    </p>
                    <p class="bcn-cia__p typography-body-md">
                      The Project is consistent with applicable SCAG- and county-level goals for
                      industrial and infrastructure development in the high-desert corridor. Setback
                      and access requirements will be confirmed during the CUP application,
                      including generator-yard separation distances and County Fire access
                      standards.
                    </p>
                    <h4 class="bcn-cia__h4 typography-body-md">Recommendations</h4>
                    <p class="bcn-cia__p typography-body-md">
                      Beale should request a pre-application consultation with Kern County Planning
                      to confirm the CUP path, SB 283 fire-outreach timing, and anticipated
                      conditions of approval. No General Plan Amendment or rezoning is anticipated.
                    </p>
                  </section>
                  <!-- …and 15 more like this (<section class="bcn-cia__sec stack">) --><!-- ── 4. Critical issues ── --><!-- ── 5. Permit & approval matrix ── --><!-- ── 6. Limitations ── --><!-- ── 7. References ── --><!-- ── Figures & appendices ── -->
                </article>
              </div>
            </section>
            <!-- script type="module" removed (744 bytes) -->
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
```
