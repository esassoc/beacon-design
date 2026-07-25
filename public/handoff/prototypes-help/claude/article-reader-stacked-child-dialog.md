# Article reader (stacked child dialog)

A full article read WITHOUT leaving the conversation: a SECOND esa-side-dialog stacked above the drawer. A row in the intro — or a link in one of Aldo's replies — opens the article here; the parent drawer nudges back a step so the two read as a card stack, and Back returns to the conversation exactly where it was.

## Key decisions
- TWO STACKED DIALOGS, both the esa-side-dialog lego: the drawer is the parent and the reader is the child, layered above it. Reusing the lego twice beats inventing a second panel primitive.
- The parent steps back by re-pointing its --side-dialog-inset at runtime to 30px — a property the lego exposes and transitions, so the stack effect costs no bespoke animation.
- Every article BODY is pre-rendered once into this reader, hidden, and toggled one at a time by id — the same pre-render that feeds the chat corpus, so the content exists exactly once.
- Both a row and a reply link carry data-article-id, so one delegated handler on the drawer root opens the reader from either source.
- Bodies render through BcnHelpArticle — the same renderer the knowledge-base reading pane uses, so an article reads identically in the drawer and on the help page.

## Gotchas
- The inset re-point is unitless-hostile — "30" instead of "30px" silently breaks the lego's width calc.
- Pool rows are hidden, so only the rows the controller PLACED into the intro sections and the links inside replies are clickable; a delegated handler that ignores visibility would open articles from the hidden pool.
- Closing the child must restore the parent's inset, or the drawer stays nudged back after the reader closes.
- Both dialogs must layer above the app topbar (z-index 1100) — the lego renders as a fixed overlay, so the child needs to sit above the parent explicitly.

## Done when
- Clicking a row or a reply link slides the article in over the drawer and steps the drawer back; Back closes the child, restores the drawer inset, and leaves the conversation scrolled where it was; the article body matches the one rendered on the help page.

## Markup
```html
<esa-side-dialog
  class="bcn-gd-article"
  data-gd-article="true"
  position="right"
  heading="Guidance article"
  size="md"
  open=""
>
  <div slot="header" class="bcn-gd-article__head">
    <button type="button" class="bcn-gd-article__back" data-gd-article-back="">
      <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
      </span>
      All guidance
    </button>
    <span class="bcn-gd-article__titlerow">
      <span class="bcn-gd-article__title" data-gd-article-title=""
        >A five-minute tour of Beacon</span
      >
      <span class="bcn-gd-article__kind" data-gd-article-kind="" data-kind="howto"
        >How-to</span
      >
    </span>
  </div>
  <div class="bcn-gd-article__body">
    <div
      class="bcn-gd-article__panel"
      data-article-body="project-vs-component-scope"
      data-kind="glossary"
      data-title="Scope"
      hidden=""
    >
      <article id="article-project-vs-component-scope" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Scope determines how an action is distributed. A project-scoped action is
            performed once, centrally — for example, submitting the project-wide
            stormwater plan. A component-scoped action is performed independently at every
            applicable component — for example, installing exclusion fencing at each of 20
            construction areas.
          </p>
          <figure class="bcn-help-article__figure">
            <div class="bcn-help-article__figure-frame">
              <span class="bcn-help-article__figure-icon"
                ><span class="esa-icon esa-icon--lg" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                </span>
              </span>
              <span class="bcn-help-article__figure-label">The scope multiplier</span>
            </div>
            <figcaption class="bcn-help-article__caption type-caption">
              One component-scoped action across 20 components produces 20 independently
              tracked implementations.
            </figcaption>
          </figure>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text type-body">
                Each implementation is tracked separately, with its own assignee,
                timeline, and evidence.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="tenant"
      data-kind="glossary"
      data-title="Tenant"
      hidden=""
    >
      <article id="article-tenant" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Tenant is the organization a Beacon workspace belongs to. Beacon is
            multi-tenant: each tenant’s projects, documents, users, and configuration are
            isolated from every other tenant’s, and a user operates within a single tenant
            at a time.
          </p>
          <p class="bcn-help-article__p type-body">
            Tenant-level settings — display labels, enabled features, notification
            defaults, and user roles — apply uniformly across every project the tenant
            owns.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="work-area"
      data-kind="glossary"
      data-title="Work Area"
      hidden=""
    >
      <article id="article-work-area" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Work Area is a subdivision of a component, used when field tracking requires
            finer grain than the component itself provides. Work areas form the most
            granular level of the Project → Component → Work Area scope hierarchy.
          </p>
          <p class="bcn-help-article__p type-body">
            Evidence of Compliance and monitoring records can be scoped to a work area,
            isolating activity to a specific portion of a component.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="five-minute-tour"
      data-kind="howto"
      data-title="A five-minute tour of Beacon"
    >
      <article id="article-five-minute-tour" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Beacon turns a body of regulatory documents into a working compliance program.
            Everything in the app follows one flow: documents are cataloged, obligations
            are planned into actions, and completed work is proven with evidence.
          </p>
          <figure class="bcn-help-article__video">
            <div class="bcn-help-article__video-frame">
              <span class="bcn-help-article__video-play"
                ><span class="esa-icon esa-icon--md" aria-hidden="true">
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
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </span>
              </span>
              <span class="bcn-help-article__video-duration"
                ><span class="esa-badge esa-badge--primary esa-badge--sm">
                  <span class="esa-badge__text">4:32</span>
                </span>
              </span>
            </div>
            <figcaption class="bcn-help-article__caption type-caption">
              Watch: a quick tour of Beacon
            </figcaption>
          </figure>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              The Data Catalog holds source documents and the commitments and requirements
              extracted from them.
            </li>
            <li class="bcn-help-article__step type-body">
              Tracking is where planned actions become day-to-day work, tracked per
              project or per component.
            </li>
            <li class="bcn-help-article__step type-body">
              Monitoring captures what happens in the field — daily reports, observations,
              and surveys.
            </li>
            <li class="bcn-help-article__step type-body">
              Reporting assembles evidence of compliance into the reports agencies expect.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </span>
            </span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text type-body">
                The side navigation mirrors these four zones. The project dashboard links
                into each zone and is the shortest path back to any of them.
              </p>
            </div>
          </aside>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-global-search-tips"
                >Finding anything with search</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-an-action"
                >Action</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="global-search-tips"
      data-kind="howto"
      data-title="Finding anything with search"
      hidden=""
    >
      <article id="article-global-search-tips" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Search reads the full text of everything in a project — including the body
            text of commitments and uploaded documents, not just titles.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              Press / on any page, or click the search field in the top bar.
            </li>
            <li class="bcn-help-article__step type-body">
              Type a few words. Results group by type — commitments, requirements,
              actions, documents — with matching snippets highlighted.
            </li>
            <li class="bcn-help-article__step type-body">
              Press Enter on a result to open it, or choose “See all results” for the full
              page with filters.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </span>
            </span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text type-body">
                Searching a permit number or an agency name returns every obligation tied
                to it.
              </p>
            </div>
          </aside>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-five-minute-tour"
                >A five-minute tour of Beacon</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="actions-vs-implementations"
      data-kind="glossary"
      data-title="Implementation"
      hidden=""
    >
      <article id="article-actions-vs-implementations" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            An Implementation is the tracked execution of an action: its status, assignee,
            tasks, comments, and evidence. The action defines what must be done; the
            implementation records doing it. In daily use, implementations are what teams
            refer to as the actions.
          </p>
          <p class="bcn-help-article__p type-body">
            The number of implementations an action generates is determined by its scope
            and frequency. A one-time, project-scoped submission generates one
            implementation. A recurring, component-scoped inspection generates one per
            component, per occurrence.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="what-is-a-component"
      data-kind="glossary"
      data-title="Component"
      hidden=""
    >
      <article id="article-what-is-a-component" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Component is a discrete location or work package within a project — a launch
            shaft, an intake site, a construction segment. Components exist because the
            same obligation frequently applies independently at each location.
          </p>
          <p class="bcn-help-article__p type-body">
            A component maps to the commitments that apply to it, may carry its own
            milestone dates, and receives its own implementations of component-scoped
            actions. A Work Area subdivides a component further when field tracking
            requires finer grain.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="permit"
      data-kind="glossary"
      data-title="Permit"
      hidden=""
    >
      <article id="article-permit" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Permit is an authorization or approval a project must secure from a
            regulatory agency before or during construction. Beacon tracks each permit
            through its acquisition pipeline — from not yet applied, through agency
            review, to issued.
          </p>
          <p class="bcn-help-article__p type-body">
            An issued permit typically becomes a source document: its conditions are
            extracted as commitments and enter the catalog alongside every other
            obligation.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="reading-permit-tracking"
      data-kind="howto"
      data-title="Reading the Permit Tracking board"
      hidden=""
    >
      <article id="article-reading-permit-tracking" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Permit Tracking lists every permit and approval a project needs, each with its
            current status in the acquisition pipeline — from not yet applied, through
            agency review, to issued.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              Each row is one permit; the status lozenge shows where it sits in the
              pipeline.
            </li>
            <li class="bcn-help-article__step type-body">
              The date column shows the next deadline — a submittal window, an agency
              response due, or an expiration to renew.
            </li>
            <li class="bcn-help-article__step type-body">
              Open a permit to see its conditions, responsible contacts, and the source
              document it will become once issued.
            </li>
          </ol>
          <figure class="bcn-help-article__video">
            <div class="bcn-help-article__video-frame">
              <span class="bcn-help-article__video-play"
                ><span class="esa-icon esa-icon--md" aria-hidden="true">
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
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </span>
              </span>
              <span class="bcn-help-article__video-duration"
                ><span class="esa-badge esa-badge--primary esa-badge--sm">
                  <span class="esa-badge__text">2:47</span>
                </span>
              </span>
            </div>
            <figcaption class="bcn-help-article__caption type-caption">
              Watch: a permit’s life in Beacon
            </figcaption>
          </figure>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </span>
            </span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text type-body">
                An issued permit becomes a source document: its conditions are extracted
                as commitments and join the catalog like any other obligation.
              </p>
            </div>
          </aside>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-permit"
                >Permit</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-a-source"
                >Source Document</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-a-commitment"
                >Commitment</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="starring-components"
      data-kind="howto"
      data-title="Starring components on your dashboard"
      hidden=""
    >
      <article id="article-starring-components" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A project may have dozens of components, though most people work in a few.
            Starring pins a component to the project dashboard as a card showing its
            Tracking, Monitoring, and Reporting pulse — the entry point into that
            component’s own dashboard.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              Open any component and click the star in its header.
            </li>
            <li class="bcn-help-article__step type-body">
              Starred components appear on the project dashboard in the Components
              section.
            </li>
            <li class="bcn-help-article__step type-body">
              Un-star from either place; the component itself is unaffected.
            </li>
          </ol>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-a-component"
                >Component</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-reading-critical-now"
                >How “Most critical right now” is chosen</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="reading-critical-now"
      data-kind="howto"
      data-title="How “Most critical right now” is chosen"
      hidden=""
    >
      <article id="article-reading-critical-now" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            The dashboard’s critical surface is deliberately small. It elevates only items
            that are project-critical today — an overdue action on a critical-path
            component, a lapsed survey blocking ground disturbance, a report due to an
            agency this week.
          </p>
          <p class="bcn-help-article__p type-body">
            An item leaves the surface when its underlying condition clears — the work is
            completed, the report is filed, or a review resolves the block. There is
            nothing to configure; the surface reads the same signals shown in each zone.
          </p>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-starring-components"
                >Starring components on your dashboard</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-site-clearance-go-no-go"
                >Using Site Clearance go/no-go</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="what-is-a-dmr"
      data-kind="glossary"
      data-title="Daily Monitoring Report"
      hidden=""
    >
      <article id="article-what-is-a-dmr" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Daily Monitoring Report (DMR) documents one day of field monitoring: the
            observer, site and weather conditions, construction activities underway,
            recorded observations, photographs, and narrative notes.
          </p>
          <p class="bcn-help-article__p type-body">
            DMRs connect field activity to compliance. When an obligation requires daily
            biological monitoring during construction, the DMRs documenting that
            monitoring constitute the evidence the obligation was met.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="what-is-an-observation"
      data-kind="glossary"
      data-title="Observation"
      hidden=""
    >
      <article id="article-what-is-an-observation" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            An Observation is a single recorded field event: two burrowing owls at the
            north staging area, an intact silt fence along the eastern boundary, or wind
            exceeding 25 mph with dust control activated. An observation typically belongs
            to a DMR and carries species data, location, time, and photographs.
          </p>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text type-body">
                Observations with compliance consequences — an active nest inside a
                buffer, a failed BMP — surface in Monitoring as items requiring action,
                and may trigger review before work proceeds.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="survey"
      data-kind="glossary"
      data-title="Survey"
      hidden=""
    >
      <article id="article-survey" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Survey is a structured field record — typically a species or habitat survey
            — collected in a field application such as Fulcrum or Survey123 and synced
            into Beacon. Surveys supply the dated evidence behind clearances and
            compliance countdowns.
          </p>
          <p class="bcn-help-article__p type-body">
            A survey record does not affect compliance until it passes quality-control
            review. Pending records are excluded from clearance and evidence calculations
            by default.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="site-clearance"
      data-kind="glossary"
      data-title="Site Clearance"
      hidden=""
    >
      <article id="article-site-clearance" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Site Clearance is the determination of whether a specific site is clear to
            disturb ground on a given day. Beacon detects potential blocks — a lapsed
            nesting survey, an open wildlife buffer — and marks the site provisionally
            blocked until a qualified reviewer records a decision.
          </p>
          <p class="bcn-help-article__p type-body">
            Detections are advisory; reviews are authoritative. A site is clear only when
            no unresolved block remains and the governing reviews permit disturbance.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="monitoring-portal"
      data-kind="glossary"
      data-title="Monitoring Portal"
      hidden=""
    >
      <article id="article-monitoring-portal" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            The Monitoring Portal is the area of Beacon that reports commitment-level
            compliance against field activity. It identifies commitments that are out of
            compliance and the observations driving each result, matched by species and
            condition.
          </p>
          <p class="bcn-help-article__p type-body">
            The portal reads the same observation and survey records captured elsewhere in
            Monitoring; it holds no separate data of its own.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="qc-field-surveys"
      data-kind="howto"
      data-title="Reviewing field surveys before they count"
      hidden=""
    >
      <article id="article-qc-field-surveys" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Survey records flow in from field collection tools such as Fulcrum and
            Survey123. Before a record affects compliance — clearances, countdowns,
            evidence — it passes a quality-control review.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              New records arrive with a pending-QC status in the Surveys grid.
            </li>
            <li class="bcn-help-article__step type-body">
              A reviewer checks species identification, coordinates, and required fields,
              then approves or returns the record.
            </li>
            <li class="bcn-help-article__step type-body">
              Views default to QC-approved records; toggle the filter to see pending ones.
            </li>
          </ol>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-survey"
                >Survey</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-an-observation"
                >Observation</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-a-dmr"
                >Daily Monitoring Report</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="site-clearance-go-no-go"
      data-kind="howto"
      data-title="Using Site Clearance go/no-go"
      hidden=""
    >
      <article id="article-site-clearance-go-no-go" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Site Clearance answers one question per site: is it clear to disturb ground
            today? The system detects potential blocks — a lapsed nesting survey, an open
            wildlife buffer — and marks the site provisionally blocked until a qualified
            reviewer decides.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              Green sites are clear; amber sites carry a provisional block awaiting
              review; red sites are blocked by a recorded decision.
            </li>
            <li class="bcn-help-article__step type-body">
              Open a site to see each discipline’s reviews, the detections behind them,
              and the required outcome.
            </li>
            <li class="bcn-help-article__step type-body">
              Reviews overrule detections: the system detects, a reviewer decides.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </span>
            </span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text type-body">
                The map and the review list present the same data in two views.
              </p>
            </div>
          </aside>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-site-clearance"
                >Site Clearance</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-an-observation"
                >Observation</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-reading-critical-now"
                >How “Most critical right now” is chosen</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="what-is-evidence"
      data-kind="glossary"
      data-title="Evidence of Compliance"
      hidden=""
    >
      <article id="article-what-is-evidence" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Evidence of Compliance is the terminal output of the compliance flow: the
            report, photograph, receipt, signed form, or monitoring record that proves an
            obligation was satisfied. It is the material presented to a regulatory agency
            during an audit.
          </p>
          <p class="bcn-help-article__p type-body">
            Evidence attaches to action implementations and may also link to checklist
            items that satisfy specific requirements per component. Field-sourced evidence
            can derive directly from Daily Monitoring Reports.
          </p>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text type-body">
                Every evidence record retains its files, metadata, and timestamps — an
                auditable trail from source document to proof.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="assembling-compliance-report"
      data-kind="howto"
      data-title="Assembling a compliance report"
      hidden=""
    >
      <article id="article-assembling-compliance-report" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A compliance report presents the evidence behind a set of obligations in the
            format an agency expects. Reports are assembled from existing Evidence of
            Compliance records; they create no new evidence.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              Open Reporting and choose the report template that matches the agency’s
              required format.
            </li>
            <li class="bcn-help-article__step type-body">
              Select the scope — project, component, or work area — and the reporting
              period.
            </li>
            <li class="bcn-help-article__step type-body">
              Beacon gathers the evidence records in scope; review the set and exclude any
              records that do not apply.
            </li>
            <li class="bcn-help-article__step type-body">
              Generate the package. The output lists each obligation, its status, and the
              linked evidence.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </span>
            </span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text type-body">
                A report reflects the evidence present at generation time. Regenerate
                after new evidence is attached to capture the current state.
              </p>
            </div>
          </aside>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-evidence"
                >Evidence of Compliance</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-actions-vs-implementations"
                >Implementation</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="what-is-a-source"
      data-kind="glossary"
      data-title="Source Document"
      hidden=""
    >
      <article id="article-what-is-a-source" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Source Document is a regulatory record attached to a project: a permit, an
            environmental impact report, an incidental take permit, a contract, or an
            agency agreement. Every obligation in Beacon originates from a source
            document.
          </p>
          <p class="bcn-help-article__p type-body">
            A project may carry dozens of source documents from multiple agencies, and a
            single source may contain anywhere from a few to several hundred discrete
            obligations. Uploading the original file makes its text available for search
            and assisted commitment extraction.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="what-is-a-commitment"
      data-kind="glossary"
      data-title="Commitment"
      hidden=""
    >
      <article id="article-what-is-a-commitment" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Commitment is a single obligation a project must satisfy, captured in the
            regulatory language of its source document. Each commitment carries structured
            attributes — type, resource category, phase, species, and season — that
            support filtering and planning.
          </p>
          <p class="bcn-help-article__p type-body">
            The same real-world obligation frequently appears across multiple documents.
            Each appearance is retained as a separate commitment; the overlap is resolved
            downstream, when requirements are consolidated into actions.
          </p>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text type-body">
                When an agency amends a document, its commitments are revised rather than
                replaced. The original and updated language coexist with explicit lineage.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="what-is-a-requirement"
      data-kind="glossary"
      data-title="Requirement"
      hidden=""
    >
      <article id="article-what-is-a-requirement" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Requirement is one discrete unit of work contained within a commitment. A
            commitment stating “prior to grading, conduct protocol-level surveys for
            burrowing owl and submit results within 30 days” resolves to two requirements:
            conduct the survey, and submit the results.
          </p>
          <p class="bcn-help-article__p type-body">
            Each requirement carries its own type, scope, and frequency. The requirement
            is the unit consolidated into trackable actions.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="what-is-an-action"
      data-kind="glossary"
      data-title="Action"
      hidden=""
    >
      <article id="article-what-is-an-action" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            An Action is a planned unit of compliance work. It consolidates requirements —
            often drawn from many commitments — that describe the same underlying task. A
            requirement to submit the stormwater plan appearing across 44 commitments
            resolves to one action.
          </p>
          <figure class="bcn-help-article__figure">
            <div class="bcn-help-article__figure-frame">
              <span class="bcn-help-article__figure-icon"
                ><span class="esa-icon esa-icon--lg" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                </span>
              </span>
              <span class="bcn-help-article__figure-label">From documents to work</span>
            </div>
            <figcaption class="bcn-help-article__caption type-caption">
              Thousands of requirements across dozens of documents collapse into a few
              hundred actions — the minimum set of real work.
            </figcaption>
          </figure>
          <p class="bcn-help-article__p type-body">
            Each action defines the work, the expected evidence, the schedule, and the
            responsible party. Actions begin as drafts and must be published before they
            generate trackable implementations.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="tracing-lineage"
      data-kind="howto"
      data-title="Tracing a requirement back to its source"
      hidden=""
    >
      <article id="article-tracing-lineage" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Every requirement keeps its full ancestry: the commitment it came from, and
            the source document that commitment was extracted from. This is how a
            requirement is traced to the exact regulatory language behind it.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              Open the requirement. The lineage strip at the top shows Source → Commitment
              → Requirement.
            </li>
            <li class="bcn-help-article__step type-body">
              Click the commitment to read the obligation in the document’s original
              words.
            </li>
            <li class="bcn-help-article__step type-body">
              Click the source to see the document’s details, agency, and attached file —
              with the cited passage highlighted.
            </li>
          </ol>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-a-requirement"
                >Requirement</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-what-is-a-source"
                >Source Document</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="feature-flag"
      data-kind="glossary"
      data-title="Feature Flag"
      hidden=""
    >
      <article id="article-feature-flag" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            A Feature Flag is a configuration switch that turns a Beacon capability on or
            off for a tenant. Flags allow a feature to be released to specific tenants
            independently, without a code change.
          </p>
          <p class="bcn-help-article__p type-body">
            Feature flags are administered in tenant settings. A disabled flag hides its
            feature from navigation and removes its surfaces from every project the tenant
            owns.
          </p>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="managing-tenant-settings"
      data-kind="howto"
      data-title="Managing tenant settings"
      hidden=""
    >
      <article id="article-managing-tenant-settings" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Tenant settings control behavior shared across every project a tenant owns:
            display labels for core entities, default notification rules, enabled
            features, and the user roster. Changes apply tenant-wide.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              Open Settings and select the tenant settings section (available to tenant
              administrators).
            </li>
            <li class="bcn-help-article__step type-body">
              Adjust display labels, defaults, or enabled features; each change is scoped
              to the current tenant only.
            </li>
            <li class="bcn-help-article__step type-body">
              Save. Tenant-wide changes take effect on the next page load for every user
              in the tenant.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text type-body">
                Entity label overrides — for example, renaming Actions to match an
                agency’s vocabulary — apply to navigation, headings, and search across the
                tenant.
              </p>
            </div>
          </aside>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-tenant"
                >Tenant</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-feature-flag"
                >Feature Flag</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-managing-users-roles"
                >Managing users and roles</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="managing-users-roles"
      data-kind="howto"
      data-title="Managing users and roles"
      hidden=""
    >
      <article id="article-managing-users-roles" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Access in Beacon is governed by role. A role determines which zones a user can
            view and which records a user can create, edit, or approve. Users are added at
            the tenant level and assigned one or more roles.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              Open Settings and select Users.
            </li>
            <li class="bcn-help-article__step type-body">
              Invite a user by email, or select an existing user to change their
              assignment.
            </li>
            <li class="bcn-help-article__step type-body">
              Assign roles — for example, viewer, contributor, or reviewer — and save.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text type-body">
                Approval actions, such as clearing a survey through quality control,
                require a role with review authority. A contributor role cannot approve
                its own records.
              </p>
            </div>
          </aside>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-managing-tenant-settings"
                >Managing tenant settings</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-qc-field-surveys"
                >Reviewing field surveys before they count</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="configuring-notifications"
      data-kind="howto"
      data-title="Configuring notifications"
      hidden=""
    >
      <article id="article-configuring-notifications" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p type-body">
            Notifications alert users to compliance events — an approaching deadline, a
            new provisional block, a returned survey. Defaults are set at the tenant
            level; each user may adjust their own delivery preferences within those
            defaults.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step type-body">
              Open Settings and select Notifications to review the tenant’s default rules.
            </li>
            <li class="bcn-help-article__step type-body">
              Enable or disable notifications by event type, and set the delivery channel
              for each.
            </li>
            <li class="bcn-help-article__step type-body">
              Individual users adjust their personal preferences from the same section;
              tenant defaults apply where a user has made no choice.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </span>
            </span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text type-body">
                Scope notifications to the components a user has starred to keep alerts
                limited to their own work.
              </p>
            </div>
          </aside>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-managing-tenant-settings"
                >Managing tenant settings</a
              >
            </li>
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-starring-components"
                >Starring components on your dashboard</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
  </div>
</esa-side-dialog>
```

## Styles
```css
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
.bcn-gd-article {
  --z-modal-backdrop: 1302;
  --z-modal: 1303;
  --side-dialog-width: 460px;
  --backdrop-filter: blur(2px);
}
.bcn-gd-article__head {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-gd-article__back {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  align-self: flex-start;
  padding: 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  cursor: pointer;
}
.bcn-gd-article__titlerow {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-gd-article__title {
  font-family: var(--font-decorative);
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.25;
}
.bcn-gd-article__kind {
  flex: none;
  padding: 1px 6px;
  border-radius: var(--radius-100);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  line-height: 1.5;
  white-space: nowrap;
}
.bcn-gd-article__panel[hidden] {
  display: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-help-article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-help-article__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-help-article__p {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-help-article__video {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-help-article__video-frame {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-200);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: color-mix(
    in srgb,
    var(--color-text-primary) 8%,
    var(--color-surface-sunken)
  );
}
.bcn-help-article__video-play {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  color: var(--color-text-primary);
  box-shadow: 0 1px 4px #0000002e;
  padding-left: 3px;
}
.bcn-help-article__video-duration {
  position: absolute;
  right: var(--spacing-200);
  bottom: var(--spacing-200);
}
.bcn-help-article__video-label,
.bcn-help-article__caption {
  font-size: max(0.8125rem, var(--type-size-100));
  color: var(--color-text-secondary);
  margin: 0;
}
.bcn-help-article__steps {
  list-style: none;
  counter-reset: bcn-step;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-help-article__step {
  counter-increment: bcn-step;
  display: grid;
  grid-template-columns: 1.625rem 1fr;
  align-items: start;
  gap: var(--spacing-300);
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-help-article__step:before {
  content: counter(bcn-step);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.625rem;
  height: 1.625rem;
  border-radius: var(--radius-full);
  background: var(--color-surface-sunken);
  color: var(--color-text-primary);
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1;
}
.bcn-help-article__callout {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-light);
  background: var(--color-surface-sunken);
}
.bcn-help-article__callout-icon {
  display: inline-flex;
  margin-top: 1px;
  color: var(--color-text-secondary);
}
.bcn-help-article__callout-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.bcn-help-article__callout-label {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
}
.bcn-help-article__callout-text {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-help-article__related {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--spacing-150) var(--spacing-300);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-light);
}
.bcn-help-article__related-label {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
}
.bcn-help-article__related-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-100) var(--spacing-300);
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-help-article__related-link {
  font-size: 0.9375rem;
  color: var(--color-text-link);
  text-decoration: none;
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-primary, #43608a));
  --_badge-text: var(--badge-text-color, var(--color-text-inverse, #fff));
  --_badge-height: var(--badge-height-md, 28px);
  --_badge-font-size: 13px;
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  --_badge-min-width: var(--badge-height-md, 28px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--_badge-height);
  min-width: var(--_badge-min-width);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--badge-radius, var(--radius-100, 4px));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  font-size: var(--_badge-font-size);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-badge--sm {
  --_badge-height: var(--badge-height-sm, 22px);
  --_badge-font-size: 11px;
  --_badge-padding-x: var(--spacing-150, 0.375rem);
  --_badge-min-width: var(--badge-height-sm, 22px);
}
.type-body {
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
}
.type-caption {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
```

## Tokens
- `--badge-bg`: #005862 _(component)_
- `--badge-height-md`: 28px _(component)_
- `--badge-height-sm`: 22px _(component)_
- `--badge-radius`: .25rem _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-link`: #005862 _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--letter-spacing-normal`: .01em _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--line-height-relaxed`: 1.8 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
