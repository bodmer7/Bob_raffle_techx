import * as React from "react";

/** Horizontal meter for collection completion, drop progress, or XP. */
export interface ProgressBarProps {
  value?: number;
  max?: number;
  /** Uppercase label above the track. */
  label?: string;
  /** Show "value / max" figure. Default true. */
  showValue?: boolean;
  /** "accent" = IBM blue; "rarity" reads [data-rarity]. Default "accent". */
  tone?: "accent" | "rarity";
  /** Track height in px. Default 10. */
  height?: number;
  style?: React.CSSProperties;
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;
