import * as React from "react";

/**
 * Collectible sticker card — IBM Bob art framed by its rarity glow.
 *
 * @startingPoint section="Collectible" subtitle="Rarity-framed sticker card" viewport="700x420"
 */
export interface StickerCardProps {
  /** Sticker display name (shown uppercase italic). */
  name?: string;
  /** Image src for the sticker art (source art is on black; auto-keyed out). */
  image?: string;
  /** Rarity tier. Default "standard". */
  tier?: "standard" | "rare" | "epic" | "legendary" | "exotic";
  /** Special finish overlay. Default "none". */
  finish?: "none" | "holo" | "foil";
  /** Owned quantity; shows ×N when > 1. */
  count?: number;
  /** Flags a freshly pulled sticker. */
  isNew?: boolean;
  /** Renders the silhouette / "???" un-owned state. */
  locked?: boolean;
  /** Card width in px. Default 220. */
  width?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

export function StickerCard(props: StickerCardProps): JSX.Element;
