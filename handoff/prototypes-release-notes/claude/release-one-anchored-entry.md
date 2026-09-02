# Release (one anchored entry)

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

## Markup
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
        <a class="bcn-release__headline-link" href="#v1-33-0-commitment-lists"
          >Commitment Lists</a
        >
      </h3>
      <p class="bcn-release__headline-text">
        The Data Catalog Commitments page gains reusable <strong>Lists</strong> — save a
        filtered view as a named List, reopen it later to scope the grid to its members,
        update its membership from the current view, add or remove individual commitments
        inline, and rename or delete Lists with confirmation. This replaces (and retires)
        the old "Tag These Commitments" workaround in the Compare overlay.
      </p>
    </li>
    <li class="bcn-release__headline">
      <h3 class="bcn-release__headline-title">
        <a class="bcn-release__headline-link" href="#v1-33-0-eoc-single-grid"
          >Evidence of Compliance is consolidated to one grid</a
        >
      </h3>
      <p class="bcn-release__headline-text">
        <strong>Read this first</strong> — the EoC tabs on Project and Component detail
        pages are <strong>removed</strong>; all evidence is now managed from the canonical
        Data Catalog EoC grid with Project / Component / Work Area scope selectors.
        Featuring evidence on a Component's Summary Page moves to a multi-select dialog.
        Image and <code>.zip</code> files are now allowed as evidence.
      </p>
    </li>
    <li class="bcn-release__headline">
      <h3 class="bcn-release__headline-title">
        <a class="bcn-release__headline-link" href="#v1-33-0-commitment-compliance"
          >Monitoring Portal: Commitment Compliance</a
        >
      </h3>
      <p class="bcn-release__headline-text">
        A new dashboard section surfaces which commitments are out of compliance and the
        observations driving it — Nesting Bird and Biological Resource observations are
        now bridged to commitments by species.
      </p>
    </li>
    <li class="bcn-release__headline">
      <h3 class="bcn-release__headline-title">
        <a class="bcn-release__headline-link" href="#v1-33-0-legacy-shell-retired"
          >The legacy app shell is retired</a
        >
      </h3>
      <p class="bcn-release__headline-text">
        <strong>Read this first</strong> — the modern header and side navigation are now
        the only experience; the old shell is gone.
      </p>
    </li>
    <li class="bcn-release__headline">
      <h3 class="bcn-release__headline-title">
        ESA Admins can create &amp; configure tenants in-app
      </h3>
      <p class="bcn-release__headline-text">
        A new Configure → Tenants screen lets ESA Admins stand up a new tenant — name,
        subdomain, modules, enrolled users, and starter commitment types, phases, and
        resource categories.
      </p>
    </li>
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
              Read this first — these three changes move or remove things you're used to
              finding in a particular place.
            </p>
          </aside>
          <p class="bcn-release__p">
            All Evidence of Compliance is now managed from the canonical Data Catalog EoC
            grid, which gained Project / Component / Work Area scope selectors. Nothing is
            lost — the same records are reachable from the grid — but anyone used to the
            per-Project or per-Component EoC tab needs to be pointed at the Data Catalog
            grid instead. Featuring evidence on a Component's Summary Page is now done
            through a multi-select dialog opened from the Component overview star.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-legacy-shell-retired">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">The legacy app shell has been retired</h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            The modern header and side navigation are now the only experience — the old
            shell can no longer be toggled on. Customers still on the legacy look will see
            the modern shell on their next sign-in.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-species-names-corrected">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">Some species names have been corrected</h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            A data issue had stripped the substring "go" from certain species names (e.g.
            "San Die Banded Gecko" → corrected to "San Diego Banded Gecko", "lden Eagle" →
            "Golden Eagle", "Marbled Dwit" → "Marbled Godwit"). These names — and their
            4-letter species codes where applicable — are restored to their correct
            spelling.
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
            Create a List from a filtered view, add commitments to an existing List, edit
            or compare Lists, and add or remove individual commitments inline. The
            Commitments grid toolbar now exposes a <strong>Lists</strong> library: save
            the current view as a named List, reopen it later to scope the grid to its
            members, update its membership from the current view, and rename or delete
            Lists with confirmation. The previous "Tag These Commitments" bulk workaround
            in the Compare overlay is removed — existing tag chips, tag filtering, and
            per-commitment tag editing are unchanged.
          </p>
          <p class="bcn-release__p">
            This release also brings a refreshed visual style across grids and pages — a
            cleaner page shell, updated grid styling, and more compact tag chips.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bcn-release__group">
    <h3 class="bcn-release__group-title">Evidence of Compliance</h3>
    <div class="bcn-release__entries">
      <div class="bcn-release__entry" id="v1-33-0-eoc-single-grid">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Evidence of Compliance is managed from a single grid
          </h4>
          <span class="bcn-release__applies">applies to all tenants</span>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            The Evidence of Compliance tabs on Project and Component detail pages are
            removed; their content now lives on the canonical Data Catalog EoC grid, which
            has Project / Component / Work Area scope selectors. Featuring evidence on a
            Component's Summary Page is now a multi-select dialog — open the Component
            overview star and pick all components on whose Summary Page the evidence
            should appear. (See the Data Model heads-up above.)
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-eoc-image-zip">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Image and `.zip` files can now be uploaded as Evidence of Compliance
          </h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            The accepted file types for evidence uploads now include images and
            <code>.zip</code> archives.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-eoc-report-link">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            The "View Evidence of Compliance" link on report packages works again
          </h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            On a generated report package, that link now opens the evidence record instead
            of a not-found page.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bcn-release__group">
    <h3 class="bcn-release__group-title">Monitoring Portal</h3>
    <div class="bcn-release__entries">
      <div class="bcn-release__entry" id="v1-33-0-commitment-compliance">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            See which commitments are out of compliance — and why
          </h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            A new <strong>Commitment Compliance</strong> section on the Monitoring Portal
            Dashboard surfaces commitments that are out of compliance along with the
            observations driving it. Nesting Bird and Biological Resource observations are
            matched to commitments by species, so field observations now connect directly
            to the commitments they affect.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-map-layer-panel">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">A new in-app map layer panel</h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            The corner layer toggle on every map (project detail, monitoring portal,
            project layer details, footprint selection dialog, project-layer admin) is
            replaced by an in-app panel that matches the rest of the Beacon UI. Layers are
            grouped by their configured category and can be filtered by name, with
            <strong>Select all / Deselect all / Reset</strong> bulk actions. Long
            species/feature names truncate with a tooltip, and a red alert icon flags any
            layer whose service URL can't be reached.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bcn-release__group">
    <h3 class="bcn-release__group-title">Document Review</h3>
    <div class="bcn-release__entries">
      <div class="bcn-release__entry" id="v1-33-0-doc-review-gap-triage">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Triage gap commitments inline on the Gaps tab
          </h4>
          <span class="bcn-release__flag">flag<code>DocumentReview</code></span>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            Each un-mapped (gap) commitment row carries a cycling status chip —
            <strong>Unscreened / Relevant / Not Relevant</strong> — that you click to set
            its screening relevance; the gap list groups by status. The Show-filter chips
            now live inside the filter toolbar, with a new <strong>All</strong> option.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-doc-review-sections">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Add, edit, renumber, and delete outline sections without re-importing the CSV
          </h4>
          <span class="bcn-release__flag">flag<code>DocumentReview</code></span>
        </div>
        <div class="bcn-release__blocks">
          <ul class="bcn-release__bullets">
            <li class="bcn-release__bullet">
              <strong>Add a section</strong> directly from the By Section tab via a side
              dialog — no outline re-import needed.
            </li>
            <li class="bcn-release__bullet">
              <strong>Edit a section's number and title</strong>, or
              <strong>delete it</strong>. Renumbering moves the section to its correct
              place in the outline; deleting a section reattaches its children to the
              deleted section's parent.
            </li>
          </ul>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-doc-review-exports">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Export the Gaps view and per-section breakdowns
          </h4>
          <span class="bcn-release__flag">flag<code>DocumentReview</code></span>
        </div>
        <div class="bcn-release__blocks">
          <ul class="bcn-release__bullets">
            <li class="bcn-release__bullet">
              <strong>Gaps CSV</strong> — export every un-mapped commitment with its
              screening relevance (Unscreened / Relevant / Not Relevant).
            </li>
            <li class="bcn-release__bullet">
              <strong>Per-section zip</strong> — download a zip with one CSV per chapter
              (root section), alongside the existing full export. Export controls are now
              scoped to the active tab.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="bcn-release__group">
    <h3 class="bcn-release__group-title">Setup Wizard</h3>
    <div class="bcn-release__entries">
      <div class="bcn-release__entry" id="v1-33-0-inline-contacts-orgs">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Add External Contacts and Organizations inline from any picker
          </h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            A new <code>+</code> affordance next to every Assignee and Notification
            Recipients picker opens a side dialog to add a new External Contact or
            External Organization without losing the in-progress form. When adding an
            External Contact, its required Organization picker has its own
            <code>+</code> so a new Organization can be created in the same flow.
            Newly-created records persist to the global External Contacts / External
            Organizations lists.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-edit-action-fixes">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">Edit Action dialog fixes</h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            The Edit Action dialog now preserves an action's linked requirements on save,
            shows and saves the correct scope, and hides the Component/Project choice on
            projects that have no components.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-setup-wizard-chrome">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Refreshed get-started landing and chrome
          </h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            The Setup Wizard landing, header, and sidebar have a refreshed look — the
            header is now a link back to the landing, and long document reference numbers
            no longer overflow the sidebar.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bcn-release__group">
    <h3 class="bcn-release__group-title">Commitments &amp; Projects</h3>
    <div class="bcn-release__entries">
      <div class="bcn-release__entry" id="v1-33-0-add-edit-commitment-dialog">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">Refreshed Add/Edit Commitment dialog</h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            The Add/Edit Commitment dialog has a refreshed two-column layout with an
            inline help icon on every field.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-component-delete-overview">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Deleting a Component returns you to the project Overview
          </h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            After deleting a Component you now land on the project's Overview page instead
            of the global Data Catalog.
          </p>
        </div>
      </div>
      <div class="bcn-release__entry" id="v1-33-0-names-not-guids">
        <div class="bcn-release__entry-head">
          <h4 class="bcn-release__entry-title">
            Tab titles and breadcrumbs show names, not GUIDs
          </h4>
        </div>
        <div class="bcn-release__blocks">
          <p class="bcn-release__p">
            Project pages now display resolved entity names in tab titles and breadcrumbs
            instead of raw identifiers.
          </p>
        </div>
      </div>
    </div>
  </section>
  <details class="bcn-release__fixes">
    <summary class="bcn-release__fixes-summary">
      Fixes &amp; small improvements (5)
    </summary>
    <ul class="bcn-release__fixes-list">
      <li class="bcn-release__fix">
        <strong>Report package EoC link</strong> — "View Evidence of Compliance" now opens
        the record instead of a 404.
      </li>
      <li class="bcn-release__fix">
        <strong>Edit Action dialog</strong> — preserves linked requirements, shows/saves
        the correct scope, hides the Component/Project choice on component-less projects.
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
</article>
```

## Styles
```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
.bcn-release-nav__latest {
  font-family: var(--typography-font-family-sans, "DM Sans", sans-serif);
  font-size: 12px;
  font-weight: var(--typography-font-weight-medium, 500);
  color: var(--color-content-default-tertiary);
  background: var(--color-background-elevation-sunken);
  padding: 1px var(--spacing-150, 0.375rem);
  border-radius: var(--radius-100, 0.25rem);
  flex: none;
  line-height: 1.5;
}
.bcn-release-nav__date {
  color: var(--color-content-default-tertiary);
  font-size: 0.875rem;
  line-height: 1.35;
}
.bcn-release-stream {
  flex-direction: column;
  display: flex;
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
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
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
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-600`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--spacing-900`: 6rem _(primitive)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
