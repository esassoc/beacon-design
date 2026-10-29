// <BcnPlanImportDialog>'s runtime (2026-10-28): read a file or pasted rows, match its columns, place its rows, preview
// them, and hand the good ones back. The page adds them to your draft. See ./BcnPlanImportDialog.astro.

import type { PlanDetailDto } from '../../lib/planning/model';
import { flattenPlan } from '../../lib/planning/plan-repo';
import { EXAMPLE_CSV, IMPORT_FIELDS, matchColumns, parseTable, placeRows, type ImportField, type ImportRow } from '../../lib/planning/plan-import';
import { badge } from './badge-bank';
import { fillIcons } from '../../lib/planning/icons';

type Sel = HTMLElement & { value: string; options: { value: string; label: string }[] };
type Dlg = HTMLElement & { open: boolean };
export interface ImportResult {
  rows: ImportRow[];
  source: string;
}

const day = (iso?: string) => (iso ? new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '');

export function setupPlanImportDialog(root: HTMLElement): { open(plan: PlanDetailDto, label: string): Promise<ImportResult | null> } {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  document.body.append(root);
  fillIcons(root);
  const dialog = q<Dlg>('[data-pid-dialog]');
  const paste = q<HTMLElement & { value: string }>('[data-pid-paste]');
  const mapBox = q<HTMLElement>('[data-pid-map]');
  const under = q<Sel>('[data-pid-under]');
  let plan: PlanDetailDto | null = null;
  let table: string[][] = [];
  let source = '';
  let map = {} as Record<ImportField, number>;
  let placed: ImportRow[] = [];
  let settle: (r: ImportResult | null) => void = () => undefined;
  let done = true;

  function load(text: string, from: string): void {
    const all = parseTable(text);
    if (all.length < 2) {
      q<HTMLElement>('[data-pid-file-note]').textContent = 'That has no rows under its header.';
      table = [];
      return draw();
    }
    const [headers, ...rows] = all;
    table = rows;
    source = from;
    map = matchColumns(headers);
    q<HTMLElement>('[data-pid-file-note]').textContent = `${from}: ${rows.length} ${rows.length === 1 ? 'row' : 'rows'}, ${headers.length} columns. Each field reads the column matched to it.`;
    mapBox.replaceChildren(
      ...IMPORT_FIELDS.map((f) => {
        const sel = q<HTMLTemplateElement>('template[data-pid-tpl="map"]').content.firstElementChild!.cloneNode(true) as Sel;
        sel.setAttribute('label', f.required ? `${f.label} (Needed)` : f.label);
        sel.dataset.field = f.key;
        void customElements.whenDefined('esa-select').then(() => {
          sel.options = [{ value: '-1', label: 'Not in the File' }, ...headers.map((h, i) => ({ value: String(i), label: h || `Column ${i + 1}` }))];
          sel.value = String(map[f.key]);
        });
        sel.addEventListener('change', () => {
          map[f.key] = Number(sel.value);
          draw();
        });
        return sel;
      })
    );
    draw();
  }

  function draw(): void {
    q<HTMLElement>('[data-pid-map-step]').hidden = !table.length;
    q<HTMLElement>('[data-pid-preview-step]').hidden = !table.length;
    placed = plan && table.length ? placeRows(table, map, plan, under.value || null) : [];
    const good = placed.filter((r) => !r.problems.length);
    q<HTMLElement>('[data-pid-count]').textContent = placed.length ? `${good.length} of ${placed.length} ready${good.length < placed.length ? `; ${placed.length - good.length} with problems stay out` : ''}` : '';
    const names = new Map(placed.map((r) => [r.id, r.dto.PlanElementName ?? '']));
    q<HTMLElement>('[data-pid-rows]').replaceChildren(
      ...placed.map((r) => {
        const tr = document.createElement('tr');
        if (r.problems.length) tr.dataset.bad = '';
        const td = (text: string, cls = '') => Object.assign(document.createElement('td'), { textContent: text, className: cls });
        const nameCell = td('');
        nameCell.style.paddingInlineStart = `calc(var(--grid-cell-padding-x, 12px) + ${Math.max(0, r.depth - 1) * 14}px)`;
        nameCell.append(Object.assign(document.createElement('span'), { className: 'bcn-rtable__primary', textContent: r.dto.PlanElementName || '(No Name)' }));
        if (r.parentId && names.has(r.parentId)) nameCell.append(Object.assign(document.createElement('div'), { className: 'bcn-rtable__sub', textContent: `Under ${names.get(r.parentId)}` }));
        const problems = td('');
        problems.append(...(r.problems.length ? r.problems.map((p) => badge(p, 'danger', 'sm')) : [badge('Ready', 'success', 'sm')]));
        tr.append(td(String(r.line)), td(r.levelName), nameCell, td(day(r.dto.StartDate)), td(r.dto.IsMilestone ? '' : day(r.dto.EndDate)), td(r.owners.join(', ')), problems);
        return tr;
      })
    );
    const n = good.length;
    q<HTMLElement>('[data-pid-add-label]').textContent = n ? `Add ${n} ${n === 1 ? 'Item' : 'Items'} to My Draft` : 'Add to My Draft';
    const btn = q<HTMLButtonElement>('[data-pid-add] button');
    btn.disabled = !n || map.name < 0;
    btn.classList.toggle('esa-button--disabled', btn.disabled);
  }

  q<HTMLElement>('[data-pid-file]').addEventListener('change', async (e) => {
    const file = (e as CustomEvent<{ files: File[] }>).detail?.files?.[0];
    if (file) load(await file.text(), file.name);
  });
  paste.addEventListener('input', () => {
    if ((paste.value ?? '').trim()) load(paste.value, 'Pasted rows');
  });
  q<HTMLElement>('[data-pid-example]').addEventListener('click', () => {
    paste.value = EXAMPLE_CSV;
    load(EXAMPLE_CSV, 'The example');
  });
  under.addEventListener('change', draw);
  const finish = (r: ImportResult | null) => {
    if (done) return;
    done = true;
    dialog.open = false;
    settle(r);
  };
  q<HTMLElement>('[data-pid-cancel]').addEventListener('click', () => finish(null));
  q<HTMLElement>('[data-pid-add]').addEventListener('click', () => {
    const good = placed.filter((r) => !r.problems.length);
    if (good.length) finish({ rows: good, source });
  });
  dialog.addEventListener('close', () => finish(null));

  return {
    open(p, label) {
      plan = p;
      table = [];
      placed = [];
      paste.value = '';
      dialog.setAttribute('heading', `Import Items to ${label}`);
      void customElements.whenDefined('esa-select').then(() => {
        under.options = [{ value: '', label: 'The Top of the Plan' }, ...flattenPlan(p.Elements).filter(({ element }) => !element.IsMilestone).map(({ element, path }) => ({ value: element.PlanElementID ?? '', label: `${element.LevelSingularName}: ${element.PlanElementName}${path.length ? `, in ${path.at(-1)}` : ''}` }))];
        under.value = '';
      });
      draw();
      done = false;
      dialog.open = true;
      return new Promise((resolve) => (settle = resolve));
    },
  };
}
