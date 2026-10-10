// Controller for <BcnImplementationDialog> — the Actions page's action-implementation
// dialog. ONE pre-rendered shell; this fills it from the client store each time a view
// dispatches OPEN_EVENT, and writes back only the fields the user changed on Save.
//
// Variable-length markup (requirement collapsibles, list links, the status options,
// the change log) is CLONED from <template>s the .astro file renders, so every node
// keeps its component's scoped-CSS attribute. Nothing here builds markup from strings.
//
// Imports only the light modules: the ITP-backed fixture (action-tracking.ts) must stay
// out of the client bundle. Label maps and the assignee roster arrive as JSON on the
// root's data-config, rendered from the fixture at build time.

import {
  ACTIONS_TODAY,
  CATEGORIES,
  CATEGORY_META,
  epochDay,
  fmtDate,
  isoOf,
  type BoardColumn,
} from '../../data/action-status';
import { initActionStore, implById, updateImpl, OPEN_EVENT, type ImplPatch, type ResolvedImpl } from '../../lib/action-board';
import { setupStatusSelect, type StatusSelectController } from './status-select';
import { setupEvidenceList } from './evidence-list';

interface DialogConfig {
  typeLabel: Record<string, string>;
  frequencyLabel: Record<string, string>;
  assignees: string[];
  listBase: string;
  actionBase: string;
}

type DialogEl = HTMLElement & { open: boolean; showCloseButton: boolean };
type TabsEl = HTMLElement & { activeIndex: number };
type ValueEl = HTMLElement & { value: string };
type ComboEl = HTMLElement & { value: string | string[]; options: { value: string; label: string }[] };
type SwitchEl = HTMLElement & { checked: boolean };

/** FNV-1a: the change log's invented dates and actors hang off the implementation id. */
const hash = (s: string): number => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x01000193);
  return h >>> 0;
};

const clockOf = (h: number): string => {
  const hr = 8 + (h % 9); // 8 AM to 4 PM
  const min = String((h >>> 4) % 60).padStart(2, '0');
  return `${hr > 12 ? hr - 12 : hr}:${min} ${hr >= 12 ? 'PM' : 'AM'}`;
};

interface LogEvent { day: number; text: string; emphasis?: string; by: string }

export function setupImplementationDialog(root: HTMLElement): void {
  const cfg = JSON.parse(root.dataset.config || '{}') as DialogConfig;
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const tpl = (name: string) => q<HTMLTemplateElement>(`template[data-aid-tpl="${name}"]`).content;
  const cloneTpl = <T extends Element = HTMLElement>(name: string) => tpl(name).firstElementChild!.cloneNode(true) as T;

  initActionStore();

  const dialog = q<DialogEl>('esa-dialog');
  dialog.showCloseButton = false;
  const tabs = q<TabsEl>('esa-tab-layout');

  // The seed (pre-override) values: "Revert to Original" and the due-date reset read them.
  let seed: Map<string, { text: string; dueDate: string | null }> | null = null;
  const seedOf = (id: string) => {
    if (!seed) {
      const raw = document.getElementById('actions-data')?.textContent || '{}';
      const list = (JSON.parse(raw).implementations ?? []) as { id: string; text: string; dueDate: string | null }[];
      seed = new Map(list.map((i) => [i.id, { text: i.text, dueDate: i.dueDate }]));
    }
    return seed.get(id);
  };

  /* ── Fields ─────────────────────────────────────────────────────────── */

  const setText = (sel: string, text: string) => (q(sel).textContent = text);
  /** A BcnKeyValue host: fill its value span; empty → prod's italic "None". */
  const setKv = (key: string, value: string | null | undefined, empty = 'None') => {
    const host = q(`[data-aid-kv="${key}"]`);
    const val = host.querySelector('.bcn-key-value__val');
    if (val) val.textContent = value || empty;
    host.toggleAttribute('data-empty', !value);
  };

  const assignee = q<ComboEl>('#aid-assignee');
  assignee.options = [{ value: '', label: 'Unassigned' }, ...cfg.assignees.map((a) => ({ value: a, label: a }))];
  const notApplicable = q<SwitchEl>('#aid-na');
  const textInput = q<ValueEl>('#aid-text-input');
  const dueInput = q<ValueEl>('#aid-due-input');

  /* ── Working state (committed to the store only on Save) ────────────── */

  let impl: ResolvedImpl | null = null;
  let status: StatusSelectController | null = null;
  let text = '';
  let textBeforeEdit = '';
  let due: string | null = null;

  /* ── Summary (action text override) ─────────────────────────────────── */

  const paintText = () => {
    setText('#aid-text', text);
    const original = impl ? seedOf(impl.id)?.text ?? impl.text : text;
    q('#aid-text-notice').hidden = text === original;
    q('#aid-text-revert').closest<HTMLElement>('.esa-button')!.hidden = text === original;
  };
  const editText = (on: boolean) => {
    q('#aid-text-view').hidden = on;
    q('#aid-text-editor').hidden = !on;
    q('#aid-text-edit').closest<HTMLElement>('.esa-button')!.hidden = on;
    if (on) {
      textBeforeEdit = text;
      textInput.value = text;
    }
  };
  q('#aid-text-edit').addEventListener('click', () => editText(true));
  q('#aid-text-cancel').addEventListener('click', () => {
    text = textBeforeEdit;
    editText(false);
    paintText();
  });
  q('#aid-text-done').addEventListener('click', () => {
    text = textInput.value.trim() || textBeforeEdit;
    editText(false);
    paintText();
  });
  q('#aid-text-revert').addEventListener('click', () => {
    if (!impl) return;
    text = seedOf(impl.id)?.text ?? impl.text;
    textInput.value = text;
    paintText();
  });

  /* ── Due date ───────────────────────────────────────────────────────── */

  const paintDue = () => {
    const shown = q('#aid-due-value');
    shown.textContent = due ? fmtDate(due) : 'Not set';
    shown.toggleAttribute('data-empty', !due);
    const original = impl ? seedOf(impl.id)?.dueDate ?? null : null;
    const reset = q('#aid-due-reset').closest<HTMLElement>('.esa-button')!;
    reset.hidden = !original || due === original;
    q('#aid-due-original').hidden = reset.hidden;
    setText('#aid-due-original', original ? `(${fmtDate(original)})` : '');
  };
  const editDue = (on: boolean) => {
    q('#aid-due-view').hidden = on;
    dueInput.hidden = !on;
    if (on) dueInput.value = due ?? '';
  };
  q('#aid-due-edit').addEventListener('click', () => editDue(true));
  dueInput.addEventListener('change', () => {
    due = dueInput.value || null;
    paintDue();
  });
  q('#aid-due-reset').addEventListener('click', () => {
    if (!impl) return;
    due = seedOf(impl.id)?.dueDate ?? null;
    paintDue();
  });

  /* ── Status: the implementation's WORKFLOW columns, grouped by backbone ── */

  function mountStatus(columns: BoardColumn[], current: string) {
    const mount = q('#aid-status');
    const select = cloneTpl('status');
    const menu = select.querySelector<HTMLElement>('.bcn-status-select__menu')!;
    const proto = menu.querySelector<HTMLLIElement>('.bcn-status-select__opt')!;
    proto.remove();
    for (const cat of CATEGORIES) {
      const run = columns.filter((c) => c.category === cat);
      if (!run.length) continue;
      const group = cloneTpl('status-group');
      const label = group.querySelector<HTMLElement>('[data-aid-group-label]')!;
      label.textContent = CATEGORY_META[cat].label;
      label.id = `aid-status-group-${cat}`;
      group.setAttribute('aria-labelledby', label.id);
      const list = group.querySelector<HTMLElement>('[data-aid-group-list]')!;
      for (const col of run) {
        const opt = proto.cloneNode(true) as HTMLLIElement;
        const dot = opt.querySelector<HTMLElement>('.bcn-status-select__dot')!;
        dot.style.background = CATEGORY_META[cat].tone;
        opt.dataset.value = col.id;
        opt.dataset.label = col.name;
        opt.dataset.color = CATEGORY_META[cat].tone;
        opt.setAttribute('aria-selected', String(col.id === current));
        opt.replaceChildren(dot, document.createTextNode(col.name));
        list.append(opt);
      }
      menu.append(group);
    }
    select.dataset.value = current;
    mount.replaceChildren(select);
    status = setupStatusSelect(select);
  }

  /* ── Referenced requirements ────────────────────────────────────────── */

  function paintRequirements(i: ResolvedImpl) {
    const list = q('#aid-requirements');
    list.replaceChildren();
    q('#aid-requirements-none').hidden = i.requirements.length > 0;
    for (const r of i.requirements) {
      const block = cloneTpl('requirement');
      block.querySelector('.esa-collapsible__title')!.textContent = r.name;
      if (r.code) {
        const badge = cloneTpl('code');
        badge.textContent = r.code;
        block.querySelector('.esa-collapsible__summary')!.append(badge);
      }
      block.querySelector('[data-aid-req-text]')!.textContent = r.text;
      const kv = (key: string, value: string) => {
        const cell = block.querySelector<HTMLElement>(`[data-aid-req-kv="${key}"]`)!;
        cell.querySelector('.bcn-key-value__val')!.textContent = value || 'None';
        cell.toggleAttribute('data-empty', !value);
      };
      kv('phases', r.phases.join(', '));
      kv('scope', r.scope);
      kv('activities', r.activities.join(', '));
      list.append(block);
    }
  }

  /* ── Evidence (the fixture carries a count; the pool shows that many) ── */

  setupEvidenceList(q('.bcn-evidence-list'));
  function paintEvidence(n: number) {
    const cards = [...root.querySelectorAll<HTMLElement>('.bcn-evidence-card')];
    cards.forEach((c, k) => (c.hidden = k >= n));
    q('#aid-eoc-list').hidden = n === 0;
    q('#aid-eoc-empty').hidden = n > 0;
    const zip = q<HTMLButtonElement>('#aid-eoc-zip');
    zip.disabled = n === 0;
    zip.closest('.esa-button')!.classList.toggle('esa-button--disabled', n === 0);
  }
  const askEvidence = (mode: 'drawer' | 'new' | 'existing') => {
    if (impl) document.dispatchEvent(new CustomEvent('actions:add-evidence', { detail: { id: impl.id, mode } }));
  };
  q('#aid-eoc-add').addEventListener('click', () => askEvidence('drawer'));
  q('#aid-eoc-new').addEventListener('click', () => askEvidence('new'));
  q('#aid-eoc-existing').addEventListener('click', () => askEvidence('existing'));
  // BcnEvidenceList's own Add New / Add Existing row, in that order.
  const [listNew, listExisting] = q('#aid-eoc-list').querySelectorAll<HTMLElement>('.bcn-evidence-list__row-actions button');
  listNew?.addEventListener('click', () => askEvidence('new'));
  listExisting?.addEventListener('click', () => askEvidence('existing'));

  /* ── Lists ──────────────────────────────────────────────────────────── */

  function paintLists(i: ResolvedImpl) {
    const host = q('#aid-lists');
    host.replaceChildren(
      ...i.lists.map((l) => {
        const a = cloneTpl<HTMLAnchorElement>('list');
        a.href = `${cfg.listBase}${l.id}`;
        a.textContent = l.name;
        return a;
      }),
    );
    q('#aid-lists-section').hidden = i.lists.length === 0;
  }

  /* ── Change log (invented, deterministic per implementation) ─────────── */

  function paintChangeLog(i: ResolvedImpl) {
    const h = hash(i.id);
    const today = epochDay(ACTIONS_TODAY);
    const created = today - 60 - (h % 120);
    const actor = (k: number) => cfg.assignees[(h >>> k) % cfg.assignees.length];
    const events: LogEvent[] = [{ day: created, text: 'Implementation created', by: 'System · 12:00 AM' }];
    const setup = created + 1 + ((h >>> 3) % 6);
    if (i.assignee) events.push({ day: setup, text: 'Assignee set to', emphasis: i.assignee, by: `${actor(5)} · ${clockOf(h >>> 2)}` });
    if (i.dueDate) events.push({ day: setup, text: 'Due date set to', emphasis: fmtDate(i.dueDate), by: `${actor(5)} · ${clockOf(h >>> 6)}` });
    if (i.column.id !== i.workflow.columns[0]?.id) {
      const moved = Math.min(today - 1, setup + 7 + ((h >>> 9) % 40));
      events.push({ day: moved, text: 'Status set to', emphasis: i.column.name, by: `${i.assignee ?? actor(11)} · ${clockOf(h >>> 10)}` });
    }
    if (i.notApplicable) events.push({ day: Math.min(today - 1, setup + 3), text: 'Marked', emphasis: 'Not Applicable', by: `${actor(13)} · ${clockOf(h >>> 14)}` });

    const log = cloneTpl('log');
    const dayProto = log.querySelector<HTMLElement>('.bcn-change-log__day')!;
    const eventProto = dayProto.querySelector<HTMLElement>('.bcn-change-log__event')!;
    const strongProto = eventProto.querySelector('strong')!;
    dayProto.remove();
    const days = [...new Set(events.map((e) => e.day))].sort((a, b) => b - a);
    for (const d of days) {
      const day = dayProto.cloneNode(true) as HTMLElement;
      day.querySelector('.bcn-change-log__date')!.textContent = fmtDate(isoOf(d));
      const list = day.querySelector<HTMLElement>('.bcn-change-log__events')!;
      list.replaceChildren(
        ...events
          .filter((e) => e.day === d)
          .reverse()
          .map((e) => {
            const row = eventProto.cloneNode(true) as HTMLElement;
            const line = row.querySelector<HTMLElement>('.bcn-change-log__text')!;
            const parts: Node[] = [document.createTextNode(e.emphasis ? `${e.text} ` : e.text)];
            if (e.emphasis) {
              const strong = strongProto.cloneNode() as HTMLElement;
              strong.textContent = e.emphasis;
              parts.push(strong);
            }
            line.replaceChildren(...parts);
            row.querySelector('.bcn-change-log__by')!.textContent = e.by;
            return row;
          }),
      );
      log.append(day);
    }
    q('#aid-log').replaceChildren(log);
  }

  /* ── Discussion: the pre-rendered thread whose length matches ───────── */

  function paintDiscussion(n: number) {
    const threads = [...root.querySelectorAll<HTMLElement>('[data-aid-thread]')];
    const max = threads.length - 1;
    const pick = Math.min(n, max);
    threads.forEach((t) => (t.hidden = Number(t.dataset.aidThread) !== pick));
  }

  /* ── Open / save / close ────────────────────────────────────────────── */

  function open(id: string) {
    const i = implById(id);
    if (!i) return;
    impl = i;
    text = i.text;
    due = i.dueDate;

    setText('#aid-component', i.componentName);
    let marked = false;
    document.querySelectorAll<HTMLElement>('[data-aid-mark]').forEach((m) => {
      m.hidden = m.dataset.aidMark !== i.componentName;
      marked ||= !m.hidden;
    });
    q('#aid-scope-glyph').hidden = marked;
    setText('#aid-title', i.name);
    q('#aid-type .esa-badge__text').textContent = cfg.typeLabel[i.type] ?? i.type;
    q<HTMLAnchorElement>('#aid-edit-action').href = `${cfg.actionBase}${i.actionId}`;

    editText(false);
    paintText();
    paintRequirements(i);
    setText('#aid-eoc-expected', i.expectedEvidence || '');
    q('#aid-eoc-expected').hidden = !i.expectedEvidence;
    paintEvidence(i.evidence);

    mountStatus(i.workflow.columns, i.column.id);
    setKv('scope', i.componentName);
    setKv('activities', i.activities.join(', '));
    setKv('responsible', i.responsibleParty);
    assignee.value = i.assignee ?? '';
    notApplicable.checked = i.notApplicable;
    paintLists(i);

    const recurs = i.frequency === 'Recurring' || i.frequency === 'AsNeeded';
    const freq = cfg.frequencyLabel[i.frequency] ?? i.frequency;
    setKv('frequency', recurs ? `${freq} #${i.sequence}` : freq);
    setKv('milestone', i.milestone);
    q('[data-aid-kv="milestone"]').hidden = !i.milestone;
    editDue(false);
    paintDue();
    paintChangeLog(i);

    paintDiscussion(i.comments);
    tabs.activeIndex = 0;
    dialog.open = true;
  }

  function save() {
    if (!impl) return;
    const patch: ImplPatch = {};
    const colId = status?.value ?? impl.column.id;
    if (colId !== impl.column.id) {
      const col = impl.workflow.columns.find((c) => c.id === colId);
      if (col) {
        patch.columnId = col.id;
        patch.category = col.category;
        if (col.category === 'Completed' && impl.category !== 'Completed') patch.completedDate = ACTIONS_TODAY;
        if (col.category !== 'Completed' && impl.completedDate) patch.completedDate = null;
      }
    }
    const who = (assignee.value as string) || null;
    if (who !== impl.assignee) patch.assignee = who;
    if (due !== impl.dueDate) patch.dueDate = due;
    if (notApplicable.checked !== impl.notApplicable) patch.notApplicable = notApplicable.checked;
    if (text !== impl.text) patch.text = text;
    if (Object.keys(patch).length) updateImpl(impl.id, patch);
    dialog.open = false;
  }

  const close = () => (dialog.open = false);
  q('#aid-close').addEventListener('click', close);
  q('#aid-cancel').addEventListener('click', close);
  q('#aid-save').addEventListener('click', save);
  // Esc and light dismiss land here too: whatever was edited is simply dropped.
  dialog.addEventListener('close', () => (impl = null));

  document.addEventListener(OPEN_EVENT, (e) => {
    const id = (e as CustomEvent<{ id: string }>).detail?.id;
    if (id) open(id);
  });
}
