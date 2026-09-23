# Views + filter row

Search plus three row pickers — Component, Status, Evidence — under the view tabs (By Compliance Index · By type · By commitment · A–Z). Expand all / Collapse all sit below the gray panel, right-aligned.

## Key decisions
- NO Type picker (removed 2026-09-23): "By type" is a view, and the picker duplicated it.
- All three are ROW filters ANDed in one pass (passImpls({component, status, evidence})): failing implementation rows hide, cards with none left drop, empty branches drop.
- Component matches the implementation id's suffix — an implementation id is `${actionId}|${componentId}`.
- Status options run in lifecycle order (Not Started, In Progress, Overdue, On Hold, Completed), not alphabetical.
- The master tree is By Compliance Index. The other views are clones marked data-list-mirror, rebuilt after every filter pass; verbs on a clone resolve to the master card (cardOf).

## Gotchas
- Count badges report what the list holds, not what the filter shows.
- Tree queries must exclude [data-list-mirror] or every card counts twice.

## Done when
- Component = one DCP component → every visible row is on that component; add Evidence = none → fewer; reset → all cards back.

## Markup
```html
<div class="bcn-swfr bcn-swfr--panel">
  <esa-text-field
    class="bcn-swfr__search"
    size="sm"
    name="list-search"
    placeholder="Search actions"
    aria-label="Search actions"
  ></esa-text-field
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
    name="list-search-status"
    options='[{"label":"All statuses","value":""},{"value":"not-started","label":"Not Started"},{"value":"in-progress","label":"In Progress"},{"value":"overdue","label":"Overdue"},{"value":"on-hold","label":"On Hold"},{"value":"completed","label":"Completed"}]'
    value=""
    placeholder="All statuses"
    cue="Filter by status."
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
