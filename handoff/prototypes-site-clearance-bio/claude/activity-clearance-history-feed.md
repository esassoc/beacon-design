# Activity — clearance history feed

Site Clearance — Biological · source prototype: https://esassoc.github.io/beacon-design/prototypes/site-clearance-bio/

![Activity — clearance history feed, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/activity-clearance-history-feed.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/activity-clearance-history-feed.phone.png

The component-level clearance history: a single-column, date-grouped feed of recorded reviews, monitor notes, and live in-session edits. History ONLY — there is no Upcoming rail and no forward-looking entry of any kind; Beacon records what happened, it never forecasts. A Type filter scopes the feed; every entry jumps to its work-area drawer. One drawer save lands in BOTH the drawer's Activity fold and this feed.

## Key decisions

- Feed entries are the deterministic entry card: a work-area ID badge + an ENUMERATED event-type label (Review / Note / Edit) + the structured fact as the primary line (never a prose sentence). A review entry carries its kind as the primary, its outcome as the status chip, and its reviewer as the meta; a note entry quotes the verbatim text.
- The Type filter has NO color dots on purpose — color belongs to STATUS, not event type.
- There is no Component filter here — the page's Component picker already scopes the feed (a second component control would fight it).
- Live edits land in the fixture-TODAY group ("… · Today"), sorted above the dated fixture events.

## Gotchas

- The feed renders at BOOT but is only visible once the Activity tab is active — capture/automation must switch tabs first.
- Every feed entry carries data-wa (the observation feed entries are gone with the forecasting cut) — the observation drawer is reached from the map or the Data tab, not from here.
- A new review posted in the drawer must append here in the TODAY group — the feed derives from the store + session edits, not a static list.

## Done when

- Entries group by date (newest first) with the TODAY group labeled; the Type filter scopes Reviews/Notes/Edits; an entry opens its work-area drawer; a drawer save appears in the TODAY group; nothing future-dated ever renders.

## Components

- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`
- `esa-filter-clear-button` (hub) · `packages/ecology/src/components/esa-filter-clear-button.astro`
- `esa-filter-container` (hub) · `packages/ecology/src/components/esa-filter-container.astro`
- `esa-filter-dropdown` (hub) · `packages/ecology/src/components/esa-filter-dropdown.ts`

## Markup

_9 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="feed">
  <div class="feed-main">
    <!-- Filter row — the same filter legos as the map/Data bars. Type
                 has no dots on purpose (colors belong to status, not event
                 type); the page's Component picker already scopes the feed. -->
    <div class="map-filterbar feed-filterbar">
      <div class="map-filterbar__row">
        <span class="map-filterbar__label">Filters</span>
        <div
          class="esa-filter-container typography-label-md"
          style="
            --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
            --_filter-container-row-gap: var(--spacing-200, 0.5rem);
          "
        >
          <esa-filter-dropdown
            id="act-flt-type"
            label="Type"
            multiple=""
            size="sm"
          ></esa-filter-dropdown>
        </div>
        <span id="act-clear-filters"
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
            ><span class="esa-filter-clear-button__label">Clear all</span>
          </button></span
        >
      </div>
    </div>
    <div id="feed-groups">
      <section class="feed-day">
        <h3 class="feed-heading">Jun 4, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCRAI-DH-009" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-009</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">14-day clearance</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared)"
                    ><span class="bcn-status-chip__dot"></span
                    ><span class="bcn-status-chip__label">Cleared</span></span
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
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
        </ul>
      </section>
      <section class="feed-day">
        <h3 class="feed-heading">Jun 3, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCRAI-DH-014" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-014</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">14-day clearance</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared)"
                    ><span class="bcn-status-chip__dot"></span
                    ><span class="bcn-status-chip__label">Cleared</span></span
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
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCRDS-DH-294" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRDS-DH-294</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">14-day clearance</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared)"
                    ><span class="bcn-status-chip__dot"></span
                    ><span class="bcn-status-chip__label">Cleared</span></span
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
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <!-- …and 6 more like this (<li class="entry entry--card">) -->
        </ul>
      </section>
      <!-- …and 3 more like this (<section class="feed-day">) -->
    </div>
    <div id="feed-empty" hidden="">
      <div class="esa-empty-state esa-empty-state--sm">
        <h3 class="esa-empty-state__title typography-label-sm-strong">
          No activity matches the filters
        </h3>
        <p class="esa-empty-state__description typography-body-xs">
          Clear the Type filter to see the full feed.
        </p>
        <div class="esa-empty-state__actions typography-label-md"></div>
      </div>
    </div>
  </div>
</div>
```

## Styles

```css
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.map-filterbar {
  margin-bottom: var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-direction: column;
  display: flex;
}
.map-filterbar__row {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.map-filterbar__row + .map-filterbar__row {
  border-top: 1px solid var(--color-border-default);
}
.map-filterbar__label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.feed {
  flex-direction: column;
  display: flex;
}
.feed-main {
  min-width: 0;
}
.feed-heading {
  margin: 0 0 var(--spacing-200);
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.feed-day__list {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.entry {
  align-items: flex-start;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
  display: flex;
}
.entry__badge {
  border-radius: var(--radius-100);
  font-family: var(--typography-font-family-mono, monospace);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 1px;
  padding: 0.125rem 0.375rem;
  line-height: 1.4;
}
.entry__badge--wa {
  color: var(--color-background-brand);
  background: color-mix(in srgb, var(--color-background-brand) 10%, white);
}
.entry__body {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.entry__line {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__type {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.entry__sep {
  color: var(--color-content-default-tertiary);
}
.entry__primary {
  color: var(--color-content-default);
}
.entry__line .gate__chipwrap {
  vertical-align: text-bottom;
}
.entry__secondary {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__meta {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
  font-size: 0.8125rem;
}
.entry--card {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  cursor: pointer;
  transition:
    background 0.12s,
    border-color 0.12s;
}
.entry--card:hover {
  background: var(--grid-row-bg-hover);
  border-color: var(--color-border-default-strong);
}
@media print {
  esa-tab-layout::part(tabs),
  .map-filterbar {
    display: none;
  }
}
.bcn-status-chip[data-status="provisional-block"],
.bcn-grid-chip[data-status="provisional-block"],
.bcn-status-chip[data-status="provisional-block"] .bcn-status-chip__dot,
.bcn-grid-chip[data-status="provisional-block"] .bcn-grid-chip__dot {
  background: var(--color-background-elevation-raised);
  box-shadow: inset 0 0 0 1.5px var(--st-provisional-block);
}
.od__impact .entry__meta {
  white-space: normal;
  max-width: 36%;
}
.wa__activity .entry:not(.entry--empty) {
  padding: var(--spacing-200) 0;
}
.wa__activity .entry + .entry {
  border-top: 1px solid var(--color-border-default-subtle);
}
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
}
.esa-filter-clear-button {
  --_clear-text: var(--color-content-default-secondary, #646464);
  --_clear-text-hover: var(--color-content-utility-danger, var(--color-content-brand, #2a7e3b));
  --_clear-icon-size: 18px;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border-radius: var(--radius-sm, 0.25rem);
  color: var(--_clear-text);
  cursor: pointer;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  text-decoration: underline;
  display: inline-flex;
}
.esa-filter-clear-button:hover {
  color: var(--_clear-text-hover);
  background: var(--color-background-overlay-hover, #00000008);
}
.esa-filter-clear-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
}
.bcn-status-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  display: inline-flex;
}
.bcn-status-chip__dot {
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
  width: 8px;
  height: 8px;
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
.esa-empty-state--sm {
  --_empty-icon-size: var(--empty-state-icon-size-sm, 32px);
  padding: var(--spacing-400, 1rem) var(--spacing-300, 0.75rem);
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
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-overlay-hover` | `#00000008` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--empty-state-icon-size-md` | `48px` | component |
| `--empty-state-icon-size-sm` | `32px` | component |
| `--filter-container-padding` | `0` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--grid-row-bg-hover` | `#efefef` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--st-provisional-block` | `#d73027` | component |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-body-xs-font-weight` | `400` | semantic |
| `--typography-body-xs-letter-spacing` | `.01em` | semantic |
| `--typography-body-xs-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-sm-font-weight` | `500` | semantic |
| `--typography-microcopy-sm-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-sm-line-height` | `1` | semantic |
