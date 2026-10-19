# What's-new popover (the doorway in)

The app-wide entry point to this page: a popover anchored above the floating help bar listing the newest release's headline stories, each deep-linking to that release on this page, with an "All release notes →" footer. It is how a user finds out something shipped without going looking.

## Key decisions
- Framed by RELEASE, not by date alone: the panel header pairs the "What's new" title with the latest version and its long date, mirroring the quiet meta line the release itself carries. The popover and the page state the same fact the same way.
- Entries are text-only — a serif title over a sans blurb, matching the stream's typographic voice. Per-entry icons were tried and dropped: they added chrome without adding information.
- Every entry links to `<release-notes>#<anchor>` — the anchor is a field on the entry record, so an entry always lands on the release it belongs to.
- The panel is the esa-popover lego (position="top", trigger="click"), which owns open/close, Esc, and outside-click. The bar's own script only persists the seen state.
- The bar is dark glass but this panel stays a white content surface — chrome and content are visibly different materials.
- WHATS_NEW is a curated authored record (the top three headline stories of the newest release), not a derivation over every entry — the point is editorial selection.

## Gotchas
- The unread dot is retired by writing the NEWEST ENTRY DATE to localStorage, not a boolean — that is what makes the dot come back when the next release ships.
- Trigger the popover from a real button; the dot is an aria-hidden decoration and must not be the click target on its own.
- The panel must layer above the floating bar and above page content, and it opens upward — verify it does not clip at the viewport bottom on short windows.

## Done when
- Clicking What's new opens a white panel above the bar headed by the latest version and date; each entry is a serif title over a blurb with no icon; clicking one lands on that release on this page; "All release notes →" opens the page itself; the unread dot is gone afterward and stays gone on reload.

## Markup
```html
<div slot="content" class="bcn-help-bar__panel">
  <header class="bcn-help-bar__panel-header">
    <p class="bcn-help-bar__panel-title">What's new</p>
    <p class="bcn-help-bar__panel-release">
      1.33.0 · <time datetime="2026-06-02">Jun 2, 2026</time>
    </p>
  </header>
  <ul class="bcn-help-bar__panel-list">
    <li class="bcn-help-bar__panel-item">
      <a
        class="bcn-help-bar__panel-link"
        href="/beacon-design/prototypes/release-notes#v1-33-0"
        ><p class="bcn-help-bar__panel-item-title">Commitment Lists</p>
        <p class="bcn-help-bar__panel-item-blurb">
          Save a filtered view of commitments as a reusable, named List, then reopen it
          anytime to scope the grid to just its members.
        </p></a
      >
    </li>
    <li class="bcn-help-bar__panel-item">
      <a
        class="bcn-help-bar__panel-link"
        href="/beacon-design/prototypes/release-notes#v1-33-0"
        ><p class="bcn-help-bar__panel-item-title">Evidence of Compliance</p>
        <p class="bcn-help-bar__panel-item-blurb">
          Every Evidence of Compliance record now lives in one Data Catalog grid with
          Project, Component, and Work Area scope selectors, instead of separate tabs on
          each page.
        </p></a
      >
    </li>
    <li class="bcn-help-bar__panel-item">
      <a
        class="bcn-help-bar__panel-link"
        href="/beacon-design/prototypes/release-notes#v1-33-0"
        ><p class="bcn-help-bar__panel-item-title">Commitment Compliance</p>
        <p class="bcn-help-bar__panel-item-blurb">
          A new Monitoring Portal section shows which commitments are out of compliance
          and the field observations driving it, matched by species.
        </p></a
      >
    </li>
  </ul>
  <div class="bcn-help-bar__panel-footer">
    <a class="bcn-help-bar__panel-all" href="/beacon-design/prototypes/release-notes"
      >All release notes<span class="bcn-help-bar__panel-all-arrow" aria-hidden="true"
        >→</span
      ></a
    >
  </div>
</div>
```

## Styles
```css
.bcn-help-bar__panel {
  width: 340px;
  max-width: 84vw;
  color: var(--color-content-default);
}
.bcn-help-bar__panel-header {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  display: flex;
}
.bcn-help-bar__panel-title {
  font-size: var(--font-size-200, 0.9375rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-bar__panel-release {
  font-size: var(--font-size-150, 0.875rem);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  margin: 0;
}
.bcn-help-bar__panel-list {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-bar__panel-link {
  padding: var(--spacing-150) var(--spacing-150);
  margin: 0 calc(var(--spacing-150) * -1);
  border-radius: var(--radius-200, 8px);
  color: inherit;
  transition: background var(--transition-fast, 0.15s ease);
  text-decoration: none;
  display: block;
}
.bcn-help-bar__panel-link:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-help-bar__panel-link:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 2px;
}
.bcn-help-bar__panel-item-title {
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0 0 2px;
  line-height: 1.3;
}
.bcn-help-bar__panel-item-blurb {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-regular, 400);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.45;
}
.bcn-help-bar__panel-footer {
  margin-top: var(--spacing-300);
  padding-top: var(--spacing-250, 0.625rem);
  border-top: 1px solid var(--color-border-default);
}
.bcn-help-bar__panel-all {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-link);
  align-items: center;
  gap: 4px;
  text-decoration: none;
  display: inline-flex;
}
.bcn-help-bar__panel-all:hover {
  text-decoration: underline;
}
.bcn-help-bar__panel-all:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-help-bar__panel-all-arrow {
  transition: transform 0.15s;
}
.bcn-help-bar__panel-all:hover .bcn-help-bar__panel-all-arrow {
  transform: translate(2px);
}
```

## Tokens
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 350 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
