Meter for collection completion, capsule drop progress, or XP.

```jsx
<ProgressBar label="Collection" value={37} max={120} />
<div data-rarity="epic"><ProgressBar tone="rarity" value={8} max={10} /></div>
```

`tone="accent"` is IBM blue → cyan; `tone="rarity"` tints to the surrounding `[data-rarity]` tier.
