// aldo-panel — the panel's own behavior (collapse, rail, the waiting dot) and the renderers
// for the pieces between the thread and the composer: status, needs, instructions. Each
// mountX(root) finds its piece inside the panel and returns a setter; each setter is a
// no-op when its data has not changed.

import type { AldoAction, Instruction, OpenItem, Status } from '../../../data/aldo';
import type { Parts, Press } from './aldo-parts';
import { paintIcons } from '../../../lib/lucide-extra';

// ── The panel ───────────────────────────────────────────────────────────────

export function setupAldoPanel(root: HTMLElement): void {
  const host = root.parentElement?.closest<HTMLElement>('[data-aldo]') ?? root;
  const set = (open: boolean) => {
    host.dataset.aldo = open ? 'open' : 'closed';
    root.dispatchEvent(new CustomEvent(open ? 'aldo:expand' : 'aldo:collapse', { bubbles: true }));
  };
  root.querySelector('[data-aldo-collapse]')?.addEventListener('click', () => set(false));
  root.querySelector('[data-aldo-expand]')?.addEventListener('click', () => set(true));
  // The tray first: its Esc closes it before Esc would dock the expanded panel.
  setupSide(root);
  setupOverlay(root);
  const dot = root.querySelector<HTMLElement>('[data-aldo-dot]');
  root.addEventListener('aldo:needs', (e) => {
    if (dot) dot.hidden = !((e as CustomEvent<{ count: number }>).detail.count > 0);
  });
}

/** The side region's indicator and tray (docked). Expanded, CSS shows the region as a sidebar
 *  and hides the indicator. The indicator reads what waits: the needs count, else the
 *  instructions count. */
function setupSide(root: HTMLElement): void {
  const toggle = root.querySelector<HTMLButtonElement>('[data-aldo-side-toggle]');
  const side = root.querySelector<HTMLElement>('[data-aldo-side]');
  if (!toggle || !side) return;
  const count = toggle.querySelector<HTMLElement>('[data-waiting-count] .esa-badge__text')!;
  const countHost = toggle.querySelector<HTMLElement>('[data-waiting-count]')!;
  const label = toggle.querySelector<HTMLElement>('[data-waiting-label]')!;
  let needs = 0;
  let rules = 0;
  const paint = () => {
    toggle.hidden = !needs && !rules;
    countHost.hidden = !needs;
    count.textContent = String(needs);
    label.textContent = needs ? (needs === 1 ? 'open item' : 'open items') : `Instructions (${rules})`;
    if (toggle.hidden) set(false);
  };
  const head = root.querySelector<HTMLElement>('.bcn-aldo-panel__head');
  const set = (open: boolean) => {
    // The tray hangs from the header, however tall the header wraps.
    if (open && head) root.style.setProperty('--_aldo-head-h', `${head.offsetTop + head.offsetHeight}px`);
    root.toggleAttribute('data-side-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => set(!root.hasAttribute('data-side-open')));
  root.addEventListener('aldo:needs', (e) => {
    const n = (e as CustomEvent<{ count: number }>).detail.count;
    // Something new: the indicator nods, it does not open the tray on its own.
    if (n > needs) (toggle.removeAttribute('data-nudge'), void toggle.offsetWidth, toggle.setAttribute('data-nudge', ''));
    needs = n;
    paint();
  });
  root.addEventListener('aldo:instructions', (e) => {
    rules = (e as CustomEvent<{ count: number }>).detail.count;
    paint();
  });
  document.addEventListener('pointerdown', (e) => {
    if (!root.hasAttribute('data-side-open')) return;
    const t = e.target as Node;
    if (!side.contains(t) && !toggle.contains(t)) set(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.hasAttribute('data-side-open')) {
      // The tray's Esc only: the expanded panel does not dock on the same key.
      e.preventDefault();
      e.stopImmediatePropagation();
      set(false);
      toggle.focus();
    }
  });
}

/** Expanded: the panel's body pins itself over the right of the window as an overlay; the
 *  page under it does not move. A press that changes the record or opens something docks it
 *  (`aldo:dock-request`), so the person sees what happened. The host learns
 *  where the panel starts (`--aldo-overlay-left` and `data-aldo-expanded` on the nearest
 *  `[data-aldo]` ancestor) and makes room. Esc or Dock puts it back. */
function setupOverlay(root: HTMLElement): void {
  const keys = root.querySelectorAll<HTMLElement>('[data-aldo-overlay]');
  if (!keys.length) return;
  paintIcons(root);
  const body = root.querySelector<HTMLElement>('.bcn-aldo-panel__body')!;
  const host = root.parentElement?.closest<HTMLElement>('[data-aldo]') ?? null;
  const thread = (): HTMLElement | null => body.querySelector('[data-aldo-thread]');
  const expanded = () => root.hasAttribute('data-expanded');
  // Hold the reader's place across the change of width: distance from the end.
  const moving = (change: () => void) => {
    const t = thread();
    const fromEnd = t ? t.scrollHeight - t.scrollTop : 0;
    change();
    requestAnimationFrame(() => {
      const u = thread();
      if (u) u.scrollTop = u.scrollHeight - fromEnd;
    });
  };
  // The app's fixed top bar: the expanded panel starts under it, never over it.
  const topbar = document.querySelector<HTMLElement>('[data-app-topbar], header.topbar');
  const doc = document.documentElement;
  const measure = () => {
    if (!expanded()) return;
    const top = topbar ? topbar.getBoundingClientRect().bottom : 0;
    root.style.setProperty('--_aldo-top', `${Math.max(0, top)}px`);
    // Where the panel starts, for the host (it makes room) and the page's floating bars.
    // offsetLeft, not the bounding box: the panel slides in, and the box moves with the slide.
    const left = `${body.offsetLeft}px`;
    doc.style.setProperty('--aldo-overlay-left', left);
    host?.style.setProperty('--aldo-overlay-left', left);
    host?.dispatchEvent(new CustomEvent('aldo:overlay-resize', { bubbles: true }));
  };
  const open = () =>
    moving(() => {
      root.toggleAttribute('data-expanded', true);
      host?.toggleAttribute('data-aldo-expanded', true);
      doc.toggleAttribute('data-aldo-expanded', true);
      measure();
      requestAnimationFrame(measure);
      root.dispatchEvent(new CustomEvent('aldo:expand-overlay', { bubbles: true }));
      body.querySelector<HTMLElement>('[data-composer-input]')?.focus();
    });
  const dock = () =>
    moving(() => {
      root.removeAttribute('data-expanded');
      host?.removeAttribute('data-aldo-expanded');
      host?.style.removeProperty('--aldo-overlay-left');
      doc.removeAttribute('data-aldo-expanded');
      doc.style.removeProperty('--aldo-overlay-left');
      root.dispatchEvent(new CustomEvent('aldo:dock', { bubbles: true }));
    });
  keys.forEach((k) => k.addEventListener('click', () => (k.dataset.aldoOverlay === 'open' ? open() : dock())));
  root.addEventListener('aldo:dock-request', () => expanded() && dock());
  // A press anywhere off the expanded panel docks it, and the press goes on to what it hit.
  document.addEventListener('pointerdown', (e) => {
    if (!expanded()) return;
    const path = e.composedPath();
    if (path.includes(body) || [...keys].some((k) => path.includes(k))) return;
    dock();
  });
  window.addEventListener('resize', measure);
  // Esc docks, unless something inside Aldo (a menu, a field) is using it first.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && expanded() && !e.defaultPrevented) dock();
  });
}

// ── Status ──────────────────────────────────────────────────────────────────

export function mountStatus<A extends AldoAction>(scope: ParentNode, parts: Parts, press: Press<A>) {
  const root = scope.querySelector<HTMLElement>('[data-aldo-status]')!;
  const action = root.querySelector<HTMLElement>('[data-status-action]')!;
  let sig = '';
  return {
    setStatus(status: Status<A> | null) {
      const next = status ? `${status.tone}|${status.text}|${status.action?.label ?? ''}` : '';
      if (next === sig) return;
      sig = next;
      root.hidden = !status;
      root.querySelectorAll<HTMLElement>('[data-tone]').forEach((box) => {
        const on = box.dataset.tone === status?.tone;
        box.hidden = !on;
        const t = box.querySelector('[data-status-text]');
        if (on && t) t.textContent = status!.text;
      });
      action.replaceChildren(...(status?.action ? [parts.button(status.action, press)] : []));
    },
  };
}

// ── Needs ───────────────────────────────────────────────────────────────────

export function mountNeeds<A extends AldoAction>(scope: ParentNode, parts: Parts, press: Press<A>) {
  const root = scope.querySelector<HTMLElement>('[data-aldo-needs]')!;
  const list = root.querySelector<HTMLElement>('[data-needs-list]')!;
  const count = root.querySelector<HTMLElement>('[data-needs-count] .esa-badge__text')!;
  const toggle = root.querySelector<HTMLButtonElement>('[data-needs-toggle]')!;
  const KEY = 'aldo:needs-folded';
  const fold = (on: boolean) => {
    root.toggleAttribute('data-folded', on);
    toggle.setAttribute('aria-expanded', String(!on));
    try {
      localStorage.setItem(KEY, on ? '1' : '');
    } catch {
      /* no storage */
    }
  };
  try {
    if (localStorage.getItem(KEY)) fold(true);
  } catch {
    /* no storage */
  }
  toggle.addEventListener('click', () => fold(!root.hasAttribute('data-folded')));
  let sig = '';
  let last = -1;
  let seen = new Set<string>();
  return {
    /** Newest first is the caller's order. */
    setItems(items: OpenItem<A>[]) {
      const next = items.map((n) => `${n.id}:${n.text}:${n.answers.map((a) => `${a.tone ?? ''}${a.label}`).join(',')}`).join('|');
      if (next !== sig) {
        sig = next;
        list.replaceChildren(
          ...items.map((n) => {
            const li = parts.el('li', 'bcn-aldo-needs__item');
            const anchor = n.anchor;
            const text = anchor ? parts.el('button', 'bcn-aldo-needs__text', n.text) : parts.el('p', 'bcn-aldo-needs__text', n.text);
            if (anchor && text instanceof HTMLButtonElement) {
              text.type = 'button';
              text.addEventListener('click', () => press({ label: n.text, does: { go: anchor } }));
            }
            li.append(text, parts.actions(n.answers, press));
            return li;
          }),
        );
      }
      // Something new waits on the person: open the list, even if it was folded.
      const ids = new Set(items.map((n) => n.id));
      if (last >= 0 && items.some((n) => !seen.has(n.id))) fold(false);
      seen = ids;
      root.hidden = !items.length;
      count.textContent = String(items.length);
      if (items.length !== last) {
        last = items.length;
        root.dispatchEvent(new CustomEvent('aldo:needs', { bubbles: true, detail: { count: items.length } }));
      }
    },
  };
}

// ── Instructions ────────────────────────────────────────────────────────────

/** Where an instruction took effect from, as its line's prefix. */
const fromLabel = (i: Instruction) => {
  if (i.kind === 'scope') return 'Scope';
  if (i.kind === 'fix') return 'From the check';
  if (i.from === 'start') return 'From the start';
  return 'page' in i.from ? `From p. ${i.from.page}` : 'From here';
};

export function mountInstructions(scope: ParentNode, parts: Parts) {
  const root = scope.querySelector<HTMLElement>('[data-aldo-instructions]')!;
  const list = root.querySelector<HTMLElement>('[data-instructions-list]')!;
  const title = root.querySelector<HTMLElement>('.esa-collapsible__title');
  let sig = '';
  return {
    setInstructions(items: Instruction[]) {
      // The scope alone is not worth a list: it shows once a rule or a fix joins it.
      const show = items.some((i) => i.kind !== 'scope');
      root.hidden = !show;
      root.dispatchEvent(new CustomEvent('aldo:instructions', { bubbles: true, detail: { count: show ? items.length : 0 } }));
      if (!show) return;
      const next = JSON.stringify(items);
      if (next === sig) return;
      sig = next;
      if (title) title.textContent = `Instructions in effect (${items.length})`;
      list.replaceChildren(
        ...items.map((i) => {
          const li = parts.el('li');
          li.append(parts.el('span', 'bcn-aldo-instructions__from', `${fromLabel(i)}. `), document.createTextNode(i.text));
          return li;
        }),
      );
    },
  };
}
