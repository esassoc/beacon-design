import{a as e,n as t,r as n,s as r,t as i}from"./typography.Dt-sBkj4.js";import{t as a}from"./a11y.CplpE3OP.js";import{n as o,t as s}from"./unsafe-svg.DFe24ecq.js";import{t as c}from"./announcer.CEmnlEx3.js";var l=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),u=(e,t)=>{let n=l(e);if(!t)return n;let r=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return n.replace(RegExp(`(${r})`,`ig`),`<mark>$1</mark>`)},d=class extends t{static properties={entities:{type:Array},scopes:{type:Array},recent:{type:Array},rowActions:{type:Array,attribute:`row-actions`},open:{type:Boolean,reflect:!0},placeholder:{type:String},allLabel:{type:String,attribute:`all-label`},hotkey:{type:String},query:{state:!0},activeScope:{state:!0},activeId:{state:!0}};query=``;activeScope=``;activeId=null;constructor(){super(),this.entities=[],this.scopes=[],this.recent=[],this.rowActions=[],this.open=!1,this.placeholder=`Search…`,this.allLabel=`All`,this.hotkey=``}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.onGlobalKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.onGlobalKeydown)}isEditable(e){let t=e;if(!t)return!1;let n=t.tagName;return n===`INPUT`||n===`TEXTAREA`||n===`SELECT`||t.isContentEditable}onGlobalKeydown=e=>{this.hotkey===`mod+k`&&(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`k`?(e.preventDefault(),this.toggle()):this.hotkey===`slash`&&e.key===`/`&&!this.isEditable(e.target)&&(e.preventDefault(),this.show())};toggle(){this.open?this.close():this.show()}show(){this.open=!0,this.query=``,this.activeScope=``,this.activeId=null,requestAnimationFrame(()=>this.focusInput())}focusInput(){this.renderRoot.querySelector(`.esa-entity-search__input`)?.focus()}close(){this.open=!1}get dialogEl(){return this.renderRoot.querySelector(`dialog`)}syncDialog(){let e=this.dialogEl;e&&(this.open?e.open||e.showModal():e.close())}onNativeClose=()=>{this.open=!1};emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}get queryMatches(){let e=this.query.toLowerCase().trim();return e?this.entities.filter(t=>`${t.title} ${t.subtitle??``}`.toLowerCase().includes(e)):this.entities}scopeCount(e){return this.queryMatches.filter(t=>t.scope===e).length}get renderGroups(){let e=e=>this.scopes.find(t=>t.id===e);if(this.activeScope){let t=e(this.activeScope),n=this.queryMatches.filter(e=>e.scope===this.activeScope);return t&&n.length?[{scope:t,items:n}]:[]}return this.scopes.map(e=>({scope:e,items:this.queryMatches.filter(t=>t.scope===e.id)})).filter(e=>e.items.length>0)}get showingRecent(){return!this.query.trim()&&!this.activeScope&&this.recent.length>0}get flatItems(){return this.showingRecent?this.recent:this.renderGroups.flatMap(e=>e.items)}onSearch=e=>{this.query=e.target.value,this.activeId=null};setScope(e){let t=this.activeInput();this.activeScope=e,this.activeId=null,this.emit(`scope-change`,{scope:e}),!t&&this.updateComplete.then(()=>{this.renderRoot.querySelector(`.esa-entity-search__scope[tabindex="0"]`)?.focus()})}activeInput(){let e=this.renderRoot;return e.activeElement===e.querySelector(`.esa-entity-search__input`)}cycleScope(e){let t=[``,...this.scopes.map(e=>e.id)],n=(t.indexOf(this.activeScope)+e+t.length)%t.length;this.setScope(t[n])}onKeydown=e=>{if(e.key===`Escape`){e.preventDefault(),this.close();return}if(this.scopes.length&&!this.activeInput()&&(e.key===`ArrowRight`||e.key===`ArrowLeft`)){e.preventDefault(),this.cycleScope(e.key===`ArrowRight`?1:-1);return}if(e.key===`Enter`&&(e.metaKey||e.ctrlKey)){e.preventDefault(),this.emit(`show-all`,{query:this.query,scope:this.activeScope}),this.close();return}let t=this.flatItems;if(e.key===`ArrowDown`||e.key===`ArrowUp`){if(e.preventDefault(),!t.length)return;this.activeInput()||this.focusInput();let n=t.findIndex(e=>e.id===this.activeId),r=e.key===`ArrowDown`?n<t.length-1?n+1:0:n>0?n-1:t.length-1;this.activeId=t[r].id,this.scrollActiveIntoView();return}if(this.activeInput()&&e.key===`Enter`&&t.length){e.preventDefault();let n=t.find(e=>e.id===this.activeId)??(t.length===1?t[0]:null);n&&this.selectEntity(n)}};scrollActiveIntoView(){this.updateComplete.then(()=>{this.renderRoot.querySelector(`.esa-entity-search__row--active`)?.scrollIntoView({block:`nearest`})})}selectEntity(e){this.emit(`select`,{entity:e}),this.close()}onRowAction(e,t,n){e.stopPropagation(),this.focusInput(),this.emit(`row-action`,{action:t.id,entity:n})}iconFor(e){return e.icon??this.scopes.find(t=>t.id===e.scope)?.icon}renderIcon(t){return t?e`<svg class="esa-entity-search__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s(t)}</svg>`:null}domId(e){return this.domIdFromId(e.id)}domIdFromId(e){return`opt-${this.flatItems.findIndex(t=>t.id===e)}`}renderRow(t){let n=this.rowActions.filter(e=>!e.scopes||e.scopes.includes(t.scope));return e`
      <div
        class="esa-entity-search__row ${t.id===this.activeId?`esa-entity-search__row--active`:``}"
        id=${this.domId(t)}
        role="option"
        aria-selected=${t.id===this.activeId}
        @click=${()=>this.selectEntity(t)}
        @mouseenter=${()=>this.activeId=t.id}
      >
        <span class="esa-entity-search__row-icon">${this.renderIcon(this.iconFor(t))}</span>
        <span class="esa-entity-search__row-text">
          <span class="esa-entity-search__row-title typography-label-md">${o(u(t.title,this.query.trim()))}</span>
          ${t.subtitle?e`<span class="esa-entity-search__row-subtitle typography-body-xs">${o(u(t.subtitle,this.query.trim()))}</span>`:null}
        </span>
        ${t.meta?e`<span class="esa-entity-search__row-meta typography-body-xs">${t.meta}</span>`:null}
        ${n.length?e`<span class="esa-entity-search__row-actions">
              ${n.map(n=>e`<button
                  class="esa-entity-search__row-action typography-body-xs"
                  type="button"
                  title=${n.label}
                  aria-label=${n.label}
                  @click=${e=>this.onRowAction(e,n,t)}
                >
                  ${n.icon?this.renderIcon(n.icon):e`<span>${n.label}</span>`}
                </button>`)}
            </span>`:null}
      </div>
    `}wasEmpty=!1;announceEmptyResults(){let e=this.open&&!!this.query.trim()&&this.queryMatches.length===0;e&&!this.wasEmpty&&c(`No results found`,{assertive:!0}),this.wasEmpty=e}updated(e){e.has(`open`)&&this.syncDialog(),this.announceEmptyResults()}render(){let t=this.query.trim(),r=this.renderGroups,i=this.showingRecent,a=this.queryMatches.length;return e`
      <dialog class="esa-entity-search" closedby="any" aria-label="Search" @keydown=${this.onKeydown} @close=${this.onNativeClose}>
        <div class="esa-entity-search__search">
          <svg class="esa-entity-search__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <!-- The input had NO accessible name: no label, no aria-label, only a
               placeholder — which is not a name and disappears the moment you type.
               aria-describedby carries the instructional cue, which is what makes
               announcing the result list on every keystroke unnecessary. The visible
               footer below says the same thing to sighted users. -->
          <input
            class="esa-entity-search__input typography-microcopy-lg-subtle"
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="listbox"
            aria-activedescendant=${this.activeId?this.domIdFromId(this.activeId):n}
            aria-label=${this.placeholder||`Search`}
            aria-describedby="cue"
            placeholder=${this.placeholder}
            .value=${this.query}
            @input=${this.onSearch}
            autocomplete="off"
          />
          <span class="visually-hidden" id="cue"
            >Results filter as you type. Use the up and down arrows to review them and
            Enter to open. Tab to the scope buttons, then left and right arrows to change
            scope. Escape closes.</span
          >
          <kbd class="esa-entity-search__kbd typography-label-xs">ESC</kbd>
        </div>

        ${this.scopes.length?e`<!-- A RADIOGROUP, NOT A TABLIST. These facets narrow a list; they
                   control no tabpanel, and nothing here is a tab. The role mattered
                   beyond pedantry: tablist PROMISES Left/Right Arrow, and while the
                   component claimed it, Left/Right did nothing and Tab — the one key
                   a tablist never uses — was bound to cycling them instead. Radio is
                   the single-select-filter role, and it means the same arrow keys the
                   component now actually implements. -->
              <div class="esa-entity-search__scopes" role="radiogroup" aria-label="Search scope">
              <button
                class="esa-entity-search__scope typography-body-xs ${this.activeScope===``?`esa-entity-search__scope--active`:``}"
                role="radio"
                tabindex=${this.activeScope===``?`0`:`-1`}
                aria-checked=${this.activeScope===``}
                @click=${()=>this.setScope(``)}
              >
                ${this.allLabel}${t?e`<span class="esa-entity-search__scope-count typography-body-xs">${a}</span>`:null}
              </button>
              ${this.scopes.map(n=>e`<button
                  class="esa-entity-search__scope typography-body-xs ${this.activeScope===n.id?`esa-entity-search__scope--active`:``}"
                  role="radio"
                  tabindex=${this.activeScope===n.id?`0`:`-1`}
                  aria-checked=${this.activeScope===n.id}
                  @click=${()=>this.setScope(n.id)}
                >
                  ${this.renderIcon(n.icon)}${n.label}${t?e`<span class="esa-entity-search__scope-count typography-body-xs">${this.scopeCount(n.id)}</span>`:null}
                </button>`)}
            </div>`:null}

        <div class="esa-entity-search__results" id="listbox" role="listbox">
          ${i?e`<div class="esa-entity-search__group">
                <div class="esa-entity-search__group-head typography-eyebrow-md"><span>Recent</span></div>
                ${this.recent.map(e=>this.renderRow(e))}
              </div>`:r.length?r.map(t=>e`<div class="esa-entity-search__group">
                    <div class="esa-entity-search__group-head typography-eyebrow-md">
                      <span>${t.scope.label}</span>
                      <span class="esa-entity-search__group-count">${t.items.length}</span>
                    </div>
                    ${t.items.map(e=>this.renderRow(e))}
                  </div>`):e`<div class="esa-entity-search__empty typography-body-md">No results${t?e` for “${this.query}”`:null}.</div>`}
        </div>

        <div class="esa-entity-search__footer typography-body-xs">
          <span><kbd class="typography-label-xs">↑</kbd><kbd class="typography-label-xs">↓</kbd> Navigate</span>
          <span><kbd class="typography-label-xs">↵</kbd> Select</span>
          ${this.scopes.length?e`<span><kbd class="typography-label-xs">←</kbd><kbd class="typography-label-xs">→</kbd> Scope</span>`:null}
          <span><kbd class="typography-label-xs">Esc</kbd> Close</span>
        </div>
      </dialog>
    `}static styles=[i,a,r`
    /* The light-DOM box-sizing reset does not cross the shadow boundary, so set it
       here — the same fix esa-sidebar-nav already carries. Without it .__row
       (width: 100% + 0.75rem of inline padding) computes 24px WIDER than the
       results box, and .__results has overflow-y: auto, which per CSS forces
       overflow-x to auto too. So the list grew a horizontal scrollbar that no
       amount of extra panel width could remove: the overflow was a fixed 24px,
       not a proportion. Measured at 720px: scrollWidth 736 vs clientWidth 720. */
    *, *::before, *::after { box-sizing: border-box; }

    :host { display: contents; }

    /* ::backdrop replaces the scrim div; the top layer replaces the z-index pair.
       Literal fallback is the real value where ::backdrop does not inherit custom
       properties — see esa-dialog. */
    dialog.esa-entity-search::backdrop {
      background: var(--color-background-overlay-backdrop, rgba(0, 0, 0, 0.5));
    }

    dialog.esa-entity-search {
      /* Docked 12% down, so explicit insets and a zeroed margin rather than the
         UA's centering 'margin: auto'; its border/padding and max-* clamps go too. */
      position: fixed;
      top: 12%;
      left: 50%;
      transform: translateX(-50%);
      margin: 0;
      padding: 0;
      width: var(--entity-search-width, 720px);
      max-width: calc(100vw - 2rem);
      /* Docked at top: 12%, so 70vh left 18vh of dead space below the panel while
         the results list was already scrolling at eight rows. 78vh spends that
         slack and keeps a 10vh gap at the bottom. */
      max-height: var(--entity-search-max-height, 78vh);
      background: var(--color-background-elevation-floating, #fcfcfc);
      color: var(--color-content-default, #202020);
      border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
      border-radius: var(--radius-lg, 0.75rem);
      box-shadow: var(--elevation-6, 0 20px 60px rgba(0, 0, 0, 0.2));
      overflow: hidden;
      font-family: var(--typography-font-family-sans, sans-serif);
      animation: esa-entity-enter var(--animation-enter, 150ms ease-out);
    }
    dialog.esa-entity-search[open] { display: flex; flex-direction: column; }
    @keyframes esa-entity-enter {
      from { opacity: 0; transform: translateX(-50%) scale(0.96); }
      to { opacity: 1; transform: translateX(-50%) scale(1); }
    }

    .esa-entity-search__search {
      display: flex;
      align-items: center;
      gap: var(--spacing-300, 0.75rem);
      padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
      border-bottom: var(--border-width-default, 1px) solid var(--color-border-default-subtle, #d9d9d9);
      /* The panel is --radius-lg (12px) with overflow: hidden, so its inner clip
         curve is (12 - 1px border) = 11px. A SQUARE row inside it puts the focus
         ring's corner at (2,2) from the padding box, which is 12.7px from the
         curve's centre and therefore outside it — ~4.7px was bitten off each end
         of the ring's top edge. Matching the inner radius makes the outline follow
         the curve instead; at outline-offset -2px the browser draws it 2px smaller,
         which is exactly the curve 2px in, so nothing is clipped. */
      border-radius: calc(var(--radius-lg, 0.75rem) - var(--border-width-default, 1px))
        calc(var(--radius-lg, 0.75rem) - var(--border-width-default, 1px)) 0 0;
    }
    /* The ring goes on the ROW, not the input. The input is chromeless by design
       (it has no border of its own), so a ring drawn on it would float around bare
       text; the row is the visible affordance. :focus-within rather than
       :focus-visible for the same reason esa-text-field uses it — this is text
       entry, where a ring on click is native behaviour and wanted.

       Inset because the row runs edge to edge inside an overflow:hidden panel, so
       an outline at positive offset would be clipped on both sides. */
    .esa-entity-search__search:focus-within {
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: calc(var(--focus-ring-offset, 2px) * -1);
    }
    /* Same rung as the text beside it. An icon is non-text content, so 3:1 (SC 1.4.11)
       would have been enough and -muted cleared it — but a search glyph sitting next to
       its own placeholder in a different grey reads as a rendering bug, not as a
       hierarchy. Matching is the design call; the contrast is a free upgrade. */
    .esa-entity-search__search-icon { color: var(--color-content-default-secondary, #646464); flex-shrink: 0; }
    .esa-entity-search__input {
      flex: 1;
      border: none;
      /* Suppressed only because the row above paints the ring — never bare. */
      outline: none;
      color: var(--color-content-default, #202020);
      background: transparent;
      font-family: inherit;
    }
    /* -secondary: a placeholder is TEXT under SC 1.4.3, and axe cannot evaluate
       ::placeholder — so this one was invisible to the audit as well as to readers. */
    .esa-entity-search__input::placeholder { color: var(--color-content-default-secondary, #646464); }
    .esa-entity-search__kbd, .esa-entity-search__footer kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 19px;
      height: 19px;
      padding: 0 5px;
      /* -secondary: the key glyphs are text. 3.70:1 vs 5.77:1 on the raised chip. */
      color: var(--color-content-default-secondary, #646464);
      background: var(--color-background-elevation-raised, #fcfcfc);
      border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
      border-bottom-width: 2px;
      border-radius: 4px;
    }

    .esa-entity-search__scopes {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-150, 0.375rem);
      padding: var(--spacing-200, 0.5rem) var(--spacing-400, 1rem);
      border-bottom: var(--border-width-default, 1px) solid var(--color-border-default-subtle, #d9d9d9);
    }
    .esa-entity-search__scope {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-100, 0.25rem);
      padding: 4px var(--spacing-250, 0.625rem);
      border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
      border-radius: var(--radius-pill, 9999px);
      background: var(--color-background-elevation-raised, #fcfcfc);
      color: var(--color-content-default-secondary, #646464);
      cursor: pointer;
      transition: background 80ms ease, border-color 80ms ease, color 80ms ease;
    }
    /* Hover moves the SURFACE, like every other control in the kit
       (esa-chip-group, esa-filter-dropdown): a value step down to sunken plus the
       stronger neutral border. It used to tint the border brand and darken the
       text only, which read as a link rather than a button — and it carried no
       :not(--active), so hovering the SELECTED facet repainted its knockout label
       to --color-content-default on the brand fill (2.4:1, unreadable). The
       selected pill gets its own hover below, on the brand ramp's hover step. */
    .esa-entity-search__scope:hover:not(.esa-entity-search__scope--active) {
      background: var(--color-background-elevation-sunken, #f0f0f0);
      border-color: var(--color-border-default-strong, #bbbbbb);
      color: var(--color-content-default, #202020);
    }
    /* Outward, per /foundations/focus: inset the ring only where the box is
       clipped. These pills sit inside a padded row, so nothing clips them. */
    .esa-entity-search__scope:focus-visible {
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: var(--focus-ring-offset, 2px);
    }
    .esa-entity-search__scope--active {
      background: var(--color-background-brand, #46a758);
      border-color: var(--color-background-brand, #46a758);
      color: var(--color-content-default-knockout, #fcfcfc);
    }
    .esa-entity-search__scope--active:hover {
      background: var(--color-background-brand-hover, #3e9b4f);
      border-color: var(--color-background-brand-hover, #3e9b4f);
    }
    .esa-entity-search__scope-count {
      font-variant-numeric: tabular-nums;
      opacity: 0.8;
    }
    .esa-entity-search__scope .esa-entity-search__icon { width: 15px; height: 15px; }

    .esa-entity-search__results { overflow-y: auto; padding: var(--spacing-200, 0.5rem); flex: 1; }
    .esa-entity-search__group + .esa-entity-search__group { margin-top: var(--spacing-200, 0.5rem); }
    .esa-entity-search__group-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--spacing-200, 0.5rem) var(--spacing-200, 0.5rem) var(--spacing-100, 0.25rem);
      /* -secondary, not -muted: the scope label and its count are text at 12px —
         3.70:1 on the dialog surface, 5.77:1 here. */
      color: var(--color-content-default-secondary, #646464);
    }
    .esa-entity-search__group-count { font-variant-numeric: tabular-nums; }

    .esa-entity-search__row {
      display: flex;
      align-items: center;
      gap: var(--spacing-300, 0.75rem);
      width: 100%;
      padding: var(--spacing-200, 0.5rem) var(--spacing-300, 0.75rem);
      border: none;
      border-radius: var(--radius-md, 0.5rem);
      background: transparent;
      color: var(--color-content-default, #202020);
      font-family: inherit;
      cursor: pointer;
      text-align: left;
      transition: background 80ms ease;
    }
    .esa-entity-search__row:focus-visible {
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: var(--focus-ring-offset, 2px);
    }
    .esa-entity-search__row--active { background: var(--color-background-elevation-sunken, #f0f0f0); }
    /* Matches the row's own text, per the search icon above. The ACTIVE row overrides
       this to the brand colour on the next line, which is the only intended split. */
    .esa-entity-search__row-icon { flex-shrink: 0; display: inline-flex; color: var(--color-content-default-secondary, #646464); }
    .esa-entity-search__row--active .esa-entity-search__row-icon { color: var(--color-content-brand, #2a7e3b); }
    .esa-entity-search__row-text { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .esa-entity-search__row-title {
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .esa-entity-search__row-subtitle {
      /* -secondary: WORST CASE is the ACTIVE row, whose sunken fill takes muted
         down to 3.33:1 — the row the keyboard user is looking at is the one that
         read worst. 5.19:1 there, 5.77:1 at rest. */
      color: var(--color-content-default-secondary, #646464);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .esa-entity-search__row-title mark, .esa-entity-search__row-subtitle mark {
      background: color-mix(in srgb, var(--color-background-brand, #46a758) 18%, transparent);
      color: inherit;
      border-radius: 2px;
    }
    /* -secondary: same active-row worst case as the subtitle. */
    .esa-entity-search__row-meta { flex-shrink: 0; color: var(--color-content-default-secondary, #646464); font-variant-numeric: tabular-nums; }
    .esa-entity-search__row-actions { flex-shrink: 0; display: inline-flex; gap: var(--spacing-100, 0.25rem); opacity: 0; }
    /* :focus-within is not decoration here. A button at opacity 0 is still focusable,
       so once Tab was freed to reach these buttons the reveal-on-hover rule alone
       would have put focus on something the user cannot see — SC 2.4.7, and the kind
       of thing that reads as "the ring disappeared" rather than as a missing rule.
       Anything reachable by Tab has to become visible when it is. */
    .esa-entity-search__row:hover .esa-entity-search__row-actions,
    .esa-entity-search__row:focus-within .esa-entity-search__row-actions,
    .esa-entity-search__row--active .esa-entity-search__row-actions { opacity: 1; }
    .esa-entity-search__row-action {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 3px 8px;
      border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
      border-radius: var(--radius-pill, 9999px);
      background: var(--color-background-elevation-raised, #fcfcfc);
      color: var(--color-content-default-secondary, #646464);
      cursor: pointer;
    }
    .esa-entity-search__row-action:hover { border-color: var(--color-background-brand, #46a758); color: var(--color-background-brand, #46a758); }
    .esa-entity-search__row-action:focus-visible {
      outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
      outline-offset: var(--focus-ring-offset, 2px);
    }

    .esa-entity-search__empty {
      padding: var(--spacing-700, 3rem) var(--spacing-600, 2rem);
      text-align: center;
      /* -secondary: only renders on a no-results state, which the audit never saw. */
      color: var(--color-content-default-secondary, #646464);
    }

    .esa-entity-search__footer {
      display: flex;
      gap: var(--spacing-400, 1rem);
      padding: var(--spacing-250, 0.625rem) var(--spacing-400, 1rem);
      border-top: var(--border-width-default, 1px) solid var(--color-border-default-subtle, #d9d9d9);
      /* -secondary: the Navigate/Select/Scope/Close labels are text. 3.70 -> 5.77:1. */
      color: var(--color-content-default-secondary, #646464);
    }
    .esa-entity-search__footer span { display: inline-flex; align-items: center; gap: 4px; }
  `]};customElements.get(`esa-entity-search`)||customElements.define(`esa-entity-search`,d);