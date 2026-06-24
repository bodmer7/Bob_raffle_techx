import React from "react";

/**
 * StatPill — compact mono chip for numbers the game shows everywhere:
 * drop odds, counts, prices, owned-quantity. Tabular figures.
 */
export function StatPill({
  label,
  value,
  icon = null,
  tone = "neutral",
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    neutral: { fg: "var(--text-body)", bd: "var(--border-soft)", bg: "var(--surface-raised)" },
    accent:  { fg: "var(--code-cyan)", bd: "color-mix(in srgb, var(--ibm-blue) 50%, transparent)", bg: "var(--ibm-blue-soft)" },
    success: { fg: "var(--success)", bd: "color-mix(in srgb, var(--success) 40%, transparent)", bg: "color-mix(in srgb, var(--success) 12%, transparent)" },
    rarity:  { fg: "var(--rar-bright, var(--ibm-blue))", bd: "color-mix(in srgb, var(--rar-core, var(--ibm-blue)) 55%, transparent)", bg: "color-mix(in srgb, var(--rar-core, var(--ibm-blue)) 14%, transparent)" },
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === "sm" ? "3px 8px" : "5px 11px";
  const fs = size === "sm" ? 11 : 13;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: pad,
        borderRadius: "var(--r-pill)",
        border: `1px solid ${t.bd}`,
        background: t.bg,
        fontFamily: "var(--font-mono)",
        fontSize: fs,
        fontVariantNumeric: "tabular-nums",
        lineHeight: 1,
        color: t.fg,
        ...style,
      }}
      {...rest}
    >
      {icon && <span style={{ display: "inline-flex", opacity: 0.9 }}>{icon}</span>}
      {label && (
        <span style={{ color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.85em" }}>
          {label}
        </span>
      )}
      <span style={{ fontWeight: 600 }}>{value}</span>
    </span>
  );
}
