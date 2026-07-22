# Search results page

The full-page results surface — the destination of the palette's ⌘+Enter "see all". Same index, two surfaces, so a record reads identically in the palette and here. A search field on top, then a [ scope-facet rail | results ] split with a vertical divider between them; results are grouped by scope with bordered count badges, and the URL's ?q / ?scope round-trip the state.

## Key decisions
- NULL STATE (empty query): no results are listed, the count line is hidden, the rail is present but DISABLED (muted, no counts), and an esa-empty-state "Search the project" landing fills the content column — it deliberately does NOT dump all records.
- A vertical divider (the main column's left border + padding) separates the rail from the results list.
- Rows echo the palette (purple commitment-ID badge + SEMIBOLD title, no icon, no subtitle) but DIVERGE on the body: a body-only hit shows the FULL matching document text (multi-line, serif, in a bordered card), echoing Beacon's Document Review commitment-search text block — not the palette's one-line snippet.
- Per-scope rail counts show query REACH (they ignore the active scope); the active scope only narrows which rows render.
- Server-renders every record grouped, then the client filters the DOM to ?q/?scope, highlights matches, and keeps counts + URL in sync.

## Gotchas
- On entering the idle (empty-query) state the rail's active highlight is cleared; it must be RESTORED from activeScope when a query resumes, or the re-enabled rail shows nothing selected.
- Count badges update from the filter pass (query reach), not from the active-scope narrowing — keep the two concerns separate.
- No esa-* lego renders a server-rendered, on-page grouped result list with scope facets; esa-empty-state owns only the no-matches / landing states. This is the bcn-search-results component.

## Done when
- No query → "Search the project" landing + disabled rail, no results; typing filters + highlights and re-enables the rail with counts; a body match shows the full serif text card; ?q/?scope round-trip in the URL.

## Markup
```html
<section class="bcn-sr">
  <!-- 1 · Search field — mirrors the omnibox's own leading-icon + bare input -->
  <div class="bcn-sr__search">
    <span class="bcn-sr__search-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    </span>
    <input
      id="results-query"
      class="bcn-sr__input"
      type="search"
      placeholder="Search…"
      autocomplete="off"
      aria-label="Search all records"
    />
  </div>
  <!-- 2 · [ scope-facet rail | results ] split -->
  <div class="bcn-sr__split">
    <nav class="bcn-sr__rail" role="tablist" aria-label="Filter results by type">
      <button
        type="button"
        class="bcn-sr__scope bcn-sr__scope--active"
        data-scope=""
        role="tab"
        aria-selected="true"
      >
        <span class="bcn-sr__scope-label">All</span>
        <span class="bcn-sr__scope-count" data-scope-count="">147</span>
      </button>
      <button
        type="button"
        class="bcn-sr__scope"
        data-scope="source-documents"
        role="tab"
        aria-selected="false"
      >
        <span class="bcn-sr__scope-label">Source Documents</span>
        <span class="bcn-sr__scope-count" data-scope-count="">0</span></button
      ><button
        type="button"
        class="bcn-sr__scope"
        data-scope="commitments"
        role="tab"
        aria-selected="false"
      >
        <span class="bcn-sr__scope-label">Commitments</span>
        <span class="bcn-sr__scope-count" data-scope-count="">143</span></button
      ><button
        type="button"
        class="bcn-sr__scope"
        data-scope="requirements"
        role="tab"
        aria-selected="false"
      >
        <span class="bcn-sr__scope-label">Requirements</span>
        <span class="bcn-sr__scope-count" data-scope-count="">1</span></button
      ><button
        type="button"
        class="bcn-sr__scope"
        data-scope="actions"
        role="tab"
        aria-selected="false"
      >
        <span class="bcn-sr__scope-label">Actions</span>
        <span class="bcn-sr__scope-count" data-scope-count="">2</span></button
      ><button
        type="button"
        class="bcn-sr__scope"
        data-scope="components"
        role="tab"
        aria-selected="false"
      >
        <span class="bcn-sr__scope-label">Components</span>
        <span class="bcn-sr__scope-count" data-scope-count="">0</span></button
      ><button
        type="button"
        class="bcn-sr__scope"
        data-scope="evidence"
        role="tab"
        aria-selected="false"
      >
        <span class="bcn-sr__scope-label">Evidence of Compliance</span>
        <span class="bcn-sr__scope-count" data-scope-count="">1</span></button
      ><button
        type="button"
        class="bcn-sr__scope"
        data-scope="work-areas"
        role="tab"
        aria-selected="false"
      >
        <span class="bcn-sr__scope-label">Work Areas</span>
        <span class="bcn-sr__scope-count" data-scope-count="">0</span></button
      ><button
        type="button"
        class="bcn-sr__scope"
        data-scope="observations"
        role="tab"
        aria-selected="false"
      >
        <span class="bcn-sr__scope-label">Observations</span>
        <span class="bcn-sr__scope-count" data-scope-count="">0</span>
      </button>
    </nav>
    <div class="bcn-sr__main">
      <!-- Result count line (client-updated) -->
      <p class="bcn-sr__count" id="results-count">147 results for “biologist”</p>
      <!-- Null state: shown when the query is empty — no results listed, rail disabled -->
      <div class="bcn-sr__landing" id="results-landing" hidden="">
        <div class="esa-empty-state esa-empty-state--md">
          <div class="esa-empty-state__icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <h3 class="esa-empty-state__title">Search the project</h3>
          <p class="esa-empty-state__description">
            Source documents, commitments, requirements, actions, components, evidence,
            work areas, and observations — search titles and full document text.
          </p>
          <div class="esa-empty-state__actions"></div>
        </div>
      </div>
      <!-- Grouped results -->
      <div class="bcn-sr__results">
        <section class="bcn-sr__group" data-group="source-documents" hidden="">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Source Documents</span>
            <span class="bcn-sr__group-count" data-group-count="">0</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-source-document"
              data-id="sd-feir-3600"
              data-scope="source-documents"
              data-entity="3600 alameda avenue project feir final environmental impact report · 130 requirements"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">3600 Alameda Avenue Project FEIR</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-source-document"
              data-id="sd-dcp-eir"
              data-scope="source-documents"
              data-entity="delta conveyance project eir environmental impact report"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Delta Conveyance Project EIR</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-source-document"
              data-id="sd-itp"
              data-scope="source-documents"
              data-entity="incidental take permit (itp) 2081 cdfw 2081(b) permit · 36 studies"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Incidental Take Permit (ITP) 2081</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-source-document"
              data-id="sd-biop"
              data-scope="source-documents"
              data-entity="biological opinion — delta smelt usfws biological opinion"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Biological Opinion — Delta Smelt</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-source-document"
              data-id="sd-nbmp"
              data-scope="source-documents"
              data-entity="nesting bird management plan construction management plan"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Nesting Bird Management Plan</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-source-document"
              data-id="sd-swppp"
              data-scope="source-documents"
              data-entity="stormwater pollution prevention plan (swppp) construction stormwater plan"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Stormwater Pollution Prevention Plan (SWPPP)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div>
            </a>
          </div>
        </section>
        <section class="bcn-sr__group" data-group="commitments">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Commitments</span>
            <span class="bcn-sr__group-count" data-group-count="">143</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-0"
              data-scope="commitments"
              data-entity="california least tern avoidance and minimization measures "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">6.3.2.2</span>
                  <span class="bcn-sr__row-title"
                    >California Least Tern Avoidance and Minimization Measures</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … on (April 15 to August 15). Construction-related noise level will be
                  determined based on a noise contour map, created by a noise expert,
                  showing the 60 dBA noise contour specific to the type and location of
                  construction to occur in the area. Surveys will be conducted by a
                  Service- and CDFW-approved <mark>biologist</mark> with experience
                  observing the species and its nests. DWR will implement the following
                  requirements to avoid loss of California least tern nesting colonies if
                  construction will take place within 500 feet of a California least tern
                  nest where construction-related noise levels could exceed 60 dBA Leq (1
                  hour) during the breeding season (April 15 to August 15 or extended as
                  determined through surveys).A Service- and CDFW-approved wildlife
                  <mark>biologist</mark> will monitor construction activities within 500
                  feet of active nests to ensure that construction activities do not
                  affect nest success. Reduced buffers may be allowed, through
                  coordination with the Service and CDFW, if a full-time Service- and
                  CDFW-approved <mark>biologist</mark> is present to monitor the nest and
                  has authority to halt construction if bird behavior indicates continued
                  activities could lead to nest failure. Active nests will be monitored to
                  track progress of nesting activities until the
                  <mark>biologist</mark> determines that the young have fledged and are
                  capable of independent survival or the nest site is no longer
                  active.Activities performed during the California least tern breeding
                  season, in occupied least tern nesting habitat, with Service and CDFW
                  approval and under the supervision of a Service- and CDFW-approved
                  <mark>biologist</mark>, will be limited to inspection, research, or
                  monitoring.If a California least tern is found, construction activities
                  will be limited such that sound will not exceed 60 dBA within 500 feet
                  of the habitat being used until the Service- and CDFW-approved
                  <mark>biologist</mark> has confirmed that the bird has left the
                  area.Portable and stationary equipment will be located, stored, and
                  maintained as far as possible, with a minimum distance of 500 feet, from
                  suitable California least tern habitat.All lights will be screened and
                  directed down toward work activities and away …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-1"
              data-scope="commitments"
              data-entity="least bell’s vireo avoidance and minimization measures "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">6.3.2.3</span>
                  <span class="bcn-sr__row-title"
                    >Least Bell’s Vireo Avoidance and Minimization Measures</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … tivities occurring between May 15 through September 1.1. Prior to the
                  construction, a noise expert will create a noise contour map showing the
                  60 dBA noise contour specific to the type and location of construction
                  to occur in the area.2. Two weeks prior to construction, a Service- and
                  CDFW-approved <mark>biologist</mark> will conduct daily surveys,
                  consistent with a Service- or CDFW- approved survey protocol (U.S. Fish
                  and Wildlife Service 2001:1-3, or more current guidance) within 500 feet
                  of suitable habitat where construction-related noise levels could exceed
                  60 dBA Leq (1 hour).3. If a least Bell’s vireo is found, construction
                  activities will be limited such that sound will not exceed 60 dBA within
                  500 feet of the habitat being used until the Service- and CDFW-approved
                  <mark>biologist</mark> has confirmed that the bird has left the area.4.
                  If surveys find least Bell’s vireos in an area where vegetation will be
                  removed, vegetation removal will be conducted when the Service- and
                  CDFW-approved <mark>biologist</mark> has confirmed that least Bell’s
                  vireos are not present within 500 feet of vegetation removal
                  activities.5. Portable and stationary equipment will be located, stored,
                  and maintained as far as possible, with a minimum distance of 500 feet,
                  from suitable least Bell’s vireo habitat.6. All lights will b …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-2"
              data-scope="commitments"
              data-entity="western yellow-billed cuckoo avoidance and minimization measures "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">6.3.2.4</span>
                  <span class="bcn-sr__row-title"
                    >Western Yellow-Billed Cuckoo Avoidance and Minimization
                    Measures</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … tivities occurring between May 15 through September 1.1. Prior to the
                  construction, a noise expert will create a noise contour map showing the
                  60 dBA noise contour specific to the type and location of construction
                  to occur in the area.2. Two weeks prior to construction, a Service- and
                  CDFW-approved <mark>biologist</mark> will conduct daily surveys,
                  consistent with a Service- or CDFW-approved survey protocol (e.g.,
                  Halterman et al. 2015:9-42, or more current guidance), within 500 feet
                  of suitable habitat where construction-related noise levels could exceed
                  60 dBA Leq (1 hour).3. If a yellow-billed cuckoo is found, construction
                  activities will be limited such that sound will not exceed 60 dBA within
                  500 feet of the habitat being used until the Service- and CDFW-approved
                  <mark>biologist</mark> has confirmed that the bird has left the area.4.
                  If surveys find cuckoos in an area where vegetation will be removed,
                  vegetation removal will be conducted when the Service- and CDFW-approved
                  <mark>biologist</mark> has confirmed that cuckoos are not present within
                  500 feet of vegetation removal activities.5. Portable and stationary
                  equipment will be located, stored, and maintained as far as possible,
                  with a minimum distance of 500 feet, from suitable western yellow-billed
                  cuckoo habitat.6. All lights will be …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-3"
              data-scope="commitments"
              data-entity="california red-legged frog avoidance and minimization measures "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">6.3.2.5</span>
                  <span class="bcn-sr__row-title"
                    >California Red-Legged Frog Avoidance and Minimization Measures</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. When each site is available for surveys, a Service-approved
                  <mark>biologist</mark> will then delineate California red-legged frog
                  habitat at each project site, based on an agreed upon definition of
                  suitable habitat, including both aquatic and upland habitat.2. Once
                  habitat has been delineated, the qualified <mark>biologist</mark> will
                  conduct preconstruction surveys performed using a method approved by the
                  Service to determine whether California red-legged frog is present on
                  the project site to enable further determination of compensatory
                  mitigation requirements. In the event of a dry year, the aquatic habitat
                  will be evalu … in from the closest National Weather Service (NWS)
                  weather station. Clearing may continue 24 hours after the rain ceases,
                  if no more than 0.5 inch of precipitation is in the 72-hour forecast. If
                  clearing must continue when rain is forecast (i.e., greater than 40%
                  chance of rain), a Service-approved <mark>biologist</mark> will survey
                  the work site before clearing begins each day rain is forecast. If rain
                  exceeds 0.5 inch during a 24-hour period, clearing will cease until the
                  NWS forecasts no further rain. Modifications to this timing may be
                  approved by the Service based on site conditions and expected risks to
                  Calif …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-4"
              data-scope="commitments"
              data-entity="install visual barriers between construction work areas and sensitive receptors (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AES-1a</span>
                  <span class="bcn-sr__row-title"
                    >Install Visual Barriers between Construction Work Areas and Sensitive
                    Receptors (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-5"
              data-scope="commitments"
              data-entity="apply aesthetic design treatments to project structures "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AES-1b</span>
                  <span class="bcn-sr__row-title"
                    >Apply Aesthetic Design Treatments to Project Structures</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-6"
              data-scope="commitments"
              data-entity="implement best management practices to implement project landscaping plan (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AES-1c</span>
                  <span class="bcn-sr__row-title"
                    >Implement Best Management Practices to Implement Project Landscaping
                    Plan (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-7"
              data-scope="commitments"
              data-entity="limit construction outside of daylight hours within 0.25 mile of residents at the intakes (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AES-4a</span>
                  <span class="bcn-sr__row-title"
                    >Limit Construction Outside of Daylight Hours within 0.25 Mile of
                    Residents at the Intakes (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-8"
              data-scope="commitments"
              data-entity="minimize fugitive light from portable sources used for construction (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AES-4b</span>
                  <span class="bcn-sr__row-title"
                    >Minimize Fugitive Light from Portable Sources Used for Construction
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-9"
              data-scope="commitments"
              data-entity="install visual barriers along access routes, where necessary, to prevent light spill from truck headlights toward residences (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AES-4c</span>
                  <span class="bcn-sr__row-title"
                    >Install Visual Barriers along Access Routes, Where Necessary, to
                    Prevent Light Spill from Truck Headlights toward Residences
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-10"
              data-scope="commitments"
              data-entity="preserve agricultural land "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AG-1</span>
                  <span class="bcn-sr__row-title">Preserve Agricultural Land</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-11"
              data-scope="commitments"
              data-entity="replacement or relocation of affected infrastructure supporting agricultural properties (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AG-3</span>
                  <span class="bcn-sr__row-title"
                    >Replacement or Relocation of Affected Infrastructure Supporting
                    Agricultural Properties (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-12"
              data-scope="commitments"
              data-entity="conduct environmental resources worker awareness training "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-1</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Environmental Resources Worker Awareness Training</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-13"
              data-scope="commitments"
              data-entity="develop and implement hazardous materials management plans "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-2</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement Hazardous Materials Management Plans</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-14"
              data-scope="commitments"
              data-entity="develop and implement spill prevention, control, and countermeasure plans "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-3</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement Spill Prevention, Control, and Countermeasure
                    Plans</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-15"
              data-scope="commitments"
              data-entity="develop and implement erosion and sediment control plans "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-4a</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement Erosion and Sediment Control Plans</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-16"
              data-scope="commitments"
              data-entity="develop and implement stormwater pollution prevention plans "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-4b</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement Stormwater Pollution Prevention Plans</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-17"
              data-scope="commitments"
              data-entity="develop and implement a fire prevention and control plan "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-5</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Fire Prevention and Control Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-18"
              data-scope="commitments"
              data-entity="conduct cultural resources awareness training "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-6</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Cultural Resources Awareness Training</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-19"
              data-scope="commitments"
              data-entity="off-road heavy-duty engines "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-7</span>
                  <span class="bcn-sr__row-title">Off-Road Heavy-Duty Engines</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-20"
              data-scope="commitments"
              data-entity="on-road haul trucks "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-8</span>
                  <span class="bcn-sr__row-title">On-Road Haul Trucks</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-21"
              data-scope="commitments"
              data-entity="on-site locomotives "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-9</span>
                  <span class="bcn-sr__row-title">On-Site Locomotives</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-22"
              data-scope="commitments"
              data-entity="marine vessels "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-10</span>
                  <span class="bcn-sr__row-title">Marine Vessels</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-23"
              data-scope="commitments"
              data-entity="fugitive dust control "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-11</span>
                  <span class="bcn-sr__row-title">Fugitive Dust Control</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-24"
              data-scope="commitments"
              data-entity="on-site concrete batching plants "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-12</span>
                  <span class="bcn-sr__row-title">On-Site Concrete Batching Plants</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-25"
              data-scope="commitments"
              data-entity="dwr best management practices to reduce ghg emissions "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-13</span>
                  <span class="bcn-sr__row-title"
                    >DWR Best Management Practices to Reduce GHG Emissions</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-26"
              data-scope="commitments"
              data-entity="construction best management practices for biological resources "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-14</span>
                  <span class="bcn-sr__row-title"
                    >Construction Best Management Practices for Biological Resources</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  DWR will require all construction and restoration activities in and
                  adjacent to suitable habitat for special-status species and sensitive
                  natural communities to implement BMPs and have construction monitored by
                  qualified <mark>biologist</mark>s (experienced with the resources and
                  environmental compliance training and monitoring). Depending on the
                  resource of concern and construction timing, construction activities and
                  areas will be monitored for compliance with water quality regulations
                  (SWPPP monitor, see AMM-4b: Develop and Implement S …
                </p>
                <p>
                  Qualified <mark>biologist</mark>s will monitor construction activities
                  in areas identified during the planning stages and species/habitat
                  surveys as having special-status fish, wildlife, and plant species or
                  their habitats, designated critical habitat, and sensitive natural
                  communities. The intent of the biological monitoring is t …
                </p>
                <p>
                  Biological monitors will be professional <mark>biologist</mark>s
                  selected for their knowledge of the special-status species and natural
                  communities that may be affected by construction activities. The
                  qualifications of the <mark>biologist</mark>(s) will be presented to the
                  fish and wildlife agencies for review and written approval, consistent
                  with permits and authorizations. If a special-status species is observed
                  in an active work area, the biological monitors will immediately provide
                  the construction manager and contractor with its locat …
                </p>
                <p>
                  During construction, the non-disturbance buffers described under the
                  special-status species' mitigation measures in Chapter 3, Section 3.6.2,
                  Species-Specific Avoidance and Minimization Measures, will be
                  established and maintained as necessary. A qualified
                  <mark>biologist</mark> will monitor the site consistent with the
                  requirements described for special-status species to enforce buffers and
                  non-disturbance of sensitive resources.
                </p>
                <p class="bcn-sr__row-more">+ 41 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-27"
              data-scope="commitments"
              data-entity="sediment monitoring, modeling, and reintroduction adaptive management "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-15</span>
                  <span class="bcn-sr__row-title"
                    >Sediment Monitoring, Modeling, and Reintroduction Adaptive
                    Management</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-28"
              data-scope="commitments"
              data-entity="provide notification of construction and maintenance activities in waterways "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-16</span>
                  <span class="bcn-sr__row-title"
                    >Provide Notification of Construction and Maintenance Activities in
                    Waterways</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-29"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on terrestrial biological resources from maintenance activities "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-17</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Terrestrial Biological Resources from
                    Maintenance Activities</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … intenance ActivitiesDWR will implement the following process and
                  measures to avoid and minimize potential impacts on terrestrial
                  biological resources when surface maintenance activities occur at DWR
                  project facilities. Consistent with current DWR environmental clearance
                  review procedures, qualified <mark>biologist</mark>s will implement the
                  following measures to avoid and minimize impacts on sensitive species,
                  sensitive natural communities, and sensitive vegetation alliances during
                  project maintenance activities. Additional measures may be developed for
                  site-specific conditions or specific biological resources and
                  implemented, as necessary. If additional permits and approvals are
                  determined to be necessary through a subsequent consultation process,
                  then the conditions of those permits and approvals will supersede the
                  measures listed below.Prior to the start of maintenance activities, a
                  qualified team of <mark>biologist</mark>s will conduct an environmental
                  review of the potential for maintenance to affect sensitive resources.
                  Using occurrence databases, aerial imagery, and prior knowledge of
                  maintenance areas, a qualified team of <mark>biologist</mark>s will
                  evaluate the potential for suitable habitat for special-status species,
                  sensitive natural communities, and/or cultural resources to occur in the
                  maintenance footprint. A site visit may be conducted to verify whether
                  sensitive resources have the potential to be present within the
                  maintenance a … of the maintenance activity.Depending on the timing (see
                  Chapter 4, Action Area and Environmental Baseline, for species-specific
                  timing and suitable habitat definitions), location, and nature of the
                  maintenance activity, a preconstruction survey may be required as
                  determined by a qualified team of <mark>biologist</mark>s to determine
                  potential presence of suitable habitat for sensitive species prior to
                  the start of maintenance activities. Surveys will be conducted by a
                  qualified <mark>biologist</mark> with experience identifying the
                  resources in question using standard survey protocols and during
                  appropriate timeframes specific to each sensitive resource. Surveys and
                  monitoring will be conducted from locations where access
                  allows.Appropriate non-disturbance buffers will be applied around
                  sensitive biological resources and habitat as determined by a qualified
                  team of <mark>biologist</mark>s during the environmental clearance
                  review or preconstruction surveys. Non-disturbance buffers will be
                  established by a qualified <mark>biologist</mark> and will take into
                  consideration the nature of the maintenance activity, the sensitivity of
                  the species, site-specific conditions, and applicable state and federal
                  recommendations. See Chapter 3 for appropriate species-specific buffers.
                  Maintenance activities will avoid impacts on rodent burrows, w …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-30"
              data-scope="commitments"
              data-entity="avoid and minimize operational traffic impacts on wildlife "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-18</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Operational Traffic Impacts on Wildlife</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-31"
              data-scope="commitments"
              data-entity="minimize fugitive light from portable sources used for construction "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-19</span>
                  <span class="bcn-sr__row-title"
                    >Minimize Fugitive Light from Portable Sources Used for
                    Construction</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-32"
              data-scope="commitments"
              data-entity="install visual barriers along access routes, where necessary, to prevent light spill from truck headlights toward residences "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-20</span>
                  <span class="bcn-sr__row-title"
                    >Install Visual Barriers along Access Routes, Where Necessary, to
                    Prevent Light Spill from Truck Headlights toward Residences</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-33"
              data-scope="commitments"
              data-entity="develop and implement a noise control plan "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-21</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Noise Control Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-34"
              data-scope="commitments"
              data-entity="electrical power line support placement "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-22</span>
                  <span class="bcn-sr__row-title"
                    >Electrical Power Line Support Placement</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … distribution lines and the locations of necessary appurtenances such
                  as supports and substations to avoid sensitive terrestrial habitat by
                  150 feet and aquatic habitats by 250 feet and to minimize take and
                  encumbrance of agricultural lands. Non-disturbance buffers will be
                  determined by a qualified <mark>biologist</mark> in coordination with
                  the electric utility provider and the size of the buffer will depend on
                  the rarity and sensitivity of the resource as identified by the
                  qualified <mark>biologist</mark>. In cases where sensitive habitat
                  cannot be feasibly avoided, disturbance will be minimized to the
                  greatest degree feasible, and disturbed areas will be returned as near
                  as reasonably and practically feasible to preconstruction conditions by
                  reestablishing surface conditions through carefully gradi …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-35"
              data-scope="commitments"
              data-entity="develop and implement a mercury management and monitoring plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-23</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Mercury Management and Monitoring Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … discernably worse. The MMMP will serve as the framework for
                  site-specific mercury management plans to be prepared for each proposed
                  new tidal habitat site that address the MMMP elements (defined below)
                  based on site-specific conditions.DWR will retain a qualified water
                  quality specialist, wildlife <mark>biologist</mark>, or fisheries
                  <mark>biologist</mark> with expertise in methylmercury management to
                  develop the MMMP.Mercury Management and Monitoring Plan
                  ElementsPredesign field studies—The MMMP will define the predesign field
                  studies to be conducted at potential tidal habitat sites to characterize
                  mercury sources and concentrations of mercury, meth …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-36"
              data-scope="commitments"
              data-entity="minimize access road impacts on listed amphibian connectivity "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-24</span>
                  <span class="bcn-sr__row-title"
                    >Minimize Access Road Impacts on Listed Amphibian Connectivity</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-37"
              data-scope="commitments"
              data-entity="develop and implement a fish rescue and salvage plan "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-25</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Fish Rescue and Salvage Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-38"
              data-scope="commitments"
              data-entity="develop and implement an underwater sound control and abatement plan "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-26</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement an Underwater Sound Control and Abatement
                    Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-39"
              data-scope="commitments"
              data-entity="develop and implement a barge operations plan "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AMM-27</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Barge Operations Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-40"
              data-scope="commitments"
              data-entity="offset construction-generated criteria pollutants in the sacramento valley air basin (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AQ-1</span>
                  <span class="bcn-sr__row-title"
                    >Offset Construction-Generated Criteria Pollutants in the Sacramento
                    Valley Air Basin (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-41"
              data-scope="commitments"
              data-entity="offset construction-generated criteria pollutants in the san joaquin valley air basin (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AQ-2</span>
                  <span class="bcn-sr__row-title"
                    >Offset Construction-Generated Criteria Pollutants in the San Joaquin
                    Valley Air Basin (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-42"
              data-scope="commitments"
              data-entity="offset construction-generated criteria pollutants in the san francisco bay area air basin (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AQ-3</span>
                  <span class="bcn-sr__row-title"
                    >Offset Construction-Generated Criteria Pollutants in the San
                    Francisco Bay Area Air Basin (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-43"
              data-scope="commitments"
              data-entity="avoid public exposure to localized particulate matter and nitrogen dioxide concentrations (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AQ-5</span>
                  <span class="bcn-sr__row-title"
                    >Avoid Public Exposure to Localized Particulate Matter and Nitrogen
                    Dioxide Concentrations (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-44"
              data-scope="commitments"
              data-entity="develop and implement a ghg reduction plan to reduce ghg emissions from construction and net cvp operational pumping to net zero (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AQ-9</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a GHG Reduction Plan to Reduce GHG Emissions
                    from Construction and Net CVP Operational Pumping to Net Zero
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-45"
              data-scope="commitments"
              data-entity="develop and implement an underwater sound control and abatement plan (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AQUA-1a</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement an Underwater Sound Control and Abatement Plan
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-46"
              data-scope="commitments"
              data-entity="develop and implement a barge operations plan (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AQUA-1b</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Barge Operations Plan (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-47"
              data-scope="commitments"
              data-entity="develop and implement a fish rescue and salvage plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AQUA-1c</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Fish Rescue and Salvage Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  All fish rescue and salvage operations will be conducted under the
                  guidance of a qualified fish <mark>biologist</mark>[1] and in accordance
                  with required permits. Each fish rescue plan will identify the
                  appropriate procedures for excluding fish from the construction zones,
                  and procedures for removing fish, should they become trapped. The
                  primary procedure will be to herd fish out of the partially enclosed
                  work area …
                </p>
                <p>
                  All fish rescue and salvage operations will be conducted under the
                  guidance of a fish <mark>biologist</mark> meeting the qualification
                  requirements described under Qualifications of Fish Rescue Personnel.
                  The following description includes detailed fish collection, holding,
                  handling, and release procedures of the plan. Unless otherwise required
                  by project permits, the construction contractor will provide …
                </p>
                <p>
                  [1] The qualified fish <mark>biologist</mark> will have necessary fish
                  collection permits; will be approved by NMFS, USFWS, and CDFW; and will
                  have experience in identifying and handling Delta fish species. The fish
                  rescue and salvage crew overseen by the qualified fish
                  <mark>biologist</mark> will also have experience in handling Delta fish
                  species.
                </p>
                <p class="bcn-sr__row-more">+ 40 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-48"
              data-scope="commitments"
              data-entity="avoid or minimize impacts on special-status natural communities and special-status plants "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-2a</span>
                  <span class="bcn-sr__row-title"
                    >Avoid or Minimize Impacts on Special-Status Natural Communities and
                    Special-Status Plants</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … gation measures would be implemented to avoid or offset impacts. The
                  extent of mitigation for direct loss of or indirect effects on
                  special-status plants will be based on these survey results.All surveys
                  for special-status natural communities and special-status plants will be
                  conducted by qualified <mark>biologist</mark>s following Guidelines for
                  Conducting and Reporting Botanical Inventories for Federally Listed,
                  Proposed and Candidate Plants (U.S. Fish and Wildlife Service 1996) and
                  Protocols for Surveying and Evaluating Impacts to Special Status Native
                  Plant Populations and Sensitive Natural Communities (Califor …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-49"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on terrestrial biological resources from maintenance activities (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-2b</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Terrestrial Biological Resources from
                    Maintenance Activities (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  DWR will implement the following process and measures to avoid and
                  minimize potential impacts on terrestrial biological resources when
                  surface maintenance activities occur at DWR project facilities.
                  Consistent with current DWR environmental clearance review procedures,
                  qualified <mark>biologist</mark>s will implement the following measures
                  to avoid and minimize impacts on sensitive species, sensitive natural
                  communities, and sensitive vegetation alliances during project
                  maintenance activities. Additional measures may be developed for
                  site-specific conditions or specific biological resources and …
                </p>
                <p>
                  1. Prior to the start of maintenance activities, a qualified team of
                  <mark>biologist</mark>s will conduct an environmental review of the
                  potential for maintenance to affect sensitive resources. Using
                  occurrence databases, aerial imagery, and prior knowledge of maintenance
                  areas, a qualified team of <mark>biologist</mark>s will evaluate the
                  potential for suitable habitat for special-status species, sensitive
                  natural communities, and/or cultural resources to occur in the
                  maintenance footprint. A site visit may be conducted to verify whether
                  sensitive resources have the potential to be present within the
                  maintenance a …
                </p>
                <p>
                  a. Depending on the timing (see Appendix 13B for species-specific timing
                  and suitable habitat definitions), location, and nature of the
                  maintenance activity, a preconstruction survey may be required as
                  determined by a qualified team of <mark>biologist</mark>s to determine
                  potential presence of suitable habitat for sensitive species prior to
                  the start of maintenance activities. Surveys will be conducted by a
                  qualified <mark>biologist</mark> with experience identifying the
                  resources in question using standard survey protocols and during
                  appropriate timeframes specific to each sensitive resource. Surveys and
                  monitoring will be conducted from locations where access allows.b.
                  Appropriate non-disturbance buffers may be applied around sensitive
                  biological resources and habitat identified as determined by a qualified
                  team of <mark>biologist</mark>s during the environmental clearance
                  review or preconstruction surveys. Non-disturbance buffers will be
                  established by a qualified <mark>biologist</mark> and will take into
                  consideration the nature of the maintenance activity, the sensitivity of
                  the species, site-specific conditions, and applicable state and federal
                  recommendations. See Mitigation Measures BIO-2a through BIO-50 for
                  appropriate species-specific buffers. Maintenance activities will av …
                  on sensitive biological resources except when work in these habitats is
                  required to ensure safety and integrity of facilities. Areas to be
                  avoided will be flagged. Debris or cut vegetation will not be left where
                  it may enter aquatic habitat. Non-disturbance buffers may be removed
                  after a qualified <mark>biologist</mark> determines the sensitive
                  resource is no longer present or at risk of impacts due to maintenance
                  activities.c. Appropriate work windows and weather restrictions may be
                  applied to avoid impacts on sensitive biological resources identified
                  during the environmental clearance review or preconstruction s …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-50"
              data-scope="commitments"
              data-entity="electrical power line support placement (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-2c</span>
                  <span class="bcn-sr__row-title"
                    >Electrical Power Line Support Placement (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-51"
              data-scope="commitments"
              data-entity="avoid and minimize impacts from construction on vernal pool aquatic invertebrates and critical habitat for vernal pool fairy shrimp (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-14</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts from Construction on Vernal Pool Aquatic
                    Invertebrates and Critical Habitat for Vernal Pool Fairy Shrimp
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … e species will be conducted to determine whether they are present or
                  where time does not allow for surveys to be completed (e.g., dry years,
                  timely access), the suitable habitat will be assumed to be occupied.
                  Surveys will be conducted according to the most recent USFWS guidelines
                  by USFWS-approved <mark>biologist</mark>s with the appropriate recovery
                  permit under Section 10(a)(1)(A) of the ESA.
                </p>
                <p class="bcn-sr__row-more">+ 9 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-52"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on valley elderberry longhorn beetle (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-18</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Valley Elderberry Longhorn Beetle
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  As properties become accessible for initiating project activities, DWR
                  will require surveys for elderberry shrubs to be conducted in
                  construction areas by a USFWS-approved <mark>biologist</mark>.
                  Elderberry shrubs will be avoided to the maximum extent practicable.
                  Complete avoidance (i.e., no adverse effects) will be assumed when a
                  buffer of at least 165 feet is established and maintained around
                  elderberry shrubs containing stems measuring 1 inch or greater in
                  diameter at ground level (U.S …
                </p>
                <p class="bcn-sr__row-more">+ 9 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-53"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on bumble bees (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-21</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Bumble Bees (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. The ground disturbance footprint will be surveyed for foraging
                  individuals and nests by a qualified <mark>biologist</mark>(s) familiar
                  with the identification and life histories of Crotch bumble bee.
                </p>
                <p>
                  … g the active season for Crotch bumble bee (approximately February 1
                  through October 31).9 Each preconstruction survey will, ideally, be
                  spaced 2 to 4 weeks apart, with the last preconstruction survey (i.e.,
                  clearance survey) taking place within 72 hours prior to construction
                  activity. The qualified <mark>biologist</mark> will perform meandering
                  transects through the planned construction footprint, plus a 50-foot
                  buffer where accessible, at least an hour after sunrise and at least two
                  hours before sunset, though ideally between 9:00 a.m. and 1:00 p.m., to
                  visually survey the area for bumble bee activity. The duration of the
                  survey will be the minimum amount of time necessary to adequately survey
                  the area, or 30 minutes, whichever is longer.b. If a suspected or
                  confirmed Crotch bumble bee is identified during any of these surveys,
                  the qualified <mark>biologist</mark> will notify CDFW within 48 hours.
                </p>
                <p>
                  2. If only foraging Crotch bumble bee is observed (i.e., no nest is
                  found), construction activities can proceed without a full-time
                  qualified <mark>biologist</mark>; however, if there is a lapse in
                  initial construction disturbance more than 2 weeks, an additional
                  clearance survey will be repeated prior to ground disturbance. If a
                  Crotch bumble bee nest is found, a qualified <mark>biologist</mark> will
                  provide biological construction monitoring as long as needed to ensure
                  implementation of applicable measures below.3. If a nest is discovered
                  within the construction or restoration area, a non-disturbance buffer of
                  50 feet will be established around the nest until the nest senesces or
                  becomes inactive and is no longer in use, as determined by the qualified
                  <mark>biologist</mark> or until the project activities in the project
                  area are complete, whichever is first. The nest location will be
                  recorded with GPS and will be reported to CDFW within 48 hours of
                  finding the nest.4. If implementation of a 50-foot non-disturbance
                  buffer is not possible but disturbance of the nest can be avoided, a
                  buffer of the greatest distance possible will be established in
                  coordination with CDFW, and ground disturbance can proceed under
                  supervision of the qualified <mark>biologist</mark>.5. If the nest
                  cannot be avoided and will be lost, an attempt will be made to relocate
                  the nest. A qualified <mark>biologist</mark> will attempt to relocate
                  the nest to a suitable location outside the project footprint. Nest
                  relocation will follow the general guidelines described by Xerces
                  Society for relocating an entire nest and substrate (Xerces Society
                  2022). A bumble bee nest relocation plan will be prepared and submitted
                  … nearby location for nest relocation cannot be identified, an off-site
                  location will be chosen in coordination with the CDFW.7. Once relocated,
                  the nest will be monitored for 1 week. Monitoring of an active nest can
                  be conducted using a motion-detecting wildlife trail camera or daily by
                  a qualified <mark>biologist</mark> based on site-specific conditions,
                  weather, and species behaviors.8. If monitoring suggests the nest
                  relocation was successful (i.e., it is not immediately abandoned
                  following relocation, bees are observed returning to the relocated nest
                  following foraging activity, and it is continued to be used a …
                </p>
                <p>
                  … ithin the project area, CDFW will be notified and the carcass will be
                  salvaged, photographed, and appropriately recorded (e.g., date,
                  collection location) and stored for shipment to CDFW Wildlife Health
                  Lab.11. Temporarily disturbed grassland identified as suitable bumble
                  bee habitat by a qualified <mark>biologist</mark> will be revegetated
                  using a seed mix combination that includes nectar- and pollen-producing
                  plants commonly used as a food source by Crotch bumble bee. Perennial
                  flowers constitute the major forage resource for bumble bees (Jennersten
                  et al. 1992; Dramstad and Fry 1995), therefore, these plants wil …
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-54"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on california tiger salamander (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-22a</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on California Tiger Salamander
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. When each site is available for surveys a USFWS- and CDFW-approved
                  <mark>biologist</mark> will then delineate California tiger salamander
                  habitat at each project site, based on the definition of suitable
                  habitat, including both aquatic and upland habitat. The criteria used
                  for assessing suitable habitat have been adopted from the primary
                  constituent elements identified in the 2005 criti …
                </p>
                <p>
                  2. Once habitat has been delineated, the USFWS- and CDFW-approved
                  <mark>biologist</mark> may use preconstruction surveys performed using a
                  method approved by USFWS and CDFW to determine presence of the species
                  on the project site to enable further determination of compensatory
                  mitigation requirements. In the event of a dry year, the aquatic habitat
                  will be evaluated based on general suitability (e.g., evidence of
                  suitable ponding depths, proximity to occurrences) and the habitat will
                  be assumed to represent occupied habitat. In areas where ground
                  disturbance will occur, grasses within suitable upland habitat will be
                  mowed within 24 hours of clearance surveys to allow the
                  <mark>biologist</mark> to see and survey for California tiger salamander
                  and burrows. Clearance surveys are surveys that are conducted
                  immediately before ground-disturbing activities to find and relocate
                  California tiger salamander outside of the work area; additional
                  information on clearance surveys is described in meas …
                </p>
                <p>
                  … is in place, the area has been surveyed, and initial ground
                  disturbance has occurred, work within the disturbed area can occur
                  outside the construction window (defined as April 1 through October 31
                  or, during wet years, May 1 through October 31).5. If aquatic habitat is
                  identified by the designated <mark>biologist</mark>(s) within the
                  project area southwest of Byron Highway, DWR will restrict construction
                  activities to beyond 300 feet of breeding habitat, during the breeding
                  season (November 1 through March 31, or extended to April 30 during wet
                  years). Where aquatic habitat cannot be avoided by 300 feet during the
                  breeding season, DWR will notify and coordinate with CDFW to implement
                  site-specific avoidance and minimization measures. Where construction
                  takes place in aquatic habitat, activities will not be initiated until
                  after the habitat is no longer ponding water or until a USFWS- and
                  CDFW-approved <mark>biologist</mark> has conducted clearance surveys of
                  the aquatic habitat for presence of California tiger salamander and
                  results have been submitted to the agencies. No work or dewatering will
                  be allowed in occupied habitat. If a work site is to be temporarily
                  dewatered by pumping, intakes will be completely screene …
                </p>
                <p>
                  … from the closest National Weather Service (NWS) weather station.
                  Clearing may continue 24 hours after the rain ceases, if no more than
                  0.5 inch of precipitation is in the 72-hour forecast. If clearing must
                  continue when rain is forecast (greater than 40% chance of rain), a
                  USFWS- and CDFW-approved <mark>biologist</mark> will survey the work
                  site before clearing begins each day rain is forecast. If rain exceeds
                  0.5 inch during a 24-hour period, clearing will cease until the NWS
                  forecasts no further rain. If this measure cannot be implemented as
                  written or modifications to this timing are pursued, DWR will notify an
                  … lighting at a work site will be prohibited during the hours of
                  darkness.9. At least 30 days prior to any ground-disturbing activities,
                  DWR will prepare and submit a relocation plan for USFWS’s and CDFW’s
                  written approval. The relocation plan will contain the name(s) of the
                  USFWS- and CDFW-approved <mark>biologist</mark>(s) to relocate
                  California tiger salamanders, the method of relocation (if different
                  than described), a map, and a description of the proposed release
                  site(s) within 300 feet of the work area or at a distance otherwise
                  agreed to by USFWS and CDFW, and written permission from the landowner
                  to use the …
                </p>
                <p class="bcn-sr__row-more">+ 7 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-55"
              data-scope="commitments"
              data-entity="avoid and minimize operational traffic impacts on wildlife (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-22b</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Operational Traffic Impacts on Wildlife
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-56"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on western spadefoot toad (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-23</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Western Spadefoot Toad (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … for work in a given area. Surveys and monitoring will be conducted
                  from locations where access allows. As properties become accessible for
                  initiating project activities within areas of modeled western spadefoot
                  toad habitat, the suitability of the modeled habitat will be assessed on
                  the ground by a <mark>biologist</mark> qualified to identify aquatic and
                  upland habitat for the species.
                </p>
                <p>
                  … occur outside the construction window (defined as April 1 through
                  October 31 or, during wet years, May 1 through October 31).2. Where
                  construction or restoration activities take place in aquatic habitat,
                  activities will not be initiated until after the habitat is no longer
                  ponding water or until a <mark>biologist</mark> has surveyed the aquatic
                  habitat for presence of western spadefoot toad larvae. No work or
                  dewatering will be allowed in occupied habitat. If a work site is to be
                  temporarily dewatered by pumping, intakes will be completely screened
                  with wire mesh not larger than 5 millimeters to prevent larger aqu …
                  prior to a 40% or greater forecast of rain from the closest NWS weather
                  station. Clearing may continue 24 hours after the rain ceases, if no
                  more than 0.5 inch of precipitation is in the 72-hour forecast. If
                  clearing must continue when rain is forecast (greater than 40% chance of
                  rain), a qualified <mark>biologist</mark> will survey the work site
                  before clearing begins each day rain is forecast. If rain exceeds 0.5
                  inch during a 24-hour period, clearing will cease until the NWS
                  forecasts no further rain. For a given site that has exclusion fencing
                  in place and all surface soil disturbance completed (i.e., no burrows
                  present), these restrictions would no longer apply.5. To the extent
                  feasible, as determined by the contractor in coordination with the
                  qualified <mark>biologist</mark>, earthmoving and construction
                  activities will cease no less than 30 minutes before sunset and will not
                  begin again until no less than 30 minutes after sunrise within 300 feet
                  of western spadefoot toad habitat. Suitability of aquatic and upland
                  habitat characteristics will be determined by the qualified
                  <mark>biologist</mark> consistent with the description of suitable
                  habitat defined in Appendix 13B, Section 13B.48, Western Spadefoot and
                  by additional assessments conducted prior to ground disturbance. Except
                  when necessary for driver or pedestrian safety, to the greatest extent
                  practicable, artificial lighting at a wor …
                </p>
                <p>
                  … . Where construction access is necessary, gates will be installed in
                  the exclusion fence and fencing will direct animals away from the work
                  area to the extent practicable (e.g., fencing will flare out and turn
                  back toward suitable habitat).7. Preconstruction surveys will be
                  conducted by a qualified <mark>biologist</mark> immediately prior to the
                  initiation of any ground-disturbing activities or vegetation clearing,
                  including immediately prior to exclusion fence installation, in areas
                  identified as having suitable western spadefoot toad habitat. These
                  surveys will consist of walking surveys within the work sites and …
                  epeated before activities resume.8. If the exclusion fence is
                  compromised during the rainy season, a survey will be conducted
                  immediately preceding construction activity that occurs in suitable
                  western spadefoot toad habitat, or in advance of any activity that may
                  result in take of the species. The <mark>biologist</mark> will search
                  along exclusion fences, and beneath vehicles each morning before the
                  vehicles are moved. Surveys will be conducted in the same manner as the
                  preconstruction surveys.9. If a western spadefoot toad is encountered in
                  a construction or restoration area, activities within a minimum of 10
                  fee …
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-57"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on california red-legged frog and critical habitat (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-24a</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on California Red-Legged Frog and Critical
                    Habitat (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  5. When each site is available for surveys,
                  <mark>biologist</mark> approved by USFWS, will then delineate California
                  red-legged frog habitat at each project site, based on an agreed-upon
                  definition of suitable habitat, including both aquatic and upland
                  habitat.6. Once habitat has been delineated, the qualified
                  <mark>biologist</mark> may conduct surveys performed using a method
                  approved by USFWS to determine presence of the species on the project
                  site to enable further determination of compensatory mitigation
                  requirements. In the event of a dry year, the aquatic habitat will be
                  evaluated based on general suitability (e.g., evid …
                </p>
                <p>
                  … 40% or greater forecast of rain from the closest NWS weather station.
                  Clearing may continue 24 hours after the rain ceases, if no more than
                  0.5 inch of precipitation is in the 72-hour forecast. If clearing must
                  continue when rain is forecast (i.e., greater than 40% chance of rain),
                  a USFWS-approved <mark>biologist</mark> will survey the work site before
                  clearing begins each day rain is forecast. If rain exceeds 0.5 inch
                  during a 24-hour period, clearing will cease until the NWS forecasts no
                  further rain. Modifications to this timing may be approved by USFWS
                  based on site conditions and expected risks to California … ia
                  red-legged frog habitat, all lighting will be directed away and shielded
                  from California red-legged frog habitat outside the construction area to
                  minimize light spillover to the greatest extent possible. If light
                  spillover into adjacent California red-legged frog habitat occurs, a
                  USFWS-approved <mark>biologist</mark> will be present during night work
                  to survey for California red-legged frogs in areas illuminated by
                  construction lighting. If California red-legged frog is found to be
                  illuminated, the USFWS-approved <mark>biologist</mark> has the authority
                  to terminate the project activities until the light is directed away
                  from the frog’s location, or the California red-legged frog moves out of
                  the illuminated area.
                </p>
                <p>
                  13. At least 15 days prior to any ground disturbance activities, DWR
                  will prepare and submit a relocation plan for USFWS’s written approval.
                  The relocation plan will contain the name(s) of the USFWS-approved
                  <mark>biologist</mark>(s) to relocate California red-legged frogs, the
                  method of relocation (if different than described), a map, and a
                  description of the proposed release site(s) outside of exclusion fencing
                  and within 300 feet of the work area or at a distance otherwise agreed
                  to by USFWS, and written permission from t … e construction access is
                  necessary, gates will be installed in the exclusion fence and fencing
                  will direct animals away from the work area to the extent practicable
                  (e.g., fencing will flare out and turn back toward suitable habitat).15.
                  Preconstruction surveys will be conducted by a USFWS-approved
                  <mark>biologist</mark> immediately prior to the initiation of any
                  ground-disturbing activities or vegetation clearing, including
                  immediately prior to exclusion fence installation, in areas identified
                  as having suitable California red-legged frog habitat. These surveys
                  will consist of walking the work site limits. The USFWS-approved
                  <mark>biologist</mark> will investigate all potential areas that could
                  be used by the California red-legged frog for feeding, breeding,
                  sheltering, movement, or other essential behaviors. If there is a lapse
                  in construction in a work area for 7 days or more, these surveys will be
                  repeated before activities resume.16. The USFWS-approved
                  <mark>biologist</mark> will conduct clearance surveys at the beginning
                  of each day and regularly throughout the workday when construction
                  activities are occurring that may result in take of California
                  red-legged frog. These surveys will consist of walking surveys within
                  the work sites and investigating suitable aquatic a …
                </p>
                <p>
                  a. Prior to handling and relocation, the <mark>biologist</mark> will
                  take precautions to prevent introduction of amphibian diseases by
                  following guidance in The Declining Amphibian Task Force Fieldwork Code
                  of Practice (U.S. Fish and Wildlife Service 2019:1), or the most
                  up-to-date guidance available at that time. California red-legged frogs
                  will also be handle … me day of capture per the relocation plan.
                  Holding/transporting containers and dipnets will be thoroughly cleaned,
                  disinfected, and rinsed with fresh water prior to use within
                  construction areas. USFWS will be notified within 24 hours of all
                  capture, handling, and relocation efforts. USFWS-approved
                  <mark>biologist</mark>s will wear clean, new disposable surgical style
                  (latex, nitrile, etc.) gloves and/or ensure that their hands are free of
                  soaps, oils, creams, lotions, repellents, or solvents of any sort while
                  capturing and relocating individuals. To avoid transferring disease or
                  pathogens in handling of the amphibians, USFWS-approved
                  <mark>biologist</mark>s will follow the Declining Amphibian Populations
                  Task Force’s “Code of Practice” or the most up to date, agency-accepted
                  guidance.c. If an injured California red-legged frog is encountered and
                  the USFWS-approved <mark>biologist</mark> determines the injury is minor
                  or healing and the frog is likely to survive, the frog will be released
                  immediately, consistent with the preapproved relocation plan as
                  described above. The frog will be monitored until it is determined that
                  it is not imperiled by predators or other dangers.d. If the
                  USFWS-approved <mark>biologist</mark> determines that the frog has major
                  or serious injuries because of activities at the work site, the
                  USFWS-approved <mark>biologist</mark>, or designee, will immediately
                  take it to a USFWS-approved facility. If taken into captivity, the
                  individual will not be released into the wild unless it has been kept in
                  quarantine and the release is authorized by USFWS. DWR will bear any
                  costs associated with the care or treatment of such injured …
                </p>
                <p class="bcn-sr__row-more">+ 5 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-58"
              data-scope="commitments"
              data-entity="compensate for impacts on california red-legged frog habitat connectivity (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-24b</span>
                  <span class="bcn-sr__row-title"
                    >Compensate for Impacts on California Red-Legged Frog Habitat
                    Connectivity (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-59"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on western pond turtle (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-25</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Western Pond Turtle (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … d turtle will be required only for surface construction occurring
                  within 300 feet of suitable habitat as defined in Appendix 13B, Section
                  13B.50, Western Pond Turtle, and by additional assessments conducted
                  during project implementation and prior to project construction in a
                  given area. A qualified <mark>biologist</mark> will conduct a field
                  evaluation of suitable upland or aquatic habitat for western pond
                  turtles for all surface construction activities that occur within
                  western pond turtle habitat. Surveys and monitoring will be conducted
                  from locations where access allows.
                </p>
                <p>
                  … Where construction access is necessary, gates will be installed in the
                  exclusion fence and fencing will direct animals away from the work area
                  to the extent practicable (e.g., fencing will flare out and turn back
                  toward suitable habitat). 2. Preconstruction surveys will be conducted
                  by a qualified <mark>biologist</mark> immediately prior to the
                  initiation of any ground-disturbing activities or vegetation clearing,
                  including exclusion fence installation, in areas identified as having
                  suitable western pond turtle habitat. If there is a lapse in
                  construction in a work area for 7 days or more, these surveys will be
                  repeated before activities resume.3. The qualified
                  <mark>biologist</mark> will conduct clearance surveys at the beginning
                  of each day and regularly throughout the workday when construction
                  activities are occurring that may result in take of western pond turtle.
                  If a turtle is observed, the qualified <mark>biologist</mark> will
                  implement the following species observation and handling protocol. Only
                  qualified <mark>biologist</mark>s will participate in activities
                  associated with the capture, handling, and monitoring of western pond
                  turtles. If a western pond turtle is encountered in a construction or
                  restoration area, activities within a minimum of 10 feet of the
                  individual will cease immediately, the construction manager and
                  qualified <mark>biologist</mark> will be notified, and the qualified
                  <mark>biologist</mark> will observe and follow within 10 feet of the
                  individual to ensure it has safely left the area. A larger protective
                  buffer may be established, depending on site-specific conditions such as
                  the use of heavy equipment, or other activities that may cause harm to
                  the individual, as determined by the qualified <mark>biologist</mark>.
                  The turtle will be allowed to leave the area of its own volition, and
                  work may resume when it is no longer in harm’s way. All personnel
                  on-site will be notified of the finding and at no time will work occur
                  within a minimum of 10 feet of the turtle, or larger buffer depending on
                  site-specific conditions, without a qualified
                  <mark>biologist</mark> present. If the turtle does not move out of the
                  area on its own, and it is determined by the qualified
                  <mark>biologist</mark>, in coordination with the construction manager
                  that relocating the turtle is necessary, relocation will be done in
                  coordination with CDFW. Any handling of turtles will be done by a
                  <mark>biologist</mark> with a valid memorandum of understanding from
                  CDFW authorizing the capture and relocation of turtles and as determined
                  during coordination with CDFW. <mark>Biologist</mark>s will wear clean,
                  new disposable surgical style (nitrile, etc.) gloves while handling and
                  relocating individuals.4. If a work site is to be temporarily dewatered
                  by pumping, intakes will be completely screened with wire mesh not
                  larger than 5 millimeters to prevent juvenile pond turtle and other
                  aquatic species from entering the pump system. Any turtles found in the
                  dewatered area will be relocated in coordination with CDFW to the
                  nearest aquatic habitat by a <mark>biologist</mark> authorized to
                  relocate turtles.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-60"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on special-status reptiles (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-26</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Special-Status Reptiles (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  During project implementation and prior to project construction, DWR
                  will direct a qualified <mark>biologist</mark> to conduct a habitat
                  assessment in modeled habitat for coast horned lizard, Northern
                  California legless lizard, California glossy snake, and San Joaquin
                  coachwhip to confirm these areas contain suitable habitat for the
                  species as defined above.
                </p>
                <p>
                  2. Where suitable habitat exists, the qualified
                  <mark>biologist</mark> will conduct a preconstruction survey for
                  special-status reptiles immediately prior to the start of vegetation
                  clearing or ground-disturbing activities. If there is a lapse in
                  construction in a work area for 7 days or more, these surveys will be
                  repeated before activities resume.
                </p>
                <p>
                  3. If a special-status reptile is found in a construction or restoration
                  area, activities within a minimum of 10 feet of the individual will
                  cease immediately, the construction manager and qualified
                  <mark>biologist</mark> will be notified, and the qualified
                  <mark>biologist</mark> will observe and follow the individual within 10
                  feet to ensure it has safely left the area. A larger protective buffer
                  may be established, depending on site-specific conditions such as the
                  use of heavy equipment, or other activities that may cause harm to the
                  individual, as determined by the qualified <mark>biologist</mark>. The
                  <mark>biologist</mark> will first attempt to allow the individual to
                  move out of harm’s way on its own, but if it does not move out of the
                  area on its own and it is determined by the qualified
                  <mark>biologist</mark>, in coordination with the construction manager,
                  that relocating the individual is necessary, the individual will be
                  captured by the <mark>biologist</mark> and relocated to the nearest
                  suitable habitat outside of the work area, as determined in consultation
                  with CDFW.
                </p>
                <p>
                  6. The qualified <mark>biologist</mark> will have the authority to stop
                  activities at the work site if they determine that any of the avoidance
                  and minimization measures are not being fulfilled.
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-61"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on giant garter snake (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-30</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Giant Garter Snake (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. When each site is available for surveys, a USFWS- and CDFW-approved
                  <mark>biologist</mark> will then delineate giant garter snake habitat at
                  each project site, including both aquatic and upland habitat.2. Once
                  habitat has been delineated, the <mark>biologist</mark> may use giant
                  garter snake preconstruction surveys performed using a method approved
                  by USFWS to determine presence of the species on the project site to
                  enable further determination of compensatory mitigation requirements.3.
                  For sites where such preconstruction surveys are performed, the surveys
                  w … arter snake surveys and all occurrence data gathered will be
                  reported to the CNDDB and USFWS to add to the understanding of
                  populations and occurrences for the species in the Delta.4. To the
                  greatest extent feasible, and determined by the contractor in
                  coordination with the USFWS- and CDFW-approved <mark>biologist</mark>,
                  identified and delineated habitat will be completely avoided.
                </p>
                <p>
                  5. Initiate construction and clear suitable habitat in the summer
                  months, between May 1 and October 1, and avoid giant garter snake
                  habitat during periods of brumation (between October 1 and May 1).
                  Suitability of aquatic and upland habitat characteristics will be
                  determined by the <mark>biologist</mark> consistent with the description
                  of suitable habitat defined in Appendix 13B, Section 13B.55. Once a
                  construction site has been cleared and exclusionary fencing is in place,
                  work within the cleared area can occur between October 1 and May 1.6. To
                  the extent practicable, as determined by project engineers and
                  contractors, in coordination with the USFWS- and CDFW-approved
                  <mark>biologist</mark>, conduct all activities within paved roads, farm
                  roads, road shoulders, and similarly disturbed and compacted areas;
                  confine ground disturbance and habitat removal to the minimal area
                  necessary to facilitate construction activities.
                </p>
                <p>
                  7. At least 30 days prior to any ground-disturbing activities, DWR will
                  prepare and submit a relocation plan for USFWS’s and CDFW’s written
                  approval. The relocation plan will contain the name(s) of the
                  <mark>biologist</mark>(s) to relocate giant garter snakes, the method of
                  relocation (if different than described), a map, and a description of
                  the proposed release site(s) within 300 feet of the work area or at a
                  distance otherwise agreed to by USFWS and CDFW, and written permission
                  from the landowner to use their land a … will direct animals away from
                  the work area to the extent practicable (e.g., fencing will flare out
                  and turn back toward suitable habitat).9. Immediately prior to the
                  initiation of any vegetation clearing, ground-disturbing activities, and
                  exclusion fence installation, the USFWS- and CDFW-approved
                  <mark>biologist</mark> will conduct clearance surveys of suitable
                  aquatic and upland habitat in the entire work site for the presence of
                  giant garter snakes. Beginning no more than 7 days prior to initiating
                  ground-disturbing activities during the active season (May 1 to October
                  1), the <mark>biologist</mark> will conduct 2 days of walking clearance
                  surveys within each construction site and a 3-foot boundary surrounding
                  the exclusion fencing, where access allows. The final clearance survey
                  will occur within 24 hours preceding exclusion barrier installation. If
                  there is a lapse in construction in a work …
                </p>
                <p>
                  12. Within 24 hours prior to construction activities, and dredging,
                  requiring heavy equipment, a USFWS- and CDFW-approved
                  <mark>biologist</mark> will conduct a preconstruction clearance survey
                  of all the activity area not protected by exclusionary fencing where
                  giant garter snake could be present. This survey of the work area will
                  be repeated if a lapse in construction or dredging activity of 2 weeks
                  or greater occurs during the aestivation …
                </p>
                <p class="bcn-sr__row-more">+ 4 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-62"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on western yellow-billed cuckoo (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-31</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Western Yellow-Billed Cuckoo
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. Prior to the construction, a noise expert will create a sound level
                  contour map showing the 60 dBA sound level contour specific to the type
                  and location of construction to occur in the area.2. Two weeks prior to
                  construction, a USFWS- and CDFW-approved <mark>biologist</mark> will
                  conduct daily surveys, consistent with a USFWS- or CDFW-approved survey
                  protocol (e.g., Halterman et al. 2015:9-42, or more current guidance),
                  within 500 feet of suitable habitat where construction-related noise
                  levels could exceed 60 dBA equivalent sound level (Leq) (1 hour).3. If a
                  yellow-billed cuckoo is found, construction activities will be limited
                  such that sound will not exceed 60 dBA within 500 feet of the habitat
                  being used until the USFWS- and CDFW-approved <mark>biologist</mark> has
                  confirmed that the bird has left the area.4. If surveys find cuckoos in
                  an area where vegetation will be removed, vegetation removal will be
                  conducted when the USFWS- and CDFW-approved <mark>biologist</mark> has
                  confirmed that cuckoos are not present within 500 feet of vegetation
                  removal activities.5. Portable and stationary equipment will be located,
                  stored, and maintained as far as possible, with a minimum distance of
                  500 feet, from suitable western yellow-billed cuckoo habitat.6. All
                  lights will be …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-63"
              data-scope="commitments"
              data-entity="conduct preconstruction surveys and implement protective measures to avoid disturbance of california black rail (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-32</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Avoid Disturbance of California Black Rail (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … s and where access is available. Potentially suitable habitat includes
                  tidal and nontidal seasonal or perennial wetlands at least 2 acres in
                  size with any kind of vegetation types consistent with California black
                  rail use in the Delta (as determined by field evaluations conducted by a
                  CDFW-approved <mark>biologist</mark> with experience surveying for black
                  rail) over 10 inches high, whether or not the patch in question was
                  mapped as modeled habitat. A minimum of four surveys will be conducted
                  between February 1 and April 15, with at least 10 days between surveys.
                  Because California black rail are most active betwee … er sunrise,
                  surveys will start at sunrise and continue no later than 9:30 a.m. These
                  surveys will involve the following protocols (based on Evens et al.
                  1991), or other CDFW-approved survey methodologies that may be developed
                  using new information and best-available science and will be conducted
                  by <mark>biologist</mark>s with the qualifications stipulated in the
                  CDFW-approved methodologies. Surveys and monitoring will be conducted
                  from locations where access allows.
                </p>
                <p>
                  … construction or CMP restoration activities. Listening stations will be
                  placed along roads, trails, and levees to avoid trampling wetland
                  vegetation. Listening stations will be located a maximum of 10 meters
                  from suitable habitat where access is available.2. Surveys at each
                  station will consist of a <mark>biologist</mark> listening passively for
                  1 minute, then broadcasting prerecorded black rail vocalizations: 1
                  minute of “grr” calls followed by 0.5 minute of “ki-ki-doo” calls. The
                  CDFW-approved <mark>biologist</mark> will then listen for another 3.5
                  minutes for a total of 6 minutes per station. Once a California black
                  rail response is detected, the <mark>biologist</mark> will cease
                  broadcasting immediately.3. A global positioning system (GPS) receiver
                  and compass will be used to identify survey stations, angles to call
                  locations, and call locations and distances from listening stations. The
                  California black rail call type, location, distance from listening
                  station, …
                </p>
                <p>
                  … a black rails, construction activities within 500 feet of potential
                  habitat will not occur within 2 hours before or after extreme high tides
                  (6.5 feet or above, as measured at the Golden Gate Bridge), to the
                  extent feasible, as determined by the construction manager in
                  coordination with a qualified <mark>biologist</mark>. During high tide,
                  protective cover for California black rail is sometimes limited, and
                  disturbance from project activities could prevent individual rails from
                  reaching available cover.5. To avoid the loss of individual California
                  black rails, activities within 500 feet of tidal marsh areas and man …
                  alifornia black rail habitat, whether or not rails have been detected
                  there, vegetation will be removed during the nonbreeding season
                  (September 1 through January 31). Vegetation removal will be completed
                  carefully using hand tools or vegetation removal equipment that is
                  approved by a CDFW-approved <mark>biologist</mark>. The CDFW-approved
                  <mark>biologist</mark> will search vegetation immediately in front of
                  the removal tools or equipment and will stop removal if rails are
                  detected. Vegetation removal will resume when the California black rail
                  leaves the area.8. If the construction footprint is within 500 feet of a
                  known calling center, noise reduction structures such as temporary
                  noise-reducing walls, will be installed at the edge of construction
                  footprint, as determined by an on-site CDFW-approved
                  <mark>biologist</mark>. Noise-causing construction will be initiated
                  during the nonbreeding season (September 1 through January 31), where
                  feasible, as determined by the contractor in coordination with the
                  CDFW-approved <mark>biologist</mark>, so that California black rails can
                  acclimate to noise and activity prior to nesting. Examples where
                  construction initiation during the nonbreeding season would not be
                  feasible include inclement weather or conflicts with work windows for
                  other terrestrial or aquatic species.9. The CDFW-approved
                  <mark>biologist</mark> will have the authority to stop activities at the
                  work site if they determine that any of avoidance and minimization
                  measures are not being fulfilled.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-64"
              data-scope="commitments"
              data-entity="avoid and minimize disturbance of sandhill cranes (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-33</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Disturbance of Sandhill Cranes (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Preconstruction Surveys a. Preconstruction surveys will be conducted to
                  evaluate the use of sandhill crane suitable habitat (described in
                  Appendix 13B, Section 13B.58, Greater Sandhill Crane, and Section
                  13B.59, Lesser Sandhill Crane) by a qualified
                  <mark>biologist</mark> familiar with sandhill crane biology and
                  experienced with sandhill crane survey techniques. Annual surveys will
                  be conducted for sandhill crane temporary (cultivated lands) and
                  permanent (managed wetlands) roost sites (Ivey et al. 2014a:6) within
                  0.75 mile of the construction area boundary where access is available.
                  Surveys will be conducted annually, beginning during the winter prior
                  ground disturbance, over multiple days within the survey area by a
                  qualified <mark>biologist</mark> with experience observing the species.
                  DWR will coordinate with CDFW and Refuge <mark>biologist</mark>s prior
                  to conducting sandhill crane preconstruction surveys.b. Prior to
                  construction, a noise expert will create a sound level contour map
                  showing the 50 dBA sound level contour specific to the type and location
                  of construction to occur in the area and existing noise barriers such as
                  levees or emba …
                </p>
                <p>
                  a. Foraging Habitati. The final design of the conveyance facilities will
                  avoid construction-related loss of sandhill crane foraging habitat to
                  the extent feasible, as determined by project engineers in coordination
                  with a qualified <mark>biologist</mark>.ii. Avoid pile driving and
                  general construction-related combined noise effects on foraging habitat
                  to the extent feasible. Where feasible, as determined by the contractor
                  in coordination with a qualified <mark>biologist</mark>, DWR will avoid
                  construction from 1 hour after sunrise to 1 hour before sunset in areas
                  where construction would result in noise exceeding 50 dBA Leq (1 hour)
                  within crane foraging habitat.11 Prior to construction, a noise expert
                  will create a sound level contour map showing the 50 dBA sound level …
                  ested and will be managed to maximize food availability to sandhill
                  cranes (e.g., corn stalks will be knocked down or mulched to make grain
                  available to foraging cranes). A management plan for the enhanced
                  habitat will be completed prior to establishing the habitat, in
                  coordination with a qualified <mark>biologist</mark> with experience
                  managing sandhill crane habitat on cultivated lands, or experience
                  directing such management, consistent with the foraging habitat values
                  in Appendix 13B, Section 13B.58, Greater Sandhill Crane. The enhanced
                  habitat will be located outside the construction-related 50 dBA Leq (1
                  hour …
                </p>
                <p>
                  … ion away from the disturbance (outside the 50 dBA Leq [1 hour] pile
                  driving and general construction sound level contour) but within 1 mile
                  of the affected roost site. The relocated roost site will be established
                  1 year prior to construction activities affecting the original roost
                  site. A qualified <mark>biologist</mark> familiar with crane biology
                  will design the new roost site and direct roost site establishment.
                  Potential sites will be identified and surveyed prior to establishment.
                  Relocated roost sites will be maintained until construction is complete
                  in the affected region. Prior to construction, a noise expe …
                </p>
                <p>
                  … und level contour. The new roost site will be established prior to
                  commencement of the wintering season that occurs prior to construction
                  activities potentially affecting the original roost site and will be
                  maintained until the activities creating the indirect disturbance are
                  completed. A qualified <mark>biologist</mark> familiar with crane
                  biology will design the new roost site and direct roost site
                  establishment.
                </p>
                <p class="bcn-sr__row-more">+ 6 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-65"
              data-scope="commitments"
              data-entity="avoid california least tern nesting colonies and minimize indirect effects on colonies (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-34</span>
                  <span class="bcn-sr__row-title"
                    >Avoid California Least Tern Nesting Colonies and Minimize Indirect
                    Effects on Colonies (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … on, DWR will require that at least three preconstruction surveys for
                  this species will be conducted in all suitable habitat within 500 feet
                  of the construction footprint during the California least tern breeding
                  season (April 15 to August 15). Surveys will be conducted by a USFWS-
                  and CDFW-approved <mark>biologist</mark> with experience observing the
                  species and its nests. DWR will implement the following requirements to
                  avoid loss of California least tern nesting colonies if construction
                  will take place within 500 feet of a California least tern nest during
                  the breeding season (April 15 to August 15 or extended as …
                </p>
                <p>
                  a. A USFWS- and CDFW-approved wildlife <mark>biologist</mark> will
                  monitor construction activities within 500 feet of the nests to ensure
                  that construction activities do not affect nest success. Reduced buffers
                  may be allowed, through coordination with USFWS and CDFW, if a full-time
                  USFWS- and CDFW-approved <mark>biologist</mark> is present to monitor
                  the nest and has authority to halt construction if bird behavior
                  indicates continued activities could lead to nest failure. Active nests
                  will be monitored to track progress of nesting activities until the
                  <mark>biologist</mark> determines that the young have fledged and are
                  capable of independent survival or the nest site is no longer active.b.
                  Activities performed during the California least tern breeding season,
                  in occupied least tern nesting habitat, with USFWS and CDFW approval and
                  under the supervision of a USFWS- and CDFW-approved
                  <mark>biologist</mark> will be limited to inspection, research, or
                  monitoring.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-66"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on cormorant, heron, and egret rookeries (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-35</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Cormorant, Heron, and Egret Rookeries
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. To the maximum extent feasible, as determined by the contractor in
                  coordination with a qualified <mark>biologist</mark>, vegetation removal
                  and trimming will be scheduled during the nonbreeding season of birds
                  (September 1 through January 31). Vegetation trimming will not remove
                  known nests. If a rookery needs to be removed, DWR will contact CDFW
                  prior to removal and removal will occur during the nonbreeding season
                  (September 1 through January 31). Preconstruction surveys of previously
                  occupied colonies and all suitable habitat within 500 feet of the
                  project footprint and compensatory mitigation sites will be conducted
                  during the breeding (February 1 through August 31) season by a qualified
                  <mark>biologist</mark> with experience observing cormorants, herons, and
                  egrets and their nests. If there is a break in construction of 3
                  calendar days or more, surveys will be conducted prior to restarting
                  construction in the area.2. Construction activities that will result in
                  the greatest disturbance to an active cormorant, heron, or egret
                  rookery, as determined by the qualified <mark>biologist</mark>, will be
                  deferred until after or as late in the breeding season as feasible, as
                  determined by the contractor in coordination with the project
                  <mark>biologist</mark>. If construction must take place within 500 feet
                  of an active cormorant, heron, or egret rookery during the breeding
                  season, a qualified <mark>biologist</mark> will establish a
                  non-disturbance buffer within a minimum distance of 50 feet from the
                  rookery and will monitor the rookery to ensure that construction
                  activities do not affect nest success. The extent of the buffer will be
                  determined by the qualified wildlife <mark>biologist</mark>(s) and will
                  be established by taking into consideration the type and extent of the
                  proposed activity occurring near the nest, the duration and timing of
                  the activity, the line of sight between the nest and the disturbance,
                  the sensitivity and the habituation of the birds and raptors to existing
                  conditions, and the dissimilarity of the proposed activity to ambient
                  levels of noise and other disturbances. Reduced buffers may be allowed
                  if a full-time qualified <mark>biologist</mark> is present to monitor
                  the nest and has authority to expand the buffer or halt construction if
                  bird behavior indicates continued activities could lead to nest failure
                  or if a bird is in the footprint during project activities.3. Active
                  nests will be monitored to track progress of nesting activities until
                  the <mark>biologist</mark> determines that the young have fledged and
                  are capable of independent survival or the nest site is no longer
                  active.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-67"
              data-scope="commitments"
              data-entity="conduct nesting surveys for special-status and non-special-status birds and raptors and implement protective measures to avoid disturbance of nesting birds and raptors (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-36a</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. Timing Restrictions. To the maximum extent feasible, as determined by
                  the contractor in coordination with a qualified <mark>biologist</mark>,
                  construction activities, vegetation removal, and trimming will be
                  scheduled during the nonbreeding season of birds (September 1 through
                  January 31) to avoid impacts on nesting birds if nesting birds are
                  present. If construction activities, vegetation removal, and trimming
                  cannot be conducted in accordance with this timeframe, surveys for
                  nesting birds and additional protective measures will be implemented as
                  described below.2. Preconstruction Surveys. A qualified wildlife
                  <mark>biologist</mark> with knowledge of the relevant species will
                  conduct nesting surveys before the start of construction. A minimum of
                  three separate surveys will be conducted within 30 days prior to
                  construction, with the last survey within 3 days prior to construction.
                  Surveys will be conducted within the project co … April 1 through August
                  31).3. Non-Disturbance Buffer. If active nests are found in the survey
                  area, non-disturbance buffers will be established around the nest sites
                  to avoid disturbance or destruction of the nest site until the end of
                  the breeding season (September 1) or until a qualified wildlife
                  <mark>biologist</mark> determines that the young have fledged and moved
                  out of the work area (this date varies by species). Buffer distances
                  vary by species and conservation status (e.g., listed species and fully
                  protected species may warrant larger buffers than non–special-status
                  species) but typically, these buffer distances are between 300 feet and
                  650 feet for raptors and between 50 feet and 250 feet for other nesting
                  birds. The extent of the buffers will be determined by the qualified
                  wildlife <mark>biologist</mark>(s) and will be established by taking
                  into consideration the type and extent of the proposed activity
                  occurring near the nest, the duration and timing of the activity, the
                  line of sight between the nest and the disturbance, the sensitivity and
                  the habituation of the birds and raptors to existing conditions, and the
                  dissimilarity of the proposed activity to ambient levels of noise and
                  other disturbances. The qualified wildlife <mark>biologist</mark>(s)
                  will mark the extent and locations of non-disturbance buffers on maps to
                  present to construction personnel at morning tailboards or will use
                  flagging, fencing, or other suitable physical markers, depending on the
                  species of birds, the size of the buffers, and the construction
                  activities to be conducted in the work area.4. Nest Monitoring. The
                  qualified wildlife <mark>biologist</mark>(s) will monitor the nests to
                  ensure that construction activities do not affect nest success. Buffers
                  (described above) may be reduced if a full-time qualified
                  <mark>biologist</mark> is present to monitor the nest. Active nests will
                  be monitored to track progress of nesting activities until the
                  <mark>biologist</mark> determines that the young have fledged and are
                  capable of independent survival or the nest site is no longer active.5.
                  Authority of Qualified Wildlife <mark>Biologist</mark>(s). If, during
                  construction, the qualified wildlife <mark>biologist</mark>(s)
                  determines that a nesting bird is disturbed by construction activities
                  to the point where continued activities could lead to nest failure, the
                  qualified wildlife <mark>biologist</mark>(s) will have the authority to
                  immediately stop work. The qualified wildlife <mark>biologist</mark>(s)
                  will determine if additional protective measures (including increasing
                  the non-disturbance buffer distance) need to be implemented and will
                  continue monitoring the nest until the qualified
                  <mark>biologist</mark>(s) determine that bird behavior has normalized.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-68"
              data-scope="commitments"
              data-entity="conduct preconstruction surveys and implement protective measures to avoid disturbance of white-tailed kite (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-36b</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Avoid Disturbance of White-Tailed Kite (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. Preconstruction Surveys. Preconstruction surveys will be conducted by
                  a qualified <mark>biologist</mark>(s) to identify the presence of
                  potential white-tailed kite nest trees within project construction and
                  staging areas and within 0.25 mile of these areas, where accessible.
                  Surveys for nesting white-tailed kites will be conducted, following a
                  protocol approved by CDFW, within 30 days prior to constru … f the
                  construction. If construction is planned before March 15 of any year,
                  surveys will be conducted the year immediately prior to the year of
                  construction. DWR will provide survey results to CDFW by phone or email
                  no less than 5 days prior to commencement of construction activities.
                  The qualified <mark>biologist</mark>(s) will conduct a second survey of
                  potential nesting trees and active nests and monitor white-tailed kite
                  nests no more than 72 hours prior to construction. If no nesting
                  activity is found, then construction can proceed with no restrictions if
                  construction begins within 3 calendar days. An addition …
                </p>
                <p>
                  a. Five days and three days prior to the initiation of construction at
                  any site where a nest is within 650 feet of construction, the qualified
                  <mark>biologist</mark>(s) will observe the subject nest(s) for at least
                  1 hour or until normal nesting behavior can be determined. The qualified
                  <mark>biologist</mark>(s) will document nesting status and behaviors to
                  compare to nesting status and behaviors after construction begins. The
                  results of preconstruction monitoring will be reported to CDFW within 24
                  hours of each survey.b. Where an occupied white-tailed kite nest tree
                  occurs less than 325 feet (99 meters) from construction, the qualified
                  <mark>biologist</mark>(s) will observe the nest for at least 4 hours per
                  day during construction to ensure the white-tailed kites are engaged in
                  normal nesting behavior.c. Where an occupied white-tailed kite nest tree
                  occurs between 325 to 650 feet (99 to 198 meters) from construction, the
                  qualified <mark>biologist</mark>(s) will observe the nest for at least 2
                  hours per day during construction to ensure the white-tailed kites are
                  engaged in normal nesting behavior.d. Where an occupied white-tailed
                  kite nest tree occurs between 650 to 1,300 feet (198 to 396 meters) from
                  construction, the qualified <mark>biologist</mark>(s) will observe the
                  nest once a day during construction to ensure the white-tailed kites are
                  engaged in normal nesting behavior and to check the status of the nest.
                </p>
                <p>
                  … th an active nest tree from the time of egg laying to fledging, unless
                  approved by CDFW. All workers within 650 feet will be out of the line of
                  sight of the occupied white-tailed kite nest tree during breaks or will
                  take breaks more than 650 feet from an occupied nest tree.6. Authority
                  of Qualified <mark>Biologist</mark>(s). The project will be implemented
                  in a manner that will not result in take of white-tailed kite, as
                  defined by Section 86 of the California Fish and Game Code. If during
                  construction, the qualified <mark>biologist</mark>(s) determines that a
                  nesting white-tailed kite within 0.25 mile of construction is disturbed
                  by construction activities to the point where nest abandonment is
                  likely, the qualified <mark>biologist</mark>(s) will have the authority
                  to immediately stop work and will immediately notify DWR. A designated
                  representative from DWR will contact CDFW within 24 hours to determine
                  additional protection measures to be implemented. Additional protective
                  measures may include, but are not limited to, increasing the size of the
                  buffer, delaying construction until the chicks have fledged, temporarily
                  relocating staging areas, and temporarily rerouting access to the
                  construction site. The qualified <mark>biologist</mark>(s) will:a. Stop
                  construction until additional protective measures are implemented unless
                  white-tailed kite behavior normalizes on its own. Potential nest
                  abandonment and failure may be indicated if, in the qualified
                  <mark>biologist</mark>(s)’ professional judgment, the white-tailed kite
                  exhibits distress and/or abnormal nesting behavior, such as swooping or
                  stooping at construction equipment or personnel, excessive distress-call
                  vocalization or agitated behavior directed personnel, failure to remain
                  on nest, or failure to deliver prey items.b. Continue monitoring and
                  ensure additional protective measures remain in place until the
                  qualified <mark>biologist</mark>(s) determine(s) white-tailed kite
                  behavior has normalized.c. Determine if additional protective measures
                  are ineffective and stop construction until the additional protective
                  measures are modified.d. Continue monitoring until determining that
                  white-tailed kite behavior has normalized.e. The DWR representative or
                  qualified <mark>biologist</mark>(s) will notify CDFW within 24 hours if
                  nests or nestlings are abandoned and if the nestlings are still alive.
                  The qualified <mark>biologist</mark>(s) will work with CDFW to determine
                  appropriate actions.
                </p>
                <p>
                  7. Nest Tree Avoidance. DWR will avoid removal of known nest trees to
                  the maximum extent feasible as determined by the contractor in
                  coordination with a qualified <mark>biologist</mark>. If a known nest
                  tree must be removed for construction activities, DWR will notify and
                  obtain written approval from CDFW. The notification will include the
                  location of the known nest tree, conditions to offset the loss of the
                  nest tree (using the protocol described for Swainson’s Hawk in Appendix
                  3F, Attachment 3F.1, Table 3F.1-3, CMP-19a: Swainson’s Hawk Nesting
                  Habitat), and the time of removal, which will generally be October 1
                  through February 1. DWR will not remove any occupied nest tree until the
                  last young have left the nest, as verified by the qualified
                  <mark>biologist</mark>(s). DWR will compensate for the temporal loss of
                  known white-tailed kite nest trees using the protocol described for
                  Swainson’s Hawk in Appendix 3F, Compensatory Mitigation(Attachment 3F.1,
                  Table 3F.1-3, CMP-19a: Swainson’s Hawk Nesting Habitat).8. Geotechnical
                  Exploration. DWR will conduct geotechnical exploration outside of the
                  breeding season, to the extent feasible, as determined by the contractor
                  in coordination with project engineers. The qualified
                  <mark>biologist</mark>(s) will delineate with flagging or other visible
                  markers suitable breeding habitat within the geotechnical exploration
                  site. DWR will restrict geotechnical exploration to areas outside of the
                  delineated breeding habitat. If geotechnical exploration must occur
                  during the breeding season, the qualified <mark>biologist</mark>(s) will
                  survey the breeding habitat within 0.25 mile for nesting white-tailed
                  kite. DWR will limit geotechnical exploration activities to least 0.25
                  mile away from any occupied nest tree, unless otherwise approved by
                  CDFW.9. Measures Specific to Transmission Line Construction. DWR will
                  not use heli … n or wildlife safety, DWR will conduct removal or
                  trimming from October 1 to February 1, or with written approval and
                  guidance from CDFW. DWR will avoid removal or trimming of known or
                  suitable nest trees, to the extent practicable, as determined by the
                  contractor in coordination with the qualified <mark>biologist</mark>,
                  during transmission line stringing and reconductoring activities or
                  during power and pole placement. Where practicable, as determined by the
                  contractor, DWR will place poles and lines outside of breeding habitat,
                  as delineated by the qualified <mark>biologist</mark>(s). DWR will
                  follow the Nest Tree Avoidance measures listed above when removal or
                  trimming of known or suitable nest trees cannot be avoided.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-69"
              data-scope="commitments"
              data-entity="conduct surveys for golden eagle and avoid disturbance of occupied nests (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-37</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied
                    Nests (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. Prior to the start of construction, DWR will require qualified
                  wildlife <mark>biologist</mark>s (experienced with raptor identification
                  and behaviors) to conduct focused surveys for golden eagle nests in
                  suitable habitat within up to a 1-mile radius of the construction
                  footprint. Survey methods will be determined based on coordination with
                  USFWS and CDFW and all survey results will be submit … ction of the
                  site, consistent with the USFWS Recommended Buffer Zones for
                  Ground-based Human Activities around Nesting Sites of Golden Eagles in
                  California and Nevada (U.S. Fish and Wildlife Service 2020b:1), or more
                  recent USFWS-approved guidance, if it becomes available. If the
                  qualified wildlife <mark>biologist</mark>(s) determines that a nesting
                  eagle is disturbed by construction activities, the qualified wildlife
                  <mark>biologist</mark>(s) will have the authority to increase the
                  non-disturbance buffer in coordination with USFWS and CDFW. If active
                  eagle nests are identified and avoidance guidelines cannot be feasibly
                  implemented, then DWR will not proceed with construction activities
                  within 1 mile of the active eagle nests until the qualified
                  <mark>biologist</mark>(s) confirms that the nests are no longer active
                  or the qualified <mark>biologist</mark>(s), working with the USFWS and
                  CDFW, identifies protective measures that avoid take.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-70"
              data-scope="commitments"
              data-entity="conduct preconstruction surveys and implement protective measures to minimize disturbance of swainson's hawk (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-39</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Minimize Disturbance of Swainson's Hawk (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. Preconstruction Surveys. Preconstruction surveys will be conducted by
                  a CDFW-approved <mark>biologist</mark>(s) to identify the presence of
                  suitable Swainson’s hawk nest trees and known nest trees (occupied
                  within 1 or more of the past 5 years) within 0.5 mile of project sites.
                  DWR will ensure that surveys for nesting Swainson’s hawks are conducted
                  in all suitable and known nest trees identified by the CDFW-approved
                  <mark>biologist</mark>(s) and are consistent with the Recommended Timing
                  and Methodology for Swainson’s Hawk Nesting Surveys in California’s
                  Central Valley (Swainson’s Hawk Technical Advisory Committee 2000), or
                  methodology modified with written approval from CDFW. DWR will provide
                  survey results to CDFW by phone or email no less than 5 days prior to
                  commencement of construction activities, and in a written report within
                  30 days after commencement of construction activities. The CDFW-approved
                  <mark>biologist</mark>(s) will include the location of all known and
                  occupied nest trees(occupied in 1 or more of the last 5 years) present
                  within 0.5 mile of the construction footprint. A nest tree will be
                  considered occupied from the time the Swainson’s hawk pair starts
                  constructing the nest until the young leave the nest, or until the
                  CDFW-approved <mark>biologist</mark>(s) determine(s) the nesting attempt
                  failed and the nest is abandoned.2. Timing Restrictions. Where the
                  construction site occurs within 0.5 mile of known or occupied nest trees
                  identified by the CDFW-approved <mark>biologist</mark>(s), DWR will
                  limit construction activities to outside the Swainson’s hawk breeding
                  season (March 1 through August 15), to the extent practicable, as
                  determined by the contractor. Where construction activities cannot be
                  restricted to more than 0.5 mile of an occupied nest tree during the
                  breeding season, DWR will restrict the construction activities to not
                  occur during the period of egg laying until after young have fledged, as
                  determined by the CDFW-approved <mark>biologist</mark>(s), to the extent
                  practicable as determined by the contractor in coordination with the
                  CDFW-approved <mark>biologist</mark>. If not practicable, DWR will
                  initiate construction activities prior to egg laying to allow time for
                  Swainson’s hawk acclimate to disturbance before eggs are laid. Where
                  restricting work to outside the breeding season or during the period of
                  egg laying to post-fledging is not practicable, DWR will … 0-foot-radius
                  non-disturbance buffer around each occupied nest tree, and the buffer
                  will remain in place until the end of the breeding season or until the
                  last chick has left the nest. DWR will clearly delineate the
                  non-disturbance buffer with fencing or other conspicuous marking. The
                  CDFW-approved <mark>biologist</mark>(s) will monitor occupied nest trees
                  to track progress of nesting activities (see measure 4 below). DWR will
                  not conduct any construction activities within the buffer unless a
                  smaller buffer is approved in writing by CDFW. If a construction
                  activity must occur within 0.5 miles of an occupied nest tr …
                </p>
                <p>
                  4. Swainson’s Hawk Nest Monitoring. Where construction activities must
                  occur within 0.5 mile of an occupied Swainson’s hawk nest tree, DWR will
                  implement the following monitoring plan. If a nesting bird monitoring
                  and management plan is prepared by a CDFW-approved
                  <mark>biologist</mark>, and approved in writing by CDFW, it will prevail
                  where it differs from the measures below.a. Five days and three days
                  prior to the initiation of construction at any site where an occupied
                  nest is within 0.5 mile of construction, the CDFW-approved
                  <mark>biologist</mark> will observe the subject nest(s) for at least one
                  hour or until nest status can be determined. The CDFW-approved
                  <mark>biologist</mark>(s) will document nesting status and behaviors to
                  compare to nesting status and behaviors after construction begins. DWR
                  will report the results of preconstruction monitoring to CDFW within 24
                  hours of each survey. b. Where an occupied nest tree occurs between 150
                  and 325 feet (46 to 99 meters) from construction activities, the
                  CDFW-approved <mark>biologist</mark> will observe the nest for at least
                  4 hours per day during construction to ensure the Swainson’s hawks are
                  engaged in normal nesting behavior. DWR will limit construction to
                  between 30 minutes after sunrise and 30 minutes before sunset.c. Where
                  an occupied nest tree occurs between 325 and 650 feet (99 to 198 meters)
                  of construction, the CDFW-approved <mark>biologist</mark>(s) will
                  observe the nest for at least 2 hours per day during construction to
                  ensure the Swainson’s hawk are engaged in normal nesting behavior.d.
                  Where an occupied nest tree occurs between 650 and 1,300 feet (198 to
                  396 meters) of construction, the CDFW-approved <mark>biologist</mark>(s)
                  will observe the nest for at least one hour on at least three days per
                  week during construction to ensure the Swainson’s hawk are engaged in
                  normal nesting behavior and to check the status of the nest.e. Where an
                  occupied nest tree occurs between 1,300 and 2,640 feet (396 to 805
                  meters) of construction, the CDFW-approved <mark>biologist</mark>(s)
                  will observe the nest for at least one hour on at least one day per week
                  during construction to ensure the Swainson’s hawks are engaged in normal
                  nesting behavior and to check the status of the nest.5. Disturbance of
                  Occupied Nest Tree. DWR will prohibit physical contact with an occupied
                  nest tree throughout the breeding season (March 1 through August 15).
                  All workers within 650 feet will be out of the line of sight of the
                  occupied nest tree during breaks or will take breaks more than 650 feet
                  from the occupied nest tree.6. Authority of CDFW-Approved
                  <mark>biologist</mark>(s). If, during construction, the CDFW-approved
                  <mark>biologist</mark>(s) determine(s) that a nesting Swainson’s hawk
                  within 0.5 mile of the construction site is disturbed by construction
                  activities to the point where nest abandonment is likely, the
                  CDFW-approved <mark>biologist</mark>(s) will have the authority to
                  immediately stop work and will immediately notify DWR. A designated
                  representative from DWR will contact CDFW within 24 hours to determine
                  additional protective measures to be implemented. Additional protective
                  measures may include, but are not limited to, increasing the size of the
                  buffer, delaying construction until the chicks have fledged, temporarily
                  relocating staging areas, and temporarily rerouting access to the
                  construction site. The CDFW-approved <mark>biologist</mark>(s) will:a.
                  Stop construction until additional protective measures are implemented,
                  unless Swainson’s hawk behavior normalizes on its own. Potential nest
                  abandonment and failure may be indicated if, in the CDFW-approved
                  <mark>biologist</mark>(s)professional judgment, the Swainson’s hawks
                  exhibit distress and/or abnormal nesting behavior, such as swooping/
                  stooping at equipment or personnel, excessive distress-call vocalization
                  or agitated behavior directed at personnel, failure to remain on nest,
                  or failure to deliver prey items.b. Continue monitoring and ensure
                  additional protective measures remain in place until the CDFW-approved
                  <mark>biologist</mark>(s) determine(s) Swainson’s hawk behavior has
                  normalized.
                </p>
                <p>
                  c. Determine if additional protective measures are ineffective and stop
                  construction until the additional protective measures are modified.d.
                  Continue monitoring until determining that Swainson’s hawk behavior has
                  normalized.e. The DWR representative or CDFW-approved
                  <mark>biologist</mark>(s) will notify CDFW within 24 hours if nests or
                  nestlings are abandoned and if the nestlings are still alive. The
                  CDFW-approved <mark>biologist</mark>(s) will work with CDFW to determine
                  appropriate actions.
                </p>
                <p>
                  7. Nest Tree Avoidance. DWR will avoid removal of known nest trees and
                  suitable nest trees to the maximum extent practicable as determined by
                  the contractor in coordination with the CDFW-approved
                  <mark>biologist</mark>. If a known nest tree must be removed for
                  construction activities, DWR will notify and obtain written approval
                  from CDFW. The notification will include the location of the known nest
                  tree, conditions to offset the loss of the nest tree (using the protocol
                  described for Swainson’s Hawk in Appendix 3F, Attachment 3F.1, Table
                  3F.1-3, CMP-19a: Swainson’s Hawk Nesting Habitat), and the time of
                  removal, which will generally be October 1 through February 1. DWR will
                  not remove any occupied nest tree until the last young have left the
                  nest, as verified by the CDFW-approved <mark>biologist</mark>(s).8.
                  Geotechnical Exploration. DWR will conduct geotechnical exploration
                  outside of the breeding season, to the extent practicable as determined
                  by the contractor in coordination with project engineers. The
                  CDFW-approved <mark>biologist</mark>(s) will delineate with flagging or
                  other visible markers suitable breeding habitat within the geotechnical
                  exploration site. DWR will restrict geotechnical exploration to areas
                  outside of the delineated breeding habitat. If geotechnical exploration
                  must occur during the breeding season, the CDFW-approved
                  <mark>biologist</mark>(s) will survey the breeding habitat within 0.5
                  mile for nesting Swainson’s hawks. DWR will limit geotechnical
                  exploration activities to least 0.5 mile away from any occupied nest
                  tree, unless otherwise approved by CDFW.9. Measures Specific to
                  Transmission Line Construction. DWR will not use helicop … nduct removal
                  or trimming from October 1 to February 1 (outside of the breeding
                  season), or with written approval and guidance from CDFW. DWR will avoid
                  removal or trimming of known or suitable nest trees, to the extent
                  practicable, as determined by the contractor in coordination with the
                  qualified <mark>biologist</mark>, during transmission line stringing and
                  reconductoring activities or during power and pole placement. Where
                  practicable, as determined by the contractor, DWR will place poles and
                  lines outside of breeding habitat, as delineated by the CDFW-approved
                  <mark>biologist</mark>(s). DWR will follow the Nest Tree Avoidance
                  measures listed above when removal or trimming of known or suitable nest
                  trees cannot be avoided.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-71"
              data-scope="commitments"
              data-entity="conduct surveys and minimize impacts on burrowing owl (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-40</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  2. Avoidance and Minimization. To the extent feasible, as determined by
                  the contractor in coordination with the qualified
                  <mark>biologist</mark>, burrowing owls will be avoided by relocating
                  work areas with flexible locations, such as geotechnical exploration
                  sites. Within the construction footprint where ground disturbance cannot
                  avoid burrowing owls, owls will be relocated during the nonbreeding
                  season and burrows will be excavated in coordination with CDFW, as
                  described below under Burrowing Owl Relocation.a. If an active burrow is
                  identified within 500 feet of a work area and work cannot be conducted
                  outside of the nesting season (February 1 through August 31), a
                  qualified <mark>biologist</mark> will establish a non-disturbance buffer
                  that extends a minimum of 328 feet (200 meters) around the burrow. If
                  burrowing owls are present at the site during the nonbreeding season
                  (September 1 through January 31), a qualified
                  <mark>biologist</mark> will establish a no-activity zone that extends a
                  minimum of 656 feet (100 meters) around the burrow. The extent of
                  non-disturbance buffers will be determined based on time of year and
                  level of disturbance described in the Staff Report on Burrowing Owl
                  Mitigation (California Department of Fish and Game 2012:9)b. If the
                  appropriate non-disturbance buffer for breeding or nonbreeding burrowing
                  owls cannot be established, a qualified <mark>biologist</mark> will
                  evaluate site-specific conditions and, in consultation with CDFW,
                  recommend a smaller buffer that still minimizes the potential to disturb
                  the owls (and still allows reproductive success during the breeding
                  season). The site-specific buffer will be established by taking into
                  consideration the … n consultation with CDFW.d. If monitoring indicates
                  that the nest is abandoned prior to the end of nesting season or the
                  burrow is no longer in use by owls (e.g., chicks have fledged), the
                  non-disturbance buffer may be removed. If the abandoned burrow cannot be
                  avoided by construction activity, the <mark>biologist</mark> will
                  excavate and collapse the burrow to prevent reoccupation.3. Burrowing
                  Owl Relocation. If burrowing owls are present within the construction
                  footprint and cannot be avoided during the nonbreeding season (generally
                  September 1 through January 31), they will be relocated through passive
                  relocatio …
                </p>
                <p>
                  … red weekly for up to 60 days to determine whether the owls have left
                  the burrow and to confirm occupancy at the artificial or other nearby
                  burrows. The formerly occupied burrows will then be excavated. Whenever
                  feasible, based on the location and substrate of burrows, as determined
                  by the qualified <mark>biologist</mark>, burrows will be excavated using
                  hand tools and refilled to prevent reoccupation. Sections of flexible
                  plastic pipe (at least 3 inches in diameter) will be inserted into
                  burrows during excavation to maintain an escape route for any animals
                  inside the burrow.b. Passive relocation with exclusion. If … elocate on
                  their own through the above methodology, passive relocation will be
                  accomplished by installing one-way doors (e.g., modified dryer vents).
                  The one-way doors will be left in place for a minimum of 48 hours and be
                  monitored twice daily to ensure that the owls have left the burrow. Once
                  the <mark>biologist</mark> concludes the owls have left the burrow, the
                  burrow will be excavated using hand tools, and a section of flexible
                  plastic pipe (at least 3 inches in diameter) will be inserted into the
                  burrow tunnel during excavation to maintain an escape route for any
                  animals that may be inside the burrow.
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-72"
              data-scope="commitments"
              data-entity="conduct surveys and minimize impacts on least bell's vireo (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-42</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Surveys and Minimize Impacts on Least Bell's Vireo
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. Prior to the construction, a noise expert will create a sound level
                  contour map showing the 60 dBA sound level contour specific to the type
                  and location of construction to occur in the area.2. Two weeks prior to
                  construction, a USFWS- and CDFW-approved <mark>biologist</mark> will
                  conduct daily surveys, consistent with a USFWS- or CDFW- approved survey
                  protocol (U.S. Fish and Wildlife Service 2001:1-3, or more current
                  guidance), within 500 feet of suitable habitat where
                  construction-related noise levels could exceed 60 dBA Leq (1 hour).
                </p>
                <p>
                  3. If a least Bell’s vireo is found, construction activities will be
                  limited such that sound will not exceed 60 dBA within 500 feet of the
                  habitat being used until the USFWS- and CDFW-approved
                  <mark>biologist</mark> has confirmed that the bird has left the area.4.
                  If surveys find least Bell’s vireos in an area where vegetation will be
                  removed, vegetation removal will be conducted when the USFWS- and
                  CDFW-approved <mark>biologist</mark> has confirmed that least Bell’s
                  vireos are not present within 500 feet of vegetation removal
                  activities.5. Portable and stationary equipment will be located, stored,
                  and maintained as far as possible, with a minimum distance of 500 feet,
                  from suitable least Bell’s vireo habitat.6. All lights will b …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-73"
              data-scope="commitments"
              data-entity="conduct preconstruction surveys and implement protective measures to avoid disturbance of tricolored blackbird (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-44</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Avoid Disturbance of Tricolored Blackbird (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … or to construction, DWR will contact the UC Davis Tricolored Blackbird
                  Portal Project staff, or another group as recommended by CDFW, to
                  acquire recent colony information. Prior to initiation of construction
                  in a given work area and within 1,300 feet (396 meters) of the work
                  area, the CDFW-approved <mark>biologist</mark>(s) will conduct
                  preconstruction surveys to evaluate the presence of tricolored blackbird
                  breeding colonies and suitable nesting habitat. Surveys will be
                  conducted during the breeding season (March 15 through July 31) 1 year
                  prior to, and then again in the year of, construction. During each year,
                  surveys will be conducted monthly in March, April, May, June, and July.
                  If construction is initiated during the breeding season, the
                  CDFW-approved <mark>biologist</mark>(s) will conduct three surveys
                  within 15 days of construction, with one of the surveys within 5 days of
                  the start of construction. If there is a break in construction of 1 week
                  or more, surveys will be conducted prior to starting construction again
                  in the area. DWR will use a breeding season survey protocol approved in
                  writing by CDFW. The CDFW-approved <mark>biologist</mark>(s) will
                  delineate suitable nesting habitat and breeding colonies with flagging
                  or other visible marking. If active tricolored blackbird nesting
                  colonies are identified, the following avoidance measures will be
                  implemented.b. Roosting. Prior to initiation of nighttime construction
                  activities (45 minutes before sunset to 45 minutes after sunrise) within
                  300 feet of a construction site, the CDFW-approved
                  <mark>biologist</mark>(s) will conduct preconstruction surveys to
                  establish the existence and use of roosting habitat by tricolored
                  blackbird. Surveys will be conducted during the nonbreeding
                  season(August 1 through March 14) 1 year prior and then the year of
                  construction to establish use of roosting habitat. If nighttime
                  construction is initiated at a site during the nonbreeding season, the
                  CDFW-approved <mark>biologist</mark>(s) will conduct three surveys
                  within 15 days prior to the nighttime construction, with one of the
                  surveys within 5 days prior to the start of the nighttime construction.
                  DWR will use a roosting survey protocol approved in writing by CDFW. DWR
                  will consider roosting habitat occupied by large mixed blackbird flocks
                  to be occupied by tricolored blackbird if the CDFW-approved
                  <mark>biologist</mark>(s) cannot clearly identify tricolored blackbird
                  presence within the flock. During nighttime construction activities (45
                  minutes before sunset to 45 minutes after sunrise), the CDFW-approved
                  <mark>biologist</mark>(s) will check suitable roost sites within 300
                  feet of construction areas that are not occupied at the time of
                  preconstruction surveys each day throughout the nonbreeding season, in
                  accordance with the roosting survey protocol approved by CDFW, to
                  determine whether tricolored blackbird later occupy the roost site. The
                  CDFW-approved <mark>biologist</mark>(s) will delineate occupied roost
                  sites with flagging or other visible markings.
                </p>
                <p>
                  2. Non-Disturbance Buffer for Breeding. DWR will ensure construction
                  avoids suitable nesting habitat within 1,300 feet, to the extent
                  feasible as determined by the construction manager in coordination with
                  the CDFW-approved <mark>biologist</mark>. If nesting habitat cannot be
                  avoided and a tricolored blackbird breeding colony is detected, DWR will
                  ensure construction does not occur within a 1,300-foot diameter
                  non-disturbance buffer surrounding the colony and associated habitat
                  during the breeding season (March 15 through July 31). The non- …
                  CDFW.3. Night Work. DWR will restrict construction to 45 minutes after
                  sunrise to 45 minutes before sunset if occurring within 1,300 feet (396
                  meters) of a breeding colony occupied by tricolored blackbird to the
                  extent feasible, as determined by the contractor in coordination with
                  the CDFW-approved <mark>biologist</mark>.4. Daily Monitoring. Where
                  access allows, the CDFW-approved <mark>biologist</mark>(s) will monitor
                  breeding colonies that are within 1,300 feet (396 meters) of
                  construction for at least 6 hours per day, to verify that construction
                  is not disrupting the colony. If the Designated
                  <mark>Biologist</mark>(s) determines that construction is causing a
                  disruption to the colony, the CDFW-approved <mark>biologist</mark>(s)
                  will have the authority to stop construction and will notify DWR
                  immediately. The DWR Representative will notify CDFW within 24 hours to
                  determine additional protective measures that can be implemented. The
                  CDFW-approved <mark>biologist</mark>(s) will have the authority to:a.
                  Stop construction activities that are resulting in the disturbance until
                  additional protective measures are implemented, unless tricolored
                  blackbird breeding behavior normalizes on its own.b. Continue monitoring
                  and ensure additional protective measures will remain in place for the
                  duration of construction.c. Determine if additional protective measures
                  are ineffective and stop construction as needed until the additional
                  protective measures are modified.d. Maintain additional protective
                  measures until the CDFW-approved <mark>biologist</mark> determines
                  tricolored blackbird behavior has normalized and continue monitoring.
                </p>
                <p>
                  … tective measures may include, but are not limited to, increasing the
                  size of the buffer, delaying construction until the colony is finished
                  breeding and chicks have left the nest site, temporarily relocating
                  staging areas, and temporarily rerouting access to the construction
                  site. The CDFW-approved <mark>biologist</mark>(s) will notify CDFW
                  within 24 hours if nests or nestlings are abandoned. If the nestlings
                  are still alive, the CDFW-approved <mark>biologist</mark> (s) will work
                  with CDFW to determine appropriate actions. Notification to CDFW will be
                  via telephone or email, followed by a written incident report.
                  Notification will include the date, time, location, and circumstances of
                  the incident.
                </p>
                <p>
                  … turbance; or where sound curtains are installed, as approved in
                  writing by CDFW. Occupied roost sites that are within 300 feet of
                  nighttime construction that occurs 45 minutes before sunset to 45
                  minutes after sunrise will be monitored daily (beginning 45 minutes
                  before sunset) by the CDFW-approved <mark>biologist</mark>(s), for at
                  least 4 hours or until the roost site is no longer occupied, to verify
                  that the activity is not disrupting the roosting birds. If the
                  CDFW-approved <mark>biologist</mark>(s) determines construction are
                  disrupting roosting activity, DWR will put additional protective
                  measures in place until the tricolored blackbird behavior normalizes.
                  Additional protective measures may include, but are not limited to,
                  increasing the size of the non-disturbance buffer, delaying night …
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-74"
              data-scope="commitments"
              data-entity="compensate for the loss of bat roosting habitat on bridges and overpasses (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-45a</span>
                  <span class="bcn-sr__row-title"
                    >Compensate for the Loss of Bat Roosting Habitat on Bridges and
                    Overpasses (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-75"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on roosting bats (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-45b</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Roosting Bats (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  1. Approximately 2 years prior to surface construction, including
                  demolition, beginning on a bridge, overpass or a structure, a qualified
                  <mark>biologist</mark>, with knowledge of the natural history of
                  California bats, experience identifying habitat, and experience using
                  full-spectrum acoustic equipment, will conduct a daytime search for bat
                  sign (e.g., guano, urine staining, culled insect parts) on or underneath
                  the bridge, overpass, or structure. This 2-year period prior to surface
                  construction allows enough time to conduct surveys and plan for
                  evictions, if necessary. <mark>Biologist</mark>s conducting daytime
                  surveys will listen for audible social calls through the use of bat
                  detector, which converts ultrasonic echolocation emissions into
                  frequencies audible to humans in real-time. This field assessment can be
                  performed during any time of year, provided that weather conditions or
                  local flooding do not affect the <mark>biologist</mark>’s ability to do
                  a thorough evaluation. Visual observations can be made using the naked
                  eye, binoculars, a high-powered flashlight, and or a fiber-optic camera
                  probe to inspect eaves and attics of structures and on bridge or
                  overpass expansion joints, weep holes, and other bridge or overpass
                  feature …
                </p>
                <p>
                  2. If no habitat or sign of bats is observed, no further surveys are
                  warranted. The <mark>biologist</mark> will carefully document the
                  reasons for determining that no bat habitat is present on the bridge,
                  overpass, or structure, and why further surveys are not merited. If
                  habitat is present, but no sign of bats is observed, additional surveys
                  would be necessary to support the conclusion that bats are no … not
                  produce obvious signs of occupancy and depending on the timing of the
                  habitat assessment bats may have migrated or are not occupying the
                  habitat at that time.3. If suitable habitat or signs of bat use are
                  observed during the preliminary field assessment, focused surveys should
                  be performed by a <mark>biologist</mark> to determine whether colonies
                  are present and the approximate size of the colony or colonies and the
                  species present. Caution should be taken when conducting field surveys
                  at active roosts. To ensure that disturbance is kept to a minimum, the
                  <mark>biologist</mark> and any field assistants should not loiter
                  directly underneath known or suspected occupied roosts longer than is
                  necessary to record data. Surveys should be performed in the summer,
                  fall, spring, and winter to determine how the site is used by bats.
                  Information collected during focused surveys shou …
                </p>
                <p>
                  4. If tree removal or trimming is necessary for project construction,
                  approximately 1 year prior to surface construction at a given location a
                  <mark>biologist</mark> will examine trees to be removed or trimmed for
                  suitable bat roosting habitat. High-value habitat features (e.g., large
                  tree cavities, basal hollows, loose or peeling bark, larger snags, palm
                  trees with intact thatch) will be identified and the area around these
                  features searched for bats and bat sign (e.g., guano, culled insect
                  parts, staining). Riparian woodland, orchards, and stands of mature
                  broadleaf trees should be considered potential habitat for solitary
                  foliage-roosting bat species.5. If bat sign is detected,
                  <mark>biologist</mark>s will conduct evening visual emergence survey of
                  the source habitat feature, from a half hour before sunset to 1 to 2
                  hours after sunset for a minimum of 2 nights within the season that
                  surface construction would be taking place. Methodology should follow
                  that described above in measure 3 for the b …
                </p>
                <p>
                  … e females and dependent young.c. Install exclusion devices from March
                  1 through April 1 and/or September 1 through November 1 to preclude bats
                  from occupying the bridge or overpass during surface construction.
                  Exclusionary devices will only be installed by or under the supervision
                  of an experienced <mark>biologist</mark>.d. Avoid tree removal between
                  April 15 and September 15 (the maternity period for bat species that use
                  trees) to avoid impacts on pregnant females and active maternity roosts
                  (whether colonial or solitary).e. Conduct tree removal between September
                  15 and October 31 to the maximum extent practicable … with CDFW.f.
                  Remove trees in pieces, rather than felling the entire tree. g. If a
                  maternity roost is located, whether solitary or colonial, leave that
                  roost undisturbed with a minimum 200-foot non-disturbance buffer or a
                  distance as determined in consultation with CDFW until September 15 or
                  until a <mark>biologist</mark> has determined the roost is no longer
                  active.
                </p>
                <p class="bcn-sr__row-more">+ 7 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-76"
              data-scope="commitments"
              data-entity="conduct preconstruction survey for san joaquin kit fox and implement avoidance and minimization measures (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-46</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Preconstruction Survey for San Joaquin Kit Fox and Implement
                    Avoidance and Minimization Measures (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  As properties become accessible for initiating project activities within
                  areas of modeled San Joaquin kit fox habitat, DWR will require
                  suitability assessments of the modeled habitat by a
                  <mark>biologist</mark> qualified to identify suitable habitat for this
                  species. Surveys will be conducted from locations where access allows.
                </p>
                <p>
                  1. For areas verified as being suitable for San Joaquin kit fox,
                  preconstruction surveys will be initiated within 14 to 30 days prior to
                  ground disturbance, vegetation removal, or establishment of staging
                  areas related to project activities. A USFWS- and CDFW-approved
                  <mark>biologist</mark> with experience surveying for and observing the
                  species will survey the project footprint and the area within 200 feet
                  beyond the footprint to identify known or potential San Joaquin kit fox
                  dens. Adjacent parcels under different land ownership will not be
                  surveyed unless access is granted within the 200-foot radius of the
                  project footprint. The <mark>biologist</mark>s will conduct these
                  searches by systematically walking 30- to 100-foot-wide transects
                  throughout the survey area; transect width will be adjusted based on
                  vegetation height and topography. The <mark>biologist</mark> will
                  conduct walking transects such that 100% visual coverage of the worksite
                  footprint is achieved. Dens will be classified in one of the following
                  four den status categories outlined in the Standardized Recommendations
                  for Protection of the Endangered San Joaquin Kit Fox Prior to or During
                  Ground …
                </p>
                <p>
                  … s being used or has been used by a San Joaquin kit fox. Potential dens
                  comprise any suitable subterranean hole or any den or burrow of another
                  species (e.g., coyote, badger, red fox, or ground squirrel) that
                  otherwise has appropriate characteristics for kit fox use. If a
                  potential den is found, the <mark>biologist</mark> will establish a
                  50-foot buffer using flagging.b. Known den. Any existing natural den or
                  artificial structure that is used or has been used at any time in the
                  past by a San Joaquin kit fox. Evidence of use may include historical
                  records; past or current radiotelemetry or spotlighting data; kit fox
                  sign such as tracks, scat, or prey remains; or other reasonable proof
                  that a den is being or has been used by a kit fox. If a known den is
                  found, the <mark>biologist</mark> will establish a 100-foot buffer using
                  flagging.c. Natal or pupping den. Any den used by San Joaquin kit foxes
                  to whelp or rear their pups. Natal or pupping dens may be larger with
                  more numerous entrances than dens occupied exclusively by adults. These
                  dens typically have more kit fox tracks, scat, … x pups are actually
                  whelped but not necessarily reared, is a more restrictive version of the
                  pupping den. In practice, however, it is difficult to distinguish
                  between the two types of dens; therefore, for purposes of this
                  definition, either term applies. If a natal or pupping den is
                  discovered, the <mark>biologist</mark> will establish a buffer of at
                  least 200 feet using fencing but a final buffer will be established in
                  coordination with USFWS and CDFW.d. Atypical den. Any artificial
                  structure that has been or is being occupied by a San Joaquin kit fox.
                  Atypical dens may include pipes, culverts, and diggings beneath concrete
                  slabs and buildings. If an atypical den is discovered, the
                  <mark>biologist</mark> will establish a 50-foot buffer using flagging.
                </p>
                <p>
                  … oidance is not possible, limited den destruction may be allowed
                  provided the following procedures are observed.3. If an atypical, natal
                  or pupping, known or potential San Joaquin kit fox den is discovered
                  within a project footprint, the den will be monitored for 3 days by a
                  USFWS- and CDFW-approved <mark>biologist</mark> using a tracking medium
                  or an infrared beam camera to determine if the den is currently being
                  used.4. If an active natal or pupping den is found within a project
                  footprint, USFWS and CDFW will be notified immediately. The den will not
                  be destroyed until the pups and adults have vacated and then only after
                  further coordination with USFWS and CDFW.5. If San Joaquin kit fox
                  activity is observed at the potential, known, or atypical den during the
                  preconstruction surveys, den use will be actively discouraged with the
                  approval of the USFWS- and CDFW-approved <mark>biologist</mark>, as
                  described below, and monitoring will continue for an additional 5
                  consecutive days from the time of the first observation to allow any
                  resident animals to move to another den. For dens other than natal or
                  pupping dens, use of the den can be discouraged by partially plugging
                  the entrance with soil such that any resident animal can easily escape.
                  Alternatively, if the animal is still present after 5 or more
                  consecutive days of plugging and monitoring, the den may have to be
                  excavated by hand when, in the judgment of a <mark>biologist</mark>, it
                  is temporarily vacant (i.e., during the animal’s normal foraging
                  activities). If at any point during excavation a San Joaquin kit fox is
                  discovered inside the den, the excavation activity will cease
                  immediately and monitoring of the den, as described above, will be
                  resumed. Destruction of the den may be completed when, in the judgment
                  of the <mark>biologist</mark>, the animal has escaped from the partially
                  destroyed den.
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-77"
              data-scope="commitments"
              data-entity="conduct preconstruction survey for american badger and implement avoidance and minimization measures (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-47</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Preconstruction Survey for American Badger and Implement
                    Avoidance and Minimization Measures (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  DWR will require a qualified <mark>biologist</mark> to survey for
                  American badger concurrently with the preconstruction surveys for
                  burrowing owl within 14 days prior to the start of ground disturbance.
                  If an active den is detected within the work area, the qualified
                  <mark>biologist</mark> will establish a minimum 100-foot non-disturbance
                  buffer around the den until the <mark>biologist</mark> determines that
                  the den is no longer active through direct monitoring, using wildlife
                  cameras, or using a camera probe. Potential dens that are determined to
                  be inactive by one or more of the aforementioned methods will be
                  collapsed by hand to prevent occupation of the den between the time of
                  the s …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-78"
              data-scope="commitments"
              data-entity="avoid and minimize impacts on terrestrial wildlife connectivity and movement (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">BIO-53</span>
                  <span class="bcn-sr__row-title"
                    >Avoid and Minimize Impacts on Terrestrial Wildlife Connectivity and
                    Movement (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Design and Construction The following measures will be implemented
                  during project design and construction to avoid and minimize impacts on
                  terrestrial wildlife connectivity and movement. The design and
                  monitoring of the project will be developed and conducted in
                  coordination with an agency-approved <mark>biologist</mark> qualified
                  and experienced in wildlife crossing and connectivity planning and
                  design. The agency-approved <mark>biologist</mark> must demonstrate an
                  understanding of the species’ ecological, behavioral, and movement needs
                  across WCGs and how to integrate the best design practices available,
                  including the integration of measures to avoid and minimize noise,
                  light, and other disturbances that may affect connectivity function,
                  into project plans and specifications. The agency-approved
                  <mark>biologist</mark> will oversee development and design of wildlife
                  crossing structures, which will include wildlife fencing, as well as all
                  other project elements and roadway features with connectivity
                  requirements and specifications.
                </p>
                <p>
                  … lso be designed and placed in a manner that facilitates wildlife
                  movement through or between the riparian banks and corridors during
                  constriction. Feasibility will be determined and design and maintenance
                  of habitat contiguity and fencing will be developed and overseen by DWR
                  in coordination with a <mark>biologist</mark> qualified and experienced
                  in wildlife crossing planning and design and will be managed in
                  coordination with the qualified <mark>biologist</mark> during
                  construction phasing.
                </p>
                <p>
                  … fe access to roads and facilities. Fencing will also be designed and
                  placed in a manner that facilitates wildlife movement through or between
                  the riparian banks and corridors during constriction. Design of habitat
                  contiguity, revegetation, and fencing will be developed by DWR in
                  coordination with a <mark>biologist</mark> qualified and experienced in
                  wildlife crossing planning and design.
                </p>
                <p>
                  5. An agency-approved <mark>biologist</mark> with demonstrated
                  understanding of monitoring and adaptive management techniques used in
                  the field of connectivity ecology, road ecology, and wildlife crossings
                  will oversee operations monitoring of new wildlife crossings,
                  connectivity enhancement measures (e.g., amphibian-friendly roads and
                  curbs) …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-79"
              data-scope="commitments"
              data-entity="san joaquin kit fox avoidance and minimization measures "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CM 6.3.2.1</span>
                  <span class="bcn-sr__row-title"
                    >San Joaquin Kit Fox Avoidance and Minimization Measures</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  For areas verified as being suitable for San Joaquin kit fox,
                  preconstruction surveys will be initiated within 14 to 30 days prior to
                  ground disturbance, vegetation removal, or establishment of staging
                  areas related to project activities. A Service- and CDFW-approved
                  <mark>biologist</mark> with experience surveying for and observing the
                  species will survey the project footprint and the area within 200 feet
                  beyond the footprint to identify known or potential San Joaquin kit fox
                  dens. Adjacent parcels under different land ownership will not be
                  surveyed unless access is granted within the 200-foot radius of the
                  project footprint. The <mark>biologist</mark>s will conduct these
                  searches by systematically walking 30- to 100-foot-wide transects
                  throughout the survey area; transect width will be adjusted based on
                  vegetation height and topography. The <mark>biologist</mark> will
                  conduct walking transects such that 100% visual coverage of the worksite
                  footprint is achieved. Dens will be classified in one of the following
                  four den status categories outlined in the Standardized Recommendations
                  for Protection of the Endangered San Joaquin Kit Fox Prior to or During
                  Ground …
                </p>
                <p>
                  … s being used or has been used by a San Joaquin kit fox. Potential dens
                  comprise any suitable subterranean hole or any den or burrow of another
                  species (e.g., coyote, badger, red fox, or ground squirrel) that
                  otherwise has appropriate characteristics for kit fox use. If a
                  potential den is found, the <mark>biologist</mark> will establish a
                  50-foot buffer using flagging.
                </p>
                <p>
                  … e in the past by a San Joaquin kit fox. Evidence of use may include
                  historical records; past or current radiotelemetry or spotlighting data;
                  kit fox signs such as tracks, scat, or prey remains; or other reasonable
                  proof that a den is being or has been used by a kit fox. If a known den
                  is found, the <mark>biologist</mark> will establish a 100-foot buffer
                  using flagging.
                </p>
                <p>
                  d. Atypical den. Any artificial structure that has been or is being
                  occupied by a San Joaquin kit fox. Atypical dens may include pipes,
                  culverts, and diggings beneath concrete slabs and buildings. If an
                  atypical den is discovered, the <mark>biologist</mark> will establish a
                  50-foot buffer using flagging.
                </p>
                <p class="bcn-sr__row-more">+ 12 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-80"
              data-scope="commitments"
              data-entity="general design guidelines "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-0</span>
                  <span class="bcn-sr__row-title">General Design Guidelines</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-81"
              data-scope="commitments"
              data-entity="tidal perennial aquatic habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-1</span>
                  <span class="bcn-sr__row-title">Tidal Perennial Aquatic Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-82"
              data-scope="commitments"
              data-entity="tidal freshwater emergent wetland "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-2</span>
                  <span class="bcn-sr__row-title">Tidal Freshwater Emergent Wetland</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-83"
              data-scope="commitments"
              data-entity="valley/foothill riparian habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-3</span>
                  <span class="bcn-sr__row-title">Valley/Foothill Riparian Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-84"
              data-scope="commitments"
              data-entity="nontidal perennial aquatic habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-4</span>
                  <span class="bcn-sr__row-title"
                    >Nontidal Perennial Aquatic Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-85"
              data-scope="commitments"
              data-entity="nontidal freshwater perennial emergent wetland "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-5</span>
                  <span class="bcn-sr__row-title"
                    >Nontidal Freshwater Perennial Emergent Wetland</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-86"
              data-scope="commitments"
              data-entity="nontidal brackish emergent wetland "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-6</span>
                  <span class="bcn-sr__row-title"
                    >Nontidal Brackish Emergent Wetland</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-87"
              data-scope="commitments"
              data-entity="alkaline seasonal wetland complex "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-7</span>
                  <span class="bcn-sr__row-title">Alkaline Seasonal Wetland Complex</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-88"
              data-scope="commitments"
              data-entity="vernal pool complex "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-8</span>
                  <span class="bcn-sr__row-title">Vernal Pool Complex</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-89"
              data-scope="commitments"
              data-entity="special-status plants "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-9</span>
                  <span class="bcn-sr__row-title">Special-Status Plants</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-90"
              data-scope="commitments"
              data-entity="mason’s lilaeopsis "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-10</span>
                  <span class="bcn-sr__row-title">Mason’s Lilaeopsis</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-91"
              data-scope="commitments"
              data-entity="vernal pool fairy shrimp and vernal pool tadpole shrimp habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-11</span>
                  <span class="bcn-sr__row-title"
                    >Vernal Pool Fairy Shrimp and Vernal Pool Tadpole Shrimp Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-92"
              data-scope="commitments"
              data-entity="valley elderberry longhorn beetle habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-12</span>
                  <span class="bcn-sr__row-title"
                    >Valley Elderberry Longhorn Beetle Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-93"
              data-scope="commitments"
              data-entity="california tiger salamander habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-13</span>
                  <span class="bcn-sr__row-title"
                    >California Tiger Salamander Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-94"
              data-scope="commitments"
              data-entity="california red-legged frog habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-14</span>
                  <span class="bcn-sr__row-title"
                    >California Red-Legged Frog Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-95"
              data-scope="commitments"
              data-entity="giant garter snake habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-15</span>
                  <span class="bcn-sr__row-title">Giant Garter Snake Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-96"
              data-scope="commitments"
              data-entity="western yellow-billed cuckoo habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-16</span>
                  <span class="bcn-sr__row-title"
                    >Western Yellow-Billed Cuckoo Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-97"
              data-scope="commitments"
              data-entity="california black rail habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-17</span>
                  <span class="bcn-sr__row-title">California Black Rail Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-98"
              data-scope="commitments"
              data-entity="sandhill crane roosting habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-18a</span>
                  <span class="bcn-sr__row-title">Sandhill Crane Roosting Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-99"
              data-scope="commitments"
              data-entity="sandhill crane foraging habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-18b</span>
                  <span class="bcn-sr__row-title">Sandhill Crane Foraging Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-100"
              data-scope="commitments"
              data-entity="swainson's hawk nesting habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-19a</span>
                  <span class="bcn-sr__row-title">Swainson's Hawk Nesting Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-101"
              data-scope="commitments"
              data-entity="swainson's hawk foraging habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-19b</span>
                  <span class="bcn-sr__row-title">Swainson's Hawk Foraging Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-102"
              data-scope="commitments"
              data-entity="occupied burrowing owl habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-20</span>
                  <span class="bcn-sr__row-title">Occupied Burrowing Owl Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-103"
              data-scope="commitments"
              data-entity="least bell's vireo "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-21</span>
                  <span class="bcn-sr__row-title">Least Bell's Vireo</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-104"
              data-scope="commitments"
              data-entity="tricolored blackbird nesting habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-22a</span>
                  <span class="bcn-sr__row-title"
                    >Tricolored Blackbird Nesting Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-105"
              data-scope="commitments"
              data-entity="tricolored blackbird breeding foraging habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-22b</span>
                  <span class="bcn-sr__row-title"
                    >Tricolored Blackbird Breeding Foraging Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-106"
              data-scope="commitments"
              data-entity="tidal perennial habitat restoration for construction impacts on habitat for fish and aquatic resources (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-23</span>
                  <span class="bcn-sr__row-title"
                    >Tidal Perennial Habitat Restoration for Construction Impacts on
                    Habitat for Fish and Aquatic Resources (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-107"
              data-scope="commitments"
              data-entity="channel margin habitat restoration for construction impacts on habitat for fish and aquatic resources "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-24</span>
                  <span class="bcn-sr__row-title"
                    >Channel Margin Habitat Restoration for Construction Impacts on
                    Habitat for Fish and Aquatic Resources</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-108"
              data-scope="commitments"
              data-entity="tidal habitat restoration to mitigate north delta hydrodynamic effects on chinook salmon juveniles "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-25</span>
                  <span class="bcn-sr__row-title"
                    >Tidal Habitat Restoration to Mitigate North Delta Hydrodynamic
                    Effects on Chinook Salmon Juveniles</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-109"
              data-scope="commitments"
              data-entity="channel margin habitat restoration for operations impacts on chinook salmon juveniles "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-26</span>
                  <span class="bcn-sr__row-title"
                    >Channel Margin Habitat Restoration for Operations Impacts on Chinook
                    Salmon Juveniles</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-110"
              data-scope="commitments"
              data-entity="tidal habitat restoration for operations impacts on delta smelt "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-27</span>
                  <span class="bcn-sr__row-title"
                    >Tidal Habitat Restoration for Operations Impacts on Delta Smelt</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-111"
              data-scope="commitments"
              data-entity="tidal habitat restoration for operations impacts on longfin smelt "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-28</span>
                  <span class="bcn-sr__row-title"
                    >Tidal Habitat Restoration for Operations Impacts on Longfin
                    Smelt</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-112"
              data-scope="commitments"
              data-entity="crotch bumble bee habitat "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-29</span>
                  <span class="bcn-sr__row-title">Crotch Bumble Bee Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … ions, including the application of insecticides, as described in U.S.
                  Environmental Protection Agency Guidance for Assessing Pesticide Risks
                  to Bees (U.S. Environmental Protection Agency 2014) (also see Section
                  3F.4.2.2). To offset the unsuccessful relocation of a nest, as
                  determined by a qualified <mark>biologist</mark>, suitable habitat will
                  be created, enhanced, or protected, using the mitigation mechanisms
                  described above. Suitable habitat is defined as habitat that is suitable
                  for foraging, nesting, or overwintering within a 1.8 km buffer27 around
                  the lost nest that is permanently affected.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-113"
              data-scope="commitments"
              data-entity="northwestern pond turtle habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-30</span>
                  <span class="bcn-sr__row-title">Northwestern Pond Turtle Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-114"
              data-scope="commitments"
              data-entity="western spadefoot "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CMP-31</span>
                  <span class="bcn-sr__row-title">Western Spadefoot</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-115"
              data-scope="commitments"
              data-entity="legal compliance "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 1</span>
                  <span class="bcn-sr__row-title">Legal Compliance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-116"
              data-scope="commitments"
              data-entity="ceqa compliance "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 2</span>
                  <span class="bcn-sr__row-title">CEQA Compliance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-117"
              data-scope="commitments"
              data-entity="lsa agreement compliance "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 3</span>
                  <span class="bcn-sr__row-title">LSA Agreement Compliance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-118"
              data-scope="commitments"
              data-entity="esa compliance "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 4</span>
                  <span class="bcn-sr__row-title">ESA Compliance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-119"
              data-scope="commitments"
              data-entity="itp time frame compliance "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 5</span>
                  <span class="bcn-sr__row-title">ITP Time Frame Compliance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-120"
              data-scope="commitments"
              data-entity="phase authorizations for pre-implementation and construction activities "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 6</span>
                  <span class="bcn-sr__row-title"
                    >Phase Authorizations for Pre-Implementation and Construction
                    Activities</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-121"
              data-scope="commitments"
              data-entity="pre-implementation phase authorization package "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 6.1</span>
                  <span class="bcn-sr__row-title"
                    >Pre-Implementation Phase Authorization Package</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-122"
              data-scope="commitments"
              data-entity="construction phase authorization package "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 6.2</span>
                  <span class="bcn-sr__row-title"
                    >Construction Phase Authorization Package</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-123"
              data-scope="commitments"
              data-entity="cdfw review of the construction phase authorization package "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 6.3</span>
                  <span class="bcn-sr__row-title"
                    >CDFW Review of the Construction Phase Authorization Package</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-124"
              data-scope="commitments"
              data-entity="resubmittal of construction phase authorizatio package "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 6.4</span>
                  <span class="bcn-sr__row-title"
                    >Resubmittal of Construction Phase Authorizatio Package</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-125"
              data-scope="commitments"
              data-entity="amendment of construction phase authorization package "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 6.5</span>
                  <span class="bcn-sr__row-title"
                    >Amendment of Construction Phase Authorization Package</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-126"
              data-scope="commitments"
              data-entity="phase authorization for operations activities "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 7</span>
                  <span class="bcn-sr__row-title"
                    >Phase Authorization for Operations Activities</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-127"
              data-scope="commitments"
              data-entity="phase 2 authorization package "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 7.1</span>
                  <span class="bcn-sr__row-title">Phase 2 Authorization Package</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-128"
              data-scope="commitments"
              data-entity="cdfw review of the phase 2 authorization package "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 7.2</span>
                  <span class="bcn-sr__row-title"
                    >CDFW Review of the Phase 2 Authorization Package</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-129"
              data-scope="commitments"
              data-entity="resubmittal of phase 2 authorization package "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 7.3</span>
                  <span class="bcn-sr__row-title"
                    >Resubmittal of Phase 2 Authorization Package</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-130"
              data-scope="commitments"
              data-entity="amendment of phase 2 authorization package "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 7.4</span>
                  <span class="bcn-sr__row-title"
                    >Amendment of Phase 2 Authorization Package</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-131"
              data-scope="commitments"
              data-entity="phase 2 project operations report "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 7.5</span>
                  <span class="bcn-sr__row-title">Phase 2 Project Operations Report</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-132"
              data-scope="commitments"
              data-entity="consultation regarding amendment "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 8</span>
                  <span class="bcn-sr__row-title">Consultation Regarding Amendment</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-133"
              data-scope="commitments"
              data-entity="designated representative "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.1</span>
                  <span class="bcn-sr__row-title">Designated Representative</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-134"
              data-scope="commitments"
              data-entity="designated biologist(s), fisheries biologists(s), biological monitor(s) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.2</span>
                  <span class="bcn-sr__row-title"
                    >Designated <mark>Biologist</mark>(s), Fisheries
                    <mark>Biologist</mark>s(s), Biological Monitor(s)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-135"
              data-scope="commitments"
              data-entity="designated biologist(s), fisheries biologists(s), biological monitor(s) [stop work] authority "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.3</span>
                  <span class="bcn-sr__row-title"
                    >Designated <mark>Biologist</mark>(s), Fisheries
                    <mark>Biologist</mark>s(s), Biological Monitor(s) [Stop Work]
                    Authority</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-136"
              data-scope="commitments"
              data-entity="education program "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.4</span>
                  <span class="bcn-sr__row-title">Education Program</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall conduct an education program for all persons employed or
                  otherwise working in the Project Area before performing any work. The
                  training shall consist of a presentation from the Designated
                  <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), or
                  Biological Monitor(s) that includes:
                </p>
                <p>
                  Roles and responsibilities of workers, managers, Designated
                  Representative(s), Designated <mark>Biologist</mark>(s), Designated
                  Fisheries <mark>Biologist</mark>(s), and Biological Monitor(s).
                </p>
                <p class="bcn-sr__row-more">+ 13 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-137"
              data-scope="commitments"
              data-entity="construction monitoring documentation "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.5</span>
                  <span class="bcn-sr__row-title"
                    >Construction Monitoring Documentation</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s), Fisheries
                  <mark>Biologist</mark>(s), or Biological Monitor(s) shall maintain
                  construction-monitoring documentation on-site in either hard copy or
                  digital format throughout the construction period, which shall include:
                </p>
                <p class="bcn-sr__row-more">+ 4 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-138"
              data-scope="commitments"
              data-entity="trash abatement "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.6</span>
                  <span class="bcn-sr__row-title">Trash Abatement</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-139"
              data-scope="commitments"
              data-entity="erosion control "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.7</span>
                  <span class="bcn-sr__row-title">Erosion Control</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall monitor each Project construction site before, during, and after
                  each storm event and Permittee shall repair, and/or replace ineffective
                  measures immediately.
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-140"
              data-scope="commitments"
              data-entity="delineation of property boundaries "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.8</span>
                  <span class="bcn-sr__row-title"
                    >Delineation of Property Boundaries</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-141"
              data-scope="commitments"
              data-entity="delineation of habitat "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.9</span>
                  <span class="bcn-sr__row-title">Delineation of Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … n plans (Condition of Approval 6.2). Permittee shall inspect and
                  maintain all fencing, stakes, and flags until the completion of Covered
                  Activities in that area and include the location of the fenced, staked,
                  or flagged areas. Status of the fencing shall be verified and documented
                  by the Designated <mark>Biologist</mark>(s), Fisheries
                  <mark>Biologist</mark>(s), or Biological Monitor(s) within the Monthly
                  Compliance Report (Condition of Approval 10.15).
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-142"
              data-scope="commitments"
              data-entity="project access "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.10</span>
                  <span class="bcn-sr__row-title">Project Access</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-143"
              data-scope="commitments"
              data-entity="staging areas "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.11</span>
                  <span class="bcn-sr__row-title">Staging Areas</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-144"
              data-scope="commitments"
              data-entity="vehicle and equipment inspection "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.12</span>
                  <span class="bcn-sr__row-title">Vehicle and Equipment Inspection</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Vehicles and equipment shall be visually inspected by the Designated
                  <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), and/or
                  Biological Monitor(s) before being moved if they have been idle and/or
                  unoccupied for 30 minutes or longer. If an individual of a Covered
                  Species is present, the worker shall wait for the Covered Species to
                  move unimpeded to a safe location. Alternatively, the Designated
                  <mark>Biologist</mark>(s) or Fisheries <mark>Biologist</mark>(s) shall
                  be contacted to determine if the individual may be safely moved
                  consistent with the requirements of Conditions of Approval of this ITP.
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-145"
              data-scope="commitments"
              data-entity="refueling and maintenance "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.13</span>
                  <span class="bcn-sr__row-title">Refueling and Maintenance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-146"
              data-scope="commitments"
              data-entity="hazardous waste "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.14</span>
                  <span class="bcn-sr__row-title">Hazardous Waste</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-147"
              data-scope="commitments"
              data-entity="cdfw access "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.15</span>
                  <span class="bcn-sr__row-title">CDFW Access</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-148"
              data-scope="commitments"
              data-entity="conservation easements and cdfw managed lands. "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.16</span>
                  <span class="bcn-sr__row-title"
                    >Conservation Easements and CDFW Managed Lands.</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-149"
              data-scope="commitments"
              data-entity="refuse removal "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.17</span>
                  <span class="bcn-sr__row-title">Refuse Removal</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-150"
              data-scope="commitments"
              data-entity="wildfire prevention "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 9.18</span>
                  <span class="bcn-sr__row-title">Wildfire Prevention</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-151"
              data-scope="commitments"
              data-entity="notification before commencement "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.1</span>
                  <span class="bcn-sr__row-title">Notification Before Commencement</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-152"
              data-scope="commitments"
              data-entity="notification of non-compliance "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.2</span>
                  <span class="bcn-sr__row-title">Notification of Non-Compliance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-153"
              data-scope="commitments"
              data-entity="tracking suitable habitat feature disturbances, map updating, and reporting "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.3</span>
                  <span class="bcn-sr__row-title"
                    >Tracking Suitable Habitat Feature Disturbances, Map Updating, and
                    Reporting</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-154"
              data-scope="commitments"
              data-entity="suitable habitat monitoring "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.4</span>
                  <span class="bcn-sr__row-title">Suitable Habitat Monitoring</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-155"
              data-scope="commitments"
              data-entity="reporting approved maps "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.5</span>
                  <span class="bcn-sr__row-title">Reporting Approved Maps</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-156"
              data-scope="commitments"
              data-entity="photo monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.6</span>
                  <span class="bcn-sr__row-title">Photo Monitoring</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  (4) If CDFW or the Designated <mark>Biologist</mark>(s) determines that
                  additional monitoring stations are necessary, the locations shall be
                  added to the inventory of photo monitoring stations.
                </p>
                <p class="bcn-sr__row-more">+ 7 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-157"
              data-scope="commitments"
              data-entity="species observations outside of mapped habitat "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.7</span>
                  <span class="bcn-sr__row-title"
                    >Species Observations Outside of Mapped Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-158"
              data-scope="commitments"
              data-entity="habitat evaluation "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.8</span>
                  <span class="bcn-sr__row-title">Habitat Evaluation</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) shall conduct a field survey
                  and identify suitable habitat for each Covered Species in areas within
                  the planned Project construction site and within 1640 feet from the
                  Project construction site consistent with the largest no-disturbance
                  buffer for Covered Species (see Condition of Approval 11.11 … pproval
                  6.1) and include all initial preconstruction field survey results to
                  CDFW in the appropriate Construction Phase Authorization Package
                  (Condition of Approval 6.2) and identify the spatial extent of suitable
                  habitat for each Covered Species as well as the total area surveyed by
                  the Designated <mark>Biologist</mark>(s).
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-159"
              data-scope="commitments"
              data-entity="tracking impacts "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.9</span>
                  <span class="bcn-sr__row-title">Tracking Impacts</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-160"
              data-scope="commitments"
              data-entity="daily compliance monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.10</span>
                  <span class="bcn-sr__row-title">Daily Compliance Monitoring</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall be present at each Project construction site and during each
                  maintenance activity, each day, to conduct compliance inspections at a
                  minimum of one inspection daily, after periods of inactivity prior to
                  initiating work, and after clearing, grubbing, and grading are
                  completed. The Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall conduct compliance inspections to:
                </p>
                <p>
                  The Designated Representative or Designated <mark>Biologist</mark>(s)
                  shall prepare daily written observation and inspection records,
                  including photo-documentation records (Condition of Approval 10.6),
                  summarizing oversight activities and compliance inspections,
                  observations of Covered Species and their sign, survey results, dates of
                  Covered Activity and inactivity, and monitoring activities required by
                  this ITP. These shall include the date; the surveying Designated
                  <mark>Biologist</mark>(s); Project information including the ITP number;
                  location(s) where Covered Activities are occurring; Project impacts and
                  acres impacted; surveying information including time of day, temperature
                  at start and end of survey (including ambient temperature, temperature
                  at ground level, and at approxima …
                </p>
                <p class="bcn-sr__row-more">+ 7 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-161"
              data-scope="commitments"
              data-entity="environmental compliance monitoring plan "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.11</span>
                  <span class="bcn-sr__row-title"
                    >Environmental Compliance Monitoring Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-162"
              data-scope="commitments"
              data-entity="monthly compliance report "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.12</span>
                  <span class="bcn-sr__row-title">Monthly Compliance Report</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated Representative or Designated <mark>Biologist</mark> shall
                  compile the observation and inspection records identified in Condition
                  of Approval 10.10 into a Monthly Compliance Report and submit it to CDFW
                  along with a copy of the MMRP table with notes showing the current
                  implementation status of each mitigation measure.
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-163"
              data-scope="commitments"
              data-entity="annual status report "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.13</span>
                  <span class="bcn-sr__row-title">Annual Status Report</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-164"
              data-scope="commitments"
              data-entity="cnddb observations "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.14</span>
                  <span class="bcn-sr__row-title">CNDDB Observations</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall submit all observations of Covered Species to CDFW’s California
                  Natural Diversity Database (CNDDB) during preconstruction, construction,
                  operations, and maintenance activities within 60 calendar days of the
                  observation and the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall include copies of the submitted forms with
                  the next Monthly Compliance Report (Condition of Approval 10.12) or
                  Annual Status Report (Condition of Approval 10.13), whichever is
                  submitted first relative to the observation.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-165"
              data-scope="commitments"
              data-entity="final mitigation report "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.15</span>
                  <span class="bcn-sr__row-title">Final Mitigation Report</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall provide CDFW with Final Phase Mitigation Reports no
                  later than 45 days after completion of Covered Activities and all
                  mitigation measures for each Project Phase and after Covered Activities
                  and all mitigation measures for all Project Phases are complete. The
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
                  prepare each Final Phase Mitigation Report which shall include, at a
                  minimum: (1) a summary of all Monthly Compliance Reports and all Annual
                  Status Reports prepared during the applicable Project Phase; (2) a copy
                  of the table in the MMRP (ITP Attachment 2) with …
                </p>
                <p>
                  10.15.1 Mitigation Status Report. Ninety days prior to the expiration of
                  this ITP, Permittee shall provide CDFW with a Mitigation Status Report.
                  The Designated <mark>Biologist</mark>(s), Fisheries
                  <mark>Biologist</mark>(s), and/or Biological Monitor(s) shall prepare
                  the Mitigation Status Report which shall include, at a minimum: (1) a
                  summary of all Final Phase Mitigation Reports which will include the
                  Monthly Compliance Reports and all ASRs; (2) a copy of the table in the
                  MMRP (ITP Attachment 2) with notes showin …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-166"
              data-scope="commitments"
              data-entity="notification of take or injury/damage "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.16</span>
                  <span class="bcn-sr__row-title"
                    >Notification of Take or Injury/Damage</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall immediately notify the Designated
                  <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), and/or
                  Biological Monitor(s) if a Covered Species is taken or injured/damaged
                  by a Covered Activity, or if a Covered Species is otherwise found dead
                  or injured/damaged within the vicinity of the Project.
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) or Permittee’s Designated
                  Representative shall provide initial notification to CDFW by calling the
                  CDFW Bay-Delta Region Stockton Office at (209) 234-3420.
                </p>
                <p class="bcn-sr__row-more">+ 4 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-167"
              data-scope="commitments"
              data-entity="subsurface vibratory testing and monitoring study for fossorial covered species "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.17</span>
                  <span class="bcn-sr__row-title"
                    >Subsurface Vibratory Testing and Monitoring Study for Fossorial
                    Covered Species</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-168"
              data-scope="commitments"
              data-entity="covered fish species monitoring and scientific studies "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.18</span>
                  <span class="bcn-sr__row-title"
                    >Covered Fish Species Monitoring and Scientific Studies</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-169"
              data-scope="commitments"
              data-entity="fisheries evaluation studies "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.19</span>
                  <span class="bcn-sr__row-title">Fisheries Evaluation Studies</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-170"
              data-scope="commitments"
              data-entity="water quality evaluation studies "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.20</span>
                  <span class="bcn-sr__row-title">Water Quality Evaluation Studies</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-171"
              data-scope="commitments"
              data-entity="ecological response evaluation studies "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.21</span>
                  <span class="bcn-sr__row-title"
                    >Ecological Response Evaluation Studies</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  During In-water Preconstruction Monitoring, Permittee shall convene a
                  team of <mark>biologist</mark>s and hydrologic engineers to
                  collaboratively develop a Joint Operations Optimization Study Plan that
                  will describe a series of modeling studies, informed by empirical data,
                  to evaluate a wide range of possible joint operations scenarios,
                  including approaches to balancing diversions between north an …
                </p>
                <p class="bcn-sr__row-more">+ 28 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-172"
              data-scope="commitments"
              data-entity="personnel conducting studies and monitoring "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.22</span>
                  <span class="bcn-sr__row-title"
                    >Personnel Conducting Studies and Monitoring</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-173"
              data-scope="commitments"
              data-entity="sacramento river bathymetric studies "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.23</span>
                  <span class="bcn-sr__row-title"
                    >Sacramento River Bathymetric Studies</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-174"
              data-scope="commitments"
              data-entity="mathematical model development "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.24</span>
                  <span class="bcn-sr__row-title">Mathematical Model Development</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-175"
              data-scope="commitments"
              data-entity="north delta intake hydraulic modeling "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.25</span>
                  <span class="bcn-sr__row-title"
                    >North Delta Intake Hydraulic Modeling</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-176"
              data-scope="commitments"
              data-entity="incorporation of fish guidance system into the north delta intake structures "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.26</span>
                  <span class="bcn-sr__row-title"
                    >Incorporation of Fish Guidance System into the North Delta Intake
                    Structures</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-177"
              data-scope="commitments"
              data-entity="hydraulic testing for velocity requirements "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.27</span>
                  <span class="bcn-sr__row-title"
                    >Hydraulic Testing for Velocity Requirements</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-178"
              data-scope="commitments"
              data-entity="visual inspections "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.28</span>
                  <span class="bcn-sr__row-title">Visual Inspections</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-179"
              data-scope="commitments"
              data-entity="sediment management "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.29</span>
                  <span class="bcn-sr__row-title">Sediment Management</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-180"
              data-scope="commitments"
              data-entity="screen impingement study "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 10.30</span>
                  <span class="bcn-sr__row-title">Screen Impingement Study</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-181"
              data-scope="commitments"
              data-entity="covered species observations "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.1</span>
                  <span class="bcn-sr__row-title">Covered Species Observations</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  During all phases of Project construction, operations, and maintenance,
                  Permittee shall direct all workers to inform the Designated
                  <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), or
                  Biological Monitor(s) if they encounter any Covered Species within or
                  near the Project site. All Covered Activities with potential to take
                  Covered Species shall cease until the animal moves from the Project site
                  on its own accord. If the animal is found within a fenced Project
                  construction site and cannot move of its own volition, the Designated
                  <mark>Biologist</mark>(s) shall move the animal outside of the area of
                  construction according to their species-specific relocation or
                  transplantation plans described in this ITP for each Covered Species.
                  Capture and relocation of trapped or injured special-status wildlife may
                  only be performed by the Designated <mark>Biologist</mark>(s) and
                  Fisheries <mark>Biologist</mark>(s). Covered Species sightings shall be
                  recorded with a GPS (including datum and horizontal accuracy in feet)
                  and the Designated <mark>Biologist</mark>(s), Fisheries
                  <mark>Biologist</mark>(S), or Biological Monitor(s) shall report Covered
                  Species observed locations to CDFW within one business day of the
                  observation.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-182"
              data-scope="commitments"
              data-entity="covered species injury "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.2</span>
                  <span class="bcn-sr__row-title">Covered Species Injury</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  If a Covered Species is injured as a result of Covered Activities, the
                  Designated <mark>Biologist</mark> shall immediately take it to a
                  CDFW-approved wildlife rehabilitation or veterinary facility specific to
                  the injured individual. Permittee shall bear any costs associated with
                  the care or treatment of such injured Covered Species. The Permittee
                  shall notify CDFW of the injury to the Covered Species …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-183"
              data-scope="commitments"
              data-entity="covered species capture, handling, and reporting "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.3</span>
                  <span class="bcn-sr__row-title"
                    >Covered Species Capture, Handling, and Reporting</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) shall be responsible for and
                  direct efforts to capture and handle Covered Species. The Designated
                  <mark>Biologist</mark>(s) shall ensure their hands are free of soaps,
                  oils, creams, lotions, insect repellants, solvents or other potentially
                  harmful chemicals and if not single use, nitrile or other
                  hypo-allergenic gloves (non-latex) will be used for handling
                  special-status fish or wildlife. The Designated
                  <mark>Biologist</mark>(s) shall maintain monitoring records that
                  include, but are not limited to: (1) the beginning and ending time the
                  capture and relocation effort, (2) a statement identifying the Covered
                  Species encountered, (3) the time of discovery, by whom, and the
                  condition of the Covered Species, (4) the capture …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-184"
              data-scope="commitments"
              data-entity="pesticide, fungicide, and herbicide use "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.4</span>
                  <span class="bcn-sr__row-title"
                    >Pesticide, Fungicide, and Herbicide Use</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-185"
              data-scope="commitments"
              data-entity="prohibition of rodenticide and poison use "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.5</span>
                  <span class="bcn-sr__row-title"
                    >Prohibition of Rodenticide and Poison Use</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-186"
              data-scope="commitments"
              data-entity="fertilizer use "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.6</span>
                  <span class="bcn-sr__row-title">Fertilizer Use</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-187"
              data-scope="commitments"
              data-entity="daily work restrictions "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.7</span>
                  <span class="bcn-sr__row-title">Daily Work Restrictions</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-188"
              data-scope="commitments"
              data-entity="artificial lighting at night "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.8</span>
                  <span class="bcn-sr__row-title">Artificial Lighting at Night</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-189"
              data-scope="commitments"
              data-entity="lighting on intake structure "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.9</span>
                  <span class="bcn-sr__row-title">Lighting on Intake Structure</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-190"
              data-scope="commitments"
              data-entity="visual barriers along access routes for nighttime activities "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.10</span>
                  <span class="bcn-sr__row-title"
                    >Visual Barriers Along Access Routes for Nighttime Activities</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … etrofitted using a CDFW-approved visual screen along portions of
                  access routes where screening would prevent excessive light spill that
                  could provide a continuous surface impenetrable by light. The visual
                  barriers shall not be installed within 300 feet of CTS and GGS upland
                  habitats. The Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall assess the locations of the identified access roads
                  prior to the installation of any visual barriers.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-191"
              data-scope="commitments"
              data-entity="speed limits "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.11</span>
                  <span class="bcn-sr__row-title">Speed Limits</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-192"
              data-scope="commitments"
              data-entity="wildlife road-crossing structures "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.12</span>
                  <span class="bcn-sr__row-title">Wildlife Road-Crossing Structures</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-193"
              data-scope="commitments"
              data-entity="precipitation work limit "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.13</span>
                  <span class="bcn-sr__row-title">Precipitation Work Limit</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … vernal pools, Permittee shall restrict Covered Activities to periods
                  of low rainfall (less than 0.25 inches per 24-hour period) and periods
                  of dry weather (with less than a 30% chance of rain). Permittee shall
                  initiate all erosion control measures prior to all storm events.
                  Permittee and Designated <mark>Biologist</mark>(s) shall monitor the
                  National Weather Service (http://www.nws.noaa.gov) 72-hour forecast for
                  each Project Site. Such Covered Activities may continue 24 hours after
                  the rain ceases if there is 0% chance of precipitation in the 72-hour
                  forecast. The Designated <mark>Biologist</mark>(s) shall survey each
                  Project construction site before Covered Activities resume, using the
                  CDFW-approved preconstruction survey protocol (Condition of Approval
                  11.38). Weather forecasts shall be documented upon request by CDFW. This
                  condition will not apply to Covered Activities inside enclosed str …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-194"
              data-scope="commitments"
              data-entity="daily entrapment inspections "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.14</span>
                  <span class="bcn-sr__row-title">Daily Entrapment Inspections</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  All construction equipment, or construction materials left overnight in
                  areas that may be occupied by wildlife shall be inspected by the
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) prior
                  to initiation of any Covered Activity within a Project construction
                  site, to prevent inadvertent entrapment of Covered Species during
                  construction.
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall ensure that all excavated areas, steepwalled holes, pumps, or
                  trenches more than six inches deep, with the exception of shaft
                  excavation, will be covered at the close of each working day with
                  plywood or similar material and shall ensure the cover is sealed with
                  rock bags or other methods to prevent animals from reentering or
                  provided with one or more escape ramps constructed of earth fill or
                  wooden planks at no more than a 30° angle. Prior to shaft construction,
                  the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall ensure that vertical shafts have suitable exclusion barriers
                  placed around the shaft opening to prohibit entry of Covered Species
                  into the shaft. Excavated pits shall be inspected by the Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) prior to
                  initiation of any Covered Activities each day. Before such holes or
                  trenches are filled, the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall thoroughly inspect them for trapped animals
                  and be present when holes or trenches are being covered or filled to
                  ensure there is no entrapment of Covered Species and that the cover is
                  secure. If a Covered Species or other animal is encountered in excavated
                  pits, holes, or trenches during Covered Activities, Permittee shall
                  divert Covered Activities away from the Covered Species until Project
                  personnel contact the Designated <mark>Biologist</mark>(s). The
                  Designated <mark>Biologist</mark>(s) shall relocate the animal
                  consistent with Conditions of Approval in this ITP and determine any
                  further actions to be taken.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-195"
              data-scope="commitments"
              data-entity="pipes, culverts, and other materials inspections "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.15</span>
                  <span class="bcn-sr__row-title"
                    >Pipes, Culverts, and Other Materials Inspections</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … stored in the open have the potential to attract, injure, or entrap
                  Covered Species. All pipes, culverts, and similar structures with a
                  diameter of 0.25 inches or greater that are stored in Project
                  construction sites for one or more overnight periods shall be thoroughly
                  inspected by the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) for Covered Species prior to the initiation of any Covered
                  Activity and when these materials are subsequently buried, capped, or
                  otherwise used or moved in any way.
                </p>
                <p>
                  Debris piles shall be kept to a minimum and removed regularly after
                  thorough inspection by the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s).
                </p>
                <p>
                  If Project personnel detect Covered Species or other wildlife within a
                  pipe, culvert, debris pile, or similar structure, they shall notify the
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) and
                  allow the animal to safely escape or be relocated by the Designated
                  <mark>Biologist</mark>(s) outside of the Project construction site
                  before moving, capping, burying, or utilizing the structure.
                </p>
                <p>
                  If necessary, under the direct supervision of the Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s), Project
                  personnel may move a structure up to one time to isolate it from Project
                  construction activities until the Covered Species moves from the
                  structure on its own volition or for the Designated
                  <mark>Biologist</mark>(s) to relocate the individual outside of the
                  Project construction site. Once the Covered Species has moved or been
                  relocated from the moved structure, Project personnel under direct
                  supervision of the Designated <mark>Biologist</mark>(s) or Biological
                  Monitor(s) shall securely cap the ends of the structure to prevent the
                  Covered Species from entering, immediately after inspection.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-196"
              data-scope="commitments"
              data-entity="disposal of spoils, reusable tunnel material, and dredged material "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.16</span>
                  <span class="bcn-sr__row-title"
                    >Disposal of Spoils, Reusable Tunnel Material, and Dredged
                    Material</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-197"
              data-scope="commitments"
              data-entity="electrical power line support placement "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.17</span>
                  <span class="bcn-sr__row-title"
                    >Electrical Power Line Support Placement</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-198"
              data-scope="commitments"
              data-entity="vegetation management "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.18</span>
                  <span class="bcn-sr__row-title">Vegetation Management</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … lexes shall be subject to CDFW written approval once site-specific
                  Covered Species surveys have been conducted. Where permitted, Permittee
                  shall set mower blade heights no lower than four inches, and no lower
                  than six inches in suitable GGS habitat, unless otherwise approved by
                  CDFW. The Designated <mark>Biologist</mark>(s) and/or Biological Monitor
                  shall be on site during vegetation management activities to monitor for
                  any fossorial Covered Species. Permittee shall ensure, to the extent
                  feasible that mowing only occurs when Covered Species are dormant or
                  less active on the surface and during dry conditions (no rai …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-199"
              data-scope="commitments"
              data-entity="prevention of spread of invasive species "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.19</span>
                  <span class="bcn-sr__row-title"
                    >Prevention of Spread of Invasive Species</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) qualified to do botanical
                  surveys and approved by CDFW shall submit the sampling methodology to
                  CDFW as part of the appropriate Phase Authorization Package (Condition
                  of Approval 6.1 and 6.2).
                </p>
                <p>
                  … hall ensure that baseline sampling is conducted consistent with the
                  CDFW approved sampling methodology prior to the start of any Covered
                  Activity within the Project construction site. Permittee shall ensure
                  the same CDFW approved sampling methodology is conducted annually
                  thereafter by a Designated <mark>Biologist</mark>(s). The pre-Project
                  baseline condition survey results and subsequent annual surveying shall
                  be utilized by the Permittee in the Invasive Plan Species Monitoring,
                  Management, and Control Plan (IPSMMCP Condition of Approval 11.19.1) and
                  reporting provided to CDFW in the Annual Status Report (Conditio …
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall oversee invasive terrestrial and aquatic plant species management
                  utilizing best management practices such as hand removal in seeding and
                  planting areas during vegetation restoration (see Condition of Approval
                  12.3.3). The Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall ensure that weed removal does not result in damage to
                  root systems of the installed plants. Woody (tree or shrub) invasive
                  plant species may require more aggressive methods to remove the roots,
                  and the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall employ techniques such as hand tools and small
                  mechanical equipment such as hand trowels or garden spades for this
                  purpose.
                </p>
                <p class="bcn-sr__row-more">+ 5 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-200"
              data-scope="commitments"
              data-entity="hazards to covered species "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.20</span>
                  <span class="bcn-sr__row-title">Hazards to Covered Species</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-201"
              data-scope="commitments"
              data-entity="hazardous materials management plans "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.21</span>
                  <span class="bcn-sr__row-title"
                    >Hazardous Materials Management Plans</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-202"
              data-scope="commitments"
              data-entity="spill prevention, control, and countermeasure plans "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.22</span>
                  <span class="bcn-sr__row-title"
                    >Spill Prevention, Control, and Countermeasure Plans</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-203"
              data-scope="commitments"
              data-entity="groundwater testing and monitoring plan "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.23</span>
                  <span class="bcn-sr__row-title"
                    >Groundwater Testing and Monitoring Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-204"
              data-scope="commitments"
              data-entity="detection of underground and natural gas wells "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.24</span>
                  <span class="bcn-sr__row-title"
                    >Detection of Underground and Natural Gas Wells</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-205"
              data-scope="commitments"
              data-entity="stormwater pollution prevention plans "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.25</span>
                  <span class="bcn-sr__row-title"
                    >Stormwater Pollution Prevention Plans</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-206"
              data-scope="commitments"
              data-entity="erosion and sediment control plans "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.26</span>
                  <span class="bcn-sr__row-title"
                    >Erosion and Sediment Control Plans</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … tion of Approval 6.2) for CDFW’s review and confirmation of
                  consistency with this ITP prior to initiating Covered Activities.
                  Permittee shall implement erosion and sediment control measures during
                  Covered Activities to facilitate visibility during monitoring of the
                  Covered Species by the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s). Each site-specific plan shall take into account
                  conditions such as proximity to surface water, erosion potential,
                  drainage, etc. The erosion and sediment control plan(s) shall include
                  best management practices such as: physical erosion control
                  stabilization (see Con …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-207"
              data-scope="commitments"
              data-entity="erosion control stabilization prohibitions "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.27</span>
                  <span class="bcn-sr__row-title"
                    >Erosion Control Stabilization Prohibitions</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … red Activities within a construction site that may cause the
                  introduction of sediments into a waterway if the erosion control
                  measures applicable to that construction site cannot be completed prior
                  to the onset of a rain event (rainfall exceeding 0.25 inches during a
                  24-hour period). The Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall monitor erosion control measures before,
                  during, and after each rain event, and Permittee shall repair and/or
                  replace ineffective measures immediately.
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-208"
              data-scope="commitments"
              data-entity="monofilament netting "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.28</span>
                  <span class="bcn-sr__row-title">Monofilament Netting</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-209"
              data-scope="commitments"
              data-entity="fugitive dust control "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.29</span>
                  <span class="bcn-sr__row-title">Fugitive Dust Control</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … Monitoring Plan and submit the Plan to CDFW as part of the appropriate
                  Construction Phase Authorization Package(s) (Condition of Approval 6.2).
                  Permittee shall implement dust control measures during Covered
                  Activities to facilitate visibility for monitoring of the Covered
                  Species by the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s). Fugitive dust control measures shall address: applying water
                  to all exposed surfaces such as soil piles, graded areas, excavation
                  areas, demolition sites, unpaved parking areas, staging areas, and
                  access roads to prevent visible dust from leaving construction sites; …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-210"
              data-scope="commitments"
              data-entity="construction mercury management and monitoring plan. "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.30</span>
                  <span class="bcn-sr__row-title"
                    >Construction Mercury Management and Monitoring Plan.</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-211"
              data-scope="commitments"
              data-entity="in-water work windows "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.31</span>
                  <span class="bcn-sr__row-title">In-Water Work Windows</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-212"
              data-scope="commitments"
              data-entity="daily in-water work restriction "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.32</span>
                  <span class="bcn-sr__row-title">Daily In-Water Work Restriction</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-213"
              data-scope="commitments"
              data-entity="underwater sound abatement plan "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.33</span>
                  <span class="bcn-sr__row-title">Underwater Sound Abatement Plan</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-214"
              data-scope="commitments"
              data-entity="pile driving plan "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.34</span>
                  <span class="bcn-sr__row-title">Pile Driving Plan</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-215"
              data-scope="commitments"
              data-entity="fish salvage plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.35</span>
                  <span class="bcn-sr__row-title">Fish Salvage Plan</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Obligation for the Designated Representative or Designated Fisheries
                  <mark>Biologist</mark>(s) to notify CDFW at least seven days prior to
                  site-specific dewatering activities that are expected to require fish
                  salvage or prior to an anticipated activity that could result in
                  isolating fish, such as installation of a cofferdam.
                </p>
                <p>
                  Requirement that each fish salvage team conducting fish salvage efforts
                  have at least one Designated Fisheries <mark>Biologist</mark>. Safety
                  training for fish rescue workers shall be provided prior to accessing
                  the work site.
                </p>
                <p>
                  … always precede the use of electrofishing equipment. Require any
                  electrofishing to be conducted in accordance with NMFS electrofishing
                  guidelines.37 One or two 3- to 4-person teams shall conduct
                  electrofishing, with each team having an electrofishing unit operator
                  and two or The Designated Fisheries <mark>Biologist</mark>(s) shall
                  place dead Covered Fish Species in sealed plastic bags with labels
                  indicating species, location, date, and time of collection, store them
                  on ice, freeze as soon as possible, and provide the frozen specimens to
                  CDFW.
                </p>
                <p class="bcn-sr__row-more">+ 26 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-216"
              data-scope="commitments"
              data-entity="barge operations plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.36</span>
                  <span class="bcn-sr__row-title">Barge Operations Plan</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) or Fisheries
                  <mark>Biologist</mark>(s) shall conduct visual inspections for invasive
                  aquatic species on all in-water equipment, such as barges and small work
                  boats, prior to equipment deployment into a waterway. If the Designated
                  <mark>Biologist</mark>(s) or Fisheries <mark>Biologist</mark>(s) detects
                  the presence of invasive aquatic species on equipment, the Permittee
                  shall report the presence to CDFW within 24 hours and follow quarantine
                  guidelines as provided by CDFW prior to the equipment entering a
                  waterway.
                </p>
                <p>
                  Designate a Fisheries <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) who shall fulfill the following requirements:
                </p>
                <p class="bcn-sr__row-more">+ 19 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-217"
              data-scope="commitments"
              data-entity="dewatering plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.37</span>
                  <span class="bcn-sr__row-title">Dewatering Plan</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … eries Service (1997). Fish screening criteria for anadromous
                  salmonids. National Marine Fisheries Service, Southwest Region. January
                  1997.] During dewatering activities at the north Delta intakes or during
                  any other dewatering activity that could potentially impact Covered Fish
                  Species, a Fisheries <mark>Biologist</mark>(s) shall remain onsite to
                  observe the process and remove Covered Species that were not
                  successfully salvaged prior to dewatering (see Condition of Approval
                  11.35). If Covered Fish Species salvage operations cannot be conducted
                  effectively or safely by the Fisheries <mark>Biologist</mark>(s), it may
                  be necessary to begin the dewatering process prior to salvage. During
                  the dewatering process, a Fisheries <mark>Biologist</mark>(s) shall be
                  onsite to implement Covered Species salvage during dewatering with the
                  aim of minimizing the number of Covered Species that become trapped in
                  isolated areas or impinged on pump screen(s) or isolation nets. If the
                  Fisheries <mark>Biologist</mark>(s) determines the proposed methods are
                  found to be insufficient to avoid undue losses of Covered Fish Species,
                  they shall implement alternative salvage methods to minimize impacts to
                  Covered Fish Species. Permittee shall temporarily stop dewatering if the
                  Fisheries <mark>Biologist</mark>(s) or CDFW personnel determine that
                  water levels may drop too quickly to allow successful fish salvage. Upon
                  dewatering to water depths at which neither electrofishing nor seining
                  can effectively occur (e.g., less than 3 inches [0.1 meter]), the
                  Fisheries <mark>Biologist</mark>(s) shall inspect the dewatered areas to
                  locate any remaining fish and collect them by dip net. The Fisheries
                  <mark>Biologist</mark>(s) shall notify Permittee and CDFW within one
                  business day when the fish salvage has been completed and construction
                  can recommence.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-218"
              data-scope="commitments"
              data-entity="preconstruction survey protocols "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.38</span>
                  <span class="bcn-sr__row-title">Preconstruction Survey Protocols</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-219"
              data-scope="commitments"
              data-entity="cts avoidance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.39</span>
                  <span class="bcn-sr__row-title">CTS Avoidance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … ble to conduct Covered Activities in already disturbed areas,
                  Permittee shall confine ground disturbance and habitat removal to the
                  most minimal area necessary as identified in the appropriate Phase
                  Authorization Package (Condition of Approval 6.2). All Project personnel
                  shall inform the Designated <mark>Biologist</mark>(s) if they encounter
                  CTS, or a salamander resembling CTS, within the Project construction
                  site or 75 feet beyond the Project construction site, or on access roads
                  during, all phases of Covered Activities. If Project personnel observe
                  CTS, or a salamander resembling CTS, retreating into an underground
                  burrow, crack or crevice, or under woody debris for refuge within a
                  construction site, Permittee shall prohibit Covered Activities within a
                  75-foot radius of that refuge (no-activity buffer) until the Designated
                  <mark>Biologist</mark>(s) is contacted and on-site. If the Covered
                  Activities cannot avoid the refuge, only the Designated
                  <mark>Biologist</mark>(s) shall excavate, expose, and relocate the CTS
                  in accordance with Condition of Approval 11.51.
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-220"
              data-scope="commitments"
              data-entity="cts breeding habitat avoidance near conserved lands "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.40</span>
                  <span class="bcn-sr__row-title"
                    >CTS Breeding Habitat Avoidance Near Conserved Lands</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Breeding Habitat Avoidance Near Conserved Lands. If the Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) identifies
                  suitable aquatic breeding habitat within the Project Area south of Byron
                  Highway, Permittee shall demarcate a no-activity buffer of at least 300
                  feet around the suitable aquatic breeding habitat and avoid Covered
                  Activities within the suitable aquatic bree …
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-221"
              data-scope="commitments"
              data-entity="cts preconstruction activities, scada and transmission line construction and maintenance, access road construction and maintenance activities "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.41</span>
                  <span class="bcn-sr__row-title"
                    >CTS Preconstruction Activities, SCADA and Transmission Line
                    Construction and Maintenance, Access Road Construction and Maintenance
                    Activities</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall be present during selection of the preconstruction activity sites,
                  construction sites, and maintenance areas, ingress and egress to these
                  sites, and during set-up activities to guide workers to avoid visible
                  burrows, cracks, crevices, vegetation, or other suita …
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall flag potentially occupied burrows to be avoided by a 75-foot
                  radius no-activity buffer or shall designate and flag areas within the
                  site and ingress/egress routes that avoid potentially occupied burrows.
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall conduct daily surveys prior to the start of Covered Activities
                  each day to check for burrows within the work site. The Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall either flag
                  burrows to be avoided by a 75-foot radius no-activity buffer or
                  designate and flag work sites, staging areas, and ingress/egress routes
                  that avoid potentially occupied burrows.
                </p>
                <p class="bcn-sr__row-more">+ 4 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-222"
              data-scope="commitments"
              data-entity="cts surveys "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.42</span>
                  <span class="bcn-sr__row-title">CTS Surveys</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall conduct CTS surveys following CDFW approved protocols (Condition
                  of Approval 11.38) within the boundaries of each Project site plus a
                  surrounding 75-foot buffer zone following the [USFWS] 2003 Interim
                  Guidance on Site Assessment and Field Surveys for Determinin …
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological monitor(s)
                  shall complete walking surveys of the Project construction site for CTS
                  before the start of any vegetation clearing or ground disturbing Covered
                  Activities (e.g., soil deposition areas; preconstruction activities such
                  as field investigations; SCADA, transmission line …
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall follow earthmoving equipment to look for CTS during initial site
                  grading. All ruts and holes near root structures, foundations,
                  abutments, etc. shall be inspected for CTS prior to and during
                  excavation or removal. Permittee may only modify the 75-foot boundary …
                </p>
                <p>
                  If the Designated <mark>Biologist</mark>(s), Biological Monitor(s), or
                  any Project personnel discover CTS, the Designated
                  <mark>Biologist</mark>(s) shall move the animal to a safe location
                  nearby following the CTS Relocation Plan required by Condition of
                  Approval 11.51.
                </p>
                <p class="bcn-sr__row-more">+ 9 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-223"
              data-scope="commitments"
              data-entity="cts exclusion barrier installation and maintenance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.43</span>
                  <span class="bcn-sr__row-title"
                    >CTS Exclusion Barrier Installation and Maintenance</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … ll submit site-specific CTS exclusion barrier design and location
                  details to CDFW as part of the appropriate Construction Phase
                  Authorization Package based on preconstruction survey results (see
                  Condition of Approval 11.42). Prior to initiation of ground disturbing
                  Covered Activities the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall conduct a CTS survey consistent with
                  Condition of Approval 11.38 and within 24 hours (1 calendar day) after
                  completion of the CTS survey(s) and any necessary burrow excavation(s)
                  (see Conditions of Approval 11.42 and 11.49), Permittee shall install a
                  high visib …
                </p>
                <p>
                  Permittee shall place the barrier along the perimeter of the
                  construction footprint for any site within or 300 feet of any suitable
                  CTS upland or aquatic habitat, or as approved by CDFW. The barrier shall
                  be maintained by the Permittee throughout all construction activities.
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall inspect the area prior to and during installation of exclusion
                  fencing, including during trenching, vehicular access, erecting fencing
                  material, installing posts, and any other activity requiring vehicle or
                  foot traffic in suitable habitat. If CTS or new burrows are discovered
                  during installation of the exclusion barrier, the Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall have the
                  authority to stop construction until new burrows are checked for
                  occupancy, any CTS are relocated by the Designated
                  <mark>Biologist</mark>(s) (see Condition of Approval 11.51), and
                  unoccupied burrows are blocked by the Designated
                  <mark>Biologist</mark>(s) (see Condition of Approval 11.49). The
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
                  continue to monitor the fencing daily before and during construction and
                  maintenance activities, prior to the start of the rainy season, and
                  during and after rain events (rainfall predicted to exceed 0.25 inches
                  during a 24-hour period) for the duration of Covered Activities in the
                  Project construction site to ensure it is functional and without
                  defects, the fencing material is taut, and the bottom edge of the
                  fencing material remains buried. If a defect is identified, the
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
                  have authority to stop Covered Activities within 300 feet of the defect.
                  Permittee shall maintain and repair the barrier immediately (within 24
                  hours) to ensure that it is functional and without defects. After the
                  barrier is repaired, the Designated <mark>Biologist</mark>(s) shall
                  conduct a survey using CDFW-approved protocol (see Condition of Approval
                  11.38) within 24 hours (1 calendar day) prior to reinitiation of Covered
                  Activities and carefully search potential hiding spots, such as along
                  exclusion fence and in pipes, culverts, or other similar structures,
                  trenc …
                </p>
                <p>
                  … five feet of the fencing perpendicular to the exclusion barrier) to
                  redirect CTS on the outside of the barrier back to intact habitat.
                  Permittee shall instruct Project personnel to ensure access gates are
                  securely closed when not in use. If access gates are left open and
                  unattended, the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall have the authority to stop Covered Activities until CTS
                  surveys are repeated (Condition of Approval 11.42), any CTS found are
                  relocated from the construction site (Condition of Approval 11.51), and
                  additional burrows are checked and the entrances blocked by the
                  designated <mark>Biologist</mark>(s) in accordance with Condition of
                  Approval 11.49. Permittee shall not use plastic monofilament netting for
                  the exclusion barrier (see Condition of Approval 11.28).
                </p>
                <p>
                  The barrier shall remain in place until Permittee completes all Covered
                  Activities and all construction equipment has been removed from the
                  site. The Designated <mark>Biologist</mark>(s) shall relocate any CTS
                  found along the fence (see Condition of Approval 11.51). Permittee shall
                  provide refuge opportunities such as natural cover objects (such as
                  fallen logs and branches), artificial cover boards, or leaf litter along
                  or near both sides of the barrier. Permittee shall avoid da … ncing (see
                  Condition of Approval 11.49). Permittee shall maintain vegetation within
                  three feet of the edge of the exclusion barrier away from the Project
                  construction site at a height that allows visibility of CTS (four to six
                  inches, depending on the terrain and at the discretion of the Designated
                  <mark>Biologist</mark>(s)) near the barrier, using hand tools to trim or
                  remove vegetation.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-224"
              data-scope="commitments"
              data-entity="cts seasonal work window "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.44</span>
                  <span class="bcn-sr__row-title">CTS Seasonal Work Window</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … ad construction, grading, trenching, pipe and culvert installation) to
                  the period of July 15 to October 15 of each year (dry season). Covered
                  Activities may begin prior to July 15 if the location in which work will
                  occur has been dry for a minimum of 30 days prior to initiating work,
                  the Designated <mark>Biologist</mark>(s) has conducted surveys for
                  presence of CTS consistent with Condition of Approval 11.42, and
                  exclusion barriers have been installed. Any Covered Activities conducted
                  outside of the dry season (July 15 – October 15) shall be limited to
                  periods of low rainfall (less than 0.08 inches per 24-hour peri …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-225"
              data-scope="commitments"
              data-entity="cts rain forecast "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.45</span>
                  <span class="bcn-sr__row-title">CTS Rain Forecast</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  This condition applies to Covered Activities within 1.3 miles of
                  potential or known CTS breeding sites that are not encircled by CTS
                  exclusion fencing. Permittee and Designated <mark>Biologist</mark>(s)
                  and/or Biological Monitor(s) shall monitor the 72-hour weather forecasts
                  from the National Weather Service (NWS) prior to the start of work at
                  any Project construction site. Construction activities, including all
                  ground disturbance or vegetation clearing, shall cease 24 hours prior to
                  a 30 percent (30%) or greater forecast of rain from the NWS.
                  Construction activities may continue 24 hours after the rain ceases and
                  once there is a zero percent chance of precipitation in the 72-hour
                  forecast. The Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall survey each Project site before construction begins on
                  each day any rain is forecasted.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-226"
              data-scope="commitments"
              data-entity="cts time of day work restrictions "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.46</span>
                  <span class="bcn-sr__row-title">CTS Time of Day Work Restrictions</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  CTS active season is defined as the period of time during which CTS are
                  aboveground. The period is geographically and temporally variable and
                  shall be assessed by the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) on each Project construction site and on a yearly
                  basis. During the CTS active season or within 300 feet of suitable CTS
                  aquatic habitat, Permittee shall terminate all Covered Activities not
                  encircled by an exclusion barrier, including use and/or construction of
                  acce …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-227"
              data-scope="commitments"
              data-entity="cts - night work "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.47</span>
                  <span class="bcn-sr__row-title">CTS - Night Work</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … use artificial lighting unless it is needed for worker safety. Where
                  artificial lighting is required for worker safety, Permittee shall
                  follow night lighting provisions in Condition of Approval 11.8. If light
                  spillover occurs within 300 feet of suitable CTS habitat during night
                  work, the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall be present to survey CTS burrows in portions of the 75-
                  foot no-activity buffer (see Condition of Approval 11.39) to ensure CTS
                  movement is not inhibited by artificial lighting. If CTS is found
                  aboveground, the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall have the authority to stop Covered Activities until the
                  light is directed away from the burrows, the CTS individual moves out of
                  the illuminated area, or the CTS individual is relocated away from the
                  illuminated area by the Designated <mark>Biologist</mark>(s) to a
                  suitable location following the CTS Relocation Plan (Condition of
                  Approval 11.51).
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-228"
              data-scope="commitments"
              data-entity="cts - initial site clearing and monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.48</span>
                  <span class="bcn-sr__row-title"
                    >CTS - Initial Site Clearing and Monitoring</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall confine ground disturbance activities that could result
                  in take of CTS (clearance work) to the most minimal area necessary to
                  conduct Covered Activities and shall not initiate clearance work until
                  after exclusion fencing is installed (Condition of Approval 11.43). The
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
                  be onsite during clearance work and shall check potential CTS hiding
                  spots (see Condition of Approval 11.49). The Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall conduct CTS
                  surveys prior to initiation of any Covered Activity within a Project
                  construction site and regularly throughout the workday when Covered
                  Activities are occurring within CTS habitat. If clearance work is
                  conducted at night, the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall conduct an additional CTS survey no more
                  than two hours after sunrise on the subsequent day using the
                  CDFW-approved protocol (Condition of Approval 11.38), to ensure absence
                  of CTS within the Project site. If CTS is discovered inside the
                  exclusion fencing along the Project site boundary, the Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall have the
                  authority to stop Covered Activities until the CTS is relocated in
                  accordance with the CTS Relocation Plan (Condition of Approval 11.51)
                  and appropriate corrective measures are implemented to ensure CTS cannot
                  enter the construction site.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-229"
              data-scope="commitments"
              data-entity="cts - avoidance or treatment of burrows "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.49</span>
                  <span class="bcn-sr__row-title"
                    >CTS - Avoidance or Treatment of Burrows</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … rmittee shall avoid disturbing any known or potential CTS burrows
                  unless they are in an area of direct disturbance (e.g., grading or
                  excavation areas) or their location poses a risk of direct harm to CTS
                  individuals. Burrows in an area of temporary disturbance shall remain
                  intact and the Designated <mark>Biologist</mark>(s) shall monitor to
                  determine vacancy, then block the entrance by installing an object
                  approved in advance, in writing by CDFW, to prevent CTS from entering
                  and using the burrow during Covered Activities. The Designated
                  <mark>Biologist</mark>(s) shall remove the object immediately after
                  Covered Activities are completed in that work site when the Designated
                  <mark>Biologist</mark>(s) has determined that potential resumed use of
                  the burrow will not result in harm to the Covered Species. Permittee
                  shall not destroy or modify burrows that are beyond the direct footprint
                  of ground disturbance. When the Permittee cannot avoid burrows in areas
                  of direct ground disturbance or in a location posing a risk of direct
                  harm to CTS, they shall be hand excavated by the Designated
                  <mark>Biologist</mark>(s) prior to trenching activities (see condition
                  of Approval 11.49.2) and any CTS found during excavation shall be
                  relocated according to the CTS Relocation Plan (see Condition of
                  Approval 11.51). Following excavation, the Designated
                  <mark>Biologist</mark>(s) shall block holes or burrows which appear to
                  extend under exclusion fencing (see Condition of Approval 11.43) to
                  minimize CTS movement into the Project construction site. The Designated
                  <mark>Biologist</mark>(s) shall be on-site during installation of
                  fencing to relocate any CTS outside of the work area following the CTS
                  Relocation Plan (Condition of Approval 11.51).
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall identify and flag all potential burrows, soil cracks, crevices, or
                  other habitat features that are outside of the area planned for direct
                  disturbance (e.g., grading, excavation, etc.) and within the Project
                  construction site no less than five days prior to eart …
                </p>
                <p>
                  All excavation of potential refuge features, including burrows,
                  individual rocks and rock piles, and other accessible features with an
                  entrance diameter of greater than or equal to 0.5 inches, as well as
                  gopher digging piles and mounds, shall be carried out by the Designated
                  <mark>Biologist</mark>(s). Burrows shall be excavated by hand to the
                  terminus of each burrow branch or until the burrow diameter is less than
                  0.5 inches.
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-230"
              data-scope="commitments"
              data-entity="cts capture and handling "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.50</span>
                  <span class="bcn-sr__row-title">CTS Capture and Handling</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Prior to handling and relocation, the Designated
                  <mark>Biologist</mark>(s) and Biological Monitor(s) shall take
                  precautions to prevent introduction of amphibian diseases in accordance
                  with the 2003 Interim Guidance on Site Assessment and Field Surveys for
                  Determining Presence or a Negative Finding of the California Tiger
                  Salamander, 40 or the most recent guidance appro …
                </p>
                <p>
                  If any person discovers a CTS in the Project construction site that
                  cannot move away from Covered Activities on its own, only the CDFW
                  approved Designated <mark>Biologist</mark>(s) shall capture it using
                  CDFW-approved methodologies. CTS shall be handled using methodology
                  described in the Restraint and Handling of Live Amphibians41 or the most
                  up-to-date protocols approved by CDFW. The Designated
                  <mark>Biologist</mark>(s) shall capture CTS by hand, dipnet, or other
                  CDFW-approved method (see Condition of Approval 11.51) and place the CTS
                  individual in a dark, clean plastic container of suitable size (e.g.,
                  enough room so the animal can move freely). The container shall be
                  thoroughly cleaned and disinfected prior to being transported to the
                  Project site and shall be rinsed with freshwater onsite immediately
                  prior to usage unless doing so would result in injury or death of an
                  individual due to the time delay. The Designated
                  <mark>Biologist</mark>(s) shall wear sterile gloves while handling CTS
                  to prevent the spread of disease or harmful chemicals being absorbed
                  through CTS skin. The Designated <mark>Biologist</mark>(s) shall keep
                  the container moist with damp paper towels, soft foam rubber, or
                  soap-free natural or synthetic sponge. Containers used for holding or
                  transporting shall not contain any standing water. The lids of the
                  containers shall have small air holes for ventilation. Sponges shall not
                  be reused, and all other housing materials shall be disinfected between
                  occupants according to the Declining Amphibian Task Force Fieldwork Code
                  of Practice42 or the most recent guidance approved by CDFW. The
                  Designated <mark>Biologist</mark>(s) shall place only one animal in each
                  plastic container. The Designated <mark>Biologist</mark>(s) shall keep
                  individual plastic containers containing CTS in an ice chest, and place
                  ice packs in the cooler with the containers in a manner that prevents
                  direct contact of the CTS with the ice packs, to maintain a cool
                  temperature comparable to a refrigerator. The Designated
                  <mark>Biologist</mark>(s) shall keep the ice chests in a cool, dark,
                  quiet, secure place and release the CTS as soon as possible following
                  the CTS Relocation Plan (see Condition of Approval 11.51).
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-231"
              data-scope="commitments"
              data-entity="cts mortality reductions and relocation plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.51</span>
                  <span class="bcn-sr__row-title"
                    >CTS Mortality Reductions and Relocation Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … n Plan (CTS Relocation Plan) and submit it to CDFW for written
                  approval as part of the appropriate Construction Phase Authorization
                  Package (see Condition of Approval 6.2) prior to initiating Covered
                  Activities. The Relocation Plan shall include, but is not limited to,
                  the name(s) of the Designated <mark>Biologist</mark>(s) who will
                  relocate CTS individuals, methods for hand excavation of burrows that
                  cannot be avoided during Covered Activities; the methods of capture,
                  handling, and relocation; a map depicting the construction, proposed
                  relocation areas, and those areas within 1.3 miles of known or potential
                  breedi …
                </p>
                <p>
                  11.51.1 Relocation from Buffer Outside Project Construction Sites. If
                  CTS is found within a construction site or 75 feet beyond the
                  construction site (75-foot boundary), Project personnel shall notify the
                  Designated <mark>Biologist</mark>(s) immediately. If CTS is encountered
                  within a Project construction site, it is directly threatened by Covered
                  Activities, and it is unable to move to a safe area of its own volition,
                  the Designated <mark>Biologist</mark>(s) shall relocate CTS to a safe
                  area using the following parameters: (1) CTS shall not be relocated to
                  sites that already contain populations of CTS; (2) CTS shall not be
                  relocated to areas where non-native tiger salamanders or hybrids are
                  within the maximum CTS migration distance (i.e., = 1.3 mile …
                </p>
                <p>
                  11.51.2 Capture and Handling of CTS. No Project personnel shall capture
                  and/or handle CTS except the Designated <mark>Biologist</mark>(s). The
                  Designated <mark>Biologist</mark>(s) shall determine whether the CTS
                  should be captured and handled and shall relocate any CTS within the
                  Project construction site impacted by Covered Activities to an active
                  ground squirrel or other rodent burrow system or appropriate breeding
                  pond as soon as possible. If burrow density allows, the Designated
                  <mark>Biologist</mark>(s) shall only release one animal per burrow, and
                  shall not exceed the release of a maximum of three individual CTSs into
                  extensive burrows. The burrows must have moist and cool conditions to
                  support CTS. CTS may be encouraged to enter the burrows by gently
                  nudging if they do not enter on their own. If the animal repeatedly
                  walks away from the burrow, or partially enters it and then turns
                  around, the Designated <mark>Biologist</mark>(s) shall immediately
                  remove it and find another burrow as this behavior indicates the burrow
                  is inappropriate. The Designated <mark>Biologist</mark>(s) shall ensure
                  that the CTS individual disappears from view before walking away. The
                  Designated <mark>Biologist</mark>(s) shall release individual CTSs one
                  at a time rather than as a group.
                </p>
                <p>
                  11.51.3 Release of Relocated CTS. Permittee’s Designated Representative
                  or the Designated <mark>Biologist</mark>(s) shall notify CDFW within one
                  business day each time CTS is relocated. Notification to CDFW shall be
                  via telephone and email, followed by a written incident report.
                  Notifications shall include the date, time, location, and circumstances
                  of the incident. The written incident report shall also be i …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-232"
              data-scope="commitments"
              data-entity="cts - notification of cts take or injury "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.52</span>
                  <span class="bcn-sr__row-title"
                    >CTS - Notification of CTS Take or Injury</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall immediately notify the Designated
                  <mark>Biologist</mark>(s) if a CTS is injured or killed by a Covered
                  Activity, or if a CTS is otherwise found dead or injured within the
                  vicinity of the Project preconstruction activity, construction site, or
                  maintenance area. Live injured CTS shall be handled and assessed
                  according to the Restraint and Handling of Live Amphibians43 or the most
                  recent CDFWapproved guidance for handling CTS. If an injured CTS is
                  found during Covered Activities, the individual shall be evaluated by
                  the Designated <mark>Biologist</mark>(s) who shall immediately take the
                  injured CTS to a CDFW-approved wildlife rehabilitation or veterinary
                  facility identified in the CTS Relocation Plan (see Condition of
                  Approval 11.51) and contact the CDFW Representative, via email and
                  telephone, within one business day to discuss the next steps. The
                  notification to CDFW’s Representative shall include information
                  regarding the location, species, number of animals taken or injured, the
                  name of the facility where the animal was taken, and the ITP tracking
                  number. Following discovery of the injured CTS the Designated
                  <mark>Biologist</mark>(s) shall conduct the following steps:
                </p>
                <p>
                  11.52.1 Minor Injury. If the injury is minor or healing and the
                  salamander is likely to survive as determined by the Designated
                  <mark>Biologist</mark>(s), the salamander shall be released immediately
                  in accordance with the CTS Relocation Plan (Condition of Approval
                  11.51).
                </p>
                <p>
                  11.52.2 Major or Serious Injuries. If it is determined that the CTS
                  individual has major or serious injuries as a result of Project-related
                  activities, the Designated <mark>Biologist</mark>(s) shall immediately
                  take it to the nearest CDFW-approved wildlife rehabilitation or
                  veterinary facility. If taken into captivity, the individual shall
                  remain in captivity and not be released into the wild unless it has been
                  kept in quarantine and the release is authorized by CDFW and USFWS.
                  Permit …
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-233"
              data-scope="commitments"
              data-entity="cts - invasive species "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.53</span>
                  <span class="bcn-sr__row-title">CTS - Invasive Species</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-234"
              data-scope="commitments"
              data-entity="ggs - establishment of environmentally sensitive areas (esas). "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.54</span>
                  <span class="bcn-sr__row-title"
                    >GGS - Establishment of Environmentally Sensitive Areas (ESAs).</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … mittee shall establish Environmentally Sensitive Areas (ESAs) in each
                  Project construction site to minimize disturbance of GGS habitat from
                  construction-related activities to the greatest extent practicable.
                  Permittee shall erect ESA fencing around suitable GGS habitat as
                  directed by the Designated <mark>Biologist</mark>(s). ESAs shall be
                  demarcated by tying high visibility poly wire to stakes placed every six
                  feet along the ESA boundary. The high visibility poly wire shall be
                  raised at least four feet above grade and marked with high visibility
                  flagging or markers. Permittee shall also post and maintain signs iden …
                </p>
                <p>
                  Where agricultural ditches or other suitable aquatic habitat can be
                  avoided and delineated, Permittee shall clearly mark the aquatic habitat
                  by surrounding it with poly wire 200 feet from the edge of the suitable
                  aquatic habitat. The Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall identify and flag all potential burrows
                  within the Project construction site that can be avoided. In addition,
                  all potential GGS habitat that can be reasonably avoided during
                  construction activities shall be identified as ESAs and shall be marked
                  by the Designated <mark>Biologist</mark>(s) and/or the Biological
                  Monitor(s). All construction personnel shall avoid ESAs. The Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall inspect the
                  stakes and high visibility poly wire before the start of each workday
                  during ground disturbance activities, and Permittee shall maintain the
                  stakes and poly wire until completion of Covered Activities within a
                  Project construction site. Permittee sh …
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-235"
              data-scope="commitments"
              data-entity="ggs avoidance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.55</span>
                  <span class="bcn-sr__row-title">GGS Avoidance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall:
                </p>
                <p>
                  Permittee shall implement dust control measures during Covered
                  Activities to facilitate visibility for monitoring of GGS by the
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s).
                </p>
                <p>
                  Project personnel shall inform the Designated <mark>Biologist</mark>(s)
                  and/or Biological Monitor(s) if they encounter GGS, or any snake
                  resembling GGS, within or near the Project construction site during all
                  phases of Covered Activities.
                </p>
                <p>
                  If Project personnel observe GGS, or any snake resembling GGS,
                  retreating into an underground burrow, crack, or crevice, including rock
                  riprap for refuge within a Project construction site, Permittee shall
                  prohibit Covered Activities within a 50-foot radius of the refuge until
                  the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) is
                  contacted and is on-site.
                </p>
                <p class="bcn-sr__row-more">+ 16 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-236"
              data-scope="commitments"
              data-entity="ggs surveys "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.56</span>
                  <span class="bcn-sr__row-title">GGS Surveys</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  11.56 GGS Surveys. The Designated <mark>Biologist</mark>(s) with
                  assistance (if needed) from the Biological Monitor(s) shall conduct CDFW
                  approved preconstruction surveys (Condition of Approval 11.38) within
                  the boundaries of each Project site and include a three-foot buffer zone
                  around the Project site, prior to initiation of any Covered Activities,
                  inc …
                </p>
                <p>
                  If a GGS is discovered, the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall have the authority to delay installation of
                  the exclusion barrier until the GGS leaves the Project construction site
                  or three-foot boundary on its own volition or is needed to be removed
                  from the construction site by the Designated <mark>Biologist</mark>(s)
                  for its own safety. The Designated <mark>Biologist</mark>(s) shall
                  relocate removed GGS in accordance with Condition of Approval 11.67).
                </p>
                <p>
                  Within the Project construction site and three-foot boundary, the
                  Designated <mark>Biologist</mark>(s) with assistance (if needed) from
                  the Biological Monitor(s) shall investigate all burrows within suitable
                  upland habitat outside of established ESAs using a CDFW-approved
                  methodology (see Condition of Approval 11.62.2) to determine whether the
                  burrows are occupied by GGS. The Designated <mark>Biologist</mark>(s)
                  shall monitor to determine vacancy, then block unoccupied burrows (e.g.,
                  less than three feet long with dead ends) by installing an object
                  approved in advance, in writing by CDFW, to prevent GGS from entering
                  and using the burrow during Covered Activities. The Designated
                  <mark>Biologist</mark>(s) shall remove the object immediately after
                  Covered Activities are completed in that work site when they have
                  determined that potential resumed use of the burrow will not result in
                  harm to GGS. The Designated <mark>Biologist</mark>(s) shall attempt to
                  expose and identify any snakes found in burrows and relocate any
                  individuals who do not move out of harm’s way on their own in accordance
                  with the GGS Relocation Plan (Condition of Approval 11.67). Permittee
                  shall avoid disturbing any known or potentially occupied burrows unless
                  … m to GGS. Permittee shall not destroy or modify burrows or exclude GGS
                  from burrows that are beyond the direct footprint of ground disturbance.
                  Where the Permittee cannot avoid burrows (e.g., within footprint of
                  ground disturbing activities), they shall be carefully hand excavated by
                  the Designated <mark>Biologist</mark> prior to trenching activities
                  consistent with Condition of Approval 11.62.2 and any GGS found during
                  excavation that does not leave of their own volition shall be relocated
                  according to the GGS Relocation Plan (see Condition of Approval 11.67).
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-237"
              data-scope="commitments"
              data-entity="ggs - mowing "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.57</span>
                  <span class="bcn-sr__row-title">GGS - Mowing</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … lished ESAs, avoidable burrows, burrow complexes, and suitable refugia
                  to the greatest extent practicable. If Covered Activities require the
                  removal or maintenance of vegetation, Permittee shall limit mowing to
                  occur only between July 1 to September 30 in suitable GGS habitat and
                  after a Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) has performed clearance surveys to ensure absence of GGS.
                  Within 24 hours (one calendar day)following the clearance survey (see
                  Condition of Approval 11.56) in Project construction sites or Project
                  maintenance areas with high grass cover or vegetation, Permittee shal …
                  where feasible. Permittee shall use light mowing equipment limited to
                  string trimers (e.g., weed whackers) that will not crush burrows or
                  impact the ground. Permittee shall maintain vegetation at a minimum of
                  six inches to avoid injuring GGS and to retain grassy cover and that
                  allows the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) to see and survey for snakes and burrows. The Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall be onsite
                  during all mowing and trenching activities. The Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall walk in
                  front of the mower and monitor for GGS emerging from the vegetation or
                  burrows. If GGS is found, Permittee shall cease mowing until GGS moves
                  out of the way on its own or, if needed, is relocated by the Designated
                  <mark>Biologist</mark>(s) (see Condition of Approval 11.67).
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-238"
              data-scope="commitments"
              data-entity="ggs - seasonal work window "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.58</span>
                  <span class="bcn-sr__row-title">GGS - Seasonal Work Window</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-239"
              data-scope="commitments"
              data-entity="ggs - seasonal work restriction exception "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.59</span>
                  <span class="bcn-sr__row-title"
                    >GGS - Seasonal Work Restriction Exception</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-240"
              data-scope="commitments"
              data-entity="ggs - channel management and seasonal work restriction "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.60</span>
                  <span class="bcn-sr__row-title"
                    >GGS - Channel Management and Seasonal Work Restriction</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … lated sediments, acoustic monitoring, and aquatic vegetation removal
                  in canals or other areas where GGS may be overwintering within 200 feet
                  of the activity, until CDFW-approved surveys (Condition of Approval
                  11.38) have occurred and absence of overwintering GGS has been confirmed
                  by the Designated <mark>Biologist</mark>(s). Permittee shall confine all
                  excavation/dredging to the channel bed (below the high-water mark). If
                  in-channel work needs to occur within the GGS active season, Permittee
                  shall request written approval by CDFW and have the Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) survey following
                  CDFW-approved protocols (Condition of Approval 11.38) for GGS prior to
                  initiating work and monitor throughout the duration of Covered
                  Activities for GGS.
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-241"
              data-scope="commitments"
              data-entity="dewatered ggs aquatic habitat "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.61</span>
                  <span class="bcn-sr__row-title">Dewatered GGS Aquatic Habitat</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … n suitable GGS aquatic habitat, Permittee shall dewater the habitat
                  within the Project construction site prior to starting the Covered
                  Activity. Permittee shall limit dewatering to the immediate Project
                  construction site and shall ensure that alternative aquatic habitat is
                  available. The Designated <mark>Biologist</mark>(s) shall be on site
                  during all dewatering activities, particularly when dewatering begins
                  and when the level of water reaches the level of the intake, to salvage
                  and relocate any GGS that cannot swim away from the suction cups and
                  escape on its own. If Project personnel see GGS at the screen during
                  dewatering, they shall shut down the pump and contact the Designated
                  <mark>Biologist</mark>(s) to relocate the snake (see Condition of
                  Approval 11.67).
                </p>
                <p>
                  Permittee shall ensure that habitat remains dry for at least 15
                  consecutive days after April 15 prior to excavating or filling aquatic
                  habitat. Permittee shall limit dewatering to April 15 – October 1 unless
                  otherwise approved by CDFW. Following dewatering of aquatic habitat, the
                  Designated <mark>Biologist</mark>(s) shall survey for GGS in all
                  suitable GGS aquatic or upland habitat within the Project construction
                  site that is not within the established ESAs. If GGS is observed, the
                  Designated <mark>Biologist</mark>(s) shall follow the GGS Relocation
                  Plan (Condition of Approval 11.67).
                </p>
                <p>
                  Permittee and the Designated <mark>Biologist</mark>(s) shall obtain
                  written approval from CDFW for any deviation from this measure and shall
                  coordinate alternative actions with CDFW. Once habitat is deemed free of
                  potential GGS, exclusion fencing shall be installed around the Project
                  construction site (see Condition of Approval 11.62) so no snakes o …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-242"
              data-scope="commitments"
              data-entity="ggs exclusion barrier installation and maintenance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.62</span>
                  <span class="bcn-sr__row-title"
                    >GGS Exclusion Barrier Installation and Maintenance</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall inspect the area prior to and during installation, including
                  trenching, vehicular access, erecting fencing material, installing
                  stakes, and any other activity requiring vehicle or foot traffic in
                  suitable habitat.
                </p>
                <p>
                  After installation, the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall inspect the barrier daily and during and
                  after rain events (rainfall predicted to exceed 0.25 inches during a
                  24-hour period).
                </p>
                <p>
                  … ghout the entire duration of Covered Activities and repair it
                  immediately to ensure that it is functional and without defects, that
                  fencing material is taut so snakes are unable to climb over, and that
                  the bottom edge of the fencing material remains buried. If a defect is
                  identified, the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall have authority to stop Covered Activities within 50
                  feet of the defect. After the barrier is repaired, the Designated
                  <mark>Biologist</mark>(s) shall conduct a survey using CDFW-approved
                  protocol (see Condition of Approval 11.38) within 24 hours (one calendar
                  day) prior to re-initiation of Covered Activities and carefully search
                  within and along exclusion fencing and in pipes, culverts, or other
                  potential places of hiding and entrapment (see Conditions of Approval
                  11.14 and 11.15) and beneath vehicles and equipment immediately before
                  they are moved (see Condition of Approval 9.12). The Designated
                  <mark>Biologist</mark>(s) shall capture and relocate any GGS found that
                  does not safely leave the Project construction site on its own in
                  accordance with Condition of Approval 11.67.
                </p>
                <p>
                  … ncing design and locations as part of the appropriate Construction
                  Phase Authorization Package. Permittee shall avoid damage to burrows to
                  the maximum extent possible during installation of the exclusion
                  fencing. When Permittee cannot avoid burrows, burrows shall be hand
                  excavated by the Designated <mark>Biologist</mark>(s) prior to trenching
                  activities. The Designated <mark>Biologist</mark>(s) with assistance (if
                  needed) from the Biological Monitor(s) shall watch for burrows on either
                  side of the barrier during trenching. If GGS are discovered during
                  barrier construction, the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall have the authority to stop barrier
                  construction until the GGS leaves the construction site on its own
                  volition, is relocated in accordance with Condition of Approval 11.67,
                  and unoccupied burrows that appear to extend under the fencing are
                  blocked or excavated by the Designated <mark>Biologist</mark> (see
                  Condition of Approval 11.62.2).
                </p>
                <p class="bcn-sr__row-more">+ 6 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-243"
              data-scope="commitments"
              data-entity="ggs - initial site clearing and monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.63</span>
                  <span class="bcn-sr__row-title"
                    >GGS - Initial Site Clearing and Monitoring</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  11.63 Initial Site Clearing and Monitoring. Permittee shall confine
                  ground disturbance that could result in take of GGS (clearance work) to
                  the most minimal area necessary to conduct Covered Activities. The
                  Designated <mark>Biologist</mark>(s) with assistance (if needed) from
                  Biological Monitor(s) shall be onsite during initial ground disturbing
                  activities to assess the Project construction site each morning before
                  construction work begins. The Designated <mark>Biologist</mark>(s)
                  and/or Biological Monitor(s) shall monitor burrows that have not been
                  blocked or excavated for emerging GGS. The Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall also check
                  any potential hiding places in the Project construction site, such as
                  cracks, crevices, or cavities; stockpiles that have been left for more
                  than 24 hours where cracks or crevices may have formed; and under or
                  around vehicles and equipment before they are moved. If GGS is
                  discovered, the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall have the authority to delay construction activities
                  until the GGS leaves the construction site of its own volition or is
                  removed from the construction site by the Designated
                  <mark>Biologist</mark>(s) in accordance with Condition of Approval 11.67
                  and Permittee implements appropriate corrective measures to ensure GGS
                  will not enter the construction site through the exclusion barrier.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-244"
              data-scope="commitments"
              data-entity="ggs - disposal of debris "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.64</span>
                  <span class="bcn-sr__row-title">GGS - Disposal of Debris</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-245"
              data-scope="commitments"
              data-entity="ggs - restoration of temporary impacts "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.65</span>
                  <span class="bcn-sr__row-title"
                    >GGS - Restoration of Temporary Impacts</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … ne, and access road construction, and maintenance sites with highly
                  visible poly wire or other flagging approved by CDFW to demarcate it as
                  a disturbance-free zone (see Condition of Approval 11.55). Permittee
                  shall not conduct these Covered Activities in suitable GGS aquatic
                  habitat. The Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall delineate suitable upland habitat with flagging or
                  other high-visible markers within the Covered Activity sites. Permittee
                  shall not conduct preconstruction field investigations and SCADA,
                  transmission line, and access road construction, and maintenance sites i
                  …
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall be on-site during selection of the field investigation site,
                  ingress and egress, and during set-up activities to guide Project
                  personnel to avoid visible burrows until access routes are clearly
                  established.
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall conduct daily surveys prior to the start of Covered Activities
                  each day to check for burrows within the exploration site. The
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
                  either flag burrows to be avoided by a 50-foot radius no-activity buffer
                  or designate and flag work sites, staging areas, and ingress/egress
                  routes that avoid potentially occupied burrows.
                </p>
                <p>
                  If GGS, or any snake resembling GGS, is detected retreating into or
                  exiting a burrow, the Designated <mark>Biologist</mark>(s) shall flag
                  the burrow to be avoided by the no-activity buffer.
                </p>
                <p class="bcn-sr__row-more">+ 7 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-246"
              data-scope="commitments"
              data-entity="ggs - restoration of temporary impacts "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.66</span>
                  <span class="bcn-sr__row-title"
                    >GGS - Restoration of Temporary Impacts</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … tation Plan in Condition of Approval 12.3.3). The restoration effort
                  shall comply with the Guidelines for the Restoration and/or Replacement
                  of Giant Garter Snake Habitat.44 Permittee shall monitor the restoration
                  for one year or until restoration success is achieved as determined by
                  the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  and CDFW.
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-247"
              data-scope="commitments"
              data-entity="ggs - mortality reduction and relocation plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.67</span>
                  <span class="bcn-sr__row-title"
                    >GGS - Mortality Reduction and Relocation Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … duction and Relocation Plan (GGS Relocation Plan) and submit it to
                  CDFW as part of the appropriate Construction Phase Authorization Package
                  (Condition of Approval 6.2) prior to initiating Covered Activities. The
                  GGS Relocation Plan shall include, but is not limited to, the name(s) of
                  the Designated <mark>Biologist</mark>(s) who will relocate GGS
                  individuals, the proposed methods of capture, handling, and relocation;
                  a quantification of the amount, relative location, and quality of
                  suitable habitat (aquatic and upland) including invasive and non-native
                  species present, available upland burrows for aestivation and hi …
                </p>
                <p>
                  11.67.1 GGS Handling. GGS may only be captured and handled by the
                  CDFW-approved Designated <mark>Biologist</mark>(s) (see Condition of
                  Approval 9.2.1). If a GGS, or a snake resembling GGS, is found on the
                  Project construction site or three feet beyond the construction site,
                  the Designated <mark>Biologist</mark>(s) shall be notified immediately
                  and shall determine whether the animal should be captured and handled.
                  The Designated <mark>Biologist</mark>(s) shall minimize capture and
                  handling to the greatest extent feasible as most reptiles experience
                  stress in response to capture and short-term confinement. GGS
                  encountered in Project construction sites shall be allowed to leave on
                  their own volition. The Designated <mark>Biologist</mark>(s) shall only
                  relocate GGS if the animal is directly threatened by immediate Covered
                  Activities and the animal is unable to move to a safe area on its own.
                  Relocated GGS shall be released as soon as possible. The Designated
                  <mark>Biologist</mark>(s) shall only relocate GGS to areas identified in
                  the Relocation Plan. The Permittee’s Designated Representative or the
                  Designated <mark>Biologist</mark>(s) shall notify CDFW within 24 hours
                  each time GGS is relocated. Notification to CDFW shall be via telephone
                  and email, followed by a written incident report. Notifications shall
                  include the date, time, location, and circumstances of the incident. The
                  written incident report shall also be included …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-248"
              data-scope="commitments"
              data-entity="ggs - notification of ggs take or injury "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.68</span>
                  <span class="bcn-sr__row-title"
                    >GGS - Notification of GGS Take or Injury</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall immediately notify the Designated
                  <mark>Biologist</mark>(s) if a GGS is injured or killed by a Covered
                  Activity, or if a GGS is otherwise found dead or injured within the
                  vicinity of the Project preconstruction activity, construction site, or
                  maintenance area.
                </p>
                <p>
                  The Designated <mark>Biologist</mark>(s) shall immediately take the GGS
                  to a CDFW-approved wildlife rehabilitation or veterinary facility
                  identified in the GGS Relocation Plan (see Condition of Approval 11.67)
                  and contact the CDFW Representative, via email and telephone, within one
                  business day to discuss the next steps.
                </p>
                <p>
                  Following the discovery of the injured GGS, the Designated
                  <mark>Biologist</mark>(s) shall take the following steps:
                </p>
                <p>
                  11.68.1 Minor Injury. If the injury is minor or healing and the snake is
                  likely to survive as determined by the Designated
                  <mark>Biologist</mark>(s), the snake shall be released immediately in
                  accordance with the GGS Relocation Plan (Condition of Approval 11.67).
                </p>
                <p class="bcn-sr__row-more">+ 5 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-249"
              data-scope="commitments"
              data-entity="swha avoidance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.69</span>
                  <span class="bcn-sr__row-title">SWHA Avoidance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … e extent possible, previously disturbed areas and as identified within
                  the appropriate Project Phase Authorization Package (Condition of
                  Approval 6.1 and 6.2). Permittee shall implement dust control measures
                  during Covered Activities to facilitate visibility for monitoring of
                  SWHA by the Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s).
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-250"
              data-scope="commitments"
              data-entity="swha seasonal work restriction "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.70</span>
                  <span class="bcn-sr__row-title">SWHA Seasonal Work Restriction</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Where a Project construction site occurs within 0.5 miles of suitable
                  known or occupied nest trees identified by the Designated
                  <mark>Biologist</mark>(s), Permittee shall limit Covered Activities to
                  occur only outside the SWHA nesting season (February 28 – September 15),
                  to the extent practicable. Where Covered Activities cannot be restricted
                  to more than 0.5 miles from an occupied nest tree during the nesting
                  season, Permittee shall restrict the Covered Activities to not occur
                  during the period of egg laying until after young have fledged, as
                  determined by the Designated <mark>Biologist</mark>(s), to the maximum
                  extent practicable. If not practicable, Permittee shall initiate Covered
                  Activities prior to egg laying to allow time for SWHA to acclimate to
                  disturbance before eggs are laid. When it is not practicable to restrict
                  work to outside the breeding season or to restrict work during t …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-251"
              data-scope="commitments"
              data-entity="swha surveys "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.71</span>
                  <span class="bcn-sr__row-title">SWHA Surveys</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) with assistance (if needed)
                  from the Biological Monitor(s) shall conduct CDFW approved SWHA survey
                  protocols (Condition of Approval 11.38) to identify the presence of
                  suitable SWHA nest trees and known nest trees (occupied within one or
                  more years of the past five years) within 0.5 miles of each … all be
                  defined by Condition of Approval 10.4. Survey efforts shall occur each
                  year Covered Activities are expected to occur in or within 0.5 miles of
                  SWHA nesting habitat. Permittee shall ensure surveys for nesting SWHA
                  are conducted in all suitable and known nest trees identified by the
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) and
                  are consistent with the Recommended Timing and Methodology for
                  Swainson’s Hawk Nesting Surveys in California’s Central Valley, 45 or
                  methodology modified with written approval from CDFW. The Designated
                  <mark>Biologist</mark>(s) shall include the location of all known and
                  occupied nest trees present within 0.5 mile of the Project construction
                  site in the Annual Status Report.
                </p>
                <p>
                  A nest tree shall be considered occupied from the time the SWHA pair
                  starts constructing the nest until the young leave the nest, or until
                  the Designated <mark>Biologist</mark>(s) determine(s) the nesting
                  attempt failed and the nest is abandoned.
                </p>
                <p>
                  January 1 – March 20: A minimum of one survey shall be conducted to
                  determine potential nest locations. After March 1, the Designated
                  <mark>Biologist</mark>(s) are likely to observe SHWA individuals staging
                  in traditional nest territories.
                </p>
                <p class="bcn-sr__row-more">+ 6 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-252"
              data-scope="commitments"
              data-entity="swha no -disturbance buffer "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.72</span>
                  <span class="bcn-sr__row-title">SWHA No -Disturbance Buffer</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … prey during the nesting season may lead to failure to nest, nest
                  desertion, long-term temporary abandonment, shifts in home-range,
                  lowered reproductive success, and death of eggs and young. Where Covered
                  Activities must occur within 0.5 miles of an occupied SWHA nest tree,
                  Permittee, the Designated <mark>Biologist</mark>(s), and the Biological
                  Monitor(s) shall ensure that no Covered Activities occur within 656 feet
                  (200 m) of an occupied SWHA nest tree during the nesting season by
                  establishing a 656-foot-radius no-activity buffer around the occupied
                  nest tree. The buffer shall remain in place and be maintained unti …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-253"
              data-scope="commitments"
              data-entity="swha nest monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.73</span>
                  <span class="bcn-sr__row-title">SWHA Nest Monitoring</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  If a nesting SWHA is found at or within 0.5 miles of a Project
                  construction site(s), the Designated <mark>Biologist</mark>(s) with
                  assistance (if needed) from the Biological Monitor(s) shall be present
                  to monitor the behavior of the potentially affected SWHA. Permittee
                  shall implement the following monitoring where the Covered Activities
                  within 0.5 miles of an occupied nest tree must occur. If a nesting bird
                  monitoring plan is prepared by the Designated <mark>Biologist</mark>(s)
                  and approved in writing by CDFW as part of a Construction Phase
                  Authorization Package (Condition of Approval 6.2), that plan shall
                  prevail where it differs from the measures below.
                </p>
                <p>
                  Five days and three days prior to the initiation of Covered Activities
                  at any Project construction site where an occupied nest tree is within
                  0.5 miles of the Covered Activity, the Designated
                  <mark>Biologist</mark>(s) shall observe the occupied nest(s) for at
                  least one hour or until nest status can be determined. The Designated
                  <mark>Biologist</mark>(s) shall document nesting status and behaviors to
                  compare to nesting status and behaviors after Covered Activities begin.
                  Permittee shall report the results of preconstruction monitoring to CDFW
                  within 24 hours of each survey.
                </p>
                <p>
                  Where an occupied nest tree occurs between 150 and 325 feet from Covered
                  Activities, the Designated <mark>Biologist</mark>(s) shall observe the
                  nest for at least four hours per day during Covered Activities to ensure
                  the SWHA are engaged in normal nesting behavior. Permittee shall limit
                  Covered Activities to between 30 minutes after sunrise and 30 minutes
                  before sunset.
                </p>
                <p>
                  Where an occupied nest tree occurs between 325 and 650 feet of Covered
                  Activities, the Designated <mark>Biologist</mark>(s) shall observe the
                  nest for at least two hours per day during Covered Activities to ensure
                  the SWHA are engaged in normal nesting behavior.
                </p>
                <p class="bcn-sr__row-more">+ 3 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-254"
              data-scope="commitments"
              data-entity="swha disturbance of occupied nest tree "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.74</span>
                  <span class="bcn-sr__row-title"
                    >SWHA Disturbance of Occupied Nest Tree</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … break, rest, or meeting areas in proximity to active SWHA nests. All
                  Project personnel within 656 feet shall be out of the line of sight of
                  the occupied nest tree during breaks, rests, or meeting areas unless
                  prior approval has been obtained in writing from CDFW. In consultation
                  with the Designated <mark>Biologist</mark>(s), Permittee shall stage
                  stationary, not in-use equipment outside of sight lines from the SWHA
                  nests.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-255"
              data-scope="commitments"
              data-entity="swha authority of the designated biologist (s) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.75</span>
                  <span class="bcn-sr__row-title"
                    >SWHA Authority of the Designated <mark>Biologist</mark> (s)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-256"
              data-scope="commitments"
              data-entity="swha nest tree avoidance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.76</span>
                  <span class="bcn-sr__row-title">SWHA Nest Tree Avoidance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … ion of the known nest tree, conditions to offset the loss of the nest
                  tree, and the timing of removal, which shall generally be September 16 –
                  February 28. Permittee shall not remove any occupied nest tree during
                  nesting season, until the last young have left the nest, as verified by
                  the Designated <mark>Biologist</mark>(s).
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-257"
              data-scope="commitments"
              data-entity="swha vegetation removal "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.77</span>
                  <span class="bcn-sr__row-title">SWHA Vegetation Removal</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Swainson’s Hawk (SWHA) Measures - 11.77 Vegetation Removal. Permittee
                  shall conduct removal of woody vegetation (trees and shrubs) only
                  between September 16 - February 28 of any construction year to avoid
                  impacts to nesting birds, unless preconstruction surveys are conducted
                  by the Designated <mark>Biologist</mark>(s) and recently used SWHA nests
                  or active SWHA nests are determined to be absent from the trees and/or
                  shrubs to be removed. The Designated <mark>Biologist</mark>(s) shall
                  notify CDFW of survey results prior to any vegetation removal. If active
                  or recently used SWHA nests are present, the Permittee shall not remove
                  vegetation within 656 feet of SWHA nests. The Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall delineate,
                  flag, and avoid any active nests until the nesting cycle is complete
                  (refer to Condition of Approval 11.72).
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-258"
              data-scope="commitments"
              data-entity="swha preconstruction activities "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.78</span>
                  <span class="bcn-sr__row-title">SWHA Preconstruction Activities</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Swainson’s Hawk (SWHA) Measures - 11.78 Preconstruction Activities. The
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
                  delineate suitable nesting habitat with flagging or other highly visible
                  markers within each Project preconstruction site(s). Permittee shall
                  restrict preconstruction activities to areas outside of the delineated
                  nesting habitat. Permittee shall conduct preconstruction activities such
                  as field investigations outside of the nesting season to the maximum
                  extent practicable. If such activities must occur during the nesting
                  season, the Designated <mark>Biologist</mark>(s) shall survey the
                  preconstruction activity site and within 0.5 miles for nesting SWHA.
                  Permittee shall limit field investigation activities to at least 0.5
                  miles away from any occupied nest tree, unless otherwise approved by
                  CDFW in writing.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-259"
              data-scope="commitments"
              data-entity="swha measures specific ot scada and transmission line construction and maintenance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.79</span>
                  <span class="bcn-sr__row-title"
                    >SWHA Measures Specific ot SCADA and Transmission Line Construction
                    and Maintenance</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … g of known or suitable nest trees, to the extent practicable, during
                  SCADA and transmission line stringing and reconductoring activities and
                  during power and pole placement. Where practicable, Permittee shall
                  place poles and lines outside of suitable nesting habitat, as delineated
                  by the Designated <mark>Biologist</mark>(s). Permittee shall follow
                  requirements in Condition of Approval 11.76 when removal or trimming of
                  known or suitable nest trees cannot be avoided.
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-260"
              data-scope="commitments"
              data-entity="swha mortality reduction and relocation plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.80</span>
                  <span class="bcn-sr__row-title"
                    >SWHA Mortality Reduction and Relocation Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … ve location, and quality of suitable habitat present; a map depicting
                  construction, SWHA locations, and suitable habitats; site photos; and
                  identification of an appropriate wildlife rehabilitation center or
                  veterinary facility. SWHA shall only be captured and handled by the
                  CDFW-approved Designated <mark>Biologist</mark>(s) with appropriate
                  expertise in handling raptors.
                </p>
                <p class="bcn-sr__row-more">+ 11 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-261"
              data-scope="commitments"
              data-entity="swha notification of swha take or injury "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.81</span>
                  <span class="bcn-sr__row-title"
                    >SWHA Notification of SWHA Take or Injury</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall immediately notify the Designated
                  <mark>Biologist</mark>(s) if a SWHA is taken or injured by a Covered
                  Activity, or if a SWHA is otherwise found dead or injured within the
                  vicinity of the Project preconstruction activity site, construction
                  site, or maintenance area. The Designated <mark>Biologist</mark>(s)
                  shall immediately take the SWHA to a CDFW-approved wildlife
                  rehabilitation or veterinary facility identified in the SWHA Relocation
                  Plan (see Condition of Approval 11.80) and contact the CDFW
                  Representative, via email and telephone, within one business day to
                  discuss the next steps. Permittee shall bear any costs associated with
                  the care or treatment of such injured SWHA. The Designated
                  <mark>Biologist</mark>(s) shall immediately notify CDFW (within 24
                  hours) if nesting SWHA abandon the nest or exhibit distress and/or
                  abnormal nesting behavior. Abnormal behavior includes, but is not
                  limited to, swooping/stooping, excessive vocalization (distress calls),
                  agitation, failure to remain on nest, and failure to deliver prey items
                  for an extended time period. The Designated <mark>Biologist</mark>(s) or
                  Designated Representative shall provide initial notification to CDFW by
                  contacting the CDFW Representative. The initial notification to CDFW
                  shall include information regarding the location, species, date, and
                  circumstances of the event (e.g., time where the individual was found,
                  number of an …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-262"
              data-scope="commitments"
              data-entity="trbl avoidance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.82</span>
                  <span class="bcn-sr__row-title">TRBL Avoidance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall restrict Covered Activities to 45 minutes after sunrise
                  and 45 minutes before sunset when Covered Activities occur within 1,300
                  feet of a breeding colony or roost site occupied by TRBL, unless
                  otherwise approved by CDFW. The Designated <mark>Biologist</mark>(s)
                  shall train Project personnel on the required avoidance procedures,
                  buffer zones, and protocols in the event that a TRBL flies into an
                  active Project construction site (i.e., outside the buffer zone), as
                  part of the education program described in Condition of Approval 9.4. To
                  the maximum extent feasible, Permittee shall coordinate with the
                  Designated <mark>Biologist</mark>(s) and CDFW to time the loudest or
                  otherwise most disruptive Covered Activities outside periods where the
                  TRBL, their nests/colony, their eggs, or their young are most vulnerable
                  to disturbance.
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-263"
              data-scope="commitments"
              data-entity="trbl preconstruction assessment "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.83</span>
                  <span class="bcn-sr__row-title">TRBL Preconstruction Assessment</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Prior to the commencement of Covered Activities for each Project Phase,
                  the Designated <mark>Biologist</mark>(s) shall conduct a habitat
                  assessment consistent with CDFW-approved protocols (Condition of
                  Approval 11.38) to determine if existing or potential nesting or
                  foraging sites are present within the Project site and include areas
                  within three miles of Project sites, where feasible. The preconstruction
                  …
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-264"
              data-scope="commitments"
              data-entity="trbl surveys "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.84</span>
                  <span class="bcn-sr__row-title">TRBL Surveys</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) with assistance (if needed)
                  from the Biological Monitor(s) shall conduct CDFW approved TRBL survey
                  protocols (Condition of Approval 11.38) to identify the presence of
                  suitable nesting habitat and roosting habitat, within each
                  preconstruction activity site, SCADA, transmission line and access roa …
                </p>
                <p>
                  11.84.1 Nesting Habitat. Prior to the initiation of Covered Activities
                  in a Project site and within 1,300 feet of the Project site unless
                  otherwise approved by CDFW, the Designated <mark>Biologist</mark>(s)
                  with assistance (if needed) from the Biological Monitor(s) shall conduct
                  preconstruction surveys to evaluate the presence of TRBL breeding
                  colonies and suitable nesting habitat. Surveys shall be conducted during
                  the breeding season (March 1 – September 15) one year prior to, and then
                  again in th … Survey efforts shall occur each year Covered Activities
                  are expected to occur in or within 1,300 feet of TRBL habitat. During
                  each year, surveys shall be conducted monthly in March, April, May,
                  June, July, and September. If Covered Activities are initiated during
                  the breeding season, the Designated <mark>Biologist</mark>(s) with
                  assistance (if needed) from the Biological Monitor(s) shall conduct
                  three surveys within 15 days of commencement of Covered Activities, with
                  one survey occurring within three days of initiating ground-disturbing
                  Covered Activities within the Project site and 1,300 feet from the
                  Project site. If there is a break in Covered Activities for one week or
                  more, surveys shall be conducted three days prior to reinitiating
                  Covered Activities. Permittee shall use a breeding season survey
                  protocol approved by CDFW as part of the TRBL survey protocol (Condition
                  of Approval 11.38). The Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall delineate suitable nesting habitat and
                  breeding colonies with flagging or other visible marking. If a nest is
                  present, Permittee shall implement Conditions of Approval 11.85 and
                  11.86.
                </p>
                <p>
                  11.84.2 Roosting Habitat. Prior to initiation of Covered Activities,
                  including nighttime construction and postconstruction maintenance
                  activities, in a Project construction site or Project maintenance area
                  and within 300 feet of a Project site, the Designated
                  <mark>Biologist</mark>(s) with assistance (if needed) from the
                  Biological Monitor(s) shall conduct preconstruction surveys to establish
                  the existence and use of roosting habitat by TRBL. Surveys shall be
                  conducted during the nonbreeding season (September 16 – February 28) one
                  year prior to, and then again in the year of, the Covered Activities. If
                  construction is initiated at a site during the nonbreeding season, the
                  Designated <mark>Biologist</mark>(s) with assistance (if needed) from
                  the Biological Monitor(s) shall conduct three surveys within 15 days
                  prior to the Covered Activities, with one of the surveys occurring
                  within three days prior to the start of the Covered Activity. If there
                  is a break in construction of one week or more, surveys … ree days prior
                  to reinitiating construction. Permittee shall use a roosting survey
                  protocol approved by CDFW as part of the TRBL survey protocol (Condition
                  of Approval 11.38). Permittee shall consider roosting habitat occupied
                  by large mixed blackbird flocks to be occupied by TRBL if the Designated
                  <mark>Biologist</mark>(s) cannot clearly identify TRBL absence within
                  the flock. The Designated <mark>Biologist</mark>(s) with assistance (if
                  needed) from the Biological Monitor(s) shall check suitable roost sites
                  within 300 feet of Project sites that are not occupied at the time of
                  preconstruction surveys in accordance with the roosting survey protocol
                  approved by CDFW (Condition of Approval 11.38), to determine whether
                  TRBL later occupies the roost site. The Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor shall delineate
                  occupied roost sites with flagging or visible markings consistent with
                  Condition of Approval 11.90
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-265"
              data-scope="commitments"
              data-entity="trbl nest buffer zone "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.85</span>
                  <span class="bcn-sr__row-title">TRBL Nest Buffer Zone</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-266"
              data-scope="commitments"
              data-entity="trbl nest buffer monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.86</span>
                  <span class="bcn-sr__row-title">TRBL Nest Buffer Monitoring</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  If nesting TRBL is present within the Project construction site or
                  within 1,300 feet of any Project-related Covered Activity, the
                  Designated <mark>Biologist</mark>(s) with assistance (if needed) from
                  the Biological Monitor(s) shall monitor the colony daily for at least
                  six hours per day throughout the nesting season to verify the Covered
                  Activities are not disrupting the colony and to determine when the young
                  have fledged, unless otherwise approved by CDFW. The Designated
                  <mark>Biologist</mark>(s) will be on site daily while
                  construction-related activities are taking place adjacent to the nest
                  disturbance buffer. Work within the nest disturbance buffer shall not be
                  permitted. If the Designated <mark>Biologist</mark> determines that
                  Covered Activities are disrupting the colony and TRBL are exhibiting
                  agitated behavior, the Designated <mark>Biologist</mark>(s) shall have
                  the authority to stop Covered Activities until additional protective
                  measures are implemented and the buffer size is increased to a distance
                  necessary to result in no adverse impacts to the TRBL. The Permittee’s
                  Designated Representative and/or Designated <mark>Biologist</mark>(s)
                  shall notify CDFW within 24 hours (one calendar day) to determine
                  additional protective measures to be implemented. The Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall continue
                  monitoring and ensure additional protective measures remain in place for
                  the duration of the Covered Activities or until it is determined that
                  TRBL behavior has normalized, as approved by CDFW. Additional protective
                  measures may include, but are not limited to, increasing the size of the
                  buffer, delaying Covered Activities until the colony is finished
                  breeding and the young have fledged, temporarily relocating staging
                  areas, or temporarily rerouting access to the construction site. The
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
                  have the authority to determine if the additional protective measures
                  are ineffective and stop Covered Activities as needed until the
                  additional protective measures are modified. If the Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) determines that
                  the colonies are at risk, CDFW shall be immediately consulted to
                  determine the best course of action to avoid nest abandonment or take of
                  individuals. The Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall notify CDFW within 24 hours (one calendar day) if nests
                  or nestlings are abandoned. If the nestlings are still alive, the
                  Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
                  work with CDFW to determine appropriate actions. Notification to CDFW
                  shall be via telephone and email, followed by a written incident report
                  submitted to CDFW within two days of the incident. Notifications shall
                  include the date, time, location, and circumstan …
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-267"
              data-scope="commitments"
              data-entity="trbl roosting site buffer zone "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.87</span>
                  <span class="bcn-sr__row-title">TRBL Roosting Site Buffer Zone</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-268"
              data-scope="commitments"
              data-entity="trbl roosting site buffer monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.88</span>
                  <span class="bcn-sr__row-title"
                    >TRBL Roosting Site Buffer Monitoring</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Occupied roost sites that are within the 300 feet no-activity buffer
                  (Condition of Approval 11.87) shall be monitored daily by the Designated
                  <mark>Biologist</mark>(s), with assistance (if needed) from the
                  Biological Monitor(s), for at least four hours each day or until the
                  roost site is no longer occupied and consistent with CDFW-approved TRBL
                  survey protocol (Condition of Approval 11.38) to verify that Covered
                  Activities are not disrupting roosting TRBL. Permittee shall not conduct
                  Covered Activities within the roosting site. If the Designated
                  <mark>Biologist</mark>(s) determines that Covered Activities are
                  disrupting roosting activity and TRBL are exhibiting agitated behaviors,
                  Permittee shall put additional protective measures in place until TRBL
                  behavior normalizes. Additional protective measures may include, but are
                  not limited to, increasing the size of t … ng site no-activity buffer,
                  delaying Covered Activities until the flock has left the roost site or
                  until the end of the nonbreeding season, temporarily relocating staging
                  areas, temporarily rerouting access to the construction site, or
                  installation of sound curtains. Permittee and/or the Designated
                  <mark>Biologist</mark>(s) shall contact CDFW if protective measures are
                  not effectively reducing disruption to the roost site to discuss
                  alternative measures.
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-269"
              data-scope="commitments"
              data-entity="trbl disturbance of breeding colonies and roost sites "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.89</span>
                  <span class="bcn-sr__row-title"
                    >TRBL Disturbance of Breeding Colonies and Roost Sites</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall prohibit physical contact with a breeding colony during
                  the breeding season (March 1 – September 15) from the time of nest site
                  selection until after the chicks have fledged or colony is no longer
                  active, as determined by a Designated <mark>Biologist</mark>(s) and
                  approved by CDFW. Permittee shall prohibit physical contact with an
                  occupied roost site during the nonbreeding season (September 16 –
                  February 28). Project personnel shall not exit vehicles when inside the
                  established no-activity buffer for breeding or roosting when TRBL are
                  present (see Con …
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-270"
              data-scope="commitments"
              data-entity="trbl delineation of nesting and roosting habitat "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.90</span>
                  <span class="bcn-sr__row-title"
                    >TRBL Delineation of Nesting and Roosting Habitat</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  shall delineate suitable nesting and roosting habitat and buffers with
                  flagging or other highly visible marking at Project sites for
                  preconstruction activities, construction staging areas, SCADA,
                  transmission line, and access road construction and maintenance sites. …
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-271"
              data-scope="commitments"
              data-entity="trbl helicopters "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.91</span>
                  <span class="bcn-sr__row-title">TRBL Helicopters</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-272"
              data-scope="commitments"
              data-entity="trbl mortality reduction and relocation plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.92</span>
                  <span class="bcn-sr__row-title"
                    >TRBL Mortality Reduction and Relocation Plan</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  The Designated <mark>Biologist</mark>(s) shall prepare a TRBL Mortality
                  Reduction and Relocation Plan (TRBL Relocation Plan) and submit it to
                  CDFW as part of the appropriate Construction Phase Authorization Package
                  prior to commencing Covered Activities (Condition of Approval 6.2). The
                  TRBL Relocation Plan shall describe mortality redu …
                </p>
                <p>
                  … e wild; a quantification of amount, relative location, and quality of
                  suitable habitats; a map depicting construction, TRBL locations, and
                  suitable habitat; site photos; and the identification of an appropriate
                  wildlife rehabilitation center or veterinary facility. Only the
                  CDFW-approved Designated <mark>Biologist</mark>(s) with appropriate
                  expertise in handling blackbirds shall handle and relocate TRBL.
                </p>
                <p class="bcn-sr__row-more">+ 6 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-273"
              data-scope="commitments"
              data-entity="notification of trbl take or injury "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.93</span>
                  <span class="bcn-sr__row-title"
                    >Notification of TRBL Take or Injury</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Permittee shall immediately notify the Designated
                  <mark>Biologist</mark>(s) if TRBL is taken by a Covered Activity, or if
                  a TRBL is otherwise found dead or injured within the vicinity of the
                  Project preconstruction activity, construction site, or maintenance
                  area. The Designated <mark>Biologist</mark>(s) shall immediately take
                  the injured TRBL to a CDFW-approved wildlife rehabilitation or
                  veterinary facility identified in the TRBL Relocation Plan (see
                  Condition of Approval 11.92) and contact the CDFW Representative, via
                  email and telephone, within one business day to discuss the next steps.
                  Permittee shall bear any costs associated with the care or treatment of
                  such injured TRBL. The Designated <mark>Biologist</mark>(s) shall
                  immediately notify CDFW (within 24 hours) if TRBL abandon their nests or
                  nestlings are abandoned, or nesting or roosting colonies exhibit
                  distress and/or abnormal nesting behavior. The Designated
                  <mark>Biologist</mark>(s) or Permittee’s Designated Representative shall
                  provide initial notification to the CDFW Representative. The initial
                  notification to CDFW shall include information regarding the location,
                  species, date, and circumstances of the event (e.g., time where the
                  individual was found, number of animals t …
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-274"
              data-scope="commitments"
              data-entity="cbb avoidance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.94</span>
                  <span class="bcn-sr__row-title">CBB Avoidance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … riate Project Phase Authorization Package (Condition of Approval 6.1
                  and 6.2). If Project personnel observe CBB or an insect resembling CBB
                  entering or exiting a potential nest, or a CBB nest site, Permittee
                  shall prohibit Covered Activities within a 50-foot radius of that nest
                  until the Designated <mark>Biologist</mark>(s) is contacted and on-site
                  (see Condition of Approval 11.98). If the Covered Activities cannot
                  avoid the nest, only the Designated <mark>Biologist</mark>(s) shall
                  relocate the nest in accordance with Condition of Approval 11.102. All
                  Project personnel shall inform the Designated <mark>Biologist</mark>(s)
                  if they encounter CBB or an insect resembling CBB, within the Project
                  construction site or 50 feet beyond the Project construction site,
                  during all phases of Covered Activities.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-275"
              data-scope="commitments"
              data-entity="cbb seasonal restriction "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.95</span>
                  <span class="bcn-sr__row-title">CBB Seasonal Restriction</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  If feasible, Covered Activities shall avoid vegetation and ground
                  disturbing impacts to CBB and suitable habitat during the Colony Active
                  Period (February 1 – October 31) each year until the expiration of this
                  ITP unless otherwise approved by CDFW after the Designated
                  <mark>Biologist</mark>(s) has conducted CBB surveys (see Condition of
                  Approval 11.97) consistent with CDFW-approved protocols (Condition of
                  Approval 11.38). Any work within the Colony Active Period shall be
                  subject to approval by CDFW. Native or non-native flowering vegetation
                  removal shall occur prior to bloom and befor … s emerge in the spring
                  searching for nest sites, and during the fall flight period when Gynes
                  mate and search for overwintering habitat. These time periods shift each
                  year due to climatic conditions (drought, temperature, and
                  precipitation). To determine these time periods each year, the
                  Designated <mark>Biologist</mark>(s) shall conduct CDFW-approved CBB
                  surveys (Condition of Approval 11.38). During the overwintering period,
                  Permittee shall avoid ground disturbance activities in CBB habitat to
                  the greatest extent possible or develop a site-specific phased approach
                  to implementation of activities, for CDFW approval …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-276"
              data-scope="commitments"
              data-entity="cbb preconstruction assessment "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.96</span>
                  <span class="bcn-sr__row-title">CBB Preconstruction Assessment</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-277"
              data-scope="commitments"
              data-entity="cbb surveys "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.97</span>
                  <span class="bcn-sr__row-title">CBB Surveys</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  During the Project construction and postconstruction maintenance phases,
                  surveys shall be conducted by the Designated <mark>Biologist</mark>(s)
                  with assistance (if needed) from the Biological Monitor(s) following the
                  CDFW-approved CBB survey protocol (Condition of Approval 11.38) prior to
                  any ground-disturbing Covered Activities or vegetation removal within
                  suitable CBB habitat during the colony active period (February 1 –
                  October 31) o … to construction activity. Survey efforts shall occur
                  each year Covered Activities are expected to occur in or within 50 feet
                  of suitable CBB habitat, since bumble bees have an annual life cycle.
                  The survey(s) shall include a description of vegetation communities and
                  floral resources. The Designated <mark>Biologist</mark>(s) shall perform
                  meandering transects through the planned construction footprint, plus a
                  50-foot buffer around each Project construction site, between 9:00 am
                  and 1:00 pm where feasible and at least one hour after sunrise and at
                  least two hours before sunset, to visually survey the area for bumble
                  bee activity. The duration of the survey shall be the minimum amount of
                  time necessary to adequately survey the area, or 30 minutes, whichever
                  is longer. For each sampling event, the Designated
                  <mark>Biologist</mark> shall survey suitable habitat using non-lethal
                  photo voucher and netting methods. If a suspected or confirmed CBB is
                  identified during any of these surveys, the Designated
                  <mark>Biologist</mark>(s) shall notify CDFW within 24 hours. The three
                  survey efforts conducted during the Project construction phase(s) shall
                  occur each year Covered Activities are expected to occur in suitable CBB
                  habitat and shall be reported to CDFW by the Permittee within the
                  Monthly Compliance Reporting (Condition …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-278"
              data-scope="commitments"
              data-entity="cbb no-activity buffer zone "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.98</span>
                  <span class="bcn-sr__row-title">CBB No-activity Buffer Zone</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … is discovered during a CBB survey within the Project construction site
                  or Project maintenance area and avoidance is feasible, a non-disturbance
                  buffer of 50 feet shall be established around the nest until the nest
                  senesces or becomes inactive and is no longer in use, as determined by
                  the Designated <mark>Biologist</mark>(s) in consultation with CDFW, or
                  until the Covered Activities are complete, whichever is first. A CBB
                  buffer zone design plan shall be submitted to CDFW as part of the
                  appropriate Phase Authorization Package (Condition of Approval 6.2).
                  Utilizing this plan, the buffer shall be delineated using high …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-279"
              data-scope="commitments"
              data-entity="cbb daily monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.99</span>
                  <span class="bcn-sr__row-title">CBB Daily Monitoring</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Crotch Bumble Bee (CBB) Measures - 11.99 CBB Daily Monitoring. In
                  undisturbed areas of CBB habitat planned for Covered Activities, the
                  Designated <mark>Biologist</mark>(s) shall perform CDFW-approved CBB
                  survey protocols with assistance from the Biological Monitor(s) (if
                  needed) as described in Condition of Approval 11.38. Once Covered
                  Activities within CBB habitat have begun, the Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall be onsite
                  and shall conduct daily visual sweeps of the Project construction site
                  for CBB flight activity at the start of the daily work window and shall
                  intermittently repeat these visual sweeps throughout the daily work
                  window. If a suspected or confirmed CBB is detected in the Project
                  construction site, the Designated Representative or Designated
                  <mark>Biologist</mark>(s) shall contact CDFW by telephone and email
                  within 24 hours. If a suspected or confirmed CBB individual is detected
                  within the Project construction site, every effort shall be made by the
                  Designated <mark>Biologist</mark>(s) with assistance (if needed) from
                  the Biological Monitor(s) to find the active nest. If only foraging CBB
                  are observed (i.e., no nest is found), Covered Activities may proceed
                  without the additional intermittent daily visual sweeps by the
                  Designated <mark>Biologist</mark>(s); however, if there is a lapse in
                  initial construction disturbance greater than 14 calendar days, an
                  additional CBB survey shall be repeated by the Designated
                  <mark>Biologist</mark>(s) prior to any ground disturbance activities
                  resuming. After initial site clearance activities have ceased and no
                  suitable CBB habitat remains in the Project construction site, the
                  Designated <mark>biologist</mark> and/or Biological Monitor(s) shall
                  only be required to conduct a daily visual sweep prior to initiation of
                  Covered Activities that day.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-280"
              data-scope="commitments"
              data-entity="cbb avoidance or treatment of underground refugia "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.100</span>
                  <span class="bcn-sr__row-title"
                    >CBB Avoidance or Treatment of Underground Refugia</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … s in suitable CBB habitat to the maximum extent possible. Within
                  potential habitat, Permittee shall avoid removal of vegetation such as
                  woody plants, tall grasses, leaf litter or loose soils until
                  CDFW-approved CBB survey protocols (Condition of Approval 11.38) have
                  been performed by the Designated <mark>Biologist</mark>(s) and absence
                  of overwintering CBB is confirmed. The Designated
                  <mark>Biologist</mark>(s) shall flag these areas, or other habitat
                  features that are outside of the area for direct ground disturbance
                  within the Project construction site prior to initiation of earthmoving
                  activities in those areas. Permittee shall establish a 50-foot radius
                  no-activity buffer around refugia that can be … n activity area,
                  construction site, access roads, SCADA and transmission line
                  construction areas, and maintenance areas. Signs, stakes, and/or flags
                  shall be clearly distinguishable from markings used to delineate work
                  areas. If Covered Activities stop for more than 14 calendar days, the
                  Designated <mark>Biologist</mark>(s) with assistance (if needed) from
                  the Biological Monitor(s) shall repeat CBB surveys within suitable CBB
                  habitat, prior to resuming Covered Activities.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-281"
              data-scope="commitments"
              data-entity="cbb vegetation management "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.101</span>
                  <span class="bcn-sr__row-title">CBB Vegetation Management</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-282"
              data-scope="commitments"
              data-entity="cbb nest relocation plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.102</span>
                  <span class="bcn-sr__row-title">CBB Nest Relocation Plan</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … roval 11.98. If Project personnel observe CBB or an insect resembling
                  CBB entering or exiting a potential nest, or a CBB nest site, Permittee
                  shall stop Covered Activities within 50 feet of the nest until the nest
                  senesces or becomes inactive and is no longer in use, as determined by
                  the Designated <mark>Biologist</mark>(s) in consultation with CDFW. If
                  Covered Activities cannot stop and a buffer zone cannot be created
                  around the nest (see Condition of Approval 11.98), Permittee shall make
                  every effort to relocate the nest as a last resort. In the extraordinary
                  case that a nest may be lost because of ground disturb … diately (within
                  24 hours) to determine next steps. Permittee shall develop a CBB Nest
                  Relocation Plan (CBB Plan) and submit it to CDFW as part of the
                  appropriate Construction Phase Authorization Package (Condition of
                  Approval 6.2) prior to initiating Covered Activities. The CDFW-approved
                  Designated <mark>Biologist</mark>(s) with appropriate expertise in
                  bumble bee capture and handling shall attempt to relocate the nest to a
                  suitable location outside of the Project construction site following
                  guidance from CDFW. Nest relocation efforts shall follow the general
                  guidelines described by The Xerces Society in Bumble Bee …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-283"
              data-scope="commitments"
              data-entity="cbb notification of cbb take or injury "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.103</span>
                  <span class="bcn-sr__row-title"
                    >CBB Notification of CBB Take or Injury</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Crotch Bumble Bee (CBB) Measures - 11.103 Notification of CBB Take or
                  Injury. Permittee shall immediately notify the Designated
                  <mark>Biologist</mark>(s) if CBB is taken by a Covered Activity, or if a
                  CBB is otherwise found dead or injured within the vicinity of the
                  Project preconstruction activity, construction site, or maintenance
                  area. The Designated <mark>Biologist</mark>(s) or Permittee’s Designated
                  Representative shall provide initial notification to the CDFW
                  Representative within one business day of finding the injured or killed
                  CBB. The initial notification to CDFW shall include the date, time,
                  location, and circumstances of the incident if known. Following init …
                  inent information. The written incident report shall also be included in
                  the appropriate Monthly Compliance Report (see Condition of Approval
                  10.12). The carcass shall be photographed, salvaged, and placed in a
                  labeled, clean plastic, resealable bag or vial and stored in a freezer
                  by the Designated <mark>Biologist</mark>(s) for shipment to CDFW
                  Wildlife Health Lab. The label shall be appropriately recorded with a
                  unique identifier (collection number), species name, time and date of
                  collection, collection location, GPS location (including datum and
                  horizontal error in feet), circumstances surrounding death, collecto …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-284"
              data-scope="commitments"
              data-entity="mali initial site clearing and monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.104</span>
                  <span class="bcn-sr__row-title"
                    >MALI Initial Site Clearing and Monitoring</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Mason's Lilaeopsis (MALI) Measures - 11.104 Initial Site Clearing and
                  Monitoring. Permittee shall confine ground disturbance activities that
                  could result in take of MALI to the minimal area necessary to conduct
                  Covered Activities. The Designated <mark>Biologist</mark>(s) shall be
                  onsite each day during initial ground disturbing activities to assess
                  the Project construction site and no-activity buffer (Condition of
                  Approval 11.106). Following initial ground-disturbance activities, a
                  Designated <mark>Biologist</mark>(s) and /or Biological Monitor(s) shall
                  be on site to monitor Covered Activities occurring in suitable MALI
                  habitat. If MALI is discovered within the Project construction site, the
                  Designated <mark>Biologist</mark>(s) and or Biological Monitor(s) shall
                  have the authority to stop Covered Activities until the plant is
                  translocated to suitable habitat outside of the Project footprint in
                  accordance with Condition of Approval 11.108.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-285"
              data-scope="commitments"
              data-entity="mali surveys "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.105</span>
                  <span class="bcn-sr__row-title">MALI Surveys</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  Mason's Lilaeopsis (MALI) Measures - 11.105 MALI Surveys. The Designated
                  <mark>Biologist</mark>(s) with assistance (if needed) from the
                  Biological Monitor(s) shall conduct preconstruction surveys consistent
                  with CDFW-approved protocols (Condition of Approval 11.38) to identify
                  the presence of MALI and suitable MALI habitat within all Project sites
                  and a 100-foot buffer around each Project site, unless otherwise
                  approved by CDFW. Suitable habitat shall be defined by Condition of
                  Approval 10.4. All preconstruction surveys for MALI shall be conducted
                  by a CDFW-approved Designated <mark>Biologist</mark>(s) with appropriate
                  expertise identifying special-status plants that occur in the Delta.
                  Permittee shall ensure surveys for presence of MALI and MALI suitable
                  habitat are floristic in nature and consistent with the Guidelines for
                  Conducting and Reporting Botanical Inventories for Federally Listed, …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-286"
              data-scope="commitments"
              data-entity="mali no-activity buffer zone "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.106</span>
                  <span class="bcn-sr__row-title">MALI No-Activity Buffer Zone</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … uffer is not feasible, Permittee may reduce the no-activity zone to a
                  minimum of 50 feet from the edge of the suitable habitat with CDFW
                  written approval. The buffer shall be delineated using high-visibility
                  silt fencing, flagging, or similar materials along with appropriate
                  signage. The Designated <mark>Biologist</mark>(s) and/or Biological
                  Monitor(s) shall be onsite during all buffer installation activities
                  that could result in take, including trenching, vehicular access,
                  erecting fencing material, installing posts, and any other activities
                  that require vehicle or foot traffic in MALI suitable habitat. Permittee
                  …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-287"
              data-scope="commitments"
              data-entity="mali measures specific to scada and transmission line construction and maintenance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.107</span>
                  <span class="bcn-sr__row-title"
                    >MALI Measures Specific to SCADA and Transmission Line Construction
                    and Maintenance</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … e or repair of SCADA or transmission lines are necessary, maintenance
                  activities shall occur on the landside of levees where the risk of
                  erosion or debris entering the waterways is low. Non-disturbance buffers
                  around MALI shall be placed after preconstruction surveys are conducted
                  by the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
                  prior to maintenance activities.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-288"
              data-scope="commitments"
              data-entity="mali translocation plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.108</span>
                  <span class="bcn-sr__row-title">MALI Translocation Plan</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … on Plan) for MALI and submit it to CDFW as part of the appropriate
                  Construction Phase Authorization Package (Condition of Approval 6.2) for
                  written approval prior to the initiation of Covered Activities. The MALI
                  Translocation Plan shall include, but not be limited to, the name(s) of
                  the Designated <mark>Biologist</mark>(s) who will be responsible for
                  transplanting MALI; collection, handling, and relocation methods; a map
                  and description of the relocation area(s) for transplanted MALI,
                  including the quantification of the amount, relative location, and
                  quality of suitable habitat, including invasive or non-native sp …
                </p>
                <p>
                  If MALI is found within a Project construction site or maintenance area,
                  Project personnel shall notify the Designated <mark>Biologist</mark>(s)
                  immediately. The Covered Species may only be collected and handled by
                  the CDFW-approved Designated <mark>Biologist</mark>(s) with expertise in
                  handling plants. The Designated <mark>Biologist</mark>(s) shall
                  determine whether the plant should be collected and handled and shall
                  relocate the plant in accordance with the Translocation Plan. Collected
                  plants shall be transplanted as soon as possible. The Designated
                  <mark>Biologist</mark>(s) shall relocate the plant to a CDFW approved
                  translocation site if the plant is directly threatened by Covered
                  Activities. The Designated Representative and/or Designated
                  <mark>Biologist</mark>(s) shall notify CDFW within 24 hours (one
                  calendar day) of each time a plant is transplanted. Notification to CDFW
                  shall be via telephone and email, followed by a written incident report
                  submitted to CDFW within two days of the incident. Notification shall
                  include the date, time, location, and circ …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-289"
              data-scope="commitments"
              data-entity="buow avoidance "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.109</span>
                  <span class="bcn-sr__row-title">BUOW Avoidance</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … age (Condition of Approval 6.2). Project personnel shall not cross
                  occupied BUOW habitat and corresponding non-disturbance buffers (see
                  Condition of Approval 11.114) outside of the Project construction
                  site(s) during all phases of Covered Activities unless otherwise
                  approved by CDFW. The Designated <mark>Biologist</mark>(s) shall train
                  Project personnel on the required avoidance procedures, non-disturbance
                  buffer zones, and protocols in the event that a BUOW is present in or
                  comes into an active Project construction site (i.e., outside the
                  non-disturbance buffer zone), as part of the education program described
                  in Condition of Approval 9.4. Permittee shall ensure all workers inform
                  the Designated <mark>Biologist</mark>(s) if they encounter BUOW on site
                  or within 1,640 feet (500 meters) of the Project construction site.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-290"
              data-scope="commitments"
              data-entity="preconstruction habitat assessment (buow) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.110</span>
                  <span class="bcn-sr__row-title"
                    >Preconstruction Habitat Assessment (BUOW)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  11.110 Preconstruction Habitat Assessment.Prior to the commencement of
                  Covered Activities, the Designated <mark>Biologist</mark>(s) shall
                  conduct a suitable habitat assessment consistent with CDFW-approved
                  protocols (Condition of Approval 11.38) which shall incorporate
                  methodology described in Appendix C of the 2012 Staff Report on
                  Burrowing Owl Mitigation51 or the most recently available CDFW-approved
                  guidelines. The precon … Project construction site and include areas
                  within 1,640 feet (500 meters) or more of a Project construction site,
                  where feasible. Adjacent parcels under different landownership shall be
                  surveyed lawfully where access is granted or where the parcels are
                  visible from authorized areas. The Designated <mark>Biologist</mark>(s)
                  shall submit the results in a report as described in Appendix C of the
                  Staff Report on Burrowing Owl Mitigation in the appropriate Phase
                  Authorization Packages (Condition of Approval 6.2) prior to the
                  initiation of any vegetation clearing or ground disturbing Covered
                  Activities. The report shall …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-291"
              data-scope="commitments"
              data-entity="buow surveys "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.111</span>
                  <span class="bcn-sr__row-title">BUOW Surveys</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  11.111 BUOW Surveys.The Designated <mark>Biologist</mark>(s) with
                  assistance (if needed) from the Biological Monitor(s) shall conduct BUOW
                  surveys using CDFW-approved survey protocols (Condition of Approval
                  11.38) which shall incorporate methodology described in the 2012 Staff
                  Report on BUOW Mitigation, Appendix D 52 or more recently available
                  guidance ap …
                </p>
                <p>
                  … or Condition of Approval 11.111.1, no more than 14 days prior to
                  beginning any ground- or vegetation-disturbing Covered Activities (i.e.,
                  soil disposition areas, preconstruction activities, and SCADA,
                  transmission line, or access road construction, maintenance, or
                  improvement sites), the Designated <mark>Biologist</mark>(s) with
                  assistance (if needed) from the Biological Monitor(s) shall conduct a
                  minimum of two surveys, with the final survey conducted no more than 24
                  hours (at least one calendar day) prior to beginning Covered Activities
                  using the methods approved by CDFW (Condition of Approval 11.38). The
                  Designated <mark>Biologist</mark>(s) shall submit the survey results
                  with an updated Burrow Complex Map to CDFW prior to beginning Covered
                  Activities and include the results in the appropriate Monthly Compliance
                  Reports (Condition of Approval 10.12). If the Designated
                  <mark>Biologist</mark>(s) identifies any potential, known, or currently
                  active BUOW burrows within the Project construction site or 1,640 feet
                  (500 meters) into adjoining areas, the burrow(s) shall be monitored (see
                  Condition of Approval 11.116), and the Designated
                  <mark>Biologist</mark>(s) shall establish appropriate non-disturbance
                  buffers (see Condition of Approval 11.114) prior to the commencement of
                  Covered Activities. If a lapse in Project-related work of 14 calendar
                  days or longer occurs in any part of the Project construction site
                  containing suitable BUOW habitat, the Designated
                  <mark>Biologist</mark>(s) shall reconduct surveys and submit the updated
                  results and maps to CDFW before work may be reinitiated in that part of
                  the Project construction site.
                </p>
                <p class="bcn-sr__row-more">+ 2 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-292"
              data-scope="commitments"
              data-entity="buow burrow complex map "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.112</span>
                  <span class="bcn-sr__row-title">BUOW Burrow Complex Map</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  11.112 BUOW Burrow Complex Map.After BUOW surveys are conducted for each
                  Project construction site, the Designated <mark>Biologist</mark>(s)
                  shall provide a map (e.g., GIS shapefile) of the BUOW burrow complex(es)
                  and atypical burrows surveyed (e.g., culverts, buckled concrete, etc.)
                  to CDFW as part of the GIS shapefiles required in Condition of Approval
                  10.3 in the appropriate Construction Phase Authorization Package
                  (Condition of A … , occupied burrows, satellite burrows, areas with BUOW
                  signs (e.g., tracks, molted feathers, cast pellets, prey remains,
                  eggshell fragments, or excrement), or areas of concentrated burrows, as
                  appropriate. This data shall be updated annually with any additional
                  surveys carried out by the Designated <mark>Biologist</mark>(s). The map
                  shall include an outline of the Project Area and the current Project
                  phase footprint. Locations documented by GPS coordinates must be
                  collected in NAD83 datum. All nesting and overwintering sites, including
                  currently occupied sites and sites known to have been occupied within
                  the last t …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-293"
              data-scope="commitments"
              data-entity="buow seasonal work restrictions "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.113</span>
                  <span class="bcn-sr__row-title">BUOW Seasonal Work Restrictions</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … Project construction site until young are fledged and are no longer
                  dependent on adults, and the adults are no longer nesting. If Covered
                  Activities cannot be avoided while BUOW are present on site, Permittee
                  shall implement non-disturbance buffers (Condition of Approval 11.114),
                  and the Designated <mark>Biologist</mark>(s) shall conduct monitoring
                  consistent with Condition of Approval 11.116 until BUOW individuals
                  leave the Project construction site and the non-disturbance buffer on
                  their own volition.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-294"
              data-scope="commitments"
              data-entity="non-disturbance buffers (buow) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.114</span>
                  <span class="bcn-sr__row-title">Non-Disturbance Buffers (BUOW)</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  11.114 Non-disturbance Buffers.If an active nesting, roosting, or
                  satellite burrow is identified in or within 1,640 feet (500 meters) of
                  the Project construction site and work cannot be relocated or conducted
                  outside of the breeding season (Condition of Approval 11.113), the
                  Designated <mark>Biologist</mark>(s) shall establish a non-disturbance
                  buffer of 1,640 feet (500 meters) around the burrow or the entire burrow
                  complex to minimize any Project disturbance to BUOW habitat. The
                  non-disturbance buffer during the breeding season may be reduced to a
                  minimum of 656 feet (200 meters) around the burrow or … ting BUOW
                  burrows (e.g., burrows with any evidence of nesting including the
                  presence of eggs, chicks, dependent young, and/or brooding or egg
                  incubation) are discovered on or within 1,640 feet (500 meters) of the
                  Project construction site after Covered Activities have been initiated,
                  the Designated <mark>Biologist</mark>(s) has the authority to
                  immediately stop Covered Activities, establish a non-disturbance buffer
                  of at least 1,640 feet around the nesting burrow or burrow complex, and
                  shall notify CDFW by phone and email within one business day.
                </p>
                <p>
                  … 200 meters) of the Project construction site during the nonbreeding
                  season, or if a known BUOW burrow (a burrow that shows evidence of
                  current or past use or is known to have been used in the past) or an
                  “atypical” burrow (e.g., a pipe, culvert, buckled concrete, etc.) is
                  discovered, the Designated <mark>Biologist</mark>(s) shall establish a
                  non-disturbance buffer of 656 feet around the burrow or burrow complex.
                  If BUOW are visibly stressed by Covered Activities or the presence of
                  Project personnel after the above non-disturbance buffers are
                  established, all work in the vicinity of the burrow(s) shall immediately
                  cease and non-disturbance buffer sizes shall increase as determined by
                  the Designated <mark>Biologist</mark>(s) in consultation with CDFW based
                  on continued monitoring of the affected BUOW individuals.
                </p>
                <p>
                  … in the Phase Authorization Package (Condition of Approval 6.2), any
                  potential or active BUOW nesting or overwintering sites shall be avoided
                  by relocating work areas with flexible locations (e.g., preconstruction
                  field investigations) outside of the applicable non-disturbance buffer.
                  The Designated <mark>Biologist</mark>(s) shall clearly delineate the
                  non-disturbance buffers using high-visibility stakes, flags, and/or rope
                  or cord, limiting the materials necessary to mark the buffer to that
                  which is necessary for identification of the site. Permittee shall
                  change the method of marking the non-disturbance buffer if …
                </p>
                <p>
                  11.114.1 Non-Disturbance Buffer Reduction Requests. Non-disturbance
                  buffers shall not be reduced or otherwise modified without prior written
                  approval from CDFW. If the Designated <mark>Biologist</mark>(s)
                  determines that specific Covered Activities are not likely to affect
                  BUOW individuals based on behavioral assessments from burrow monitoring,
                  level of disturbance, and objects or topography potentially reducing
                  noise or visual disturbance to BUOW, and that burrows can be preserved
                  and available … ia email for written approval. Such requests shall
                  include visual burrow identification (e.g., flagging) and continuous
                  monitoring until Covered Activities are completed (Condition of Approval
                  11.116). The buffer reduction request shall include, at a minimum, a
                  monitoring report from the Designated <mark>Biologist</mark>(s) or
                  Biological Monitor(s) that documents the burrows for a minimum of 120
                  minutes twice per day for four days when owls are most active and/or no
                  less than 72 hours of monitoring with an infrared camera or other
                  tracking medium to determine if the BUOW have not displayed any
                  courtship behavior an …
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-295"
              data-scope="commitments"
              data-entity="buow mortality reduction plan "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.115</span>
                  <span class="bcn-sr__row-title">BUOW Mortality Reduction Plan</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  If any of the designs and methodologies must be modified due to site
                  conditions, Permittee shall submit proposed revisions to the
                  CDFW-approved plan, and justification, via email for CDFW review and
                  written approval prior to initiating any of the modifications. Only
                  CDFW-approved Designated <mark>Biologist</mark>(s), or personnel under
                  the supervision of the Designated <mark>Biologist</mark>(s), are
                  authorized to handle and transport injured BUOW for treatment or
                  impacted BUOW eggs for salvage. All other BUOW handling or capture is
                  prohibited. Once the Burrowing Owl Mortality Reduction Plan is approved
                  by CDFW, it shall be used for the duration of the appropriate Phase
                  Authorization Pa …
                </p>
                <p class="bcn-sr__row-more">+ 1 more paragraph in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-296"
              data-scope="commitments"
              data-entity="buow monitoring "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.116</span>
                  <span class="bcn-sr__row-title">BUOW Monitoring</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  11.116 BUOW Monitoring.The Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall be present at all times during Covered
                  Activities to monitor the behavior of any burrowing owls present within
                  the approved non-disturbance buffer of Covered Activities, and to
                  monitor any blocked or excavated burrows (see Conditions of Approval
                  11.117.3 and 11.118.4). The Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) shall have the authority to issue a stop work
                  order if BUOW exhibits distress and/or abnormal behavior (e.g.,
                  excessive vocalizations, defensive flights at intruders, flushing
                  frequently, failure to deliver prey items, or otherwise displaying
                  agitated behavior) from Covered Activities. Permittee shall not resume
                  Covered Activities until the Designated <mark>Biologist</mark>(s) has
                  consulted with CDFW and both the Designated <mark>Biologist</mark>(s)
                  and CDFW confirm that the BUOW’s behavior has normalized. CDFW, in
                  consultation with the Designated <mark>Biologist</mark>(s), shall
                  determine whether to increase the size of the non-disturbance buffer.
                  Site-specific BUOW monitoring protocols shall be submitted for written
                  approval as part of the Mortality Reduction Plan (Condition of Approval
                  11.115). Monitoring protocols for each Burrowing Owl Exclusion Activity
                  shal …
                </p>
                <p>
                  11.116.1 BUOW Presence in Active Project Construction Site. During
                  Project activities, if changes in BUOW presence (e.g., BUOW have moved
                  onsite or changed burrow use) are detected by the Designated
                  <mark>Biologist</mark>(s), <mark>Biologist</mark> Monitor(s), or other
                  Project personnel, the Designated <mark>Biologist</mark>(s) or
                  Biological Monitor(s) shall have the authority to issue a stop-work
                  order. All Covered Activities with potential to take BUOW in an active
                  Project construction site, as determined by the Designated
                  <mark>Biologist</mark>(s), shall cease until the owl(s) moves away from
                  activities on its own. If the individual(s) do not move out of the
                  Project construction site, the Designated <mark>Biologist</mark>(s)
                  shall make reasonable effort to locate the active burrow(s) and
                  establish appropriate BUOW non-disturbance buffers (see Condition of
                  Approval 11.114) around the new presence or contact CDFW by phone or
                  email within 24 hours (one calendar day) of the observation to consult
                  on the appropriate measures to minimize impacts of Covered Activities to
                  the BUOW individuals. If vegetation or fossorial mammal burrows become
                  reestablished in an area previously disturbed by Covered Activities,
                  then the Designated <mark>Biologist</mark>(s) shall resurvey these areas
                  prior to reinitiating Covered Activities to ensure any Covered Species
                  are not in harm’s way.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-297"
              data-scope="commitments"
              data-entity="buow exclusion activities "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.117</span>
                  <span class="bcn-sr__row-title">BUOW Exclusion Activities</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … and other BUOW exclusion activities (collectively termed BUOW
                  Exclusion Activities), Permittee shall submit a BUOW Exclusion
                  Activities Plan to CDFW for written approval. The BUOW Exclusion
                  Activities Plan shall include, but not be limited to, the following
                  components:(1) The appropriate Designated <mark>Biologist</mark>(s) for
                  BUOW Exclusion Activities;(2) Habitat assessment(s) and burrow complex
                  maps specific to the occupied site anticipated for BUOW Exclusion
                  Activities and proposed locations for artificial burrows/recipient sites
                  (i.e., habitat description, soil and vegetation assessment, prey base,
                  ground squi … e BUOW Exclusion Activities Plan. Any Permittee-proposed
                  changes to the BUOW Exclusion Activities Plan shall be submitted, in
                  writing, to CDFW and approved by CDFW in writing prior to the
                  implementation of any proposed modifications. Prior to conducting any
                  BUOW Exclusion Activities, the Designated <mark>Biologist</mark>(s)
                  shall conduct a habitat assessment of proposed recipient site(s) (see
                  Condition of Approval 11.110) to ensure there is suitable habitat
                  (adequately available burrows or artificial burrows) within 328 feet
                  (100 meters) dispersal distance of the impacted burrow(s), or further
                  with written approval from CDFW. Burrows (including burrows in natural
                  substrate and in/under man-made structures) may be blocked or excavated
                  by the Designated <mark>Biologist</mark>(s) following the approved BUOW
                  Exclusion Activities Plan after the Designated <mark>Biologist</mark>(s)
                  has monitored the selected burrows for a minimum of 120 minutes twice
                  per day for four days when owls are most active and/or no less than 72
                  hours of monitoring with an infrared camera or other tracking medium,
                  and has determined that BUOW are not currently present. Permittee shall
                  not destroy, …
                </p>
                <p>
                  … 11.117). Notice of intent to evict owls from burrows shall be provided
                  to CDFW via email at least 48 hours prior to proceeding with the
                  installation of one-way doors. If a burrowing owl needs to be evicted
                  from an occupied burrow and this cannot be avoided during the breeding
                  season, the Designated <mark>Biologist</mark>(s) shall monitor the
                  burrow(s) for a minimum of two hours per day for four consecutive days
                  at sunrise and/or sunset or install a tracking medium or 24-hour
                  infrared camera to monitor burrow activity. The Designated
                  <mark>Biologist</mark>(s) shall remain at a distance that will allow for
                  clear observation but not disturb the owls. Eviction may proceed only
                  after the Designated <mark>Biologist</mark>(s) has determined that the
                  burrow occupants consist of a single adult and the burrow does not
                  contain an active nest. After monitoring, if it is determined that the
                  burrow does not contain an active nest, the Designated
                  <mark>Biologist</mark>(s) shall determine via close inspection and
                  scoping whether the burrow is active. Once the burrow is determined to
                  no longer be active, a one-way door shall be placed over the burrows for
                  a maximum of 72 hours. Exclusion from burrows shall occur during morning
                  hours or on cooler days and shall not … ly to ensure they are
                  functioning properly and for any signs owls may be trapped inside. The
                  exclusion process shall be reinitiated as described above if an owl is
                  found inside the burrow. After the doors have been in place for seven
                  days and the burrow has been observed to be empty, the Designated
                  <mark>Biologist</mark>(s) shall monitor to ensure no eggs or animals are
                  present in the burrow using a tracking medium or 24-hour infrared
                  camera. The burrow shall be blocked or hand excavated once it is
                  determined that it is empty and owls are no longer attempting to reenter
                  the burrow. Evicted BUOW shall be continuously monitored at the
                  recipient site(s) for two weeks by the Designated
                  <mark>Biologist</mark>(s). If the location of the evicted owl(s) cannot
                  be determined, the Designated <mark>Biologist</mark>(s) with assistance
                  (if needed) from the Biological Monitor(s) shall survey the habitat
                  within 1,640 feet (500 meters) of the active Project construction site.
                  The Designated <mark>Biologist</mark>(s) shall document the location of
                  any known evicted BUOW, and a report shall be provided to CDFW within
                  the subsequent Monthly Compliance Reports (Condition of Approval 10.12)
                  summarizing the exclusion effort following the two weeks of continuous
                  monitoring. Photographs of the eviction process, including the location
                  of the initial burrow, one-way door installation and monitoring,
                  excavation and closure process, removal of owl habitat, and the area the
                  individual(s) relocated to (if possible) shall be included in the
                  report. Excluded owls shall be periodically monitored by the Designated
                  <mark>Biologist</mark>(s) and/or Biological Monitor(s) for the remaining
                  duration of the Phase, focusing on the location of the owls and
                  documenting potential breeding. All monitoring records shall be
                  summarized within the appropriate Monthly Compliance Reports (Condition
                  of Approval 10.12) and summarized in the Annual S …
                </p>
                <p>
                  11.117.2 Artificial Burrow Installation and Site Modification. If
                  destruction of occupied burrows (occupied within the last three years)
                  cannot be avoided and the Designated <mark>Biologist</mark>(s) cannot
                  determine that suitable unoccupied burrows exist outside of the Project
                  area but are close enough to be useful to excluded burrows, Permittee
                  shall install artificial burrow complexes within 328 feet (100 meters)
                  of the original burrow(s)/burrow complex, or further if necessary with
                  CDFW …
                </p>
                <p>
                  … ts shall be blocked by installing an object (e.g., sandbags), then
                  unblocked and made available for use immediately after Covered
                  Activities within 1,640 feet (500 meters) feet of burrow habitat(s) or a
                  reduced non-disturbance buffer (Condition of Approval 11.114.1) are
                  completed and the Designated <mark>Biologist</mark>(s) has determined
                  that potential resumed use of the burrow will not result in harm to
                  BUOW. Nesting BUOW burrows shall not be blocked until survey and camera
                  monitoring confirm adults and young have vacated the burrow and
                  nestlings are fully fledged, independently foraging, and no longer
                  dependent … rials and protocols shall be provided to CDFW for written
                  approval in the BUOW Mortality Reduction Plan (Condition of Approval
                  11.115). Burrow blockage shall be conducted in a manner that prevents
                  burrowing animals from reentering the burrow. All blocked burrows shall
                  be monitored by the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) following the approved monitoring protocols in the
                  BUOW Exclusion Activities Plan (Condition of Approval 11.117) at a
                  minimum of twice a week for the duration of that Phase to ensure
                  exclusion material is still intact. If any Covered Species regains
                  access to the bur …
                </p>
                <p class="bcn-sr__row-more">+ 4 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-298"
              data-scope="commitments"
              data-entity="notification of buow take or injury "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.118</span>
                  <span class="bcn-sr__row-title"
                    >Notification of BUOW Take or Injury</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  11.118 Notification of BUOW Take or Injury.Permittee shall immediately
                  notify the Designated <mark>Biologist</mark>(s) if a BUOW is taken or
                  injured by a Covered Activity, or if a BUOW is otherwise found dead or
                  injured within the vicinity of a Project preconstruction activity,
                  construction site, or maintenance area. The Designated
                  <mark>Biologist</mark>(s) shall immediately take the BUOW to a
                  CDFW-approved wildlife rehabilitation or veterinary facility identified
                  in the BUOW Mortality Reduction Plan (Condition of Approval 11.115) and
                  contact the CDFW Representative, via email and telephone, within one
                  business day to discuss the next steps. If nestling(s) or egg(s) are
                  abandoned, the Designated <mark>Biologist</mark>(s) shall recover the
                  nestling(s) or egg(s) and immediately take it to a CDFW-approved
                  wildlife rehabilitation or veterinary facility. Permittee shall bear any
                  cost associated with care and recovery of any injured BUOW adults,
                  nestling(s) or egg(s) and hacking (controlled release of captive reared
                  young). The Designated <mark>Biologist</mark>(s) shall immediately
                  notify CDFW (within 24 hours) if nesting BUOW abandon the nest or
                  exhibit distress and/or abnormal nesting behavior. Abnormal behavior
                  includes, but is not limited to, head-bobbing, excessive vocalization
                  (distress calls), agitation, failure to remain in nest, and failure to
                  deliver prey items for an extended time period. The Designated
                  <mark>Biologist</mark>(s) or Designated Representative shall provide
                  initial notification to CDFW by contacting the CDFW Representative. The
                  initial notification to CDFW shall include information regarding the
                  location, species, date, and circumstances of the event (e.g., time when
                  the individual was found, number of ani … was taken, any photographs of
                  the animal or the site it was found, explanation as to cause of take,
                  injury, or nesting disturbance, and any other pertinent information. The
                  written incident report shall also be included in the Monthly Compliance
                  Report (Condition of Approval 10.12). The Designated
                  <mark>Biologist</mark> or Designated Representative shall provide weekly
                  updates on the status of the rehabilitation facility’s treatment of the
                  individual to CDFW.
                </p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-299"
              data-scope="commitments"
              data-entity="detering predator attraction (buow) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.119</span>
                  <span class="bcn-sr__row-title"
                    >Detering Predator Attraction (BUOW)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-300"
              data-scope="commitments"
              data-entity="velocity requirements at north delta intakes "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.120</span>
                  <span class="bcn-sr__row-title"
                    >Velocity Requirements at North Delta Intakes</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-301"
              data-scope="commitments"
              data-entity="phase 1 and phase 2 authorized operations "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.121</span>
                  <span class="bcn-sr__row-title"
                    >Phase 1 and Phase 2 Authorized Operations</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-302"
              data-scope="commitments"
              data-entity="diversion criteria "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.122</span>
                  <span class="bcn-sr__row-title">Diversion Criteria</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  … .120, 11.123, 11.124, and 11.125.11.122.3 North Delta Diversion
                  Monitoring Team. The purpose of the North Delta Diversion Monitoring
                  Team (NDDMT) is to meet and review hydrologic, SWP and CVP operational,
                  fishery, and water quality data, and provide opportunities for
                  engagement and discussion among <mark>biologist</mark>s and operators on
                  relevant information and issues associated with the Project and risk
                  assessments. The purpose of the NDDMT shall be to evaluate system
                  conditions broadly (including Delta hydrology, south Delta exports, and
                  available biological data) and develop risk assessments regarding
                  operatio …
                </p>
                <p class="bcn-sr__row-more">+ 96 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-303"
              data-scope="commitments"
              data-entity="reservoir storage "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.123</span>
                  <span class="bcn-sr__row-title">Reservoir Storage</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-304"
              data-scope="commitments"
              data-entity="shifting during balanced conditions "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.124</span>
                  <span class="bcn-sr__row-title"
                    >Shifting During Balanced Conditions</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-305"
              data-scope="commitments"
              data-entity="additional diversions from north delta intakes "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.125</span>
                  <span class="bcn-sr__row-title"
                    >Additional Diversions from North Delta Intakes</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-306"
              data-scope="commitments"
              data-entity="delta smelt and longfin smelt biological criteria "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.126</span>
                  <span class="bcn-sr__row-title"
                    >Delta Smelt and Longfin Smelt Biological Criteria</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-307"
              data-scope="commitments"
              data-entity="winter-and spring-run chinook salmon biological criteria "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.127</span>
                  <span class="bcn-sr__row-title"
                    >Winter-and Spring-run Chinook Salmon Biological Criteria</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-308"
              data-scope="commitments"
              data-entity="white sturgeon biological criteria "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 11.128</span>
                  <span class="bcn-sr__row-title"
                    >White Sturgeon Biological Criteria</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-309"
              data-scope="commitments"
              data-entity="habitat management, land acquisition, and restoration "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12</span>
                  <span class="bcn-sr__row-title"
                    >Habitat Management, Land Acquisition, and Restoration</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-310"
              data-scope="commitments"
              data-entity="project footprint features with impact multiplier percentages "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.1</span>
                  <span class="bcn-sr__row-title"
                    >Project Footprint Features with Impact Multiplier Percentages</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-311"
              data-scope="commitments"
              data-entity="restoration from temporary preconstruction impacts "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.2</span>
                  <span class="bcn-sr__row-title"
                    >Restoration from Temporary Preconstruction Impacts</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-312"
              data-scope="commitments"
              data-entity="temporary impacts and on-site restoration "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.3</span>
                  <span class="bcn-sr__row-title"
                    >Temporary Impacts and On-Site Restoration</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  (9) Permittee shall oversee the management of invasive plants within
                  Project construction sites and Project maintenance areas and may use
                  control methods such as hand removal, light grubbing, mowing, or grazing
                  within seeding and planting areas following vegetation restoration. The
                  Designated <mark>Biologist</mark>(s) shall ensure that invasive plant
                  removal does not result in damage to adjacent Covered Species habitat or
                  to root systems of planted plants. No more than five percent of the
                  vegetation in each restoration site shall consist as species designated
                  as high or moderate invasive species in the Califo …
                </p>
                <p>
                  12.3.4 Monitoring and Maintenance. Permittee is responsible for
                  monitoring and maintaining the habitat restoration areas for a period of
                  three years or until the Restoration Plan success criteria have been met
                  as determined by the Designated <mark>Biologist</mark>(s) and/or
                  Biological Monitor(s) and CDFW in writing. For the first year, Permittee
                  shall submit two monitoring reports. After the first six months
                  following completion of restoration activities at a Project Site,
                  Permittee shall submit the first monitoring report detailing vegetation
                  establishment, …
                </p>
                <p class="bcn-sr__row-more">+ 31 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-313"
              data-scope="commitments"
              data-entity="install and maintain bird strike diverters on transmission lines in the project area "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.4</span>
                  <span class="bcn-sr__row-title"
                    >Install and Maintain Bird Strike Diverters on Transmission Lines in
                    the Project Area</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-314"
              data-scope="commitments"
              data-entity="compensatory mitigation for swha "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.5</span>
                  <span class="bcn-sr__row-title">Compensatory Mitigation for SWHA</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-315"
              data-scope="commitments"
              data-entity="compensatory mitigation for western burrowing owl "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.6</span>
                  <span class="bcn-sr__row-title"
                    >Compensatory Mitigation for Western Burrowing Owl</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-316"
              data-scope="commitments"
              data-entity="compensatory mitigation for delta smelt and longfin smelt "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.7</span>
                  <span class="bcn-sr__row-title"
                    >Compensatory Mitigation for Delta Smelt and Longfin Smelt</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-317"
              data-scope="commitments"
              data-entity="compensatory mitigation for chnwr and chnsr "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.8</span>
                  <span class="bcn-sr__row-title"
                    >Compensatory Mitigation for CHNWR and CHNSR</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-318"
              data-scope="commitments"
              data-entity="compensatory mitigation for white sturgeon (ws) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.9</span>
                  <span class="bcn-sr__row-title"
                    >Compensatory Mitigation for White Sturgeon (WS)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-319"
              data-scope="commitments"
              data-entity="cost estimates "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.10</span>
                  <span class="bcn-sr__row-title">Cost Estimates</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-320"
              data-scope="commitments"
              data-entity="covered species credits "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.11</span>
                  <span class="bcn-sr__row-title">Covered Species Credits</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-321"
              data-scope="commitments"
              data-entity="habitat management lands acquisition and protection "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.12</span>
                  <span class="bcn-sr__row-title"
                    >Habitat Management Lands Acquisition and Protection</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-322"
              data-scope="commitments"
              data-entity="in-perpetuity management funding "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.13</span>
                  <span class="bcn-sr__row-title">In-Perpetuity Management Funding</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-323"
              data-scope="commitments"
              data-entity="reimburse cdfw "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 12.14</span>
                  <span class="bcn-sr__row-title">Reimburse CDFW</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-324"
              data-scope="commitments"
              data-entity="ensure security "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 13</span>
                  <span class="bcn-sr__row-title">Ensure Security</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-325"
              data-scope="commitments"
              data-entity="calculate security amount "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 13.1</span>
                  <span class="bcn-sr__row-title">Calculate Security Amount</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-326"
              data-scope="commitments"
              data-entity="prepare and submit cesa mitigation funding strategy to cdfw "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 13.2</span>
                  <span class="bcn-sr__row-title"
                    >Prepare and Submit CESA Mitigation Funding Strategy to CDFW</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-327"
              data-scope="commitments"
              data-entity="demonstrate compliance with itp "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA 13.3</span>
                  <span class="bcn-sr__row-title">Demonstrate Compliance with ITP</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-328"
              data-scope="commitments"
              data-entity="esa compliance (draft itp) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA-4</span>
                  <span class="bcn-sr__row-title">ESA Compliance (Draft ITP)</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-329"
              data-scope="commitments"
              data-entity="phase authorizations for construction activities (draft itp) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA-6</span>
                  <span class="bcn-sr__row-title"
                    >Phase Authorizations for Construction Activities (Draft ITP)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-330"
              data-scope="commitments"
              data-entity="consultation regarding amendment (draft itp) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">COA-8</span>
                  <span class="bcn-sr__row-title"
                    >Consultation Regarding Amendment (Draft ITP)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-331"
              data-scope="commitments"
              data-entity="avoid impacts on built-environment historical resources through project design (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CUL-1a</span>
                  <span class="bcn-sr__row-title"
                    >Avoid Impacts on Built-Environment Historical Resources through
                    Project Design (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-332"
              data-scope="commitments"
              data-entity="prepare and implement a built-environment treatment plan in consultation with interested parties (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CUL-1b</span>
                  <span class="bcn-sr__row-title"
                    >Prepare and Implement a Built-Environment Treatment Plan in
                    Consultation with Interested Parties (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-333"
              data-scope="commitments"
              data-entity="conduct a survey of inaccessible properties to assess eligibility and determine whether these properties will be adversely affected by the project (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CUL-2</span>
                  <span class="bcn-sr__row-title"
                    >Conduct a Survey of Inaccessible Properties to Assess Eligibility and
                    Determine Whether These Properties Will Be Adversely Affected by the
                    Project (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-334"
              data-scope="commitments"
              data-entity="prepare and implement an archaeological resources management plan (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CUL-3a</span>
                  <span class="bcn-sr__row-title"
                    >Prepare and Implement an Archaeological Resources Management Plan
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-335"
              data-scope="commitments"
              data-entity="conduct cultural resources sensitivity training (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CUL-3b</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Cultural Resources Sensitivity Training (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-336"
              data-scope="commitments"
              data-entity="implement archaeological protocols for field investigations (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CUL-3c</span>
                  <span class="bcn-sr__row-title"
                    >Implement Archaeological Protocols for Field Investigations
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-337"
              data-scope="commitments"
              data-entity="follow state and federal law governing human remains if such resources are discovered during construction (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">CUL-5</span>
                  <span class="bcn-sr__row-title"
                    >Follow State and Federal Law Governing Human Remains if Such
                    Resources Are Discovered during Construction (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-338"
              data-scope="commitments"
              data-entity="conduct environmental resources worker awareness training "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-1</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Environmental Resources Worker Awareness Training</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-339"
              data-scope="commitments"
              data-entity="develop and implement hazardous materials management plans (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-2</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement Hazardous Materials Management Plans
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-340"
              data-scope="commitments"
              data-entity="develop and implement spill prevention, containment, and countermeasure plans (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-3</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement Spill Prevention, Containment, and
                    Countermeasure Plans (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-341"
              data-scope="commitments"
              data-entity="develop and implement erosion and sediment control plans (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-4a</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement Erosion and Sediment Control Plans (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-342"
              data-scope="commitments"
              data-entity="develop and implement stormwater pollution prevention plans (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-4b</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement Stormwater Pollution Prevention Plans
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-343"
              data-scope="commitments"
              data-entity="develop and implement a fire prevention and control plan (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-5</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Fire Prevention and Control Plan (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-344"
              data-scope="commitments"
              data-entity="conduct cultural resources awareness training (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-6</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Cultural Resources Awareness Training (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-345"
              data-scope="commitments"
              data-entity="off-road heavy-duty engines (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-7</span>
                  <span class="bcn-sr__row-title"
                    >Off-Road Heavy-Duty Engines (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-346"
              data-scope="commitments"
              data-entity="on-road haul trucks (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-8</span>
                  <span class="bcn-sr__row-title">On-Road Haul Trucks (FEIR)</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-347"
              data-scope="commitments"
              data-entity="on-site locomotives (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-9</span>
                  <span class="bcn-sr__row-title">On-Site Locomotives (FEIR)</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-348"
              data-scope="commitments"
              data-entity="marine vessels (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-10</span>
                  <span class="bcn-sr__row-title">Marine Vessels (FEIR)</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-349"
              data-scope="commitments"
              data-entity="fugitive dust control (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-11</span>
                  <span class="bcn-sr__row-title">Fugitive Dust Control (FEIR)</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-350"
              data-scope="commitments"
              data-entity="on-site concrete batching plants (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-12</span>
                  <span class="bcn-sr__row-title"
                    >On-Site Concrete Batching Plants (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-351"
              data-scope="commitments"
              data-entity="dwr best management practices to reduce ghg emissions (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-13</span>
                  <span class="bcn-sr__row-title"
                    >DWR Best Management Practices to Reduce GHG Emissions (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-352"
              data-scope="commitments"
              data-entity="construction best management practices for biological resources (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-14</span>
                  <span class="bcn-sr__row-title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  DWR will require all construction and restoration activities in and
                  adjacent to suitable habitat for special-status species and sensitive
                  natural communities implement BMPs and have construction monitored by
                  qualified <mark>biologist</mark>s (experience with the resources and
                  environmental compliance training and monitoring). Depending on the
                  resource of concern and construction timing, construction activities and
                  areas will be monitored for compliance with water quality regulations
                  (SWPPP monitor, see EC-4b) and with resource-specifi …
                </p>
                <p>
                  Qualified <mark>biologist</mark>s will monitor construction activities
                  in areas identified during the planning stages and species/habitat
                  surveys as having special-status fish, wildlife, and plant species or
                  their habitats, designated critical habitat, and sensitive natural
                  communities. The intent of the biological monitoring is t …
                </p>
                <p>
                  Biological monitors will be professional <mark>biologist</mark>s
                  selected for their knowledge of the special-status species and natural
                  communities that may be affected by construction activities. The
                  qualifications of the <mark>biologist</mark>(s) will be presented to the
                  fish and wildlife agencies for review and written approval, consistent
                  with permits and authorizations. If a special-status species is observed
                  in an active work area, the biological monitors will immediately provide
                  the construction manager and contractor with its locat …
                </p>
                <p>
                  During construction, the non-disturbance buffers described under the
                  special-status species’ mitigation measures in Chapter 13, Terrestrial
                  Biological Resources, of this Final EIR, will be established and
                  maintained as necessary. A qualified <mark>biologist</mark> will monitor
                  the site consistent with the requirements described for special-status
                  species to enforce buffers and non-disturbance of sensitive resources.
                </p>
                <p class="bcn-sr__row-more">+ 42 more paragraphs in this commitment</p>
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-353"
              data-scope="commitments"
              data-entity="sediment monitoring, modeling, and reintroduction adaptive management (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-15</span>
                  <span class="bcn-sr__row-title"
                    >Sediment Monitoring, Modeling, and Reintroduction Adaptive Management
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-354"
              data-scope="commitments"
              data-entity="provide notification of construction and maintenance activities in waterways (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-16</span>
                  <span class="bcn-sr__row-title"
                    >Provide Notification of Construction and Maintenance Activities in
                    Waterways (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-355"
              data-scope="commitments"
              data-entity="pursue solar electric power options at conveyance facility sites (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-17</span>
                  <span class="bcn-sr__row-title"
                    >Pursue Solar Electric Power Options at Conveyance Facility Sites
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-356"
              data-scope="commitments"
              data-entity="minimize construction-related disturbances to delta community events and festivals (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EC-18</span>
                  <span class="bcn-sr__row-title"
                    >Minimize Construction-Related Disturbances to Delta Community Events
                    and Festivals (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-357"
              data-scope="commitments"
              data-entity="project description "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">EIR PD</span>
                  <span class="bcn-sr__row-title">Project Description</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-358"
              data-scope="commitments"
              data-entity="maintain groundwater supplies in affected areas (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">GW-1</span>
                  <span class="bcn-sr__row-title"
                    >Maintain Groundwater Supplies in Affected Areas (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-359"
              data-scope="commitments"
              data-entity="reduce potential increases in groundwater elevations near project intake facilities affecting agricultural drainage (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">GW-5</span>
                  <span class="bcn-sr__row-title"
                    >Reduce Potential Increases in Groundwater Elevations near Project
                    Intake Facilities Affecting Agricultural Drainage (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-360"
              data-scope="commitments"
              data-entity="perform a phase i environmental site assessment prior to construction activities and remediate (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">HAZ-2</span>
                  <span class="bcn-sr__row-title"
                    >Perform a Phase I Environmental Site Assessment Prior to Construction
                    Activities and Remediate (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-361"
              data-scope="commitments"
              data-entity="develop and implement a noise control plan (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">NOI-1</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Noise Control Plan (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-362"
              data-scope="commitments"
              data-entity="prepare and implement a monitoring and mitigation plan for paleontological resources (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">PALEO-1a</span>
                  <span class="bcn-sr__row-title"
                    >Prepare and Implement a Monitoring and Mitigation Plan for
                    Paleontological Resources (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-363"
              data-scope="commitments"
              data-entity="educate construction personnel in recognizing fossil material (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">PALEO-1b</span>
                  <span class="bcn-sr__row-title"
                    >Educate Construction Personnel in Recognizing Fossil Material
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-364"
              data-scope="commitments"
              data-entity="avoid creating areas of standing water during preconstruction field investigations and project construction (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">PH-1a</span>
                  <span class="bcn-sr__row-title"
                    >Avoid Creating Areas of Standing Water During Preconstruction Field
                    Investigations and Project Construction (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-365"
              data-scope="commitments"
              data-entity="develop and implement a mosquito management plan for compensatory mitigation sites on bouldin island and at i-5 ponds (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">PH-1b</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Mosquito Management Plan for Compensatory
                    Mitigation Sites on Bouldin Island and at I-5 Ponds (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-366"
              data-scope="commitments"
              data-entity="conduct site-specific soil analysis and construct alternative wastewater disposal system as required (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">SOILS-5</span>
                  <span class="bcn-sr__row-title"
                    >Conduct Site-Specific Soil Analysis and Construct Alternative
                    Wastewater Disposal System as Required (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-367"
              data-scope="commitments"
              data-entity="avoidance of impacts on tribal cultural resources (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">TCR-1a</span>
                  <span class="bcn-sr__row-title"
                    >Avoidance of Impacts on Tribal Cultural Resources (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-368"
              data-scope="commitments"
              data-entity="plans for the management of tribal cultural resources (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">TCR-1b</span>
                  <span class="bcn-sr__row-title"
                    >Plans for the Management of Tribal Cultural Resources (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-369"
              data-scope="commitments"
              data-entity="implement measures to restore and enhance the physical, spiritual, and ceremonial qualities of affected tribal cultural resources (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">TCR-1c</span>
                  <span class="bcn-sr__row-title"
                    >Implement Measures to Restore and Enhance the Physical, Spiritual,
                    and Ceremonial Qualities of Affected Tribal Cultural Resources
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-370"
              data-scope="commitments"
              data-entity="incorporate tribal knowledge into compensatory mitigation planning (restoration)(feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">TCR-1d</span>
                  <span class="bcn-sr__row-title"
                    >Incorporate Tribal Knowledge into Compensatory Mitigation Planning
                    (Restoration)(FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-371"
              data-scope="commitments"
              data-entity="perform an assessment of significance, known attributes, and integrity for individual crhr eligibility (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">TCR-2</span>
                  <span class="bcn-sr__row-title"
                    >Perform an Assessment of Significance, Known Attributes, and
                    Integrity for Individual CRHR Eligibility (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-372"
              data-scope="commitments"
              data-entity="implement site-specific construction transportation demand management plan and transportation management plan (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">TRANS-1</span>
                  <span class="bcn-sr__row-title"
                    >Implement Site-Specific Construction Transportation Demand Management
                    Plan and Transportation Management Plan (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-373"
              data-scope="commitments"
              data-entity="contra costa water district interconnection facility (feir) "
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">WQ-4</span>
                  <span class="bcn-sr__row-title"
                    >Contra Costa Water District Interconnection Facility (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-374"
              data-scope="commitments"
              data-entity="develop and implement a mercury management and monitoring plan (feir) "
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">WQ-6</span>
                  <span class="bcn-sr__row-title"
                    >Develop and Implement a Mercury Management and Monitoring Plan
                    (FEIR)</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                <p>
                  DWR will retain a qualified water quality specialist, wildlife
                  <mark>biologist</mark>, or fisheries <mark>biologist</mark> with
                  expertise in methylmercury management to develop the MMMP.
                </p>
                <p class="bcn-sr__row-more">+ 33 more paragraphs in this commitment</p>
              </div>
            </a>
          </div>
        </section>
        <section class="bcn-sr__group" data-group="requirements">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Requirements</span>
            <span class="bcn-sr__group-count" data-group-count="">1</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-requirement"
              data-id="rq-weap-dev"
              data-scope="requirements"
              data-entity="develop weap training training &amp; education"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">MM-BIO-1</span>
                  <span class="bcn-sr__row-title">Develop WEAP Training</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-requirement"
              data-id="rq-weap-provide"
              data-scope="requirements"
              data-entity="provide weap training to all project personnel training &amp; education"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">MM-BIO-1</span>
                  <span class="bcn-sr__row-title"
                    >Provide WEAP Training to all Project personnel</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-requirement"
              data-id="rq-buffer"
              data-scope="requirements"
              data-entity="if bird nests are found, establish no-disturbance buffer zones biological resources"
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">MM-BIO-2</span>
                  <span class="bcn-sr__row-title"
                    >If bird nests are found, establish no-disturbance buffer zones</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                Where active nests are identified, establish and flag no-disturbance
                buffer zones sized by the qualified <mark>biologist</mark>; restrict
                ground-disturbing activities, demolition, and vegetation removal within
                the buffer until the nest is no longer active.
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-requirement"
              data-id="rq-raptor-survey"
              data-scope="requirements"
              data-entity="pre-construction survey for nesting raptors and migratory birds biological resources"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">MM-BIO-2</span>
                  <span class="bcn-sr__row-title"
                    >Pre-construction survey for nesting raptors and migratory birds</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-requirement"
              data-id="rq-bat-assess"
              data-scope="requirements"
              data-entity="pre-construction habitat assessment for bat roost sites biological resources"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">MM-BIO-2</span>
                  <span class="bcn-sr__row-title"
                    >Pre-construction habitat assessment for bat roost sites</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-requirement"
              data-id="rq-dust-erosion"
              data-scope="requirements"
              data-entity="dust control measures — erosion air quality"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AQ-1</span>
                  <span class="bcn-sr__row-title">Dust control measures — erosion</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div>
            </a>
          </div>
        </section>
        <section class="bcn-sr__group" data-group="actions">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Actions</span>
            <span class="bcn-sr__group-count" data-group-count="">2</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ac-weap-schedule"
              data-scope="actions"
              data-entity="schedule weap training session with qualified biologist mm-bio-1"
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Schedule WEAP training session with qualified
                    <mark>biologist</mark></span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ac-retain-bio"
              data-scope="actions"
              data-entity="retain qualified biologist for nesting surveys mm-bio-2"
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Retain qualified <mark>biologist</mark> for nesting surveys</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ac-fencing"
              data-scope="actions"
              data-entity="install no-disturbance buffer fencing at active nests mm-bio-2"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Install no-disturbance buffer fencing at active nests</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ac-monthly-report"
              data-scope="actions"
              data-entity="file monthly nesting-bird monitoring report mm-bio-2"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >File monthly nesting-bird monitoring report</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ac-dust-watering"
              data-scope="actions"
              data-entity="apply dust-control watering on graded surfaces air quality"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Apply dust-control watering on graded surfaces</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ac-ag-easement"
              data-scope="actions"
              data-entity="coordinate agricultural easement acquisition ag-1"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Coordinate agricultural easement acquisition</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div>
            </a>
          </div>
        </section>
        <section class="bcn-sr__group" data-group="components" hidden="">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Components</span>
            <span class="bcn-sr__group-count" data-group-count="">0</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="co-north-grading"
              data-scope="components"
              data-entity="north grading area work component · 3600 alameda"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">North Grading Area</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="co-south-grading"
              data-scope="components"
              data-entity="south grading area work component · 3600 alameda"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">South Grading Area</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="co-intake"
              data-scope="components"
              data-entity="intake facilities work component · dcp"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Intake Facilities</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="co-tunnel-shafts"
              data-scope="components"
              data-entity="tunnel shaft sites work component · dcp"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Tunnel Shaft Sites</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="co-bouldin"
              data-scope="components"
              data-entity="bouldin island complex work component · dcp"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Bouldin Island Complex</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="co-twin-cities"
              data-scope="components"
              data-entity="twin cities road corridor work component · dcp"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Twin Cities Road Corridor</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div>
            </a>
          </div>
        </section>
        <section class="bcn-sr__group" data-group="evidence">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Evidence of Compliance</span>
            <span class="bcn-sr__group-count" data-group-count="">1</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ev-weap-signin"
              data-scope="evidence"
              data-entity="weap training sign-in sheet — 2026-04-12.pdf mm-bio-1 · document"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >WEAP Training Sign-in Sheet — 2026-04-12.pdf</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ev-nest-survey"
              data-scope="evidence"
              data-entity="preconstruction nesting bird survey report.pdf mm-bio-2 · report"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Preconstruction Nesting Bird Survey Report.pdf</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ev-fence-photos"
              data-scope="evidence"
              data-entity="buffer fencing photo log — dctr2-dh-010 mm-bio-2 · photos"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Buffer Fencing Photo Log — DCTR2-DH-010</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ev-daily-log"
              data-scope="evidence"
              data-entity="biologist daily monitoring log — week 14 mm-bio-2 · log"
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    ><mark>Biologist</mark> Daily Monitoring Log — Week 14</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ev-dust-record"
              data-scope="evidence"
              data-entity="dust control watering record — june.xlsx air quality · record"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Dust Control Watering Record — June.xlsx</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-action"
              data-id="ev-ag-deed"
              data-scope="evidence"
              data-entity="agricultural land easement — recorded deed.pdf ag-1 · legal"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Agricultural Land Easement — Recorded Deed.pdf</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div>
            </a>
          </div>
        </section>
        <section class="bcn-sr__group" data-group="work-areas" hidden="">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Work Areas</span>
            <span class="bcn-sr__group-count" data-group-count="">0</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/site-clearance"
              data-id="wa-dctr2-010"
              data-scope="work-areas"
              data-entity="dctr2-dh-010 twin cities road · geotech bore"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">DCTR2-DH-010</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/site-clearance"
              data-id="wa-dcrai-009"
              data-scope="work-areas"
              data-entity="dcrai-dh-009 rail crossing · geotech bore"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">DCRAI-DH-009</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/site-clearance"
              data-id="wa-dcrai-006"
              data-scope="work-areas"
              data-entity="dcrai-dh-006 rail crossing · geotech bore"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">DCRAI-DH-006</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/site-clearance"
              data-id="wa-dctr2-100"
              data-scope="work-areas"
              data-entity="dctr2-dh-100 twin cities road · geotech bore"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">DCTR2-DH-100</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/site-clearance"
              data-id="wa-dcrds-294"
              data-scope="work-areas"
              data-entity="dcrds-dh-294 roadway · geotech bore"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">DCRDS-DH-294</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/site-clearance"
              data-id="wa-dcbpp-066"
              data-scope="work-areas"
              data-entity="dcbpp-dh-066 bouldin island · geotech bore"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">DCBPP-DH-066</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div>
            </a>
          </div>
        </section>
        <section class="bcn-sr__group" data-group="observations" hidden="">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Observations</span>
            <span class="bcn-sr__group-count" data-group-count="">0</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/monitoring/dashboard"
              data-id="ob-swha-010"
              data-scope="observations"
              data-entity="swainson's hawk nest — dctr2-dh-010 nesting bird · active"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Swainson's Hawk nest — DCTR2-DH-010</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/monitoring/dashboard"
              data-id="ob-cora-009"
              data-scope="observations"
              data-entity="common raven nest — dcrai-dh-009 nesting bird · active"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Common Raven nest — DCRAI-DH-009</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/monitoring/dashboard"
              data-id="ob-kild-100"
              data-scope="observations"
              data-entity="killdeer nest — dctr2-dh-100 nesting bird · active"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Killdeer nest — DCTR2-DH-100</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/monitoring/dashboard"
              data-id="ob-mall-294"
              data-scope="observations"
              data-entity="mallard nest — dcrds-dh-294 nesting bird · active"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Mallard nest — DCRDS-DH-294</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/monitoring/dashboard"
              data-id="ob-rodent-066"
              data-scope="observations"
              data-entity="rodent burrows — dcbpp-dh-066 biological resource · tracking"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title">Rodent burrows — DCBPP-DH-066</span>
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/monitoring/dashboard"
              data-id="ob-swha-006"
              data-scope="observations"
              data-entity="swainson's hawk foraging — dcrai-dh-006 biological resource · tracking"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-title"
                    >Swainson's Hawk foraging — DCRAI-DH-006</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div>
            </a>
          </div>
        </section>
        <!-- 5 · Empty state (the lego) — hidden until the client finds zero matches -->
        <div class="bcn-sr__empty" id="results-empty" hidden="">
          <div class="esa-empty-state esa-empty-state--md">
            <div class="esa-empty-state__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m13.5 8.5-5 5"></path>
                <path d="m8.5 8.5 5 5"></path>
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <h3 class="esa-empty-state__title">No matches</h3>
            <p class="esa-empty-state__description">
              No records match your search. Try a different term or clear the active type
              filter.
            </p>
            <div class="esa-empty-state__actions"></div>
          </div>
        </div>
      </div>
      <!-- /main -->
    </div>
    <!-- /split -->
  </div>
</section>
```

## Styles
```css
.bcn-sr {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-sr__search {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.bcn-sr__search-icon {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-text-tertiary);
}
.bcn-sr__search-icon svg {
  width: 20px;
  height: 20px;
}
.bcn-sr__input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: var(--type-size-300);
  color: var(--color-text-primary);
}
.bcn-sr__input::placeholder {
  color: var(--color-text-tertiary);
}
.bcn-sr__split {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-500);
}
.bcn-sr__rail {
  flex: none;
  width: 220px;
  position: sticky;
  top: var(--spacing-400);
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.bcn-sr__scope {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  padding: var(--spacing-200) var(--spacing-250);
  border: 0;
  border-radius: var(--radius-200);
  background: transparent;
  color: var(--color-text-secondary);
  font-family: inherit;
  font-size: var(--type-size-150);
  text-align: left;
  cursor: pointer;
  transition:
    background 0.12s ease,
    color 0.12s ease;
}
.bcn-sr__scope--active {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-semibold);
}
.bcn-sr__scope-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-sr__scope-count {
  flex: none;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  opacity: 0.8;
}
.bcn-sr__main {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  border-left: 1px solid var(--color-border);
  padding-left: var(--spacing-500);
}
.bcn-sr__count {
  margin: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
}
.bcn-sr__landing {
  padding: var(--spacing-700) 0;
}
.bcn-sr__landing[hidden],
.bcn-sr__results[hidden] {
  display: none;
}
.bcn-sr__results {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-sr__group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
}
.bcn-sr__group-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  padding: 0 var(--spacing-200) var(--spacing-150);
  border-bottom: 1px solid var(--color-border-light);
}
.bcn-sr__group-label {
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-sr__group-count {
  font-size: var(--type-size-100);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-secondary);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  padding: 0 6px;
  line-height: 1.5;
}
.bcn-sr__rows {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-sr__row {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  background: transparent;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: background 0.12s ease;
}
.bcn-sr__row-head {
  display: flex;
  align-items: center;
  min-width: 0;
}
.bcn-sr__row-titlerow {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-sr__row-title {
  flex: 0 1 auto;
  min-width: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-sr__row-snippet {
  margin-top: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-350, 1.25rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
  font-family: var(--font-decorative);
  font-size: var(--type-size-150);
  line-height: 1.7;
  color: var(--color-text-primary);
  text-align: left;
}
.bcn-sr__row-snippet[hidden] {
  display: none;
}
.bcn-sr__row-code {
  flex: none;
  padding: 1px 6px;
  border-radius: var(--radius-100);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  white-space: nowrap;
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
}
.bcn-sr__empty[hidden] {
  display: none;
}
.bcn-sr--idle .bcn-sr__scope {
  color: var(--color-text-tertiary);
  cursor: default;
}
.bcn-sr--idle .bcn-sr__scope-count {
  display: none;
}
.bcn-sr__search:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-subtle);
}
.bcn-sr__group[hidden] {
  display: none;
}
.bcn-sr__row-snippet p {
  margin: 0;
}
.bcn-sr__row-title mark,
.bcn-sr__row-snippet mark {
  background: #fde047;
  color: var(--color-text-primary);
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-sr__row[hidden] {
  display: none;
}
.bcn-sr__row-snippet p + p {
  margin-top: 0.85em;
}
.bcn-sr__row-snippet .bcn-sr__row-more {
  margin-top: 1em;
  padding-top: 0.7em;
  border-top: 1px solid var(--color-border);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: var(--type-size-100);
  font-style: normal;
  color: var(--color-text-tertiary);
}
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-title-size: 16px;
  --_empty-desc-size: 14px;
  --_empty-gap: var(--empty-state-gap, var(--spacing-200, 0.5rem));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  gap: var(--_empty-gap);
}
.esa-empty-state__icon {
  color: var(--empty-state-icon-color, var(--color-text-muted, #737373));
  margin-bottom: var(--spacing-100, 0.25rem);
  display: inline-flex;
}
.esa-empty-state__icon svg {
  width: var(--_empty-icon-size);
  height: var(--_empty-icon-size);
}
.esa-empty-state__title {
  margin: 0;
  font-size: var(--_empty-title-size);
  font-weight: 600;
  color: var(--empty-state-title-color, var(--color-text-primary, #171717));
}
.esa-empty-state__description {
  margin: 0;
  font-size: var(--_empty-desc-size);
  color: var(--empty-state-description-color, var(--color-text-secondary, #525252));
  max-width: 360px;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-subtle`: #effefb _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--empty-state-description-color`: #525252 _(component)_
- `--empty-state-gap`: .5rem _(component)_
- `--empty-state-icon-color`: #7c7c7c _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-title-color`: #3d3d3d _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
