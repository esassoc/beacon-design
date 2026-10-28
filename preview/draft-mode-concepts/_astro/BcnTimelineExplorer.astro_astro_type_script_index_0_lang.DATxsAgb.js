import"./esa-button-toggle.DWhLPQce.js";var{weekLabels:e,categories:t}=JSON.parse(document.getElementById(`tlx-data`).textContent||`{}`),n={30:4,60:9,90:13},r=e=>document.getElementById(e),i=r(`tlx-grid`),a=r(`tlx-hint`);function o(e,t){return e.slice(e.length-t)}function s(e,t,n,r){let i=Math.max(1,...e),a=e.length,o=a>1?(t-r*2)/(a-1):0;return e.map((e,t)=>[r+t*o,n-r-e/i*(n-r*2)])}function c(e){let t=e[e.length-1]-e[0];return t>0?{text:`↑ +${t}`,cls:`bcn-tlx__delta--up`}:t<0?{text:`↓ ${t}`,cls:`bcn-tlx__delta--down`}:{text:`→ flat`,cls:`bcn-tlx__delta--flat`}}function l(r){let l=n[String(r)];i.innerHTML=``,t.forEach(t=>{let n=o(t.weeklyOpen,l),r=o(e,l),a=s(n,160,34,4),u=a.map(([e,t])=>`${e.toFixed(1)},${t.toFixed(1)}`).join(` `),d=`M${a.map(([e,t])=>`${e.toFixed(1)},${t.toFixed(1)}`).join(` L`)} L${a[a.length-1][0].toFixed(1)},30 L${a[0][0].toFixed(1)},30 Z`,f=a[a.length-1],p=c(n),m=`${t.category}: ${r.map((e,t)=>`${e} — ${n[t]}`).join(`, `)}`,h=document.createElement(`div`);h.className=`bcn-tlx__tile`,h.innerHTML=`
        <div class="bcn-tlx__tile-label">${t.category}</div>
        <div class="bcn-tlx__tile-row">
          <div class="bcn-tlx__tile-spark">
            <svg viewBox="0 0 160 34" role="img" aria-label="${m.replace(/"/g,`&quot;`)}">
              <title>${m}</title>
              <path d="${d}" fill="${t.color}" opacity="0.16" stroke="none"></path>
              <polyline points="${u}" fill="none" stroke="${t.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
              <circle cx="${f[0].toFixed(1)}" cy="${f[1].toFixed(1)}" r="2.6" fill="${t.color}"></circle>
            </svg>
          </div>
          <div class="bcn-tlx__tile-stat">
            <span class="bcn-tlx__tile-count">${n[n.length-1]}</span>
            <span class="bcn-tlx__delta ${p.cls}">${p.text}</span>
          </div>
        </div>`,i.appendChild(h)}),a.textContent=`last ${r} days · ${l} weeks shown`}var u=r(`tlx-window`);u.options=[{label:`30d`,value:`30`},{label:`60d`,value:`60`},{label:`90d`,value:`90`}],u.value=`90`,u.addEventListener(`change`,e=>{l(Number(e.detail.value))}),l(90);