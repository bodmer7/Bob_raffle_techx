# IBM Bob Capsule — Design System

A dark, premium **CS:GO-style gaming UI** for the *IBM Bob Sticker Capsule* — a
case/capsule-opening game built for a hackathon / trade-show booth. Players
"open" a capsule and pull a collectible **IBM Bob** sticker (Bob = IBM's coding
assistant mascot: a cube-headed robot in a blue hard hat with a `</>` chest
emblem). Each sticker has a CS-style **rarity** (blue → purple → pink → red →
gold); the winner gets the physical sticker handed over at the booth.

> The aesthetic: weapon-case opening screens, but for a friendly code robot.
> Dark arena backdrop, IBM-blue (#0f62fe) as the one true accent, neon rarity
> glows, condensed esports lettering, monospace stats.

---

## Sources this system was built from

No codebase or Figma was provided — the system was derived from **7 uploaded
sticker-sheet renders** (ChatGPT / Gemini generated):

- `uploads/grid_a.png`, `uploads/grid_b.png` — two clean **6×4** sheets of IBM
  Bob esports stickers on **pure black** (48 stickers). **These are the primary
  source** and were sliced into `assets/stickers/*.png` (256×256 each).
- `uploads/grid_numbered.png` — a numbered **01–32** UBS-cobranded sheet plus a
  bottom row of holographic / gold-foil / silver-coin finishes (rarity-tier
  reference).
- `uploads/grid_ubs.png`, `uploads/gem_gold.png`, `uploads/gem_holo.png` —
  additional UBS-cobranded, gold, and holographic concepts (finish reference).

The brand brief: *"Dunkles, hochwertiges Gaming-UI im Counter-Strike-Look,
IBM-Blau (#0f62fe) als Akzent, Rarity-Farben blau/lila/pink/rot/gold."*

---

## CONTENT FUNDAMENTALS

**Voice:** punchy, confident, playful — esports hype meets developer in-jokes.
Short. Imperative. All-caps for impact.

- **Language:** the booth UI is **German** ("ÖFFNEN", "NOCHMAL ÖFFNEN", "Du hast
  gezogen", "Bitte beim Standpersonal abholen"). Sticker *names* are **English**
  developer puns ("Hotfix Hero", "Push To Prod", "Stack Overflow? Who?", "Bugs
  Don't Stand A Chance").
- **Person:** second person, direct — *"Öffne die Kapsel und zieh deinen Bob."*
- **Casing:** display/headline text is **UPPERCASE** (often italic). Labels &
  eyebrows are uppercase with wide tracking. Body copy is sentence case.
- **Numbers:** always monospace, tabular — odds `0.64%`, counts `×3`, `1,280`.
- **Tone words:** *open, pull, drop, rare, legendary, collect, level up.* Avoid
  corporate filler. No exclamation-point spam — let the rarity glow do the
  shouting.
- **Emoji:** sparing and functional only (🔊/🔇 sound toggle, 👋 handover). Not
  decorative. The `</>` code-mark is the signature glyph, not an emoji.

Examples of on-brand microcopy:
> "ÖFFNEN" · "Du hast gezogen" · "BOB LEGENDARY" · "Nochmal öffnen" ·
> "Bitte beim Standpersonal abholen 👋"

---

## VISUAL FOUNDATIONS

**Colour & vibe.** Deep near-black blue surfaces (`--ink-900` #07090f → cards
`--ink-700`). One brand accent: **IBM Blue #0f62fe** (+ `--code-cyan` #54c8ff for
the `</>` highlight and links). Everything else colourful is **rarity**. Imagery
(the stickers) is vivid, saturated, neon-on-black — cool-to-warm depending on
tier. The mood is a darkened arena, not a flat dashboard.

**Rarity is the system.** Five tiers, low→high, each with `-core / -bright /
-deep / -glow` tokens and a `[data-rarity="…"]` scope that re-aliases generic
`--rar-*` vars:

| Tier | Colour | CS name | Drop |
|---|---|---|---|
| `standard` | blue #4b69ff | MIL-SPEC | 60% |
| `rare` | purple #8847ff | RESTRICTED | 25% |
| `epic` | pink #d32ce6 | CLASSIFIED | 10% |
| `legendary` | red #eb4b4b | COVERT | 4% |
| `exotic` | gold #f5b32d | BOB LEGENDARY | 1% |

Plus three **special finishes** (overlays, not tiers): `--finish-holo`
(iridescent), `--finish-foil` (gold metallic), `--finish-coin` (silver).

**Type.** `Saira Condensed` (esports display — uppercase, often *italic*, 700/800)
for titles, rarity labels, buttons. `IBM Plex Sans` for UI/body. `IBM Plex Mono`
for stats, odds, prices and the `</>` mark. See *Fonts* below for the
substitution note.

**Backgrounds.** A fixed "arena" backdrop (in `base.css`): faint 44px techno
grid + a top IBM-blue radial bloom + bottom vignette. No photos, no busy
textures — the stickers and glows carry the colour.

**Glow > shadow.** Elevation uses deep, tight black shadows (`--sh-1..4`). The
hero effect is the **rarity bloom** (`--glow-sm/md/lg`): a coloured ring + outer
halo keyed to the tier. Buttons and the capsule emit IBM-blue light.

**Corners & frames.** Rounded by default (`--r-sm` 7 → `--r-xl` 20). Sticker
cards use a 2px gradient "frame" in the rarity colour wrapping a darker inner.
For a sharper CS feel, `--clip-cut` gives an angled cut-corner panel.

**Cards.** Rarity-framed: gradient border (core→deep) + glow shadow, dark
radial-tinted interior, the sticker art centred (its black backing keyed out via
`mix-blend-mode: lighten`, helper class `.sticker-art`), a footer with the name
(uppercase italic) and tier label + a glowing accent rule.

**Motion.** Eases: `--ease-snap` (button press — nudge down + scale 0.985),
`--ease-out` (UI settle), and the signature `--ease-reel`
`cubic-bezier(.12,.8,.06,1)` — a long ~6.2s deceleration for the opening reel.
Idle objects float gently; rare pulls fire confetti. Reduced-motion is respected
globally (note: this also flattens the reel — fine for a fixed booth screen).

**Hover / press.** Hover lifts cards (`translateY(-4px)`) and brightens borders;
buttons brighten. Press nudges + shrinks slightly. No colour inversion.

**Transparency & blur.** Used for overlays only — the reveal modal and the sound
toggle use `backdrop-filter: blur()` over a dark scrim. Surfaces themselves are
opaque.

---

## ICONOGRAPHY

This brand is **mascot- and glyph-led, not icon-system-led.**

- **The `</>` code-mark** is the primary brand glyph — set in IBM Plex Mono,
  cyan, tight tracking. Reusable via the `.bob-codemark` class. It appears on
  Bob's chest, on the capsule, in buttons, and as an inline accent.
- **IBM Bob** himself (blue hard hat, cube head) is the mascot. He is delivered
  as **raster sticker PNGs** (`assets/stickers/`), never redrawn in SVG. To show
  Bob, place a sticker, the capsule, or the `</>` mark.
- **No icon font / sprite** was provided. The UI needs very few icons; where one
  is genuinely required, use a couple of functional **emoji** (🔊/🔇, 👋) — they
  read clearly on the dark UI and match the playful tone. If a larger icon set
  becomes necessary, add **Lucide** (CDN, 2px stroke) and flag it — none is
  bundled today.
- **No decorative SVG illustration.** Glows, gradients and the sticker art do the
  visual work.

---

## Fonts (substitution flag)

⚠️ The bespoke esports lettering on the source stickers is baked into the art.
For live UI text we substitute **Saira Condensed** (Google Fonts) as the nearest
condensed-italic esports display face, with **IBM Plex Sans/Mono** for the IBM
heritage. Fonts load via `@import` in `tokens/fonts.css` (Google Fonts CDN) — no
binaries are bundled. **If you have licensed/branded display fonts, drop the
`.woff2` files in and replace the `@import` with `@font-face` rules.**

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (imports everything).
- `base.css` — global shell: arena backdrop, scrollbars, `.bob-codemark`,
  `.sticker-art`, reduced-motion.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper.

**`tokens/`** — `colors.css` (brand, ink scale, rarity, finishes, feedback),
`typography.css`, `spacing.css` (spacing, radii, shadows, glows, motion, z),
`fonts.css`.

**`components/`** (React, exposed on `window.<Namespace>`)
- `core/` — **Button** (primary / secondary / ghost / danger / exotic),
  **StatPill** (mono stat chip), **ProgressBar**.
- `collectible/` — **RarityBadge** (5-tier tag), **StickerCard** (the
  collectible), **Capsule** (the openable case).

**`ui_kits/capsule-game/`** — the kiosk deliverable: `index.html` (single-page,
landscape, no-scroll) + `data.js` (roster + weighted draw) + `components.jsx`
(GameButton, CapsuleObject, ReelTile) + `app.jsx` (idle → spinning reel → reveal
→ reset, WebAudio tick/win sounds, confetti, sound toggle). State is in-memory
only (no storage).

**`assets/stickers/`** — 48 sliced IBM Bob sticker PNGs (256×256).

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) for
the Design System tab.
