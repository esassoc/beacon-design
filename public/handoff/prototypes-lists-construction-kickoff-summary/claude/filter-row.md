# Filter row

Search plus three pickers above the tree: Category, Component, Evidence (Has Evidence / Has No Evidence). Expand all / Collapse all sit OUTSIDE the gray panel, right-aligned under it.

## Key decisions
- NO Status filter on obligations: obligations are conditional, as-needed and recurring, so "not started / completed" means nothing for them (Andy, 2026-09-23).
- Component matches an implementation's component (the 7 DCP components the evidence drawer scopes to). Component and Evidence are ROW filters: they are ANDed per implementation row, and a card left with no matching rows hides.
- Search matches the obligation title (as renamed for this list) and marks hits; matching cards open their branches.
- Expand all stops at the subcategory row. Cards stay closed so the reader sees the shape first.

## Gotchas
- Hidden-by-filter is not the same as collapsed: count visibility with closest("[hidden]"), not offsetParent (closed <details> also has no offsetParent).

## Done when
- Picking a component leaves only cards implemented on it; adding "Has No Evidence" narrows further; Reset restores the whole tree and its counts.

## Markup
```html
<div class="bcn-swfr bcn-swfr--panel">
  <esa-text-field
    class="bcn-swfr__search"
    size="sm"
    name="list-search"
    placeholder="Search obligations"
    aria-label="Search obligations"
  ></esa-text-field
  ><esa-select
    class="bcn-swfr__picker"
    size="sm"
    name="list-search-category"
    options='[{"label":"All categories","value":""},{"label":"Hazards","value":"hazards"},{"label":"Lighting","value":"lighting"},{"label":"Site conduct","value":"site"}]'
    value=""
    placeholder="All categories"
    cue="Filter by category."
  ></esa-select
  ><esa-select
    class="bcn-swfr__picker"
    size="sm"
    name="list-search-component"
    options='[{"label":"All components","value":""},{"label":"Southern Forebay &amp; Pumping Plant","value":"southern-forebay-pumping-plant"},{"label":"Intake B — North Delta","value":"intake-b-north-delta"},{"label":"Twin Cities Complex","value":"twin-cities-complex"},{"label":"Intake C — North Delta","value":"intake-c-north-delta"},{"label":"Bouldin Island Launch Shaft","value":"bouldin-island-launch-shaft"},{"label":"Bethany Reservoir Aqueduct","value":"bethany-reservoir-aqueduct"},{"label":"Byron Tract Forebay","value":"byron-tract-forebay"}]'
    value=""
    placeholder="All components"
    cue="Filter by component."
  ></esa-select
  ><esa-select
    class="bcn-swfr__picker"
    size="sm"
    name="list-search-evidence"
    options='[{"label":"Any evidence","value":""},{"value":"has","label":"Has Evidence"},{"value":"none","label":"Has No Evidence"}]'
    value=""
    placeholder="Any evidence"
    cue="Filter by evidence."
  ></esa-select>
  <div class="bcn-swfr__verbs"></div>
</div>
```

## Styles
```css
.bcn-swfr {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-500);
  border-top: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default);
  flex-wrap: wrap;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swfr--inset {
  border-top: none;
}
.bcn-swfr--panel {
  padding: var(--spacing-250) var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
}
.bcn-swfr--panel .bcn-swfr__search,
.bcn-swfr--panel .bcn-swfr__picker {
  --color-background-field: var(--color-background-elevation-raised);
}
.bcn-swfr__search {
  flex: 180px;
  max-width: 360px;
}
.bcn-swfr__picker {
  flex: 0 180px;
  min-width: 140px;
}
.bcn-swfr__verbs {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.bcn-swfr__verbs:empty {
  display: none;
}
```

## Tokens
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
