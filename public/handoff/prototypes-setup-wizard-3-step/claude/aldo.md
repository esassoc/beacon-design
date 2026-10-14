# Aldo

The conversation that scopes, checks and steers the scan of the file in view, dense at 13px, with the composer always in view and the run's status pinned above it: reading (blue), stopped for the check (yellow), done or stopped (green). The run stops after its first three commitments; Aldo says what to check, then gives each commitment its own message: a lead (where it took the ID and name from, how far the text runs) and a card with the ID, name and quoted text (clamped, with Show all), a p. N button, Looks right and Fix. Fix opens the ID, name and text as fields, with Save and Redraw the box. Requirements, timing and parties are reviewed in step 2.

## Key decisions
- The check is the training step: what the person fixes there becomes an instruction for the rest of the file.
- Buttons carry meaning in their color: green to accept, red to remove (Dismiss), blue to change the record (Merge, Re-read), the primary for the next step, neutral otherwise. Only send is Aldo's green.
- A name fixed at the check is the commitment's name in step 2.
- One structured-output call per message returns actions and a one-line reply; sw3-steer.ts is the schema, with a pattern matcher standing in for the model.
- Each file keeps its own conversation; switching files switches the thread.

## Done when
- Fix COA 11.1, change its name, Save: the card reads Fixed, and step 2 shows the new name.
- Looks right on the other two, then Resume: the run goes on.
- Reload: every file's conversation and run are where they were.

## Markup
```html
<section
  class="bcn-sw3aldo"
  data-sw3-aldo=""
  data-review="/beacon-design/prototypes/setup-wizard-3-step/review"
  aria-label="Aldo"
>
  <header class="bcn-sw3aldo__head">
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
    <h3 class="bcn-sw3aldo__title typography-title-strong">Aldo</h3>
  </header>
  <ol class="bcn-sw3aldo__log" data-aldo-log="" aria-live="polite">
    <li class="bcn-sw3aldo__msg" data-from="aldo">
      <span class="bcn-sw3aldo__who" data-msg-who="">Aldo</span>
      <p class="bcn-sw3aldo__text typography-body-sm" data-msg-text="">
        I read the contents and headings of the ITP. The commitments are in VIII.
        Conditions of Approval, pp. 80–244: about 293. Condition 11, Take Minimization
        Measures, holds 158 of them on pp. 131–223, in three parts: Multi-Species,
        Construction Phase, and Operations Phases. Tell me where to start, or scan
        Condition 11.
      </p>
      <div class="bcn-sw3aldo__extra" data-msg-extra=""></div>
      <span class="bcn-sw3aldo__acts" data-msg-acts=""
        ><span
          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--xs"
          ><button class="esa-button__native typography-microcopy-2xs" type="button">
            <span class="esa-button__label">Scan Condition 11</span>
          </button></span
        ></span
      >
    </li>
  </ol>
  <div class="bcn-sw3aldo__status" data-aldo-status="" role="status">
    <div data-status="check" hidden="">
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
    <div data-status="reading" hidden="">
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
    <div data-status="done" hidden="">
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
  </div>
  <div
    class="bcn-sw3aldo__suggest"
    data-aldo-suggest=""
    data-sig="itp|Only Condition 11|Only the construction measures"
  >
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
  <form class="bcn-sw3aldo__composer" data-aldo-form="">
    <esa-textarea
      class="bcn-sw3aldo__input"
      data-aldo-input="true"
      size="md"
      rows="1"
      max-rows="6"
      auto-resize=""
      aria-label="Message Aldo"
      placeholder="Steer the scan"
    ></esa-textarea
    ><span class="bcn-sw3aldo__send"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          aria-label="Send"
          title="Send"
          data-aldo-send="true"
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
  <template data-aldo-msg=""
    ><li class="bcn-sw3aldo__msg" data-astro-cid-d4oo7fc7="">
      <span class="bcn-sw3aldo__who" data-msg-who="" data-astro-cid-d4oo7fc7=""></span>
      <p
        class="bcn-sw3aldo__text typography-body-sm"
        data-msg-text=""
        data-astro-cid-d4oo7fc7=""
      ></p>
      <div class="bcn-sw3aldo__extra" data-msg-extra="" data-astro-cid-d4oo7fc7=""></div>
      <span
        class="bcn-sw3aldo__acts"
        data-msg-acts=""
        data-astro-cid-d4oo7fc7=""
      ></span></li></template
  ><template data-aldo-btn=""
    ><span
      class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
      data-astro-cid-4xhmycw5=""
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        data-astro-cid-d4oo7fc7="true"
        data-astro-cid-4xhmycw5=""
      >
        <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
      </button></span
    ></template
  ><template data-aldo-badge=""
    ><span data-astro-cid-d4oo7fc7=""
      ><span
        class="bcn-cbadge bcn-cbadge--sm"
        data-astro-cid-cqxc3yz3=""
      ></span></span></template
  ><template data-aldo-btn-primary=""
    ><span
      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--xs"
      data-astro-cid-4xhmycw5=""
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        data-astro-cid-d4oo7fc7="true"
        data-astro-cid-4xhmycw5=""
      >
        <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
      </button></span
    ></template
  ><template data-aldo-btn-success=""
    ><span
      class="esa-button esa-button--variant-success esa-button--appearance-fill esa-button--xs"
      data-astro-cid-4xhmycw5=""
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        data-astro-cid-d4oo7fc7="true"
        data-astro-cid-4xhmycw5=""
      >
        <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
      </button></span
    ></template
  ><template data-aldo-btn-danger=""
    ><span
      class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--xs"
      data-astro-cid-4xhmycw5=""
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        data-astro-cid-d4oo7fc7="true"
        data-astro-cid-4xhmycw5=""
      >
        <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
      </button></span
    ></template
  ><template data-aldo-btn-info=""
    ><span
      class="esa-button esa-button--variant-info esa-button--appearance-soft esa-button--xs"
      data-astro-cid-4xhmycw5=""
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        data-astro-cid-d4oo7fc7="true"
        data-astro-cid-4xhmycw5=""
      >
        <span class="esa-button__label" data-astro-cid-4xhmycw5="">Action</span>
      </button></span
    ></template
  >
</section>
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
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
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
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
.bcn-sw3aldo {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-direction: column;
  min-height: 0;
  display: flex;
}
.bcn-sw3aldo__head {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400);
  border-bottom: 1px solid var(--color-border-default-subtle);
  display: flex;
}
.bcn-sw3aldo__title {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
}
.bcn-sw3aldo__log {
  gap: var(--spacing-400);
  min-height: 0;
  padding: var(--spacing-400);
  flex-direction: column;
  flex: 1;
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.4;
  list-style: none;
  display: flex;
  overflow-y: auto;
}
.bcn-sw3aldo__msg {
  gap: var(--spacing-150, 0.375rem);
  flex-direction: column;
  max-width: 94%;
  animation: 0.22s ease-out bcn-sw3aldo-in;
  display: flex;
}
.bcn-sw3aldo__msg[data-from="aldo"] {
  align-self: flex-start;
}
.bcn-sw3aldo__msg[data-from="you"] {
  align-self: flex-end;
  align-items: flex-end;
}
.bcn-sw3aldo__who {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  font-size: 0.75rem;
  font-weight: 500;
}
.bcn-sw3aldo__text {
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  font-size: inherit;
  line-height: inherit;
  white-space: pre-line;
  margin: 0;
}
.bcn-sw3aldo__msg[data-from="aldo"] .bcn-sw3aldo__text {
  background: var(--bcn-aldo-50);
}
.bcn-sw3aldo__msg[data-from="you"] .bcn-sw3aldo__text {
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default-subtle);
}
.bcn-sw3aldo__msg[data-via="button"] .bcn-sw3aldo__text {
  color: var(--color-content-default-secondary);
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-sw3aldo__acts {
  gap: var(--spacing-150, 0.375rem);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3aldo__acts:empty,
.bcn-sw3aldo__extra:empty {
  display: none;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__checks {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__check {
  gap: var(--spacing-150, 0.375rem);
  padding: var(--spacing-250, 0.625rem) var(--spacing-300);
  border: 1px dashed var(--color-border-default-strong, var(--color-border-default));
  background: var(--color-background-elevation-raised);
  border-radius: 6px;
  flex-direction: column;
  display: flex;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__check[data-state="checked"] {
  border-style: solid;
  border-color: var(--color-border-default-subtle);
}
.bcn-sw3aldo__extra .bcn-sw3aldo__checkhead {
  align-items: flex-start;
  gap: var(--spacing-200);
  font: inherit;
  text-align: left;
  color: var(--color-content-default);
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
  display: flex;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__checkhead:hover .bcn-sw3aldo__checktitle {
  text-decoration: underline;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__checkhead:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-sw3aldo__extra .bcn-sw3aldo__quote {
  padding: var(--spacing-200) var(--spacing-250, 0.625rem);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
  font-family: var(--font-decorative);
  white-space: pre-line;
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.45;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__quotetext {
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__quote[data-all] .bcn-sw3aldo__quotetext {
  display: block;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__checkfoot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__checkmeta {
  gap: var(--spacing-150, 0.375rem);
  display: flex;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__fix {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__checkacts {
  gap: var(--spacing-200);
  display: flex;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__ok {
  color: var(--color-content-utility-success);
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-flex;
}
.bcn-sw3aldo__extra .bcn-sw3aldo__checktitle {
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.3;
}
.bcn-sw3aldo__msg[data-kind="check"] {
  width: 100%;
  max-width: 100%;
  margin-bottom: var(--spacing-200);
}
.bcn-sw3aldo__status {
  padding: 0 var(--spacing-400) var(--spacing-200);
}
.bcn-sw3aldo__status:not(:has(> :not([hidden]))),
.bcn-sw3aldo__status > [hidden] {
  display: none;
}
.bcn-sw3aldo__status .esa-alert-box {
  padding: var(--spacing-150, 0.375rem) var(--spacing-250, 0.625rem);
  align-items: center;
  font-size: 0.8125rem;
}
.bcn-sw3aldo__status .esa-alert-box__icon svg {
  width: 16px;
  height: 16px;
}
.bcn-sw3aldo__suggest {
  gap: var(--spacing-200);
  padding: 0 var(--spacing-400) var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3aldo__suggest:empty {
  display: none;
}
.bcn-sw3aldo__composer {
  align-items: flex-end;
  gap: var(--spacing-200);
  margin: 0 var(--spacing-300) var(--spacing-300);
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) var(--spacing-300);
  border: 1px solid var(--bcn-aldo-100);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--bcn-aldo-prompt-shadow);
  display: flex;
}
.bcn-sw3aldo__composer:focus-within {
  outline: 2px solid var(--bcn-aldo-prompt-ring);
}
.bcn-sw3aldo__input {
  --focus-ring-color: var(--color-background-elevation-raised);
  --form-border-width: 0;
  flex: 1;
  min-width: 0;
}
.bcn-sw3aldo__send {
  --button-radius-sm: 999px;
  --color-background-brand: var(--bcn-aldo);
  --color-background-brand-hover: var(--bcn-aldo-600);
  padding-bottom: var(--spacing-100);
  display: inline-flex;
}
.bcn-sw3scan__draw .esa-button {
  box-shadow: var(--shadow-200);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
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
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
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
- `--color-background-utility-danger-subtle`: #fffcfc _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-subtle`: #fbfefc _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
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
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--shadow-200`: 0 4px 20px -4px #0000000f _(component)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
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
- `--typography-title-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-strong-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-strong-font-weight`: 550 _(semantic)_
- `--typography-title-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-strong-line-height`: 1.6 _(semantic)_
