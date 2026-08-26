var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:ee,getPrototypeOf:te}=Object,p=globalThis,m=p.trustedTypes,h=m?m.emptyScript:``,ne=p.reactiveElementPolyfillSupport,g=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},v=(e,t)=>!l(e,t),y={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol(`metadata`),p.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(g(`elementProperties`)))return;let e=te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g(`properties`))){let e=this.properties,t=[...f(e),...ee(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?_:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?_:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??v)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:`open`},b[g(`elementProperties`)]=new Map,b[g(`finalized`)]=new Map,ne?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push(`2.1.2`);var x=globalThis,S=e=>e,C=x.trustedTypes,w=C?C.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,T=`$lit$`,E=`lit$${Math.random().toFixed(9).slice(2)}$`,D=`?`+E,re=`<${D}>`,O=document,k=()=>O.createComment(``),A=e=>e===null||typeof e!=`object`&&typeof e!=`function`,j=Array.isArray,ie=e=>j(e)||typeof e?.[Symbol.iterator]==`function`,M=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,F=/>/g,I=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),L=/'/g,R=/"/g,z=/^(?:script|style|textarea|title)$/i,B=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ae=B(1),oe=B(2),V=Symbol.for(`lit-noChange`),H=Symbol.for(`lit-nothing`),U=new WeakMap,W=O.createTreeWalker(O,129);function G(e,t){if(!j(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return w===void 0?t:w.createHTML(t)}var K=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=N;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===N?c[1]===`!--`?o=P:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=I):(z.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=I):o=F:o===I?c[0]===`>`?(o=i??N,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?I:c[3]===`"`?R:L):o===R||o===L?o=I:o===P||o===F?o=N:(o=I,i=void 0);let d=o===I&&e[t+1].startsWith(`/>`)?` `:``;a+=o===N?n+re:l>=0?(r.push(s),n.slice(0,l)+T+n.slice(l)+E+d):n+E+(l===-2?t:d)}return[G(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},q=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=K(t,n);if(this.el=e.createElement(l,r),W.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=W.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(T)){let t=u[o++],n=i.getAttribute(e).split(E),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ce:r[1]===`?`?le:r[1]===`@`?ue:X}),i.removeAttribute(e)}else e.startsWith(E)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(z.test(i.tagName)){let e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=C?C.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],k()),W.nextNode(),c.push({type:2,index:++a});i.append(e[t],k())}}}else if(i.nodeType===8){if(i.data===D)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(E,e+1))!==-1;)c.push({type:7,index:a}),e+=E.length-1}}a++}}static createElement(e,t){let n=O.createElement(`template`);return n.innerHTML=e,n}};function J(e,t,n=e,r){if(t===V)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=A(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=J(e,i._$AS(e,t.values),i,r)),t}var se=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??O).importNode(t,!0);W.currentNode=r;let i=W.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Y(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new de(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=W.nextNode(),a++)}return W.currentNode=O,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Y=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),A(e)?e===H||e==null||e===``?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==V&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ie(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=q.createElement(G(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new se(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return t===void 0&&U.set(e.strings,t=new q(e)),t}k(t){j(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(k()),this.O(k()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=S(e).nextSibling;S(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},X=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=J(this,e,t,0),a=!A(e)||e!==this._$AH&&e!==V,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=J(this,r[n+o],t,o),s===V&&(s=this._$AH[o]),a||=!A(s)||s!==this._$AH[o],s===H?e=H:e!==H&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ce=class extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}},le=class extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}},ue=class extends X{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??H)===V)return;let n=this._$AH,r=e===H&&n!==H||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==H&&(n===H||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},de=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}},fe=x.litHtmlPolyfillSupport;fe?.(q,Y),(x.litHtmlVersions??=[]).push(`3.3.3`);var Z=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Y(t.insertBefore(k(),e),e,void 0,n??{})}return i._$AI(e),i},Q=globalThis,$=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Z(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};$._$litElement$=!0,$.finalized=!0,Q.litElementHydrateSupport?.({LitElement:$});var pe=Q.litElementPolyfillSupport;pe?.({LitElement:$}),(Q.litElementVersions??=[]).push(`4.2.2`);var me=a(`.typography-display {
  font-family: var(--typography-display-font-family);
  font-size: var(--typography-display-font-size);
  font-weight: var(--typography-display-font-weight);
  line-height: var(--typography-display-line-height);
  letter-spacing: var(--typography-display-letter-spacing);
}

.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}

.typography-heading-lg {
  font-family: var(--typography-heading-lg-font-family);
  font-size: var(--typography-heading-lg-font-size);
  font-weight: var(--typography-heading-lg-font-weight);
  line-height: var(--typography-heading-lg-line-height);
  letter-spacing: var(--typography-heading-lg-letter-spacing);
}

.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}

.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}

.typography-body-lg {
  font-family: var(--typography-body-lg-font-family);
  font-size: var(--typography-body-lg-font-size);
  font-weight: var(--typography-body-lg-font-weight);
  line-height: var(--typography-body-lg-line-height);
  letter-spacing: var(--typography-body-lg-letter-spacing);
}

.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}

.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}

.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}

.typography-body-2xs {
  font-family: var(--typography-body-2xs-font-family);
  font-size: var(--typography-body-2xs-font-size);
  font-weight: var(--typography-body-2xs-font-weight);
  line-height: var(--typography-body-2xs-line-height);
  letter-spacing: var(--typography-body-2xs-letter-spacing);
}


.typography-label-2xs {
  font-family: var(--typography-label-2xs-font-family);
  font-size: var(--typography-label-2xs-font-size);
  font-weight: var(--typography-label-2xs-font-weight);
  line-height: var(--typography-label-2xs-line-height);
  letter-spacing: var(--typography-label-2xs-letter-spacing);
}

.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}

.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}

.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}

.typography-label-lg {
  font-family: var(--typography-label-lg-font-family);
  font-size: var(--typography-label-lg-font-size);
  font-weight: var(--typography-label-lg-font-weight);
  line-height: var(--typography-label-lg-line-height);
  letter-spacing: var(--typography-label-lg-letter-spacing);
}

.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}

.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}

.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}

.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}

.typography-label-lg-strong {
  font-family: var(--typography-label-lg-strong-font-family);
  font-size: var(--typography-label-lg-strong-font-size);
  font-weight: var(--typography-label-lg-strong-font-weight);
  line-height: var(--typography-label-lg-strong-line-height);
  letter-spacing: var(--typography-label-lg-strong-letter-spacing);
}



.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}

.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}

.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}

.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}

.typography-microcopy-lg {
  font-family: var(--typography-microcopy-lg-font-family);
  font-size: var(--typography-microcopy-lg-font-size);
  font-weight: var(--typography-microcopy-lg-font-weight);
  line-height: var(--typography-microcopy-lg-line-height);
  letter-spacing: var(--typography-microcopy-lg-letter-spacing);
}

.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}

.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}

.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}

.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}

.typography-microcopy-lg-subtle {
  font-family: var(--typography-microcopy-lg-subtle-font-family);
  font-size: var(--typography-microcopy-lg-subtle-font-size);
  font-weight: var(--typography-microcopy-lg-subtle-font-weight);
  line-height: var(--typography-microcopy-lg-subtle-line-height);
  letter-spacing: var(--typography-microcopy-lg-subtle-letter-spacing);
}

.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}

.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}

.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}

.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}

.typography-microcopy-lg-strong {
  font-family: var(--typography-microcopy-lg-strong-font-family);
  font-size: var(--typography-microcopy-lg-strong-font-size);
  font-weight: var(--typography-microcopy-lg-strong-font-weight);
  line-height: var(--typography-microcopy-lg-strong-line-height);
  letter-spacing: var(--typography-microcopy-lg-strong-letter-spacing);
}

.typography-microcopy-code-sm {
  font-family: var(--typography-microcopy-code-sm-font-family);
  font-size: var(--typography-microcopy-code-sm-font-size);
  font-weight: var(--typography-microcopy-code-sm-font-weight);
  line-height: var(--typography-microcopy-code-sm-line-height);
  letter-spacing: var(--typography-microcopy-code-sm-letter-spacing);
}

.typography-microcopy-code-md {
  font-family: var(--typography-microcopy-code-md-font-family);
  font-size: var(--typography-microcopy-code-md-font-size);
  font-weight: var(--typography-microcopy-code-md-font-weight);
  line-height: var(--typography-microcopy-code-md-line-height);
  letter-spacing: var(--typography-microcopy-code-md-letter-spacing);
}

.typography-microcopy-code-lg {
  font-family: var(--typography-microcopy-code-lg-font-family);
  font-size: var(--typography-microcopy-code-lg-font-size);
  font-weight: var(--typography-microcopy-code-lg-font-weight);
  line-height: var(--typography-microcopy-code-lg-line-height);
  letter-spacing: var(--typography-microcopy-code-lg-letter-spacing);
}

.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}

.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}

.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}

.typography-eyebrow-sm {
  font-family: var(--typography-eyebrow-sm-font-family);
  font-size: var(--typography-eyebrow-sm-font-size);
  font-weight: var(--typography-eyebrow-sm-font-weight);
  line-height: var(--typography-eyebrow-sm-line-height);
  letter-spacing: var(--typography-eyebrow-sm-letter-spacing);
  text-transform: var(--typography-eyebrow-sm-text-transform);
}

.typography-eyebrow-md {
  font-family: var(--typography-eyebrow-md-font-family);
  font-size: var(--typography-eyebrow-md-font-size);
  font-weight: var(--typography-eyebrow-md-font-weight);
  line-height: var(--typography-eyebrow-md-line-height);
  letter-spacing: var(--typography-eyebrow-md-letter-spacing);
  text-transform: var(--typography-eyebrow-md-text-transform);
}

.typography-code-lg {
  font-family: var(--typography-code-lg-font-family);
  font-size: var(--typography-code-lg-font-size);
  font-weight: var(--typography-code-lg-font-weight);
  line-height: var(--typography-code-lg-line-height);
  letter-spacing: var(--typography-code-lg-letter-spacing);
}

.typography-code-md {
  font-family: var(--typography-code-md-font-family);
  font-size: var(--typography-code-md-font-size);
  font-weight: var(--typography-code-md-font-weight);
  line-height: var(--typography-code-md-line-height);
  letter-spacing: var(--typography-code-md-letter-spacing);
}

.typography-code-sm {
  font-family: var(--typography-code-sm-font-family);
  font-size: var(--typography-code-sm-font-size);
  font-weight: var(--typography-code-sm-font-weight);
  line-height: var(--typography-code-sm-line-height);
  letter-spacing: var(--typography-code-sm-letter-spacing);
}

.typography-code-xs {
  font-family: var(--typography-code-xs-font-family);
  font-size: var(--typography-code-xs-font-size);
  font-weight: var(--typography-code-xs-font-weight);
  line-height: var(--typography-code-xs-line-height);
  letter-spacing: var(--typography-code-xs-letter-spacing);
}

.typography-code-2xs {
  font-family: var(--typography-code-2xs-font-family);
  font-size: var(--typography-code-2xs-font-size);
  font-weight: var(--typography-code-2xs-font-weight);
  line-height: var(--typography-code-2xs-line-height);
  letter-spacing: var(--typography-code-2xs-letter-spacing);
}`);export{ae as a,a as c,V as i,$ as n,oe as o,H as r,o as s,me as t};