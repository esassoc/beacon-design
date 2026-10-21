// help-dots — the controller behind <BcnHelpDots>, <BcnHelpDotEditor> and
// <BcnHelpDotsAdmin>. It owns the page's dots in memory (nothing persists across a reload,
// as with every prototype here) and wires the three components and the drawer by their
// data-* hooks. See <BcnHelpDots> for the contract.
//
// Reader: Guidance on the Guidance bar shows the published dots, with a dark button above
// the bar that opens the drawer; Guidance again or Esc hides them. Admin (`?as=admin`):
// drafts show muted, the drawer gains Dots on This Page, and the dots are worked by hand
// on the page: Add Dot, Option/Alt-click or Pick Again carries a dot to a part, any dot
// drags to another part, and either ends on the editor beside the dot.
//
// A spot is a `data-help-spot` id a component emits on its parts (src/lib/help-spot.ts).
// The first visible part carrying the id anchors the dot; with none on the page the dot is
// hidden and, for admins, listed under Needs a New Spot.

import '@esa/ecology/esa-popover';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-textarea';
import { spotCapture } from '../../data/help-dots';
import type { HelpDot, HelpDotAt, HelpDotShot, HelpDotSide, HelpDotStatus, HelpSpot } from '../../data/help-dots';

type Popover = HTMLElement & { open: boolean; position: string; appearance: string; label: string };
type Dialog = HTMLElement & { show(): void; close(): void; open: boolean };
type Field = HTMLElement & { value: string };

interface DotState extends HelpDot {
  detached?: boolean;
  /** Dropped on the page and not yet saved: it shows, but has no row yet. */
  pending?: boolean;
}

interface ClientPage {
  routeKey: string;
  spots: HelpSpot[];
  dots: HelpDot[];
  /** The site base, for the spot captures. */
  base: string;
}

/** What a click on the page does while placing. */
type Arm = { kind: 'add' } | { kind: 'move'; dotId: string };

const NARROW = 640;
const EDGE = 12;
const GAP = 20; // the popover's offset plus the dot's radius
const CHROME = 28; // the popover's own padding and border, both sides
const PAD = 4; // the highlight's room around its part
const DRAG = 4; // how far a dot moves before a press is a drag
const EDITOR = 320; // <BcnHelpDotEditor>'s width
const BAR = 96; // the Guidance bar's height, its offset and a gap
// The help UI itself is never a spot.
const HELP_UI = '[data-help-dots], [data-help-bar], [data-help-pickbar], [data-help-panelbar], [data-gd], [data-gd-article], [data-htf]';

export function setupHelpDots(): void {
  const layer = document.querySelector<HTMLElement>('[data-help-dots]');
  const json = document.querySelector<HTMLScriptElement>('[data-help-dots-page]');
  const trigger = document.querySelector<HTMLElement>('[data-help-bar] [data-help-trigger]');
  if (!layer || !json || !trigger) return;

  const page = JSON.parse(json.textContent ?? '{}') as ClientPage;
  const params = new URLSearchParams(location.search);
  const admin = params.get('as') === 'admin';
  const drawer = document.querySelector<Dialog>('[data-gd]');

  const spots = new Map(page.spots.map((s) => [s.spot, s]));
  const dots = new Map<string, DotState>(page.dots.map((d) => [d.id, { ...d }]));
  let arm: Arm | null = null;
  let on = false;
  let made = 0;

  trigger.setAttribute('data-help-dots-claimed', '');
  trigger.setAttribute('aria-pressed', 'false');
  trigger.removeAttribute('aria-haspopup');
  if (params.get('popover') === 'light') layer.dataset.tone = 'light';
  if (admin) layer.dataset.admin = '';

  // ── the page's elements ────────────────────────────────────────────────────────────

  const dotEl = (id: string) => layer.querySelector<HTMLElement>(`[data-help-dot][data-dot-id="${id}"]`);
  const shown = (el: HTMLElement) => !el.closest('[hidden]') && el.getBoundingClientRect().width > 0;
  const targetOf = (spot: string): HTMLElement | null =>
    Array.from(document.querySelectorAll<HTMLElement>(`[data-help-spot="${CSS.escape(spot)}"]`)).find(shown) ?? null;
  const labelOf = (spot: string): string =>
    targetOf(spot)?.dataset.helpSpotLabel ?? spots.get(spot)?.label ?? spot;
  // The part under a point: the nearest ancestor carrying a spot id. The dots and the
  // rest of the help UI are looked through, so a dot never hides the part it sits on.
  const partAt = (x: number, y: number): HTMLElement | null => {
    const el = document.elementsFromPoint(x, y).find((n) => !n.closest(HELP_UI));
    return el?.closest<HTMLElement>('[data-help-spot]') ?? null;
  };
  // A pointer on the drawer, its panels or the Guidance bar is not on the page.
  const offPage = (t: EventTarget | null) =>
    t instanceof Element && !!t.closest('[data-gd], [data-gd-article], [data-htf], [data-help-bar], [data-help-pickbar], [data-hde]');
  // A spot that only exists in another state of the page (HelpSpot.onlyIn).
  const elsewhere = (spot: string): string | null => {
    const w = spots.get(spot)?.onlyIn;
    return w && params.get(w.param) !== w.value ? w.label : null;
  };
  const live = (d: DotState) => d.status !== 'dismissed' && !d.detached;
  const seen = (d: DotState) => live(d) && (d.status === 'published' || admin);

  // How a dot sits on its part: the page's own record for the spot, else worked out from
  // the part: a wide part takes the dot inside its right edge, a tiny one (a count) on its
  // corner, anything else just past it.
  const layout = (spot: string, r: DOMRect): { at: HelpDotAt; side: HelpDotSide } => {
    const s = spots.get(spot);
    if (s?.at && s.side) return { at: s.at, side: s.side };
    if (r.width > 360) return { at: 'inside-end', side: 'left' };
    return r.width < 80 ? { at: 'top-end', side: 'bottom' } : { at: 'after', side: 'bottom' };
  };

  // ── placing ────────────────────────────────────────────────────────────────────────

  // The dot's centre, from the target's box, in viewport coordinates.
  const anchor = (r: DOMRect, at: string): [number, number] => {
    const midY = r.top + r.height / 2;
    switch (at) {
      case 'top-end':
        return [r.right - 2, r.top + 2];
      case 'inside-end':
        return [r.right - 24, midY];
      case 'before':
        return [r.left - 18, midY];
      default:
        return [r.right + 18, midY];
    }
  };

  // esa-popover opens on a fixed side and never moves to stay on screen. On a narrow
  // screen the popover opens toward the wider half of the page's scroll area (which clips
  // it), beside the dot, sized to the room that half leaves.
  const scroller = (() => {
    for (let el = layer.parentElement; el; el = el.parentElement) {
      if (/(auto|scroll|hidden)/.test(getComputedStyle(el).overflowX)) return el;
    }
    return document.documentElement;
  })();
  const fit = (el: HTMLElement, popover: Popover, side: string, x: number) => {
    if (document.documentElement.clientWidth >= NARROW) {
      popover.position = side;
      el.style.removeProperty('--_room');
      return;
    }
    const box = scroller.getBoundingClientRect();
    const toLeft = x - box.left > box.right - x;
    const room = (toLeft ? x - box.left : box.right - x) - GAP - EDGE - CHROME;
    popover.position = toLeft ? 'left' : 'right';
    el.style.setProperty('--_room', `${Math.max(160, Math.round(room))}px`);
  };

  const place = () => {
    const showing = !layer.hidden;
    if (!showing) return;
    const origin = layer.getBoundingClientRect();

    dots.forEach((d) => {
      const el = dotEl(d.id);
      if (!el) return;
      const target = seen(d) ? targetOf(d.spot) : null;
      el.hidden = !target;
      if (!target) return;
      if (drag?.dotId === d.id && drag.moving) return; // the pointer has it
      const r = target.getBoundingClientRect();
      const { at, side } = layout(d.spot, r);
      const [x, y] = anchor(r, at);
      el.style.setProperty('--_x', `${x - origin.left}px`);
      el.style.setProperty('--_y', `${y - origin.top}px`);
      const popover = el.querySelector<Popover>('esa-popover');
      if (popover) fit(el, popover, side, x);
    });
    placeEditor();
  };

  let frame = 0;
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(place);
  };

  const closePopovers = () => layer.querySelectorAll<Popover>('esa-popover').forEach((p) => (p.open = false));

  const panelbar = document.querySelector<HTMLElement>('[data-help-panelbar]');

  const showLayer = () => {
    layer.hidden = !on;
    trigger.setAttribute('aria-pressed', String(on));
    if (panelbar) panelbar.hidden = !on || !!arm || !!editing;
    if (layer.hidden) closePopovers();
    else place();
  };

  // ── a dot's popover ────────────────────────────────────────────────────────────────

  const paintDot = (d: DotState) => {
    const el = dotEl(d.id);
    if (!el) return;
    el.dataset.status = d.status;
    el.dataset.spot = d.spot;
    const popover = el.querySelector<Popover>('esa-popover');
    if (popover) {
      popover.label = d.title;
      if (layer.dataset.tone === 'light') popover.appearance = 'default';
    }
    el.querySelector('[data-hd-button]')?.setAttribute('aria-label', d.title ? `About: ${d.title}` : 'New dot');
    const adminBits = el.querySelector<HTMLElement>('[data-hd-admin]');
    if (adminBits) adminBits.hidden = !admin;
    const title = el.querySelector<HTMLElement>('[data-hd-title]');
    const text = el.querySelector<HTMLElement>('[data-hd-text]');
    const img = el.querySelector<HTMLImageElement>('[data-hd-shot]');
    const panel = img?.parentElement;
    if (title) title.textContent = d.title;
    if (text) text.textContent = d.text;
    if (img && panel) {
      img.hidden = !d.shot;
      if (d.shot) {
        img.src = d.shot.src;
        img.alt = d.shot.alt;
        img.width = d.shot.width;
        img.height = d.shot.height;
        panel.setAttribute('data-has-shot', '');
      } else {
        img.removeAttribute('src');
        panel.removeAttribute('data-has-shot');
      }
    }
  };

  const addDotEl = (d: DotState) => {
    const tpl = layer.querySelector<HTMLTemplateElement>('[data-help-dot-template]');
    const el = tpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined;
    if (!el) return;
    el.dataset.dotId = d.id;
    layer.insertBefore(el, tpl!);
  };

  // ── admin: Dots on This Page ───────────────────────────────────────────────────────

  const list = document.querySelector<HTMLElement>('[data-hda]');
  const adminSlot = document.querySelector<HTMLElement>('[data-help-dots-admin-slot]');
  const rowsEl = list?.querySelector<HTMLElement>('[data-hda-list]');
  const orphansEl = list?.querySelector<HTMLElement>('[data-hda-orphans]');
  const orphansWrap = list?.querySelector<HTMLElement>('[data-hda-orphans-wrap]');
  const rowEl = (id: string) => list?.querySelector<HTMLElement>(`[data-hda-row][data-dot-id="${id}"]`);

  const addRowEl = (d: DotState) => {
    const tpl = list?.querySelector<HTMLTemplateElement>('[data-hda-template]');
    const el = tpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined;
    if (!el || !rowsEl) return;
    el.dataset.dotId = d.id;
    rowsEl.append(el);
  };

  const paintRows = () => {
    if (!list || !rowsEl || !orphansEl || !orphansWrap) return;
    let orphans = 0;
    dots.forEach((d) => {
      const row = rowEl(d.id);
      if (!row) return;
      row.hidden = !live(d) || !!d.pending;
      if (row.hidden) return;
      const away = elsewhere(d.spot);
      const orphan = !away && !targetOf(d.spot);
      const claudeDraft = d.status === 'draft' && !!d.draftedFrom;
      const q = (sel: string) => row.querySelector<HTMLElement>(sel)!;
      q('[data-hda-title]').textContent = d.title;
      const spotName = labelOf(d.spot);
      q('[data-hda-spot]').textContent = away ? `${spotName} · ${away}` : spotName;
      q('[data-hda-draft]').hidden = d.status !== 'draft';
      const acts: Record<string, boolean> = {
        publish: claudeDraft && !orphan,
        pickagain: orphan,
        edit: !orphan && !away,
        dismiss: claudeDraft,
        detach: !claudeDraft,
      };
      Object.entries(acts).forEach(([act, show]) => (q(`[data-hda-act="${act}"]`).hidden = !show));
      const home = orphan ? orphansEl : rowsEl;
      if (row.parentElement !== home) home.append(row);
      if (orphan) orphans++;
    });
    orphansWrap.hidden = orphans === 0;
  };

  if (admin && list && adminSlot) {
    adminSlot.append(list);
    list.hidden = false;
    adminSlot.hidden = false;
  }

  // ── the editor, on the page beside its dot ─────────────────────────────────────────

  const editor = layer.querySelector<HTMLElement>('[data-hde]');
  const e$ = <T extends HTMLElement = HTMLElement>(sel: string) => editor?.querySelector<T>(sel) ?? null;
  let editing: { dotId: string; isNew: boolean; movedFrom?: string; shot?: HelpDotShot } | null = null;

  // Beside the dot on the side with room, its top just above the dot's centre, lifted when
  // it would run under the Guidance bar.
  function placeEditor() {
    if (!editor || !editing) return;
    const el = dotEl(editing.dotId);
    if (!el || el.hidden) return;
    const origin = layer!.getBoundingClientRect();
    const box = scroller.getBoundingClientRect();
    const x = parseFloat(el.style.getPropertyValue('--_x')) || 0;
    const y = parseFloat(el.style.getPropertyValue('--_y')) || 0;
    const right = box.right - origin.left - EDGE;
    let left = x + 24;
    if (left + EDITOR > right) left = x - 24 - EDITOR;
    left = Math.max(box.left - origin.left + EDGE, left);
    editor.style.setProperty('--_x', `${left}px`);
    // Clear of the Guidance bar at the foot of the screen (20px off the bottom, 58px tall).
    const lowest = box.bottom - origin.top - BAR - editor.offsetHeight;
    editor.style.setProperty('--_y', `${Math.max(Math.min(y - 28, lowest), box.top - origin.top + EDGE)}px`);
  }

  const paintShot = () => {
    const box = e$('[data-hde-shot]');
    const img = e$<HTMLImageElement>('[data-hde-shot-img]');
    const remove = e$('[data-hde-remove-wrap]');
    const shot = editing?.shot;
    if (!box || !img || !remove) return;
    box.hidden = !shot;
    remove.hidden = !shot;
    if (shot) {
      img.onload = placeEditor;
      img.src = shot.src;
      img.alt = shot.alt;
    }
  };

  const openEditor = (dotId: string, opts: { isNew?: boolean; movedFrom?: string } = {}) => {
    const d = dots.get(dotId);
    if (!editor || !d) return;
    closePopovers();
    editing = { dotId, isNew: !!opts.isNew, movedFrom: opts.movedFrom, shot: d.shot };
    e$('[data-hde-heading]')!.textContent = opts.isNew ? 'New Dot' : opts.movedFrom ? 'Moved Dot' : 'Edit Dot';
    e$('[data-hde-spot]')!.textContent = `On ${labelOf(d.spot)}`;
    e$('[data-hde-moved]')!.hidden = !opts.movedFrom;
    const title = e$<Field>('[data-hde-title]');
    const text = e$<Field>('[data-hde-text]');
    if (title) title.value = d.title;
    if (text) text.value = d.text;
    paintShot();
    editor.hidden = false;
    showLayer();
    place();
    requestAnimationFrame(() => (title?.shadowRoot?.querySelector('input') ?? title)?.focus());
  };

  const closeEditor = () => {
    editing = null;
    if (editor) editor.hidden = true;
    refresh();
  };

  const save = (status: HelpDotStatus) => {
    const d = editing ? dots.get(editing.dotId) : undefined;
    if (!editing || !d) return;
    const title = e$<Field>('[data-hde-title]')?.value.trim() ?? '';
    const text = e$<Field>('[data-hde-text]')?.value.trim() ?? '';
    if (!title) {
      e$('[data-hde-title]')?.focus();
      return;
    }
    Object.assign(d, { status, title, text, shot: editing.shot });
    if (d.pending) {
      delete d.pending;
      addRowEl(d);
    }
    if (status === 'published') delete d.draftedFrom;
    closeEditor();
  };

  // Cancel takes a new dot away and puts a moved one back.
  const cancelEditor = () => {
    const d = editing ? dots.get(editing.dotId) : undefined;
    if (editing && d) {
      if (editing.isNew) {
        dots.delete(d.id);
        dotEl(d.id)?.remove();
      } else if (editing.movedFrom) {
        d.spot = editing.movedFrom;
      }
    }
    closeEditor();
  };

  e$('[data-hde-publish]')?.addEventListener('click', () => save('published'));
  e$('[data-hde-draft]')?.addEventListener('click', () => save('draft'));
  e$('[data-hde-cancel]')?.addEventListener('click', cancelEditor);
  e$('[data-hde-capture]')?.addEventListener('click', () => {
    const d = editing ? dots.get(editing.dotId) : undefined;
    if (!editing || !d) return;
    const shot = spotCapture(d.spot, labelOf(d.spot));
    editing.shot = { ...shot, src: page.base.replace(/\/$/, '') + shot.src };
    paintShot();
    placeEditor();
  });
  e$('[data-hde-remove]')?.addEventListener('click', () => {
    if (!editing) return;
    editing.shot = undefined;
    paintShot();
  });

  // ── placing: a dot carried on the pointer to a part ────────────────────────────────

  const pickbar = document.querySelector<HTMLElement>('[data-help-pickbar]');
  const pickText = pickbar?.querySelector<HTMLElement>('[data-help-pick-text]');
  const highlight = document.querySelector<HTMLElement>('[data-help-highlight]');
  const highlightLabel = highlight?.querySelector<HTMLElement>('[data-help-highlight-label]');
  const carry = document.querySelector<HTMLElement>('[data-help-carry]');
  let pointer: [number, number] | null = null;

  // A part that repeats (a row's name, its badge) anchors on its first one on the page, so
  // the outline goes there: what is outlined is where the dot lands.
  const showHighlight = (hovered: HTMLElement | null) => {
    if (!highlight || !highlightLabel) return;
    const part = hovered ? (targetOf(hovered.dataset.helpSpot ?? '') ?? hovered) : null;
    highlight.hidden = !part;
    if (!part) return;
    const r = part.getBoundingClientRect();
    highlight.style.setProperty('--_x', `${r.left - PAD}px`);
    highlight.style.setProperty('--_y', `${r.top - PAD}px`);
    highlight.style.setProperty('--_w', `${r.width + PAD * 2}px`);
    highlight.style.setProperty('--_h', `${r.height + PAD * 2}px`);
    highlightLabel.textContent = part.dataset.helpSpotLabel ?? part.dataset.helpSpot ?? '';
  };
  const showCarry = (at: [number, number] | null) => {
    if (!carry) return;
    carry.hidden = !at;
    if (!at) return;
    carry.style.setProperty('--_x', `${at[0]}px`);
    carry.style.setProperty('--_y', `${at[1]}px`);
  };
  const placing = (yes: boolean) => document.documentElement.toggleAttribute('data-help-placing', yes);

  const startArm = (next: Arm) => {
    if (editing) cancelEditor();
    arm = next;
    drawer?.close();
    closePopovers();
    const d = next.kind === 'move' ? dots.get(next.dotId) : undefined;
    if (pickText) pickText.textContent = d ? `Drop “${d.title}” where it belongs` : 'Click a part of the page to put a dot on it';
    if (pickbar) pickbar.hidden = false;
    placing(true);
    on = true;
    showLayer();
    if (pointer) {
      showCarry(pointer);
      showHighlight(partAt(...pointer));
    }
  };
  const endArm = () => {
    arm = null;
    if (pickbar) pickbar.hidden = true;
    placing(false);
    showHighlight(null);
    showCarry(null);
    showLayer();
  };

  // A dot lands on a part: a new one opens the editor empty, a moved one with the warning.
  const drop = (spot: string, how: Arm) => {
    endArm();
    if (how.kind === 'add') {
      const d: DotState = { id: `${page.routeKey}-new-${++made}`, spot, status: 'draft', title: '', text: '', pending: true };
      dots.set(d.id, d);
      addDotEl(d);
      refresh();
      openEditor(d.id, { isNew: true });
      return;
    }
    const d = dots.get(how.dotId);
    if (!d) return;
    const from = d.spot;
    d.spot = spot;
    refresh();
    openEditor(d.id, { movedFrom: from });
  };

  window.addEventListener('pointermove', (e) => {
    pointer = [e.clientX, e.clientY];
    if (drag) return;
    if (arm) {
      showCarry(pointer);
      showHighlight(partAt(e.clientX, e.clientY));
    } else if (admin && e.altKey && !editing && !offPage(e.target)) {
      placing(true);
      showHighlight(partAt(e.clientX, e.clientY));
    } else if (!arm && highlight && !highlight.hidden) {
      placing(false);
      showHighlight(null);
    }
  });
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Alt' && !arm && !drag) {
      placing(false);
      showHighlight(null);
    }
  });

  // Capture, ahead of the page's own handlers and esa-popover's outside click: while
  // placing, a click on the page drops the dot and does nothing else.
  window.addEventListener(
    'click',
    (e) => {
      const altAdd = admin && e.altKey && !editing && !drag;
      if ((!arm && !altAdd) || offPage(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      const part = partAt(e.clientX, e.clientY);
      if (!part?.dataset.helpSpot) return;
      drop(part.dataset.helpSpot, arm ?? { kind: 'add' });
    },
    true,
  );
  pickbar?.querySelector('[data-help-pick-cancel]')?.addEventListener('click', () => {
    endArm();
    drawer?.show();
  });

  // ── dragging a dot to another part ─────────────────────────────────────────────────

  let drag: { dotId: string; x0: number; y0: number; moving: boolean } | null = null;
  let swallowClick = false;

  layer.addEventListener('pointerdown', (e) => {
    if (!admin || e.button !== 0 || arm) return;
    const btn = (e.target as HTMLElement).closest('[data-hd-button]');
    const id = btn?.closest<HTMLElement>('[data-help-dot]')?.dataset.dotId;
    if (!id || editing?.dotId === id) return;
    drag = { dotId: id, x0: e.clientX, y0: e.clientY, moving: false };
  });
  window.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const el = dotEl(drag.dotId);
    if (!el) return;
    if (!drag.moving) {
      if (Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) < DRAG) return;
      drag.moving = true;
      if (editing) cancelEditor();
      closePopovers();
      el.dataset.dragging = '';
      placing(true);
    }
    const origin = layer.getBoundingClientRect();
    el.style.setProperty('--_x', `${e.clientX - origin.left}px`);
    el.style.setProperty('--_y', `${e.clientY - origin.top}px`);
    showHighlight(partAt(e.clientX, e.clientY));
  });
  const endDrag = (land: boolean, e?: PointerEvent) => {
    const was = drag;
    drag = null;
    if (!was?.moving) return;
    swallowClick = true;
    setTimeout(() => (swallowClick = false), 0);
    delete dotEl(was.dotId)?.dataset.dragging;
    placing(false);
    showHighlight(null);
    const spot = land && e ? partAt(e.clientX, e.clientY)?.dataset.helpSpot : undefined;
    const d = dots.get(was.dotId);
    if (spot && d && spot !== d.spot) drop(spot, { kind: 'move', dotId: d.id });
    else place();
  };
  window.addEventListener('pointerup', (e) => endDrag(true, e));
  window.addEventListener('pointercancel', () => endDrag(false));
  // The click that ends a drag is not a click on the dot: keep its popover shut.
  layer.addEventListener(
    'click',
    (e) => {
      if (!swallowClick) return;
      e.stopPropagation();
      e.preventDefault();
      swallowClick = false;
    },
    true,
  );

  // Edit, in an admin's popover.
  layer.addEventListener('click', (e) => {
    const id = (e.target as HTMLElement).closest('[data-hd-edit]')?.closest<HTMLElement>('[data-help-dot]')?.dataset.dotId;
    if (id) openEditor(id);
  });

  // Capture, so an open popover is still open here: its own Esc closes it and the dots stay.
  window.addEventListener(
    'keydown',
    (e) => {
      if (e.key !== 'Escape') return;
      if (drag?.moving) {
        endDrag(false);
      } else if (arm) {
        endArm();
        drawer?.show();
      } else if (editing) {
        cancelEditor();
      } else if (on && !drawer?.open && !layer.querySelector('esa-popover[open]')) {
        setOn(false);
      }
    },
    true,
  );

  // ── admin list actions (delegated: rows come and go) ───────────────────────────────

  list?.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('[data-hda-add]')) return startArm({ kind: 'add' });
    const row = t.closest<HTMLElement>('[data-hda-row]');
    const d = row?.dataset.dotId ? dots.get(row.dataset.dotId) : undefined;
    if (!d) return;
    if (t.closest('[data-hda-edit]')) {
      drawer?.close();
      on = true;
      showLayer();
      targetOf(d.spot)?.scrollIntoView({ block: 'center', behavior: 'instant' });
      return requestAnimationFrame(() => openEditor(d.id));
    }
    if (t.closest('[data-hda-pickagain]')) return startArm({ kind: 'move', dotId: d.id });
    if (t.closest('[data-hda-publish]')) {
      d.status = 'published';
      delete d.draftedFrom;
    } else if (t.closest('[data-hda-dismiss]')) {
      d.status = 'dismissed';
    } else if (t.closest('[data-hda-detach]')) {
      d.detached = true;
    } else return;
    refresh();
  });

  // ── wiring ─────────────────────────────────────────────────────────────────────────

  const refresh = () => {
    dots.forEach(paintDot);
    paintRows();
    showLayer();
  };

  const setOn = (next: boolean) => {
    on = next;
    if (on) drawer?.close();
    if (!on && editing) cancelEditor();
    showLayer();
  };
  trigger.addEventListener('click', () => setOn(!on));
  document.querySelectorAll('[data-help-dots-start]').forEach((b) => b.addEventListener('click', () => setOn(true)));
  panelbar?.querySelector('[data-help-panel-open]')?.addEventListener('click', () => {
    closePopovers();
    drawer?.show();
  });
  window.addEventListener('resize', schedule);
  scroller.addEventListener('scroll', () => {
    if (arm && pointer) showHighlight(partAt(...pointer));
  });
  document.addEventListener('input', schedule, true);
  const watched = layer.parentElement;
  if (watched) new ResizeObserver(schedule).observe(watched);
  refresh();
}
