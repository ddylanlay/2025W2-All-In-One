import React from "react";
import { BackButtonIcon } from "/library-modules/theming/icons/BackButtonIcon";

export function ListingNavbar({
  headingText,
  className = "",
}: {
  headingText: string;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <BackButtonIcon className="mr-3" />
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
