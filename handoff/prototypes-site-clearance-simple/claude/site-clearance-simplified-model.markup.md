# Site Clearance — simplified model: markup

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
        ><span class="project-switcher__name">Delta Conveyance Project</span
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
            <a href="/beacon-design/prototypes/site-clearance" class="nav-sublink active"
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
    <!-- style removed (243 bytes) --><!-- bcn-lego-checked: esa-breadcrumbs exists, but this whole layout is a deliberate
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
            ><a class="breadcrumb-item" href="#monitoring">Monitoring</a
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
            ><a class="breadcrumb-item" href="#monitoring-portal">Monitoring Portal</a
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
            ><span class="breadcrumb-item" aria-current="page">Site Clearance — simplified</span>
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
              >Site Clearance — simplified model
            </h1>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="cmp-note">
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
                <path d="M12 8h.01"></path></svg
            ></span>
            <p>
              <strong>Simplified model.</strong> Each discipline lead <em>sets</em> their own
              status; surveys and field notes attach as evidence that justifies the status — they
              don't derive it. Open a work area, then a discipline cell, to see the direct editor.
              (The full Map / Timeline / Activity tabs live on the rich variant.)
            </p>
          </div>
          <section class="wa-list" aria-label="Work areas">
            <div class="wa-list__head">
              <span class="wa-list__col wa-list__col--id">Work area</span
              ><span class="wa-list__col wa-list__col--seg">Segment / County</span
              ><span class="wa-list__col wa-list__col--start">Planned start</span
              ><span class="wa-list__col wa-list__col--status">Clearance status</span>
            </div>
            <button type="button" class="wa-row" data-wa="DCRAI-DH-010">
              <span class="wa-list__col wa-list__col--id"
                ><span class="wa-row__id">DCRAI-DH-010</span
                ><span class="wa-row__method">Boring · 15 ft</span></span
              ><span class="wa-list__col wa-list__col--seg"
                ><span class="wa-row__seg">Rail Alignment</span
                ><span class="wa-row__county">SAN JOAQUIN</span></span
              ><span class="wa-list__col wa-list__col--start wa-row__start">—</span
              ><span class="wa-list__col wa-list__col--status"
                ><span class="wa-row__chip"
                  ><span
                    class="bcn-status-chip"
                    data-status="blocked"
                    style="--_chip: var(--st-blocked, #d73027)"
                    ><span class="bcn-status-chip__dot"></span
                    ><span class="bcn-status-chip__label">Blocked</span></span
                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
                ></span
              ></button
            ><button type="button" class="wa-row" data-wa="DCRAI-DH-013">
              <span class="wa-list__col wa-list__col--id"
                ><span class="wa-row__id">DCRAI-DH-013</span
                ><span class="wa-row__method">Boring · 15 ft</span></span
              ><span class="wa-list__col wa-list__col--seg"
                ><span class="wa-row__seg">Rail Alignment</span
                ><span class="wa-row__county">SAN JOAQUIN</span></span
              ><span class="wa-list__col wa-list__col--start wa-row__start">—</span
              ><span class="wa-list__col wa-list__col--status"
                ><span class="wa-row__chip"
                  ><span
                    class="bcn-status-chip"
                    data-status="blocked"
                    style="--_chip: var(--st-blocked, #d73027)"
                    ><span class="bcn-status-chip__dot"></span
                    ><span class="bcn-status-chip__label">Blocked</span></span
                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
                ></span
              ></button
            ><!-- …and 29 more like this (<button class="wa-row">) -->
          </section>
        </section>
      </div>
    </div>
    <esa-side-dialog
      id="wa-dialog"
      size="md"
      style="--_width: 620px; --z-modal: 1300; --z-modal-backdrop: 1250"
      position="right"
      ><div slot="header" class="wa__header">
        <div class="wa__headmain">
          <h2 class="wa__title" id="wa-title">Work area</h2>
          <span id="wa-chip"
            ><span
              class="bcn-status-chip"
              data-status="cleared"
              style="--_chip: var(--st-cleared, #1a9850)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">—</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
          >
        </div>
        <p class="wa__subtitle" id="wa-sub">—</p>
      </div>
      <div class="wa">
        <div class="band">
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Notification</span
            ><span class="wa__kv-val" id="wa-d-notif">—</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Clearance visit</span
            ><span class="wa__kv-val" id="wa-d-visit">—</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Planned start</span
            ><span class="wa__kv-val" id="wa-d-start">—</span>
          </div>
          <span class="band__cell" id="wa-d-until-wrap" hidden=""
            ><div class="bcn-key-value" data-size="md" data-layout="stack">
              <span class="bcn-key-value__key">Blocked until</span
              ><span class="band__alert" id="wa-d-until">—</span>
            </div></span
          >
        </div>
        <p class="decide" id="wa-decide"></p>
        <section>
          <h3 class="wa__section">
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
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                ></path>
                <path d="m9 12 2 2 4-4"></path></svg></span
            >Disciplines
          </h3>
          <div class="board" id="wa-board">
            <button type="button" class="board__cell" data-dim="biological">
              <span class="board__cellhead"
                ><span class="board__dim">Biological</span
                ><span class="board__chev"
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
              ><span class="board__chipwrap"></span
              ><span class="board__unreviewed" hidden="">Not reviewed</span
              ><span class="board__meta">—</span></button
            ><button type="button" class="board__cell" data-dim="cultural">
              <span class="board__cellhead"
                ><span class="board__dim">Cultural Resources</span
                ><span class="board__chev"
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
              ><span class="board__chipwrap"></span
              ><span class="board__unreviewed" hidden="">Not reviewed</span
              ><span class="board__meta">—</span></button
            ><!-- …and 2 more like this (<button class="board__cell">) -->
          </div>
        </section>
        <div class="wa__more">
          <span class="wa__more-item" id="wa-notes-col" hidden=""
            ><details class="esa-collapsible esa-collapsible--flush">
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
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path></svg></span
                ><span class="esa-collapsible__title">Field note</span>
              </summary>
              <div class="esa-collapsible__body typography-body-md">
                <blockquote class="wa__note" id="wa-note"></blockquote>
              </div></details
          ></span>
        </div>
      </div>
      <div slot="footer" class="wa__footer">
        <span id="wa-close"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Close</span>
            </button></span
          ></span
        >
      </div></esa-side-dialog
    ><esa-side-dialog
      id="disc-dialog"
      size="md"
      style="--_width: 540px; --z-modal: 1340; --z-modal-backdrop: 1310"
      position="right"
      ><div slot="header" class="wa__header">
        <div class="wa__headmain">
          <h2 class="wa__title" id="dd-title">Discipline</h2>
          <span id="dd-chip" hidden=""
            ><span
              class="bcn-status-chip"
              data-status="cleared"
              style="--_chip: var(--st-cleared, #1a9850)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">—</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
          ><span class="board__unreviewed" id="dd-unreviewed" hidden="">Not reviewed</span>
        </div>
        <p class="wa__subtitle" id="dd-sub">—</p>
      </div>
      <div class="wa">
        <section class="dd__form">
          <div class="bcn-status-select" id="dd-status" data-value="survey-scheduled">
            <span class="bcn-status-select__label"
              >Clearance status (set by the discipline lead)</span
            >
            <div class="bcn-status-select__dd">
              <button
                type="button"
                class="bcn-status-select__trigger"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span
                  class="bcn-status-select__dot bcn-status-select__dot--trigger"
                  style="background: #74add1"
                ></span
                ><span class="bcn-status-select__value">Survey Scheduled</span
                ><svg
                  class="bcn-status-select__chev"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <ul class="bcn-status-select__menu" role="listbox" hidden="">
                <li
                  class="bcn-status-select__opt"
                  role="option"
                  data-value="cleared"
                  data-label="Cleared"
                  data-color="#1a9850"
                  aria-selected="false"
                >
                  <span class="bcn-status-select__dot" style="background: #1a9850"></span>Cleared
                </li>
                <li
                  class="bcn-status-select__opt"
                  role="option"
                  data-value="cleared-stipulations"
                  data-label="Cleared w/ Stipulations"
                  data-color="#8db94e"
                  aria-selected="false"
                >
                  <span class="bcn-status-select__dot" style="background: #8db94e"></span>Cleared w/
                  Stipulations
                </li>
                <!-- …and 4 more like this (<li class="bcn-status-select__opt">) -->
              </ul>
            </div>
          </div>
          <div class="we__row">
            <esa-date-picker id="dd-date" label="Determined" size="sm"></esa-date-picker
            ><esa-text-field
              id="dd-reviewer"
              label="Reviewer"
              placeholder="Name (org)"
              size="sm"
            ></esa-text-field>
          </div>
          <span id="dd-until-wrap" hidden=""
            ><esa-date-picker
              id="dd-until"
              label="Blocked until (blank = until further notice)"
              size="sm"
            ></esa-date-picker></span
          ><esa-textarea id="dd-note" label="Note" rows="2" auto-resize="" size="sm"></esa-textarea
          ><esa-input-tag
            id="dd-stips"
            label="Stipulations"
            placeholder="Add stipulation…"
            tags-below="true"
            size="sm"
          ></esa-input-tag>
        </section>
        <section>
          <h3 class="wa__section">
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
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M12 7v5l4 2"></path></svg></span
            >Evidence log<span id="dd-log-count"
              ><span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">0</span></span
              ></span
            >
          </h3>
          <p class="dd__hint">
            Surveys, field notes, relocations — the record that justifies the status. Append-only.
          </p>
          <ul class="dd__log" id="dd-log"></ul>
          <div class="dd__addnote">
            <div class="we__row">
              <esa-date-picker id="dd-ev-date" label="Date" size="sm"></esa-date-picker
              ><esa-text-field
                id="dd-ev-author"
                label="Author"
                placeholder="Who recorded it"
                size="sm"
              ></esa-text-field>
            </div>
            <esa-textarea
              id="dd-ev-text"
              label="Add evidence note"
              rows="2"
              auto-resize=""
              placeholder="Paste the survey result / biologist email…"
              size="sm"
            ></esa-textarea>
          </div>
        </section>
      </div>
      <div slot="footer" class="wa__footer">
        <span id="dd-cancel"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Cancel</span>
            </button></span
          ></span
        ><span id="dd-save"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Save status</span>
            </button></span
          ></span
        >
      </div></esa-side-dialog
    ><template id="chip-tpl"
      ><span class="chipwrap" data-astro-cid-gfpzyqvd=""
        ><span
          class="bcn-status-chip"
          data-status="cleared"
          style="--_chip: var(--st-cleared, #1a9850)"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">—</span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
      ></template
    ><template id="pill-tpl"
      ><span
        class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
        data-astro-cid-xtwxlazl=""
        ><span class="esa-pill__label" data-astro-cid-xtwxlazl="">—</span></span
      >
      <script type="module">
        document.addEventListener(
          `click`,
          (e) => {
            let t = e.target.closest?.(`[data-esa-pill-remove]`);
            if (!t) return;
            e.stopPropagation();
            let n = t.closest(`.esa-pill`);
            n && (n.dispatchEvent(new CustomEvent(`removed`, { bubbles: !0 })), n.remove());
          },
          !0,
        );
      </script></template
    >
  </div>
</div>
```
