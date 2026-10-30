// Controller for <BcnPermitEditor> — the permit page's section drawers. Each section's
// edit button carries `data-permit-edit="<drawer>"` and opens its esa-side-dialog:
//
//   status        Change status: new status, the day it happened, a note, and the expiry
//                 when the new status is an issued one. Save logs it through
//                 setPermitStatus() — the history the timeline is read from — and every
//                 surface listening to CHANGE_EVENT follows.
//   details       permit name, agency, agency reference no., applies to, assigned to,
//                 trigger, has conditions
//   requirement   one checklist item: add a custom one (no data-req-id on the trigger)
//                 or edit one (data-req-id). Standard items keep the permit type's name;
//                 custom ones can be renamed and removed. Saves to the requirements store.
//   dependencies  waits on
//   file          the current permit file + a replacement upload
//
// Dates are never typed into the timeline: they come from status changes.
//
// Every open refills from the seed, so Cancel / Esc / X / click-outside discard. Details,
// waits on and the file save through src/lib/permit-edits-store.ts (saveEdits): the
// permit itself changes, and the page's sections re-draw on PERMIT_EDIT_EVENT.

import {
  CATEGORIES,
  CATEGORY_META,
  TODAY,
  fmtDate,
  milestoneOf,
  statusColumn,
  workflowOf,
  type PermitTypeId,
} from '../data/permit-tracker';
import { loadWorkflows, resolveStatus, setPermitStatus } from '../lib/permit-status-store';
import { loadRequirements, removeRequirement, upsertRequirement } from '../lib/permit-requirements-store';
import { toast } from '../../lib/snackbar';
import { loadEdits, saveEdits } from '../lib/permit-edits-store';
import { setupStatusSelect, type StatusSelectController } from '../../components/bcn/status-select';

export interface PermitEditorSeed {
  name: string;
  jurisdictionId: string;
  appliesTo: string;
  trigger: string;
  assignee: string;
  agencyRef: string;
  conditions: 'yes' | 'no' | 'unknown';
  dependsOn: string[];
  file: { name: string } | null;
}

export interface PermitEditorConfig {
  projectId: string;
  permitId: string;
  name: string;
  typeId: PermitTypeId;
  statusId: string;
  seed: PermitEditorSeed;
}

type DialogEl = HTMLElement & { show(): void; close(): void; heading: string };
type CheckEl = HTMLElement & { checked: boolean };
type FieldEl = HTMLElement & { value: string; disabled: boolean };
type ValueEl = HTMLElement & { value: string };
type SelectEl = HTMLElement & { value: string | string[] };
type FileListEl = HTMLElement & { files: { name: string }[] };

export function setupPermitEditor(root: HTMLElement): void {
  const cfg = JSON.parse(root.dataset.config || '{}') as PermitEditorConfig;
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const tpl = (name: string) =>
    q<HTMLTemplateElement>(`template[data-pe-tpl="${name}"]`).content.firstElementChild!.cloneNode(true) as HTMLElement;
  const drawer = (name: string) => q<DialogEl>(`[data-pe-drawer="${name}"]`);

  const f = {
    statusDate: q<ValueEl>('[data-pe="status-date"]'),
    statusNote: q<ValueEl>('[data-pe="status-note"]'),
    expires: q<ValueEl>('[data-pe="expires"]'),
    name: q<ValueEl>('[data-pe="name"]'),
    agency: q<ValueEl>('[data-pe="agency"]'),
    appliesTo: q<ValueEl>('[data-pe="applies-to"]'),
    trigger: q<ValueEl>('[data-pe="trigger"]'),
    assignee: q<ValueEl>('[data-pe="assignee"]'),
    agencyRef: q<ValueEl>('[data-pe="agency-ref"]'),
    conditions: q<ValueEl>('[data-pe="conditions"]'),
    reqName: q<FieldEl>('[data-pe="req-name"]'),
    reqOwner: q<ValueEl>('[data-pe="req-owner"]'),
    reqDue: q<ValueEl>('[data-pe="req-due"]'),
    reqDone: q<CheckEl>('[data-pe="req-done"]'),
    reqNote: q<ValueEl>('[data-pe="req-note"]'),
    reqDocList: q<FileListEl>('[data-pe="req-doc-list"]'),
    dependsOn: root.querySelector<SelectEl>('[data-pe="depends-on"]'),
    fileList: q<FileListEl>('[data-pe="file-list"]'),
  };

  // The build's seed, with this permit's saved edits on top.
  const e = loadEdits(cfg.permitId);
  let seed: PermitEditorSeed = {
    ...structuredClone(cfg.seed),
    ...(e.name !== undefined && { name: e.name }),
    ...(e.jurisdictionId !== undefined && { jurisdictionId: e.jurisdictionId }),
    ...(e.siteId !== undefined && { appliesTo: e.siteId }),
    ...(e.trigger !== undefined && { trigger: e.trigger }),
    ...(e.assignee !== undefined && { assignee: e.assignee }),
    ...(e.agencyRef !== undefined && { agencyRef: e.agencyRef }),
    ...(e.hasConditions !== undefined && { conditions: e.hasConditions === null ? 'unknown' : e.hasConditions ? 'yes' : 'no' }),
    ...(e.dependsOn !== undefined && { dependsOn: [...e.dependsOn] }),
    ...(e.file !== undefined && { file: e.file ? { name: e.file.name } : null }),
  } as PermitEditorSeed;
  let file: { name: string } | null = null;
  let reqId: string | undefined;
  let reqDoc: string | undefined;
  let status: StatusSelectController | null = null;
  let statusAtOpen = '';

  /* ── Status: this permit's workflow columns, grouped by backbone category ── */

  const columnOf = (id: string) => statusColumn(id, cfg.typeId, loadWorkflows(cfg.projectId));
  // The expiry belongs to an issue: shown only when the picked status is an issued one.
  const paintExpires = () => {
    q('[data-pe="expires-field"]').hidden = !status || milestoneOf(columnOf(status.value)) !== 'issued';
  };

  function mountStatus() {
    const workflows = loadWorkflows(cfg.projectId);
    const current = resolveStatus(cfg.projectId, { id: cfg.permitId, statusId: cfg.statusId, typeId: cfg.typeId });
    const wf = workflowOf(cfg.typeId, workflows);
    const select = tpl('status');
    const menu = select.querySelector<HTMLElement>('.bcn-status-select__menu')!;
    const proto = menu.querySelector<HTMLLIElement>('.bcn-status-select__opt')!;
    proto.remove();
    for (const cat of CATEGORIES) {
      const run = wf.columns.filter((c) => c.category === cat);
      if (!run.length) continue;
      const group = tpl('status-group');
      const label = group.querySelector<HTMLElement>('[data-pe-group-label]')!;
      label.textContent = CATEGORY_META[cat].label;
      label.id = `${root.id}-status-${cat}`;
      group.setAttribute('aria-labelledby', label.id);
      const list = group.querySelector<HTMLElement>('[data-pe-group-list]')!;
      for (const col of run) {
        const opt = proto.cloneNode(true) as HTMLLIElement;
        const dot = opt.querySelector<HTMLElement>('.bcn-status-select__dot')!;
        dot.style.background = CATEGORY_META[cat].tone;
        opt.dataset.value = col.id;
        opt.dataset.label = col.name;
        opt.dataset.color = CATEGORY_META[cat].tone;
        opt.setAttribute('aria-selected', String(col.id === current.id));
        opt.replaceChildren(dot, document.createTextNode(col.name));
        list.append(opt);
      }
      menu.append(group);
    }
    select.dataset.value = current.id;
    select.addEventListener('change', paintExpires);
    q('[data-pe="status"]').replaceChildren(select);
    status = setupStatusSelect(select);
    statusAtOpen = current.id;
  }

  /* ── File: the current record (esa-file-list) + a fresh dropzone per open ── */

  function resetUpload(which: 'file-upload' | 'req-upload') {
    // esa-file-upload has no public reset; a fresh element is the clean discard.
    const old = q(`[data-pe="${which}"]`);
    const fresh = document.createElement('esa-file-upload');
    for (const a of old.getAttributeNames()) fresh.setAttribute(a, old.getAttribute(a) ?? '');
    old.replaceWith(fresh);
  }

  function paintFile() {
    f.fileList.files = file ? [file] : [];
    // Hidden on a plain wrapper: the lego's :host display would beat [hidden] on itself.
    q('[data-pe="file-current"]').hidden = !file;
  }

  f.fileList.addEventListener('remove', () => {
    file = null;
    paintFile();
  });

  /* ── Requirement document: the current one + a dropzone whose pick replaces it ── */

  function paintReqDoc() {
    f.reqDocList.files = reqDoc ? [{ name: reqDoc }] : [];
    q('[data-pe="req-doc-current"]').hidden = !reqDoc;
  }
  f.reqDocList.addEventListener('remove', () => {
    reqDoc = undefined;
    paintReqDoc();
  });
  // Delegated: the dropzone is replaced on every open.
  root.addEventListener('change', (e) => {
    const t = e.target as HTMLElement;
    if (t.dataset?.pe !== 'req-upload') return;
    const picked = (e as CustomEvent<{ files?: File[] }>).detail?.files?.at(-1);
    if (picked) {
      reqDoc = picked.name;
      paintReqDoc();
    }
  });

  /* ── Fill a drawer from the seed (every open — this is what makes Cancel a discard) ── */

  const fill: Record<string, (trigger: HTMLElement) => void> = {
    status: () => {
      mountStatus();
      f.statusDate.value = TODAY;
      f.statusNote.value = '';
      f.expires.value = '';
      paintExpires();
    },
    details: () => {
      f.name.value = seed.name;
      f.agency.value = seed.jurisdictionId;
      f.appliesTo.value = seed.appliesTo;
      f.trigger.value = seed.trigger;
      f.assignee.value = seed.assignee;
      f.agencyRef.value = seed.agencyRef;
      f.conditions.value = seed.conditions;
    },
    requirement: (trigger) => {
      const item = trigger.dataset.reqId ? loadRequirements(cfg.permitId).find((r) => r.id === trigger.dataset.reqId) : undefined;
      reqId = item?.id;
      drawer('requirement').heading = item ? 'Edit requirement' : 'Add requirement';
      f.reqName.value = item?.label ?? '';
      // Standard items are the permit type's; only custom ones are renamed or removed.
      f.reqName.disabled = !!item && !item.custom;
      f.reqOwner.value = item?.owner ?? seed.assignee;
      f.reqDue.value = item?.due ?? '';
      f.reqDone.checked = item?.done ?? false;
      f.reqNote.value = item?.note ?? '';
      reqDoc = item?.doc;
      paintReqDoc();
      resetUpload('req-upload');
      q('[data-pe="req-remove-wrap"]').hidden = !item?.custom;
    },
    dependencies: () => {
      if (f.dependsOn) f.dependsOn.value = [...seed.dependsOn];
    },
    file: () => {
      file = seed.file ? { ...seed.file } : null;
      paintFile();
      resetUpload('file-upload');
    },
  };

  document.addEventListener('click', (e) => {
    const trigger = (e.target as Element | null)?.closest?.<HTMLElement>('[data-permit-edit]');
    const name = trigger?.dataset.permitEdit;
    if (!name || !fill[name]) return;
    e.preventDefault();
    fill[name](trigger!);
    drawer(name).show();
  });

  /* ── Save ── */

  const save: Record<string, () => boolean> = {
    status: () => {
      const next = status?.value ?? statusAtOpen;
      if (!next || next === statusAtOpen) {
        toast('Pick a new status to log a change', 'warning');
        return false;
      }
      const at = f.statusDate.value || TODAY;
      const expires = milestoneOf(columnOf(next)) === 'issued' ? f.expires.value || undefined : undefined;
      setPermitStatus(cfg.projectId, cfg.permitId, next, {
        at,
        ...(f.statusNote.value.trim() ? { note: f.statusNote.value.trim() } : {}),
        ...(expires ? { expires } : {}),
      });
      toast(`Status set to ${columnOf(next).name}${at === TODAY ? '' : ` as of ${fmtDate(at)}`}`, 'success');
      return true;
    },
    details: () => {
      if (!f.name.value.trim()) {
        toast('A permit needs a name', 'warning');
        return false;
      }
      seed = {
        ...seed,
        name: f.name.value.trim(),
        jurisdictionId: f.agency.value,
        appliesTo: f.appliesTo.value,
        trigger: f.trigger.value,
        assignee: f.assignee.value,
        agencyRef: f.agencyRef.value,
        conditions: (f.conditions.value as PermitEditorSeed['conditions']) || 'unknown',
      };
      saveEdits(cfg.permitId, {
        name: seed.name,
        jurisdictionId: seed.jurisdictionId,
        agencyRef: seed.agencyRef.trim(),
        siteId: seed.appliesTo,
        trigger: seed.trigger,
        assignee: seed.assignee,
        hasConditions: seed.conditions === 'unknown' ? null : seed.conditions === 'yes',
      });
      toast('Details saved', 'success');
      return true;
    },
    requirement: () => {
      const items = loadRequirements(cfg.permitId);
      const prev = reqId ? items.find((r) => r.id === reqId) : undefined;
      const label = prev && !prev.custom ? prev.label : f.reqName.value.trim();
      if (!label) {
        toast('A requirement needs a name', 'warning');
        return false;
      }
      upsertRequirement(cfg.permitId, {
        ...(prev ?? { custom: true }),
        id: prev?.id,
        label,
        owner: f.reqOwner.value || undefined,
        due: f.reqDue.value || undefined,
        done: f.reqDone.checked,
        doc: reqDoc,
        note: f.reqNote.value.trim() || undefined,
      });
      toast(prev ? `${label} saved` : `${label} added`, 'success');
      return true;
    },
    dependencies: () => {
      const depends = f.dependsOn?.value;
      seed = { ...seed, dependsOn: Array.isArray(depends) ? [...depends] : depends ? [depends] : [] };
      saveEdits(cfg.permitId, { dependsOn: seed.dependsOn });
      toast('Waits on saved', 'success');
      return true;
    },
    file: () => {
      seed = { ...seed, file };
      saveEdits(cfg.permitId, { file: file ? { name: file.name, size: (file as { size?: string }).size ?? '' } : null });
      toast('Permit file saved', 'success');
      return true;
    },
  };

  root.querySelectorAll<HTMLElement>('[data-pe-save]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const name = btn.dataset.peSave!;
      if (save[name]()) drawer(name).close();
    }),
  );
  root.querySelector('[data-pe-remove="requirement"]')?.addEventListener('click', () => {
    const item = reqId ? loadRequirements(cfg.permitId).find((r) => r.id === reqId) : undefined;
    if (!item?.custom) return;
    removeRequirement(cfg.permitId, item.id);
    drawer('requirement').close();
    toast(`${item.label} removed`, 'success');
  });
  root.querySelectorAll<HTMLElement>('[data-pe-cancel]').forEach((btn) =>
    btn.addEventListener('click', () => drawer(btn.dataset.peCancel!).close()),
  );
}
