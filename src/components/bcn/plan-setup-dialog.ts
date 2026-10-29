// <BcnPlanSetupDialog>'s runtime (2026-10-28): New Plan and a plan's settings in one modal. open() resolves what came of
// it: a plan created (its id), settings saved, the plan deleted, a level's page to customize (an item of that level),
// or nothing (cancelled). Saving writes through plan-repo.ts (createPlanRepo, savePlanSettings and savePlanConfig for
// the lists, deletePlanRepo); the page decides where to go next.

import { planApi, currentUserName } from '../../lib/planning/plan-server';
import {
  PLAN_DIRECTORY,
  createPlanRepo,
  deletePlanRepo,
  configOf,
  getRepo,
  orgOf,
  membersOf,
  savePlanConfig,
  savePlanSettings,
  viewsOf,
  type PlanMember,
  type PlanRole,
  type PlanSettings,
  type PlanView,
} from '../../lib/planning/plan-repo';
import type { PlanLevelCreateDto } from '../../lib/planning/model';
import { planAvatar } from './plan-people';
import { fillIcons } from '../../lib/planning/icons';
import { saveTemplate, templateChoices, templateNameTaken } from '../../lib/planning/plan-templates';
import { clonePlanConfig, type PlanConfig } from '../../lib/planning/plan-config';
import { DEFAULT_REMINDERS, type ReminderConfig } from '../../lib/planning/plan-reminders';
import { pushAlert } from '../../lib/planning/plan-page';
import { recordsFor } from '../../lib/planning/plan-records';
import { TRANSMITTAL_HREF } from '../../lib/planning/element-context';

const firstName = (name: string) => name.split(' ')[0];
import { listEditor, setEsaButtonDisabled, type ListChange, type ListEditor } from './plan-list-editor';

export type PlanSetupResult = { kind: 'created'; planID: string } | { kind: 'saved' } | { kind: 'deleted' } | { kind: 'customize'; elementId: string } | null;

const LIST_KEYS = ['documentTypes', 'results', 'purposes', 'agencies'] as const;
type ListKey = (typeof LIST_KEYS)[number];

type FieldEl = HTMLElement & { value: string; errorText: string };
type SwitchEl = HTMLElement & { checked: boolean };
type SelectEl = HTMLElement & { value: string; options: { value: string; label: string }[] };
type DialogEl = HTMLElement & { open: boolean; heading: string };
type ConfirmEl = HTMLElement & { open: boolean; heading: string; message: string; confirmLabel: string; cancelLabel: string; updateComplete?: Promise<unknown> };

const MAX_LEVELS = 4;
/** A new plan starts with the sample's levels, as Beacon's New plan prefills them. */
const STARTER_LEVELS: Required<PlanLevelCreateDto>[] = [
  { SingularName: 'Program', PluralName: 'Programs' },
  { SingularName: 'Study', PluralName: 'Studies' },
  { SingularName: 'Sub-study', PluralName: 'Sub-studies' },
  { SingularName: 'Task', PluralName: 'Tasks' },
];
const ROLES: { value: PlanRole; label: string }[] = [
  { value: 'Owner', label: 'Owner' },
  { value: 'Editor', label: 'Editor' },
  { value: 'Contributor', label: 'Contributor' },
  { value: 'Guest', label: 'Guest' },
];

export function setupPlanSetupDialog(root: HTMLElement): { open(planID?: string): Promise<PlanSetupResult> } {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('[data-psu-dialog]');
  fillIcons(root);
  const name = q<FieldEl>('[data-psu="name"]');
  const description = q<FieldEl>('[data-psu="description"]');
  const startField = q<FieldEl>('[data-psu="start"]');
  const endField = q<FieldEl>('[data-psu="end"]');
  // A year in a new plan's name ("Delta Smelt Monitoring 2027") fills an untouched window with that year.
  let windowTouched = false;
  for (const f of [startField, endField]) f.addEventListener('change', () => (windowTouched = true));
  // A range reads as one too (2026-10-29): "2027–2031" or "2027-31" spans those years; "FY 2027–28" is California's
  // fiscal year, July to June.
  name.addEventListener('input', () => {
    if (windowTouched) return;
    const text = String(name.value ?? '');
    const m = /\b(FY\s*)?(20\d{2})(?:\s*[-–]\s*(20\d{2}|\d{2}))?\b/i.exec(text);
    if (!m) return;
    const from = Number(m[2]);
    const to = m[3] ? (m[3].length === 2 ? Math.floor(from / 100) * 100 + Number(m[3]) : Number(m[3])) : from;
    if (to < from) return;
    if (m[1]) {
      startField.value = `${from}-07-01`;
      endField.value = `${m[3] ? to : from + 1}-06-30`;
    } else {
      startField.value = `${from}-01-01`;
      endField.value = `${to}-12-31`;
    }
  });
  const levelRows = q<HTMLElement>('[data-psu-levels]');
  const peopleList = q<HTMLElement>('[data-psu-people]');
  const addPerson = q<HTMLElement & { value: string | string[]; options: { value: string; label: string }[] }>('[data-psu-add-person]');
  const confirm = q<ConfirmEl>('[data-psu-confirm]');
  const errorEl = q<HTMLElement>('[data-psu-error]');
  const levelTpl = q<HTMLTemplateElement>('template[data-psu-tpl="level"]');
  const personTpl = q<HTMLTemplateElement>('template[data-psu-tpl="person"]');

  // ── The section nav (2026-10-28, Andy: "x-large (x-wide) modal with the left sidebar nav"): one section at a time ──
  const SECTIONS = ['general', 'tracks', 'levels', 'people', 'lists', 'reminders', 'template', 'danger'] as const;
  type Section = (typeof SECTIONS)[number];
  const navLinks = new Map<Section, HTMLElement>(SECTIONS.map((id) => [id, q<HTMLElement>(`[data-psu-link="${id}"]`)]));
  const panes = new Map<Section, HTMLElement>(SECTIONS.map((id) => [id, q<HTMLElement>(`[data-psu-section="${id}"]`)]));
  const form = q<HTMLElement>('[data-psu-form]');
  let current: Section = 'general';
  function show(id: Section): void {
    current = id;
    for (const [key, pane] of panes) pane.hidden = key !== id;
    for (const [key, link] of navLinks) link.setAttribute('aria-current', String(key === id));
    form.scrollTop = 0;
  }
  for (const [id, link] of navLinks) link.addEventListener('click', () => show(id));

  // The open session: what the dialog edits, and how it began (for "Discard changes?").
  let planID: string | null = null;
  let levels: Required<PlanLevelCreateDto>[] = [];
  /** Levels the plan's items use, by index from the top: they can't be removed. */
  let used = new Set<number>();
  /** How many levels the plan has now: rows past it are new. */
  let saved = 0;
  let members: PlanMember[] = [];
  /** The people as the plan has them, to say what a save changes for whom. */
  let before: PlanMember[] = [];
  let views = new Set<PlanView>();
  /** A plan's configuration: the Lists section edits its lists; the rest rides along to Save as Template. */
  let config: PlanConfig | null = null;
  /** The first item at each level, by index from the top: where that level's Customize Page goes. */
  let firstAt = new Map<number, string>();
  let initial = '';
  let busy = false;
  let settle: (result: PlanSetupResult) => void = () => undefined;
  // New Plan's template (2026-10-28): the built-in ones and any saved from a plan's settings.
  const templateWrap = q<HTMLElement>('[data-psu-template-wrap]');
  const templateSelect = q<HTMLElement & { value: string | string[]; options: { value: string; label: string }[] }>('[data-psu-template]');
  let template = 'Study Program';
  templateSelect.addEventListener('change', () => {
    template = String(templateSelect.value || 'Study Program');
    const choice = templateChoices().find((t) => t.name === template);
    levels = (choice?.levels?.length ? choice.levels : STARTER_LEVELS).map((l) => ({ ...l }));
    drawLevels();
  });

  const state = () => JSON.stringify({ s: snapshot(), lists: config && [config.documentTypes, config.results, config.purposes, config.agencies, config.ackDays], reminders: config?.reminders ?? null });
  const snapshot = (): PlanSettings => ({ name: (name.value ?? '').trim(), description: (description.value ?? '').trim(), window: { start: String(startField.value ?? '') || null, end: String(endField.value ?? '') || null }, views: (['schedule', 'budget'] as const).filter((v) => views.has(v)), levels: levels.map((l) => ({ ...l })), members: members.map((m) => ({ ...m })) });

  // ── What it tracks ──
  const viewCards = [...root.querySelectorAll<HTMLElement>('[data-psu-view]')];
  function drawViews(): void {
    for (const card of viewCards) {
      const on = views.has(card.dataset.psuView as PlanView);
      card.toggleAttribute('data-on', on);
      card.querySelector<SwitchEl>('[data-psu-view-toggle]')!.checked = on;
    }
    q<HTMLElement>('[data-psu-views-error]').hidden = views.size > 0;
  }
  for (const card of viewCards) {
    const toggle = card.querySelector<SwitchEl>('[data-psu-view-toggle]')!;
    const view = card.dataset.psuView as PlanView;
    // The whole card toggles; the switch toggles itself and says so.
    card.addEventListener('click', (e) => {
      if (e.composedPath().includes(toggle)) return;
      toggle.checked = !toggle.checked;
      toggle.dispatchEvent(new CustomEvent('change', { detail: { checked: toggle.checked } }));
    });
    toggle.addEventListener('change', () => {
      if (toggle.checked) views.add(view);
      else views.delete(view);
      drawViews();
    });
  }

  // ── Levels ──
  function drawLevels(): void {
    levelRows.replaceChildren(
      ...levels.map((level, i) => {
        const row = levelTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
        row.querySelector('[data-level-label]')!.textContent = `Level ${i + 1}`;
        const singular = row.querySelector<FieldEl>('[data-level="singular"]')!;
        const plural = row.querySelector<FieldEl>('[data-level="plural"]')!;
        singular.value = level.SingularName;
        plural.value = level.PluralName;
        singular.setAttribute('aria-label', `Level ${i + 1} singular name`);
        plural.setAttribute('aria-label', `Level ${i + 1} plural name`);
        singular.addEventListener('input', () => (level.SingularName = singular.value ?? ''));
        plural.addEventListener('input', () => (level.PluralName = plural.value ?? ''));
        // Beacon's rule: only the deepest level goes, and not while items use it; a plan keeps one.
        const wrap = row.querySelector<HTMLElement>('[data-level-remove-wrap]')!;
        const last = i === levels.length - 1;
        wrap.style.visibility = last && levels.length > 1 ? '' : 'hidden';
        const blocked = i < saved && used.has(i);
        const button = row.querySelector<HTMLButtonElement>('[data-level-remove] button, button[data-level-remove]') ?? row.querySelector<HTMLButtonElement>('[data-level-remove-wrap] button')!;
        button.disabled = blocked;
        row.querySelector('[data-level-remove-tip]')!.setAttribute('text', blocked ? 'Items Use This Level' : 'Remove Level');
        button.addEventListener('click', () => {
          if (blocked) return;
          levels.pop();
          drawLevels();
        });
        // A level's page is set up on one of its items' pages: the first in the plan, or none yet.
        const page = row.querySelector<HTMLElement>('[data-level-page]')!;
        const elementId = i < saved ? firstAt.get(i) : undefined;
        const pluralName = level.PluralName || 'items';
        setEsaButtonDisabled(page.querySelector('button'), !elementId);
        row.querySelector('[data-level-page-tip]')!.setAttribute('text', elementId ? `Set up the ${level.SingularName || 'level'} page on one of its items` : i < saved ? `No ${pluralName} yet: add one to customize its page` : 'Save first, then add an item');
        page.addEventListener('click', () => void customize(elementId));
        fillIcons(row);
        return row;
      })
    );
    q<HTMLElement>('[data-psu-add-level]').hidden = levels.length >= MAX_LEVELS;
  }
  q<HTMLElement>('[data-psu-add-level]').addEventListener('click', () => {
    if (levels.length >= MAX_LEVELS) return;
    levels.push({ SingularName: '', PluralName: '' });
    drawLevels();
    levelRows.querySelector<HTMLElement>('.bcn-psu__level:last-child [data-level="singular"]')?.focus();
  });

  // ── People ──
  let me = currentUserName();
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
        });
        role.addEventListener('change', () => {
          member.role = (role.value as PlanRole) || member.role;
          checkOwners();
        });
        // Each Remove names its person, for a screen reader's list of buttons.
        row.querySelector('[data-person-remove] button')?.setAttribute('aria-label', `Remove ${member.name}`);
        row.querySelector('[data-person-remove] esa-tooltip, [data-person-remove]')?.setAttribute('title', `Remove ${member.name}`);
        row.querySelector('[data-person-remove]')!.addEventListener('click', () => {
          members = members.filter((m) => m !== member);
          drawPeople();
        });
        return row;
      })
    );
    void customElements.whenDefined('esa-combobox').then(() => {
      addPerson.options = PLAN_DIRECTORY.filter((n) => !members.some((m) => m.name === n)).map((n) => ({ value: n, label: orgOf(n) ? `${n} (${orgOf(n)})` : n }));
    });
    checkOwners();
  }
  const checkOwners = () => {
    const ok = members.some((m) => m.role === 'Owner');
    q<HTMLElement>('[data-psu-people-error]').hidden = ok;
    return ok;
  };
  // A person added comes in at the least they can do, raised by hand: the project's staff (ESA, DWR) as Contributors,
  // anyone from an agency as a Guest (2026-10-29, the second traps audit: an agency reviewer came in able to draft).
  addPerson.addEventListener('change', () => {
    const picked = String(addPerson.value ?? '');
    if (!picked || members.some((m) => m.name === picked)) return;
    members.push({ name: picked, role: ['ESA', 'DWR'].includes(orgOf(picked)) ? 'Contributor' : 'Guest' });
    drawPeople();
    requestAnimationFrame(() => (addPerson.value = ''));
  });

  // ── Lists (a plan's): each with its count; a renamed document type carries into the levels ──
  const lists = new Map<ListKey, ListEditor>();
  const countLists = () => {
    for (const key of LIST_KEYS) {
      const count = root.querySelector<HTMLElement>(`[data-psu-list="${key}"] [data-psu-list-count] .esa-badge__text`);
      if (count) count.textContent = String(config?.[key].length ?? 0);
    }
    markSections();
  };
  for (const key of LIST_KEYS) {
    lists.set(
      key,
      listEditor(q(`[data-ple-id="${key}"]`), {
        values: [],
        onChange: (values, change: ListChange) => {
          if (!config) return;
          config[key] = values;
          if (key === 'documentTypes' && (change.renamed || change.removed)) {
            for (const level of Object.values(config.levels)) {
              for (const p of level.modules) {
                const types = p.settings?.documentTypes;
                if (!types?.length) continue;
                p.settings!.documentTypes = change.renamed ? types.map((t) => (t === change.renamed!.from ? change.renamed!.to : t)) : types.filter((t) => t !== change.removed);
              }
            }
          }
          countLists();
        },
      })
    );
  }
  const ackDays = q<FieldEl>('[data-psu="ackDays"]');
  ackDays.addEventListener('input', () => {
    const n = Number(ackDays.value);
    ackDays.errorText = Number.isInteger(n) && n >= 1 && n <= 30 ? '' : 'A whole number of days, 1 to 30.';
    if (!ackDays.errorText && config) config.ackDays = n;
  });

  // ── Reminders (2026-10-28): prod's three kinds, on the plan's working config; Save keeps them ──
  type Toggle = HTMLElement & { checked: boolean };
  const remFields = [...root.querySelectorAll<HTMLElement>('[data-psu-rem]')];
  const remExtra = q<HTMLElement & { value: string[]; options: { value: string; label: string }[] }>('[data-psu-rem-extra]');
  const remGet = (r: ReminderConfig, path: string) => path.split('.').reduce<unknown>((o, k) => (o as Record<string, unknown>)[k], r);
  function drawReminders(): void {
    const r = config?.reminders ?? DEFAULT_REMINDERS;
    for (const f of remFields) {
      const path = f.dataset.psuRem!;
      const v = remGet(r, path);
      if (path.endsWith('.on')) (f as Toggle).checked = !!v;
      else (f as FieldEl).value = v === null || v === undefined ? '' : String(v);
      if (!path.endsWith('.on')) (f as FieldEl).errorText = '';
    }
    // A kind switched off folds its numbers away.
    for (const kind of ['comingUp', 'pastDue'] as const) root.querySelector<HTMLElement>(`[data-psu-rem="${kind}.on"]`)!.parentElement!.querySelector<HTMLElement>('.bcn-psu__rem-fields')!.hidden = !r[kind].on;
    void customElements.whenDefined('esa-select').then(() => {
      remExtra.options = members.map((m) => ({ value: m.name, label: m.name }));
      remExtra.value = [...r.extra];
    });
  }
  function readReminders(): void {
    if (!config) return;
    const r: ReminderConfig = JSON.parse(JSON.stringify(config.reminders ?? DEFAULT_REMINDERS));
    for (const f of remFields) {
      const path = f.dataset.psuRem!;
      const [kind, key] = path.split('.') as [keyof ReminderConfig, string];
      const box = r[kind] as unknown as Record<string, unknown>;
      if (key === 'on') box.on = (f as Toggle).checked;
      else {
        const raw = String((f as FieldEl).value ?? '').trim();
        const n = Number(raw);
        const optional = key === 'repeatDays';
        const ok = (optional && !raw) || (Number.isInteger(n) && n >= (key === 'afterDays' ? 0 : 1) && n <= 90);
        (f as FieldEl).errorText = ok ? '' : 'A whole number of days, up to 90.';
        if (ok) box[key] = optional && !raw ? null : n;
      }
    }
    r.extra = Array.isArray(remExtra.value) ? remExtra.value : [];
    config.reminders = r;
    drawReminders();
    markSections();
  }
  for (const f of remFields) f.addEventListener('change', readReminders);
  remExtra.addEventListener('change', readReminders);

  // ── Template: the plan's levels, fields, page layouts and lists under a name New Plan can start from ──
  const templateName = q<FieldEl>('[data-psu="templateName"]');
  templateName.addEventListener('input', () => (templateName.errorText = ''));
  async function saveAsTemplate(): Promise<void> {
    if (!config) return;
    const text = (templateName.value ?? '').trim();
    if (!text) return void (templateName.errorText = 'Name the template.');
    const taken = templateNameTaken(text);
    if (taken === 'built-in') return void (templateName.errorText = `${text} is a built-in template. Pick another name.`);
    if (taken === 'saved' && !(await ask(`Replace ${text}?`, 'A template by that name exists. Saving replaces it; plans made from it keep what they started with.', 'Replace Template', 'Pick Another Name'))) return;
    saveTemplate(text, config, snapshot().levels, me);
    pushAlert(`Saved as the template ${text}. New Plan can start from it.`, 'success');
  }
  q<HTMLElement>('[data-psu-template-save]').addEventListener('click', () => void saveAsTemplate());
  templateName.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key !== 'Enter') return;
    e.preventDefault();
    void saveAsTemplate();
  });

  // ── Asking: esa-confirm-dialog as a promise, its buttons centered as the plan page's guard (a hub gap: no footer hook) ──
  void customElements.whenDefined('esa-confirm-dialog').then(async () => {
    await confirm.updateComplete;
    const sheet = new CSSStyleSheet();
    sheet.replaceSync('.esa-confirm-dialog__footer { justify-content: center; }');
    if (confirm.shadowRoot) confirm.shadowRoot.adoptedStyleSheets = [...confirm.shadowRoot.adoptedStyleSheets, sheet];
  });
  const ask = (heading: string, message: string, confirmLabel: string, cancelLabel: string): Promise<boolean> =>
    new Promise((resolve) => {
      Object.assign(confirm, { heading, message, confirmLabel, cancelLabel });
      confirm.addEventListener('resolved', (e) => resolve(!!(e as CustomEvent<{ confirmed: boolean }>).detail?.confirmed), { once: true });
      confirm.open = true;
    });

  let settled = true;
  function close(result: PlanSetupResult): void {
    busy = false;
    settled = true;
    dialog.open = false;
    settle(result);
  }
  const dirty = () => state() !== initial;
  const askDiscard = () => ask(planID ? 'Discard Your Changes?' : 'Discard This Plan?', planID ? 'Nothing you changed here is saved.' : 'The plan is not created.', 'Discard', 'Keep Editing');
  async function cancel(): Promise<void> {
    if (busy) return;
    if (dirty() && !(await askDiscard())) return;
    close(null);
  }
  q<HTMLElement>('[data-psu-cancel]').addEventListener('click', () => void cancel());
  /** Off to an item's page to customize its level's: unsaved changes here are asked about first. */
  async function customize(elementId: string | undefined): Promise<void> {
    if (!elementId || busy) return;
    if (dirty() && !(await askDiscard())) return;
    close({ kind: 'customize', elementId });
  }
  // The dialog's own exits (its X, Escape, the backdrop) close it before anyone can ask: with changes, it comes back
  // and asks; without, it's a cancel.
  dialog.addEventListener('close', async (e) => {
    if (e.target !== dialog || settled || busy) return;
    if (!dirty()) return close(null);
    dialog.open = true;
    if (await askDiscard()) close(null);
  });

  /** Each section's fields, as a string, to tell which ones changed (the nav's dots). */
  const sectionStates = (): Record<Section, string> => {
    const s = snapshot();
    return {
      general: JSON.stringify([s.name, s.description, s.window, template]),
      tracks: JSON.stringify(s.views),
      levels: JSON.stringify(s.levels),
      people: JSON.stringify(s.members),
      lists: JSON.stringify(config && [config.documentTypes, config.results, config.purposes, config.agencies, config.ackDays]),
      reminders: JSON.stringify(config?.reminders ?? null),
      template: '',
      danger: '',
    };
  };
  let initialSections = sectionStates();
  /** The nav's marks: a dot beside a section with changes, a red one beside a section that won't save. */
  function markSections(): void {
    const now = sectionStates();
    for (const id of SECTIONS) {
      const link = navLinks.get(id)!;
      const changed = now[id] !== initialSections[id];
      const bad = failing.has(id);
      link.toggleAttribute('data-error', bad);
      const dot = link.querySelector<HTMLElement>('[data-psu-dot]')!;
      dot.hidden = !changed && !bad;
      dot.querySelector('[data-psu-dot-text]')!.textContent = bad ? ', needs attention' : ', changed';
    }
  }
  root.addEventListener('input', () => queueMicrotask(markSections));
  root.addEventListener('change', () => queueMicrotask(markSections));

  /** The sections that won't save, as of the last Save. */
  const failing = new Set<Section>();
  function validate(s: PlanSettings): boolean {
    failing.clear();
    name.errorText = s.name ? '' : 'Name the plan.';
    if (!s.name) failing.add('general');
    const backwards = !!(s.window?.start && s.window.end && s.window.end < s.window.start);
    endField.errorText = backwards ? 'End on or after the start.' : '';
    if (backwards) failing.add('general');
    levelRows.querySelectorAll<FieldEl>('esa-text-field').forEach((field) => {
      const empty = !(field.value ?? '').trim();
      field.errorText = empty ? 'Required.' : '';
      if (empty) failing.add('levels');
    });
    if (!s.views.length) failing.add('tracks');
    if (!checkOwners()) failing.add('people');
    if (config && ackDays.errorText) failing.add('lists');
    if (config && remFields.some((f) => (f as FieldEl).errorText)) failing.add('reminders');
    drawViews();
    markSections();
    // Off to the first section that won't save, in the nav's order.
    const first = SECTIONS.find((id) => failing.has(id));
    if (first) show(first);
    return !first;
  }

  q<HTMLElement>('[data-psu-save]').addEventListener('click', async () => {
    if (busy) return;
    const s = snapshot();
    errorEl.hidden = true;
    if (!validate(s)) return;
    // What the People changes do, said before they land (2026-10-29, the traps audit): your own role lowered or gone,
    // and the drafts of the people removed.
    if (planID) {
      const roleOf = (list: PlanMember[], n: string) => list.find((m) => m.name === n)?.role;
      const mine = { was: roleOf(before, me), now: roleOf(s.members, me) };
      const said: string[] = [];
      if (mine.was === 'Owner' && mine.now !== 'Owner') said.push(mine.now ? `You become ${mine.now === 'Editor' ? 'an Editor' : `a ${mine.now}`} and can't open these settings again.` : 'You leave the plan and stop seeing it.');
      else if (mine.was && !mine.now) said.push('You leave the plan and stop seeing it.');
      const gone = before.filter((m) => m.name !== me && !roleOf(s.members, m.name)).map((m) => m.name);
      const drafts = getRepo(planID).drafts.filter((d) => gone.includes(d.owner) && !d.transient);
      if (drafts.length) said.push(`${drafts.map((d) => `${firstName(d.owner)}'s draft (${d.name})`).join(', ')} ${drafts.length === 1 ? 'stays' : 'stay'} on the plan, where an Owner or Editor can publish or discard ${drafts.length === 1 ? 'it' : 'them'}; ${drafts.length === 1 ? 'its owner' : 'their owners'} can't open ${drafts.length === 1 ? 'it' : 'them'}.`);
      if (said.length && !(await ask('Save These People?', said.join(' '), 'Save', 'Keep Editing'))) return;
    }
    busy = true;
    try {
      if (planID) {
        await savePlanSettings(planID, s);
        if (config) savePlanConfig(planID, config);
        close({ kind: 'saved' });
      } else {
        close({ kind: 'created', planID: await createPlanRepo({ ...s, config: templateChoices().find((t) => t.name === template)?.config() }) });
      }
    } catch (err) {
      busy = false;
      errorEl.textContent = (err as { error?: { message?: string } })?.error?.message ?? (err as Error)?.message ?? 'Not saved. Try again.';
      errorEl.hidden = false;
    }
  });

  q<HTMLElement>('[data-psu-delete]').addEventListener('click', async () => {
    if (!planID || busy) return;
    const planName = (name.value ?? '').trim() || 'this plan';
    // Said before it happens (2026-10-29, the traps audit): a send still out holds the delete, and the confirm names
    // what goes with the plan, other people's drafts among it.
    const rec = recordsFor(planID);
    const out = rec.transmittals.filter((t) => t.sentAt && !t.closedAt);
    const tNum = (n: number) => `T-${String(n).padStart(3, '0')}`;
    if (out.length) {
      if (await ask(`${planName} Has Sends Still Out`, `${out.map((t) => tNum(t.number)).join(', ')} ${out.length === 1 ? 'is' : 'are'} still with ${[...new Set(out.flatMap((t) => t.to))].join(', ')}. Close ${out.length === 1 ? 'it' : 'them'} first, so nobody answers a plan that's gone.`, `Open ${tNum(out[0].number)}`, 'Keep Plan')) location.assign(TRANSMITTAL_HREF(planID, out[0].id));
      return;
    }
    const repo = getRepo(planID);
    const others = [...new Set(repo.drafts.filter((d) => d.owner !== me && !d.transient).map((d) => firstName(d.owner)))];
    const n = (k: number, one: string, many: string) => (k ? `${k} ${k === 1 ? one : many}` : '');
    const obligations = Object.values(rec.obligations).reduce((a, ids) => a + ids.length, 0);
    const goes = [n(repo.versions.length, 'revision', 'revisions'), n(repo.drafts.filter((d) => !d.transient).length, 'draft', 'drafts'), n(rec.transmittals.length, 'transmittal', 'transmittals'), n(rec.links.length + rec.files.length, 'document', 'documents'), n(rec.comments.length, 'comment', 'comments'), n(obligations, 'obligation link', 'obligation links')].filter(Boolean);
    const list = goes.length > 1 ? `${goes.slice(0, -1).join(', ')} and ${goes.at(-1)}` : goes[0] ?? 'Its revisions';
    const theirs = others.length ? ` ${others.join(' and ')} ${others.length === 1 ? 'loses a draft' : 'lose their drafts'}.` : '';
    if (!(await ask(`Delete ${planName}?`, `Its ${list} go with it, budget included.${theirs} This can’t be undone.`, 'Delete Plan', 'Keep Plan'))) return;
    busy = true;
    await deletePlanRepo(planID);
    close({ kind: 'deleted' });
  });

  return {
    async open(id?: string) {
      me = currentUserName();
      planID = id ?? null;
      errorEl.hidden = true;
      if (planID) {
        const plan = await planApi.getPlan(planID);
        const repo = getRepo(planID);
        const sorted = [...(plan.Levels ?? [])].sort((a, b) => (a.Depth ?? 0) - (b.Depth ?? 0));
        levels = sorted.map((l) => ({ SingularName: l.SingularName ?? '', PluralName: l.PluralName ?? '' }));
        saved = levels.length;
        // The first item at each depth, in plan order: its level's Customize Page.
        const first = new Map<number, string>();
        const walk = (els: typeof plan.Elements) => els?.forEach((e) => (first.has(e.LevelDepth ?? 0) || first.set(e.LevelDepth ?? 0, String(e.PlanElementID)), walk(e.Children)));
        walk(plan.Elements);
        used = new Set(sorted.map((l, i) => (first.has(l.Depth ?? -1) ? i : -1)).filter((i) => i >= 0));
        firstAt = new Map(sorted.flatMap((l, i) => (first.has(l.Depth ?? -1) ? [[i, first.get(l.Depth ?? -1)!] as [number, string]] : [])));
        config = clonePlanConfig(configOf(repo));
        for (const key of LIST_KEYS) lists.get(key)!.set(config[key]);
        countLists();
        ackDays.value = String(config.ackDays ?? 2);
        drawReminders();
        ackDays.errorText = '';
        templateName.value = plan.PlanName ?? '';
        templateName.errorText = '';
        q<HTMLElement>('[data-psu-template-hint]').textContent = `${config.template ? `Started from ${config.template}. ` : ''}Save its levels, fields, page layouts and lists under a name New Plan can start from. Its items, dates, money and people stay with this plan.`;
        members = membersOf(repo).map((m) => ({ ...m }));
        before = members.map((m) => ({ ...m }));
        views = new Set(viewsOf(repo));
        name.value = plan.PlanName ?? '';
        description.value = plan.Description ?? '';
        startField.value = repo.window?.start ?? '';
        endField.value = repo.window?.end ?? '';
        endField.errorText = '';
        windowTouched = true;
        dialog.heading = `Plan Settings: ${plan.PlanName ?? ''}`;
      } else {
        levels = STARTER_LEVELS.map((l) => ({ ...l }));
        saved = 0;
        used = new Set();
        members = [{ name: me, role: 'Owner' }];
        views = new Set<PlanView>(['schedule', 'budget']);
        name.value = '';
        description.value = '';
        startField.value = '';
        endField.value = '';
        endField.errorText = '';
        windowTouched = false;
        dialog.heading = 'New Plan';
        config = null;
        firstAt = new Map();
        template = 'Study Program';
        void customElements.whenDefined('esa-select').then(() => {
          templateSelect.options = templateChoices().map((t) => ({ value: t.name, label: t.builtIn ? t.name : `${t.name} (Saved)` }));
          templateSelect.value = template;
        });
      }
      templateWrap.hidden = !!planID;
      root.toggleAttribute('data-new', !planID);
      failing.clear();
      show('general');
      name.errorText = '';
      q<HTMLElement>('[data-psu-save-label]').textContent = planID ? 'Save Changes' : 'Create Plan';
      q<HTMLElement>('[data-psu-danger]').hidden = !planID;
      drawViews();
      drawLevels();
      drawPeople();
      initial = state();
      initialSections = sectionStates();
      markSections();
      busy = false;
      settled = false;
      dialog.open = true;
      requestAnimationFrame(() => name.focus());
      return new Promise<PlanSetupResult>((resolve) => (settle = resolve));
    },
  };
}
