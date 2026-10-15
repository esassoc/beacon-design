# Aldo

The conversation that scopes, checks and steers the scan of the file in view, dense at 13px, with the composer always in view and the run's status pinned above it: reading (blue), stopped for the check (yellow), done (green). The run stops after its first three commitments; Aldo says what to check, then gives each commitment its own message: a lead (where it took the ID and name from, how far the text runs) and a card with the ID, name and quoted text (clamped, with Show all), a p. N button, Looks right and Fix. Fix opens the ID, name and text as fields, with Save and Redraw the box. Edit ID and name on the page toolbar opens the same fields for any commitment. Requirements, timing and parties are reviewed in step 2.

## Key decisions
- Needs you: what waits on the person is listed under the log with its answers until answered (the check, a flagged reference with Dismiss / Keep it / Skip all cross-references, a headless passage with Merge / Keep separate, pages with nothing found with Mark on p. N / Nothing there, a drawn box with no ID). The log keeps the notice text; the buttons live only in the list.
- After the check: Read the rest (fast, the default), Watch it, One at a time. Before it, the status reads "Stopping after 3 commitments for your check", never a pause.
- A question is answered and changes nothing; a message too short to act on gets its readings as buttons. Prod's structured call needs answer and unclear kinds.
- Instructions in effect, collapsed under the log with a count: the scope, each rule with the page it took effect from, each fix from the check.
- A scanned file (no text layer) shows Reading page images, p. N of M in its row, the status and Aldo's opening until OCR is done; nothing else starts before it.
- A check card is the ID, the name and the text, stacked. Timing, parties and the MMRP's columns are step 2's, not the card's.
- A paused run offers Review the N so far.
- Mark them myself (on the opening): the person draws each commitment; Aldo names what is inside each box. Status: "By hand. N marked."
- The check is the training step: what the person fixes there becomes an instruction for the rest of the file.
- Buttons carry meaning in their color: green to accept, red to remove (Dismiss), blue to change the record (Merge, Re-read), the primary for the next step, neutral otherwise. Only send is Aldo's green.
- A name fixed at the check is the commitment's name in step 2.
- One structured-output call per message returns actions and a one-line reply; sw3-steer.ts is the schema, with a pattern matcher standing in for the model.
- Each file keeps its own conversation; switching files switches the thread.

## Done when
- At the check, Needs you reads "Check the first 3: 3 left." All look right, then Read the rest: the run goes on at Fast.
- When the run is done: Needs you lists COA 11.32, the top of p. 156 and pp. 152 to 154; Keep it on 11.32 and Merge on p. 156 leave one, and the status reads "1 to settle."
- Type "why did you flag 11.32?": Aldo explains and the instructions are unchanged.
- On the MMRP, Mark them myself, then drag over MM AES-1a: Aldo reads it as MM AES-1a and the status reads "By hand. 1 marked."
- Fix COA 11.1, change its name, Save: the card reads Fixed, and step 2 shows the new name.
- Looks right on the other two, then Resume: the run goes on.
- Reload: every file's conversation and run are where they were.

## Markup
```html
<div
  class="bcn-aldo-panel bcn-aldo-panel--glow"
  data-aldo-panel=""
  data-sw3-aldo="true"
  data-review="/beacon-design/prototypes/setup-wizard-3-step/review"
>
  <section class="bcn-aldo-panel__body" aria-label="Aldo">
    <header class="bcn-aldo-panel__head">
      <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
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
              <circle cx="12" cy="12" r="10"></circle></svg></span></span
      ></span>
      <h3 class="bcn-aldo-panel__title">Aldo</h3>
      <span class="bcn-aldo-panel__close"
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Collapse Aldo"
            title="Collapse Aldo"
            data-aldo-collapse="true"
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
                <path d="m6 17 5-5-5-5"></path>
                <path d="m13 17 5-5-5-5"></path></svg
            ></span></button></span
      ></span>
    </header>
    <ol class="bcn-aldo-thread" data-aldo-thread="" aria-live="polite">
      <li class="bcn-aldo-msg" data-from="aldo" data-kind="opening">
        <span class="bcn-aldo-msg__who" data-msg-who="">Aldo</span>
        <p class="bcn-aldo-msg__text" data-msg-text="">
          I read the contents and headings of the ITP. The commitments are in VIII.
          Conditions of Approval, pp. 80–244: about 293. Condition 11, Take Minimization
          Measures, holds 158 of them on pp. 131–223, in three parts: Multi-Species,
          Construction Phase, and Operations Phases. Tell me where to start, or scan
          Condition 11.
        </p>
        <div class="bcn-aldo-msg__extra" data-msg-extra=""></div>
        <span class="bcn-aldo-actions" data-msg-acts=""
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--xs"
            ><button class="esa-button__native typography-microcopy-2xs" type="button">
              <span class="esa-button__label">Scan Condition 11</span>
            </button></span
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
            ><button class="esa-button__native typography-microcopy-2xs" type="button">
              <span class="esa-button__label">Mark them myself</span>
            </button></span
          ></span
        >
      </li>
    </ol>
    <div class="bcn-aldo-instructions" data-aldo-instructions="" hidden="">
      <details class="esa-collapsible esa-collapsible--flush">
        <summary class="esa-collapsible__summary typography-label-sm-strong">
          <span class="esa-collapsible__title">Instructions in effect</span>
        </summary>
        <div class="esa-collapsible__body typography-body-md">
          <ol class="bcn-aldo-instructions__list" data-instructions-list=""></ol>
        </div>
      </details>
    </div>
    <section class="bcn-aldo-needs" data-aldo-needs="" aria-label="Needs you" hidden="">
      <h4 class="bcn-aldo-needs__head">
        Needs you
        <span data-needs-count=""
          ><span
            class="esa-badge esa-badge--warning esa-badge--xs typography-microcopy-2xs-strong"
            ><span class="esa-badge__text">0</span></span
          ></span
        >
      </h4>
      <ul class="bcn-aldo-needs__list" data-needs-list=""></ul>
    </section>
    <div class="bcn-aldo-status" data-aldo-status="" role="status" hidden="">
      <div data-tone="info" hidden="">
        <div class="esa-alert-box esa-alert-box--info typography-body-sm">
          <div class="esa-alert-box__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <div class="esa-alert-box__body">
            <div class="esa-alert-box__message"><span data-status-text=""></span></div>
          </div>
        </div>
        <script type="module">
          document.addEventListener(`click`, (e) => {
            let t = e.target.closest?.(`[data-esa-alert-dismiss]`);
            if (!t) return;
            let n = t.closest(`.esa-alert-box`);
            if (!n) return;
            let r = Array.from(document.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
                (e) => !n.contains(e) && e.offsetParent !== null,
              ),
              i =
                r.find(
                  (e) => n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                ) ?? r[r.length - 1];
            ((n.style.display = `none`),
              n.dispatchEvent(new CustomEvent(`dismissed`, { bubbles: !0 })),
              i?.focus());
          });
        </script>
      </div>
      <div data-tone="warning" hidden="">
        <div class="esa-alert-box esa-alert-box--warning typography-body-sm">
          <div class="esa-alert-box__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path
                d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
              ></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </div>
          <div class="esa-alert-box__body">
            <div class="esa-alert-box__message"><span data-status-text=""></span></div>
          </div>
        </div>
      </div>
      <div data-tone="success" hidden="">
        <div class="esa-alert-box esa-alert-box--success typography-body-sm">
          <div class="esa-alert-box__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <div class="esa-alert-box__body">
            <div class="esa-alert-box__message"><span data-status-text=""></span></div>
          </div>
        </div>
      </div>
      <div data-tone="neutral" hidden="">
        <div class="esa-alert-box esa-alert-box--info typography-body-sm">
          <div class="esa-alert-box__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <div class="esa-alert-box__body">
            <div class="esa-alert-box__message"><span data-status-text=""></span></div>
          </div>
        </div>
      </div>
      <span class="bcn-aldo-actions" data-status-action=""></span>
    </div>
    <div class="bcn-aldo-composer" data-aldo-composer="" data-mode="thread">
      <div class="bcn-aldo-actions bcn-aldo-composer__suggest" data-composer-suggest="">
        <span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
          ><button class="esa-button__native typography-microcopy-2xs" type="button">
            <span class="esa-button__label">Only Condition 11</span>
          </button></span
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
          ><button class="esa-button__native typography-microcopy-2xs" type="button">
            <span class="esa-button__label">Only the construction measures</span>
          </button></span
        >
      </div>
      <form class="bcn-aldo-composer__shell" data-composer-form="">
        <esa-textarea
          class="bcn-aldo-composer__field"
          data-composer-input="true"
          size="md"
          rows="1"
          max-rows="6"
          auto-resize=""
          aria-label="Message Aldo"
          placeholder="Tell Aldo what to read, skip or fix"
        ></esa-textarea
        ><span class="bcn-aldo-composer__send"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              aria-label="Send"
              title="Send"
              data-composer-send="true"
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
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path></svg
              ></span></button></span
        ></span>
      </form>
    </div>
    <script
      type="module"
      src="/beacon-design/_astro/BcnAldoComposer.astro_astro_type_script_index_0_lang.Dwj09Asy.js"
    ></script>
  </section>
  <button
    type="button"
    class="bcn-aldo-panel__rail"
    data-aldo-expand=""
    aria-label="Show Aldo"
    title="Show Aldo"
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
        <path d="m11 17-5-5 5-5"></path>
        <path d="m18 17-5-5 5-5"></path></svg></span
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
    ><span class="bcn-aldo-panel__railname">Aldo</span
    ><span class="bcn-aldo-panel__dot" data-aldo-dot="" hidden=""
      ><span
        class="esa-badge esa-badge--warning esa-badge--xs typography-microcopy-2xs-strong esa-badge--dot"
        ><span class="visually-hidden">Something needs you</span></span
      ></span
    >
  </button>
  <div class="bcn-aldo-parts" data-aldo-parts="" hidden="">
    <template data-part="message"
      ><li class="bcn-aldo-msg">
        <span class="bcn-aldo-msg__who" data-msg-who=""></span>
        <p class="bcn-aldo-msg__text" data-msg-text=""></p>
        <div class="bcn-aldo-msg__extra" data-msg-extra=""></div>
        <span class="bcn-aldo-actions" data-msg-acts=""></span></li></template
    ><template data-part="button-neutral"
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
        data-astro-cid-4xhmycw5=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-4xhmycw5=""
        >
          <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
        </button></span
      ></template
    ><template data-part="button-primary"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--xs"
        data-astro-cid-4xhmycw5=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-4xhmycw5=""
        >
          <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
        </button></span
      ></template
    ><template data-part="button-success"
      ><span
        class="esa-button esa-button--variant-success esa-button--appearance-fill esa-button--xs"
        data-astro-cid-4xhmycw5=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-4xhmycw5=""
        >
          <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
        </button></span
      ></template
    ><template data-part="button-danger"
      ><span
        class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--xs"
        data-astro-cid-4xhmycw5=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-4xhmycw5=""
        >
          <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
        </button></span
      ></template
    ><template data-part="button-info"
      ><span
        class="esa-button esa-button--variant-info esa-button--appearance-soft esa-button--xs"
        data-astro-cid-4xhmycw5=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-4xhmycw5=""
        >
          <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
        </button></span
      ></template
    ><template data-part="badge"
      ><span
        ><span
          class="bcn-cbadge bcn-cbadge--sm"
          data-astro-cid-cqxc3yz3=""
        ></span></span></template
    ><template data-part="mark"
      ><span
        ><span
          class="bcn-aldo-mark"
          data-size="sm"
          aria-hidden="true"
          data-astro-cid-lgb5fntv=""
          ><span class="bcn-aldo-mark__glyph" data-astro-cid-lgb5fntv=""
            ><span
              class="esa-icon esa-icon--xs"
              aria-hidden="true"
              data-astro-cid-c7ivvrtd=""
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
                data-astro-cid-c7ivvrtd=""
              >
                <path
                  d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                ></path>
                <circle cx="12" cy="12" r="10"></circle></svg></span></span></span></span
    ></template>
  </div>
  <script
    type="module"
    src="/beacon-design/_astro/BcnAldoParts.astro_astro_type_script_index_0_lang.BRJ_zMw6.js"
  ></script>
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
/* No box of its own — the buttons stay direct flex items of the host. */
.esa-button-group__slot {
  display: contents;
}
/* Both message nodes ALWAYS render — a live region created at the same moment as
       its text is routinely not announced, so it has to already exist. When empty they
       carry .visually-hidden, which takes them out of flow: .field is a flex column
       with a gap, so an in-flow empty node would spend 4px of dead space each.
       Deliberately NOT display:none, which drops them from the accessibility tree. */

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100, 4px);
}
/* Both message nodes are ALWAYS rendered — a live region created at the same moment
       as its text is routinely not announced, so it has to already exist. When there is
       nothing to say they carry .visually-hidden, which takes them out of flow: .field
       is a flex column with a gap, so an in-flow empty node would spend 4px of dead
       space per message. Deliberately NOT display:none, which would drop them from the
       accessibility tree and defeat the arrangement entirely. */

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100, 4px);
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
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.visually-hidden--focusable:focus,
.visually-hidden--focusable:focus-within,
.visually-hidden--focusable:active {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  white-space: normal;
  clip: auto;
  clip-path: none;
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
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
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
.bcn-aldo-panel {
  --_aldo-text: 0.8125rem;
  --_aldo-meta: 0.75rem;
  --_aldo-weight-body: 400;
  --_aldo-weight-meta: 500;
  --_aldo-weight-strong: 600;
  --_aldo-radius: var(--radius-200);
  --_aldo-radius-sm: var(--radius-100);
  --_aldo-gap: var(--spacing-150, 0.375rem);
  --_aldo-pad: var(--spacing-400);
  --_aldo-line: var(--border-width-default, 1px);
  min-height: 0;
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-body);
  flex-direction: column;
  line-height: 1.4;
  display: flex;
}
.bcn-aldo-panel__body {
  background: var(--color-background-elevation-raised);
  border-radius: var(--_aldo-radius);
  flex-direction: column;
  flex: 1;
  min-height: 0;
  display: flex;
}
.bcn-aldo-panel--glow .bcn-aldo-panel__body {
  border: var(--_aldo-line) solid var(--bcn-aldo-100);
  box-shadow: var(--bcn-aldo-prompt-shadow);
}
.bcn-aldo-panel__head {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--_aldo-pad);
  border-bottom: var(--_aldo-line) solid var(--color-border-default-subtle);
  display: flex;
}
.bcn-aldo-panel__title {
  font-size: 0.875rem;
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-aldo-panel__close {
  margin-left: auto;
}
.bcn-aldo-panel__rail,
[data-aldo="closed"] .bcn-aldo-panel__body {
  display: none;
}
[data-aldo="closed"] .bcn-aldo-panel__rail {
  display: flex;
}
.bcn-aldo-panel__rail {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) 0;
  border: var(--_aldo-line) solid var(--bcn-aldo-100);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-2);
  color: var(--color-content-default-secondary);
  font: inherit;
  cursor: pointer;
  flex-direction: column;
  flex: 1;
}
.bcn-aldo-panel__rail:hover {
  color: var(--color-content-default);
  background: var(--color-background-elevation-sunken);
}
.bcn-aldo-panel__rail:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-aldo-panel__railname {
  writing-mode: vertical-rl;
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
}
.bcn-aldo-panel__dot {
  display: inline-flex;
}
.bcn-aldo-panel__dot[hidden] {
  display: none;
}
.bcn-aldo-thread {
  gap: var(--spacing-400);
  min-height: 8rem;
  padding: var(--_aldo-pad);
  flex-direction: column;
  flex: 1;
  margin: 0;
  list-style: none;
  display: flex;
  overflow-y: auto;
}
.bcn-aldo-msg {
  gap: var(--_aldo-gap);
  flex-direction: column;
  max-width: 94%;
  animation: 0.22s ease-out bcn-aldo-in;
  display: flex;
}
.bcn-aldo-msg[data-from="aldo"] {
  align-self: flex-start;
}
.bcn-aldo-msg[data-from="you"] {
  align-self: flex-end;
  align-items: flex-end;
}
.bcn-aldo-msg[data-from="system"] {
  align-self: center;
  align-items: center;
}
.bcn-aldo-msg__who {
  font-size: var(--_aldo-meta);
  font-weight: var(--_aldo-weight-meta);
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
}
.bcn-aldo-msg__who[hidden],
.bcn-aldo-msg__text[hidden] {
  display: none;
}
.bcn-aldo-msg__text {
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--_aldo-radius);
  color: var(--color-content-default);
  white-space: pre-line;
  margin: 0;
}
.bcn-aldo-msg[data-from="aldo"] .bcn-aldo-msg__text {
  background: var(--bcn-aldo-50);
}
.bcn-aldo-msg[data-from="you"] .bcn-aldo-msg__text {
  background: var(--color-background-default);
  border: var(--_aldo-line) solid var(--color-border-default-subtle);
}
.bcn-aldo-msg[data-via="button"] .bcn-aldo-msg__text,
.bcn-aldo-msg[data-from="system"] .bcn-aldo-msg__text {
  color: var(--color-content-default-secondary);
  font-weight: var(--_aldo-weight-meta);
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-aldo-msg__extra {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-aldo-msg__extra:empty {
  display: none;
}
.bcn-aldo-msg[data-kind="check"] {
  width: 100%;
  max-width: 100%;
  margin-bottom: var(--spacing-200);
}
.bcn-aldo-actions {
  gap: var(--_aldo-gap);
  flex-wrap: wrap;
  display: flex;
}
.bcn-aldo-actions:empty {
  display: none;
}
.bcn-aldo-instructions {
  margin: 0 var(--_aldo-pad) var(--spacing-200);
  padding: 0 var(--spacing-300);
  border: var(--_aldo-line) solid var(--color-border-default-subtle);
  border-radius: var(--_aldo-radius-sm);
  background: var(--color-background-elevation-sunken);
  --typography-label-sm-strong-font-size: var(--_aldo-text);
}
.bcn-aldo-instructions[hidden] {
  display: none;
}
.bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: var(--_aldo-gap);
}
.bcn-aldo-instructions__list {
  gap: var(--_aldo-gap);
  max-height: 9rem;
  padding: 0 0 var(--spacing-200) var(--spacing-400);
  font-size: var(--_aldo-text);
  flex-direction: column;
  margin: 0;
  line-height: 1.35;
  display: flex;
  overflow-y: auto;
}
.bcn-aldo-instructions__from {
  color: var(--color-content-default-secondary);
  font-size: var(--_aldo-meta);
  font-weight: var(--_aldo-weight-meta);
}
.bcn-aldo-needs {
  margin: 0 var(--_aldo-pad) var(--spacing-200);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius-sm);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-1);
  overflow: hidden;
}
.bcn-aldo-needs[hidden] {
  display: none;
}
.bcn-aldo-needs__head {
  align-items: center;
  gap: var(--_aldo-gap);
  padding: var(--_aldo-gap) var(--spacing-300);
  background: var(--color-background-elevation-sunken);
  border-bottom: var(--_aldo-line) solid var(--color-border-default);
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.bcn-aldo-needs__list {
  max-height: 13rem;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
}
.bcn-aldo-needs__item {
  gap: var(--_aldo-gap);
  padding: var(--spacing-200) var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-aldo-needs__item + .bcn-aldo-needs__item {
  border-top: var(--_aldo-line) solid var(--color-border-default-subtle);
}
.bcn-aldo-needs__text {
  font: inherit;
  font-weight: var(--_aldo-weight-meta);
  color: var(--color-content-default);
  text-align: left;
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  line-height: 1.35;
}
button.bcn-aldo-needs__text {
  cursor: pointer;
}
button.bcn-aldo-needs__text:hover {
  text-decoration: underline;
}
button.bcn-aldo-needs__text:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-aldo-needs__item .bcn-aldo-actions {
  gap: var(--spacing-100);
}
.bcn-aldo-status {
  padding: 0 var(--_aldo-pad) var(--spacing-200);
}
.bcn-aldo-status[hidden],
.bcn-aldo-status > [hidden] {
  display: none;
}
.bcn-aldo-status .esa-alert-box {
  padding: var(--_aldo-gap) var(--spacing-250, 0.625rem);
  font-size: var(--_aldo-text);
  align-items: center;
}
.bcn-aldo-status .esa-alert-box__icon svg {
  width: 16px;
  height: 16px;
}
.bcn-aldo-status [data-tone="neutral"] {
  --color-background-utility-info-subtle: var(--color-background-elevation-sunken);
  --color-border-utility-info: var(--color-border-default);
  --color-content-utility-info: var(--color-content-default-secondary);
}
.bcn-aldo-status > .bcn-aldo-actions {
  margin-top: var(--_aldo-gap);
}
.bcn-aldo-composer__suggest {
  padding: 0 var(--_aldo-pad) var(--spacing-200);
  gap: var(--spacing-200);
}
.bcn-aldo-composer__shell {
  align-items: flex-end;
  gap: var(--spacing-200);
  margin: 0 var(--spacing-300) var(--spacing-300);
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) var(--spacing-300);
  border: var(--_aldo-line) solid var(--bcn-aldo-100);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--bcn-aldo-prompt-shadow);
  display: flex;
}
.bcn-aldo-composer__shell:focus-within {
  outline: var(--focus-ring-width, 2px) solid var(--bcn-aldo-prompt-ring);
}
.bcn-aldo-composer__field {
  --focus-ring-color: var(--color-background-elevation-raised);
  --form-border-width: 0;
  flex: 1;
  min-width: 0;
}
.bcn-aldo-composer__send {
  --button-radius-sm: 999px;
  --color-background-brand: var(--bcn-aldo);
  --color-background-brand-hover: var(--bcn-aldo-600);
  padding-bottom: var(--spacing-100);
  display: inline-flex;
}
.bcn-aldo-composer[data-busy] .bcn-aldo-composer__shell {
  opacity: 0.7;
}
.bcn-sw3tools esa-button-group,
.bcn-sw3tools .esa-button,
.bcn-sw3tools esa-dropdown-menu {
  flex: none;
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
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush {
  background: 0 0;
  border: none;
  border-radius: 0;
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  color: var(--color-content-default, #202020);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.esa-collapsible__summary::-webkit-details-marker {
  display: none;
}
.esa-collapsible__summary:after {
  content: "";
  border-right: 2px solid var(--color-content-default-secondary, #646464);
  border-bottom: 2px solid var(--color-content-default-secondary, #646464);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-collapsible__body {
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--spacing-400, 1rem) var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
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
.visually-hidden--focusable:focus,
.visually-hidden--focusable:focus-within,
.visually-hidden--focusable:active {
  white-space: normal;
  clip: auto;
  clip-path: none;
  width: auto;
  height: auto;
  margin: 0;
  position: static;
  overflow: visible;
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
.esa-alert-box {
  --_alert-bg: var(--color-background-utility-info-subtle, #fbfdff);
  --_alert-border: var(--color-border-utility-info, #acd8fc);
  --_alert-accent: var(--color-content-utility-info, #0d74ce);
  --_alert-icon-color: var(--_alert-accent);
  --_alert-title-color: var(--_alert-accent);
  --_alert-text-color: var(
    --alert-box-text-color,
    var(--color-content-default-secondary, #646464)
  );
  align-items: flex-start;
  gap: var(--spacing-300, 0.75rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  border: var(--border-width-default, 1px) solid var(--_alert-border);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--_alert-bg);
  display: flex;
}
.esa-alert-box--success {
  --_alert-bg: var(--color-background-utility-success-subtle, #fbfefc);
  --_alert-border: var(--color-border-utility-success, #adddc0);
  --_alert-accent: var(--color-content-utility-success, #218358);
}
.esa-alert-box--warning {
  --_alert-bg: var(--color-background-utility-warning-subtle, #fefdfb);
  --_alert-border: var(--color-border-utility-warning, #f3d673);
  --_alert-accent: var(--color-content-utility-warning, #ab6400);
}
.esa-alert-box--danger {
  --_alert-bg: var(--color-background-utility-danger-subtle, #fffcfc);
  --_alert-border: var(--color-border-utility-danger, #fdbdbe);
  --_alert-accent: var(--color-content-utility-danger, #ce2c31);
}
.esa-alert-box__icon {
  color: var(--_alert-icon-color);
  flex-shrink: 0;
  padding-top: 1px;
}
.esa-alert-box__body {
  flex: 1;
  min-width: 0;
}
.esa-alert-box__title {
  color: var(--_alert-title-color);
  margin-bottom: var(--spacing-050, 0.125rem);
  display: block;
}
.esa-alert-box__message {
  color: var(--_alert-text-color);
}
.esa-alert-box__dismiss {
  border-radius: var(--radius-sm, 0.25rem);
  width: 24px;
  height: 24px;
  color: var(--color-content-default-secondary, #646464);
  cursor: pointer;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.esa-alert-box__dismiss:hover {
  color: var(--color-content-default, #202020);
  background: var(--color-background-overlay-strong-hover, #0000000f);
}
.esa-alert-box__dismiss:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
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
- `--alert-box-text-color`: #525252 _(component)_
- `--animation-spin`: .75s linear infinite _(semantic)_
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
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-strong-hover`: #0000000d _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-danger-subtle`: #fffcfc _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-success-subtle`: #fbfefc _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-background-utility-warning-subtle`: #fefdfb _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--elevation-1`: 0 1px 4px 0 #00000008 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
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
- `--transition-fast`: .15s ease _(semantic)_
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
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
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
- `--typography-microcopy-2xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
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
- `--typography-microcopy-xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
