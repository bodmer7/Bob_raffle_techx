import React from "react";

/**
 * Capsule — the unopened case. A glossy IBM-blue canister on a glowing
 * pedestal, stamped with the </> mark. Float + glow are pure CSS; wire the
 * actual open action to a <Button> beside it.
 */
export function Capsule({
  name = "Standard Capsule",
  series = "Series 01",
  hint = "standard",   // rarity colour teased through the glass
  size = 220,
  floating = true,
  style,
  ...rest
}) {
  const uid = React.useId().replace(/:/g, "");
  return (
    <div data-rarity={hint} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", ...style }} {...rest}>
      <style>{`
        @keyframes cap-float-${uid} { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes cap-shine-${uid} { 0%{transform:translateX(-120%) rotate(8deg)} 100%{transform:translateX(220%) rotate(8deg)} }
      `}</style>

      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          animation: floating ? `cap-float-${uid} 4.5s var(--ease-out) infinite` : "none",
        }}
      >
        {/* aura */}
        <div style={{ position: "absolute", inset: "-14%", borderRadius: "50%", background: "radial-gradient(circle, color-mix(in srgb, var(--rar-glow, var(--ibm-blue)) 55%, transparent), transparent 62%)", filter: "blur(8px)", opacity: 0.65 }} />

        {/* canister body */}
        <div
          style={{
            position: "absolute",
            inset: "6%",
            borderRadius: "30% 30% 38% 38% / 34% 34% 40% 40%",
            background: "linear-gradient(165deg, #3f86ff 0%, var(--ibm-blue) 42%, #0a3da0 78%, #06246b 100%)",
            boxShadow: "inset 0 6px 18px rgba(255,255,255,0.35), inset 0 -22px 40px rgba(0,0,0,0.45), 0 26px 60px -18px var(--rar-glow, var(--ibm-blue))",
            overflow: "hidden",
          }}
        >
          {/* glass shine sweep */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "55%", height: "100%", background: "linear-gradient(90deg, rgba(255,255,255,0.55), transparent)", filter: "blur(6px)", animation: `cap-shine-${uid} 4.5s var(--ease-out) infinite` }} />
          {/* equator seam */}
          <div style={{ position: "absolute", top: "52%", left: 0, right: 0, height: 10, background: "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(255,255,255,0.12))", boxShadow: "0 1px 0 rgba(255,255,255,0.25)" }} />
          {/* inner window with rarity light */}
          <div style={{ position: "absolute", top: "16%", left: "18%", right: "18%", height: "32%", borderRadius: "50%", background: "radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--rar-bright, #fff) 80%, #fff) 0%, color-mix(in srgb, var(--rar-core, var(--ibm-blue)) 70%, transparent) 55%, transparent 75%)", filter: "blur(1px)", opacity: 0.9 }} />
          {/* </> emblem */}
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: size * 0.2, color: "#eaf2ff", letterSpacing: "-0.06em", textShadow: "0 2px 10px rgba(0,0,0,0.5)", transform: "translateY(14%)" }}>{'</>'}</span>
          </div>
        </div>

        {/* pedestal */}
        <div style={{ position: "absolute", bottom: "-4%", left: "18%", right: "18%", height: "10%", borderRadius: "50%", background: "radial-gradient(circle, color-mix(in srgb, var(--rar-glow, var(--ibm-blue)) 60%, transparent), transparent 70%)", filter: "blur(5px)" }} />
      </div>

      {/* label */}
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-faint)" }}>{series}</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic", textTransform: "uppercase", fontSize: 22, color: "var(--text-strong)", letterSpacing: "0.01em", marginTop: 2 }}>{name}</div>
      </div>
    </div>
  );
}
