# Category-scoped reading pane

The same reading pane the help home uses, but SCOPED to this category and landing on its first article — so a category page is readable the moment it loads rather than showing an empty reader.

## Key decisions
- ONE component, two behaviors, chosen by props — not two components. bcn-kb-browser takes `articles` (scoping the reader to this category's subset) and `defaultOnLoad` (true here, false on the home).
- With no hash, the category page lands on its FIRST article and does NOT scroll — the list must stay in view, because the list is the point of this page. The home, by contrast, collapses the pane to nothing.
- The default article id is resolved at build time into data-kb-default, so the controller reads a value rather than re-deriving the default.
- Scoping is genuine: only this category's articles are pre-rendered here, so a stray #article-<id> from another category does not resolve on this route — that is the home's job, and the home passes every article precisely so external deep links always land somewhere.

## Gotchas
- The home is the ONLY page that can resolve any #article-<id>. Drawer rows and article "Related" links therefore point at /prototypes/help#article-<id>, never at a category route — keep that contract when porting, or related links break depending on which page the user is on.
- Landing on the first article must not scroll. Reusing the home's scroll-into-view behavior here pushes the list off screen on load, which reads as a broken page.
- The pane's empty-collapse :has() rule still applies, but on this route it should never trigger — if it does, defaultOnLoad or the default id is not reaching the controller.

## Done when
- Loading the route with no hash shows the category's first article with the list still visible above it; clicking any row swaps the pane to that article; an #article-<id> from a different category does not resolve here.

## Markup
```html
<div class="bcn-kb__pane" data-kb-pane="" data-kb-default="actions-vs-implementations">
  <article
    class="bcn-kb__article"
    data-article-id="actions-vs-implementations"
    data-category="tracking"
  >
    <article id="article-actions-vs-implementations" class="bcn-help-article">
      <header class="bcn-help-article__head">
        <h2 class="bcn-help-article__title type-card-title">Implementation</h2>
        <span class="esa-badge esa-badge--primary esa-badge--sm">
          <span class="esa-badge__text">Glossary</span>
        </span>
      </header>
      <div class="bcn-help-article__body">
        <p class="bcn-help-article__p type-body">
          An Implementation is the tracked execution of an action: its status, assignee,
          tasks, comments, and evidence. The action defines what must be done; the
          implementation records doing it. In daily use, implementations are what teams
          refer to as the actions.
        </p>
        <p class="bcn-help-article__p type-body">
          The number of implementations an action generates is determined by its scope and
          frequency. A one-time, project-scoped submission generates one implementation. A
          recurring, component-scoped inspection generates one per component, per
          occurrence.
        </p>
      </div>
    </article>
  </article>
  <article
    class="bcn-kb__article"
    data-article-id="what-is-a-component"
    data-category="tracking"
    hidden=""
  >
    <article id="article-what-is-a-component" class="bcn-help-article">
      <header class="bcn-help-article__head">
        <h2 class="bcn-help-article__title type-card-title">Component</h2>
        <span class="esa-badge esa-badge--primary esa-badge--sm">
          <span class="esa-badge__text">Glossary</span>
        </span>
      </header>
      <div class="bcn-help-article__body">
        <p class="bcn-help-article__p type-body">
          A Component is a discrete location or work package within a project — a launch
          shaft, an intake site, a construction segment. Components exist because the same
          obligation frequently applies independently at each location.
        </p>
        <p class="bcn-help-article__p type-body">
          A component maps to the commitments that apply to it, may carry its own
          milestone dates, and receives its own implementations of component-scoped
          actions. A Work Area subdivides a component further when field tracking requires
          finer grain.
        </p>
      </div>
    </article>
  </article>
  <article
    class="bcn-kb__article"
    data-article-id="permit"
    data-category="tracking"
    hidden=""
  >
    <article id="article-permit" class="bcn-help-article">
      <header class="bcn-help-article__head">
        <h2 class="bcn-help-article__title type-card-title">Permit</h2>
        <span class="esa-badge esa-badge--primary esa-badge--sm">
          <span class="esa-badge__text">Glossary</span>
        </span>
      </header>
      <div class="bcn-help-article__body">
        <p class="bcn-help-article__p type-body">
          A Permit is an authorization or approval a project must secure from a regulatory
          agency before or during construction. Beacon tracks each permit through its
          acquisition pipeline — from not yet applied, through agency review, to issued.
        </p>
        <p class="bcn-help-article__p type-body">
          An issued permit typically becomes a source document: its conditions are
          extracted as commitments and enter the catalog alongside every other obligation.
        </p>
      </div>
    </article>
  </article>
  <article
    class="bcn-kb__article"
    data-article-id="reading-permit-tracking"
    data-category="tracking"
    hidden=""
  >
    <article id="article-reading-permit-tracking" class="bcn-help-article">
      <header class="bcn-help-article__head">
        <h2 class="bcn-help-article__title type-card-title">
          Reading the Permit Tracking board
        </h2>
        <span class="esa-badge esa-badge--primary esa-badge--sm">
          <span class="esa-badge__text">How-to</span>
        </span>
      </header>
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
              An issued permit becomes a source document: its conditions are extracted as
              commitments and join the catalog like any other obligation.
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
  </article>
  <article
    class="bcn-kb__article"
    data-article-id="starring-components"
    data-category="tracking"
    hidden=""
  >
    <article id="article-starring-components" class="bcn-help-article">
      <header class="bcn-help-article__head">
        <h2 class="bcn-help-article__title type-card-title">
          Starring components on your dashboard
        </h2>
        <span class="esa-badge esa-badge--primary esa-badge--sm">
          <span class="esa-badge__text">How-to</span>
        </span>
      </header>
      <div class="bcn-help-article__body">
        <p class="bcn-help-article__p type-body">
          A project may have dozens of components, though most people work in a few.
          Starring pins a component to the project dashboard as a card showing its
          Tracking, Monitoring, and Reporting pulse — the entry point into that
          component’s own dashboard.
        </p>
        <ol class="bcn-help-article__steps">
          <li class="bcn-help-article__step type-body">
            Star a component from the all-components list, or from the star in its own
            header.
          </li>
          <li class="bcn-help-article__step type-body">
            Starred components appear on the project dashboard in the Components section,
            below the project-wide row.
          </li>
          <li class="bcn-help-article__step type-body">
            Un-star from either place; the component itself is unaffected.
          </li>
        </ol>
        <p class="bcn-help-article__p type-body">
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
  </article>
  <article
    class="bcn-kb__article"
    data-article-id="reading-critical-now"
    data-category="tracking"
    hidden=""
  >
    <article id="article-reading-critical-now" class="bcn-help-article">
      <header class="bcn-help-article__head">
        <h2 class="bcn-help-article__title type-card-title">
          How the dashboard decides what needs attention
        </h2>
        <span class="esa-badge esa-badge--primary esa-badge--sm">
          <span class="esa-badge__text">How-to</span>
        </span>
      </header>
      <div class="bcn-help-article__body">
        <p class="bcn-help-article__p type-body">
          Everything urgent on the dashboard is an action with a due date. Each action
          belongs to one of the three zones by its type — tracking, monitoring, or
          reporting — so a lapsed survey is a monitoring action and an agency submittal is
          a reporting action. There is no separate list of critical items to maintain.
        </p>
        <p class="bcn-help-article__p type-body">
          The Tracking, Monitoring, and Reporting modules each count their own overdue
          actions and the ones due within the next fourteen days, then list the most
          urgent of them. Red means past due; amber means due soon. Clicking any of them
          opens the action itself.
        </p>
        <p class="bcn-help-article__p type-body">
          An action leaves the surface when it is completed or its due date moves. There
          is nothing to configure — the modules read the same action records you work with
          in each zone.
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
  </article>
  <article
    class="bcn-kb__article"
    data-article-id="reading-project-timeline"
    data-category="tracking"
    hidden=""
  >
    <article id="article-reading-project-timeline" class="bcn-help-article">
      <header class="bcn-help-article__head">
        <h2 class="bcn-help-article__title type-card-title">
          Reading the project timeline
        </h2>
        <span class="esa-badge esa-badge--primary esa-badge--sm">
          <span class="esa-badge__text">How-to</span>
        </span>
      </header>
      <div class="bcn-help-article__body">
        <p class="bcn-help-article__p type-body">
          The timeline across the top of the dashboard plots three things on one date
          axis: action due dates, season windows, and project milestones. It opens a week
          before today so anything already overdue stays in view.
        </p>
        <ol class="bcn-help-article__steps">
          <li class="bcn-help-article__step type-body">
            Switch the window between 30, 60, and 90 days to look further ahead.
          </li>
          <li class="bcn-help-article__step type-body">
            Click any mark — a dot, a season bar, or a milestone — to pin its details
            open.
          </li>
          <li class="bcn-help-article__step type-body">
            Seasons show the ones starting or ending inside the window first; use “Show
            all” when a project carries many.
          </li>
        </ol>
        <p class="bcn-help-article__p type-body">
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
  </article>
</div>
```

## Styles
```css
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
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
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-help-article--compact {
  gap: var(--spacing-400);
}
.bcn-help-article__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.bcn-help-article__title {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-help-article__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-help-article--compact .bcn-help-article__body {
  gap: var(--spacing-300);
}
.bcn-help-article__p {
  margin: 0;
  color: var(--color-text-primary);
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
.bcn-help-article--compact .bcn-help-article__callout {
  padding: var(--spacing-300);
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
.bcn-help-article__figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-help-article__figure-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200);
  min-height: 8.5rem;
  padding: var(--spacing-500);
  border: 1px dashed var(--color-border-strong);
  border-radius: var(--radius-200);
  background: var(--color-surface-sunken);
  text-align: center;
}
.bcn-help-article__figure-icon {
  color: var(--color-text-tertiary);
}
.bcn-help-article__figure-label {
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
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
.bcn-help-article__related-link:hover {
  color: var(--color-text-link-hover);
  text-decoration: underline;
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border);
  --badge-text-color: var(--color-text-secondary);
  min-width: 19px;
  height: 19px;
  padding: 0 4px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  box-shadow: 0 0 0 1.5px var(--color-surface);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--font-weight-medium);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
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
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.type-card-title {
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.type-body-large {
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
}
.type-body {
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
}
.type-body-small {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.type-caption {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.bcn-kb__pane {
  min-block-size: 60vh;
  padding-block-start: var(--spacing-600);
  border-top: 1px solid var(--color-border);
  scroll-margin-top: var(--spacing-400);
}
.bcn-kb__pane:not(:has(> .bcn-kb__article:not([hidden]))) {
  min-block-size: 0;
  padding-block-start: 0;
  border-top: 0;
}
.bcn-kb__article {
  max-inline-size: 70ch;
}
.bcn-kb__article[hidden] {
  display: none;
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
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
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-button--lg {
  --_ib-size: var(--form-height-lg, 48px);
}
.esa-icon-button:hover {
  background: var(--_ib-bg-hover);
}
.esa-icon-button:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
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
.esa-badge--xs {
  --_badge-height: var(--badge-height-xs, 18px);
  --_badge-font-size: 10px;
  --_badge-padding-x: var(--spacing-100, 0.25rem);
  --_badge-min-width: var(--badge-height-xs, 18px);
}
.esa-badge--sm {
  --_badge-height: var(--badge-height-sm, 22px);
  --_badge-font-size: 11px;
  --_badge-padding-x: var(--spacing-150, 0.375rem);
  --_badge-min-width: var(--badge-height-sm, 22px);
}
.esa-badge--lg {
  --_badge-height: var(--badge-height-lg, 34px);
  --_badge-font-size: 14px;
  --_badge-padding-x: var(--spacing-300, 0.75rem);
  --_badge-min-width: var(--badge-height-lg, 34px);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-secondary, #65ba74);
  --_badge-text: var(--color-secondary-on-fill, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-success, #bdee63);
  --_badge-text: var(--color-success-on-fill, #37401c);
}
.esa-badge--warning {
  --_badge-bg: var(--color-warning, #ffc53d);
  --_badge-text: var(--color-warning-on-fill, #4f3422);
}
.esa-badge--danger {
  --_badge-bg: var(--color-danger, #e5484d);
}
.esa-badge--info {
  --_badge-bg: var(--color-info, #0090ff);
}
.esa-badge--dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  padding: 0;
  border-radius: var(--radius-full, 9999px);
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-primary-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-secondary-hover, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-success-hover, #b0e64c);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-info-hover, #0588f0);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--badge-bg`: #005862 _(component)_
- `--badge-height-lg`: 34px _(component)_
- `--badge-height-md`: 28px _(component)_
- `--badge-height-sm`: 22px _(component)_
- `--badge-height-xs`: 18px _(component)_
- `--badge-radius`: .25rem _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-danger-hover`: #dc3e42 _(semantic)_
- `--color-info`: #228be6 _(semantic)_
- `--color-info-hover`: #0588f0 _(semantic)_
- `--color-info-subtle`: #f4faff _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-secondary-hover`: #0a6562 _(semantic)_
- `--color-secondary-on-fill`: #203c25 _(semantic)_
- `--color-success`: #2e7571 _(semantic)_
- `--color-success-hover`: #b0e64c _(semantic)_
- `--color-success-on-fill`: #37401c _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-link`: #005862 _(semantic)_
- `--color-text-link-hover`: #00474f _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--color-warning-hover`: #ffba18 _(semantic)_
- `--color-warning-on-fill`: #4f3422 _(semantic)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
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
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
