# Evidence Inbox: markup, part 1 of 2

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
        <section class="page-layout__title" style="--page-title-icon-color: var(--bcn-aldo-600)">
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
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path
                    d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                  ></path></svg></span
              >Evidence Inbox
            </h1>
            <span class="bcn-triage-counts cluster" data-gap="sm"
              ><span class="bcn-triage-counts__chip" data-triage-count=""
                ><span
                  class="esa-badge esa-badge--neutral esa-badge--md typography-microcopy-sm-strong"
                  ><span class="esa-badge__text">16 suggestions</span></span
                ></span
              ><!-- Only when a filter is narrowing the list: the chips count the INBOX, not the view, and
       two numbers that look like they disagree are worse than one. --><span
                class="bcn-triage-counts__showing"
                data-triage-showing=""
                hidden=""
              ></span
            ></span>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="stack" data-gap="md">
            <div class="bcn-filterbar">
              <div class="bcn-filterbar__top">
                <div class="bcn-filterbar__group">
                  <span class="bcn-filterbar__label">Show</span
                  ><esa-button-toggle
                    slot="lead"
                    data-triage-scope="true"
                    size="sm"
                    value="all"
                    data-options='[{"label":"All","value":"all"},{"label":"Has suggestions","value":"has"}]'
                  ></esa-button-toggle>
                </div>
                <div class="bcn-filterbar__search">
                  <esa-text-field
                    slot="search"
                    data-triage-search="true"
                    placeholder="Search evidence, submitters, components…"
                    aria-label="Search the triage queue"
                    size="md"
                  ></esa-text-field>
                </div>
              </div>
              <div class="bcn-filterbar__bottom">
                <span class="bcn-filterbar__label">Filter</span>
                <div
                  class="esa-filter-container typography-label-md"
                  style="
                    --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
                    --_filter-container-row-gap: var(--spacing-200, 0.5rem);
                  "
                >
                  <esa-filter-dropdown
                    data-triage-filter="source"
                    label="Upload Source"
                    multiple=""
                    size="sm"
                    data-options='[{"value":"monitoring-portal","label":"Monitoring portal (7)"},{"value":"daily-report","label":"Daily monitoring report (4)"},{"value":"beacon-report","label":"Beacon report (2)"},{"value":"drop-box","label":"Drop-box link (3)"}]'
                  ></esa-filter-dropdown
                  ><esa-filter-dropdown
                    data-triage-filter="component"
                    label="Component"
                    multiple=""
                    size="sm"
                    data-options='[{"value":"intake-b-north-delta","label":"Intake B — North Delta (3)"},{"value":"southern-forebay-pumping-plant","label":"Southern Forebay &amp; Pumping Plant (7)"},{"value":"none","label":"Component not set (4)"},{"value":"twin-cities-complex","label":"Twin Cities Complex (2)"}]'
                  ></esa-filter-dropdown>
                </div>
                <div class="bcn-filterbar__group bcn-filterbar__sort">
                  <span class="bcn-filterbar__label">Sort</span
                  ><esa-select slot="sort" data-triage-sort="true" size="md"></esa-select>
                </div>
                <span class="bcn-filterbar__clear"
                  ><span data-triage-clear=""
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
                  ></span
                >
              </div>
            </div>
            <div class="bcn-triage-workspace">
              <div class="bcn-triage-workspace__panes sidebar" data-gap="md">
                <div class="bcn-triage-workspace__queue">
                  <div class="bcn-triage-queue">
                    <div class="bcn-triage-queue__scroll" data-triage-scroll="">
                      <section class="bcn-triage-queue__group" data-triage-group="today">
                        <h3 class="bcn-triage-queue__day">Today</h3>
                        <ul class="bcn-triage-queue__list">
                          <li
                            class="bcn-triage-row"
                            data-triage-row="tri-ib-turbidity"
                            data-source="monitoring-portal"
                            data-component="intake-b-north-delta"
                            data-search="intake b turbidity monitoring — jul 22 continuous readings at the cofferdam, 06:00–18:00. two exceedances of the 15 ntu trigger, both cleared within the hour. r. delgado intake b — north delta monitoring portal"
                            data-title="intake b turbidity monitoring — jul 22"
                          >
                            <button
                              type="button"
                              class="bcn-triage-row__body"
                              data-triage-open="tri-ib-turbidity"
                              aria-label="Review Intake B turbidity monitoring — Jul 22"
                            >
                              <span class="bcn-triage-row__line"
                                ><span class="bcn-triage-row__title"
                                  >Intake B turbidity monitoring — Jul 22</span
                                ><span class="bcn-triage-row__date">Jul 22</span></span
                              ><span class="bcn-triage-row__meta"
                                >Monitoring portal · 4 files · Intake B — North Delta</span
                              >
                            </button>
                            <div class="bcn-triage-row__foot" data-triage-rowfoot="">
                              <span class="bcn-triage-row__match bcn-triage-row__sug"
                                ><span
                                  class="esa-badge esa-badge--neutral esa-badge--md typography-microcopy-sm-strong"
                                  ><span class="esa-badge__text">1 suggested action</span></span
                                ></span
                              >
                            </div>
                          </li>
                          <li
                            class="bcn-triage-row"
                            data-triage-row="tri-daily-forebay-0722"
                            data-source="daily-report"
                            data-component="southern-forebay-pumping-plant"
                            data-search="daily biological monitoring — southern forebay, jul 22 ground disturbance at the north levee toe. one swainson’s hawk observed foraging; no nest located within the work area. c. anderson southern forebay &amp; pumping plant daily monitoring report"
                            data-title="daily biological monitoring — southern forebay, jul 22"
                          >
                            <button
                              type="button"
                              class="bcn-triage-row__body"
                              data-triage-open="tri-daily-forebay-0722"
                              aria-label="Review Daily biological monitoring — Southern Forebay, Jul 22"
                            >
                              <span class="bcn-triage-row__line"
                                ><span class="bcn-triage-row__title"
                                  >Daily biological monitoring — Southern Forebay, Jul 22</span
                                ><span class="bcn-triage-row__date">Jul 22</span></span
                              ><span class="bcn-triage-row__meta"
                                >Daily monitoring report · 1 file · Southern Forebay &amp; Pumping
                                Plant</span
                              >
                            </button>
                            <div class="bcn-triage-row__foot" data-triage-rowfoot="">
                              <span class="bcn-triage-row__match bcn-triage-row__sug"
                                ><span
                                  class="esa-badge esa-badge--neutral esa-badge--md typography-microcopy-sm-strong"
                                  ><span class="esa-badge__text">1 suggested action</span></span
                                ></span
                              >
                            </div>
                          </li>
                          <li
                            class="bcn-triage-row"
                            data-triage-row="tri-dropbox-fish-screen"
                            data-source="drop-box"
                            data-component="none"
                            data-search="fish screen approach-velocity readings — jul 21 velocity measurements at eight screen panels, submitted by the screen fabricator. all panels below the 0.33 ft/s criterion. t. yamada, cascade screen works  drop-box link"
                            data-title="fish screen approach-velocity readings — jul 21"
                          >
                            <button
                              type="button"
                              class="bcn-triage-row__body"
                              data-triage-open="tri-dropbox-fish-screen"
                              aria-label="Review Fish screen approach-velocity readings — Jul 21"
                            >
                              <span class="bcn-triage-row__line"
                                ><span class="bcn-triage-row__title"
                                  >Fish screen approach-velocity readings — Jul 21</span
                                ><span class="bcn-triage-row__date">Jul 22</span></span
                              ><span class="bcn-triage-row__meta"
                                >Drop-box link · 2 files · Component not set</span
                              >
                            </button>
                            <div class="bcn-triage-row__foot" data-triage-rowfoot="">
                              <span class="bcn-triage-row__match bcn-triage-row__sug"
                                ><span
                                  class="esa-badge esa-badge--neutral esa-badge--md typography-microcopy-sm-strong"
                                  ><span class="esa-badge__text">1 suggested action</span></span
                                ></span
                              >
                            </div>
                          </li>
                        </ul>
                      </section>
                      <section class="bcn-triage-queue__group" data-triage-group="yesterday">
                        <h3 class="bcn-triage-queue__day">Yesterday</h3>
                        <ul class="bcn-triage-queue__list">
                          <li
                            class="bcn-triage-row"
                            data-triage-row="tri-swppp-inspection-0721"
                            data-source="monitoring-portal"
                            data-component="southern-forebay-pumping-plant"
                            data-search="swppp inspection — southern forebay, jul 21 qualified-personnel walk of all four stockpiles. two corrective actions logged at the southern stockpile perimeter. m. okafor southern forebay &amp; pumping plant monitoring portal"
                            data-title="swppp inspection — southern forebay, jul 21"
                          >
                            <button
                              type="button"
                              class="bcn-triage-row__body"
                              data-triage-open="tri-swppp-inspection-0721"
                              aria-label="Review SWPPP inspection — Southern Forebay, Jul 21"
                            >
                              <span class="bcn-triage-row__line"
                                ><span class="bcn-triage-row__title"
                                  >SWPPP inspection — Southern Forebay, Jul 21</span
                                ><span class="bcn-triage-row__date">Jul 21</span></span
                              ><span class="bcn-triage-row__meta"
                                >Monitoring portal · 1 file · Southern Forebay &amp; Pumping
                                Plant</span
                              >
                            </button>
                            <div class="bcn-triage-row__foot" data-triage-rowfoot="">
                              <span class="bcn-triage-row__match bcn-triage-row__sug"
                                ><span
                                  class="esa-badge esa-badge--neutral esa-badge--md typography-microcopy-sm-strong"
                                  ><span class="esa-badge__text">1 suggested action</span></span
                                ></span
                              >
                            </div>
                          </li>
                          <li
                            class="bcn-triage-row"
                            data-triage-row="tri-daily-forebay-0721"
                            data-source="daily-report"
                            data-component="southern-forebay-pumping-plant"
                            data-search="daily biological monitoring — southern forebay, jul 21 excavation along the utility trench. no listed species observed; buffers intact. c. anderson southern forebay &amp; pumping plant daily monitoring report"
                            data-title="daily biological monitoring — southern forebay, jul 21"
                          >
                            <button
                              type="button"
                              class="bcn-triage-row__body"
                              data-triage-open="tri-daily-forebay-0721"
                              aria-label="Review Daily biological monitoring — Southern Forebay, Jul 21"
                            >
                              <span class="bcn-triage-row__line"
                                ><span class="bcn-triage-row__title"
                                  >Daily biological monitoring — Southern Forebay, Jul 21</span
                                ><span class="bcn-triage-row__date">Jul 21</span></span
                              ><span class="bcn-triage-row__meta"
                                >Daily monitoring report · 1 file · Southern Forebay &amp; Pumping
                                Plant</span
                              >
                            </button>
                            <div class="bcn-triage-row__foot" data-triage-rowfoot="">
                              <span class="bcn-triage-row__match bcn-triage-row__sug"
                                ><span
                                  class="esa-badge esa-badge--neutral esa-badge--md typography-microcopy-sm-strong"
                                  ><span class="esa-badge__text">1 suggested action</span></span
                                ></span
                              >
                            </div>
                          </li>
                          <li
                            class="bcn-triage-row"
                            data-triage-row="tri-tc-rtm-stockpile"
                            data-source="monitoring-portal"
                            data-component="twin-cities-complex"
                            data-search="rtm stockpile inspection — twin cities, jul 21 reusable tunnel material stockpile cover and perimeter controls checked after the jul 20 wind event. no erosion observed. j. whitfield twin cities complex monitoring portal"
                            data-title="rtm stockpile inspection — twin cities, jul 21"
                          >
                            <button
                              type="button"
                              class="bcn-triage-row__body"
                              data-triage-open="tri-tc-rtm-stockpile"
                              aria-label="Review RTM stockpile inspection — Twin Cities, Jul 21"
                            >
                              <span class="bcn-triage-row__line"
                                ><span class="bcn-triage-row__title"
                                  >RTM stockpile inspection — Twin Cities, Jul 21</span
                                ><span class="bcn-triage-row__date">Jul 21</span></span
                              ><span class="bcn-triage-row__meta"
                                >Monitoring portal · 2 files · Twin Cities Complex</span
                              >
                            </button>
                            <div class="bcn-triage-row__foot" data-triage-rowfoot="">
                              <span class="bcn-triage-row__match bcn-triage-row__sug"
                                ><span
                                  class="esa-badge esa-badge--neutral esa-badge--md typography-microcopy-sm-strong"
                                  ><span class="esa-badge__text">1 suggested action</span></span
                                ></span
                              >
                            </div>
                          </li>
                        </ul>
                      </section>
                      <!-- …and 2 more like this (<section class="bcn-triage-queue__group">) -->
                      <ul class="bcn-triage-queue__list" data-triage-flat="" hidden=""></ul>
                      <div class="bcn-triage-queue__empty" data-triage-empty="filtered" hidden="">
                        <div class="esa-empty-state esa-empty-state--sm">
                          <h3 class="esa-empty-state__title typography-label-sm-strong">
                            No evidence matches these filters
                          </h3>
                          <p class="esa-empty-state__description typography-body-xs">
                            Clear a filter or broaden the search to see the rest of the queue.
                          </p>
                          <div class="esa-empty-state__actions typography-label-md"></div>
                        </div>
                      </div>
                      <div class="bcn-triage-queue__empty" data-triage-empty="cleared" hidden="">
                        <div class="esa-empty-state esa-empty-state--sm">
                          <h3 class="esa-empty-state__title typography-label-sm-strong">
                            Queue clear
                          </h3>
                          <p class="esa-empty-state__description typography-body-xs">
                            Every record that arrived has been attached to an action or dismissed.
                            New evidence lands here as it syncs.
                          </p>
                          <div class="esa-empty-state__actions typography-label-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bcn-triage-workspace__review">
                  <div class="bcn-triage-review">
                    <!-- Nothing picked yet: the pane says what it is for rather than sitting blank.

       NOTE: there is no "not evidence of compliance" action any more. A record leaves the
       queue only by being attached to an action — either an approved suggestion or one picked
       by hand. Nothing on this surface can say "this is not evidence", so a record that is
       genuinely junk has no exit; if that becomes a real case, this is where it would go. -->
                    <div class="bcn-triage-review__prompt" data-triage-prompt="">
                      <p class="bcn-triage-review__invite">Select a record to review</p>
                    </div>
                    <article
                      class="bcn-triage-review__panel"
                      data-triage-panel="tri-ib-turbidity"
                      hidden=""
                    >
                      <header class="bcn-triage-review__head">
                        <div class="bcn-triage-review__titlerow">
                          <h2 class="bcn-triage-review__title">
                            Intake B turbidity monitoring — Jul 22
                          </h2>
                          <span class="bcn-triage-review__close" data-triage-close=""
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Close this record"
                                title="Close this record"
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
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path></svg
                                ></span></button></span
                          ></span>
                        </div>
                        <p class="bcn-triage-review__notes">
                          Continuous readings at the cofferdam, 06:00–18:00. Two exceedances of the
                          15 NTU trigger, both cleared within the hour.
                        </p>
                        <dl class="bcn-triage-review__facts">
                          <div>
                            <dt>Received</dt>
                            <dd>July 22, 2026</dd>
                          </div>
                          <div>
                            <dt>Upload source</dt>
                            <dd title="Monitoring portal">Monitoring portal</dd>
                          </div>
                          <!-- …and 2 more like this (<div>) -->
                        </dl>
                        <div class="bcn-triage-review__files">
                          <details class="esa-collapsible esa-collapsible--flush">
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
                                    d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                  ></path></svg></span
                              ><span class="esa-collapsible__title">4 files</span>
                            </summary>
                            <div class="esa-collapsible__body typography-body-md">
                              <div class="bcn-triage-review__filelist">
                                <div class="bcn-file-row">
                                  <span class="bcn-file-row__icon"
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
                                  ><span
                                    class="bcn-file-row__name"
                                    title="IB-turbidity-log-2026-07-22.xlsx"
                                    >IB-turbidity-log-2026-07-22.xlsx</span
                                  ><span class="bcn-file-row__size">86 KB</span
                                  ><span class="bcn-file-row__actions"
                                    ><span
                                      class="bcn-file-row__act"
                                      data-bcn-file-preview="IB-turbidity-log-2026-07-22.xlsx"
                                      data-bcn-file-name="IB-turbidity-log-2026-07-22.xlsx"
                                      ><span
                                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                        ><button
                                          class="esa-button__native typography-microcopy-xs"
                                          type="button"
                                          aria-label="Preview IB-turbidity-log-2026-07-22.xlsx"
                                          title="Preview IB-turbidity-log-2026-07-22.xlsx"
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
                                              <path
                                                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                                              ></path>
                                              <circle cx="12" cy="12" r="3"></circle></svg
                                          ></span></button></span></span
                                    ><span class="bcn-file-row__act"
                                      ><span
                                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                        ><button
                                          class="esa-button__native typography-microcopy-xs"
                                          type="button"
                                          aria-label="Download IB-turbidity-log-2026-07-22.xlsx"
                                          title="Download IB-turbidity-log-2026-07-22.xlsx"
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
                                              <path
                                                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                              ></path>
                                              <polyline points="7 10 12 15 17 10"></polyline>
                                              <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                          ></span></button></span></span
                                  ></span>
                                </div>
                                <div class="bcn-file-row">
                                  <span class="bcn-file-row__icon"
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
                                  ><span
                                    class="bcn-file-row__name"
                                    title="IB-turbidity-field-notes-2026-07-22.pdf"
                                    >IB-turbidity-field-notes-2026-07-22.pdf</span
                                  ><span class="bcn-file-row__size">1.2 MB</span
                                  ><span class="bcn-file-row__actions"
                                    ><span
                                      class="bcn-file-row__act"
                                      data-bcn-file-preview="IB-turbidity-field-notes-2026-07-22.pdf"
                                      data-bcn-file-name="IB-turbidity-field-notes-2026-07-22.pdf"
                                      ><span
                                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                        ><button
                                          class="esa-button__native typography-microcopy-xs"
                                          type="button"
                                          aria-label="Preview IB-turbidity-field-notes-2026-07-22.pdf"
                                          title="Preview IB-turbidity-field-notes-2026-07-22.pdf"
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
                                              <path
                                                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                                              ></path>
                                              <circle cx="12" cy="12" r="3"></circle></svg
                                          ></span></button></span></span
                                    ><span class="bcn-file-row__act"
```
