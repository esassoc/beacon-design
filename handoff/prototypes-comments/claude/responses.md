# Responses

Submissions · source prototype: https://esassoc.github.io/beacon-design/prototypes/comments/

![Responses, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/responses.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/responses.phone.png

The third tab: every response in the period as a slim row, Final Review first, then Drafts, then Accepted. A row reads state glyph, number (R-004), title, its topic and who holds it, and opens the response page.

## Key decisions

- Grouped by review stage: Final Review, then Drafts, then Accepted. Each row ends in who holds it (avatar and name; a dashed ring while that is Aldo's routing). Accepted rows drop the holder.
- New Response (primary, top right) opens <BcnNewResponseDialog>: an esa-dialog with Title (esa-text-field) and Topic (esa-radio-group: seven topics show at once, and an esa-select menu is clipped by the dialog body). A response from scratch starts with no comments, in Draft, held by the person who made it; comments are linked from a submission, as with any response.
- The All / Mine switch is shared with the Inbox (comments:mine): Mine keeps the responses the person at the keyboard holds and has not finished.
- Same row anatomy as the inbox: one line, no excerpt, no actions in the row.
- No comment or submission counts on the row (Andy, 2026-10-06); the response page's rail carries them.
- Response titles are title case, as every label in the module is.
- ?view=responses opens the tab directly (the response page's breadcrumb uses it).

## Done when

- R-004 Late Night Noise Limitation Program and Overnight Flights is listed under Final Review, held by Dana Whitcomb.
- Mine shows R-004, R-005 (Final Review) and R-011 (Draft).
- New Response with a title and topic opens the new response in Draft, held by its writer.

## Components

- `bcn-ri` (spoke) · `src/components/bcn/BcnResponseIndex.astro`
- `bcn-topic-dot` (spoke) · `src/components/bcn/BcnSubmissionInbox.astro`
- `esa-avatar` (hub) · `packages/ecology/src/components/esa-avatar.astro`

## Markup

_5 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-ri__groups" data-response-index="" data-base="/beacon-design/prototypes/comments">
  <section class="bcn-ri__group">
    <h3 class="bcn-ri__label typography-label-sm-strong">Final Review</h3>
    <ul class="bcn-ri__list" role="list">
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-04"
          ><span class="bcn-ri__state" data-state="review" role="img" aria-label="Final Review"
            ><svg
              width="16"
              height="16"
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
          ><span class="bcn-ri__no typography-body-sm">R-004</span
          ><span class="bcn-ri__title typography-body-md"
            >Late Night Noise Limitation Program and Overnight Flights</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="violet"></span>Nighttime operations</span
          ><span class="bcn-ri__who typography-body-sm"
            ><span class="bcn-person"
              ><span class="bcn-proposal-ring" title="Dana Whitcomb"
                ><span
                  class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                  style="--_avatar-hue: 219"
                  ><span class="esa-avatar__initials">DW</span></span
                ></span
              ><span class="bcn-person__name">Dana Whitcomb</span></span
            ></span
          ></a
        >
      </li>
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-05"
          ><span class="bcn-ri__state" data-state="review" role="img" aria-label="Final Review"
            ><svg
              width="16"
              height="16"
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
          ><span class="bcn-ri__no typography-body-sm">R-005</span
          ><span class="bcn-ri__title typography-body-md">Elliott Bay Arrival Route</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="blue"></span>Flight paths</span
          ><span class="bcn-ri__who typography-body-sm"
            ><span class="bcn-person"
              ><span class="bcn-proposal-ring" title="Dana Whitcomb"
                ><span
                  class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                  style="--_avatar-hue: 219"
                  ><span class="esa-avatar__initials">DW</span></span
                ></span
              ><span class="bcn-person__name">Dana Whitcomb</span></span
            ></span
          ></a
        >
      </li>
    </ul>
  </section>
  <section class="bcn-ri__group">
    <h3 class="bcn-ri__label typography-label-sm-strong">Drafts</h3>
    <ul class="bcn-ri__list" role="list">
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-12"
          ><span class="bcn-ri__state" data-state="draft" role="img" aria-label="Draft"
            ><svg
              width="16"
              height="16"
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
          ><span class="bcn-ri__no typography-body-sm">R-012</span
          ><span class="bcn-ri__title typography-body-md"
            >Growth in Operations and Overflight Frequency</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="amber"></span>Aircraft noise</span
          ><span class="bcn-ri__who typography-body-sm"
            ><span class="bcn-person"
              ><span
                class="bcn-proposal-ring"
                data-suggested=""
                title="Ravi Anand (suggested by Aldo)"
                ><span
                  class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                  style="--_avatar-hue: 308"
                  ><span class="esa-avatar__initials">RA</span></span
                ></span
              ><span class="bcn-person__name">Ravi Anand</span></span
            ></span
          ></a
        >
      </li>
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-06"
          ><span class="bcn-ri__state" data-state="draft" role="img" aria-label="Draft"
            ><svg
              width="16"
              height="16"
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
          ><span class="bcn-ri__no typography-body-sm">R-006</span
          ><span class="bcn-ri__title typography-body-md"
            >Distributing Arrivals and Approach Altitude</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="blue"></span>Flight paths</span
          ><span class="bcn-ri__who typography-body-sm"
            ><span class="bcn-person"
              ><span class="bcn-proposal-ring" title="Mei Tanaka"
                ><span
                  class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                  style="--_avatar-hue: 323"
                  ><span class="esa-avatar__initials">MT</span></span
                ></span
              ><span class="bcn-person__name">Mei Tanaka</span></span
            ></span
          ></a
        >
      </li>
      <!-- …and 5 more like this (<li>) -->
    </ul>
  </section>
  <section class="bcn-ri__group">
    <h3 class="bcn-ri__label typography-label-sm-strong">Accepted</h3>
    <ul class="bcn-ri__list" role="list">
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-01"
          ><span class="bcn-ri__state" data-state="done" role="img" aria-label="Accepted"
            ><svg
              width="16"
              height="16"
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
          ><span class="bcn-ri__no typography-body-sm">R-001</span
          ><span class="bcn-ri__title typography-body-md"
            >Joining Workshops and Submitting Petitions</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="slate"></span>Process and outreach</span
          ><span class="bcn-ri__who typography-body-sm"></span
        ></a>
      </li>
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-02"
          ><span class="bcn-ri__state" data-state="done" role="img" aria-label="Accepted"
            ><svg
              width="16"
              height="16"
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
          ><span class="bcn-ri__no typography-body-sm">R-002</span
          ><span class="bcn-ri__title typography-body-md">Repair of Earlier Sound Insulation</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="orange"></span>Sound insulation</span
          ><span class="bcn-ri__who typography-body-sm"></span
        ></a>
      </li>
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-03"
          ><span class="bcn-ri__state" data-state="done" role="img" aria-label="Accepted"
            ><svg
              width="16"
              height="16"
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
          ><span class="bcn-ri__no typography-body-sm">R-003</span
          ><span class="bcn-ri__title typography-body-md">Why the Study Uses DNL 65</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="grass"></span>Noise measurement</span
          ><span class="bcn-ri__who typography-body-sm"></span
        ></a>
      </li>
    </ul>
  </section>
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
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.bcn-proposal-ring {
  border: 1.5px solid #0000;
  border-radius: 50%;
  padding: 1px;
  display: inline-flex;
}
.bcn-proposal-ring[data-suggested] {
  border: 1.5px dashed var(--color-content-default-tertiary);
}
.bcn-person {
  align-items: center;
  gap: var(--spacing-150, 0.375rem);
  min-width: 0;
  display: inline-flex;
}
.bcn-person__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
.bcn-ri__groups {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-ri .bcn-ri__label {
  margin: 0 0 var(--spacing-200);
  color: var(--color-content-secondary);
}
.bcn-ri .bcn-ri__list {
  background: var(--color-background-elevation-raised);
  border: var(--border-width-default, 1px) solid var(--color-border-default);
  border-radius: var(--radius-md);
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
.bcn-ri .bcn-ri__list > li + li {
  border-top: var(--border-width-default, 1px) solid
    var(--color-border-subtle, var(--color-border-default));
}
.bcn-ri .bcn-ri__row {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-400);
  color: var(--color-content-default);
  grid-template-columns: 1rem 3.75rem minmax(0, 1fr) 13rem 10rem;
  text-decoration: none;
  display: grid;
}
.bcn-ri .bcn-ri__row:hover {
  background: var(--color-background-default-hover, var(--color-background-elevation-sunken));
}
.bcn-ri .bcn-ri__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-ri .bcn-ri__state {
  color: var(--color-content-secondary);
  display: inline-flex;
}
.bcn-ri .bcn-ri__state[data-state="done"] {
  color: var(--color-content-success, var(--color-content-default));
}
.bcn-ri .bcn-ri__title {
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-ri .bcn-ri__topic,
.bcn-ri .bcn-ri__who {
  align-items: center;
  gap: var(--spacing-150, 0.375rem);
  min-width: 0;
  color: var(--color-content-secondary);
  white-space: nowrap;
  display: inline-flex;
}
.bcn-ri .bcn-ri__no {
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
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
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.esa-avatar {
  --_avatar-size: var(--avatar-size-md, 40px);
  --_avatar-font-size: var(
    --avatar-font-size-md,
    var(--typography-label-md-strong-font-size, var(--font-size-200, 0.9375rem))
  );
  --_avatar-radius: var(--radius-pill, 9999px);
  --_avatar-bg: var(--avatar-bg, hsl(var(--_avatar-hue, 200) 45% 65%));
  --_avatar-text: var(--color-content-default-knockout, #fcfcfc);
  width: var(--_avatar-size);
  height: var(--_avatar-size);
  border-radius: var(--_avatar-radius);
  background: var(--_avatar-bg);
  color: var(--_avatar-text);
  font-size: var(--_avatar-font-size);
  user-select: none;
  box-sizing: border-box;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  overflow: hidden;
}
.esa-avatar--xs {
  --_avatar-size: var(--avatar-size-xs, 20px);
  --_avatar-font-size: var(
    --avatar-font-size-xs,
    var(--typography-label-2xs-strong-font-size, var(--font-size-050, 0.625rem))
  );
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--avatar-bg` | `hsl(200 45% 65%)` | component |
| `--avatar-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--avatar-font-size-xs` | `clamp(.5rem, .44rem + .3vw, .625rem)` | component |
| `--avatar-size-md` | `40px` | component |
| `--avatar-size-xs` | `20px` | component |
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
| `--color-background-default-hover` | `#e8e8e8` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-subtle` | `#efefef` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--color-content-success` | `#218358` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-050` | `clamp(.5rem, .44rem + .3vw, .625rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-pill` | `9999px` | semantic |
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
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-label-2xs-strong-font-weight` | `550` | semantic |
| `--typography-label-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-2xs-strong-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
