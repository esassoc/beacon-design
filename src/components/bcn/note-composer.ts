// The controller for <BcnNoteComposer>: one instance per host, opened in a mode with the
// passage it is about. The host decides what a submit does.
type Field = HTMLElement & { value: string; focus(): void };

export type ComposerMode = 'note' | 'reply' | 'aldo';

export interface ComposerOpen {
  mode: ComposerMode;
  /** The passage, shown above the field (not for a reply). */
  quote?: string;
  /** Prefilled text (a note's words, as Aldo's prompt). */
  value?: string;
  /** Sits in flow (a footnote card) rather than floating (the bubble). */
  inline?: boolean;
}

export interface Composer {
  el: HTMLElement;
  open(o: ComposerOpen): void;
  close(): void;
  /** Aldo at work: the field locks, the keys hint says so, his mark animates. */
  setWorking(on: boolean): void;
  readonly mode: ComposerMode | null;
}

const COPY: Record<ComposerMode, { title: string; placeholder: string; submit: string; label: string }> = {
  note: { title: 'New Note', placeholder: 'Note for the study team', submit: 'Add Note', label: 'New Note' },
  reply: { title: 'Reply', placeholder: 'Reply to the thread', submit: 'Reply', label: 'Reply' },
  aldo: { title: 'Revise with Aldo', placeholder: 'What should change: shorter, plainer, name the process…', submit: 'Revise', label: 'Revise with Aldo' },
};

export function mountComposer(
  el: HTMLElement,
  on: { submit: (mode: ComposerMode, text: string) => void; cancel?: () => void },
): Composer {
  const $ = <T extends HTMLElement = HTMLElement>(s: string) => el.querySelector<T>(s)!;
  const native = (x: Element) => (x.matches('button') ? x : x.querySelector('button')) as HTMLButtonElement;
  const field = $<Field>('[data-nc-field]');
  const submitBtn = native($('[data-nc-submit]'));
  const sendBtn = native($('[data-nc-send]'));
  let mode: ComposerMode | null = null;

  const setLabel = (btn: HTMLButtonElement, text: string) => {
    const label = btn.querySelector('.esa-button__label');
    if (label) label.textContent = text;
    else btn.textContent = text;
  };
  const sync = () => {
    const off = !(field.value ?? '').trim();
    for (const b of [submitBtn, sendBtn]) {
      b.disabled = off;
      b.closest('.esa-button')?.classList.toggle('esa-button--disabled', off);
    }
  };

  const open = (o: ComposerOpen) => {
    mode = o.mode;
    const copy = COPY[o.mode];
    el.dataset.mode = o.mode;
    el.toggleAttribute('data-inline', !!o.inline);
    el.setAttribute('aria-label', copy.label);
    $('[data-nc-title]').textContent = copy.title;
    $('[data-nc-who="me"]').hidden = o.mode === 'aldo';
    $('[data-nc-who="aldo"]').hidden = o.mode !== 'aldo';
    const quote = $('[data-nc-quote]');
    quote.hidden = !o.quote;
    $('[data-nc-hl]').textContent = o.quote ?? '';
    // A person's worded button; Aldo's round send.
    $('[data-nc-submit-wrap]').hidden = o.mode === 'aldo';
    $('[data-nc-send-wrap]').hidden = o.mode !== 'aldo';
    field.setAttribute('placeholder', copy.placeholder);
    field.setAttribute('aria-label', copy.label);
    field.value = o.value ?? '';
    setLabel(submitBtn, copy.submit);
    sync();
    el.hidden = false;
    requestAnimationFrame(() => field.focus());
  };
  const keys = $('[data-nc-keys]');
  const setWorking = (on: boolean) => {
    el.toggleAttribute('data-working', on);
    el.setAttribute('aria-busy', String(on));
    field.toggleAttribute('disabled', on);
    keys.textContent = on ? 'Aldo is revising…' : '⌘ Enter';
    el.querySelector('[data-nc-who="aldo"] .bcn-aldo-mark')?.toggleAttribute('data-animated', on);
    for (const b of el.querySelectorAll<HTMLButtonElement>('button')) b.disabled = on;
    if (!on) sync();
  };
  const close = () => {
    if (el.hasAttribute('data-working')) setWorking(false);
    el.hidden = true;
    mode = null;
  };
  const submit = () => {
    const text = (field.value ?? '').trim();
    if (!text || !mode || el.hasAttribute('data-working')) return;
    on.submit(mode, text);
  };
  const cancel = () => {
    close();
    on.cancel?.();
  };

  field.addEventListener('input', sync);
  submitBtn.addEventListener('click', submit);
  sendBtn.addEventListener('click', submit);
  native($('[data-nc-cancel]')).addEventListener('click', cancel);
  // Keep a host's selection while the composer's buttons are pressed.
  el.addEventListener('mousedown', (e) => {
    if ((e.target as Element).closest('button')) e.preventDefault();
  });
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      submit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      cancel();
    }
  });

  return {
    el,
    open,
    close,
    setWorking,
    get mode() {
      return mode;
    },
  };
}
