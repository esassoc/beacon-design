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
      <span
        class="bcn-omni__ghost"
        data-omni-ghost=""
        aria-hidden="true"
        data-suffix=""
      ></span>
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
        ><span class="bcn-omni-rail__c">6</span></button
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
        ><span class="bcn-omni-rail__c">2</span></button
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
          ><span class="bcn-omni-group__count">2</span>
        </div>
        <button
          type="button"
          class="bcn-omni-row is-active"
          role="option"
          data-id="cm-mmbio1"
        >
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">MM-BIO-1</span
              ><span class="bcn-omni-row__title"
                >Worker Environmental Awareness Program (WEAP) Training</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… mplement a Worker Environmental Awareness Program (WEAP). A qualified
              <mark>biologist</mark> will train all construction personnel on the
              special-status species w … ny incidental take or sensitive-species
              observation to the designated <mark>biologist</mark>.</span
            >
          </span></button
        ><button type="button" class="bcn-omni-row" role="option" data-id="cm-mmbio2">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">MM-BIO-2</span
              ><span class="bcn-omni-row__title"
                >Nesting Bird Buffers and Avoidance</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… ve bird nests are found during preconstruction surveys, the qualified
              <mark>biologist</mark> will establish no-disturbance buffer zones around
              each nest. Buffers remain in effect until a
              <mark>biologist</mark> determines the young have fledged or the nest is no
              longer active. No …</span
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
    <span data-omni-showall-label="">See all 6 results for “biologist”</span>
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
  padding: var(--spacing-150) var(--spacing-400);
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
  gap: 1px;
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
