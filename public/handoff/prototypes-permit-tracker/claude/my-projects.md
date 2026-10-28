# My projects

Projects · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracker/

![My projects, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker/claude/my-projects.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker/claude/my-projects.phone.png

Cards for the active projects the current user is on the team of: client, project no., project manager, construction start, permits issued of total, and what needs attention. A badge says whether the project is on track to have every permit issued by construction start.

## Key decisions

- Membership is the only role: a project team is a list of people, plus the project manager. "My projects" is every active project whose team includes the current user.
- The badge is the readiness state of the whole project: At risk when the expected all-issued date is after construction start or a permit expires before it; All issued; Unconfirmed when a permit has no forecast; otherwise On track. The same rule drives the project page.
- The cards re-read the project store, so an edited client, manager or construction start shows here without a rebuild.

## Gotchas

- An empty state ("You're not on any active projects") points people to All projects, where they can open a project and add themselves to its team.

## Done when

- Removing yourself from a project's team takes its card off My projects; adding yourself brings it back.
- Moving a project's construction start earlier than its expected all-issued date turns its badge to At risk.

## Components

- `bcn-ppl` (spoke) · `src\components\bcn\BcnPermitProjectList.astro`
- `esa-badge` (hub) · `packages\ecology\src\components\esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-card` (hub) · `packages\ecology\src\components\esa-card.astro`
- `esa-empty-state` (hub) · `packages\ecology\src\components\esa-empty-state.astro`
- `esa-progress-bar` (hub) · `packages\ecology\src\components\esa-progress-bar.astro`

## Markup

_8 repeated elements are collapsed in the markup below; the comments say where._

```html
<section
  class="bcn-ppl stack"
  data-gap="sm"
  aria-labelledby="bcn-ppl-my-projects"
  data-bcn-ppl=""
  data-member="Maya Okafor"
>
  <template data-ppl-badge="all-issued"
    ><span
      class="esa-badge esa-badge--success esa-badge--md typography-microcopy-sm-strong"
      data-astro-cid-v3fnotwi=""
      ><span class="esa-badge__text" data-astro-cid-v3fnotwi="">All issued</span></span
    ></template
  ><template data-ppl-badge="on-track"
    ><span
      class="esa-badge esa-badge--success esa-badge--md typography-microcopy-sm-strong"
      data-astro-cid-v3fnotwi=""
      ><span class="esa-badge__text" data-astro-cid-v3fnotwi="">On track</span></span
    ></template
  ><!-- …and 2 more like this (<template>) -->
  <h2 id="bcn-ppl-my-projects" class="bcn-ppl__heading typography-heading-md">My projects</h2>
  <ul class="bcn-ppl__grid grid" data-gap="md">
    <li class="bcn-ppl__item" data-project-id="coal-creek-fish-passage">
      <div class="esa-card esa-card--padding-compact">
        <div class="esa-card__header typography-title-sm-strong">
          <div class="bcn-ppl__head repel" data-gap="sm">
            <div class="bcn-ppl__titles">
              <h3 class="bcn-ppl__name typography-title-sm-strong">
                <a
                  class="bcn-ppl__link"
                  href="/beacon-design/prototypes/permit-tracker/projects/coal-creek-fish-passage"
                  >Coal Creek Fish Passage</a
                >
              </h3>
              <p class="bcn-ppl__client typography-body-sm" data-fact="client">
                Eastside Surface Water Utility
              </p>
            </div>
            <span class="bcn-ppl__state" data-ppl-state=""
              ><span
                class="esa-badge esa-badge--success esa-badge--md typography-microcopy-sm-strong"
                ><span class="esa-badge__text">On track</span></span
              ></span
            >
          </div>
        </div>
        <div class="esa-card__body typography-body-md">
          <div class="stack" data-gap="sm">
            <dl class="bcn-ppl__facts typography-body-sm">
              <div class="bcn-ppl__fact">
                <dt>Project</dt>
                <dd data-fact="number">2025-0417</dd>
              </div>
              <div class="bcn-ppl__fact">
                <dt>Manager</dt>
                <dd data-fact="manager">Maya Okafor</dd>
              </div>
              <!-- …and 2 more like this (<div class="bcn-ppl__fact">) -->
            </dl>
            <div
              class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--primary"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="4 of 10 issued"
            >
              <div class="esa-progress-bar__header typography-body-xs">
                <span class="esa-progress-bar__label typography-label-xs">4 of 10 issued</span>
              </div>
              <div class="esa-progress-bar__track">
                <div class="esa-progress-bar__fill" style="width: 40%"></div>
              </div>
            </div>
            <ul class="bcn-ppl__attention cluster typography-body-sm" data-gap="xs">
              <li><span class="bcn-ppl__n">3</span> in agency review</li>
              <li><span class="bcn-ppl__n">2</span> waiting on another permit</li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="bcn-ppl__item" data-project-id="northshore-trail-extension" hidden="">
      <div class="esa-card esa-card--padding-compact">
        <div class="esa-card__header typography-title-sm-strong">
          <div class="bcn-ppl__head repel" data-gap="sm">
            <div class="bcn-ppl__titles">
              <h3 class="bcn-ppl__name typography-title-sm-strong">
                <a
                  class="bcn-ppl__link"
                  href="/beacon-design/prototypes/permit-tracker/projects/northshore-trail-extension"
                  >Northshore Trail Extension</a
                >
              </h3>
              <p class="bcn-ppl__client typography-body-sm" data-fact="client">
                Northshore Parks District
              </p>
            </div>
            <span class="bcn-ppl__state" data-ppl-state=""
              ><span
                class="esa-badge esa-badge--danger esa-badge--md typography-microcopy-sm-strong"
                ><span class="esa-badge__text">At risk</span></span
              ></span
            >
          </div>
        </div>
        <div class="esa-card__body typography-body-md">
          <div class="stack" data-gap="sm">
            <dl class="bcn-ppl__facts typography-body-sm">
              <div class="bcn-ppl__fact">
                <dt>Project</dt>
                <dd data-fact="number">2025-0288</dd>
              </div>
              <div class="bcn-ppl__fact">
                <dt>Manager</dt>
                <dd data-fact="manager">Daniel Reyes</dd>
              </div>
              <!-- …and 2 more like this (<div class="bcn-ppl__fact">) -->
            </dl>
            <div
              class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--primary"
              role="progressbar"
              aria-valuenow="73"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="8 of 11 issued"
            >
              <div class="esa-progress-bar__header typography-body-xs">
                <span class="esa-progress-bar__label typography-label-xs">8 of 11 issued</span>
              </div>
              <div class="esa-progress-bar__track">
                <div class="esa-progress-bar__fill" style="width: 73%"></div>
              </div>
            </div>
            <ul class="bcn-ppl__attention cluster typography-body-sm" data-gap="xs">
              <li><span class="bcn-ppl__n">1</span> in agency review</li>
              <li><span class="bcn-ppl__n">1</span> waiting on another permit</li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <!-- …and 2 more like this (<li class="bcn-ppl__item">) -->
  </ul>
  <div data-ppl-empty="" hidden="">
    <div class="esa-empty-state esa-empty-state--md">
      <h3 class="esa-empty-state__title typography-label-md-strong">
        You're not on any active projects
      </h3>
      <p class="esa-empty-state__description typography-body-sm">
        Find your project in All projects, then add yourself to its team.
      </p>
      <div class="esa-empty-state__actions typography-label-md"></div>
    </div>
  </div>
</section>
```

## Styles

```css
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
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
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
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
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
}
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-ppl__heading {
  margin: 0;
}
.bcn-ppl__grid {
  --grid-min: 20rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-ppl [hidden] {
  display: none;
}
.bcn-ppl__item {
  flex-direction: column;
  display: flex;
  position: relative;
}
.bcn-ppl__item > .esa-card {
  flex: 1;
}
.bcn-ppl__item:hover {
  --card-border-color: var(--color-border-default-strong, #8d8d8d);
}
.bcn-ppl__head {
  flex-wrap: nowrap;
  align-items: start;
}
.bcn-ppl__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-ppl__state {
  flex-shrink: 0;
}
.bcn-ppl__name {
  margin: 0;
}
.bcn-ppl__link {
  color: var(--color-content-default, #202020);
  text-decoration: none;
}
.bcn-ppl__link:after {
  content: "";
  border-radius: var(--radius-md, 0.5rem);
  position: absolute;
  inset: 0;
}
.bcn-ppl__item:hover .bcn-ppl__link {
  text-decoration: underline;
}
.bcn-ppl__link:focus-visible {
  outline: none;
}
.bcn-ppl__link:focus-visible:after {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #0d74ce);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-ppl__client {
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
}
.bcn-ppl__facts {
  gap: var(--spacing-100, 0.25rem) var(--spacing-300, 0.75rem);
  grid-template-columns: max-content 1fr;
  margin: 0;
  display: grid;
}
.bcn-ppl__fact {
  display: contents;
}
.bcn-ppl__fact dt {
  color: var(--color-content-default-secondary, #646464);
}
.bcn-ppl__fact dd {
  color: var(--color-content-default, #202020);
  font-variant-numeric: tabular-nums;
  margin: 0;
}
.bcn-ppl__attention {
  padding: var(--spacing-200, 0.5rem) 0 0;
  border-top: 1px solid var(--color-border-default-subtle, #e8e8e8);
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
  list-style: none;
}
.bcn-ppl__n {
  font-weight: var(--typography-font-weight-semibold, 600);
  color: var(--color-content-default, #202020);
  font-variant-numeric: tabular-nums;
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__body {
  padding: var(--_card-padding);
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
.esa-progress-bar--success {
  --_progress-fill-bg: var(--color-background-utility-success, #30a46c);
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
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-gap: var(--spacing-200, 0.5rem);
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--_empty-gap);
  flex-direction: column;
  display: flex;
}
.esa-empty-state__title {
  color: var(--color-content-default, #202020);
  margin: 0;
}
.esa-empty-state__description {
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
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
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-background-utility-danger-muted` | `#feebec` | semantic |
| `--color-background-utility-success` | `#2e7571` | semantic |
| `--color-background-utility-success-hover` | `#193b2d` | semantic |
| `--color-background-utility-success-muted` | `#e6f6eb` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-danger` | `#fdbdbe` | semantic |
| `--color-border-utility-success` | `#adddc0` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--empty-state-icon-size-md` | `48px` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--gap` | `.75rem` | component |
| `--progress-bar-height-md` | `8px` | component |
| `--progress-bar-height-sm` | `4px` | component |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-md` | `.25rem` | semantic |
| `--radius-pill` | `9999px` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
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
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-heading-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-md-font-size` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | semantic |
| `--typography-heading-md-font-weight` | `550` | semantic |
| `--typography-heading-md-letter-spacing` | `-.01em` | semantic |
| `--typography-heading-md-line-height` | `1.3` | semantic |
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
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
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
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
