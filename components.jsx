/* ui_kits/capsule-game/components.jsx
   Shared visual primitives for the kiosk game. Reuses the design-system
   token vocabulary (var(--…)) and the Capsule / StickerCard visual language.
   Exposed on window for the other Babel scripts. */
const { useState, useRef, useEffect } = React;

/* ---------- Button ---------- */
function GameButton({ children, variant = "primary", size = "lg", icon, onClick, disabled, style }) {
  const sizes = { md: { h: 50, px: 24, fs: 16 }, lg: { h: 66, px: 40, fs: 22 }, xl: { h: 82, px: 56, fs: 28 } };
  const s = sizes[size] || sizes.lg;
  const variants = {
    primary: { background: "linear-gradient(180deg,var(--ibm-blue-hover),var(--ibm-blue))", color: "#fff",
      boxShadow: "0 0 0 1px color-mix(in srgb,var(--ibm-blue) 60%,transparent),0 10px 30px -8px var(--ibm-blue-glow),var(--inset-top)" },
    exotic: { background: "linear-gradient(180deg,var(--rar-exotic-bright),var(--rar-exotic-core))", color: "#3a2600",
      boxShadow: "0 0 0 1px var(--rar-exotic-core),0 12px 34px -8px var(--rar-exotic-glow),var(--inset-top)", textShadow: "0 1px 0 rgba(255,255,255,.25)" },
    ghost: { background: "rgba(255,255,255,.04)", color: "var(--text-muted)", border: "1px solid var(--border-soft)" },
  };
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12,
        height: s.h, padding: `0 ${s.px}px`, fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic",
        fontSize: s.fs, letterSpacing: ".04em", textTransform: "uppercase", border: "1px solid transparent",
        borderRadius: "var(--r-md)", cursor: disabled ? "default" : "pointer", opacity: disabled ? .45 : 1,
        transition: "transform var(--dur-fast) var(--ease-snap),box-shadow var(--dur-fast)", whiteSpace: "nowrap",
        ...(variants[variant] || variants.primary), ...style }}
      onMouseDown={e => !disabled && (e.currentTarget.style.transform = "translateY(2px) scale(.985)")}
      onMouseUp={e => (e.currentTarget.style.transform = "")}
      onMouseLeave={e => (e.currentTarget.style.transform = "")}>
      {icon && <span style={{ fontSize: "1.05em" }}>{icon}</span>}{children}
    </button>
  );
}

const Mark = ({ s = 1 }) => <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "-.05em", fontSize: `${s}em` }}>{'</>'}</span>;

/* ---------- UBS three-keys logo (inline SVG, simplified brand mark) ---------- */
function UBSLogo({ size = 44, color = "#EC0016" }) {
  const KEY_W = 9, KEY_H = 18, GAP = 5;
  const keys = [0, KEY_W + GAP, (KEY_W + GAP) * 2];
  const totalW = KEY_W * 3 + GAP * 2;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <svg width={size} height={size * 0.52} viewBox={`0 0 ${totalW} ${KEY_H}`} fill="none">
        {keys.map((x, i) => (
          <g key={i} transform={`translate(${x},0)`}>
            <rect x={KEY_W * 0.3} y={KEY_H * 0.45} width={KEY_W * 0.4} height={KEY_H * 0.55} rx="0.8" fill={color}/>
            <rect x={0} y={KEY_H * 0.56} width={KEY_W * 0.28} height={KEY_H * 0.17} rx="0.6" fill={color}/>
            <rect x={KEY_W * 0.72} y={KEY_H * 0.56} width={KEY_W * 0.28} height={KEY_H * 0.17} rx="0.6" fill={color}/>
            <circle cx={KEY_W / 2} cy={KEY_H * 0.26} r={KEY_W * 0.44} stroke={color} strokeWidth={KEY_W * 0.22} fill="none"/>
          </g>
        ))}
      </svg>
      <span style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: size * 0.32, letterSpacing: "0.12em", color, lineHeight: 1 }}>UBS</span>
    </div>
  );
}

/* ---------- Capsule object (3D idle hero) ---------- */
function CapsuleObject({ size = 300, spinning = false, label = "IBM Bob Capsule", brand = null }) {
  /* Three gradient layers + specular spot + equator seam + label band + shadow pedestal */
  return (
    <div style={{ position: "relative", width: size, height: size * 1.15, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{
        position: "relative", width: size, height: size,
        animation: spinning ? "cap-rattle .35s ease-in-out infinite" : "cap-float 4.5s var(--ease-out) infinite",
      }}>
        {/* outer aura */}
        <div style={{ position: "absolute", inset: "-18%", borderRadius: "50%",
          background: "radial-gradient(circle, color-mix(in srgb,var(--ibm-blue) 50%,transparent), transparent 60%)",
          filter: "blur(14px)", opacity: .65 }} />

        {/* ── MAIN BODY ── */}
        <div style={{
          position: "absolute",
          inset: "4% 8%",
          borderRadius: "42% 42% 50% 50% / 38% 38% 48% 48%",
          background: "linear-gradient(148deg, #5ea4ff 0%, #1a6eff 20%, var(--ibm-blue) 42%, #0a3da0 68%, #061e6b 88%, #040e3f 100%)",
          boxShadow: [
            "inset 0 10px 28px rgba(255,255,255,.38)",   // top light
            "inset 0 -30px 50px rgba(0,0,0,.50)",        // bottom depth
            "inset 4px 0 18px rgba(255,255,255,.10)",    // left rim
            "inset -8px 0 28px rgba(0,0,0,.25)",         // right shadow
            "0 34px 80px -20px var(--ibm-blue-glow)",    // ground glow
            "0 10px 30px -10px rgba(0,0,0,.7)",
          ].join(", "),
          overflow: "hidden",
        }}>
          {/* specular hotspot (upper-left) */}
          <div style={{
            position: "absolute", top: "5%", left: "8%", width: "52%", height: "42%",
            background: "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,.62), rgba(255,255,255,.10) 52%, transparent 70%)",
            borderRadius: "50%", filter: "blur(4px)",
          }} />
          {/* secondary rim reflection (lower right) */}
          <div style={{
            position: "absolute", bottom: "6%", right: "5%", width: "30%", height: "24%",
            background: "radial-gradient(ellipse, rgba(120,170,255,.32), transparent 70%)",
            borderRadius: "50%", filter: "blur(6px)",
          }} />
          {/* animated shine sweep */}
          <div style={{
            position: "absolute", top: 0, left: 0, width: "42%", height: "100%",
            background: "linear-gradient(90deg, rgba(255,255,255,.42), transparent)",
            filter: "blur(8px)",
            animation: "cap-shine 4.5s var(--ease-out) infinite",
          }} />

          {/* ── equator seam ── */}
          <div style={{
            position: "absolute", top: "50%", left: 0, right: 0, height: 14,
            background: "linear-gradient(180deg, rgba(0,0,0,.42) 0%, rgba(0,0,0,.18) 50%, rgba(255,255,255,.16) 100%)",
            boxShadow: "0 1px 0 rgba(255,255,255,.2), 0 -1px 0 rgba(0,0,0,.4)",
          }} />

          {/* ── label band (top half, branding) ── */}
          <div style={{
            position: "absolute", top: "14%", left: "6%", right: "6%", bottom: "44%",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5,
          }}>
            {brand ? (
              <>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: size * 0.092, color: "#fff", textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1, textShadow: "0 2px 8px rgba(0,0,0,.55)" }}>
                  {brand.title}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: size * 0.044, color: "rgba(255,255,255,.65)", letterSpacing: "0.18em", textTransform: "lowercase" }}>
                  {brand.subtitle}
                </span>
                {brand.logo && <div style={{ marginTop: 3 }}>{brand.logo}</div>}
              </>
            ) : (
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: size * 0.2, color: "#eaf2ff", letterSpacing: "-.06em", textShadow: "0 2px 12px rgba(0,0,0,.5)" }}>{"</>"}</span>
            )}
          </div>

          {/* ── bottom dome inner glow ── */}
          <div style={{
            position: "absolute", bottom: "6%", left: "14%", right: "14%", height: "28%",
            background: "radial-gradient(circle at 50% 60%, color-mix(in srgb,var(--code-cyan) 50%,transparent), transparent 70%)",
            filter: "blur(3px)", opacity: .7,
          }} />
        </div>

        {/* top cap (separate piece for depth) */}
        <div style={{
          position: "absolute", top: "2%", left: "18%", right: "18%", height: "12%",
          background: "linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.04))",
          borderRadius: "50%", filter: "blur(1px)",
        }} />

        {/* ground pedestal shadow */}
        <div style={{
          position: "absolute", bottom: "-4%", left: "12%", right: "12%", height: "10%",
          background: "radial-gradient(ellipse, color-mix(in srgb,var(--ibm-blue) 55%,transparent), transparent 68%)",
          filter: "blur(9px)",
        }} />
      </div>
    </div>
  );
}

/* ---------- Reel tile ---------- */
function ReelTile({ sticker, w = 188, dim = false }) {
  return (
    <div data-rarity={sticker.tier}
      style={{ flex: `0 0 ${w}px`, width: w, height: w * 1.18, padding: 3, borderRadius: "var(--r-lg)",
        background: "linear-gradient(180deg,color-mix(in srgb,var(--rar-core) 60%,transparent),color-mix(in srgb,var(--rar-deep) 55%,transparent))",
        boxShadow: dim ? "none" : "0 0 0 1px color-mix(in srgb,var(--rar-core) 45%,transparent),0 0 24px -6px var(--rar-glow)",
        opacity: dim ? .4 : 1, transition: "opacity .3s" }}>
      <div style={{ position: "relative", height: "100%", borderRadius: "calc(var(--r-lg) - 3px)", overflow: "hidden",
        background: "radial-gradient(120% 80% at 50% 12%,color-mix(in srgb,var(--rar-core) 28%,var(--ink-850)) 0%,var(--ink-900) 72%)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 45% at 50% 0%,color-mix(in srgb,var(--rar-glow) 40%,transparent),transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", padding: "6% 6% 22%" }}>
          <img src={sticker.img} alt="" className="sticker-art" style={{ width: "94%", height: "94%", objectFit: "contain", filter: "drop-shadow(0 6px 14px rgba(0,0,0,.5))" }} />
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 6, background: "var(--rar-core)", boxShadow: "0 0 12px var(--rar-glow)" }} />
      </div>
    </div>
  );
}

Object.assign(window, { GameButton, CapsuleObject, ReelTile, Mark, UBSLogo });
