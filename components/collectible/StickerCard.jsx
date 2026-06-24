import React from "react";

/**
 * StickerCard — the collectible. An IBM Bob sticker framed with its rarity
 * glow, name, tier badge and (optional) holo / foil finish shimmer.
 * Drops the black backing of the source art via mix-blend lighten.
 */
export function StickerCard({
  name = "Code With Bob",
  image,
  tier = "standard",
  finish = "none",   // none | holo | foil
  count = 0,
  isNew = false,
  locked = false,
  width = 220,
  onClick,
  style,
  ...rest
}) {
  const finishOverlay =
    finish === "holo"
      ? { backgroundImage: "var(--finish-holo)", mixBlendMode: "color-dodge", opacity: 0.5 }
      : finish === "foil"
      ? { backgroundImage: "var(--finish-foil)", mixBlendMode: "overlay", opacity: 0.42 }
      : null;

  return (
    <div
      data-rarity={tier}
      onClick={onClick}
      style={{
        position: "relative",
        width,
        borderRadius: "var(--r-lg)",
        padding: 2,
        background: "linear-gradient(180deg, color-mix(in srgb, var(--rar-core) 70%, transparent), color-mix(in srgb, var(--rar-deep) 60%, transparent))",
        boxShadow: locked
          ? "var(--sh-2), inset 0 0 0 1px var(--border-hair)"
          : "0 0 0 1px color-mix(in srgb, var(--rar-core) 60%, transparent), 0 14px 40px -16px var(--rar-glow), var(--sh-2)",
        cursor: onClick ? "pointer" : "default",
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)",
        ...style,
      }}
      onMouseEnter={(e) => { if (onClick && !locked) e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
      {...rest}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "calc(var(--r-lg) - 2px)",
          background: "radial-gradient(120% 90% at 50% 18%, color-mix(in srgb, var(--rar-core) 30%, var(--ink-850)) 0%, var(--ink-900) 70%)",
          overflow: "hidden",
        }}
      >
        {/* Rarity light beam */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 45% at 50% 0%, color-mix(in srgb, var(--rar-glow) 40%, transparent), transparent 70%)", pointerEvents: "none" }} />

        {/* Art */}
        <div style={{ position: "relative", aspectRatio: "1 / 1", display: "grid", placeItems: "center" }}>
          {locked ? (
            <div style={{ textAlign: "center", color: "var(--text-faint)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 46, fontWeight: 800, color: "var(--ink-400)" }}>?</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", marginTop: 2 }}>LOCKED</div>
            </div>
          ) : (
            <>
              <img
                src={image}
                alt={name}
                className="sticker-art"
                style={{ width: "92%", height: "92%", objectFit: "contain", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.5))" }}
              />
              {finishOverlay && <div style={{ position: "absolute", inset: 0, pointerEvents: "none", ...finishOverlay }} />}
            </>
          )}

          {/* Top-right flags */}
          <div style={{ position: "absolute", top: 9, right: 9, display: "flex", gap: 6 }}>
            {finish !== "none" && !locked && (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", padding: "3px 6px", borderRadius: "var(--r-xs)", color: "#0a0d15", backgroundImage: finish === "holo" ? "var(--finish-holo)" : "var(--finish-foil)" }}>
                {finish === "holo" ? "HOLO" : "FOIL"}
              </span>
            )}
            {isNew && !locked && (
              <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", padding: "3px 7px 2px", borderRadius: "var(--r-xs)", color: "#fff", background: "var(--ibm-blue)", boxShadow: "0 0 12px -2px var(--ibm-blue-glow)" }}>
                NEW
              </span>
            )}
          </div>

          {/* Owned count */}
          {count > 1 && !locked && (
            <span style={{ position: "absolute", top: 9, left: 9, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, padding: "2px 8px", borderRadius: "var(--r-pill)", color: "var(--text-body)", background: "rgba(4,6,11,0.6)", border: "1px solid var(--border-soft)", backdropFilter: "blur(4px)" }}>
              ×{count}
            </span>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: "10px 12px 12px", background: "linear-gradient(180deg, transparent, color-mix(in srgb, var(--rar-deep) 22%, var(--ink-900)))" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic", textTransform: "uppercase", color: locked ? "var(--text-faint)" : "var(--text-strong)", fontSize: 17, lineHeight: 1.0, letterSpacing: "0.01em", minHeight: "2em", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {locked ? "???" : name}
          </div>
          <div style={{ marginTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--rar-bright)" }}>
              {tier}
            </span>
            <span style={{ width: 22, height: 4, borderRadius: 2, background: "var(--rar-core)", boxShadow: "0 0 10px -1px var(--rar-glow)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
