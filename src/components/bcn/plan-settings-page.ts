// <BcnPlanSettingsPage>'s runtime (2026-10-28): a plan's settings, as a page. `?id=` is the plan; `&section=` opens a
// section (general, tracks, levels, fields, lists, people, danger); in Fields and Pages, `&level=` (all, or a depth) and
// `&tab=` (page, fields) keep your place across a reload.
//
// Two things are edited, and Save Changes writes both: the plan's settings (name, description, what it tracks, levels,
// people) through savePlanSettings, as BcnPlanSetupDialog did, and its configuration (fields, page layouts, lists)
// through savePlanConfig. Neither makes a revision. General, What It Tracks, Levels, People and Danger Zone are the
// dialog's (plan-setup-dialog.ts), moved onto the page with the same rules; that file's helpers are closures, so their
// logic is restated here rather than imported.
//
// Leaving with unsaved changes asks first (a link on the page, or the browser's own prompt on a reload or close).

import { planApi, currentUserName } from '../../lib/planning/plan-server';
import {
  PLAN_DIRECTORY,
  attributesAt,
  configOf,
  deletePlanRepo,
  ensureSeeded,
  getRepo,
  membersOf,
  savePlanConfig,
  savePlanSettings,
  viewsOf,
  type PlanMember,
  type PlanRepo,
  type PlanRole,
  type PlanSettings,
  type PlanView,
} from '../../lib/planning/plan-repo';
import { clonePlanConfig, type PlanConfig } from '../../lib/planning/plan-config';
import { PLAN_VIEW_HREF, SETTINGS_HREF } from '../../lib/planning/element-context';
import type { PlanDetailDto, PlanLevelCreateDto } from '../../lib/planning/model';
import { pushAlert } from '../../lib/planning/plan-page';
import { withBase } from '../../lib/base';
import { saveTemplate, templateNameTaken } from '../../lib/planning/plan-templates';
import { planAvatar } from './plan-people';
import { listEditor, setEsaButtonDisabled, type ListChange, type ListEditor } from './plan-list-editor';
import { setupFieldDefDialog } from './field-def-dialog';
import { setupPlanFieldsPages, type FieldsPages, type FieldsPagesTab, type LevelPick } from './plan-fields-pages';

type FieldEl = HTMLElement & { value: string; errorText: string; disabled: boolean };
type SwitchEl = HTMLElement & { checked: boolean; disabled: boolean };
type SelectEl = HTMLElement & { value: string; options: { value: string; label: string }[]; disabled: boolean };
type DialogEl = HTMLElement & { open: boolean; heading: string };
type ConfirmEl = HTMLElement & { open: boolean; heading: string; message: string; confirmLabel: string; cancelLabel: string; variant: string; updateComplete?: Promise<unknown> };

export type SettingsSection = 'general' | 'tracks' | 'levels' | 'fields' | 'lists' | 'people' | 'danger';
const SECTIONS: SettingsSection[] = ['general', 'tracks', 'levels', 'fields', 'lists', 'people', 'danger'];
const LIST_KEYS = ['documentTypes', 'results', 'purposes', 'agencies'] as const;
type ListKey = (typeof LIST_KEYS)[number];

const MAX_LEVELS = 4;
const ROLES: { value: PlanRole; label: string }[] = [
  { value: 'Owner', label: 'Owner' },
  { value: 'Editor', label: 'Editor' },
  { value: 'Contributor', label: 'Contributor' },
  { value: 'Guest', label: 'Guest' },
];
const PLANS_HREF = () => withBase('/prototypes/plans-repo/');

export async function setupPlanSettingsPage(root: HTMLElement): Promise<void> {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const util = <T extends Element = HTMLElement>(name: string) => document.querySelector<T>(`[data-psp-action="${name}"]`);
  await ensureSeeded();
  const params = new URLSearchParams(location.search);
  const planID = params.get('id') ?? '';

  // ── The plan, or why there isn't one ──
  let repo: PlanRepo;
  let live: PlanDetailDto;
  try {
    repo = getRepo(planID);
    live = await planApi.getPlan(planID);
  } catch {
    q('[data-psp-missing]').hidden = false;
    q('[data-psp-missing-back]').addEventListener('click', () => location.assign(PLANS_HREF()));
    document.querySelector<HTMLElement>('[data-psp-actions]')?.setAttribute('hidden', '');
    return;
  }

  const me = currentUserName();
  const myRole = () => membersOf(repo).find((m) => m.name === me)?.role;
  let readOnly = myRole() !== 'Owner';

  // ── What the page edits ──
  let name = '';
  let description = '';
  let views = new Set<PlanView>();
  let levels: Required<PlanLevelCreateDto>[] = [];
  /** Levels the plan's items use, by index from the top: they can't be removed. */
  let used = new Set<number>();
  /** How many levels the plan has saved: rows past it are new. */
  let savedLevels = 0;
  let members: PlanMember[] = [];
  let config: PlanConfig = clonePlanConfig(configOf(repo));
  let initialSettings = '';
  let initialConfig = '';
  let busy = false;
  let leaving = false;

  const snapshot = (): PlanSettings => ({
    name: name.trim(),
    description: description.trim(),
    views: (['schedule', 'budget'] as const).filter((v) => views.has(v)),
    levels: levels.map((l) => ({ SingularName: l.SingularName.trim(), PluralName: l.PluralName.trim() })),
    members: members.map((m) => ({ ...m })),
  });
  const settingsDirty = () => JSON.stringify(snapshot()) !== initialSettings;
  const configDirty = () => JSON.stringify(config) !== initialConfig;
  const dirty = () => !readOnly && (settingsDirty() || configDirty());

  /** Which sections have unsaved changes, for the nav's dots. */
  function dirtySections(): Set<SettingsSection> {
    const out = new Set<SettingsSection>();
    if (readOnly) return out;
    const was = JSON.parse(initialSettings || '{}') as PlanSettings;
    const now = snapshot();
    if (was.name !== now.name || was.description !== now.description) out.add('general');
    if (JSON.stringify(was.views) !== JSON.stringify(now.views)) out.add('tracks');
    if (JSON.stringify(was.levels) !== JSON.stringify(now.levels)) out.add('levels');
    if (JSON.stringify(was.members) !== JSON.stringify(now.members)) out.add('people');
    const c = JSON.parse(initialConfig || '{}') as PlanConfig;
    if (JSON.stringify([c.fields, c.allLevels, c.levels]) !== JSON.stringify([config.fields, config.allLevels, config.levels])) out.add('fields');
    if (JSON.stringify([c.documentTypes, c.results, c.purposes, c.agencies, c.ackDays]) !== JSON.stringify([config.documentTypes, config.results, config.purposes, config.agencies, config.ackDays])) out.add('lists');
    return out;
  }

  // ── Header: crumbs, the actions ──
  function drawCrumbs(): void {
    const items = document.querySelector<HTMLElement>('.breadcrumbs__items');
    const planLink = items?.querySelectorAll<HTMLAnchorElement>('a.breadcrumb-item')[1];
    if (planLink) {
      planLink.textContent = live.PlanName ?? 'Plan';
      planLink.href = PLAN_VIEW_HREF(planID);
    }
    document.title = `Plan Settings | ${live.PlanName ?? 'Plan'} | Beacon`;
  }
  const actionButton = (name: string) => util(name)?.querySelector<HTMLButtonElement>('button');
  function drawActions(): void {
    const isDirty = dirty();
    for (const name of ['save', 'discard']) setEsaButtonDisabled(actionButton(name), !isDirty || busy);
    for (const name of ['save', 'discard', 'template', 'note']) {
      const el = util(name);
      if (el) el.hidden = readOnly;
    }
    const badge = document.querySelector<HTMLElement>('[data-psp-readonly-badge]');
    if (badge) badge.hidden = !readOnly;
    const dots = dirtySections();
    root.querySelectorAll<HTMLElement>('[data-psp-link]').forEach((a) => {
      a.querySelector<HTMLElement>('[data-psp-dirty]')!.hidden = !dots.has(a.dataset.pspLink as SettingsSection);
    });
  }
  /** Something changed: the actions, the dots and (for the configuration) the preview follow. */
  function touched(configToo = false): void {
    drawActions();
    if (configToo) fields.schedulePreview();
  }

  // ── Asking ──
  const confirmEl = q<ConfirmEl>('[data-psp-confirm]');
  void customElements.whenDefined('esa-confirm-dialog').then(async () => {
    await confirmEl.updateComplete;
    const sheet = new CSSStyleSheet();
    sheet.replaceSync('.esa-confirm-dialog__footer { justify-content: center; }');
    if (confirmEl.shadowRoot) confirmEl.shadowRoot.adoptedStyleSheets = [...confirmEl.shadowRoot.adoptedStyleSheets, sheet];
  });
  const ask = (heading: string, message: string, confirmLabel: string, cancelLabel: string, danger = false): Promise<boolean> =>
    new Promise((resolve) => {
      Object.assign(confirmEl, { heading, message, confirmLabel, cancelLabel, variant: danger ? 'danger' : 'default' });
      confirmEl.addEventListener('resolved', (e) => resolve(!!(e as CustomEvent<{ confirmed: boolean }>).detail?.confirmed), { once: true });
      confirmEl.open = true;
    });
  const toast = (message: string, status: 'success' | 'info' | 'warning' | 'danger' = 'info') => pushAlert(message, status);

  // ── General ──
  const nameField = q<FieldEl>('[data-psp="name"]');
  const descriptionField = q<FieldEl>('[data-psp="description"]');
  nameField.addEventListener('input', () => {
    name = nameField.value ?? '';
    nameField.errorText = '';
    touched();
  });
  descriptionField.addEventListener('input', () => {
    description = descriptionField.value ?? '';
    touched();
  });

  // ── What it tracks ──
  const viewCards = [...root.querySelectorAll<HTMLElement>('[data-psp-view]')];
  function drawViews(): void {
    for (const card of viewCards) {
      const on = views.has(card.dataset.pspView as PlanView);
      card.toggleAttribute('data-on', on);
      const toggle = card.querySelector<SwitchEl>('[data-psp-view-toggle]')!;
      toggle.checked = on;
      toggle.disabled = readOnly;
    }
    q('[data-psp-views-error]').hidden = views.size > 0;
  }
  for (const card of viewCards) {
    const toggle = card.querySelector<SwitchEl>('[data-psp-view-toggle]')!;
    const view = card.dataset.pspView as PlanView;
    // The whole card toggles; the switch toggles itself and says so.
    card.addEventListener('click', (e) => {
      if (readOnly || e.composedPath().includes(toggle)) return;
      toggle.checked = !toggle.checked;
      toggle.dispatchEvent(new CustomEvent('change', { detail: { checked: toggle.checked } }));
    });
    toggle.addEventListener('change', () => {
      if (readOnly) return;
      if (toggle.checked) views.add(view);
      else views.delete(view);
      drawViews();
      touched();
    });
  }

  // ── Levels ──
  const levelRows = q('[data-psp-level-rows]');
  const levelTpl = q<HTMLTemplateElement>('template[data-psp-tpl="level"]');
  function drawLevels(): void {
    levelRows.replaceChildren(
      ...levels.map((level, i) => {
        const row = levelTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
        row.querySelector('[data-level-label]')!.textContent = `Level ${i + 1}`;
        const singular = row.querySelector<FieldEl>('[data-level="singular"]')!;
        const plural = row.querySelector<FieldEl>('[data-level="plural"]')!;
        singular.value = level.SingularName;
        plural.value = level.PluralName;
        singular.disabled = readOnly;
        plural.disabled = readOnly;
        singular.setAttribute('aria-label', `Level ${i + 1} singular name`);
        plural.setAttribute('aria-label', `Level ${i + 1} plural name`);
        const edited = () => {
          level.SingularName = singular.value ?? '';
          level.PluralName = plural.value ?? '';
          drawLevelNav();
          touched();
        };
        singular.addEventListener('input', edited);
        plural.addEventListener('input', edited);
        // Beacon's rule: only the deepest level goes, and not while items use it; a plan keeps one.
        const wrap = row.querySelector<HTMLElement>('[data-level-remove-wrap]')!;
        const last = i === levels.length - 1;
        wrap.style.visibility = last && levels.length > 1 ? '' : 'hidden';
        const blocked = i < savedLevels && used.has(i);
        const button = wrap.querySelector<HTMLButtonElement>('button')!;
        setEsaButtonDisabled(button, blocked);
        row.querySelector('[data-level-remove-tip]')!.setAttribute('text', blocked ? 'Items Use This Level' : 'Remove Level');
        button.addEventListener('click', () => {
          if (blocked || readOnly) return;
          levels.pop();
          drawLevels();
          drawLevelNav();
          touched();
        });
        return row;
      })
    );
    q('[data-psp-add-level]').hidden = readOnly || levels.length >= MAX_LEVELS;
  }
  q('[data-psp-add-level]').addEventListener('click', () => {
    if (readOnly || levels.length >= MAX_LEVELS) return;
    levels.push({ SingularName: '', PluralName: '' });
    drawLevels();
    drawLevelNav();
    touched();
    levelRows.querySelector<HTMLElement>('.bcn-psp__level:last-child [data-level="singular"]')?.focus();
  });

  // ── People ──
  const peopleList = q('[data-psp-people]');
  const personTpl = q<HTMLTemplateElement>('template[data-psp-tpl="person"]');
  const addPerson = q<HTMLElement & { value: string | string[]; options: { value: string; label: string }[] }>('[data-psp-add-person]');
  function drawPeople(): void {
    peopleList.replaceChildren(
      ...members.map((member) => {
        const row = personTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
        row.querySelector('[data-person-avatar]')!.replaceWith(planAvatar(member.name, 'sm'));
        const label = row.querySelector<HTMLElement>('[data-person-name]')!;
        label.textContent = member.name;
        if (member.name === me) label.append(Object.assign(document.createElement('small'), { textContent: 'You' }));
        const role = row.querySelector<SelectEl>('[data-person-role]')!;
        void customElements.whenDefined('esa-select').then(() => {
          role.options = ROLES;
          role.value = member.role;
          role.disabled = readOnly;
        });
        role.addEventListener('change', () => {
          if (readOnly) return;
          member.role = (role.value as PlanRole) || member.role;
          checkOwners();
          touched();
        });
        row.querySelector('[data-person-remove]')!.addEventListener('click', () => {
          if (readOnly) return;
          members = members.filter((m) => m !== member);
          drawPeople();
          touched();
        });
        return row;
      })
    );
    void customElements.whenDefined('esa-combobox').then(() => {
      addPerson.options = PLAN_DIRECTORY.filter((n) => !members.some((m) => m.name === n)).map((n) => ({ value: n, label: n }));
    });
    checkOwners();
  }
  const checkOwners = () => {
    const ok = members.some((m) => m.role === 'Owner');
    q('[data-psp-people-error]').hidden = ok;
    return ok;
  };
  // A person added comes in as a Contributor: the least they can do, raised by hand.
  addPerson.addEventListener('change', () => {
    const picked = String(addPerson.value ?? '');
    if (readOnly || !picked || members.some((m) => m.name === picked)) return;
    members.push({ name: picked, role: 'Contributor' });
    drawPeople();
    touched();
    requestAnimationFrame(() => (addPerson.value = ''));
  });

  // ── Lists ──
  const lists = new Map<ListKey, ListEditor>();
  for (const key of LIST_KEYS) {
    lists.set(
      key,
      listEditor(q(`[data-ple-id="${key}"]`), {
        values: [],
        readOnly,
        onChange: (values, change: ListChange) => {
          config[key] = values;
          // A document type renamed or removed: the levels' Documents modules offer it under its new name, or not at all.
          if (key === 'documentTypes' && (change.renamed || change.removed)) {
            for (const level of Object.values(config.levels)) {
              for (const p of level.modules) {
                const types = p.settings?.documentTypes;
                if (!types?.length) continue;
                p.settings!.documentTypes = change.renamed ? types.map((t) => (t === change.renamed!.from ? change.renamed!.to : t)) : types.filter((t) => t !== change.removed);
              }
            }
          }
          touched(true);
        },
      })
    );
  }
  const ackDays = q<FieldEl>('[data-psp="ackDays"]');
  ackDays.addEventListener('input', () => {
    const n = Number(ackDays.value);
    ackDays.errorText = Number.isInteger(n) && n >= 1 && n <= 30 ? '' : 'A whole number of days, 1 to 30.';
    if (!ackDays.errorText) config.ackDays = n;
    touched(true);
  });

  // ── Fields and Pages ──
  const fieldDialog = setupFieldDefDialog(q('[data-bcn-field-def]'));
  const fields: FieldsPages = setupPlanFieldsPages(q('[data-bcn-fields-pages]'), {
    planID,
    config: () => config,
    changed: () => touched(),
    levels: () => levels.map((l, i) => ({ depth: i + 1, singular: l.SingularName.trim() || `Level ${i + 1}`, plural: l.PluralName.trim() || `Level ${i + 1}` })),
    plan: () => live,
    readOnly: () => readOnly,
    tracksBudget: () => views.has('budget'),
    isDeliverable: (id) => !!attributesAt(repo)[id]?.deliverable,
    picked: () => {
      drawLevelNav();
      if (section === 'fields') writeUrl();
    },
    editField: (opts) => fieldDialog.open(opts),
    confirm: ask,
    toast: (message) => toast(message),
  });

  // ── The nav ──
  let section: SettingsSection = 'general';
  const levelNav = q('[data-psp-levels]');
  const levelLinkTpl = q<HTMLTemplateElement>('template[data-psp-tpl="level-link"]');
  function drawLevelNav(): void {
    const picks: { pick: LevelPick; label: string }[] = [{ pick: 'all', label: 'All Levels' }, ...levels.map((l, i) => ({ pick: i + 1, label: l.SingularName.trim() || `Level ${i + 1}` }))];
    levelNav.replaceChildren(
      ...picks.map(({ pick, label }) => {
        const li = levelLinkTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
        const button = li.querySelector<HTMLButtonElement>('[data-psp-level]')!;
        button.textContent = label;
        button.dataset.pspLevel = String(pick);
        button.toggleAttribute('data-all', pick === 'all');
        button.setAttribute('aria-current', String(fields.level === pick));
        return li;
      })
    );
    levelNav.hidden = section !== 'fields';
  }
  levelNav.addEventListener('click', (e) => {
    const button = (e.target as Element).closest<HTMLElement>('[data-psp-level]');
    if (!button) return;
    const pick: LevelPick = button.dataset.pspLevel === 'all' ? 'all' : Number(button.dataset.pspLevel);
    fields.select(pick);
  });

  function writeUrl(): void {
    const url = new URL(location.href);
    url.searchParams.set('section', section);
    if (section === 'fields') {
      url.searchParams.set('level', String(fields.level));
      url.searchParams.set('tab', fields.tab);
    } else {
      url.searchParams.delete('level');
      url.searchParams.delete('tab');
    }
    history.replaceState(history.state, '', url);
  }

  function show(next: SettingsSection, focus = false): void {
    section = next;
    for (const s of SECTIONS) q(`[data-psp-section="${s}"]`).hidden = s !== next;
    root.querySelectorAll<HTMLElement>('[data-psp-link]').forEach((a) => {
      if (a.dataset.pspLink === next) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    if (next === 'fields') fields.draw();
    fields.setVisible(next === 'fields');
    drawLevelNav();
    writeUrl();
    if (focus) q(`[data-psp-section="${next}"]`).querySelector<HTMLElement>('h2, [data-pfp-title]')?.focus?.();
  }
  root.querySelectorAll<HTMLAnchorElement>('[data-psp-link]').forEach((a) => {
    a.href = SETTINGS_HREF(planID, a.dataset.pspLink);
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      show(a.dataset.pspLink as SettingsSection);
    });
  });

  // ── Loading (first time, after a save, on Discard) ──
  async function load(): Promise<void> {
    repo = getRepo(planID);
    live = await planApi.getPlan(planID);
    readOnly = myRole() !== 'Owner';
    const sorted = [...(live.Levels ?? [])].sort((a, b) => (a.Depth ?? 0) - (b.Depth ?? 0));
    levels = sorted.map((l) => ({ SingularName: l.SingularName ?? '', PluralName: l.PluralName ?? '' }));
    savedLevels = levels.length;
    const depths = new Set<number>();
    const walk = (els: typeof live.Elements) => els?.forEach((e) => (depths.add(e.LevelDepth ?? 0), walk(e.Children)));
    walk(live.Elements);
    used = new Set(sorted.map((l, i) => (depths.has(l.Depth ?? -1) ? i : -1)).filter((i) => i >= 0));
    members = membersOf(repo).map((m) => ({ ...m }));
    views = new Set(viewsOf(repo));
    name = live.PlanName ?? '';
    description = live.Description ?? '';
    config = clonePlanConfig(configOf(repo));
    initialSettings = JSON.stringify(snapshot());
    initialConfig = JSON.stringify(config);
    drawAll();
  }
  function drawAll(): void {
    root.toggleAttribute('data-readonly', readOnly);
    q('[data-psp-readonly]').hidden = !readOnly;
    nameField.value = name;
    nameField.errorText = '';
    nameField.disabled = readOnly;
    descriptionField.value = description;
    descriptionField.disabled = readOnly;
    drawViews();
    drawLevels();
    drawPeople();
    for (const key of LIST_KEYS) {
      lists.get(key)!.set(config[key]);
      lists.get(key)!.setReadOnly(readOnly);
    }
    ackDays.value = String(config.ackDays ?? 2);
    ackDays.errorText = '';
    ackDays.disabled = readOnly;
    q('[data-psp-delete]').hidden = readOnly;
    drawCrumbs();
    if (section === 'fields') fields.draw();
    drawLevelNav();
    drawActions();
  }

  // ── Save, Discard ──
  function validate(s: PlanSettings): SettingsSection | null {
    let first: SettingsSection | null = null;
    const fail = (sec: SettingsSection) => (first ??= sec);
    nameField.errorText = s.name ? '' : 'Name the plan.';
    if (!s.name) fail('general');
    if (!s.views.length) fail('tracks');
    levelRows.querySelectorAll<FieldEl>('esa-text-field').forEach((field) => {
      const empty = !(field.value ?? '').trim();
      field.errorText = empty ? 'Required.' : '';
      if (empty) fail('levels');
    });
    if (ackDays.errorText) fail('lists');
    if (!checkOwners()) fail('people');
    drawViews();
    return first;
  }

  async function save(): Promise<void> {
    if (busy || readOnly || !dirty()) return;
    const s = snapshot();
    const bad = validate(s);
    if (bad) {
      show(bad);
      toast('Not saved. Fix what’s marked first.', 'warning');
      return;
    }
    busy = true;
    drawActions();
    try {
      if (settingsDirty()) await savePlanSettings(planID, s);
      // A level taken off takes its layout with it, so a level added later starts from the default.
      for (const depth of Object.keys(config.levels).map(Number)) if (depth > s.levels.length) delete config.levels[depth];
      savePlanConfig(planID, config);
      fields.clearPreview();
      await load();
      // Saving a role change can take the page out of your hands: then it reads.
      toast(readOnly ? 'Saved. You are no longer an Owner, so these settings are read-only now.' : 'Saved', 'success');
    } catch (err) {
      toast((err as { error?: { message?: string } })?.error?.message ?? (err as Error)?.message ?? 'Not saved. Try again.', 'danger');
    } finally {
      busy = false;
      drawActions();
    }
  }
  util('save')?.addEventListener('click', () => void save());
  util('discard')?.addEventListener('click', async () => {
    if (busy || !dirty()) return;
    if (!(await ask('Discard Your Changes?', 'Everything you changed on this page since it was last saved goes back.', 'Discard', 'Keep Editing'))) return;
    fields.clearPreview();
    await load();
    toast('Changes discarded');
  });
  // ⌘S / Ctrl+S saves.
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      void save();
    }
  });

  // ── Save as Template ──
  const templateDialog = q<DialogEl>('[data-psp-template-dialog]');
  const templateName = q<FieldEl>('[data-psp="templateName"]');
  util('template')?.addEventListener('click', () => {
    if (readOnly) return;
    templateName.value = (name.trim() || live.PlanName) ?? '';
    templateName.errorText = '';
    q('[data-psp-template-hint]').textContent = `The plan’s levels, fields, page layouts and lists, under a name New Plan can start from. Its items, dates, money and people stay with this plan.${dirty() ? ' Unsaved changes on this page are included.' : ''}`;
    templateDialog.open = true;
    requestAnimationFrame(() => templateName.focus());
  });
  q('[data-psp-template-cancel]').addEventListener('click', () => (templateDialog.open = false));
  async function saveAsTemplate(): Promise<void> {
    const text = (templateName.value ?? '').trim();
    if (!text) {
      templateName.errorText = 'Name the template.';
      return;
    }
    const taken = templateNameTaken(text);
    if (taken === 'built-in') {
      templateName.errorText = `${text} is a built-in template. Pick another name.`;
      return;
    }
    if (taken === 'saved' && !(await ask(`Replace ${text}?`, 'A template by that name exists. Saving replaces it; plans made from it keep what they started with.', 'Replace Template', 'Keep Both'))) return;
    saveTemplate(text, config, snapshot().levels, me);
    templateDialog.open = false;
    toast(`Saved as the template ${text}. New Plan can start from it.`, 'success');
  }
  q('[data-psp-template-save]').addEventListener('click', () => void saveAsTemplate());
  templateName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      void saveAsTemplate();
    }
  });
  templateName.addEventListener('input', () => (templateName.errorText = ''));

  // ── Danger Zone ──
  q('[data-psp-delete]').addEventListener('click', async () => {
    if (readOnly || busy) return;
    const planName = live.PlanName ?? 'this plan';
    if (!(await ask(`Delete ${planName}?`, 'Its revisions, drafts, budget and records go with it. This can’t be undone.', 'Delete Plan', 'Keep Plan', true))) return;
    busy = true;
    await deletePlanRepo(planID);
    fields.clearPreview();
    leaving = true;
    location.assign(PLANS_HREF());
  });

  // ── Leaving ──
  window.addEventListener('beforeunload', (e) => {
    if (leaving || !dirty()) return;
    e.preventDefault();
    e.returnValue = '';
  });
  window.addEventListener('pagehide', () => fields.clearPreview());
  // A link on the page (the crumbs, the app's nav) asks first; one that opens a new tab doesn't leave.
  document.addEventListener(
    'click',
    async (e) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a || leaving || !dirty() || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      if (a.closest('[data-psp-link]')) return;
      const href = a.getAttribute('href') ?? '';
      if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;
      e.preventDefault();
      e.stopPropagation();
      if (!(await ask('Leave Without Saving?', 'Your changes to these settings aren’t saved.', 'Leave', 'Stay'))) return;
      leaving = true;
      fields.clearPreview();
      location.assign(a.href);
    },
    true
  );

  // ── First draw ──
  await load();
  const asked = params.get('section') as SettingsSection | null;
  const levelParam = params.get('level');
  const tabParam = params.get('tab') as FieldsPagesTab | null;
  const startLevel: LevelPick = levelParam === 'all' ? 'all' : levelParam && Number(levelParam) >= 1 && Number(levelParam) <= levels.length ? Number(levelParam) : levels.length || 'all';
  fields.select(startLevel, tabParam === 'fields' || tabParam === 'page' ? tabParam : 'page');
  q('[data-psp-nav]').hidden = false;
  q('[data-psp-body]').hidden = false;
  show(asked && SECTIONS.includes(asked) ? asked : 'general');
}

