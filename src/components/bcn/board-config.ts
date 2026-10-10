// The Configure board dialog's controller (markup + templates in
// BcnBoardConfigDialog.astro). It edits a DRAFT of the project's whole workflow set
// and only touches the store on Save, so Cancel, the X and Escape all mean "nothing
// happened".

import { CATEGORIES, type BoardColumn, type StatusCategory, type Workflow } from '../../data/action-status';
import {
  CARD_FIELDS,
  componentImpls,
  defaultWorkflows,
  initActionStore,
  replaceWorkflows,
  resolveColumn,
  setCardFields,
  type CardField,
} from '../../lib/action-board';

type Opt = { value: string; label: string };
type SelectEl = HTMLElement & { options: Opt[]; value: string };
type FieldEl = HTMLElement & { value: string };
type GroupEl = HTMLElement & { options: Opt[]; value: string[] };
type SwitchEl = HTMLElement & { checked: boolean };

const DEFAULT_NAME: Record<StatusCategory, string> = { NotStarted: 'Not Started', InProgress: 'In Progress', Completed: 'Completed' };
let seq = 0;
const newId = (prefix: string) => `${prefix}-n${Date.now().toString(36)}${(seq++).toString(36)}`;

export function setupBoardConfig(dialog: HTMLElement & { open?: boolean }) {
  const store = initActionStore();
  const types = JSON.parse(dialog.dataset.types || '[]') as Opt[];
  const meta = JSON.parse(dialog.dataset.categoryMeta || '{}') as Record<StatusCategory, { label: string; tone: string }>;
  const q = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = dialog) => root.querySelector<T>(sel)!;
  const tpl = (sel: string) => (q<HTMLTemplateElement>(sel).content.firstElementChild as HTMLElement);

  const picker = q<SelectEl>('[data-bcfg-workflow]');
  const nameEl = q<FieldEl>('[data-bcfg-name]');
  const typesEl = q<GroupEl>('[data-bcfg-types]');
  const preview = q('[data-bcfg-preview]');
  const cardSwitches = [...dialog.querySelectorAll<SwitchEl>('[data-bcfg-card]')];

  let drafts: Workflow[] = [];
  let moves: Record<string, string> = {};
  let fresh = new Set<string>();
  let currentId = '';
  let cards = { ...store.cardFields };

  const current = () => drafts.find((w) => w.id === currentId)!;

  /* ── Counts: where the active component's work would sit under the draft ── */
  const follow = (id: string) => {
    const seen = new Set<string>();
    while (moves[id] && !seen.has(id)) {
      seen.add(id);
      id = moves[id];
    }
    return id;
  };
  const placed = (wf: Workflow) => {
    const out = new Map<string, { id: string; name: string; due: string }[]>(wf.columns.map((c) => [c.id, []]));
    for (const i of componentImpls()) {
      if (!wf.types.includes(i.type)) continue;
      const c = resolveColumn(wf, follow(i.columnId), i.category);
      out.get(c.id)?.push({ id: i.id, name: i.name, due: i.dueDate ?? '9999' });
    }
    for (const list of out.values()) list.sort((a, b) => a.due.localeCompare(b.due));
    return out;
  };

  /* ── Render ──────────────────────────────────────────────────────────── */
  const fillPicker = () => {
    picker.options = drafts.map((w) => ({ value: w.id, label: w.name || 'Untitled workflow' }));
    picker.value = currentId;
  };

  const fillTypes = () => {
    typesEl.options = types.map((t) => {
      const holder = drafts.find((w) => w.id !== currentId && w.types.includes(t.value as never));
      return { value: t.value, label: holder ? `${t.label} (in ${holder.name || 'Untitled workflow'})` : t.label };
    });
    typesEl.value = [...current().types];
  };

  const renderPreview = (where = placed(current())) => {
    const frag = document.createDocumentFragment();
    for (const c of current().columns) {
      const col = tpl('[data-bcfg-pcol-tpl]').cloneNode(true) as HTMLElement;
      if (fresh.has(c.id)) col.dataset.new = '';
      q('[data-bcfg-pdot]', col).style.background = meta[c.category].tone;
      q('[data-bcfg-pname]', col).textContent = c.name || 'Untitled column';
      const items = where.get(c.id) ?? [];
      q('[data-bcfg-pcount]', col).textContent = String(items.length);
      const list = q('[data-bcfg-plist]', col);
      for (const it of items.slice(0, 4)) {
        const stub = tpl('[data-bcfg-stub-tpl]').cloneNode(true) as HTMLElement;
        stub.textContent = it.name;
        stub.title = it.name;
        list.append(stub);
      }
      if (items.length > 4) {
        const more = tpl('[data-bcfg-more-tpl]').cloneNode(true) as HTMLElement;
        more.textContent = `+${items.length - 4} more`;
        list.append(more);
      }
      frag.append(col);
    }
    preview.replaceChildren(frag);
  };

  const renderBars = () => {
    const wf = current();
    const where = placed(wf);
    for (const cat of CATEGORIES) {
      const host = q(`[data-bcfg-cat="${cat}"] [data-bcfg-bars]`);
      const cols = wf.columns.filter((c) => c.category === cat);
      host.replaceChildren(...cols.map((c) => bar(c, cols.length === 1, where.get(c.id)?.length ?? 0)));
    }
    renderPreview(where);
  };

  const bar = (c: BoardColumn, onlyOne: boolean, n: number): HTMLElement => {
    const el = tpl('[data-bcfg-bar-tpl]').cloneNode(true) as HTMLElement;
    el.dataset.colId = c.id;
    const field = q<FieldEl>('[data-bcfg-colname]', el);
    customElements.whenDefined('esa-text-field').then(() => (field.value = c.name));
    field.setAttribute('aria-label', `${meta[c.category].label} column name`);
    field.addEventListener('change', (e) => {
      c.name = String((e as CustomEvent).detail?.value ?? field.value ?? '');
      renderPreview();
    });
    q('[data-bcfg-n]', el).textContent = String(n);
    q('[data-bcfg-n]', el).title = `${n} on this component`;

    const remove = q('[data-bcfg-remove]', el);
    const btn = remove.querySelector('button');
    if (onlyOne && btn) {
      btn.disabled = true;
      btn.title = `${meta[c.category].label} needs at least one column`;
    }
    remove.addEventListener('click', () => {
      if (onlyOne) return;
      if (!n) return dropColumn(c.id);
      // Work in it: ask where it goes before letting go.
      const panel = q('[data-bcfg-move]', el);
      const to = q<SelectEl>('[data-bcfg-move-to]', el);
      const others = current().columns.filter((x) => x.id !== c.id);
      to.setAttribute('label', `Move its ${n} ${n === 1 ? 'action' : 'actions'} to`);
      to.options = others.map((x) => ({ value: x.id, label: `${x.name || 'Untitled column'} (${meta[x.category].label})` }));
      to.value = (others.find((x) => x.category === c.category) ?? others[0]).id;
      panel.hidden = false;
    });
    q('[data-bcfg-move-cancel]', el).addEventListener('click', () => (q('[data-bcfg-move]', el).hidden = true));
    q('[data-bcfg-move-ok]', el).addEventListener('click', () => {
      const to = q<SelectEl>('[data-bcfg-move-to]', el).value;
      if (to) moves[c.id] = to;
      dropColumn(c.id);
    });

    wireGrip(el, c);
    return el;
  };

  const dropColumn = (id: string) => {
    const wf = current();
    wf.columns = wf.columns.filter((c) => c.id !== id);
    fresh.delete(id);
    renderBars();
  };

  /* ── Reorder inside a category: pointer drag on the grip, or arrow keys ─ */
  const commitOrder = (cat: StatusCategory) => {
    const host = q(`[data-bcfg-cat="${cat}"] [data-bcfg-bars]`);
    const order = [...host.querySelectorAll<HTMLElement>('[data-bcfg-bar]')].map((b) => b.dataset.colId!);
    const wf = current();
    const byId = new Map(wf.columns.map((c) => [c.id, c]));
    // Rebuild in backbone order so the board always reads through the lifecycle.
    wf.columns = CATEGORIES.flatMap((k) =>
      k === cat ? order.map((id) => byId.get(id)!) : wf.columns.filter((c) => c.category === k),
    );
    renderPreview();
  };

  const wireGrip = (el: HTMLElement, c: BoardColumn) => {
    const grip = q('[data-bcfg-grip]', el);
    grip.setAttribute('aria-label', `Reorder ${c.name || 'column'}`);
    grip.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
      e.preventDefault();
      const sib = e.key === 'ArrowUp' ? el.previousElementSibling : el.nextElementSibling;
      if (!sib) return;
      if (e.key === 'ArrowUp') sib.before(el);
      else sib.after(el);
      grip.focus();
      commitOrder(c.category);
    });
    grip.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      grip.setPointerCapture(e.pointerId);
      el.dataset.dragging = '';
      const host = el.parentElement!;
      const move = (ev: PointerEvent) => {
        for (const sib of host.querySelectorAll<HTMLElement>('[data-bcfg-bar]')) {
          if (sib === el) continue;
          const r = sib.getBoundingClientRect();
          if (ev.clientY > r.top && ev.clientY < r.bottom) {
            if (ev.clientY < r.top + r.height / 2) sib.before(el);
            else sib.after(el);
            break;
          }
        }
      };
      const up = () => {
        delete el.dataset.dragging;
        grip.removeEventListener('pointermove', move);
        grip.removeEventListener('pointerup', up);
        grip.removeEventListener('pointercancel', up);
        commitOrder(c.category);
      };
      grip.addEventListener('pointermove', move);
      grip.addEventListener('pointerup', up);
      grip.addEventListener('pointercancel', up);
    });
  };

  /* ── Selecting / creating workflows ─────────────────────────────────── */
  const show = (id: string) => {
    currentId = id;
    fillPicker();
    nameEl.value = current().name;
    fillTypes();
    renderBars();
    const del = q('[data-bcfg-delete-wf] button') as HTMLButtonElement | null;
    if (del) del.disabled = drafts.length < 2;
  };

  picker.addEventListener('change', (e) => {
    const id = String((e as CustomEvent).detail?.value ?? '');
    if (id && id !== currentId) show(id);
  });
  nameEl.addEventListener('change', (e) => {
    current().name = String((e as CustomEvent).detail?.value ?? nameEl.value ?? '');
    fillPicker();
  });
  typesEl.addEventListener('change', (e) => {
    const next = ((e as CustomEvent).detail?.value as string[]) ?? [];
    current().types = next as never[];
    // A type belongs to one workflow: claiming it here releases it there.
    for (const w of drafts) if (w.id !== currentId) w.types = w.types.filter((t) => !next.includes(t));
    fillTypes();
    renderBars();
  });

  for (const cat of CATEGORIES) {
    q(`[data-bcfg-add="${cat}"]`).addEventListener('click', () => {
      const wf = current();
      const c: BoardColumn = { id: newId(wf.id), name: '', category: cat };
      const last = wf.columns.map((x) => x.category).lastIndexOf(cat);
      wf.columns.splice(last + 1, 0, c);
      fresh.add(c.id);
      renderBars();
      requestAnimationFrame(() => q<HTMLElement>(`[data-col-id="${c.id}"] [data-bcfg-colname]`).focus());
    });
  }

  q('[data-bcfg-new]').addEventListener('click', () => {
    const id = newId('wf');
    drafts.push({
      id,
      name: 'New workflow',
      types: [],
      columns: CATEGORIES.map((cat) => ({ id: newId(id), name: DEFAULT_NAME[cat], category: cat })),
    });
    show(id);
    requestAnimationFrame(() => nameEl.focus());
  });

  q('[data-bcfg-delete-wf]').addEventListener('click', () => {
    if (drafts.length < 2) return;
    drafts = drafts.filter((w) => w.id !== currentId);
    show(drafts[0].id);
  });

  q('[data-bcfg-restore]').addEventListener('click', () => {
    drafts = defaultWorkflows();
    moves = {};
    fresh = new Set();
    show(drafts.find((w) => w.id === currentId)?.id ?? drafts[0].id);
  });

  cardSwitches.forEach((sw) =>
    sw.addEventListener('change', () => (cards = { ...cards, [sw.dataset.bcfgCard as CardField]: !!sw.checked })),
  );

  /* ── Open / save / cancel ───────────────────────────────────────────── */
  const close = () => {
    dialog.open = false;
  };

  document.addEventListener('actions:configure', (e) => {
    drafts = structuredClone(store.workflows);
    moves = {};
    fresh = new Set();
    cards = { ...store.cardFields };
    const want = (e as CustomEvent).detail?.workflowId as string | undefined;
    Promise.all(['esa-select', 'esa-text-field', 'esa-checkbox-group', 'esa-switch-toggle'].map((t) => customElements.whenDefined(t))).then(() => {
      cardSwitches.forEach((sw) => (sw.checked = !!cards[sw.dataset.bcfgCard as CardField]));
      show(drafts.find((w) => w.id === want)?.id ?? drafts[0].id);
      dialog.open = true;
    });
  });

  q('[data-bcfg-cancel]').addEventListener('click', close);
  q('[data-bcfg-save]').addEventListener('click', () => {
    for (const w of drafts) {
      w.name = w.name.trim() || 'Untitled workflow';
      for (const c of w.columns) c.name = c.name.trim() || 'Untitled column';
    }
    replaceWorkflows(drafts, moves);
    setCardFields(cards);
    close();
  });
}

