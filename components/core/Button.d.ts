import * as React from "react";

/**
 * Primary action control for the IBM Bob Capsule UI.
 *
 * @startingPoint section="Core" subtitle="IBM-blue buttons + gold exotic CTA" viewport="700x200"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. Default "primary". Use "exotic" for the capsule-open CTA. */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "exotic";
  /** Default "md". */
  size?: "sm" | "md" | "lg";
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Optional trailing icon node. */
  iconRight?: React.ReactNode;
  /** Stretch to container width. */
  full?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
