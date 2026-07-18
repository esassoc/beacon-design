# Map tab — View segmented bar & filter row

The Map tab is the hero (default of the 3-tab esa-tab-layout: Map · Data · Activity). Its bar carries two rows: a View row (the segmented status bar — All + one pill per display status, each with its live count — plus two "Go to work area / Go to observation" autocomplete comboboxes) and a Filters row (a Status facet dropdown, the clear button, and the Component Buffer layer control). The scopes are GLOBAL to the tab — they filter the map markers AND the readiness strip below it together, so the census figure always agrees with what is drawn.

## Key decisions
- The View segmented bar (esa-button-toggle, size md) is the PRIMARY status scoping per the epic: All (N) · Cleared (N) · Blocked (N) · Inaccessible (N) · Not Surveyed (N). It is a shortcut over the SAME facet state the Status dropdown edits — one source of truth. Pressing a pill sets the facets; a pill reads as selected only while the facets exactly equal its set, so hand-editing the dropdown drops back to no-pill. Counts ride the labels as plain text.
- Provisional blocks count under the Blocked pill — on a go/no-go surface "Blocked" means everything red, solid or hollow. The finer split stays visible in the legend and readiness strip.
- The two "Go to…" comboboxes (esa-combobox, autocomplete) are JUMPS, not filters: type-ahead or pick any of the component's work-area IDs / any observation → pan/zoom + pulse the marker (no drawer opens), then reset to the placeholder.
- There is NO Planned-start filter — no forecasting dates exist in the model. The Status dropdown is the only facet, kept alongside the View bar for multi-status combinations the pills cannot express.
- The Work Area Buffer control (BCN-1454's Component Buffer) rides the Filters row's right edge: an esa-switch-toggle for the layer and a pencil (esa-icon-button) opening the minimal edit dialog — the buffer's label and distance live in the dialog, not the bar.

## Gotchas
- The facets scope the readiness strip too, so re-implementing them in Angular means recomputing the derived status census from the filtered work-area set — not just toggling Leaflet marker visibility.
- Pill "selected" is a derived equality check against the live facets, not a stored mode — do not persist the active pill or it will lie the moment the dropdown is hand-edited.
- The View-bar counts re-derive after every review save (a save can move a work area between pills).

## Done when
- The View bar shows All + the four display statuses with live counts; a pill sets the Status facet and reads selected only while they match; hand-editing the facet clears the pill; "Go to…" pans/pulses without opening a drawer; narrowing a facet re-scopes both the map and the readiness strip.

## Markup
```html
<div class="map-filterbar">
  <div class="map-filterbar__row">
    <span class="map-filterbar__label">View</span>
    <!-- size="md": the View pills one type-size step up (sm 12px/28px →
                 md 14px/36px) — the lego's own size prop, no override; matches
                 the Data tab's pivot toggle. -->
    <esa-button-toggle id="view-presets" value="all" size="md"></esa-button-toggle>
    <!-- mode="select" (not autocomplete): the button trigger carries the
                 standard chevron, and type-ahead survives via the panel's own
                 search input. -->
    <div class="map-filterbar__goto">
      <esa-combobox
        id="goto-wa"
        mode="select"
        size="sm"
        placeholder="Go to work area…"
      ></esa-combobox>
      <esa-combobox
        id="goto-obs"
        mode="select"
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
    <div class="map-filterbar__buffer">
      <esa-switch-toggle
        id="buffer-toggle"
        label="Work Area Buffer"
        size="sm"
        label-position="after"
      ></esa-switch-toggle>
      <span id="buffer-edit"
        ><button
          class="esa-icon-button esa-icon-button--sm"
          type="button"
          aria-label="Edit work area buffer"
          title="Edit work area buffer"
        >
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
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
                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
              ></path>
              <path d="m15 5 4 4"></path>
            </svg>
          </span>
        </button>
      </span>
    </div>
  </div>
</div>
```

## Styles
```css
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-filter-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
}
.esa-filter-clear-button {
  --_clear-text: var(--filter-clear-color, var(--color-primary-strong, #3a7c59));
  --_clear-text-hover: var(
    --filter-clear-color-hover,
    var(--color-primary-strong, #3a7c59)
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
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.comp-picker__trigger .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
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
.map-filterbar__buffer {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}
.wa__section .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--filter-clear-color`: #7c7c7c _(component)_
- `--filter-clear-color-hover`: #ce2c31 _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
