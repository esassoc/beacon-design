// <BcnPlanSetupDialog>'s runtime (2026-10-28): New Plan and a plan's settings in one modal. open() resolves what came of
// it: a plan created (its id), settings saved, the plan deleted, or nothing (cancelled). Saving writes through
// plan-repo.ts (createPlanRepo, savePlanSettings, deletePlanRepo); the page decides where to go next.

import { planApi, currentUserName } from '../../lib/planning/plan-server';
import {
  PLAN_DIRECTORY,
  createPlanRepo,
  deletePlanRepo,
  getRepo,
  membersOf,
  savePlanSettings,
  viewsOf,
  type PlanMember,
  type PlanRole,
  type PlanSettings,
  type PlanView,
} from '../../lib/planning/plan-repo';
import type { PlanLevelCreateDto } from '../../lib/planning/model';
import { planAvatar } from './plan-people';

export type PlanSetupResult = { kind: 'created'; planID: string } | { kind: 'saved' } | { kind: 'deleted' } | null;

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
];

export function setupPlanSetupDialog(root: HTMLElement): { open(planID?: string): Promise<PlanSetupResult> } {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('[data-psu-dialog]');
  const name = q<FieldEl>('[data-psu="name"]');
  const description = q<FieldEl>('[data-psu="description"]');
  const levelRows = q<HTMLElement>('[data-psu-levels]');
  const peopleList = q<HTMLElement>('[data-psu-people]');
  const addPerson = q<HTMLElement & { value: string | string[]; options: { value: string; label: string }[] }>('[data-psu-add-person]');
  const confirm = q<ConfirmEl>('[data-psu-confirm]');
  const errorEl = q<HTMLElement>('[data-psu-error]');
  const levelTpl = q<HTMLTemplateElement>('template[data-psu-tpl="level"]');
  const personTpl = q<HTMLTemplateElement>('template[data-psu-tpl="person"]');

  // The open session: what the dialog edits, and how it began (for "Discard changes?").
  let planID: string | null = null;
  let levels: Required<PlanLevelCreateDto>[] = [];
  /** Levels the plan's items use, by index from the top: they can't be removed. */
  let used = new Set<number>();
  /** How many levels the plan has now: rows past it are new. */
  let saved = 0;
  let members: PlanMember[] = [];
  let views = new Set<PlanView>();
  let initial = '';
  let busy = false;
  let settle: (result: PlanSetupResult) => void = () => undefined;

  const snapshot = (): PlanSettings => ({ name: (name.value ?? '').trim(), description: (description.value ?? '').trim(), views: (['schedule', 'budget'] as const).filter((v) => views.has(v)), levels: levels.map((l) => ({ ...l })), members: members.map((m) => ({ ...m })) });

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
  const me = currentUserName();
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
        row.querySelector('[data-person-remove]')!.addEventListener('click', () => {
          members = members.filter((m) => m !== member);
          drawPeople();
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
    q<HTMLElement>('[data-psu-people-error]').hidden = ok;
    return ok;
  };
  // A person added comes in as a Contributor: the least they can do, raised by hand.
  addPerson.addEventListener('change', () => {
    const picked = String(addPerson.value ?? '');
    if (!picked || members.some((m) => m.name === picked)) return;
    members.push({ name: picked, role: 'Contributor' });
    drawPeople();
    requestAnimationFrame(() => (addPerson.value = ''));
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
  const dirty = () => JSON.stringify(snapshot()) !== initial;
  const askDiscard = () => ask(planID ? 'Discard Your Changes?' : 'Discard This Plan?', planID ? 'Nothing you changed here is saved.' : 'The plan is not created.', 'Discard', 'Keep Editing');
  async function cancel(): Promise<void> {
    if (busy) return;
    if (dirty() && !(await askDiscard())) return;
    close(null);
  }
  q<HTMLElement>('[data-psu-cancel]').addEventListener('click', () => void cancel());
  // The dialog's own exits (its X, Escape, the backdrop) close it before anyone can ask: with changes, it comes back
  // and asks; without, it's a cancel.
  dialog.addEventListener('close', async (e) => {
    if (e.target !== dialog || settled || busy) return;
    if (!dirty()) return close(null);
    dialog.open = true;
    if (await askDiscard()) close(null);
  });

  function validate(s: PlanSettings): boolean {
    let ok = true;
    name.errorText = s.name ? '' : 'Name the plan.';
    if (!s.name) ok = false;
    levelRows.querySelectorAll<FieldEl>('esa-text-field').forEach((field) => {
      const empty = !(field.value ?? '').trim();
      field.errorText = empty ? 'Required.' : '';
      if (empty) ok = false;
    });
    if (!s.views.length) ok = false;
    if (!checkOwners()) ok = false;
    drawViews();
    return ok;
  }

  q<HTMLElement>('[data-psu-save]').addEventListener('click', async () => {
    if (busy) return;
    const s = snapshot();
    errorEl.hidden = true;
    if (!validate(s)) return;
    busy = true;
    try {
      if (planID) {
        await savePlanSettings(planID, s);
        close({ kind: 'saved' });
      } else {
        close({ kind: 'created', planID: await createPlanRepo(s) });
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
    if (!(await ask(`Delete ${planName}?`, 'Its revisions, drafts and budget go with it. This can’t be undone.', 'Delete Plan', 'Keep Plan'))) return;
    busy = true;
    await deletePlanRepo(planID);
    close({ kind: 'deleted' });
  });

  return {
    async open(id?: string) {
      planID = id ?? null;
      errorEl.hidden = true;
      if (planID) {
        const plan = await planApi.getPlan(planID);
        const repo = getRepo(planID);
        const sorted = [...(plan.Levels ?? [])].sort((a, b) => (a.Depth ?? 0) - (b.Depth ?? 0));
        levels = sorted.map((l) => ({ SingularName: l.SingularName ?? '', PluralName: l.PluralName ?? '' }));
        saved = levels.length;
        const depths = new Set<number>();
        const walk = (els: typeof plan.Elements) => els?.forEach((e) => (depths.add(e.LevelDepth ?? 0), walk(e.Children)));
        walk(plan.Elements);
        used = new Set(sorted.map((l, i) => (depths.has(l.Depth ?? -1) ? i : -1)).filter((i) => i >= 0));
        members = membersOf(repo).map((m) => ({ ...m }));
        views = new Set(viewsOf(repo));
        name.value = plan.PlanName ?? '';
        description.value = plan.Description ?? '';
        dialog.heading = `Plan Settings: ${plan.PlanName ?? ''}`;
      } else {
        levels = STARTER_LEVELS.map((l) => ({ ...l }));
        saved = 0;
        used = new Set();
        members = [{ name: me, role: 'Owner' }];
        views = new Set<PlanView>(['schedule', 'budget']);
        name.value = '';
        description.value = '';
        dialog.heading = 'New Plan';
      }
      name.errorText = '';
      q<HTMLElement>('[data-psu-save-label]').textContent = planID ? 'Save Changes' : 'Create Plan';
      q<HTMLElement>('[data-psu-danger]').hidden = !planID;
      drawViews();
      drawLevels();
      drawPeople();
      initial = JSON.stringify(snapshot());
      busy = false;
      settled = false;
      dialog.open = true;
      requestAnimationFrame(() => name.focus());
      return new Promise<PlanSetupResult>((resolve) => (settle = resolve));
    },
  };
}
