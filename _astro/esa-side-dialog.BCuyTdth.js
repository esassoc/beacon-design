import{a as e,n as t,r as n,s as r,t as i}from"./typography.Dt-sBkj4.js";import{t as a}from"./boolish.oUPlfJhN.js";var o=class extends t{static properties={open:{type:Boolean,reflect:!0},heading:{type:String},position:{type:String,reflect:!0},size:{type:String,reflect:!0},showCloseButton:{type:Boolean,attribute:`show-close-button`,converter:a},closing:{state:!0}};closeTimer;constructor(){super(),this.open=!1,this.heading=``,this.position=`right`,this.size=`md`,this.showCloseButton=!0,this.closing=!1}connectedCallback(){super.connectedCallback(),`closedBy`in HTMLDialogElement.prototype||this.addEventListener(`click`,this.onLightDismiss)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.onLightDismiss),clearTimeout(this.closeTimer)}get dialogEl(){return this.renderRoot.querySelector(`dialog`)}updated(e){if(!e.has(`open`)&&!e.has(`closing`))return;let t=this.dialogEl;if(!t)return;let n=this.open||this.closing;n&&!t.open?t.showModal():!n&&t.open&&t.close()}show(){clearTimeout(this.closeTimer),this.closing=!1,this.open=!0}close(){this.open&&(this.open=!1,this.closing=!0,clearTimeout(this.closeTimer),this.closeTimer=setTimeout(()=>{this.closing=!1},200),this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0})))}onCancel=e=>{e.preventDefault(),this.close()};onNativeClose=()=>{clearTimeout(this.closeTimer);let e=this.open;this.open=!1,this.closing=!1,e&&this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))};onLightDismiss=e=>{let t=this.dialogEl;if(!t||!this.open||e.composedPath()[0]!==t)return;let n=t.getBoundingClientRect();n.top<=e.clientY&&e.clientY<=n.top+n.height&&n.left<=e.clientX&&e.clientX<=n.left+n.width||this.close()};render(){let t=!!this.querySelector(`[slot="header"]`),r=this.heading||this.showCloseButton||t,i=this.closing&&!this.open,a=this.querySelector(`[slot="header"]`)?.textContent?.trim();return e`
      <dialog
        class="panel ${i?`is-closing`:``}"
        closedby="any"
        aria-labelledby=${this.heading?`esa-side-dialog-title`:n}
        aria-label=${this.heading?n:a||`Side dialog`}
        @cancel=${this.onCancel}
        @close=${this.onNativeClose}
      >
        ${r?e`<header class="header typography-title">
              <slot name="header"><h2 id="esa-side-dialog-title" class="title typography-title">${this.heading}</h2></slot>
              ${this.showCloseButton?e`<button class="close" @click=${this.close} aria-label="Close">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  </button>`:null}
            </header>`:null}
        <div class="body typography-body-md"><slot></slot></div>
        <footer class="footer typography-label-md"><slot name="footer"></slot></footer>
      </dialog>
    `}static styles=[i,r`
    :host { --_width: var(--side-dialog-width, 400px); }
    :host([size='sm']) { --_width: var(--side-dialog-width-sm, 320px); }
    :host([size='lg']) { --_width: var(--side-dialog-width-lg, 520px); }

    /* ::backdrop replaces the hand-rolled .backdrop div. The var() may not resolve
       here — ::backdrop does not inherit custom properties from its originating
       element in every engine — but --side-dialog-backdrop-filter's declared
       default IS 'none' (component-tokens.css), so the fallback and the default
       agree and the only thing at stake is whether an opt-in frost applies in an
       older engine. Keep the literal fallbacks in step with the token defaults. */
    dialog.panel::backdrop {
      background: var(--color-background-overlay-backdrop, rgba(0, 0, 0, 0.5));
      backdrop-filter: var(--side-dialog-backdrop-filter, none);
      -webkit-backdrop-filter: var(--side-dialog-backdrop-filter, none);
      animation: fade var(--animation-enter, 150ms ease-out);
    }
    dialog.panel.is-closing::backdrop { animation: fade-out var(--animation-exit, 150ms ease-in) forwards; }

    /* Inset floating panel (matches Beacon prod .ui-side-dialog): 16px gap on the
       top / bottom / anchored side, rounded corners. --_inset is overridable.
       'position: fixed' with explicit insets overrides the UA's centering margin;
       the UA's border/padding and its 'max-width/max-height: calc(100% - 6px - 2em)'
       have to be cleared or they clamp this panel inside a second, smaller box.
       Two more UA dialog declarations have to be beaten explicitly, because
       'margin: 0' removes the auto-margins that used to absorb them: 'inset: 0'
       (its left: 0 out-ranks the position rule's right and glues the panel to
       the wrong edge) and 'height: fit-content' (it wins the over-constrained
       top+bottom pair and collapses the panel to its content).
       hub-edit-approved: Andy, 2026-08-25, biochar-atlas session — reported the
       panel opening left-glued at content height; the defect is this lego's,
       not the spoke's. */
    dialog.panel {
      --_inset: var(--side-dialog-inset, 16px);
      position: fixed;
      top: var(--_inset);
      bottom: var(--_inset);
      inset-inline: auto;
      height: auto;
      margin: 0;
      border: none;
      padding: 0;
      width: min(var(--_width), calc(100vw - var(--_inset) * 2));
      max-width: none;
      max-height: none;
      background: var(--color-background-elevation-raised, #fcfcfc);
      color: var(--color-content-default, #202020);
      border-radius: var(--radius-md, 0.5rem);
      box-shadow: var(--elevation-5, 0 8px 32px -8px rgba(0, 0, 0, 0.2));
      outline: none;
      overflow: hidden;
      /* Hosts may re-point --side-dialog-inset while open (e.g. card-stacking a
         second dialog on top) — ease the reposition instead of jumping. */
      transition: top 220ms ease, right 220ms ease, bottom 220ms ease, left 220ms ease;
    }
    dialog.panel[open] { display: flex; flex-direction: column; }
    :host([position='right']) dialog.panel { right: var(--_inset); animation: slide-right var(--animation-overlay-enter, 250ms ease-out); }
    :host([position='left']) dialog.panel { left: var(--_inset); animation: slide-left var(--animation-overlay-enter, 250ms ease-out); }
    /* Exit: keep the end state so it doesn't flash back before unmounting. */
    :host([position='right']) dialog.panel.is-closing { animation: slide-out-right var(--animation-overlay-exit, 200ms ease-in) forwards; }
    :host([position='left']) dialog.panel.is-closing { animation: slide-out-left var(--animation-overlay-exit, 200ms ease-in) forwards; }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--spacing-300, 0.75rem);
      padding: var(--spacing-400, 1rem) var(--spacing-500, 1.5rem);
      border-bottom: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
      flex: none;
    }
    .title { margin: 0; color: var(--color-content-default, #202020); }
    .close {
      display: grid; place-items: center; width: 32px; height: 32px;
      border: 0; border-radius: var(--radius-sm, 0.25rem); background: none;
      color: var(--color-content-default-secondary, #646464); cursor: pointer;
    }
    .close:hover { background: var(--color-background-elevation-sunken, #f0f0f0); color: var(--color-content-default, #202020); }
    .body { flex: 1; overflow-y: auto; padding: var(--spacing-500, 1.5rem); color: var(--color-content-default-secondary, #646464); }
    .footer { flex: none; padding: var(--spacing-400, 1rem) var(--spacing-500, 1.5rem); border-top: var(--border-width-default, 1px) solid var(--color-border-default, #cecece); }
    .footer:not(:has(*)) { display: none; }

    @keyframes fade { from { opacity: 0; } }
    @keyframes fade-out { to { opacity: 0; } }
    /* Offset by the inset so the panel fully clears the viewport edge. */
    @keyframes slide-right { from { transform: translateX(calc(100% + var(--_inset))); } }
    @keyframes slide-left { from { transform: translateX(calc(-100% - var(--_inset))); } }
    @keyframes slide-out-right { to { transform: translateX(calc(100% + var(--_inset))); } }
    @keyframes slide-out-left { to { transform: translateX(calc(-100% - var(--_inset))); } }

    /* FORCED COLORS. This panel floats with a 16px inset on all four sides, so
       losing --elevation-5 leaves it with no edge at all against the scrim.
       Width is 'min(--_width, 100vw - inset*2)' on a content-box element; the
       border is inside the query so that clamp keeps holding in normal mode. */
    @media (forced-colors: active) {
      dialog.panel { border: 1px solid CanvasText; }
    }
  `]};customElements.get(`esa-side-dialog`)||customElements.define(`esa-side-dialog`,o);