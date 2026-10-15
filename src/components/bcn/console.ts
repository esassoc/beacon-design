// Builders for <BcnConsole>: the line grammar of a machine run watched as it works, after
// a Claude Code session. Every line is one of six primitives:
//
//   prompt    ❯ what the person asked for (a key pressed, guidance typed)
//   tool      ● a unit of work: a status dot, its name, its argument; under it, behind an
//             elbow, what it produced (rows), collapsed to "+N more" when long
//   row       one result: an optional diff sign (+ − ), the text, a quiet meta tail
//   spinner   ✻ the verb in progress, shimmering, with elapsed time and a real count
//   todo      the plan under the spinner: done (struck), active, pending
//   message   ● the run's closing words, with its warnings as rows
//
// Lines are plain DOM (the run repaints every tick); the "+N more" key is the hub's
// esa-button (chrome variant: it takes the console's ink), cloned from the shell's
// template. paint() keeps the log stuck to its newest line unless the reader scrolled up.

export type ToolState = 'pending' | 'running' | 'done';
export type RowTone = 'add' | 'remove' | 'warn' | 'dim';

export interface ConsoleRow {
  text: string;
  meta?: string;
  tone?: RowTone;
  /** A diff sign: '+' added, '−' removed, ' ' kept. */
  sign?: '+' | '−' | ' ';
}

export interface ConsoleMore {
  /** How many rows are folded away. */
  count: number;
  /** The noun counted: "commitments" → "Show 280 commitments", "Hide commitments". */
  noun: string;
  /** The folded key's words, when "Show N noun" is not them ("+12 more changes"). */
  label?: string;
  open: boolean;
  toggle: () => void;
}

/** Claude Code's spinner frames, without its middot. */
export const SPIN = ['✢', '✳', '✶', '✻', '✽', '✻', '✶', '✳'];

const make = <K extends keyof HTMLElementTagNameMap>(tag: K, cls: string, text?: string) => {
  const el = document.createElement(tag);
  el.className = cls;
  if (text !== undefined) el.textContent = text;
  return el;
};

export function consoleKit(root: HTMLElement) {
  const body = root.querySelector<HTMLElement>('[data-console-body]')!;
  const moreTpl = root.querySelector<HTMLTemplateElement>('template[data-console-more]')!;

  const row = (r: ConsoleRow) => {
    const p = make('p', 'bcn-console__row');
    if (r.tone) p.dataset.tone = r.tone;
    if (r.sign !== undefined) p.append(make('span', 'bcn-console__sign', r.sign));
    p.append(make('span', 'bcn-console__t', r.text));
    if (r.meta) p.append(make('span', 'bcn-console__m', r.meta));
    p.title = r.meta ? `${r.text}  ${r.meta}` : r.text;
    return p;
  };

  const moreKey = (m: ConsoleMore) => {
    const host = (moreTpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
    host.classList.add('bcn-console__more');
    const label = host.querySelector('.esa-button__label');
    const text = m.open ? `Hide ${m.noun}` : (m.label ?? `Show ${m.count.toLocaleString('en-US')} ${m.noun}`);
    if (label) label.textContent = text;
    else host.textContent = text;
    const btn = host.matches('button') ? host : host.querySelector('button');
    btn?.setAttribute('aria-expanded', String(m.open));
    btn?.addEventListener('click', m.toggle);
    return host;
  };

  return {
    prompt(text: string) {
      const p = make('p', 'bcn-console__prompt');
      p.append(make('span', 'bcn-console__caret', '❯'), make('span', 'bcn-console__t', text));
      p.firstElementChild!.setAttribute('aria-hidden', 'true');
      return p;
    },

    tool(o: { name: string; arg?: string; state: ToolState; rows?: ConsoleRow[]; more?: ConsoleMore; tail?: ConsoleRow[] }) {
      const sec = make('section', 'bcn-console__tool');
      sec.dataset.state = o.state;
      const call = make('p', 'bcn-console__call');
      const dot = make('span', 'bcn-console__dot');
      dot.setAttribute('aria-hidden', 'true');
      call.append(dot, make('b', 'bcn-console__name', o.name));
      if (o.arg) call.append(make('span', 'bcn-console__arg', o.arg));
      sec.append(call);
      const rows = o.rows ?? [];
      const tail = o.tail ?? [];
      if (rows.length || tail.length || o.more) {
        const out = make('div', 'bcn-console__out');
        out.append(...rows.map(row));
        if (o.more && o.more.count > 0) out.append(moreKey(o.more));
        out.append(...tail.map(row));
        sec.append(out);
      }
      return sec;
    },

    spinner(o: { frame: number; verb: string; meta: string[] }) {
      const p = make('p', 'bcn-console__spin');
      const g = make('span', 'bcn-console__glyph', SPIN[o.frame % SPIN.length]);
      g.setAttribute('aria-hidden', 'true');
      p.append(g, make('span', 'bcn-console__verb', `${o.verb}…`), ...o.meta.map((m) => make('span', 'bcn-console__m', m)));
      return p;
    },

    todo(items: { text: string; state: 'done' | 'active' | 'pending' }[]) {
      const ul = make('ul', 'bcn-console__todo');
      ul.setAttribute('aria-label', 'Stages');
      for (const it of items) {
        const li = make('li', 'bcn-console__item');
        li.dataset.state = it.state;
        const box = make('span', 'bcn-console__box');
        box.setAttribute('aria-hidden', 'true');
        li.append(box, make('span', 'bcn-console__t', it.text));
        if (it.state === 'done') li.setAttribute('aria-label', `${it.text}, done`);
        ul.append(li);
      }
      return ul;
    },

    message(text: string, rows: ConsoleRow[] = []) {
      const sec = make('section', 'bcn-console__tool bcn-console__msg');
      sec.dataset.state = 'done';
      const call = make('p', 'bcn-console__call');
      const dot = make('span', 'bcn-console__dot');
      dot.setAttribute('aria-hidden', 'true');
      call.append(dot, make('span', 'bcn-console__said', text));
      sec.append(call);
      if (rows.length) {
        const out = make('div', 'bcn-console__out');
        out.append(...rows.map(row));
        sec.append(out);
      }
      return sec;
    },

    /** Repaint the log; follow its newest line unless the reader scrolled up. */
    paint(nodes: Node[]) {
      const stick = body.scrollTop + body.clientHeight >= body.scrollHeight - 12;
      body.replaceChildren(...nodes);
      if (stick) body.scrollTop = body.scrollHeight;
    },
  };
}
