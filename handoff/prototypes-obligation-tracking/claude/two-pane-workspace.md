# Two-pane workspace

Obligation Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/obligation-tracking/

![Two-pane workspace, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/two-pane-workspace.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/two-pane-workspace.phone.png

The frame one view lives in: a rail of parents on the left, and the obligations related to the selected parent on the right. Selecting a row on the left swaps the right pane; nothing else moves.

## Key decisions

- A FIXED FOOTPRINT that never resizes on interaction. Selecting a parent must not make the page jump, and a pane with thirty duties must not grow the viewport — each side scrolls inside its own half, so the rail keeps its place while a long list is read.
- THE RAIL HEADING SAYS WHAT A PARENT IS (Events / In your filter / Events that owe a notice / Why it is in force), so the left column never leaves the reader to infer what it is a list of.
- SELECTION IS A FILLED ROW, never a coloured left border — the house design principles ban that as a status device, and there is no status on this page for it to mean.
- The row reports, it does not act. There is no verb on a rail row; the inbox’s per-notice filing is gone entirely.

## Gotchas

- EVERY DETAIL PANE IS RENDERED AT BUILD TIME, all but the first hidden. The controller only reveals — it never builds. A pane assembled from a template literal would bypass the design system and no gate could see it.
- THE [hidden] ATTRIBUTE LOSES TO AN AUTHOR display RULE. The visible pane rule is guarded with :not([hidden]) or no pane ever hides.
- THE ARROW-KEY LISTENER IS ON THE RAIL, NEVER THE DOCUMENT. A keydown with nothing focused targets the document, and calling closest() on it throws — which silently kills every shortcut on the page.
- Below 60rem the fixed height releases and the page scrolls, or the detail pane is trapped in a short box.

## Done when

- Four workspaces exist, one per view. In the by-event direction they hold 19 rail rows and 19 detail panes between them; in the by-obligation direction, 23 and 23.
- Clicking a rail row marks it aria-selected and reveals only its pane.
- ArrowUp / ArrowDown move the selection and follow focus.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `bcn-swoc` (spoke) · `src/components/bcn/BcnSwObligationCard.astro`
- `bcn-tw` (spoke) · `src/components/bcn/BcnTrackingWorkspace.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_23 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-tw" data-tw-view="all">
  <div class="bcn-tw__side" data-tw-side="event">
    <div class="bcn-tw__panes sidebar" data-gap="md">
      <div class="bcn-tw__rail">
        <h3 class="typography-label-sm bcn-tw__rail-label">Events</h3>
        <ul class="bcn-tw__list" role="listbox" aria-label="Events">
          <li>
            <button
              type="button"
              class="bcn-tw__row"
              role="option"
              aria-selected="true"
              data-tw-pick="obs-ggs"
            >
              <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                      d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                    ></path>
                    <path
                      d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                    ></path></svg></span></span
              ><span class="bcn-tw__row-label"
                >Giant garter snake seen in an irrigation canal at the work edge</span
              ><span class="bcn-tw__row-when">45m ago</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="bcn-tw__row"
              role="option"
              aria-selected="false"
              data-tw-pick="obs-hawk"
            >
              <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                    ></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path></svg></span></span
              ><span class="bcn-tw__row-label"
                >Injured Swainson's hawk recovered near a haul road</span
              ><span class="bcn-tw__row-when">2h ago</span>
            </button>
          </li>
          <!-- …and 4 more like this (<li>) -->
        </ul>
      </div>
      <div class="bcn-tw__detail">
        <section
          class="bcn-tw__pane"
          data-tw-pane="obs-ggs"
          aria-label="Giant garter snake seen in an irrigation canal at the work edge"
        >
          <header class="bcn-tw__pane-head">
            <h3 class="bcn-tw__pane-title">
              Giant garter snake seen in an irrigation canal at the work edge
            </h3>
            <p class="bcn-tw__pane-when">45m ago</p>
            <dl class="bcn-tw__facts">
              <div class="bcn-tw__fact">
                <dt class="typography-label-xs">Source</dt>
                <dd class="typography-body-sm">Observation</dd>
              </div>
              <div class="bcn-tw__fact">
                <dt class="typography-label-xs">Type</dt>
                <dd class="typography-body-sm">Resource</dd>
              </div>
              <!-- …and 5 more like this (<div class="bcn-tw__fact">) -->
            </dl>
          </header>
          <div class="bcn-tw__verbs">
            <span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-tw-expand="true"
              >
                <span class="esa-button__label"
                  ><span class="bcn-tw__verb"
                    ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path></svg></span
                    >Expand all</span
                  ></span
                >
              </button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-tw-collapse="true"
              >
                <span class="esa-button__label"
                  ><span class="bcn-tw__verb"
                    ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="m7 20 5-5 5 5"></path>
                        <path d="m7 4 5 5 5-5"></path></svg></span
                    >Collapse all</span
                  ></span
                >
              </button></span
            >
          </div>
          <ul class="bcn-tw__duties">
            <li
              class="bcn-swoc"
              data-swo-card=""
              data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEH"
              data-class="adhere"
              draggable="false"
            >
              <details class="bcn-swoc__node" data-swo-branch="">
                <summary class="bcn-swoc__main">
                  <span class="bcn-swoc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                  ><span
                    class="bcn-swoc__title bcn-swoc__title--static"
                    data-swo-text="Avoidance Measures in Unmapped Habitat"
                    >Avoidance Measures in Unmapped Habitat</span
                  ><span data-swo-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 requirements">2</span></span
                  >
                </summary>
                <ul class="bcn-swoc__reqs">
                  <li
                    class="bcn-swoc__req"
                    draggable="false"
                    data-req="req_01M2ESMEQGNEXHJ6WJ7QGSE8T9"
                    data-code="COA 10.7"
                  >
                    <span class="bcn-cbadge bcn-cbadge--sm">COA 10.7</span
                    ><span
                      class="bcn-swoc__req-name"
                      data-swo-text="Apply Avoidance Measures to Unmapped Species Occurrences"
                      >Apply Avoidance Measures to Unmapped Species Occurrences</span
                    >
                  </li>
                  <li
                    class="bcn-swoc__req"
                    draggable="false"
                    data-req="req_01M2ESMES8P77HCP3S39H7JS59"
                    data-code="COA 10.8"
                  >
                    <span class="bcn-cbadge bcn-cbadge--sm">COA 10.8</span
                    ><span
                      class="bcn-swoc__req-name"
                      data-swo-text="Apply Avoidance Measures to Unmapped Suitable Habitat"
                      >Apply Avoidance Measures to Unmapped Suitable Habitat</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-swoc"
              data-swo-card=""
              data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
              data-class="adhere"
              draggable="false"
            >
              <details class="bcn-swoc__node" data-swo-branch="">
                <summary class="bcn-swoc__main">
                  <span class="bcn-swoc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                  ><span
                    class="bcn-swoc__title bcn-swoc__title--static"
                    data-swo-text="Work Stoppage on Covered Species Encounter"
                    >Work Stoppage on Covered Species Encounter</span
                  ><span data-swo-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                  >
                </summary>
                <ul class="bcn-swoc__reqs">
                  <li
                    class="bcn-swoc__req"
                    draggable="false"
                    data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                    data-code="COA 11.1"
                  >
                    <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                    ><span
                      class="bcn-swoc__req-name"
                      data-swo-text="Report Covered Species Encounters and Halt Work"
                      >Report Covered Species Encounters and Halt Work</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <!-- …and 3 more like this (<li class="bcn-swoc">) -->
          </ul>
        </section>
        <section
          class="bcn-tw__pane"
          data-tw-pane="obs-hawk"
          hidden=""
          aria-label="Injured Swainson's hawk recovered near a haul road"
        >
          <header class="bcn-tw__pane-head">
            <h3 class="bcn-tw__pane-title">Injured Swainson's hawk recovered near a haul road</h3>
            <p class="bcn-tw__pane-when">2h ago</p>
            <dl class="bcn-tw__facts">
              <div class="bcn-tw__fact">
                <dt class="typography-label-xs">Source</dt>
                <dd class="typography-body-sm">Observation</dd>
              </div>
              <div class="bcn-tw__fact">
                <dt class="typography-label-xs">Type</dt>
                <dd class="typography-body-sm">Compliance Concern</dd>
              </div>
              <!-- …and 4 more like this (<div class="bcn-tw__fact">) -->
            </dl>
          </header>
          <div class="bcn-tw__verbs">
            <span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-tw-expand="true"
              >
                <span class="esa-button__label"
                  ><span class="bcn-tw__verb"
                    ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path></svg></span
                    >Expand all</span
                  ></span
                >
              </button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-tw-collapse="true"
              >
                <span class="esa-button__label"
                  ><span class="bcn-tw__verb"
                    ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="m7 20 5-5 5 5"></path>
                        <path d="m7 4 5 5 5-5"></path></svg></span
                    >Collapse all</span
                  ></span
                >
              </button></span
            >
          </div>
          <ul class="bcn-tw__duties">
            <li
              class="bcn-swoc"
              data-swo-card=""
              data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFW"
              data-class="adhere"
              draggable="false"
            >
              <details class="bcn-swoc__node" data-swo-branch="">
                <summary class="bcn-swoc__main">
                  <span class="bcn-swoc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                  ><span
                    class="bcn-swoc__title bcn-swoc__title--static"
                    data-swo-text="Care of covered species injured by covered activities"
                    >Care of covered species injured by covered activities</span
                  ><span data-swo-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                  >
                </summary>
                <ul class="bcn-swoc__reqs">
                  <li
                    class="bcn-swoc__req"
                    draggable="false"
                    data-req="req_01M2ESMHV7XKMQW8P8NFN047XX"
                    data-code="COA 11.2"
                  >
                    <span class="bcn-cbadge bcn-cbadge--sm">COA 11.2</span
                    ><span
                      class="bcn-swoc__req-name"
                      data-swo-text="Transport Injured Covered Species to Rehabilitation Facility"
                      >Transport Injured Covered Species to Rehabilitation Facility</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-swoc"
              data-swo-card=""
              data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
              data-class="adhere"
              draggable="false"
            >
              <details class="bcn-swoc__node" data-swo-branch="">
                <summary class="bcn-swoc__main">
                  <span class="bcn-swoc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                  ><span
                    class="bcn-swoc__title bcn-swoc__title--static"
                    data-swo-text="Work Stoppage on Covered Species Encounter"
                    >Work Stoppage on Covered Species Encounter</span
                  ><span data-swo-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                  >
                </summary>
                <ul class="bcn-swoc__reqs">
                  <li
                    class="bcn-swoc__req"
                    draggable="false"
                    data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                    data-code="COA 11.1"
                  >
                    <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                    ><span
                      class="bcn-swoc__req-name"
                      data-swo-text="Report Covered Species Encounters and Halt Work"
                      >Report Covered Species Encounters and Halt Work</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <!-- …and 3 more like this (<li class="bcn-swoc">) -->
          </ul>
        </section>
        <!-- …and 4 more like this (<section class="bcn-tw__pane">) -->
      </div>
    </div>
  </div>
</div>
```

## Styles

```css
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
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
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-swoc,
.bcn-loc {
  --_req-indent: 22px;
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.8125rem;
  list-style: none;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-swoc:hover,
.bcn-loc:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swoc[hidden],
.bcn-loc[hidden] {
  display: none;
}
.bcn-swoc.is-new,
.bcn-loc.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
}
.bcn-swoc__node,
.bcn-loc__node {
  min-width: 0;
}
.bcn-swoc__main,
.bcn-loc__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  cursor: pointer;
  border-radius: 6px;
  min-width: 0;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swoc__main::-webkit-details-marker,
.bcn-loc__main::-webkit-details-marker {
  display: none;
}
.bcn-swoc__main:hover,
.bcn-loc__main:hover {
  background: var(--color-background-default);
}
.bcn-swoc__main:focus-visible,
.bcn-loc__main:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
details[open] > .bcn-swoc__main,
details[open] > .bcn-loc__main {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bcn-swoc__chevron,
.bcn-loc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > summary .bcn-swoc__chevron,
details[open] > summary .bcn-loc__chevron {
  transform: rotate(90deg);
}
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class,
.bcn-ci-chip {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"],
.bcn-ci-chip[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"],
.bcn-ci-chip[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"],
.bcn-ci-chip[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-ci-chip[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"],
.bcn-lob[data-class="action"],
.bcn-ci-chip[data-class="action"] {
  --_hue: var(--color-action);
}
.bcn-swoc__title,
.bcn-loc__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  min-width: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  border: none;
  flex: 1;
  padding: 0;
  font-weight: 500;
  overflow: hidden;
}
.bcn-swoc__title:hover,
.bcn-loc__title:hover {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-swoc__title:focus-visible,
.bcn-loc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-swoc esa-tooltip,
.bcn-loc esa-tooltip {
  display: inline-flex;
}
.bcn-swoc__main:hover .bcn-swoc__verb,
.bcn-swoc__req:hover .bcn-swoc__verb,
.bcn-swoc__verb:focus-visible,
.bcn-loc__main:hover .bcn-loc__verb,
.bcn-loc__verb:focus-visible {
  opacity: 1;
}
.bcn-swoc__reqs,
.bcn-loc__reqs,
.bcn-ciitem__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150) calc(var(--spacing-300) + var(--_req-indent));
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__req,
.bcn-loc__req,
.bcn-ciitem__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 28px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  display: flex;
}
.bcn-swoc__req:hover,
.bcn-loc__req:hover {
  background: var(--color-background-default);
}
.bcn-swoc__req-name,
.bcn-loc__req-name,
.bcn-ciitem__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
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
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
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
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
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
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
.esa-button__label {
  white-space: nowrap;
}
.bcn-tw__side:not([hidden]) {
  display: block;
}
.bcn-tw__panes {
  --sidebar-width: 22rem;
  --sidebar-content-min: 50%;
  align-items: stretch;
}
.bcn-tw__rail,
.bcn-tw__detail {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-md);
  block-size: 38rem;
  min-block-size: 0;
  overflow: hidden;
}
.bcn-tw__rail {
  flex-direction: column;
  display: flex;
}
.bcn-tw__rail-label {
  padding: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  flex: none;
  margin: 0;
}
.bcn-tw__list {
  flex: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
}
.bcn-tw__row {
  align-items: baseline;
  gap: var(--spacing-050) var(--spacing-200);
  inline-size: 100%;
  padding: var(--spacing-300);
  border: none;
  border-block-end: 1px solid var(--color-border-default-subtle);
  text-align: start;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  grid-template-columns: auto 1fr auto;
  display: grid;
}
.bcn-tw__row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-tw__row:focus-visible {
  outline: 2px solid var(--color-border-default-focus);
  outline-offset: -2px;
}
.bcn-tw__row[aria-selected="true"] {
  background: var(--color-background-elevation-sunken);
}
.bcn-tw__row[aria-selected="true"] .bcn-tw__row-label {
  font-weight: 600;
}
.bcn-tw__row-glyph {
  color: var(--color-content-default-tertiary);
  grid-column: 1;
}
.bcn-tw__row-label {
  text-overflow: ellipsis;
  white-space: nowrap;
  grid-column: 2;
  min-width: 0;
  line-height: 1.4;
  overflow: hidden;
}
.bcn-tw__row-when {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  grid-column: 3;
}
.bcn-tw__detail {
  overflow-y: auto;
}
.bcn-tw__pane:not([hidden]) {
  display: block;
}
.bcn-tw__pane-head {
  padding: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-tw__pane-title {
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.35;
}
.bcn-tw__pane-when {
  margin: var(--spacing-050) 0 0;
  color: var(--color-content-default-tertiary);
}
.bcn-tw__facts {
  gap: var(--spacing-200) var(--spacing-500);
  margin: var(--spacing-300) 0 0;
  flex-wrap: wrap;
  display: flex;
}
.bcn-tw__fact {
  min-width: 0;
  max-inline-size: 100%;
}
.bcn-tw__verbs {
  justify-content: flex-end;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-400) 0;
  display: flex;
}
.bcn-tw__verb {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-tw__duties {
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400) var(--spacing-400);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-tw__fact dt {
  color: var(--color-content-default-tertiary);
}
.bcn-tw__fact dd {
  margin: var(--spacing-050) 0 0;
  color: var(--color-content-default);
}
@media (width<=60rem) {
  .bcn-tw__rail,
  .bcn-tw__detail {
    block-size: auto;
    max-block-size: 30rem;
  }
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.bcn-swcb {
  min-width: 22px;
  padding: 2px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  font-family: var(--typography-font-family-sans);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
}
.bcn-swoc__title--static {
  cursor: default;
  text-align: left;
}
.bcn-swoc.is-dragging {
  opacity: 0.4;
}
.bcn-swoc__main.is-over {
  box-shadow: inset 0 0 0 2px var(--color-obligation);
  background: color-mix(in srgb, var(--color-obligation) 6%, transparent);
}
.bcn-swoc__reqs:empty:after {
  content: "No requirements — drop one here or remove this obligation.";
  padding: var(--spacing-100) var(--spacing-200);
  color: var(--color-content-default-tertiary);
  font-style: italic;
  display: block;
}
.bcn-swoc__req.is-dragging {
  opacity: 0.4;
}
.bcn-swoc__req.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
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
.sidebar {
  --gap: var(--spacing-500, 1.5rem);
  --sidebar-width: 18rem;
  --sidebar-content-min: 60%;
  gap: var(--gap);
  flex-wrap: wrap;
  display: flex;
}
.sidebar > :first-child {
  flex-basis: var(--sidebar-width);
  flex-grow: 1;
}
.sidebar > :last-child {
  min-inline-size: var(--sidebar-content-min);
  flex-grow: 999;
  flex-basis: 0;
}
.sidebar[data-side="end"] > :first-child {
  order: 2;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-focus` | `#3e9b4f` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-line-height` | `1.6` | semantic |
| `--typography-label-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-label-xs-font-weight` | `500` | semantic |
| `--typography-label-xs-letter-spacing` | `.01em` | semantic |
| `--typography-label-xs-line-height` | `1.6` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
