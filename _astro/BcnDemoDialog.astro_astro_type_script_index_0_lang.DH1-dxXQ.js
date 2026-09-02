import{a as e,n as t,o as n,r,s as i,t as a}from"./typography.Dt-sBkj4.js";import{t as o}from"./a11y.CplpE3OP.js";import"./esa-text-field.BfcNHWlq.js";import"./esa-textarea.CjH4Yiu4.js";import"./esa-dialog.DgXTR0cu.js";var s=e`<svg
  class="error__icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line
    x1="12"
    x2="12.01"
    y1="16"
    y2="16"
  />
</svg>`,c={xs:`label-2xs`,sm:`label-xs`,md:`label-md`,lg:`label-lg`},l={xs:`body-2xs`,sm:`body-xs`,md:`body-md`,lg:`body-lg`},u=n`<polyline points="20 6 9 17 4 12"></polyline>`,d=class extends t{static formAssociated=!0;static properties={options:{type:Array},label:{type:String},size:{type:String,reflect:!0},orientation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:Array},required:{type:Boolean},helpText:{type:String,attribute:`help-text`},errorText:{type:String,attribute:`error-text`},liveError:{type:Boolean,attribute:`live-error`}};internals;constructor(){super(),this.options=[],this.label=``,this.size=`md`,this.orientation=`vertical`,this.value=[],this.required=!1,this.helpText=``,this.errorText=``,this.liveError=!1,this.internals=this.attachInternals()}willUpdate(e){if(e.has(`options`)&&typeof this.options==`string`)try{this.options=JSON.parse(this.options)}catch{this.options=[]}(e.has(`value`)||e.has(`name`))&&this.syncFormValue()}connectedCallback(){super.connectedCallback(),this.syncFormValue()}updated(){this.syncValidity()}syncValidity(){if(!this.required||this.value.length>0){this.internals.setValidity({});return}let e=this.renderRoot?.querySelector(`.box`)??void 0;this.internals.setValidity({valueMissing:!0},this.label?`Select at least one option for ${this.label}.`:`Select at least one option.`,e)}syncFormValue(){let e=new FormData,t=this.name||`checkbox-group`;for(let n of this.value)e.append(t,n);this.internals.setFormValue(e)}isChecked(e){return this.value.includes(e)}toggleOption=e=>{if(e.disabled)return;let t=this.value.indexOf(e.value);this.value=t>=0?this.value.filter(t=>t!==e.value):[...this.value,e.value],this.syncFormValue(),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0}))};onKeydown=(e,t)=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this.toggleOption(t))};focus(e){let t=this.renderRoot?.querySelector(`.box--checked, .box`);t?t.focus(e):super.focus(e)}render(){let t=!!this.errorText,n=[t?`error`:``,this.helpText?`help`:``].filter(Boolean).join(` `);return e`
      <!-- A real fieldset/legend rather than a div with role=group + a copied aria-label.
           The legend names the fieldset natively (measured to work inside a shadow root),
           and a reference cannot drift from the visible text or vanish when label is
           empty. role=group is left IMPLICIT here — the explicit one bought nothing and
           is poorly supported on iOS VoiceOver and Android TalkBack. -->
      <fieldset
        class="items ${t?`items--error`:``}"
        aria-invalid=${t?`true`:r}
        aria-describedby=${n||r}
      >
        ${this.label?e`<legend class="group-label typography-${c[this.size]}" id="legend">
              ${this.label}${this.required?e`<span class="group-label__req"> (select at least one)</span>`:null}
            </legend>`:null}
        ${this.options.map((t,n)=>{let r=this.isChecked(t.value),i=t.disabled??!1,a=`opt-${n}-label`;return e`
            <label
              class="item ${i?`item--disabled`:``}"
              @keydown=${e=>this.onKeydown(e,t)}
            >
              <span
                class="box ${r?`box--checked`:``}"
                role="checkbox"
                aria-labelledby=${a}
                aria-checked=${String(r)}
                aria-disabled=${String(i)}
                tabindex=${i?-1:0}
                @click=${()=>this.toggleOption(t)}
              >
                ${r?e`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${u}</svg>`:null}
              </span>
              <span id=${a} class="item-label typography-${l[this.size]}"
                >${t.label}</span
              >
            </label>
          `})}
      </fieldset>

      <!-- Both message nodes always present so the live region pre-exists its content;
           .visually-hidden when empty keeps them out of flow. -->
      <p
        class="error typography-body-sm ${t?`is-shown`:`visually-hidden`}"
        id="error"
        role=${this.liveError?`alert`:r}
          data-esa-live=${this.liveError?`opt-in`:r}
      >${t?e`${s}<span class="visually-hidden">Error: </span
              ><span>${this.errorText}</span>`:r}</p>
      <p class="help typography-body-sm ${this.helpText?`is-shown`:`visually-hidden`}" id="help"
        >${this.helpText||r}</p
      >
    `}static styles=[a,o,i`
    :host {
      --_checkbox-size: 20px;
      --_checkbox-radius: var(--radius-md, 0.5rem);
      --_checkbox-icon-size: 16px;
      display: block;
    }
    :host([size='xs']) {
      --_checkbox-size: 14px;
      --_checkbox-radius: var(--radius-sm, 0.25rem);
      --_checkbox-icon-size: 10px;
    }
    :host([size='sm']) {
      --_checkbox-size: 16px;
      --_checkbox-radius: var(--radius-sm, 0.25rem);
      --_checkbox-icon-size: 12px;
    }
    :host([size='lg']) {
      --_checkbox-size: 24px;
      --_checkbox-radius: var(--radius-md, 0.5rem);
      --_checkbox-icon-size: 20px;
    }

    .group-label {
      display: block;
      margin-bottom: var(--spacing-200, 8px);
      color: var(--color-content-default, #202020);
    }

    .items {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-200, 8px);
    }
    :host([orientation='horizontal']) .items {
      flex-direction: row;
      flex-wrap: wrap;
      gap: var(--spacing-400, 16px);
    }

    .item {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-200, 8px);
      cursor: pointer;
      user-select: none;
    }
    .item--disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .box {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      flex-shrink: 0;
      border: var(--form-border-width, 1px) solid var(--form-border-color, #cecece);
      border-radius: var(--_checkbox-radius);
      background: var(--color-background-field, transparent);
      color: var(--color-content-default-knockout, #fcfcfc);
      transition:
        background var(--transition-fast, 150ms ease),
        border-color var(--transition-fast, 150ms ease),
        box-shadow var(--transition-fast, 150ms ease);
    }
    .box--checked {
      background: var(--color-background-brand, #46a758);
      border-color: var(--color-background-brand, #46a758);
    }

    /* DISABLED IS A TOKEN TREATMENT, not an opacity hack. Tier 2 already ships the
       whole triple — --color-background-disabled, --color-border-disabled,
       --color-content-disabled — and this is the state they exist for; two of the
       three had zero readers because the kit reached for opacity instead.
       The fill is also the one moment a field is deliberately NOT the colour of its
       container: the break from the surface IS the signal that it is inert. */
    /* Unchecked only — see esa-checkbox for why. */
    .item--disabled .box:not(.box--checked) {
      background: var(--color-background-disabled, #f0f0f0);
      border-color: var(--color-border-disabled, #d9d9d9);
    }
    .box:focus-visible {
      border-color: var(--form-border-color-focus, #3e9b4f);
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: var(--focus-ring-offset, 2px);
    }

    .icon {
      width: var(--_checkbox-icon-size);
      height: var(--_checkbox-icon-size);
    }

    .item-label {
      color: var(--color-content-default, #202020);
    }

    /* An invalid group reddens its legend — the group is what is invalid. This comment used
       to add "and there is no single box to outline the way a text field has", and gave that
       as the reason the ring stayed brand-coloured. The premise was right and the conclusion
       was not: there is no single box, so DO NOT outline one — re-point the token instead and
       all N boxes follow. That is the house mechanism for the error ring as of 2026-08-17
       (see esa-text-field), and a group is the case that makes it obviously correct rather
       than merely tidier. */
    .items--error {
      --focus-ring-color: var(--form-error-border-color, #e5484d);
    }
    .items--error .group-label {
      color: var(--form-error-color, var(--color-content-utility-danger, #ce2c31));
    }

    /* Both message nodes always render (the live region has to pre-exist its content);
       .visually-hidden takes the empty ones out of flow. Not display:none, which would
       drop them from the accessibility tree. */
    .help,
    .error {
      margin: 0;
    }
    .help.is-shown,
    .error.is-shown {
      margin-block-start: var(--form-help-gap, 4px);
    }
    .help {
      color: var(--form-help-color, #838383);
    }
    /* Colour, icon AND a visually-hidden "Error:" — colour alone is SC 1.4.1. */
    .error {
      display: flex;
      align-items: center;
      gap: var(--spacing-100, 4px);
      color: var(--form-error-color, var(--color-content-utility-danger, #ce2c31));
    }
    .error__icon {
      flex: none;
      width: 1em;
      height: 1em;
    }

    /* FORCED COLORS. Same shape as esa-checkbox — a span carrying role=checkbox gets
       no system styling and 'aria-disabled' is invisible here. The tick is a
       currentColor SVG and survives; the fill behind it does not, so the
       checked pair is named explicitly. See esa-checkbox for the full argument. */
    @media (forced-colors: active) {
      .box {
        background: Canvas;
        border-color: CanvasText;
      }
      .box--checked,
      .box--indeterminate {
        background: Highlight;
        border-color: Highlight;
        color: HighlightText;
      }
      .item--disabled .box { border-color: GrayText; }
      .item--disabled { color: GrayText; }
    }
  `]};customElements.get(`esa-checkbox-group`)||customElements.define(`esa-checkbox-group`,d);var f=e=>document.getElementById(e),p=f(`bcn-demo-dialog`),m=f(`bcn-demo-form`),h=f(`bcn-demo-done`),g=f(`bcn-demo-actions`),_=f(`bcn-demo-close-wrap`),v=f(`bcn-demo-cancel`),y=f(`bcn-demo-submit`),b=f(`bcn-demo-close`);if(p&&m&&h&&g&&_&&v&&y&&b){let e=[{id:`bcn-demo-name`,message:`Enter your name`},{id:`bcn-demo-email`,message:`Enter your work email`},{id:`bcn-demo-org`,message:`Enter your organization`}],t=[...e.map(e=>e.id),`bcn-demo-interests`,`bcn-demo-message`],n=e=>f(e);function r(){m.hidden=!1,h.hidden=!0,g.hidden=!1,_.hidden=!0}function i(){m.hidden=!0,h.hidden=!1,g.hidden=!0,_.hidden=!1}function a(){for(let e of t){let t=n(e);t&&(t.value=e===`bcn-demo-interests`?[]:``,`errorText`in t&&(t.errorText=``))}r()}function o(){let t=null;for(let{id:r,message:i}of e){let e=n(r);if(!e)continue;let a=String(e.value??``).trim()===``;e.errorText=a?i:``,a&&!t&&(t=e)}return t?.focus(),!t}document.addEventListener(`click`,e=>{e.target?.closest(`[data-bcn-demo-open]`)&&(e.preventDefault(),a(),p.show())}),v.addEventListener(`click`,()=>p.close()),b.addEventListener(`click`,()=>p.close()),y.addEventListener(`click`,()=>{o()&&(console.log(`[bcn-demo-dialog] request`,{name:n(`bcn-demo-name`)?.value,email:n(`bcn-demo-email`)?.value,organization:n(`bcn-demo-org`)?.value,interests:n(`bcn-demo-interests`)?.value,message:n(`bcn-demo-message`)?.value}),i())})}