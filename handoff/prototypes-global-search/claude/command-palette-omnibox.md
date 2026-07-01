# Command palette (omnibox)

The global-search command palette — a fixed overlay centered both vertically and horizontally. It searches all 8 scopes FULL-TEXT (titles + commitment/requirement body), with a left scope-facet rail, results grouped by scope with per-scope counts, highlighted hits, and an inline ghost-text typeahead in the input. ⌘/Ctrl+Enter forks to the full results page carrying the query + active scope.

## Key decisions
- NULL STATE shows a centered "Search Beacon" landing only (no recents); the scope rail is PRESENT but DISABLED with no counts until a query is typed, at which point its facets enable, show counts, and the active scope highlights.
- Scope facets are a left VERTICAL RAIL (not tabs); the active facet is solid --color-primary with white text.
- Inline ghost-text typeahead: a grey predicted completion sits after the caret (a transparent pad span occupies the typed text so the grey suffix lands exactly at the caret); Tab or → accepts it.
- Hit highlighting is highlighter-yellow (#fde047), dark text — louder than a tinted-primary mark.
- Result rows carry NO leading scope icon and NO subtitle. Commitments + requirements show a purple commitment-ID badge (--color-commitment) before the title; the body match renders as a one-line serif (--font-decorative) snippet of the matched document text.
- Keys: ↑/↓ navigate, ↵ select (navigates to the record), ⌘/Ctrl+↵ "see all" (→ results page), Tab complete (accept ghost), Esc close. Opens via [data-omni-trigger] or "/".

## Gotchas
- This is a BESPOKE bcn- palette, NOT the esa-entity-search lego: that lego is overlay-only, hardcodes top:12% in shadow DOM with no centering hook, sizes by max-height, and matches/renders title+subtitle only (no full-text body match or snippet). Re-implement as a centered, fixed-size, full-text palette.
- The rail + rows are JS-injected (innerHTML), so their CSS cannot carry Astro's scope hash — it lives in a global <style is:global> block under .bcn-omni-*. In Angular this is component CSS, but keep the same contained prefix discipline.
- Every user-query path is HTML-escaped before innerHTML; the <mark> wrappers are the ONLY injected markup. Preserve that — never interpolate a raw query into innerHTML.
- The commitment ID is a structured `code` field on the record (folded into the searchable text), NOT parsed out of the title at render — the title is the clean name.

## Done when
- "/" opens it centered; empty query shows the landing + a disabled rail; typing enables the rail with counts and shows grouped, highlighted results; Tab completes the ghost; ⌘↵ opens the results page with the query + scope.

## Markup
```html
<div class="bcn-omni__panel" role="dialog" aria-modal="true" aria-label="Global search">
  <div class="bcn-omni__searchrow">
    <span class="bcn-omni__searchicon" aria-hidden="true">
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
    <span class="bcn-omni__inputwrap">
      <span class="bcn-omni__ghost" data-omni-ghost="" aria-hidden="true" data-suffix="s"
        ><span class="bcn-omni__ghost-pad">biologist</span>s</span
      >
      <input
        class="bcn-omni__input"
        data-omni-input=""
        type="text"
        placeholder="Search…"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        aria-label="Search"
      />
    </span>
    <button
      class="bcn-omni__clear"
      data-omni-clear=""
      type="button"
      aria-label="Clear search"
    >
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
    <kbd>Esc</kbd>
  </div>
  <div class="bcn-omni__split">
    <nav
      class="bcn-omni__rail"
      data-omni-scopes=""
      role="tablist"
      aria-label="Filter by type"
    >
      <button
        type="button"
        role="tab"
        class="bcn-omni-rail__item is-active"
        data-scope=""
      >
        <span class="bcn-omni-rail__label">All</span
        ><span class="bcn-omni-rail__c">147</span></button
      ><button
        type="button"
        role="tab"
        class="bcn-omni-rail__item"
        data-scope="source-documents"
      >
        <span class="bcn-omni-rail__label">Source Documents</span
        ><span class="bcn-omni-rail__c">0</span></button
      ><button
        type="button"
        role="tab"
        class="bcn-omni-rail__item"
        data-scope="commitments"
      >
        <span class="bcn-omni-rail__label">Commitments</span
        ><span class="bcn-omni-rail__c">143</span></button
      ><button
        type="button"
        role="tab"
        class="bcn-omni-rail__item"
        data-scope="requirements"
      >
        <span class="bcn-omni-rail__label">Requirements</span
        ><span class="bcn-omni-rail__c">1</span></button
      ><button type="button" role="tab" class="bcn-omni-rail__item" data-scope="actions">
        <span class="bcn-omni-rail__label">Actions</span
        ><span class="bcn-omni-rail__c">2</span></button
      ><button
        type="button"
        role="tab"
        class="bcn-omni-rail__item"
        data-scope="components"
      >
        <span class="bcn-omni-rail__label">Components</span
        ><span class="bcn-omni-rail__c">0</span></button
      ><button type="button" role="tab" class="bcn-omni-rail__item" data-scope="evidence">
        <span class="bcn-omni-rail__label">Evidence of Compliance</span
        ><span class="bcn-omni-rail__c">1</span></button
      ><button
        type="button"
        role="tab"
        class="bcn-omni-rail__item"
        data-scope="work-areas"
      >
        <span class="bcn-omni-rail__label">Work Areas</span
        ><span class="bcn-omni-rail__c">0</span></button
      ><button
        type="button"
        role="tab"
        class="bcn-omni-rail__item"
        data-scope="observations"
      >
        <span class="bcn-omni-rail__label">Observations</span
        ><span class="bcn-omni-rail__c">0</span>
      </button>
    </nav>
    <div class="bcn-omni__body" data-omni-body="" role="listbox">
      <section class="bcn-omni-group">
        <div class="bcn-omni-group__head">
          <span class="bcn-omni-group__label">Commitments</span
          ><span class="bcn-omni-group__count">143</span>
        </div>
        <button
          type="button"
          class="bcn-omni-row is-active"
          role="option"
          data-id="cm-dcp-0"
        >
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">6.3.2.2</span
              ><span class="bcn-omni-row__title"
                >California Least Tern Avoidance and Minimization Measures</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… n the area. Surveys will be conducted by a Service- and CDFW-approved
              <mark>biologist</mark> with experience observing the species and its nests.
              DWR will impleme … as determined through surveys).A Service- and
              CDFW-approved wildlife <mark>biologist</mark> will monitor construction
              activities within 500 feet of active nests …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-1">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">6.3.2.3</span
              ><span class="bcn-omni-row__title"
                >Least Bell’s Vireo Avoidance and Minimization Measures</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… area.2. Two weeks prior to construction, a Service- and CDFW-approved
              <mark>biologist</mark> will conduct daily surveys, consistent with a
              Service- or CDFW- appro … 0 feet of the habitat being used until the
              Service- and CDFW-approved <mark>biologist</mark> has confirmed that the
              bird has left the area.4. If surveys find leas …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-2">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">6.3.2.4</span
              ><span class="bcn-omni-row__title"
                >Western Yellow-Billed Cuckoo Avoidance and Minimization Measures</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… area.2. Two weeks prior to construction, a Service- and CDFW-approved
              <mark>biologist</mark> will conduct daily surveys, consistent with a
              Service- or CDFW-approv … 0 feet of the habitat being used until the
              Service- and CDFW-approved <mark>biologist</mark> has confirmed that the
              bird has left the area.4. If surveys find cuck …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-3">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">6.3.2.5</span
              ><span class="bcn-omni-row__title"
                >California Red-Legged Frog Avoidance and Minimization Measures</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >1. When each site is available for surveys, a Service-approved
              <mark>biologist</mark> will then delineate California red-legged frog
              habitat at each projec … and upland habitat.2. Once habitat has been
              delineated, the qualified <mark>biologist</mark> will conduct
              preconstruction surveys performed using a method approve …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-26">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">AMM-14</span
              ><span class="bcn-omni-row__title"
                >Construction Best Management Practices for Biological Resources</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… nities to implement BMPs and have construction monitored by qualified
              <mark>biologist</mark>s (experienced with the resources and environmental
              compliance trainin … a Aqueduct and Delta-Mendota Canal: August 1 to October
              31. Qualified <mark>biologist</mark>s will monitor construction activities
              in areas identified during the …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-29">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">AMM-17</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Terrestrial Biological Resources from
                Maintenance Activities</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… with current DWR environmental clearance review procedures, qualified
              <mark>biologist</mark>s will implement the following measures to avoid and
              minimize impacts … low.Prior to the start of maintenance activities, a
              qualified team of <mark>biologist</mark>s will conduct an environmental
              review of the potential for maintenanc …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-34">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">AMM-22</span
              ><span class="bcn-omni-row__title"
                >Electrical Power Line Support Placement</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ural lands. Non-disturbance buffers will be determined by a qualified
              <mark>biologist</mark> in coordination with the electric utility provider
              and the size of th … rarity and sensitivity of the resource as identified by
              the qualified <mark>biologist</mark>. In cases where sensitive habitat
              cannot be feasibly avoided, disturb …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-35">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">AMM-23</span
              ><span class="bcn-omni-row__title"
                >Develop and Implement a Mercury Management and Monitoring Plan</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… itions.DWR will retain a qualified water quality specialist, wildlife
              <mark>biologist</mark>, or fisheries <mark>biologist</mark> with expertise
              in methylmercury management to develop the MMMP.Mercur …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-47">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">AQUA-1c</span
              ><span class="bcn-omni-row__title"
                >Develop and Implement a Fish Rescue and Salvage Plan</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… e operations will be conducted under the guidance of a qualified fish
              <mark>biologist</mark>[1] and in accordance with required permits. Each fish
              rescue plan wil … and salvage operations will be conducted under the
              guidance of a fish <mark>biologist</mark> meeting the qualification
              requirements described under Qualifications …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-48">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-2a</span
              ><span class="bcn-omni-row__title"
                >Avoid or Minimize Impacts on Special-Status Natural Communities and
                Special-Status Plants</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… communities and special-status plants will be conducted by qualified
              <mark>biologist</mark>s following Guidelines for Conducting and Reporting
              Botanical Inventor …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-49">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-2b</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Terrestrial Biological Resources from
                Maintenance Activities (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… with current DWR environmental clearance review procedures, qualified
              <mark>biologist</mark>s will implement the following measures to avoid and
              minimize impacts … 1. Prior to the start of maintenance activities, a
              qualified team of <mark>biologist</mark>s will conduct an environmental
              review of the potential for maintenanc …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-51">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-14</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts from Construction on Vernal Pool Aquatic
                Invertebrates and Critical Habitat for Vernal Pool Fairy Shrimp
                (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ucted according to the most recent USFWS guidelines by USFWS-approved
              <mark>biologist</mark>s with the appropriate recovery permit under Section
              10(a)(1)(A) of th …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-52">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-18</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Valley Elderberry Longhorn Beetle
                (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… erry shrubs to be conducted in construction areas by a USFWS-approved
              <mark>biologist</mark>. Elderberry shrubs will be avoided to the maximum
              extent practicable. …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-53">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-21</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Bumble Bees (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… nt will be surveyed for foraging individuals and nests by a qualified
              <mark>biologist</mark>(s) familiar with the identification and life
              histories of Crotch bumb … g place within 72 hours prior to construction
              activity. The qualified <mark>biologist</mark> will perform meandering
              transects through the planned construction fo …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-54">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-22a</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on California Tiger Salamander (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… 1. When each site is available for surveys a USFWS- and CDFW-approved
              <mark>biologist</mark> will then delineate California tiger salamander
              habitat at each proje … es. 2. Once habitat has been delineated, the USFWS-
              and CDFW-approved <mark>biologist</mark> may use preconstruction surveys
              performed using a method approved by …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-56">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-23</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Western Spadefoot Toad (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… uitability of the modeled habitat will be assessed on the ground by a
              <mark>biologist</mark> qualified to identify aquatic and upland habitat for
              the species. For … itiated until after the habitat is no longer ponding
              water or until a <mark>biologist</mark> has surveyed the aquatic habitat for
              presence of western spadefoot to …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-57">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-24a</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on California Red-Legged Frog and Critical
                Habitat (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… t the following measures. 5. When each site is available for surveys,
              <mark>biologist</mark> approved by USFWS, will then delineate California
              red-legged frog hab … and upland habitat.6. Once habitat has been
              delineated, the qualified <mark>biologist</mark> may conduct surveys
              performed using a method approved by USFWS to det …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-59">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-25</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Western Pond Turtle (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… tation and prior to project construction in a given area. A qualified
              <mark>biologist</mark> will conduct a field evaluation of suitable upland or
              aquatic habitat … habitat). 2. Preconstruction surveys will be conducted by
              a qualified <mark>biologist</mark> immediately prior to the initiation of
              any ground-disturbing activiti …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-60">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-26</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Special-Status Reptiles (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… tation and prior to project construction, DWR will direct a qualified
              <mark>biologist</mark> to conduct a habitat assessment in modeled habitat
              for coast horned l … ies as defined above. 2. Where suitable habitat exists,
              the qualified <mark>biologist</mark> will conduct a preconstruction survey
              for special-status reptiles imm …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-61">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-30</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Giant Garter Snake (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… . When each site is available for surveys, a USFWS- and CDFW-approved
              <mark>biologist</mark> will then delineate giant garter snake habitat at
              each project site, … h aquatic and upland habitat.2. Once habitat has been
              delineated, the <mark>biologist</mark> may use giant garter snake
              preconstruction surveys performed using a …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-62">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-31</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Western Yellow-Billed Cuckoo (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… e area.2. Two weeks prior to construction, a USFWS- and CDFW-approved
              <mark>biologist</mark> will conduct daily surveys, consistent with a USFWS-
              or CDFW-approved … 500 feet of the habitat being used until the USFWS- and
              CDFW-approved <mark>biologist</mark> has confirmed that the bird has left
              the area.4. If surveys find cuck …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-63">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-32</span
              ><span class="bcn-omni-row__title"
                >Conduct Preconstruction Surveys and Implement Protective Measures to
                Avoid Disturbance of California Black Rail (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… elta (as determined by field evaluations conducted by a CDFW-approved
              <mark>biologist</mark> with experience surveying for black rail) over 10
              inches high, whethe … g new information and best-available science and will
              be conducted by <mark>biologist</mark>s with the qualifications stipulated
              in the CDFW-approved methodologie …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-64">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-33</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Disturbance of Sandhill Cranes (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… hill Crane, and Section 13B.59, Lesser Sandhill Crane) by a qualified
              <mark>biologist</mark> familiar with sandhill crane biology and experienced
              with sandhill cr … disturbance, over multiple days within the survey area by
              a qualified <mark>biologist</mark> with experience observing the species.
              DWR will coordinate with CDFW and Refuge <mark>biologist</mark>s prior to
              conducting sandhill crane preconstruction surveys.b. Prior …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-65">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-34</span
              ><span class="bcn-omni-row__title"
                >Avoid California Least Tern Nesting Colonies and Minimize Indirect
                Effects on Colonies (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… o August 15). Surveys will be conducted by a USFWS- and CDFW-approved
              <mark>biologist</mark> with experience observing the species and its nests.
              DWR will impleme … s determined through surveys). a. A USFWS- and
              CDFW-approved wildlife <mark>biologist</mark> will monitor construction
              activities within 500 feet of the nests to …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-66">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-35</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Cormorant, Heron, and Egret Rookeries
                (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ble, as determined by the contractor in coordination with a qualified
              <mark>biologist</mark>, vegetation removal and trimming will be scheduled
              during the nonbree … ing the breeding (February 1 through August 31) season
              by a qualified <mark>biologist</mark> with experience observing cormorants,
              herons, and egrets and their ne …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-67">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-36a</span
              ><span class="bcn-omni-row__title"
                >Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds
                and Raptors and Implement Protective Measures to Avoid Disturbance of
                Nesting Birds and Raptors (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ble, as determined by the contractor in coordination with a qualified
              <mark>biologist</mark>, construction activities, vegetation removal, and
              trimming will be sc … d as described below.2. Preconstruction Surveys. A
              qualified wildlife <mark>biologist</mark> with knowledge of the relevant
              species will conduct nesting surveys b …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-68">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-36b</span
              ><span class="bcn-omni-row__title"
                >Conduct Preconstruction Surveys and Implement Protective Measures to
                Avoid Disturbance of White-Tailed Kite (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ion Surveys. Preconstruction surveys will be conducted by a qualified
              <mark>biologist</mark>(s) to identify the presence of potential white-tailed
              kite nest trees … days prior to commencement of construction activities. The
              qualified <mark>biologist</mark>(s) will conduct a second survey of
              potential nesting trees and active …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-69">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-37</span
              ><span class="bcn-omni-row__title"
                >Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied Nests
                (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ior to the start of construction, DWR will require qualified wildlife
              <mark>biologist</mark>s (experienced with raptor identification and
              behaviors) to conduct fo … approved guidance, if it becomes available. If
              the qualified wildlife <mark>biologist</mark>(s) determines that a nesting
              eagle is disturbed by construction activities, the qualified wildlife
              <mark>biologist</mark>(s) will have the authority to increase the
              non-disturbance buffer in …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-70">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-39</span
              ><span class="bcn-omni-row__title"
                >Conduct Preconstruction Surveys and Implement Protective Measures to
                Minimize Disturbance of Swainson's Hawk (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… Surveys. Preconstruction surveys will be conducted by a CDFW-approved
              <mark>biologist</mark>(s) to identify the presence of suitable Swainson’s
              hawk nest trees an … in all suitable and known nest trees identified by the
              CDFW-approved <mark>biologist</mark>(s) and are consistent with the
              Recommended Timing and Methodology for …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-71">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-40</span
              ><span class="bcn-omni-row__title"
                >Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… e, as determined by the contractor in coordination with the qualified
              <mark>biologist</mark>, burrowing owls will be avoided by relocating work
              areas with flexibl … ide of the nesting season (February 1 through August
              31), a qualified <mark>biologist</mark> will establish a non-disturbance
              buffer that extends a minimum of 328 …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-72">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-42</span
              ><span class="bcn-omni-row__title"
                >Conduct Surveys and Minimize Impacts on Least Bell's Vireo (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… e area.2. Two weeks prior to construction, a USFWS- and CDFW-approved
              <mark>biologist</mark> will conduct daily surveys, consistent with a USFWS-
              or CDFW- approve … 500 feet of the habitat being used until the USFWS- and
              CDFW-approved <mark>biologist</mark> has confirmed that the bird has left
              the area.4. If surveys find leas …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-73">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-44</span
              ><span class="bcn-omni-row__title"
                >Conduct Preconstruction Surveys and Implement Protective Measures to
                Avoid Disturbance of Tricolored Blackbird (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… nd within 1,300 feet (396 meters) of the work area, the CDFW-approved
              <mark>biologist</mark>(s) will conduct preconstruction surveys to evaluate
              the presence of t … nstruction is initiated during the breeding season, the
              CDFW-approved <mark>biologist</mark>(s) will conduct three surveys within 15
              days of construction, with on …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-75">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-45b</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Roosting Bats (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… molition, beginning on a bridge, overpass or a structure, a qualified
              <mark>biologist</mark>, with knowledge of the natural history of California
              bats, experience … enough time to conduct surveys and plan for evictions, if
              necessary. <mark>Biologist</mark>s conducting daytime surveys will listen
              for audible social calls thro …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-76">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-46</span
              ><span class="bcn-omni-row__title"
                >Conduct Preconstruction Survey for San Joaquin Kit Fox and Implement
                Avoidance and Minimization Measures (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… DWR will require suitability assessments of the modeled habitat by a
              <mark>biologist</mark> qualified to identify suitable habitat for this
              species. Surveys will … aging areas related to project activities. A USFWS-
              and CDFW-approved <mark>biologist</mark> with experience surveying for and
              observing the species will survey t …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-77">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-47</span
              ><span class="bcn-omni-row__title"
                >Conduct Preconstruction Survey for American Badger and Implement
                Avoidance and Minimization Measures (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >DWR will require a qualified <mark>biologist</mark> to survey for American
              badger concurrently with the preconstruction s … nce. If an active den is
              detected within the work area, the qualified <mark>biologist</mark> will
              establish a minimum 100-foot non-disturbance buffer around the den until the
              <mark>biologist</mark> determines that the den is no longer active through
              direct monitoring …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-78">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">BIO-53</span
              ><span class="bcn-omni-row__title"
                >Avoid and Minimize Impacts on Terrestrial Wildlife Connectivity and
                Movement (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ll be developed and conducted in coordination with an agency-approved
              <mark>biologist</mark> qualified and experienced in wildlife crossing and
              connectivity planning and design. The agency-approved
              <mark>biologist</mark> must demonstrate an understanding of the species’
              ecological, behavio … function, into project plans and specifications. The
              agency-approved <mark>biologist</mark> will oversee development and design
              of wildlife crossing structures, …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-79">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">CM 6.3.2.1</span
              ><span class="bcn-omni-row__title"
                >San Joaquin Kit Fox Avoidance and Minimization Measures</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ing areas related to project activities. A Service- and CDFW-approved
              <mark>biologist</mark> with experience surveying for and observing the
              species will survey t … s is granted within the 200-foot radius of the
              project footprint. The <mark>biologist</mark>s will conduct these searches
              by systematically walking 30- to 100-foo …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-112">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">CMP-29</span
              ><span class="bcn-omni-row__title">Crotch Bumble Bee Habitat</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… t the unsuccessful relocation of a nest, as determined by a qualified
              <mark>biologist</mark>, suitable habitat will be created, enhanced, or
              protected, using the …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-134">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 9.2</span
              ><span class="bcn-omni-row__title"
                >Designated <mark>Biologist</mark>(s), Fisheries
                <mark>Biologist</mark>s(s), Biological Monitor(s)</span
              ></span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-135">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 9.3</span
              ><span class="bcn-omni-row__title"
                >Designated <mark>Biologist</mark>(s), Fisheries
                <mark>Biologist</mark>s(s), Biological Monitor(s) [Stop Work]
                Authority</span
              ></span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-136">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 9.4</span
              ><span class="bcn-omni-row__title">Education Program</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… ork. The training shall consist of a presentation from the Designated
              <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), or
              Biological Monitor(s) that includes: Important timing windows … lities of
              workers, managers, Designated Representative(s), Designated
              <mark>Biologist</mark>(s), Designated Fisheries <mark>Biologist</mark>(s),
              and Biological Monitor(s). Measures to take when encountering Cov …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-137">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 9.5</span
              ><span class="bcn-omni-row__title"
                >Construction Monitoring Documentation</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >9.5 Construction Monitoring Documentation. The Designated
              <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), or
              Biological Monitor(s) shall maintain construction-monitoring d …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-139">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 9.7</span
              ><span class="bcn-omni-row__title">Erosion Control</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… (rainfall exceeding 0.5 inch during a 24-hour period). The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall monitor each
              Project constructi …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-141">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 9.9</span
              ><span class="bcn-omni-row__title">Delineation of Habitat</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… tus of the fencing shall be verified and documented by the Designated
              <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), or
              Biological Monitor(s) within the Monthly Compliance Report (Co …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-144">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 9.12</span
              ><span class="bcn-omni-row__title"
                >Vehicle and Equipment Inspection</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… Vehicles and equipment shall be visually inspected by the Designated
              <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), and/or
              Biological Monitor(s) before being moved if they have been … s to move
              unimpeded to a safe location. Alternatively, the Designated
              <mark>Biologist</mark>(s) or Fisheries <mark>Biologist</mark>(s) shall be
              contacted to determine if the individual may be safely mo …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-156">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 10.6</span
              ><span class="bcn-omni-row__title">Photo Monitoring</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… with the coordinate system identified. (4) If CDFW or the Designated
              <mark>Biologist</mark>(s) determines that additional monitoring stations are
              necessary, the …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-158">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 10.8</span
              ><span class="bcn-omni-row__title">Habitat Evaluation</span></span
            >
            <span class="bcn-omni-row__snippet"
              >10.8 Habitat Evaluation. The Designated <mark>Biologist</mark>(s) shall
              conduct a field survey and identify suitable habitat for eac … Covered
              Species as well as the total area surveyed by the Designated
              <mark>Biologist</mark>(s).</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-160">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 10.10</span
              ><span class="bcn-omni-row__title">Daily Compliance Monitoring</span></span
            >
            <span class="bcn-omni-row__snippet"
              >10.10 Daily Compliance Monitoring. The Designated <mark>Biologist</mark>(s)
              and/or Biological Monitor(s) shall be present at each Project cons … d after
              clearing, grubbing, and grading are completed. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall conduct
              compliance inspections …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-162">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 10.12</span
              ><span class="bcn-omni-row__title">Monthly Compliance Report</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… onthly Compliance Report. The Designated Representative or Designated
              <mark>Biologist</mark> shall compile the observation and inspection records
              identified in Co …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-164">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 10.14</span
              ><span class="bcn-omni-row__title">CNDDB Observations</span></span
            >
            <span class="bcn-omni-row__snippet"
              >10.14 CNDDB Observations. The Designated <mark>Biologist</mark>(s) and/or
              Biological Monitor(s) shall submit all observations of Cove … ivities within
              60 calendar days of the observation and the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall include copies
              of the submitted …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-165">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 10.15</span
              ><span class="bcn-omni-row__title">Final Mitigation Report</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… tigation measures for all Project Phases are complete. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall prepare each
              Final Phase Mitiga … ee shall provide CDFW with a Mitigation Status Report.
              The Designated <mark>Biologist</mark>(s), Fisheries
              <mark>Biologist</mark>(s), and/or Biological Monitor(s) shall prepare the
              Mitigation Status …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-166">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 10.16</span
              ><span class="bcn-omni-row__title"
                >Notification of Take or Injury/Damage</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… e or Injury/Damage. Permittee shall immediately notify the Designated
              <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), and/or
              Biological Monitor(s) if a Covered Species is taken or inj … or
              injured/damaged within the vicinity of the Project. The Designated
              <mark>Biologist</mark>(s) or Permittee’s Designated Representative shall
              provide initial not …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-171">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 10.21</span
              ><span class="bcn-omni-row__title"
                >Ecological Response Evaluation Studies</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… n-water Preconstruction Monitoring, Permittee shall convene a team of
              <mark>biologist</mark>s and hydrologic engineers to collaboratively develop
              a Joint Operatio …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-181">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.1</span
              ><span class="bcn-omni-row__title">Covered Species Observations</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… ntenance, Permittee shall direct all workers to inform the Designated
              <mark>Biologist</mark>(s), Fisheries <mark>Biologist</mark>(s), or
              Biological Monitor(s) if they encounter any Covered Species wi …
              construction site and cannot move of its own volition, the Designated
              <mark>Biologist</mark>(s) shall move the animal outside of the area of
              construction accordin …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-182">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.2</span
              ><span class="bcn-omni-row__title">Covered Species Injury</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… Species is injured as a result of Covered Activities, the Designated
              <mark>Biologist</mark> shall immediately take it to a CDFW-approved wildlife
              rehabilitation …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-183">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.3</span
              ><span class="bcn-omni-row__title"
                >Covered Species Capture, Handling, and Reporting</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >11.3 Covered Species Capture, Handling, and Reporting. The Designated
              <mark>Biologist</mark>(s) shall be responsible for and direct efforts to
              capture and handle Covered Species. The Designated <mark>Biologist</mark>(s)
              shall ensure their hands are free of soaps, oils, creams, lotions, … be used
              for handling special-status fish or wildlife. The Designated
              <mark>Biologist</mark>(s) shall maintain monitoring records that include,
              but are not limite …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-190">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.10</span
              ><span class="bcn-omni-row__title"
                >Visual Barriers Along Access Routes for Nighttime Activities</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… talled within 300 feet of CTS and GGS upland habitats. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall assess the
              locations of the ide …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-193">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.13</span
              ><span class="bcn-omni-row__title">Precipitation Work Limit</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… control measures prior to all storm events. Permittee and Designated
              <mark>Biologist</mark>(s) shall monitor the National Weather Service
              (http://www.nws.noaa.go … is 0% chance of precipitation in the 72-hour
              forecast. The Designated <mark>Biologist</mark>(s) shall survey each Project
              construction site before Covered Activit …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-194">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.14</span
              ><span class="bcn-omni-row__title">Daily Entrapment Inspections</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… that may be occupied by wildlife shall be inspected by the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) prior to initiation
              of any Covered Ac … ent entrapment of Covered Species during construction.
              The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
              ensure that all excavated areas …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-195">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.15</span
              ><span class="bcn-omni-row__title"
                >Pipes, Culverts, and Other Materials Inspections</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ore overnight periods shall be thoroughly inspected by the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) for Covered Species
              prior to the init … mum and removed regularly after thorough inspection by
              the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s). If
              Project personnel detect Covered …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-198">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.18</span
              ><span class="bcn-omni-row__title">Vegetation Management</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… itable GGS habitat, unless otherwise approved by CDFW. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor shall be on site during
              vegetation manag …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-199">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.19</span
              ><span class="bcn-omni-row__title"
                >Prevention of Spread of Invasive Species</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… of restored areas (see Condition of Approval 12.3.4). The Designated
              <mark>Biologist</mark>(s) qualified to do botanical surveys and approved by
              CDFW shall submi … sampling methodology is conducted annually thereafter by
              a Designated <mark>Biologist</mark>(s). The pre-Project baseline condition
              survey results and subsequent …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-206">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.26</span
              ><span class="bcn-omni-row__title"
                >Erosion and Sediment Control Plans</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… visibility during monitoring of the Covered Species by the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s). Each site-specific
              plan shall take i …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-207">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.27</span
              ><span class="bcn-omni-row__title"
                >Erosion Control Stabilization Prohibitions</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… infall exceeding 0.25 inches during a 24-hour period). The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall monitor erosion
              control measure …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-209">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.29</span
              ><span class="bcn-omni-row__title">Fugitive Dust Control</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… te visibility for monitoring of the Covered Species by the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s). Fugitive dust
              control measures shall …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-215">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.35</span
              ><span class="bcn-omni-row__title">Fish Salvage Plan</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… Obligation for the Designated Representative or Designated Fisheries
              <mark>Biologist</mark>(s) to notify CDFW at least seven days prior to
              site-specific dewateri … onducting fish salvage efforts have at least one
              Designated Fisheries <mark>Biologist</mark>. Safety training for fish rescue
              workers shall be provided prior to a …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-216">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.36</span
              ><span class="bcn-omni-row__title">Barge Operations Plan</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… state navigation regulations that apply to the Delta. The Designated
              <mark>Biologist</mark>(s) or Fisheries <mark>Biologist</mark>(s) shall
              conduct visual inspections for invasive aquatic species on a … ats, prior to
              equipment deployment into a waterway. If the Designated
              <mark>Biologist</mark>(s) or Fisheries <mark>Biologist</mark>(s) detects the
              presence of invasive aquatic species on equipment, the …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-217">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.37</span
              ><span class="bcn-omni-row__title">Dewatering Plan</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… ivity that could potentially impact Covered Fish Species, a Fisheries
              <mark>Biologist</mark>(s) shall remain onsite to observe the process and
              remove Covered Spec … operations cannot be conducted effectively or safely
              by the Fisheries <mark>Biologist</mark>(s), it may be necessary to begin the
              dewatering process prior to salvage. During the dewatering process, a
              Fisheries <mark>Biologist</mark>(s) shall be onsite to implement Covered
              Species salvage during dewate …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-219">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.39</span
              ><span class="bcn-omni-row__title">CTS Avoidance</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… n of Approval 6.2). All Project personnel shall inform the Designated
              <mark>Biologist</mark>(s) if they encounter CTS, or a salamander resembling
              CTS, within the … -foot radius of that refuge (no-activity buffer) until the
              Designated <mark>Biologist</mark>(s) is contacted and on-site. If the
              Covered Activities cannot avoid the refuge, only the Designated
              <mark>Biologist</mark>(s) shall excavate, expose, and relocate the CTS in
              accordance with Co …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-220">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.40</span
              ><span class="bcn-omni-row__title"
                >CTS Breeding Habitat Avoidance Near Conserved Lands</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… 40 Breeding Habitat Avoidance Near Conserved Lands. If the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) identifies suitable
              aquatic breeding …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-221">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.41</span
              ><span class="bcn-omni-row__title"
                >CTS Preconstruction Activities, SCADA and Transmission Line Construction
                and Maintenance, Access Road Construction and Maintenance Activities</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… Revegetation Plan (see Condition of Approval 12.3.3). The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall be present
              during selection of … atures until avoidance routes are clearly established.
              The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
              flag potentially occupied burro …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-222">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.42</span
              ><span class="bcn-omni-row__title">CTS Surveys</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… nia Tiger Salamander (CTS) Measures 11.42 CTS Surveys. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall conduct CTS
              surveys following C … ch Annual Status Report (Condition of Approval 10.13).
              The Designated <mark>Biologist</mark>(s) and/or Biological monitor(s) shall
              complete walking surveys of the …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-223">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.43</span
              ><span class="bcn-omni-row__title"
                >CTS Exclusion Barrier Installation and Maintenance</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… to initiation of ground disturbing Covered Activities the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall conduct a CTS
              survey consistent … the Permittee throughout all construction activities.
              The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
              inspect the area prior to and d …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-224">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.44</span
              ><span class="bcn-omni-row__title">CTS Seasonal Work Window</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… dry for a minimum of 30 days prior to initiating work, the Designated
              <mark>Biologist</mark>(s) has conducted surveys for presence of CTS
              consistent with Conditio …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-225">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.45</span
              ><span class="bcn-omni-row__title">CTS Rain Forecast</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… are not encircled by CTS exclusion fencing. Permittee and Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall monitor the
              72-hour weather for … rcent chance of precipitation in the 72-hour forecast.
              The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
              survey each Project site before …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-226">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.46</span
              ><span class="bcn-omni-row__title"
                >CTS Time of Day Work Restrictions</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… cally and temporally variable and shall be assessed by the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) on each Project
              construction site and …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-227">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.47</span
              ><span class="bcn-omni-row__title">CTS - Night Work</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… in 300 feet of suitable CTS habitat during night work, the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall be present to
              survey CTS burrow … d by artificial lighting. If CTS is found aboveground,
              the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
              have the authority to stop Cove …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-228">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.48</span
              ><span class="bcn-omni-row__title"
                >CTS - Initial Site Clearing and Monitoring</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… on fencing is installed (Condition of Approval 11.43). The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall be onsite
              during clearance work … al CTS hiding spots (see Condition of Approval
              11.49). The Designated <mark>Biologist</mark>(s) and/or Biological
              Monitor(s) shall conduct CTS surveys prior to in …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-229">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.49</span
              ><span class="bcn-omni-row__title"
                >CTS - Avoidance or Treatment of Burrows</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… area of temporary disturbance shall remain intact and the Designated
              <mark>Biologist</mark>(s) shall monitor to determine vacancy, then block the
              entrance by ins … tering and using the burrow during Covered Activities. The
              Designated <mark>Biologist</mark>(s) shall remove the object immediately
              after Covered Activities are completed in that work site when the Designated
              <mark>Biologist</mark>(s) has determined that potential resumed use of the
              burrow will not r …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-230">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.50</span
              ><span class="bcn-omni-row__title">CTS Capture and Handling</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… apture and Handling. Prior to handling and relocation, the Designated
              <mark>Biologist</mark>(s) and Biological Monitor(s) shall take precautions
              to prevent introd … from Covered Activities on its own, only the CDFW
              approved Designated <mark>Biologist</mark>(s) shall capture it using
              CDFW-approved methodologies. CTS shall be h …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-231">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.51</span
              ><span class="bcn-omni-row__title"
                >CTS Mortality Reductions and Relocation Plan</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… n shall include, but is not limited to, the name(s) of the Designated
              <mark>Biologist</mark>(s) who will relocate CTS individuals, methods for
              hand excavation of … ite (75-foot boundary), Project personnel shall notify
              the Designated <mark>Biologist</mark>(s) immediately. If CTS is encountered
              within a Project construction s …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-232">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.52</span
              ><span class="bcn-omni-row__title"
                >CTS - Notification of CTS Take or Injury</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… CTS Take or Injury. Permittee shall immediately notify the Designated
              <mark>Biologist</mark>(s) if a CTS is injured or killed by a Covered
              Activity, or if a CTS i … vered Activities, the individual shall be
              evaluated by the Designated <mark>Biologist</mark>(s) who shall immediately
              take the injured CTS to a CDFW-approved wild …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-234">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.54</span
              ><span class="bcn-omni-row__title"
                >GGS - Establishment of Environmentally Sensitive Areas (ESAs).</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ESA fencing around suitable GGS habitat as directed by the Designated
              <mark>Biologist</mark>(s). ESAs shall be demarcated by tying high visibility
              poly wire to st … 00 feet from the edge of the suitable aquatic habitat. The
              Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
              identify and flag all potential …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-235">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.55</span
              ><span class="bcn-omni-row__title">GGS Avoidance</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… nd approval prior to initiation of Covered Activities. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall: help guide
              Project access and … ties to facilitate visibility for monitoring of GGS by
              the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s).
              Project personnel shall inform the Designated <mark>Biologist</mark>(s)
              and/or Biological Monitor(s) if they encounter GGS, or any snake r …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-236">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.56</span
              ><span class="bcn-omni-row__title">GGS Surveys</span></span
            >
            <span class="bcn-omni-row__snippet"
              >11.56 GGS Surveys. The Designated <mark>Biologist</mark>(s) with assistance
              (if needed) from the Biological Monitor(s) shall c … e season (May 1 to
              October 1). If a GGS is discovered, the Designated <mark>Biologist</mark>(s)
              and/or Biological Monitor(s) shall have the authority to delay ins …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-237">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.57</span
              ><span class="bcn-omni-row__title">GGS - Mowing</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… July 1 to September 30 in suitable GGS habitat and after a Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) has performed
              clearance surveys to en … njuring GGS and to retain grassy cover and that
              allows the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
              to see and survey for snakes and burrows. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall be onsite
              during all mowing and trenching activities. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall walk in front
              of the mower and …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-240">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.60</span
              ><span class="bcn-omni-row__title"
                >GGS - Channel Management and Seasonal Work Restriction</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… and absence of overwintering GGS has been confirmed by the Designated
              <mark>Biologist</mark>(s). Permittee shall confine all excavation/dredging
              to the channel be … mittee shall request written approval by CDFW and have
              the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) survey
              following CDFW-approved protoc …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-241">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.61</span
              ><span class="bcn-omni-row__title"
                >Dewatered GGS Aquatic Habitat</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ensure that alternative aquatic habitat is available. The Designated
              <mark>Biologist</mark>(s) shall be on site during all dewatering activities,
              particularly wh … dewatering, they shall shut down the pump and contact the
              Designated <mark>Biologist</mark>(s) to relocate the snake (see Condition of
              Approval 11.67). Permittee …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-242">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.62</span
              ><span class="bcn-omni-row__title"
                >GGS Exclusion Barrier Installation and Maintenance</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… the aquatic habitat unless otherwise approved by CDFW. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall inspect the
              area prior to and d … foot traffic in suitable habitat. After installation,
              the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
              inspect the barrier daily and d …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-243">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.63</span
              ><span class="bcn-omni-row__title"
                >GGS - Initial Site Clearing and Monitoring</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… minimal area necessary to conduct Covered Activities. The Designated
              <mark>Biologist</mark>(s) with assistance (if needed) from Biological
              Monitor(s) shall be on … ion site each morning before construction work
              begins. The Designated <mark>Biologist</mark>(s) and/or Biological
              Monitor(s) shall monitor burrows that have not been blocked or excavated for
              emerging GGS. The Designated <mark>Biologist</mark>(s) and/or Biological
              Monitor(s) shall also check any potential hiding …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-245">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.65</span
              ><span class="bcn-omni-row__title"
                >GGS - Restoration of Temporary Impacts</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… se Covered Activities in suitable GGS aquatic habitat. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall delineate
              suitable upland habit … thin exploration sites and on non-public access
              roads. The Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s)
              shall be on-site during selection of …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-246">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.66</span
              ><span class="bcn-omni-row__title"
                >GGS - Restoration of Temporary Impacts</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… until restoration success is achieved as determined by the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) and CDFW. 44U.S. Fish
              and Wildlife Se …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-247">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.67</span
              ><span class="bcn-omni-row__title"
                >GGS - Mortality Reduction and Relocation Plan</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… n shall include, but is not limited to, the name(s) of the Designated
              <mark>Biologist</mark>(s) who will relocate GGS individuals, the proposed
              methods of capture … GGS may only be captured and handled by the
              CDFW-approved Designated <mark>Biologist</mark>(s) (see Condition of
              Approval 9.2.1). If a GGS, or a snake resembling …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-248">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.68</span
              ><span class="bcn-omni-row__title"
                >GGS - Notification of GGS Take or Injury</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… GGS Take or Injury. Permittee shall immediately notify the Designated
              <mark>Biologist</mark>(s) if a GGS is injured or killed by a Covered
              Activity, or if a GGS i … tion activity, construction site, or maintenance
              area. The Designated <mark>Biologist</mark>(s) shall immediately take the
              GGS to a CDFW-approved wildlife rehabil …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-249">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.69</span
              ><span class="bcn-omni-row__title">SWHA Avoidance</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… ies to facilitate visibility for monitoring of SWHA by the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s).</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-250">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.70</span
              ><span class="bcn-omni-row__title"
                >SWHA Seasonal Work Restriction</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… of suitable known or occupied nest trees identified by the Designated
              <mark>Biologist</mark>(s), Permittee shall limit Covered Activities to occur
              only outside th … aying until after young have fledged, as determined by the
              Designated <mark>Biologist</mark>(s), to the maximum extent practicable. If
              not practicable, Permittee …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-251">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.71</span
              ><span class="bcn-omni-row__title">SWHA Surveys</span></span
            >
            <span class="bcn-omni-row__snippet"
              >Swainson’s Hawk (SWHA) Measures - 11.71 SWHA Surveys. The Designated
              <mark>Biologist</mark>(s) with assistance (if needed) from the Biological
              Monitor(s) shall c … ted in all suitable and known nest trees identified by
              the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) and
              are consistent with the Recommend …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-252">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.72</span
              ><span class="bcn-omni-row__title">SWHA No -Disturbance Buffer</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… in 0.5 miles of an occupied SWHA nest tree, Permittee, the Designated
              <mark>Biologist</mark>(s), and the Biological Monitor(s) shall ensure that
              no Covered Activi …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-253">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.73</span
              ><span class="bcn-omni-row__title">SWHA Nest Monitoring</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… or within 0.5 miles of a Project construction site(s), the Designated
              <mark>Biologist</mark>(s) with assistance (if needed) from the Biological
              Monitor(s) shall b … ccur. If a nesting bird monitoring plan is prepared by
              the Designated <mark>Biologist</mark>(s) and approved in writing by CDFW as
              part of a Construction Phase Au …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-254">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.74</span
              ><span class="bcn-omni-row__title"
                >SWHA Disturbance of Occupied Nest Tree</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… en obtained in writing from CDFW. In consultation with the Designated
              <mark>Biologist</mark>(s), Permittee shall stage stationary, not in-use
              equipment outside of …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-255">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.75</span
              ><span class="bcn-omni-row__title"
                >SWHA Authority of the Designated <mark>Biologist</mark> (s)</span
              ></span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-256">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.76</span
              ><span class="bcn-omni-row__title">SWHA Nest Tree Avoidance</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… ntil the last young have left the nest, as verified by the Designated
              <mark>Biologist</mark>(s).</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-257">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.77</span
              ><span class="bcn-omni-row__title">SWHA Vegetation Removal</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… birds, unless preconstruction surveys are conducted by the Designated
              <mark>Biologist</mark>(s) and recently used SWHA nests or active SWHA nests
              are determined to be absent from the trees and/or shrubs to be removed. The
              Designated <mark>Biologist</mark>(s) shall notify CDFW of survey results
              prior to any vegetation remova … l not remove vegetation within 656 feet of
              SWHA nests. The Designated <mark>Biologist</mark>(s) and/or Biological
              Monitor(s) shall delineate, flag, and avoid any …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-258">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.78</span
              ><span class="bcn-omni-row__title"
                >SWHA Preconstruction Activities</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… wk (SWHA) Measures - 11.78 Preconstruction Activities. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall delineate
              suitable nesting habi … such activities must occur during the nesting
              season, the Designated <mark>Biologist</mark>(s) shall survey the
              preconstruction activity site and within 0.5 mile …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-259">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.79</span
              ><span class="bcn-omni-row__title"
                >SWHA Measures Specific ot SCADA and Transmission Line Construction and
                Maintenance</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… outside of suitable nesting habitat, as delineated by the Designated
              <mark>Biologist</mark>(s). Permittee shall follow requirements in Condition
              of Approval 11.7 …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-260">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.80</span
              ><span class="bcn-omni-row__title"
                >SWHA Mortality Reduction and Relocation Plan</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… HA shall only be captured and handled by the CDFW-approved Designated
              <mark>Biologist</mark>(s) with appropriate expertise in handling
              raptors.</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-261">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.81</span
              ><span class="bcn-omni-row__title"
                >SWHA Notification of SWHA Take or Injury</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… WHA Take or Injury. Permittee shall immediately notify the Designated
              <mark>Biologist</mark>(s) if a SWHA is taken or injured by a Covered
              Activity, or if a SWHA … activity site, construction site, or maintenance
              area. The Designated <mark>Biologist</mark>(s) shall immediately take the
              SWHA to a CDFW-approved wildlife rehabi …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-262">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.82</span
              ><span class="bcn-omni-row__title">TRBL Avoidance</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… e occupied by TRBL, unless otherwise approved by CDFW. The Designated
              <mark>Biologist</mark>(s) shall train Project personnel on the required
              avoidance procedures … ximum extent feasible, Permittee shall coordinate
              with the Designated <mark>Biologist</mark>(s) and CDFW to time the loudest
              or otherwise most disruptive Covered …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-263">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.83</span
              ><span class="bcn-omni-row__title"
                >TRBL Preconstruction Assessment</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… encement of Covered Activities for each Project Phase, the Designated
              <mark>Biologist</mark>(s) shall conduct a habitat assessment consistent with
              CDFW-approved p …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-264">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.84</span
              ><span class="bcn-omni-row__title">TRBL Surveys</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… icolored Blackbird (TRBL) Measures 11.84 TRBL Surveys. The Designated
              <mark>Biologist</mark>(s) with assistance (if needed) from the Biological
              Monitor(s) shall c … of the Project site unless otherwise approved by CDFW,
              the Designated <mark>Biologist</mark>(s) with assistance (if needed) from
              the Biological Monitor(s) shall c …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-266">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.86</span
              ><span class="bcn-omni-row__title">TRBL Nest Buffer Monitoring</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… in 1,300 feet of any Project-related Covered Activity, the Designated
              <mark>Biologist</mark>(s) with assistance (if needed) from the Biological
              Monitor(s) shall m … young have fledged, unless otherwise approved by CDFW.
              The Designated <mark>Biologist</mark>(s) will be on site daily while
              construction-related activities are ta …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-268">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.88</span
              ><span class="bcn-omni-row__title"
                >TRBL Roosting Site Buffer Monitoring</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ndition of Approval 11.87) shall be monitored daily by the Designated
              <mark>Biologist</mark>(s), with assistance (if needed) from the Biological
              Monitor(s), for a … onduct Covered Activities within the roosting site. If
              the Designated <mark>Biologist</mark>(s) determines that Covered Activities
              are disrupting roosting activit …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-269">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.89</span
              ><span class="bcn-omni-row__title"
                >TRBL Disturbance of Breeding Colonies and Roost Sites</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… fledged or colony is no longer active, as determined by a Designated
              <mark>Biologist</mark>(s) and approved by CDFW. Permittee shall prohibit
              physical contact wi …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-270">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.90</span
              ><span class="bcn-omni-row__title"
                >TRBL Delineation of Nesting and Roosting Habitat</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… res 11.90 Delineation of Nesting and Roosting Habitat. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall delineate
              suitable nesting and …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-272">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.92</span
              ><span class="bcn-omni-row__title"
                >TRBL Mortality Reduction and Relocation Plan</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… es 11.92 TRBL Mortality Reduction and Relocation Plan. The Designated
              <mark>Biologist</mark>(s) shall prepare a TRBL Mortality Reduction and
              Relocation Plan (TRBL … tion center or veterinary facility. Only the
              CDFW-approved Designated <mark>Biologist</mark>(s) with appropriate
              expertise in handling blackbirds shall handle and …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-273">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.93</span
              ><span class="bcn-omni-row__title"
                >Notification of TRBL Take or Injury</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… RBL Take or Injury. Permittee shall immediately notify the Designated
              <mark>Biologist</mark>(s) if TRBL is taken by a Covered Activity, or if a
              TRBL is otherwise … tion activity, construction site, or maintenance area.
              The Designated <mark>Biologist</mark>(s) shall immediately take the injured
              TRBL to a CDFW-approved wildlif …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-274">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.94</span
              ><span class="bcn-omni-row__title">CBB Avoidance</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… Activities within a 50-foot radius of that nest until the Designated
              <mark>Biologist</mark>(s) is contacted and on-site (see Condition of
              Approval 11.98). If the Covered Activities cannot avoid the nest, only the
              Designated <mark>Biologist</mark>(s) shall relocate the nest in accordance
              with Condition of Approval 11.102. All Project personnel shall inform the
              Designated <mark>Biologist</mark>(s) if they encounter CBB or an insect
              resembling CBB, within the Proj …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-275">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.95</span
              ><span class="bcn-omni-row__title">CBB Seasonal Restriction</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… on of this ITP unless otherwise approved by CDFW after the Designated
              <mark>Biologist</mark>(s) has conducted CBB surveys (see Condition of
              Approval 11.97) consis … ipitation). To determine these time periods each
              year, the Designated <mark>Biologist</mark>(s) shall conduct CDFW-approved
              CBB surveys (Condition of Approval 11. …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-277">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.97</span
              ><span class="bcn-omni-row__title">CBB Surveys</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… tion maintenance phases, surveys shall be conducted by the Designated
              <mark>Biologist</mark>(s) with assistance (if needed) from the Biological
              Monitor(s) followi … iption of vegetation communities and floral resources.
              The Designated <mark>Biologist</mark>(s) shall perform meandering transects
              through the planned constructio …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-278">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.98</span
              ><span class="bcn-omni-row__title">CBB No-activity Buffer Zone</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… mes inactive and is no longer in use, as determined by the Designated
              <mark>Biologist</mark>(s) in consultation with CDFW, or until the Covered
              Activities are com …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-279">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.99</span
              ><span class="bcn-omni-row__title">CBB Daily Monitoring</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… d areas of CBB habitat planned for Covered Activities, the Designated
              <mark>Biologist</mark>(s) shall perform CDFW-approved CBB survey protocols
              with assistance f … Once Covered Activities within CBB habitat have begun,
              the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall
              be onsite and shall conduct dai …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-280">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.100</span
              ><span class="bcn-omni-row__title"
                >CBB Avoidance or Treatment of Underground Refugia</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… s (Condition of Approval 11.38) have been performed by the Designated
              <mark>Biologist</mark>(s) and absence of overwintering CBB is confirmed. The
              Designated <mark>Biologist</mark>(s) shall flag these areas, or other
              habitat features that are outside … overed Activities stop for more than 14
              calendar days, the Designated <mark>Biologist</mark>(s) with assistance (if
              needed) from the Biological Monitor(s) shall r …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-282">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.102</span
              ><span class="bcn-omni-row__title">CBB Nest Relocation Plan</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… mes inactive and is no longer in use, as determined by the Designated
              <mark>Biologist</mark>(s) in consultation with CDFW. If Covered Activities
              cannot stop and a … prior to initiating Covered Activities. The
              CDFW-approved Designated <mark>Biologist</mark>(s) with appropriate
              expertise in bumble bee capture and handling shal …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-283">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.103</span
              ><span class="bcn-omni-row__title"
                >CBB Notification of CBB Take or Injury</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… CBB Take or Injury. Permittee shall immediately notify the Designated
              <mark>Biologist</mark>(s) if CBB is taken by a Covered Activity, or if a CBB
              is otherwise fo … tion activity, construction site, or maintenance area. The
              Designated <mark>Biologist</mark>(s) or Permittee’s Designated
              Representative shall provide initial not …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-284">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.104</span
              ><span class="bcn-omni-row__title"
                >MALI Initial Site Clearing and Monitoring</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… minimal area necessary to conduct Covered Activities. The Designated
              <mark>Biologist</mark>(s) shall be onsite each day during initial ground
              disturbing activiti … 1.106). Following initial ground-disturbance
              activities, a Designated <mark>Biologist</mark>(s) and /or Biological
              Monitor(s) shall be on site to monitor Covered …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-285">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.105</span
              ><span class="bcn-omni-row__title">MALI Surveys</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… on's Lilaeopsis (MALI) Measures - 11.105 MALI Surveys. The Designated
              <mark>Biologist</mark>(s) with assistance (if needed) from the Biological
              Monitor(s) shall c … ion surveys for MALI shall be conducted by a
              CDFW-approved Designated <mark>Biologist</mark>(s) with appropriate
              expertise identifying special-status plants that …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-286">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.106</span
              ><span class="bcn-omni-row__title">MALI No-Activity Buffer Zone</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… , or similar materials along with appropriate signage. The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall be onsite
              during all buffer ins …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-287">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.107</span
              ><span class="bcn-omni-row__title"
                >MALI Measures Specific to SCADA and Transmission Line Construction and
                Maintenance</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… placed after preconstruction surveys are conducted by the Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) prior to maintenance
              activities.</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-288">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.108</span
              ><span class="bcn-omni-row__title">MALI Translocation Plan</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… n shall include, but not be limited to, the name(s) of the Designated
              <mark>Biologist</mark>(s) who will be responsible for transplanting MALI;
              collection, handli … te or maintenance area, Project personnel shall notify
              the Designated <mark>Biologist</mark>(s) immediately. The Covered Species
              may only be collected and handled by the CDFW-approved Designated
              <mark>Biologist</mark>(s) with expertise in handling plants. The Designated
              <mark>Biologist</mark>(s) shall determine whether the plant should be
              collected and handled …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-289">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.109</span
              ><span class="bcn-omni-row__title">BUOW Avoidance</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… Covered Activities unless otherwise approved by CDFW. The Designated
              <mark>Biologist</mark>(s) shall train Project personnel on the required
              avoidance procedures … pproval 9.4. Permittee shall ensure all workers
              inform the Designated <mark>Biologist</mark>(s) if they encounter BUOW on
              site or within 1,640 feet (500 meters) o …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-290">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.110</span
              ><span class="bcn-omni-row__title"
                >Preconstruction Habitat Assessment (BUOW)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… sment.Prior to the commencement of Covered Activities, the Designated
              <mark>Biologist</mark>(s) shall conduct a suitable habitat assessment
              consistent with CDFW-a … r where the parcels are visible from authorized
              areas. The Designated <mark>Biologist</mark>(s) shall submit the results in
              a report as described in Appendix C of …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-291">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.111</span
              ><span class="bcn-omni-row__title">BUOW Surveys</span></span
            >
            <span class="bcn-omni-row__snippet"
              >11.111 BUOW Surveys.The Designated <mark>Biologist</mark>(s) with
              assistance (if needed) from the Biological Monitor(s) shall c … road
              construction, maintenance, or improvement sites), the Designated
              <mark>Biologist</mark>(s) with assistance (if needed) from the Biological
              Monitor(s) shall c …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-292">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.112</span
              ><span class="bcn-omni-row__title">BUOW Burrow Complex Map</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… veys are conducted for each Project construction site, the Designated
              <mark>Biologist</mark>(s) shall provide a map (e.g., GIS shapefile) of the
              BUOW burrow compl … ed annually with any additional surveys carried out by
              the Designated <mark>Biologist</mark>(s). The map shall include an outline
              of the Project Area and the curr …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-293">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.113</span
              ><span class="bcn-omni-row__title"
                >BUOW Seasonal Work Restrictions</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… isturbance buffers (Condition of Approval 11.114), and the Designated
              <mark>Biologist</mark>(s) shall conduct monitoring consistent with Condition
              of Approval 11. …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-294">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.114</span
              ><span class="bcn-omni-row__title"
                >Non-Disturbance Buffers (BUOW)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… of the breeding season (Condition of Approval 11.113), the Designated
              <mark>Biologist</mark>(s) shall establish a non-disturbance buffer of 1,640
              feet (500 meters … ion site after Covered Activities have been initiated,
              the Designated <mark>Biologist</mark>(s) has the authority to immediately
              stop Covered Activities, establis …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-295">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.115</span
              ><span class="bcn-omni-row__title"
                >BUOW Mortality Reduction Plan</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… to initiating any of the modifications. Only CDFW-approved Designated
              <mark>Biologist</mark>(s), or personnel under the supervision of the
              Designated <mark>Biologist</mark>(s), are authorized to handle and transport
              injured BUOW for treatment …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-296">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.116</span
              ><span class="bcn-omni-row__title">BUOW Monitoring</span></span
            >
            <span class="bcn-omni-row__snippet"
              >11.116 BUOW Monitoring.The Designated <mark>Biologist</mark>(s) and/or
              Biological Monitor(s) shall be present at all times during … ws (see
              Conditions of Approval 11.117.3 and 11.118.4). The Designated
              <mark>Biologist</mark>(s) and/or Biological Monitor(s) shall have the
              authority to issue a s …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-297">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.117</span
              ><span class="bcn-omni-row__title">BUOW Exclusion Activities</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… e limited to, the following components:(1) The appropriate Designated
              <mark>Biologist</mark>(s) for BUOW Exclusion Activities;(2) Habitat
              assessment(s) and burrow … ns. Prior to conducting any BUOW Exclusion
              Activities, the Designated <mark>Biologist</mark>(s) shall conduct a habitat
              assessment of proposed recipient site(s) ( …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-298">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.118</span
              ><span class="bcn-omni-row__title"
                >Notification of BUOW Take or Injury</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… BUOW Take or Injury.Permittee shall immediately notify the Designated
              <mark>Biologist</mark>(s) if a BUOW is taken or injured by a Covered
              Activity, or if a BUOW … tion activity, construction site, or maintenance
              area. The Designated <mark>Biologist</mark>(s) shall immediately take the
              BUOW to a CDFW-approved wildlife rehabi …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-302">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 11.122</span
              ><span class="bcn-omni-row__title">Diversion Criteria</span></span
            >
            <span class="bcn-omni-row__snippet"
              >… y data, and provide opportunities for engagement and discussion among
              <mark>biologist</mark>s and operators on relevant information and issues
              associated with the …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-312">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">COA 12.3</span
              ><span class="bcn-omni-row__title"
                >Temporary Impacts and On-Site Restoration</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… g and planting areas following vegetation restoration. The Designated
              <mark>Biologist</mark>(s) shall ensure that invasive plant removal does not
              result in damage … n Plan success criteria have been met as determined by
              the Designated <mark>Biologist</mark>(s) and/or Biological Monitor(s) and
              CDFW in writing. For the first ye …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-352">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">EC-14</span
              ><span class="bcn-omni-row__title"
                >Construction Best Management Practices for Biological Resources
                (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… mmunities implement BMPs and have construction monitored by qualified
              <mark>biologist</mark>s (experience with the resources and environmental
              compliance training … a Aqueduct and Delta-Mendota Canal: August 1 to
              October 31. Qualified <mark>biologist</mark>s will monitor construction
              activities in areas identified during the …</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-dcp-374">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">WQ-6</span
              ><span class="bcn-omni-row__title"
                >Develop and Implement a Mercury Management and Monitoring Plan
                (FEIR)</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ements DWR will retain a qualified water quality specialist, wildlife
              <mark>biologist</mark>, or fisheries <mark>biologist</mark> with expertise
              in methylmercury management to develop the MMMP. The M …</span
            >
          </span>
        </button>
      </section>
      <section class="bcn-omni-group">
        <div class="bcn-omni-group__head">
          <span class="bcn-omni-group__label">Requirements</span
          ><span class="bcn-omni-group__count">1</span>
        </div>
        <button type="button" class="bcn-omni-row" role="option" data-id="rq-buffer">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">MM-BIO-2</span
              ><span class="bcn-omni-row__title"
                >If bird nests are found, establish no-disturbance buffer zones</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… establish and flag no-disturbance buffer zones sized by the qualified
              <mark>biologist</mark>; restrict ground-disturbing activities, demolition,
              and vegetation re …</span
            >
          </span>
        </button>
      </section>
      <section class="bcn-omni-group">
        <div class="bcn-omni-group__head">
          <span class="bcn-omni-group__label">Actions</span
          ><span class="bcn-omni-group__count">2</span>
        </div>
        <button
          type="button"
          class="bcn-omni-row"
          role="option"
          data-id="ac-weap-schedule"
        >
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__title"
                >Schedule WEAP training session with qualified
                <mark>biologist</mark></span
              ></span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="ac-retain-bio">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__title"
                >Retain qualified <mark>biologist</mark> for nesting surveys</span
              ></span
            >
          </span>
        </button>
      </section>
      <section class="bcn-omni-group">
        <div class="bcn-omni-group__head">
          <span class="bcn-omni-group__label">Evidence of Compliance</span
          ><span class="bcn-omni-group__count">1</span>
        </div>
        <button type="button" class="bcn-omni-row" role="option" data-id="ev-daily-log">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__title"
                ><mark>Biologist</mark> Daily Monitoring Log — Week 14</span
              ></span
            >
          </span>
        </button>
      </section>
    </div>
  </div>
  <button class="bcn-omni__showall" data-omni-showall="" type="button">
    <span data-omni-showall-label="">See all 147 results for “biologist”</span>
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  </button>
  <div class="bcn-omni__footer">
    <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span> <span><kbd>↵</kbd> Select</span>
    <span><kbd>Tab</kbd> Complete</span> <span><kbd>Esc</kbd> Close</span>
  </div>
</div>
```

## Styles
```css
.bcn-omni__panel {
  position: relative;
  z-index: 1;
  width: 860px;
  max-width: 100%;
  height: min(680px, 84vh);
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-400, 12px);
  overflow: hidden;
  box-shadow: 0 24px 64px #141e2852;
  animation: bcn-omni-enter 0.14s ease-out;
}
.bcn-omni__searchrow {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex: none;
  padding: var(--spacing-300) var(--spacing-500);
  border-bottom: 1px solid var(--color-border);
}
.bcn-omni__searchicon {
  display: inline-flex;
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-omni__searchicon svg {
  width: 22px;
  height: 22px;
}
.bcn-omni__inputwrap {
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
}
.bcn-omni__ghost {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: var(--type-size-400, 1.25rem);
  line-height: 1.4;
  color: var(--color-text-tertiary);
  white-space: pre;
  overflow: hidden;
  pointer-events: none;
}
.bcn-omni__input {
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: inherit;
  font-size: var(--type-size-400, 1.25rem);
  line-height: 1.4;
  color: var(--color-text-primary);
}
.bcn-omni__input::placeholder {
  color: var(--color-text-tertiary);
}
.bcn-omni__clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex: none;
  border: 0;
  border-radius: var(--radius-full);
  background: var(--color-surface-sunken);
  color: var(--color-text-secondary);
  cursor: pointer;
}
.bcn-omni__clear[hidden] {
  display: none;
}
.bcn-omni__split {
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
}
.bcn-omni__rail {
  box-sizing: border-box;
  flex: none;
  width: 208px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: var(--spacing-200);
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  scrollbar-width: none;
}
.bcn-omni-rail__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  padding: var(--spacing-150) var(--spacing-250);
  border: 0;
  border-radius: var(--radius-200);
  background: transparent;
  color: var(--color-text-secondary);
  font-family: inherit;
  font-size: var(--type-size-150);
  text-align: left;
  cursor: pointer;
  transition:
    background 0.1s,
    color 0.1s;
}
.bcn-omni-rail__item:disabled {
  color: var(--color-text-tertiary);
  cursor: default;
}
.bcn-omni-rail__label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-omni__body {
  flex: 1 1 auto;
  min-width: 0;
  overflow-y: auto;
  padding: var(--spacing-200) 0;
}
.bcn-omni__body.is-landing {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-400);
}
.bcn-omni__showall {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200);
  flex: none;
  width: 100%;
  padding: var(--spacing-300);
  border: 0;
  background: var(--color-primary);
  color: var(--color-text-inverse);
  font-family: inherit;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
}
.bcn-omni__showall[hidden] {
  display: none;
}
.bcn-omni__footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-400);
  flex: none;
  padding: var(--spacing-250) var(--spacing-500);
  border-top: 1px solid var(--color-border);
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-omni__footer span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.bcn-omni-rail__item.is-active {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-semibold);
}
.bcn-omni-rail__c {
  flex: none;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  opacity: 0.8;
}
.bcn-omni-group__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-400) var(--spacing-100);
}
.bcn-omni-group__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-omni-group__count {
  font-size: var(--type-size-100);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-secondary);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  padding: 0 6px;
  line-height: 1.5;
}
.bcn-omni-row {
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--spacing-250) var(--spacing-400);
  border: 0;
  background: transparent;
  color: var(--color-text-primary);
  font-family: inherit;
  text-align: left;
  cursor: pointer;
}
.bcn-omni-row.is-active {
  background: var(--color-surface-sunken);
}
.bcn-omni-row__text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.bcn-omni-row__titlerow {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  min-width: 0;
}
.bcn-omni-row__code {
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
.bcn-omni-row__title {
  flex: 0 1 auto;
  min-width: 0;
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-omni-row__snippet {
  margin-top: 2px;
  font-family: var(--font-decorative);
  font-size: var(--type-size-150);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-omni-row mark,
.bcn-omni-empty mark {
  background: #fde047;
  color: var(--color-text-primary);
  border-radius: 2px;
  padding: 0 1px;
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-400`: .75rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
