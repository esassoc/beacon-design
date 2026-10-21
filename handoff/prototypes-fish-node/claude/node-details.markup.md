# Node details: markup

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
        </ul>
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
              <path
                d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
              ></path>
              <path d="M6.453 15h11.094"></path>
              <path d="M8.5 2h7"></path></svg></span
          ><span class="nav-section__title">Studies</span
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
            <a href="/beacon-design/prototypes/fish-studies" class="nav-sublink">Science Plan</a>
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/fish-gantt" class="nav-sublink active"
              >Study Planning</a
            >
          </li>
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
            <a href="#project-tracking" class="nav-sublink">Project Tracking</a>
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
            ><a class="breadcrumb-item" href="#project">Delta Conveyance</a
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
            ><a class="breadcrumb-item" href="#studies">Studies</a
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
            ><a class="breadcrumb-item" href="/beacon-design/prototypes/fish-gantt"
              >Study Planning</a
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
            ><span class="breadcrumb-item" aria-current="page">Node details</span>
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
                  <path
                    d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
                  ></path>
                  <path d="M6.453 15h11.094"></path>
                  <path d="M8.5 2h7"></path></svg></span
              >Node details
            </h1>
            <span class="bcn-node-page__badge" id="bcn-node-badge" hidden="">—</span>
          </div>
          <div class="page-layout__utilities">
            <div class="bcn-node-page__utils">
              <span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                ><a
                  class="esa-button__native typography-microcopy-xs"
                  href="/beacon-design/prototypes/fish-gantt"
                  role="button"
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
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path></svg></span
                  ><span class="esa-button__label">Back to Study Planning</span></a
                ></span
              >
            </div>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="bcn-node-page">
            <section class="bcn-node-page__empty" data-node-empty="">
              <div class="esa-empty-state esa-empty-state--md">
                <h3 class="esa-empty-state__title typography-label-md-strong">Pick a node</h3>
                <p class="esa-empty-state__description typography-body-sm">
                  Open a node from the Study Planning gantt (View full details in the row drawer),
                  or pass ?id= with a COA / STY / SUB / TSK id.
                </p>
                <div class="esa-empty-state__actions typography-label-md">
                  <span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                    ><a
                      class="esa-button__native typography-microcopy-xs"
                      href="/beacon-design/prototypes/fish-gantt"
                      role="button"
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
                          <path d="m12 19-7-7 7-7"></path>
                          <path d="M19 12H5"></path></svg></span
                      ><span class="esa-button__label">Open Study Planning</span></a
                    ></span
                  >
                </div>
              </div>
            </section>
            <section
              class="bcn-node-page__panel"
              data-node-panel="COA-10.19"
              data-node-name="Fisheries Evaluation Studies"
              data-node-tier="Commitment"
              data-start=""
              data-end=""
              hidden=""
            >
              <div class="bcn-detail">
                <!-- ── 1 · Identity ── -->
                <section class="bcn-detail__section">
                  <h3 class="bcn-detail__title">Identity</h3>
                  <div class="bcn-detail__rows">
                    <div data-live="name">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">Name</span
                        ><span class="bcn-key-value__val">Fisheries Evaluation Studies</span>
                      </div>
                    </div>
                    <div data-live="idrow">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">ID</span
                        ><span class="bcn-key-value__val">COA-10.19</span>
                      </div>
                    </div>
                    <div data-live="coa">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">COA reference</span
                        ><span class="bcn-key-value__val">10.19</span>
                      </div>
                    </div>
                  </div>
                </section>
                <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                <section class="bcn-detail__section">
                  <h3 class="bcn-detail__title">Timing</h3>
                  <div class="bcn-detail__rows">
                    <div data-live="span">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">Rolled-up span</span
                        ><span class="bcn-key-value__val">Jul 2026 – Oct 2032</span
                        ><span class="bcn-key-value__hint"
                          >min start → max end across all tasks in this branch</span
                        >
                      </div>
                    </div>
                    <div data-live="wy">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">Water years</span
                        ><span class="bcn-key-value__val">WY2026–WY2033</span>
                      </div>
                    </div>
                  </div>
                </section>
                <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── --><!-- ── 4 · Roll-up (PARENT nodes only) ── --><!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                <section class="bcn-detail__section bcn-detail__section--flush">
                  <details class="esa-collapsible esa-collapsible--flush">
                    <summary class="esa-collapsible__summary typography-label-sm-strong">
                      <span class="esa-collapsible__title">Constraints &amp; notes</span>
                    </summary>
                    <div class="esa-collapsible__body typography-body-md">
                      <div class="bcn-detail__notes" data-live="notes">
                        <ul class="bcn-detail__constraints">
                          <li>Funding ceiling $12.0M (illustrative)</li>
                          <li>ICF-primed DWR contract — separate from the ESA on-call</li>
                        </ul>
                      </div>
                    </div>
                  </details>
                </section>
                <!-- …and 2 more like this (<section class="bcn-detail__section">) -->
              </div>
              <!-- script type="module" removed (0 bytes) -->
            </section>
            <section
              class="bcn-node-page__panel"
              data-node-panel="STY-014"
              data-node-name="Migration &amp; Survival Study"
              data-node-tier="Study"
              data-start=""
              data-end=""
              hidden=""
            >
              <div class="bcn-detail">
                <!-- ── 1 · Identity ── -->
                <section class="bcn-detail__section">
                  <h3 class="bcn-detail__title">Identity</h3>
                  <div class="bcn-detail__rows">
                    <div data-live="name">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">Name</span
                        ><span class="bcn-key-value__val">Migration &amp; Survival Study</span>
                      </div>
                    </div>
                    <div data-live="idrow">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">ID</span
                        ><span class="bcn-key-value__val">STY-014</span>
                      </div>
                    </div>
                    <!-- …and 2 more like this (<div>) -->
                  </div>
                </section>
                <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                <section class="bcn-detail__section">
                  <h3 class="bcn-detail__title">Timing</h3>
                  <div class="bcn-detail__rows">
                    <div data-live="span">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">Rolled-up span</span
                        ><span class="bcn-key-value__val">Jul 2026 – Oct 2031</span
                        ><span class="bcn-key-value__hint"
                          >min start → max end across all tasks in this branch</span
                        >
                      </div>
                    </div>
                    <div data-live="wy">
                      <div class="bcn-key-value" data-size="md" data-layout="stack">
                        <span class="bcn-key-value__key">Water years</span
                        ><span class="bcn-key-value__val">WY2026–WY2032</span>
                      </div>
                    </div>
                  </div>
                </section>
                <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── --><!-- ── 4 · Roll-up (PARENT nodes only) ── --><!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                <section class="bcn-detail__section bcn-detail__section--flush">
                  <details class="esa-collapsible esa-collapsible--flush">
                    <summary class="esa-collapsible__summary typography-label-sm-strong">
                      <span class="esa-collapsible__title">Constraints &amp; notes</span>
                    </summary>
                    <div class="esa-collapsible__body typography-body-md">
                      <div class="bcn-detail__notes" data-live="notes">
                        <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                      </div>
                    </div>
                  </details>
                </section>
                <!-- …and 2 more like this (<section class="bcn-detail__section">) -->
              </div>
            </section>
            <!-- …and 64 more like this (<section class="bcn-node-page__panel">) -->
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
```
