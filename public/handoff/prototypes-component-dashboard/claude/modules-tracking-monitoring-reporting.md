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
              <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
              <path d="M4 6h.01"></path>
              <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
              <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
              <path d="M12 18h.01"></path>
              <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
              <circle cx="12" cy="12" r="2"></circle>
              <path d="m13.41 10.59 5.66-5.66"></path>
            </svg>
          </span>
        </span>
        <span class="bcn-mod__name">Tracking</span>
      </div>
      <div class="bcn-mod__rollup">
        <div class="esa-stat">
          <div class="esa-stat__value">0</div>
          <div class="esa-stat__label">Overdue</div>
        </div>
        <div class="esa-stat">
          <div class="esa-stat__value">1</div>
          <div class="esa-stat__label">Due in 14 days</div>
        </div>
      </div>
      <ul class="bcn-mod__actions">
        <li>
          <a
            class="bcn-mod__action"
            href="/beacon-design/prototypes/data-catalog-action"
            data-urgency="due-soon"
          >
            <span class="bcn-mod__dot" aria-hidden="true"></span>
            <span class="bcn-mod__action-body">
              <span class="bcn-mod__action-name">
                <span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span> Cultural resources
                worker training
              </span>
              <span class="bcn-mod__action-meta"
                >Bouldin Island Launch Shaft · Due Mar 30</span
              >
            </span>
          </a>
        </li>
      </ul>
      <nav class="bcn-mod__links" aria-label="Tracking surfaces">
        <a class="bcn-mod__link" href="/beacon-design/prototypes/requirement-tracker">
          Component Tracker
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span> </a
        ><a class="bcn-mod__link" href="#action-lists">
          Action Lists
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </a>
      </nav>
      <span class="bcn-mod__open"
        >Open Tracking
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </span>
    </div>
    <div class="bcn-mod__card" id="monitoring">
      <a
        class="bcn-mod__portal"
        href="/beacon-design/prototypes/monitoring/dashboard"
        aria-label="Open Monitoring"
      ></a>
      <div class="bcn-mod__head">
        <span class="bcn-mod__glyph"
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
              <path
                d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
              ></path>
              <circle cx="12" cy="8" r="2"></circle>
              <path
                d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
              ></path>
            </svg>
          </span>
        </span>
        <span class="bcn-mod__name">Monitoring</span>
      </div>
      <div class="bcn-mod__rollup">
        <div class="esa-stat">
          <div class="esa-stat__value">1</div>
          <div class="esa-stat__label">Overdue</div>
        </div>
        <div class="esa-stat">
          <div class="esa-stat__value">0</div>
          <div class="esa-stat__label">Due in 14 days</div>
        </div>
      </div>
      <ul class="bcn-mod__actions">
        <li>
          <a
            class="bcn-mod__action"
            href="/beacon-design/prototypes/monitoring/dashboard"
            data-urgency="overdue"
          >
            <span class="bcn-mod__dot" aria-hidden="true"></span>
            <span class="bcn-mod__action-body">
              <span class="bcn-mod__action-name">
                <span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span> Nesting-bird
                preconstruction survey
              </span>
              <span class="bcn-mod__action-meta"
                >Bouldin Island Launch Shaft · 1d overdue</span
              >
            </span>
          </a>
        </li>
      </ul>
      <nav class="bcn-mod__links" aria-label="Monitoring surfaces">
        <a class="bcn-mod__link" href="/beacon-design/prototypes/monitoring/dashboard">
          Observations
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span> </a
        ><a class="bcn-mod__link" href="/beacon-design/prototypes/monitoring/surveys">
          Surveys
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span> </a
        ><a class="bcn-mod__link" href="/beacon-design/prototypes/site-clearance">
          Site Clearance
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </a>
      </nav>
      <span class="bcn-mod__open"
        >Open Monitoring
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </span>
    </div>
    <div class="bcn-mod__card" id="reporting">
      <a class="bcn-mod__portal" href="#report-center" aria-label="Open Reporting"></a>
      <div class="bcn-mod__head">
        <span class="bcn-mod__glyph"
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
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path
                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
              ></path>
              <path d="M12 11h4"></path>
              <path d="M12 16h4"></path>
              <path d="M8 11h.01"></path>
              <path d="M8 16h.01"></path>
            </svg>
          </span>
        </span>
        <span class="bcn-mod__name">Reporting</span>
      </div>
      <div class="bcn-mod__rollup">
        <div class="esa-stat">
          <div class="esa-stat__value">0</div>
          <div class="esa-stat__label">Overdue</div>
        </div>
        <div class="esa-stat">
          <div class="esa-stat__value">0</div>
          <div class="esa-stat__label">Due in 14 days</div>
        </div>
      </div>
      <nav class="bcn-mod__links" aria-label="Reporting surfaces">
        <a class="bcn-mod__link" href="#report-center">
          Report Center
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </a>
      </nav>
      <span class="bcn-mod__open"
        >Open Reporting
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </span>
    </div>
  </div>
</section>
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
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
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
.bcn-tl__pop .bcn-cbadge {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  font-size: 0.75rem;
  padding: 1px var(--spacing-150);
}
.bcn-mod__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-400);
}
.bcn-mod__card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.bcn-mod__card:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-50, 0 1px 4px 0 rgba(0, 0, 0, 0.05));
}
.bcn-mod__portal {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-300);
}
.bcn-mod__portal:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: -2px;
}
.bcn-mod__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-mod__glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: var(--radius-200);
  background: var(--color-surface-sunken);
  color: var(--color-text-secondary);
}
.bcn-mod__name {
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-mod__rollup {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-300) var(--spacing-500);
  padding-bottom: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-light);
  --stat-value-size: var(--type-size-400);
  --stat-label-size: var(--type-size-150);
  --stat-label-color: var(--color-text-tertiary);
}
.bcn-mod__actions {
  position: relative;
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-mod__action {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-200);
  text-decoration: none;
  color: inherit;
}
.bcn-mod__dot {
  width: 9px;
  height: 9px;
  margin-top: 5px;
  border-radius: var(--radius-full);
  background: var(--color-border-strong);
  flex-shrink: 0;
}
[data-urgency="overdue"] .bcn-mod__dot {
  background: var(--color-danger);
}
[data-urgency="due-soon"] .bcn-mod__dot {
  background: var(--color-warning);
}
.bcn-mod__action-body {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}
.bcn-mod__action-name {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}
.bcn-mod__action:hover .bcn-mod__action-name {
  color: var(--color-primary);
}
.bcn-mod__action-name .bcn-cbadge {
  margin-right: var(--spacing-150);
}
.bcn-mod__action-meta {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-mod__more {
  position: relative;
  z-index: 1;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
}
.bcn-mod__more:hover {
  color: var(--color-primary);
}
.bcn-mod__links {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-light);
}
.bcn-mod__link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  align-self: flex-start;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
}
.bcn-mod__link:hover {
  color: var(--color-primary);
}
.bcn-mod__link .esa-icon {
  color: var(--color-text-muted);
}
.bcn-mod__open {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  margin-top: auto;
  padding-top: var(--spacing-200);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}
.bcn-mod__card:hover .bcn-mod__open {
  color: var(--color-primary-hover);
}
.bcn-sw__head .esa-icon {
  color: var(--color-text-secondary);
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
.bcn-cbadge {
  display: inline-block;
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
}
.bcn-cbadge--md {
  font-size: var(--type-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  font-size: 0.75rem;
  padding: 1px var(--spacing-150);
}
.bcn-cbadge--neutral {
  font-family: var(--font-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-text-primary, #171717));
  --_stat-value-font: var(
    --stat-value-font,
    var(--font-display, var(--font-sans, "DM Sans", sans-serif))
  );
  --_stat-value-size: var(--stat-value-size, var(--type-size-700, 2.25rem));
  --_stat-value-weight: var(--stat-value-weight, var(--font-weight-bold, 650));
  --_stat-label-color: var(--stat-label-color, var(--color-text-secondary, #525252));
  --_stat-label-size: var(--stat-label-size, var(--type-size-200, 0.9375rem));
  --_stat-label-weight: var(--stat-label-weight, var(--font-weight-medium, 450));
  --_stat-sub-color: var(--stat-sub-color, var(--color-text-muted, #737373));
  --_stat-sub-size: var(--stat-sub-size, var(--type-size-150, 0.875rem));
  --_stat-accent-color: var(--stat-accent-color, var(--color-secondary-strong, #3a7c59));
  --_stat-gap: var(--stat-gap, var(--spacing-050, 0.125rem));
  display: flex;
  flex-direction: column;
  gap: var(--_stat-gap);
  background: transparent;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  line-height: var(--line-height-tight, 1.3);
  letter-spacing: var(--letter-spacing-tight, -0.01em);
  color: var(--_stat-value-color);
}
.esa-stat--accent .esa-stat__value {
  color: var(--_stat-accent-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  line-height: var(--line-height-normal, 1.6);
  color: var(--_stat-label-color);
}
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  font-weight: var(--font-weight-regular, 350);
  line-height: var(--line-height-normal, 1.6);
  color: var(--_stat-sub-color);
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
- `--color-commitment`: #58508d _(component)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-secondary-strong`: #2a7e3b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-display`: "DM Sans", sans-serif _(primitive)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
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
- `--letter-spacing-tight`: -.01em _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-50`: 0 1px 4px 0 rgba(0, 0, 0, .03) _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
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
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--type-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(primitive)_
