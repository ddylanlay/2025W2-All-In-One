import React from "react";
import { twMerge } from "tailwind-merge";

export enum ThemedButtonVariants {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

/**
 * Basic button themed according to PropManager figma designs.
 * @param variant `PRIMARY` = black, `SECONDARY` = white, `TERTIARY` = blue
 */
export function ThemedButton({
  variant,
  onClick,
  children,
  className = "",
}: {
  variant: ThemedButtonVariants;
  children: React.ReactNode
  onClick: () => void;
  className?: string;
}): React.JSX.Element {
  const variantStyling: { [key in ThemedButtonVariants]: string } = {
    [ThemedButtonVariants.PRIMARY]: "bg-(--button-black) text-white",
    [ThemedButtonVariants.SECONDARY]: "border border-(--divider-color)",
    [ThemedButtonVariants.TERTIARY]: "bg-(--button-blue) text-white",
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(
        `${variantStyling[variant]} px-3 py-1.5 rounded-md cursor-pointer`,
        className
      )}
    >
      {children}
    </button>
  );
}
