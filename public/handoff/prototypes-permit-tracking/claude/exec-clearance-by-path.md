# Exec — clearance by path

One stacked status bar per path (route-miles by derived status), stacked top-to-bottom so the four paths are directly comparable — each path is a separately-scoped build crew, so leadership reads which crew is most/least unblocked.

## Key decisions
- Per-path, miles-weighted stacked bars sharing the map's status palette so a path here reads the same as its lines on the map.
- Comparable scale across paths (same axis), so the bars answer "which path is furthest along?" at a glance.

## Gotchas
- Each bar is scoped to ONE path's segments; keep the per-path denominators independent (a path that is short in miles can still be 100% cleared).

## Done when
- Four stacked miles-by-status bars, one per path, sharing the map palette and a common scale; they re-derive when a permit edit changes status.

## Markup
```html
<ul class="exec__paths" id="exec-paths">
  <li class="exec-path">
    <div class="exec-path__head">
      <span class="exec-path__name">Path 1</span>
      <span class="exec-path__metric"
        ><strong>7.7 mi</strong> cleared of 64.9 mi · 12%</span
      >
    </div>
    <div class="exec-path__bar">
      <span
        class="exec-path__seg"
        style="flex: 0 0 30.793389731162573%; background: var(--st-in-preparation)"
        title="In Preparation: 20.0 mi"
      ></span
      ><span
        class="exec-path__seg"
        style="flex: 0 0 28.03619492536182%; background: var(--st-submitted)"
        title="Submitted: 18.2 mi"
      ></span
      ><span
        class="exec-path__seg"
        style="flex: 0 0 29.34465955715748%; background: var(--st-under-review)"
        title="Under Review: 19.1 mi"
      ></span
      ><span
        class="exec-path__seg"
        style="flex: 0 0 11.825755786318132%; background: var(--st-cleared)"
        title="Cleared to Construct: 7.7 mi"
      ></span>
    </div>
    <div class="exec-path__foot">
      <span>Projected clear-to-build</span
      ><span class="exec-path__clearby">Sep 25, 2026</span>
    </div>
  </li>
  <li class="exec-path">
    <div class="exec-path__head">
      <span class="exec-path__name">Path 2</span>
      <span class="exec-path__metric"
        ><strong>0.0 mi</strong> cleared of 66.4 mi · 0%</span
      >
    </div>
    <div class="exec-path__bar">
      <span
        class="exec-path__seg"
        style="flex: 0 0 71.91869844545408%; background: var(--st-in-preparation)"
        title="In Preparation: 47.8 mi"
      ></span
      ><span
        class="exec-path__seg"
        style="flex: 0 0 28.081301554545924%; background: var(--st-under-review)"
        title="Under Review: 18.7 mi"
      ></span>
    </div>
    <div class="exec-path__foot">
      <span>Projected clear-to-build</span
      ><span class="exec-path__clearby">Sep 25, 2026</span>
    </div>
  </li>
  <li class="exec-path">
    <div class="exec-path__head">
      <span class="exec-path__name">Path 3</span>
      <span class="exec-path__metric"
        ><strong>2.9 mi</strong> cleared of 67.0 mi · 4%</span
      >
    </div>
    <div class="exec-path__bar">
      <span
        class="exec-path__seg"
        style="flex: 0 0 64.0421572952368%; background: var(--st-not-started)"
        title="Not Started: 42.9 mi"
      ></span
      ><span
        class="exec-path__seg"
        style="flex: 0 0 15.406585451378286%; background: var(--st-in-preparation)"
        title="In Preparation: 10.3 mi"
      ></span
      ><span
        class="exec-path__seg"
        style="flex: 0 0 16.22693904328843%; background: var(--st-submitted)"
        title="Submitted: 10.9 mi"
      ></span
      ><span
        class="exec-path__seg"
        style="flex: 0 0 4.324318210096485%; background: var(--st-cleared)"
        title="Cleared to Construct: 2.9 mi"
      ></span>
    </div>
    <div class="exec-path__foot">
      <span>Projected clear-to-build</span
      ><span class="exec-path__clearby">Nov 1, 2026</span>
    </div>
  </li>
  <li class="exec-path">
    <div class="exec-path__head">
      <span class="exec-path__name">Path 4</span>
      <span class="exec-path__metric"
        ><strong>0.0 mi</strong> cleared of 2.3 mi · 0%</span
      >
    </div>
    <div class="exec-path__bar">
      <span
        class="exec-path__seg"
        style="flex: 0 0 100%; background: var(--st-submitted)"
        title="Submitted: 2.3 mi"
      ></span>
    </div>
    <div class="exec-path__foot">
      <span>Projected clear-to-build</span
      ><span class="exec-path__clearby">Sep 5, 2026</span>
    </div>
  </li>
</ul>
```

## Styles
```css
.exec__paths {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.exec-path {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
}
.exec-path__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
}
.exec-path__name {
  font-size: var(--type-size-250);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.exec-path__metric {
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  font-variant-numeric: tabular-nums;
}
.exec-path__metric strong {
  color: var(--st-cleared);
  font-weight: var(--font-weight-bold);
}
.exec-path__bar {
  display: flex;
  height: 18px;
  border-radius: var(--radius-100);
  overflow: hidden;
  background: var(--bcn-gray-100);
}
.exec-path__seg {
  height: 100%;
}
.exec-path__seg + .exec-path__seg {
  border-left: 1px solid var(--color-surface);
}
.exec-path__foot {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
  font-size: var(--type-size-100);
  color: var(--color-text-tertiary);
}
.exec-path__clearby {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  font-variant-numeric: tabular-nums;
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--st-cleared`: #1a9850 _(component)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
