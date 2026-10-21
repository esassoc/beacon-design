# Reports grid + footer: styles

```css
.dr-grid {
  width: 100%;
  height: calc(100vh - 360px);
  min-height: 480px;
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
  font-size: 0.8125rem;
  line-height: 1.5;
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 70%, var(--color-content-default));
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
.bcn-grid-download-btn {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  width: 30px;
  height: 30px;
  color: var(--color-content-default-secondary);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.bcn-grid-download-btn:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
}
```
