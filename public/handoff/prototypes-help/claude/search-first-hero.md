# Search-first hero

The front door to the knowledge base: the animated Aldo mark, the page title, a one-line lede, and a LARGE search field that is the page's primary action — plus a quiet "What's new in Beacon" doorway to the release notes. Search is the primary path into help; browsing is the fallback, which is why the field outweighs everything else on the surface.

## Key decisions
- The search control IS the esa-text-field lego at size="lg", scaled up by a SCOPED re-point of its public size tokens (--form-height-lg: 3.5rem, --form-font-size-lg, --form-padding-x-lg, --form-radius-lg) on the field's own class. This is the sanctioned component-token override — localized, nothing leaks globally.
- The lego's focus tokens default to Radix grass (an off-brand green ring); --form-border-color-focus and --focus-ring-color are re-pointed to --color-text-link, scoped to this one field.
- The leading magnifier is a decorative esa-icon overlay positioned in the gutter that the enlarged --form-padding-x-lg opens. The field still owns its own box — the icon is never inside it.
- The hero is deliberately COMPACT (no card, no surface of its own, modest padding) so the category grid sits near the fold.
- The "What's new" doorway is a quiet neutral link that only takes the house link color on hover — it is a doorway, not a second call to action.

## Gotchas
- No esa-* lego is a page hero assembly: esa-page-header is a title/lede/actions row with no mark, search, or results panel; esa-command-palette is a modal overlay, not an in-page search-first hero. Only the FIELD and the ICON are legos — the assembly is bcn-kb-hero.
- The Aldo mark is a custom SVG, not a Lucide glyph — esa-button / esa-icon-button accept only a registry icon NAME, so any Aldo affordance is bespoke by necessity.
- The field carries role="combobox" + aria-controls + aria-expanded pointing at the results listbox; aria-expanded must be kept in sync by the controller, not left static.

## Done when
- The mark, title, lede, search field, and "What's new" link render in one centered column; the field is visibly the largest control on the page and focuses with a house-colored ring, never a green one.

## Markup
```html
<section class="bcn-kb-hero" aria-label="Help &amp; Guidance">
  <div class="center bcn-kb-hero__col">
    <div class="stack bcn-kb-hero__intro">
      <span class="bcn-aldo-mark" data-size="md" data-animated="" aria-hidden="true">
        <span class="bcn-aldo-mark__glyph">
          <span class="esa-icon esa-icon--md" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path
                d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
              ></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </span>
        </span>
      </span>
      <h1 class="type-page-title bcn-kb-hero__title">Help &amp; Guidance</h1>
      <p class="type-body bcn-kb-hero__lede">
        Plain answers about how Beacon works — on every page, and all in one place.
      </p>
    </div>
    <div class="bcn-kb-hero__search-wrap">
      <div class="bcn-kb-hero__searchbar">
        <span class="bcn-kb-hero__search-icon" aria-hidden="true">
          <span class="esa-icon esa-icon--md" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </span>
        </span>
        <esa-text-field
          class="bcn-kb-hero__search"
          data-kb-search="true"
          size="lg"
          type="text"
          placeholder="Search help articles…"
          aria-label="Search help articles"
          role="combobox"
          aria-controls="bcn-kb-results"
          aria-expanded="false"
          aria-autocomplete="list"
        ></esa-text-field>
      </div>
      <div
        class="bcn-kb-hero__results"
        id="bcn-kb-results"
        data-kb-results=""
        role="listbox"
        aria-label="Search results"
        hidden=""
      >
        <a
          class="bcn-kb-hero__result"
          id="kb-result-project-vs-component-scope"
          role="option"
          aria-selected="false"
          href="#article-project-vs-component-scope"
          data-result=""
          data-title="Scope"
          data-summary="The setting that determines whether work is tracked once, or once per location."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title="">Scope</span>
            <span class="bcn-kb-hero__result-cat">General</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >The setting that determines whether work is tracked once, or once per
            location.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-tenant"
          role="option"
          aria-selected="false"
          href="#article-tenant"
          data-result=""
          data-title="Tenant"
          data-summary="The client organization a Beacon workspace, its data, and its configuration are scoped to."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title="">Tenant</span>
            <span class="bcn-kb-hero__result-cat">General</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >The client organization a Beacon workspace, its data, and its configuration
            are scoped to.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-work-area"
          role="option"
          aria-selected="false"
          href="#article-work-area"
          data-result=""
          data-title="Work Area"
          data-summary="The finest scope level — a subdivision of a component for field-level tracking."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title="">Work Area</span>
            <span class="bcn-kb-hero__result-cat">General</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >The finest scope level — a subdivision of a component for field-level
            tracking.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-five-minute-tour"
          role="option"
          aria-selected="false"
          href="#article-five-minute-tour"
          data-result=""
          data-title="A five-minute tour of Beacon"
          data-summary="The four zones of the app and how a compliance obligation flows through them."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >A five-minute tour of Beacon</span
            >
            <span class="bcn-kb-hero__result-cat">Getting Started</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >The four zones of the app and how a compliance obligation flows through
            them.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-global-search-tips"
          role="option"
          aria-selected="false"
          href="#article-global-search-tips"
          data-result=""
          data-title="Finding anything with search"
          data-summary="Press / anywhere to search commitments, requirements, actions, and documents."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Finding anything with search</span
            >
            <span class="bcn-kb-hero__result-cat">Getting Started</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Press / anywhere to search commitments, requirements, actions, and
            documents.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-actions-vs-implementations"
          role="option"
          aria-selected="false"
          href="#article-actions-vs-implementations"
          data-result=""
          data-title="Implementation"
          data-summary="A single execution of a published action — the record teams work day to day."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Implementation</span
            >
            <span class="bcn-kb-hero__result-cat">Tracking</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >A single execution of a published action — the record teams work day to
            day.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-what-is-a-component"
          role="option"
          aria-selected="false"
          href="#article-what-is-a-component"
          data-result=""
          data-title="Component"
          data-summary="A distinct place or package of work within a project, tracked independently."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title="">Component</span>
            <span class="bcn-kb-hero__result-cat">Tracking</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >A distinct place or package of work within a project, tracked
            independently.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-permit"
          role="option"
          aria-selected="false"
          href="#article-permit"
          data-result=""
          data-title="Permit"
          data-summary="An agency authorization the project must obtain, tracked through the acquisition pipeline."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title="">Permit</span>
            <span class="bcn-kb-hero__result-cat">Tracking</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >An agency authorization the project must obtain, tracked through the
            acquisition pipeline.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-reading-permit-tracking"
          role="option"
          aria-selected="false"
          href="#article-reading-permit-tracking"
          data-result=""
          data-title="Reading the Permit Tracking board"
          data-summary="Where each permit stands, what is blocking it, and what is due next."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Reading the Permit Tracking board</span
            >
            <span class="bcn-kb-hero__result-cat">Tracking</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Where each permit stands, what is blocking it, and what is due next.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-starring-components"
          role="option"
          aria-selected="false"
          href="#article-starring-components"
          data-result=""
          data-title="Starring components on your dashboard"
          data-summary="Pin the three-to-five components you actually work in."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Starring components on your dashboard</span
            >
            <span class="bcn-kb-hero__result-cat">Tracking</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Pin the three-to-five components you actually work in.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-reading-critical-now"
          role="option"
          aria-selected="false"
          href="#article-reading-critical-now"
          data-result=""
          data-title="How “Most critical right now” is chosen"
          data-summary="Why an item earns a spot at the top of the dashboard."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >How “Most critical right now” is chosen</span
            >
            <span class="bcn-kb-hero__result-cat">Tracking</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Why an item earns a spot at the top of the dashboard.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-what-is-a-dmr"
          role="option"
          aria-selected="false"
          href="#article-what-is-a-dmr"
          data-result=""
          data-title="Daily Monitoring Report"
          data-summary="The structured field record of one day on site, and a direct source of evidence."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Daily Monitoring Report</span
            >
            <span class="bcn-kb-hero__result-cat">Monitoring</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >The structured field record of one day on site, and a direct source of
            evidence.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-what-is-an-observation"
          role="option"
          aria-selected="false"
          href="#article-what-is-an-observation"
          data-result=""
          data-title="Observation"
          data-summary="One recorded field event — a species sighting, habitat condition, weather event, or BMP check."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Observation</span
            >
            <span class="bcn-kb-hero__result-cat">Monitoring</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >One recorded field event — a species sighting, habitat condition, weather
            event, or BMP check.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-survey"
          role="option"
          aria-selected="false"
          href="#article-survey"
          data-result=""
          data-title="Survey"
          data-summary="A field data record synced from a collection app, effective only after quality-control approval."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title="">Survey</span>
            <span class="bcn-kb-hero__result-cat">Monitoring</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >A field data record synced from a collection app, effective only after
            quality-control approval.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-site-clearance"
          role="option"
          aria-selected="false"
          href="#article-site-clearance"
          data-result=""
          data-title="Site Clearance"
          data-summary="The go/no-go determination of whether a site is clear for ground disturbance."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Site Clearance</span
            >
            <span class="bcn-kb-hero__result-cat">Monitoring</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >The go/no-go determination of whether a site is clear for ground
            disturbance.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-monitoring-portal"
          role="option"
          aria-selected="false"
          href="#article-monitoring-portal"
          data-result=""
          data-title="Monitoring Portal"
          data-summary="The section that reports commitment compliance from field observations."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Monitoring Portal</span
            >
            <span class="bcn-kb-hero__result-cat">Monitoring</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >The section that reports commitment compliance from field observations.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-qc-field-surveys"
          role="option"
          aria-selected="false"
          href="#article-qc-field-surveys"
          data-result=""
          data-title="Reviewing field surveys before they count"
          data-summary="Surveys sync from field apps, but only QC-approved records drive compliance."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Reviewing field surveys before they count</span
            >
            <span class="bcn-kb-hero__result-cat">Monitoring</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Surveys sync from field apps, but only QC-approved records drive
            compliance.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-site-clearance-go-no-go"
          role="option"
          aria-selected="false"
          href="#article-site-clearance-go-no-go"
          data-result=""
          data-title="Using Site Clearance go/no-go"
          data-summary="Check whether a work site is clear for ground disturbance — and what is blocking it."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Using Site Clearance go/no-go</span
            >
            <span class="bcn-kb-hero__result-cat">Monitoring</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Check whether a work site is clear for ground disturbance — and what is
            blocking it.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-what-is-evidence"
          role="option"
          aria-selected="false"
          href="#article-what-is-evidence"
          data-result=""
          data-title="Evidence of Compliance"
          data-summary="The documented proof that an obligation was met — the artifact an auditor reviews."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Evidence of Compliance</span
            >
            <span class="bcn-kb-hero__result-cat">Reporting</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >The documented proof that an obligation was met — the artifact an auditor
            reviews.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-assembling-compliance-report"
          role="option"
          aria-selected="false"
          href="#article-assembling-compliance-report"
          data-result=""
          data-title="Assembling a compliance report"
          data-summary="Compile evidence of compliance into a report package for an agency."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Assembling a compliance report</span
            >
            <span class="bcn-kb-hero__result-cat">Reporting</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Compile evidence of compliance into a report package for an agency.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-what-is-a-source"
          role="option"
          aria-selected="false"
          href="#article-what-is-a-source"
          data-result=""
          data-title="Source Document"
          data-summary="The regulatory document — permit, EIR, or agreement — that obligations are extracted from."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Source Document</span
            >
            <span class="bcn-kb-hero__result-cat">Data Catalog</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >The regulatory document — permit, EIR, or agreement — that obligations are
            extracted from.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-what-is-a-commitment"
          role="option"
          aria-selected="false"
          href="#article-what-is-a-commitment"
          data-result=""
          data-title="Commitment"
          data-summary="One discrete obligation, recorded in its source document’s original language."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title="">Commitment</span>
            <span class="bcn-kb-hero__result-cat">Data Catalog</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >One discrete obligation, recorded in its source document’s original
            language.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-what-is-a-requirement"
          role="option"
          aria-selected="false"
          href="#article-what-is-a-requirement"
          data-result=""
          data-title="Requirement"
          data-summary="A specific, actionable sub-obligation broken out of a commitment."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Requirement</span
            >
            <span class="bcn-kb-hero__result-cat">Data Catalog</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >A specific, actionable sub-obligation broken out of a commitment.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-what-is-an-action"
          role="option"
          aria-selected="false"
          href="#article-what-is-an-action"
          data-result=""
          data-title="Action"
          data-summary="One trackable deliverable consolidating requirements that describe the same work."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title="">Action</span>
            <span class="bcn-kb-hero__result-cat">Data Catalog</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >One trackable deliverable consolidating requirements that describe the same
            work.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-tracing-lineage"
          role="option"
          aria-selected="false"
          href="#article-tracing-lineage"
          data-result=""
          data-title="Tracing a requirement back to its source"
          data-summary="Follow the lineage from any requirement up to the exact document language."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Tracing a requirement back to its source</span
            >
            <span class="bcn-kb-hero__result-cat">Data Catalog</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Follow the lineage from any requirement up to the exact document
            language.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-feature-flag"
          role="option"
          aria-selected="false"
          href="#article-feature-flag"
          data-result=""
          data-title="Feature Flag"
          data-summary="A tenant-level switch that enables or disables a Beacon capability."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Feature Flag</span
            >
            <span class="bcn-kb-hero__result-cat">Settings &amp; Configuration</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >A tenant-level switch that enables or disables a Beacon capability.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-managing-tenant-settings"
          role="option"
          aria-selected="false"
          href="#article-managing-tenant-settings"
          data-result=""
          data-title="Managing tenant settings"
          data-summary="Configure the display labels, defaults, and enabled features that apply across a tenant."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Managing tenant settings</span
            >
            <span class="bcn-kb-hero__result-cat">Settings &amp; Configuration</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Configure the display labels, defaults, and enabled features that apply
            across a tenant.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-managing-users-roles"
          role="option"
          aria-selected="false"
          href="#article-managing-users-roles"
          data-result=""
          data-title="Managing users and roles"
          data-summary="Add users to a tenant and assign the roles that govern their access."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Managing users and roles</span
            >
            <span class="bcn-kb-hero__result-cat">Settings &amp; Configuration</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Add users to a tenant and assign the roles that govern their access.</span
          > </a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-configuring-notifications"
          role="option"
          aria-selected="false"
          href="#article-configuring-notifications"
          data-result=""
          data-title="Configuring notifications"
          data-summary="Set which compliance events generate notifications, and how each user receives them."
          hidden=""
        >
          <span class="bcn-kb-hero__result-top">
            <span class="bcn-kb-hero__result-title" data-result-title=""
              >Configuring notifications</span
            >
            <span class="bcn-kb-hero__result-cat">Settings &amp; Configuration</span>
          </span>
          <span class="bcn-kb-hero__result-summary"
            >Set which compliance events generate notifications, and how each user
            receives them.</span
          >
        </a>
        <p class="bcn-kb-hero__no-results" data-kb-no-results="" hidden="">
          No articles match “<span data-kb-query=""></span>”.
        </p>
      </div>
    </div>
    <a class="bcn-kb-hero__whatsnew" href="/beacon-design/prototypes/release-notes">
      What's new in Beacon<span class="bcn-kb-hero__whatsnew-arrow" aria-hidden="true"
        >→</span
      >
    </a>
  </div>
</section>
```

## Styles
```css
.stack {
  --gap: var(--spacing-400, 1rem);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
.center {
  --center-max: 72rem;
  max-inline-size: var(--center-max);
  margin-inline: auto;
}
.type-page-title {
  font-family: var(--font-display, var(--font-sans));
  font-size: var(--type-size-600);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
.type-body {
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
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
.bcn-aldo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-text-inverse);
  line-height: 0;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-animated] {
  animation: bcn-aldo-pulse 2s ease-in-out infinite;
}
.bcn-aldo-mark__glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: bcn-aldo-spin 8s linear infinite;
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
  --icon-size-xs: 12px;
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
.bcn-kb-hero {
  padding-block: var(--spacing-500) var(--spacing-400);
}
.bcn-kb-hero__col {
  --center-max: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-400);
  text-align: center;
}
.bcn-kb-hero__intro {
  --gap: var(--spacing-200);
  align-items: center;
}
.bcn-kb-hero__title {
  color: var(--color-text-primary);
}
.bcn-kb-hero__lede {
  max-inline-size: 34rem;
  color: var(--color-text-secondary);
}
.bcn-kb-hero__search-wrap {
  position: relative;
  inline-size: 100%;
  max-inline-size: 40rem;
}
.bcn-kb-hero__searchbar {
  position: relative;
  inline-size: 100%;
}
.bcn-kb-hero__search-icon {
  position: absolute;
  inset-inline-start: var(--spacing-400);
  inset-block-start: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  color: var(--color-text-tertiary);
  pointer-events: none;
  z-index: 1;
  --icon-size-md: 22px;
}
.bcn-kb-hero__search {
  --form-height-lg: 3.5rem;
  --form-font-size-lg: 1.1875rem;
  --form-padding-x-lg: 3.25rem;
  --form-radius-lg: var(--radius-300);
  --form-border-color-focus: var(--color-text-link);
  --focus-ring-color: var(--color-text-link);
  inline-size: 100%;
  text-align: start;
}
.bcn-kb-hero__results {
  position: absolute;
  inset-inline: 0;
  inset-block-start: calc(100% + var(--spacing-150));
  z-index: 30;
  max-block-size: min(60vh, 30rem);
  overflow-y: auto;
  padding: var(--spacing-100);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  box-shadow: var(--shadow-200, 0 8px 28px rgb(0 0 0 / 0.12));
  text-align: start;
}
.bcn-kb-hero__results[hidden] {
  display: none;
}
.bcn-kb-hero__whatsnew {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  font-size: 0.9375rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.15s ease;
}
.bcn-kb-hero__whatsnew-arrow {
  transition: transform 0.15s ease;
}
```

## Tokens
- `--bcn-aldo`: #08908b _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-link`: #005862 _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-display`: "DM Sans", sans-serif _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--gap`: 3rem _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--letter-spacing-normal`: .01em _(primitive)_
- `--letter-spacing-tight`: -.01em _(primitive)_
- `--line-height-relaxed`: 1.8 _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-200`: 0 4px 20px -4px rgba(0, 0, 0, .06) _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-600`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(primitive)_
