import * as React from "react";

/** Compact monospace stat chip — odds, counts, prices, quantities. */
export interface StatPillProps {
  /** Small uppercase label shown before the value. */
  label?: string;
  /** The figure / text to emphasise. */
  value: React.ReactNode;
  icon?: React.ReactNode;
  /** "rarity" reads the surrounding [data-rarity] scope. Default "neutral". */
  tone?: "neutral" | "accent" | "success" | "rarity";
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

export function StatPill(props: StatPillProps): JSX.Element;
