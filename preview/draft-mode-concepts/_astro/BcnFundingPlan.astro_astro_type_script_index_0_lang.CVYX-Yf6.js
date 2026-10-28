import"./esa-text-field.BfcNHWlq.js";import{f as e,u as t}from"./fish-model.GTeUXFc2.js";var n=()=>document.querySelector(`.bcn-wb`)?.wbApi;function r(t,n){let r=new Map(t.funding.map(e=>[e.waterYear,e.amount])),i=new Map(n.fundingByYear.map(e=>[e.waterYear,e.amount])),a=new Set([...r.keys(),...i.keys()]);if(t.startMonth&&t.endMonth){let n=e(t.startMonth),r=Math.max(n,e(t.endMonth));for(let e=n;e<=r;e++)a.add(e)}return[...a].sort((e,t)=>e-t).map(e=>{let t=r.get(e)??0,n=i.get(e)??0;return{wy:e,own:t,sub:n-t,total:n}})}var i=e=>e?t(e):`—`;function a(e,n,a){let o=r(n,a),s=a.totalFunding!==a.ownFunding;e.classList.contains(`bcn-funding--slim`);let c=e.hasAttribute(`data-readonly`),l=e=>c?i(e.own):`<esa-text-field class="bcn-funding__field" size="sm" type="text" prefix="$" placeholder="0" value="${e.own||``}" data-wb-funding data-wy="${e.wy}"></esa-text-field>`;e.innerHTML=`
      ${o.length?`<table class="bcn-funding__table">
              <thead><tr>
                <th scope="col">Water year</th>
                <th scope="col" class="bcn-funding__num">${s?`Own`:`Amount`}</th>
                ${s?`<th scope="col" class="bcn-funding__num">Rolled up</th><th scope="col" class="bcn-funding__num">Total</th>`:``}
              </tr></thead>
              <tbody>
                ${o.map(e=>`<tr data-wy="${e.wy}">
                      <th scope="row" class="bcn-funding__year">WY${e.wy}</th>
                      <td class="bcn-funding__num${c?``:` bcn-funding__edit`}"${c?` data-cell="own"`:``}>${l(e)}</td>
                      ${s?`<td class="bcn-funding__num bcn-funding__muted" data-cell="sub">${i(e.sub)}</td>
                             <td class="bcn-funding__num bcn-funding__strong" data-cell="total">${i(e.total)}</td>`:``}
                    </tr>`).join(``)}
              </tbody>
              <tfoot><tr>
                <th scope="row">Total</th>
                <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">${t(a.ownFunding)}</td>
                ${s?`<td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">${t(a.totalFunding-a.ownFunding)}</td>
                       <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">${t(a.totalFunding)}</td>`:``}
              </tr></tfoot>
            </table>`:`<p class="bcn-funding__empty">None planned.</p>`}
    `}function o(e,n,a){let o=r(n,a),s=(t,n)=>{let r=e.querySelector(t);r&&(r.textContent=n)};for(let e of o)s(`tr[data-wy="${e.wy}"] [data-cell="sub"]`,i(e.sub)),s(`tr[data-wy="${e.wy}"] [data-cell="total"]`,i(e.total));s(`[data-cell="foot-own"]`,t(a.ownFunding)),s(`[data-cell="foot-sub"]`,t(a.totalFunding-a.ownFunding)),s(`[data-cell="foot-total"]`,t(a.totalFunding))}function s(e){let t=n();if(!t)return;let r=e.querySelector(`.bcn-funding`);if(!r)return;let i=e.dataset.nodePanel??``,s=t.getNode(i),c=t.rollupOf(i);if(!s||!c)return;let l=document.activeElement;l instanceof HTMLElement&&l.tagName===`ESA-TEXT-FIELD`&&r.contains(l)?o(r,s,c):a(r,s,c)}document.addEventListener(`change`,e=>{let t=e.target;if(!(t instanceof HTMLElement)||t.tagName!==`ESA-TEXT-FIELD`||!(`wbFunding`in t.dataset))return;let r=t.closest(`[data-node-panel]`),i=n();if(!r||!i)return;let a=Number(t.dataset.wy),o=String(e.detail?.value??t.value??``).replace(/[^0-9]/g,``);i.setFunding(r.dataset.nodePanel??``,a,o?Number(o):0)}),document.addEventListener(`wb-model-change`,()=>{let e=document.querySelector(`[data-node-panel]:not([hidden])`);e&&s(e)}),document.addEventListener(`wb-node-select`,e=>{let t=e.detail?.id,n=document.querySelector(`[data-node-panel="${t}"]`);n&&s(n)});