import * as React from "react";

/**
 * The unopened case — a glossy IBM-blue capsule on a glowing pedestal.
 *
 * @startingPoint section="Collectible" subtitle="Openable capsule / case object" viewport="700x420"
 */
export interface CapsuleProps {
  /** Capsule title, e.g. "Legendary Capsule". */
  name?: string;
  /** Small series eyebrow, e.g. "Series 01". */
  series?: string;
  /** Rarity tier teased through the glass / aura. Default "standard". */
  hint?: "standard" | "rare" | "epic" | "legendary" | "exotic";
  /** Pixel size of the canister. Default 220. */
  size?: number;
  /** Idle float animation. Default true. */
  floating?: boolean;
  style?: React.CSSProperties;
}

export function Capsule(props: CapsuleProps): JSX.Element;
