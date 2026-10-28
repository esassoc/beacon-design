// <BcnLevelFieldsDialog>'s runtime (2026-10-28): open() a level's fields on a copy of the page's working layout, and get
// back whether Done changed it (the copy is written into the working layout then). Cancel leaves it as it was. The
// field definition itself (label, type, options, unit, help) is BcnFieldDefDialog's, reached through `editField`.

import { FIELD_SURFACES, FIELD_TYPES, clonePlanConfig, levelConfig, type FieldDef, type FieldSurface, type LevelField, type PlanConfig } from '../../lib/planning/plan-config';
import { fillIcons } from '../../lib/planning/icons';
import { flip, sortable } from './plan-sortable';
import { setEsaButtonDisabled } from './plan-list-editor';
import type { FieldDefOpenOptions } from './field-def-dialog';

type DialogEl = HTMLElement & { open: boolean; heading: string };
type SwitchEl = HTMLElement & { checked: boolean };
type ChipsEl = HTMLElement & { values: string[]; options: { value: string; label: string; tone?: string }[] };
type MenuEl = HTMLElement & { items: { label: string; action?: string; divider?: boolean }[] };
type ConfirmEl = HTMLElement & { open: boolean; heading: string; message: string; confirmLabel: string; cancelLabel: string; variant: string };

type Group = 'all' | 'level';
const NEW_FIELD = '__new';
/** Under "Shown In" the column is understood: the chips say where, short. */
const CHIP_LABEL: Record<FieldSurface, string> = { page: 'Page', drawer: 'Drawer', gantt: 'Gantt', sheet: 'Sheet', export: 'Exports' };
const typeLabel = (def: FieldDef) => {
  const t = FIELD_TYPES.find((x) => x.value === def.type)?.label ?? def.type;
  return def.type === 'number' && def.unit ? `${t}, in ${def.unit}` : t;
};
const freshField = (fieldId: string): LevelField => ({ fieldId, requiredToComplete: false, shownIn: ['page', 'drawer'] });

export interface LevelFieldsOpen {
  /** The page's working layout; Done writes the change into it. */
  config: PlanConfig;
  depth: number;
  deepest: number;
  /** "Task", "Tasks". */
  singular: string;
  plural: string;
  /** Every level's singular name, top first (for where a field is used). */
  levelNames: string[];
}

export function setupLevelFieldsDialog(root: HTMLElement, editField: (opts: FieldDefOpenOptions) => Promise<FieldDef | null>): { open(o: LevelFieldsOpen): Promise<boolean> } {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('[data-lfd-dialog]');
  const lists: Record<Group, HTMLElement> = { all: q('[data-lfd-rows="all"]'), level: q('[data-lfd-rows="level"]') };
  const addMenu = q<MenuEl>('[data-lfd-add]');
  const confirmEl = q<ConfirmEl>('[data-lfd-confirm]');
  const rowTpl = q<HTMLTemplateElement>('template[data-lfd-tpl="row"]').content.firstElementChild!;
  // The dialog lives in the top layer; the body would sit under it.
  document.body.append(root);

  let open: LevelFieldsOpen | null = null;
  let work: PlanConfig | null = null;
  let initial = '';
  let settle: (changed: boolean) => void = () => undefined;

  const levelOf = () => {
    work!.levels[open!.depth] ??= JSON.parse(JSON.stringify(levelConfig(work!, open!.depth, open!.deepest)));
    return work!.levels[open!.depth];
  };
  const listOf = (g: Group): LevelField[] => (g === 'all' ? work!.allLevels : levelOf().fields);
  const defOf = (id: string) => work!.fields.find((f) => f.id === id);
  const usedOn = (id: string) => [
    ...(work!.allLevels.some((f) => f.fieldId === id) ? ['All Levels'] : []),
    ...open!.levelNames.filter((_, i) => levelConfig(work!, i + 1, open!.deepest).fields.some((f) => f.fieldId === id)),
  ];

  const ask = (heading: string, message: string, confirmLabel: string, cancelLabel: string): Promise<boolean> =>
    new Promise((resolve) => {
      Object.assign(confirmEl, { heading, message, confirmLabel, cancelLabel, variant: 'danger' });
      confirmEl.addEventListener('resolved', (e) => resolve(!!(e as CustomEvent<{ confirmed: boolean }>).detail?.confirmed), { once: true });
      confirmEl.open = true;
    });

  function draw(): void {
    for (const g of ['all', 'level'] as Group[]) {
      const rows = listOf(g).filter((a) => defOf(a.fieldId));
      lists[g].replaceChildren(
        ...rows.map((a, i) => {
          const def = defOf(a.fieldId)!;
          const row = rowTpl.cloneNode(true) as HTMLElement;
          row.dataset.fieldId = a.fieldId;
          row.dataset.group = g;
          row.querySelector('[data-f-label]')!.textContent = def.label;
          row.querySelector('[data-f-type]')!.textContent = typeLabel(def);
          row.querySelector<HTMLElement>('[data-f-all]')!.hidden = g !== 'all';
          const req = row.querySelector<SwitchEl>('[data-f-required]')!;
          req.checked = a.requiredToComplete;
          req.setAttribute('aria-label', `${def.label}: Required to Complete`);
          const chips = row.querySelector<ChipsEl>('[data-f-shown]')!;
          chips.setAttribute('label', `${def.label}: Shown In`);
          void customElements.whenDefined('esa-chip-group').then(() => {
            chips.options = FIELD_SURFACES.map((s) => ({ value: s.value, label: CHIP_LABEL[s.value], tone: 'brand' }));
            chips.values = [...a.shownIn];
          });
          setEsaButtonDisabled(row.querySelector('[data-lfd-act="up"] button'), i === 0);
          setEsaButtonDisabled(row.querySelector('[data-lfd-act="down"] button'), i === rows.length - 1);
          row.querySelector('[data-lfd-remove-tip]')!.setAttribute('text', g === 'all' ? 'Remove From Every Level' : `Remove From ${open!.plural}`);
          return row;
        })
      );
      fillIcons(lists[g]);
      const empty = q(`[data-lfd-empty="${g}"]`);
      empty.hidden = rows.length > 0;
      if (g === 'level') empty.textContent = `No ${open!.singular} fields yet.`;
    }
    // Add Field: the plan's fields not on this level yet, then New Field.
    const here = new Set([...work!.allLevels, ...levelOf().fields].map((a) => a.fieldId));
    const items = work!.fields.filter((f) => !here.has(f.id)).map((f) => ({ label: `${f.label} (${typeLabel(f)})`, action: f.id }));
    void customElements.whenDefined('esa-dropdown-menu').then(() => {
      addMenu.items = [...items, ...(items.length ? [{ label: '', divider: true }] : []), { label: 'New Field', action: NEW_FIELD }];
    });
  }

  function move(g: Group, fieldId: string, index: number): void {
    const list = listOf(g);
    const from = list.findIndex((f) => f.fieldId === fieldId);
    if (from < 0) return;
    const [a] = list.splice(from, 1);
    list.splice(Math.max(0, Math.min(index, list.length)), 0, a);
    const rows = [...lists[g].querySelectorAll<HTMLElement>('[data-lfd-row]')];
    flip(rows, () => draw());
  }

  for (const g of ['all', 'level'] as Group[]) {
    const list = lists[g];
    list.addEventListener('change', (e) => {
      const target = e.target as HTMLElement;
      const row = target.closest<HTMLElement>('[data-lfd-row]');
      const a = row && listOf(g).find((f) => f.fieldId === row.dataset.fieldId);
      if (!a) return;
      if (target.matches('[data-f-required]')) a.requiredToComplete = (target as SwitchEl).checked;
      else if (target.matches('[data-f-shown]')) {
        const values = (target as ChipsEl).values ?? [];
        a.shownIn = FIELD_SURFACES.map((s) => s.value).filter((v) => values.includes(v));
      }
    });
    list.addEventListener('click', async (e) => {
      const act = (e.target as Element).closest<HTMLElement>('[data-lfd-act]')?.dataset.lfdAct;
      const row = (e.target as Element).closest<HTMLElement>('[data-lfd-row]');
      if (!act || !row) return;
      const id = row.dataset.fieldId ?? '';
      const at = listOf(g).findIndex((f) => f.fieldId === id);
      const def = defOf(id);
      if (!def) return;
      if (act === 'up' || act === 'down') move(g, id, act === 'up' ? at - 1 : at + 1);
      else if (act === 'edit') {
        const next = await editField({ def, existing: work!.fields, usedOn: usedOn(id) });
        if (!next) return;
        work!.fields = work!.fields.map((f) => (f.id === id ? next : f));
        draw();
      } else if (act === 'remove') {
        const where = g === 'all' ? 'Every Level' : open!.plural;
        const ok = await ask(
          `Remove ${def.label} From ${where}?`,
          `${g === 'all' ? 'No item' : `No ${open!.singular}`} shows it once the page is saved. Values already entered stay, and come back if you add it again: nothing is deleted.`,
          'Remove Field',
          'Keep Field'
        );
        if (!ok) return;
        if (g === 'all') work!.allLevels = work!.allLevels.filter((f) => f.fieldId !== id);
        else levelOf().fields = levelOf().fields.filter((f) => f.fieldId !== id);
        draw();
      }
    });
    sortable(list, {
      lists: () => [list],
      row: '[data-lfd-row]',
      grip: '[data-lfd-grip]',
      layer: () => q('[data-lfd-body]'),
      onDrop: (row, _list, index) => move(g, row.dataset.fieldId ?? '', index),
    });
  }

  addMenu.addEventListener('menu-action', async (e) => {
    const action = (e as CustomEvent<string>).detail;
    let id = action;
    if (action === NEW_FIELD) {
      const def = await editField({ existing: work!.fields });
      if (!def) return;
      work!.fields.push(def);
      id = def.id;
    }
    if (!id || !defOf(id)) return;
    levelOf().fields.push(freshField(id));
    draw();
  });

  function close(changed: boolean): void {
    dialog.open = false;
    settle(changed);
    settle = () => undefined;
  }
  q('[data-lfd-cancel]').addEventListener('click', () => close(false));
  dialog.addEventListener('close', (e) => {
    if (e.target === dialog) close(false);
  });
  q('[data-lfd-done]').addEventListener('click', () => {
    if (!open || !work) return close(false);
    const changed = JSON.stringify(work) !== initial;
    if (changed) {
      open.config.fields = work.fields;
      open.config.allLevels = work.allLevels;
      open.config.levels[open.depth] = work.levels[open.depth];
    }
    close(changed);
  });

  return {
    open(o) {
      open = o;
      work = clonePlanConfig(o.config);
      levelOf();
      initial = JSON.stringify(work);
      dialog.heading = `${o.singular} Fields`;
      q('[data-lfd-level-heading]').textContent = `${o.singular} Fields`;
      q('[data-lfd-lead]').textContent = `The fields every ${o.singular} carries, in the order its Details card and Edit form list them.`;
      draw();
      dialog.open = true;
      return new Promise<boolean>((resolve) => (settle = resolve));
    },
  };
}
