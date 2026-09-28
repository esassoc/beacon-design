// Controller for <BcnCiRunPanel>: replays the run log into the pane, advancing the phase
// rail, the stat values and the clock as each line lands. setupX shape — it owns the
// panel's behavior; the host only renders the markup.

import type { RunLine, RunPhase, RunCounters } from '../../data/setup-wizard-ci';

interface Script {
  lines: RunLine[];
  phases: { id: RunPhase; label: string; unit: string; total: number }[];
  seconds: number;
}

// Which counter a phase's "done" figure reads.
const PHASE_COUNTER: Record<RunPhase, keyof RunCounters> = { index: 'b', extract: 'r', file: 'f', merge: 'm' };
const SPEEDS = [1, 4, 16];
/** Lines per second at 1×: the whole run replays in about a minute. */
const BASE_RATE = 36;

const stamp = (sec: number) => {
  const s = Math.floor(sec);
  const hh = String(Math.floor(s / 3600)).padStart(2, '0');
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
};

/** esa-button wraps its text in a label span; write there so the button keeps its shape. */
const setLabel = (btn: HTMLElement, text: string) => {
  (btn.querySelector('.esa-button__label') ?? btn).textContent = text;
};

/** Hide or show an esa-button by its wrapper, not just the native element inside it. */
const show = (btn: HTMLElement, on: boolean) => {
  const host = (btn.closest('.esa-button') as HTMLElement | null) ?? btn;
  // esa-button's own display rule outranks the hidden attribute, so hide by style.
  host.style.display = on ? '' : 'none';
  btn.hidden = !on;
};

export function setupCiRun(root: HTMLElement): void {
  const scriptEl = root.querySelector<HTMLScriptElement>('[data-run-script]');
  const log = root.querySelector<HTMLElement>('[data-run-log]');
  if (!scriptEl || !log) return;
  const { lines, phases } = JSON.parse(scriptEl.textContent ?? '{}') as Script;

  const status = root.querySelector<HTMLElement>('[data-run-status]')!;
  const clock = root.querySelector<HTMLElement>('[data-run-clock]')!;
  const toggle = root.querySelector<HTMLElement>('[data-run-toggle]')!;
  const speedBtn = root.querySelector<HTMLElement>('[data-run-speed]')!;
  const skip = root.querySelector<HTMLElement>('[data-run-skip]')!;
  const done = root.querySelector<HTMLElement>('[data-run-done]')!;

  const counters: RunCounters = { r: 0, a: 0, o: 0, n: 0, b: 0, f: 0, m: 0, s: 0 };
  let cursor = 0;
  let elapsed = 0;
  let paused = false;
  let speedIndex = 0;
  let follow = true;
  let last = 0;
  let carry = 0;
  let phase: RunPhase = 'index';

  // Following stops when the reader scrolls up, and resumes at the bottom.
  log.addEventListener('scroll', () => {
    follow = log.scrollTop + log.clientHeight >= log.scrollHeight - 30;
  });

  const setPhase = (id: RunPhase) => {
    phase = id;
    const order = phases.findIndex((p) => p.id === id);
    root.querySelectorAll<HTMLElement>('[data-phase]').forEach((el, i) => {
      el.dataset.state = i < order ? 'done' : i === order ? 'running' : 'pending';
    });
  };

  const paint = () => {
    for (const p of phases) {
      const el = root.querySelector<HTMLElement>(`[data-phase="${p.id}"]`);
      if (!el) continue;
      const n = Math.min(counters[PHASE_COUNTER[p.id]], p.total);
      el.querySelector('[data-phase-done]')!.textContent = n.toLocaleString('en-US');
      const pct = Math.round((n / p.total) * 100);
      const bar = el.querySelector<HTMLElement>('[role="progressbar"]');
      bar?.setAttribute('aria-valuenow', String(pct));
      const fill = el.querySelector<HTMLElement>('.esa-progress-bar__fill');
      if (fill) fill.style.width = `${pct}%`;
    }
    root.querySelectorAll<HTMLElement>('[data-stat]').forEach((el) => {
      const key = el.dataset.stat as keyof RunCounters;
      const v = el.querySelector('.esa-stat__value');
      if (v) v.textContent = counters[key].toLocaleString('en-US');
    });
    clock.textContent = stamp(elapsed);
  };

  const append = (count: number) => {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count && cursor < lines.length; i++, cursor++) {
      const line = lines[cursor];
      if (line.p !== phase) setPhase(line.p);
      if (line.d) for (const [k, v] of Object.entries(line.d)) counters[k as keyof RunCounters] += v ?? 0;
      elapsed += line.s ?? 0;
      const row = document.createElement('div');
      row.className = 'bcn-cirun__line';
      row.dataset.level = line.l;
      const ts = document.createElement('span');
      ts.className = 'bcn-cirun__stamp';
      ts.textContent = stamp(elapsed);
      const msg = document.createElement('span');
      msg.className = 'bcn-cirun__msg';
      msg.textContent = line.t;
      msg.title = line.t;
      row.append(ts, msg);
      frag.append(row);
    }
    log.append(frag);
    if (follow) log.scrollTop = log.scrollHeight;
  };

  const finish = () => {
    root.querySelectorAll<HTMLElement>('[data-phase]').forEach((el) => (el.dataset.state = 'done'));
    status.textContent = 'Finished';
    show(toggle, false);
    show(speedBtn, false);
    show(skip, false);
    show(done, true);
    paint();
  };

  const tick = (now: number) => {
    if (!last) last = now;
    const dt = (now - last) / 1000;
    last = now;
    if (!paused) {
      carry += dt * BASE_RATE * SPEEDS[speedIndex];
      const n = Math.floor(carry);
      carry -= n;
      if (n > 0) {
        append(n);
        paint();
      }
    }
    if (cursor < lines.length) requestAnimationFrame(tick);
    else finish();
  };

  toggle.addEventListener('click', () => {
    paused = !paused;
    setLabel(toggle, paused ? 'Resume' : 'Pause');
    status.textContent = paused ? 'Paused' : 'Running';
  });
  speedBtn.addEventListener('click', () => {
    speedIndex = (speedIndex + 1) % SPEEDS.length;
    setLabel(speedBtn, `Speed ${SPEEDS[speedIndex]}×`);
  });
  skip.addEventListener('click', () => {
    append(lines.length - cursor);
  });

  show(done, false);
  requestAnimationFrame(tick);
}
