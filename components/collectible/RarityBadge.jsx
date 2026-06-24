import React from "react";

const TIERS = {
  standard:  "Standard",
  rare:      "Rare",
  epic:      "Epic",
  legendary: "Legendary",
  exotic:    "Exotic",
};

/**
 * RarityBadge — the tier tag. Sets [data-rarity] so it self-colours from
 * the rarity token scope. Use on sticker cards, drop reveals, odds rows.
 */
export function RarityBadge({
  tier = "standard",
  label = null,
  size = "md",
  variant = "solid",
  style,
  ...rest
}) {
  const text = label || TIERS[tier] || tier;
  const pad = size === "sm" ? "3px 8px 2px" : size === "lg" ? "6px 14px 4px" : "4px 11px 3px";
  const fs = size === "sm" ? 10 : size === "lg" ? 14 : 12;

  const variants = {
    solid: {
      background: "linear-gradient(180deg, var(--rar-core), var(--rar-deep))",
      color: "#fff",
      border: "1px solid var(--rar-bright)",
      boxShadow: "0 0 14px -4px var(--rar-glow), var(--inset-top)",
      textShadow: "0 1px 2px rgba(0,0,0,0.45)",
    },
    soft: {
      background: "color-mix(in srgb, var(--rar-core) 16%, transparent)",
      color: "var(--rar-bright)",
      border: "1px solid color-mix(in srgb, var(--rar-core) 55%, transparent)",
    },
    bar: {
      background: "transparent",
      color: "var(--rar-bright)",
      borderLeft: "3px solid var(--rar-core)",
      borderRadius: 0,
      paddingLeft: 9,
    },
  };

  return (
    <span
      data-rarity={tier}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: pad,
        borderRadius: variant === "bar" ? 0 : "var(--r-xs)",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: fs,
        lineHeight: 1,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        ...(variants[variant] || variants.solid),
        ...style,
      }}
      {...rest}
    >
      {text}
    </span>
  );
}
