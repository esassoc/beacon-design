# Block editor: markup, part 1 of 2

```html
<div class="bcn-re" data-response-editor="">
  <div class="esa-card esa-card--padding-spacious">
    <div class="esa-card__body typography-body-md">
      <div class="bcn-re__pane" data-re-pane="">
        <div class="bcn-bt" role="toolbar" aria-label="Block Tools" data-bt="" hidden="">
          <span class="bcn-bt__seg"
            ><esa-dropdown-menu position="below-start" width="auto" data-bt-type="true"
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Block Type"
                  title="Block Type"
                  data-bt-type-btn="true"
                  data-glyph="paragraph"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-controls="menu"
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
                      aria-hidden="true"
                    >
                      <path d="M13 4v16"></path>
                      <path d="M17 4v16"></path>
                      <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13"></path></svg
                  ></span></button></span></esa-dropdown-menu></span
          ><span class="bcn-bt__seg"
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                aria-label="Move Up"
                title="Move Up"
                data-bt-up="true"
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
                    <path d="m18 15-6-6-6 6"></path></svg
                ></span></button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                aria-label="Move Down"
                title="Move Down"
                data-bt-down="true"
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
                    <path d="m6 9 6 6 6-6"></path></svg
                ></span></button></span></span
          ><!-- …and 2 more like this (<span class="bcn-bt__seg">) -->
        </div>
        <span class="bcn-bt__plus" data-bt-plus="" hidden=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-2xs"
              type="button"
              aria-label="Add Block"
              title="Add Block"
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
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path></svg
              ></span></button></span
        ></span>
        <div
          class="bcn-sb"
          role="toolbar"
          aria-label="Selection Tools"
          data-sb-bubble=""
          hidden=""
          data-mode="tools"
        >
          <span class="bcn-sb__row" data-sb="tools"
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                aria-label="Bold (⌘B)"
                title="Bold (⌘B)"
                data-sb-bold="true"
                data-glyph="bold"
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
                    aria-hidden="true"
                  >
                    <path
                      d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
                    ></path></svg
                ></span></button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                aria-label="Italic (⌘I)"
                title="Italic (⌘I)"
                data-sb-italic="true"
                data-glyph="italic"
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
                    aria-hidden="true"
                  >
                    <line x1="19" x2="10" y1="4" y2="4"></line>
                    <line x1="14" x2="5" y1="20" y2="20"></line>
                    <line x1="15" x2="9" y1="4" y2="20"></line></svg
                ></span></button></span
            ><span class="bcn-sb__rule" aria-hidden="true"></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sb-note="true"
                data-glyph="message"
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
                    aria-hidden="true"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span class="esa-button__label">Note</span>
              </button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sb-aldo="true"
              >
                <span class="esa-button__label"
                  ><span class="bcn-sb__aldo"
                    ><span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
                      ><svg
                        class="bcn-aldo-mark__glyph"
                        viewBox="0 0 64 64"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
                        <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
                        <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
                        <circle
                          cx="33.2"
                          cy="31.1"
                          r="2"
                          fill="currentColor"
                          stroke="none"
                        ></circle></svg></span
                    >Rewrite with Aldo</span
                  ></span
                >
              </button></span
            ></span
          >
          <div class="bcn-sb__compose" data-sb="compose" hidden="">
            <div
              class="bcn-nc"
              role="group"
              aria-label="New Note"
              data-note-composer=""
              data-mode="note"
              hidden=""
            >
              <div class="bcn-nc__head">
                <span class="bcn-nc__who" data-nc-who="me"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 167"
                    ><span class="esa-avatar__initials">Y</span></span
                  ></span
                ><span class="bcn-nc__who" data-nc-who="aldo" hidden=""
                  ><span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
                    ><svg
                      class="bcn-aldo-mark__glyph"
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
                      <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
                      <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
                      <circle
                        cx="33.2"
                        cy="31.1"
                        r="2"
                        fill="currentColor"
                        stroke="none"
                      ></circle></svg></span></span
                ><span class="bcn-nc__title" data-nc-title="">New Note</span>
              </div>
              <p class="bcn-nc__quote" data-nc-quote="">
                <span class="bcn-nc__hl" data-nc-hl=""></span>
              </p>
              <esa-textarea
                class="bcn-nc__input"
                rows="2"
                max-rows="8"
                auto-resize=""
                aria-label="Note"
                placeholder=""
                data-nc-field="true"
                size="md"
              ></esa-textarea>
              <div class="bcn-nc__foot">
                <span class="bcn-nc__keys" data-nc-keys="" aria-live="polite">⌘ Enter</span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-nc-cancel="true"
                  >
                    <span class="esa-button__label">Cancel</span>
                  </button></span
                ><span class="bcn-nc__submit" data-nc-submit-wrap=""
                  ><span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-nc-submit="true"
                    >
                      <span class="esa-button__label">Add Note</span>
                    </button></span
                  ></span
                ><span class="bcn-nc__send" data-nc-send-wrap="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-md"
                      type="button"
                      aria-label="Revise (⌘ Enter)"
                      title="Revise (⌘ Enter)"
                      data-nc-send="true"
                    >
                      <span class="esa-icon esa-icon--md" aria-hidden="true"
                        ><svg
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
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path></svg
                      ></span></button></span
                ></span>
              </div>
            </div>
          </div>
          <span class="bcn-sb__row" data-sb="done" hidden=""
            ><span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
              ><svg
                class="bcn-aldo-mark__glyph"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
                <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
                <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
                <circle
                  cx="33.2"
                  cy="31.1"
                  r="2"
                  fill="currentColor"
                  stroke="none"
                ></circle></svg></span
            ><span class="bcn-sb__result" data-sb-result="" role="status"></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sb-undo="true"
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
            ><span
              class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sb-done="true"
              >
                <span class="esa-button__label">Keep</span>
              </button></span
            ></span
          >
        </div>
        <div data-re-doc="">
          <div
            contenteditable="true"
            role="textbox"
            aria-label="Response Text"
            aria-multiline="true"
            translate="no"
            class="tiptap ProseMirror bcn-doc"
            tabindex="0"
            style=""
          >
            <p>
              The study team has received many comments about overnight flights over central
              Seattle, including repeated awakenings between midnight and 5 a.m., and about whether
              the airport's Late Night Noise Limitation Program is working. We have read each of
              these comments, and they are a major focus of the Noise Compatibility Program
              analysis.
            </p>
            <p>
              The Late Night Noise Limitation Program is voluntary.
              <span class="bcn-note" data-note="n-1"
                >Airports cannot restrict aircraft operations by time of day without completing a
                separate federal review under the Airport Noise and Capacity Act</span
              ><sup
                class="bcn-note-ref ProseMirror-widget"
                data-note-ref="n-1"
                aria-label="Note 1"
                contenteditable="false"
                style=""
                >1</sup
              >, which sets a high bar for mandatory limits. The program currently asks airlines to
              avoid the noisiest aircraft overnight and to use preferred runways and procedures when
              conditions allow, and the Port reports compliance publicly.
            </p>
            <!-- …and 2 more like this (<p>) -->
          </div>
        </div>
      </div>
      <section class="bcn-rn" data-response-notes="" aria-labelledby="bcn-rn-heading">
        <header class="bcn-rn__head">
          <h2 id="bcn-rn-heading" class="bcn-rn__title">Notes</h2>
          <span class="bcn-rn__count" data-rn-count=""
            ><span class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
              ><span class="esa-badge__text">2</span></span
            ></span
          ><span class="bcn-rn__all"
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--disabled"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-rn-expand-all="true"
                disabled=""
              >
                <span class="esa-button__label">Expand All</span>
              </button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-rn-collapse-all="true"
              >
                <span class="esa-button__label">Collapse All</span>
              </button></span
            ></span
          >
        </header>
        <ol class="bcn-rn__list" role="list" data-rn-open="">
          <li class="bcn-rn__item" id="note-n-1" data-note-id="n-1">
            <div class="esa-card esa-card--outlined esa-card--padding-compact">
              <div class="esa-card__body typography-body-md">
                <div class="bcn-rn__card">
                  <span class="bcn-rn__num" data-rn-num=""
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">1</span></span
                    ></span
                  ><button
                    type="button"
                    class="bcn-rn__passage"
                    data-rn-select=""
                    aria-label="Note 1: show “Airports cannot restrict aircraft operations by time of day without completing a separate federal review under the Airport Noise and Capacity Act” in the response"
                  >
                    <span class="bcn-rn__hl" data-rn-hl=""
                      >Airports cannot restrict aircraft operations by time of day without
                      completing a separate federal review under the Airport Noise and Capacity
                      Act</span
                    ></button
                  ><span class="bcn-rn__fold"
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        aria-label="Collapse note"
                        title="Collapse note"
                        data-rn-fold="true"
                        aria-expanded="true"
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
                            <path d="m6 9 6 6 6-6"></path></svg
                        ></span></button></span
                  ></span>
                  <p class="bcn-rn__summary" data-rn-summary="" hidden="">
                    2 notes · Ravi Anand, Oct 1, 5:40 PM
                  </p>
                  <div class="bcn-rn__body" data-rn-body="">
                    <ul class="bcn-rn__thread" role="list" data-rn-thread="">
                      <li class="bcn-rn__entry">
                        <span class="bcn-rn__who-mark" data-rn-person=""
                          ><span
                            class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                            style="--_avatar-hue: 219"
                            ><span class="esa-avatar__initials">DW</span></span
                          ></span
                        >
                        <div class="bcn-rn__entry-body">
                          <p class="bcn-rn__meta">
                            <span class="bcn-rn__who" data-rn-who="">Dana Whitcomb</span
                            ><time
                              class="bcn-rn__when"
                              data-rn-when=""
                              datetime="2026-10-01T16:12:00"
                              >Oct 1, 4:12 PM</time
                            >
                          </p>
                          <p class="bcn-rn__text" data-rn-text="">
                            Should we name the Part 161 process here? Several commenters asked what
                            "separate federal review" means.
                          </p>
                        </div>
                      </li>
                      <li class="bcn-rn__entry">
                        <span class="bcn-rn__who-mark" data-rn-person=""
                          ><span
                            class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                            style="--_avatar-hue: 308"
                            ><span class="esa-avatar__initials">RA</span></span
                          ></span
                        >
                        <div class="bcn-rn__entry-body">
                          <p class="bcn-rn__meta">
                            <span class="bcn-rn__who" data-rn-who="">Ravi Anand</span
                            ><time
                              class="bcn-rn__when"
                              data-rn-when=""
                              datetime="2026-10-01T17:40:00"
                              >Oct 1, 5:40 PM</time
                            >
                          </p>
                          <p class="bcn-rn__text" data-rn-text="">
                            Agree. One sentence on Part 161 and a pointer to the workshop materials.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div class="bcn-rn__compose" data-rn-compose-slot=""></div>
                  </div>
                </div>
              </div>
              <div class="esa-card__footer typography-meta">
                <div class="bcn-rn__acts" data-rn-acts="">
                  <span
                    class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-rn-reply="true"
                    >
                      <span class="esa-button__label">Reply</span>
                    </button></span
                  ><span class="bcn-rn__end"
                    ><span
                      class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-rn-resolve="true"
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
                        ><span class="esa-button__label">Resolve</span>
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                      hidden=""
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-rn-reopen="true"
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
                        ><span class="esa-button__label">Reopen</span>
                      </button></span
                    ></span
                  >
                </div>
              </div>
            </div>
          </li>
          <li class="bcn-rn__item" id="note-n-2" data-note-id="n-2">
            <div class="esa-card esa-card--outlined esa-card--padding-compact">
              <div class="esa-card__body typography-body-md">
                <div class="bcn-rn__card">
                  <span class="bcn-rn__num" data-rn-num=""
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">2</span></span
                    ></span
                  ><button
                    type="button"
                    class="bcn-rn__passage"
                    data-rn-select=""
                    aria-label="Note 2: show “will be presented at the fall 2026 public workshop” in the response"
                  >
                    <span class="bcn-rn__hl" data-rn-hl=""
                      >will be presented at the fall 2026 public workshop</span
                    ></button
                  ><span class="bcn-rn__fold"
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        aria-label="Collapse note"
                        title="Collapse note"
                        data-rn-fold="true"
                        aria-expanded="true"
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
                            <path d="m6 9 6 6 6-6"></path></svg
                        ></span></button></span
                  ></span>
                  <p class="bcn-rn__summary" data-rn-summary="" hidden="">
                    1 note · Ravi Anand, Oct 2, 9:05 AM
                  </p>
                  <div class="bcn-rn__body" data-rn-body="">
                    <ul class="bcn-rn__thread" role="list" data-rn-thread="">
                      <li class="bcn-rn__entry">
                        <span class="bcn-rn__who-mark" data-rn-person=""
                          ><span
                            class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                            style="--_avatar-hue: 308"
                            ><span class="esa-avatar__initials">RA</span></span
                          ></span
                        >
                        <div class="bcn-rn__entry-body">
                          <p class="bcn-rn__meta">
                            <span class="bcn-rn__who" data-rn-who="">Ravi Anand</span
                            ><time
                              class="bcn-rn__when"
                              data-rn-when=""
                              datetime="2026-10-02T09:05:00"
                              >Oct 2, 9:05 AM</time
                            >
                          </p>
                          <p class="bcn-rn__text" data-rn-text="">
                            Confirm the workshop date with the Port before this goes out.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div class="bcn-rn__compose" data-rn-compose-slot=""></div>
                  </div>
                </div>
              </div>
              <div class="esa-card__footer typography-meta">
                <div class="bcn-rn__acts" data-rn-acts="">
                  <span
                    class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-rn-reply="true"
                    >
                      <span class="esa-button__label">Reply</span>
                    </button></span
                  ><span class="bcn-rn__end"
                    ><span
                      class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-rn-resolve="true"
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
                        ><span class="esa-button__label">Resolve</span>
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                      hidden=""
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-rn-reopen="true"
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
                        ><span class="esa-button__label">Reopen</span>
                      </button></span
                    ></span
                  >
                </div>
              </div>
            </div>
          </li>
        </ol>
        <div class="bcn-rn__resolved" data-rn-resolved-wrap="" hidden="">
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-rn-toggle="true"
              aria-expanded="false"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span
              ><span class="esa-button__label">Resolved (0)</span>
            </button></span
          >
          <ol class="bcn-rn__list" role="list" data-rn-resolved="" hidden=""></ol>
        </div>
        <div data-rn-park="" hidden="">
          <div
            class="bcn-nc"
            role="group"
            aria-label="New Note"
            data-note-composer=""
            data-mode="note"
            hidden=""
          >
            <div class="bcn-nc__head">
              <span class="bcn-nc__who" data-nc-who="me"
                ><span
                  class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                  style="--_avatar-hue: 167"
                  ><span class="esa-avatar__initials">Y</span></span
                ></span
              ><span class="bcn-nc__who" data-nc-who="aldo" hidden=""
                ><span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
                  ><svg
                    class="bcn-aldo-mark__glyph"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
                    <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
                    <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
                    <circle
                      cx="33.2"
                      cy="31.1"
                      r="2"
                      fill="currentColor"
                      stroke="none"
                    ></circle></svg></span></span
              ><span class="bcn-nc__title" data-nc-title="">New Note</span>
            </div>
            <p class="bcn-nc__quote" data-nc-quote="">
              <span class="bcn-nc__hl" data-nc-hl=""></span>
            </p>
            <esa-textarea
              class="bcn-nc__input"
              rows="2"
              max-rows="8"
              auto-resize=""
              aria-label="Note"
              placeholder=""
              data-nc-field="true"
              size="md"
            ></esa-textarea>
            <div class="bcn-nc__foot">
              <span class="bcn-nc__keys" data-nc-keys="" aria-live="polite">⌘ Enter</span
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  data-nc-cancel="true"
                >
                  <span class="esa-button__label">Cancel</span>
                </button></span
              ><span class="bcn-nc__submit" data-nc-submit-wrap=""
                ><span
                  class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-nc-submit="true"
                  >
                    <span class="esa-button__label">Add Note</span>
                  </button></span
                ></span
              ><span class="bcn-nc__send" data-nc-send-wrap="" hidden=""
                ><span
                  class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-md"
                    type="button"
                    aria-label="Revise (⌘ Enter)"
                    title="Revise (⌘ Enter)"
                    data-nc-send="true"
                  >
                    <span class="esa-icon esa-icon--md" aria-hidden="true"
                      ><svg
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
                        <path d="m5 12 7-7 7 7"></path>
                        <path d="M12 19V5"></path></svg
                    ></span></button></span
              ></span>
            </div>
          </div>
        </div>
        <template data-rn-card=""
          ><li class="bcn-rn__item" data-astro-cid-q3ssrg2b="">
            <div
              class="esa-card esa-card--outlined esa-card--padding-compact"
              data-astro-cid-gctb7h5d=""
            >
              <div class="esa-card__body typography-body-md" data-astro-cid-gctb7h5d="">
                <div class="bcn-rn__card" data-astro-cid-q3ssrg2b="">
                  <span class="bcn-rn__num" data-rn-num="" data-astro-cid-q3ssrg2b=""
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      data-astro-cid-yahmuvtj=""
                      ><span class="esa-badge__text" data-astro-cid-yahmuvtj="">1</span></span
                    ></span
                  ><button
                    type="button"
                    class="bcn-rn__passage"
                    data-rn-select=""
                    data-astro-cid-q3ssrg2b=""
                  >
                    <span
                      class="bcn-rn__hl"
                      data-rn-hl=""
                      data-astro-cid-q3ssrg2b=""
                    ></span></button
                  ><span class="bcn-rn__fold" data-astro-cid-q3ssrg2b=""
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                      data-astro-cid-5nhxdd72=""
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        aria-label="Collapse Note"
                        title="Collapse Note"
                        data-rn-fold="true"
                        data-astro-cid-q3ssrg2b="true"
                        data-astro-cid-5nhxdd72=""
                      >
                        <span
                          class="esa-icon esa-icon--sm"
                          aria-hidden="true"
                          data-astro-cid-wcwfib5m=""
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
                            data-astro-cid-wcwfib5m=""
                          >
                            <path d="m6 9 6 6 6-6"></path></svg
                        ></span></button></span
                  ></span>
                  <p
                    class="bcn-rn__summary"
                    data-rn-summary=""
                    hidden=""
                    data-astro-cid-q3ssrg2b=""
                  ></p>
                  <div class="bcn-rn__body" data-rn-body="" data-astro-cid-q3ssrg2b="">
                    <ul
                      class="bcn-rn__thread"
                      role="list"
                      data-rn-thread=""
                      data-astro-cid-q3ssrg2b=""
                    ></ul>
                    <div
                      class="bcn-rn__compose"
                      data-rn-compose-slot=""
                      data-astro-cid-q3ssrg2b=""
                    ></div>
                  </div>
                </div>
              </div>
              <div class="esa-card__footer typography-meta" data-astro-cid-gctb7h5d="">
                <div class="bcn-rn__acts" data-rn-acts="" data-astro-cid-q3ssrg2b="">
                  <span
                    class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                    data-astro-cid-5nhxdd72=""
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-rn-reply="true"
                      data-astro-cid-q3ssrg2b="true"
                      data-astro-cid-5nhxdd72=""
                    >
                      <span class="esa-button__label" data-astro-cid-5nhxdd72="">Reply</span>
                    </button></span
                  ><span class="bcn-rn__end" data-astro-cid-q3ssrg2b=""
                    ><span
                      class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                      data-astro-cid-5nhxdd72=""
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-rn-resolve="true"
                        data-astro-cid-q3ssrg2b="true"
                        data-astro-cid-5nhxdd72=""
                      >
                        <span
                          class="esa-icon esa-icon--sm"
                          aria-hidden="true"
                          data-astro-cid-wcwfib5m=""
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
                            data-astro-cid-wcwfib5m=""
                          >
                            <path d="M20 6 9 17l-5-5"></path></svg></span
                        ><span class="esa-button__label" data-astro-cid-5nhxdd72="">Resolve</span>
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                      data-astro-cid-5nhxdd72=""
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-rn-reopen="true"
                        data-astro-cid-q3ssrg2b="true"
                        data-astro-cid-5nhxdd72=""
                      >
                        <span
                          class="esa-icon esa-icon--sm"
                          aria-hidden="true"
                          data-astro-cid-wcwfib5m=""
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
```
