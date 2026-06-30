/* ui_kits/capsule-game/app.jsx
   The kiosk game: idle → spinning reel → reveal → reset.
   Weighted rarity, ease-out deceleration, per-tile tick sound, confetti. */
const { useState, useRef, useEffect, useMemo } = React;
const { GameButton, CapsuleObject, ReelTile, Mark, UBSLogo } = window;
const D = window.CAPSULE_DATA;

/* ---------------- sound (WebAudio, no assets) ----------------
   CS-style synthesis: the scroll "tick" is a short mechanical click
   (filtered noise burst + tiny pitched body), and the lock-in is a
   layered thunk + rarity-scaled bright chime. No copyrighted audio is
   used — these are original tones in the same style. */
let _ac = null;
const ac = () => (_ac = _ac || new (window.AudioContext || window.webkitAudioContext)());

// Pre-rendered short noise buffer reused by every click (cheap + crisp).
let _noise = null;
function noiseBuf() {
  if (_noise) return _noise;
  const ctx = ac(), len = Math.floor(ctx.sampleRate * 0.05);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.2);
  return (_noise = buf);
}

// One mechanical tick — bandpassed noise click with a faint metallic body.
function tick(vol = 0.22) {
  const ctx = ac(), t = ctx.currentTime;
  // click body (noise)
  const src = ctx.createBufferSource(); src.buffer = noiseBuf();
  const bp = ctx.createBiquadFilter(); bp.type = "bandpass";
  bp.frequency.value = 2400 + Math.random() * 700; bp.Q.value = 1.4;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);
  src.connect(bp); bp.connect(g); g.connect(ctx.destination);
  src.start(t); src.stop(t + 0.06);
  // tiny pitched "tock" so it reads as a ratchet, not just noise
  const o = ctx.createOscillator(), og = ctx.createGain();
  o.type = "square"; o.frequency.setValueAtTime(820 + Math.random() * 120, t);
  o.frequency.exponentialRampToValueAtTime(360, t + 0.03);
  og.gain.setValueAtTime(vol * 0.5, t);
  og.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
  o.connect(og); og.connect(ctx.destination);
  o.start(t); o.stop(t + 0.05);
}

function blip(freq, t0, dur, type = "triangle", vol = 0.14) {
  const ctx = ac(), o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.value = freq;
  o.connect(g); g.connect(ctx.destination);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.start(t0); o.stop(t0 + dur + 0.02);
}

// Lock-in reveal sound — layered, rarity-scaled.
// Standard: slam + 1 bell ring.
// Rare+:    + extra bells.
// Epic+:    + whoosh sweep.
// Legendary/Exotic: + sparkle shimmer cloud.
function winSound(tier) {
  const ctx = ac(), t = ctx.currentTime;

  /* ── 1. IMPACT SLAM (always) ─────────────────────────────────
     A short noise burst shaped into a heavy low "thunk": filtered
     noise from 3kHz down to 80Hz + a sub-boom sine.              */
  (() => {
    const src = ctx.createBufferSource(); src.buffer = noiseBuf();
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass";
    lp.frequency.setValueAtTime(2600, t);
    lp.frequency.exponentialRampToValueAtTime(90, t + 0.18);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.55, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    src.connect(lp); lp.connect(g); g.connect(ctx.destination);
    src.start(t); src.stop(t + 0.25);
    // sub boom
    const bo = ctx.createOscillator(), bg = ctx.createGain();
    bo.type = "sine";
    bo.frequency.setValueAtTime(110, t); bo.frequency.exponentialRampToValueAtTime(44, t + 0.22);
    bg.gain.setValueAtTime(0.4, t); bg.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    bo.connect(bg); bg.connect(ctx.destination); bo.start(t); bo.stop(t + 0.32);
  })();

  /* ── 2. METALLIC BELL RING(S) (always, more for higher tiers) ──
     Triangle osc + an inharmonic partial at ×2.756 — gives that
     "metal hitting glass" bell texture of the CS item-lock sound.  */
  const bell = (freq, delay, vol, dur) => {
    [[freq, 1], [freq * 2.756, 0.28]].forEach(([f, vMul]) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = f > 2000 ? "sine" : "triangle";
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + delay);
      g.gain.linearRampToValueAtTime(vol * vMul, t + delay + 0.018);
      g.gain.exponentialRampToValueAtTime(0.0001, t + delay + dur * vMul);
      o.connect(g); g.connect(ctx.destination); o.start(t + delay); o.stop(t + delay + dur + 0.15);
    });
  };

  const schema = {
    standard:  [[880, 0.06, 0.20, 1.3]],
    rare:      [[880, 0.05, 0.22, 1.6], [1175, 0.15, 0.14, 1.2]],
    epic:      [[880, 0.05, 0.24, 1.9], [1175, 0.13, 0.16, 1.5], [1760, 0.24, 0.11, 1.2]],
    legendary: [[698, 0.04, 0.26, 2.1], [880, 0.09, 0.24, 1.9], [1175, 0.17, 0.17, 1.6],
                [1760, 0.27, 0.13, 1.3], [2349, 0.40, 0.09, 1.0]],
    exotic:    [[523, 0.03, 0.26, 2.3], [698, 0.07, 0.24, 2.1], [880, 0.13, 0.24, 1.9],
                [1175, 0.20, 0.19, 1.6], [1568, 0.29, 0.15, 1.4],
                [2093, 0.40, 0.12, 1.2], [2793, 0.53, 0.09, 1.0]],
  };
  (schema[tier] || schema.standard).forEach(([f, d, v, dur]) => bell(f, d, v, dur));

  /* ── 3. WHOOSH UP SWEEP (epic / legendary / exotic) ──────────
     Bandpassed noise swept 300Hz → 4500Hz over ~280ms — gives
     the "case opening energy burst" feel.                        */
  if (["epic", "legendary", "exotic"].includes(tier)) {
    const len = Math.floor(ctx.sampleRate * 0.12);
    const buf2 = ctx.createBuffer(1, len, ctx.sampleRate);
    const d2 = buf2.getChannelData(0);
    for (let i = 0; i < len; i++) d2[i] = (Math.random() * 2 - 1) * (i / len);
    const src2 = ctx.createBufferSource(); src2.buffer = buf2;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.Q.value = 0.8;
    bp.frequency.setValueAtTime(280, t + 0.04);
    bp.frequency.exponentialRampToValueAtTime(4800, t + 0.36);
    const gw = ctx.createGain();
    gw.gain.setValueAtTime(0.0001, t + 0.04);
    gw.gain.linearRampToValueAtTime(0.55, t + 0.18);
    gw.gain.exponentialRampToValueAtTime(0.0001, t + 0.44);
    src2.connect(bp); bp.connect(gw); gw.connect(ctx.destination);
    src2.start(t + 0.04); src2.stop(t + 0.5);
  }

  /* ── 4. SPARKLE SHIMMER CLOUD (legendary / exotic) ──────────
     Many short high-frequency sine blips scattered in time =
     the glittery "ting ting ting" tail heard on rare unboxings.  */
  if (["legendary", "exotic"].includes(tier)) {
    const count = tier === "exotic" ? 34 : 18;
    const topFreq = tier === "exotic" ? 3800 : 2200;
    for (let i = 0; i < count; i++) {
      const freq = 900 + Math.random() * topFreq;
      const delay = 0.18 + Math.random() * 0.9;
      const dur = 0.18 + Math.random() * 0.55;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t + delay);
      g.gain.linearRampToValueAtTime(0.055, t + delay + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + delay + dur);
      o.connect(g); g.connect(ctx.destination); o.start(t + delay); o.stop(t + delay + dur + 0.05);
    }
  }
}

/* ---------------- confetti (rare drops) ---------------- */
const PAL = {
  epic:      ["#d32ce6", "#f06bff", "#54c8ff"],
  legendary: ["#eb4b4b", "#ff7b6b", "#ffd86b"],
  exotic:    ["#f5b32d", "#ffd86b", "#fff4c2", "#54c8ff"],
};
function Confetti({ tier }) {
  const colors = PAL[tier];
  const bits = useMemo(() => Array.from({ length: 140 }, () => ({
    left: Math.random() * 100, delay: Math.random() * 0.6, dur: 1.5 + Math.random() * 1.4,
    color: colors[Math.floor(Math.random() * colors.length)], rot: Math.random() * 360,
    w: 6 + Math.random() * 9, drift: (Math.random() * 2 - 1) * 80,
  })), [tier]);
  if (!colors) return null;
  return (
    <div className="confetti">
      {bits.map((b, i) => (
        <span key={i} style={{ left: b.left + "%", animationDelay: b.delay + "s", animationDuration: b.dur + "s",
          background: b.color, width: b.w, height: b.w * 0.45, "--drift": b.drift + "px", transform: `rotate(${b.rot}deg)` }} />
      ))}
    </div>
  );
}

/* ---------------- reveal card ---------------- */
function RevealCard({ sticker }) {
  const finish = sticker.finish !== "none"
    ? (sticker.finish === "holo"
        ? { backgroundImage: "var(--finish-holo)", mixBlendMode: "color-dodge", opacity: 0.5 }
        : { backgroundImage: "var(--finish-foil)", mixBlendMode: "overlay", opacity: 0.42 })
    : null;
  return (
    <div data-rarity={sticker.tier} style={{ width: "min(34vw,360px)", padding: 4, borderRadius: "var(--r-xl)",
      background: "linear-gradient(180deg,var(--rar-core),var(--rar-deep))",
      boxShadow: "0 0 0 2px var(--rar-core),0 0 90px -8px var(--rar-glow),0 0 180px -30px var(--rar-glow)",
      animation: "reveal-pop .55s var(--ease-snap) both" }}>
      <div style={{ position: "relative", borderRadius: "calc(var(--r-xl) - 4px)", overflow: "hidden", aspectRatio: "1/1",
        background: "radial-gradient(120% 90% at 50% 12%,color-mix(in srgb,var(--rar-core) 32%,var(--ink-850)),var(--ink-900) 72%)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 50% at 50% 0%,color-mix(in srgb,var(--rar-glow) 45%,transparent),transparent 70%)" }} />
        <div className="reveal-rays" />
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", padding: "7%" }}>
          <img src={sticker.img} alt={sticker.name} className="sticker-art" style={{ width: "92%", height: "92%", objectFit: "contain", filter: "drop-shadow(0 10px 24px rgba(0,0,0,.55))" }} />
          {finish && <div style={{ position: "absolute", inset: 0, ...finish }} />}
        </div>
      </div>
    </div>
  );
}

/* ---------------- app ---------------- */
const STRIDE = 188 + 18; // tile + gap

function App() {
  const [phase, setPhase] = useState("idle");     // idle | spinning | reveal
  const [reel, setReel] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winIndex, setWinIndex] = useState(0);
  const [sound, setSound] = useState(true);
  const stripRef = useRef(null);
  const vpRef = useRef(null);
  const soundRef = useRef(true);
  useEffect(() => { soundRef.current = sound; }, [sound]);

  function open() {
    if (soundRef.current) ac().resume();           // unlock audio on gesture
    const w = D.drawSticker();
    const LEN = 64, WIN = 57;
    setWinner(w); setReel(D.buildReel(w, LEN, WIN)); setWinIndex(WIN); setPhase("spinning");
  }
  function again() { setPhase("idle"); setReel([]); setWinner(null); }

  // run the reel animation whenever we enter spinning with a fresh reel
  useEffect(() => {
    if (phase !== "spinning" || !reel.length) return;
    const strip = stripRef.current, vp = vpRef.current.clientWidth;
    const PAD = 24; // strip padding-left
    const jitter = (Math.random() * 0.5 - 0.25) * 150;
    // land the winner tile's centre on the marker (screen centre)
    const finalX = -(winIndex * STRIDE + PAD + 188 / 2 - vp / 2) + jitter;
    const DUR = 6200;
    const ease = (x) => 1 - Math.pow(1 - x, 3.6); // strong reel deceleration
    const t0 = performance.now();
    let raf, lastIdx = null;

    const frame = (now) => {
      const p = Math.min(1, (now - t0) / DUR);
      const x = finalX * ease(p);
      strip.style.transform = `translateX(${x}px)`;
      // which tile sits under the centre marker right now
      const idxUnder = Math.round((vp / 2 - x - PAD - 188 / 2) / STRIDE);
      if (idxUnder !== lastIdx) {
        lastIdx = idxUnder;
        if (soundRef.current && p < 0.997) tick(0.07 + 0.18 * (1 - p));
      }
      if (p < 1) { raf = requestAnimationFrame(frame); return; }
      strip.style.transform = `translateX(${finalX}px)`;
      setPhase("reveal");
      if (soundRef.current) winSound(winner.tier);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [phase, reel]);

  const rare = winner && ["epic", "legendary", "exotic"].includes(winner.tier);

  return (
    <div className="stage">
      {/* sound toggle — always available */}
      <button className="sound-btn" onClick={() => setSound(s => !s)} title="Sound on/off">
        <span style={{ fontSize: 18 }}>{sound ? "🔊" : "🔇"}</span>
        <span>SOUND {sound ? "ON" : "OFF"}</span>
      </button>

      {/* ---- IDLE ---- */}
      {phase === "idle" && (
        <div className="idle" key="idle">
          <div className="eyebrow">IBM&nbsp;BOB&nbsp;·&nbsp;HACKATHON&nbsp;DROP</div>
          <h1 className="title">Sticker&nbsp;Capsule</h1>
          <p className="sub">Open the capsule and draw your <Mark s={1} />&nbsp;Bob.</p>
          <div className="cap-wrap">
            <CapsuleObject size={300} brand={{
              title: "Bobathon",
              subtitle: "for UBS",
              logo: <UBSLogo size={70} color="rgba(255,255,255,0.92)" />
            }} />
          </div>
          <GameButton variant="exotic" size="xl" icon={<Mark s={1.1} />} onClick={open}>Open</GameButton>
          <OddsLegend />
        </div>
      )}

      {/* ---- SPINNING ---- */}
      {(phase === "spinning" || phase === "reveal") && (
        <div className="spin-layer" key="spin">
          <div className="reel-vp" ref={vpRef}>
            <div className="marker" />
            <div className="reel-fade reel-fade-l" />
            <div className="reel-fade reel-fade-r" />
            <div className="strip" ref={stripRef}>
              {reel.map((s, i) => (
                <ReelTile key={i} sticker={s} w={188} dim={phase === "reveal" && i !== winIndex} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---- REVEAL ---- */}
      {phase === "reveal" && winner && (
        <div className="reveal" key="reveal">
          {rare && <Confetti tier={winner.tier} />}
          <div className="reveal-inner">
            <div className="reveal-eyebrow">You drew</div>
            <RevealCard sticker={winner} />
            <div data-rarity={winner.tier} className="reveal-meta">
              <div className="reveal-name">{winner.name}</div>
              <div className="reveal-rarity">
                <span className="rar-dot" />
                {D.RARITY[winner.tier].label}
                {winner.finish !== "none" && <span className="finish-tag">{winner.finish === "holo" ? "HOLO" : "FOIL"}</span>}
              </div>
            </div>
            <div className="handover">Please collect at the booth</div>
            <GameButton variant="primary" size="lg" onClick={again}>Open again</GameButton>
          </div>
        </div>
      )}
    </div>
  );
}

function OddsLegend() {
  const order = ["standard", "rare", "epic", "legendary", "exotic"];
  if (D.EQUAL_ODDS) {
    return (
      <div className="odds">
        <div className="odds-item" data-rarity="exotic" style={{ borderColor: "color-mix(in srgb, var(--code-cyan) 45%, transparent)" }}>
          <span className="odds-dot" style={{ background: "var(--code-cyan)", boxShadow: "0 0 10px var(--code-cyan)" }} />
          <span className="odds-label" style={{ color: "var(--code-cyan)" }}>Test Mode</span>
          <span className="odds-pct">All {D.STICKERS.length} stickers · equal chance</span>
        </div>
      </div>
    );
  }
  return (
    <div className="odds">
      {order.map(k => (
        <div key={k} className="odds-item" data-rarity={k}>
          <span className="odds-dot" />
          <span className="odds-label">{D.RARITY[k].label}</span>
          <span className="odds-pct">{D.RARITY[k].weight}%</span>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
