import{a as e,n as t,r as n,s as r,t as i}from"./typography.Dt-sBkj4.js";import{t as a}from"./a11y.CplpE3OP.js";var o=e`<svg
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
</svg>`,s={sm:`label-xs`,md:`label-md`,lg:`label-lg`},c={sm:`microcopy-xs-subtle`,md:`microcopy-md-subtle`,lg:`microcopy-lg-subtle`},l={sm:`body-xs`,md:`body-md`,lg:`body-lg`},u=!1,d=class d extends t{static formAssociated=!0;static properties={label:{type:String},options:{type:Array},size:{type:String,reflect:!0},placeholder:{type:String},helpText:{type:String,attribute:`help-text`},cue:{type:String},errorText:{type:String,attribute:`error-text`},required:{type:Boolean},liveError:{type:Boolean,attribute:`live-error`},disabled:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},multiple:{type:Boolean},searchable:{type:Boolean},chipMode:{type:Boolean,attribute:`chip-mode`},_search:{state:!0},_selected:{state:!0},_open:{state:!0},_active:{state:!0}};internals;onDocClick=e=>{this._open&&(e.composedPath().includes(this)||(this._open=!1))};constructor(){super(),this.label=``,this.options=[],this.size=`md`,this.placeholder=`Select...`,this.helpText=``,this.cue=``,this.errorText=``,this.required=!1,this.liveError=!1,this.disabled=!1,this.multiple=!1,this.searchable=!1,this.chipMode=!1,this._search=``,this._selected=[],this._open=!1,this._active=-1,this.internals=this.attachInternals()}static SIZES=[`sm`,`md`,`lg`];warnedSize=!1;warnedSearchable=!1;willUpdate(){if(!d.SIZES.includes(this.size)){let e=this.size;this.size=`sm`,this.warnedSize||(this.warnedSize=!0,console.warn(`⚠️  esa-select: size="${e}" is not supported — clamped to "sm". A select is a click target with a popup; below sm the trigger and chevron fall under a comfortable tap size, and the option list does not shrink with it. Use esa-text-field if you need xs.`))}}connectedCallback(){super.connectedCallback(),this.warnSearchableFlip(),document.addEventListener(`click`,this.onDocClick),this.syncFormValue()}warnSearchableFlip(){u||this.hasAttribute(`searchable`)||(u=!0,console.warn("⚠️  esa-select: `searchable` now defaults to false (was true before 2026-08-15), so this instance renders a button trigger instead of a text field. The list is still reachable by TYPEAHEAD, so most call sites need no change. If you wanted filtering as you type, that is <esa-combobox>. (migrations.json: select-searchable-to-combobox)"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this.onDocClick),clearTimeout(this._typeaheadTimer)}set value(e){this._selected=e==null?[]:Array.isArray(e)?e:[e],this.syncFormValue()}get value(){return this.multiple?this._selected:this._selected[0]??``}get filteredOptions(){let e=this._search.toLowerCase();return e?this.options.filter(t=>t.label.toLowerCase().includes(e)):this.options}get displayValue(){return this._selected.length===0?``:this.options.find(e=>e.value===this._selected[0])?.label??``}get selectedOptions(){return this.options.filter(e=>this._selected.includes(e.value))}get inputValue(){return this.multiple?this._search:this._search||this.displayValue}isSelected(e){return this._selected.includes(e)}syncFormValue(){this.internals.setFormValue(this.multiple?this._selected.join(`,`):this._selected[0]??null)}updated(){this.syncValidity()}syncValidity(){if(!this.required||this._selected.length>0){this.internals.setValidity({});return}let e=this.renderRoot?.querySelector(`.input`)??void 0;this.internals.setValidity({valueMissing:!0},this.label?`Select ${this.label}.`:`Select an option.`,e)}emit(){this.syncFormValue(),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0}))}toggleDropdown(){this.disabled||(this._open?this._open=!1:this.openDropdown())}openDropdown(){this.disabled||(this._open=!0,this._active=-1,requestAnimationFrame(()=>{this.renderRoot.querySelector(`.input`)?.focus()}))}selectOption(e){if(e.disabled)return;let t=e.value;if(this.multiple){let e=this._selected.indexOf(t);this._selected=e>=0?this._selected.filter(e=>e!==t):[...this._selected,t],this._search=``,this.emit(),requestAnimationFrame(()=>{this.renderRoot.querySelector(`.input`)?.focus()})}else this._selected=[t],this._search=``,this._open=!1,this.emit()}removeValue(e,t){t?.stopPropagation(),this._selected=this._selected.filter(t=>t!==e),this.emit()}clearSelection(e){e?.stopPropagation(),this._selected=[],this.emit()}renderTags(){let t=this.selectedOptions;if(t.length===0)return null;if(t.length>1)return e`<span class="chip chip--count typography-body-sm">
        <span class="chip__label">${t.length} Options</span>
        <button
          type="button"
          class="chip__remove"
          aria-label="Clear selection"
          @click=${e=>this.clearSelection(e)}
        >
          ${this.xIcon()}
        </button>
      </span>`;let n=t[0];return e`<span class="chip typography-body-sm">
      <span class="chip__label">${n.label}</span>
      <button
        type="button"
        class="chip__remove"
        aria-label=${`Remove `+n.label}
        @click=${e=>this.removeValue(n.value,e)}
      >
        ${this.xIcon()}
      </button>
    </span>`}onSearchInput=e=>{this._search=e.target.value,this._active=-1,this._open||=!0};onKeydown=e=>{let t=this.filteredOptions;switch(e.key){case`ArrowDown`:if(e.preventDefault(),!this._open)return this.openDropdown();{let e=this._active+1;for(;e<t.length&&t[e].disabled;)e++;e<t.length&&(this._active=e)}break;case`ArrowUp`:if(e.preventDefault(),!this._open)return this.openDropdown();{let e=this._active-1;for(;e>=0&&t[e].disabled;)e--;e>=0&&(this._active=e)}break;case`Enter`:if(e.preventDefault(),this._open&&this._active>=0){let e=t[this._active];e&&!e.disabled&&this.selectOption(e)}else this._open||this.openDropdown();break;case`Escape`:e.preventDefault(),this._open=!1;break;case`Tab`:this._open=!1;break;case` `:if(this.searchable)break;if(this._typeahead){this.onTypeahead(e);break}if(e.preventDefault(),!this._open)this.openDropdown();else if(this._active>=0){let e=t[this._active];e&&!e.disabled&&this.selectOption(e)}break;default:this.onTypeahead(e)}};_typeahead=``;_typeaheadTimer;onTypeahead(e){if(e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey||this.searchable)return;e.preventDefault(),this._typeahead+=e.key.toLowerCase(),clearTimeout(this._typeaheadTimer),this._typeaheadTimer=setTimeout(()=>{this._typeahead=``},500);let t=this.options.findIndex(e=>!e.disabled&&e.label.toLowerCase().startsWith(this._typeahead));t<0||(this._open||this.openDropdown(),this._active=t)}get describedBy(){return[this.errorText?`error`:``,this.helpText?`help`:``,`cue`].filter(Boolean).join(` `)}get cueText(){return this.cue?this.cue:`Use the up and down arrows to review options, or type to jump to one. Enter to choose.`}renderTrigger(){let t=this.multiple?this.selectedOptions.map(e=>e.label).join(`, `):this.displayValue,r=!t;return e`<button
      type="button"
      class="input input--trigger typography-${c[this.size]} ${r?`input--placeholder`:``}"
      role="combobox"
      aria-expanded=${this._open}
      aria-haspopup="listbox"
      aria-labelledby=${this.label?`label`:n}
      aria-required=${this.required?`true`:n}
      aria-invalid=${this.errorText?`true`:n}
      aria-describedby=${this.describedBy||n}
      aria-controls=${this._open?`listbox`:n}
      aria-activedescendant=${this._open&&this._active>=0?`opt-${this._active}`:n}
      ?disabled=${this.disabled}
      @keydown=${this.onKeydown}
    >
      ${this.multiple&&this.chipMode&&this.selectedOptions.length?``:t||this.placeholder}
    </button>`}renderSearchableInput(){return this.warnedSearchable||(this.warnedSearchable=!0,console.warn("⚠️  esa-select: `searchable` is deprecated — a select is a list opened by a BUTTON. A type-to-filter field is an autocomplete, which is `esa-combobox`. Either drop `searchable` (the list is still reachable by typeahead) or switch to <esa-combobox>. (migrations.json: select-searchable-to-combobox)")),e`<input
      class="input typography-${c[this.size]}"
      role="combobox"
      aria-expanded=${this._open}
      aria-haspopup="listbox"
      aria-autocomplete="list"
      aria-labelledby=${this.label?`label`:n}
      aria-required=${this.required?`true`:n}
      aria-invalid=${this.errorText?`true`:n}
      aria-describedby=${this.describedBy||n}
      aria-controls=${this._open?`listbox`:n}
      aria-activedescendant=${this._open&&this._active>=0?`opt-${this._active}`:n}
      placeholder=${this.multiple&&this.chipMode&&this.selectedOptions.length?``:this.placeholder}
      .value=${this.inputValue}
      ?disabled=${this.disabled}
      @input=${this.onSearchInput}
      @keydown=${this.onKeydown}
    />`}focus(e){let t=this.renderRoot?.querySelector(`.input`);t?t.focus(e):super.focus(e)}render(){let t=!!this.errorText;return e`
      <div class="field ${t?`field--error`:``}">
        ${this.label?e`<span class="field__label typography-${s[this.size]}" id="label">
              ${this.label}${this.required?e`<span class="field__required" aria-hidden="true">*</span>`:null}
            </span>`:null}

        <div class="container">
          <!-- Multi-select chip mode renders the selected tokens INSIDE the field
               box (tag input), not floating above it. -->
          <div
            class="input-wrapper ${this.multiple&&this.chipMode?`input-wrapper--tags`:``}"
            @click=${()=>this.toggleDropdown()}
          >
            ${this.multiple&&this.chipMode?this.renderTags():null}
            ${this.searchable?this.renderSearchableInput():this.renderTrigger()}
            <span class="arrow ${this._open?`arrow--open`:``}">${this.chevronIcon()}</span>
          </div>

          ${this._open?e`<div class="dropdown" role="listbox" id="listbox">
                ${this.filteredOptions.length===0?e`<div class="option option--empty typography-${l[this.size]}">No results found</div>`:this.filteredOptions.map((t,n)=>{let r=this.isSelected(t.value);return e`<div
                        class="option typography-${l[this.size]} ${n===this._active?`option--active`:``} ${r?`option--selected`:``} ${t.disabled?`option--disabled`:``}"
                        role="option"
                        id="opt-${n}"
                        aria-selected=${r}
                        aria-disabled=${t.disabled??!1}
                        @click=${()=>this.selectOption(t)}
                        @mouseenter=${()=>this._active=n}
                      >
                        <span class="check ${r?`check--selected`:``}"
                          >${this.checkIcon()}</span
                        >
                        <span class="option__label">${t.label}</span>
                      </div>`})}
              </div>`:null}
        </div>

        <!-- Both nodes always present: a live region created at the same moment as its
             text is routinely not announced, so it has to already be there. .is-shown
             rather than :empty — Lit's template whitespace defeats :empty in engines
             following Selectors L3. -->
        <span
          class="field__error typography-body-sm ${t?``:`visually-hidden`}"
          id="error"
          role=${this.liveError?`alert`:n}
          data-esa-live=${this.liveError?`opt-in`:n}
        >${t?e`${o}<span class="visually-hidden">Error: </span
                ><span>${this.errorText}</span>`:n}</span
        >
        <span
          class="field__help typography-body-sm ${this.helpText?``:`visually-hidden`}"
          id="help"
          >${this.helpText||n}</span
        >
        <!-- Always hidden, always present: the instructional cue that means the option
             list does not need to announce itself as it filters. See cueText. -->
        <span class="visually-hidden" id="cue">${this.cueText}</span
        >
      </div>
    `}chevronIcon(){return e`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>`}checkIcon(){return e`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>`}xIcon(){return e`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>`}static styles=[i,a,r`
    :host {
      display: block;
      --_field-padding-y: var(--spacing-300, 0.75rem);
      --_field-padding-x: var(--spacing-300, 0.75rem);
      --_field-radius: var(--radius-md, 0.5rem);
      --_field-border-color: var(--form-border-color, #cecece);
    }
    /* No :host([size='xs']) — see the note on "declare size". "sm" is the floor by
       decision, and an out-of-range size is clamped to it before it reaches here.
       (No backticks in this comment: one would close the css tagged template.) */
    :host([size='sm']) {
      --_field-padding-y: var(--spacing-250, 0.625rem);
      --_field-padding-x: var(--spacing-250, 0.625rem);
      --_field-radius: var(--radius-sm, 0.25rem);
    }
    :host([size='lg']) {
      --_field-padding-y: var(--spacing-400, 1rem);
      --_field-padding-x: var(--spacing-400, 1rem);
      --_field-radius: var(--radius-md, 0.5rem);
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-100, 4px);
    }
    .field__label {
      /* Was the last reader of --form-label-font-size and one of two readers of
         --form-label-font-weight. Both are retired with the rest of the size-only
         ramp; the composite carries size and weight together. */
      color: var(--form-label-color, #646464);
    }
    .field__required {
      color: var(--color-content-utility-danger, #ce2c31);
      margin-left: 2px;
    }
    .field__help {
      color: var(--form-help-color, #838383);
    }
    /* Three signals, not one: colour, the icon, and a visually-hidden "Error:" prefix.
       Colour alone is SC 1.4.1 (Use of Color, Level A) — and colour alone is exactly
       what separated this from .field__help, which is otherwise an identical span in
       an identical slot. */
    .field__error {
      display: flex;
      align-items: center;
      gap: var(--spacing-100, 4px);
      color: var(--form-error-color, var(--color-content-utility-danger, #ce2c31));
    }
    .field__error .error__icon {
      flex: none;
      width: 1em;
      height: 1em;
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

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    /* Tag mode: chips render inside the field box, so the wrapper carries the
       border/height/focus and the input becomes a borderless filler beside them. */
    .input-wrapper--tags {
      flex-wrap: nowrap;
      gap: var(--spacing-100, 4px);
      padding: var(--_field-padding-y) calc(var(--_field-padding-x) + 24px)
        var(--_field-padding-y) var(--_field-padding-x);
      background: var(--color-background-field, transparent);
      border: var(--form-border-width, 1px) solid var(--_field-border-color);
      border-radius: var(--_field-radius);
      box-sizing: border-box;
      transition:
        border-color var(--transition-fast, 150ms ease),
        box-shadow var(--transition-fast, 150ms ease);
    }
    .input-wrapper--tags:focus-within {
      --_field-border-color: var(--form-border-color-focus, #3e9b4f);
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: var(--focus-ring-offset, 2px);
    }
    .input-wrapper--tags .input {
      /* Compact tag filter: at most ONE token renders (a single chip, or an
         "N Options" count for 2+), so the input rides beside it on one line and the
         box stays at field height — it never wraps to a second row. */
      flex: 1 1 2rem;
      width: auto;
      min-width: 2rem;
      height: auto;
      padding: 0;
      border: none;
      border-radius: 0;
      background: transparent;
    }
    .input-wrapper--tags .input:focus {
      box-shadow: none;
    }
    .field--error .input-wrapper--tags {
      --_field-border-color: var(--form-error-border-color, #e5484d);
    }
    .input {
      width: 100%;
      padding: var(--_field-padding-y) var(--_field-padding-x);
      padding-inline-end: calc(var(--_field-padding-x) + 24px);
      /* The box is content + padding since heights were removed (2026-08-14), so
         LEADING IS NOW LOAD-BEARING — it is the term that decides how tall a field
         is. On a single-line control leading has no typographic job: there is one
         line, and the space above and below it is invisible. Letting the body-*
         composite's relaxed leading through added 12px here at md and made this
         field 7px taller than esa-text-field on the same step, breaking the row
         alignment component-tokens.css promises.
         CHOSEN, NOT RESTATED, and not compensated for with a smaller padding rung.
         The tight leading comes from FIELD_TYPE picking a microcopy-*-subtle rung,
         whose composite declares the line-height for us — there is deliberately no
         line-height declaration in this rule, because one here would outrank the
         composite rather than agree with it. A static padding offset was the other option and
         is wrong: leading scales with the fluid type (27px at 1600, 22px at 375) and
         is re-pointable by a theme, so an offset would cancel it at exactly one
         viewport. esa-textarea stays on a body-* composite on purpose — it is
         genuinely multi-line, so its leading has a typographic job. */
      color: var(--form-text-color, #202020);
      background: var(--color-background-field, transparent);
      border: var(--form-border-width, 1px) solid var(--_field-border-color);
      border-radius: var(--_field-radius);
      outline: none;
      cursor: pointer;
      box-sizing: border-box;
      transition:
        border-color var(--transition-fast, 150ms ease),
        box-shadow var(--transition-fast, 150ms ease);
    }
    .input::placeholder {
      color: var(--form-placeholder-color, #838383);
    }

    /* The default trigger is a BUTTON, not an input — a select opens a list, it does
       not accept typing. A button brings UA styles an input does not: centred text,
       its own font, and a min-width. Restate them so the two trigger paths (button,
       and the deprecated searchable input) are visually identical. */
    .input--trigger {
      display: block;
      text-align: start;
      font: inherit;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-appearance: none;
      appearance: none;
    }
    /* ::placeholder cannot apply to a button — there is no placeholder attribute,
       only fallback text — so the muted colour is a class instead. */
    .input--placeholder {
      color: var(--form-placeholder-color, #838383);
    }
    /* Hover moves the BORDER, not the fill — the field is transparent in every
       state so that it is the colour of whatever contains it.
       --form-border-color-hover already existed for exactly this and was wired
       into one component; it is the family treatment now. */
    .input:hover:not(:disabled) {
      --_field-border-color: var(--form-border-color-hover, #bbbbbb);
    }
    .input:focus {
      --_field-border-color: var(--form-border-color-focus, #3e9b4f);
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: var(--focus-ring-offset, 2px);
    }
    /* DISABLED IS A TOKEN TREATMENT, not an opacity hack. Tier 2 already ships the
       whole triple — --color-background-disabled, --color-border-disabled,
       --color-content-disabled — and this is the state they exist for; two of the
       three had zero readers because the kit reached for opacity instead.
       The fill is also the one moment a field is deliberately NOT the colour of its
       container: the break from the surface IS the signal that it is inert. */
    .input:disabled {
      background: var(--color-background-disabled, #f0f0f0);
      --_field-border-color: var(--color-border-disabled, #d9d9d9);
      color: var(--color-content-disabled, #8d8d8d);
      cursor: not-allowed;
    }
    /* Tag mode moves the box chrome onto the wrapper, so the disabled fill has to
       follow it there — the .input above is borderless in that mode. */
    .input-wrapper--tags:has(.input:disabled) {
      background: var(--color-background-disabled, #f0f0f0);
      --_field-border-color: var(--color-border-disabled, #d9d9d9);
    }

    .arrow {
      position: absolute;
      right: var(--_field-padding-x);
      top: 50%;
      transform: translateY(-50%);
      display: inline-flex;
      color: var(--color-content-default-secondary, #646464);
      pointer-events: none;
      transition: transform var(--transition-fast, 150ms ease);
    }
    .arrow svg {
      width: var(--icon-size-md, 20px);
      height: var(--icon-size-md, 20px);
    }
    .arrow--open {
      transform: translateY(-50%) rotate(180deg);
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: var(--z-dropdown, 50);
      margin-top: var(--spacing-100, 4px);
      max-height: 256px;
      overflow-y: auto;
      background: var(--color-background-elevation-raised, #fcfcfc);
      border: var(--form-border-width, 1px) solid var(--form-border-color, #cecece);
      border-radius: var(--radius-md, 0.5rem);
      box-shadow: var(--elevation-4, 0 6px 24px -6px rgba(0, 0, 0, 0.07));
      overscroll-behavior: contain;
    }

    .option {
      display: flex;
      align-items: center;
      gap: var(--spacing-100, 4px);
      padding: var(--spacing-200, 8px) var(--spacing-300, 12px);
      color: var(--color-content-default, #202020);
      cursor: pointer;
      user-select: none;
      transition: background var(--transition-fast, 150ms ease);
    }
    .option:hover,
    .option--active {
      background: var(--color-background-elevation-sunken, #f0f0f0);
    }
    .option--selected {
      background: var(--color-background-overlay-active, rgba(0, 88, 98, 0.08));
      color: var(--color-content-brand, #2a7e3b);
    }
    .option--disabled {
      color: var(--color-content-disabled, #8d8d8d);
      cursor: not-allowed;
      opacity: 0.6;
    }
    .option--disabled:hover {
      background: transparent;
    }
    .option--empty {
      color: var(--color-content-default-secondary, #646464);
      cursor: default;
      font-style: var(--font-style-italic, italic);
    }
    .option--empty:hover {
      background: transparent;
    }
    .option__label {
      flex: 1;
    }

    .check {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      opacity: 0;
      color: var(--color-content-brand, #2a7e3b);
      transition: opacity var(--transition-fast, 150ms ease);
    }
    .check svg {
      width: 16px;
      height: 16px;
    }
    .check--selected {
      opacity: 1;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-100, 4px);
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-050, 2px);
      padding: 0 var(--spacing-100, 4px) 0 var(--spacing-200, 8px);
      background: var(--color-background-overlay-active, rgba(0, 88, 98, 0.08));
      color: var(--color-content-brand, #2a7e3b);
      border-radius: var(--radius-pill, 9999px);
      user-select: none;
    }
    .chip__label {
      white-space: nowrap;
    }
    .chip__remove {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      padding: 0;
      border: none;
      background: transparent;
      color: var(--color-content-brand, #2a7e3b);
      border-radius: 50%;
      cursor: pointer;
      transition: background var(--transition-fast, 150ms ease);
    }
    .chip__remove svg {
      width: 14px;
      height: 14px;
    }
    .chip__remove:hover {
      background: var(--color-background-overlay-strong-hover, rgba(0, 0, 0, 0.05));
    }
    .chip__remove:focus-visible {
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: 1px;
    }

    .field--error .input {
      --_field-border-color: var(--form-error-border-color, #e5484d);
    }
    /* The invalid field's ring is the SAME ring in red, via the token rather than a property
       override. THIS COMPONENT IS WHY the mechanism is the token: there are three focusable
       parts here — the tags wrapper, the input, and every chip remove button — and an
       outline-color override would have to name each one. Re-pointing --focus-ring-color on
       the error wrapper covers all three, and the dropdown panel too (it renders inside
       .container, so it inherits; see esa-text-field on why that is recorded as a decision).
       Two fixes here on 2026-08-17: it was a box-shadow, which stacked a second band once the
       base ring became an outline; and it read --color-border-utility-danger, which is red-6,
       a SUBTLE BORDER step measuring 1.40:1 on a sunken surface. */
    .field--error {
      --focus-ring-color: var(--form-error-border-color, #e5484d);
    }

    /* FORCED COLORS. Three of this listbox's states are backgrounds and nothing
       else — :hover, --active (the keyboard cursor) and --selected — so all three
       collapse onto Canvas together and the list reads as inert.

       They are given DIFFERENT channels rather than different colours, because
       the two states can coexist on one row: --selected takes the Highlight fill,
       --active takes an inset outline. An inset outline is used so the cursor
       does not enlarge the row or clip against the panel edge.

       This also repairs a normal-mode bug. '.option--selected' is declared after
       '.option--active' at equal specificity, so today the keyboard cursor simply
       vanishes when it lands on the selected row. Here they compose. */
    @media (forced-colors: active) {
      .option--active {
        outline: 2px solid CanvasText;
        outline-offset: -2px;
      }
      .option--selected {
        background: Highlight;
        color: HighlightText;
      }
      /* The tick declares its own brand colour, which would survive as a
         force-adjusted value and could land on top of the Highlight fill. It
         must follow the row instead. Its opacity 0/1 toggle needs no help —
         opacity is not force-adjusted. */
      .check { color: inherit; }
      .option--disabled { color: GrayText; }
    }
  `]};customElements.get(`esa-select`)||customElements.define(`esa-select`,d);