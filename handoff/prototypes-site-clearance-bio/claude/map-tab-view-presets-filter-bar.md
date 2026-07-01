# Map tab — view presets & filter bar

The Map tab is the hero (default of the 4-tab esa-tab-layout: Map · Data · Timeline · Activity). Its filter bar carries two rows: a View row (opinionated preset toggle + two "Go to work area / Go to observation" autocomplete comboboxes) and a Filters row (Status + Planned-start facet dropdowns). The scopes are GLOBAL to the tab — they filter the map markers AND the readiness strip below it together, so the census figure always agrees with what is drawn.

## Key decisions
- View presets (esa-button-toggle, size md) are a shortcut over the SAME facet state the Status dropdown edits — one source of truth. Pressing a preset sets the facets; a preset reads as selected only while the facets exactly equal its set, so hand-editing the dropdown drops back to no-preset. Counts ride the labels as plain text (an esa-badge inside a segment would fight the lego).
- The two "Go to…" comboboxes (esa-combobox, autocomplete) are JUMPS, not filters: type-ahead or pick any of the 231 work-area IDs / any observation → pan/zoom + pulse the marker (no drawer), then reset to the placeholder. They never change the facet set.
- Filter legos are esa-filter-dropdown inside an FilterContainer, with an esa FilterClearButton — the same bar grammar reused on the Data and Activity tabs so the three surfaces read as one system.

## Gotchas
- The facets scope the readiness strip too, so re-implementing them in Angular means recomputing the derived status census from the filtered work-area set — not just toggling Leaflet marker visibility.
- Preset "selected" is a derived equality check against the live facets, not a stored mode — do not persist the active preset or it will lie the moment the dropdown is hand-edited.

## Done when
- A preset sets the Status/Planned-start facets and reads selected only while they match; hand-editing a facet clears the preset; "Go to…" pans/pulses without opening a drawer; narrowing a facet re-scopes both the map and the readiness strip.

## Markup
```html
<div class="map-filterbar">
  <div class="map-filterbar__row">
    <span class="map-filterbar__label">View</span>
    <!-- size="md" (round-5 ch1): the View presets one type-size step up
                 (sm 12px/28px → md 14px/36px) — the lego's own size prop, no
                 override; matches the Data tab's pivot toggle. -->
    <esa-button-toggle id="view-presets" value="all" size="md"></esa-button-toggle>
    <div class="map-filterbar__goto">
      <esa-combobox
        id="goto-wa"
        mode="autocomplete"
        size="sm"
        placeholder="Go to work area…"
      ></esa-combobox>
      <esa-combobox
        id="goto-obs"
        mode="autocomplete"
        size="sm"
        placeholder="Go to observation…"
      ></esa-combobox>
    </div>
  </div>
  <div class="map-filterbar__row">
    <span class="map-filterbar__label">Filters</span>
    <div
      class="esa-filter-container"
      style="
        --_filter-container-gap: var(--filter-container-gap, var(--spacing-300, 0.75rem));
        --_filter-container-row-gap: var(--spacing-200, 0.5rem);
      "
    >
      <esa-filter-dropdown
        id="map-flt-status"
        label="Status"
        multiple=""
        size="sm"
      ></esa-filter-dropdown>
      <esa-filter-dropdown
        id="map-flt-start"
        label="Planned start"
        multiple=""
        size="sm"
      ></esa-filter-dropdown>
    </div>
    <span id="map-clear-filters"
      ><button
        class="esa-filter-clear-button"
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
```

## Styles
```css
.map-filterbar {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-300);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
}
.map-filterbar__row {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  padding: var(--spacing-250) var(--spacing-400);
}
.map-filterbar__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.map-filterbar__goto {
  margin-left: auto;
  display: flex;
  gap: var(--spacing-200);
}
.map-filterbar__goto esa-combobox {
  --form-height-sm: 32px;
  --form-font-size-sm: var(--type-size-150);
}
.map-filterbar__row + .map-filterbar__row {
  border-top: 1px solid var(--color-border);
}
.esa-filter-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
}
.esa-filter-clear-button {
  --_clear-text: var(--filter-clear-color, var(--color-primary, #43608a));
  --_clear-text-hover: var(
    --filter-clear-color-hover,
    var(--color-primary-hover, #39506f)
  );
  --_clear-font-size: var(--type-size-150, 0.875rem);
  --_clear-icon-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border: none;
  border-radius: var(--radius-100, 0.25rem);
  background: transparent;
  color: var(--_clear-text);
  font-family: var(--font-sans, inherit);
  font-size: var(--_clear-font-size);
  font-weight: var(--font-weight-medium, 450);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--filter-clear-color`: #7c7c7c _(component)_
- `--filter-clear-color-hover`: #ef4444 _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
