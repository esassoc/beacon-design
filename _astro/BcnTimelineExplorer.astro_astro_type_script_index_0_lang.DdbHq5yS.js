import"./esa-button-toggle.LPqnIEMZ.js";import"./typography.C7xuE2z_.js";import"./a11y.c6v_nqwk.js";import"./unsafe-svg.IcsAgwTv.js";const h=JSON.parse(document.getElementById("tlx-data").textContent||"{}"),{weekLabels:v,categories:f}=h,y={30:4,60:9,90:13},g=t=>document.getElementById(t),u=g("tlx-grid"),k=g("tlx-hint");function m(t,e){return t.slice(t.length-e)}function w(t,e,o,n){const d=Math.max(1,...t),l=t.length,x=l>1?(e-n*2)/(l-1):0;return t.map(($,c)=>{const a=n+c*x,r=o-n-$/d*(o-n*2);return[a,r]})}function F(t){const e=t[t.length-1]-t[0];return e>0?{text:`↑ +${e}`,cls:"bcn-tlx__delta--up"}:e<0?{text:`↓ ${e}`,cls:"bcn-tlx__delta--down"}:{text:"→ flat",cls:"bcn-tlx__delta--flat"}}function b(t){const e=y[String(t)];u.innerHTML="",f.forEach(o=>{const n=m(o.weeklyOpen,e),d=m(v,e),l=w(n,160,34,4),x=l.map(([i,s])=>`${i.toFixed(1)},${s.toFixed(1)}`).join(" "),$=`M${l.map(([i,s])=>`${i.toFixed(1)},${s.toFixed(1)}`).join(" L")} L${l[l.length-1][0].toFixed(1)},30 L${l[0][0].toFixed(1)},30 Z`,c=l[l.length-1],a=F(n),r=`${o.category}: ${d.map((i,s)=>`${i} — ${n[s]}`).join(", ")}`,p=document.createElement("div");p.className="bcn-tlx__tile",p.innerHTML=`
        <div class="bcn-tlx__tile-label">${o.category}</div>
        <div class="bcn-tlx__tile-row">
          <div class="bcn-tlx__tile-spark">
            <svg viewBox="0 0 160 34" role="img" aria-label="${r.replace(/"/g,"&quot;")}">
              <title>${r}</title>
              <path d="${$}" fill="${o.color}" opacity="0.16" stroke="none"></path>
              <polyline points="${x}" fill="none" stroke="${o.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
              <circle cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="2.6" fill="${o.color}"></circle>
            </svg>
          </div>
          <div class="bcn-tlx__tile-stat">
            <span class="bcn-tlx__tile-count">${n[n.length-1]}</span>
            <span class="bcn-tlx__delta ${a.cls}">${a.text}</span>
          </div>
        </div>`,u.appendChild(p)}),k.textContent=`last ${t} days · ${e} weeks shown`}const _=g("tlx-window");_.options=[{label:"30d",value:"30"},{label:"60d",value:"60"},{label:"90d",value:"90"}];_.value="90";_.addEventListener("change",t=>{b(Number(t.detail.value))});b(90);
