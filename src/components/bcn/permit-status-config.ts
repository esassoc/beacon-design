// The Configure statuses dialog's controller (markup + templates in
// BcnPermitStatusConfig.astro). board-config.ts's model applied to the permit store: it
// edits a DRAFT of the project's whole workflow set and only touches the store on Save,
// so Cancel, the X, Escape and the scrim all mean "nothing happened".

import {
  CATEGORIES,
  permitsOfProject,
  type PermitTypeId,
  type PermitWorkflow,
  type StatusCategory,
  type StatusColumn,
} from '../../data/permit-tracker';
import { defaultWorkflows, loadWorkflows, resetWorkflows, resolveStatus, saveWorkflows } from '../../lib/permit-status-store';
import { CONFIGURE_EVENT, placeIn, type ConfigureDetail } from './permit-board';

type Opt = { value: string; label: string };
type SelectEl = HTMLElement & { options: Opt[]; value: string };
type FieldEl = HTMLElement & { value: string };
type GroupEl = HTMLElement & { options: Opt[]; value: string[] };

const DEFAULT_NAME: Record<StatusCategory, string> = { NotStarted: 'Not Started', InProgress: 'In Progress', Completed: 'Issued' };
let seq = 0;
const newId = (prefix: string) => `${prefix}-n${Date.now().toString(36)}${(seq++).toString(36)}`;

export function setupPermitStatusConfig(dialog: HTMLElement & { open?: boolean }) {
  const projectId = dialog.dataset.projectId!;
  const types = JSON.parse(dialog.dataset.types || '[]') as Opt[];
  const meta = JSON.parse(dialog.dataset.categoryMeta || '{}') as Record<StatusCategory, { label: string; tone: string }>;
  const q = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = dialog) => root.querySelector<T>(sel)!;
  const tpl = (sel: string) => q<HTMLTemplateElement>(sel).content.firstElementChild as HTMLElement;

  const picker = q<SelectEl>('[data-pscfg-workflow]');
  const nameEl = q<FieldEl>('[data-pscfg-name]');
  const typesEl = q<GroupEl>('[data-pscfg-types]');
  const preview = q('[data-pscfg-preview]');
  const permits = permitsOfProject(projectId);

  let saved: PermitWorkflow[] = [];
  let drafts: PermitWorkflow[] = [];
  let moves: Record<string, string> = {};
  let fresh = new Set<string>();
  let resetPending = false;
  let currentId = '';

  const current = () => drafts.find((w) => w.id === currentId)!;

  /* ── Placement: where this project's permits would sit under the draft ── */
  const follow = (id: string) => {
    const seen = new Set<string>();
    while (moves[id] && !seen.has(id)) {
      seen.add(id);
      id = moves[id];
    }
    return id;
  };
  const placed = (wf: PermitWorkflow) => {
    const out = new Map<string, { name: string }[]>(wf.columns.map((c) => [c.id, []]));
    const all = drafts.flatMap((w) => w.columns);
    for (const p of permits) {
      if (!wf.types.includes(p.typeId)) continue;
      const now = resolveStatus(projectId, p);
      const id = follow(now.id);
      const col: StatusColumn = all.find((c) => c.id === id) ?? now;
      out.get(placeIn(wf, col).id)?.push({ name: p.name });
    }
    return out;
  };

  /* ── Render ──────────────────────────────────────────────────────────── */
  const fillPicker = () => {
    picker.options = drafts.map((w) => ({ value: w.id, label: w.name || 'Untitled workflow' }));
    picker.value = currentId;
  };

  const fillTypes = () => {
    typesEl.options = types.map((t) => {
      const holder = drafts.find((w) => w.id !== currentId && w.types.includes(t.value as PermitTypeId));
      return { value: t.value, label: holder ? `${t.label} (in ${holder.name || 'Untitled workflow'})` : t.label };
    });
    typesEl.value = [...current().types];
  };

  const renderPreview = (where = placed(current())) => {
    const frag = document.createDocumentFragment();
    for (const c of current().columns) {
      const col = tpl('[data-pscfg-pcol-tpl]').cloneNode(true) as HTMLElement;
      if (fresh.has(c.id)) col.dataset.new = '';
      q('[data-pscfg-pdot]', col).style.background = meta[c.category].tone;
      q('[data-pscfg-pname]', col).textContent = c.name || 'Untitled status';
      const items = where.get(c.id) ?? [];
      q('[data-pscfg-pcount]', col).textContent = String(items.length);
      const list = q('[data-pscfg-plist]', col);
      for (const it of items.slice(0, 4)) {
        const stub = tpl('[data-pscfg-stub-tpl]').cloneNode(true) as HTMLElement;
        stub.textContent = it.name;
        stub.title = it.name;
        list.append(stub);
      }
      if (items.length > 4) {
        const more = tpl('[data-pscfg-more-tpl]').cloneNode(true) as HTMLElement;
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
      const host = q(`[data-pscfg-cat="${cat}"] [data-pscfg-bars]`);
      const cols = wf.columns.filter((c) => c.category === cat);
      host.replaceChildren(...cols.map((c) => bar(c, cols.length === 1, where.get(c.id)?.length ?? 0)));
    }
    renderPreview(where);
  };

  const bar = (c: StatusColumn, onlyOne: boolean, n: number): HTMLElement => {
    const el = tpl('[data-pscfg-bar-tpl]').cloneNode(true) as HTMLElement;
    el.dataset.colId = c.id;
    const field = q<FieldEl>('[data-pscfg-colname]', el);
    customElements.whenDefined('esa-text-field').then(() => (field.value = c.name));
    field.setAttribute('aria-label', `${meta[c.category].label} status name`);
    field.addEventListener('change', (e) => {
      c.name = String((e as CustomEvent).detail?.value ?? field.value ?? '');
      renderPreview();
    });
    q('[data-pscfg-n]', el).textContent = String(n);
    q('[data-pscfg-n]', el).title = `${n} ${n === 1 ? 'permit' : 'permits'} on this project`;

    const remove = q('[data-pscfg-remove]', el);
    const btn = remove.querySelector('button');
    if (onlyOne && btn) {
      btn.disabled = true;
      btn.title = `${meta[c.category].label} needs at least one status`;
    }
    remove.addEventListener('click', () => {
      if (onlyOne) return;
      if (!n) return dropColumn(c.id);
      // Permits in it: ask where they go before letting go.
      const panel = q('[data-pscfg-move]', el);
      const to = q<SelectEl>('[data-pscfg-move-to]', el);
      const others = current().columns.filter((x) => x.id !== c.id);
      to.setAttribute('label', `Move its ${n} ${n === 1 ? 'permit' : 'permits'} to`);
      to.options = others.map((x) => ({ value: x.id, label: `${x.name || 'Untitled status'} (${meta[x.category].label})` }));
      to.value = (others.find((x) => x.category === c.category) ?? others[0]).id;
      panel.hidden = false;
    });
    q('[data-pscfg-move-cancel]', el).addEventListener('click', () => (q('[data-pscfg-move]', el).hidden = true));
    q('[data-pscfg-move-ok]', el).addEventListener('click', () => {
      const to = q<SelectEl>('[data-pscfg-move-to]', el).value;
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
    const host = q(`[data-pscfg-cat="${cat}"] [data-pscfg-bars]`);
    const order = [...host.querySelectorAll<HTMLElement>('[data-pscfg-bar]')].map((b) => b.dataset.colId!);
    const wf = current();
    const byId = new Map(wf.columns.map((c) => [c.id, c]));
    // Rebuild in backbone order so the board always reads through the lifecycle.
    wf.columns = CATEGORIES.flatMap((k) => (k === cat ? order.map((id) => byId.get(id)!) : wf.columns.filter((c) => c.category === k)));
    renderPreview();
  };

  const wireGrip = (el: HTMLElement, c: StatusColumn) => {
    const grip = q('[data-pscfg-grip]', el);
    grip.setAttribute('aria-label', `Reorder ${c.name || 'status'}`);
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
        for (const sib of host.querySelectorAll<HTMLElement>('[data-pscfg-bar]')) {
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
    const del = q('[data-pscfg-delete-wf] button') as HTMLButtonElement | null;
    if (del) del.disabled = drafts.length < 2;
  };

  picker.addEventListener('change', (e) => {
    const id = String((e as CustomEvent).detail?.value ?? '');
    if (id && id !== currentId) show(id);
  });
  nameEl.addEventListener('change', (e) => {
    current().name = String((e as CustomEvent).detail?.value ?? nameEl.value ?? '');
    fillPicker();
    fillTypes();
  });
  typesEl.addEventListener('change', (e) => {
    const next = ((e as CustomEvent).detail?.value as PermitTypeId[]) ?? [];
    current().types = [...next];
    // A type belongs to one workflow: claiming it here releases it there.
    for (const w of drafts) if (w.id !== currentId) w.types = w.types.filter((t) => !next.includes(t));
    fillTypes();
    renderBars();
  });

  for (const cat of CATEGORIES) {
    q(`[data-pscfg-add="${cat}"]`).addEventListener('click', () => {
      const wf = current();
      const c: StatusColumn = { id: newId(wf.id), name: '', category: cat };
      const last = wf.columns.map((x) => x.category).lastIndexOf(cat);
      wf.columns.splice(last + 1, 0, c);
      fresh.add(c.id);
      renderBars();
      requestAnimationFrame(() => q<HTMLElement>(`[data-col-id="${c.id}"] [data-pscfg-colname]`).focus());
    });
  }

  q('[data-pscfg-new]').addEventListener('click', () => {
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

  q('[data-pscfg-delete-wf]').addEventListener('click', () => {
    if (drafts.length < 2) return;
    drafts = drafts.filter((w) => w.id !== currentId);
    show(drafts[0].id);
  });

  q('[data-pscfg-restore]').addEventListener('click', () => {
    drafts = defaultWorkflows();
    moves = {};
    fresh = new Set();
    resetPending = true;
    show(drafts.find((w) => w.id === currentId)?.id ?? drafts[0].id);
  });

  /* ── Open / save / cancel ───────────────────────────────────────────── */
  const close = () => {
    dialog.open = false;
  };

  const open = (workflowId?: string) => {
    saved = loadWorkflows(projectId);
    drafts = structuredClone(saved);
    moves = {};
    fresh = new Set();
    resetPending = false;
    Promise.all(['esa-dialog', 'esa-select', 'esa-text-field', 'esa-checkbox-group'].map((t) => customElements.whenDefined(t))).then(() => {
      show(drafts.find((w) => w.id === workflowId)?.id ?? drafts[0].id);
      dialog.open = true;
    });
  };

  document.addEventListener(CONFIGURE_EVENT, (e) => {
    const d = (e as CustomEvent<ConfigureDetail>).detail;
    if (d?.projectId === projectId) open(d.workflowId);
  });
  // Page-level hook: any [data-permit-configure] element opens this project's dialog.
  document.addEventListener('click', (e) => {
    const hook = (e.target as HTMLElement).closest?.<HTMLElement>('[data-permit-configure]');
    if (!hook) return;
    const pid = hook.dataset.projectId;
    if (!pid || pid === projectId) open(hook.dataset.workflowId);
  });

  q('[data-pscfg-cancel]').addEventListener('click', close);
  q('[data-pscfg-save]').addEventListener('click', () => {
    for (const w of drafts) {
      w.name = w.name.trim() || 'Untitled workflow';
      for (const c of w.columns) c.name = c.name.trim() || 'Untitled status';
    }
    // A status that vanished without an explicit move (empty when deleted, or dropped by
    // a reset) re-homes to the first status of its category in the same workflow, so a
    // permit never silently falls back to Not Started.
    const live = new Set(drafts.flatMap((w) => w.columns.map((c) => c.id)));
    const implicit: Record<string, string> = {};
    for (const w of saved) {
      const next = drafts.find((x) => x.id === w.id);
      if (!next) continue;
      for (const c of w.columns) {
        if (live.has(c.id) || moves[c.id]) continue;
        implicit[c.id] = placeIn(next, c).id;
      }
    }
    if (resetPending) resetWorkflows(projectId);
    saveWorkflows(projectId, drafts, { ...implicit, ...moves });
    close();
  });
}
