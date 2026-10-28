// Deterministic ids while the sample seeds (2026-10-28). Every plan, element, draft, revision and record id used to be
// a fresh random value per browser, so a link pasted into Slack or Jira opened a blank "Plan" or "Item" page anywhere
// else (the adversarial review's second blocker). While seeding() runs, ids come from a counter in a fixed order, so
// every browser that seeds the same sample gets the same ids; outside it they stay random.

let counter: number | null = null;

/** Runs the seed with deterministic ids. */
export async function seeding<T>(fn: () => Promise<T>): Promise<T> {
  counter = 0;
  try {
    return await fn();
  } finally {
    counter = null;
  }
}

/** A 32-bit mix of the counter (splitmix-style), so neighbouring ids don't read as a sequence. */
function mix(n: number, salt: number): string {
  let x = (n * 0x9e3779b1 + salt * 0x85ebca6b) >>> 0;
  x = Math.imul(x ^ (x >>> 16), 0x7feb352d) >>> 0;
  x = Math.imul(x ^ (x >>> 15), 0x846ca68b) >>> 0;
  return ((x ^ (x >>> 16)) >>> 0).toString(16).padStart(8, '0');
}

/** A UUID-shaped id: deterministic while seeding, random otherwise. */
export function seedUuid(): string {
  if (counter === null) return crypto.randomUUID ? crypto.randomUUID() : `id-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
  const n = ++counter;
  const h = mix(n, 1) + mix(n, 2) + mix(n, 3) + mix(n, 4);
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-8${h.slice(17, 20)}-${h.slice(20, 32)}`;
}

/** A short id (drafts, revisions, records): deterministic while seeding, random otherwise. */
export function seedShortId(): string {
  if (counter === null) return Math.random().toString(36).slice(2, 10);
  return mix(++counter, 5);
}
