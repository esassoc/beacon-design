import"./BcnKbHero.astro_astro_type_script_index_0_lang.Bh9QjbpR.js";import{f as l,w as u}from"./fish-model.BrWIAsRB.js";import"./lit-element.C8p3bJxG.js";const r=()=>document.querySelector(".bcn-wb")?.wbApi;function f(e,d){const n=new Map(e.funding.map(t=>[t.waterYear,t.amount])),s=new Map(d.fundingByYear.map(t=>[t.waterYear,t.amount])),o=new Set([...n.keys(),...s.keys()]);if(e.startMonth&&e.endMonth){const t=u(e.startMonth),c=Math.max(t,u(e.endMonth));for(let a=t;a<=c;a++)o.add(a)}return[...o].sort((t,c)=>t-c).map(t=>{const c=n.get(t)??0,a=s.get(t)??0;return{wy:t,own:c,sub:a-c,total:a}})}const i=e=>e?l(e):"—";function b(e,d,n){const s=f(d,n),o=n.totalFunding!==n.ownFunding;e.classList.contains("bcn-funding--slim");const t=e.hasAttribute("data-readonly"),c=a=>t?i(a.own):`<esa-text-field class="bcn-funding__field" size="sm" type="text" prefix="$" placeholder="0" value="${a.own||""}" data-wb-funding data-wy="${a.wy}"></esa-text-field>`;e.innerHTML=`
      ${s.length?`<table class="bcn-funding__table">
              <thead><tr>
                <th scope="col">Water year</th>
                <th scope="col" class="bcn-funding__num">${o?"Own":"Amount"}</th>
                ${o?'<th scope="col" class="bcn-funding__num">Rolled up</th><th scope="col" class="bcn-funding__num">Total</th>':""}
              </tr></thead>
              <tbody>
                ${s.map(a=>`<tr data-wy="${a.wy}">
                      <th scope="row" class="bcn-funding__year">WY${a.wy}</th>
                      <td class="bcn-funding__num${t?"":" bcn-funding__edit"}"${t?' data-cell="own"':""}>${c(a)}</td>
                      ${o?`<td class="bcn-funding__num bcn-funding__muted" data-cell="sub">${i(a.sub)}</td>
                             <td class="bcn-funding__num bcn-funding__strong" data-cell="total">${i(a.total)}</td>`:""}
                    </tr>`).join("")}
              </tbody>
              <tfoot><tr>
                <th scope="row">Total</th>
                <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">${l(n.ownFunding)}</td>
                ${o?`<td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">${l(n.totalFunding-n.ownFunding)}</td>
                       <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">${l(n.totalFunding)}</td>`:""}
              </tr></tfoot>
            </table>`:'<p class="bcn-funding__empty">None planned.</p>'}
    `}function m(e,d,n){const s=f(d,n),o=(t,c)=>{const a=e.querySelector(t);a&&(a.textContent=c)};for(const t of s)o(`tr[data-wy="${t.wy}"] [data-cell="sub"]`,i(t.sub)),o(`tr[data-wy="${t.wy}"] [data-cell="total"]`,i(t.total));o('[data-cell="foot-own"]',l(n.ownFunding)),o('[data-cell="foot-sub"]',l(n.totalFunding-n.ownFunding)),o('[data-cell="foot-total"]',l(n.totalFunding))}function g(e){const d=r();if(!d)return;const n=e.querySelector(".bcn-funding");if(!n)return;const s=e.dataset.nodePanel??"",o=d.getNode(s),t=d.rollupOf(s);if(!o||!t)return;const c=document.activeElement;c instanceof HTMLElement&&c.tagName==="ESA-TEXT-FIELD"&&n.contains(c)?m(n,o,t):b(n,o,t)}document.addEventListener("change",e=>{const d=e.target;if(!(d instanceof HTMLElement)||d.tagName!=="ESA-TEXT-FIELD"||!("wbFunding"in d.dataset))return;const n=d.closest("[data-node-panel]"),s=r();if(!n||!s)return;const o=Number(d.dataset.wy),t=String(e.detail?.value??d.value??"").replace(/[^0-9]/g,"");s.setFunding(n.dataset.nodePanel??"",o,t?Number(t):0)});document.addEventListener("wb-model-change",()=>{const e=document.querySelector("[data-node-panel]:not([hidden])");e&&g(e)});document.addEventListener("wb-node-select",e=>{const d=e.detail?.id,n=document.querySelector(`[data-node-panel="${d}"]`);n&&g(n)});
