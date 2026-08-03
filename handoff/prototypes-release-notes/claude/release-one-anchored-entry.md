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
      <span class="bcn-release__latest">Latest</span>
      <time class="bcn-release__date" datetime="2026-06-02">June 2, 2026</time>
    </p>
    <h2 class="bcn-release__version" id="v1-33-0-heading">1.33.0</h2>
  </header>
  <ul class="bcn-release__headlines">
    <li class="bcn-release__headline">
      <h3 class="bcn-release__headline-title">
        <a class="bcn-release__headline-link" href="#v1-33-0-commitment-lists">
          Commitment Lists
        </a>
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
        <a class="bcn-release__headline-link" href="#v1-33-0-eoc-single-grid">
          Evidence of Compliance is consolidated to one grid
        </a>
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
        <a class="bcn-release__headline-link" href="#v1-33-0-commitment-compliance">
          Monitoring Portal: Commitment Compliance
        </a>
      </h3>
      <p class="bcn-release__headline-text">
        A new dashboard section surfaces which commitments are out of compliance and the
        observations driving it — Nesting Bird and Biological Resource observations are
        now bridged to commitments by species.
      </p>
    </li>
    <li class="bcn-release__headline">
      <h3 class="bcn-release__headline-title">
        <a class="bcn-release__headline-link" href="#v1-33-0-legacy-shell-retired">
          The legacy app shell is retired
        </a>
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
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="M12 8h.01"></path>
                </svg>
              </span>
            </span>
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
.bcn-release-nav__link.is-active .bcn-release-nav__version {
  color: var(--color-text-primary);
  font-weight: 600;
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
.bcn-release-stream {
  display: flex;
  flex-direction: column;
}
.bcn-release {
  max-inline-size: 46rem;
  margin-inline: auto;
  inline-size: 100%;
  scroll-margin-top: var(--spacing-500);
  padding-block: var(--spacing-800);
}
.bcn-release:first-child {
  padding-block-start: var(--spacing-500);
}
.bcn-release__header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
  margin-block-end: var(--spacing-600);
}
.bcn-release__meta {
  margin: 0;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-text-tertiary);
}
.bcn-release__latest {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.bcn-release__latest:after {
  content: "·";
  margin-inline: var(--spacing-200);
  color: var(--color-text-muted);
}
.bcn-release__version {
  margin: 0;
  font-family: var(--font-decorative);
  font-size: var(--type-size-600);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
}
.bcn-release__headlines {
  list-style: none;
  margin: 0 0 var(--spacing-700);
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-600);
}
.bcn-release__headline {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-release__headline-title {
  margin: 0;
  font-family: var(--font-decorative);
  font-size: clamp(1.1875rem, 1.05rem + 0.7vw, 1.3125rem);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.005em;
  color: var(--color-text-primary);
}
.bcn-release__headline-link {
  color: inherit;
  text-decoration: none;
}
.bcn-release__headline-text {
  margin: 0;
  max-inline-size: 42rem;
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
}
.bcn-release strong {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-release code {
  font-family: var(--font-mono);
  font-size: 0.875em;
  padding: 1px 5px;
  border-radius: var(--radius-100);
  background: var(--color-surface-sunken);
  color: var(--color-text-primary);
}
.bcn-release__group-title {
  margin: 0 0 var(--spacing-400);
  padding-block-end: var(--spacing-200);
  border-bottom: 1px solid var(--color-border-light);
  font-size: 1.0625rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
}
.bcn-release__entries {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-release__entry {
  scroll-margin-top: var(--spacing-500);
}
.bcn-release__entry-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--spacing-150) var(--spacing-300);
  margin-block-end: var(--spacing-300);
  max-inline-size: 42rem;
}
.bcn-release__entry-title {
  margin: 0;
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  color: var(--color-text-primary);
}
.bcn-release__blocks {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  max-inline-size: 42rem;
}
.bcn-release__callout {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-200);
  background: var(--color-surface-sunken);
}
.bcn-release__callout-icon {
  display: inline-flex;
  margin-block-start: 2px;
  color: var(--color-text-secondary);
}
.bcn-release__callout-text {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
}
.bcn-release__p {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
}
.bcn-release__group + .bcn-release__group {
  margin-block-start: var(--spacing-700);
}
.bcn-release__applies {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.bcn-release__flag {
  display: inline-flex;
  align-items: baseline;
  gap: var(--spacing-100);
  padding: 2px var(--spacing-200);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  background: var(--color-surface);
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.bcn-release__flag code {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}
.bcn-release__bullets {
  margin: 0;
  padding-inline-start: var(--spacing-500);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-release__bullet {
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
}
.bcn-release__bullet::marker {
  color: var(--color-text-tertiary);
}
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
.bcn-release + .bcn-release {
  border-top: 1px solid var(--color-border-light);
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
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
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-600`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(primitive)_
