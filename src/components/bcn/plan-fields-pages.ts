// <BcnPlanFieldsPages>' runtime (2026-10-28): the Fields and Pages section of Plan Settings. It edits the settings
// page's working configuration in place (host.config()) and says so (host.changed()); the page owns saving, the dirty
// state and the level list in its nav. The live preview is the element page itself, in an iframe, opened with
// `&preview=1`: every change writes the working configuration to PREVIEW_CONFIG_KEY (sessionStorage, which the iframe
// shares, and localStorage, whose write is what wakes it: an element page redraws on a storage event), debounced.
//
// Reading never writes: a level the plan has no layout for draws its default (levelConfig / modulesFor), and only the
// first change to it makes it the plan's own.

import { FIELD_SURFACES, FIELD_TYPES, MODULES, levelConfig, modulesFor, type FieldDef, type FieldSurface, type LevelConfig, type LevelField, type ModuleKey, type ModulePlacement, type PlanConfig } from '../../lib/planning/plan-config';
import { ELEMENT_HREF, PREVIEW_CONFIG_KEY } from '../../lib/planning/element-context';
import { flattenPlan } from '../../lib/planning/plan-repo';
import type { PlanDetailDto } from '../../lib/planning/model';
import { fillIcons } from '../../lib/planning/icons';
import { flip, sortable } from './plan-sortable';
import { setEsaButtonDisabled } from './plan-list-editor';
import { andList, type FieldDefOpenOptions } from './field-def-dialog';

export type LevelPick = 'all' | number;
export type FieldsPagesTab = 'page' | 'fields';
export interface LevelInfo {
  depth: number;
  singular: string;
  plural: string;
}

export interface FieldsPagesHost {
  planID: string;
  /** The page's working configuration; edited in place. */
  config(): PlanConfig;
  /** Something in config() changed. */
  changed(): void;
  /** The plan's levels as the page has them now (renames and additions included), top first. */
  levels(): LevelInfo[];
  /** Live, for the items the preview can show. */
  plan(): PlanDetailDto;
  readOnly(): boolean;
  /** Whether the plan tracks money (the What It Tracks section, as the page has it now). */
  tracksBudget(): boolean;
  isDeliverable(elementId: string): boolean;
  /** The level or tab changed here (the nav and the URL follow). */
  picked(level: LevelPick, tab: FieldsPagesTab): void;
  editField(opts: FieldDefOpenOptions): Promise<FieldDef | null>;
  confirm(heading: string, message: string, confirmLabel: string, cancelLabel: string, danger?: boolean): Promise<boolean>;
  toast(message: string): void;
}

export interface FieldsPages {
  select(level: LevelPick, tab?: FieldsPagesTab): void;
  readonly level: LevelPick;
  readonly tab: FieldsPagesTab;
  /** Everything again, from host.config() (after Discard, a save, or a change to the levels or what the plan tracks). */
  draw(): void;
  /** The section is on screen (the preview loads only then). */
  setVisible(visible: boolean): void;
  /** Writes the working configuration for the preview, after a pause. */
  schedulePreview(): void;
  /** Forgets the working configuration (on save, discard and leaving). */
  clearPreview(): void;
  /** Empties the preview (before the plan is deleted: an element page left open would look for it). */
  release(): void;
}

type SwitchEl = HTMLElement & { checked: boolean; disabled: boolean };
type SelectEl = HTMLElement & { value: string | string[]; options: { value: string; label: string }[]; disabled: boolean };
type ToggleEl = HTMLElement & { value: string; options: { value: string; label: string }[] };
type ChipsEl = HTMLElement & { values: string[]; options: { value: string; label: string }[] };
type MenuEl = HTMLElement & { items: { label: string; action?: string; divider?: boolean; disabled?: boolean }[] };

/** The element page renders at a laptop's content width (a 1440 screen less the app's nav), then scales to fit. */
const FRAME_WIDTH = 1100;
/** Items with the most to show, for the sample plan's levels (the brief's picks). */
const PREFERRED_PREVIEW = ['Detailed baseline study plan', 'Near-field intake behavior & survival', 'Migration & Survival Study'];
const NEW_FIELD = '__new';
/** Under "Shown In" the column is understood: the chips say where, short. */
const CHIP_LABEL: Record<FieldSurface, string> = { page: 'Page', drawer: 'Drawer', gantt: 'Gantt', sheet: 'Sheet', export: 'Exports' };

/** "a Task", "an Activity". */
const aOrAn = (word: string) => (/^[aeiou]/i.test(word) ? 'an' : 'a');
const typeLabel = (t: string) => FIELD_TYPES.find((x) => x.value === t)?.label ?? t;
const surfaceText = (shown: FieldSurface[]) => FIELD_SURFACES.filter((s) => shown.includes(s.value)).map((s) => s.label);
const freshField = (fieldId: string): LevelField => ({ fieldId, requiredToComplete: false, shownIn: ['page', 'drawer'] });

export function setupPlanFieldsPages(root: HTMLElement, host: FieldsPagesHost): FieldsPages {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const cols = { main: q('[data-pfp-col="main"]'), side: q('[data-pfp-col="side"]') };
  const bank = q('[data-pfp-module-bank]');
  const moduleRows = new Map<ModuleKey, HTMLElement>([...root.querySelectorAll<HTMLElement>('[data-pfp-module]')].map((row) => [row.dataset.pfpModule as ModuleKey, row]));
  const tabs = q<ToggleEl>('[data-pfp-tabs]');
  const canDeliver = q<SwitchEl>('[data-pfp-can-deliver]');
  const fieldsList = q('[data-pfp-fields]');
  const inheritedList = q('[data-pfp-inherited]');
  const library = q('[data-pfp-library]');
  const addMenu = q<MenuEl>('[data-pfp-add-menu]');
  const tpl = (name: string) => q<HTMLTemplateElement>(`template[data-pfp-tpl="${name}"]`).content.firstElementChild!;
  fillIcons(root);

  let level: LevelPick = 1;
  let tab: FieldsPagesTab = 'page';
  let visible = false;

  // ── The configuration, read and written ──
  const deepest = () => Math.max(1, host.levels().length);
  const levelInfo = (depth: number) => host.levels().find((l) => l.depth === depth) ?? { depth, singular: `Level ${depth}`, plural: `Level ${depth}` };
  /** A level's config to change: the plan's own, made from the default the first time, with every module placed. */
  function levelOf(depth: number): LevelConfig {
    const config = host.config();
    const d = deepest();
    config.levels[depth] ??= JSON.parse(JSON.stringify(levelConfig(config, depth, d))) as LevelConfig;
    config.levels[depth].modules = modulesFor(config, depth, d);
    return config.levels[depth];
  }
  const readLevel = (depth: number) => levelConfig(host.config(), depth, deepest());
  function changed(): void {
    host.changed();
    schedulePreview();
  }
  const readOnly = () => host.readOnly();

  /** Where a field is used, by name: All Levels, then the levels top down. */
  function usedOn(fieldId: string): string[] {
    const config = host.config();
    const names: string[] = [];
    if (config.allLevels.some((f) => f.fieldId === fieldId)) names.push('All Levels');
    for (const l of host.levels()) if (readLevel(l.depth).fields.some((f) => f.fieldId === fieldId)) names.push(l.singular);
    return names;
  }

  // ── Header: the level's name, its count, the tabs, Can Be a Deliverable ──
  void customElements.whenDefined('esa-button-toggle').then(() => {
    tabs.options = [
      { label: 'Page', value: 'page' },
      { label: 'Fields', value: 'fields' },
    ];
    tabs.value = tab;
  });
  tabs.addEventListener('change', () => {
    const next = (tabs.value as FieldsPagesTab) || 'page';
    if (next === tab) return;
    tab = next;
    drawTab();
    host.picked(level, tab);
  });

  function itemsAt(pick: LevelPick): { id: string; name: string; depth: number; children: number }[] {
    return flattenPlan(host.plan().Elements)
      .map(({ element, path }) => ({ id: element.PlanElementID ?? '', name: element.PlanElementName ?? '', depth: element.LevelDepth ?? path.length + 1, children: element.Children?.length ?? 0 }))
      .filter((e) => pick === 'all' || e.depth === pick);
  }

  function drawHead(): void {
    const all = level === 'all';
    const info = all ? null : levelInfo(level as number);
    const n = itemsAt(level).length;
    q('[data-pfp-title]').textContent = all ? 'All Levels' : info!.singular;
    q('[data-pfp-count]').textContent = all ? `${n} ${n === 1 ? 'Item' : 'Items'}` : `${n} ${n === 1 ? info!.singular : info!.plural}`;
    q('[data-pfp-tabs-wrap]').hidden = all;
    // Can Be a Deliverable is the level's, but what it brings is page modules: it sits with the Page tab.
    q('[data-pfp-deliverable]').hidden = all || tab !== 'page';
    q('[data-pfp-lede]').textContent = all
      ? 'Fields every item carries, whatever its level: defined once, they lead every level’s fields.'
      : tab === 'page'
        ? `The modules on ${aOrAn(info!.singular)} ${info!.singular}’s page, in order, in two columns. Drag one, or use its Move buttons.`
        : `The fields ${aOrAn(info!.singular)} ${info!.singular} carries, after the ones on All Levels.`;
    if (!all) {
      canDeliver.checked = readLevel(level as number).canBeDeliverable;
      canDeliver.disabled = readOnly();
      q('[data-pfp-deliver-hint]').textContent = `Any ${info!.singular} can then be flagged a deliverable, which brings its Transmittals and Completion.`;
    }
    if (customElements.get('esa-button-toggle')) tabs.value = all ? 'fields' : tab;
    q('[data-pfp-preview-note]').textContent = all
      ? 'A page as it will look with these settings. Saving applies them to every item.'
      : `The page as it will look with these settings. Saving applies them to every ${info!.singular}.`;
  }
  canDeliver.addEventListener('change', () => {
    if (level === 'all' || readOnly()) return;
    levelOf(level).canBeDeliverable = canDeliver.checked;
    changed();
    drawPage();
  });

  function drawTab(): void {
    const page = level !== 'all' && tab === 'page';
    q('[data-pfp-panel="page"]').hidden = !page;
    q('[data-pfp-panel="fields"]').hidden = page;
    drawHead();
    if (page) drawPage();
    else drawFields();
  }

  // ── Page: the two columns ──
  const visibleToOptions = [
    { value: 'everyone', label: 'Everyone' },
    { value: 'editors', label: 'Owners and Editors' },
  ];
  const optSelect = (row: HTMLElement, name: string) => row.querySelector<SelectEl>(`[data-pfp-opt="${name}"]`);
  void customElements.whenDefined('esa-select').then(() => {
    const vis = optSelect(moduleRows.get('budget')!, 'visibleTo');
    if (vis) vis.options = visibleToOptions;
  });

  function whyNot(p: ModulePlacement, lvl: LevelConfig, depth: number): string {
    const kind = MODULES[p.key].kind;
    if (kind === 'deliverable' && !lvl.canBeDeliverable) return 'Turn on Can Be a Deliverable to use it here.';
    if (kind === 'parents' && depth >= deepest()) return 'Items at the lowest level have no children, so it won’t show.';
    if (p.key === 'budget' && !host.tracksBudget()) return 'The plan doesn’t track a budget, so it won’t show.';
    return '';
  }

  function drawPage(): void {
    if (level === 'all') return;
    const depth = level;
    const config = host.config();
    const lvl = readLevel(depth);
    const placements = modulesFor(config, depth, deepest());
    for (const p of placements) {
      const row = moduleRows.get(p.key);
      if (!row) continue;
      (p.column === 'side' ? cols.side : cols.main).append(row);
      const always = MODULES[p.key].kind === 'core' || MODULES[p.key].kind === 'shared';
      const on = always || p.on;
      const sw = row.querySelector<SwitchEl>('[data-pfp-switch]')!;
      sw.checked = on;
      sw.disabled = always || readOnly();
      row.toggleAttribute('data-off', !on);
      const why = row.querySelector<HTMLElement>('[data-pfp-why]')!;
      why.textContent = on ? whyNot(p, lvl, depth) : '';
      why.hidden = !why.textContent;
      row.querySelector('[data-pfp-across-tip]')?.setAttribute('text', p.column === 'main' ? 'Move to Side Column' : 'Move to Main Column');
      // Options.
      const vis = optSelect(row, 'visibleTo');
      if (vis) {
        vis.value = p.settings?.visibleTo ?? 'everyone';
        vis.disabled = readOnly();
      }
      const types = optSelect(row, 'documentTypes');
      if (types) {
        types.options = config.documentTypes.map((t) => ({ value: t, label: t }));
        types.value = (p.settings?.documentTypes ?? []).filter((t) => config.documentTypes.includes(t));
        types.disabled = readOnly();
      }
      const timeline = row.querySelector<SwitchEl>('[data-pfp-opt="childTimeline"]');
      if (timeline) {
        timeline.checked = !!p.settings?.childTimeline;
        timeline.disabled = readOnly();
      }
    }
    // Rows the level doesn't place go back to the bank (none today; a module added later would).
    for (const [key, row] of moduleRows) if (!placements.some((p) => p.key === key)) bank.append(row);
    syncModuleEnds();
  }
  function syncModuleEnds(): void {
    for (const list of [cols.main, cols.side]) {
      const rows = [...list.querySelectorAll<HTMLElement>(':scope > [data-pfp-module]')];
      rows.forEach((row, i) => {
        const up = row.querySelector<HTMLButtonElement>('[data-pfp-act="up"] button');
        const down = row.querySelector<HTMLButtonElement>('[data-pfp-act="down"] button');
        setEsaButtonDisabled(up, i === 0);
        setEsaButtonDisabled(down, i === rows.length - 1);
      });
    }
  }

  /** Puts a module at `index` in a column (the index among that column's modules without it). */
  function moveModule(key: ModuleKey, column: 'main' | 'side', index: number): void {
    if (level === 'all' || readOnly()) return;
    const lvl = levelOf(level);
    const p = lvl.modules.find((m) => m.key === key);
    if (!p) return;
    const rest = lvl.modules.filter((m) => m !== p);
    const main = rest.filter((m) => m.column === 'main');
    const side = rest.filter((m) => m.column === 'side');
    p.column = column;
    const into = column === 'main' ? main : side;
    into.splice(Math.max(0, Math.min(index, into.length)), 0, p);
    lvl.modules = [...main, ...side];
    changed();
    flip([...moduleRows.values()], () => drawPage());
  }

  for (const [key, row] of moduleRows) {
    const sw = row.querySelector<SwitchEl>('[data-pfp-switch]')!;
    sw.addEventListener('change', () => {
      const kind = MODULES[key].kind;
      if (level === 'all' || readOnly() || kind === 'core' || kind === 'shared') return;
      const p = levelOf(level).modules.find((m) => m.key === key);
      if (!p) return;
      p.on = sw.checked;
      changed();
      drawPage();
    });
    const setting = (patch: Partial<NonNullable<ModulePlacement['settings']>>) => {
      if (level === 'all' || readOnly()) return;
      const p = levelOf(level).modules.find((m) => m.key === key);
      if (!p) return;
      p.settings = { ...p.settings, ...patch };
      changed();
    };
    optSelect(row, 'visibleTo')?.addEventListener('change', (e) => setting({ visibleTo: ((e.target as SelectEl).value as 'everyone' | 'editors') || 'everyone' }));
    optSelect(row, 'documentTypes')?.addEventListener('change', (e) => {
      const picked = [(e.target as SelectEl).value].flat().filter(Boolean) as string[];
      // In the plan's order, so the module offers them in the order the plan lists them.
      setting({ documentTypes: host.config().documentTypes.filter((t) => picked.includes(t)) });
    });
    row.querySelector<SwitchEl>('[data-pfp-opt="childTimeline"]')?.addEventListener('change', (e) => setting({ childTimeline: (e.target as SwitchEl).checked }));
    row.querySelector('[data-pfp-tools]')!.addEventListener('click', (e) => {
      const act = (e.target as Element).closest<HTMLElement>('[data-pfp-act]')?.dataset.pfpAct;
      if (!act || level === 'all') return;
      const column = (row.parentElement === cols.side ? 'side' : 'main') as 'main' | 'side';
      const at = [...row.parentElement!.querySelectorAll(':scope > [data-pfp-module]')].indexOf(row);
      if (act === 'up') moveModule(key, column, at - 1);
      else if (act === 'down') moveModule(key, column, at + 1);
      else if (act === 'across') moveModule(key, column === 'main' ? 'side' : 'main', Number.MAX_SAFE_INTEGER);
      // The row moved, and focus with it went; it comes back to the same button (or its twin at a column's end).
      const same = row.querySelector<HTMLButtonElement>(`[data-pfp-act="${act}"] button`);
      const twin = row.querySelector<HTMLButtonElement>(`[data-pfp-act="${act === 'up' ? 'down' : 'up'}"] button`);
      requestAnimationFrame(() => (same && !same.disabled ? same : twin)?.focus());
    });
  }

  sortable(q('[data-pfp-panel="page"]'), {
    lists: () => [cols.main, cols.side],
    row: '[data-pfp-module]',
    grip: '[data-pfp-grip]',
    disabled: () => readOnly() || level === 'all',
    ghost: (row) => {
      const ghost = row.cloneNode(true) as HTMLElement;
      ghost.querySelectorAll('[data-pfp-opts], [data-pfp-tools], [data-pfp-why]').forEach((n) => n.remove());
      return ghost;
    },
    onDrop: (row, list, index) => moveModule(row.dataset.pfpModule as ModuleKey, list.dataset.pfpCol as 'main' | 'side', index),
  });

  q('[data-pfp-reset]').addEventListener('click', () => {
    if (level === 'all' || readOnly()) return;
    const lvl = levelOf(level);
    lvl.modules = modulesFor({ ...host.config(), levels: {} }, level, deepest());
    changed();
    flip([...moduleRows.values()], () => drawPage());
    host.toast(`${levelInfo(level).singular} layout reset. Discard puts it back.`);
  });

  // ── Fields ──
  const ownFields = (): LevelField[] => (level === 'all' ? host.config().allLevels : levelOf(level).fields);
  const readOwn = (): LevelField[] => (level === 'all' ? host.config().allLevels : readLevel(level).fields);
  const defOf = (id: string) => host.config().fields.find((f) => f.id === id);
  const levelWords = () => (level === 'all' ? 'All Levels' : levelInfo(level).singular);

  function drawFields(): void {
    const config = host.config();
    const all = level === 'all';
    // From All Levels, read-only here.
    const inherited = all ? [] : config.allLevels.filter((a) => defOf(a.fieldId));
    q('[data-pfp-inherited-wrap]').hidden = all || !inherited.length;
    inheritedList.replaceChildren(
      ...inherited.map((a) => {
        const def = defOf(a.fieldId)!;
        const row = tpl('inherited').cloneNode(true) as HTMLElement;
        row.querySelector('[data-f-label]')!.textContent = def.label;
        row.querySelector('[data-f-type]')!.textContent = typeLabel(def.type);
        const shown = surfaceText(a.shownIn);
        row.querySelector('[data-f-summary]')!.textContent = `${a.requiredToComplete ? 'Required to complete. ' : ''}${shown.length ? `Shown in ${andList(shown.map((s) => s.toLowerCase().replace('gantt', 'Gantt')))}.` : 'Shown nowhere.'}`;
        return row;
      })
    );
    // Its own.
    q('[data-pfp-own-heading]').textContent = all ? 'Fields on Every Level' : `${levelInfo(level as number).singular} Fields`;
    const own = readOwn().filter((a) => defOf(a.fieldId));
    fieldsList.replaceChildren(
      ...own.map((a, i) => {
        const def = defOf(a.fieldId)!;
        const row = tpl('field').cloneNode(true) as HTMLElement;
        row.dataset.fieldId = a.fieldId;
        row.querySelector('[data-f-label]')!.textContent = def.label;
        row.querySelector('[data-f-type]')!.textContent = def.type === 'number' && def.unit ? `${typeLabel(def.type)}, in ${def.unit}` : typeLabel(def.type);
        const req = row.querySelector<SwitchEl>('[data-f-required]')!;
        req.checked = a.requiredToComplete;
        req.disabled = readOnly();
        const chips = row.querySelector<ChipsEl>('[data-f-shown]')!;
        chips.setAttribute('label', `${def.label}: Shown In`);
        void customElements.whenDefined('esa-chip-group').then(() => {
          chips.options = FIELD_SURFACES.map((s) => ({ value: s.value, label: CHIP_LABEL[s.value], tone: 'brand' }));
          chips.values = [...a.shownIn];
        });
        const up = row.querySelector<HTMLButtonElement>('[data-pfp-act="up"] button');
        const down = row.querySelector<HTMLButtonElement>('[data-pfp-act="down"] button');
        setEsaButtonDisabled(up, i === 0);
        setEsaButtonDisabled(down, i === own.length - 1);
        return row;
      })
    );
    fillIcons(fieldsList);
    q('[data-pfp-fields-empty]').hidden = own.length > 0;
    q('[data-pfp-fields-empty]').textContent = all ? 'No fields on every level yet.' : `No ${levelInfo(level as number).singular} fields yet.`;
    drawAddMenu();
    drawLibrary();
  }

  function drawAddMenu(): void {
    const config = host.config();
    const own = new Set(readOwn().map((a) => a.fieldId));
    const inherited = new Set(level === 'all' ? [] : config.allLevels.map((a) => a.fieldId));
    const available = config.fields.filter((f) => !own.has(f.id) && !inherited.has(f.id));
    const items = available.map((f) => ({ label: `${f.label} (${typeLabel(f.type)})`, action: f.id }));
    void customElements.whenDefined('esa-dropdown-menu').then(() => {
      addMenu.items = [...items, ...(items.length ? [{ label: '', divider: true }] : []), { label: 'New Field', action: NEW_FIELD }];
    });
  }

  /** A field onto the level (or All Levels). On All Levels, it comes off the levels that had it on their own. */
  function assign(fieldId: string): void {
    const config = host.config();
    const def = defOf(fieldId);
    if (!def) return;
    if (level === 'all') {
      const had = host.levels().filter((l) => readLevel(l.depth).fields.some((f) => f.fieldId === fieldId));
      const carried = had.map((l) => levelOf(l.depth).fields.find((f) => f.fieldId === fieldId)!);
      for (const l of had) levelOf(l.depth).fields = levelOf(l.depth).fields.filter((f) => f.fieldId !== fieldId);
      config.allLevels.push(carried[0] ? { ...carried[0] } : freshField(fieldId));
      if (had.length) host.toast(`${def.label} is on All Levels now, so it came off ${andList(had.map((l) => l.singular))}.`);
    } else {
      ownFields().push(freshField(fieldId));
    }
    changed();
    drawFields();
  }

  addMenu.addEventListener('menu-action', async (e) => {
    if (readOnly()) return;
    const action = (e as CustomEvent<string>).detail;
    if (action === NEW_FIELD) {
      const def = await host.editField({ existing: host.config().fields });
      if (!def) return;
      host.config().fields.push(def);
      assign(def.id);
      return;
    }
    if (action) assign(action);
  });

  async function editDef(id: string): Promise<void> {
    const config = host.config();
    const def = defOf(id);
    if (!def) return;
    const next = await host.editField({ def, existing: config.fields, usedOn: usedOn(id) });
    if (!next) return;
    config.fields = config.fields.map((f) => (f.id === id ? next : f));
    changed();
    drawFields();
  }

  function moveField(fieldId: string, index: number): void {
    if (readOnly()) return;
    const list = ownFields();
    const from = list.findIndex((f) => f.fieldId === fieldId);
    if (from < 0) return;
    const [a] = list.splice(from, 1);
    list.splice(Math.max(0, Math.min(index, list.length)), 0, a);
    changed();
    const rows = [...fieldsList.querySelectorAll<HTMLElement>('[data-pfp-field]')];
    flip(rows, () => {
      const row = rows.find((r) => r.dataset.fieldId === fieldId)!;
      const others = rows.filter((r) => r !== row);
      fieldsList.insertBefore(row, others[index] ?? null);
    });
    [...fieldsList.querySelectorAll<HTMLElement>('[data-pfp-field]')].forEach((row, i, all) => {
      const up = row.querySelector<HTMLButtonElement>('[data-pfp-act="up"] button');
      const down = row.querySelector<HTMLButtonElement>('[data-pfp-act="down"] button');
      setEsaButtonDisabled(up, i === 0);
      setEsaButtonDisabled(down, i === all.length - 1);
    });
  }

  fieldsList.addEventListener('change', (e) => {
    if (readOnly()) return;
    const target = e.target as HTMLElement;
    const row = target.closest<HTMLElement>('[data-pfp-field]');
    const a = row && ownFields().find((f) => f.fieldId === row.dataset.fieldId);
    if (!a) return;
    if (target.matches('[data-f-required]')) a.requiredToComplete = (target as SwitchEl).checked;
    else if (target.matches('[data-f-shown]')) {
      const values = (target as ChipsEl).values ?? [];
      a.shownIn = FIELD_SURFACES.map((s) => s.value).filter((v) => values.includes(v));
    } else return;
    changed();
  });
  fieldsList.addEventListener('click', async (e) => {
    if (readOnly()) return;
    const act = (e.target as Element).closest<HTMLElement>('[data-pfp-act]')?.dataset.pfpAct;
    const row = (e.target as Element).closest<HTMLElement>('[data-pfp-field]');
    if (!act || !row) return;
    const id = row.dataset.fieldId ?? '';
    const at = readOwn().findIndex((f) => f.fieldId === id);
    if (act === 'up' || act === 'down') {
      moveField(id, act === 'up' ? at - 1 : at + 1);
      const same = row.querySelector<HTMLButtonElement>(`[data-pfp-act="${act}"] button`);
      const twin = row.querySelector<HTMLButtonElement>(`[data-pfp-act="${act === 'up' ? 'down' : 'up'}"] button`);
      requestAnimationFrame(() => (same && !same.disabled ? same : twin)?.focus());
    } else if (act === 'edit') void editDef(id);
    else if (act === 'remove') {
      const def = defOf(id);
      if (!def) return;
      const all = level === 'all';
      const who = all ? 'No item' : `No ${levelInfo(level as number).singular}`;
      const ok = await host.confirm(
        `Remove ${def.label} From ${levelWords()}?`,
        `${who} shows it after you save. Values already entered stay on every item and come back if you add it again: nothing is deleted.`,
        'Remove Field',
        'Keep Field'
      );
      if (!ok) return;
      if (all) host.config().allLevels = host.config().allLevels.filter((f) => f.fieldId !== id);
      else levelOf(level as number).fields = levelOf(level as number).fields.filter((f) => f.fieldId !== id);
      changed();
      drawFields();
    }
  });
  sortable(fieldsList, {
    lists: () => [fieldsList],
    row: '[data-pfp-field]',
    grip: '[data-pfp-grip]',
    disabled: readOnly,
    ghost: (row) => {
      const ghost = row.cloneNode(true) as HTMLElement;
      ghost.querySelectorAll('.bcn-pfp__field-opts, [data-pfp-tools]').forEach((n) => n.remove());
      return ghost;
    },
    onDrop: (row, _list, index) => moveField(row.dataset.fieldId ?? '', index),
  });
  q('[data-pfp-goto-all]').addEventListener('click', () => select('all'));

  // ── The library ──
  function drawLibrary(): void {
    const config = host.config();
    library.replaceChildren(
      ...config.fields.map((def) => {
        const row = tpl('library').cloneNode(true) as HTMLElement;
        row.dataset.fieldId = def.id;
        row.querySelector('[data-lib-label]')!.textContent = def.label;
        row.querySelector('[data-lib-type]')!.textContent = typeLabel(def.type);
        const used = usedOn(def.id);
        row.querySelector('[data-lib-used]')!.textContent = used.length ? used.join(', ') : 'Not Used';
        row.toggleAttribute('data-unused', !used.length);
        // A field in use can't be deleted: take it off its levels first.
        const del = row.querySelector<HTMLElement>('[data-lib-act="delete"]')!.closest('esa-tooltip') as HTMLElement;
        del.style.visibility = used.length ? 'hidden' : '';
        return row;
      })
    );
    fillIcons(library);
  }
  library.addEventListener('click', async (e) => {
    if (readOnly()) return;
    const act = (e.target as Element).closest<HTMLElement>('[data-lib-act]')?.dataset.libAct;
    const id = (e.target as Element).closest<HTMLElement>('[data-pfp-lib-row]')?.dataset.fieldId;
    if (!act || !id) return;
    if (act === 'edit') return void editDef(id);
    const def = defOf(id);
    if (!def || usedOn(id).length) return;
    const ok = await host.confirm(`Delete ${def.label}?`, 'It comes out of the plan’s field library. Values items already have are kept.', 'Delete Field', 'Keep Field', true);
    if (!ok) return;
    host.config().fields = host.config().fields.filter((f) => f.id !== id);
    changed();
    drawFields();
  });
  q('[data-pfp-new-field]').addEventListener('click', async () => {
    if (readOnly()) return;
    const def = await host.editField({ existing: host.config().fields });
    if (!def) return;
    host.config().fields.push(def);
    changed();
    drawFields();
    host.toast(`${def.label} is in the library. Add it to a level to use it.`);
  });

  // ── The preview ──
  const frame = q<HTMLIFrameElement>('[data-pfp-frame]');
  const stage = q('[data-pfp-stage]');
  const pick = q<SelectEl>('[data-pfp-preview-el]');
  const picks = new Map<LevelPick, string>();
  let loaded: string | null = null;
  let scale = 1;
  let writeTimer = 0;

  function defaultPick(pickLevel: LevelPick): string | null {
    const items = itemsAt(pickLevel);
    if (!items.length) return null;
    for (const name of PREFERRED_PREVIEW) {
      const hit = items.find((i) => i.name === name);
      if (hit) return hit.id;
    }
    const deep = deepest();
    if (pickLevel === 'all' || pickLevel >= deep) {
      const leaves = items.filter((i) => i.depth >= deep);
      return (leaves.find((i) => host.isDeliverable(i.id)) ?? leaves[0] ?? items[0]).id;
    }
    // A parent with the most children shows the most.
    return [...items].sort((a, b) => b.children - a.children)[0].id;
  }
  const currentPick = () => {
    const items = itemsAt(level);
    const kept = picks.get(level);
    return kept && items.some((i) => i.id === kept) ? kept : defaultPick(level);
  };

  function drawPicker(): void {
    const items = itemsAt(level);
    const names = new Map(host.levels().map((l) => [l.depth, l.singular]));
    void customElements.whenDefined('esa-select').then(() => {
      pick.options = items.map((i) => ({ value: i.id, label: level === 'all' ? `${i.name} (${names.get(i.depth) ?? 'Item'})` : i.name }));
      pick.value = currentPick() ?? '';
    });
    pick.hidden = !items.length;
  }
  pick.addEventListener('change', () => {
    const id = String(pick.value || '');
    if (!id) return;
    picks.set(level, id);
    loadPreview();
  });

  function fit(): void {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    if (!w || !h) return;
    scale = w / FRAME_WIDTH;
    frame.style.width = `${FRAME_WIDTH}px`;
    frame.style.height = `${Math.ceil(h / scale)}px`;
    frame.style.transform = `scale(${scale})`;
  }
  new ResizeObserver(fit).observe(stage);

  function writePreview(): void {
    const json = JSON.stringify(host.config());
    try {
      sessionStorage.setItem(PREVIEW_CONFIG_KEY(host.planID), json);
    } catch {
      /* the preview falls back to localStorage */
    }
    try {
      localStorage.setItem(PREVIEW_CONFIG_KEY(host.planID), json);
    } catch {
      /* a blocked store: the preview shows the saved configuration */
    }
  }
  function schedulePreview(): void {
    clearTimeout(writeTimer);
    writeTimer = window.setTimeout(writePreview, 250);
  }

  function loadPreview(): void {
    if (!visible) return;
    const id = currentPick();
    const empty = q('[data-pfp-preview-empty]');
    empty.hidden = !!id;
    frame.hidden = !id;
    const open = root.querySelector<HTMLAnchorElement>('[data-pfp-preview-open] a');
    (root.querySelector('[data-pfp-preview-open]')!.closest('esa-tooltip') as HTMLElement).hidden = !id;
    if (!id) {
      open?.removeAttribute('href');
      return;
    }
    const src = `${ELEMENT_HREF(host.planID, id)}&preview=1`;
    if (open) open.href = src;
    if (loaded === id) return;
    clearTimeout(writeTimer);
    writePreview();
    loaded = id;
    frame.toggleAttribute('data-loading', true);
    frame.src = src;
  }
  // The element page hides the shell's chrome in preview mode itself: the iframe shows the title and the two columns.
  frame.addEventListener('load', () => frame.removeAttribute('data-loading'));
  // The preview scrolls under the wheel; its links and buttons don't take clicks.
  q('[data-pfp-shield]').addEventListener(
    'wheel',
    (e) => {
      const scroller = frame.contentDocument?.querySelector<HTMLElement>('.modern-layout__content') ?? frame.contentDocument?.scrollingElement;
      if (!scroller) return;
      e.preventDefault();
      scroller.scrollTop += e.deltaY / scale;
    },
    { passive: false }
  );

  // ── Choosing a level ──
  function select(next: LevelPick, nextTab?: FieldsPagesTab): void {
    level = next;
    if (nextTab) tab = nextTab;
    root.toggleAttribute('data-readonly', readOnly());
    drawTab();
    drawPicker();
    loadPreview();
    host.picked(level, tab);
  }

  return {
    select,
    get level() {
      return level;
    },
    get tab() {
      return tab;
    },
    draw() {
      if (level !== 'all' && !host.levels().some((l) => l.depth === level)) level = host.levels()[0]?.depth ?? 'all';
      root.toggleAttribute('data-readonly', readOnly());
      drawTab();
      drawPicker();
      loadPreview();
    },
    setVisible(next) {
      visible = next;
      if (next) {
        requestAnimationFrame(fit);
        loadPreview();
      }
    },
    schedulePreview,
    release() {
      loaded = null;
      frame.src = 'about:blank';
    },
    clearPreview() {
      clearTimeout(writeTimer);
      try {
        sessionStorage.removeItem(PREVIEW_CONFIG_KEY(host.planID));
      } catch {
        /* nothing kept */
      }
      try {
        localStorage.removeItem(PREVIEW_CONFIG_KEY(host.planID));
      } catch {
        /* nothing kept */
      }
    },
  };
}
