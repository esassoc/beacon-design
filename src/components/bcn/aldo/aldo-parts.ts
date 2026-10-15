// aldo-parts — the typed cloner over <BcnAldoParts>, and the one place a button press is
// resolved. Every runtime piece of the kit takes `Parts` and never builds a lego itself.

import type { ActionButton, AldoAction, Anchor, CardField, Tone } from '../../../data/aldo';

/** What a surface does when a button is pressed. The adapter supplies it. */
export interface AldoHost<A extends AldoAction = AldoAction> {
  /** Send a message as is: a turn via 'button' that is interpreted like a typed one. */
  say(text: string): void;
  /** Record these actions with this reply: a turn via 'button'. */
  act(label: string, actions: A[], reply: string): void;
  /** Open an anchor: a page, a record, a route. Records nothing. */
  go(anchor: Anchor): void;
}

export type Press<A extends AldoAction = AldoAction> = (b: ActionButton<A>) => void;

/** A press, resolved against the host. `run` is a view-only effect. */
export const pressWith =
  <A extends AldoAction>(host: AldoHost<A>): Press<A> =>
  (b) => {
    const d = b.does;
    if ('say' in d) host.say(d.say);
    else if ('act' in d) host.act(b.label, Array.isArray(d.act) ? d.act : [d.act], d.reply);
    else if ('go' in d) host.go(d.go);
    else d.run();
  };

export type FieldEl = HTMLElement & { value: string };

export interface Parts {
  /** One turn's message shell: who, text, extra (cards), actions. */
  message(): HTMLElement;
  /** esa-button in the button's tone, labelled, wired to `press`. */
  button<A extends AldoAction>(b: ActionButton<A>, press: Press<A>): HTMLElement;
  /** A row of buttons; empty rows hide by CSS. */
  actions<A extends AldoAction>(list: ActionButton<A>[], press: Press<A>, cls?: string): HTMLElement;
  /** The commitment ID chip ("COA " is dropped: the chip says it). */
  badge(code: string): HTMLElement;
  mark(): HTMLElement;
  /** esa-text-field, or esa-textarea when multiline. These are Lit legos: created, not cloned. */
  field(f: CardField): FieldEl;
  el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K];
  /** Set a cloned esa-button's label in place. */
  relabel(host: HTMLElement, label: string): void;
}

export function aldoParts(scope: ParentNode): Parts {
  const bin = scope.querySelector<HTMLElement>('[data-aldo-parts]');
  if (!bin) throw new Error('aldo-parts: no <BcnAldoParts> in scope');
  const clone = (part: string) => {
    const tpl = bin.querySelector<HTMLTemplateElement>(`template[data-part="${part}"]`);
    if (!tpl) throw new Error(`aldo-parts: no part "${part}"`);
    return (tpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
  };
  const relabel = (host: HTMLElement, label: string) => {
    const b = host.querySelector('button') ?? host;
    const l = (b.querySelector('.esa-button__label') ?? b) as HTMLElement;
    if (l.textContent !== label) l.textContent = label;
  };
  const el = <K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  };
  const button = <A extends AldoAction>(b: ActionButton<A>, press: Press<A>) => {
    const host = clone(`button-${(b.tone ?? 'neutral') satisfies Tone}`);
    relabel(host, b.label);
    (host.querySelector('button') ?? host).addEventListener('click', () => press(b));
    return host;
  };
  return {
    message: () => clone('message'),
    button,
    actions: (list, press, cls = 'bcn-aldo-actions') => {
      const row = el('span', cls);
      row.append(...list.map((b) => button(b, press)));
      return row;
    },
    badge: (code) => {
      const host = clone('badge');
      (host.querySelector('.bcn-cbadge') ?? host).textContent = code.replace(/^COA\s+/, '');
      return host;
    },
    mark: () => clone('mark'),
    field: (f) => {
      const x = document.createElement(f.multiline ? 'esa-textarea' : 'esa-text-field') as FieldEl;
      x.setAttribute('label', f.label);
      x.setAttribute('size', 'sm');
      if (f.multiline) x.setAttribute('rows', '5');
      x.dataset.key = f.key;
      x.value = f.value;
      return x;
    },
    el,
    relabel,
  };
}
