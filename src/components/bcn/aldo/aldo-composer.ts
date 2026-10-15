// aldo-composer — the behavior of <BcnAldoComposer>: send on the mode's key, clear the field,
// emit `aldo:send` { text, context }, and render suggestions above the field. What rides
// along (the surface's context, @ references, files) is a row of chips in the shell; @ and /
// open a menu over the field; while Aldo answers, send is Stop.

import type { AldoAction, Choice, Command, ContextRef, Mention } from '../../../data/aldo';
import type { Parts, Press } from './aldo-parts';
import { setIcon } from '../../../lib/lucide-extra';

type Field = HTMLElement & { value: string; disabled?: boolean; updateComplete?: Promise<unknown> };

export interface Composer<A extends AldoAction = AldoAction> {
  /** Choices above the field, each sent as is. An empty list hides the row. */
  setSuggestions(choices: Choice[], press: Press<A>): void;
  /** What the surface attaches on its own: the page in view, the selected record. A chip the
   *  person removed stays off until the surface offers a different one. */
  setContext(refs: ContextRef[]): void;
  /** What @ can reference. */
  setMentions(list: Mention[]): void;
  /** What / offers. */
  setCommands(list: Command[]): void;
  /** While Aldo answers: send becomes Stop, which calls onStop. The field stays live, so the
   *  next message can be written while the reply comes in. */
  setBusy(on: boolean, onStop?: () => void): void;
  /** Put text in the field (Edit puts a sent message back), with its attached context. */
  setDraft(text: string, context?: ContextRef[]): void;
  focus(): void;
}

const kb = (n: number) => (n < 1024 * 1024 ? `${Math.max(1, Math.round(n / 1024))} KB` : `${(n / 1024 / 1024).toFixed(1)} MB`);

export function mountComposer<A extends AldoAction>(
  scope: ParentNode,
  parts: Parts,
  onSend: (text: string, context: ContextRef[]) => void,
): Composer<A> {
  const root = scope.querySelector<HTMLElement>('[data-aldo-composer]')!;
  const form = root.querySelector<HTMLFormElement>('[data-composer-form]')!;
  const field = root.querySelector<Field>('[data-composer-input]')!;
  const sendHost = root.querySelector<HTMLElement>('.bcn-aldo-composer__send');
  const sendBtn = root.querySelector<HTMLButtonElement>('[data-composer-send]');
  const suggest = root.querySelector<HTMLElement>('[data-composer-suggest]')!;
  const chipsEl = root.querySelector<HTMLElement>('[data-composer-context]')!;
  const menu = root.querySelector<HTMLElement>('[data-composer-menu]')!;
  const attachBtn = root.querySelector<HTMLButtonElement>('[data-composer-attach]');
  const fileInput = root.querySelector<HTMLInputElement>('[data-composer-file]');
  const dropHint = root.querySelector<HTMLElement>('[data-composer-drop]');
  const card = root.dataset.mode === 'card';
  const native = () => field.shadowRoot?.querySelector('textarea') ?? null;

  // ── Context: the surface's chips, then the person's ─────────────────────────
  let auto: ContextRef[] = [];
  const dismissed = new Set<string>();
  let added: ContextRef[] = [];
  const context = () => [...auto.filter((r) => !dismissed.has(r.id)), ...added.filter((r) => !auto.some((a) => a.id === r.id))];
  const paintChips = () => {
    const refs = context();
    chipsEl.hidden = !refs.length;
    chipsEl.replaceChildren(
      ...refs.map((r) => {
        const chip = parts.chip(r, true);
        chip.addEventListener('removed', () => {
          if (auto.some((a) => a.id === r.id)) dismissed.add(r.id);
          added = added.filter((a) => a.id !== r.id);
          // The pill removes itself; repaint on the next frame so the row hides when empty.
          requestAnimationFrame(paintChips);
          field.focus();
        });
        return chip;
      }),
    );
  };
  const add = (r: ContextRef) => {
    dismissed.delete(r.id);
    if (!context().some((c) => c.id === r.id)) added.push(r);
    paintChips();
  };

  // ── Send and Stop ──────────────────────────────────────────────────────────
  let busy = false;
  let stop: (() => void) | undefined;
  const send = () => {
    if (busy) return void stop?.();
    const text = (field.value ?? '').trim();
    if (!text) return;
    const ctx = context();
    field.value = '';
    added = [];
    // What the surface attached stays attached for the next message; only what was removed
    // comes back when the surface moves on.
    paintChips();
    closeMenu();
    onSend(text, ctx);
    root.dispatchEvent(new CustomEvent('aldo:send', { bubbles: true, detail: { text, context: ctx } }));
  };
  form.addEventListener('submit', (e) => (e.preventDefault(), send()));
  sendBtn?.addEventListener('click', (e) => (e.preventDefault(), send()));

  // ── Files ──────────────────────────────────────────────────────────────────
  const attachFiles = (files: FileList | null) => {
    for (const f of Array.from(files ?? []))
      add({ id: `file:${f.name}:${f.size}`, kind: 'file', label: `${f.name}, ${kb(f.size)}`, file: { name: f.name, size: f.size, type: f.type } });
    field.focus();
  };
  if (attachBtn) setIcon(attachBtn, 'paperclip');
  attachBtn?.addEventListener('click', (e) => (e.preventDefault(), fileInput?.click()));
  fileInput?.addEventListener('change', () => {
    attachFiles(fileInput.files);
    fileInput.value = '';
  });
  if (fileInput) {
    let depth = 0;
    const show = (on: boolean) => {
      root.toggleAttribute('data-dropping', on);
      if (dropHint) dropHint.hidden = !on;
    };
    root.addEventListener('dragenter', (e) => {
      if (!e.dataTransfer?.types.includes('Files')) return;
      e.preventDefault();
      depth++;
      show(true);
    });
    root.addEventListener('dragover', (e) => {
      if (e.dataTransfer?.types.includes('Files')) e.preventDefault();
    });
    root.addEventListener('dragleave', () => {
      if (--depth <= 0) (depth = 0), show(false);
    });
    root.addEventListener('drop', (e) => {
      if (!e.dataTransfer?.files.length) return;
      e.preventDefault();
      depth = 0;
      show(false);
      attachFiles(e.dataTransfer.files);
    });
  }

  // ── @ and / ────────────────────────────────────────────────────────────────
  let mentions: Mention[] = [];
  let commands: Command[] = [];
  type Item = { label: string; detail?: string; pick: () => void };
  let items: Item[] = [];
  let active = 0;
  /** The token being completed: where it starts in the field, and its text after the trigger. */
  let token: { trigger: '@' | '/'; start: number; query: string } | null = null;

  const closeMenu = () => {
    menu.hidden = true;
    token = null;
    items = [];
    native()?.removeAttribute('aria-activedescendant');
  };
  const paintMenu = () => {
    menu.replaceChildren(
      ...items.map((it, i) => {
        const li = parts.el('li', 'bcn-aldo-composer__option');
        li.id = `aldo-opt-${i}`;
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', String(i === active));
        li.append(parts.el('span', 'bcn-aldo-composer__option-label', it.label));
        if (it.detail) li.append(parts.el('span', 'bcn-aldo-composer__option-detail', it.detail));
        // pointerdown, not click: the field keeps focus.
        li.addEventListener('pointerdown', (e) => (e.preventDefault(), it.pick()));
        li.addEventListener('pointerenter', () => ((active = i), paintMenu()));
        return li;
      }),
    );
    menu.hidden = !items.length;
    native()?.setAttribute('aria-activedescendant', `aldo-opt-${active}`);
    menu.querySelector<HTMLElement>('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  };
  /** Replace the token being completed with `text` and put the caret after it. */
  const replaceToken = async (text: string) => {
    if (!token) return;
    const v = field.value ?? '';
    const end = token.start + 1 + token.query.length;
    const caret = token.start + text.length;
    field.value = v.slice(0, token.start) + text + v.slice(end);
    closeMenu();
    await field.updateComplete;
    const n = native();
    n?.focus();
    n?.setSelectionRange(caret, caret);
  };
  const scan = () => {
    const n = native();
    const v = field.value ?? '';
    const caret = n?.selectionStart ?? v.length;
    const before = v.slice(0, caret);
    const at = /(^|\s)@([^\s@]*)$/.exec(before);
    const slash = /^\/(\S*)$/.exec(before);
    if (at && mentions.length) {
      token = { trigger: '@', start: caret - at[2].length - 1, query: at[2] };
      const q = at[2].toLowerCase();
      items = mentions
        .filter((m) => !q || m.label.toLowerCase().includes(q) || (m.detail ?? '').toLowerCase().includes(q))
        .slice(0, 8)
        .map((m) => ({ label: m.label, detail: m.detail, pick: () => (add(m.ref), void replaceToken(`${m.ref.label} `)) }));
    } else if (slash && commands.length) {
      token = { trigger: '/', start: 0, query: slash[1] };
      const q = slash[1].toLowerCase();
      items = commands
        .filter((c) => !q || c.name.startsWith(q))
        .map((c) => ({ label: `/${c.name}`, detail: c.hint, pick: () => void replaceToken(c.text) }));
    } else return closeMenu();
    active = Math.min(active, Math.max(0, items.length - 1));
    paintMenu();
  };
  field.addEventListener('input', () => ((active = 0), scan()));
  field.addEventListener('blur', () => setTimeout(closeMenu, 120));

  field.addEventListener('keydown', (e) => {
    if (!menu.hidden && items.length) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        active = (active + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
        return paintMenu();
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        return items[active].pick();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        return closeMenu();
      }
    }
    // Backspace in an empty field takes off the last chip the person added.
    if (e.key === 'Backspace' && !(field.value ?? '') && added.length) {
      added.pop();
      return paintChips();
    }
    if (e.key !== 'Enter' || e.isComposing) return;
    const go = card ? e.metaKey || e.ctrlKey : !e.shiftKey;
    if (!go) return;
    e.preventDefault();
    if (!busy) send();
  });

  let sig = '';
  let ctxSig = '';
  let sendGlyph: string | undefined;
  return {
    setSuggestions(choices, press) {
      const next = choices.map((c) => `${c.label}:${c.text}`).join('|');
      if (next === sig) return;
      sig = next;
      suggest.replaceChildren(...choices.map((c) => parts.button<A>({ label: c.label, does: { say: c.text } }, press)));
    },
    setContext(refs) {
      const next = refs.map((r) => r.id).join('|');
      if (next === ctxSig) return;
      ctxSig = next;
      // A chip the person took off stays off only while it is the same chip.
      for (const id of [...dismissed]) if (!refs.some((r) => r.id === id)) dismissed.delete(id);
      auto = refs.map((r) => ({ ...r, auto: true }));
      paintChips();
    },
    setMentions: (list) => void (mentions = list),
    setCommands: (list) => void (commands = list),
    setBusy(on, onStop) {
      busy = on;
      stop = onStop;
      root.toggleAttribute('data-busy', on);
      sendHost?.toggleAttribute('data-stop', on);
      if (sendBtn) {
        sendBtn.setAttribute('aria-label', on ? 'Stop' : 'Send');
        const svg = sendBtn.querySelector('svg');
        if (svg) {
          sendGlyph ??= svg.innerHTML;
          svg.innerHTML = on ? '<rect width="10" height="10" x="7" y="7" rx="1.5" fill="currentColor"/>' : sendGlyph;
        }
      }
    },
    async setDraft(text, ctx = []) {
      field.value = text;
      added = ctx.filter((r) => !r.auto);
      paintChips();
      await field.updateComplete;
      const n = native();
      n?.focus();
      n?.setSelectionRange(text.length, text.length);
    },
    focus: () => field.focus(),
  };
}
