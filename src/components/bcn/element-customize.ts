// <BcnElementCustomize>'s runtime (2026-10-28): a level's page customized in place. start() takes a working copy of
// the plan's configuration with this level's layout spelled out (every card, on or off); the page draws with it
// (working()), and calls decorate() on every card as it places it. Each change edits the working copy and redraws.
// Save Page writes it (savePlanConfig: settings, no revision); Cancel drops it. Owners only, on Live.

import { configOf, flattenPlan, savePlanConfig } from '../../lib/planning/plan-repo';
import { MODULES, clonePlanConfig, levelConfig, modulesFor, type ModuleKey, type ModulePlacement, type PlanConfig } from '../../lib/planning/plan-config';
import type { ElementContext } from '../../lib/planning/element-context';
import { fillIcons } from '../../lib/planning/icons';
import { confirm, pushAlert } from '../../lib/planning/plan-page';
import { badge } from './badge-bank';
import { sortable } from './plan-sortable';
import { setEsaButtonDisabled } from './plan-list-editor';
import { setupFieldDefDialog } from './field-def-dialog';
import { setupLevelFieldsDialog } from './level-fields-dialog';

type SwitchEl = HTMLElement & { checked: boolean };
type ToggleEl = HTMLElement & { value: string; options: { value: string; label: string }[] };
type ChecksEl = HTMLElement & { value: string[]; options: { value: string; label: string }[] };

export interface CustomizeHost {
  planID: string;
  ctx(): ElementContext | null;
  /** Redraws the page (with working(), while customizing). */
  draw(): Promise<void>;
  /** The page's two columns. */
  cols(): { main: HTMLElement; side: HTMLElement };
  /** The page's root: it carries data-customizing while you work. */
  page: HTMLElement;
}

export interface Customizer {
  /** The working configuration while customizing; null otherwise. */
  working(): PlanConfig | null;
  start(): void;
  /** A card as the page placed it: its grip, controls and ghost state. */
  decorate(card: HTMLElement, p: ModulePlacement, ctx: ElementContext, shows: boolean): void;
  /** A card back to itself. */
  undecorate(card: HTMLElement): void;
  /** The page drew: the bar's words follow. */
  drawn(ctx: ElementContext): void;
}

const VISIBILITY = [
  { value: 'everyone', label: 'Everyone' },
  { value: 'editors', label: 'Owners and Editors' },
];

export function setupElementCustomize(root: HTMLElement, host: CustomizeHost): Customizer {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const bar = q('[data-elc-bar]');
  const deliver = q<SwitchEl>('[data-elc-deliver]');
  const controlsTpl = q<HTMLTemplateElement>('template[data-elc-tpl="controls"]').content.firstElementChild!;
  const footTpl = q<HTMLTemplateElement>('template[data-elc-tpl="fields-foot"]').content.firstElementChild!;
  const fieldDef = setupFieldDefDialog(q('[data-bcn-field-def]'));
  const levelFields = setupLevelFieldsDialog(q('[data-bcn-level-fields]'), (opts) => fieldDef.open(opts));
  // The bar sits at the top of the page, above the columns.
  host.page.prepend(bar);

  let working: PlanConfig | null = null;
  let depth = 1;
  let initial = '';
  const wired = new WeakSet<HTMLElement>();

  const level = () => working!.levels[depth];
  const placement = (key: ModuleKey) => level().modules.find((m) => m.key === key)!;
  const dirty = () => !!working && JSON.stringify(working) !== initial;
  const names = (ctx: ElementContext) => {
    const l = (ctx.plan.Levels ?? []).find((x) => x.Depth === ctx.depth);
    return { singular: l?.SingularName ?? ctx.levelName, plural: l?.PluralName ?? `${ctx.levelName}s` };
  };

  function change(): void {
    void host.draw();
  }

  // ── Order: within a column, and across ──
  function columnKeys(column: 'main' | 'side'): ModuleKey[] {
    return level()
      .modules.filter((m) => m.column === column)
      .map((m) => m.key);
  }
  function placeAt(key: ModuleKey, column: 'main' | 'side', index: number): void {
    const main = columnKeys('main').filter((k) => k !== key);
    const side = columnKeys('side').filter((k) => k !== key);
    const target = column === 'main' ? main : side;
    target.splice(Math.max(0, Math.min(index, target.length)), 0, key);
    const byKey = new Map(level().modules.map((m) => [m.key, m]));
    level().modules = [...main.map((k) => ({ ...byKey.get(k)!, column: 'main' as const })), ...side.map((k) => ({ ...byKey.get(k)!, column: 'side' as const }))];
  }
  function move(key: ModuleKey, how: 'up' | 'down' | 'column'): void {
    const p = placement(key);
    const keys = columnKeys(p.column);
    const at = keys.indexOf(key);
    if (how === 'column') placeAt(key, p.column === 'main' ? 'side' : 'main', Number.MAX_SAFE_INTEGER);
    else placeAt(key, p.column, how === 'up' ? at - 1 : at + 1);
    change();
  }
  sortable(host.page, {
    lists: () => [host.cols().main, host.cols().side],
    row: '.bcn-elm',
    grip: '[data-elm-grip]',
    disabled: () => !working,
    ghost: (row) => {
      const ghost = row.cloneNode(true) as HTMLElement;
      ghost.querySelector('[data-elm-body]')?.remove();
      ghost.querySelector('[data-elm-custom-foot]')?.remove();
      return ghost;
    },
    onDrop: (row, list, index) => {
      const key = row.dataset.elementModule as ModuleKey;
      placeAt(key, list === host.cols().side ? 'side' : 'main', index);
      change();
    },
  });

  // ── One card's controls, wired once; they read the working layout when they fire ──
  function wire(card: HTMLElement, key: ModuleKey): void {
    if (wired.has(card)) return;
    wired.add(card);
    const custom = card.querySelector<HTMLElement>('[data-elm-custom]')!;
    custom.replaceChildren(controlsTpl.cloneNode(true));
    fillIcons(custom);
    // The controls' own events stay theirs: a module listening on its card for change mustn't hear them.
    custom.addEventListener('change', (e) => {
      e.stopPropagation();
      if (!working) return;
      const target = e.target as HTMLElement;
      const p = placement(key);
      if (target.matches('[data-elc-on]')) p.on = (target as SwitchEl).checked;
      else if (target.matches('[data-elc-visible]')) p.settings = { ...p.settings, visibleTo: (target as ToggleEl).value as 'everyone' | 'editors' };
      else if (target.matches('[data-elc-types]')) p.settings = { ...p.settings, documentTypes: [...((target as ChecksEl).value ?? [])] };
      else if (target.matches('[data-elc-timeline]')) p.settings = { ...p.settings, childTimeline: (target as SwitchEl).checked };
      else return;
      change();
    });
    custom.addEventListener('click', (e) => {
      const how = (e.target as Element).closest<HTMLElement>('[data-elc-move]')?.dataset.elcMove as 'up' | 'down' | 'column' | undefined;
      if (how && working) move(key, how);
    });
    if (key === 'details') {
      const foot = card.querySelector<HTMLElement>('[data-elm-custom-foot]')!;
      foot.replaceChildren(footTpl.cloneNode(true));
      fillIcons(foot);
      foot.querySelector('[data-elc-fields]')!.addEventListener('click', async () => {
        const ctx = host.ctx();
        if (!working || !ctx) return;
        const { singular, plural } = names(ctx);
        const levelNames = [...(ctx.plan.Levels ?? [])].sort((a, b) => (a.Depth ?? 0) - (b.Depth ?? 0)).map((l) => l.SingularName ?? '');
        if (await levelFields.open({ config: working, depth, deepest: ctx.deepest, singular, plural, levelNames })) change();
      });
    }
  }

  function ghostWhy(p: ModulePlacement, ctx: ElementContext): string {
    const { singular } = names(ctx);
    const kind = MODULES[p.key].kind;
    if (!p.on) return `Off. Switch it on to show it on every ${singular}.`;
    if (kind === 'deliverable' && !ctx.level.canBeDeliverable) return 'Shows on deliverables. Turn on Can Be a Deliverable above.';
    if (kind === 'deliverable') return `Shows on deliverables. This ${singular} isn’t one.`;
    if (kind === 'parents') return `Shows on items with children. This ${singular} has none.`;
    if (p.key === 'budget' && !ctx.tracksBudget) return 'Shows when the plan tracks a budget.';
    return 'Not shown here.';
  }

  function decorate(card: HTMLElement, p: ModulePlacement, ctx: ElementContext, shows: boolean): void {
    const key = p.key;
    wire(card, key);
    const kind = MODULES[key].kind;
    card.querySelector<HTMLElement>('[data-elm-grip]')!.hidden = false;
    const custom = card.querySelector<HTMLElement>('[data-elm-custom]')!;
    custom.hidden = false;
    const tag = custom.querySelector<HTMLElement>('[data-elc-tag]')!;
    const tagText = kind === 'core' || kind === 'shared' ? 'Always On' : kind === 'deliverable' ? 'Deliverables Only' : kind === 'parents' ? 'Items With Children Only' : '';
    tag.replaceChildren(...(tagText ? [badge(tagText, 'neutral', 'sm')] : []));
    const on = custom.querySelector<SwitchEl>('[data-elc-on]')!;
    on.hidden = kind === 'core' || kind === 'shared';
    on.checked = p.on;
    on.setAttribute('aria-label', `Show ${MODULES[key].title} on Every ${names(ctx).singular}`);

    // Options: moves for every card, then the card's own.
    const keys = columnKeys(p.column);
    setEsaButtonDisabled(custom.querySelector('[data-elc-move="up"] button'), keys.indexOf(key) <= 0);
    setEsaButtonDisabled(custom.querySelector('[data-elc-move="down"] button'), keys.indexOf(key) === keys.length - 1);
    custom.querySelector('[data-elc-move-label]')!.textContent = p.column === 'main' ? 'Move to Side Column' : 'Move to Main Column';
    const opt = (name: string, show: boolean) => (custom.querySelector<HTMLElement>(`[data-elc-opt="${name}"]`)!.hidden = !show);
    opt('budget', key === 'budget');
    opt('documents', key === 'documents');
    opt('schedule', key === 'schedule' && ctx.depth < ctx.deepest);
    if (key === 'budget') {
      const visible = custom.querySelector<ToggleEl>('[data-elc-visible]')!;
      void customElements.whenDefined('esa-button-toggle').then(() => {
        visible.options = VISIBILITY;
        visible.value = p.settings?.visibleTo ?? 'everyone';
      });
    }
    if (key === 'documents') {
      const types = custom.querySelector<ChecksEl>('[data-elc-types]')!;
      void customElements.whenDefined('esa-checkbox-group').then(() => {
        types.options = working!.documentTypes.map((t) => ({ value: t, label: t }));
        types.value = [...(p.settings?.documentTypes ?? [])];
      });
    }
    if (key === 'schedule') custom.querySelector<SwitchEl>('[data-elc-timeline]')!.checked = !!p.settings?.childTimeline;

    // A ghost: off, or not for this item.
    card.toggleAttribute('data-ghost', !shows);
    const why = card.querySelector<HTMLElement>('[data-elm-ghost]')!;
    why.hidden = shows;
    why.textContent = shows ? '' : ghostWhy(p, ctx);

    if (key === 'details') {
      const foot = card.querySelector<HTMLElement>('[data-elm-custom-foot]')!;
      foot.hidden = false;
      const { singular } = names(ctx);
      const own = level().fields.length;
      const every = working!.allLevels.length;
      foot.querySelector('[data-elc-fields-text]')!.textContent = `Fields: ${own || 'none'} of its own${every ? `, ${every} on every level` : ''}.`;
      foot.querySelector('[data-elc-fields-label]')!.textContent = `Edit ${singular} Fields`;
    }
  }

  function undecorate(card: HTMLElement): void {
    card.removeAttribute('data-ghost');
    for (const sel of ['[data-elm-grip]', '[data-elm-custom]', '[data-elm-ghost]', '[data-elm-custom-foot]']) {
      const el = card.querySelector<HTMLElement>(sel);
      if (el) el.hidden = true;
    }
  }

  // ── The bar ──
  function drawBar(ctx: ElementContext): void {
    const { singular, plural } = names(ctx);
    const count = flattenPlan(ctx.live.Elements).filter(({ element }) => (element.LevelDepth ?? 0) === depth).length;
    bar.querySelector('[data-elc-title]')!.textContent = `Customizing the ${singular} Page`;
    bar.querySelector('[data-elc-scope]')!.textContent =
      count === 1 ? `Changes apply to this plan’s one ${singular}, and to any added later.` : `Changes apply to all ${count} ${plural} in this plan, and to any added later.`;
    deliver.checked = level().canBeDeliverable;
  }
  deliver.addEventListener('change', () => {
    if (!working) return;
    level().canBeDeliverable = deliver.checked;
    change();
  });

  function stop(): void {
    working = null;
    bar.hidden = true;
    host.page.removeAttribute('data-customizing');
    const url = new URL(location.href);
    url.searchParams.delete('customize');
    history.replaceState(history.state, '', url);
    void host.draw();
  }
  bar.querySelector('[data-elc-save]')!.addEventListener('click', () => {
    if (!working) return;
    const ctx = host.ctx();
    const changed = dirty();
    if (changed) savePlanConfig(host.planID, working);
    const { plural } = ctx ? names(ctx) : { plural: 'items' };
    stop();
    if (changed) pushAlert(`Saved. Every one of the plan’s ${plural} uses this page.`, 'success');
  });
  bar.querySelector('[data-elc-cancel]')!.addEventListener('click', async () => {
    if (dirty() && !(await confirm({ header: 'Discard Your Changes to This Page?', text: 'The page goes back to how it was. Nothing you changed here is saved.', confirmButtonLabel: 'Discard', color: 'warn' }))) return;
    stop();
  });
  window.addEventListener('beforeunload', (e) => {
    if (!dirty()) return;
    e.preventDefault();
    e.returnValue = '';
  });

  return {
    working: () => working,
    start() {
      const ctx = host.ctx();
      if (!ctx || working) return;
      depth = ctx.depth;
      working = clonePlanConfig(configOf(ctx.repo));
      // This level spelled out: every card, on or off, so each can be switched and moved.
      const lc = levelConfig(working, depth, ctx.deepest);
      working.levels[depth] = { ...JSON.parse(JSON.stringify(lc)), modules: JSON.parse(JSON.stringify(modulesFor(working, depth, ctx.deepest))) };
      initial = JSON.stringify(working);
      bar.hidden = false;
      host.page.setAttribute('data-customizing', '');
      const url = new URL(location.href);
      url.searchParams.set('customize', '1');
      history.replaceState(history.state, '', url);
      void host.draw();
    },
    decorate,
    undecorate,
    drawn(ctx) {
      if (working) drawBar(ctx);
    },
  };
}
