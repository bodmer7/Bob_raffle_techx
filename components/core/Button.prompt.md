Action control for the capsule game — IBM-blue primary, plus a gold **exotic** variant reserved for the high-stakes "open capsule" moment.

```jsx
<Button variant="primary" size="lg">Browse Capsules</Button>
<Button variant="exotic" size="lg" icon={<span className="bob-codemark">{'</>'}</span>}>
  Open Capsule
</Button>
<Button variant="secondary">Inventory</Button>
<Button variant="ghost" size="sm">Skip</Button>
```

Variants: `primary` (IBM blue gradient), `secondary` (dark raised), `ghost` (outline), `danger` (red), `exotic` (gold — use sparingly, one per screen). Sizes `sm | md | lg`. Press state nudges + scales down via `--ease-snap`.
