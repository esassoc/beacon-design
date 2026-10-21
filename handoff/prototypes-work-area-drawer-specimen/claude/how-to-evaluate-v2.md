# How to evaluate v2

Work Area drawer — 3 structure options (specimen) · source prototype: https://esassoc.github.io/beacon-design/prototypes/work-area-drawer-specimen/

![How to evaluate v2, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-work-area-drawer-specimen/claude/how-to-evaluate-v2.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-work-area-drawer-specimen/claude/how-to-evaluate-v2.phone.png

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="evaluate" aria-labelledby="eval-title">
  <h2 class="evaluate__title" id="eval-title">How to evaluate v2</h2>
  <ol class="evaluate__list">
    <li>
      From a cold open, how fast do you know whether work can start — and what the single next
      action is?
    </li>
    <li>
      Are the dates you decide with — notification, visit, planned start, blocked-until — visible
      without opening anything?
    </li>
    <!-- …and 3 more like this (<li>) -->
  </ol>
</section>
```

## Styles

```css
.evaluate {
  max-width: 86ch;
  padding: var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.evaluate__title {
  font-size: 1.25rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.evaluate__list {
  gap: var(--spacing-250);
  flex-direction: column;
  margin: 0;
  padding-left: 1.5rem;
  display: flex;
}
.evaluate__list li {
  color: var(--color-content-default-secondary);
  font-size: 1rem;
  line-height: 1.55;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--radius-300` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-weight-semibold` | `550` | semantic |
