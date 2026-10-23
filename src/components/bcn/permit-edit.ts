// Controller for <BcnPermitEdit>. setupPermitEdit() owns the one pre-rendered panel:
// it listens for `bcn-permit-edit` ({ permitId }) on document, fills every field from the
// store, and on Save writes only what changed through updatePermit(). Round rows are cloned
// from the component's <template>; nothing here builds markup from strings.
//
// esa-side-dialog layout: the hub lego now clears the UA dialog's `inset: 0` and
// `height: fit-content` itself (inset-inline: auto; height: auto — hub fix 2026-08-25), so
// the forceSideDialogLayout() workaround permitting-details.astro still carries is not
// needed here.
//
// bcn-lego-checked: a controller, not UI — it drives the esa-* legos the .astro renders.
import { getPermit, initFromIsland, updatePermit } from '../../lib/internal-permits-store';
import type { Permit, PermitStatus, ReviewRound } from '../../data/internal-permits';

type SideDialogEl = HTMLElement & { open: boolean; show(): void; close(): void };
type ValueEl = HTMLElement & { value: string; options?: { label: string; value: string }[] };
type SwitchEl = HTMLElement & { checked: boolean };

interface Fields {
  status: ValueEl;
  assignee: ValueEl;
  trigger: ValueEl;
  reference: ValueEl;
  contact: ValueEl;
  estimated: ValueEl;
  issued: ValueEl;
  expires: ValueEl;
  conditions: ValueEl;
  conditionsDetail: HTMLElement;
  conditionsCount: ValueEl;
  conditionsBeacon: SwitchEl;
}

/** Lit legos take `options` as a property; the .astro hands them over as data-options JSON. */
function hydrateOptions(scope: ParentNode): void {
  scope.querySelectorAll<ValueEl>('[data-options]').forEach((el) => {
    el.options = JSON.parse(el.dataset.options || '[]');
  });
}

const conditionsValue = (c: boolean | null): string => (c === true ? 'yes' : c === false ? 'no' : 'unknown');
const conditionsFrom = (v: string): boolean | null => (v === 'yes' ? true : v === 'no' ? false : null);
/** Optional text: an emptied field clears the value. */
const opt = (v: string): string | undefined => (v.trim() ? v.trim() : undefined);
const same = (a: unknown, b: unknown): boolean => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

export function setupPermitEdit(): void {
  const root = document.querySelector<HTMLElement>('[data-bcn-permit-edit]');
  if (!root || root.dataset.wired) return;
  root.dataset.wired = 'true';

  const q = <T extends Element = HTMLElement>(key: string) => root.querySelector<T>(`[data-pe="${key}"]`)!;
  const dialog = root.querySelector<SideDialogEl>('esa-side-dialog')!;
  const roundList = q<HTMLOListElement>('rounds');
  const roundTpl = root.querySelector<HTMLTemplateElement>('template[data-pe-tpl="round"]')!;
  const nameEl = q('name');

  const form = root.querySelector<HTMLFormElement>('[data-pe="form"]')!;
  hydrateOptions(form);
  // Enter in a field must not submit-and-reload; Save is the only write.
  form.addEventListener('submit', (e) => e.preventDefault());

  const f: Fields = {
    status: q<ValueEl>('status'),
    assignee: q<ValueEl>('assignee'),
    trigger: q<ValueEl>('trigger'),
    reference: q<ValueEl>('reference'),
    contact: q<ValueEl>('contact'),
    estimated: q<ValueEl>('estimated'),
    issued: q<ValueEl>('issued'),
    expires: q<ValueEl>('expires'),
    conditions: q<ValueEl>('conditions'),
    conditionsDetail: q('conditions-detail'),
    conditionsCount: q<ValueEl>('conditions-count'),
    conditionsBeacon: q<SwitchEl>('conditions-beacon'),
  };

  let permitId: string | null = null;

  const syncConditions = () => {
    f.conditionsDetail.hidden = f.conditions.value !== 'yes';
  };
  f.conditions.addEventListener('change', syncConditions);

  // ── Review rounds ─────────────────────────────────────────────────────────────
  const relabelRounds = () => {
    roundList.querySelectorAll<HTMLElement>('[data-row="label"]').forEach((el, i) => {
      el.textContent = `Round ${i + 1}`;
    });
  };

  const addRoundRow = (round: Partial<ReviewRound> = {}) => {
    const li = roundTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
    roundList.append(li);
    hydrateOptions(li);
    const sent = li.querySelector<ValueEl>('[data-row="sent"]')!;
    const returned = li.querySelector<ValueEl>('[data-row="returned"]')!;
    const outcome = li.querySelector<ValueEl>('[data-row="outcome"]')!;
    sent.value = round.sent ?? '';
    returned.value = round.returned ?? '';
    outcome.value = round.outcome ?? '';
    li.querySelector('[data-row="remove"]')!.addEventListener('click', () => {
      li.remove();
      relabelRounds();
    });
    relabelRounds();
    return li;
  };

  const readRounds = (): ReviewRound[] =>
    [...roundList.children]
      .map((li) => {
        const sent = li.querySelector<ValueEl>('[data-row="sent"]')!.value;
        const returned = li.querySelector<ValueEl>('[data-row="returned"]')!.value;
        const outcome = li.querySelector<ValueEl>('[data-row="outcome"]')!.value as ReviewRound['outcome'] | '';
        const r: ReviewRound = { sent };
        if (returned) r.returned = returned;
        if (outcome) r.outcome = outcome;
        return r;
      })
      // A round with neither date never happened; drop it rather than store an empty row.
      .filter((r) => r.sent || r.returned);

  q('add-round').addEventListener('click', () => {
    const li = addRoundRow();
    // Hand focus to the new round's first field once the lego has rendered.
    requestAnimationFrame(() => li.querySelector<HTMLElement>('[data-row="sent"]')?.focus());
  });

  // ── Fill / save ───────────────────────────────────────────────────────────────
  const fill = (p: Permit) => {
    nameEl.textContent = p.name;
    f.status.value = p.status;
    f.assignee.value = p.assigneeId;
    f.trigger.value = p.trigger;
    f.reference.value = p.referenceNumber ?? '';
    f.contact.value = p.agencyContact ?? '';
    f.estimated.value = p.estimatedIssueDate ?? '';
    f.issued.value = p.issuedDate ?? '';
    f.expires.value = p.expiresDate ?? '';
    f.conditions.value = conditionsValue(p.conditions);
    f.conditionsCount.value = p.conditionsCount != null ? String(p.conditionsCount) : '';
    f.conditionsBeacon.checked = !!p.conditionsInBeacon;
    syncConditions();
    roundList.replaceChildren();
    p.rounds.forEach((r) => addRoundRow(r));
  };

  const buildPatch = (p: Permit): Partial<Permit> => {
    const conditions = conditionsFrom(f.conditions.value);
    const countRaw = Number.parseInt(f.conditionsCount.value, 10);
    const next: Partial<Permit> = {
      status: f.status.value as PermitStatus,
      assigneeId: f.assignee.value,
      trigger: f.trigger.value.trim(),
      referenceNumber: opt(f.reference.value),
      agencyContact: opt(f.contact.value),
      estimatedIssueDate: opt(f.estimated.value),
      issuedDate: opt(f.issued.value),
      expiresDate: opt(f.expires.value),
      conditions,
      conditionsCount: conditions === true && Number.isFinite(countRaw) && countRaw >= 0 ? countRaw : undefined,
      conditionsInBeacon: conditions === true ? f.conditionsBeacon.checked : undefined,
      rounds: readRounds(),
    };
    const patch: Partial<Permit> = {};
    (Object.keys(next) as (keyof Permit)[]).forEach((k) => {
      if (!same(next[k], p[k])) (patch as Record<string, unknown>)[k] = next[k];
    });
    return patch;
  };

  const open = (id: string) => {
    initFromIsland();
    const p = getPermit(id);
    if (!p) return;
    permitId = id;
    fill(p);
    dialog.show();
  };

  q('save').addEventListener('click', () => {
    const p = permitId ? getPermit(permitId) : undefined;
    if (p) {
      const patch = buildPatch(p);
      if (Object.keys(patch).length) updatePermit(p.id, patch);
    }
    dialog.close();
  });
  q('cancel').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    permitId = null;
  });

  document.addEventListener('bcn-permit-edit', (e) => {
    const id = (e as CustomEvent<{ permitId: string }>).detail?.permitId;
    if (id) open(id);
  });
}
