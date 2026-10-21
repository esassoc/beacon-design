# Command palette (omnibox)

Global Search · source prototype: https://esassoc.github.io/beacon-design/prototypes/global-search/

![Command palette (omnibox), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-global-search/claude/command-palette-omnibox.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-global-search/claude/command-palette-omnibox.phone.png

The global-search command palette — a fixed overlay centered both vertically and horizontally. It searches all 8 scopes FULL-TEXT (titles + commitment/requirement body), with a left scope-facet rail, results grouped by scope with per-scope counts, highlighted hits, and an inline ghost-text typeahead in the input. ⌘/Ctrl+Enter forks to the full results page carrying the query + active scope.

## Key decisions

- NULL STATE shows a centered "Search Beacon" landing only (no recents); the scope rail is PRESENT but DISABLED with no counts until a query is typed, at which point its facets enable, show counts, and the active scope highlights.
- Scope facets are a left VERTICAL RAIL (not tabs); the active facet is solid --color-background-brand with white text.
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

## Components

- `bcn-omni` (spoke) · `src/components/bcn/BcnOmniSearch.astro`
- `bcn-omni-group` (spoke) · `src/components/bcn/BcnOmniSearch.astro`
- `bcn-omni-rail` (spoke) · `src/components/bcn/BcnOmniSearch.astro`
- `bcn-omni-row` (spoke) · `src/components/bcn/BcnOmniSearch.astro`

## Markup

_152 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-omni__panel" role="dialog" aria-modal="true" aria-label="Global search">
  <div class="bcn-omni__searchrow">
    <span class="bcn-omni__searchicon" aria-hidden="true"
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
    ><span class="bcn-omni__inputwrap"
      ><span class="bcn-omni__ghost" data-omni-ghost="" aria-hidden="true" data-suffix="s"
        ><span class="bcn-omni__ghost-pad">biologist</span>s</span
      ><input
        class="bcn-omni__input"
        data-omni-input=""
        type="text"
        placeholder="Search…"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        aria-label="Search" /></span
    ><button class="bcn-omni__clear" data-omni-clear="" type="button" aria-label="Clear search">
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
      </svg></button
    ><kbd>Esc</kbd>
  </div>
  <div class="bcn-omni__split">
    <nav class="bcn-omni__rail" data-omni-scopes="" role="tablist" aria-label="Filter by type">
      <button type="button" role="tab" class="bcn-omni-rail__item is-active" data-scope="">
        <span class="bcn-omni-rail__label">All</span
        ><span class="bcn-omni-rail__c">147</span></button
      ><button type="button" role="tab" class="bcn-omni-rail__item" data-scope="source-documents">
        <span class="bcn-omni-rail__label">Source Documents</span
        ><span class="bcn-omni-rail__c">0</span></button
      ><!-- …and 7 more like this (<button class="bcn-omni-rail__item is-active">) -->
    </nav>
    <div class="bcn-omni__body" data-omni-body="" role="listbox">
      <section class="bcn-omni-group">
        <div class="bcn-omni-group__head">
          <span class="bcn-omni-group__label">Commitments</span
          ><span class="bcn-omni-group__count">143</span>
        </div>
        <button type="button" class="bcn-omni-row is-active" role="option" data-id="cm-dcp-0">
          <span class="bcn-omni-row__text">
            <span class="bcn-omni-row__titlerow"
              ><span class="bcn-omni-row__code">6.3.2.2</span
              ><span class="bcn-omni-row__title"
                >California Least Tern Avoidance and Minimization Measures</span
              ></span
            >
            <span class="bcn-omni-row__snippet"
              >… n the area. Surveys will be conducted by a Service- and CDFW-approved
              <mark>biologist</mark> with experience observing the species and its nests. DWR will
              impleme … as determined through surveys).A Service- and CDFW-approved wildlife
              <mark>biologist</mark> will monitor construction activities within 500 feet of active
              nests …</span
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
              <mark>biologist</mark> will conduct daily surveys, consistent with a Service- or CDFW-
              appro … 0 feet of the habitat being used until the Service- and CDFW-approved
              <mark>biologist</mark> has confirmed that the bird has left the area.4. If surveys
              find leas …</span
            >
          </span></button
        ><!-- …and 141 more like this (<button class="bcn-omni-row is-active">) -->
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
              <mark>biologist</mark>; restrict ground-disturbing activities, demolition, and
              vegetation re …</span
            >
          </span>
        </button>
      </section>
      <!-- …and 2 more like this (<section class="bcn-omni-group">) -->
    </div>
  </div>
  <button class="bcn-omni__showall" data-omni-showall="" type="button">
    <span data-omni-showall-label="">See all 147 results for “biologist”</span
    ><svg
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
    <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span><span><kbd>↵</kbd> Select</span
    ><!-- …and 2 more like this (<span>) -->
  </div>
</div>
```

## Styles

```css
.bcn-omni__panel {
  z-index: 1;
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-400, 12px);
  flex-direction: column;
  width: 860px;
  max-width: 100%;
  height: min(680px, 84vh);
  animation: 0.14s ease-out bcn-omni-enter;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 64px #141e2852;
}
.bcn-omni__searchrow {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-500);
  border-bottom: 1px solid var(--color-border-default);
  flex: none;
  display: flex;
}
.bcn-omni__searchicon {
  color: var(--color-content-default-tertiary);
  flex: none;
  display: inline-flex;
}
.bcn-omni__searchicon svg {
  width: 22px;
  height: 22px;
}
.bcn-omni__inputwrap {
  flex: 1;
  align-items: center;
  min-width: 0;
  display: flex;
  position: relative;
}
.bcn-omni__input {
  z-index: 1;
  width: 100%;
  min-width: 0;
  font-family: inherit;
  font-size: var(--font-size-400, 1.25rem);
  color: var(--color-content-default);
  background: 0 0;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  line-height: 1.4;
  position: relative;
}
.bcn-omni__input::placeholder {
  color: var(--color-content-default-tertiary);
}
.bcn-omni__ghost {
  z-index: 0;
  font-family: inherit;
  font-size: var(--font-size-400, 1.25rem);
  color: var(--color-content-default-tertiary);
  white-space: pre;
  pointer-events: none;
  align-items: center;
  line-height: 1.4;
  display: flex;
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.bcn-omni__ghost-pad {
  color: #0000;
  white-space: pre;
}
.bcn-omni__clear {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-sunken);
  width: 26px;
  height: 26px;
  color: var(--color-content-default-secondary);
  cursor: pointer;
  border: 0;
  flex: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-omni__clear[hidden] {
  display: none;
}
.bcn-omni__clear:hover {
  background: var(--color-border-default);
}
.bcn-omni__split {
  flex: auto;
  min-height: 0;
  display: flex;
}
.bcn-omni__rail {
  box-sizing: border-box;
  width: 208px;
  padding: var(--spacing-200);
  border-right: 1px solid var(--color-border-default);
  scrollbar-width: none;
  flex-direction: column;
  flex: none;
  gap: 1px;
  display: flex;
  overflow-y: auto;
}
.bcn-omni__rail::-webkit-scrollbar {
  display: none;
}
.bcn-omni__body {
  min-width: 0;
  padding: var(--spacing-200) 0;
  flex: auto;
  overflow-y: auto;
}
.bcn-omni__body.is-landing {
  padding: var(--spacing-400);
  justify-content: center;
  align-items: center;
  display: flex;
}
.bcn-omni__showall {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  padding: var(--spacing-300);
  background: var(--color-background-brand);
  color: var(--color-content-default-knockout);
  font-family: inherit;
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  cursor: pointer;
  border: 0;
  flex: none;
  display: flex;
}
.bcn-omni__showall[hidden] {
  display: none;
}
.bcn-omni__showall:hover {
  background: var(--color-background-brand-hover, var(--color-background-brand));
  filter: brightness(0.96);
}
.bcn-omni__footer {
  gap: var(--spacing-400);
  padding: var(--spacing-250) var(--spacing-500);
  border-top: 1px solid var(--color-border-default);
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  flex-wrap: wrap;
  flex: none;
  display: flex;
}
.bcn-omni__footer span {
  align-items: center;
  gap: 6px;
  display: inline-flex;
}
.bcn-omni-rail__item {
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  padding: var(--spacing-150) var(--spacing-250);
  border-radius: var(--radius-200);
  color: var(--color-content-default-secondary);
  font-family: inherit;
  font-size: var(--font-size-150);
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  transition:
    background 0.1s,
    color 0.1s;
  display: flex;
}
.bcn-omni-rail__item:not(:disabled):hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
}
.bcn-omni-rail__item.is-active {
  background: var(--color-background-brand);
  color: var(--color-content-default-knockout);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-omni-rail__item:disabled {
  color: var(--color-content-default-tertiary);
  cursor: default;
}
.bcn-omni-rail__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-omni-rail__c {
  font-variant-numeric: tabular-nums;
  opacity: 0.8;
  flex: none;
  font-size: 11px;
}
.bcn-omni-group__head {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-400) var(--spacing-100);
  display: flex;
}
.bcn-omni-group__label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-omni-group__count {
  font-size: var(--font-size-100);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: 0 0;
  padding: 0 6px;
  line-height: 1.5;
}
.bcn-omni-row {
  width: 100%;
  padding: var(--spacing-250) var(--spacing-400);
  color: var(--color-content-default);
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  align-items: center;
  font-family: inherit;
  display: flex;
}
.bcn-omni-row.is-active {
  background: var(--color-background-elevation-sunken);
}
.bcn-omni-row__text {
  flex-direction: column;
  flex: 1;
  gap: 3px;
  min-width: 0;
  display: flex;
}
.bcn-omni-row__titlerow {
  align-items: center;
  gap: var(--spacing-150);
  min-width: 0;
  display: flex;
}
.bcn-omni-row__code {
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
.bcn-omni-row__title {
  min-width: 0;
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 0 auto;
  overflow: hidden;
}
.bcn-omni-row__snippet {
  font-family: var(--font-decorative);
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 2px;
  overflow: hidden;
}
.bcn-omni-row mark,
.bcn-omni-empty mark {
  color: var(--color-content-default);
  background: #fde047;
  border-radius: 2px;
  padding: 0 1px;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
