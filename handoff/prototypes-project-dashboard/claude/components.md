# Components

The components the user works in, as portal cards into their component dashboards, each carrying a Tracking / Monitoring / Reporting pulse so a component's health reads across all three at a glance. A PROJECT-WIDE row leads the list, answering the review's question of whether "the project view is inclusive of components or not."

## Key decisions
- The project-wide row uses the same card anatomy with a folder glyph and no star — it is always present and cannot be unstarred. Its pulses count actions with no component.
- Stars are PER-USER — a personal lens, not a team designation (a user-preference keyed user × component).
- For slice 1 the only star affordance is A STAR COLUMN ON THE ALL-COMPONENTS LIST: "I think we could add a star column here for now." The full starring UX belongs to the Component Dashboard epic (BCN-1412).
- A user with no stars should see the most active components rather than an empty section — the homepage centre is never blank.
- No headline row: the three pulses carry the story (an editorial one-liner per component was tried and removed).

## Gotchas
- The two prototypes must agree on the starring model — Component Dashboard (BCN-1412) is queued directly behind this epic and owns the richer starring UX.
- Card text maps to real DTO fields: name → Component.Name, the classifier line → Component.Description, and the trailing status → ComponentStatus.Name shown only when it is not "Active". Do not synthesize prose here.

## Done when
- A project-wide row leads the list, followed by the user's starred components; each card shows three pulses and opens that component's dashboard; stars are visible per-user and can be set from the all-components list.

## Markup
```html
<section class="bcn-stc" aria-label="Components">
  <header class="bcn-stc__head">
    <!-- No lede — the starred cards and their pulses are self-describing
         (data-grounded review, 2026-08-03). -->
    <div class="bcn-stc__headings">
      <h2 class="bcn-stc__title type-section-title">Components</h2>
    </div>
    <a class="bcn-stc__all" href="/beacon-design/prototypes/component-dashboard"
      >All 24 components
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
  </header>
  <div class="bcn-stc__list">
    <div class="bcn-stc__card bcn-stc__card--scope">
      <a
        class="bcn-stc__portal"
        href="/beacon-design/prototypes/requirement-tracker"
        aria-label="Open project-scoped tracking"
      ></a>
      <div class="bcn-stc__main">
        <div class="bcn-stc__card-head">
          <span class="bcn-stc__glyph bcn-stc__glyph--scope"
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
                  d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z"
                ></path>
                <path d="M2 8v11a2 2 0 0 0 2 2h14"></path>
              </svg>
            </span>
          </span>
          <span class="bcn-stc__ident">
            <span class="bcn-stc__name">Project-wide</span>
            <!-- The identity line is the project record itself — the component
                 rows carry Component.Description in this slot, so this one
                 carries Project.Name rather than a definition of the scope. -->
            <span class="bcn-stc__type">Delta Conveyance Project</span>
          </span>
        </div>
      </div>
      <ul class="bcn-stc__pulse">
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-warning)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Tracking</span>
          <span class="bcn-stc__pulse-note">2 actions · 1 overdue</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--bcn-status-not-started)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Monitoring</span>
          <span class="bcn-stc__pulse-note">No actions</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-warning)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Reporting</span>
          <span class="bcn-stc__pulse-note">4 actions · 1 overdue</span>
        </li>
      </ul>
    </div>
    <div class="bcn-stc__card">
      <a
        class="bcn-stc__portal"
        href="/beacon-design/prototypes/component-dashboard"
        aria-label="Open the Bouldin Island Launch Shaft component dashboard"
      ></a>
      <span class="bcn-stc__star" data-star-toggle="">
        <span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Unstar Bouldin Island Launch Shaft"
            title="Unstar Bouldin Island Launch Shaft"
            aria-pressed="true"
          >
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
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                ></path>
              </svg>
            </span></button
        ></span>
      </span>
      <div class="bcn-stc__main">
        <div class="bcn-stc__card-head">
          <span class="bcn-stc__glyph"
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
                  d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                ></path>
                <path d="M3.29 7 12 12l8.71-5"></path>
                <path d="M12 22V12"></path>
              </svg>
            </span>
          </span>
          <span class="bcn-stc__ident">
            <span class="bcn-stc__name">Bouldin Island Launch Shaft</span>
            <span class="bcn-stc__type"> Tunnel launch shaft — Bouldin Island </span>
          </span>
        </div>
      </div>
      <ul class="bcn-stc__pulse">
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-warning)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Tracking</span>
          <span class="bcn-stc__pulse-note">3 overdue actions</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-danger)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Monitoring</span>
          <span class="bcn-stc__pulse-note">Survey expired Mar 24</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-success)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Reporting</span>
          <span class="bcn-stc__pulse-note">Nothing due</span>
        </li>
      </ul>
    </div>
    <div class="bcn-stc__card">
      <a
        class="bcn-stc__portal"
        href="/beacon-design/prototypes/component-dashboard"
        aria-label="Open the Intake B — North Delta component dashboard"
      ></a>
      <span class="bcn-stc__star" data-star-toggle="">
        <span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Unstar Intake B — North Delta"
            title="Unstar Intake B — North Delta"
            aria-pressed="true"
          >
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
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                ></path>
              </svg>
            </span></button
        ></span>
      </span>
      <div class="bcn-stc__main">
        <div class="bcn-stc__card-head">
          <span class="bcn-stc__glyph"
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
                  d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                ></path>
                <path d="M3.29 7 12 12l8.71-5"></path>
                <path d="M12 22V12"></path>
              </svg>
            </span>
          </span>
          <span class="bcn-stc__ident">
            <span class="bcn-stc__name">Intake B — North Delta</span>
            <span class="bcn-stc__type"> Screened intake — Sacramento River </span>
          </span>
        </div>
      </div>
      <ul class="bcn-stc__pulse">
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-warning)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Tracking</span>
          <span class="bcn-stc__pulse-note">1 overdue action</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-success)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Monitoring</span>
          <span class="bcn-stc__pulse-note">6 obs · 30d</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-success)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Reporting</span>
          <span class="bcn-stc__pulse-note">Nothing due</span>
        </li>
      </ul>
    </div>
    <div class="bcn-stc__card">
      <a
        class="bcn-stc__portal"
        href="/beacon-design/prototypes/component-dashboard"
        aria-label="Open the Southern Forebay &amp; Pumping Plant component dashboard"
      ></a>
      <span class="bcn-stc__star" data-star-toggle="">
        <span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Unstar Southern Forebay &amp; Pumping Plant"
            title="Unstar Southern Forebay &amp; Pumping Plant"
            aria-pressed="true"
          >
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
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                ></path>
              </svg>
            </span></button
        ></span>
      </span>
      <div class="bcn-stc__main">
        <div class="bcn-stc__card-head">
          <span class="bcn-stc__glyph"
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
                  d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                ></path>
                <path d="M3.29 7 12 12l8.71-5"></path>
                <path d="M12 22V12"></path>
              </svg>
            </span>
          </span>
          <span class="bcn-stc__ident">
            <span class="bcn-stc__name">Southern Forebay &amp; Pumping Plant</span>
            <span class="bcn-stc__type"> Forebay — Byron Tract </span>
          </span>
        </div>
      </div>
      <ul class="bcn-stc__pulse">
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-success)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Tracking</span>
          <span class="bcn-stc__pulse-note">22 / 30 actions</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-success)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Monitoring</span>
          <span class="bcn-stc__pulse-note">11 obs · 30d</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-warning)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Reporting</span>
          <span class="bcn-stc__pulse-note">Due in 7 days · Apr 1</span>
        </li>
      </ul>
    </div>
    <div class="bcn-stc__card">
      <a
        class="bcn-stc__portal"
        href="/beacon-design/prototypes/component-dashboard"
        aria-label="Open the Twin Cities Complex component dashboard"
      ></a>
      <span class="bcn-stc__star" data-star-toggle="">
        <span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Unstar Twin Cities Complex"
            title="Unstar Twin Cities Complex"
            aria-pressed="true"
          >
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
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                ></path>
              </svg>
            </span></button
        ></span>
      </span>
      <div class="bcn-stc__main">
        <div class="bcn-stc__card-head">
          <span class="bcn-stc__glyph"
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
                  d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                ></path>
                <path d="M3.29 7 12 12l8.71-5"></path>
                <path d="M12 22V12"></path>
              </svg>
            </span>
          </span>
          <span class="bcn-stc__ident">
            <span class="bcn-stc__name">Twin Cities Complex</span>
            <span class="bcn-stc__type"> Tunnel shaft — staging · On Hold </span>
          </span>
        </div>
      </div>
      <ul class="bcn-stc__pulse">
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--bcn-status-not-started)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Tracking</span>
          <span class="bcn-stc__pulse-note">9 / 21 actions</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--bcn-status-not-started)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Monitoring</span>
          <span class="bcn-stc__pulse-note">2 obs · 30d</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--bcn-status-not-started)"
            aria-hidden="true"
          ></span>
          <span class="bcn-stc__pulse-area">Reporting</span>
          <span class="bcn-stc__pulse-note">Nothing due</span>
        </li>
      </ul>
    </div>
  </div>
</section>
```

## Styles
```css
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbbbbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled) {
  background: var(--_accent-hover);
}
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbbbbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  background: transparent;
  color: var(--color-content-default, #202020);
  border-color: transparent;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  background: transparent;
  color: inherit;
  border-color: transparent;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  list-style: none;
  cursor: pointer;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.esa-button__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
}
.bcn-mod__link .esa-icon {
  color: var(--color-text-muted);
}
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
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.type-section-title {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.bcn-stc {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-stc__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--spacing-400);
  flex-wrap: wrap;
}
.bcn-stc__headings {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
  min-width: 0;
}
.bcn-stc__title {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-stc__lede {
  margin: 0;
  color: var(--color-text-secondary);
  max-width: 68ch;
}
.bcn-stc__all {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  white-space: nowrap;
}
.bcn-stc__all:hover {
  color: var(--color-primary-hover);
}
.bcn-stc__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-stc__card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  align-items: center;
  gap: var(--spacing-500);
  padding: var(--spacing-400) var(--spacing-500);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
}
.bcn-stc__portal {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-300);
}
.bcn-stc__portal:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: -2px;
}
.bcn-stc__star {
  position: absolute;
  top: var(--spacing-200);
  right: var(--spacing-200);
  z-index: 1;
}
.bcn-stc__star button[aria-pressed="true"] {
  color: var(--color-warning);
}
.bcn-stc__star button[aria-pressed="true"] svg {
  fill: currentColor;
}
.bcn-stc__card:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-100, 0 2px 12px 0 rgba(0, 0, 0, 0.06));
  transform: translateY(-1px);
}
.bcn-stc__main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  min-width: 0;
  padding-right: var(--spacing-500);
  border-right: 1px solid var(--color-border-light);
}
.bcn-stc__card-head {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-300);
}
.bcn-stc__glyph--scope {
  background: var(--color-surface-sunken) !important;
  color: var(--color-text-secondary) !important;
}
.bcn-stc__glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: var(--radius-200);
  background: color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
  color: var(--color-primary);
}
.bcn-stc__ident {
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.bcn-stc__name {
  font-size: var(--type-size-250, 1.0625rem);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}
.bcn-stc__type {
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-stc__dot {
  width: 9px;
  height: 9px;
  border-radius: var(--radius-full);
  background: var(--_c);
  flex-shrink: 0;
}
.bcn-stc__pulse {
  list-style: none;
  margin: 0;
  padding: 0 var(--spacing-600) 0 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-stc__pulse {
  padding: var(--spacing-300) 0 0;
  border-top: 1px solid var(--color-border-light);
}
.bcn-stc__pulse-row {
  display: grid;
  grid-template-columns: auto 6rem 1fr;
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-stc__pulse-area {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-stc__pulse-note {
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
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
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
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
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #ffffff _(component)_
- `--button-radius-lg`: .5rem _(component)_
- `--button-radius-md`: .5rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #a18072 _(semantic)_
- `--color-background-ai-hover`: #957468 _(semantic)_
- `--color-background-brand`: #46a758 _(semantic)_
- `--color-background-brand-hover`: #3e9b4f _(semantic)_
- `--color-background-brand-muted`: #e9f6e9 _(semantic)_
- `--color-background-brand-muted-hover`: #daf1db _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #f0f0f0 _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #0d74ce _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #218358 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #ffc53d _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border`: #dcdcdc _(component)_
- `--color-border-default`: #cecece _(semantic)_
- `--color-border-default-strong`: #bbbbbb _(semantic)_
- `--color-border-light`: #efefef _(component)_
- `--color-border-strong`: #bdbdbd _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #2a7e3b _(semantic)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-primary`: #005862 _(component)_
- `--color-primary-hover`: #00474f _(component)_
- `--color-surface`: #fcfcfc _(component)_
- `--color-surface-sunken`: #efefef _(component)_
- `--color-text-muted`: #7c7c7c _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--color-warning`: #f59e0b _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-100`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(component)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(component)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(component)_
- `--typography-heading-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-heading-md-font-size`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(semantic)_
- `--typography-heading-md-font-weight`: 550 _(semantic)_
- `--typography-heading-md-letter-spacing`: -.01em _(semantic)_
- `--typography-heading-md-line-height`: 1.3 _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
