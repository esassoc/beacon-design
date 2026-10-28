// <BcnRevisionSlider>'s runtime: stops, one or two handles, ticks, the hover tooltip, Previous / Next, keyboard.
// After WordPress's revisions.js: hovering anywhere on the track shows the nearest stop's card; one handle compares
// a stop with the one before it; "Compare any two" adds a second handle and the two can't cross.

import { planAvatar, setButtonDisabled } from './plan-people';

export interface RevisionStop {
  author: string;
  /** "Revision 3 by Andy Lovseth", "Live plan · v7". */
  title: string;
  /** "4 min ago (Oct 27, 2026)". */
  when: string;
  message: string;
  /** The message drawn as something richer than its text (the plan's change notes, 2026-10-28). */
  render?: () => Node;
  /** A named version (a release tag) or the live plan: drawn as a taller tick. */
  mark?: 'labelled' | 'live';
}

export interface RevisionSelection {
  from: number;
  to: number;
  compareTwo: boolean;
}

export interface RevisionSliderControl {
  set(selection: RevisionSelection): void;
}

type CheckEl = HTMLElement & { checked: boolean };

export function setupRevisionSlider(root: HTMLElement, stops: readonly RevisionStop[], initial: RevisionSelection, onChange: (s: RevisionSelection) => void): RevisionSliderControl {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const track = q<HTMLElement>('[data-rvs-track]');
  const fill = q<HTMLElement>('[data-rvs-fill]');
  const ticks = q<HTMLElement>('[data-rvs-ticks]');
  const fromHandle = q<HTMLElement>('[data-rvs-handle="from"]');
  const toHandle = q<HTMLElement>('[data-rvs-handle="to"]');
  const tip = q<HTMLElement>('[data-rvs-tip]');
  const compare = q<CheckEl>('[data-rvs-compare]');
  const last = Math.max(0, stops.length - 1);
  let sel: RevisionSelection = { ...initial };
  let dragging: 'from' | 'to' | null = null;
  let hovering: number | null = null;

  const pct = (i: number) => (last === 0 ? 50 : (i / last) * 100);
  ticks.replaceChildren(
    ...stops.map((stop, i) => {
      const t = document.createElement('span');
      t.style.left = `${pct(i)}%`;
      if (stop.mark === 'labelled') t.dataset.labelled = '';
      if (stop.mark === 'live') t.dataset.live = '';
      return t;
    })
  );

  const clamp = (i: number) => Math.max(0, Math.min(last, i));
  const indexAt = (clientX: number) => {
    const r = track.getBoundingClientRect();
    return clamp(Math.round(((clientX - r.left) / r.width) * last));
  };

  function showTip(i: number | null): void {
    if (i === null) {
      tip.hidden = true;
      return;
    }
    const stop = stops[i];
    tip.hidden = false;
    tip.style.left = `${Math.min(88, Math.max(12, pct(i)))}%`;
    q<HTMLElement>('[data-rvs-tip-avatar]').replaceChildren(planAvatar(stop.author, 'sm'));
    q<HTMLElement>('[data-rvs-tip-title]').textContent = stop.title;
    q<HTMLElement>('[data-rvs-tip-when]').textContent = stop.when;
    const msg = q<HTMLElement>('[data-rvs-tip-msg]');
    if (stop.render) msg.replaceChildren(stop.render());
    else msg.textContent = stop.message;
  }

  function render(): void {
    fromHandle.hidden = !sel.compareTwo;
    fromHandle.style.left = `${pct(sel.from)}%`;
    toHandle.style.left = `${pct(sel.to)}%`;
    const a = pct(sel.compareTwo ? sel.from : Math.max(0, sel.to - 1));
    fill.style.insetInlineStart = `${a}%`;
    fill.style.inlineSize = `${pct(sel.to) - a}%`;
    for (const [el, i, label] of [
      [fromHandle, sel.from, 'Compare from'],
      [toHandle, sel.to, sel.compareTwo ? 'Compare to' : 'Revision'],
    ] as const) {
      el.setAttribute('aria-valuemin', '0');
      el.setAttribute('aria-valuemax', String(last));
      el.setAttribute('aria-valuenow', String(i));
      el.setAttribute('aria-valuetext', `${stops[i]?.title ?? ''}, ${stops[i]?.when ?? ''}`);
      el.setAttribute('aria-label', label);
    }
    const prev = q<HTMLButtonElement>('[data-rvs-prev] button');
    const next = q<HTMLButtonElement>('[data-rvs-next] button');
    setButtonDisabled(prev, sel.to <= (sel.compareTwo ? sel.from + 1 : 1));
    setButtonDisabled(next, sel.to >= last);
    compare.checked = sel.compareTwo;
    showTip(dragging ? (dragging === 'from' ? sel.from : sel.to) : hovering);
  }

  function update(next: RevisionSelection): void {
    // One handle compares with the stop before it, so it never rests on the first stop when there's a second.
    const to = clamp(next.to);
    const from = next.compareTwo ? Math.min(clamp(next.from), Math.max(0, to - 1)) : Math.max(0, to - 1);
    const changed = from !== sel.from || to !== sel.to || next.compareTwo !== sel.compareTwo;
    sel = { from, to: Math.max(to, next.compareTwo ? from + 1 : last === 0 ? 0 : 1), compareTwo: next.compareTwo };
    render();
    if (changed) onChange({ ...sel });
  }

  track.addEventListener('pointermove', (e) => {
    hovering = indexAt(e.clientX);
    if (dragging === 'to') update({ ...sel, to: Math.max(hovering, sel.compareTwo ? sel.from + 1 : 1) });
    else if (dragging === 'from') update({ ...sel, from: Math.min(hovering, sel.to - 1) });
    else render();
  });
  track.addEventListener('pointerleave', () => {
    hovering = null;
    if (!dragging) render();
  });
  track.addEventListener('pointerdown', (e) => {
    const i = indexAt(e.clientX);
    // Grab the nearer handle; a press on the bare track moves the "to" handle there (or the nearer one in compare).
    dragging = sel.compareTwo && Math.abs(i - sel.from) < Math.abs(i - sel.to) ? 'from' : 'to';
    track.setPointerCapture(e.pointerId);
    if (dragging === 'to') update({ ...sel, to: Math.max(i, sel.compareTwo ? sel.from + 1 : 1) });
    else update({ ...sel, from: Math.min(i, sel.to - 1) });
  });
  const release = () => {
    dragging = null;
    render();
  };
  track.addEventListener('pointerup', release);
  track.addEventListener('pointercancel', release);

  for (const [el, which] of [
    [fromHandle, 'from'],
    [toHandle, 'to'],
  ] as const) {
    el.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' || e.key === 'ArrowUp' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -1 : 0;
      const jump = e.key === 'Home' ? -Infinity : e.key === 'End' ? Infinity : 0;
      if (!step && !jump) return;
      e.preventDefault();
      if (which === 'to') update({ ...sel, to: jump ? (jump > 0 ? last : 0) : sel.to + step });
      else update({ ...sel, from: jump ? (jump > 0 ? sel.to - 1 : 0) : sel.from + step });
    });
  }

  q<HTMLElement>('[data-rvs-prev]').addEventListener('click', () => update({ ...sel, to: sel.to - 1 }));
  q<HTMLElement>('[data-rvs-next]').addEventListener('click', () => update({ ...sel, to: sel.to + 1 }));
  compare.addEventListener('change', () => {
    const two = !!compare.checked;
    // WordPress: switching to two handles keeps "to" and puts "from" one stop before it; switching back drops "from".
    update({ compareTwo: two, to: sel.to, from: two ? Math.max(0, sel.to - 1) : sel.from });
  });

  render();
  return { set: (s) => update(s) };
}
