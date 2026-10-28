import{a as e,n as t,s as n,t as r}from"./typography.Dt-sBkj4.js";var i=class extends t{static properties={selectionMode:{type:String,attribute:`selection-mode`},value:{type:String}};constructor(){super(),this.selectionMode=`none`,this.value=``}onSlotClick=e=>{if(this.selectionMode!==`single`)return;let t=e.target.closest(`button, [data-value]`);if(!t||!this.contains(t))return;let n=t.getAttribute(`data-value`)??t.textContent?.trim()??``;this.value=n,this.syncSelected(),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:n},bubbles:!0,composed:!0}))};syncSelected(){let e=Array.from(this.children);for(let t of e){let e=t.getAttribute(`data-value`)??t.textContent?.trim()??``,n=this.selectionMode===`single`&&e===this.value;t.toggleAttribute(`data-selected`,n);let r=t.querySelector(`button, [role="button"]`)??(t.matches(`button, [role="button"]`)?t:null);r&&(this.selectionMode===`single`?r.setAttribute(`aria-pressed`,String(n)):r.removeAttribute(`aria-pressed`))}}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`),this.addEventListener(`click`,this.onSlotClick),requestAnimationFrame(()=>this.syncSelected())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.onSlotClick)}render(){return e`<div class="esa-button-group__slot typography-label-md">
      <slot @slotchange=${()=>this.syncSelected()}></slot>
    </div>`}static styles=[r,n`
    :host {
      --_group-radius: var(--button-radius-md, var(--radius-md, 0.5rem));
      --_group-border: var(--color-border-default, #cecece);
      display: inline-flex;
      align-items: stretch;
      border-radius: var(--_group-radius);
      overflow: hidden;
    }
    /* No box of its own — the buttons stay direct flex items of the host. */
    .esa-button-group__slot { display: contents; }
    /* Connected borders: square the internal corners, divider between buttons. */
    ::slotted(esa-button),
    ::slotted(button) {
      border-radius: 0 !important;
      position: relative;
    }
    ::slotted(esa-button:first-child),
    ::slotted(button:first-child) {
      border-radius: var(--_group-radius) 0 0 var(--_group-radius) !important;
    }
    ::slotted(esa-button:last-child),
    ::slotted(button:last-child) {
      border-radius: 0 var(--_group-radius) var(--_group-radius) 0 !important;
    }
    ::slotted(esa-button:only-child),
    ::slotted(button:only-child) {
      border-radius: var(--_group-radius) !important;
    }
  `]};customElements.get(`esa-button-group`)||customElements.define(`esa-button-group`,i);