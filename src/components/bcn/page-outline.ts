// <BcnPageOutline>'s runtime (2026-10-30): draws a page's arrangement as tiles and reports what a person does to it.
// It holds no layout of its own: the caller passes the model to draw() and redraws after each handler. Tiles are
// drawn fresh each time; focus follows the selected tile across a redraw, so a keyboard move keeps its place.

import type { ModuleKey, ModuleSettings } from '../../lib/planning/plan-config';
import { planIcon } from '../../lib/planning/icons';
import { sortable } from './plan-sortable';

export type OutlineColumn = 'main' | 'side';

export interface OutlineTile {
  key: ModuleKey;
  title: string;
  icon: string;
  column: OutlineColumn;
  /** On the page (in its column), or off (in the tray). */
  on: boolean;
  /** Always on: it moves, it doesn't go to the tray. */
  locked: boolean;
  /** On, but it can never show at this level: why (a dashed ghost). */
  ghost?: string;
  /** It shows on some items only: which ("Deliverables Only"). */
  tag?: string;
  settings?: ModuleSettings;
}

export interface OutlineModel {
  /** In order: each column's tiles keep this order. */
  tiles: OutlineTile[];
  selected: ModuleKey | null;
  /** The badge in the miniature's header ("Task"). */
  levelName: string;
}

export interface OutlineHandlers {
  select(key: ModuleKey): void;
  /** Into a column at an index among that column's on tiles (from the tray, it goes on). */
  place(key: ModuleKey, column: OutlineColumn, index: number): void;
  /** Off, into the tray (or back on, from its switch there). */
  toggle(key: ModuleKey, on: boolean): void;
}

export interface PageOutline {
  draw(model: OutlineModel): void;
  /** Says something to screen readers (a move, a reset). */
  announce(text: string): void;
  focusSelected(): void;
}

type SwitchEl = HTMLElement & { checked: boolean };

// ── The sketches: a hint of what each card holds ──
const ln = (w: number, cls = '') => `<span class="bcn-pgo__ln ${cls}" style="inline-size:${w}%"></span>`;
const kv = (n: number) => Array.from({ length: n }, (_, i) => `<span class="bcn-pgo__row"><span class="bcn-pgo__ln bcn-pgo__k"></span><span class="bcn-pgo__ln bcn-pgo__v" style="inline-size:${[46, 34, 52, 40, 30][i % 5]}%"></span></span>`).join('');
const list = (n: number, lead: 'sq' | 'dot', pill = false) =>
  Array.from({ length: n }, (_, i) => `<span class="bcn-pgo__row"><span class="bcn-pgo__${lead}"></span>${ln([58, 44, 50][i % 3])}${pill ? '<span class="bcn-pgo__pill"></span>' : ''}</span>`).join('');
const bars = (spans: [number, number][]) => spans.map(([l, w]) => `<span class="bcn-pgo__track"><span class="bcn-pgo__bar" style="inset-inline-start:${l}%;inline-size:${w}%"></span></span>`).join('');

function sketch(t: OutlineTile): string {
  switch (t.key) {
    case 'details':
      return kv(3);
    case 'lineage':
      return `${ln(48)}<span class="bcn-pgo__indent">${ln(56)}</span><span class="bcn-pgo__indent">${ln(40)}</span>`;
    case 'schedule':
      // A parent's children's timeline: a bar per child, staggered; otherwise its dates and one bar.
      return t.settings?.childTimeline ? bars([[0, 30], [18, 34], [44, 26], [62, 34]]) : `${kv(2)}${bars([[10, 70]])}`;
    case 'progress':
      return `<span class="bcn-pgo__track"><span class="bcn-pgo__bar" style="inset-inline-start:0;inline-size:62%"></span></span>${ln(54)}${ln(38)}`;
    case 'budget':
      return `<span class="bcn-pgo__cells">${Array.from({ length: 8 }, () => '<span class="bcn-pgo__ln"></span>').join('')}</span>`;
    case 'documents':
      return list(2, 'sq');
    case 'transmittals':
      return list(2, 'sq', true);
    case 'completion':
      return `<span class="bcn-pgo__row"><span class="bcn-pgo__dot"></span>${ln(44)}</span>${kv(2)}`;
    case 'obligations':
      return `<span class="bcn-pgo__chips">${ln(22)}${ln(22)}${ln(22)}</span>${ln(60)}`;
    case 'comments':
      return list(2, 'dot');
    case 'activity':
      return list(2, 'dot');
  }
}

export function setupPageOutline(root: HTMLElement, handlers: OutlineHandlers): PageOutline {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const lists: Record<OutlineColumn | 'tray', HTMLElement> = { main: q('[data-pgo-list="main"]'), side: q('[data-pgo-list="side"]'), tray: q('[data-pgo-list="tray"]') };
  const live = q('[data-pgo-live]');
  let model: OutlineModel | null = null;
  let refocus = false;

  const tileOf = (key: ModuleKey) => model?.tiles.find((t) => t.key === key);
  const columnKeys = (column: OutlineColumn) => (model?.tiles ?? []).filter((t) => t.on && t.column === column).map((t) => t.key);
  const announce = (text: string) => {
    live.textContent = '';
    requestAnimationFrame(() => (live.textContent = text));
  };
  const where = (key: ModuleKey) => {
    const t = tileOf(key)!;
    const keys = columnKeys(t.column);
    return `${t.title}: ${t.column === 'main' ? 'main' : 'side'} column, ${keys.indexOf(key) + 1} of ${keys.length}.`;
  };

  function tile(t: OutlineTile, inTray: boolean): HTMLElement {
    const el = document.createElement('div');
    el.className = 'bcn-pgo__tile';
    el.dataset.pgoTile = t.key;
    el.setAttribute('role', 'listitem');
    el.tabIndex = model?.selected === t.key || (!model?.selected && t === model?.tiles[0]) ? 0 : -1;
    el.setAttribute('aria-current', String(model?.selected === t.key));
    el.toggleAttribute('data-ghost', !!t.ghost && !inTray);
    const state = inTray ? 'off' : t.ghost ? `on, but ${t.ghost.charAt(0).toLowerCase()}${t.ghost.slice(1)}` : t.tag ? `on, ${t.tag.toLowerCase()}` : 'on';
    el.setAttribute('aria-label', `${t.title}, ${state}`);
    const band = document.createElement('span');
    band.className = 'bcn-pgo__band';
    band.innerHTML = `<span class="bcn-pgo__icon">${planIcon(t.icon, 12)}</span>`;
    const name = document.createElement('span');
    name.className = 'bcn-pgo__name';
    name.textContent = t.title;
    band.append(name);

    if (!t.locked) {
      // The switch: off puts it in the tray; on, back in its column.
      const sw = document.createElement('esa-switch-toggle') as SwitchEl;
      sw.setAttribute('size', 'sm');
      sw.setAttribute('aria-label', `Show ${t.title}`);
      sw.dataset.pgoSwitch = t.key;
      void customElements.whenDefined('esa-switch-toggle').then(() => (sw.checked = t.on));
      // Its own press isn't a drag or a select.
      sw.addEventListener('pointerdown', (e) => e.stopPropagation());
      sw.addEventListener('click', (e) => e.stopPropagation());
      sw.addEventListener('change', (e) => {
        e.stopPropagation();
        handlers.toggle(t.key, sw.checked);
        announce(sw.checked ? `${t.title} is on the page.` : `${t.title} is off the page.`);
      });
      band.append(sw);
    }
    el.append(band);
    if (!inTray) {
      const body = document.createElement('span');
      body.className = 'bcn-pgo__body';
      body.setAttribute('aria-hidden', 'true');
      body.innerHTML = sketch(t);
      // Which items it shows on, over its sketch: the band keeps the title whole in the narrow side column.
      if (t.tag && !t.ghost) {
        const tag = document.createElement('span');
        tag.className = 'bcn-pgo__tag';
        tag.textContent = t.tag;
        body.prepend(tag);
      }
      el.append(body);
      if (t.ghost) {
        const why = document.createElement('p');
        why.className = 'bcn-pgo__why';
        why.textContent = t.ghost;
        el.append(why);
      }
    }
    return el;
  }

  function draw(next: OutlineModel): void {
    const hadFocus = root.contains(document.activeElement) || refocus;
    refocus = false;
    model = next;
    q('[data-pgo-level]').textContent = next.levelName;
    lists.main.replaceChildren(...next.tiles.filter((t) => t.on && t.column === 'main').map((t) => tile(t, false)));
    lists.side.replaceChildren(...next.tiles.filter((t) => t.on && t.column === 'side').map((t) => tile(t, false)));
    const off = next.tiles.filter((t) => !t.on);
    lists.tray.replaceChildren(...off.map((t) => tile(t, true)));
    q('[data-pgo-tray-empty]').hidden = off.length > 0;
    if (hadFocus) focusSelected();
  }

  function focusSelected(): void {
    const key = model?.selected;
    if (key) root.querySelector<HTMLElement>(`[data-pgo-tile="${key}"]`)?.focus();
  }

  // ── Select: a click, or focus arriving by the keyboard ──
  root.addEventListener('click', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('[data-pgo-tile]');
    if (!el) return;
    refocus = true;
    handlers.select(el.dataset.pgoTile as ModuleKey);
  });

  // ── Keyboard: arrows walk, Alt with an arrow moves ──
  const order = () => [...root.querySelectorAll<HTMLElement>('[data-pgo-tile]')];
  root.addEventListener('keydown', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('[data-pgo-tile]');
    if (!el || (e.target as Element).closest('esa-switch-toggle')) return;
    const key = el.dataset.pgoTile as ModuleKey;
    const t = tileOf(key);
    if (!t) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      refocus = true;
      handlers.select(key);
      return;
    }
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault();
    if (e.altKey) {
      if (!t.on) {
        // From the tray, an arrow puts it back on, at the end of the column it names (or its own).
        const column: OutlineColumn = e.key === 'ArrowLeft' ? 'main' : e.key === 'ArrowRight' ? 'side' : t.column;
        refocus = true;
        handlers.place(key, column, columnKeys(column).length);
        announce(where(key));
        return;
      }
      const keys = columnKeys(t.column);
      const at = keys.indexOf(key);
      let column = t.column;
      let index = at;
      if (e.key === 'ArrowUp') index = at - 1;
      else if (e.key === 'ArrowDown') index = at + 1;
      else if (e.key === 'ArrowLeft') column = 'main';
      else column = 'side';
      if (column !== t.column) index = columnKeys(column).length;
      if ((column === t.column && (index < 0 || index >= keys.length)) || (column === t.column && index === at)) {
        announce(`${t.title} can’t move further that way.`);
        return;
      }
      refocus = true;
      handlers.place(key, column, index);
      announce(`Moved. ${where(key)}`);
      return;
    }
    // Walk: up and down through the list it's in, left and right across the columns and the tray.
    const all = order();
    let to: HTMLElement | undefined;
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      const siblings = [...el.parentElement!.querySelectorAll<HTMLElement>(':scope > [data-pgo-tile]')];
      const i = siblings.indexOf(el);
      to = siblings[e.key === 'ArrowUp' ? i - 1 : i + 1] ?? all[all.indexOf(el) + (e.key === 'ArrowUp' ? -1 : 1)];
    } else {
      const here = el.parentElement!;
      const ring = [lists.main, lists.side, lists.tray].filter((l) => l.children.length);
      const next = ring[(ring.indexOf(here) + (e.key === 'ArrowRight' ? 1 : ring.length - 1)) % ring.length];
      const i = [...here.children].indexOf(el);
      to = (next.children[Math.min(i, next.children.length - 1)] as HTMLElement | undefined) ?? undefined;
    }
    if (!to) return;
    refocus = true;
    handlers.select(to.dataset.pgoTile as ModuleKey);
  });

  // ── Drag: within a column, across, into and out of the tray ──
  sortable(root, {
    lists: () => [lists.main, lists.side, lists.tray],
    row: '.bcn-pgo__tile',
    grip: '.bcn-pgo__tile',
    layer: () => q('[data-pgo-layer]'),
    accepts: (row, list) => list !== lists.tray || !tileOf(row.dataset.pgoTile as ModuleKey)?.locked,
    onDrop: (row, list, index) => {
      const key = row.dataset.pgoTile as ModuleKey;
      const t = tileOf(key);
      if (!t) return;
      refocus = true;
      if (list === lists.tray) {
        if (!t.on) return;
        handlers.toggle(key, false);
        announce(`${t.title} is off the page.`);
        return;
      }
      handlers.place(key, list === lists.side ? 'side' : 'main', index);
      announce(`Moved. ${where(key)}`);
    },
  });

  return { draw, announce, focusSelected };
}
