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
        <span class="bcn-sr__scope-count" data-scope-count="">6</span>
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
        <span class="bcn-sr__scope-count" data-scope-count="">2</span></button
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
      <p class="bcn-sr__count" id="results-count">6 results for “biologist”</p>
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
            <span class="bcn-sr__group-count" data-group-count="">2</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-mmbio1"
              data-scope="commitments"
              data-entity="worker environmental awareness program (weap) training 3600 alameda feir · biological resources"
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">MM-BIO-1</span>
                  <span class="bcn-sr__row-title"
                    >Worker Environmental Awareness Program (WEAP) Training</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                DWR will develop and implement a Worker Environmental Awareness Program
                (WEAP). A qualified <mark>biologist</mark> will train all construction
                personnel on the special-status species with potential to occur in the
                work area, the no-disturbance buffers and avoidance measures in effect,
                and the procedure for reporting any incidental take or sensitive-species
                observation to the designated <mark>biologist</mark>.
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-mmbio2"
              data-scope="commitments"
              data-entity="nesting bird buffers and avoidance 3600 alameda feir · biological resources"
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">MM-BIO-2</span>
                  <span class="bcn-sr__row-title"
                    >Nesting Bird Buffers and Avoidance</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet">
                If active bird nests are found during preconstruction surveys, the
                qualified <mark>biologist</mark> will establish no-disturbance buffer
                zones around each nest. Buffers remain in effect until a
                <mark>biologist</mark> determines the young have fledged or the nest is no
                longer active. No construction, grading, or vegetation removal will occur
                within a buffer without biological monitoring and concurrence.
              </div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-aes4a"
              data-scope="commitments"
              data-entity="limit construction outside of daylight hours near residents dcp eir · aesthetics"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AES-4a</span>
                  <span class="bcn-sr__row-title"
                    >Limit Construction Outside of Daylight Hours near Residents</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-aes4b"
              data-scope="commitments"
              data-entity="minimize fugitive light from portable sources dcp eir · aesthetics"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AES-4b</span>
                  <span class="bcn-sr__row-title"
                    >Minimize Fugitive Light from Portable Sources</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div> </a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-ag1"
              data-scope="commitments"
              data-entity="preserve agricultural land dcp eir · agriculture"
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
              data-id="cm-ag3"
              data-scope="commitments"
              data-entity="replacement or relocation of affected infrastructure dcp eir · agriculture"
              hidden=""
            >
              <span class="bcn-sr__row-head">
                <span class="bcn-sr__row-titlerow">
                  <span class="bcn-sr__row-code">AG-3</span>
                  <span class="bcn-sr__row-title"
                    >Replacement or Relocation of Affected Infrastructure</span
                  >
                </span>
              </span>
              <div class="bcn-sr__row-snippet" hidden=""></div>
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
  gap: 2px;
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
  margin-top: var(--spacing-100);
  padding: var(--spacing-250) var(--spacing-300);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  background: var(--color-surface);
  font-family: var(--font-decorative);
  font-size: var(--type-size-150);
  line-height: 1.6;
  color: var(--color-text-primary);
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
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
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
