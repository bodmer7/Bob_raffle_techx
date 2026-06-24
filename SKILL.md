---
name: ibm-bob-capsule-design
description: Use this skill to generate well-branded interfaces and assets for the IBM Bob Sticker Capsule — a dark, CS:GO-style capsule/case-opening game (IBM Bob = IBM's coding-assistant mascot). Covers the rarity system (blue/purple/pink/red/gold), IBM-blue accent, condensed esports type, the capsule + sticker-card visual language, and the kiosk game UI kit. For production or throwaway prototypes/mocks.
user-invocable: true
---

Read `readme.md` in this skill first — it carries the full design guide (content
voice, visual foundations, rarity system, iconography, fonts) and a manifest of
every file.

**What's here**
- `styles.css` — the one stylesheet to link; pulls in all tokens + the dark
  "arena" base shell. Everything is driven by CSS custom properties.
- `tokens/` — colours (IBM blue + the 5-tier rarity scale + finishes),
  typography, spacing/radii/shadows/glows/motion.
- `components/` — React primitives: Button, StatPill, ProgressBar, RarityBadge,
  StickerCard, Capsule. Each has a `.prompt.md` with usage + variants.
- `ui_kits/capsule-game/` — the full working kiosk game (idle → reel → reveal).
  The reference for how it all comes together.
- `assets/stickers/` — 48 IBM Bob sticker PNGs (on black; key out the black with
  `mix-blend-mode: lighten` / the `.sticker-art` class).

**Core rules to honour**
- Dark surfaces only; **IBM Blue #0f62fe is the single accent** — all other
  colour is *rarity* (`standard→exotic`, set via `[data-rarity]`).
- Type: Saira Condensed (uppercase/italic display), IBM Plex Sans (UI), IBM Plex
  Mono (stats + the `</>` mark).
- Rarity drop weights: 60 / 25 / 10 / 4 / 1. Glow, don't shout.
- No bespoke SVG mascots/icons — use the sticker PNGs, the `</>` glyph, and a
  couple of functional emoji.

**When invoked:** if creating visual artifacts (slides, mocks, throwaway
prototypes), copy assets out and produce static HTML files for the user to view.
For production code, copy assets and apply the rules here. If invoked with no
brief, ask what to build, ask a few questions, then act as an expert designer who
outputs HTML artifacts *or* production code as needed.
