// aldo-panel — the panel's own behavior (collapse, rail, the waiting dot) and the renderers
// for the pieces between the thread and the composer: status, needs, instructions. Each
// mountX(root) finds its piece inside the panel and returns a setter; each setter is a
// no-op when its data has not changed.

import type { AldoAction, Instruction, OpenItem, Status } from '../../../data/aldo';
import type { Parts, Press } from './aldo-parts';

// ── The panel ───────────────────────────────────────────────────────────────

export function setupAldoPanel(root: HTMLElement): void {
  const host = root.parentElement?.closest<HTMLElement>('[data-aldo]') ?? root;
  const set = (open: boolean) => {
    host.dataset.aldo = open ? 'open' : 'closed';
    root.dispatchEvent(new CustomEvent(open ? 'aldo:expand' : 'aldo:collapse', { bubbles: true }));
  };
  root.querySelector('[data-aldo-collapse]')?.addEventListener('click', () => set(false));
  root.querySelector('[data-aldo-expand]')?.addEventListener('click', () => set(true));
  const dot = root.querySelector<HTMLElement>('[data-aldo-dot]');
  root.addEventListener('aldo:needs', (e) => {
    if (dot) dot.hidden = !((e as CustomEvent<{ count: number }>).detail.count > 0);
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
  let sig = '';
  let last = -1;
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
