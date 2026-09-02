function e(e,t){let n=document.querySelector(e);n&&(n.value=t,n.dispatchEvent(new Event(`input`,{bubbles:!0})))}function t(t){for(let n of t||[])n.click?document.querySelector(n.click)?.click():n.fill?e(n.fill[0],n.fill[1]):n.clear?e(n.clear,``):n.clickText?[...document.querySelector(n.clickText[0])?.querySelectorAll(`button`)??[]].find(e=>e.textContent?.trim().includes(n.clickText[1]))?.click():n.key&&document.dispatchEvent(new KeyboardEvent(`keydown`,{key:n.key,bubbles:!0}))}var n=e=>String(e).replace(/[&<>]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`})[e]),r=e=>/^(#[0-9a-f]{3,8}|rgba?\([\d.,\s%/]+\)|hsla?\([\d.,\s%/]+\))$/i.test(String(e).trim());function i(e){return e.replace(/("[^"]*"|'[^']*')/g,`<span class="s">$1</span>`).replace(/(var\()(--[\w-]+)/g,`$1<span class="t">$2</span>`).replace(/(#[0-9a-fA-F]{3,8})\b/g,`<span class="n">$1</span>`)}function a(e){return n(e).split(`
`).map(e=>{if(/\{\s*$/.test(e))return e.replace(/^(\s*)(.+?)(\s*\{)\s*$/,`$1<span class="sel">$2</span>$3`);let t=e.match(/^(\s*)([\w-]+)(\s*:\s*)(.+?)(;?)\s*$/);return t?`${t[1]}<span class="p">${t[2]}</span>${t[3]}${i(t[4])}${t[5]}`:e}).join(`
`)}function o(e){return n(e).replace(/("[^"]*")/g,`<span class="s">$1</span>`).replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g,`$1<span class="tag">$2</span>`)}function s(e){if(!e||!e.length)return`<p class="hint">No design tokens in this section.</p>`;let t={};for(let n of e)(t[n.tier]=t[n.tier]||[]).push(n);return[`brand`,`semantic`,`component`,`primitive`].filter(e=>t[e]).map(e=>`
      <div class="tgroup">
        <div class="tgroup__h">${e} <span>${t[e].length}</span></div>
        ${t[e].map(e=>`<div class="tok">
              <span class="tok__name">${r(e.value)?`<i style="background:${n(e.value)}"></i>`:``}<code>${n(e.name)}</code></span>
              <span class="tok__val">${n(e.value)}</span>
            </div>`).join(``)}
      </div>`).join(``)}function c(e){if(!e||!Object.keys(e).length)return`<p class="hint">No design guidance authored for this section.</p>`;let t=(e,t)=>t?.length?`<div class="g"><div class="g__h">${e}</div><ul>${t.map(e=>`<li>${n(e)}</li>`).join(``)}</ul></div>`:``;return[e.intent?`<p class="g__intent">${n(e.intent)}</p>`:``,t(`Key decisions`,e.decisions),t(`Gotchas`,e.gotchas),t(`Done when`,e.acceptance)].join(``)}var l=`
  :host { all: initial; }
  /* The hidden attribute must win over the explicit display on .launch/.panel,
     otherwise the toggle is defeated by specificity. */
  [hidden] { display: none !important; }
  .host-root { position: fixed; inset: 0; pointer-events: none; z-index: 2147483000;
    font-family: system-ui, sans-serif; }
  .host-root > * { pointer-events: auto; }
  .launch { position: fixed; bottom: 22px; left: 22px; display: inline-flex; align-items: center; gap: 9px;
    padding: 13px 19px; border-radius: 999px; color: #fff; cursor: pointer; font-size: 15px; font-weight: 600;
    letter-spacing: .01em; border: 1px solid #3d6fd6;
    background: linear-gradient(180deg, #1f6feb, #1551c4);
    box-shadow: 0 10px 28px -8px rgba(31,111,235,.65), inset 0 1px 0 rgba(255,255,255,.18);
    transition: transform .15s ease, box-shadow .15s ease, filter .15s ease; }
  .launch:hover { transform: translateY(-2px); filter: brightness(1.07);
    box-shadow: 0 16px 36px -8px rgba(31,111,235,.75), inset 0 1px 0 rgba(255,255,255,.25); }
  .launch:active { transform: translateY(0); }
  .launch svg { flex: none; }
  /* Full-height glass panel, inset from the edges. */
  .panel { position: fixed; top: 18px; right: 18px; bottom: 18px; width: min(720px, 94vw);
    display: flex; flex-direction: column; color: #ffffff; border-radius: 16px;
    background: linear-gradient(155deg, rgba(26,31,40,.74), rgba(11,15,21,.86));
    backdrop-filter: blur(26px) saturate(150%); -webkit-backdrop-filter: blur(26px) saturate(150%);
    border: 1px solid rgba(255,255,255,.15);
    box-shadow: 0 28px 70px -18px rgba(0,0,0,.62), inset 0 1px 0 rgba(255,255,255,.10);
    font-size: 12.5px; overflow: hidden;
    /* slide in from the right */
    transform: translateX(calc(100% + 32px)); opacity: 0; visibility: hidden;
    transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .22s ease, visibility 0s linear .3s; }
  .panel.is-open { transform: none; opacity: 1; visibility: visible;
    transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .22s ease; }
  .head { display: flex; align-items: center; gap: 8px; padding: 13px 16px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .head strong { font-size: 14px; }
  .head .sub { flex: 1; color: #ccd5e0; font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .picker { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip { padding: 5px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04);
    color: #eef2f6; font: inherit; font-size: 12.5px; cursor: pointer; white-space: nowrap;
    transition: border-color .12s ease, background .12s ease, color .12s ease; }
  .chip:hover { color: #fff; border-color: rgba(255,255,255,.3); }
  .chip.on { background: rgba(31,111,235,.28); border-color: #4493f8; color: #fff; font-weight: 600; }
  .tabs { display: flex; gap: 4px; padding: 9px 14px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .tabs button { padding: 5px 12px; border: 0; border-radius: 6px; background: none; color: #ccd5e0;
    font: inherit; font-size: 12.5px; cursor: pointer; }
  .tabs button.on { background: rgba(255,255,255,.12); color: #fff; }
  .body { overflow: auto; padding: 13px 16px; flex: 1; }
  /* Prominent action footer. */
  .footer { position: relative; display: flex; justify-content: flex-end; gap: 8px; padding: 11px 16px;
    border-top: 1px solid rgba(255,255,255,.10); background: rgba(0,0,0,.18); }
  .footer button { flex: none; display: inline-flex; align-items: center; justify-content: center; gap: 7px;
    padding: 8px 14px; border-radius: 8px; font: inherit; font-size: 12.5px; font-weight: 600; cursor: pointer; }
  .copy { color: #eef2f6; border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.05); }
  .copy:hover { color: #fff; border-color: rgba(255,255,255,.34); }
  .copy.done { color: #7ee787; border-color: #2ea043; }
  .claude { color: #fff; border: 1px solid #d97757;
    background: linear-gradient(180deg, #e0805f, #c25e3c);
    box-shadow: 0 6px 18px -6px rgba(217,119,87,.6), inset 0 1px 0 rgba(255,255,255,.2); }
  .claude svg { flex: none; }
  .claude:hover { filter: brightness(1.06); }
  .claude.done { background: linear-gradient(180deg, #2ea043, #238636); border-color: #2ea043; }
  /* Claude payload preview popover (anchored above the footer). */
  .cpreview { position: absolute; left: 16px; right: 16px; bottom: calc(100% + 8px);
    background: rgba(13,17,23,.96); border: 1px solid rgba(255,255,255,.16); border-radius: 12px;
    box-shadow: 0 18px 50px -14px rgba(0,0,0,.7); padding: 12px 14px; max-height: 50vh; overflow: auto; }
  .cpreview__h { display: flex; align-items: center; margin-bottom: 8px; color: #ccd5e0; font-size: 11px;
    letter-spacing: .04em; text-transform: uppercase; }
  .cpreview__copy { margin-left: auto; color: #e9a589; border: 1px solid #d9775766; border-radius: 6px;
    background: none; font: inherit; font-size: 11.5px; padding: 3px 9px; cursor: pointer; text-transform: none; letter-spacing: 0; }
  .cpreview__copy:hover { color: #fff; border-color: #d97757; }
  .cpreview pre { margin: 0; white-space: pre-wrap; word-break: break-word; line-height: 1.55;
    color: #eef2f6; font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 12px; }
  .hint { margin: 0; color: #c4cdd8; line-height: 1.6; }
  pre.code { margin: 0; white-space: pre-wrap; word-break: break-word; line-height: 1.55; tab-size: 2; color: #e3e9ef;
    font-family: ui-monospace, "SF Mono", Menlo, monospace; }
  pre.code .tag { color: #7ee787; }
  pre.code .s   { color: #a5d6ff; }
  pre.code .sel { color: #d2a8ff; }
  pre.code .p   { color: #79c0ff; }
  pre.code .t   { color: #ffa657; }
  pre.code .n   { color: #f0883e; }
  pre.code .c   { color: #8d97a3; font-style: italic; }
  .g { margin-bottom: 14px; }
  .g__intent { margin: 0 0 14px; color: #ffffff; line-height: 1.6; font-size: 13px; }
  .g__h { color: #c4cdd8; font-size: 11px; letter-spacing: .04em; text-transform: uppercase; margin-bottom: 6px; }
  .g ul { margin: 0 0 2px; padding-left: 18px; }
  .g li { color: #e3e9ef; line-height: 1.55; margin-bottom: 5px; }
  .tgroup { margin-bottom: 14px; }
  .tgroup__h { text-transform: capitalize; color: #c4cdd8; font-size: 11px; letter-spacing: .04em; margin-bottom: 6px; }
  .tgroup__h span { color: #7a8492; }
  .tok { display: flex; flex-direction: column; gap: 2px; padding: 6px 0; border-bottom: 1px solid #161b22; }
  .tok__name { display: flex; align-items: center; gap: 8px; }
  .tok__name i { width: 14px; height: 14px; border-radius: 3px; border: 1px solid #ffffff22; flex: none; }
  .tok__name code { color: #ffffff; font-family: ui-monospace, monospace; }
  .tok__val { color: #c4cdd8; padding-left: 22px; word-break: break-all; font-family: ui-monospace, monospace; }
  .x { border: 0; background: none; color: #c4cdd8; font-size: 20px; line-height: 1; cursor: pointer; }
  .x:hover { color: #fff; }
`,u=`handoff-inspector`;function d(){let e=location.pathname;return e.startsWith(`/beacon-design/`)&&(e=e.slice(15)),e=e.replace(/^\/|\/$/g,``),e.replace(/\//g,`-`)||`index`}var f=e=>`/beacon-design/handoff/${e}/manifest.json`;function p(){if(document.getElementById(u))return;let e=f(d());fetch(e).then(e=>e.ok?e.json():Promise.reject()).then(t=>m(t,e)).catch(()=>{})}function m(e,n){let r=document.createElement(`div`);r.id=u;let i=r.attachShadow({mode:`open`});document.documentElement.appendChild(r);let d=document.createElement(`style`);d.textContent=`
    [data-handoff-on] { outline: 2px solid #4493f8 !important; outline-offset: -2px;
      scroll-margin: 80px; }`;let f=n.replace(/manifest\.json.*$/,``),p=document.createElement(`style`);p.textContent=l;let m=document.createElement(`div`);m.className=`host-root`,m.innerHTML=`
    <button class="launch" title="Inspect this prototype (⌥⇧I)">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 9 3 3-3 3"/><path d="M14 15h3"/><rect width="18" height="16" x="3" y="4" rx="2"/></svg>
      Inspect
    </button>
    <div class="panel">
      <div class="head"><strong>Inspector</strong><span class="sub"></span><button class="x" title="Close (Esc)">×</button></div>
      <div class="picker"></div>
      <div class="tabs">
        <button data-tab="guide" class="on">Guide</button>
        <button data-tab="html">HTML</button>
        <button data-tab="css">CSS</button>
        <button data-tab="tokens">Tokens</button>
      </div>
      <div class="body"></div>
      <div class="footer">
        <div class="cpreview" hidden>
          <div class="cpreview__h">Prompt handed to Claude<button class="cpreview__copy">Copy prompt</button></div>
          <pre></pre>
        </div>
        <button class="copy" title="Copy the active tab's raw content">Copy</button>
        <button class="claude" title="Preview the prompt for Claude">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/></svg>
          for Claude
        </button>
      </div>
    </div>`,i.append(p,m);let h=m.querySelector(`.launch`),g=m.querySelector(`.panel`),_=m.querySelector(`.sub`),v=m.querySelector(`.picker`),y=m.querySelector(`.body`),b=[...m.querySelectorAll(`.tabs button[data-tab]`)],x=m.querySelector(`.copy`),S=m.querySelector(`.claude`),C=m.querySelector(`.cpreview`),w=m.querySelector(`.cpreview pre`),T=m.querySelector(`.cpreview__copy`),E=()=>document.querySelectorAll(`[data-handoff-on]`).forEach(e=>e.removeAttribute(`data-handoff-on`)),D=e=>{E(),e&&document.querySelector(e)?.setAttribute(`data-handoff-on`,``)},O=null,k=`guide`,A=!1,j=!1;function M(){if(x.textContent=`Copy ${k}`,!O){_.textContent=`${e.name} · ${e.sections.length} sections`,y.innerHTML=`<p class="hint">Pick a section above to inspect its markup, styles, tokens, and design intent.</p>`;return}_.textContent=O.tag&&O.tag!==`page`?`${O.label} · <${O.tag}>`:O.label,k===`html`?y.innerHTML=`<pre class="code">${o(O.html)}</pre>`:k===`css`?y.innerHTML=O.css?`<pre class="code">${a(O.css)}</pre>`:`<p class="hint">No section-local CSS (inherited utilities only).</p>`:k===`tokens`?y.innerHTML=s(O.tokens):y.innerHTML=c(O.guide)}let N=()=>[...v.querySelectorAll(`.chips .chip`)];function P(n,r=!1){if(O=e.sections[n]||null,N().forEach((e,t)=>e.classList.toggle(`on`,t===n)),V(),r&&A&&O?.apply){j=!0;let e=document.querySelector(`[data-omni]`);e&&!e.hasAttribute(`hidden`)&&document.querySelector(`[data-omni-close]`)?.click(),t(O.apply),j=!1}A&&D(O?.selector),M()}function F(){v.innerHTML=`<div class="chips"></div>`;let t=v.querySelector(`.chips`);e.sections.forEach((e,n)=>{let r=document.createElement(`button`);r.className=`chip`,r.title=e.apply?`${e.label} — click to drive the app into this state`:e.label,r.textContent=e.label,r.onclick=()=>P(n,!0),t.appendChild(r)})}let I=e=>{!A||j||e.composedPath().includes(g)||L(!1)};function L(e){A=e,g.classList.toggle(`is-open`,e),h.hidden=e,e?(document.head.append(d),D(O?.selector),setTimeout(()=>document.addEventListener(`click`,I,!0),0)):(d.remove(),E(),document.removeEventListener(`click`,I,!0))}function R(){if(!O)return``;if(k===`html`)return O.html||``;if(k===`css`)return O.css||``;if(k===`tokens`)return(O.tokens||[]).map(e=>`${e.name}: ${e.value};`).join(`
`);let e=O.guide||{};return[e.intent,e.decisions?.length&&`Key decisions:\n${e.decisions.map(e=>`- ${e}`).join(`
`)}`,e.gotchas?.length&&`Gotchas:\n${e.gotchas.map(e=>`- ${e}`).join(`
`)}`,e.acceptance?.length&&`Done when:\n${e.acceptance.map(e=>`- ${e}`).join(`
`)}`].filter(Boolean).join(`

`)}let z=(e,t,n=!0)=>{let r=e.innerHTML;e.classList.toggle(`done`,n),e.textContent=t,setTimeout(()=>{e.innerHTML=r,e.classList.remove(`done`)},1300)};x.onclick=async()=>{let e=R();if(e)try{await navigator.clipboard.writeText(e),z(x,`Copied`)}catch{z(x,`Failed`,!1)}};function B(){if(!O?.claudePath)return``;let e=new URL(f+O.claudePath,location.origin).href,t=[`Here's a new UI section to build — "${O.label}".`,``,`The linked spec has the design guidance (intent, key decisions, gotchas) plus sample`,`HTML and CSS. The finished UI should look and behave exactly like this — match it`,`faithfully. The sample code shows how it's built; you don't need to mirror it`,`line-for-line — translate it to your own stack and design system, mapping the`,`sample's values onto your established tokens.`,``,`Spec — use whichever you can reach:`,`• hosted: ${e}`];return O.repoPath&&t.push(`• in this repo: ${O.repoPath}`),t.join(`
`)}let V=()=>C.hidden=!0;S.onclick=()=>{if(O?.claudePath){if(!C.hidden)return V();w.textContent=B(),C.hidden=!1}},T.onclick=async()=>{try{await navigator.clipboard.writeText(B()),z(T,`Copied ✓`)}catch{z(T,`Failed`,!1)}},h.onclick=()=>L(!0),m.querySelector(`.x`).onclick=()=>L(!1),b.forEach(e=>e.onclick=()=>{k=e.dataset.tab,b.forEach(t=>t.classList.toggle(`on`,t===e)),V(),M()}),document.addEventListener(`keydown`,e=>{e.altKey&&e.shiftKey&&(e.key===`I`||e.key===`i`)?(e.preventDefault(),L(!A)):e.key===`Escape`&&A&&(e.preventDefault(),L(!1))}),F(),P(0),new URLSearchParams(location.search).has(`inspect`)&&L(!0)}p();