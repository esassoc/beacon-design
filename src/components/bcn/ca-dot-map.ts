// California dot-map controller for <BcnCaDotMap> — a faithful port of the
// approved homepage specimen's map script. setupX shape: finds the host
// [data-ca-dot-map] svg, reads its project list from the data-projects JSON
// attribute, then builds the dot-matrix state: an 8px grid of rounded dots
// clipped to the California outline, colored by distance to the nearest
// project (a green heat ramp), with white project markers, proximity-revealed
// label pills, and a magnify-and-brighten hover field under the cursor.

interface DotMapProjectAttr {
  name: string;
  lng: number;
  lat: number;
  color: string;
  label: { dx: number; dy: number; anchor: 'start' | 'end' };
}

interface DotState {
  el: SVGRectElement;
  cx: number;
  cy: number;
  origR: number;
  origG: number;
  origB: number;
  isGray: boolean;
  origFill: string;
}

const NS = 'http://www.w3.org/2000/svg';
const W = 440;
const H = 560;
const PAD = 20;
const DOT = 5;
const GRID = 8;
const HOVER_RADIUS = 55;
const MAX_SCALE = 2.8;
const BRIGHTEN = 0.35;
const LABEL_SHOW_DIST = 45;

/** Simplified California outline, [lng, lat] pairs (specimen data). */
const CA: Array<[number, number]> = [
  [-124.2, 42], [-124.22, 41.75], [-124.3, 41.0], [-124.35, 40.45], [-124.05, 40.0],
  [-123.8, 39.4], [-123.6, 38.95], [-123.1, 38.4], [-123.0, 38.05], [-122.95, 37.95],
  [-122.5, 37.82], [-122.52, 37.55], [-122.35, 37.3], [-122.1, 37.05], [-121.95, 36.65],
  [-121.8, 36.15], [-121.5, 35.85], [-121.1, 35.55], [-120.85, 35.4], [-120.65, 34.95],
  [-120.47, 34.45], [-120.0, 34.4], [-119.5, 34.35], [-118.95, 34.05], [-118.5, 33.95],
  [-118.15, 33.78], [-117.85, 33.6], [-117.55, 33.4], [-117.3, 33.05], [-117.18, 32.7],
  [-117.15, 32.55], [-116.5, 32.55], [-115.5, 32.65], [-114.72, 32.72], [-114.62, 33.0],
  [-114.52, 33.5], [-114.55, 34.0], [-114.6, 34.3], [-114.62, 34.8], [-114.62, 35.0],
  [-114.8, 35.25], [-115.2, 35.55], [-115.7, 35.85], [-116.3, 36.2], [-117.0, 36.5],
  [-117.5, 37.0], [-118.0, 37.5], [-118.4, 38.0], [-118.8, 38.3], [-119.3, 38.65],
  [-120.0, 39.0], [-120.0, 39.5], [-120.0, 40.0], [-120.0, 40.5], [-120.0, 41.0],
  [-120.0, 41.5], [-120.0, 42.0], [-121.0, 42.0], [-122.0, 42.0], [-123.0, 42.0],
  [-124.2, 42.0],
];

const LNG_MIN = -124.5;
const LNG_RANGE = 10.5;
const LAT_MAX = 42.0;
const LAT_RANGE = 9.5;

const toX = (lng: number): number => ((lng - LNG_MIN) / LNG_RANGE) * (W - 2 * PAD) + PAD;
const toY = (lat: number): number => ((LAT_MAX - lat) / LAT_RANGE) * (H - 2 * PAD) + PAD;

/** Distance → dot color on the green heat ramp; null = outside the glow (gray). */
function heatRGB(dist: number): [number, number, number] | null {
  if (dist < 18) return [74, 222, 128];
  if (dist < 32) return [34, 197, 94];
  if (dist < 48) return [22, 163, 74];
  if (dist < 65) return [21, 128, 61];
  if (dist < 90) {
    const t = (dist - 65) / 25;
    return [
      Math.round(21 + (55 - 21) * t),
      Math.round(128 + (100 - 128) * t),
      Math.round(61 + (70 - 61) * t),
    ];
  }
  return null;
}

function el<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | number>,
): SVGElementTagNameMap[K] {
  const node = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  return node;
}

export function setupCaDotMap(): void {
  const svg = document.querySelector<SVGSVGElement>('[data-ca-dot-map]:not([data-map-bound])');
  if (!svg) return;
  svg.setAttribute('data-map-bound', '');

  const projects: DotMapProjectAttr[] = JSON.parse(svg.dataset.projects ?? '[]');
  const px = projects.map((p) => ({ ...p, x: toX(p.lng), y: toY(p.lat) }));

  const caPoints = CA.map(([lng, lat]) => [toX(lng), toY(lat)] as const);
  const polyPoints = caPoints.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');

  function pointInCA(x: number, y: number): boolean {
    let inside = false;
    for (let i = 0, j = caPoints.length - 1; i < caPoints.length; j = i++) {
      const [xi, yi] = caPoints[i];
      const [xj, yj] = caPoints[j];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }

  const defs = el('defs', {});
  const clip = el('clipPath', { id: 'ca-clip' });
  clip.appendChild(el('polygon', { points: polyPoints }));
  defs.appendChild(clip);
  svg.appendChild(defs);

  /* Dot matrix, clipped to the state outline, heat-colored by project proximity. */
  const dotsGroup = el('g', { 'clip-path': 'url(#ca-clip)' });
  const dots: DotState[] = [];
  const dotR = DOT / 2;
  for (let gx = GRID / 2; gx < W; gx += GRID) {
    for (let gy = GRID / 2; gy < H; gy += GRID) {
      if (!pointInCA(gx, gy)) continue;
      let minDist = Infinity;
      for (const p of px) {
        const d = Math.hypot(gx - p.x, gy - p.y);
        if (d < minDist) minDist = d;
      }
      const rgb = heatRGB(minDist);
      const isGray = !rgb;
      const [r, g, b] = rgb ?? [255, 255, 255];
      const fill = isGray ? 'rgba(255,255,255,0.18)' : `rgb(${r},${g},${b})`;
      const rect = el('rect', {
        x: (gx - dotR).toFixed(1),
        y: (gy - dotR).toFixed(1),
        width: DOT,
        height: DOT,
        fill,
        rx: '0.5',
      });
      dotsGroup.appendChild(rect);
      dots.push({ el: rect, cx: gx, cy: gy, origR: r, origG: g, origB: b, isGray, origFill: fill });
    }
  }
  svg.appendChild(dotsGroup);

  /* Project markers: an outer ring + a solid white core. */
  const markersGroup = el('g', {});
  for (const p of px) {
    markersGroup.appendChild(
      el('circle', {
        cx: p.x.toFixed(1),
        cy: p.y.toFixed(1),
        r: '8',
        fill: 'none',
        stroke: 'rgba(255,255,255,0.4)',
        'stroke-width': '1.5',
      }),
    );
    markersGroup.appendChild(
      el('circle', { cx: p.x.toFixed(1), cy: p.y.toFixed(1), r: '4', fill: '#ffffff' }),
    );
  }
  svg.appendChild(markersGroup);

  /* Proximity-revealed label pills. */
  const labelsContainer = el('g', {});
  const labelGroups = px.map((p) => {
    const { dx, dy, anchor } = p.label;
    const lx = p.x + dx;
    const ly = p.y + dy;
    const charW = 6.2;
    const textW = p.name.length * charW + 16;
    const pillX = anchor === 'end' ? lx - textW : lx;
    const grp = el('g', { opacity: '0', style: 'transition:opacity 0.2s ease' });
    grp.appendChild(
      el('rect', {
        x: pillX.toFixed(1),
        y: (ly - 10).toFixed(1),
        width: textW.toFixed(1),
        height: '20',
        rx: '4',
        fill: 'rgba(0,0,0,0.65)',
        stroke: 'rgba(255,255,255,0.15)',
        'stroke-width': '1',
      }),
    );
    const dotX = anchor === 'end' ? lx - textW + 7 : lx + 7;
    grp.appendChild(el('circle', { cx: dotX.toFixed(1), cy: ly.toFixed(1), r: '3', fill: p.color }));
    const textX = anchor === 'end' ? lx - 8 : lx + 15;
    const lbl = el('text', {
      x: textX.toFixed(1),
      y: (ly + 4).toFixed(1),
      fill: '#ffffff',
      'font-size': '11',
      'font-weight': '600',
      'font-family': 'DM Sans, sans-serif',
      'text-anchor': anchor,
    });
    lbl.textContent = p.name;
    grp.appendChild(lbl);
    labelsContainer.appendChild(grp);
    return { group: grp, px: p.x, py: p.y };
  });
  svg.appendChild(labelsContainer);

  /* Hover field: magnify + brighten dots near the cursor; reveal nearby labels. */
  let mouseX = -999;
  let mouseY = -999;
  let animating = false;

  const resetDot = (dot: DotState): void => {
    dot.el.setAttribute('x', (dot.cx - dotR).toFixed(1));
    dot.el.setAttribute('y', (dot.cy - dotR).toFixed(1));
    dot.el.setAttribute('width', String(DOT));
    dot.el.setAttribute('height', String(DOT));
    dot.el.setAttribute('fill', dot.origFill);
  };

  function onFrame(): void {
    for (const dot of dots) {
      const dist = Math.hypot(dot.cx - mouseX, dot.cy - mouseY);
      if (dist < HOVER_RADIUS) {
        const t = 1 - dist / HOVER_RADIUS;
        const scale = 1 + (MAX_SCALE - 1) * t * t;
        const nr = Math.round(dot.origR + (255 - dot.origR) * BRIGHTEN * t);
        const ng = Math.round(dot.origG + (255 - dot.origG) * BRIGHTEN * t);
        const nb = Math.round(dot.origB + (255 - dot.origB) * BRIGHTEN * t);
        const half = (DOT * scale) / 2;
        dot.el.setAttribute('x', (dot.cx - half).toFixed(1));
        dot.el.setAttribute('y', (dot.cy - half).toFixed(1));
        dot.el.setAttribute('width', (DOT * scale).toFixed(1));
        dot.el.setAttribute('height', (DOT * scale).toFixed(1));
        dot.el.setAttribute(
          'fill',
          dot.isGray
            ? `rgba(255,255,255,${(0.18 + 0.3 * t).toFixed(2)})`
            : `rgb(${nr},${ng},${nb})`,
        );
      } else {
        resetDot(dot);
      }
    }
    for (const lg of labelGroups) {
      const ld = Math.hypot(lg.px - mouseX, lg.py - mouseY);
      lg.group.setAttribute('opacity', ld < LABEL_SHOW_DIST ? '1' : '0');
    }
    if (animating) requestAnimationFrame(onFrame);
  }

  svg.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = svg.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * W;
    mouseY = ((e.clientY - rect.top) / rect.height) * H;
    if (!animating) {
      animating = true;
      requestAnimationFrame(onFrame);
    }
  });

  svg.addEventListener('mouseleave', () => {
    mouseX = -999;
    mouseY = -999;
    animating = false;
    dots.forEach(resetDot);
    labelGroups.forEach((lg) => lg.group.setAttribute('opacity', '0'));
  });
}
