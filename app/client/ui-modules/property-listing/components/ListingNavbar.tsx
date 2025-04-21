import React from "react";
import { BackButtonIcon } from "../../theming/icons/BackButtonIcon";
import { IconButton } from "../../theming/components/IconButton";

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
    <div className={`flex flex-row items-center ${className}`}>
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
  return <span className={`geist-semibold text-lg ${className}`}>{text}</span>;
}
