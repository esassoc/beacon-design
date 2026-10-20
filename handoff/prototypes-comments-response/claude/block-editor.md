# Block editor

The letter of response in a TipTap block editor modeled on WordPress's: paragraphs, headings 2 to 4, bullet and numbered lists, quote, callout, separator. "/" opens the inserter (blocks, then the Response Library); the + at an empty line opens the same inserter with a search field. The block toolbar sits over the selected block: type switcher, move up / down, Bold / Italic, Options (add before / after, duplicate, delete).

## Key decisions
- Text editing and block insertion only: none of WordPress's layout features (columns, groups beyond the callout, alignment).
- Selecting text raises a small bubble under it: Bold, Italic, Note and Rewrite with Aldo. Both open bcn-note-composer under the selection, which stays tinted while you write. Aldo ("shorter", "plainer", "warmer"…) rewrites only the selection; the bubble then offers Undo or Keep.
- Aldo shows he is working and what he changed: after Send the composer locks, a shimmer runs along its foot, "Aldo is revising…" replaces the shortcut hint, his mark turns, and the held text shimmers in his tint. About a second later the new text replaces the selection washed in his tint, which fades out (about 3s). Reduced motion: no shimmer or fade, a short hold, a still tint.
- The Response Library is inserted as text (its paragraphs), not as a linked block.
- Link was left out of the toolbar; a pasted https address links itself.

## Gotchas
- Ported in part from beacon-dashboard (BpDoc, BpBlockToolbar, editor/callout). The toolbar's controls are esa-button and esa-dropdown-menu rendered at build time with their glyphs swapped at runtime.
- The prototype runs no model. r-04's ten sentences each carry a prewritten shorter, plainer and warmer rewrite (src/data/aldo-rewrites.ts): a selection of whole r-04 sentences is rewritten from them. Anything else falls back to rules: shorter keeps the first sentence, plainer and more formal swap phrasing, warmer leads with an acknowledgement. Sentences are matched whole, not split on periods ("5 a.m.").
- Alt+F10 moves focus into the block toolbar; Esc returns it to the text.

## Done when
- Typing "/callout" + Enter on an empty line inserts a callout.
- Selecting r-04's first two sentences and asking Aldo for "warmer" shows the working state, then lands the prewritten warmer text, which fades from Aldo's tint; ⌘Z or Undo restores it.

## Markup
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
          ><span class="bcn-bt__seg"
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                aria-label="Bold (⌘B)"
                title="Bold (⌘B)"
                data-bt-bold="true"
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
                data-bt-italic="true"
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
                ></span></button></span></span
          ><span class="bcn-bt__seg"
            ><esa-dropdown-menu position="below-end" width="auto" data-bt-more="true"
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Options"
                  title="Options"
                  data-glyph="more"
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
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle></svg
                  ></span></button></span></esa-dropdown-menu
          ></span>
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
                      ><span class="bcn-aldo-mark__glyph"
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
                              d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                            ></path>
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                            ></circle></svg></span></span></span
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
                    ><span class="bcn-aldo-mark__glyph"
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
                            d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                          ></path>
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                          ></circle></svg></span></span></span></span
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
                <span class="bcn-nc__keys" data-nc-keys="" aria-live="polite"
                  >⌘ Enter</span
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
              ><span class="bcn-aldo-mark__glyph"
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
                      d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                    ></path>
                    <circle cx="12" cy="12" r="10"></circle></svg></span></span></span
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
          >
            <p>
              The study team has received many comments about overnight flights over
              central Seattle, including repeated awakenings between midnight and 5 a.m.,
              and about whether the airport's Late Night Noise Limitation Program is
              working. We have read each of these comments, and they are a major focus of
              the Noise Compatibility Program analysis.
            </p>
            <p>
              The Late Night Noise Limitation Program is voluntary.
              <span class="bcn-note" data-note="n-1"
                >Airports cannot restrict aircraft operations by time of day without
                completing a separate federal review under the Airport Noise and Capacity
                Act</span
              ><sup
                class="bcn-note-ref ProseMirror-widget"
                data-note-ref="n-1"
                aria-label="Note 1"
                contenteditable="false"
                >1</sup
              >, which sets a high bar for mandatory limits. The program currently asks
              airlines to avoid the noisiest aircraft overnight and to use preferred
              runways and procedures when conditions allow, and the Port reports
              compliance publicly.
            </p>
            <p>
              As part of the Noise Compatibility Program, the study is evaluating changes
              to the program, including a longer nighttime window, stronger reporting, and
              nighttime runway and arrival procedures. It is also analyzing nighttime
              flight tracks to understand why more overnight arrivals now pass over
              central Seattle. Results, including the number of nighttime events above key
              sound levels for affected neighborhoods,
              <span class="bcn-note" data-note="n-2"
                >will be presented at the fall 2026 public workshop</span
              ><sup
                class="bcn-note-ref ProseMirror-widget"
                data-note-ref="n-2"
                aria-label="Note 2"
                contenteditable="false"
                >2</sup
              >.
            </p>
            <p>
              Any procedure change the study recommends must be reviewed and approved by
              the FAA before it can take effect. The study cannot change flight paths
              directly, but it can document the overnight impacts and recommend measures
              to the FAA.
            </p>
          </div>
        </div>
      </div>
      <section class="bcn-rn" data-response-notes="" aria-labelledby="bcn-rn-heading">
        <header class="bcn-rn__head">
          <h2 id="bcn-rn-heading" class="bcn-rn__title">Notes</h2>
          <span class="bcn-rn__count" data-rn-count=""
            ><span
              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
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
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
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
                      completing a separate federal review under the Airport Noise and
                      Capacity Act</span
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
                            Should we name the Part 161 process here? Several commenters
                            asked what "separate federal review" means.
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
                            Agree. One sentence on Part 161 and a pointer to the workshop
                            materials.
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
                            <path
                              d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                            ></path>
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
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
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
                            <path
                              d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                            ></path>
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
                  ><span class="bcn-aldo-mark__glyph"
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
                          d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                        ></path>
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                        ></circle></svg></span></span></span></span
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
              data-astro-cid-t2d274gq=""
            >
              <div class="esa-card__body typography-body-md" data-astro-cid-t2d274gq="">
                <div class="bcn-rn__card" data-astro-cid-q3ssrg2b="">
                  <span class="bcn-rn__num" data-rn-num="" data-astro-cid-q3ssrg2b=""
                    ><span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      data-astro-cid-sh7ulwla=""
                      ><span class="esa-badge__text" data-astro-cid-sh7ulwla=""
                        >1</span
                      ></span
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
                      data-astro-cid-4xhmycw5=""
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        aria-label="Collapse Note"
                        title="Collapse Note"
                        data-rn-fold="true"
                        data-astro-cid-q3ssrg2b="true"
                        data-astro-cid-4xhmycw5=""
                      >
                        <span
                          class="esa-icon esa-icon--sm"
                          aria-hidden="true"
                          data-astro-cid-c7ivvrtd=""
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
                            data-astro-cid-c7ivvrtd=""
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
              <div class="esa-card__footer typography-meta" data-astro-cid-t2d274gq="">
                <div class="bcn-rn__acts" data-rn-acts="" data-astro-cid-q3ssrg2b="">
                  <span
                    class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                    data-astro-cid-4xhmycw5=""
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-rn-reply="true"
                      data-astro-cid-q3ssrg2b="true"
                      data-astro-cid-4xhmycw5=""
                    >
                      <span class="esa-button__label" data-astro-cid-4xhmycw5=""
                        >Reply</span
                      >
                    </button></span
                  ><span class="bcn-rn__end" data-astro-cid-q3ssrg2b=""
                    ><span
                      class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                      data-astro-cid-4xhmycw5=""
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-rn-resolve="true"
                        data-astro-cid-q3ssrg2b="true"
                        data-astro-cid-4xhmycw5=""
                      >
                        <span
                          class="esa-icon esa-icon--sm"
                          aria-hidden="true"
                          data-astro-cid-c7ivvrtd=""
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
                            data-astro-cid-c7ivvrtd=""
                          >
                            <path d="M20 6 9 17l-5-5"></path></svg></span
                        ><span class="esa-button__label" data-astro-cid-4xhmycw5=""
                          >Resolve</span
                        >
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-secondary esa-button--appearance-soft esa-button--sm"
                      data-astro-cid-4xhmycw5=""
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-rn-reopen="true"
                        data-astro-cid-q3ssrg2b="true"
                        data-astro-cid-4xhmycw5=""
                      >
                        <span
                          class="esa-icon esa-icon--sm"
                          aria-hidden="true"
                          data-astro-cid-c7ivvrtd=""
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
                            data-astro-cid-c7ivvrtd=""
                          >
                            <path
                              d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                            ></path>
                            <path d="M3 3v5h5"></path></svg></span
                        ><span class="esa-button__label" data-astro-cid-4xhmycw5=""
                          >Reopen</span
                        >
                      </button></span
                    ></span
                  >
                </div>
              </div>
            </div>
          </li></template
        ><template data-rn-entry=""
          ><li class="bcn-rn__entry" data-astro-cid-q3ssrg2b="">
            <span class="bcn-rn__who-mark" data-rn-person="" data-astro-cid-q3ssrg2b=""
              ><span
                class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                style="--_avatar-hue: 332"
                data-astro-cid-cgicqi4o=""
                ><span class="esa-avatar__initials" data-astro-cid-cgicqi4o=""
                  >ST</span
                ></span
              ></span
            >
            <div class="bcn-rn__entry-body" data-astro-cid-q3ssrg2b="">
              <p class="bcn-rn__meta" data-astro-cid-q3ssrg2b="">
                <span class="bcn-rn__who" data-rn-who="" data-astro-cid-q3ssrg2b=""></span
                ><time
                  class="bcn-rn__when"
                  data-rn-when=""
                  data-astro-cid-q3ssrg2b=""
                ></time>
              </p>
              <p class="bcn-rn__text" data-rn-text="" data-astro-cid-q3ssrg2b=""></p>
            </div></li
        ></template>
      </section>
      <script
        type="module"
        src="/beacon-design/_astro/BcnResponseNotes.astro_astro_type_script_index_0_lang.DTPo9-Ls.js"
      ></script>
    </div>
  </div>
</div>
```

## Styles
```css
.ProseMirror {
  position: relative;
}
.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}
.ProseMirror [contenteditable="false"] {
  white-space: normal;
}
.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}
.ProseMirror pre {
  white-space: pre-wrap;
}
img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}
.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}
.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}
.ProseMirror-hideselection *::selection {
  background: transparent;
}
.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}
.ProseMirror-hideselection * {
  caret-color: transparent;
}
.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
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
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  --icon-size-xs: 12px;
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 8s linear infinite bcn-aldo-spin;
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
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
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
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.bcn-nc {
  gap: var(--spacing-200);
  width: min(30rem, 100%);
  padding: var(--spacing-300) var(--spacing-400) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-3);
  font-family: var(--typography-font-family-sans);
  --form-border-width: 0;
  --color-background-field: transparent;
  flex-direction: column;
  animation: 0.18s cubic-bezier(0.2, 0.8, 0.2, 1) bcn-nc-in;
  display: flex;
}
.bcn-nc[hidden],
.bcn-nc [hidden] {
  display: none;
}
.bcn-nc:focus-within {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 0;
}
.bcn-nc[data-inline] {
  width: 100%;
  box-shadow: none;
  animation: none;
}
.bcn-nc[data-mode="aldo"] {
  border: 1.5px solid var(--bcn-aldo);
  box-shadow: var(--bcn-aldo-prompt-shadow);
  border-radius: 20px;
}
.bcn-nc[data-mode="aldo"][data-inline] {
  box-shadow: none;
}
.bcn-nc[data-mode="aldo"]:focus-within {
  outline-color: var(--bcn-aldo-prompt-ring);
}
.bcn-nc__head {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-nc__who {
  display: inline-flex;
}
.bcn-nc__title {
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  color: var(--color-content-default);
}
.bcn-nc[data-mode="aldo"] .bcn-nc__title {
  color: var(--bcn-aldo-600);
}
.bcn-nc__quote {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-style: italic;
  font-size: var(--typography-body-md-font-size);
  color: var(--color-content-secondary);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-nc:not([data-mode="aldo"]) .bcn-nc__quote {
  font-style: normal;
}
.bcn-nc__hl {
  background: var(--bcn-note-tint);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  border-radius: 2px;
  padding: 0.05em 0.1em;
}
.bcn-nc[data-mode="aldo"] .bcn-nc__hl {
  background: var(--bcn-aldo-50);
}
.bcn-nc__input {
  margin: 0 calc(-1 * var(--spacing-200));
  --focus-ring-color: transparent;
  display: block;
}
.bcn-nc__foot {
  align-items: center;
  gap: var(--spacing-100);
  display: flex;
}
.bcn-nc__keys {
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  margin-right: auto;
}
.bcn-nc__send {
  --button-radius-md: 999px;
  --color-background-brand: var(--bcn-aldo);
  --color-background-brand-hover: var(--bcn-aldo-600);
  display: inline-flex;
}
.bcn-nc[data-working] {
  position: relative;
  overflow: hidden;
}
.bcn-nc[data-working]:after {
  content: "";
  background: linear-gradient(90deg, transparent, var(--bcn-aldo), transparent);
  background-repeat: no-repeat;
  background-size: 50% 100%;
  height: 2px;
  animation: 1.1s linear infinite bcn-nc-work;
  position: absolute;
  inset: auto 0 0;
}
.bcn-nc[data-working] .bcn-nc__input {
  opacity: 0.6;
}
.bcn-nc[data-working] .bcn-nc__keys {
  color: var(--bcn-aldo-600);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-nc[data-working]:after {
  background: var(--bcn-aldo);
  animation: none;
}
.bcn-re__pane {
  position: relative;
}
.bcn-doc {
  max-width: 44rem;
  min-height: 16rem;
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-size: var(--typography-body-lg-font-size);
  color: var(--color-content-default);
  overflow-wrap: anywhere;
  outline: none;
  line-height: 1.65;
}
.bcn-doc > :first-child {
  margin-top: 0;
}
.bcn-doc p {
  margin: 0 0 var(--spacing-400);
}
.bcn-doc h2,
.bcn-doc h3,
.bcn-doc h4 {
  font-family: var(--typography-font-family-sans);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-doc h2 {
  margin: var(--spacing-600) 0 var(--spacing-300);
  font-size: var(--typography-heading-md-font-size);
  line-height: 1.25;
}
.bcn-doc h3 {
  margin: var(--spacing-500) 0 var(--spacing-200);
  font-size: var(--typography-title-font-size);
  line-height: 1.3;
}
.bcn-doc h4 {
  margin: var(--spacing-400) 0 var(--spacing-150, 0.375rem);
  font-size: var(--typography-body-lg-font-size);
  line-height: 1.35;
}
.bcn-doc ul,
.bcn-doc ol {
  margin: 0 0 var(--spacing-400);
  padding-left: 1.5rem;
}
.bcn-doc li > p {
  margin: 0;
}
.bcn-doc li + li {
  margin-top: var(--spacing-150, 0.375rem);
}
.bcn-doc li::marker {
  color: var(--color-content-default-tertiary);
}
.bcn-doc strong {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-doc a {
  color: var(--color-content-link, var(--color-content-brand));
}
.bcn-doc blockquote {
  margin: 0 0 var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  border-radius: var(--radius-md);
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-secondary);
}
.bcn-doc hr {
  margin: var(--spacing-500) 0;
  border: 0;
  border-top: 1px solid var(--color-border-default);
}
.bcn-doc hr.ProseMirror-selectednode {
  border-top-color: var(--focus-ring-color);
}
.bcn-doc :is(blockquote, .bcn-callout) > :last-child {
  margin-bottom: 0;
}
.bcn-doc .is-empty.is-editor-empty:first-child:before,
.bcn-doc p.is-empty:only-child:before,
.bcn-re__pane .bcn-doc:focus p.is-empty:before {
  content: attr(data-placeholder);
  float: left;
  pointer-events: none;
  height: 0;
  color: var(--color-content-default-tertiary);
}
.bcn-bt {
  z-index: 20;
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-strong, var(--color-border-default));
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-3);
  align-items: center;
  padding: 2px;
  display: inline-flex;
  position: absolute;
  left: 0;
}
.bcn-bt[hidden],
.bcn-bt__plus[hidden] {
  display: none;
}
.bcn-bt__seg {
  align-items: center;
  gap: 1px;
  padding: 0 2px;
  display: inline-flex;
}
.bcn-bt__seg + .bcn-bt__seg:before {
  content: "";
  width: 1px;
  margin: var(--spacing-100) 2px var(--spacing-100) 0;
  background: var(--color-border-default);
  align-self: stretch;
}
.bcn-bt__plus {
  left: calc(-1 * var(--spacing-600));
  z-index: 20;
  display: inline-flex;
  position: absolute;
  transform: translateY(-50%);
}
.bcn-ref {
  border-radius: var(--radius-sm);
  background: var(--bcn-aldo-50);
  color: var(--bcn-aldo-600);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  align-items: center;
  padding: 0 0.375rem;
  display: inline-flex;
}
.bcn-sb {
  z-index: 21;
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-strong, var(--color-border-default));
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-3);
  font-family: var(--typography-font-family-sans);
  padding: 2px;
  position: absolute;
}
.bcn-sb[hidden],
.bcn-sb__row[hidden],
.bcn-sb__compose[hidden] {
  display: none;
}
.bcn-sb[data-mode="compose"] {
  box-shadow: none;
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-sb__row {
  align-items: center;
  gap: var(--spacing-100);
  display: flex;
}
.bcn-sb__row:not([data-sb="tools"]) {
  padding: 0 var(--spacing-100) 0 var(--spacing-200);
}
.bcn-sb__rule {
  width: 1px;
  margin: var(--spacing-100) 2px;
  background: var(--color-border-default);
  align-self: stretch;
}
.bcn-sb__aldo {
  align-items: center;
  gap: var(--spacing-150, 0.375rem);
  display: inline-flex;
}
.bcn-sb__result {
  padding-right: var(--spacing-200);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-content-default);
  white-space: nowrap;
}
.bcn-doc .bcn-held {
  background: var(--color-background-elevation-sunken);
  box-shadow: 0 0 0 1px var(--color-background-elevation-sunken);
}
.bcn-doc .bcn-held.is-aldo {
  background: var(--bcn-aldo-50);
  box-shadow: 0 0 0 1px var(--bcn-aldo-50);
}
.bcn-doc .bcn-note:not(.is-resolved) {
  background: var(--bcn-note-tint);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.15s;
}
.bcn-doc .bcn-note.is-lit:not(.is-resolved) {
  background: var(--bcn-note-tint-lit);
}
.bcn-doc .bcn-note-ref {
  font-family: var(--typography-font-family-sans);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-secondary);
  cursor: pointer;
  user-select: none;
  margin-left: 0.1em;
}
.bcn-doc .bcn-note-ref:hover {
  color: var(--color-content-default);
}
.bcn-sb__compose {
  width: min(30rem, 100vw - 2rem);
}
.bcn-doc .bcn-held.is-working {
  background: linear-gradient(
    90deg,
    var(--bcn-aldo-50) 0%,
    var(--bcn-aldo-100) 50%,
    var(--bcn-aldo-50) 100%
  );
  background-size: 200% 100%;
  animation: 1.1s linear infinite bcn-held-shimmer;
}
.bcn-doc .bcn-changed {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  border-radius: 2px;
  animation: 2.8s ease-out forwards bcn-changed;
}
.bcn-doc .bcn-changed-block {
  border-radius: var(--radius-sm);
  animation: 2.8s ease-out forwards bcn-changed-block;
}
.bcn-doc .bcn-changed {
  background-color: var(--bcn-aldo-100);
  animation: none;
}
.bcn-doc .bcn-changed-block {
  background-color: var(--bcn-aldo-50);
  animation: none;
}
.bcn-rn {
  max-width: 44rem;
  margin-top: var(--spacing-700, 2.5rem);
}
.bcn-rn:before {
  content: "";
  width: 6rem;
  height: 1px;
  margin-bottom: var(--spacing-400);
  background: var(--color-content-default-tertiary);
  display: block;
}
.bcn-rn[hidden],
.bcn-rn [hidden][hidden] {
  display: none;
}
.bcn-rn__head {
  align-items: center;
  gap: var(--spacing-200);
  margin-bottom: var(--spacing-300);
  display: flex;
}
.bcn-rn__all {
  gap: var(--spacing-100);
  margin-left: auto;
  display: inline-flex;
}
.bcn-rn__title {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-font-weight-semibold);
  letter-spacing: -0.005em;
  color: var(--color-content-default);
  margin: 0;
}
.bcn-rn .bcn-rn__num .esa-badge,
.bcn-rn__count .esa-badge {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default);
  border: 1px solid var(--color-border-default);
  font-variant-numeric: tabular-nums;
}
.bcn-rn__list {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
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
.bcn-rn .bcn-rn__card {
  column-gap: var(--spacing-200);
  row-gap: var(--spacing-300);
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  display: grid;
}
.bcn-rn .bcn-rn__num {
  grid-column: 1;
  padding-top: 0.15em;
}
.bcn-rn .bcn-rn__passage {
  all: unset;
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-style: italic;
  font-size: var(--typography-body-md-font-size);
  color: var(--color-content-default);
  cursor: pointer;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  grid-column: 2;
  line-height: 1.6;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-rn .bcn-rn__num[hidden] + .bcn-rn__passage {
  grid-column: 1/3;
}
.bcn-rn .bcn-rn__hl {
  background: var(--bcn-note-tint);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  border-radius: 2px;
  padding: 0.05em 0.1em;
  transition: background-color 0.15s;
}
.bcn-rn .bcn-rn__passage:hover:not(:disabled) .bcn-rn__hl {
  background: var(--bcn-note-tint-lit);
}
.bcn-rn .bcn-rn__item[data-resolved] .bcn-rn__hl,
.bcn-rn .bcn-rn__passage:disabled .bcn-rn__hl {
  background: 0 0;
}
.bcn-rn .bcn-rn__passage:disabled {
  cursor: default;
  color: var(--color-content-secondary);
}
.bcn-rn .bcn-rn__passage:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--radius-sm);
}
.bcn-rn .bcn-rn__fold {
  margin: calc(-1 * var(--spacing-100)) calc(-1 * var(--spacing-100)) 0 0;
  grid-area: 1/3;
}
.bcn-rn .bcn-rn__fold svg {
  transition: transform 0.15s;
}
.bcn-rn .bcn-rn__item[data-collapsed] .bcn-rn__fold svg {
  transform: rotate(-90deg);
}
.bcn-rn .bcn-rn__summary,
.bcn-rn .bcn-rn__body {
  grid-column: 2/4;
  min-width: 0;
}
.bcn-rn .bcn-rn__summary {
  margin: calc(-1 * var(--spacing-200)) 0 0;
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-content-secondary);
}
.bcn-rn .bcn-rn__body {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-rn .bcn-rn__item:is([data-collapsed], [data-composing]) .esa-card__footer {
  display: none;
}
.bcn-rn .bcn-rn__thread {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-rn .bcn-rn__entry {
  gap: var(--spacing-200);
  grid-template-columns: 20px minmax(0, 1fr);
  align-items: start;
  display: grid;
}
.bcn-rn .bcn-rn__who-mark {
  padding-top: 1px;
  display: inline-flex;
}
.bcn-rn .bcn-rn__meta {
  align-items: baseline;
  gap: var(--spacing-150, 0.375rem);
  font-family: var(--typography-font-family-sans);
  font-size: var(--typography-label-sm-font-size);
  margin: 0;
  line-height: 20px;
  display: flex;
}
.bcn-rn .bcn-rn__who {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-rn .bcn-rn__when {
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
  font-size: 0.8125rem;
}
.bcn-rn .bcn-rn__when:before {
  content: "·";
  margin-right: var(--spacing-150, 0.375rem);
}
.bcn-rn .bcn-rn__text {
  margin: var(--spacing-050, 0.125rem) 0 0;
  max-width: 62ch;
  font-family: var(--typography-font-family-sans);
  font-size: var(--typography-body-md-font-size);
  color: var(--color-content-default);
  text-wrap: pretty;
  line-height: 1.55;
}
.bcn-rn .bcn-rn__acts {
  align-items: center;
  gap: var(--spacing-100);
  margin: calc(-1 * var(--spacing-100)) calc(-1 * var(--spacing-200));
  display: flex;
}
.bcn-rn .bcn-rn__end {
  margin-left: auto;
  display: inline-flex;
}
.bcn-rn .bcn-rn__compose:empty {
  display: none;
}
.bcn-rn .bcn-rn__item[data-resolved] :is(.bcn-rn__passage, .bcn-rn__text, .bcn-rn__who) {
  color: var(--color-content-secondary);
}
.bcn-rn__resolved {
  margin-top: var(--spacing-400);
}
.bcn-rn__resolved > .bcn-rn__list {
  margin-top: var(--spacing-200);
}
.bcn-rn__resolved [data-rn-toggle] svg {
  transition: transform 0.15s;
}
.bcn-rn__resolved[data-open] [data-rn-toggle] svg {
  transform: rotate(90deg);
}
.bcn-rr__panel-link .esa-icon {
  color: var(--color-content-secondary);
}
.bcn-rr__panel-link:hover .esa-icon {
  color: var(--color-content-default);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.bcn-record-id {
  align-self: center;
  display: inline-flex;
}
.bcn-record-id .esa-badge {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default);
  border: 1px solid var(--color-border-default);
  font-variant-numeric: tabular-nums;
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
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
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
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--avatar-bg`: hsl(200 45% 65%) _(component)_
- `--avatar-font-size-lg`: clamp(1rem, .88rem + .6vw, 1.25rem) _(component)_
- `--avatar-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--avatar-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--avatar-font-size-xs`: clamp(.5rem, .44rem + .3vw, .625rem) _(component)_
- `--avatar-size-lg`: 56px _(component)_
- `--avatar-size-md`: 40px _(component)_
- `--avatar-size-sm`: 28px _(component)_
- `--avatar-size-xs`: 20px _(component)_
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-aldo`: #08908b _(component)_
- `--bcn-aldo-100`: #cfeceb _(component)_
- `--bcn-aldo-50`: #e8f6f5 _(component)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-aldo-prompt-ring`: #08908b8c _(component)_
- `--bcn-aldo-prompt-shadow`: 0 1px 2px #1018200f, 0 10px 24px -6px #10182024, 0 28px 60px -18px #08908b61 _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--bcn-note-tint`: #fff7c2 _(component)_
- `--bcn-note-tint-lit`: #fbe577 _(component)_
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
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-link`: #005862 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-secondary`: #525252 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--elevation-3`: 0 4px 20px -4px #0000000f _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--font-weight-medium`: 500 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-lg-font-size`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-heading-md-font-size`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(semantic)_
- `--typography-label-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-label-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-label-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-2xs-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-meta-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-meta-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-meta-font-weight`: 350 _(semantic)_
- `--typography-meta-letter-spacing`: .01em _(semantic)_
- `--typography-meta-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-subtle-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-font-weight`: 500 _(semantic)_
- `--typography-microcopy-md-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-subtle-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
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
- `--typography-title-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
