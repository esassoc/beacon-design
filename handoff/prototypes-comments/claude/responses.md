# Responses

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

## Markup
```html
<div
  class="bcn-ri__groups"
  data-response-index=""
  data-base="/beacon-design/prototypes/comments"
>
  <section class="bcn-ri__group">
    <h3 class="bcn-ri__label typography-label-sm-strong">Final Review</h3>
    <ul class="bcn-ri__list" role="list">
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-04"
          ><span
            class="bcn-ri__state"
            data-state="review"
            role="img"
            aria-label="Final Review"
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
            ><span class="bcn-topic-dot" data-family="violet"></span>Nighttime
            operations</span
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
          ><span
            class="bcn-ri__state"
            data-state="review"
            role="img"
            aria-label="Final Review"
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
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-11"
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
          ><span class="bcn-ri__no typography-body-sm">R-011</span
          ><span class="bcn-ri__title typography-body-md"
            >Complaints and the Port's Noise Office</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="slate"></span>Process and
            outreach</span
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
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-07"
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
          ><span class="bcn-ri__no typography-body-sm">R-007</span
          ><span class="bcn-ri__title typography-body-md"
            >Departure Procedures and Turn Points</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="blue"></span>Flight paths</span
          ><span class="bcn-ri__who typography-body-sm"
            ><span class="bcn-person"
              ><span
                class="bcn-proposal-ring"
                data-suggested=""
                title="Mei Tanaka (suggested by Aldo)"
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
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-09"
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
          ><span class="bcn-ri__no typography-body-sm">R-009</span
          ><span class="bcn-ri__title typography-body-md"
            >Health Effects of Noise and Air Quality</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="crimson"></span>Health</span
          ><span class="bcn-ri__who typography-body-sm"
            ><span class="bcn-person"
              ><span
                class="bcn-proposal-ring"
                data-suggested=""
                title="Nadia Osei (suggested by Aldo)"
                ><span
                  class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                  style="--_avatar-hue: 41"
                  ><span class="esa-avatar__initials">NO</span></span
                ></span
              ><span class="bcn-person__name">Nadia Osei</span></span
            ></span
          ></a
        >
      </li>
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-08"
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
          ><span class="bcn-ri__no typography-body-sm">R-008</span
          ><span class="bcn-ri__title typography-body-md"
            >Monitoring and Contours Beyond the Airport</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="grass"></span>Noise
            measurement</span
          ><span class="bcn-ri__who typography-body-sm"
            ><span class="bcn-person"
              ><span
                class="bcn-proposal-ring"
                data-suggested=""
                title="Jordan Ellis (suggested by Aldo)"
                ><span
                  class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                  style="--_avatar-hue: 37"
                  ><span class="esa-avatar__initials">JE</span></span
                ></span
              ><span class="bcn-person__name">Jordan Ellis</span></span
            ></span
          ></a
        >
      </li>
      <li>
        <a class="bcn-ri__row" href="/beacon-design/prototypes/comments/response?id=r-10"
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
          ><span class="bcn-ri__no typography-body-sm">R-010</span
          ><span class="bcn-ri__title typography-body-md"
            >Insulation Eligibility and Structural Vibration</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="orange"></span>Sound
            insulation</span
          ><span class="bcn-ri__who typography-body-sm"
            ><span class="bcn-person"
              ><span class="bcn-proposal-ring" title="Tom Brecht"
                ><span
                  class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                  style="--_avatar-hue: 112"
                  ><span class="esa-avatar__initials">TB</span></span
                ></span
              ><span class="bcn-person__name">Tom Brecht</span></span
            ></span
          ></a
        >
      </li>
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
            ><span class="bcn-topic-dot" data-family="slate"></span>Process and
            outreach</span
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
          ><span class="bcn-ri__title typography-body-md"
            >Repair of Earlier Sound Insulation</span
          ><span class="bcn-ri__topic typography-body-sm"
            ><span class="bcn-topic-dot" data-family="orange"></span>Sound
            insulation</span
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
            ><span class="bcn-topic-dot" data-family="grass"></span>Noise
            measurement</span
          ><span class="bcn-ri__who typography-body-sm"></span
        ></a>
      </li>
    </ul>
  </section>
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
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
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
  background: color-mix(
    in srgb,
    var(--_ink) 22%,
    var(--color-background-elevation-raised)
  );
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
  background: var(
    --color-background-default-hover,
    var(--color-background-elevation-sunken)
  );
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
.esa-avatar--sm {
  --_avatar-size: var(--avatar-size-sm, 28px);
  --_avatar-font-size: var(
    --avatar-font-size-sm,
    var(--typography-label-xs-strong-font-size, var(--font-size-100, 0.75rem))
  );
}
.esa-avatar--lg {
  --_avatar-size: var(--avatar-size-lg, 56px);
  --_avatar-font-size: var(
    --avatar-font-size-lg,
    var(--typography-title-font-size, var(--font-size-400, 1.25rem))
  );
}
.esa-avatar--square {
  --_avatar-radius: var(--radius-md, 0.5rem);
}
.esa-avatar__image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

## Tokens
- `--avatar-bg`: hsl(200 45% 65%) _(component)_
- `--avatar-font-size-lg`: clamp(1rem, .88rem + .6vw, 1.25rem) _(component)_
- `--avatar-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--avatar-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--avatar-font-size-xs`: clamp(.5rem, .44rem + .3vw, .625rem) _(component)_
- `--avatar-size-lg`: 56px _(component)_
- `--avatar-size-md`: 40px _(component)_
- `--avatar-size-sm`: 28px _(component)_
- `--avatar-size-xs`: 20px _(component)_
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
- `--color-background-default-hover`: #e8e8e8 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-subtle`: #efefef _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-secondary`: #525252 _(component)_
- `--color-content-success`: #218358 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 400 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 400 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-label-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-label-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-2xs-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-title-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
