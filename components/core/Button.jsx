import React from "react";

/**
 * Button — primary action control for the IBM Bob Capsule UI.
 * IBM-blue primary, dark secondary, ghost, and a gold "exotic" CTA
 * for the money moment (opening a capsule).
 */
export function Button({
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
    sm: { h: 36, px: 14, fs: 12, gap: 7 },
    md: { h: 46, px: 20, fs: 14, gap: 9 },
    lg: { h: 58, px: 30, fs: 17, gap: 11 },
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
    userSelect: "none",
  };

  const variants = {
    primary: {
      background: "linear-gradient(180deg, var(--ibm-blue-hover), var(--ibm-blue))",
      color: "#fff",
      boxShadow: "0 0 0 1px color-mix(in srgb, var(--ibm-blue) 60%, transparent), 0 6px 20px -6px var(--ibm-blue-glow), var(--inset-top)",
    },
    secondary: {
      background: "var(--surface-raised)",
      color: "var(--text-body)",
      border: "1px solid var(--border-soft)",
      boxShadow: "var(--inset-top)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid var(--border-soft)",
    },
    danger: {
      background: "linear-gradient(180deg, #ff6a6a, var(--danger))",
      color: "#fff",
      boxShadow: "0 6px 20px -6px var(--danger)",
    },
    exotic: {
      background: "linear-gradient(180deg, var(--rar-exotic-bright), var(--rar-exotic-core))",
      color: "#3a2600",
      boxShadow: "0 0 0 1px var(--rar-exotic-core), 0 8px 26px -6px var(--rar-exotic-glow), var(--inset-top)",
      textShadow: "0 1px 0 rgba(255,255,255,0.25)",
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "translateY(1px) scale(0.985)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      {...rest}
    >
      {icon && <span style={{ display: "inline-flex", fontSize: "1.15em" }}>{icon}</span>}
      {children}
      {iconRight && <span style={{ display: "inline-flex", fontSize: "1.15em" }}>{iconRight}</span>}
    </button>
  );
}
