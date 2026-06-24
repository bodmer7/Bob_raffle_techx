/* @ds-bundle: {"format":3,"namespace":"IBMBobCapsuleDesignSystem_7e639d","components":[{"name":"Capsule","sourcePath":"components/collectible/Capsule.jsx"},{"name":"RarityBadge","sourcePath":"components/collectible/RarityBadge.jsx"},{"name":"StickerCard","sourcePath":"components/collectible/StickerCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"StatPill","sourcePath":"components/core/StatPill.jsx"}],"sourceHashes":{"components/collectible/Capsule.jsx":"492b97909638","components/collectible/RarityBadge.jsx":"dbefe0ff6f05","components/collectible/StickerCard.jsx":"bbf620a2e9ff","components/core/Button.jsx":"a7f992fd1f2d","components/core/ProgressBar.jsx":"ff5b378568ff","components/core/StatPill.jsx":"397796fac7b4","ui_kits/capsule-game/app.jsx":"ded6e43d9c98","ui_kits/capsule-game/components.jsx":"d385dd80c520","ui_kits/capsule-game/data.js":"317949a6ac67"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IBMBobCapsuleDesignSystem_7e639d = window.IBMBobCapsuleDesignSystem_7e639d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/collectible/Capsule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Capsule — the unopened case. A glossy IBM-blue canister on a glowing
 * pedestal, stamped with the </> mark. Float + glow are pure CSS; wire the
 * actual open action to a <Button> beside it.
 */
function Capsule({
  name = "Standard Capsule",
  series = "Series 01",
  hint = "standard",
  // rarity colour teased through the glass
  size = 220,
  floating = true,
  style,
  ...rest
}) {
  const uid = React.useId().replace(/:/g, "");
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-rarity": hint,
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `
        @keyframes cap-float-${uid} { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes cap-shine-${uid} { 0%{transform:translateX(-120%) rotate(8deg)} 100%{transform:translateX(220%) rotate(8deg)} }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      animation: floating ? `cap-float-${uid} 4.5s var(--ease-out) infinite` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-14%",
      borderRadius: "50%",
      background: "radial-gradient(circle, color-mix(in srgb, var(--rar-glow, var(--ibm-blue)) 55%, transparent), transparent 62%)",
      filter: "blur(8px)",
      opacity: 0.65
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "6%",
      borderRadius: "30% 30% 38% 38% / 34% 34% 40% 40%",
      background: "linear-gradient(165deg, #3f86ff 0%, var(--ibm-blue) 42%, #0a3da0 78%, #06246b 100%)",
      boxShadow: "inset 0 6px 18px rgba(255,255,255,0.35), inset 0 -22px 40px rgba(0,0,0,0.45), 0 26px 60px -18px var(--rar-glow, var(--ibm-blue))",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "55%",
      height: "100%",
      background: "linear-gradient(90deg, rgba(255,255,255,0.55), transparent)",
      filter: "blur(6px)",
      animation: `cap-shine-${uid} 4.5s var(--ease-out) infinite`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "52%",
      left: 0,
      right: 0,
      height: 10,
      background: "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(255,255,255,0.12))",
      boxShadow: "0 1px 0 rgba(255,255,255,0.25)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "16%",
      left: "18%",
      right: "18%",
      height: "32%",
      borderRadius: "50%",
      background: "radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--rar-bright, #fff) 80%, #fff) 0%, color-mix(in srgb, var(--rar-core, var(--ibm-blue)) 70%, transparent) 55%, transparent 75%)",
      filter: "blur(1px)",
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: size * 0.2,
      color: "#eaf2ff",
      letterSpacing: "-0.06em",
      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
      transform: "translateY(14%)"
    }
  }, '</>'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-4%",
      left: "18%",
      right: "18%",
      height: "10%",
      borderRadius: "50%",
      background: "radial-gradient(circle, color-mix(in srgb, var(--rar-glow, var(--ibm-blue)) 60%, transparent), transparent 70%)",
      filter: "blur(5px)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, series), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontStyle: "italic",
      textTransform: "uppercase",
      fontSize: 22,
      color: "var(--text-strong)",
      letterSpacing: "0.01em",
      marginTop: 2
    }
  }, name)));
}
Object.assign(__ds_scope, { Capsule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collectible/Capsule.jsx", error: String((e && e.message) || e) }); }

// components/collectible/RarityBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TIERS = {
  standard: "Standard",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
  exotic: "Exotic"
};

/**
 * RarityBadge — the tier tag. Sets [data-rarity] so it self-colours from
 * the rarity token scope. Use on sticker cards, drop reveals, odds rows.
 */
function RarityBadge({
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
      textShadow: "0 1px 2px rgba(0,0,0,0.45)"
    },
    soft: {
      background: "color-mix(in srgb, var(--rar-core) 16%, transparent)",
      color: "var(--rar-bright)",
      border: "1px solid color-mix(in srgb, var(--rar-core) 55%, transparent)"
    },
    bar: {
      background: "transparent",
      color: "var(--rar-bright)",
      borderLeft: "3px solid var(--rar-core)",
      borderRadius: 0,
      paddingLeft: 9
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-rarity": tier,
    style: {
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
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { RarityBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collectible/RarityBadge.jsx", error: String((e && e.message) || e) }); }

// components/collectible/StickerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StickerCard — the collectible. An IBM Bob sticker framed with its rarity
 * glow, name, tier badge and (optional) holo / foil finish shimmer.
 * Drops the black backing of the source art via mix-blend lighten.
 */
function StickerCard({
  name = "Code With Bob",
  image,
  tier = "standard",
  finish = "none",
  // none | holo | foil
  count = 0,
  isNew = false,
  locked = false,
  width = 220,
  onClick,
  style,
  ...rest
}) {
  const finishOverlay = finish === "holo" ? {
    backgroundImage: "var(--finish-holo)",
    mixBlendMode: "color-dodge",
    opacity: 0.5
  } : finish === "foil" ? {
    backgroundImage: "var(--finish-foil)",
    mixBlendMode: "overlay",
    opacity: 0.42
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-rarity": tier,
    onClick: onClick,
    style: {
      position: "relative",
      width,
      borderRadius: "var(--r-lg)",
      padding: 2,
      background: "linear-gradient(180deg, color-mix(in srgb, var(--rar-core) 70%, transparent), color-mix(in srgb, var(--rar-deep) 60%, transparent))",
      boxShadow: locked ? "var(--sh-2), inset 0 0 0 1px var(--border-hair)" : "0 0 0 1px color-mix(in srgb, var(--rar-core) 60%, transparent), 0 14px 40px -16px var(--rar-glow), var(--sh-2)",
      cursor: onClick ? "pointer" : "default",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)",
      ...style
    },
    onMouseEnter: e => {
      if (onClick && !locked) e.currentTarget.style.transform = "translateY(-4px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "calc(var(--r-lg) - 2px)",
      background: "radial-gradient(120% 90% at 50% 18%, color-mix(in srgb, var(--rar-core) 30%, var(--ink-850)) 0%, var(--ink-900) 70%)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(70% 45% at 50% 0%, color-mix(in srgb, var(--rar-glow) 40%, transparent), transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1",
      display: "grid",
      placeItems: "center"
    }
  }, locked ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 46,
      fontWeight: 800,
      color: "var(--ink-400)"
    }
  }, "?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.2em",
      marginTop: 2
    }
  }, "LOCKED")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    className: "sticker-art",
    style: {
      width: "92%",
      height: "92%",
      objectFit: "contain",
      filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.5))"
    }
  }), finishOverlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      ...finishOverlay
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 9,
      right: 9,
      display: "flex",
      gap: 6
    }
  }, finish !== "none" && !locked && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.14em",
      padding: "3px 6px",
      borderRadius: "var(--r-xs)",
      color: "#0a0d15",
      backgroundImage: finish === "holo" ? "var(--finish-holo)" : "var(--finish-foil)"
    }
  }, finish === "holo" ? "HOLO" : "FOIL"), isNew && !locked && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: "0.1em",
      padding: "3px 7px 2px",
      borderRadius: "var(--r-xs)",
      color: "#fff",
      background: "var(--ibm-blue)",
      boxShadow: "0 0 12px -2px var(--ibm-blue-glow)"
    }
  }, "NEW")), count > 1 && !locked && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 9,
      left: 9,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      padding: "2px 8px",
      borderRadius: "var(--r-pill)",
      color: "var(--text-body)",
      background: "rgba(4,6,11,0.6)",
      border: "1px solid var(--border-soft)",
      backdropFilter: "blur(4px)"
    }
  }, "\xD7", count)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px 12px",
      background: "linear-gradient(180deg, transparent, color-mix(in srgb, var(--rar-deep) 22%, var(--ink-900)))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontStyle: "italic",
      textTransform: "uppercase",
      color: locked ? "var(--text-faint)" : "var(--text-strong)",
      fontSize: 17,
      lineHeight: 1.0,
      letterSpacing: "0.01em",
      minHeight: "2em",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, locked ? "???" : name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--rar-bright)"
    }
  }, tier), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 4,
      borderRadius: 2,
      background: "var(--rar-core)",
      boxShadow: "0 0 10px -1px var(--rar-glow)"
    }
  })))));
}
Object.assign(__ds_scope, { StickerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collectible/StickerCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control for the IBM Bob Capsule UI.
 * IBM-blue primary, dark secondary, ghost, and a gold "exotic" CTA
 * for the money moment (opening a capsule).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  full = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      h: 36,
      px: 14,
      fs: 12,
      gap: 7
    },
    md: {
      h: 46,
      px: 20,
      fs: 14,
      gap: 9
    },
    lg: {
      h: 58,
      px: 30,
      fs: 17,
      gap: 11
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.h,
    padding: `0 ${s.px}px`,
    width: full ? "100%" : "auto",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: s.fs,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    border: "1px solid transparent",
    borderRadius: "var(--r-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.42 : 1,
    transition: "transform var(--dur-fast) var(--ease-snap), background var(--dur-fast), box-shadow var(--dur-fast), border-color var(--dur-fast)",
    whiteSpace: "nowrap",
    userSelect: "none"
  };
  const variants = {
    primary: {
      background: "linear-gradient(180deg, var(--ibm-blue-hover), var(--ibm-blue))",
      color: "#fff",
      boxShadow: "0 0 0 1px color-mix(in srgb, var(--ibm-blue) 60%, transparent), 0 6px 20px -6px var(--ibm-blue-glow), var(--inset-top)"
    },
    secondary: {
      background: "var(--surface-raised)",
      color: "var(--text-body)",
      border: "1px solid var(--border-soft)",
      boxShadow: "var(--inset-top)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid var(--border-soft)"
    },
    danger: {
      background: "linear-gradient(180deg, #ff6a6a, var(--danger))",
      color: "#fff",
      boxShadow: "0 6px 20px -6px var(--danger)"
    },
    exotic: {
      background: "linear-gradient(180deg, var(--rar-exotic-bright), var(--rar-exotic-core))",
      color: "#3a2600",
      boxShadow: "0 0 0 1px var(--rar-exotic-core), 0 8px 26px -6px var(--rar-exotic-glow), var(--inset-top)",
      textShadow: "0 1px 0 rgba(255,255,255,0.25)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "translateY(1px) scale(0.985)"),
    onMouseUp: e => e.currentTarget.style.transform = "",
    onMouseLeave: e => e.currentTarget.style.transform = ""
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      fontSize: "1.15em"
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      fontSize: "1.15em"
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — collection completion, drop meter, XP. Uses IBM blue by
 * default; pass tone="rarity" inside a [data-rarity] scope to tint it.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label = null,
  showValue = true,
  tone = "accent",
  height = 10,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = tone === "rarity" ? "linear-gradient(90deg, var(--rar-deep, var(--ibm-blue)), var(--rar-core, var(--ibm-blue)), var(--rar-bright, var(--code-cyan)))" : "linear-gradient(90deg, var(--ibm-blue), var(--code-cyan))";
  const glow = tone === "rarity" ? "0 0 14px -2px var(--rar-glow, var(--ibm-blue))" : "0 0 14px -2px var(--ibm-blue-glow)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 7
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: "var(--text-muted)"
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-body)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, " / ", max))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      borderRadius: "var(--r-pill)",
      background: "var(--surface-inset)",
      boxShadow: "inset 0 0 0 1px var(--border-hair)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      width: pct + "%",
      background: fill,
      boxShadow: glow,
      borderRadius: "var(--r-pill)",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatPill — compact mono chip for numbers the game shows everywhere:
 * drop odds, counts, prices, owned-quantity. Tabular figures.
 */
function StatPill({
  label,
  value,
  icon = null,
  tone = "neutral",
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      fg: "var(--text-body)",
      bd: "var(--border-soft)",
      bg: "var(--surface-raised)"
    },
    accent: {
      fg: "var(--code-cyan)",
      bd: "color-mix(in srgb, var(--ibm-blue) 50%, transparent)",
      bg: "var(--ibm-blue-soft)"
    },
    success: {
      fg: "var(--success)",
      bd: "color-mix(in srgb, var(--success) 40%, transparent)",
      bg: "color-mix(in srgb, var(--success) 12%, transparent)"
    },
    rarity: {
      fg: "var(--rar-bright, var(--ibm-blue))",
      bd: "color-mix(in srgb, var(--rar-core, var(--ibm-blue)) 55%, transparent)",
      bg: "color-mix(in srgb, var(--rar-core, var(--ibm-blue)) 14%, transparent)"
    }
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === "sm" ? "3px 8px" : "5px 11px";
  const fs = size === "sm" ? 11 : 13;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      opacity: 0.9
    }
  }, icon), label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: "0.85em"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, value));
}
Object.assign(__ds_scope, { StatPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatPill.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capsule-game/app.jsx
try { (() => {
/* ui_kits/capsule-game/app.jsx
   The kiosk game: idle → spinning reel → reveal → reset.
   Weighted rarity, ease-out deceleration, per-tile tick sound, confetti. */
const {
  useState,
  useRef,
  useEffect,
  useMemo
} = React;
const {
  GameButton,
  CapsuleObject,
  ReelTile,
  Mark,
  UBSLogo
} = window;
const D = window.CAPSULE_DATA;

/* ---------------- sound (WebAudio, no assets) ----------------
   CS-style synthesis: the scroll "tick" is a short mechanical click
   (filtered noise burst + tiny pitched body), and the lock-in is a
   layered thunk + rarity-scaled bright chime. No copyrighted audio is
   used — these are original tones in the same style. */
let _ac = null;
const ac = () => _ac = _ac || new (window.AudioContext || window.webkitAudioContext)();

// Pre-rendered short noise buffer reused by every click (cheap + crisp).
let _noise = null;
function noiseBuf() {
  if (_noise) return _noise;
  const ctx = ac(),
    len = Math.floor(ctx.sampleRate * 0.05);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.2);
  return _noise = buf;
}

// One mechanical tick — bandpassed noise click with a faint metallic body.
function tick(vol = 0.22) {
  const ctx = ac(),
    t = ctx.currentTime;
  // click body (noise)
  const src = ctx.createBufferSource();
  src.buffer = noiseBuf();
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 2400 + Math.random() * 700;
  bp.Q.value = 1.4;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);
  src.connect(bp);
  bp.connect(g);
  g.connect(ctx.destination);
  src.start(t);
  src.stop(t + 0.06);
  // tiny pitched "tock" so it reads as a ratchet, not just noise
  const o = ctx.createOscillator(),
    og = ctx.createGain();
  o.type = "square";
  o.frequency.setValueAtTime(820 + Math.random() * 120, t);
  o.frequency.exponentialRampToValueAtTime(360, t + 0.03);
  og.gain.setValueAtTime(vol * 0.5, t);
  og.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
  o.connect(og);
  og.connect(ctx.destination);
  o.start(t);
  o.stop(t + 0.05);
}
function blip(freq, t0, dur, type = "triangle", vol = 0.14) {
  const ctx = ac(),
    o = ctx.createOscillator(),
    g = ctx.createGain();
  o.type = type;
  o.frequency.value = freq;
  o.connect(g);
  g.connect(ctx.destination);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

// Lock-in reveal sound — layered, rarity-scaled.
// Standard: slam + 1 bell ring.
// Rare+:    + extra bells.
// Epic+:    + whoosh sweep.
// Legendary/Exotic: + sparkle shimmer cloud.
function winSound(tier) {
  const ctx = ac(),
    t = ctx.currentTime;

  /* ── 1. IMPACT SLAM (always) ─────────────────────────────────
     A short noise burst shaped into a heavy low "thunk": filtered
     noise from 3kHz down to 80Hz + a sub-boom sine.              */
  (() => {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf();
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(2600, t);
    lp.frequency.exponentialRampToValueAtTime(90, t + 0.18);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.55, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    src.connect(lp);
    lp.connect(g);
    g.connect(ctx.destination);
    src.start(t);
    src.stop(t + 0.25);
    // sub boom
    const bo = ctx.createOscillator(),
      bg = ctx.createGain();
    bo.type = "sine";
    bo.frequency.setValueAtTime(110, t);
    bo.frequency.exponentialRampToValueAtTime(44, t + 0.22);
    bg.gain.setValueAtTime(0.4, t);
    bg.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    bo.connect(bg);
    bg.connect(ctx.destination);
    bo.start(t);
    bo.stop(t + 0.32);
  })();

  /* ── 2. METALLIC BELL RING(S) (always, more for higher tiers) ──
     Triangle osc + an inharmonic partial at ×2.756 — gives that
     "metal hitting glass" bell texture of the CS item-lock sound.  */
  const bell = (freq, delay, vol, dur) => {
    [[freq, 1], [freq * 2.756, 0.28]].forEach(([f, vMul]) => {
      const o = ctx.createOscillator(),
        g = ctx.createGain();
      o.type = f > 2000 ? "sine" : "triangle";
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + delay);
      g.gain.linearRampToValueAtTime(vol * vMul, t + delay + 0.018);
      g.gain.exponentialRampToValueAtTime(0.0001, t + delay + dur * vMul);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t + delay);
      o.stop(t + delay + dur + 0.15);
    });
  };
  const schema = {
    standard: [[880, 0.06, 0.20, 1.3]],
    rare: [[880, 0.05, 0.22, 1.6], [1175, 0.15, 0.14, 1.2]],
    epic: [[880, 0.05, 0.24, 1.9], [1175, 0.13, 0.16, 1.5], [1760, 0.24, 0.11, 1.2]],
    legendary: [[698, 0.04, 0.26, 2.1], [880, 0.09, 0.24, 1.9], [1175, 0.17, 0.17, 1.6], [1760, 0.27, 0.13, 1.3], [2349, 0.40, 0.09, 1.0]],
    exotic: [[523, 0.03, 0.26, 2.3], [698, 0.07, 0.24, 2.1], [880, 0.13, 0.24, 1.9], [1175, 0.20, 0.19, 1.6], [1568, 0.29, 0.15, 1.4], [2093, 0.40, 0.12, 1.2], [2793, 0.53, 0.09, 1.0]]
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
    const src2 = ctx.createBufferSource();
    src2.buffer = buf2;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.Q.value = 0.8;
    bp.frequency.setValueAtTime(280, t + 0.04);
    bp.frequency.exponentialRampToValueAtTime(4800, t + 0.36);
    const gw = ctx.createGain();
    gw.gain.setValueAtTime(0.0001, t + 0.04);
    gw.gain.linearRampToValueAtTime(0.55, t + 0.18);
    gw.gain.exponentialRampToValueAtTime(0.0001, t + 0.44);
    src2.connect(bp);
    bp.connect(gw);
    gw.connect(ctx.destination);
    src2.start(t + 0.04);
    src2.stop(t + 0.5);
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
      const o = ctx.createOscillator(),
        g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t + delay);
      g.gain.linearRampToValueAtTime(0.055, t + delay + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + delay + dur);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t + delay);
      o.stop(t + delay + dur + 0.05);
    }
  }
}

/* ---------------- confetti (rare drops) ---------------- */
const PAL = {
  epic: ["#d32ce6", "#f06bff", "#54c8ff"],
  legendary: ["#eb4b4b", "#ff7b6b", "#ffd86b"],
  exotic: ["#f5b32d", "#ffd86b", "#fff4c2", "#54c8ff"]
};
function Confetti({
  tier
}) {
  const colors = PAL[tier];
  const bits = useMemo(() => Array.from({
    length: 140
  }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 0.6,
    dur: 1.5 + Math.random() * 1.4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * 360,
    w: 6 + Math.random() * 9,
    drift: (Math.random() * 2 - 1) * 80
  })), [tier]);
  if (!colors) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "confetti"
  }, bits.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      left: b.left + "%",
      animationDelay: b.delay + "s",
      animationDuration: b.dur + "s",
      background: b.color,
      width: b.w,
      height: b.w * 0.45,
      "--drift": b.drift + "px",
      transform: `rotate(${b.rot}deg)`
    }
  })));
}

/* ---------------- reveal card ---------------- */
function RevealCard({
  sticker
}) {
  const finish = sticker.finish !== "none" ? sticker.finish === "holo" ? {
    backgroundImage: "var(--finish-holo)",
    mixBlendMode: "color-dodge",
    opacity: 0.5
  } : {
    backgroundImage: "var(--finish-foil)",
    mixBlendMode: "overlay",
    opacity: 0.42
  } : null;
  return /*#__PURE__*/React.createElement("div", {
    "data-rarity": sticker.tier,
    style: {
      width: "min(34vw,360px)",
      padding: 4,
      borderRadius: "var(--r-xl)",
      background: "linear-gradient(180deg,var(--rar-core),var(--rar-deep))",
      boxShadow: "0 0 0 2px var(--rar-core),0 0 90px -8px var(--rar-glow),0 0 180px -30px var(--rar-glow)",
      animation: "reveal-pop .55s var(--ease-snap) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "calc(var(--r-xl) - 4px)",
      overflow: "hidden",
      aspectRatio: "1/1",
      background: "radial-gradient(120% 90% at 50% 12%,color-mix(in srgb,var(--rar-core) 32%,var(--ink-850)),var(--ink-900) 72%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(70% 50% at 50% 0%,color-mix(in srgb,var(--rar-glow) 45%,transparent),transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "reveal-rays"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      padding: "7%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: sticker.img,
    alt: sticker.name,
    className: "sticker-art",
    style: {
      width: "92%",
      height: "92%",
      objectFit: "contain",
      filter: "drop-shadow(0 10px 24px rgba(0,0,0,.55))"
    }
  }), finish && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      ...finish
    }
  }))));
}

/* ---------------- app ---------------- */
const STRIDE = 188 + 18; // tile + gap

function App() {
  const [phase, setPhase] = useState("idle"); // idle | spinning | reveal
  const [reel, setReel] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winIndex, setWinIndex] = useState(0);
  const [sound, setSound] = useState(true);
  const stripRef = useRef(null);
  const vpRef = useRef(null);
  const soundRef = useRef(true);
  useEffect(() => {
    soundRef.current = sound;
  }, [sound]);
  function open() {
    if (soundRef.current) ac().resume(); // unlock audio on gesture
    const w = D.drawSticker();
    const LEN = 64,
      WIN = 57;
    setWinner(w);
    setReel(D.buildReel(w, LEN, WIN));
    setWinIndex(WIN);
    setPhase("spinning");
  }
  function again() {
    setPhase("idle");
    setReel([]);
    setWinner(null);
  }

  // run the reel animation whenever we enter spinning with a fresh reel
  useEffect(() => {
    if (phase !== "spinning" || !reel.length) return;
    const strip = stripRef.current,
      vp = vpRef.current.clientWidth;
    const PAD = 24; // strip padding-left
    const jitter = (Math.random() * 0.5 - 0.25) * 150;
    // land the winner tile's centre on the marker (screen centre)
    const finalX = -(winIndex * STRIDE + PAD + 188 / 2 - vp / 2) + jitter;
    const DUR = 6200;
    const ease = x => 1 - Math.pow(1 - x, 3.6); // strong reel deceleration
    const t0 = performance.now();
    let raf,
      lastIdx = null;
    const frame = now => {
      const p = Math.min(1, (now - t0) / DUR);
      const x = finalX * ease(p);
      strip.style.transform = `translateX(${x}px)`;
      // which tile sits under the centre marker right now
      const idxUnder = Math.round((vp / 2 - x - PAD - 188 / 2) / STRIDE);
      if (idxUnder !== lastIdx) {
        lastIdx = idxUnder;
        if (soundRef.current && p < 0.997) tick(0.07 + 0.18 * (1 - p));
      }
      if (p < 1) {
        raf = requestAnimationFrame(frame);
        return;
      }
      strip.style.transform = `translateX(${finalX}px)`;
      setPhase("reveal");
      if (soundRef.current) winSound(winner.tier);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [phase, reel]);
  const rare = winner && ["epic", "legendary", "exotic"].includes(winner.tier);
  return /*#__PURE__*/React.createElement("div", {
    className: "stage"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sound-btn",
    onClick: () => setSound(s => !s),
    title: "Ton an/aus"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, sound ? "🔊" : "🔇"), /*#__PURE__*/React.createElement("span", null, "TON ", sound ? "AN" : "AUS")), phase === "idle" && /*#__PURE__*/React.createElement("div", {
    className: "idle",
    key: "idle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "IBM\xA0BOB\xA0\xB7\xA0HACKATHON\xA0DROP"), /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Sticker\xA0Capsule"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "\xD6ffne die Kapsel und zieh deinen ", /*#__PURE__*/React.createElement(Mark, {
    s: 1
  }), "\xA0Bob."), /*#__PURE__*/React.createElement("div", {
    className: "cap-wrap"
  }, /*#__PURE__*/React.createElement(CapsuleObject, {
    size: 300,
    brand: {
      title: "Bobathon",
      subtitle: "for UBS",
      logo: /*#__PURE__*/React.createElement(UBSLogo, {
        size: 70,
        color: "rgba(255,255,255,0.92)"
      })
    }
  })), /*#__PURE__*/React.createElement(GameButton, {
    variant: "exotic",
    size: "xl",
    icon: /*#__PURE__*/React.createElement(Mark, {
      s: 1.1
    }),
    onClick: open
  }, "\xD6ffnen"), /*#__PURE__*/React.createElement(OddsLegend, null)), (phase === "spinning" || phase === "reveal") && /*#__PURE__*/React.createElement("div", {
    className: "spin-layer",
    key: "spin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reel-vp",
    ref: vpRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "marker"
  }), /*#__PURE__*/React.createElement("div", {
    className: "reel-fade reel-fade-l"
  }), /*#__PURE__*/React.createElement("div", {
    className: "reel-fade reel-fade-r"
  }), /*#__PURE__*/React.createElement("div", {
    className: "strip",
    ref: stripRef
  }, reel.map((s, i) => /*#__PURE__*/React.createElement(ReelTile, {
    key: i,
    sticker: s,
    w: 188,
    dim: phase === "reveal" && i !== winIndex
  }))))), phase === "reveal" && winner && /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: "reveal"
  }, rare && /*#__PURE__*/React.createElement(Confetti, {
    tier: winner.tier
  }), /*#__PURE__*/React.createElement("div", {
    className: "reveal-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal-eyebrow"
  }, "Du hast gezogen"), /*#__PURE__*/React.createElement(RevealCard, {
    sticker: winner
  }), /*#__PURE__*/React.createElement("div", {
    "data-rarity": winner.tier,
    className: "reveal-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal-name"
  }, winner.name), /*#__PURE__*/React.createElement("div", {
    className: "reveal-rarity"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rar-dot"
  }), D.RARITY[winner.tier].label, winner.finish !== "none" && /*#__PURE__*/React.createElement("span", {
    className: "finish-tag"
  }, winner.finish === "holo" ? "HOLO" : "FOIL"))), /*#__PURE__*/React.createElement("div", {
    className: "handover"
  }, "Bitte beim Standpersonal abholen"), /*#__PURE__*/React.createElement(GameButton, {
    variant: "primary",
    size: "lg",
    onClick: again
  }, "Nochmal \xF6ffnen"))));
}
function OddsLegend() {
  const order = ["standard", "rare", "epic", "legendary", "exotic"];
  if (D.EQUAL_ODDS) {
    return /*#__PURE__*/React.createElement("div", {
      className: "odds"
    }, /*#__PURE__*/React.createElement("div", {
      className: "odds-item",
      "data-rarity": "exotic",
      style: {
        borderColor: "color-mix(in srgb, var(--code-cyan) 45%, transparent)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "odds-dot",
      style: {
        background: "var(--code-cyan)",
        boxShadow: "0 0 10px var(--code-cyan)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "odds-label",
      style: {
        color: "var(--code-cyan)"
      }
    }, "Test-Modus"), /*#__PURE__*/React.createElement("span", {
      className: "odds-pct"
    }, "Alle ", D.STICKERS.length, " Sticker \xB7 gleiche Chance")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "odds"
  }, order.map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "odds-item",
    "data-rarity": k
  }, /*#__PURE__*/React.createElement("span", {
    className: "odds-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "odds-label"
  }, D.RARITY[k].label), /*#__PURE__*/React.createElement("span", {
    className: "odds-pct"
  }, D.RARITY[k].weight, "%"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capsule-game/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capsule-game/components.jsx
try { (() => {
/* ui_kits/capsule-game/components.jsx
   Shared visual primitives for the kiosk game. Reuses the design-system
   token vocabulary (var(--…)) and the Capsule / StickerCard visual language.
   Exposed on window for the other Babel scripts. */
const {
  useState,
  useRef,
  useEffect
} = React;

/* ---------- Button ---------- */
function GameButton({
  children,
  variant = "primary",
  size = "lg",
  icon,
  onClick,
  disabled,
  style
}) {
  const sizes = {
    md: {
      h: 50,
      px: 24,
      fs: 16
    },
    lg: {
      h: 66,
      px: 40,
      fs: 22
    },
    xl: {
      h: 82,
      px: 56,
      fs: 28
    }
  };
  const s = sizes[size] || sizes.lg;
  const variants = {
    primary: {
      background: "linear-gradient(180deg,var(--ibm-blue-hover),var(--ibm-blue))",
      color: "#fff",
      boxShadow: "0 0 0 1px color-mix(in srgb,var(--ibm-blue) 60%,transparent),0 10px 30px -8px var(--ibm-blue-glow),var(--inset-top)"
    },
    exotic: {
      background: "linear-gradient(180deg,var(--rar-exotic-bright),var(--rar-exotic-core))",
      color: "#3a2600",
      boxShadow: "0 0 0 1px var(--rar-exotic-core),0 12px 34px -8px var(--rar-exotic-glow),var(--inset-top)",
      textShadow: "0 1px 0 rgba(255,255,255,.25)"
    },
    ghost: {
      background: "rgba(255,255,255,.04)",
      color: "var(--text-muted)",
      border: "1px solid var(--border-soft)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      height: s.h,
      padding: `0 ${s.px}px`,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontStyle: "italic",
      fontSize: s.fs,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      border: "1px solid transparent",
      borderRadius: "var(--r-md)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? .45 : 1,
      transition: "transform var(--dur-fast) var(--ease-snap),box-shadow var(--dur-fast)",
      whiteSpace: "nowrap",
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "translateY(2px) scale(.985)"),
    onMouseUp: e => e.currentTarget.style.transform = "",
    onMouseLeave: e => e.currentTarget.style.transform = ""
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.05em"
    }
  }, icon), children);
}
const Mark = ({
  s = 1
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    letterSpacing: "-.05em",
    fontSize: `${s}em`
  }
}, '</>');

/* ---------- UBS three-keys logo (inline SVG, simplified brand mark) ---------- */
function UBSLogo({
  size = 44,
  color = "#EC0016"
}) {
  const KEY_W = 9,
    KEY_H = 18,
    GAP = 5;
  const keys = [0, KEY_W + GAP, (KEY_W + GAP) * 2];
  const totalW = KEY_W * 3 + GAP * 2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size * 0.52,
    viewBox: `0 0 ${totalW} ${KEY_H}`,
    fill: "none"
  }, keys.map((x, i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    transform: `translate(${x},0)`
  }, /*#__PURE__*/React.createElement("rect", {
    x: KEY_W * 0.3,
    y: KEY_H * 0.45,
    width: KEY_W * 0.4,
    height: KEY_H * 0.55,
    rx: "0.8",
    fill: color
  }), /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: KEY_H * 0.56,
    width: KEY_W * 0.28,
    height: KEY_H * 0.17,
    rx: "0.6",
    fill: color
  }), /*#__PURE__*/React.createElement("rect", {
    x: KEY_W * 0.72,
    y: KEY_H * 0.56,
    width: KEY_W * 0.28,
    height: KEY_H * 0.17,
    rx: "0.6",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: KEY_W / 2,
    cy: KEY_H * 0.26,
    r: KEY_W * 0.44,
    stroke: color,
    strokeWidth: KEY_W * 0.22,
    fill: "none"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: size * 0.32,
      letterSpacing: "0.12em",
      color,
      lineHeight: 1
    }
  }, "UBS"));
}

/* ---------- Capsule object (3D idle hero) ---------- */
function CapsuleObject({
  size = 300,
  spinning = false,
  label = "IBM Bob Capsule",
  brand = null
}) {
  /* Three gradient layers + specular spot + equator seam + label band + shadow pedestal */
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size * 1.15,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      animation: spinning ? "cap-rattle .35s ease-in-out infinite" : "cap-float 4.5s var(--ease-out) infinite"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-18%",
      borderRadius: "50%",
      background: "radial-gradient(circle, color-mix(in srgb,var(--ibm-blue) 50%,transparent), transparent 60%)",
      filter: "blur(14px)",
      opacity: .65
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "4% 8%",
      borderRadius: "42% 42% 50% 50% / 38% 38% 48% 48%",
      background: "linear-gradient(148deg, #5ea4ff 0%, #1a6eff 20%, var(--ibm-blue) 42%, #0a3da0 68%, #061e6b 88%, #040e3f 100%)",
      boxShadow: ["inset 0 10px 28px rgba(255,255,255,.38)",
      // top light
      "inset 0 -30px 50px rgba(0,0,0,.50)",
      // bottom depth
      "inset 4px 0 18px rgba(255,255,255,.10)",
      // left rim
      "inset -8px 0 28px rgba(0,0,0,.25)",
      // right shadow
      "0 34px 80px -20px var(--ibm-blue-glow)",
      // ground glow
      "0 10px 30px -10px rgba(0,0,0,.7)"].join(", "),
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "5%",
      left: "8%",
      width: "52%",
      height: "42%",
      background: "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,.62), rgba(255,255,255,.10) 52%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(4px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "6%",
      right: "5%",
      width: "30%",
      height: "24%",
      background: "radial-gradient(ellipse, rgba(120,170,255,.32), transparent 70%)",
      borderRadius: "50%",
      filter: "blur(6px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "42%",
      height: "100%",
      background: "linear-gradient(90deg, rgba(255,255,255,.42), transparent)",
      filter: "blur(8px)",
      animation: "cap-shine 4.5s var(--ease-out) infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: 0,
      right: 0,
      height: 14,
      background: "linear-gradient(180deg, rgba(0,0,0,.42) 0%, rgba(0,0,0,.18) 50%, rgba(255,255,255,.16) 100%)",
      boxShadow: "0 1px 0 rgba(255,255,255,.2), 0 -1px 0 rgba(0,0,0,.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "14%",
      left: "6%",
      right: "6%",
      bottom: "44%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 5
    }
  }, brand ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontStyle: "italic",
      fontSize: size * 0.092,
      color: "#fff",
      textTransform: "uppercase",
      letterSpacing: "0.01em",
      lineHeight: 1,
      textShadow: "0 2px 8px rgba(0,0,0,.55)"
    }
  }, brand.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: size * 0.044,
      color: "rgba(255,255,255,.65)",
      letterSpacing: "0.18em",
      textTransform: "lowercase"
    }
  }, brand.subtitle), brand.logo && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3
    }
  }, brand.logo)) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: size * 0.2,
      color: "#eaf2ff",
      letterSpacing: "-.06em",
      textShadow: "0 2px 12px rgba(0,0,0,.5)"
    }
  }, "</>")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "6%",
      left: "14%",
      right: "14%",
      height: "28%",
      background: "radial-gradient(circle at 50% 60%, color-mix(in srgb,var(--code-cyan) 50%,transparent), transparent 70%)",
      filter: "blur(3px)",
      opacity: .7
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "2%",
      left: "18%",
      right: "18%",
      height: "12%",
      background: "linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.04))",
      borderRadius: "50%",
      filter: "blur(1px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-4%",
      left: "12%",
      right: "12%",
      height: "10%",
      background: "radial-gradient(ellipse, color-mix(in srgb,var(--ibm-blue) 55%,transparent), transparent 68%)",
      filter: "blur(9px)"
    }
  })));
}

/* ---------- Reel tile ---------- */
function ReelTile({
  sticker,
  w = 188,
  dim = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-rarity": sticker.tier,
    style: {
      flex: `0 0 ${w}px`,
      width: w,
      height: w * 1.18,
      padding: 3,
      borderRadius: "var(--r-lg)",
      background: "linear-gradient(180deg,color-mix(in srgb,var(--rar-core) 60%,transparent),color-mix(in srgb,var(--rar-deep) 55%,transparent))",
      boxShadow: dim ? "none" : "0 0 0 1px color-mix(in srgb,var(--rar-core) 45%,transparent),0 0 24px -6px var(--rar-glow)",
      opacity: dim ? .4 : 1,
      transition: "opacity .3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      borderRadius: "calc(var(--r-lg) - 3px)",
      overflow: "hidden",
      background: "radial-gradient(120% 80% at 50% 12%,color-mix(in srgb,var(--rar-core) 28%,var(--ink-850)) 0%,var(--ink-900) 72%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(70% 45% at 50% 0%,color-mix(in srgb,var(--rar-glow) 40%,transparent),transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      padding: "6% 6% 22%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: sticker.img,
    alt: "",
    className: "sticker-art",
    style: {
      width: "94%",
      height: "94%",
      objectFit: "contain",
      filter: "drop-shadow(0 6px 14px rgba(0,0,0,.5))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 6,
      background: "var(--rar-core)",
      boxShadow: "0 0 12px var(--rar-glow)"
    }
  })));
}
Object.assign(window, {
  GameButton,
  CapsuleObject,
  ReelTile,
  Mark,
  UBSLogo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capsule-game/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capsule-game/data.js
try { (() => {
/* ============================================================
   IBM BOB CAPSULE — game data
   Sticker roster + CS-style rarity config + weighted draw.
   State lives in memory only (no storage), per spec.
   ============================================================ */
(function () {
  // Rarity tiers, low → high. `key` maps to the design-system [data-rarity]
  // colour scope; `label` is the CS-flavoured name shown on the handover.
  const RARITY = {
    standard: {
      key: "standard",
      label: "MIL-SPEC",
      weight: 60
    },
    rare: {
      key: "rare",
      label: "RESTRICTED",
      weight: 25
    },
    epic: {
      key: "epic",
      label: "CLASSIFIED",
      weight: 10
    },
    legendary: {
      key: "legendary",
      label: "COVERT",
      weight: 4
    },
    exotic: {
      key: "exotic",
      label: "BOB LEGENDARY",
      weight: 1
    }
  };
  const BASE = "../../assets/stickers/";
  const S = (id, name, tier, finish) => ({
    id,
    name,
    tier,
    finish: finish || "none",
    img: BASE + id + ".png"
  });

  // Roster — each sticker assigned a tier. Tile/reveal glow comes from the
  // tier colour (CSS), so assignment is by theme, not the art's own glow.
  const STICKERS = [
  // ---- MIL-SPEC (blue, common) ----
  S("code-with-bob", "Code With Bob", "standard"), S("shipping-greatness", "Shipping Greatness", "standard"), S("secure-by-bob", "Secure By Bob", "standard"), S("cloud-native-coder", "Cloud Native Coder", "standard"), S("clean-happy-code", "Clean Code Happy Code", "standard"), S("think-code-solve", "Think · Code · Solve", "standard"), S("bugs-no-chance", "Bugs Don't Stand A Chance", "standard"), S("code-test-repeat", "Code · Test · Repeat", "standard"), S("build-the-future", "Build The Future", "standard"), S("learn-every-day", "Learn Every Day", "standard"), S("trust-process", "Trust The Process", "standard"), S("find-squash-bugs", "Find Bugs, Squash Bugs", "standard"), S("bob-knows-best", "Bob Knows Best", "standard"), S("stay-cool-code-on", "Stay Cool, Code On", "standard"), S("commit-excellence", "Commit To Excellence", "standard"), S("secure-by-design", "Secure By Design", "standard"), S("explore-code-repeat", "Explore · Code · Repeat", "standard"),
  // ---- RESTRICTED (purple) ----
  S("ai-powered", "AI Powered", "rare"), S("bob-builds-better", "Bob Builds Better", "rare"), S("deploy-like-boss", "Deploy Like A Boss", "rare"), S("innovate-with-bob", "Innovate With Bob", "rare"), S("build-beyond-limits", "Build Beyond Limits", "rare"), S("solve-anything", "Solve Anything", "rare"), S("code-create-elevate", "Code · Create · Elevate", "rare"), S("ai-you-unstoppable", "AI + You = Unstoppable", "rare"), S("deploy-greatness", "Deploy Greatness", "rare"), S("legacy-builder", "Legacy Builder", "rare"), S("debug-learn-levelup", "Debug · Learn · Level Up", "rare"), S("powered-curiosity", "Powered By Curiosity", "rare"),
  // ---- CLASSIFIED (pink) ----
  S("quantum-coder", "Quantum Coder", "epic"), S("no-bugs-features", "No Bugs, Just Features", "epic"), S("good-code-good-vibes", "Good Code Good Vibes", "epic"), S("code-is-my-jam", "Code Is My Jam", "epic"), S("built-with-care", "Built With Care", "epic"), S("ride-wave-code", "Ride The Wave Of Code", "epic"), S("ideas-to-impact", "Ideas To Impact", "epic"), S("clean-green-planet", "Clean Code, Green Planet", "epic"),
  // ---- COVERT (red) ----
  S("hotfix-hero", "Hotfix Hero", "legendary"), S("push-to-prod", "Push To Prod", "legendary"), S("debug-mode-on", "Debug Mode On", "legendary"), S("break-the-limits", "Break The Limits", "legendary"), S("code-like-hero", "Code Like A Hero", "legendary"), S("code-like-legend", "Code Like A Legend", "legendary"), S("ship-it-like-bob", "Ship It Like Bob", "legendary"),
  // ---- BOB LEGENDARY (gold, ultra-rare) ----
  S("mvp-programmer", "MVP — Most Valuable Programmer", "exotic", "holo"), S("stack-overflow-who", "Stack Overflow? Who?", "exotic", "foil"), S("errors-are-lessons", "Errors Are Lessons", "exotic", "foil"), S("bob-my-copilot", "Bob, My Copilot", "exotic", "holo")];
  const byTier = {};
  for (const k of Object.keys(RARITY)) byTier[k] = STICKERS.filter(s => s.tier === k);

  // ── TEST MODE ──────────────────────────────────────────────
  // When true, EVERY sticker (all 48, incl. holo & gold) has the
  // exact same chance. Set to false to restore the weighted CS odds.
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
      if (roll <= 0) {
        tier = k;
        break;
      }
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
      if (i === winIndex) {
        tiles.push(winner);
        continue;
      }
      tiles.push(fillerPool[Math.floor(Math.random() * fillerPool.length)]);
    }
    return tiles;
  }
  window.CAPSULE_DATA = {
    RARITY,
    STICKERS,
    byTier,
    drawSticker,
    buildReel,
    EQUAL_ODDS
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capsule-game/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Capsule = __ds_scope.Capsule;

__ds_ns.RarityBadge = __ds_scope.RarityBadge;

__ds_ns.StickerCard = __ds_scope.StickerCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatPill = __ds_scope.StatPill;

})();
