# Period facts + burn-down

Submissions · source prototype: https://esassoc.github.io/beacon-design/prototypes/comments/

![Period facts + burn-down, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/period-facts-burn-down.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/period-facts-burn-down.phone.png

This page IS one comment period: its name is the H1. Under it, one small card: Opens, Closes and Response format as compact label / value pairs with a leading glyph (bcn-key-value size sm), and two meters that FILL as work gets done: "N of 84 comments planned" and "N of 29 submissions reviewed", each over its own bar.

## Key decisions

- No period switcher on the page. Choosing another period happens on an index of periods outside this prototype; the breadcrumb names the level above.
- Progress is stated in the affirmative and fills toward full, not a count draining to zero. Two meters because the two figures have different totals.
- The breakdown leads with review stage: every comment counted once by its response (Accepted, Final Review, Draft, No Response), then a rule, then topics. Stage counts only; no derived figures beyond them.
- Hovering or focusing the comments meter opens a breakdown by topic (esa-popover): dot, name, "N of M", and a bar filled in the topic's ink. The summary bar stays one color: seven hues in a 4px bar read as noise and most segments would be slivers.
- esa-card clips overflow with no hook, so this card overrides it to let the popover hang below (logged in docs/system-improvement-ledger.md).
- A comment is PLANNED once a person accepts the response it points at. A parser-proposed link does not count.
- A submission is REVIEWED once a person has confirmed Aldo's filing of, accepted a response for, or changed, at least one of its comments. It is the same fact as the inbox's unread mark, inverted.
- Response format belongs to the period: summary rolls many comments up to one response; letter answers each submission.

## Done when

- Opening state reads 12 of 85 planned and 15 of 30 reviewed.
- Accepting the 21-comment response (R-004, at Final Review) fills them to 33 and 26.

## Components

- `bcn-cbd` (spoke) · `src/components/bcn/BcnCommentBurnDown.astro`
- `bcn-cper` (spoke) · `src/components/bcn/BcnCommentPeriod.astro`
- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-topic-dot` (spoke) · `src/components/bcn/BcnSubmissionInbox.astro`
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-popover` (hub) · `packages/ecology/src/components/esa-popover.ts`
- `esa-progress-bar` (hub) · `packages/ecology/src/components/esa-progress-bar.astro`

## Markup

_8 repeated elements are collapsed in the markup below; the comments say where._

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
            ><span class="bcn-key-value__val typography-label-sm-strong">Jun 1, 2024</span>
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
            ><span class="bcn-key-value__val typography-label-sm-strong">Nov 30, 2026</span>
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
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <!-- …and 3 more like this (<path>) -->
                </svg></span
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
                <span data-bd-total="planned">85</span> <span>comments planned</span>
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
              <div class="bcn-cbd__stages">
                <span class="bcn-cbd__sglyph" data-state="done"
                  ><svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="m9 15 2 2 4-4"></path></svg></span
                ><span>Accepted</span><span class="bcn-cbd__tn">12</span
                ><span class="bcn-cbd__tof">of 85</span><span></span
                ><span class="bcn-cbd__sglyph" data-state="review"
                  ><svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path
                      d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
                    ></path>
                    <path d="m9 18-1.5-1.5"></path>
                    <circle cx="5" cy="14" r="3"></circle></svg></span
                ><span>Final Review</span><span class="bcn-cbd__tn">27</span
                ><span class="bcn-cbd__tof">of 85</span><span></span
                ><span class="bcn-cbd__sglyph" data-state="draft"
                  ><svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                    ></path>
                    <path
                      d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                    ></path>
                    <path d="M8 18h1"></path></svg></span
                ><span>Draft</span><span class="bcn-cbd__tn">31</span
                ><span class="bcn-cbd__tof">of 85</span><span></span
                ><span class="bcn-cbd__sglyph" data-state="none"
                  ><svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M9 15h6"></path></svg></span
                ><span>No Response</span><span class="bcn-cbd__tn">15</span
                ><span class="bcn-cbd__tof">of 85</span><span></span
                ><span class="bcn-cbd__rule"></span>
              </div>
              <div class="bcn-cbd__trow" data-topic-ink="" data-family="amber">
                <span class="bcn-topic-dot" data-family="amber"></span
                ><span class="bcn-cbd__tname" data-name="">Aircraft noise</span
                ><span class="bcn-cbd__tn" data-n="">0</span
                ><span class="bcn-cbd__tof" data-of="">of 14</span>
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
              <!-- …and 5 more like this (<div class="bcn-cbd__trow">) -->
            </div></esa-popover
          >
          <div
            class="bcn-cbd__meter stack"
            data-gap="xs"
            data-meter="reviewed"
            data-label="Submissions Reviewed"
          >
            <p class="bcn-cbd__fig typography-body-sm">
              <span class="bcn-cbd__n" data-bd="reviewed">15</span> of
              <span data-bd-total="reviewed">30</span> <span>submissions reviewed</span>
            </p>
            <div
              class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--success"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Submissions Reviewed"
            >
              <div class="esa-progress-bar__track">
                <div class="esa-progress-bar__fill" style="width: 50%"></div>
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
        <!-- script type="module" removed (0 bytes) -->
      </div>
    </div>
  </div>
</div>
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
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
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
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card__body {
  padding: var(--_card-padding);
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
.bcn-topic-dot[data-suggested] {
  background: color-mix(in srgb, var(--_ink) 22%, var(--color-background-elevation-raised));
  box-shadow: none;
  border: 1.5px dashed var(--_ink);
  box-sizing: border-box;
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
.bcn-cbd__topics .bcn-cbd__trow,
.bcn-cbd__topics .bcn-cbd__stages {
  display: contents;
}
.bcn-cbd__topics .bcn-cbd__sglyph {
  color: var(--color-content-secondary);
  display: inline-flex;
}
.bcn-cbd__topics .bcn-cbd__sglyph[data-state="done"] {
  color: var(--color-content-success, var(--color-content-default));
}
.bcn-cbd__topics .bcn-cbd__rule {
  height: 1px;
  margin: var(--spacing-100) 0;
  background: var(--color-border-default);
  grid-column: 1/-1;
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
@media (prefers-reduced-motion: reduce) {
  .bcn-cbd .esa-progress-bar__fill {
    transition: none;
  }
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

| Token | Value | Tier |
|---|---|---|
| `--animation-indeterminate` | `1.5s ease-in-out infinite` | semantic |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-topic-amber-1` | `#ffee9c` | component |
| `--bcn-topic-amber-2` | `#f3d673` | component |
| `--bcn-topic-amber-3` | `#e9c162` | component |
| `--bcn-topic-amber-4` | `#e2a336` | component |
| `--bcn-topic-amber-ink` | `#ab6400` | component |
| `--bcn-topic-blue-1` | `#d5efff` | component |
| `--bcn-topic-blue-2` | `#acd8fc` | component |
| `--bcn-topic-blue-3` | `#8ec8f6` | component |
| `--bcn-topic-blue-4` | `#5eb1ef` | component |
| `--bcn-topic-blue-ink` | `#0d74ce` | component |
| `--bcn-topic-crimson-1` | `#fedce7` | component |
| `--bcn-topic-crimson-2` | `#f3bed1` | component |
| `--bcn-topic-crimson-3` | `#eaacc3` | component |
| `--bcn-topic-crimson-4` | `#e093b2` | component |
| `--bcn-topic-crimson-ink` | `#cb1d63` | component |
| `--bcn-topic-grass-1` | `#daf1db` | component |
| `--bcn-topic-grass-2` | `#b2ddb5` | component |
| `--bcn-topic-grass-3` | `#94ce9a` | component |
| `--bcn-topic-grass-4` | `#65ba74` | component |
| `--bcn-topic-grass-ink` | `#2a7e3b` | component |
| `--bcn-topic-orange-1` | `#ffdfb5` | component |
| `--bcn-topic-orange-2` | `#ffc182` | component |
| `--bcn-topic-orange-3` | `#f5ae73` | component |
| `--bcn-topic-orange-4` | `#ec9455` | component |
| `--bcn-topic-orange-ink` | `#cc4e00` | component |
| `--bcn-topic-slate-1` | `#e0e1e6` | component |
| `--bcn-topic-slate-2` | `#d9d9e0` | component |
| `--bcn-topic-slate-3` | `#cdced6` | component |
| `--bcn-topic-slate-4` | `#b9bbc6` | component |
| `--bcn-topic-slate-ink` | `#60646c` | component |
| `--bcn-topic-violet-1` | `#ebe4ff` | component |
| `--bcn-topic-violet-2` | `#d4cafe` | component |
| `--bcn-topic-violet-3` | `#c2b5f5` | component |
| `--bcn-topic-violet-4` | `#aa99ec` | component |
| `--bcn-topic-violet-ink` | `#6550b9` | component |
| `--border-width-default` | `1px` | semantic |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-success` | `#2e7571` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--color-content-success` | `#218358` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-width` | `2px` | component |
| `--form-label-color` | `#525252` | component |
| `--gap` | `1.5rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--progress-bar-height-md` | `8px` | component |
| `--progress-bar-height-sm` | `4px` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-pill` | `9999px` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
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
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
