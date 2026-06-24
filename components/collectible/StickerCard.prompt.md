The collectible itself — an IBM Bob sticker framed by its rarity glow, with name, tier label, owned count, and optional holo/foil shimmer. The source sticker art sits on black; the card keys that out automatically (`mix-blend-mode: lighten`).

```jsx
<StickerCard
  name="Hotfix Hero"
  image="assets/stickers/hotfix-hero.png"
  tier="legendary"
  count={2}
  isNew
/>
<StickerCard name="Quantum Coder" image="assets/stickers/quantum-coder.png" tier="exotic" finish="holo" />
<StickerCard locked tier="epic" />
```

Use `locked` for un-owned slots in a collection grid. `finish="holo" | "foil"` adds the iridescent/metallic overlay and a corner tag.
