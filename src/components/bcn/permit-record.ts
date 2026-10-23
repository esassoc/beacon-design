// Controller for <BcnPermitRecord>: shows the open permit's pre-rendered header and
// body, walks the register with prev / next, swaps to a linked permit in place, and on
// Save writes status, assignee and newly finished submittal items to the store.
import { setupStatusSelect, type StatusSelectController } from './status-select';
import { STATUS_META, type PermitStatus } from '../../data/internal-permits';
import { initRegister, neighbor, openPermit, allPermits, savePermit, state, subscribe } from '../../lib/permit-register';

type DialogEl = HTMLElement & { open: boolean };
type SelectEl = HTMLElement & { options: { value: string; label: string }[]; value: string };
type CheckboxEl = HTMLElement & { checked: boolean };

export function setupPermitRecord(root: HTMLElement): void {
  initRegister();
  const dialog = root.querySelector<DialogEl>('esa-dialog')!;
  const assignees = JSON.parse(root.dataset.assignees || '[]') as { value: string; label: string }[];

  const statusCtl = new Map<string, StatusSelectController>();
  for (const body of root.querySelectorAll<HTMLElement>('[data-pr-body]')) {
    const el = body.querySelector<HTMLElement>('[data-pr-status] .bcn-status-select');
    if (el) statusCtl.set(body.dataset.prBody!, setupStatusSelect(el));
  }

  // esa-select's options are a Lit property: set them once the element upgrades.
  customElements.whenDefined('esa-select').then(() => {
    for (const sel of root.querySelectorAll<SelectEl>('[data-pr-assignee]')) {
      sel.options = assignees;
      sel.value = sel.dataset.value ?? '';
    }
  });

  const head = (id: string) => root.querySelector<HTMLElement>(`[data-pr-head="${id}"]`);
  const body = (id: string) => root.querySelector<HTMLElement>(`[data-pr-body="${id}"]`);

  /** Bring a body's controls back to the stored state (a Cancel, or a reopen). */
  function reset(id: string): void {
    const p = allPermits().find((x) => x.id === id);
    const b = body(id);
    if (!p || !b) return;
    statusCtl.get(id)?.setValue(p.status);
    const sel = b.querySelector<SelectEl>('[data-pr-assignee]');
    if (sel) sel.value = p.assigneeId;
    for (const cb of b.querySelectorAll<CheckboxEl>('[data-pr-req]')) {
      const r = p.requirements.find((x) => x.id === cb.dataset.prReq);
      cb.checked = Boolean(r?.done);
    }
    const count = b.querySelector<HTMLElement>('[data-pr-req-count]');
    if (count) count.textContent = `${p.requirements.filter((r) => r.done).length} of ${p.requirements.length}`;
  }

  /** Repaint the header chip from the stored status. */
  function paintChip(id: string): void {
    const p = allPermits().find((x) => x.id === id);
    const chip = head(id)?.querySelector<HTMLElement>('.bcn-status-chip');
    if (!p || !chip) return;
    chip.dataset.status = p.status;
    chip.style.setProperty('--_chip', STATUS_META[p.status].tone);
    chip.querySelector('.bcn-status-chip__label')!.textContent = STATUS_META[p.status].label;
  }

  let shown: string | null = null;
  function show(id: string | null): void {
    if (shown) {
      head(shown)?.setAttribute('hidden', '');
      body(shown)?.setAttribute('hidden', '');
    }
    shown = id;
    if (!id) {
      dialog.open = false;
      return;
    }
    reset(id);
    paintChip(id);
    head(id)?.removeAttribute('hidden');
    const b = body(id);
    b?.removeAttribute('hidden');
    b?.querySelectorAll('.bcn-pr__main, .bcn-pr__side').forEach((el) => (el.scrollTop = 0));
    dialog.open = true;
  }

  root.querySelector('[data-pr-prev]')?.addEventListener('click', () => shown && openPermit(neighbor(shown, -1)));
  root.querySelector('[data-pr-next]')?.addEventListener('click', () => shown && openPermit(neighbor(shown, 1)));
  root.querySelector('[data-pr-close]')?.addEventListener('click', () => openPermit(null));
  root.querySelector('[data-pr-cancel]')?.addEventListener('click', () => openPermit(null));
  dialog.addEventListener('close', () => state.openId && openPermit(null));

  root.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLElement>('[data-pr-open]');
    if (link) openPermit(link.dataset.prOpen!);
  });

  root.querySelector('[data-pr-save]')?.addEventListener('click', () => {
    if (!shown) return;
    const b = body(shown)!;
    const original = allPermits().find((x) => x.id === shown)!;
    const done = [...b.querySelectorAll<CheckboxEl>('[data-pr-req]')].filter((cb) => cb.checked).map((cb) => cb.dataset.prReq!);
    savePermit(shown, {
      status: (statusCtl.get(shown)?.value as PermitStatus) ?? original.status,
      assigneeId: b.querySelector<SelectEl>('[data-pr-assignee]')?.value || original.assigneeId,
      done,
    });
    openPermit(null);
  });

  subscribe((s, reason) => {
    if (reason === 'open' || reason === 'init') show(s.openId);
  });
  if (state.openId) show(state.openId);
}

