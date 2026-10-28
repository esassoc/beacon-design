// <BcnPlanListEditor>'s runtime (2026-10-28): an ordered list of names, edited in place. listEditor(root, ...) fills the
// list from `values` and reports every change through `onChange` with the whole new list, and, for a rename or a
// removal, which entry it was (the settings page carries a renamed document type into the levels that offer it).

import { flip, sortable } from './plan-sortable';
import { fillIcons } from '../../lib/planning/icons';

type FieldEl = HTMLElement & { value: string; errorText: string; disabled: boolean };

/** An esa-button turned on or off at runtime: the native button, and the wrapper that dims it and stops the pointer. */
export function setEsaButtonDisabled(btn: HTMLButtonElement | null | undefined, disabled: boolean): void {
  if (!btn) return;
  btn.disabled = disabled;
  btn.closest('.esa-button')?.classList.toggle('esa-button--disabled', disabled);
}

export interface ListChange {
  renamed?: { from: string; to: string };
  removed?: string;
  added?: string;
}

export interface ListEditor {
  set(values: string[]): void;
  get(): string[];
  setReadOnly(readOnly: boolean): void;
}

export function listEditor(root: HTMLElement, opts: { values: string[]; onChange: (values: string[], change: ListChange) => void; readOnly?: boolean; layer?: () => HTMLElement }): ListEditor {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const list = q('[data-ple-list]');
  const tpl = q<HTMLTemplateElement>('template[data-ple-tpl]');
  const input = q<FieldEl>('[data-ple-new]');
  const empty = q('[data-ple-empty]');
  const noun = root.dataset.noun ?? 'Entry';
  let values = [...opts.values];
  let readOnly = !!opts.readOnly;

  const taken = (name: string, except?: string) => values.some((v) => v.toLowerCase() === name.toLowerCase() && v !== except);
  const emit = (change: ListChange) => opts.onChange([...values], change);

  function draw(): void {
    list.replaceChildren(
      ...values.map((value, i) => {
        const row = tpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
        row.dataset.value = value;
        row.querySelector('[data-ple-name]')!.textContent = value;
        const field = row.querySelector<FieldEl>('[data-ple-field]')!;
        field.setAttribute('aria-label', `Rename ${value}`);
        return row;
      })
    );
    fillIcons(list);
    syncEnds();
    empty.hidden = values.length > 0;
    root.toggleAttribute('data-readonly', readOnly);
  }
  /** The first row can't go up, the last can't go down. */
  function syncEnds(): void {
    const rows = [...list.querySelectorAll<HTMLElement>('[data-ple-row]')];
    rows.forEach((row, i) => {
      const up = row.querySelector<HTMLButtonElement>('[data-ple-act="up"] button');
      const down = row.querySelector<HTMLButtonElement>('[data-ple-act="down"] button');
      setEsaButtonDisabled(up, i === 0);
      setEsaButtonDisabled(down, i === rows.length - 1);
    });
  }

  function move(value: string, to: number): void {
    const from = values.indexOf(value);
    if (from < 0 || to < 0 || to >= values.length || to === from) return;
    const rows = [...list.querySelectorAll<HTMLElement>('[data-ple-row]')];
    flip(rows, () => {
      values.splice(from, 1);
      values.splice(to, 0, value);
      // Rows move rather than redraw, so the slide has something to slide.
      const row = rows[from];
      const others = rows.filter((r) => r !== row);
      list.insertBefore(row, others[to] ?? null);
    });
    syncEnds();
    emit({});
  }

  // ── Renaming in place: Enter or leaving the field keeps it, Escape puts it back. ──
  function rename(row: HTMLElement): void {
    const value = row.dataset.value ?? '';
    const name = row.querySelector<HTMLElement>('[data-ple-name]')!;
    const field = row.querySelector<FieldEl>('[data-ple-field]')!;
    const tools = row.querySelector<HTMLElement>('[data-ple-tools]')!;
    name.hidden = true;
    tools.hidden = true;
    field.hidden = false;
    field.value = value;
    field.errorText = '';
    requestAnimationFrame(() => field.focus());
    let done = false;
    const finish = (keep: boolean) => {
      if (done) return;
      const next = (field.value ?? '').trim();
      if (keep && next && next !== value) {
        if (taken(next, value)) {
          field.errorText = `${next} is already on the list.`;
          return;
        }
        done = true;
        values = values.map((v) => (v === value ? next : v));
        draw();
        emit({ renamed: { from: value, to: next } });
        list.querySelector<HTMLButtonElement>(`[data-ple-row][data-value="${CSS.escape(next)}"] [data-ple-act="rename"] button`)?.focus();
        return;
      }
      done = true;
      draw();
    };
    field.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        finish(true);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        finish(false);
      }
    });
    field.addEventListener('focusout', () => setTimeout(() => !field.matches(':focus-within') && finish(true), 0));
  }

  list.addEventListener('click', (e) => {
    if (readOnly) return;
    const act = (e.target as Element).closest<HTMLElement>('[data-ple-act]');
    const row = act?.closest<HTMLElement>('[data-ple-row]');
    if (!act || !row) return;
    const value = row.dataset.value ?? '';
    const at = values.indexOf(value);
    switch (act.dataset.pleAct) {
      case 'rename':
        rename(row);
        break;
      case 'up':
      case 'down': {
        move(value, act.dataset.pleAct === 'up' ? at - 1 : at + 1);
        // A moved row loses focus on the way; it comes back to the same button, or its twin at the end of the list.
        const same = row.querySelector<HTMLButtonElement>(`[data-ple-act="${act.dataset.pleAct}"] button`);
        const twin = row.querySelector<HTMLButtonElement>(`[data-ple-act="${act.dataset.pleAct === 'up' ? 'down' : 'up'}"] button`);
        (same && !same.disabled ? same : twin)?.focus();
        break;
      }
      case 'remove':
        values = values.filter((v) => v !== value);
        draw();
        emit({ removed: value });
        // Focus stays in the list: the next row's remove, or the add field.
        (list.querySelectorAll<HTMLElement>('[data-ple-act="remove"] button')[Math.min(at, values.length - 1)] ?? input).focus();
        break;
    }
  });
  // A double click on a name renames it too.
  list.addEventListener('dblclick', (e) => {
    const row = (e.target as Element).closest<HTMLElement>('[data-ple-row]');
    if (row && !readOnly && (e.target as Element).closest('[data-ple-name]')) rename(row);
  });

  // ── Adding ──
  function add(): void {
    const next = (input.value ?? '').trim();
    if (!next) {
      input.errorText = `Type a ${noun.toLowerCase()} to add.`;
      return;
    }
    if (taken(next)) {
      input.errorText = `${next} is already on the list.`;
      return;
    }
    values.push(next);
    input.value = '';
    input.errorText = '';
    draw();
    emit({ added: next });
    input.focus();
  }
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      add();
    }
  });
  input.addEventListener('input', () => (input.errorText = ''));
  q('[data-ple-add]').addEventListener('click', add);

  sortable(root, {
    lists: () => [list],
    row: '[data-ple-row]',
    grip: '[data-ple-grip]',
    disabled: () => readOnly,
    layer: opts.layer,
    onDrop: (row, _list, index) => move(row.dataset.value ?? '', index),
  });

  draw();
  return {
    set(next) {
      values = [...next];
      input.value = '';
      input.errorText = '';
      draw();
    },
    get: () => [...values],
    setReadOnly(next) {
      readOnly = next;
      draw();
    },
  };
}
