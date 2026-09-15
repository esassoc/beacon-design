# Version rail

The slim sticky rail that makes a long changelog navigable: one row per release — the version number as an anchor link, a short human date beneath it, and a quiet "Latest" marker on the newest entry. A scroll-spy mirrors whichever release is in view into an active highlight.

## Key decisions
- PROGRESSIVE BY CONSTRUCTION: the rows are plain in-page anchor links that jump to each release with no JS. The IntersectionObserver only mirrors the in-view release into an active class — nothing about navigation depends on it.
- Active = the topmost release currently inside a thin band just under the topbar (rootMargin -68px top / -55% bottom). When the scroll sits between bands the last active row stays lit, so the rail never blanks out mid-scroll.
- The active state is an INK SHIFT, never a color fill: the version darkens to primary and gains weight; the row keeps its neutral background. Hover adds at most a sunken wash.
- Version numbers are set in the serif display face (--font-decorative) to echo the version headings in the stream — the rail and the stream speak the same voice.
- "Latest" is a quiet gray marker on the sunken surface, not a colored chip, so it never competes with the active-row ink.
- Dates shorten to "Jul 22" and only append the year when it differs from the newest release's year, keeping the rail slim. They are read in UTC to avoid an ISO-midnight off-by-one.
- The initial highlight comes from the URL hash when it names a known release, else the newest — so arriving from the What's-new popover lights the right row immediately.

## Gotchas
- The rail sticks INSIDE the .modern-layout__content scroll container, which already begins below the fixed 52px topbar (AppShell's body carries the padding-top). Its sticky `top` is therefore a small breathing gap, NOT the topbar height — adding the header offset again double-counts it.
- align-self:start is required: without it the flex item stretches to full height and the sticky element has no slack to move in.
- esa-sidebar-nav is the wrong lego here — it is a route/section nav behind a shadow-DOM, property-driven boundary, its group headings are the banned ornamental micro-label (11px uppercase letter-spaced), and its per-item hint can only be a filled badge pill, not the quiet 14px date meta this rail needs.
- The PAGE owns the .sidebar layout primitive and sets --sidebar-width (~14rem); the rail is designed to be its first-child aside and does not create its own layout.
- On narrow viewports the .sidebar primitive folds the rail above the stream — drop sticky and the height cap there, or it reads as a stuck fragment.

## Done when
- Every release has a row with version, date, and — on the newest only — a "Latest" marker; clicking a row jumps to that release with landing room below the topbar; scrolling moves the active ink down the rail; arriving with #v1-33-0 lights that row on load.

## Markup
```html
<nav class="bcn-release-nav" aria-label="Releases" data-release-nav="">
  <h2 class="bcn-release-nav__heading">Releases</h2>
  <ol class="bcn-release-nav__list" role="list">
    <li class="bcn-release-nav__item">
      <a
        class="bcn-release-nav__link is-active"
        href="#v1-33-0"
        data-release-link="v1-33-0"
        aria-current="true"
      >
        <span class="bcn-release-nav__version">
          1.33.0 <span class="bcn-release-nav__latest">Latest</span>
        </span>
        <span class="bcn-release-nav__date">Jun 2</span>
      </a>
    </li>
    <li class="bcn-release-nav__item">
      <a class="bcn-release-nav__link" href="#v1-32-0" data-release-link="v1-32-0">
        <span class="bcn-release-nav__version"> 1.32.0 </span>
        <span class="bcn-release-nav__date">May 21</span>
      </a>
    </li>
    <li class="bcn-release-nav__item">
      <a class="bcn-release-nav__link" href="#v1-31-0" data-release-link="v1-31-0">
        <span class="bcn-release-nav__version"> 1.31.0 </span>
        <span class="bcn-release-nav__date">May 12</span>
      </a>
    </li>
  </ol>
</nav>
```

## Styles
```css
.bcn-omni-rail__item.is-active {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-semibold);
}
.bcn-omni-row.is-active {
  background: var(--color-surface-sunken);
}
.bcn-release-nav {
  position: sticky;
  top: var(--spacing-500, 1.5rem);
  align-self: start;
  max-block-size: calc(100vh - var(--spacing-900, 6rem));
  overflow-y: auto;
  overscroll-behavior: contain;
}
.bcn-release-nav__heading {
  margin: 0 0 var(--spacing-200, 0.5rem);
  padding-inline: var(--spacing-300, 0.75rem);
  font-size: 1rem;
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-text-primary);
  line-height: 1.3;
}
.bcn-release-nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.bcn-release-nav__link {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--spacing-200, 0.5rem) var(--spacing-300, 0.75rem);
  border-radius: var(--radius-200, 0.5rem);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition:
    background 0.1s ease,
    color 0.1s ease;
}
.bcn-release-nav__link:hover {
  background: var(--color-surface-sunken);
}
.bcn-release-nav__link:hover .bcn-release-nav__version {
  color: var(--color-text-primary);
}
.bcn-release-nav__link:focus-visible {
  outline: var(--focus-ring-width, 2px) solid
    var(--focus-ring-color, var(--color-text-link, #005862));
  outline-offset: 2px;
}
.bcn-release-nav__link.is-active .bcn-release-nav__version {
  color: var(--color-text-primary);
  font-weight: 600;
}
.bcn-release-nav__version {
  display: inline-flex;
  align-items: baseline;
  gap: var(--spacing-200, 0.5rem);
  font-family: var(--font-decorative);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-tertiary);
  line-height: 1.3;
  transition: color 0.1s ease;
}
.bcn-release-nav__latest {
  flex: none;
  font-family: var(--font-sans, "DM Sans", sans-serif);
  font-size: 12px;
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-text-tertiary);
  background: var(--color-surface-sunken);
  padding: 1px var(--spacing-150, 0.375rem);
  border-radius: var(--radius-100, 0.25rem);
  line-height: 1.5;
}
.bcn-release-nav__date {
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
  line-height: 1.35;
}
```

## Tokens
- `--color-primary`: #005862 _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-link`: #005862 _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--focus-ring-color`: #65ba74 _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-900`: 6rem _(primitive)_
