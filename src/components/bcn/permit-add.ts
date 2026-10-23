// Controller for <BcnPermitAdd>. setupPermitAdd() owns the one pre-rendered panel: a
// document-level click delegate opens it from any `data-permit-add` element; picking a
// Jurisdiction fills the Permit select from the catalog island; picking a Permit shows the
// read-only preview; "Add Permit" builds the Permit, adds it through the store, closes the
// panel and opens the new permit in the detail dialog.
//
// esa-side-dialog layout: the hub lego now clears the UA dialog's `inset: 0` and
// `height: fit-content` itself (inset-inline: auto; height: auto — hub fix 2026-08-25), so
// the forceSideDialogLayout() workaround permitting-details.astro still carries is not
// needed here.
//
// bcn-lego-checked: a controller, not UI — it drives the esa-* legos the .astro renders;
// the only nodes it creates are plain <li> text rows of the requirements list.
import { addPermit, initFromIsland, openPermit } from '../../lib/internal-permits-store';
import type { Permit } from '../../data/internal-permits';

/** What the client needs per catalog entry (the .astro builds these server-side). */
export interface PermitAddCatalogEntry {
  id: string;
  jurisdictionId: string;
  localName: string;
  /** "Land Disturbing Activity Permit (LDA)" — the Permit select's option label. */
  label: string;
  requirements: string[];
  /** "Submittal checklist (PDF): Bothell LDA submittal checklist". */
  source: string;
  /** "Valid 36 months"; null when the catalog has no validity. */
  validity: string | null;
  /** "Median 6.7 months across 3 issued permits"; null when none have been issued. */
  turnaround: string | null;
}

type SideDialogEl = HTMLElement & { open: boolean; show(): void; close(): void };
type ValueEl = HTMLElement & { value: string; disabled: boolean; options: { label: string; value: string }[] };

/** esa-side-dialog's slide-out (its 200ms exit timer) plus a frame, so the detail dialog
    opens once the panel has left the top layer and focus can land in the new dialog. */
const PANEL_EXIT_MS = 220;

export function setupPermitAdd(): void {
  const root = document.querySelector<HTMLElement>('[data-bcn-permit-add]');
  if (!root || root.dataset.wired) return;
  root.dataset.wired = 'true';

  const q = <T extends Element = HTMLElement>(key: string) => root.querySelector<T>(`[data-pa="${key}"]`);
  const dialog = root.querySelector<SideDialogEl>('esa-side-dialog')!;
  const catalog = JSON.parse(q('catalog')?.textContent || '[]') as PermitAddCatalogEntry[];
  const projectId = root.dataset.projectId!;
  const currentUser = root.dataset.currentUser!;
  const wholeProject = root.dataset.wholeProject!;

  root.querySelectorAll<ValueEl>('[data-options]').forEach((el) => {
    el.options = JSON.parse(el.dataset.options || '[]');
  });

  // Enter in a field must not submit-and-reload; Add Permit is the only write.
  q<HTMLFormElement>('form')!.addEventListener('submit', (e) => e.preventDefault());

  const jurisdiction = q<ValueEl>('jurisdiction')!;
  const permit = q<ValueEl>('permit')!;
  const site = q<ValueEl>('site'); // absent when the project has one site
  const trigger = q<ValueEl>('trigger')!;
  const assignee = q<ValueEl>('assignee')!;
  const preview = q('preview')!;
  const reqs = q<HTMLUListElement>('reqs')!;
  const source = q('source')!;
  const validity = q('validity')!;
  const turnaroundWrap = q('turnaround-wrap')!;
  const turnaround = q('turnaround')!;
  const addBtn = q<HTMLButtonElement>('add')!;

  const entry = (): PermitAddCatalogEntry | undefined => catalog.find((c) => c.id === permit.value);

  const syncAdd = () => {
    const ready = !!jurisdiction.value && !!entry() && !!trigger.value.trim();
    addBtn.disabled = !ready;
    addBtn.closest('.esa-button')?.classList.toggle('esa-button--disabled', !ready);
  };

  const syncPreview = () => {
    const e = entry();
    preview.hidden = !e;
    if (!e) return;
    reqs.replaceChildren(
      ...e.requirements.map((r) => {
        const li = document.createElement('li');
        li.textContent = r;
        return li;
      }),
    );
    source.textContent = e.source;
    validity.textContent = e.validity ?? '';
    turnaround.textContent = e.turnaround ?? '';
    turnaroundWrap.hidden = !e.turnaround;
  };

  const fillPermits = () => {
    const options = catalog.filter((c) => c.jurisdictionId === jurisdiction.value).map((c) => ({ value: c.id, label: c.label }));
    permit.options = options;
    permit.value = '';
    permit.disabled = !options.length;
  };

  jurisdiction.addEventListener('change', () => {
    fillPermits();
    syncPreview();
    syncAdd();
  });
  permit.addEventListener('change', () => {
    syncPreview();
    syncAdd();
  });
  trigger.addEventListener('change', syncAdd);

  const reset = () => {
    jurisdiction.value = '';
    permit.options = [];
    permit.value = '';
    permit.disabled = true;
    if (site) site.value = wholeProject;
    trigger.value = '';
    assignee.value = currentUser;
    syncPreview();
    syncAdd();
  };

  const open = () => {
    reset();
    dialog.show();
  };

  addBtn.addEventListener('click', () => {
    const e = entry();
    const why = trigger.value.trim();
    if (!e || !jurisdiction.value || !why) return;
    const siteName = site && site.value && site.value !== wholeProject ? site.value : undefined;
    const p: Permit = {
      id: `added-${Date.now()}`,
      projectId,
      catalogId: e.id,
      name: siteName ? `${e.localName} — ${siteName}` : e.localName,
      ...(siteName ? { site: siteName } : {}),
      trigger: why,
      assigneeId: assignee.value || currentUser,
      status: 'not-started',
      rounds: [],
      conditions: null,
      dependsOn: [],
      requirements: e.requirements.map((label, i) => ({ id: `${e.id}-r${i + 1}`, label, done: false })),
      files: [],
      comments: [],
    };
    initFromIsland();
    addPermit(p);
    dialog.close();
    window.setTimeout(() => openPermit(p.id), PANEL_EXIT_MS);
  });
  q('cancel')!.addEventListener('click', () => dialog.close());

  // Any `data-permit-add` element opens the panel. composedPath() so a trigger inside a
  // shadow root (or an esa-button's inner native button) still counts.
  document.addEventListener('click', (ev) => {
    const hit = ev.composedPath().some((n) => n instanceof Element && n.hasAttribute('data-permit-add'));
    if (!hit) return;
    ev.preventDefault();
    open();
  });
}
