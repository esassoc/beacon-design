# Rail: markup

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
          <span class="bcn-key-value__key typography-label-sm">Stage</span
          ><span class="bcn-rr__val" data-rr-status=""
            ><span class="bcn-rr__state" data-state="review"
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
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path
                  d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
                ></path>
                <path d="m9 18-1.5-1.5"></path>
                <circle cx="5" cy="14" r="3"></circle></svg
              >Final Review</span
            ></span
          >
        </div>
        <div class="bcn-key-value" data-size="sm" data-layout="row">
          <span class="bcn-key-value__key typography-label-sm">Assigned To</span
          ><span class="bcn-rr__who"
            ><span class="bcn-rr__val" data-rr-assignee=""
              ><span class="bcn-person"
                ><span class="bcn-proposal-ring" title="Dana Whitcomb"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 219"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                ><span class="bcn-person__name">Dana Whitcomb</span></span
              ></span
            ><span class="bcn-rr__who-verbs" data-rr-who-verbs=""
              ><span data-rr-confirm-wrap="" hidden=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Confirm Assignment"
                    title="Confirm Assignment"
                    data-rr-confirm="true"
                  >
                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                        <path d="M20 6 9 17l-5-5"></path></svg
                    ></span></button></span></span
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-2xs"
                  type="button"
                  aria-label="Reassign"
                  title="Reassign"
                  data-rr-reassign="true"
                >
                  <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path></svg
                  ></span></button></span></span
          ></span>
        </div>
        <div data-rr-drafted-wrap="">
          <div class="bcn-key-value" data-size="sm" data-layout="row">
            <span class="bcn-key-value__key typography-label-sm">Drafted By</span
            ><span class="bcn-rr__who"
              ><span class="bcn-rr__val" data-rr-drafted=""
                ><span class="bcn-person"
                  ><span class="bcn-proposal-ring" title="Ravi Anand"
                    ><span
                      class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                      style="--_avatar-hue: 308"
                      ><span class="esa-avatar__initials">RA</span></span
                    ></span
                  ><span class="bcn-person__name">Ravi Anand</span></span
                ></span
              ><span class="bcn-rr__who-verbs" data-rr-return-wrap=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Return to Drafter"
                    title="Return to Drafter"
                    data-rr-return="true"
                  >
                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button></span></span
            ></span>
          </div>
        </div>
        <div class="bcn-key-value" data-size="sm" data-layout="row">
          <span class="bcn-key-value__key typography-label-sm">Topic</span
          ><span class="bcn-rr__val" data-rr-topic=""
            ><span class="bcn-rr__topic"
              ><span class="bcn-topic-dot" data-family="violet"></span>Nighttime operations</span
            ></span
          >
        </div>
        <div class="bcn-key-value" data-size="sm" data-layout="row">
          <span class="bcn-key-value__key typography-label-sm">Comments</span
          ><span class="bcn-rr__val" data-rr-comment-count="">21</span>
        </div>
        <!-- …and 2 more like this (<div class="bcn-key-value">) -->
      </div>
    </div>
    <div class="esa-card__footer typography-meta">
      <div class="bcn-rr__actions" data-rr-actions="">
        <span data-rr-handoff-wrap="" hidden=""
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-rr-handoff="true"
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
                  <path d="m12 5 7 7-7 7"></path></svg></span
              ><span class="esa-button__label">Send to Final Review</span>
            </button></span
          ></span
        ><span data-rr-accept-wrap=""
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
        ><!-- …and 2 more like this (<span>) --><span
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
                ><span
                  class="bcn-topic-dot"
                  data-family="violet"
                  data-shade="2"
                  data-suggested=""
                ></span
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
                ><span
                  class="bcn-topic-dot"
                  data-family="crimson"
                  data-shade="1"
                  data-suggested=""
                ></span
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
                ><span
                  class="bcn-topic-dot"
                  data-family="violet"
                  data-shade="1"
                  data-suggested=""
                ></span
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
                ><span
                  class="bcn-topic-dot"
                  data-family="crimson"
                  data-shade="1"
                  data-suggested=""
                ></span
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
                ><span
                  class="bcn-topic-dot"
                  data-family="violet"
                  data-shade="2"
                  data-suggested=""
                ></span
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
        <!-- …and 10 more like this (<section class="bcn-rr__group">) -->
      </div>
      <div data-rr-none="" hidden="">
        <div class="esa-empty-state esa-empty-state--xs">
          <h3 class="esa-empty-state__title typography-label-xs-strong">No comments yet</h3>
          <p class="esa-empty-state__description typography-body-xs">
            Link comments from a submission.
          </p>
          <div class="esa-empty-state__actions typography-label-md"></div>
        </div>
      </div>
    </div>
  </div>
  <esa-dialog heading="Send to Final Review" size="sm" data-hand-off="true"
    ><esa-radio-group
      size="sm"
      label="Reviewer"
      required="true"
      data-ho-person="true"
      orientation="vertical"
    ></esa-radio-group>
    <div slot="footer" class="cluster" data-gap="xs">
      <span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
        ><button class="esa-button__native typography-microcopy-xs" type="button" data-ho-ok="true">
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
              <path d="m12 5 7 7-7 7"></path></svg></span
          ><span class="esa-button__label">Send</span>
        </button></span
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-ho-cancel="true"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      >
    </div></esa-dialog
  ><!-- script type="module" removed (0 bytes) --><esa-dialog
    heading="New Response"
    size="sm"
    data-new-response="true"
    data-href="/beacon-design/prototypes/comments/response"
    ><div class="stack" data-gap="md">
      <esa-text-field
        size="sm"
        label="Title"
        placeholder="e.g. Helicopter and Seaplane Noise"
        required=""
        data-nr-title="true"
      ></esa-text-field
      ><esa-radio-group
        size="sm"
        label="Topic"
        required="true"
        data-nr-topic="true"
        orientation="vertical"
      ></esa-radio-group>
    </div>
    <div slot="footer" class="cluster" data-gap="xs">
      <span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-nr-create="true"
        >
          <span class="esa-button__label">Create</span>
        </button></span
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-nr-cancel="true"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      >
    </div></esa-dialog
  ><!-- script type="module" removed (0 bytes) --><esa-side-dialog
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
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></span
      ></a>
    </h2>
    <div class="stack" data-gap="lg">
      <p class="bcn-rr__from typography-label-sm" data-rr-from=""></p>
      <blockquote class="bcn-rr__context typography-body-md" data-rr-context=""></blockquote>
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
          class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-rr-unlink="true"
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
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path></svg></span
            ><span class="esa-button__label">Unlink</span>
          </button></span
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
