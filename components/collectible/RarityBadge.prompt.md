The five-tier rarity tag — the brand's core signal. Order low→high: **Standard** (blue) · **Rare** (purple) · **Epic** (pink) · **Legendary** (red) · **Exotic** (gold). It sets `[data-rarity]` so anything nested also reads the right colour.

```jsx
<RarityBadge tier="legendary" />
<RarityBadge tier="exotic" size="lg" />
<RarityBadge tier="rare" variant="soft" />
<RarityBadge tier="epic" variant="bar" label="Epic Drop" />
```

Variants: `solid` (filled gradient), `soft` (tinted), `bar` (left rule). Never invent tier names outside the five.
