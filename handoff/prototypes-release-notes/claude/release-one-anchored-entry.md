# Release (one anchored entry)

Release Notes · source prototype: https://esassoc.github.io/beacon-design/prototypes/release-notes/

![Release (one anchored entry), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/release-one-anchored-entry.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/release-one-anchored-entry.phone.png

One release in the stream: a quiet meta line ("Latest" + the long date) above the serif version number, then the headline stories, then area-grouped entries, then a collapsed fixes list. This is the repeating unit of the whole page.

## Key decisions

- Meta ABOVE the version (the Sketch changelog pattern): the small quiet date line sits first, then the large serif version number — so a scan down the page reads as dates first, versions second.
- THREE TIERS OF NEWS, in descending prominence: headline stories (serif titles, the richest tier), area-grouped entries (sans, grouped under an area heading), and fixes (a collapsed list). A reader who stops after the headlines still knows what shipped.
- Typography carries the hierarchy, not color: a serif display layer (Besley, --font-decorative) for the version number and headline titles, sans for everything else, with size and weight doing the rest. The ink is MONOCHROME — no status color anywhere on the page.
- "Latest" is a quiet gray text label, not a chip. The only color that surfaces on the page is the house link color on actual links.
- Every release and every entry is a hash target (#<anchor> and #<anchor>-<entryId>), with scroll-margin for landing room — so the rail, the What's-new popover, and cross-release headline links all resolve to an exact place.
- Prose is held to a ~42rem measure so text never runs the full width of the content column.
- Fully presentational: the entire stream renders from RELEASES with no props and no client JS — the fixes disclosure is a native <details>.

## Gotchas

- Inline **bold** and `code` in the copy are formatted at BUILD time (escape HTML → swap patterns → set:html), because Astro will not process markup inside interpolated strings. Escape first, and swap code before bold so a ** inside a code span stays literal.
- Dates are formatted from `${iso}T00:00:00` to pin local midnight — parsing the bare ISO string shifts the displayed date a day in negative-offset timezones.
- No esa-* lego renders a changelog: esa-card is a bare container. The callout icon is esa-icon composed inside; the code and bold spans are token-driven content typography.
- The scroll-margin is tuned for a scroll container that already starts below the fixed topbar. In a layout where the page itself scrolls, that offset has to grow by the topbar height.

## Done when

- The newest release shows "Latest" + its long date above a serif version number; headlines read as the most prominent tier; the page carries no status color; every release and entry has a working hash anchor that lands with breathing room.

## Components

- `bcn-release` (spoke) · `src/components/bcn/BcnReleaseStream.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_11 repeated elements are collapsed in the markup below; the comments say where._

```html
<article class="bcn-release" id="v1-33-0" aria-labelledby="v1-33-0-heading">
  <header class="bcn-release__header">
    <p class="bcn-release__meta">
      <span class="bcn-release__latest">Latest</span
      ><time class="bcn-release__date" datetime="2026-06-02">June 2, 2026</time>
    </p>
    <h2 class="bcn-release__version" id="v1-33-0-heading">1.33.0</h2>
  </header>
  <ul class="bcn-release__headlines">
    <li class="bcn-release__headline">
      <h3 class="bcn-release__headline-title">
        <a class="bcn-release__headline-link" href="#v1-33-0-commitment-lists">Commitment Lists</a>
      </h3>
      <p class="bcn-release__headline-text">
        The Data Catalog Commitments page gains reusable <strong>Lists</strong> — save a filtered
        view as a named List, reopen it later to scope the grid to its members, update its
        membership from the current view, add or remove individual commitments inline, and rename or
        delete Lists with confirmation. This replaces (and retires) the old "Tag These Commitments"
        workaround in the Compare overlay.
      </p>
    </li>
    <li class="bcn-release__headline">
      <h3 class="bcn-release__headline-title">
        <a class="bcn-release__headline-link" href="#v1-33-0-eoc-single-grid"
          >Evidence of Compliance is consolidated to one grid</a
        >
      </h3>
      <p class="bcn-release__headline-text">
        <strong>Read this first</strong> — the EoC tabs on Project and Component detail pages are
        <strong>removed</strong>; all evidence is now managed from the canonical Data Catalog EoC
        grid with Project / Component / Work Area scope selectors. Featuring evidence on a
        Component's Summary Page moves to a multi-select dialog. Image and <code>.zip</code> files
        are now allowed as evidence.
      </p>
    </li>
    <!-- …and 3 more like this (<li class="bcn-release__headline">) -->
  </ul>
  <section class="bcn-release__group">
    <h3 class="bcn-release__group-title">Data Model &amp; Navigation Updates</h3>
    <div class="bcn-release__entries">
      <div class="bcn-release__entry" id="v1-33-0-eoc-tabs-moved">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Evidence of Compliance tabs are gone from Project and Component detail pages
          </h4>
        </div>
        <div class="bcn-release__blocks">
          <aside class="bcn-release__callout">
            <span class="bcn-release__callout-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path></svg></span
            ></span>
            <p class="bcn-release__callout-text">
              Read this first — these three changes move or remove things you're used to finding in
              a particular place.
            </p>
          </aside>
          <p class="bcn-release__p">
            All Evidence of Compliance is now managed from the canonical Data Catalog EoC grid,
            which gained Project / Component / Work Area scope selectors. Nothing is lost — the same
            records are reachable from the grid — but anyone used to the per-Project or
            per-Component EoC tab needs to be pointed at the Data Catalog grid instead. Featuring
            evidence on a Component's Summary Page is now done through a multi-select dialog opened
            from the Component overview star.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-legacy-shell-retired">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">The legacy app shell has been retired</h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            The modern header and side navigation are now the only experience — the old shell can no
            longer be toggled on. Customers still on the legacy look will see the modern shell on
            their next sign-in.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-species-names-corrected">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">Some species names have been corrected</h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            A data issue had stripped the substring "go" from certain species names (e.g. "San Die
            Banded Gecko" → corrected to "San Diego Banded Gecko", "lden Eagle" → "Golden Eagle",
            "Marbled Dwit" → "Marbled Godwit"). These names — and their 4-letter species codes where
            applicable — are restored to their correct spelling.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bcn-release__group">
    <h3 class="bcn-release__group-title">Commitment Lists</h3>
    <div class="bcn-release__entries">
      <div class="bcn-release__entry" id="v1-33-0-commitment-lists">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Organize commitments into reusable Lists on the Commitments page
          </h4>
          <span class="bcn-release__applies">applies to all tenants</span>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            Create a List from a filtered view, add commitments to an existing List, edit or compare
            Lists, and add or remove individual commitments inline. The Commitments grid toolbar now
            exposes a <strong>Lists</strong> library: save the current view as a named List, reopen
            it later to scope the grid to its members, update its membership from the current view,
            and rename or delete Lists with confirmation. The previous "Tag These Commitments" bulk
            workaround in the Compare overlay is removed — existing tag chips, tag filtering, and
            per-commitment tag editing are unchanged.
          </p>
          <p class="bcn-release__p">
            This release also brings a refreshed visual style across grids and pages — a cleaner
            page shell, updated grid styling, and more compact tag chips.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- …and 5 more like this (<section class="bcn-release__group">) -->
  <details class="bcn-release__fixes">
    <summary class="bcn-release__fixes-summary">Fixes &amp; small improvements (5)</summary>
    <ul class="bcn-release__fixes-list">
      <li class="bcn-release__fix">
        <strong>Report package EoC link</strong> — "View Evidence of Compliance" now opens the
        record instead of a 404.
      </li>
      <li class="bcn-release__fix">
        <strong>Edit Action dialog</strong> — preserves linked requirements, shows/saves the correct
        scope, hides the Component/Project choice on component-less projects.
      </li>
      <!-- …and 3 more like this (<li class="bcn-release__fix">) -->
    </ul>
  </details>
</article>
```

## Styles

```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.bcn-release {
  inline-size: 100%;
  max-inline-size: 46rem;
  scroll-margin-top: var(--spacing-500);
  padding-block: var(--spacing-800);
  margin-inline: auto;
}
.bcn-release + .bcn-release {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-release:first-child {
  padding-block-start: var(--spacing-500);
}
.bcn-release__header {
  gap: var(--spacing-150);
  flex-direction: column;
  margin-block-end: var(--spacing-600);
  display: flex;
}
.bcn-release__meta {
  color: var(--color-content-default-tertiary);
  flex-wrap: wrap;
  align-items: baseline;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  display: flex;
}
.bcn-release__latest {
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.bcn-release__latest:after {
  content: "·";
  margin-inline: var(--spacing-200);
  color: var(--bcn-content-muted);
}
.bcn-release__version {
  font-family: var(--font-decorative);
  font-size: var(--font-size-600);
  letter-spacing: -0.01em;
  color: var(--color-content-default);
  margin: 0;
  font-weight: 600;
  line-height: 1.15;
}
.bcn-release__headlines {
  margin: 0 0 var(--spacing-700);
  gap: var(--spacing-600);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-release__headline {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-release__headline-title {
  font-family: var(--font-decorative);
  letter-spacing: -0.005em;
  color: var(--color-content-default);
  margin: 0;
  font-size: clamp(1.1875rem, 1.05rem + 0.7vw, 1.3125rem);
  font-weight: 500;
  line-height: 1.3;
}
.bcn-release__headline-link {
  color: inherit;
  text-decoration: none;
}
.bcn-release__headline-link:hover {
  color: var(--color-content-link);
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-release__headline-text {
  max-inline-size: 42rem;
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-release__group + .bcn-release__group {
  margin-block-start: var(--spacing-700);
}
.bcn-release__group-title {
  margin: 0 0 var(--spacing-400);
  border-bottom: 1px solid var(--color-border-default-subtle);
  font-size: 1.0625rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  padding-block-end: var(--spacing-200);
}
.bcn-release__entries {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-release__entry {
  scroll-margin-top: var(--spacing-500);
}
.bcn-release__entry-head {
  align-items: baseline;
  gap: var(--spacing-150) var(--spacing-300);
  flex-wrap: wrap;
  max-inline-size: 42rem;
  margin-block-end: var(--spacing-300);
  display: flex;
}
.bcn-release__entry-title {
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.4;
}
.bcn-release__flag {
  align-items: baseline;
  gap: var(--spacing-100);
  padding: 2px var(--spacing-200);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
  display: inline-flex;
}
.bcn-release__flag code {
  font-family: var(--typography-font-family-mono);
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-release__applies {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.bcn-release__blocks {
  gap: var(--spacing-400);
  flex-direction: column;
  max-inline-size: 42rem;
  display: flex;
}
.bcn-release__p {
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-release__bullets {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding-inline-start: var(--spacing-500);
  display: flex;
}
.bcn-release__bullet {
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-content-default);
}
.bcn-release__bullet::marker {
  color: var(--color-content-default-tertiary);
}
.bcn-release__callout {
  align-items: start;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
  grid-template-columns: auto 1fr;
  display: grid;
}
.bcn-release__callout-icon {
  color: var(--color-content-default-secondary);
  margin-block-start: 2px;
  display: inline-flex;
}
.bcn-release__callout-text {
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-content-default);
  margin: 0;
}
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
.bcn-release strong {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-release code {
  font-family: var(--typography-font-family-mono);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
  padding: 1px 5px;
  font-size: 0.875em;
}
@media (width<=32rem) {
  .bcn-release {
    padding-block: var(--spacing-700);
  }
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-600` | `clamp(1.375rem, 1.2rem + .88vw, 1.875rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--line-height-normal` | `1.6` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--spacing-800` | `4rem` | primitive |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
