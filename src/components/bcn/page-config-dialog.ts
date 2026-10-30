// <BcnPageConfigDialog>'s runtime (2026-10-30): Configure Page. open() takes a plan and a level and resolves what came
// of it: saved, cancelled, or handed to the item page's in-place mode with the working layout (Arrange on This Page).
//
// The working copy is the plan's whole configuration with every level's layout spelled out (each card, on or off), so
// switching levels keeps what you changed on the others; Save writes it once (savePlanConfig: plan settings, no
// revision, no draft), Cancel drops it. The outline (./page-outline.ts) draws the selected level from it; the preview
// is the item's own page in an iframe, reading the working copy from this window (window.bcnPageConfigPreview) and
// told to redraw on every change.

import { configOf, flattenPlan, getRepo, savePlanConfig, viewsOf } from '../../lib/planning/plan-repo';
import { planApi } from '../../lib/planning/plan-server';
import { MODULES, clonePlanConfig, defaultModules, fieldsFor, levelConfig, modulesFor, type LevelConfig, type ModuleKey, type ModulePlacement, type PlanConfig } from '../../lib/planning/plan-config';
import type { PlanDetailDto, PlanElementDto } from '../../lib/planning/model';
import { ELEMENT_HREF } from '../../lib/planning/element-context';
import { fillIcons, PLAN_ICON_PATHS } from '../../lib/planning/icons';
import { setEsaButtonDisabled } from './plan-list-editor';
import { setupPageOutline, type OutlineTile } from './page-outline';
import { setupFieldDefDialog } from './field-def-dialog';
import { setupLevelFieldsDialog, type LevelFieldsOpen } from './level-fields-dialog';

type DialogEl = HTMLElement & { open: boolean; heading: string };
type SwitchEl = HTMLElement & { checked: boolean; disabled: boolean };
type SelectEl = HTMLElement & { value: string; options: { value: string; label: string }[] };
type ToggleEl = HTMLElement & { value: string; options: { value: string; label: string }[]; disabled: boolean };
type ChecksEl = HTMLElement & { value: string[]; options: { value: string; label: string }[] };
type CheckEl = HTMLElement & { checked: boolean; disabled: boolean; label: string };
type MenuEl = HTMLElement & { items: { label: string; action?: string; divider?: boolean }[] };
type ConfirmEl = HTMLElement & { open: boolean; heading: string; message: string; confirmLabel: string; cancelLabel: string; variant: string };

export interface PageConfigOpen {
  planID: string;
  /** The level to start on (1 is the top). */
  depth: number;
  /** Opened from this item's page: it's the first preview, and Arrange on This Page is offered. */
  elementId?: string;
}
export type PageConfigResult = { kind: 'saved'; config: PlanConfig } | { kind: 'arrange'; config: PlanConfig } | null;

export interface PageConfigDialog {
  open(o: PageConfigOpen): Promise<PageConfigResult>;
}

const VISIBILITY = [
  { value: 'everyone', label: 'Everyone' },
  { value: 'editors', label: 'Owners and Editors' },
];
const COLUMNS = [
  { value: 'main', label: 'Main Column' },
  { value: 'side', label: 'Side Column' },
];
const VIEWS = [
  { value: 'outline', label: 'Outline' },
  { value: 'preview', label: 'Preview' },
];
/** The item page's own width without the app's chrome: its columns at their real size. */
const PREVIEW_WIDTH = 1160;

declare global {
  interface Window {
    /** The working layout, for the preview's iframe (plan-element-page.ts reads it with `&preview=1`). */
    bcnPageConfigPreview?: () => PlanConfig | null;
  }
}

export function setupPageConfigDialog(root: HTMLElement, opts: { levelFields?: { open(o: LevelFieldsOpen): Promise<boolean> } } = {}): PageConfigDialog {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('[data-pcd-dialog]');
  const levelSelect = q<SelectEl>('[data-pcd-level]');
  const deliver = q<SwitchEl>('[data-pcd-deliver]');
  const startMenu = q<MenuEl>('[data-pcd-start]');
  const viewToggle = q<ToggleEl>('[data-pcd-view]');
  const itemSelect = q<SelectEl>('[data-pcd-item]');
  const iframe = q<HTMLIFrameElement>('[data-pcd-iframe]');
  const frame = q('[data-pcd-frame]');
  const panel = q('[data-pcd-panel]');
  const onSwitch = q<SwitchEl>('[data-pcd-on]');
  const columnToggle = q<ToggleEl>('[data-pcd-column]');
  const visible = q<ToggleEl>('[data-pcd-visible]');
  const types = q<ChecksEl>('[data-pcd-types]');
  const timeline = q<SwitchEl>('[data-pcd-timeline]');
  const confirmEl = q<ConfirmEl>('[data-pcd-confirm]');
  const badgeTpl = q<HTMLTemplateElement>('template[data-pcd-tpl="badge"]').content.firstElementChild!;
  const fieldTpl = q<HTMLTemplateElement>('template[data-pcd-tpl="field"]').content.firstElementChild!;
  const iconTpl = q<HTMLTemplateElement>('template[data-pcd-tpl="icon"]').content.firstElementChild!;
  // The level's fields: the page's own dialogs when it has them, else this component's.
  let levelFields = opts.levelFields;
  if (!levelFields) {
    const lfd = root.querySelector<HTMLElement>('[data-bcn-level-fields]');
    const fdd = root.querySelector<HTMLElement>('[data-bcn-field-def]');
    if (lfd && fdd) {
      const fieldDef = setupFieldDefDialog(fdd);
      levelFields = setupLevelFieldsDialog(lfd, (o) => fieldDef.open(o));
    }
  }
  fillIcons(root);

  // ── State ──
  let planID = '';
  let plan: PlanDetailDto | null = null;
  let working: PlanConfig | null = null;
  let initial = '';
  let depth = 1;
  let deepest = 1;
  let selected: ModuleKey | null = null;
  let fromElement: string | undefined;
  let fromDepth = 0;
  let tracksBudget = true;
  let view: 'outline' | 'preview' = 'outline';
  let previewItem = '';
  let settled = true;
  let settle: (r: PageConfigResult) => void = () => undefined;

  const levels = () => [...(plan?.Levels ?? [])].sort((a, b) => (a.Depth ?? 0) - (b.Depth ?? 0));
  const names = (d = depth) => {
    const l = levels().find((x) => x.Depth === d);
    return { singular: l?.SingularName || 'Item', plural: l?.PluralName || 'Items' };
  };
  const level = (): LevelConfig => working!.levels[depth];
  const placement = (key: ModuleKey) => level().modules.find((m) => m.key === key)!;
  const dirty = () => !!working && JSON.stringify(working) !== initial;
  const itemsAt = (d: number): PlanElementDto[] => flattenPlan(plan?.Elements).map(({ element }) => element).filter((e) => (e.LevelDepth ?? 0) === d);
  const columnKeys = (column: 'main' | 'side') => level().modules.filter((m) => m.on !== false && isOnPage(m) && m.column === column).map((m) => m.key);
  const locked = (key: ModuleKey) => MODULES[key].kind === 'core' || MODULES[key].kind === 'shared';
  /** Core and shared cards are on whatever their flag says (moduleShows ignores it). */
  const isOnPage = (m: ModulePlacement) => locked(m.key) || m.on;

  /** Every level's layout spelled out (every card, on or off), so each can be switched and moved, and an untouched
   *  level compares equal to itself. */
  function spell(config: PlanConfig): PlanConfig {
    const c = clonePlanConfig(config);
    for (const l of levels()) {
      const d = l.Depth ?? 1;
      const lc = levelConfig(c, d, deepest);
      c.levels[d] = { ...JSON.parse(JSON.stringify(lc)), modules: JSON.parse(JSON.stringify(modulesFor(c, d, deepest))) };
    }
    return c;
  }

  /** Why an on card never shows at this level; or which items it shows on. */
  function reach(p: ModulePlacement): { ghost?: string; tag?: string } {
    const kind = MODULES[p.key].kind;
    const { plural } = names();
    if (kind === 'deliverable') return level().canBeDeliverable ? { tag: 'Deliverables Only' } : { ghost: `Shows on deliverables. Turn on Can Be a Deliverable for ${plural}.` };
    if (kind === 'parents') return depth >= deepest ? { ghost: `Shows on items with children. ${plural} are the lowest level, so none have any.` } : { tag: 'With Children Only' };
    if (p.key === 'budget') {
      if (!tracksBudget) return { ghost: 'Shows when the plan tracks a budget.' };
      if (p.settings?.visibleTo === 'editors') return { tag: 'Owners and Editors' };
    }
    return {};
  }

  // ── The outline ──
  const outline = setupPageOutline(q('[data-bcn-page-outline]'), {
    select(key) {
      selected = key;
      draw();
    },
    place(key, column, index) {
      placeAt(key, column, index);
      const p = placement(key);
      if (!isOnPage(p)) p.on = true;
      selected = key;
      changed();
    },
    toggle(key, on) {
      if (locked(key)) return;
      placement(key).on = on;
      selected = key;
      changed();
    },
  });

  function placeAt(key: ModuleKey, column: 'main' | 'side', index: number): void {
    // Order among the on cards of each column; the off ones keep their column and ride after.
    const on = (c: 'main' | 'side') => level().modules.filter((m) => isOnPage(m) && m.column === c && m.key !== key).map((m) => m.key);
    const main = on('main');
    const side = on('side');
    const target = column === 'main' ? main : side;
    target.splice(Math.max(0, Math.min(index, target.length)), 0, key);
    const byKey = new Map(level().modules.map((m) => [m.key, m]));
    const offs = level().modules.filter((m) => !isOnPage(m) && m.key !== key);
    const self = byKey.get(key)!;
    self.on = true;
    level().modules = [
      ...main.map((k) => ({ ...byKey.get(k)!, column: 'main' as const })),
      ...side.map((k) => ({ ...byKey.get(k)!, column: 'side' as const })),
      ...offs,
    ];
  }

  function tiles(): OutlineTile[] {
    const ordered = [...level().modules.filter((m) => isOnPage(m)), ...level().modules.filter((m) => !isOnPage(m))];
    return ordered.map((p) => ({
      key: p.key,
      title: MODULES[p.key].title,
      icon: MODULES[p.key].icon,
      column: p.column,
      on: isOnPage(p),
      locked: locked(p.key),
      settings: p.settings,
      ...reach(p),
    }));
  }

  // ── The settings column ──
  function badge(text: string): HTMLElement {
    const b = badgeTpl.cloneNode(true) as HTMLElement;
    const t = b.querySelector('.esa-badge__text') ?? b;
    t.textContent = text;
    return b;
  }
  function drawPanel(): void {
    const key = selected;
    panel.hidden = !key;
    if (!key) return;
    const meta = MODULES[key];
    const p = placement(key);
    const { singular, plural } = names();
    const icon = iconTpl.cloneNode(true) as HTMLElement;
    const svg = icon.querySelector('svg');
    if (svg) svg.innerHTML = PLAN_ICON_PATHS[meta.icon] ?? '';
    q('[data-pcd-panel-icon]').replaceChildren(icon);
    q('[data-pcd-panel-title]').textContent = meta.title;
    const r = reach(p);
    const tagText = locked(key) ? 'Always On' : (r.tag ?? '');
    q('[data-pcd-panel-tag]').replaceChildren(...(tagText ? [badge(tagText)] : []));
    q('[data-pcd-panel-blurb]').textContent = `${meta.blurb}.`;
    // On or off.
    onSwitch.hidden = locked(key);
    q('[data-pcd-locked]').hidden = !locked(key);
    onSwitch.setAttribute('label', `Show on Every ${singular}`);
    void customElements.whenDefined('esa-switch-toggle').then(() => (onSwitch.checked = isOnPage(p)));
    const notice = q('[data-pcd-notice]');
    notice.hidden = !(isOnPage(p) && r.ghost);
    notice.textContent = isOnPage(p) && r.ghost ? `Not shown on any ${singular} yet. ${r.ghost}` : '';
    // Place: column and order (an off card keeps the column it'd come back to).
    void customElements.whenDefined('esa-button-toggle').then(() => {
      columnToggle.options = COLUMNS;
      columnToggle.value = p.column;
    });
    const keys = columnKeys(p.column);
    const at = keys.indexOf(key);
    setEsaButtonDisabled(q('[data-pcd-move="up"] button') as HTMLButtonElement, !isOnPage(p) || at <= 0);
    setEsaButtonDisabled(q('[data-pcd-move="down"] button') as HTMLButtonElement, !isOnPage(p) || at < 0 || at >= keys.length - 1);
    // Its options.
    const opt = (name: string, show: boolean) => (q(`[data-pcd-opt="${name}"]`).hidden = !show);
    opt('budget', key === 'budget');
    opt('documents', key === 'documents');
    opt('schedule', key === 'schedule' && depth < deepest);
    opt('details', key === 'details');
    if (key === 'budget')
      void customElements.whenDefined('esa-button-toggle').then(() => {
        visible.options = VISIBILITY;
        visible.value = p.settings?.visibleTo ?? 'everyone';
      });
    if (key === 'documents')
      void customElements.whenDefined('esa-checkbox-group').then(() => {
        types.options = working!.documentTypes.map((t) => ({ value: t, label: t }));
        types.value = [...(p.settings?.documentTypes ?? [])];
      });
    if (key === 'schedule') void customElements.whenDefined('esa-switch-toggle').then(() => (timeline.checked = !!p.settings?.childTimeline));
    if (key === 'details') drawFields(singular, plural);
  }

  function drawFields(singular: string, plural: string): void {
    const fields = fieldsFor(working!, depth, deepest);
    const every = new Set(working!.allLevels.map((f) => f.fieldId));
    q('[data-pcd-fields-title]').textContent = `${singular} Fields`;
    q('[data-pcd-fields]').hidden = !fields.length;
    const empty = q('[data-pcd-fields-empty]');
    empty.hidden = fields.length > 0;
    empty.textContent = `${plural} have no fields of their own yet.`;
    q('[data-pcd-edit-fields-label]').textContent = `Edit ${singular} Fields`;
    q('[data-pcd-field-rows]').replaceChildren(
      ...fields.map(({ def, assign }) => {
        const row = fieldTpl.cloneNode(true) as HTMLElement;
        row.dataset.fieldId = def.id;
        row.querySelector('[data-f-name]')!.textContent = def.label;
        row.querySelector('[data-f-note]')!.textContent = every.has(def.id) ? 'On every level' : '';
        const page = row.querySelector<CheckEl>('[data-f="page"]')!;
        const req = row.querySelector<CheckEl>('[data-f="required"]')!;
        page.setAttribute('aria-label', `${def.label} on the Page`);
        req.setAttribute('aria-label', `${def.label} Required to Complete`);
        void customElements.whenDefined('esa-checkbox').then(() => {
          page.checked = assign.shownIn.includes('page');
          req.checked = assign.requiredToComplete;
        });
        page.addEventListener('change', () => {
          assign.shownIn = page.checked ? [...new Set([...assign.shownIn, 'page' as const])] : assign.shownIn.filter((s) => s !== 'page');
          changed(false);
        });
        req.addEventListener('change', () => {
          assign.requiredToComplete = req.checked;
          changed(false);
        });
        return row;
      })
    );
  }

  // ── The bar, the scope, the footer's line ──
  function drawBar(): void {
    const { singular, plural } = names();
    dialog.heading = `Configure the ${singular} Page`;
    void customElements.whenDefined('esa-select').then(() => {
      levelSelect.options = levels().map((l) => ({ value: String(l.Depth), label: `${l.SingularName} (Level ${l.Depth})` }));
      levelSelect.value = String(depth);
    });
    void customElements.whenDefined('esa-switch-toggle').then(() => (deliver.checked = level().canBeDeliverable));
    const kind = depth < deepest ? 'parent' : 'task';
    startMenu.items = [
      { label: `Parent Level Default${kind === 'parent' ? ` (${plural})` : ''}`, action: 'parent' },
      { label: `Lowest Level Default${kind === 'task' ? ` (${plural})` : ''}`, action: 'task' },
      { divider: true, label: '' },
      { label: 'As Last Saved', action: 'saved' },
    ];
    const count = itemsAt(depth).length;
    q('[data-pcd-scope]').textContent = count === 0 ? `No ${plural} yet. Any added later get this page.` : count === 1 ? `For the plan’s one ${singular}, and any added later.` : `For all ${count} ${plural} in this plan, and any added later.`;
    q('[data-pcd-note]').textContent = 'Saved to the plan’s settings, not a draft: every item at a level you changed shows it right away.';
    q('[data-pcd-arrange]').hidden = !fromElement || depth !== fromDepth;
  }

  // ── The preview ──
  function drawPreview(): void {
    q('[data-pcd-outline]').hidden = view !== 'outline';
    q('[data-pcd-preview]').hidden = view !== 'preview';
    if (view !== 'preview') return;
    const items = itemsAt(depth);
    const { singular, plural } = names();
    const note = q('[data-pcd-preview-note]');
    itemSelect.hidden = !items.length;
    frame.hidden = !items.length;
    if (!items.length) {
      note.textContent = `No ${plural} yet, so there’s nothing to preview. The outline shows how the page will be arranged.`;
      return;
    }
    if (!items.some((e) => e.PlanElementID === previewItem)) previewItem = items.find((e) => e.PlanElementID === fromElement)?.PlanElementID ?? items[0].PlanElementID ?? '';
    void customElements.whenDefined('esa-select').then(() => {
      itemSelect.options = items.map((e) => ({ value: e.PlanElementID ?? '', label: e.PlanElementName ?? '' }));
      itemSelect.value = previewItem;
    });
    note.textContent = `This ${singular}’s page, drawn with your changes. Nothing is saved until you save.`;
    const src = `${ELEMENT_HREF(planID, previewItem)}&preview=1`;
    if (iframe.dataset.src !== src) {
      iframe.dataset.src = src;
      iframe.src = src;
    } else iframe.contentWindow?.postMessage({ type: 'bcn-page-config' }, location.origin);
    fit();
  }
  function fit(): void {
    const w = frame.clientWidth;
    if (!w) return;
    const scale = w / PREVIEW_WIDTH;
    iframe.style.transform = `scale(${scale})`;
    iframe.style.height = `${frame.clientHeight / scale}px`;
  }
  new ResizeObserver(() => view === 'preview' && fit()).observe(frame);

  // ── Drawing ──
  function draw(): void {
    if (!working) return;
    drawBar();
    outline.draw({ tiles: tiles(), selected, levelName: names().singular });
    drawPanel();
    drawPreview();
  }
  /** After a change: everything redraws; the preview follows. */
  function changed(redrawFields = true): void {
    if (!redrawFields) {
      // A field's check: the row is already right; the preview still follows.
      drawPreview();
      return;
    }
    draw();
  }

  // ── The controls ──
  levelSelect.addEventListener('change', () => {
    const d = Number(levelSelect.value);
    if (!d || d === depth) return;
    depth = d;
    selected = 'details';
    draw();
  });
  deliver.addEventListener('change', () => {
    level().canBeDeliverable = deliver.checked;
    changed();
  });
  startMenu.addEventListener('menu-action', (e) => {
    const action = (e as CustomEvent<string>).detail;
    if (!working) return;
    const saved = spell(configOf(getRepo(planID)));
    level().modules = action === 'saved' ? JSON.parse(JSON.stringify(saved.levels[depth].modules)) : defaultModules(action === 'parent' ? 'parent' : 'task');
    if (action === 'saved') level().canBeDeliverable = saved.levels[depth].canBeDeliverable;
    changed();
    outline.announce(action === 'saved' ? 'Back to the layout as last saved.' : `Started from the ${action === 'parent' ? 'parent level' : 'lowest level'} default.`);
  });
  void customElements.whenDefined('esa-button-toggle').then(() => {
    viewToggle.options = VIEWS;
    viewToggle.value = view;
  });
  viewToggle.addEventListener('change', () => {
    view = viewToggle.value === 'preview' ? 'preview' : 'outline';
    drawPreview();
  });
  itemSelect.addEventListener('change', () => {
    previewItem = String(itemSelect.value || '');
    drawPreview();
  });
  onSwitch.addEventListener('change', () => {
    if (!selected || locked(selected)) return;
    const p = placement(selected);
    if (onSwitch.checked && !p.on) placeAt(selected, p.column, Number.MAX_SAFE_INTEGER);
    else p.on = onSwitch.checked;
    changed();
  });
  columnToggle.addEventListener('change', () => {
    if (!selected) return;
    const p = placement(selected);
    const column = columnToggle.value === 'side' ? 'side' : 'main';
    if (column === p.column) return;
    if (isOnPage(p)) placeAt(selected, column, Number.MAX_SAFE_INTEGER);
    else p.column = column;
    changed();
    outline.announce(`${MODULES[selected].title} moved to the ${column} column.`);
  });
  for (const how of ['up', 'down'] as const) {
    q(`[data-pcd-move="${how}"]`).addEventListener('click', () => {
      if (!selected) return;
      const p = placement(selected);
      const at = columnKeys(p.column).indexOf(selected);
      if (at < 0) return;
      placeAt(selected, p.column, how === 'up' ? at - 1 : at + 1);
      changed();
    });
  }
  visible.addEventListener('change', () => {
    if (selected !== 'budget') return;
    const p = placement('budget');
    p.settings = { ...p.settings, visibleTo: visible.value as 'everyone' | 'editors' };
    changed();
  });
  types.addEventListener('change', () => {
    if (selected !== 'documents') return;
    const p = placement('documents');
    p.settings = { ...p.settings, documentTypes: [...(types.value ?? [])] };
    changed();
  });
  timeline.addEventListener('change', () => {
    if (selected !== 'schedule') return;
    const p = placement('schedule');
    p.settings = { ...p.settings, childTimeline: timeline.checked };
    changed();
  });
  q('[data-pcd-edit-fields]').addEventListener('click', async () => {
    if (!working || !levelFields) return;
    const { singular, plural } = names();
    if (await levelFields.open({ config: working, depth, deepest, singular, plural, levelNames: levels().map((l) => l.SingularName ?? '') })) changed();
  });

  // ── Leaving ──
  const ask = (heading: string, message: string, confirmLabel: string, cancelLabel: string): Promise<boolean> =>
    new Promise((resolve) => {
      Object.assign(confirmEl, { heading, message, confirmLabel, cancelLabel, variant: 'danger' });
      confirmEl.addEventListener('resolved', (e) => resolve(!!(e as CustomEvent<{ confirmed: boolean }>).detail?.confirmed), { once: true });
      confirmEl.open = true;
    });
  const askDiscard = () => ask('Discard Your Changes to This Page?', 'Every level goes back to how it was. Nothing you changed here is saved.', 'Discard', 'Keep Editing');
  function close(result: PageConfigResult): void {
    settled = true;
    dialog.open = false;
    window.bcnPageConfigPreview = undefined;
    iframe.removeAttribute('src');
    delete iframe.dataset.src;
    const s = settle;
    working = null;
    s(result);
  }
  q('[data-pcd-cancel]').addEventListener('click', async () => {
    if (dirty() && !(await askDiscard())) return;
    close(null);
  });
  q('[data-pcd-save]').addEventListener('click', () => {
    if (!working) return;
    const config = working;
    if (dirty()) {
      savePlanConfig(planID, config);
      close({ kind: 'saved', config });
    } else close(null);
  });
  q('[data-pcd-arrange]').addEventListener('click', () => {
    if (!working) return;
    close({ kind: 'arrange', config: working });
  });
  // The dialog's own exits (its X, Escape, the backdrop): with changes, it comes back and asks.
  dialog.addEventListener('close', async (e) => {
    if (e.target !== dialog || settled) return;
    if (!dirty()) return close(null);
    dialog.open = true;
    if (await askDiscard()) close(null);
  });

  return {
    async open(o) {
      planID = o.planID;
      plan = await planApi.getPlan(planID);
      const repo = getRepo(planID);
      deepest = Math.max(1, ...levels().map((l) => l.Depth ?? 1));
      tracksBudget = viewsOf(repo).includes('budget');
      working = spell(configOf(repo));
      initial = JSON.stringify(working);
      depth = Math.min(Math.max(1, o.depth), deepest);
      fromElement = o.elementId;
      fromDepth = o.elementId ? (flattenPlan(plan.Elements).find(({ element }) => element.PlanElementID === o.elementId)?.element.LevelDepth ?? 0) : 0;
      previewItem = o.elementId ?? '';
      selected = 'details';
      view = 'outline';
      void customElements.whenDefined('esa-button-toggle').then(() => (viewToggle.value = view));
      window.bcnPageConfigPreview = () => working;
      settled = false;
      draw();
      dialog.open = true;
      requestAnimationFrame(() => outline.focusSelected());
      return new Promise<PageConfigResult>((resolve) => (settle = resolve));
    },
  };
}
