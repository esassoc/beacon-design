# Rail

Details (Status, Topic, Comments, Submissions, Saved) as label-left rows, with a card footer of Accept Response (primary) and Save (secondary soft: a light fill and strong border, so it reads as a button on the sunken footer; always enabled, Saved says whether there is anything to save). Below, every comment the response answers, grouped by submission, by passage number, swatch, subtopic and state.

## Key decisions
- Accepting plans every linked comment at once, with one-step Undo. Whole-response accept only.
- A comment row does not leave the page: it opens the comment panel.

## Done when
- Accept on r-04 marks its 21 comments planned; Undo restores them.

## Markup
```html
<div
  class="bcn-rr stack"
  data-gap="md"
  data-response-rail=""
  data-base="/beacon-design/prototypes/comments"
>
  <div class="esa-card esa-card--outlined esa-card--padding-compact">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Details</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="bcn-rr__facts">
        <div class="bcn-key-value" data-size="sm" data-layout="row">
          <span class="bcn-key-value__key typography-label-sm">Status</span
          ><span class="bcn-rr__val" data-rr-status=""
            ><span class="bcn-rr__state" data-state="draft"
              ><svg
                width="14"
                height="14"
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
                <path d="M8 18h1"></path></svg
              >Draft</span
            ></span
          >
        </div>
        <div class="bcn-key-value" data-size="sm" data-layout="row">
          <span class="bcn-key-value__key typography-label-sm">Topic</span
          ><span class="bcn-rr__val" data-rr-topic=""
            ><span class="bcn-rr__topic"
              ><span class="bcn-topic-dot" data-family="violet"></span>Nighttime
              operations</span
            ></span
          >
        </div>
        <div class="bcn-key-value" data-size="sm" data-layout="row">
          <span class="bcn-key-value__key typography-label-sm">Comments</span
          ><span class="bcn-rr__val" data-rr-comment-count="">21</span>
        </div>
        <div class="bcn-key-value" data-size="sm" data-layout="row">
          <span class="bcn-key-value__key typography-label-sm">Submissions</span
          ><span class="bcn-rr__val" data-rr-sub-count="">12</span>
        </div>
        <div class="bcn-key-value" data-size="sm" data-layout="row">
          <span class="bcn-key-value__key typography-label-sm">Saved</span
          ><span class="bcn-rr__val" data-rr-saved="" data-dirty="false"
            >No edits yet</span
          >
        </div>
      </div>
    </div>
    <div class="esa-card__footer typography-meta">
      <div class="bcn-rr__actions" data-rr-actions="">
        <span data-rr-accept-wrap=""
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-rr-accept="true"
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
                  <path d="M20 6 9 17l-5-5"></path></svg></span
              ><span class="esa-button__label">Accept Response</span>
            </button></span
          ></span
        ><span data-rr-undo-wrap="" hidden=""
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-rr-undo="true"
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
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path></svg></span
              ><span class="esa-button__label">Undo</span>
            </button></span
          ></span
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-rr-save="true"
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
                  d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                ></path>
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                <path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg></span
            ><span class="esa-button__label">Save</span>
          </button></span
        >
      </div>
    </div>
  </div>
  <div class="esa-card esa-card--outlined esa-card--padding-compact">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Comments</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="bcn-rr__groups" data-rr-comments="">
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-018 Simone Dubrow</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-045"
                aria-current="false"
                title="There is a new pattern of planes all night, at about 1:30, 2 and 4 a.m. and then steadily after that, sometimes only seconds apart."
              >
                <span class="bcn-rr__note">C-018.001</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="2"></span
                ><span class="bcn-rr__name">Overnight flights</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-046"
                aria-current="false"
                title="My sleep has been broken for months, and I've had illness, anxiety, stress, headaches and trouble getting through the day"
              >
                <span class="bcn-rr__note">C-018.002</span
                ><span class="bcn-topic-dot" data-family="crimson" data-shade="1"></span
                ><span class="bcn-rr__name">Sleep disruption</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-047"
                aria-current="false"
                title="Someone should recognize that the program is not working and make it mandatory."
              >
                <span class="bcn-rr__note">C-018.003</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
                ><span class="bcn-rr__name">Late Night Noise Limitation Program</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-019 Frances Ilyin</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-050"
                aria-current="false"
                title="Planes through the night have brought me worsening migraines, constant anxiety and a short temper."
              >
                <span class="bcn-rr__note">C-019.001</span
                ><span class="bcn-topic-dot" data-family="crimson" data-shade="1"></span
                ><span class="bcn-rr__name">Sleep disruption</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-051"
                aria-current="false"
                title="overnight flights in particular have to come down sharply."
              >
                <span class="bcn-rr__note">C-019.002</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="2"></span
                ><span class="bcn-rr__name">Overnight flights</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-020 Hollis Greer</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-053"
                aria-current="false"
                title="Planes flying all night are now routine, which means little or no sleep and real damage to our health and ability to function."
              >
                <span class="bcn-rr__note">C-020.001</span
                ><span class="bcn-topic-dot" data-family="crimson" data-shade="1"></span
                ><span class="bcn-rr__name">Sleep disruption</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-021 Celeste Marquardt</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-056"
                aria-current="false"
                title="There is reliably a flight at 2 a.m., and at 3 and at 1, and from 4 a.m. on it never stops."
              >
                <span class="bcn-rr__note">C-021.002</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="2"></span
                ><span class="bcn-rr__name">Overnight flights</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-057"
                aria-current="false"
                title="Five hours is laughable to begin with, and I was told airlines comply only if they choose to, which is absurd."
              >
                <span class="bcn-rr__note">C-021.003</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
                ><span class="bcn-rr__name">Late Night Noise Limitation Program</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">
            S-022 Benjamin Achterberg
          </h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-060"
                aria-current="false"
                title="Study whether the nighttime north-flow departure turn could remain active through 7:00 a.m. instead of switching off at 6:00 a.m."
              >
                <span class="bcn-rr__note">C-022.002</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
                ><span class="bcn-rr__name">Late Night Noise Limitation Program</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-023 Rosalind Pike</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-063"
                aria-current="false"
                title="Sea-Tac tells us there's a late night noise limitation program. Where is it, and who enforces it?"
              >
                <span class="bcn-rr__note">C-023.002</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
                ><span class="bcn-rr__name">Late Night Noise Limitation Program</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-064"
                aria-current="false"
                title="Last night, for example, we barely slept: loud planes with landing gear down at midnight, 1, 2, three in a row at 3:20, then 4 a.m. and nonstop since."
              >
                <span class="bcn-rr__note">C-023.003</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="2"></span
                ><span class="bcn-rr__name">Overnight flights</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-024 Marcus Delacroix</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-065"
                aria-current="false"
                title="I work 65 hours a week and hardly sleep because of the loud planes all night."
              >
                <span class="bcn-rr__note">C-024.001</span
                ><span class="bcn-topic-dot" data-family="crimson" data-shade="1"></span
                ><span class="bcn-rr__name">Sleep disruption</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-066"
                aria-current="false"
                title="Whatever has drifted away from the late night noise program (which, absurdly, is voluntary) has to be reversed now."
              >
                <span class="bcn-rr__note">C-024.002</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
                ><span class="bcn-rr__name">Late Night Noise Limitation Program</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-025 Ingrid Solheim</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-068"
                aria-current="false"
                title="Sea-Tac promotes its Late Night Noise program, which looks like lip service meant to show it is doing something about noise."
              >
                <span class="bcn-rr__note">C-025.001</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
                ><span class="bcn-rr__name">Late Night Noise Limitation Program</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-069"
                aria-current="false"
                title="we are now woken several times every night by loud planes, around 12:30, 1:30, 2, 3:30 and 4, and then continuously after 4."
              >
                <span class="bcn-rr__note">C-025.002</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="2"></span
                ><span class="bcn-rr__name">Overnight flights</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-026 Dorian Wexley</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-072"
                aria-current="false"
                title="I can't remember the last time any of us living in the neighborhoods on the hill east of downtown got a full night's sleep without being jolted awake by loud planes."
              >
                <span class="bcn-rr__note">C-026.001</span
                ><span class="bcn-topic-dot" data-family="crimson" data-shade="1"></span
                ><span class="bcn-rr__name">Sleep disruption</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-027 Yvette Garrow</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-075"
                aria-current="false"
                title="the flights around 1:45 to 2 a.m. wake everyone here, on top of the other overnight planes that now come every single night"
              >
                <span class="bcn-rr__note">C-027.001</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="2"></span
                ><span class="bcn-rr__name">Overnight flights</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-076"
                aria-current="false"
                title="A voluntary program is absurd, and it needs enforcement."
              >
                <span class="bcn-rr__note">C-027.002</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
                ><span class="bcn-rr__name">Late Night Noise Limitation Program</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-028 Gwen Halvorsen</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-078"
                aria-current="false"
                title="The voluntary late night noise program is clearly a joke and clearly not working"
              >
                <span class="bcn-rr__note">C-028.001</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
                ><span class="bcn-rr__name">Late Night Noise Limitation Program</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
        <section class="bcn-rr__group">
          <h3 class="bcn-rr__sub typography-label-sm-strong">S-029 Anton Kowalczyk</h3>
          <ul class="bcn-rr__list" role="list">
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-082"
                aria-current="false"
                title="Late night noise limits plainly aren't working, and how could they when they're voluntary?"
              >
                <span class="bcn-rr__note">C-029.002</span
                ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
                ><span class="bcn-rr__name">Late Night Noise Limitation Program</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="bcn-rr__row"
                data-cid="c-084"
                aria-current="false"
                title="while thousands of people suffer mentally and physically and lose sleep night after night."
              >
                <span class="bcn-rr__note">C-029.004</span
                ><span class="bcn-topic-dot" data-family="crimson" data-shade="1"></span
                ><span class="bcn-rr__name">Sleep disruption</span
                ><span
                  class="bcn-rr__glyph"
                  data-state="draft"
                  role="img"
                  aria-label="Not planned yet"
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
                    <path d="M8 18h1"></path></svg
                ></span>
              </button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
  <esa-side-dialog
    position="right"
    show-close-button="true"
    data-rr-panel="true"
    size="md"
    ><h2 slot="header" class="bcn-rr__panel-title typography-title">
      <a class="bcn-rr__panel-link" href="#" data-rr-open="" title="Open the Submission"
        ><span data-rr-title="">Comment</span
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
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            ></path></svg></span
      ></a>
    </h2>
    <div class="stack" data-gap="lg">
      <p class="bcn-rr__from typography-label-sm" data-rr-from=""></p>
      <blockquote
        class="bcn-rr__context typography-body-md"
        data-rr-context=""
      ></blockquote>
      <section class="stack" data-gap="xs" aria-labelledby="bcn-rr-topics">
        <h3 id="bcn-rr-topics" class="typography-label-md-strong">Topics</h3>
        <ul class="bcn-rr__list" role="list" data-rr-topics=""></ul>
      </section>
    </div>
    <div slot="footer" class="bcn-rr__foot">
      <span class="bcn-rr__foot-group"
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Previous comment (K)"
            title="Previous comment (K)"
            data-rr-prev="true"
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
                <path d="m15 18-6-6 6-6"></path></svg
            ></span></button></span
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Next comment (J)"
            title="Next comment (J)"
            data-rr-next="true"
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
                <path d="m9 18 6-6-6-6"></path></svg
            ></span></button></span></span
      ><span class="bcn-rr__foot-group"
        ><span
          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-rr-quote="true"
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
            ><span class="esa-button__label">Quote in Response</span>
          </button></span
        ></span
      >
    </div></esa-side-dialog
  >
</div>
```

## Styles
```css
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
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
  --_accent-border: var(--color-border-default-strong, #bbb);
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
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
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
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.bcn-rn .bcn-rn__item .esa-card {
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.bcn-rn .bcn-rn__item:hover .esa-card {
  border-color: var(--color-border-default-strong, var(--color-border-default));
}
.bcn-rn .bcn-rn__item[data-flash] .esa-card {
  border-color: var(--color-content-default-tertiary);
  box-shadow: var(--elevation-2);
}
.bcn-rn .bcn-rn__item:is([data-collapsed], [data-composing]) .esa-card__footer {
  display: none;
}
.bcn-rr {
  top: var(--spacing-400);
  position: sticky;
}
.bcn-rr__facts {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-rr__actions {
  align-items: center;
  gap: var(--spacing-100);
  display: flex;
}
.bcn-rr__val {
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  color: var(--color-content-default);
}
.bcn-rr__val[data-dirty="true"] {
  color: var(--color-content-utility-warning, var(--color-content-default));
}
.bcn-rr .bcn-rr__state,
.bcn-rr .bcn-rr__topic {
  align-items: center;
  gap: var(--spacing-150, 0.375rem);
  vertical-align: top;
  display: inline-flex;
}
.bcn-rr .bcn-rr__state[data-state="accepted"] {
  color: var(--color-content-success, var(--color-content-default));
}
.bcn-rr__groups {
  gap: var(--spacing-300);
  flex-direction: column;
  max-height: 50vh;
  display: flex;
  overflow-y: auto;
}
.bcn-rr .bcn-rr__sub {
  margin: 0 0 var(--spacing-100);
  color: var(--color-content-default);
}
.bcn-rr .bcn-rr__list {
  margin: 0 calc(-1 * var(--spacing-200));
  padding: 0;
  list-style: none;
}
.bcn-rr .bcn-rr__row {
  width: 100%;
  font: inherit;
  text-align: start;
  cursor: pointer;
  align-items: center;
  gap: var(--spacing-150, 0.375rem);
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--radius-100);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-content-default);
  background: 0 0;
  border: 0;
  grid-template-columns: auto auto minmax(0, 1fr) auto;
  text-decoration: none;
  display: grid;
}
.bcn-rr .bcn-rr__row:hover {
  background: var(
    --color-background-default-hover,
    var(--color-background-elevation-sunken)
  );
}
.bcn-rr .bcn-rr__row[aria-current="true"] {
  background: var(--color-background-elevation-sunken);
}
.bcn-rr .bcn-rr__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-rr .bcn-rr__note {
  font-variant-numeric: tabular-nums;
  color: var(--color-content-secondary);
  font-size: 0.8125rem;
}
.bcn-rr .bcn-rr__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-rr .bcn-rr__glyph {
  color: var(--color-content-secondary);
  display: inline-flex;
}
.bcn-rr .bcn-rr__glyph[data-state="accepted"] {
  color: var(--color-content-success, var(--color-content-default));
}
.bcn-rr__from {
  color: var(--color-content-secondary);
  margin: 0;
}
.bcn-rr__context {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  color: var(--color-content-default);
  margin: 0;
}
.bcn-rr .bcn-rr__topic-row {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100) var(--spacing-200);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-content-default);
  display: flex;
}
.bcn-rr__foot {
  justify-content: space-between;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.bcn-rr__panel-title {
  margin: 0;
}
.bcn-rr__panel-link {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default);
  text-decoration: none;
  display: inline-flex;
}
.bcn-rr__panel-link .esa-icon {
  color: var(--color-content-secondary);
}
.bcn-rr__panel-link:hover {
  text-underline-offset: 0.2em;
  text-decoration: underline 1px;
}
.bcn-rr__panel-link:hover .esa-icon {
  color: var(--color-content-default);
}
.bcn-rr__panel-link:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--radius-sm);
}
.bcn-rr__foot-group {
  align-items: center;
  gap: var(--spacing-100);
  display: flex;
}
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
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
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
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
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default-hover`: #e8e8e8 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-secondary`: #525252 _(component)_
- `--color-content-success`: #218358 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-weight-medium`: 500 _(component)_
- `--form-label-color`: #525252 _(component)_
- `--gap`: 1rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
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
- `--typography-meta-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-meta-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-meta-font-weight`: 350 _(semantic)_
- `--typography-meta-letter-spacing`: .01em _(semantic)_
- `--typography-meta-line-height`: 1.6 _(semantic)_
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
- `--typography-title-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-font-weight`: 500 _(semantic)_
- `--typography-title-letter-spacing`: .01em _(semantic)_
- `--typography-title-line-height`: 1.6 _(semantic)_
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-title-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-strong-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-strong-font-weight`: 550 _(semantic)_
- `--typography-title-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-strong-line-height`: 1.6 _(semantic)_
