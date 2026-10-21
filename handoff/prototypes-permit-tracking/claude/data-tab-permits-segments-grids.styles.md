# Data tab — Permits / Segments grids: styles

```css
#flt-level-wrap[hidden],
.bcn-view-pane[hidden] {
  display: none;
}
.pt-grid {
  width: 100%;
  height: calc(100vh - 430px);
  min-height: 520px;
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
```
