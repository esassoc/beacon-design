// The suggestion menu: the panel the "/" inserter and the "@" / "#" reference pickers
// open at the caret, filtered as you type. Ported from beacon-dashboard
// (src/scripts/editor/slash.ts suggestionMenu), with the tenant and intake rows removed.
//
// The panel is drawn as the esa-dropdown-menu panel; it shows nine results and scrolls
// for more, as WordPress's inserter does. While it is open the editor names it
// (aria-controls, aria-expanded) and the active option (aria-activedescendant). Opened by
// an inserter (openSlash in slash.ts) it heads its list with a focused esa-text-field.
//
// Inside a modal the page behind is inert, so the panel goes in the dialog; it is fixed
// to the viewport and follows the caret on scroll.
import type { ChainedCommands, Editor } from '@tiptap/core';

export function h(tag: string, attrs?: Record<string, unknown> | null, ...kids: (Node | string | null | undefined | false)[]): HTMLElement {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs ?? {})) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = String(v);
    else el.setAttribute(k, v === true ? '' : String(v));
  }
  for (const kid of kids) if (kid != null && kid !== false) el.append(typeof kid === 'string' ? document.createTextNode(kid) : kid);
  return el;
}

/** One row of a suggestion menu. */
export interface MenuItem {
  group: string;
  label: string;
  hint?: string;
  /** SVG markup for the row's square badge, or a topic family for a swatch. */
  icon?: string;
  family?: string;
  value?: string;
  run?: (chain: ChainedCommands, editor: Editor) => ChainedCommands;
}

/** The "/" an inserter typed, per editor, until its menu closes (slash.ts). */
export const OPENED = new WeakMap<Editor, number>();
let takeBackFn: (editor: Editor) => void = () => {};
export const setTakeBack = (fn: (editor: Editor) => void) => { takeBackFn = fn; };

const VISIBLE = 9;
let menus = 0;

export function suggestionMenu(label = 'Insert', search?: (query: string) => MenuItem[]) {
  let el: HTMLElement | null = null;
  let list: HTMLElement | null = null;
  let field: (HTMLElement & { value: string }) | null = null;
  let ed: Editor | null = null;
  let items: MenuItem[] = [];
  let index = 0;
  let pick: (it: MenuItem) => void = () => {};
  let rect: (() => DOMRect | null) | null | undefined = null;
  const uid = 'bcn-sugg-' + ++menus;

  const aria = (on: boolean): void => {
    const host = field ?? ed?.view.dom;
    if (!host) return;
    if (on && el && !el.hidden && items.length) {
      host.setAttribute('aria-controls', uid);
      host.setAttribute('aria-expanded', 'true');
      host.setAttribute('aria-activedescendant', `${uid}-${index}`);
    } else {
      host.removeAttribute('aria-controls');
      host.removeAttribute('aria-expanded');
      host.removeAttribute('aria-activedescendant');
    }
  };

  const draw = (): void => {
    if (!el || !list) return;
    list.replaceChildren();
    if (!items.length && !field) {
      el.hidden = true;
      aria(false);
      return;
    }
    el.hidden = false;
    if (!items.length) list.append(h('div', { class: 'bcn-slash__empty', role: 'presentation' }, 'No results'));
    let group: string | null = null;
    items.forEach((it, i) => {
      if (it.group !== group) {
        group = it.group;
        if (group) list!.append(h('div', { class: 'bcn-slash__group', role: 'presentation' }, group));
      }
      let mark: HTMLElement | null = null;
      if (it.family) mark = h('span', { class: 'bcn-slash__badge', 'aria-hidden': 'true' }, h('span', { class: 'bcn-topic-dot', 'data-family': it.family }));
      else if (it.icon) {
        mark = h('span', { class: 'bcn-slash__badge', 'aria-hidden': 'true' });
        mark.innerHTML = it.icon;
      }
      const row = h(
        'div',
        { class: 'bcn-slash__item' + (i === index ? ' is-active' : ''), role: 'option', id: `${uid}-${i}`, 'aria-selected': String(i === index) },
        mark,
        h('span', { class: 'bcn-slash__label' }, it.label),
        it.hint ? h('span', { class: 'bcn-slash__hint' }, it.hint) : null,
      );
      row.addEventListener('mousedown', (e) => {
        e.preventDefault();
        pick(it);
      });
      list!.append(row);
    });
    const nth = list.querySelectorAll<HTMLElement>('.bcn-slash__item')[VISIBLE - 1];
    const pad = parseFloat(getComputedStyle(el).paddingBottom) || 0;
    el.style.maxHeight = nth && nth.nextElementSibling ? `${nth.offsetTop + nth.offsetHeight + pad}px` : '';
    el.querySelector('.is-active')?.scrollIntoView({ block: 'nearest' });
    aria(true);
  };

  const place = (r0?: (() => DOMRect | null) | null): void => {
    const r = r0?.();
    if (!r || !el) return;
    el.style.left = `${Math.max(8, Math.min(r.left, window.innerWidth - el.offsetWidth - 8))}px`;
    const below = r.bottom + 6;
    el.style.top = `${below + el.offsetHeight > window.innerHeight - 8 ? Math.max(8, r.top - el.offsetHeight - 6) : below}px`;
  };
  const follow = (): void => {
    if (el && !el.hidden) place(rect);
  };
  const dismiss = (refocus: boolean): void => {
    if (!el) return;
    el.hidden = true;
    aria(false);
    const e = ed;
    if (e && refocus && field) e.commands.focus();
    if (e && OPENED.has(e)) queueMicrotask(() => takeBackFn(e));
  };
  const keys = (event: KeyboardEvent): boolean => {
    if (!el || el.hidden) return false;
    if (event.key === 'Escape') {
      dismiss(true);
      return true;
    }
    if (!items.length) return false;
    if (event.key === 'ArrowDown') {
      index = (index + 1) % items.length;
      draw();
      return true;
    }
    if (event.key === 'ArrowUp') {
      index = (index + items.length - 1) % items.length;
      draw();
      return true;
    }
    if (event.key === 'Enter' || event.key === 'Tab') {
      pick(items[index]);
      return true;
    }
    return false;
  };

  type P = { items: MenuItem[]; command: (it: MenuItem) => void; clientRect?: (() => DOMRect | null) | null; editor: Editor };
  return {
    onStart(p: P) {
      const host = p.editor.view.dom.closest('esa-dialog, esa-side-dialog') ?? document.body;
      el = h('div', { class: 'bcn-slash', role: 'listbox', 'aria-label': label, id: uid });
      list = h('div', { role: 'presentation' });
      ed = p.editor;
      if (search && OPENED.has(p.editor)) {
        field = h('esa-text-field', { size: 'sm', placeholder: 'Search', 'aria-label': 'Search blocks', autocomplete: 'off' }) as HTMLElement & { value: string };
        field.addEventListener('input', () => {
          items = search(field?.value ?? '');
          index = 0;
          draw();
          place(rect);
        });
        field.addEventListener('keydown', (e) => {
          if (keys(e)) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
        el.addEventListener('focusout', (e) => {
          const to = e.relatedTarget as Node | null;
          if (to && el?.contains(to)) return;
          setTimeout(() => {
            if (el && !el.hidden && !el.contains(document.activeElement)) dismiss(false);
          });
        });
        el.append(h('div', { class: 'bcn-slash__search' }, field));
      }
      el.append(list);
      host.append(el);
      items = p.items;
      index = 0;
      pick = p.command;
      rect = p.clientRect;
      draw();
      place(p.clientRect);
      requestAnimationFrame(follow);
      document.addEventListener('scroll', follow, true);
      if (field) {
        const f = field;
        requestAnimationFrame(() => f.focus());
      }
    },
    onUpdate(p: P) {
      pick = p.command;
      rect = p.clientRect;
      items = field ? search!(field.value ?? '') : p.items;
      index = 0;
      draw();
      place(p.clientRect);
      requestAnimationFrame(follow);
    },
    onKeyDown({ event }: { event: KeyboardEvent }) {
      return keys(event);
    },
    onExit() {
      document.removeEventListener('scroll', follow, true);
      aria(false);
      el?.remove();
      el = null;
      list = null;
      field = null;
      if (ed && OPENED.has(ed)) {
        const e = ed;
        setTimeout(() => takeBackFn(e));
      }
      ed = null;
    },
  };
}
