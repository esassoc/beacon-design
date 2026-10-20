# Modules (Tracking / Monitoring / Reporting)

The three work areas as equal cards, each rolling up this component's actions of that type into overdue and due-soon counts plus its most urgent actions as links. Criticality lives inside the module that owns the work — there is no separate "most critical" section, here or on the project dashboard.

## Key decisions
- Rollups are computed by rollupOver(), the SAME function the project dashboard uses, bound to this component's action set. Two implementations of "overdue" would eventually disagree, and urgency has to mean exactly one thing across both dashboards.
- Sub-surface links are component-scoped. Sending a user who is deep in one component out to a project-wide list undoes the scoping the page exists to provide.
- Urgency stays derived from due date over incomplete actions, never stored.

## Gotchas
- Same slice caveat as the project dashboard: the Monitoring rollup needs an observation-to-action relationship that does not exist yet, and Reporting needs report-to-action. Those are data dependencies, not sequencing preferences.
- Section ids are opt-in via idPrefix. This page passes an empty prefix to get bare #tracking / #monitoring / #reporting anchors, because the header pulse rows link to them. Omitting the prop emits no ids at all, preserving the project dashboard markup.

## Done when
- Each module shows counts derived only from this component's actions; the header pulse rows scroll to their module; no action from another component appears.

## Markup
```html
<section class="bcn-mod" id="modules" aria-label="Tracking, Monitoring, and Reporting">
  <div class="bcn-mod__grid">
    <div class="bcn-mod__card" id="tracking">
      <a
        class="bcn-mod__portal"
        href="/beacon-design/prototypes/requirement-tracker"
        aria-label="Open Tracking"
      ></a>
      <div class="bcn-mod__head">
        <span class="bcn-mod__glyph"
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
              <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
              <path d="M4 6h.01"></path>
              <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
              <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
              <path d="M12 18h.01"></path>
              <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
              <circle cx="12" cy="12" r="2"></circle>
              <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
        ><span class="bcn-mod__name">Tracking</span>
      </div>
      <div class="bcn-mod__rollup">
        <div class="esa-stat">
          <div class="esa-stat__value typography-display-sm">0</div>
          <div class="esa-stat__label typography-label-md">Overdue</div>
        </div>
        <div class="esa-stat">
          <div class="esa-stat__value typography-display-sm">1</div>
          <div class="esa-stat__label typography-label-md">Due in 14 days</div>
        </div>
      </div>
      <ul class="bcn-mod__actions">
        <li>
          <a
            class="bcn-mod__action"
            href="/beacon-design/prototypes/data-catalog-action"
            data-urgency="due-soon"
            ><span class="bcn-mod__dot" aria-hidden="true"></span
            ><span class="bcn-mod__action-body"
              ><span class="bcn-mod__action-name"
                ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span>Cultural resources
                worker training</span
              ><span class="bcn-mod__action-meta"
                >Bouldin Island Launch Shaft · Due Mar 30</span
              ></span
            ></a
          >
        </li>
      </ul>
      <nav class="bcn-mod__links" aria-label="Tracking surfaces">
        <a class="bcn-mod__link" href="/beacon-design/prototypes/requirement-tracker"
          >Component Tracker
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
              <path d="m9 18 6-6-6-6"></path></svg></span></a
        ><a class="bcn-mod__link" href="#action-lists"
          >Action Lists
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
              <path d="m9 18 6-6-6-6"></path></svg></span
        ></a>
      </nav>
      <span class="bcn-mod__open"
        >Open Tracking
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
            <path d="m9 18 6-6-6-6"></path></svg></span
      ></span>
    </div>
    <div class="bcn-mod__card" id="monitoring">
      <a
        class="bcn-mod__portal"
        href="/beacon-design/prototypes/monitoring/dashboard"
        aria-label="Open Monitoring"
      ></a>
      <div class="bcn-mod__head">
        <span class="bcn-mod__glyph"
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
                d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
              ></path>
              <circle cx="12" cy="8" r="2"></circle>
              <path
                d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
              ></path></svg></span></span
        ><span class="bcn-mod__name">Monitoring</span>
      </div>
      <div class="bcn-mod__rollup">
        <div class="esa-stat">
          <div class="esa-stat__value typography-display-sm">1</div>
          <div class="esa-stat__label typography-label-md">Overdue</div>
        </div>
        <div class="esa-stat">
          <div class="esa-stat__value typography-display-sm">0</div>
          <div class="esa-stat__label typography-label-md">Due in 14 days</div>
        </div>
      </div>
      <ul class="bcn-mod__actions">
        <li>
          <a
            class="bcn-mod__action"
            href="/beacon-design/prototypes/monitoring/dashboard"
            data-urgency="overdue"
            ><span class="bcn-mod__dot" aria-hidden="true"></span
            ><span class="bcn-mod__action-body"
              ><span class="bcn-mod__action-name"
                ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span>Nesting-bird
                preconstruction survey</span
              ><span class="bcn-mod__action-meta"
                >Bouldin Island Launch Shaft · 1d overdue</span
              ></span
            ></a
          >
        </li>
      </ul>
      <nav class="bcn-mod__links" aria-label="Monitoring surfaces">
        <a class="bcn-mod__link" href="/beacon-design/prototypes/monitoring/dashboard"
          >Observations
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
              <path d="m9 18 6-6-6-6"></path></svg></span></a
        ><a class="bcn-mod__link" href="/beacon-design/prototypes/monitoring/surveys"
          >Surveys
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
              <path d="m9 18 6-6-6-6"></path></svg></span></a
        ><a class="bcn-mod__link" href="/beacon-design/prototypes/site-clearance"
          >Site Clearance
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
              <path d="m9 18 6-6-6-6"></path></svg></span
        ></a>
      </nav>
      <span class="bcn-mod__open"
        >Open Monitoring
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
            <path d="m9 18 6-6-6-6"></path></svg></span
      ></span>
    </div>
    <div class="bcn-mod__card" id="reporting">
      <a class="bcn-mod__portal" href="#report-center" aria-label="Open Reporting"></a>
      <div class="bcn-mod__head">
        <span class="bcn-mod__glyph"
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
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path
                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
              ></path>
              <path d="M12 11h4"></path>
              <path d="M12 16h4"></path>
              <path d="M8 11h.01"></path>
              <path d="M8 16h.01"></path></svg></span></span
        ><span class="bcn-mod__name">Reporting</span>
      </div>
      <div class="bcn-mod__rollup">
        <div class="esa-stat">
          <div class="esa-stat__value typography-display-sm">0</div>
          <div class="esa-stat__label typography-label-md">Overdue</div>
        </div>
        <div class="esa-stat">
          <div class="esa-stat__value typography-display-sm">0</div>
          <div class="esa-stat__label typography-label-md">Due in 14 days</div>
        </div>
      </div>
      <nav class="bcn-mod__links" aria-label="Reporting surfaces">
        <a class="bcn-mod__link" href="#report-center"
          >Report Center
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
              <path d="m9 18 6-6-6-6"></path></svg></span
        ></a>
      </nav>
      <span class="bcn-mod__open"
        >Open Reporting
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
            <path d="m9 18 6-6-6-6"></path></svg></span
      ></span>
    </div>
  </div>
</section>
```

## Styles
```css
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
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
.bcn-tl__pop .bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
  display: inline-block;
}
.bcn-mod__grid {
  gap: var(--spacing-400);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
}
.bcn-mod__card {
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
  display: flex;
  position: relative;
}
.bcn-mod__card:hover {
  border-color: var(--color-border-default-strong);
  box-shadow: var(--elevation-1, 0 1px 4px 0 #0000000d);
}
.bcn-mod__portal {
  border-radius: var(--radius-300);
  position: absolute;
  inset: 0;
}
.bcn-mod__portal:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: -2px;
}
.bcn-mod__head {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-mod__glyph {
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
  width: 34px;
  height: 34px;
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-mod__name {
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-mod__rollup {
  gap: var(--spacing-300) var(--spacing-500);
  padding-bottom: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
  --stat-value-size: var(--font-size-400);
  --stat-label-size: var(--font-size-150);
  --stat-label-color: var(--color-content-default-tertiary);
  flex-wrap: wrap;
  display: flex;
}
.bcn-mod__actions {
  z-index: 1;
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  position: relative;
}
.bcn-mod__action {
  align-items: flex-start;
  gap: var(--spacing-200);
  color: inherit;
  text-decoration: none;
  display: flex;
}
.bcn-mod__dot {
  border-radius: var(--radius-full);
  background: var(--color-border-default-strong);
  flex-shrink: 0;
  width: 9px;
  height: 9px;
  margin-top: 5px;
}
[data-urgency="overdue"] .bcn-mod__dot {
  background: var(--color-background-utility-danger);
}
[data-urgency="due-soon"] .bcn-mod__dot {
  background: var(--color-background-utility-warning);
}
.bcn-mod__action-body {
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  display: flex;
}
.bcn-mod__action-name {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  line-height: var(--line-height-tight);
}
.bcn-mod__action:hover .bcn-mod__action-name {
  color: var(--color-background-brand);
}
.bcn-mod__action-name .bcn-cbadge {
  margin-right: var(--spacing-150);
}
.bcn-mod__action-meta {
  color: var(--color-content-default-tertiary);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8125rem;
  overflow: hidden;
}
.bcn-mod__more {
  z-index: 1;
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  text-decoration: none;
  position: relative;
}
.bcn-mod__more:hover {
  color: var(--color-background-brand);
}
.bcn-mod__links {
  z-index: 1;
  gap: var(--spacing-100);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
  position: relative;
}
.bcn-mod__link {
  align-items: center;
  gap: var(--spacing-100);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  align-self: flex-start;
  text-decoration: none;
  display: inline-flex;
}
.bcn-mod__link:hover {
  color: var(--color-background-brand);
}
.bcn-mod__link .esa-icon {
  color: var(--bcn-content-muted);
}
.bcn-mod__open {
  align-items: center;
  gap: var(--spacing-100);
  padding-top: var(--spacing-200);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  margin-top: auto;
  display: inline-flex;
}
.bcn-mod__card:hover .bcn-mod__open {
  color: var(--color-background-brand-hover);
}
.bcn-sw__head .esa-icon {
  color: var(--color-content-default-secondary);
}
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-content-default, #202020));
  --_stat-value-font: var(
    --typography-font-family-display,
    var(
      --typography-display-sm-font-family,
      var(--typography-font-family-display, "DM Sans", sans-serif)
    )
  );
  --_stat-value-size: var(
    --stat-value-size,
    var(--typography-display-sm-font-size, var(--font-size-700, 2.25rem))
  );
  --_stat-value-weight: var(
    --typography-font-weight-bold,
    var(--typography-display-sm-font-weight, var(--typography-font-weight-bold, 650))
  );
  --_stat-label-color: var(--color-content-default-secondary, #646464);
  --_stat-label-size: var(
    --font-size-200,
    var(--typography-label-md-font-size, var(--font-size-200, 0.9375rem))
  );
  --_stat-label-weight: var(
    --typography-font-weight-medium,
    var(--typography-label-md-font-weight, var(--typography-font-weight-medium, 500))
  );
  --_stat-sub-color: var(--color-content-default-secondary, #646464);
  --_stat-sub-size: var(
    --font-size-150,
    var(--typography-body-sm-font-size, var(--font-size-150, 0.875rem))
  );
  --_stat-accent-color: var(--stat-accent-color, var(--color-content-brand, #2a7e3b));
  --_stat-gap: var(--spacing-050, 0.125rem);
  gap: var(--_stat-gap);
  background: 0 0;
  flex-direction: column;
  display: flex;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  color: var(--_stat-value-color);
}
.esa-stat--accent .esa-stat__value {
  color: var(--_stat-accent-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  color: var(--_stat-label-color);
}
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  color: var(--_stat-sub-color);
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
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--elevation-1`: 0 1px 4px 0 #00000008 _(semantic)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--font-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--stat-accent-color`: #3a7c59 _(component)_
- `--stat-value-color`: #3d3d3d _(component)_
- `--stat-value-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(component)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-display-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-display-sm-font-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(semantic)_
- `--typography-display-sm-font-weight`: 650 _(semantic)_
- `--typography-display-sm-letter-spacing`: -.01em _(semantic)_
- `--typography-display-sm-line-height`: 1.3 _(semantic)_
- `--typography-font-family-display`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
