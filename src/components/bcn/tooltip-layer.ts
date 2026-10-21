// tooltip-layer — every esa-tooltip on the page, drawn in the top layer (round 17).
//
// esa-tooltip draws its bubble inside its own anchor, absolutely placed, with no collision
// handling, so an overflow container (the drawer's scroll body, a card) or the viewport
// clips it. This keeps the lego as the source of truth for WHEN a tooltip is open (hover,
// focus, delay, Esc, the Guidance bar's pressed-state gate all still set its `open`) and
// takes over only WHERE it draws: one body-level `popover="manual"` element in the top
// layer, placed against the anchor with a flip (above/below, left/right), a shift along the
// edge, an 8px viewport margin, and the arrow held on the anchor's centre. The lego's own
// bubble is hidden by a stylesheet adopted into its shadow root. It reads the lego's
// knockout colours off the host, so a dark tooltip (the bar's, the admin cue's) stays dark.
//
// Ledgered as a hub fix (docs/system-improvement-ledger.md, the esa-tooltip entry).

const MARGIN = 8;
const GAP = 8;

type Side = 'above' | 'below' | 'left' | 'right';
interface Tip extends HTMLElement { open: boolean; text: string; position: Side; align: 'center' | 'start' | 'end' }

let ready = false;

export function initTooltipLayer(): void {
  if (ready) return;
  ready = true;

  const layer = document.createElement('div');
  layer.className = 'bcn-tip typography-microcopy-xs-subtle';
  layer.setAttribute('popover', 'manual');
  layer.setAttribute('role', 'tooltip');
  layer.id = 'bcn-tip';
  const text = document.createElement('span');
  const arrow = document.createElement('span');
  arrow.className = 'bcn-tip__arrow';
  layer.append(text, arrow);
  document.body.append(layer);

  const hideBubble = new CSSStyleSheet();
  hideBubble.replaceSync('.esa-tooltip { display: none !important; }');
  const adopt = (el: Element) => {
    const root = el.shadowRoot;
    if (root && !root.adoptedStyleSheets.includes(hideBubble)) {
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, hideBubble];
    }
  };

  let current: Tip | null = null;

  function place(el: Tip): void {
    const a = el.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const vh = window.innerHeight;
    const w = layer.offsetWidth;
    const h = layer.offsetHeight;
    let side: Side = el.position ?? 'above';
    // Flip when the preferred side has no room and the other one does.
    if (side === 'above' && a.top - GAP - h < MARGIN && a.bottom + GAP + h <= vh - MARGIN) side = 'below';
    else if (side === 'below' && a.bottom + GAP + h > vh - MARGIN && a.top - GAP - h >= MARGIN) side = 'above';
    else if (side === 'left' && a.left - GAP - w < MARGIN && a.right + GAP + w <= vw - MARGIN) side = 'right';
    else if (side === 'right' && a.right + GAP + w > vw - MARGIN && a.left - GAP - w >= MARGIN) side = 'left';

    const cx = a.left + a.width / 2;
    const cy = a.top + a.height / 2;
    let x: number;
    let y: number;
    if (side === 'above' || side === 'below') {
      y = side === 'above' ? a.top - GAP - h : a.bottom + GAP;
      x = el.align === 'start' ? a.left : el.align === 'end' ? a.right - w : cx - w / 2;
    } else {
      x = side === 'left' ? a.left - GAP - w : a.right + GAP;
      y = cy - h / 2;
    }
    // Shift along the edge to keep the margin.
    x = Math.min(Math.max(x, MARGIN), vw - MARGIN - w);
    y = Math.min(Math.max(y, MARGIN), vh - MARGIN - h);
    layer.dataset.side = side;
    layer.style.setProperty('--_x', `${Math.round(x)}px`);
    layer.style.setProperty('--_y', `${Math.round(y)}px`);
    // The arrow stays on the anchor, inside the bubble's rounded corners.
    if (side === 'above' || side === 'below') {
      layer.style.setProperty('--_ax', `${Math.round(Math.min(Math.max(cx - x, 10), w - 10))}px`);
    } else {
      layer.style.setProperty('--_ay', `${Math.round(Math.min(Math.max(cy - y, 10), h - 10))}px`);
    }
  }

  function show(el: Tip): void {
    adopt(el);
    current = el;
    text.textContent = el.text;
    const cs = getComputedStyle(el);
    layer.style.setProperty('--_bg', cs.getPropertyValue('--color-background-default-knockout').trim() || '');
    layer.style.setProperty('--_fg', cs.getPropertyValue('--color-content-default-knockout').trim() || '');
    // Re-show so it lands above any dialog opened since (the top layer stacks in order).
    if (layer.matches(':popover-open')) layer.hidePopover();
    layer.style.setProperty('--_x', '-9999px');
    layer.showPopover();
    place(el);
    layer.dataset.in = '';
    requestAnimationFrame(() => requestAnimationFrame(() => delete layer.dataset.in));
  }

  function hide(): void {
    current = null;
    if (layer.matches(':popover-open')) layer.hidePopover();
  }

  const sync = () => {
    const open = document.querySelector<Tip>('esa-tooltip[open]');
    if (open) {
      if (open !== current || !layer.matches(':popover-open')) show(open);
    } else if (current) hide();
  };

  new MutationObserver((records) => {
    for (const r of records) {
      if (r.type === 'attributes' && (r.target as Element).localName === 'esa-tooltip') adopt(r.target as Element);
    }
    sync();
  }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open'], childList: true });

  customElements.whenDefined('esa-tooltip').then(() => {
    document.querySelectorAll('esa-tooltip').forEach(adopt);
  });
  window.addEventListener('scroll', () => current && place(current), { capture: true, passive: true });
  window.addEventListener('resize', () => current && place(current));
}
