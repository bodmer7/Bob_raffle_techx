/* ============================================================
   IBM BOB CAPSULE — game data
   Sticker roster + CS-style rarity config + weighted draw.
   State lives in memory only (no storage), per spec.
   ============================================================ */
(function () {
  // Rarity tiers, low → high. `key` maps to the design-system [data-rarity]
  // colour scope; `label` is the CS-flavoured name shown on the handover.
  const RARITY = {
    standard:  { key: "standard",  label: "MIL-SPEC",       weight: 70 },  // Kugelschreiber (unbegrenzt)
    rare:      { key: "rare",      label: "RESTRICTED",     weight: 15 },  // Sticker (30 Stück)
    epic:      { key: "epic",      label: "CLASSIFIED",     weight: 10 },  // Kaffeetasse (30 Stück)
    legendary: { key: "legendary", label: "COVERT",         weight: 5  },  // T-Shirt (30 Stück)
    exotic:    { key: "exotic",    label: "BOB LEGENDARY",  weight: 0  },  // Deaktiviert
  };

  const BASE_STICKERS = "../../assets/stickers/";
  const BASE_REWARDS = "../../assets/rewards/";
  const S = (id, name, tier, finish, isReward) => ({
    id,
    name,
    tier,
    finish: finish || "none",
    img: (isReward ? BASE_REWARDS : BASE_STICKERS) + id + ".png"
  });

  // Roster — each item assigned a tier. Tile/reveal glow comes from the
  // tier colour (CSS), so assignment is by theme, not the art's own glow.
  // Limited Items: 30x Stickers, 30x Mugs, 30x T-Shirts
  const STICKERS = [
    // ---- MIL-SPEC (70% - unlimited available) ----
    S("pen", "Bob Pen", "standard", "none", true),

    // ---- RESTRICTED (15% - 30 pieces available) ----
    S("bugs-sticker", "Bugs Sticker", "rare", "none", true),
    S("keep-calm-sticker", "Keep Calm Sticker", "rare", "none", true),

    // ---- CLASSIFIED (10% - 30 pieces available) ----
    S("mug", "Bob Mug", "epic", "none", true),

    // ---- COVERT (5% - 30 pieces available) ----
    S("t-shirt", "Bob T-Shirt", "legendary", "none", true),
  ];

  const byTier = {};
  for (const k of Object.keys(RARITY)) byTier[k] = STICKERS.filter(s => s.tier === k);

  // ── EQUAL ODDS MODE ────────────────────────────────────────
  // When true, EVERY item has the exact same chance.
  // Set to false to restore the weighted rarity odds.
  const EQUAL_ODDS = true;

  // Weighted tier pick → uniform sticker within tier.
  function drawSticker() {
    if (EQUAL_ODDS) {
      return STICKERS[Math.floor(Math.random() * STICKERS.length)];
    }
    const total = Object.values(RARITY).reduce((a, r) => a + r.weight, 0);
    let roll = Math.random() * total;
    let tier = "standard";
    for (const k of Object.keys(RARITY)) {
      roll -= RARITY[k].weight;
      if (roll <= 0) { tier = k; break; }
    }
    const pool = byTier[tier].length ? byTier[tier] : STICKERS;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Build a reel of `len` tiles with the winner planted at `winIndex`.
  // Filler tiles skew common for a believable scroll.
  function buildReel(winner, len, winIndex) {
    const fillerPool = [].concat(byTier.standard, byTier.standard, byTier.rare, byTier.epic, byTier.legendary);
    const tiles = [];
    for (let i = 0; i < len; i++) {
      if (i === winIndex) { tiles.push(winner); continue; }
      tiles.push(fillerPool[Math.floor(Math.random() * fillerPool.length)]);
    }
    return tiles;
  }

  window.CAPSULE_DATA = { RARITY, STICKERS, byTier, drawSticker, buildReel, EQUAL_ODDS };
})();
