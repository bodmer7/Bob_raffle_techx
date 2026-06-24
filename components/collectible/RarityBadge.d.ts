import * as React from "react";

/**
 * Rarity tier tag — self-colours from the rarity token scope it sets.
 *
 * @startingPoint section="Collectible" subtitle="Five-tier rarity tag" viewport="700x140"
 */
export interface RarityBadgeProps {
  /** Drop tier, low → high. Default "standard". */
  tier?: "standard" | "rare" | "epic" | "legendary" | "exotic";
  /** Override the displayed text (defaults to the tier name). */
  label?: string;
  size?: "sm" | "md" | "lg";
  /** "solid" filled, "soft" tinted, "bar" left-rule. Default "solid". */
  variant?: "solid" | "soft" | "bar";
  style?: React.CSSProperties;
}

export function RarityBadge(props: RarityBadgeProps): JSX.Element;
