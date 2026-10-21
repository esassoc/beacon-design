# Requirements grid: styles

```css
.tracker-grid {
  width: 100%;
  height: calc(100vh - 260px);
  min-height: 840px;
}
.ag-cell.bcn-grid-status-cell {
  align-items: center;
  display: flex;
}
.bcn-grid-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  font-size: 0.75rem;
  line-height: 1.5;
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 70%, #1a1a1a);
  display: inline-flex;
}
.bcn-grid-chip__dot {
  background: var(--_chip);
  border-radius: 50%;
  flex-shrink: 0;
  width: 7px;
  height: 7px;
}
.bcn-grid-name {
  color: var(--color-content-link);
  font-weight: var(--typography-font-weight-regular);
  text-decoration: underline;
}
.bcn-grid-name:hover {
  color: var(--color-background-brand-hover);
}
```
