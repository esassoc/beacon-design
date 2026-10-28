# Ready to break ground?

Project · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracker/projects/coal-creek-fish-passage/

![Ready to break ground?, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-projects-coal-creek-fish-passage/claude/ready-to-break-ground.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-projects-coal-creek-fish-passage/claude/ready-to-break-ground.phone.png

Whether every permit will be issued by construction start: permits issued of total, the expected all-issued date with how many days before or after construction start it falls (a warning icon when after), the construction start, then a Sites table with the same answer site by site.

## Key decisions

- The expected all-issued date is the latest permit forecast: issued date, or submittal plus the median days for that permit type at that agency, or (not yet submitted) its prerequisites' forecasts plus prep time.
- Sites table: a Project-wide row first (the project-wide permits), then each site with its location and its own permits plus the project-wide ones, since those gate every site. Add site and a pencil per site open the site drawer. A site has no agency; each permit on it names its own.
- Issued-of-total and the status counts follow live status changes (Board, Change status) and added permits.
- Editing construction start (Edit project) re-dates every figure and badge.

## Gotchas

- A site with permits cannot be removed; the drawer only offers Remove on an empty site.

## Done when

- Moving a permit to Issued on the Board raises "N of M issued" without a reload.
- A construction start earlier than the expected date shows "N days after construction start" with a warning icon and an At risk badge.

## Components

- `bcn-pr` (spoke) · `src\components\bcn\BcnPermitReadiness.astro`
- `esa-badge` (hub) · `packages\ecology\src\components\esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages\ecology\src\components\esa-badge.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages\ecology\src\components\esa-collapsible.astro`
- `esa-progress-bar` (hub) · `packages\ecology\src\components\esa-progress-bar.astro`
- `esa-stat` (hub) · `packages\ecology\src\components\esa-stat.astro`

## Markup

_2 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-pr stack" data-gap="md" data-bcn-pr="" data-project-id="coal-creek-fish-passage">
  <div class="bcn-pr__figures grid" data-gap="md">
    <div class="stack" data-gap="xs" data-pr-issued="">
      <div class="esa-stat">
        <div class="esa-stat__value typography-display-sm">4 of 10</div>
        <div class="esa-stat__label typography-label-md">Permits issued</div>
      </div>
      <div
        class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--primary"
        role="progressbar"
        aria-valuenow="40"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Permits issued"
      >
        <div class="esa-progress-bar__header typography-body-xs">
          <span class="esa-progress-bar__label typography-label-xs">Permits issued</span>
        </div>
        <div class="esa-progress-bar__track">
          <div class="esa-progress-bar__fill" style="width: 40%"></div>
        </div>
      </div>
    </div>
    <div class="stack" data-gap="2xs" data-pr-expected="">
      <div class="esa-stat">
        <div class="esa-stat__value typography-display-sm">Mar 14, 2027</div>
        <div class="esa-stat__label typography-label-md">Expected all issued</div>
      </div>
      <span class="bcn-pr__vs typography-body-sm" data-pr-vs="" data-tone="early"
        ><span class="bcn-pr__vs-icon" data-icon="late"
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
        ><span class="bcn-pr__vs-icon" data-icon="early"
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
              <path d="m9 12 2 2 4-4"></path></svg></span></span
        ><span data-pr-vs-text="">109 days before construction start</span></span
      >
    </div>
    <div data-pr-start="">
      <div class="esa-stat">
        <div class="esa-stat__value typography-display-sm">Jul 1, 2027</div>
        <div class="esa-stat__label typography-label-md">Construction start</div>
        <div class="esa-stat__sub typography-body-sm">In 251 days</div>
      </div>
    </div>
  </div>
  <section
    class="bcn-pr__sites-block stack"
    data-gap="xs"
    aria-labelledby="bcn-pr-sites-coal-creek-fish-passage"
  >
    <div class="repel" data-gap="sm">
      <h3
        id="bcn-pr-sites-coal-creek-fish-passage"
        class="bcn-pr__subhead typography-label-lg-strong"
      >
        Sites
      </h3>
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-site-edit="true"
        >
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
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path></svg></span
          ><span class="esa-button__label">Add site</span>
        </button></span
      >
    </div>
    <table
      class="bcn-pr__sites typography-body-sm"
      aria-labelledby="bcn-pr-sites-coal-creek-fish-passage"
    >
      <thead>
        <tr>
          <th scope="col">Site</th>
          <th scope="col">Issued</th>
          <!-- …and 2 more like this (<th>) -->
        </tr>
      </thead>
      <tbody data-pr-site-rows="">
        <tr>
          <th scope="row">
            <span class="stack" data-gap="3xs"
              ><span data-cell="name">Project-wide</span
              ><span class="bcn-pr__meta typography-body-sm" data-cell="location"
                >Covers every site</span
              ></span
            >
          </th>
          <td class="bcn-pr__num" data-cell="issued">2 of 4</td>
          <td>
            <span class="stack" data-gap="3xs"
              ><span data-cell="expected">Jan 2, 2027</span
              ><span class="bcn-pr__vs typography-body-sm" data-cell="vs" data-tone="early"
                ><span class="bcn-pr__vs-icon" data-icon="late"
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
                ><span class="bcn-pr__vs-icon" data-icon="early"
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
                      <path d="m9 12 2 2 4-4"></path></svg></span></span
                ><span data-cell="vs-text">180 days before start</span></span
              ></span
            >
          </td>
          <td class="bcn-pr__state">
            <span class="bcn-pr__state-cell cluster" data-gap="xs"
              ><span data-cell="state"
                ><span
                  class="esa-badge esa-badge--success esa-badge--md typography-microcopy-sm-strong"
                  ><span class="esa-badge__text">On track</span></span
                ></span
              ><span class="bcn-pr__edit" data-cell="edit" data-empty=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    aria-label="Edit Project-wide"
                    title="Edit site"
                    data-site-edit="true"
                    data-site-id=""
                  >
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path></svg
                    ></span></button></span></span
            ></span>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <span class="stack" data-gap="3xs"
              ><span data-cell="name">SE 60th St culvert</span
              ><span class="bcn-pr__meta typography-body-sm" data-cell="location"
                >Coal Creek, RM 1.4</span
              ></span
            >
          </th>
          <td class="bcn-pr__num" data-cell="issued">3 of 7</td>
          <td>
            <span class="stack" data-gap="3xs"
              ><span data-cell="expected">Feb 26, 2027</span
              ><span class="bcn-pr__vs typography-body-sm" data-cell="vs" data-tone="early"
                ><span class="bcn-pr__vs-icon" data-icon="late"
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
                ><span class="bcn-pr__vs-icon" data-icon="early"
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
                      <path d="m9 12 2 2 4-4"></path></svg></span></span
                ><span data-cell="vs-text">125 days before start</span></span
              ></span
            >
          </td>
          <td class="bcn-pr__state">
            <span class="bcn-pr__state-cell cluster" data-gap="xs"
              ><span data-cell="state"
                ><span
                  class="esa-badge esa-badge--success esa-badge--md typography-microcopy-sm-strong"
                  ><span class="esa-badge__text">On track</span></span
                ></span
              ><span class="bcn-pr__edit" data-cell="edit"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    aria-label="Edit SE 60th St culvert"
                    title="Edit site"
                    data-site-edit="true"
                    data-site-id="cc-se60"
                  >
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path></svg
                    ></span></button></span></span
            ></span>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <span class="stack" data-gap="3xs"
              ><span data-cell="name">Newport Way crossing</span
              ><span class="bcn-pr__meta typography-body-sm" data-cell="location"
                >Coal Creek, RM 2.9</span
              ></span
            >
          </th>
          <td class="bcn-pr__num" data-cell="issued">3 of 7</td>
          <td>
            <span class="stack" data-gap="3xs"
              ><span data-cell="expected">Mar 14, 2027</span
              ><span class="bcn-pr__vs typography-body-sm" data-cell="vs" data-tone="early"
                ><span class="bcn-pr__vs-icon" data-icon="late"
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
                ><span class="bcn-pr__vs-icon" data-icon="early"
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
                      <path d="m9 12 2 2 4-4"></path></svg></span></span
                ><span data-cell="vs-text">109 days before start</span></span
              ></span
            >
          </td>
          <td class="bcn-pr__state">
            <span class="bcn-pr__state-cell cluster" data-gap="xs"
              ><span data-cell="state"
                ><span
                  class="esa-badge esa-badge--success esa-badge--md typography-microcopy-sm-strong"
                  ><span class="esa-badge__text">On track</span></span
                ></span
              ><span class="bcn-pr__edit" data-cell="edit"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    aria-label="Edit Newport Way crossing"
                    title="Edit site"
                    data-site-edit="true"
                    data-site-id="cc-newport"
                  >
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path></svg
                    ></span></button></span></span
            ></span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <div class="bcn-pr__counts cluster" data-gap="md">
    <ul class="cluster" data-gap="md">
      <li class="bcn-pr__count typography-body-sm">
        <span
          class="bcn-pr__dot"
          style="--_c: var(--bcn-status-not-started)"
          aria-hidden="true"
        ></span
        ><span class="bcn-pr__n" data-pr-count="NotStarted">0</span> Not Started
      </li>
      <li class="bcn-pr__count typography-body-sm">
        <span
          class="bcn-pr__dot"
          style="--_c: var(--bcn-status-in-progress)"
          aria-hidden="true"
        ></span
        ><span class="bcn-pr__n" data-pr-count="InProgress">6</span> In Progress
      </li>
      <li class="bcn-pr__count typography-body-sm">
        <span
          class="bcn-pr__dot"
          style="--_c: var(--bcn-status-completed)"
          aria-hidden="true"
        ></span
        ><span class="bcn-pr__n" data-pr-count="Completed">4</span> Completed
      </li>
    </ul>
    <ul class="bcn-pr__flags cluster" data-gap="md">
      <li class="bcn-pr__count typography-body-sm">
        <span class="bcn-pr__n">2</span> waiting on another permit
      </li>
    </ul>
  </div>
  <div class="bcn-pr__risks stack" data-gap="xs" data-pr-risks="">
    <ul class="bcn-pr__list typography-body-sm" data-pr-risk-lines="">
      <li>3 permits past their typical review time</li>
      <li>3 permits not yet submitted, forecast from past timelines</li>
    </ul>
    <div class="stack" data-gap="2xs" data-pr-expiring="" hidden="">
      <h3 class="bcn-pr__subhead typography-label-md-strong">Expires before construction start</h3>
      <ul class="bcn-pr__list typography-body-sm">
        <li data-expires="2031-04-08" hidden="">
          <a href="/beacon-design/prototypes/permit-tracker/permits/cc1-hpa"
            >Hydraulic Project Approval</a
          ><span class="bcn-pr__meta"> SE 60th St culvert, expires Apr 8, 2031</span>
        </li>
        <li data-expires="2031-05-21" hidden="">
          <a href="/beacon-design/prototypes/permit-tracker/permits/cc2-hpa"
            >Hydraulic Project Approval</a
          ><span class="bcn-pr__meta"> Newport Way crossing, expires May 21, 2031</span>
        </li>
        <li data-expires="2031-08-11" hidden="">
          <a href="/beacon-design/prototypes/permit-tracker/permits/cc-401"
            >Section 401 Water Quality Certification</a
          ><span class="bcn-pr__meta"> Project-wide, expires Aug 11, 2031</span>
        </li>
      </ul>
    </div>
  </div>
</div>
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
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
.typography-label-lg-strong {
  font-family: var(--typography-label-lg-strong-font-family);
  font-size: var(--typography-label-lg-strong-font-size);
  font-weight: var(--typography-label-lg-strong-font-weight);
  line-height: var(--typography-label-lg-strong-line-height);
  letter-spacing: var(--typography-label-lg-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}
.bcn-pr__figures {
  --grid-min: 12rem;
}
.bcn-pr__counts {
  padding-top: var(--spacing-300, 0.75rem);
  border-top: 1px solid var(--color-border-default-subtle, #e8e8e8);
}
.bcn-pr__counts ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-pr__count {
  align-items: center;
  gap: var(--spacing-150, 0.375rem);
  color: var(--color-content-default-secondary, #646464);
  display: inline-flex;
}
.bcn-pr__n {
  font-weight: var(--typography-font-weight-semibold, 600);
  color: var(--color-content-default, #202020);
  font-variant-numeric: tabular-nums;
}
.bcn-pr__dot {
  border-radius: var(--radius-full, 9999px);
  background: var(--_c);
  flex-shrink: 0;
  width: 9px;
  height: 9px;
}
.bcn-pr__sites {
  border-collapse: collapse;
  inline-size: 100%;
  color: var(--color-content-default);
}
.bcn-pr__sites-block {
  padding-top: var(--spacing-300, 0.75rem);
  border-top: 1px solid var(--color-border-default-subtle, #e8e8e8);
}
.bcn-pr__state-cell {
  flex-wrap: nowrap;
  justify-content: end;
}
.bcn-pr__edit[data-empty] {
  visibility: hidden;
}
.bcn-pr__sites th,
.bcn-pr__sites td {
  text-align: start;
  padding: var(--spacing-150, 0.375rem) var(--spacing-300, 0.75rem) var(--spacing-150, 0.375rem) 0;
  border-bottom: 1px solid var(--color-border-default-subtle, #e8e8e8);
  vertical-align: middle;
}
.bcn-pr__sites thead th {
  font-weight: var(--typography-font-weight-regular, 400);
  color: var(--color-content-default-secondary, #646464);
}
.bcn-pr__sites tbody th {
  font-weight: var(--typography-font-weight-semibold, 600);
}
.bcn-pr__num {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.bcn-pr__state {
  text-align: end;
  padding-inline-end: 0;
}
.bcn-pr__vs {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-pr__vs[data-tone="late"] {
  color: var(--color-content-utility-danger);
  font-weight: var(--typography-font-weight-semibold, 600);
}
.bcn-pr__vs[data-tone="early"] {
  color: var(--color-content-utility-success);
}
.bcn-pr__vs-icon {
  display: none;
}
.bcn-pr__vs[data-tone="late"] [data-icon="late"],
.bcn-pr__vs[data-tone="early"] [data-icon="early"] {
  display: inline-flex;
}
.bcn-pr [hidden] {
  display: none;
}
.bcn-pr__risks {
  padding-top: var(--spacing-300, 0.75rem);
  border-top: 1px solid var(--color-border-default-subtle, #e8e8e8);
}
.bcn-pr__subhead {
  color: var(--color-content-default, #202020);
  margin: 0;
}
.bcn-pr__list {
  padding-left: var(--spacing-500, 1.25rem);
  color: var(--color-content-default, #202020);
  margin: 0;
}
.bcn-pr__list a {
  color: var(--color-content-link, #0d74ce);
}
.bcn-pr__meta {
  color: var(--color-content-default-secondary, #646464);
}
.visually-hidden {
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_badge-text: var(--badge-text-color, var(--color-content-default-secondary, #646464));
  --_badge-border: var(--badge-border-color, var(--color-border-default, #cecece));
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
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
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
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
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
.typography-label-lg-strong {
  font-family: var(--typography-label-lg-strong-font-family);
  font-size: var(--typography-label-lg-strong-font-size);
  font-weight: var(--typography-label-lg-strong-font-weight);
  line-height: var(--typography-label-lg-strong-line-height);
  letter-spacing: var(--typography-label-lg-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.esa-progress-bar {
  --_progress-height: var(--progress-bar-height-md, 8px);
  --_progress-radius: var(--radius-pill, 9999px);
  --_progress-track-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_progress-fill-bg: var(--color-background-brand, #46a758);
  width: 100%;
  display: block;
}
.esa-progress-bar__header {
  margin-bottom: var(--spacing-100, 0.25rem);
  justify-content: space-between;
  align-items: baseline;
  display: flex;
}
.esa-progress-bar__label {
  color: var(--color-content-default, #202020);
}
.esa-progress-bar__track {
  height: var(--_progress-height);
  border-radius: var(--_progress-radius);
  background: var(--_progress-track-bg);
  position: relative;
  overflow: hidden;
}
.esa-progress-bar__fill {
  border-radius: var(--_progress-radius);
  background: var(--_progress-fill-bg);
  height: 100%;
  transition: width 0.3s;
}
.esa-progress-bar--sm {
  --_progress-height: var(--progress-bar-height-sm, 4px);
}
.esa-progress-bar--indeterminate .esa-progress-bar__fill {
  animation: esa-progress-indeterminate var(--animation-indeterminate, 1.5s ease-in-out infinite);
  width: 40% !important;
}
@media (prefers-reduced-motion: reduce) {
  .esa-progress-bar--indeterminate .esa-progress-bar__fill {
    animation: 2s ease-in-out infinite esa-progress-pulse;
    width: 100% !important;
  }
}
@media (prefers-reduced-motion: reduce) {
  .esa-progress-bar__fill {
    transition: none;
  }
}
@media (forced-colors: active) {
  .esa-progress-bar__track {
    background: canvas;
    border: 1px solid canvastext;
  }
}
@media (forced-colors: active) {
  .esa-progress-bar__fill {
    background: highlight;
  }
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
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
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.repel {
  --gap: var(--spacing-400, 1rem);
  --align: center;
  gap: var(--gap);
  align-items: var(--align);
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}
.grid {
  --gap: var(--spacing-400, 1rem);
  --grid-min: 16rem;
  gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-min), 100%), 1fr));
  display: grid;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--animation-indeterminate` | `1.5s ease-in-out infinite` | semantic |
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-success-hover` | `#193b2d` | semantic |
| `--color-background-utility-success-muted` | `#e6f6eb` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-success` | `#adddc0` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |
| `--gap` | `1rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--progress-bar-height-md` | `8px` | component |
| `--progress-bar-height-sm` | `4px` | component |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-pill` | `9999px` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--stat-accent-color` | `#005862` | component |
| `--stat-value-color` | `#3d3d3d` | component |
| `--stat-value-size` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | component |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-body-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-body-xs-font-weight` | `400` | semantic |
| `--typography-body-xs-letter-spacing` | `.01em` | semantic |
| `--typography-body-xs-line-height` | `1.6` | semantic |
| `--typography-display-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-display-sm-font-size` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | semantic |
| `--typography-display-sm-font-weight` | `650` | semantic |
| `--typography-display-sm-letter-spacing` | `-.01em` | semantic |
| `--typography-display-sm-line-height` | `1.3` | semantic |
| `--typography-font-family-display` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-lg-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-lg-strong-font-size` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | semantic |
| `--typography-label-lg-strong-font-weight` | `550` | semantic |
| `--typography-label-lg-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-lg-strong-line-height` | `1.6` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-label-xs-font-weight` | `500` | semantic |
| `--typography-label-xs-letter-spacing` | `.01em` | semantic |
| `--typography-label-xs-line-height` | `1.6` | semantic |
| `--typography-microcopy-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-sm-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-sm-strong-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
