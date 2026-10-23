// Controller for <BcnPermitTimeline>: the cradle-to-grave chart of a project's
// permits. Reads the client store (so browser edits and added permits show) and
// repaints on `bcn-permit-updated` / `bcn-permit-added`.
//
// Geometry is in pixels from one computed plot width: the plot fills the card, and
// never drops below a px-per-month floor (4 on a desktop card, 8 on a narrow one), so a long project scrolls
// sideways inside the card with the name column sticky. The connector overlay is an
// SVG laid over the plot after the rows render, so its endpoints come from the real
// row positions. A ResizeObserver re-lays the chart when the card width changes.
//
// Markup is built here, so the component's CSS reaches it through :global() rules.
//
// bcn-lego-checked: string-built chart marks (segments, axis ticks, connector SVG) —
// no esa-* lego plots dated bars on a shared axis; rows are focusable role="button"
// elements that call the store's openPermit(). Round detail rides native `title`
// tooltips (an esa-tooltip bubble would be clipped by the horizontal scroller).
import {
  LEVEL_ORDER,
  STATUS_META,
  TODAY,
  formatDate,
  jurisdictionOf,
  levelOf,
  type AgencyLevel,
  type Dependency,
  type Permit,
} from '../../data/internal-permits';
import { allPermits, dependencyMetLive, initFromIsland, openPermit } from '../../lib/internal-permits-store';

/**
 * Narrowest the time scale gets before the chart scrolls instead of squeezing. A
 * desktop card (>= FIT_WIDTH) fits a ~15-year history whole, so an inherited project's
 * early review rounds stay on screen; a narrow card keeps the readable scale and scrolls.
 */
const FIT_WIDTH = 900;
const MIN_PX_PER_MONTH_FIT = 4;
const MIN_PX_PER_MONTH_SCROLL = 8;
/** Quarter gridlines appear once a quarter is this wide; quarter labels at the next step. */
const QUARTER_LINE_PX = 36;
const QUARTER_LABEL_PX = 56;
/** Months of air either side of the data. */
const PAD_MONTHS = 3;

const DAY_MS = 86_400_000;
const MONTH_DAYS = 30.4375;
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const SVG_NS = 'http://www.w3.org/2000/svg';

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const dayOf = (iso: string): number => Date.parse(`${iso}T00:00:00Z`) / DAY_MS;

function addMonths(iso: string, n: number): string {
  const [y, m] = iso.split('-').map(Number);
  const d = new Date(Date.UTC(y, m - 1 + n, 1));
  return d.toISOString().slice(0, 10);
}

const minIso = (xs: string[]): string => xs.reduce((a, b) => (b < a ? b : a));
const maxIso = (xs: string[]): string => xs.reduce((a, b) => (b > a ? b : a));
const firstSent = (p: Permit): string | undefined => p.rounds[0]?.sent;

interface Scale {
  start: string;
  end: string;
  width: number;
  x: (iso: string) => number;
}

interface ProjectInfo {
  id: string;
  started: string;
}

/** Earliest submittal (or the project start) → latest of expiry / estimate / today, padded. */
function timeRange(permits: Permit[], project: ProjectInfo): { start: string; end: string } {
  const sents = permits.map(firstSent).filter((d): d is string => Boolean(d));
  const startRaw = sents.length ? minIso(sents) : project.started || TODAY;
  const ends = [TODAY];
  for (const p of permits) {
    if (p.expiresDate) ends.push(p.expiresDate);
    if (p.estimatedIssueDate) ends.push(p.estimatedIssueDate);
    if (p.issuedDate) ends.push(p.issuedDate);
  }
  return { start: addMonths(startRaw, -PAD_MONTHS), end: addMonths(maxIso(ends), PAD_MONTHS + 1) };
}

function makeScale(start: string, end: string, available: number, cardWidth: number): Scale {
  const span = Math.max(dayOf(end) - dayOf(start), 1);
  const floor = cardWidth >= FIT_WIDTH ? MIN_PX_PER_MONTH_FIT : MIN_PX_PER_MONTH_SCROLL;
  const width = Math.round(Math.max(available, (span / MONTH_DAYS) * floor));
  const s0 = dayOf(start);
  return { start, end, width, x: (iso) => ((dayOf(iso) - s0) / span) * width };
}

// ── Markup ────────────────────────────────────────────────────────────────────

interface Tick {
  x: number;
  kind: 'year' | 'quarter';
  label?: string;
}

function ticks(scale: Scale): Tick[] {
  const out: Tick[] = [];
  const pxPerQuarter = (scale.width / ((dayOf(scale.end) - dayOf(scale.start)) / MONTH_DAYS)) * 3;
  const showQuarters = pxPerQuarter >= QUARTER_LINE_PX;
  const labelQuarters = pxPerQuarter >= QUARTER_LABEL_PX;
  const y0 = Number(scale.start.slice(0, 4));
  const y1 = Number(scale.end.slice(0, 4));
  for (let y = y0; y <= y1; y++) {
    for (const m of [1, 4, 7, 10]) {
      const iso = `${y}-${String(m).padStart(2, '0')}-01`;
      if (iso <= scale.start || iso >= scale.end) continue;
      if (m === 1) out.push({ x: scale.x(iso), kind: 'year', label: String(y) });
      else if (showQuarters) out.push({ x: scale.x(iso), kind: 'quarter', label: labelQuarters ? MONTH_SHORT[m - 1] : undefined });
    }
  }
  // The leading partial year gets a label at the left edge when there is room for it.
  const firstYear = out.find((t) => t.kind === 'year');
  if (!firstYear || firstYear.x >= 48) out.unshift({ x: 0, kind: 'year', label: String(y0) });
  return out;
}

/** Rough widths for collision checks in the tick row (label-sm, tabular numerals). */
const TICK_LABEL_W = 40;
const TODAY_LABEL_W = 52;

function axisHtml(scale: Scale): string {
  const today = scale.x(TODAY);
  // "Today" sits in the tick row beside its line: to the left of it, or to the right
  // when the line is too close to the plot's left edge. Tick labels it would overlap
  // are dropped so the row never collides.
  const after = today < TODAY_LABEL_W;
  const tag: [number, number] = after ? [today, today + TODAY_LABEL_W] : [today - TODAY_LABEL_W, today];
  // A label sits to the right of its line, so one too near the plot's end is dropped too.
  const clear = (x: number): boolean => x + TICK_LABEL_W <= scale.width && (x + TICK_LABEL_W <= tag[0] || x >= tag[1]);
  return [
    ...ticks(scale).map((t) =>
      t.label && clear(t.x)
        ? `<span class="bcn-permit-timeline__tick bcn-permit-timeline__tick--${t.kind}" style="left:${t.x.toFixed(1)}px">${t.label}</span>`
        : '',
    ),
    `<span class="bcn-permit-timeline__today-mark" style="left:${today.toFixed(1)}px"></span>`,
    `<span class="bcn-permit-timeline__today-tag typography-label-sm-strong${after ? ' is-after' : ''}" style="left:${today.toFixed(1)}px">Today</span>`,
  ].join('');
}

function gridHtml(scale: Scale): string {
  const lines = ticks(scale)
    .filter((t) => t.x > 0)
    .map((t) => `<span class="bcn-permit-timeline__gridline bcn-permit-timeline__gridline--${t.kind}" style="left:${t.x.toFixed(1)}px"></span>`);
  lines.push(`<span class="bcn-permit-timeline__today" style="left:${scale.x(TODAY).toFixed(1)}px"></span>`);
  return lines.join('');
}

const range = (a: string, b: string): string => `${formatDate(a)} – ${formatDate(b)}`;

function seg(kind: string, scale: Scale, from: string, to: string, title: string): string {
  const left = scale.x(from);
  const width = Math.max(scale.x(to) - left, 3);
  return `<span class="bcn-permit-timeline__seg bcn-permit-timeline__seg--${kind}" style="left:${left.toFixed(1)}px;width:${width.toFixed(1)}px" title="${esc(title)}"></span>`;
}

function barHtml(p: Permit, scale: Scale): string {
  const parts: string[] = [];
  const open = p.status !== 'issued';
  p.rounds.forEach((r, i) => {
    const n = i + 1;
    const back = r.returned && r.returned <= TODAY ? r.returned : undefined;
    if (back) {
      const result = r.outcome === 'decision' ? 'Decision' : 'Comments returned';
      parts.push(seg('agency', scale, r.sent, back, `Round ${n} With Agency\n${range(r.sent, back)}\n${result}`));
    } else {
      parts.push(seg('agency', scale, r.sent, TODAY, `Round ${n} With Agency\nSince ${formatDate(r.sent)}`));
    }
    // ESA / the client answering this round's comments, up to the next package (or today).
    if (back && r.outcome === 'comments') {
      const next = p.rounds[i + 1]?.sent ?? (open ? TODAY : undefined);
      if (next && next > back) {
        const label = p.rounds[i + 1] ? range(back, next) : `Since ${formatDate(back)}`;
        parts.push(seg('responding', scale, back, next, `Responding to Round ${n} Comments\n${label}`));
      }
    }
  });

  if (p.status === 'issued' && p.issuedDate) {
    if (p.expiresDate && p.expiresDate > p.issuedDate) {
      parts.push(seg('valid', scale, p.issuedDate, p.expiresDate, `Valid ${range(p.issuedDate, p.expiresDate)}`));
    }
    parts.push(
      `<span class="bcn-permit-timeline__issued" style="left:${scale.x(p.issuedDate).toFixed(1)}px" title="${esc(`Issued ${formatDate(p.issuedDate)}`)}"></span>`,
    );
  } else if (p.estimatedIssueDate && p.estimatedIssueDate > TODAY) {
    parts.push(seg('expected', scale, TODAY, p.estimatedIssueDate, `Expected ${formatDate(p.estimatedIssueDate)}`));
  } else if (!p.rounds.length) {
    parts.push(
      `<span class="bcn-permit-timeline__note typography-label-sm" style="left:${(scale.x(TODAY) + 8).toFixed(1)}px">${esc(STATUS_META[p.status].label)}</span>`,
    );
  }
  return parts.join('');
}

function rowLabel(p: Permit): string {
  const agency = jurisdictionOf(p)?.short ?? '';
  const bits = [`${p.name}, ${agency}`, STATUS_META[p.status].label];
  if (p.rounds.length) bits.push(`${p.rounds.length} review ${p.rounds.length === 1 ? 'round' : 'rounds'}`);
  if (p.issuedDate) bits.push(`issued ${formatDate(p.issuedDate)}`);
  if (p.expiresDate) bits.push(`expires ${formatDate(p.expiresDate)}`);
  else if (p.status !== 'issued' && p.estimatedIssueDate) bits.push(`expected ${formatDate(p.estimatedIssueDate)}`);
  return bits.join(', ');
}

function rowHtml(p: Permit, scale: Scale): string {
  const agency = jurisdictionOf(p)?.short ?? '';
  return `<div class="bcn-permit-timeline__row" role="button" tabindex="0" data-permit-id="${esc(p.id)}" aria-label="${esc(rowLabel(p))}">
    <div class="bcn-permit-timeline__label" title="${esc(`${p.name} · ${agency}`)}">
      <span class="bcn-permit-timeline__name typography-label-md">${esc(p.name)}</span>
      <span class="bcn-permit-timeline__agency typography-label-sm">${esc(agency)}</span>
    </div>
    <div class="bcn-permit-timeline__plot">${barHtml(p, scale)}</div>
  </div>`;
}

const sortKey = (p: Permit): string => firstSent(p) ?? p.estimatedIssueDate ?? '9999-12-31';
const byStart = (a: Permit, b: Permit): number => {
  const ka = sortKey(a);
  const kb = sortKey(b);
  return ka !== kb ? (ka < kb ? -1 : 1) : a.name.localeCompare(b.name);
};

function bodyHtml(permits: Permit[], scale: Scale): string {
  const groups = LEVEL_ORDER.map((level: AgencyLevel) => ({
    level,
    rows: permits.filter((p) => levelOf(p) === level).sort(byStart),
  })).filter((g) => g.rows.length);
  return groups
    .map(
      (g) => `<div class="bcn-permit-timeline__group" role="presentation">
        <span class="bcn-permit-timeline__group-label typography-label-sm-strong">${g.level}</span>
      </div>${g.rows.map((p) => rowHtml(p, scale)).join('')}`,
    )
    .join('');
}

// ── Connectors ───────────────────────────────────────────────────────────────

/** The prerequisite's relevant point: its submittal, or its issuance (actual, else expected). */
function prerequisitePoint(target: Permit, dep: Dependency): string {
  if (dep.needs === 'submitted') return firstSent(target) ?? TODAY;
  return target.issuedDate ?? target.estimatedIssueDate ?? TODAY;
}

/**
 * What a dependency gates is the dependent's ISSUANCE ("can't be issued until that one
 * is applied for / issued"), so the line lands on its issue date, else its expected
 * issue date, else the end of its open bar (today).
 */
const dependentPoint = (p: Permit): string =>
  (p.status === 'issued' ? p.issuedDate : undefined) ?? (p.estimatedIssueDate && p.estimatedIssueDate > TODAY ? p.estimatedIssueDate : TODAY);

/** A permit's painted extent, for counting how many bars a vertical leg would cross. */
function barExtent(p: Permit): [string, string] | null {
  const start = firstSent(p) ?? (p.estimatedIssueDate && p.estimatedIssueDate > TODAY ? TODAY : undefined);
  if (!start) return null;
  const ends = [start];
  if (p.status !== 'issued') ends.push(TODAY);
  if (p.issuedDate) ends.push(p.issuedDate);
  if (p.expiresDate) ends.push(p.expiresDate);
  if (p.estimatedIssueDate) ends.push(p.estimatedIssueDate);
  return [start, maxIso(ends)];
}

/** Orthogonal polyline with softened corners. */
function roundedPath(pts: [number, number][], r = 5): string {
  const f = (n: number): string => n.toFixed(1);
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const [nx, ny] = pts[i + 1];
    const inLen = Math.hypot(cx - px, cy - py);
    const outLen = Math.hypot(nx - cx, ny - cy);
    const rr = Math.min(r, inLen / 2, outLen / 2);
    if (rr < 0.5) {
      d += ` L${f(cx)},${f(cy)}`;
      continue;
    }
    const ax = cx - ((cx - px) / inLen) * rr;
    const ay = cy - ((cy - py) / inLen) * rr;
    const bx = cx + ((nx - cx) / outLen) * rr;
    const by = cy + ((ny - cy) / outLen) * rr;
    d += ` L${f(ax)},${f(ay)} Q${f(cx)},${f(cy)} ${f(bx)},${f(by)}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L${f(last[0])},${f(last[1])}`;
}

function drawLinks(svg: SVGSVGElement, body: HTMLElement, rowsEl: HTMLElement, permits: Permit[], scale: Scale, uid: string): void {
  const rowEls = [...body.querySelectorAll<HTMLElement>('.bcn-permit-timeline__row')];
  const rowsById = new Map<string, HTMLElement>(rowEls.map((r) => [r.dataset.permitId ?? '', r]));
  const byId = new Map(permits.map((p) => [p.id, p]));
  // The rows wrapper's own height — body.scrollHeight would include the previous SVG.
  const height = rowsEl.offsetHeight;
  svg.setAttribute('width', String(scale.width));
  svg.setAttribute('height', String(height));
  svg.setAttribute('viewBox', `0 0 ${scale.width} ${height}`);

  const marker = (state: 'met' | 'unmet', end: 'start' | 'end'): string =>
    end === 'end'
      ? `<marker id="${uid}-${state}-end" class="bcn-permit-timeline__marker bcn-permit-timeline__marker--${state}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z"/></marker>`
      : `<marker id="${uid}-${state}-start" class="bcn-permit-timeline__marker bcn-permit-timeline__marker--${state}" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="5" markerHeight="5"><circle cx="3" cy="3" r="3"/></marker>`;

  /** Bars in the rows strictly between two rows that cover x. */
  const crossings = (x: number, fromIdx: number, toIdx: number): number => {
    let n = 0;
    for (let i = Math.min(fromIdx, toIdx) + 1; i < Math.max(fromIdx, toIdx); i++) {
      const ext = barExtent(byId.get(rowEls[i].dataset.permitId ?? '')!);
      if (ext && x >= scale.x(ext[0]) - 2 && x <= scale.x(ext[1]) + 2) n++;
    }
    return n;
  };

  const halfBar = 9; // arrow tip stops just short of the issuance diamond / bar edge
  const paths: string[] = [];
  for (const p of permits) {
    const to = rowsById.get(p.id);
    if (!to) continue;
    for (const dep of p.dependsOn) {
      const target = byId.get(dep.permitId);
      const from = target && rowsById.get(target.id);
      if (!target || !from) continue;
      const fromIdx = rowEls.indexOf(from);
      const toIdx = rowEls.indexOf(to);
      const down = toIdx > fromIdx;
      const x1 = scale.x(prerequisitePoint(target, dep));
      const y1 = from.offsetTop + from.offsetHeight / 2;
      const x2 = scale.x(dependentPoint(p));
      const y2 = to.offsetTop + to.offsetHeight / 2;
      // Horizontal runs sit in the gutters between rows; the one vertical run goes
      // at whichever end (source or dependent date) crosses fewer bars.
      const srcGutter = down ? from.offsetTop + from.offsetHeight : from.offsetTop;
      const dstGutter = down ? to.offsetTop : to.offsetTop + to.offsetHeight;
      const tip = down ? y2 - halfBar : y2 + halfBar;
      const pts: [number, number][] =
        crossings(x1, fromIdx, toIdx) < crossings(x2, fromIdx, toIdx)
          ? [[x1, y1], [x1, dstGutter], [x2, dstGutter], [x2, tip]]
          : [[x1, y1], [x1, srcGutter], [x2, srcGutter], [x2, tip]];
      const state = dependencyMetLive(dep) ? 'met' : 'unmet';
      paths.push(
        `<path class="bcn-permit-timeline__link bcn-permit-timeline__link--${state}" data-from="${esc(target.id)}" data-to="${esc(p.id)}" d="${roundedPath(pts)}" marker-start="url(#${uid}-${state}-start)" marker-end="url(#${uid}-${state}-end)"/>`,
      );
    }
  }
  svg.innerHTML = `<defs>${marker('met', 'start')}${marker('met', 'end')}${marker('unmet', 'start')}${marker('unmet', 'end')}</defs>${paths.join('')}`;
}

// ── Setup ────────────────────────────────────────────────────────────────────

let instance = 0;

/** Wire one [data-bcn-permit-timeline] root (SSR'd frame: key, scroller, axis corner). */
export function setupPermitTimeline(root: HTMLElement): void {
  const project: ProjectInfo = { id: root.dataset.projectId ?? '', started: root.dataset.projectStart ?? '' };
  const scroller = root.querySelector<HTMLElement>('[data-timeline-scroll]');
  const canvas = root.querySelector<HTMLElement>('[data-timeline-canvas]');
  const corner = root.querySelector<HTMLElement>('[data-timeline-corner]');
  const axis = root.querySelector<HTMLElement>('[data-timeline-axis]');
  const body = root.querySelector<HTMLElement>('[data-timeline-body]');
  if (!scroller || !canvas || !corner || !axis || !body) return;

  const uid = `bcn-pt-${++instance}`;
  const grid = document.createElement('div');
  grid.className = 'bcn-permit-timeline__grid';
  grid.setAttribute('aria-hidden', 'true');
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('class', 'bcn-permit-timeline__links');
  svg.setAttribute('aria-hidden', 'true');
  const rows = document.createElement('div');
  rows.className = 'bcn-permit-timeline__rows';
  body.replaceChildren(grid, svg, rows);

  initFromIsland();
  let lastWidth = -1;
  let scrolledOnce = false;

  // First paint, when the chart is wider than the card: put today at ~65% of the visible width, so the history reads to its
  // left and future expirations stay in view. Waits until the scroller has a width —
  // a chart inside a hidden tab panel measures 0 until the tab is shown.
  function initialScroll(): void {
    if (scrolledOnce || scroller!.clientWidth === 0 || lastWidth < 0) return;
    scrolledOnce = true;
    const labelW = corner!.getBoundingClientRect().width;
    const { start, end } = timeRange(visible(), project);
    const scale = makeScale(start, end, Math.max(scroller!.clientWidth - labelW, 0), scroller!.clientWidth);
    if (scale.width <= scroller!.clientWidth - labelW + 1) return; // fits: show it all from the start
    const todayX = labelW + scale.x(TODAY);
    scroller!.scrollLeft = Math.max(0, todayX - scroller!.clientWidth * 0.65);
  }

  const visible = (): Permit[] => allPermits().filter((p) => p.projectId === project.id && p.status !== 'not-required');

  function render(force = false): void {
    const permits = visible();
    root.toggleAttribute('data-empty', permits.length === 0);
    const labelW = corner!.getBoundingClientRect().width;
    const available = Math.max(scroller!.clientWidth - labelW, 0);
    const { start, end } = timeRange(permits, project);
    const scale = makeScale(start, end, available, scroller!.clientWidth);
    if (!force && scale.width === lastWidth) {
      initialScroll();
      return;
    }
    lastWidth = scale.width;

    const focusedId = (document.activeElement as HTMLElement | null)?.closest<HTMLElement>('.bcn-permit-timeline__row')?.dataset.permitId;
    canvas!.style.setProperty('--_plot-w', `${scale.width}px`);
    axis!.innerHTML = axisHtml(scale);
    grid.innerHTML = gridHtml(scale);
    rows.innerHTML = bodyHtml(permits, scale);
    drawLinks(svg, body!, rows, permits, scale, uid);
    body!.removeAttribute('data-focus');
    lit = null;

    if (focusedId) rows.querySelector<HTMLElement>(`[data-permit-id="${CSS.escape(focusedId)}"]`)?.focus();
    initialScroll();
  }

  // Hover / focus a row → light its own connectors, dim the rest.
  let lit: string | null = null;
  function highlight(id: string | null): void {
    if (id === lit) return;
    lit = id;
    if (id) body!.dataset.focus = id;
    else body!.removeAttribute('data-focus');
    svg.querySelectorAll<SVGPathElement>('.bcn-permit-timeline__link').forEach((path) => {
      path.classList.toggle('is-lit', !!id && (path.dataset.from === id || path.dataset.to === id));
    });
  }
  const rowOf = (e: Event): HTMLElement | null => (e.target as HTMLElement).closest<HTMLElement>('.bcn-permit-timeline__row');

  rows.addEventListener('click', (e) => {
    const row = rowOf(e);
    if (row?.dataset.permitId) openPermit(row.dataset.permitId);
  });
  rows.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const row = rowOf(e);
    if (!row?.dataset.permitId || e.target !== row) return;
    e.preventDefault();
    openPermit(row.dataset.permitId);
  });
  rows.addEventListener('mouseover', (e) => highlight(rowOf(e)?.dataset.permitId ?? null));
  rows.addEventListener('mouseleave', () => {
    const focused = (document.activeElement as HTMLElement | null)?.closest<HTMLElement>('.bcn-permit-timeline__row');
    highlight(focused && rows.contains(focused) ? (focused.dataset.permitId ?? null) : null);
  });
  rows.addEventListener('focusin', (e) => highlight(rowOf(e)?.dataset.permitId ?? null));
  rows.addEventListener('focusout', (e) => {
    if (!rows.contains(e.relatedTarget as Node | null)) highlight(null);
  });

  const onChange = (e: Event): void => {
    const permit = (e as CustomEvent<{ permit?: Permit }>).detail?.permit;
    if (!permit || permit.projectId === project.id) render(true);
  };
  document.addEventListener('bcn-permit-updated', onChange);
  document.addEventListener('bcn-permit-added', onChange);

  let frame = 0;
  new ResizeObserver(() => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => render());
  }).observe(scroller);

  render(true);
}
