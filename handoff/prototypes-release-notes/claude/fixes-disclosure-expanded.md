# Fixes disclosure (expanded)

The long tail of each release — small fixes and improvements — collapsed behind a native disclosure that shows the count in its summary. It keeps the release honest about everything that shipped without letting the tail dominate the scan.

## Key decisions
- A native <details> / <summary>, not a JS accordion: it needs no client code, is keyboard- and screen-reader-correct by default, and survives with JS off.
- The summary carries the COUNT ("Fixes & small improvements (12)"), so the volume is visible without expanding.
- Collapsed by default on every release, including the latest — the headline and area tiers are the story; this is the appendix.
- Fix lines are plain list items running through the same inline **bold** / `code` formatter as the rest of the stream.

## Gotchas
- Style the summary marker deliberately; browsers disagree on the default triangle, and an unstyled one reads as a bug next to the rest of the page.
- Do not replace this with a component that animates height — the value here is that it costs zero client JS.
- If a release has no fixes the whole disclosure is omitted, not rendered empty with a zero count.

## Done when
- Each release with fixes shows a collapsed summary carrying the count; clicking or pressing Enter expands the full list; the page still works with JS disabled.

## Markup
```html
<details class="bcn-release__fixes" open="">
  <summary class="bcn-release__fixes-summary">Fixes &amp; small improvements (5)</summary>
  <ul class="bcn-release__fixes-list">
    <li class="bcn-release__fix">
      <strong>Report package EoC link</strong> — "View Evidence of Compliance" now opens
      the record instead of a 404.
    </li>
    <li class="bcn-release__fix">
      <strong>Edit Action dialog</strong> — preserves linked requirements, shows/saves the
      correct scope, hides the Component/Project choice on component-less projects.
    </li>
    <li class="bcn-release__fix">
      <strong>Component delete</strong> — returns you to the project Overview instead of
      the global Data Catalog.
    </li>
    <li class="bcn-release__fix">
      <strong>Species names</strong> — names with the "go" substring stripped are
      restored, along with their species codes.
    </li>
    <li class="bcn-release__fix">
      <strong>Project tab titles / breadcrumbs</strong> — show resolved names instead of
      GUIDs.
    </li>
  </ul>
</details>
```

## Styles
```css
.bcn-release__fixes {
  margin-block-start: var(--spacing-600);
}
.bcn-release__fixes-summary {
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  list-style-position: inside;
}
.bcn-release__fixes-summary:hover {
  color: var(--color-text-primary);
}
.bcn-release__fixes-list {
  margin: var(--spacing-300) 0 0;
  padding-inline-start: var(--spacing-500);
  max-inline-size: 42rem;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-release__fix {
  font-size: 0.875rem;
  line-height: var(--line-height-normal);
  color: var(--color-text-tertiary);
}
.bcn-release__fix::marker {
  color: var(--color-border-strong);
}
```

## Tokens
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-medium`: 500 _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
