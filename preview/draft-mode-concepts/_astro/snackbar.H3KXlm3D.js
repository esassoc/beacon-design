import{a as e,n as t,s as n,t as r}from"./typography.Dt-sBkj4.js";import{t as i}from"./announcer.CEmnlEx3.js";import{t as a}from"./boolish.oUPlfJhN.js";import{n as o}from"./overlay.DRAPVU52.js";var s=class extends t{static properties={message:{type:String},variant:{type:String,reflect:!0},action:{type:String},dismissable:{type:Boolean,converter:a},icon:{type:String}};constructor(){super(),this.message=``,this.variant=`info`,this.action=``,this.dismissable=!0,this.icon=``}onAction=()=>{this.dispatchEvent(new CustomEvent(`action`,{bubbles:!0,composed:!0})),this.dismiss()};dismiss=()=>{this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0}))};renderIcon(){switch(this.variant){case`success`:return e`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;case`warning`:return e`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`;case`danger`:return e`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`;default:return e`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`}}render(){return e`
      <div class="esa-snackbar typography-body-md esa-snackbar--${this.variant}">
        <span class="esa-snackbar__icon">${this.renderIcon()}</span>
        <span class="esa-snackbar__message">${this.message}</span>
        ${this.action?e`<button class="esa-snackbar__action typography-microcopy-sm-strong" @click=${this.onAction}>${this.action}</button>`:null}
        ${this.dismissable?e`
              <button class="esa-snackbar__close" @click=${this.dismiss} aria-label="Dismiss notification">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            `:null}
      </div>
    `}static styles=[r,n`
    :host { display: block; }

    .esa-snackbar {
      display: flex;
      align-items: center;
      gap: var(--spacing-300, 0.75rem);
      padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
      border-radius: var(--radius-md, 0.5rem);
      box-shadow: var(--elevation-4, 0 6px 24px -6px rgba(0, 0, 0, 0.07));
      background: var(--color-background-default-knockout);
      color: var(--color-content-default-knockout, #fcfcfc);
      animation: esa-snackbar-enter var(--animation-overlay-enter, 250ms ease-out);
    }
    @keyframes esa-snackbar-enter {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    .esa-snackbar--success { background: var(--color-content-utility-success); }
    .esa-snackbar--warning { background: var(--color-content-utility-warning); }
    .esa-snackbar--danger { background: var(--color-content-utility-danger); }
    .esa-snackbar--info { background: var(--color-content-utility-info); }

    .esa-snackbar__icon {
      flex-shrink: 0;
      display: inline-flex;
    }
    .esa-snackbar__message { flex: 1; }

    .esa-snackbar__action {
      /* One word ("Undo"). microcopy has no leading, so wrapping would collide. */
      white-space: nowrap;
      flex-shrink: 0;
      /* Same target-size reasoning as the close button below: a short word like
         "Undo" produces a box only as tall as its own line, which lands under the
         24px minimum. The min-height sets the floor without padding the label. */
      min-height: 32px;
      padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
      border: none;
      border-radius: var(--radius-sm, 0.25rem);
      /* THE WHITE ALPHA IS CORRECT HERE AND SHOULD NOT BECOME A TOKEN.
         This button sits on FIVE different grounds — the knocked-out default
         plus the success, warning, danger and info fills below — and an alpha
         is the only value that lifts off all of them. A solid knocked-out grey
         would be right on one and wrong on four (a grey chip on a green bar).
         Checked when --color-background-elevation-raised-knockout was proposed;
         that token was dropped partly because this, its most obvious reader,
         did not want it. */
      background: rgba(255, 255, 255, 0.2);
      color: inherit;
      /* UA reset, not a type role — a native button does not inherit the face. */
      font-family: inherit;
      cursor: pointer;
    }
    .esa-snackbar__action:hover { background: rgba(255, 255, 255, 0.3); }

    .esa-snackbar__close {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      /* 32px, not the 24px this was. 24 is the exact floor of SC 2.5.8 Target Size
         (Minimum, AA) — passing a criterion with zero margin is not the same as
         being usable, and this is the control someone reaches for in a hurry, on a
         box that may be about to disappear. The glyph stays 16px; only the hit area
         grows, so the toast does not get taller. */
      width: 32px;
      height: 32px;
      border: none;
      border-radius: var(--radius-sm, 0.25rem);
      background: transparent;
      color: inherit;
      cursor: pointer;
      opacity: 0.7;
    }
    .esa-snackbar__close:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.1);
    }

    /* Both buttons were keyboard-invisible: :hover only, no focus style at all
       (SC 2.4.7 Focus Visible, AA). The ring is white rather than
       --focus-ring-color because these sit on FIVE different fills — the
       knocked-out default plus success/warning/danger/info — and the brand-blue
       ring disappears against at least one of them. Same reasoning as the alpha
       backgrounds above, and the same reason this is not a token. */
    .esa-snackbar__action:focus-visible,
    .esa-snackbar__close:focus-visible {
      outline: var(--focus-ring-width, 2px) solid #ffffff;
      outline-offset: var(--focus-ring-offset, 2px);
      opacity: 1;
    }

    /* FORCED COLORS. Two repairs. The toast itself is a knockout background plus
       --elevation-4, so it needs a real edge. And the hardcoded #ffffff focus
       ring above is force-adjusted to whatever the theme picks — which may be
       the same colour as the toast's own background — so the ring is re-stated
       in system colours rather than left to chance.
       The four variants (success/warning/danger/info) differ only by background
       and all collapse to Canvas; the per-variant ICON is what still separates
       them, which is exactly why renderIcon() ships four distinct glyphs. */
    @media (forced-colors: active) {
      .esa-snackbar { border: 1px solid CanvasText; }
      .esa-snackbar__action:focus-visible,
      .esa-snackbar__close:focus-visible { outline-color: CanvasText; }
    }
  `]};customElements.get(`esa-snackbar-item`)||customElements.define(`esa-snackbar-item`,s);var c=!1,l=class extends t{static properties={snackbars:{state:!0},label:{type:String}};nextId=0;previousFocus=null;constructor(){super(),this.snackbars=[],this.label=`Notifications`}show(e){e.duration===void 0&&!c&&(c=!0,console.info("[esa-snackbar] Toasts now persist until dismissed. The `duration` default changed from 5000 to 0 on 2026-08-16 — a timer the user cannot adjust is WCAG 2.2.1 (Level A). Pass `duration: 5000` to restore auto-dismiss, and read the note on EsaSnackbarConfig.duration before you do."));let t={variant:`info`,duration:0,dismissable:!0,...e},n=t.variant===`danger`;if(t.uniqueKey){let e=this.snackbars.find(e=>e.uniqueKey===t.uniqueKey);if(e){this.snackbars=this.snackbars.map(e=>e.uniqueKey===t.uniqueKey?{...e,...t,id:e.id,timer:e.timer}:e);let r=this.snackbars.find(t=>t.id===e.id)??e;return i(t.message,{assertive:n}),this.restartTimer(r),r.id}}let r=`esa-snackbar-${this.nextId++}`,a=t.duration??0,o={...t,id:r,timer:null,remaining:a,startedAt:0};return this.snackbars=[...this.snackbars,o],i(t.message,{assertive:n}),this.startTimer(o),r}success(e,t){return this.show({...t,message:e,variant:`success`})}info(e,t){return this.show({...t,message:e,variant:`info`})}warning(e,t){return this.show({...t,message:e,variant:`warning`})}danger(e,t){return this.show({...t,message:e,variant:`danger`})}startTimer(e){e.remaining<=0||(e.startedAt=Date.now(),e.timer=setTimeout(()=>this.dismiss(e.id),e.remaining))}restartTimer(e){e.timer&&clearTimeout(e.timer),e.remaining=e.duration??0,this.startTimer(e)}pauseAll=()=>{for(let e of this.snackbars)e.timer&&(clearTimeout(e.timer),e.timer=null,e.remaining=Math.max(0,e.remaining-(Date.now()-e.startedAt)))};resumeAll=()=>{for(let e of this.snackbars)!e.timer&&e.remaining>0&&this.startTimer(e)};onKeydown=e=>{e.key===`Escape`&&this.snackbars.length!==0&&(e.stopPropagation(),this.dismiss(this.snackbars[this.snackbars.length-1].id))};onFocusIn=e=>{let t=e.relatedTarget;t&&!this.contains(t)&&(this.previousFocus=t),this.pauseAll()};dismiss(e){let t=this.snackbars.find(t=>t.id===e);t?.timer&&clearTimeout(t.timer);let n=this.renderRoot.activeElement??o(),r=!!n&&this.renderRoot.contains(n);if(this.snackbars=this.snackbars.filter(t=>t.id!==e),r){let e=this.previousFocus;this.previousFocus=null,this.updateComplete.then(()=>{e?.isConnected?e.focus():document.body.focus?.()})}}clearAll(){this.snackbars.forEach(e=>e.timer&&clearTimeout(e.timer)),this.snackbars=[]}disconnectedCallback(){super.disconnectedCallback(),this.snackbars.forEach(e=>e.timer&&clearTimeout(e.timer))}render(){return e`
      <div
        class="esa-snackbar-container"
        role="region"
        aria-label=${this.label}
        @keydown=${this.onKeydown}
        @mouseenter=${this.pauseAll}
        @mouseleave=${this.resumeAll}
        @focusin=${this.onFocusIn}
        @focusout=${this.resumeAll}
      >
        ${this.snackbars.map(t=>e`
            <esa-snackbar-item
              message=${t.message}
              variant=${t.variant??`info`}
              action=${t.action??``}
              ?dismissable=${t.dismissable!==!1}
              @dismiss=${()=>this.dismiss(t.id)}
              @action=${()=>this.dispatchEvent(new CustomEvent(`snackbar-action`,{detail:{id:t.id},bubbles:!0,composed:!0}))}
            ></esa-snackbar-item>
          `)}
      </div>
    `}static styles=n`
    :host { display: contents; }

    .esa-snackbar-container {
      position: fixed;
      bottom: var(--spacing-500, 1.5rem);
      right: var(--spacing-500, 1.5rem);
      z-index: var(--z-toast, 500);
      display: flex;
      flex-direction: column-reverse;
      gap: var(--spacing-200, 0.5rem);
      max-width: var(--snackbar-container-max-width, 420px);
    }

    /* An empty region should not be a hit-testable rectangle sitting over the
       bottom-right of every page. The :empty selector is safe here because the
       container's only children are elements, with no template whitespace
       between them. */
    .esa-snackbar-container:empty {
      display: none;
    }

    /* Reflow (SC 1.4.10) and resize (1.4.4). Below the 320px reflow width a
       420px box with 1.5rem offsets on both sides cannot fit, so the stack
       becomes a full-width strip instead of overflowing the viewport. The same
       rule is what a 400%-zoom viewport hits. */
    @media (max-width: 30rem) {
      .esa-snackbar-container {
        left: var(--spacing-200, 0.5rem);
        right: var(--spacing-200, 0.5rem);
        bottom: var(--spacing-200, 0.5rem);
        max-width: none;
      }
    }
  `};customElements.get(`esa-snackbar-container`)||customElements.define(`esa-snackbar-container`,l);function u(){let e=document.querySelector(`esa-snackbar-container`);if(e)return e;let t=document.createElement(`esa-snackbar-container`);return document.body.appendChild(t),t}function d(e,t=`info`,n=3e3){return u().show({message:e,variant:t,duration:n})}export{d as n,u as t};