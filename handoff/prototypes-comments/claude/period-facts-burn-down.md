# Period facts + burn-down

This page IS one comment period: its name is the H1. Under it, one small card: Opens, Closes and Response format as compact label / value pairs with a leading glyph (bcn-key-value size sm), and two meters that FILL as work gets done: "N of 84 comments planned" and "N of 29 submissions reviewed", each over its own bar.

## Key decisions
- No period switcher on the page. Choosing another period happens on an index of periods outside this prototype; the breadcrumb names the level above.
- Progress is stated in the affirmative and fills toward full, not a count draining to zero. Two meters because the two figures have different totals.
- Hovering or focusing the comments meter opens a breakdown by topic (esa-popover): dot, name, "N of M", and a bar filled in the topic's ink. The summary bar stays one color: seven hues in a 4px bar read as noise and most segments would be slivers.
- esa-card clips overflow with no hook, so this card overrides it to let the popover hang below (logged in docs/system-improvement-ledger.md).
- A comment is PLANNED once a person accepts the response it points at. A parser-proposed link does not count.
- A submission is REVIEWED once a person has accepted a response for, or changed, at least one of its comments. It is the same fact as the inbox's unread mark, inverted.
- Response format belongs to the period: summary rolls many comments up to one response; letter answers each submission.

## Done when
- Opening state reads 12 of 84 planned and 9 of 29 reviewed.
- Accepting the 21-comment response fills them to 33 and 20; the same meters on the response page stay in step.

## Markup
```html
<div data-comment-period="">
  <div class="esa-card esa-card--padding-compact">
    <div class="esa-card__body typography-body-md">
      <div class="bcn-cper repel" data-gap="lg">
        <div class="cluster" data-gap="xl">
          <div class="bcn-key-value" data-size="sm" data-layout="stack">
            <span class="bcn-key-value__key typography-label-sm"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              >Opens</span
            ><span class="bcn-key-value__val typography-label-sm-strong"
              >Jun 1, 2024</span
            >
          </div>
          <div class="bcn-key-value" data-size="sm" data-layout="stack">
            <span class="bcn-key-value__key typography-label-sm"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="m14 14-4 4"></path>
                  <path d="m10 14 4 4"></path></svg></span
              >Closes</span
            ><span class="bcn-key-value__val typography-label-sm-strong"
              >Nov 30, 2026</span
            >
          </div>
          <div class="bcn-key-value" data-size="sm" data-layout="stack">
            <span class="bcn-key-value__key typography-label-sm"
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
                  <path
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path></svg></span
              >Response Format</span
            ><span class="bcn-key-value__val typography-label-sm-strong">Summary</span>
          </div>
        </div>
        <div class="bcn-cbd cluster" data-gap="lg" data-size="sm" data-burn-down="">
          <esa-popover
            trigger="hover"
            position="bottom"
            label="Comments Planned by Topic"
            class="bcn-cbd__pop"
            appearance="default"
            ><div
              class="bcn-cbd__meter stack"
              data-gap="xs"
              data-meter="planned"
              data-label="Comments with a Planned Response"
              tabindex="0"
              aria-expanded="false"
              aria-haspopup="dialog"
            >
              <p class="bcn-cbd__fig typography-body-sm">
                <span class="bcn-cbd__n" data-bd="planned">12</span> of
                <span data-bd-total="planned">84</span> <span>comments planned</span>
              </p>
              <div
                class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                role="progressbar"
                aria-valuenow="14"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Comments with a Planned Response"
              >
                <div class="esa-progress-bar__track">
                  <div class="esa-progress-bar__fill" style="width: 14%"></div>
                </div>
              </div>
            </div>
            <div slot="content" class="bcn-cbd__topics" data-bd-topics="">
              <div class="bcn-cbd__trow" data-topic-ink="" data-family="amber">
                <span class="bcn-topic-dot" data-family="amber"></span
                ><span class="bcn-cbd__tname" data-name="">Aircraft noise</span
                ><span class="bcn-cbd__tn" data-n="">0</span
                ><span class="bcn-cbd__tof" data-of="">of 13</span>
                <div
                  class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Aircraft noise: comments planned"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 0%"></div>
                  </div>
                </div>
              </div>
              <div class="bcn-cbd__trow" data-topic-ink="" data-family="blue">
                <span class="bcn-topic-dot" data-family="blue"></span
                ><span class="bcn-cbd__tname" data-name="">Flight paths</span
                ><span class="bcn-cbd__tn" data-n="">3</span
                ><span class="bcn-cbd__tof" data-of="">of 22</span>
                <div
                  class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                  role="progressbar"
                  aria-valuenow="14"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Flight paths: comments planned"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 14%"></div>
                  </div>
                </div>
              </div>
              <div class="bcn-cbd__trow" data-topic-ink="" data-family="violet">
                <span class="bcn-topic-dot" data-family="violet"></span
                ><span class="bcn-cbd__tname" data-name="">Nighttime operations</span
                ><span class="bcn-cbd__tn" data-n="">0</span
                ><span class="bcn-cbd__tof" data-of="">of 15</span>
                <div
                  class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Nighttime operations: comments planned"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 0%"></div>
                  </div>
                </div>
              </div>
              <div class="bcn-cbd__trow" data-topic-ink="" data-family="grass">
                <span class="bcn-topic-dot" data-family="grass"></span
                ><span class="bcn-cbd__tname" data-name="">Noise measurement</span
                ><span class="bcn-cbd__tn" data-n="">3</span
                ><span class="bcn-cbd__tof" data-of="">of 7</span>
                <div
                  class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                  role="progressbar"
                  aria-valuenow="43"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Noise measurement: comments planned"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 43%"></div>
                  </div>
                </div>
              </div>
              <div class="bcn-cbd__trow" data-topic-ink="" data-family="orange">
                <span class="bcn-topic-dot" data-family="orange"></span
                ><span class="bcn-cbd__tname" data-name="">Sound insulation</span
                ><span class="bcn-cbd__tn" data-n="">3</span
                ><span class="bcn-cbd__tof" data-of="">of 5</span>
                <div
                  class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Sound insulation: comments planned"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 60%"></div>
                  </div>
                </div>
              </div>
              <div class="bcn-cbd__trow" data-topic-ink="" data-family="crimson">
                <span class="bcn-topic-dot" data-family="crimson"></span
                ><span class="bcn-cbd__tname" data-name="">Health</span
                ><span class="bcn-cbd__tn" data-n="">0</span
                ><span class="bcn-cbd__tof" data-of="">of 12</span>
                <div
                  class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Health: comments planned"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 0%"></div>
                  </div>
                </div>
              </div>
              <div class="bcn-cbd__trow" data-topic-ink="" data-family="slate">
                <span class="bcn-topic-dot" data-family="slate"></span
                ><span class="bcn-cbd__tname" data-name="">Process and outreach</span
                ><span class="bcn-cbd__tn" data-n="">3</span
                ><span class="bcn-cbd__tof" data-of="">of 10</span>
                <div
                  class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Process and outreach: comments planned"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 30%"></div>
                  </div>
                </div>
              </div></div
          ></esa-popover>
          <div
            class="bcn-cbd__meter stack"
            data-gap="xs"
            data-meter="reviewed"
            data-label="Submissions Reviewed"
          >
            <p class="bcn-cbd__fig typography-body-sm">
              <span class="bcn-cbd__n" data-bd="reviewed">9</span> of
              <span data-bd-total="reviewed">29</span> <span>submissions reviewed</span>
            </p>
            <div
              class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
              role="progressbar"
              aria-valuenow="31"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Submissions Reviewed"
            >
              <div class="esa-progress-bar__track">
                <div class="esa-progress-bar__fill" style="width: 31%"></div>
              </div>
            </div>
          </div>
          <template data-bd-row=""
            ><div class="bcn-cbd__trow" data-topic-ink="" data-astro-cid-3y4lfdem="">
              <span class="bcn-topic-dot" data-astro-cid-3y4lfdem=""></span
              ><span class="bcn-cbd__tname" data-name="" data-astro-cid-3y4lfdem=""></span
              ><span class="bcn-cbd__tn" data-n="" data-astro-cid-3y4lfdem=""></span
              ><span class="bcn-cbd__tof" data-of="" data-astro-cid-3y4lfdem=""></span>
              <div
                class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Progress"
                data-astro-cid-o4bx2qs6=""
              >
                <div class="esa-progress-bar__track" data-astro-cid-o4bx2qs6="">
                  <div
                    class="esa-progress-bar__fill"
                    style="width: 0%"
                    data-astro-cid-o4bx2qs6=""
                  ></div>
                </div>
              </div></div
          ></template>
        </div>
        <script
          type="module"
          src="/beacon-design/_astro/BcnCommentBurnDown.astro_astro_type_script_index_0_lang.CCc9JIyN.js"
        ></script>
      </div>
    </div>
  </div>
</div>
```

## Styles
```css
/* Type comes from .typography-body-sm on the element.

       Both nodes are always in the DOM (the live region has to pre-exist its content),
       so the gap is opt-IN via .is-shown rather than collapsed with :empty — Lit's
       template whitespace defeats :empty in engines that follow Selectors L3. */
.help,
.error {
  margin: 0;
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
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--elevation-2, 0 2px 12px 0 #0000000a);
}
.esa-card--filled {
  --_card-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_card-border: transparent;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card--padding-none {
  --_card-padding: 0;
}
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card--padding-spacious {
  --_card-padding: var(--spacing-700, 3rem);
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
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
}
.esa-card__subtitle {
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: var(--color-content-on-brand, #fffc);
}
.esa-card__meta {
  gap: var(--spacing-100, 0.25rem) var(--spacing-500, 1.5rem);
  margin: var(--spacing-050, 0.125rem) 0 0;
  flex-wrap: wrap;
  display: flex;
}
.esa-card__meta-pair {
  align-items: baseline;
  gap: var(--spacing-100, 0.25rem);
  min-width: 0;
  display: flex;
}
.esa-card__meta dt {
  font-size: var(--_card-meta-label-size);
  font-weight: var(--font-weight-medium, 500);
  color: var(--_card-meta-label-color);
}
.esa-card__meta dd {
  font-size: var(--_card-meta-value-size);
  color: inherit;
  margin: 0;
}
.esa-card--header-primary .esa-card__meta dt {
  color: #fffc;
}
.esa-card__icon {
  color: inherit;
  flex-shrink: 0;
}
.esa-card__actions {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  display: flex;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
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
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
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
.bcn-topic-dot {
  background: var(--_ink, var(--bcn-topic-slate-ink));
  border-radius: 50%;
  flex: none;
  width: 0.625rem;
  height: 0.625rem;
  display: inline-block;
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="amber"] {
  --_ink: var(--bcn-topic-amber-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="blue"] {
  --_ink: var(--bcn-topic-blue-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="violet"] {
  --_ink: var(--bcn-topic-violet-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="grass"] {
  --_ink: var(--bcn-topic-grass-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="orange"] {
  --_ink: var(--bcn-topic-orange-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="crimson"] {
  --_ink: var(--bcn-topic-crimson-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="slate"] {
  --_ink: var(--bcn-topic-slate-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="none"] {
  --_ink: var(--color-content-default-tertiary);
}
.bcn-topic-dot[data-shade] {
  background: var(--_hl);
  box-shadow: inset 0 0 0 1.5px var(--_ink);
}
.bcn-topic-dot[data-family="none"] {
  box-shadow: none;
  border: 1.5px dashed var(--_ink);
  background: 0 0;
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="1"] {
  --_hl: var(--bcn-topic-amber-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="2"] {
  --_hl: var(--bcn-topic-amber-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="3"] {
  --_hl: var(--bcn-topic-amber-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="4"] {
  --_hl: var(--bcn-topic-amber-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="1"] {
  --_hl: var(--bcn-topic-blue-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="2"] {
  --_hl: var(--bcn-topic-blue-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="3"] {
  --_hl: var(--bcn-topic-blue-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="4"] {
  --_hl: var(--bcn-topic-blue-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="1"] {
  --_hl: var(--bcn-topic-violet-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="2"] {
  --_hl: var(--bcn-topic-violet-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="3"] {
  --_hl: var(--bcn-topic-violet-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="4"] {
  --_hl: var(--bcn-topic-violet-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="1"] {
  --_hl: var(--bcn-topic-grass-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="2"] {
  --_hl: var(--bcn-topic-grass-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="3"] {
  --_hl: var(--bcn-topic-grass-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="4"] {
  --_hl: var(--bcn-topic-grass-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="1"] {
  --_hl: var(--bcn-topic-orange-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="2"] {
  --_hl: var(--bcn-topic-orange-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="3"] {
  --_hl: var(--bcn-topic-orange-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="4"] {
  --_hl: var(--bcn-topic-orange-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="1"] {
  --_hl: var(--bcn-topic-crimson-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="2"] {
  --_hl: var(--bcn-topic-crimson-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="3"] {
  --_hl: var(--bcn-topic-crimson-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="4"] {
  --_hl: var(--bcn-topic-crimson-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="1"] {
  --_hl: var(--bcn-topic-slate-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="2"] {
  --_hl: var(--bcn-topic-slate-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="3"] {
  --_hl: var(--bcn-topic-slate-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="4"] {
  --_hl: var(--bcn-topic-slate-4);
}
.bcn-cbd[data-size="sm"] .bcn-cbd__meter {
  width: 13rem;
}
.bcn-cbd__fig {
  color: var(--color-content-secondary);
  white-space: nowrap;
  margin: 0;
}
.bcn-cbd__n {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  transition: color 0.2s ease-out;
}
.bcn-cbd__n[data-moving] {
  color: var(--color-content-success, var(--color-content-brand));
}
.bcn-cbd__meter[tabindex] {
  cursor: default;
  border-radius: var(--radius-100);
}
.bcn-cbd__meter[tabindex]:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 4px;
}
.bcn-cbd__pop {
  display: block;
}
.bcn-cbd__topics {
  align-items: center;
  column-gap: var(--spacing-200);
  row-gap: var(--spacing-150, 0.375rem);
  min-width: 17rem;
  padding: var(--spacing-050, 0.125rem) 0;
  color: var(--color-content-default);
  grid-template-columns: auto minmax(0, 1fr) auto auto 4rem;
  font-size: 0.8125rem;
  line-height: 1.25;
  display: grid;
}
.bcn-cbd__topics .bcn-cbd__trow {
  display: contents;
}
.bcn-cbd__topics :is(.bcn-cbd__tn, .bcn-cbd__tof) {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.bcn-cbd__topics .bcn-cbd__tn {
  text-align: right;
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-cbd__topics .bcn-cbd__tof {
  margin-left: calc(-1 * var(--spacing-100));
  color: var(--color-content-secondary);
}
.bcn-cbd__topics .bcn-cbd__trow {
  --color-background-utility-success: var(--_ink);
}
.bcn-cbd .esa-progress-bar__fill {
  transition: width 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.bcn-cper {
  align-items: flex-end;
}
[data-comment-period] .esa-card {
  overflow: visible;
}
.bcn-si .bcn-si__dots .bcn-topic-dot,
.bcn-si .bcn-si__more {
  width: 0.875rem;
  height: 0.875rem;
  box-shadow: 0 0 0 2px var(--color-background-elevation-raised);
}
.bcn-si .bcn-si__legend .bcn-topic-dot {
  align-self: center;
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
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value[data-layout="row"] {
  align-items: baseline;
  column-gap: var(--spacing-300);
  grid-template-columns: 6.5rem minmax(0, 1fr);
  display: grid;
}
.bcn-key-value__key {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-key-value__key {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__key {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  color: var(--color-content-secondary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__val {
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
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
.esa-progress-bar__value {
  color: var(--color-content-default-secondary, #646464);
  font-variant-numeric: tabular-nums;
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
.esa-progress-bar--xs {
  --_progress-height: var(--progress-bar-height-xs, 2px);
}
.esa-progress-bar--sm {
  --_progress-height: var(--progress-bar-height-sm, 4px);
}
.esa-progress-bar--lg {
  --_progress-height: var(--progress-bar-height-lg, 12px);
}
.esa-progress-bar--success {
  --_progress-fill-bg: var(--color-background-utility-success, #30a46c);
}
.esa-progress-bar--warning {
  --_progress-fill-bg: var(--color-background-utility-warning, #ffc53d);
}
.esa-progress-bar--danger {
  --_progress-fill-bg: var(--color-background-utility-danger, #e5484d);
}
.esa-progress-bar--indeterminate .esa-progress-bar__fill {
  animation: esa-progress-indeterminate
    var(--animation-indeterminate, 1.5s ease-in-out infinite);
  width: 40% !important;
}
.esa-progress-bar__fill {
  transition: none;
}
.esa-progress-bar__fill {
  background: highlight;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
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
```

## Tokens
- `--animation-indeterminate`: 1.5s ease-in-out infinite _(semantic)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--bcn-topic-amber-1`: #ffee9c _(component)_
- `--bcn-topic-amber-2`: #f3d673 _(component)_
- `--bcn-topic-amber-3`: #e9c162 _(component)_
- `--bcn-topic-amber-4`: #e2a336 _(component)_
- `--bcn-topic-amber-ink`: #ab6400 _(component)_
- `--bcn-topic-blue-1`: #d5efff _(component)_
- `--bcn-topic-blue-2`: #acd8fc _(component)_
- `--bcn-topic-blue-3`: #8ec8f6 _(component)_
- `--bcn-topic-blue-4`: #5eb1ef _(component)_
- `--bcn-topic-blue-ink`: #0d74ce _(component)_
- `--bcn-topic-crimson-1`: #fedce7 _(component)_
- `--bcn-topic-crimson-2`: #f3bed1 _(component)_
- `--bcn-topic-crimson-3`: #eaacc3 _(component)_
- `--bcn-topic-crimson-4`: #e093b2 _(component)_
- `--bcn-topic-crimson-ink`: #cb1d63 _(component)_
- `--bcn-topic-grass-1`: #daf1db _(component)_
- `--bcn-topic-grass-2`: #b2ddb5 _(component)_
- `--bcn-topic-grass-3`: #94ce9a _(component)_
- `--bcn-topic-grass-4`: #65ba74 _(component)_
- `--bcn-topic-grass-ink`: #2a7e3b _(component)_
- `--bcn-topic-orange-1`: #ffdfb5 _(component)_
- `--bcn-topic-orange-2`: #ffc182 _(component)_
- `--bcn-topic-orange-3`: #f5ae73 _(component)_
- `--bcn-topic-orange-4`: #ec9455 _(component)_
- `--bcn-topic-orange-ink`: #cc4e00 _(component)_
- `--bcn-topic-slate-1`: #e0e1e6 _(component)_
- `--bcn-topic-slate-2`: #d9d9e0 _(component)_
- `--bcn-topic-slate-3`: #cdced6 _(component)_
- `--bcn-topic-slate-4`: #b9bbc6 _(component)_
- `--bcn-topic-slate-ink`: #60646c _(component)_
- `--bcn-topic-violet-1`: #ebe4ff _(component)_
- `--bcn-topic-violet-2`: #d4cafe _(component)_
- `--bcn-topic-violet-3`: #c2b5f5 _(component)_
- `--bcn-topic-violet-4`: #aa99ec _(component)_
- `--bcn-topic-violet-ink`: #6550b9 _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-secondary`: #525252 _(component)_
- `--color-content-success`: #218358 _(component)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-weight-medium`: 500 _(component)_
- `--form-label-color`: #525252 _(component)_
- `--gap`: 1.5rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--progress-bar-height-lg`: 12px _(component)_
- `--progress-bar-height-md`: 8px _(component)_
- `--progress-bar-height-sm`: 4px _(component)_
- `--progress-bar-height-xs`: 2px _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-font-weight`: 500 _(semantic)_
- `--typography-label-sm-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
