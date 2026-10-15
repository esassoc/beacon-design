// aldo-composer — the behavior of <BcnAldoComposer>: send on the mode's key, clear the field,
// emit `aldo:send` { text }, and render suggestions above the field.

import type { AldoAction, Choice } from '../../../data/aldo';
import type { Parts, Press } from './aldo-parts';

type Field = HTMLElement & { value: string; disabled?: boolean };

export interface Composer<A extends AldoAction = AldoAction> {
  /** Choices above the field, each sent as is. An empty list hides the row. */
  setSuggestions(choices: Choice[], press: Press<A>): void;
  /** While Aldo works: the field locks and send is off. */
  setBusy(on: boolean): void;
  focus(): void;
}

export function mountComposer<A extends AldoAction>(scope: ParentNode, parts: Parts, onSend: (text: string) => void): Composer<A> {
  const root = scope.querySelector<HTMLElement>('[data-aldo-composer]')!;
  const form = root.querySelector<HTMLFormElement>('[data-composer-form]')!;
  const field = root.querySelector<Field>('[data-composer-input]')!;
  const sendBtn = root.querySelector<HTMLButtonElement>('[data-composer-send]');
  const suggest = root.querySelector<HTMLElement>('[data-composer-suggest]')!;
  const card = root.dataset.mode === 'card';

  const send = () => {
    const text = (field.value ?? '').trim();
    if (!text || root.dataset.busy !== undefined) return;
    field.value = '';
    onSend(text);
    root.dispatchEvent(new CustomEvent('aldo:send', { bubbles: true, detail: { text } }));
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    send();
  });
  sendBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    send();
  });
  field.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.isComposing) return;
    const go = card ? e.metaKey || e.ctrlKey : !e.shiftKey;
    if (!go) return;
    e.preventDefault();
    send();
  });

  let sig = '';
  return {
    setSuggestions(choices, press) {
      const next = choices.map((c) => `${c.label}:${c.text}`).join('|');
      if (next === sig) return;
      sig = next;
      suggest.replaceChildren(...choices.map((c) => parts.button<A>({ label: c.label, does: { say: c.text } }, press)));
    },
    setBusy(on) {
      root.toggleAttribute('data-busy', on);
      field.disabled = on;
      if (sendBtn) sendBtn.disabled = on;
    },
    focus: () => field.focus(),
  };
}
