# Remove guard

The confirm behind the x: "Remove from this record?" with the line "<obligation> comes off this record. The record and the obligation both stay."

## Key decisions
- Unlinking removes the link only; it deletes neither the record nor the obligation.

## Done when
- Confirming removes the card from every view of the record and updates the count; cancelling changes nothing.

## Markup
```html
<esa-confirm-dialog
  data-fwl-confirm="true"
  heading="Remove from this record?"
  confirm-label="Remove"
  cancel-label="Cancel"
  show-close-button="true"
  style="--z-modal: 1500; --z-modal-backdrop: 1450"
  variant="default"
  open=""
></esa-confirm-dialog>
```
