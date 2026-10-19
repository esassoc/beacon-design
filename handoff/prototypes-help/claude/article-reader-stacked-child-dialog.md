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
  ><div slot="header" class="bcn-gd-article__head">
    <button type="button" class="bcn-gd-article__back" data-gd-article-back="">
      <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path></svg
      ></span>
      All guidance</button
    ><span class="bcn-gd-article__titlerow"
      ><span class="bcn-gd-article__title" data-gd-article-title=""
        >A five-minute tour of Beacon</span
      ><span class="bcn-gd-article__kind" data-gd-article-kind="" data-kind="howto"
        >How-to</span
      ></span
    >
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
          <p class="bcn-help-article__p typography-body-md">
            Scope determines how an action is distributed. A project-scoped action is
            performed once, centrally — for example, submitting the project-wide
            stormwater plan. A component-scoped action is performed independently at every
            applicable component — for example, installing exclusion fencing at each of 20
            construction areas.
          </p>
          <figure class="bcn-help-article__figure">
            <div class="bcn-help-article__figure-frame">
              <span class="bcn-help-article__figure-icon"
                ><span class="esa-icon esa-icon--lg" aria-hidden="true"
                  ><svg
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
                    <path
                      d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                    ></path></svg></span></span
              ><span class="bcn-help-article__figure-label">The scope multiplier</span>
            </div>
            <figcaption class="bcn-help-article__caption typography-meta">
              One component-scoped action across 20 components produces 20 independently
              tracked implementations.
            </figcaption>
          </figure>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon"
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A Tenant is the organization a Beacon workspace belongs to. Beacon is
            multi-tenant: each tenant’s projects, documents, users, and configuration are
            isolated from every other tenant’s, and a user operates within a single tenant
            at a time.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A Work Area is a subdivision of a component, used when field tracking requires
            finer grain than the component itself provides. Work areas form the most
            granular level of the Project → Component → Work Area scope hierarchy.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Beacon turns a body of regulatory documents into a working compliance program.
            Everything in the app follows one flow: documents are cataloged, obligations
            are planned into actions, and completed work is proven with evidence.
          </p>
          <figure class="bcn-help-article__video">
            <div class="bcn-help-article__video-frame">
              <span class="bcn-help-article__video-play"
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
                    <polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span></span
              ><span class="bcn-help-article__video-duration"
                ><span
                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">4:32</span></span
                ></span
              >
            </div>
            <figcaption class="bcn-help-article__caption typography-meta">
              Watch: a quick tour of Beacon
            </figcaption>
          </figure>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              The Data Catalog holds source documents and the commitments and requirements
              extracted from them.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Tracking is where planned actions become day-to-day work, tracked per
              project or per component.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Monitoring captures what happens in the field — daily reports, observations,
              and surveys.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Reporting assembles evidence of compliance into the reports agencies expect.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon"
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path></svg></span
            ></span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Search reads the full text of everything in a project — including the body
            text of commitments and uploaded documents, not just titles.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Press / on any page, or click the search field in the top bar.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Type a few words. Results group by type — commitments, requirements,
              actions, documents — with matching snippets highlighted.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Press Enter on a result to open it, or choose “See all results” for the full
              page with filters.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon"
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path></svg></span
            ></span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            An Implementation is the tracked execution of an action: its status, assignee,
            tasks, comments, and evidence. The action defines what must be done; the
            implementation records doing it. In daily use, implementations are what teams
            refer to as the actions.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A Component is a discrete location or work package within a project — a launch
            shaft, an intake site, a construction segment. Components exist because the
            same obligation frequently applies independently at each location.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A Permit is an authorization or approval a project must secure from a
            regulatory agency before or during construction. Beacon tracks each permit
            through its acquisition pipeline — from not yet applied, through agency
            review, to issued.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Permit Tracking lists every permit and approval a project needs, each with its
            current status in the acquisition pipeline — from not yet applied, through
            agency review, to issued.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Each row is one permit; the status lozenge shows where it sits in the
              pipeline.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              The date column shows the next deadline — a submittal window, an agency
              response due, or an expiration to renew.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Open a permit to see its conditions, responsible contacts, and the source
              document it will become once issued.
            </li>
          </ol>
          <figure class="bcn-help-article__video">
            <div class="bcn-help-article__video-frame">
              <span class="bcn-help-article__video-play"
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
                    <polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span></span
              ><span class="bcn-help-article__video-duration"
                ><span
                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">2:47</span></span
                ></span
              >
            </div>
            <figcaption class="bcn-help-article__caption typography-meta">
              Watch: a permit’s life in Beacon
            </figcaption>
          </figure>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon"
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path></svg></span
            ></span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A project may have dozens of components, though most people work in a few.
            Starring pins a component to the project dashboard as a card showing its
            Tracking, Monitoring, and Reporting pulse — the entry point into that
            component’s own dashboard.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Star a component from the all-components list, or from the star in its own
              header.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Starred components appear on the project dashboard in the Components
              section, below the project-wide row.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Un-star from either place; the component itself is unaffected.
            </li>
          </ol>
          <p class="bcn-help-article__p typography-body-md">
            Stars are yours alone — starring a component does not change what anyone else
            sees. The Components section always leads with a project-wide row for actions
            that belong to the project rather than to any one component.
          </p>
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
                >How the dashboard decides what needs attention</a
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
      data-title="How the dashboard decides what needs attention"
      hidden=""
    >
      <article id="article-reading-critical-now" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p typography-body-md">
            Everything urgent on the dashboard is an action with a due date. Each action
            belongs to one of the three zones by its type — tracking, monitoring, or
            reporting — so a lapsed survey is a monitoring action and an agency submittal
            is a reporting action. There is no separate list of critical items to
            maintain.
          </p>
          <p class="bcn-help-article__p typography-body-md">
            The Tracking, Monitoring, and Reporting modules each count their own overdue
            actions and the ones due within the next fourteen days, then list the most
            urgent of them. Red means past due; amber means due soon. Clicking any of them
            opens the action itself.
          </p>
          <p class="bcn-help-article__p typography-body-md">
            An action leaves the surface when it is completed or its due date moves. There
            is nothing to configure — the modules read the same action records you work
            with in each zone.
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
                href="/beacon-design/prototypes/help#article-reading-project-timeline"
                >Reading the project timeline</a
              >
            </li>
          </ul>
        </nav>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="reading-project-timeline"
      data-kind="howto"
      data-title="Reading the project timeline"
      hidden=""
    >
      <article id="article-reading-project-timeline" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p typography-body-md">
            The timeline across the top of the dashboard plots three things on one date
            axis: action due dates, season windows, and project milestones. It opens a
            week before today so anything already overdue stays in view.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Switch the window between 30, 60, and 90 days to look further ahead.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Click any mark — a dot, a season bar, or a milestone — to pin its details
              open.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Seasons show the ones starting or ending inside the window first; use “Show
              all” when a project carries many.
            </li>
          </ol>
          <p class="bcn-help-article__p typography-body-md">
            Action dots follow the same colors as the modules: red for past due, amber for
            due soon, gray for later. Milestones are shown in blue because they mark
            schedule rather than urgency.
          </p>
        </div>
        <nav class="bcn-help-article__related" aria-label="Related articles">
          <span class="bcn-help-article__related-label">Related</span>
          <ul class="bcn-help-article__related-list">
            <li>
              <a
                class="bcn-help-article__related-link"
                href="/beacon-design/prototypes/help#article-reading-critical-now"
                >How the dashboard decides what needs attention</a
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
    <div
      class="bcn-gd-article__panel"
      data-article-body="what-is-a-dmr"
      data-kind="glossary"
      data-title="Daily Monitoring Report"
      hidden=""
    >
      <article id="article-what-is-a-dmr" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p typography-body-md">
            A Daily Monitoring Report (DMR) documents one day of field monitoring: the
            observer, site and weather conditions, construction activities underway,
            recorded observations, photographs, and narrative notes.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            An Observation is a single recorded field event: two burrowing owls at the
            north staging area, an intact silt fence along the eastern boundary, or wind
            exceeding 25 mph with dust control activated. An observation typically belongs
            to a DMR and carries species data, location, time, and photographs.
          </p>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon"
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A Survey is a structured field record — typically a species or habitat survey
            — collected in a field application such as Fulcrum or Survey123 and synced
            into Beacon. Surveys supply the dated evidence behind clearances and
            compliance countdowns.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Site Clearance is the determination of whether a specific site is clear to
            disturb ground on a given day. Beacon detects potential blocks — a lapsed
            nesting survey, an open wildlife buffer — and marks the site provisionally
            blocked until a qualified reviewer records a decision.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            The Monitoring Portal is the area of Beacon that reports commitment-level
            compliance against field activity. It identifies commitments that are out of
            compliance and the observations driving each result, matched by species and
            condition.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Survey records flow in from field collection tools such as Fulcrum and
            Survey123. Before a record affects compliance — clearances, countdowns,
            evidence — it passes a quality-control review.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              New records arrive with a pending-QC status in the Surveys grid.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              A reviewer checks species identification, coordinates, and required fields,
              then approves or returns the record.
            </li>
            <li class="bcn-help-article__step typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Site Clearance answers one question per site: is it clear to disturb ground
            today? The system detects potential blocks — a lapsed nesting survey, an open
            wildlife buffer — and marks the site provisionally blocked until a qualified
            reviewer decides.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Green sites are clear; amber sites carry a provisional block awaiting
              review; red sites are blocked by a recorded decision.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Open a site to see each discipline’s reviews, the detections behind them,
              and the required outcome.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Reviews overrule detections: the system detects, a reviewer decides.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon"
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path></svg></span
            ></span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
                >How the dashboard decides what needs attention</a
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
          <p class="bcn-help-article__p typography-body-md">
            Evidence of Compliance is the terminal output of the compliance flow: the
            report, photograph, receipt, signed form, or monitoring record that proves an
            obligation was satisfied. It is the material presented to a regulatory agency
            during an audit.
          </p>
          <p class="bcn-help-article__p typography-body-md">
            Evidence attaches to action implementations and may also link to checklist
            items that satisfy specific requirements per component. Field-sourced evidence
            can derive directly from Daily Monitoring Reports.
          </p>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon"
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A compliance report presents the evidence behind a set of obligations in the
            format an agency expects. Reports are assembled from existing Evidence of
            Compliance records; they create no new evidence.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Open Reporting and choose the report template that matches the agency’s
              required format.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Select the scope — project, component, or work area — and the reporting
              period.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Beacon gathers the evidence records in scope; review the set and exclude any
              records that do not apply.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Generate the package. The output lists each obligation, its status, and the
              linked evidence.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon"
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path></svg></span
            ></span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A Source Document is a regulatory record attached to a project: a permit, an
            environmental impact report, an incidental take permit, a contract, or an
            agency agreement. Every obligation in Beacon originates from a source
            document.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A Commitment is a single obligation a project must satisfy, captured in the
            regulatory language of its source document. Each commitment carries structured
            attributes — type, resource category, phase, species, and season — that
            support filtering and planning.
          </p>
          <p class="bcn-help-article__p typography-body-md">
            The same real-world obligation frequently appears across multiple documents.
            Each appearance is retained as a separate commitment; the overlap is resolved
            downstream, when requirements are consolidated into actions.
          </p>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon"
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A Requirement is one discrete unit of work contained within a commitment. A
            commitment stating “prior to grading, conduct protocol-level surveys for
            burrowing owl and submit results within 30 days” resolves to two requirements:
            conduct the survey, and submit the results.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            An Action is a planned unit of compliance work. It consolidates requirements —
            often drawn from many commitments — that describe the same underlying task. A
            requirement to submit the stormwater plan appearing across 44 commitments
            resolves to one action.
          </p>
          <figure class="bcn-help-article__figure">
            <div class="bcn-help-article__figure-frame">
              <span class="bcn-help-article__figure-icon"
                ><span class="esa-icon esa-icon--lg" aria-hidden="true"
                  ><svg
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
                    <path
                      d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                    ></path></svg></span></span
              ><span class="bcn-help-article__figure-label">From documents to work</span>
            </div>
            <figcaption class="bcn-help-article__caption typography-meta">
              Thousands of requirements across dozens of documents collapse into a few
              hundred actions — the minimum set of real work.
            </figcaption>
          </figure>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Every requirement keeps its full ancestry: the commitment it came from, and
            the source document that commitment was extracted from. This is how a
            requirement is traced to the exact regulatory language behind it.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Open the requirement. The lineage strip at the top shows Source → Commitment
              → Requirement.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Click the commitment to read the obligation in the document’s original
              words.
            </li>
            <li class="bcn-help-article__step typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            A Feature Flag is a configuration switch that turns a Beacon capability on or
            off for a tenant. Flags allow a feature to be released to specific tenants
            independently, without a code change.
          </p>
          <p class="bcn-help-article__p typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Tenant settings control behavior shared across every project a tenant owns:
            display labels for core entities, default notification rules, enabled
            features, and the user roster. Changes apply tenant-wide.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Open Settings and select the tenant settings section (available to tenant
              administrators).
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Adjust display labels, defaults, or enabled features; each change is scoped
              to the current tenant only.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Save. Tenant-wide changes take effect on the next page load for every user
              in the tenant.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon"
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Access in Beacon is governed by role. A role determines which zones a user can
            view and which records a user can create, edit, or approve. Users are added at
            the tenant level and assigned one or more roles.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Open Settings and select Users.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Invite a user by email, or select an existing user to change their
              assignment.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Assign roles — for example, viewer, contributor, or reviewer — and save.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon"
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
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
          <p class="bcn-help-article__p typography-body-md">
            Notifications alert users to compliance events — an approaching deadline, a
            new provisional block, a returned survey. Defaults are set at the tenant
            level; each user may adjust their own delivery preferences within those
            defaults.
          </p>
          <ol class="bcn-help-article__steps">
            <li class="bcn-help-article__step typography-body-md">
              Open Settings and select Notifications to review the tenant’s default rules.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Enable or disable notifications by event type, and set the delivery channel
              for each.
            </li>
            <li class="bcn-help-article__step typography-body-md">
              Individual users adjust their personal preferences from the same section;
              tenant defaults apply where a user has made no choice.
            </li>
          </ol>
          <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
            <span class="bcn-help-article__callout-icon"
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
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path></svg></span
            ></span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Tip</span>
              <p class="bcn-help-article__callout-text typography-body-md">
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
  </div></esa-side-dialog
>
```

## Styles
```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
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
.bcn-help-article {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-help-article--compact {
  gap: var(--spacing-400);
}
.bcn-help-article__head {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-help-article__title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-article__body {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-help-article--compact .bcn-help-article__body {
  gap: var(--spacing-300);
}
.bcn-help-article__p {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-article__steps {
  counter-reset: bcn-step;
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-article__step {
  counter-increment: bcn-step;
  align-items: start;
  gap: var(--spacing-300);
  color: var(--color-content-default);
  grid-template-columns: 1.625rem 1fr;
  margin: 0;
  display: grid;
}
.bcn-help-article__step:before {
  content: counter(bcn-step);
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-sunken);
  width: 1.625rem;
  height: 1.625rem;
  color: var(--color-content-default);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  justify-content: center;
  align-items: center;
  line-height: 1;
  display: inline-flex;
}
.bcn-help-article__callout {
  align-items: start;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-elevation-sunken);
  grid-template-columns: auto 1fr;
  display: grid;
}
.bcn-help-article--compact .bcn-help-article__callout {
  padding: var(--spacing-300);
}
.bcn-help-article__callout-icon {
  color: var(--color-content-default-secondary);
  margin-top: 1px;
  display: inline-flex;
}
.bcn-help-article__callout-body {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-help-article__callout-label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
}
.bcn-help-article__callout-text {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-article__figure {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-help-article__figure-frame {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200);
  min-height: 8.5rem;
  padding: var(--spacing-500);
  border: 1px dashed var(--color-border-default-strong);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
  text-align: center;
  flex-direction: column;
  display: flex;
}
.bcn-help-article__figure-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-help-article__figure-label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.bcn-help-article__video {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-help-article__video-frame {
  aspect-ratio: 16/9;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default);
  background: color-mix(
    in srgb,
    var(--color-content-default) 8%,
    var(--color-background-elevation-sunken)
  );
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  overflow: hidden;
}
.bcn-help-article__video-play {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-raised);
  width: 3rem;
  height: 3rem;
  color: var(--color-content-default);
  justify-content: center;
  align-items: center;
  padding-left: 3px;
  display: inline-flex;
  box-shadow: 0 1px 4px #0000002e;
}
.bcn-help-article__video-duration {
  right: var(--spacing-200);
  bottom: var(--spacing-200);
  position: absolute;
}
.bcn-help-article__video-label,
.bcn-help-article__caption {
  font-size: max(0.8125rem, var(--font-size-100));
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-help-article__related {
  align-items: baseline;
  gap: var(--spacing-150) var(--spacing-300);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-wrap: wrap;
  display: flex;
}
.bcn-help-article__related-label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
}
.bcn-help-article__related-list {
  gap: var(--spacing-100) var(--spacing-300);
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-article__related-link {
  color: var(--color-content-link);
  font-size: 0.9375rem;
  text-decoration: none;
}
.bcn-help-article__related-link:hover {
  color: var(--color-content-link-hover);
  text-decoration: underline;
}
.bcn-gd-article {
  --z-modal-backdrop: 1302;
  --z-modal: 1303;
  --side-dialog-width: 460px;
  --side-dialog-backdrop-filter: blur(2px);
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-article__head {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-gd-article__back {
  align-items: center;
  gap: var(--spacing-100);
  font: inherit;
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  cursor: pointer;
  background: 0 0;
  border: 0;
  align-self: flex-start;
  padding: 0;
  display: inline-flex;
}
.bcn-gd-article__back:hover {
  color: var(--color-content-default);
}
.bcn-gd-article__titlerow {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-gd-article__title {
  font-family: var(--font-decorative);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.25;
}
.bcn-gd-article__kind {
  border-radius: var(--radius-100);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex: none;
  padding: 1px 6px;
  line-height: 1.5;
}
.bcn-gd-article__kind[data-kind="glossary"] {
  color: var(--bcn-aldo-600);
  border-color: var(--bcn-aldo-100);
  background: var(--bcn-aldo-50);
}
.bcn-gd-article__panel[hidden] {
  display: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
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
- `--badge-bg`: #43608a _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-aldo-100`: #cfeceb _(component)_
- `--bcn-aldo-50`: #e8f6f5 _(component)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-meta-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-meta-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-meta-font-weight`: 350 _(semantic)_
- `--typography-meta-letter-spacing`: .01em _(semantic)_
- `--typography-meta-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
