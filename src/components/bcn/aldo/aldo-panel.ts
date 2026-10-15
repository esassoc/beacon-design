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
  setupOverlay(root);
  const dot = root.querySelector<HTMLElement>('[data-aldo-dot]');
  root.addEventListener('aldo:needs', (e) => {
    if (dot) dot.hidden = !((e as CustomEvent<{ count: number }>).detail.count > 0);
  });
}

/** The overlay: the panel's head and body move into esa-side-dialog and back. The head
 *  takes the dialog's header slot; the dialog is labelled by it. */
function setupOverlay(root: HTMLElement): void {
  const dialog = root.querySelector<HTMLElement & { open: boolean; show(): void; close(): void }>('[data-aldo-overlay-dialog]');
  if (!dialog) return;
  paintIcons(root);
  const body = root.querySelector<HTMLElement>('.bcn-aldo-panel__body')!;
  const head = body.querySelector<HTMLElement>('.bcn-aldo-panel__head')!;
  const thread = (): HTMLElement | null => body.querySelector('[data-aldo-thread]');
  const composer = body.querySelector<HTMLElement>('[data-aldo-composer]');
  let home: Comment | null = null;
  let composerHome: Comment | null = null;
  const keep = () => {
    // A move re-lays the thread out; hold the reader's place by distance from the end.
    const t = thread();
    return t ? t.scrollHeight - t.scrollTop : 0;
  };
  const restore = (fromEnd: number) =>
    requestAnimationFrame(() => {
      const t = thread();
      if (t) t.scrollTop = t.scrollHeight - fromEnd;
    });

  const open = () => {
    if (home) return;
    const at = keep();
    home = document.createComment('aldo');
    body.before(home);
    head.slot = 'header';
    body.dataset.expanded = '';
    root.dataset.expanded = '';
    dialog.append(head, body);
    // The composer takes the dialog's footer: pinned under the conversation, above its rule.
    if (composer) {
      composerHome = document.createComment('aldo-composer');
      composer.before(composerHome);
      composer.slot = 'footer';
      dialog.append(composer);
    }
    dialog.show();
    restore(at);
    root.dispatchEvent(new CustomEvent('aldo:expand-overlay', { bubbles: true }));
    requestAnimationFrame(() => composer?.querySelector<HTMLElement>('[data-composer-input]')?.focus());
  };
  const dock = () => {
    if (!home) return;
    const at = keep();
    head.removeAttribute('slot');
    if (composer && composerHome) {
      composer.removeAttribute('slot');
      composerHome.replaceWith(composer);
      composerHome = null;
    }
    delete body.dataset.expanded;
    delete root.dataset.expanded;
    body.prepend(head);
    home.replaceWith(body);
    home = null;
    restore(at);
    root.dispatchEvent(new CustomEvent('aldo:dock', { bubbles: true }));
  };
  // The head travels with the panel, so its keys are found wherever it is.
  head.addEventListener('click', (e) => {
    const key = (e.target as Element).closest<HTMLElement>('[data-aldo-overlay]');
    if (!key) return;
    if (key.dataset.aldoOverlay === 'open') open();
    else dialog.close();
  });
  // Esc, a click on the dimmed page, or Dock: the dialog closes, the panel goes home once it has slid out.
  dialog.addEventListener('close', () => setTimeout(dock, 220));
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
