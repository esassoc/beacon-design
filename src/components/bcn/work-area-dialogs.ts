// work-area-dialogs — behaviour for <BcnWorkAreaDialogs>.
//
// Two dialogs, opened by the events the work-area board emits. The interesting
// half is the import's stage two: the mapping, the optional filter, and the preview
// are one derivation re-run on every change, so what the preview shows is always
// exactly what Import would create. That is the property the dialog exists to
// provide, and computing it in one place is what keeps it true.
//
// Nothing persists. Import reports what it would have created and closes.

import { IMPORT_FIXTURE, WORK_AREA_CUSTOM_FIELDS } from '../../data/component-detail';
import { toast } from '../../lib/snackbar';

type Row = Record<string, string | boolean>;

const FIELD_LABEL: Record<string, string> = Object.fromEntries(
  WORK_AREA_CUSTOM_FIELDS.map((f) => [f.id, f.label]),
);

const PREVIEW_LIMIT = 6;

/** esa-select exposes `value` as a property, not a reactive attribute. */
type SelectEl = HTMLElement & { value?: string; options?: unknown };

const val = (el: Element | null): string => ((el as SelectEl | null)?.value ?? '').trim();

export function setupWorkAreaDialogs(): void {
  const create = document.getElementById('wa-create-dialog');
  const imp = document.getElementById('wa-import-dialog');

  // ── Create ────────────────────────────────────────────────────────────────
  if (create) {
    const open = () => {
      // A fresh form every time — a create dialog that remembers the last attempt
      // is a create dialog that silently duplicates it.
      create.querySelectorAll<SelectEl>('[data-wad-identifier], [data-wad-cf]').forEach((el) => {
        el.value = '';
      });
      (create as HTMLElement & { show?: () => void }).show?.();
    };
    document.addEventListener('bcn-work-area-create', open);

    create.querySelector('[data-wad-create-cancel]')?.addEventListener('click', () => {
      (create as HTMLElement & { close?: () => void }).close?.();
    });

    create.querySelector('[data-wad-create-save]')?.addEventListener('click', () => {
      const id = val(create.querySelector('[data-wad-identifier]'));
      if (!id) {
        // Required means required — prod disables Save until the form is valid.
        (create.querySelector('[data-wad-identifier]') as SelectEl | null)?.focus?.();
        toast('Identifier is required.', 'warning');
        return;
      }
      (create as HTMLElement & { close?: () => void }).close?.();
      toast(`${id} would be created. Nothing saves in the prototype.`, 'success');
    });
  }

  // ── Bulk import ───────────────────────────────────────────────────────────
  if (!imp) return;

  const stageUpload = imp.querySelector<HTMLElement>('[data-wad-stage="upload"]');
  const stageMap = imp.querySelector<HTMLElement>('[data-wad-stage="map"]');
  const resetBtn = imp.querySelector<HTMLElement>('[data-wad-reset]');
  const mapError = imp.querySelector<HTMLElement>('[data-wad-maperror]');
  const mapErrorText = imp.querySelector('[data-wad-maperror-text]');
  const filterCol = imp.querySelector<SelectEl>('[data-wad-filter-col]');
  const filterValWrap = imp.querySelector<HTMLElement>('[data-wad-filter-val-wrap]');
  const filterVal = imp.querySelector<SelectEl>('[data-wad-filter-val]');
  const head = imp.querySelector('[data-wad-preview-head]');
  const body = imp.querySelector('[data-wad-preview-body]');
  const importCount = imp.querySelector('[data-wad-importcount]');
  const importNoun = imp.querySelector('[data-wad-importnoun]');
  const more = imp.querySelector<HTMLElement>('[data-wad-more]');
  const importBtn = imp.querySelector<HTMLElement>('[data-wad-import]');

  const setStage = (stage: 'upload' | 'map') => {
    if (stageUpload) stageUpload.hidden = stage !== 'upload';
    if (stageMap) stageMap.hidden = stage !== 'map';
    if (resetBtn) resetBtn.hidden = stage === 'upload';
    if (importBtn) importBtn.hidden = stage === 'upload';
  };

  /** Current column → target mapping, read straight off the selects. */
  const mapping = (): Record<string, string> => {
    const m: Record<string, string> = {};
    imp.querySelectorAll<SelectEl>('[data-wad-target]').forEach((el) => {
      m[el.getAttribute('data-wad-target') ?? ''] = el.value ?? 'ignore';
    });
    return m;
  };

  /**
   * The one derivation. Mapping + filter -> the rows that would be imported.
   * Everything the user sees is read from this, so the preview cannot drift from
   * what Import would do.
   */
  const derive = () => {
    const m = mapping();
    const idCol = Object.keys(m).find((c) => m[c] === 'identifier') ?? null;
    const fieldCols = Object.keys(m).filter((c) => m[c] !== 'ignore' && m[c] !== 'identifier');

    const fc = val(filterCol);
    const fv = val(filterVal);
    const filtered = (IMPORT_FIXTURE.rows as Row[]).filter((r) => !fc || !fv || String(r[fc]) === fv);

    // A row with no identifier value cannot become a record.
    const importable = idCol ? filtered.filter((r) => String(r[idCol] ?? '').trim() !== '') : [];

    return { m, idCol, fieldCols, filtered, importable };
  };

  const render = () => {
    const { m, idCol, fieldCols, filtered, importable } = derive();

    // Mapping must name exactly one Identifier — the error states which way it failed.
    const idCols = Object.keys(m).filter((c) => m[c] === 'identifier');
    let err = '';
    if (idCols.length === 0) err = 'Map one column to Identifier — every work area needs one.';
    else if (idCols.length > 1) err = `Only one column can be the Identifier; ${idCols.length} are mapped to it.`;
    else if (importable.length === 0)
      err = `Every row is missing a value in ${idCols[0]}, so there is nothing to import.`;

    if (mapError) mapError.hidden = err === '';
    if (mapErrorText) mapErrorText.textContent = err;
    if (importBtn) {
      importBtn.toggleAttribute('data-disabled', err !== '');
      importBtn.querySelector('button')?.toggleAttribute('disabled', err !== '');
    }

    // Filter values follow the chosen column, deduped and sorted.
    const fc = val(filterCol);
    if (filterValWrap) filterValWrap.hidden = fc === '';
    if (fc && filterVal) {
      const values = [...new Set((IMPORT_FIXTURE.rows as Row[]).map((r) => String(r[fc])))].sort();
      const current = filterVal.value ?? '';
      filterVal.options = [{ value: '', label: 'Any value' }, ...values.map((v) => ({ value: v, label: v }))];
      if (!values.includes(current)) filterVal.value = '';
    }

    // Header: Identifier, each mapped field by its Beacon label, then Geometry.
    if (head) {
      head.innerHTML = '';
      const tr = document.createElement('tr');
      const th = (t: string) => {
        const c = document.createElement('th');
        c.textContent = t;
        tr.appendChild(c);
      };
      th('Identifier');
      fieldCols.forEach((c) => th(FIELD_LABEL[m[c]] ?? c));
      if (IMPORT_FIXTURE.kind === 'shapefile') th('Geometry');
      head.appendChild(tr);
    }

    if (body) {
      body.innerHTML = '';
      for (const r of importable.slice(0, PREVIEW_LIMIT)) {
        const tr = document.createElement('tr');
        const td = (t: string) => {
          const c = document.createElement('td');
          c.textContent = t;
          tr.appendChild(c);
        };
        td(idCol ? String(r[idCol] ?? '—') : '—');
        fieldCols.forEach((c) => td(String(r[c] ?? '') || '—'));
        if (IMPORT_FIXTURE.kind === 'shapefile') td(r.hasGeometry ? '✓' : '—');
        body.appendChild(tr);
      }
    }

    if (importCount) importCount.textContent = String(importable.length);
    if (importNoun) importNoun.textContent = importable.length === 1 ? 'work area' : 'work areas';
    if (more) {
      const hidden = importable.length - Math.min(importable.length, PREVIEW_LIMIT);
      more.hidden = hidden <= 0;
      more.textContent = hidden > 0 ? `…and ${hidden} more.` : '';
    }
    void filtered;
  };

  document.addEventListener('bcn-work-areas-import', () => {
    setStage('upload');
    (imp as HTMLElement & { show?: () => void }).show?.();
  });

  /**
   * Seed the mapping selects with their opening guess. This has to happen from JS:
   * esa-select's `value` lives outside the lego's reactive properties, so a value
   * set in markup never lands and every column would open as "Ignore" — which then
   * fails the one-Identifier check and previews nothing.
   */
  const applyGuess = () => {
    imp.querySelectorAll<SelectEl>('[data-wad-target]').forEach((el) => {
      if (!el.value) el.value = el.getAttribute('data-wad-guess') ?? 'ignore';
    });
  };

  // A file landing in the dropzone is what advances the stage. The fixture stands
  // in for the parse; a real one would round-trip to /work-areas/parse-shapefile.
  imp.querySelector('[data-wad-drop]')?.addEventListener('change', () => {
    setStage('map');
    applyGuess();
    render();
  });

  resetBtn?.addEventListener('click', () => setStage('upload'));

  imp.querySelector('[data-wad-import-cancel]')?.addEventListener('click', () => {
    (imp as HTMLElement & { close?: () => void }).close?.();
  });

  // Any mapping or filter change re-derives everything.
  imp.addEventListener('change', (e) => {
    const t = e.target as HTMLElement | null;
    if (!t) return;
    if (t.hasAttribute('data-wad-target') || t.hasAttribute('data-wad-filter-col') || t.hasAttribute('data-wad-filter-val')) {
      render();
    }
  });

  importBtn?.addEventListener('click', () => {
    const { importable } = derive();
    if (importable.length === 0) return;
    (imp as HTMLElement & { close?: () => void }).close?.();
    toast(`${importable.length} work areas would be imported. Nothing saves in the prototype.`, 'success');
  });

  setStage('upload');
}
