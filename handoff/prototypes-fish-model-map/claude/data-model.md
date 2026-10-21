# Data Model

Data model map · source prototype: https://esassoc.github.io/beacon-design/prototypes/fish-model-map/

![Data Model, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-fish-model-map/claude/data-model.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-fish-model-map/claude/data-model.phone.png

## Components

- `bcn-model-diagram` (spoke) · `src/components/bcn/BcnModelDiagram.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_21 repeated elements are collapsed in the markup below; the comments say where._

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
            <a href="/beacon-design/prototypes/fish-science-plan" class="nav-sublink"
              >Science Plan</a
            >
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/fish-gantt" class="nav-sublink">Study Planning</a>
          </li>
          <li class="nav-item"><a href="#model-map" class="nav-sublink active">Data Model</a></li>
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
            ><span class="breadcrumb-item" aria-current="page">Data Model</span>
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
                    d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
                  ></path>
                  <path d="M15 5.764v15"></path>
                  <path d="M9 3.236v15"></path></svg></span
              >Data Model
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
                    <span class="bcn-model-diagram__card-name">Commitment (COA)</span
                    ><span class="bcn-model-diagram__chip" data-tone="external">Data Catalog</span
                    ><span class="bcn-model-diagram__chip" data-tone="external">external</span>
                  </header>
                  <p class="bcn-model-diagram__purpose">
                    The ITP Condition of Approval — lives in Beacon’s Data Catalog, outside this
                    fixture. In prod the deadline citation text is THIS record.
                  </p>
                  <ul class="bcn-model-diagram__fields">
                    <li>
                      <code class="bcn-model-diagram__fname">coa number</code
                      ><span class="bcn-model-diagram__fnote"
                        >"10.19" — the tracked grain; studies ref 10.19.x within it</span
                      >
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">condition text</code
                      ><span class="bcn-model-diagram__fnote">the regulatory quote</span>
                    </li>
                  </ul>
                </article>
                <article class="bcn-model-diagram__card" data-tone="stored">
                  <header class="bcn-model-diagram__card-head">
                    <span class="bcn-model-diagram__card-name">Milestone</span
                    ><span class="bcn-model-diagram__chip" data-tone="stored">anchor</span>
                  </header>
                  <p class="bcn-model-diagram__purpose">
                    The immovable engineering / regulatory anchors that back-planning starts from.
                  </p>
                  <ul class="bcn-model-diagram__fields">
                    <li>
                      <code class="bcn-model-diagram__fname">kind</code
                      ><span class="bcn-model-diagram__fnote"
                        >design · construction · operations · phase</span
                      >
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">month (· endMonth)</code
                      ><span class="bcn-model-diagram__fnote">phases carry a span</span>
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">citation</code
                      ><span class="bcn-model-diagram__fnote">MMRP / ITP source line</span>
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
              <h2 class="bcn-model-diagram__band-title">The one model — stored in fish-plan.ts</h2>
              <p class="bcn-model-diagram__band-note">
                One module owns everything below: TODAY (the plan's current-date anchor), the
                work-breakdown forest, the milestones, and the authored satellites. The
                type-prefixed id is the record's identity; the COA dot-number rides along as a
                reference. Status, span, and funding are never stored on parents — they roll up.
              </p>
              <div class="bcn-model-diagram__spine">
                <article class="bcn-model-diagram__card bcn-model-diagram__card--tier">
                  <header class="bcn-model-diagram__card-head">
                    <span class="bcn-model-diagram__card-name">Commitment</span
                    ><span class="bcn-model-diagram__chip" data-tone="id">COA-10.19</span>
                  </header>
                  <p class="bcn-model-diagram__purpose">
                    A tracked Condition of Approval — the Beacon Commitment this work satisfies.
                  </p>
                  <ul class="bcn-model-diagram__fields">
                    <li>
                      <code class="bcn-model-diagram__fname" data-ref="commitment">id</code
                      ><span class="bcn-model-diagram__fnote">IS the COA — e.g. "COA-10.19"</span>
                    </li>
                    <li><code class="bcn-model-diagram__fname">name</code></li>
                    <!-- …and 2 more like this (<li>) -->
                  </ul>
                </article>
                <div class="bcn-model-diagram__link" aria-hidden="true">
                  <span class="bcn-model-diagram__link-label">1 — n</span>
                </div>
                <article class="bcn-model-diagram__card bcn-model-diagram__card--tier">
                  <header class="bcn-model-diagram__card-head">
                    <span class="bcn-model-diagram__card-name">Study</span
                    ><span class="bcn-model-diagram__chip" data-tone="id">STY-###</span>
                  </header>
                  <p class="bcn-model-diagram__purpose">
                    An ITP study within the commitment; where the work is led &amp; scheduled.
                  </p>
                  <ul class="bcn-model-diagram__fields">
                    <li>
                      <code class="bcn-model-diagram__fname" data-ref="commitment">coaRef</code
                      ><span class="bcn-model-diagram__fnote"
                        >sub-study number (e.g. 10.19.1) — within the commitment</span
                      >
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">lead</code
                      ><span class="bcn-model-diagram__fnote">accountable org</span>
                    </li>
                    <!-- …and 4 more like this (<li>) -->
                  </ul>
                </article>
                <div class="bcn-model-diagram__link" aria-hidden="true">
                  <span class="bcn-model-diagram__link-label">1 — n</span>
                </div>
                <article class="bcn-model-diagram__card bcn-model-diagram__card--tier">
                  <header class="bcn-model-diagram__card-head">
                    <span class="bcn-model-diagram__card-name">Sub-study</span
                    ><span class="bcn-model-diagram__chip" data-tone="id">SUB-###</span>
                  </header>
                  <p class="bcn-model-diagram__purpose">A line of work inside a study.</p>
                  <ul class="bcn-model-diagram__fields">
                    <li>
                      <code class="bcn-model-diagram__fname" data-ref="commitment">coaRef</code
                      ><span class="bcn-model-diagram__fnote">dot-letter reference</span>
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">constraints[]</code
                      ><span class="bcn-model-diagram__fnote">back-planning rationale</span>
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">children[]</code
                      ><span class="bcn-model-diagram__fnote">→ Task</span>
                    </li>
                  </ul>
                </article>
                <div class="bcn-model-diagram__link" aria-hidden="true">
                  <span class="bcn-model-diagram__link-label">1 — n</span>
                </div>
                <article class="bcn-model-diagram__card bcn-model-diagram__card--tier">
                  <header class="bcn-model-diagram__card-head">
                    <span class="bcn-model-diagram__card-name">Task</span
                    ><span class="bcn-model-diagram__chip" data-tone="id">TSK-###</span>
                  </header>
                  <p class="bcn-model-diagram__purpose">The schedulable month-by-month unit.</p>
                  <ul class="bcn-model-diagram__fields">
                    <li>
                      <code class="bcn-model-diagram__fname">startMonth · endMonth</code
                      ><span class="bcn-model-diagram__fnote">the schedule lives HERE</span>
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">owner</code
                      ><span class="bcn-model-diagram__fnote">who does the work</span>
                    </li>
                    <!-- …and 2 more like this (<li>) -->
                  </ul>
                </article>
              </div>
              <div class="bcn-model-diagram__row bcn-model-diagram__row--satellites">
                <article class="bcn-model-diagram__card bcn-model-diagram__card--satellite">
                  <header class="bcn-model-diagram__card-head">
                    <span class="bcn-model-diagram__card-name">RoleAssignment</span
                    ><span class="bcn-model-diagram__chip">on Study</span>
                  </header>
                  <p class="bcn-model-diagram__purpose">One RACI work-stream assignment.</p>
                  <ul class="bcn-model-diagram__fields">
                    <li>
                      <code class="bcn-model-diagram__fname">workstream</code
                      ><span class="bcn-model-diagram__fnote"
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
                    <span class="bcn-model-diagram__card-name">FundingEntry</span
                    ><span class="bcn-model-diagram__chip">on any node</span>
                  </header>
                  <p class="bcn-model-diagram__purpose">
                    Planned dollars entered at a node; task dollars sum upward.
                  </p>
                  <ul class="bcn-model-diagram__fields">
                    <li><code class="bcn-model-diagram__fname">waterYear · amount</code></li>
                  </ul>
                </article>
                <!-- …and 2 more like this (<article class="bcn-model-diagram__card bcn-model-diagram__card--satellite">) -->
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
                    <span class="bcn-model-diagram__card-name">NodeRollUp</span
                    ><span class="bcn-model-diagram__chip" data-tone="computed"
                      >computeRollUp()</span
                    >
                  </header>
                  <p class="bcn-model-diagram__purpose">
                    Aggregates Task → Sub-study → Study → Commitment on every render.
                  </p>
                  <ul class="bcn-model-diagram__fields">
                    <li>
                      <code class="bcn-model-diagram__fname">span envelope</code
                      ><span class="bcn-model-diagram__fnote"
                        >min start · max end of the subtree</span
                      >
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">aggregate status</code
                      ><span class="bcn-model-diagram__fnote"
                        >blocked &gt; at-risk &gt; complete &gt; on-track</span
                      >
                    </li>
                    <!-- …and 2 more like this (<li>) -->
                  </ul>
                </article>
                <article class="bcn-model-diagram__card bcn-model-diagram__card--computed">
                  <header class="bcn-model-diagram__card-head">
                    <span class="bcn-model-diagram__card-name">Readiness chains</span
                    ><span class="bcn-model-diagram__chip" data-tone="computed">per study</span>
                  </header>
                  <p class="bcn-model-diagram__purpose">
                    The back-planning derivation the old memo maintained by hand.
                  </p>
                  <ul class="bcn-model-diagram__fields">
                    <li>
                      <code class="bcn-model-diagram__fname">must-start-by</code
                      ><span class="bcn-model-diagram__fnote">earliest task start</span>
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">must-finish-by</code
                      ><span class="bcn-model-diagram__fnote">the study deadline</span>
                    </li>
                    <li>
                      <code class="bcn-model-diagram__fname">countdowns · flags</code
                      ><span class="bcn-model-diagram__fnote"
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
              <h2 class="bcn-model-diagram__band-title">Projections — one model, five surfaces</h2>
              <div class="bcn-model-diagram__row bcn-model-diagram__row--projections">
                <article class="bcn-model-diagram__card bcn-model-diagram__card--projection">
                  <span class="bcn-model-diagram__card-name">Gantt</span>
                  <p class="bcn-model-diagram__purpose">
                    the interactive plan — light CRUD at every tier via wbApi
                  </p>
                </article>
                <article class="bcn-model-diagram__card bcn-model-diagram__card--projection">
                  <span class="bcn-model-diagram__card-name">Roles matrix</span>
                  <p class="bcn-model-diagram__purpose">the RACI pivot — study × 11 work-streams</p>
                </article>
                <!-- …and 3 more like this (<article class="bcn-model-diagram__card bcn-model-diagram__card--projection">) -->
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
```

## Styles

```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.modern-layout__body {
  flex: 1;
  padding-top: 52px;
  display: flex;
  overflow: hidden;
}
.modern-layout__content {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.side-nav {
  background-color: var(--bcn-gray-50);
  border-right: 1px solid var(--bcn-gray-200);
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  height: 100%;
  font-size: 0.875rem;
  transition: width 0.2s ease-in-out;
  display: flex;
  overflow: visible;
}
.side-nav.collapsed {
  width: 72px;
  max-width: 72px;
}
.sidebar-header {
  padding: var(--spacing-300) var(--spacing-400);
  flex-shrink: 0;
  transition: padding 0.2s ease-in-out;
}
.side-nav.collapsed .sidebar-header {
  padding: var(--spacing-300) var(--spacing-200);
}
.site-logo {
  padding: var(--spacing-200);
  border-radius: var(--spacing-050);
  align-items: center;
  text-decoration: none;
  transition: background 0.15s;
  display: inline-flex;
}
.site-logo:hover {
  background: #0000000a;
}
.site-logo__img {
  width: var(--spacing-700);
  object-fit: contain;
  object-position: left center;
  height: 3.75rem;
  transition: all 0.2s ease-in-out;
}
.side-nav.collapsed .site-logo__img {
  object-fit: contain;
  object-position: left center;
  width: 40px;
  height: 40px;
}
.project-switcher-container {
  padding: 0 var(--spacing-400) var(--spacing-300);
  flex-shrink: 0;
  min-width: 0;
  transition: padding 0.2s ease-in-out;
}
.side-nav.collapsed .project-switcher-container {
  padding: 0 var(--spacing-200);
}
.project-switcher__trigger {
  align-items: center;
  gap: var(--spacing-200);
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: var(--spacing-200) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--bcn-gray-200);
  border-radius: var(--spacing-200);
  cursor: pointer;
  color: var(--bcn-gray-950);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.15s;
  display: flex;
}
.project-switcher__trigger:hover {
  border-color: var(--bcn-gray-300);
  background: var(--bcn-gray-0);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.project-switcher__name {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.side-nav.collapsed .project-switcher__trigger {
  padding: var(--spacing-200);
  justify-content: center;
}
.side-nav.collapsed .project-switcher__name,
.side-nav.collapsed .project-switcher__chevron {
  display: none;
}
.main-nav {
  padding: 0 var(--spacing-400);
  gap: var(--spacing-050);
  scrollbar-width: none;
  -ms-overflow-style: none;
  flex-direction: column;
  flex: 1;
  transition: padding 0.2s ease-in-out;
  display: flex;
  overflow: visible auto;
}
.main-nav::-webkit-scrollbar {
  display: none;
}
.side-nav.collapsed .main-nav {
  padding: 0 var(--spacing-200);
}
.nav-section {
  flex-direction: column;
  display: flex;
  position: relative;
}
.nav-divider {
  height: 1px;
  margin: var(--spacing-200) 0;
  background: var(--bcn-gray-200);
  border: 0;
  flex-shrink: 0;
}
.nav-section__header {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-200);
  color: var(--bcn-gray-950);
  border-radius: var(--spacing-050);
  white-space: nowrap;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: none;
  width: 100%;
  font-size: 0.9375rem;
  font-weight: 550;
  text-decoration: none;
  transition: all 0.15s;
  display: flex;
}
.nav-section__header:hover {
  color: var(--color-background-brand);
  background: #0000000a;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.nav-section__title {
  flex: 1;
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.side-nav.collapsed .nav-section__header {
  padding: var(--spacing-250) var(--spacing-200);
  justify-content: center;
}
.nav-section__items {
  opacity: 1;
  flex-direction: column;
  max-height: 500px;
  margin: 0;
  padding: 0;
  list-style: none;
  transition:
    max-height 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
  display: flex;
  overflow: hidden;
}
.nav-section--collapsed .nav-section__items {
  opacity: 0;
  max-height: 0;
}
.side-nav.collapsed .nav-section__items {
  display: none;
}
.nav-item {
  padding: 0 0 0 2.5rem;
}
.nav-item + .nav-item {
  margin-top: var(--spacing-050);
}
.nav-sublink {
  padding: var(--spacing-200);
  color: var(--bcn-gray-950);
  border-radius: var(--spacing-050);
  font-size: 0.8125rem;
  line-height: 1.2;
  text-decoration: none;
  transition: all 0.15s;
  display: block;
}
.nav-sublink:hover {
  background: #0000000a;
}
.nav-sublink.active {
  color: var(--color-background-brand);
  background: #0000000a;
}
.bcn-model-diagram {
  color: var(--color-content-default);
  font-size: var(--font-size-200);
  flex-direction: column;
  line-height: 1.5;
  display: flex;
}
.bcn-model-diagram__band {
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised, #fff);
  flex-direction: column;
  display: flex;
}
.bcn-model-diagram__band[data-tone="model"] {
  background: var(--color-background-elevation-sunken);
  border-color: var(--color-border-default-strong);
}
.bcn-model-diagram__band-title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  margin: 0;
  line-height: 1.3;
}
.bcn-model-diagram__band-note {
  margin: calc(-1 * var(--spacing-300)) 0 0;
  max-width: 72ch;
  color: var(--color-content-default-secondary);
}
.bcn-model-diagram__flow {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) 0;
  margin-inline: var(--spacing-600);
  display: flex;
}
.bcn-model-diagram__flow-label {
  padding-left: var(--spacing-500);
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  position: relative;
}
.bcn-model-diagram__flow-label:before {
  content: "";
  left: var(--spacing-200);
  background: var(--color-border-default-strong);
  width: 2px;
  position: absolute;
  top: -14px;
  bottom: -14px;
}
.bcn-model-diagram__flow-label:after {
  content: "";
  left: calc(var(--spacing-200) - 4px);
  border-left: 5px solid #0000;
  border-right: 5px solid #0000;
  border-top: 7px solid var(--color-border-default-strong);
  position: absolute;
  bottom: -16px;
}
.bcn-model-diagram__row {
  gap: var(--spacing-400);
  display: grid;
}
.bcn-model-diagram__row--pair {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
.bcn-model-diagram__row--satellites {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.bcn-model-diagram__row--projections {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.bcn-model-diagram__spine {
  align-items: stretch;
  gap: var(--spacing-200);
  padding-bottom: var(--spacing-200);
  display: flex;
  overflow-x: auto;
}
.bcn-model-diagram__spine .bcn-model-diagram__card--tier {
  flex: 1 1 0;
  min-width: 240px;
}
.bcn-model-diagram__link {
  flex: none;
  align-items: center;
  width: 34px;
  display: flex;
  position: relative;
}
.bcn-model-diagram__link:before {
  content: "";
  background: var(--color-border-default-strong);
  height: 2px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 6px;
}
.bcn-model-diagram__link:after {
  content: "";
  border-top: 5px solid #0000;
  border-bottom: 5px solid #0000;
  border-left: 7px solid var(--color-border-default-strong);
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.bcn-model-diagram__link-label {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  position: absolute;
  top: calc(50% - 26px);
  left: 50%;
  transform: translate(-50%);
}
.bcn-model-diagram__card {
  gap: var(--spacing-250);
  padding: var(--spacing-400);
  background: var(--color-background-elevation-raised, #fff);
  border: 1px solid var(--color-border-default-strong);
  border-radius: var(--radius-200);
  flex-direction: column;
  display: flex;
}
.bcn-model-diagram__card[data-tone="external"] {
  border-style: dashed;
  border-color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 5%, white);
}
.bcn-model-diagram__card--computed {
  border-style: dashed;
}
.bcn-model-diagram__card--satellite {
  border-color: var(--color-border-default);
}
.bcn-model-diagram__card--projection {
  gap: var(--spacing-150);
  background: var(--color-background-elevation-sunken);
}
.bcn-model-diagram__card-head {
  align-items: baseline;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-model-diagram__card-name {
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  line-height: 1.3;
}
.bcn-model-diagram__chip {
  font-family: var(--typography-font-family-mono);
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  white-space: nowrap;
  padding: 0 6px;
  font-size: 0.75rem;
  line-height: 1.5;
}
.bcn-model-diagram__chip[data-tone="id"] {
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-color: #0000;
}
.bcn-model-diagram__chip[data-tone="external"] {
  color: var(--color-commitment);
  border-color: var(--color-commitment);
  background: 0 0;
}
.bcn-model-diagram__chip[data-tone="computed"] {
  border-style: dashed;
}
.bcn-model-diagram__purpose {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-model-diagram__fields {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-model-diagram__fields li {
  align-items: baseline;
  gap: var(--spacing-200);
  padding: var(--spacing-150) 0;
  border-top: 1px solid var(--color-border-default-subtle);
  font-size: var(--font-size-150);
  flex-wrap: wrap;
  display: flex;
}
.bcn-model-diagram__fname {
  font-family: var(--typography-font-family-mono);
  color: var(--color-content-default);
  font-size: 0.75rem;
}
.bcn-model-diagram__fname[data-ref="commitment"],
.bcn-model-diagram__fname[data-ref="milestone"] {
  color: var(--color-commitment);
}
.bcn-model-diagram__fnote {
  color: var(--color-content-default-tertiary);
}
html,
.modern-layout__content {
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: reduce) {
  html,
  .modern-layout__content {
    scroll-behavior: auto;
  }
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.page-layout {
  min-height: calc(100vh - 52px);
  padding: var(--spacing-600);
  background: var(--bcn-gray-50);
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
}
.page-layout__container {
  flex-direction: column;
  display: flex;
}
.page-layout--bleed .page-layout__container {
  padding: 0 var(--spacing-600) var(--spacing-600);
}
.page-layout__bleed,
.page-layout section {
  width: 100%;
}
.breadcrumbs {
  padding: var(--spacing-400) 0;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  display: flex;
}
.breadcrumbs__items {
  gap: var(--spacing-100);
  flex-wrap: wrap;
  align-items: center;
  display: flex;
}
.breadcrumb-item {
  color: var(--bcn-gray-600);
  text-transform: capitalize;
  font-size: 0.875rem;
}
a.breadcrumb-item {
  text-decoration: none;
}
a.breadcrumb-item:hover {
  text-decoration: underline;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title {
  border-bottom: 1px solid var(--bcn-gray-200);
  padding: var(--spacing-500) 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.page-layout__title-main {
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
  display: flex;
}
.page-layout__title h1 {
  align-items: center;
  gap: var(--spacing-300);
  font-family: var(--font-decorative);
  font-weight: var(--typography-font-weight-bold);
  font-size: var(--font-size-500);
  color: var(--bcn-gray-1000);
  margin: 0;
  display: flex;
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-0` | `#fff` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-200` | `#dcdcdc` | component |
| `--bcn-gray-300` | `#bdbdbd` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-50` | `#fafafa` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-600` | `#656565` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--font-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
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
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
