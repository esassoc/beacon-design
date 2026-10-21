# Fixes disclosure (expanded)

Release Notes · source prototype: https://esassoc.github.io/beacon-design/prototypes/release-notes/

![Fixes disclosure (expanded), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/fixes-disclosure-expanded.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/fixes-disclosure-expanded.phone.png

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

## Components

- `bcn-release` (spoke) · `src/components/bcn/BcnReleaseStream.astro`

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

```html
<details class="bcn-release__fixes" open="">
  <summary class="bcn-release__fixes-summary">Fixes &amp; small improvements (5)</summary>
  <ul class="bcn-release__fixes-list">
    <li class="bcn-release__fix">
      <strong>Report package EoC link</strong> — "View Evidence of Compliance" now opens the record
      instead of a 404.
    </li>
    <li class="bcn-release__fix">
      <strong>Edit Action dialog</strong> — preserves linked requirements, shows/saves the correct
      scope, hides the Component/Project choice on component-less projects.
    </li>
    <!-- …and 3 more like this (<li class="bcn-release__fix">) -->
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
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  list-style-position: inside;
}
.bcn-release__fixes-summary:hover {
  color: var(--color-content-default);
}
.bcn-release__fixes-list {
  margin: var(--spacing-300) 0 0;
  gap: var(--spacing-200);
  flex-direction: column;
  max-inline-size: 42rem;
  padding-inline-start: var(--spacing-500);
  display: flex;
}
.bcn-release__fix {
  font-size: 0.875rem;
  line-height: var(--line-height-normal);
  color: var(--color-content-default-tertiary);
}
.bcn-release__fix::marker {
  color: var(--color-border-default-strong);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--line-height-normal` | `1.6` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
