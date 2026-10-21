// Settings for the hub's handoff pipeline (`npx handoff all`, `npx handoff check`).
export default {
  name: 'Beacon',
  site: 'https://esassoc.github.io',
  base: '/beacon-design/', // production base; must match astro.config.mjs
  registry: 'src/data/prototypes.ts',
  specs: 'src/data/handoff',
  out: 'public/handoff',
  components: 'src/components',
  baseline: 'scripts/handoff-guidance-baseline.mjs',
  port: 4399,
  spokePrefix: 'bcn',
  // What a spec tells an agent building in the Angular Beacon app to reuse instead
  // of porting the hub component. Seeded from migrate-kit's component playbooks.
  target: {
    name: 'the Beacon app',
    map: {
      'esa-badge': 'ui-badge',
      'esa-button': 'ui-button',
      'esa-collapsible': 'ui-collapsible',
      'esa-field-error': 'ui-field-error',
      'esa-snackbar': 'ui-toast',
    },
  },
};
