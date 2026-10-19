# Aldo

A conversation per commitment. The person says what to change in their own words: you missed this (with words selected, or quoted), split this, merge two (@ each), this is not a requirement, this is Reporting, add Delta smelt, why this, or a rule for every commitment ("always split numbered items like (1) and (2)"). Aldo answers with what it would change; nothing applies until the proposal is pressed. Selecting words in the text attaches them, with Add as a requirement, Not binding and Split here as suggestions. What the review flags is Open items, each with its answers. Rules are Instructions in effect.

## Key decisions
- Words already inside a requirement are not added twice: Aldo offers to split that requirement there.
- A split part takes the type its own words say, else the whole's, and keeps the species and milestones its words name.
- Folds to a rail; starts folded below 1440px wide so the text has room, and remembers what the person chose.

## Gotchas
- In prod one structured-output call reads the message with the commitment, its requirements and the project's entities; the prototype reads it deterministically (sw3-review-talk.ts), so every demo run answers the same.

## Done when
- COA 11.2: select "Notifications shall include the name of the facility…", Add as a requirement; Aldo offers to split "Notify CDFW of Injury…" there; Split it there makes a third, Reporting.
- COA 11.3: "Rule: always split numbered items like (1) and (2) into their own requirements"; Split makes one requirement per numbered item.

## Markup
```html
<div
  class="bcn-aldo-panel bcn-aldo-panel--glow"
  data-aldo-panel=""
  data-sw3-review-aldo="true"
>
  <section class="bcn-aldo-panel__body" aria-label="Aldo">
    <header class="bcn-aldo-panel__head">
      <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
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
          ></circle></svg
      ></span>
      <h3 class="bcn-aldo-panel__title">Aldo</h3>
      <button
        type="button"
        class="bcn-aldo-panel__waiting"
        data-aldo-side-toggle=""
        aria-expanded="false"
        aria-controls="aldo-side"
        hidden=""
      >
        <span data-waiting-count="" hidden=""
          ><span
            class="esa-badge esa-badge--warning esa-badge--xs typography-microcopy-2xs-strong"
            ><span class="esa-badge__text">0</span></span
          ></span
        ><span data-waiting-label="">Instructions (0)</span
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
            <path d="m6 9 6 6 6-6"></path></svg
        ></span></button
      ><span class="bcn-aldo-panel__expand"
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Expand Aldo"
            title="Expand Aldo"
            data-ico="maximize-2"
            data-aldo-overlay="open"
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
                data-ico="maximize-2"
              >
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" x2="14" y1="3" y2="10"></line>
                <line x1="3" x2="10" y1="21" y2="14"></line></svg
            ></span></button></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Dock Aldo"
            title="Dock Aldo"
            data-ico="minimize-2"
            data-aldo-overlay="dock"
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
                data-ico="minimize-2"
              >
                <polyline points="4 14 10 14 10 20"></polyline>
                <polyline points="20 10 14 10 14 4"></polyline>
                <line x1="14" x2="21" y1="10" y2="3"></line>
                <line x1="3" x2="10" y1="21" y2="14"></line></svg
            ></span></button></span></span
      ><span class="bcn-aldo-panel__close"
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
    <div class="bcn-aldo-panel__main">
      <ol class="bcn-aldo-thread" data-aldo-thread="" aria-live="polite">
        <li class="bcn-aldo-msg" data-from="aldo" data-kind="opening">
          <span class="bcn-aldo-msg__who" data-msg-who="">Aldo</span>
          <div class="bcn-aldo-msg__bubble">
            <p
              class="bcn-aldo-msg__text"
              data-msg-text=""
              data-raw="3 requirements in 11.1. Nothing to settle."
            >
              3 requirements in 11.1. Nothing to settle.
            </p>
            <span class="bcn-aldo-msg__tools" data-msg-tools="" data-keys="copy"
              ><span
                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-2xs"
                  type="button"
                  aria-label="Copy message"
                  title="Copy message"
                  data-ico="copy"
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
                      data-ico="copy"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path
                        d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                      ></path></svg
                  ></span></button></span
            ></span>
          </div>
          <div class="bcn-aldo-msg__extra" data-msg-extra=""></div>
          <span class="bcn-aldo-actions" data-msg-acts=""></span
          ><time class="bcn-aldo-msg__time" data-msg-time="" hidden=""></time>
        </li>
      </ol>
      <div class="bcn-aldo-composer" data-aldo-composer="" data-mode="thread">
        <div
          class="bcn-aldo-actions bcn-aldo-composer__suggest"
          data-composer-suggest=""
        ></div>
        <div class="bcn-aldo-composer__anchor">
          <ul
            class="bcn-aldo-composer__menu"
            data-composer-menu=""
            role="listbox"
            aria-label="Suggestions"
            hidden=""
          ></ul>
          <form class="bcn-aldo-composer__shell" data-composer-form="">
            <div class="bcn-aldo-composer__context" data-composer-context="">
              <span
                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                data-kind="entity"
                data-auto=""
                title="Attached from where you are"
                ><span class="esa-pill__label">11.1</span
                ><button
                  class="esa-pill__remove"
                  type="button"
                  aria-label="Remove"
                  data-esa-pill-remove=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg></button
              ></span>
            </div>
            <esa-textarea
              class="bcn-aldo-composer__field"
              data-composer-input="true"
              size="md"
              rows="1"
              max-rows="6"
              auto-resize=""
              aria-label="Message Aldo"
              placeholder="Say what to change"
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
          <p class="bcn-aldo-composer__drop" data-composer-drop="" hidden="">
            Drop to attach
          </p>
        </div>
      </div>
      <script
        type="module"
        src="/beacon-design/_astro/BcnAldoComposer.astro_astro_type_script_index_0_lang.Dwj09Asy.js"
      ></script>
    </div>
    <!-- What waits on the person and what governs Aldo: a tray from the header when docked,
         a sidebar beside the conversation when expanded. -->
    <aside
      class="bcn-aldo-panel__side"
      id="aldo-side"
      data-aldo-side=""
      aria-label="Open items and instructions"
    >
      <section
        class="bcn-aldo-needs"
        data-aldo-needs=""
        aria-label="Open items"
        hidden=""
      >
        <h4 class="bcn-aldo-needs__head">
          <button
            type="button"
            class="bcn-aldo-needs__toggle"
            data-needs-toggle=""
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
                <path d="m6 9 6 6 6-6"></path></svg></span
            ><span>Open items</span
            ><span data-needs-count=""
              ><span
                class="esa-badge esa-badge--warning esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">0</span></span
              ></span
            >
          </button>
        </h4>
        <ul class="bcn-aldo-needs__list" data-needs-list=""></ul>
      </section>
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
    </aside>
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
    ><span class="bcn-aldo-panel__railname">Aldo</span
    ><span class="bcn-aldo-panel__dot" data-aldo-dot="" hidden=""
      ><span
        class="esa-badge esa-badge--warning esa-badge--xs typography-microcopy-2xs-strong esa-badge--dot"
        ><span class="visually-hidden">An open item waits</span></span
      ></span
    >
  </button>
  <div class="bcn-aldo-parts" data-aldo-parts="" hidden="">
    <template data-part="message"
      ><li class="bcn-aldo-msg">
        <span class="bcn-aldo-msg__who" data-msg-who=""></span>
        <div class="bcn-aldo-msg__bubble">
          <p class="bcn-aldo-msg__text" data-msg-text=""></p>
          <span class="bcn-aldo-msg__tools" data-msg-tools=""></span>
        </div>
        <div class="bcn-aldo-msg__extra" data-msg-extra=""></div>
        <span class="bcn-aldo-actions" data-msg-acts=""></span
        ><time
          class="bcn-aldo-msg__time"
          data-msg-time=""
          hidden=""
        ></time></li></template
    ><template data-part="button-neutral"
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-5nhxdd72=""
        >
          <span class="esa-button__label" data-astro-cid-5nhxdd72="">Action</span>
        </button></span
      ></template
    ><template data-part="button-primary"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--xs"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-5nhxdd72=""
        >
          <span class="esa-button__label" data-astro-cid-5nhxdd72="">Action</span>
        </button></span
      ></template
    ><template data-part="button-success"
      ><span
        class="esa-button esa-button--variant-success esa-button--appearance-fill esa-button--xs"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-5nhxdd72=""
        >
          <span class="esa-button__label" data-astro-cid-5nhxdd72="">Action</span>
        </button></span
      ></template
    ><template data-part="button-danger"
      ><span
        class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--xs"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-5nhxdd72=""
        >
          <span class="esa-button__label" data-astro-cid-5nhxdd72="">Action</span>
        </button></span
      ></template
    ><template data-part="button-info"
      ><span
        class="esa-button esa-button--variant-info esa-button--appearance-soft esa-button--xs"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-5nhxdd72=""
        >
          <span class="esa-button__label" data-astro-cid-5nhxdd72="">Action</span>
        </button></span
      ></template
    ><template data-part="badge"
      ><span
        ><span
          class="bcn-cbadge bcn-cbadge--sm"
          data-astro-cid-cqxc3yz3=""
        ></span></span></template
    ><template data-part="copy"
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          aria-label="Copy message"
          title="Copy message"
          data-ico="copy"
          data-astro-cid-5nhxdd72=""
        >
          <span
            class="esa-icon esa-icon--xs"
            aria-hidden="true"
            data-astro-cid-wcwfib5m=""
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
              data-astro-cid-wcwfib5m=""
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path></svg
          ></span></button></span></template
    ><template data-part="chip"
      ><span
        class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
        data-astro-cid-xtwxlazl=""
        ><span class="esa-pill__label" data-astro-cid-xtwxlazl="">Context</span
        ><button
          class="esa-pill__remove"
          type="button"
          aria-label="Remove"
          data-esa-pill-remove=""
          data-astro-cid-xtwxlazl=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            data-astro-cid-xtwxlazl=""
          >
            <path d="M18 6 6 18" data-astro-cid-xtwxlazl=""></path>
            <path d="m6 6 12 12" data-astro-cid-xtwxlazl=""></path>
          </svg></button
      ></span>
      <script type="module">
        document.addEventListener(
          `click`,
          (e) => {
            let t = e.target.closest?.(`[data-esa-pill-remove]`);
            if (!t) return;
            e.stopPropagation();
            let n = t.closest(`.esa-pill`);
            n &&
              (n.dispatchEvent(new CustomEvent(`removed`, { bubbles: !0 })), n.remove());
          },
          !0,
        );
      </script></template
    ><template data-part="chip-fixed"
      ><span
        class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
        data-astro-cid-xtwxlazl=""
        ><span class="esa-pill__label" data-astro-cid-xtwxlazl="">Context</span></span
      >
      <script type="module">
        document.addEventListener(
          `click`,
          (e) => {
            let t = e.target.closest?.(`[data-esa-pill-remove]`);
            if (!t) return;
            e.stopPropagation();
            let n = t.closest(`.esa-pill`);
            n &&
              (n.dispatchEvent(new CustomEvent(`removed`, { bubbles: !0 })), n.remove());
          },
          !0,
        );
      </script></template
    ><template data-part="tool"
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          aria-label="Tool"
          title="Tool"
          data-astro-cid-5nhxdd72=""
        >
          <span
            class="esa-icon esa-icon--xs"
            aria-hidden="true"
            data-astro-cid-wcwfib5m=""
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
              data-astro-cid-wcwfib5m=""
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path></svg
          ></span></button></span></template
    ><template data-part="mark"
      ><span
        ><span
          class="bcn-aldo-mark"
          data-size="sm"
          aria-hidden="true"
          data-astro-cid-lgb5fntv=""
          ><svg
            class="bcn-aldo-mark__glyph"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            stroke-width="3.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-astro-cid-lgb5fntv=""
          >
            <path d="M47.59 23A18 18 0 1 1 31.37 14.01" data-astro-cid-lgb5fntv=""></path>
            <path
              d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"
              data-astro-cid-lgb5fntv=""
            ></path>
            <path
              d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"
              data-astro-cid-lgb5fntv=""
            ></path>
            <circle
              cx="33.2"
              cy="31.1"
              r="2"
              fill="currentColor"
              stroke="none"
              data-astro-cid-lgb5fntv=""
            ></circle></svg></span></span
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
/* Both message nodes always render (the live region has to pre-exist its content);
       .visually-hidden takes the empty ones out of flow. Not display:none, which would
       drop them from the accessibility tree. */
.help,
.error {
  margin: 0;
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
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 12s linear infinite bcn-aldo-spin;
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
.bcn-ev-card__count .esa-pill {
  --pill-bg: transparent;
  --pill-border-color: var(--color-border-default);
  --pill-text-color: var(--color-content-default-secondary);
}
.bcn-ev-card__files .esa-pill {
  max-width: 100%;
}
.bcn-ev-card__files .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
.esa-badge--primary {
  --_badge-bg: var(--color-background-brand, #46a758);
  --_badge-text: var(--color-content-default-knockout, #fcfcfc);
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
.esa-badge--neutral:not(.esa-badge--dot),
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
.esa-badge--dot.esa-badge--neutral {
  --_badge-bg: var(--color-content-default-secondary, #646464);
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
  --_aldo-inner: var(--spacing-200, 0.5rem);
  --_aldo-same: var(--spacing-300, 0.75rem);
  --_aldo-turn: var(--spacing-500, 1.5rem);
  --_aldo-region: var(--spacing-300, 0.75rem);
  --_aldo-bubble-radius: 1rem;
  min-height: 0;
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-body);
  flex-direction: column;
  line-height: 1.4;
  display: flex;
}
.bcn-aldo-panel__body {
  gap: var(--_aldo-region);
  padding-bottom: var(--spacing-300);
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
  min-height: 8rem;
  padding: var(--_aldo-pad);
  flex-direction: column;
  flex: 1;
  gap: 0;
  margin: 0;
  list-style: none;
  display: flex;
  overflow-y: auto;
}
.bcn-aldo-msg {
  gap: var(--_aldo-inner);
  flex-direction: column;
  max-width: 100%;
  animation: 0.22s ease-out bcn-aldo-in;
  display: flex;
}
.bcn-aldo-msg + .bcn-aldo-msg {
  margin-top: var(--_aldo-turn);
}
.bcn-aldo-msg[data-cont] {
  margin-top: var(--_aldo-same);
}
.bcn-aldo-msg[data-from="aldo"] {
  align-self: stretch;
}
.bcn-aldo-msg[data-from="you"] {
  align-self: flex-end;
  align-items: flex-end;
  max-width: 85%;
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
.bcn-aldo-msg__bubble {
  max-width: 100%;
  position: relative;
}
.bcn-aldo-msg__bubble[hidden] {
  display: none;
}
.bcn-aldo-msg[data-from="you"] .bcn-aldo-msg__bubble {
  align-self: flex-end;
}
.bcn-aldo-msg[data-from="aldo"] .bcn-aldo-msg__text,
.bcn-aldo-msg[data-from="you"] .bcn-aldo-msg__text {
  padding: var(--spacing-250, 0.625rem) var(--spacing-300);
  border-radius: var(--_aldo-bubble-radius);
}
.bcn-aldo-msg[data-from="aldo"] .bcn-aldo-msg__text {
  background: var(--color-background-elevation-sunken);
  max-width: 68ch;
}
.bcn-aldo-msg[data-from="you"] .bcn-aldo-msg__text {
  background: var(--color-background-default);
  border: var(--_aldo-line) solid var(--color-border-default);
}
.bcn-aldo-msg__tools {
  top: calc(-1 * var(--spacing-300, 0.75rem));
  right: var(--spacing-200);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-2);
  opacity: 0;
  pointer-events: none;
  padding: 1px;
  transition: opacity 0.12s;
  display: flex;
  position: absolute;
}
.bcn-aldo-msg__tools:empty {
  display: none;
}
.bcn-aldo-msg__bubble:hover .bcn-aldo-msg__tools,
.bcn-aldo-msg__tools:focus-within {
  opacity: 1;
  pointer-events: auto;
}
.bcn-aldo-msg__tools [data-copied] {
  color: var(--color-content-utility-success);
}
.bcn-aldo-msg__tools {
  --button-chrome-bg-hover: var(--bcn-aldo-50);
  color: var(--color-content-default-secondary);
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-msg__time {
  margin-top: calc(var(--spacing-100, 0.25rem) - var(--_aldo-inner));
  padding-inline: var(--spacing-200);
  font-size: 0.6875rem;
  line-height: 1.2;
  font-weight: var(--_aldo-weight-meta);
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
}
.bcn-aldo-msg__time[hidden] {
  display: none;
}
.bcn-aldo-msg[data-from="aldo"] .bcn-aldo-msg__who {
  display: none;
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
.bcn-aldo-msg[data-kind="event"] .bcn-aldo-msg__text {
  font-size: var(--_aldo-meta);
  color: var(--color-content-default-tertiary);
}
.bcn-aldo-msg[data-kind="event"] .bcn-aldo-msg__tools {
  display: none;
}
.bcn-aldo-msg[data-from="you"] .bcn-aldo-msg__extra {
  align-items: flex-end;
}
.bcn-aldo-msg__context {
  justify-content: flex-end;
  gap: var(--spacing-100);
  flex-wrap: wrap;
  display: flex;
}
.bcn-aldo-msg__context [role="button"] {
  cursor: pointer;
}
.bcn-aldo-msg__context [role="button"]:hover {
  text-decoration: underline;
}
.bcn-aldo-msg[data-streaming] .bcn-aldo-actions,
.bcn-aldo-msg[data-streaming] .bcn-aldo-msg__time,
.bcn-aldo-msg[data-streaming] .bcn-aldo-msg__tools {
  display: none;
}
.bcn-aldo-msg[data-thinking] .bcn-aldo-msg__text:before {
  content: "";
  width: 2.25em;
  height: 0.5em;
  color: var(--color-content-default-tertiary);
  background:
    radial-gradient(circle, currentColor 45%, #0000 50%) 0/0.5em 0.5em no-repeat,
    radial-gradient(circle, currentColor 45%, #0000 50%) 50%/0.5em 0.5em no-repeat,
    radial-gradient(circle, currentColor 45%, #0000 50%) 100%/0.5em 0.5em no-repeat;
  animation: 1s ease-in-out infinite bcn-aldo-think;
  display: inline-block;
}
.bcn-aldo-msg[data-stopped] .bcn-aldo-msg__bubble:after {
  content: "Stopped";
  margin-top: var(--spacing-100);
  font-size: var(--_aldo-meta);
  font-weight: var(--_aldo-weight-meta);
  color: var(--color-content-default-secondary);
  display: block;
}
.bcn-aldo-msg[data-stopped] .bcn-aldo-actions {
  display: none;
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
  padding: 0 var(--spacing-300);
  border: var(--_aldo-line) solid var(--color-border-default-subtle);
  border-radius: var(--_aldo-radius-sm);
  background: var(--color-background-elevation-sunken);
  --typography-label-sm-strong-font-size: var(--_aldo-text);
  margin: 0;
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
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius-sm);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-1);
  margin: 0;
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
.bcn-aldo-needs__head {
  padding: 0;
}
.bcn-aldo-needs__toggle {
  align-items: center;
  gap: var(--_aldo-gap);
  width: 100%;
  padding: var(--_aldo-gap) var(--spacing-300);
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  display: flex;
}
.bcn-aldo-needs__toggle:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: calc(-1 * var(--focus-ring-width, 2px));
}
.bcn-aldo-needs__toggle svg {
  transition: transform 0.15s;
}
.bcn-aldo-needs[data-folded] .bcn-aldo-needs__toggle svg {
  transform: rotate(-90deg);
}
.bcn-aldo-needs[data-folded] .bcn-aldo-needs__list {
  display: none;
}
.bcn-aldo-needs[data-folded] .bcn-aldo-needs__head {
  border-bottom: 0;
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
.bcn-aldo-status > .bcn-aldo-actions {
  margin-top: var(--_aldo-gap);
}
.bcn-aldo-composer {
  gap: var(--_aldo-inner);
  flex-direction: column;
  display: flex;
}
.bcn-aldo-composer__suggest {
  padding: 0 var(--_aldo-pad);
  gap: var(--spacing-200);
}
.bcn-aldo-composer__anchor {
  position: relative;
}
.bcn-aldo-composer__shell {
  --_aldo-radius: 0.75rem;
  align-items: flex-end;
  gap: var(--spacing-200);
  margin: 0 var(--spacing-300);
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) var(--spacing-300);
  border: var(--_aldo-line) solid var(--bcn-aldo-100);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--bcn-aldo-prompt-shadow);
  flex-wrap: wrap;
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
.bcn-aldo-composer__send[data-stop] {
  --color-background-brand: var(--color-content-default);
  --color-background-brand-hover: var(--color-content-default-secondary);
}
.bcn-aldo-composer__attach {
  padding-bottom: var(--spacing-100);
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-aldo-composer__context {
  gap: var(--spacing-100);
  padding-top: var(--spacing-150, 0.375rem);
  flex-wrap: wrap;
  flex-basis: 100%;
  display: flex;
}
.bcn-aldo-composer__context[hidden] {
  display: none;
}
.bcn-aldo-composer__context .esa-pill[data-auto] {
  --_pill-bg: transparent;
  border-style: dashed;
}
.bcn-aldo-composer__context .esa-pill {
  max-width: 100%;
}
.bcn-aldo-composer__context .esa-pill__label,
.bcn-aldo-msg__context .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 16rem;
  overflow: hidden;
}
.bcn-aldo-composer__menu {
  z-index: 10;
  bottom: calc(100% + var(--spacing-100));
  left: var(--spacing-300);
  right: var(--spacing-300);
  max-height: 15rem;
  padding: var(--spacing-100);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-4);
  margin: 0;
  list-style: none;
  position: absolute;
  overflow-y: auto;
}
.bcn-aldo-composer__menu[hidden] {
  display: none;
}
.bcn-aldo-composer__option {
  align-items: baseline;
  gap: var(--spacing-200);
  padding: var(--spacing-150, 0.375rem) var(--spacing-200);
  border-radius: var(--_aldo-radius-sm);
  cursor: pointer;
  font-size: var(--_aldo-text);
  display: flex;
}
.bcn-aldo-composer__option[aria-selected="true"] {
  background: var(--color-background-elevation-sunken);
}
.bcn-aldo-composer__option-label {
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 0 auto;
  min-width: 3.5rem;
  overflow: hidden;
}
.bcn-aldo-composer__option-detail {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  font-size: var(--_aldo-meta);
  color: var(--color-content-default-secondary);
  flex: 0 auto;
  margin-left: auto;
  overflow: hidden;
}
.bcn-aldo-composer[data-dropping] .bcn-aldo-composer__shell {
  border-style: dashed;
  border-color: var(--bcn-aldo);
  background: var(--color-background-elevation-sunken);
}
.bcn-aldo-composer__drop {
  inset: 0 var(--spacing-300);
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
  pointer-events: none;
  place-items: center;
  margin: 0;
  display: grid;
  position: absolute;
}
.bcn-aldo-composer__drop[hidden] {
  display: none;
}
.bcn-aldo-panel__expand {
  margin-left: auto;
  display: inline-flex;
}
.bcn-aldo-panel__expand + .bcn-aldo-panel__close {
  margin-left: 0;
}
.bcn-aldo-panel [data-aldo-overlay="dock"],
.bcn-aldo-panel[data-expanded] [data-aldo-overlay="open"],
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__close {
  display: none;
}
.bcn-aldo-panel[data-expanded] [data-aldo-overlay="dock"] {
  display: inline-flex;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__body {
  --_aldo-text: 0.9375rem;
  --_aldo-meta: 0.8125rem;
  --_aldo-turn: var(--spacing-600, 2rem);
  --_aldo-same: var(--spacing-400, 1rem);
  --_aldo-inner: var(--spacing-300, 0.75rem);
  --_aldo-region: var(--spacing-400, 1rem);
  z-index: 1050;
  top: calc(var(--_aldo-top, 0px) + var(--spacing-400, 1rem));
  right: var(--spacing-400, 1rem);
  bottom: var(--spacing-400, 1rem);
  width: var(--aldo-expanded-width, max(50vw, 36rem));
  max-width: calc(100vw - 2 * var(--spacing-400, 1rem));
  padding-bottom: var(--spacing-400, 1rem);
  font-size: var(--_aldo-text);
  border-radius: var(--radius-300, 0.75rem);
  box-shadow: var(--elevation-5), var(--bcn-aldo-prompt-shadow);
  line-height: 1.6;
  animation: 0.24s ease-out bcn-aldo-pin;
  position: fixed;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__head {
  padding-block: var(--spacing-400);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__title {
  font-size: 1rem;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-thread {
  padding-block: var(--spacing-500) var(--spacing-200);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-needs__list {
  max-height: none;
  overflow: visible;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-composer__shell {
  --_aldo-radius: 1rem;
  margin-inline: var(--_aldo-pad);
  padding: var(--spacing-300) var(--spacing-300) var(--spacing-300) var(--spacing-400);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-composer__menu {
  left: var(--_aldo-pad);
  right: var(--_aldo-pad);
}
.bcn-aldo-panel__main {
  gap: var(--_aldo-region);
  flex-direction: column;
  flex: 1;
  min-height: 0;
  display: flex;
}
.bcn-aldo-panel__body {
  position: relative;
}
.bcn-aldo-panel__waiting {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-50, 0.125rem) var(--spacing-150, 0.375rem);
  border: var(--_aldo-line) solid var(--color-border-utility-warning);
  background: var(--color-background-utility-warning-subtle);
  color: var(--color-content-default);
  font: inherit;
  font-size: var(--_aldo-meta);
  font-weight: var(--_aldo-weight-strong);
  cursor: pointer;
  border-radius: 999px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-aldo-panel__waiting[hidden] {
  display: none;
}
.bcn-aldo-panel__waiting:has([data-waiting-count][hidden]) {
  border-color: var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default-secondary);
}
.bcn-aldo-panel__waiting [data-waiting-count][hidden] {
  display: none;
}
.bcn-aldo-panel__waiting:hover {
  filter: brightness(0.97);
}
.bcn-aldo-panel__waiting:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-aldo-panel__waiting svg {
  transition: transform 0.15s;
}
.bcn-aldo-panel[data-side-open] .bcn-aldo-panel__waiting svg {
  transform: rotate(180deg);
}
.bcn-aldo-panel__waiting:not([hidden]) + .bcn-aldo-panel__expand {
  margin-left: 0;
}
.bcn-aldo-panel__waiting[data-nudge] {
  animation: 0.6s ease-out bcn-aldo-nudge;
}
.bcn-aldo-panel__side {
  gap: var(--spacing-300);
  flex-direction: column;
  display: none;
}
.bcn-aldo-panel[data-side-open] .bcn-aldo-panel__side {
  z-index: 5;
  top: var(--_aldo-head-h, 3rem);
  left: var(--spacing-200);
  right: var(--spacing-200);
  max-height: min(70%, 28rem);
  padding: var(--spacing-300);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-4);
  animation: 0.16s ease-out bcn-aldo-tray;
  display: flex;
  position: absolute;
  overflow-y: auto;
}
.bcn-aldo-panel__side .bcn-aldo-needs__toggle svg {
  display: none;
}
.bcn-aldo-panel__side .bcn-aldo-needs__toggle {
  pointer-events: none;
}
.bcn-aldo-panel__side .bcn-aldo-needs[data-folded] .bcn-aldo-needs__list {
  display: block;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__head {
  grid-column: 1/-1;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__waiting {
  display: none;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__main {
  --_aldo-pad: max(var(--spacing-500, 1.5rem), calc((100% - 46rem) / 2));
  padding-bottom: var(--spacing-400);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__head {
  padding-inline: var(--spacing-500, 1.5rem);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__side {
  min-height: 0;
  max-height: none;
  box-shadow: none;
  padding: var(--spacing-400);
  gap: var(--spacing-500, 1.5rem);
  border: 0;
  border-left: var(--_aldo-line) solid var(--color-border-default-subtle);
  background: var(--color-background-elevation-raised);
  border-radius: 0;
  border-bottom-right-radius: inherit;
  font-size: 0.8125rem;
  line-height: 1.45;
  animation: none;
  display: flex;
  position: static;
  overflow-y: auto;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__side .bcn-aldo-needs__toggle {
  pointer-events: auto;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__side .bcn-aldo-needs__toggle svg {
  display: inline;
}
.bcn-aldo-panel[data-expanded]
  .bcn-aldo-panel__side
  .bcn-aldo-needs[data-folded]
  .bcn-aldo-needs__list {
  display: none;
}
.bcn-aldo-panel__side .bcn-aldo-needs {
  box-shadow: none;
  background: 0 0;
  border: 0;
  overflow: visible;
}
.bcn-aldo-panel__side .bcn-aldo-needs__head {
  background: 0 0;
  border-bottom: 0;
}
.bcn-aldo-panel__side .bcn-aldo-needs__toggle {
  padding: 0 0 var(--spacing-200);
}
.bcn-aldo-panel__side .bcn-aldo-needs__list {
  gap: var(--spacing-200);
  flex-direction: column;
  max-height: none;
  display: flex;
  overflow: visible;
}
.bcn-aldo-panel__side .bcn-aldo-needs__item {
  gap: var(--spacing-200);
  padding: var(--spacing-300);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-aldo-panel__side .bcn-aldo-needs__item:hover {
  border-color: var(--bcn-aldo-100);
  box-shadow: var(--elevation-1);
}
.bcn-aldo-panel__side .bcn-aldo-needs__item + .bcn-aldo-needs__item {
  border-top: var(--_aldo-line) solid var(--color-border-default);
}
.bcn-aldo-panel__side .bcn-aldo-needs__item:hover + .bcn-aldo-needs__item {
  border-top-color: var(--color-border-default);
}
.bcn-aldo-panel__side .bcn-aldo-instructions {
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-aldo-panel__side .bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: 0 var(--spacing-200);
}
.bcn-aldo-panel__side .bcn-aldo-instructions__list {
  gap: var(--spacing-300);
  max-height: none;
  padding: 0;
  list-style: none;
}
.bcn-aldo-panel[data-expanded]
  .bcn-aldo-panel__body:not(:has(.bcn-aldo-panel__side > :not([hidden])))
  .bcn-aldo-panel__side {
  display: none;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.esa-pill {
  --_pill-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_pill-text: var(--color-content-default, #202020);
  --_pill-border: var(--color-border-default-subtle, #d9d9d9);
  --_pill-padding-y: var(--spacing-150, 0.375rem);
  --_pill-padding-x: var(--spacing-200, 0.5rem);
  --_pill-gap: var(--spacing-100, 0.25rem);
  align-items: center;
  gap: var(--_pill-gap);
  padding-block: var(--_pill-padding-y);
  padding-inline: var(--_pill-padding-x);
  border: var(--border-width-default, 1px) solid var(--_pill-border);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_pill-bg);
  color: var(--_pill-text);
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-flex;
}
.esa-pill--xs {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-100, 0.25rem);
}
.esa-pill--sm {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-150, 0.375rem);
}
.esa-pill--lg {
  --_pill-padding-y: var(--spacing-200, 0.5rem);
  --_pill-padding-x: var(--spacing-300, 0.75rem);
}
.esa-pill--round {
  border-radius: var(--radius-pill, 9999px);
}
.esa-pill--primary {
  --_pill-bg: var(--color-background-brand-subtle, var(--color-grass-2));
  --_pill-text: var(--color-content-brand, var(--color-grass-11));
  --_pill-border: var(--color-border-brand, var(--color-grass-6));
}
.esa-pill--info {
  --_pill-bg: var(--color-background-utility-info-subtle, var(--color-blue-2));
  --_pill-text: var(--color-content-utility-info, #0d74ce);
  --_pill-border: var(--color-border-utility-info, var(--color-blue-6));
}
.esa-pill--success {
  --_pill-bg: var(--color-background-utility-success-subtle, var(--color-green-2));
  --_pill-text: var(--color-content-utility-success, #218358);
  --_pill-border: var(--color-border-utility-success, var(--color-green-6));
}
.esa-pill--warning {
  --_pill-bg: var(--color-background-utility-warning-subtle, var(--color-yellow-2));
  --_pill-text: var(--color-content-utility-warning, #ab6400);
  --_pill-border: var(--color-border-utility-warning, var(--color-yellow-6));
}
.esa-pill--danger {
  --_pill-bg: var(--color-background-utility-danger-subtle, var(--color-red-2));
  --_pill-text: var(--color-content-utility-danger, #ce2c31);
  --_pill-border: var(--color-border-utility-danger, var(--color-red-6));
}
.esa-pill[data-category] {
  --_pill-bg: var(--category-2, var(--color-background-elevation-sunken, #f0f0f0));
  --_pill-border: var(--category-6, var(--color-border-default-subtle, #d9d9d9));
  --_pill-text: var(--category-11, var(--color-content-default, #202020));
}
.esa-pill__icon {
  flex-shrink: 0;
  display: inline-flex;
}
.esa-pill__remove {
  border-radius: var(--radius-pill, 9999px);
  width: 16px;
  height: 16px;
  color: inherit;
  cursor: pointer;
  opacity: 0.6;
  transition:
    opacity var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.esa-pill__remove:hover {
  opacity: 1;
  background: var(--color-background-overlay-heavy-hover, #0000001a);
}
.esa-pill__remove:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
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
- `--badge-bg`: #fcfcfc _(component)_
- `--badge-border-color`: #dcdcdc _(component)_
- `--badge-text-color`: #525252 _(component)_
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
- `--color-background-brand-subtle`: #effefb _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-heavy-hover`: #0000001a _(semantic)_
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
- `--color-blue-2`: #f4faff _(primitive)_
- `--color-blue-6`: #acd8fc _(primitive)_
- `--color-border-brand`: #b9d6d2 _(semantic)_
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
- `--color-grass-11`: #2a7e3b _(primitive)_
- `--color-grass-2`: #f5fbf5 _(primitive)_
- `--color-grass-6`: #b2ddb5 _(primitive)_
- `--color-green-2`: #f4fbf6 _(primitive)_
- `--color-green-6`: #adddc0 _(primitive)_
- `--color-red-2`: #fff7f7 _(primitive)_
- `--color-red-6`: #fdbdbe _(primitive)_
- `--color-yellow-2`: #fefbe9 _(primitive)_
- `--color-yellow-6`: #f3d673 _(primitive)_
- `--elevation-1`: 0 1px 4px 0 #00000008 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--elevation-4`: 0 6px 24px -6px #00000012 _(semantic)_
- `--elevation-5`: 0 8px 32px -8px #00000014 _(semantic)_
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
- `--radius-300`: .5rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 400 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
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
