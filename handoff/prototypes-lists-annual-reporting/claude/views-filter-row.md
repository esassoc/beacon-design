# Views + filter row

Action list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/annual-reporting/

![Views + filter row, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/views-filter-row.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/views-filter-row.phone.png

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

## Components

- `bcn-swfr` (spoke) · `src/components/bcn/BcnSwFilterRow.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

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
    options='[{"label":"All components","value":""},{"label":"Southern Forebay &amp; Pumping Plant","value":"southern-forebay-pumping-pla… [559 characters]'
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

| Token | Value | Tier |
|---|---|---|
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
