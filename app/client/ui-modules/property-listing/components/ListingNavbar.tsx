import React from "react";
import { BackButtonIcon } from "../../theming/icons/BackButtonIcon";
import { IconButton } from "../../theming/components/IconButton";
import { twMerge } from "tailwind-merge";

export function ListingNavbar({
  headingText,
  onBack,
  className = "",
}: {
  headingText: string;
  onBack: () => void;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={twMerge("flex flex-row items-center", className)}>
      <IconButton icon={<BackButtonIcon />} onClick={onBack} className="mr-3" />
      <NavbarHeading text={headingText} />
    </div>
  );
}

function NavbarHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}): React.JSX.Element {
  return <span className={twMerge("geist-semibold text-lg", className)}>{text}</span>;
}
