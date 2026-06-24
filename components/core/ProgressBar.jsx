import React from "react";

/**
 * ProgressBar — collection completion, drop meter, XP. Uses IBM blue by
 * default; pass tone="rarity" inside a [data-rarity] scope to tint it.
 */
export function ProgressBar({
  value = 0,
  max = 100,
  label = null,
  showValue = true,
  tone = "accent",
  height = 10,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const fill =
    tone === "rarity"
      ? "linear-gradient(90deg, var(--rar-deep, var(--ibm-blue)), var(--rar-core, var(--ibm-blue)), var(--rar-bright, var(--code-cyan)))"
      : "linear-gradient(90deg, var(--ibm-blue), var(--code-cyan))";
  const glow =
    tone === "rarity"
      ? "0 0 14px -2px var(--rar-glow, var(--ibm-blue))"
      : "0 0 14px -2px var(--ibm-blue-glow)";

  return (
    <div style={{ width: "100%", ...style }} {...rest}>
      {(label || showValue) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 7,
          }}
        >
          {label && (
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--text-muted)" }}>
              {label}
            </span>
          )}
          {showValue && (
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-body)", fontVariantNumeric: "tabular-nums" }}>
              {value}<span style={{ color: "var(--text-faint)" }}> / {max}</span>
            </span>
          )}
        </div>
      )}
      <div
        style={{
          position: "relative",
          height,
          borderRadius: "var(--r-pill)",
          background: "var(--surface-inset)",
          boxShadow: "inset 0 0 0 1px var(--border-hair)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: pct + "%",
            background: fill,
            boxShadow: glow,
            borderRadius: "var(--r-pill)",
            transition: "width var(--dur-slow) var(--ease-out)",
          }}
        />
      </div>
    </div>
  );
}
