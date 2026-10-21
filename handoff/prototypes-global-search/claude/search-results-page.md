# Search results page

Global Search · source prototype: https://esassoc.github.io/beacon-design/prototypes/global-search/

![Search results page, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-global-search/claude/search-results-page.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-global-search/claude/search-results-page.phone.png

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

## Components

- `bcn-sr` (spoke) · `src/components/bcn/BcnSearchResults.astro`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`

## Markup

_394 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="bcn-sr">
  <!-- 1 · Search field — mirrors the omnibox's own leading-icon + bare input -->
  <div class="bcn-sr__search">
    <span class="bcn-sr__search-icon" aria-hidden="true"
      ><svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path></svg></span
    ><input
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
        <span class="bcn-sr__scope-label">All</span
        ><span class="bcn-sr__scope-count" data-scope-count="">147</span></button
      ><button
        type="button"
        class="bcn-sr__scope"
        data-scope="source-documents"
        role="tab"
        aria-selected="false"
      >
        <span class="bcn-sr__scope-label">Source Documents</span
        ><span class="bcn-sr__scope-count" data-scope-count="">0</span></button
      ><!-- …and 7 more like this (<button class="bcn-sr__scope bcn-sr__scope--active">) -->
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
          <h3 class="esa-empty-state__title typography-label-md-strong">Search the project</h3>
          <p class="esa-empty-state__description typography-body-sm">
            Source documents, commitments, requirements, actions, components, evidence, work areas,
            and observations — search titles and full document text.
          </p>
          <div class="esa-empty-state__actions typography-label-md"></div>
        </div>
      </div>
      <!-- Grouped results -->
      <div class="bcn-sr__results">
        <section class="bcn-sr__group" data-group="source-documents" hidden="">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Source Documents</span
            ><span class="bcn-sr__group-count" data-group-count="">0</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-source-document"
              data-id="sd-feir-3600"
              data-scope="source-documents"
              data-entity="3600 alameda avenue project feir final environmental impact report · 130 requirements"
              hidden=""
              ><span class="bcn-sr__row-head"
                ><span class="bcn-sr__row-titlerow"
                  ><span class="bcn-sr__row-title">3600 Alameda Avenue Project FEIR</span></span
                ></span
              >
              <div class="bcn-sr__row-snippet" hidden=""></div></a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-source-document"
              data-id="sd-dcp-eir"
              data-scope="source-documents"
              data-entity="delta conveyance project eir environmental impact report"
              hidden=""
              ><span class="bcn-sr__row-head"
                ><span class="bcn-sr__row-titlerow"
                  ><span class="bcn-sr__row-title">Delta Conveyance Project EIR</span></span
                ></span
              >
              <div class="bcn-sr__row-snippet" hidden=""></div></a
            ><!-- …and 4 more like this (<a class="bcn-sr__row">) -->
          </div>
        </section>
        <section class="bcn-sr__group" data-group="commitments">
          <header class="bcn-sr__group-head">
            <span class="bcn-sr__group-label">Commitments</span
            ><span class="bcn-sr__group-count" data-group-count="">143</span>
          </header>
          <div class="bcn-sr__rows">
            <a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-0"
              data-scope="commitments"
              data-entity="california least tern avoidance and minimization measures "
              ><span class="bcn-sr__row-head"
                ><span class="bcn-sr__row-titlerow"
                  ><span class="bcn-sr__row-code">6.3.2.2</span
                  ><span class="bcn-sr__row-title"
                    >California Least Tern Avoidance and Minimization Measures</span
                  ></span
                ></span
              >
              <div class="bcn-sr__row-snippet">
                <p>
                  … on (April 15 to August 15). Construction-related noise level will be determined
                  based on a noise contour map, created by a noise expert, showing the 60 dBA noise
                  contour specific to the type and location of construction to occur in the area.
                  Surveys will be conducted by a Service- and CDFW-approved
                  <mark>biologist</mark> with experience observing the species and its nests. DWR
                  will implement the following requirements to avoid loss of California least tern
                  nesting colonies if construction will take place within 500 feet of a California
                  least tern nest where construction-related noise levels could exceed 60 dBA Leq (1
                  hour) during the breeding season (April 15 to August 15 or extended as determined
                  through surveys).A Service- and CDFW-approved wildlife <mark>biologist</mark
                  ><!-- …and 4 more like this (<mark>) -->
                  will monitor construction activities within 500 feet of active nests to ensure
                  that construction activities do not affect nest success. Reduced buffers may be
                  allowed, through coordination with the Service and CDFW, if a full-time Service-
                  and CDFW-approved is present to monitor the nest and has authority to halt
                  construction if bird behavior indicates continued activities could lead to nest
                  failure. Active nests will be monitored to track progress of nesting activities
                  until the determines that the young have fledged and are capable of independent
                  survival or the nest site is no longer active.Activities performed during the
                  California least tern breeding season, in occupied least tern nesting habitat,
                  with Service and CDFW approval and under the supervision of a Service- and
                  CDFW-approved , will be limited to inspection, research, or monitoring.If a
                  California least tern is found, construction activities will be limited such that
                  sound will not exceed 60 dBA within 500 feet of the habitat being used until the
                  Service- and CDFW-approved has confirmed that the bird has left the area.Portable
                  and stationary equipment will be located, stored, and maintained as far as
                  possible, with a minimum distance of 500 feet, from suitable California least tern
                  habitat.All lights will be screened and directed down toward work activities and
                  away …
                </p>
              </div></a
            ><a
              class="bcn-sr__row"
              href="/beacon-design/prototypes/data-catalog-commitment"
              data-id="cm-dcp-1"
              data-scope="commitments"
              data-entity="least bell’s vireo avoidance and minimization measures "
              ><span class="bcn-sr__row-head"
                ><span class="bcn-sr__row-titlerow"
                  ><span class="bcn-sr__row-code">6.3.2.3</span
                  ><span class="bcn-sr__row-title"
                    >Least Bell’s Vireo Avoidance and Minimization Measures</span
                  ></span
                ></span
              >
              <div class="bcn-sr__row-snippet">
                <p>
                  … tivities occurring between May 15 through September 1.1. Prior to the
                  construction, a noise expert will create a noise contour map showing the 60 dBA
                  noise contour specific to the type and location of construction to occur in the
                  area.2. Two weeks prior to construction, a Service- and CDFW-approved
                  <mark>biologist</mark> will conduct daily surveys, consistent with a Service- or
                  CDFW- approved survey protocol (U.S. Fish and Wildlife Service 2001:1-3, or more
                  current guidance) within 500 feet of suitable habitat where construction-related
                  noise levels could exceed 60 dBA Leq (1 hour).3. If a least Bell’s vireo is found,
                  construction activities will be limited such that sound will not exceed 60 dBA
                  within 500 feet of the habitat being used until the Service- and CDFW-approved
                  <mark>biologist</mark> has confirmed that the bird has left the area.4. If surveys
                  find least Bell’s vireos in an area where vegetation will be removed, vegetation
                  removal will be conducted when the Service- and CDFW-approved
                  <mark>biologist</mark> has confirmed that least Bell’s vireos are not present
                  within 500 feet of vegetation removal activities.5. Portable and stationary
                  equipment will be located, stored, and maintained as far as possible, with a
                  minimum distance of 500 feet, from suitable least Bell’s vireo habitat.6. All
                  lights will b …
                </p>
              </div></a
            ><!-- …and 373 more like this (<a class="bcn-sr__row">) -->
          </div>
        </section>
        <!-- …and 6 more like this (<section class="bcn-sr__group">) --><!-- 5 · Empty state (the lego) — hidden until the client finds zero matches -->
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
            <h3 class="esa-empty-state__title typography-label-md-strong">No matches</h3>
            <p class="esa-empty-state__description typography-body-sm">
              No records match your search. Try a different term or clear the active type filter.
            </p>
            <div class="esa-empty-state__actions typography-label-md"></div>
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.bcn-sr {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-sr__search {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  display: flex;
}
.bcn-sr__search:focus-within {
  border-color: var(--color-background-brand);
  box-shadow: 0 0 0 3px var(--color-background-brand-subtle);
}
.bcn-sr__search-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-sr__search-icon svg {
  width: 20px;
  height: 20px;
}
.bcn-sr__input {
  min-width: 0;
  font-family: inherit;
  font-size: var(--font-size-300);
  color: var(--color-content-default);
  background: 0 0;
  border: none;
  outline: none;
  flex: 1;
}
.bcn-sr__input::placeholder {
  color: var(--color-content-default-tertiary);
}
.bcn-sr__count {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-sr__split {
  align-items: flex-start;
  gap: var(--spacing-500);
  display: flex;
}
.bcn-sr__rail {
  width: 220px;
  top: var(--spacing-400);
  flex-direction: column;
  flex: none;
  gap: 1px;
  display: flex;
  position: sticky;
}
.bcn-sr__main {
  gap: var(--spacing-400);
  border-left: 1px solid var(--color-border-default);
  min-width: 0;
  padding-left: var(--spacing-500);
  flex-direction: column;
  flex: auto;
  display: flex;
}
.bcn-sr__scope {
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  padding: var(--spacing-200) var(--spacing-250);
  border-radius: var(--radius-200);
  color: var(--color-content-default-secondary);
  font-family: inherit;
  font-size: var(--font-size-150);
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  transition:
    background 0.12s,
    color 0.12s;
  display: flex;
}
.bcn-sr__scope:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
}
.bcn-sr__scope--active {
  background: var(--color-background-brand);
  color: var(--color-content-default-knockout);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-sr__scope-label {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-sr__scope-count {
  font-variant-numeric: tabular-nums;
  opacity: 0.8;
  flex: none;
  font-size: 11px;
}
.bcn-sr--idle .bcn-sr__scope {
  color: var(--color-content-default-tertiary);
  cursor: default;
}
.bcn-sr--idle .bcn-sr__scope:hover {
  color: var(--color-content-default-tertiary);
  background: 0 0;
}
.bcn-sr--idle .bcn-sr__scope-count {
  display: none;
}
.bcn-sr__landing {
  padding: var(--spacing-700) 0;
}
.bcn-sr__landing[hidden],
.bcn-sr__results[hidden] {
  display: none;
}
.bcn-sr__results {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-sr__group {
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-sr__group[hidden] {
  display: none;
}
.bcn-sr__group-head {
  align-items: center;
  gap: var(--spacing-200);
  padding: 0 var(--spacing-200) var(--spacing-150);
  border-bottom: 1px solid var(--color-border-default-subtle);
  display: flex;
}
.bcn-sr__group-label {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-sr__group-count {
  font-size: var(--font-size-100);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: 0 0;
  padding: 0 6px;
  line-height: 1.5;
}
.bcn-sr__rows {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-sr__row {
  gap: var(--spacing-150);
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  background: 0 0;
  flex-direction: column;
  text-decoration: none;
  transition: background 0.12s;
  display: flex;
}
.bcn-sr__row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-sr__row[hidden] {
  display: none;
}
.bcn-sr__row-head {
  align-items: center;
  min-width: 0;
  display: flex;
}
.bcn-sr__row-titlerow {
  align-items: center;
  gap: var(--spacing-200);
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-sr__row-code {
  border-radius: var(--radius-100);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  flex: none;
  padding: 1px 6px;
  line-height: 1.4;
}
.bcn-sr__row-title {
  min-width: 0;
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 0 auto;
  overflow: hidden;
}
.bcn-sr__row-snippet {
  margin-top: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-350, 1.25rem);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  font-family: var(--font-decorative);
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  text-align: left;
  line-height: 1.7;
}
.bcn-sr__row-snippet p {
  margin: 0;
}
.bcn-sr__row-snippet p + p {
  margin-top: 0.85em;
}
.bcn-sr__row-snippet .bcn-sr__row-more {
  border-top: 1px solid var(--color-border-default);
  font-family: var(--typography-font-family-sans, system-ui, sans-serif);
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  margin-top: 1em;
  padding-top: 0.7em;
  font-style: normal;
}
.bcn-sr__row-snippet[hidden] {
  display: none;
}
.bcn-sr__row-title mark,
.bcn-sr__row-snippet mark {
  color: var(--color-content-default);
  background: #fde047;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-sr__empty[hidden] {
  display: none;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-gap: var(--spacing-200, 0.5rem);
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--_empty-gap);
  flex-direction: column;
  display: flex;
}
.esa-empty-state__icon {
  color: var(--color-content-default-secondary, #646464);
  margin-bottom: var(--spacing-100, 0.25rem);
  display: inline-flex;
}
.esa-empty-state__icon svg {
  width: var(--_empty-icon-size);
  height: var(--_empty-icon-size);
}
.esa-empty-state__title {
  color: var(--color-content-default, #202020);
  margin: 0;
}
.esa-empty-state__description {
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-subtle` | `#effefb` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--empty-state-icon-size-md` | `48px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
