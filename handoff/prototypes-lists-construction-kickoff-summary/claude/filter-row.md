# Filter row

Obligation list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/construction-kickoff-summary/

![Filter row, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/filter-row.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/filter-row.phone.png

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
    options='[{"label":"All components","value":""},{"label":"Southern Forebay &amp; Pumping Plant","value":"southern-forebay-pumping-pla… [559 characters]'
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
