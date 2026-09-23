# Lists search

One keyword search across every list on the project, in the page-level filter panel. It narrows the groups below live and marks every hit.

## Key decisions
- It searches exactly what a row shows, the list NAME and DESCRIPTION, so nothing is matched on text the reader cannot see.
- Same control and behaviour as the setup wizard's obligations search (bcn-sw-filter-row in its `panel` presentation): type → rows narrow on every keystroke, hits wrapped in a yellow <mark>.
- There is deliberately NO type picker, owner, or date facet: the type is the grouping axis itself (see the next section).

## Gotchas
- Highlighting injects <mark> at runtime into sibling rows, so its CSS must be global (or component-level in Angular) — a scoped rule renders the browser-default yellow.
- HTML-escape the row text before re-inserting it with marks; the <mark> wrappers are the only injected markup.

## Done when
- Typing narrows rows in all three groups at once, marks the matches in name and description, and clearing restores every row with no stale marks.

## Markup
```html
<div class="bcn-swfr bcn-swfr--panel">
  <esa-text-field
    class="bcn-swfr__search"
    size="sm"
    name="lists-search"
    placeholder="Search lists"
    aria-label="Search lists"
  ></esa-text-field>
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
