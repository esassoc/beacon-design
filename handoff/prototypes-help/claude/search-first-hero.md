# Search-first hero

The front door to the knowledge base: the animated Aldo mark, the page title, a one-line lede, and a LARGE search field that is the page's primary action — plus a quiet "What's new in Beacon" doorway to the release notes. Search is the primary path into help; browsing is the fallback, which is why the field outweighs everything else on the surface.

## Key decisions
- The search control IS the esa-text-field lego at size="lg", scaled up on the field's own class: font-size cascades into the shadow input (font: inherit), and padding/radius ride the lego's private --_field-* hooks — the public --form-* size surface was removed upstream (2026-08) with no successor, so this is a documented reach-in pending a leading-icon slot on the hub. Localized; nothing leaks globally.
- The lego's focus tokens default to Radix grass (an off-brand green ring); --form-border-color-focus and --focus-ring-color are re-pointed to --color-content-link, scoped to this one field.
- The leading magnifier is a decorative esa-icon overlay positioned in the gutter that the enlarged --_field-padding-x opens. The field still owns its own box — the icon is never inside it.
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
      <span class="bcn-aldo-mark" data-size="md" data-animated="" aria-hidden="true"
        ><span class="bcn-aldo-mark__glyph"
          ><span class="esa-icon esa-icon--md" aria-hidden="true"
            ><svg
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
              <circle cx="12" cy="12" r="10"></circle></svg></span></span
      ></span>
      <h1 class="typography-heading-lg bcn-kb-hero__title">Help &amp; Guidance</h1>
      <p class="typography-body-md bcn-kb-hero__lede">
        Plain answers about how Beacon works — on every page, and all in one place.
      </p>
    </div>
    <div class="bcn-kb-hero__search-wrap">
      <div class="bcn-kb-hero__searchbar">
        <span class="bcn-kb-hero__search-icon" aria-hidden="true"
          ><span class="esa-icon esa-icon--md" aria-hidden="true"
            ><svg
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
              <path d="m21 21-4.3-4.3"></path></svg></span></span
        ><esa-text-field
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Scope</span
            ><span class="bcn-kb-hero__result-cat">General</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The setting that determines whether work is tracked once, or once per
            location.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Tenant</span
            ><span class="bcn-kb-hero__result-cat">General</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The client organization a Beacon workspace, its data, and its configuration
            are scoped to.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Work Area</span
            ><span class="bcn-kb-hero__result-cat">General</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The finest scope level — a subdivision of a component for field-level
            tracking.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >A five-minute tour of Beacon</span
            ><span class="bcn-kb-hero__result-cat">Getting Started</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The four zones of the app and how a compliance obligation flows through
            them.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Finding anything with search</span
            ><span class="bcn-kb-hero__result-cat">Getting Started</span></span
          ><span class="bcn-kb-hero__result-summary"
            >Press / anywhere to search commitments, requirements, actions, and
            documents.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Implementation</span
            ><span class="bcn-kb-hero__result-cat">Tracking</span></span
          ><span class="bcn-kb-hero__result-summary"
            >A single execution of a published action — the record teams work day to
            day.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Component</span
            ><span class="bcn-kb-hero__result-cat">Tracking</span></span
          ><span class="bcn-kb-hero__result-summary"
            >A distinct place or package of work within a project, tracked
            independently.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Permit</span
            ><span class="bcn-kb-hero__result-cat">Tracking</span></span
          ><span class="bcn-kb-hero__result-summary"
            >An agency authorization the project must obtain, tracked through the
            acquisition pipeline.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Reading the Permit Tracking board</span
            ><span class="bcn-kb-hero__result-cat">Tracking</span></span
          ><span class="bcn-kb-hero__result-summary"
            >Where each permit stands, what is blocking it, and what is due next.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Starring components on your dashboard</span
            ><span class="bcn-kb-hero__result-cat">Tracking</span></span
          ><span class="bcn-kb-hero__result-summary"
            >Pin the three-to-five components you actually work in.</span
          ></a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-reading-critical-now"
          role="option"
          aria-selected="false"
          href="#article-reading-critical-now"
          data-result=""
          data-title="How the dashboard decides what needs attention"
          data-summary="Urgency comes from action due dates, shown in the zone that owns the work."
          hidden=""
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >How the dashboard decides what needs attention</span
            ><span class="bcn-kb-hero__result-cat">Tracking</span></span
          ><span class="bcn-kb-hero__result-summary"
            >Urgency comes from action due dates, shown in the zone that owns the
            work.</span
          ></a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-reading-project-timeline"
          role="option"
          aria-selected="false"
          href="#article-reading-project-timeline"
          data-result=""
          data-title="Reading the project timeline"
          data-summary="The next 30, 60, or 90 days of due dates, seasons, and milestones."
          hidden=""
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Reading the project timeline</span
            ><span class="bcn-kb-hero__result-cat">Tracking</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The next 30, 60, or 90 days of due dates, seasons, and milestones.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Daily Monitoring Report</span
            ><span class="bcn-kb-hero__result-cat">Monitoring</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The structured field record of one day on site, and a direct source of
            evidence.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Observation</span
            ><span class="bcn-kb-hero__result-cat">Monitoring</span></span
          ><span class="bcn-kb-hero__result-summary"
            >One recorded field event — a species sighting, habitat condition, weather
            event, or BMP check.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Survey</span
            ><span class="bcn-kb-hero__result-cat">Monitoring</span></span
          ><span class="bcn-kb-hero__result-summary"
            >A field data record synced from a collection app, effective only after
            quality-control approval.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Site Clearance</span
            ><span class="bcn-kb-hero__result-cat">Monitoring</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The go/no-go determination of whether a site is clear for ground
            disturbance.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Monitoring Portal</span
            ><span class="bcn-kb-hero__result-cat">Monitoring</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The section that reports commitment compliance from field observations.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Reviewing field surveys before they count</span
            ><span class="bcn-kb-hero__result-cat">Monitoring</span></span
          ><span class="bcn-kb-hero__result-summary"
            >Surveys sync from field apps, but only QC-approved records drive
            compliance.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Using Site Clearance go/no-go</span
            ><span class="bcn-kb-hero__result-cat">Monitoring</span></span
          ><span class="bcn-kb-hero__result-summary"
            >Check whether a work site is clear for ground disturbance — and what is
            blocking it.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Evidence of Compliance</span
            ><span class="bcn-kb-hero__result-cat">Reporting</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The documented proof that an obligation was met — the artifact an auditor
            reviews.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Assembling a compliance report</span
            ><span class="bcn-kb-hero__result-cat">Reporting</span></span
          ><span class="bcn-kb-hero__result-summary"
            >Compile evidence of compliance into a report package for an agency.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Source Document</span
            ><span class="bcn-kb-hero__result-cat">Data Catalog</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The regulatory document — permit, EIR, or agreement — that obligations are
            extracted from.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Commitment</span
            ><span class="bcn-kb-hero__result-cat">Data Catalog</span></span
          ><span class="bcn-kb-hero__result-summary"
            >One discrete obligation, recorded in its source document’s original
            language.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Requirement</span
            ><span class="bcn-kb-hero__result-cat">Data Catalog</span></span
          ><span class="bcn-kb-hero__result-summary"
            >A specific, actionable sub-obligation broken out of a commitment.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Action</span
            ><span class="bcn-kb-hero__result-cat">Data Catalog</span></span
          ><span class="bcn-kb-hero__result-summary"
            >One trackable deliverable consolidating requirements that describe the same
            work.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Tracing a requirement back to its source</span
            ><span class="bcn-kb-hero__result-cat">Data Catalog</span></span
          ><span class="bcn-kb-hero__result-summary"
            >Follow the lineage from any requirement up to the exact document
            language.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Feature Flag</span
            ><span class="bcn-kb-hero__result-cat"
              >Settings &amp; Configuration</span
            ></span
          ><span class="bcn-kb-hero__result-summary"
            >A tenant-level switch that enables or disables a Beacon capability.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Managing tenant settings</span
            ><span class="bcn-kb-hero__result-cat"
              >Settings &amp; Configuration</span
            ></span
          ><span class="bcn-kb-hero__result-summary"
            >Configure the display labels, defaults, and enabled features that apply
            across a tenant.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Managing users and roles</span
            ><span class="bcn-kb-hero__result-cat"
              >Settings &amp; Configuration</span
            ></span
          ><span class="bcn-kb-hero__result-summary"
            >Add users to a tenant and assign the roles that govern their access.</span
          ></a
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
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title=""
              >Configuring notifications</span
            ><span class="bcn-kb-hero__result-cat"
              >Settings &amp; Configuration</span
            ></span
          ><span class="bcn-kb-hero__result-summary"
            >Set which compliance events generate notifications, and how each user
            receives them.</span
          ></a
        >
        <p class="bcn-kb-hero__no-results" data-kb-no-results="" hidden="">
          No articles match “<span data-kb-query=""></span>”.
        </p>
      </div>
    </div>
    <a class="bcn-kb-hero__whatsnew" href="/beacon-design/prototypes/release-notes"
      >What's new in Beacon<span class="bcn-kb-hero__whatsnew-arrow" aria-hidden="true"
        >→</span
      ></a
    >
  </div>
</section>
```

## Styles
```css
.typography-heading-lg {
  font-family: var(--typography-heading-lg-font-family);
  font-size: var(--typography-heading-lg-font-size);
  font-weight: var(--typography-heading-lg-font-weight);
  line-height: var(--typography-heading-lg-line-height);
  letter-spacing: var(--typography-heading-lg-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  --icon-size-xs: 12px;
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 8s linear infinite bcn-aldo-spin;
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
.bcn-kb-hero {
  padding-block: var(--spacing-500) var(--spacing-400);
}
.bcn-kb-hero__col {
  --center-max: 44rem;
  align-items: center;
  gap: var(--spacing-400);
  text-align: center;
  flex-direction: column;
  display: flex;
}
.bcn-kb-hero__intro {
  --gap: var(--spacing-200);
  align-items: center;
}
.bcn-kb-hero__title {
  color: var(--color-content-default);
}
.bcn-kb-hero__lede {
  max-inline-size: 34rem;
  color: var(--color-content-default-secondary);
}
.bcn-kb-hero__search-wrap {
  inline-size: 100%;
  max-inline-size: 40rem;
  position: relative;
}
.bcn-kb-hero__searchbar {
  inline-size: 100%;
  position: relative;
}
.bcn-kb-hero__search {
  --_field-padding-y: 0.875rem;
  --_field-padding-x: 3.25rem;
  --_field-radius: var(--radius-300);
  --form-border-color-focus: var(--color-content-link);
  --focus-ring-color: var(--color-content-link);
  text-align: start;
  inline-size: 100%;
  font-size: 1.1875rem;
}
.bcn-kb-hero__search-icon {
  color: var(--color-content-default-tertiary);
  pointer-events: none;
  z-index: 1;
  --icon-size-md: 22px;
  display: inline-flex;
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: var(--spacing-400);
  transform: translateY(-50%);
}
.bcn-kb-hero__results {
  z-index: 30;
  max-block-size: min(60vh, 30rem);
  padding: var(--spacing-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  box-shadow: var(--elevation-3, 0 8px 28px #0000001f);
  text-align: start;
  position: absolute;
  inset-block-start: calc(100% + var(--spacing-150));
  inset-inline: 0;
  overflow-y: auto;
}
.bcn-kb-hero__results[hidden] {
  display: none;
}
.bcn-kb-hero__result {
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  color: inherit;
  flex-direction: column;
  gap: 2px;
  text-decoration: none;
  display: flex;
}
.bcn-kb-hero__result[hidden] {
  display: none;
}
.bcn-kb-hero__result:hover,
.bcn-kb-hero__result.is-active {
  background: var(--color-background-elevation-sunken);
}
.bcn-kb-hero__result-top {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-kb-hero__result-title {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  line-height: 1.35;
}
.bcn-kb-hero__result.is-active .bcn-kb-hero__result-title,
.bcn-kb-hero__result:hover .bcn-kb-hero__result-title {
  color: var(--color-content-link);
}
.bcn-kb-hero__result-title mark {
  background: color-mix(in srgb, var(--color-content-default) 12%, transparent);
  color: inherit;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-kb-hero__result-cat {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex: none;
  font-size: 0.8125rem;
}
.bcn-kb-hero__result-summary {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  line-height: 1.4;
}
.bcn-kb-hero__no-results {
  padding: var(--spacing-300);
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
}
.bcn-kb-hero__whatsnew {
  align-items: center;
  gap: var(--spacing-100);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  text-decoration: none;
  transition: color 0.15s;
  display: inline-flex;
}
.bcn-kb-hero__whatsnew:hover {
  color: var(--color-content-link-hover);
}
.bcn-kb-hero__whatsnew:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-kb-hero__whatsnew-arrow {
  transition: transform 0.15s;
}
.bcn-kb-hero__whatsnew:hover .bcn-kb-hero__whatsnew-arrow {
  transform: translate(2px);
}
.typography-heading-lg {
  font-family: var(--typography-heading-lg-font-family);
  font-size: var(--typography-heading-lg-font-size);
  font-weight: var(--typography-heading-lg-font-weight);
  line-height: var(--typography-heading-lg-line-height);
  letter-spacing: var(--typography-heading-lg-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.center {
  --center-max: 72rem;
  max-inline-size: var(--center-max);
  margin-inline: auto;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
```

## Tokens
- `--bcn-aldo`: #08908b _(component)_
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
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--elevation-3`: 0 4px 20px -4px #0000000f _(semantic)_
- `--gap`: 3rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-heading-lg-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-heading-lg-font-size`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(semantic)_
- `--typography-heading-lg-font-weight`: 550 _(semantic)_
- `--typography-heading-lg-letter-spacing`: -.01em _(semantic)_
- `--typography-heading-lg-line-height`: 1.3 _(semantic)_
