# Version rail

Release Notes · source prototype: https://esassoc.github.io/beacon-design/prototypes/release-notes/

![Version rail, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/version-rail.desktop.png)

A slim sticky list of release versions on the end side of the page, each an anchor link to its post. A scroll-spy mirrors whichever release is in view into an active highlight. Wide screens only.

## Key decisions

- PROGRESSIVE BY CONSTRUCTION: the rows are plain in-page anchor links that jump to each release with no JS. The IntersectionObserver only mirrors the in-view release into an active class.
- Versions only. Each post carries its own version badge and date in its meta column, so the rail repeats neither the date nor a "Latest" marker.
- The active state is an ink shift, never a color fill: the version darkens and gains weight.
- Below 64rem the rail is not rendered; the posts' own meta columns carry the version.

## Gotchas

- The rail sticks INSIDE the .modern-layout__content scroll container, which already begins below the fixed topbar. Its sticky `top` is a small breathing gap, not the topbar height.
- The PAGE owns the .sidebar primitive (data-side="end", --sidebar-width 12rem); the rail is its first-child aside.

## Done when

- Every release has a row; clicking one jumps to that post with landing room below the topbar; scrolling moves the active ink down the rail; the rail is absent on a phone.

## Components

- `bcn-release-nav` (spoke) · `src/components/bcn/BcnReleaseNav.astro`

## Markup

```html
<nav class="bcn-release-nav" aria-label="Releases" data-release-nav="">
  <h2 class="bcn-release-nav__heading">Releases</h2>
  <ol class="bcn-release-nav__list" role="list">
    <li class="bcn-release-nav__item">
      <a
        class="bcn-release-nav__link is-active"
        href="#v1-41-0"
        data-release-link="v1-41-0"
        aria-current="true"
        ><span class="bcn-release-nav__version">1.41.0</span></a
      >
    </li>
    <li class="bcn-release-nav__item">
      <a class="bcn-release-nav__link" href="#v1-40-0" data-release-link="v1-40-0"
        ><span class="bcn-release-nav__version">1.40.0</span></a
      >
    </li>
    <li class="bcn-release-nav__item">
      <a class="bcn-release-nav__link" href="#v1-39-0" data-release-link="v1-39-0"
        ><span class="bcn-release-nav__version">1.39.0</span></a
      >
    </li>
  </ol>
</nav>
```

## Styles

```css
.bcn-omni-rail__item.is-active {
  background: var(--color-background-brand);
  color: var(--color-content-default-knockout);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-omni-row.is-active {
  background: var(--color-background-elevation-sunken);
}
.bcn-release-nav {
  top: var(--spacing-500, 1.5rem);
  max-block-size: calc(100vh - var(--spacing-900, 6rem));
  overscroll-behavior: contain;
  align-self: start;
  position: sticky;
  overflow-y: auto;
}
.bcn-release-nav__heading {
  margin: 0 0 var(--spacing-200, 0.5rem);
  padding-inline: var(--spacing-300, 0.75rem);
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold, 600);
  color: var(--color-content-default);
  line-height: 1.3;
}
.bcn-release-nav__list {
  flex-direction: column;
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-release-nav__link {
  padding: var(--spacing-200, 0.5rem) var(--spacing-300, 0.75rem);
  border-radius: var(--radius-200, 0.5rem);
  color: var(--color-content-default-secondary);
  flex-direction: column;
  gap: 2px;
  text-decoration: none;
  transition:
    background 0.1s,
    color 0.1s;
  display: flex;
}
.bcn-release-nav__link:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-release-nav__link:hover .bcn-release-nav__version {
  color: var(--color-content-default);
}
.bcn-release-nav__link:focus-visible {
  outline: var(--focus-ring-width, 2px) solid
    var(--focus-ring-color, var(--color-content-link, #005862));
  outline-offset: 2px;
}
.bcn-release-nav__link.is-active .bcn-release-nav__version {
  color: var(--color-content-default);
  font-weight: 600;
}
.bcn-release-nav__version {
  align-items: baseline;
  gap: var(--spacing-200, 0.5rem);
  font-family: var(--font-decorative);
  color: var(--color-content-default-tertiary);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3;
  transition: color 0.1s;
  display: inline-flex;
}
@media (width<=64rem) {
  .bcn-release-nav {
    display: none;
  }
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-900` | `6rem` | primitive |
| `--typography-font-weight-semibold` | `550` | semantic |
