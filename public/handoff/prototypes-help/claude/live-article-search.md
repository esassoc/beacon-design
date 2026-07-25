# Live article search

The results dropdown anchored under the search field: matching articles as two-line rows (title + category on one line, a terse summary beneath), with the matched substring highlighted, keyboard navigation, and a no-results message that echoes the query. Choosing a row routes into the reading pane via the #article-<id> hash.

## Key decisions
- PROGRESSIVE, NOT CLIENT-RENDERED: every article is server-rendered as a hidden row up front. The controller only shows/hides rows and wraps matches in <mark> — the article corpus never enters the JS bundle.
- Keyboard: ArrowUp/ArrowDown move the active row, Enter opens it, Esc closes the dropdown. The active row is mirrored into aria-activedescendant against each row's id.
- The active/hover row gets a quiet neutral sunken wash (--color-surface-sunken) and shifts the title to the link color — never a tint, never a colored left border.
- Match highlighting is a neutral translucent wash (color-mix of --color-text-primary at 12%), which reads on both white and the sunken active row.
- The category label and the summary are genuine meta, floored at 13px; the row title sits at 15px — a deliberate dense-list size with no type role that fits.

## Gotchas
- The dropdown is absolutely positioned and overlays the content below it. It must own a z-index above the category grid, or rows render behind the cards.
- The <mark> wrappers are JS-injected, so their rule cannot carry Astro's scope hash — it is authored :global. In Angular this is component CSS, but keep the same containment discipline.
- The query is echoed into the no-results message — escape it. The <mark> wrappers are the only markup that may be injected around user input.
- The controller that drives this lives in kb-browser.ts and is mounted by <BcnKbBrowser>, NOT by the hero. The hero only advertises the [data-kb-search] hook and listens for the native `input` event, which is composed and retargets to the esa-text-field host — read e.target.value off the host, not off the shadow input.

## Done when
- Typing reveals only matching rows with the matched substring highlighted; Arrow keys move the active row and Enter opens it in the reading pane; a query with no match shows the quoted no-results line; clearing the field hides the dropdown entirely.

## Markup
```html
<div
  class="bcn-kb-hero__results"
  id="bcn-kb-results"
  data-kb-results=""
  role="listbox"
  aria-label="Search results"
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
      >The client organization a Beacon workspace, its data, and its configuration are
      scoped to.</span
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
      >The four zones of the app and how a compliance obligation flows through them.</span
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
      >Press / anywhere to search commitments, requirements, actions, and documents.</span
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
      <span class="bcn-kb-hero__result-title" data-result-title="">Implementation</span>
      <span class="bcn-kb-hero__result-cat">Tracking</span>
    </span>
    <span class="bcn-kb-hero__result-summary"
      >A single execution of a published action — the record teams work day to day.</span
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
      >A distinct place or package of work within a project, tracked independently.</span
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
      >An agency authorization the project must obtain, tracked through the acquisition
      pipeline.</span
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
    class="bcn-kb-hero__result is-active"
    id="kb-result-what-is-a-dmr"
    role="option"
    aria-selected="true"
    href="#article-what-is-a-dmr"
    data-result=""
    data-title="Daily Monitoring Report"
    data-summary="The structured field record of one day on site, and a direct source of evidence."
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
      <span class="bcn-kb-hero__result-title" data-result-title="">Observation</span>
      <span class="bcn-kb-hero__result-cat">Monitoring</span>
    </span>
    <span class="bcn-kb-hero__result-summary"
      >One recorded field event — a species sighting, habitat condition, weather event, or
      BMP check.</span
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
      <span class="bcn-kb-hero__result-title" data-result-title="">Site Clearance</span>
      <span class="bcn-kb-hero__result-cat">Monitoring</span>
    </span>
    <span class="bcn-kb-hero__result-summary"
      >The go/no-go determination of whether a site is clear for ground disturbance.</span
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
      >Surveys sync from field apps, but only QC-approved records drive compliance.</span
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
      >Check whether a work site is clear for ground disturbance — and what is blocking
      it.</span
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
  >
    <span class="bcn-kb-hero__result-top">
      <span class="bcn-kb-hero__result-title" data-result-title=""
        ><mark>Evidence</mark> of Compliance</span
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
      <span class="bcn-kb-hero__result-title" data-result-title="">Source Document</span>
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
      >One discrete obligation, recorded in its source document’s original language.</span
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
      <span class="bcn-kb-hero__result-title" data-result-title="">Requirement</span>
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
      >Follow the lineage from any requirement up to the exact document language.</span
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
      <span class="bcn-kb-hero__result-title" data-result-title="">Feature Flag</span>
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
      >Configure the display labels, defaults, and enabled features that apply across a
      tenant.</span
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
      >Set which compliance events generate notifications, and how each user receives
      them.</span
    >
  </a>
  <p class="bcn-kb-hero__no-results" data-kb-no-results="" hidden="">
    No articles match “<span data-kb-query=""></span>”.
  </p>
</div>
```

## Styles
```css
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
.bcn-kb-hero__result {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  text-decoration: none;
  color: inherit;
}
.bcn-kb-hero__result[hidden] {
  display: none;
}
.bcn-kb-hero__result:hover,
.bcn-kb-hero__result.is-active {
  background: var(--color-surface-sunken);
}
.bcn-kb-hero__result-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
}
.bcn-kb-hero__result-title {
  font-size: 0.9375rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  line-height: 1.35;
}
.bcn-kb-hero__result.is-active .bcn-kb-hero__result-title,
.bcn-kb-hero__result:hover .bcn-kb-hero__result-title {
  color: var(--color-text-link);
}
.bcn-kb-hero__result-cat {
  flex: none;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.bcn-kb-hero__result-summary {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
}
.bcn-kb-hero__result-title mark {
  background: color-mix(in srgb, var(--color-text-primary) 12%, transparent);
  color: inherit;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-kb-hero__no-results {
  margin: 0;
  padding: var(--spacing-300);
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-link`: #005862 _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-medium`: 500 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--shadow-200`: 0 4px 20px -4px rgba(0, 0, 0, .06) _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
