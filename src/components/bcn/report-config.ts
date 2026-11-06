// Controller for <BcnReportConfig>: the two tabs (Report types / Templates, the choice on
// ?tab=), each tab's own filter bar, expand / collapse, the type side panel (add / edit /
// delete), the Add template panel, and each template's star, Clone and Delete. Nothing
// persists — changes update both tabs on screen and toast.
import { REPORT_TEMPLATE_ICON, REPORT_TYPE_ICON } from './report-icons';
import { toast } from '../../lib/snackbar';

type DialogEl = HTMLElement & { show(): void; close(): void; heading: string };
type FieldEl = HTMLElement & { value: string };
type DropdownEl = HTMLElement & { _selected: string[] };
type TabsEl = HTMLElement & { tabs: { label: string; icon?: string; badge?: number }[]; activeIndex: number };
type Tab = 'types' | 'templates';
type Sort = 'order' | 'name' | 'edited' | 'used';
type FlatSort = 'name' | 'edited' | 'used';
type Cmp = (a: HTMLElement, b: HTMLElement) => number;

// esa-tab-layout takes a whole <svg> per tab, so Beacon's paths ride in a Lucide-shaped
// 16px box. The tab's own colour (resting, then active) inks them.
const tabIcon = (paths: string) =>
  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'types', label: 'Report types', icon: tabIcon(REPORT_TYPE_ICON) },
  { id: 'templates', label: 'Templates', icon: tabIcon(REPORT_TEMPLATE_ICON) },
];

const whenFields = () => Promise.all(['esa-text-field', 'esa-select'].map((t) => customElements.whenDefined(t)));
const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

const byName: Cmp = (a, b) => a.dataset.name!.localeCompare(b.dataset.name!);
const then =
  (...cmps: Cmp[]): Cmp =>
  (a, b) => {
    for (const cmp of cmps) {
      const d = cmp(a, b);
      if (d) return d;
    }
    return 0;
  };
// Template comparators, shared by both tabs: newest edit, most reports first; and on the
// Templates tab, starred before the rest.
const byEdited: Cmp = (a, b) => b.dataset.edited!.localeCompare(a.dataset.edited!);
const byReports: Cmp = (a, b) => Number(b.dataset.reports) - Number(a.dataset.reports);
const byStarred: Cmp = (a, b) => Number('starred' in b.dataset) - Number('starred' in a.dataset);

/** Usage facet: a template is "used" once any report is filed on it. */
const usageOk = (usage: string[], tpl: HTMLElement) => usage.length === 0 || usage.includes(Number(tpl.dataset.reports) > 0 ? 'used' : 'unused');

export function setupReportConfig(): void {
  document.querySelectorAll<HTMLElement>('[data-bcn-rcfg]').forEach((root) => {
    const tabsEl = root.querySelector<TabsEl>('[data-rcfg-tabs]')!;
    const typesPanel = root.querySelector<HTMLElement>('[data-rcfg-panel="types"]')!;
    const tplsPanel = root.querySelector<HTMLElement>('[data-rcfg-panel="templates"]')!;
    const list = typesPanel.querySelector<HTMLElement>('[data-rcfg-list]')!;
    const flat = tplsPanel.querySelector<HTMLElement>('[data-rcfg-flat]')!;
    const flatList = flat.querySelector<HTMLElement>('.bcn-rcfg__tpls')!;
    const typePanel = root.querySelector<DialogEl>('[data-rcfg-type-panel]')!;
    const tplPanel = root.querySelector<DialogEl>('[data-rcfg-tpl-panel]')!;
    const field = (name: string) => root.querySelector<FieldEl>(`[data-rcfg-field="${name}"]`)!;
    const held = root.querySelector<HTMLElement>('[data-rcfg-type-held]')!;
    const typeDelete = root.querySelector<HTMLElement>('[data-rcfg-type-delete]')!;

    const types = () => [...list.querySelectorAll<HTMLElement>(':scope > [data-rcfg-type]')];
    const tplsOf = (type: HTMLElement) => [...type.querySelectorAll<HTMLElement>('[data-rcfg-tpl]')];
    const flatTpls = () => [...flat.querySelectorAll<HTMLElement>('[data-rcfg-tpl]')];
    let editing: HTMLElement | null = null;

    // Each tab keeps its own filters; nothing carries across a switch.
    const typeFilters = { query: '', scope: [] as string[], usage: [] as string[], sort: 'order' as Sort };
    const tplFilters = {
      query: '',
      scope: [] as string[],
      type: [] as string[],
      usage: [] as string[],
      // Opens newest-first, so it doesn't restate the Report types tab.
      sort: 'edited' as FlatSort,
    };

    // ── Tabs. The labels carry their counts, recounted after a delete. ──
    const syncTabs = () => {
      const counts = [types().length, flatTpls().length];
      tabsEl.tabs = TABS.map(({ label, icon }, i) => ({ label, icon, badge: counts[i] }));
    };
    customElements.whenDefined('esa-tab-layout').then(() => {
      syncTabs();
      const initial = new URL(location.href).searchParams.get('tab');
      tabsEl.activeIndex = Math.max(0, TABS.findIndex((t) => t.id === initial));
    });
    tabsEl.addEventListener('tabchange', (e) => {
      const tab = TABS[(e as CustomEvent<{ index: number }>).detail.index]?.id;
      if (!tab) return;
      const url = new URL(location.href);
      if (tab === TABS[0].id) url.searchParams.delete('tab');
      else url.searchParams.set('tab', tab);
      history.replaceState(null, '', url);
    });

    // ── Expand / collapse. The chevron's own aria-expanded drives its rotation
    // (BcnDisclosureToggle); the card's data-collapsed hides the body. ──
    const setExpanded = (type: HTMLElement, open: boolean) => {
      const toggle = type.querySelector<HTMLElement>('[data-rcfg-toggle]');
      toggle?.setAttribute('aria-expanded', String(open));
      toggle?.setAttribute('aria-label', `${open ? 'Collapse' : 'Expand'} ${type.dataset.name}`);
      type.toggleAttribute('data-collapsed', !open);
    };

    // ── Report types. A type shows when its scope is selected and either its own name or
    // any template matches; a template shows when it matches the search (or its type does)
    // and the Usage facet. Searching opens every type with a hit. ──
    const applyTypes = () => {
      const { query: q, scope, usage } = typeFilters;
      let shown = 0;
      for (const type of types()) {
        const typeHit = !q || type.dataset.name!.toLowerCase().includes(q);
        const scopeOk = scope.length === 0 || scope.includes(type.dataset.scope!);
        const tpls = tplsOf(type);
        let visible = 0;
        for (const tpl of tpls) {
          tpl.hidden = !(usageOk(usage, tpl) && (typeHit || tpl.dataset.name!.toLowerCase().includes(q)));
          if (!tpl.hidden) visible++;
        }
        const narrowed = usage.length > 0 || (q !== '' && !typeHit);
        type.hidden = !scopeOk || (narrowed && visible === 0) || (!typeHit && visible === 0);
        if (!type.hidden) shown++;
        if (q && !type.hidden && visible > 0) setExpanded(type, true);

        const total = tpls.length;
        // The count rides in a pill; only its label is rewritten.
        type.querySelector<HTMLElement>('[data-rcfg-count] .esa-pill__label')!.textContent =
          visible === total ? count(total, 'template', 'templates') : `${visible} of ${count(total, 'template', 'templates')}`;
      }
      typesPanel.querySelector<HTMLElement>('[data-rcfg-nomatch]')!.hidden = shown > 0;
      sortTypes();
    };

    const latest = (type: HTMLElement) => tplsOf(type).reduce((m, t) => (t.dataset.edited! > m ? t.dataset.edited! : m), '');
    const reports = (type: HTMLElement) => tplsOf(type).reduce((n, t) => n + Number(t.dataset.reports), 0);

    const sortTypes = () => {
      root.dataset.sort = typeFilters.sort;
      const typeCmp: Record<Sort, Cmp> = {
        order: (a, b) => Number(a.dataset.index) - Number(b.dataset.index),
        name: byName,
        edited: (a, b) => latest(b).localeCompare(latest(a)),
        used: (a, b) => reports(b) - reports(a),
      };
      const tplCmp: Record<Sort, Cmp> = { order: byName, name: byName, edited: then(byEdited, byName), used: then(byReports, byName) };
      list.append(...types().sort(typeCmp[typeFilters.sort]));
      for (const type of types()) {
        const ul = type.querySelector('.bcn-rcfg__tpls');
        if (ul) ul.append(...tplsOf(type).sort(tplCmp[typeFilters.sort]));
      }
    };

    // ── Templates. A template shows when its name or its type's matches the search and it
    // passes Scope, Type and Usage; the cards are then sorted in place, starred first. ──
    const applyTemplates = () => {
      const { query: q, scope, type, usage } = tplFilters;
      const cards = flatTpls();
      let shown = 0;
      for (const tpl of cards) {
        const nameOk = !q || tpl.dataset.name!.toLowerCase().includes(q) || tpl.dataset.typeName!.toLowerCase().includes(q);
        const scopeOk = scope.length === 0 || scope.includes(tpl.dataset.scope!);
        const typeOk = type.length === 0 || type.includes(tpl.dataset.type!);
        tpl.hidden = !(nameOk && scopeOk && typeOk && usageOk(usage, tpl));
        if (!tpl.hidden) shown++;
      }
      const sortCmp: Record<FlatSort, Cmp> = {
        name: then(byStarred, byName),
        edited: then(byStarred, byEdited, byName),
        used: then(byStarred, byReports, byName),
      };
      flatList.append(...cards.sort(sortCmp[tplFilters.sort]));
      tplsPanel.querySelector<HTMLElement>('[data-rcfg-nomatch]')!.hidden = shown > 0;
    };

    const apply = () => {
      applyTypes();
      applyTemplates();
    };

    // ── Each tab's filter bar writes its own filters and re-applies its own list. ──
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- the two tabs' filter shapes differ; the bar writes by key
    const wireBar = (panel: HTMLElement, filters: Record<string, any>, applyIt: () => void) => {
      const search = panel.querySelector<FieldEl>('[data-rcfg-search]')!;
      search.addEventListener('change', () => {
        filters.query = (search.value ?? '').trim().toLowerCase();
        applyIt();
      });
      // esa-select reads `value` as a property only; the markup's value attribute is the
      // starting choice, handed over once the element is defined (else it shows "Select...").
      customElements.whenDefined('esa-select').then(() => {
        panel.querySelectorAll<FieldEl>('esa-select[value]').forEach((el) => (el.value = el.getAttribute('value')!));
      });
      const facets = [...panel.querySelectorAll<DropdownEl>('[data-rcfg-facet]')];
      facets.forEach((el) =>
        el.addEventListener('selection-change', (e) => {
          filters[el.dataset.rcfgFacet!] = ((e as CustomEvent).detail?.value as string[]) ?? [];
          applyIt();
        }),
      );
      panel.querySelector('[data-rcfg-sort]')!.addEventListener('change', (e) => {
        const value = (e as CustomEvent).detail?.value as string;
        if (value) filters.sort = value;
        applyIt();
      });
      panel.querySelector('[data-rcfg-clear]')?.addEventListener('esa-filter-clear', () => {
        facets.forEach((el) => {
          el._selected = [];
          filters[el.dataset.rcfgFacet!] = [];
        });
        search.value = '';
        filters.query = '';
        applyIt();
      });
    };
    wireBar(typesPanel, typeFilters, applyTypes);
    wireBar(tplsPanel, tplFilters, applyTemplates);

    // ── Template actions. Delete is held (disabled, the reason on hover) while reports use
    // the template; a delete removes its card from both tabs and frees its type's Delete
    // once nothing uses it. ──
    const deleteTemplate = (row: HTMLElement) => {
      if (row.dataset.held) return;
      root.querySelectorAll(`[data-rcfg-tpl="${row.dataset.rcfgTpl}"]`).forEach((el) => el.remove());
      const type = root.querySelector<HTMLElement>(`[data-rcfg-type="${row.dataset.type}"]`);
      if (type && tplsOf(type).length === 0) type.dataset.held = '';
      apply();
      syncTabs();
      toast(`Deleted ${row.dataset.name}`, 'success');
    };

    // The star is a toggle (aria-pressed); a starred card floats to the top of its list.
    const toggleStar = (button: HTMLElement, row: HTMLElement) => {
      const on = !('starred' in row.dataset);
      row.toggleAttribute('data-starred', on);
      button.setAttribute('aria-pressed', String(on));
      const label = `${on ? 'Unstar' : 'Star'} ${row.dataset.name}`;
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      applyTemplates();
    };

    // ── Panels ──
    const openType = (row: HTMLElement | null) => {
      editing = row;
      typePanel.heading = row ? 'Edit report type' : 'Add report type';
      const reason = row?.dataset.held ?? '';
      held.textContent = reason;
      held.hidden = !reason;
      typeDelete.hidden = !row;
      const native = typeDelete.querySelector('button');
      if (native) native.disabled = !!reason;
      whenFields().then(() => {
        field('type-name').value = row?.dataset.name ?? '';
        field('type-scope').value = row?.dataset.scope ?? '';
      });
      typePanel.show();
    };

    const openTemplate = (typeId: string) => {
      whenFields().then(() => {
        field('tpl-name').value = '';
        field('tpl-type').value = typeId;
      });
      tplPanel.show();
    };

    root.addEventListener('click', (e) => {
      const t = e.target as Element;
      const toggle = t.closest<HTMLElement>('[data-rcfg-toggle]');
      if (toggle) {
        const type = toggle.closest<HTMLElement>('[data-rcfg-type]')!;
        return setExpanded(type, type.hasAttribute('data-collapsed'));
      }
      if (t.closest('[data-rcfg-expand-all]')) return types().forEach((el) => setExpanded(el, true));
      if (t.closest('[data-rcfg-collapse-all]')) return types().forEach((el) => setExpanded(el, false));
      if (t.closest('[data-rcfg-add-type]')) return openType(null);
      const typeId = t.closest<HTMLElement>('[data-rcfg-open-type]')?.dataset.rcfgOpenType;
      if (typeId) return openType(root.querySelector<HTMLElement>(`[data-rcfg-type="${typeId}"]`));
      // A type's "+" names the type; the Templates tab's Add template leaves it to pick.
      const addTo = t.closest<HTMLElement>('[data-rcfg-add-template]');
      if (addTo) return openTemplate(addTo.dataset.rcfgAddTemplate ?? '');
      const row = t.closest<HTMLElement>('[data-rcfg-tpl]');
      const star = t.closest<HTMLElement>('[data-rcfg-star]');
      if (star && row) return toggleStar(star, row);
      if (t.closest('[data-rcfg-clone-tpl]') && row) return toast(`Cloned ${row.dataset.name}`, 'success');
      if (t.closest('[data-rcfg-delete-tpl]') && row) return deleteTemplate(row);
      if (t.closest('[data-rcfg-open-tpl]')) {
        toast('The template editor is not part of this prototype yet', 'info');
        return;
      }
      if (t.closest('[data-rcfg-close]')) {
        typePanel.close();
        tplPanel.close();
      }
    });

    root.querySelector('[data-rcfg-type-save]')?.addEventListener('click', () => {
      const name = field('type-name').value?.trim();
      const scope = field('type-scope').value;
      if (!name || !scope) {
        toast('Name and scope are required', 'warning');
        return;
      }
      if (editing) {
        editing.dataset.name = name;
        editing.dataset.scope = scope;
        editing.querySelector('[data-rcfg-type-name]')!.textContent = name;
        const badge = editing.querySelector('.esa-badge__text');
        if (badge) badge.textContent = scope;
        // Its templates on the Templates tab carry the type's name and scope too.
        root.querySelectorAll<HTMLElement>(`[data-rcfg-tpl][data-type="${editing.dataset.rcfgType}"]`).forEach((tpl) => {
          tpl.dataset.typeName = name;
          tpl.dataset.scope = scope;
          const typeBadge = tpl.querySelector('[data-rcfg-tpl-type] .esa-badge__text');
          if (typeBadge) typeBadge.textContent = name;
        });
        toast('Report type saved', 'success');
        apply();
      } else {
        toast(`Added ${name}`, 'success');
      }
      typePanel.close();
    });

    typeDelete.addEventListener('click', () => {
      if (!editing || editing.dataset.held) return;
      const name = editing.dataset.name;
      editing.remove();
      typePanel.close();
      apply();
      syncTabs();
      toast(`Deleted ${name}`, 'success');
    });

    root.querySelector('[data-rcfg-tpl-save]')?.addEventListener('click', () => {
      const name = field('tpl-name').value?.trim();
      const type = field('tpl-type').value;
      if (!name || !type) {
        toast('Name and report type are required', 'warning');
        return;
      }
      tplPanel.close();
      toast(`Added ${name}`, 'success');
    });

    apply();
  });
}
