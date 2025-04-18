import React from "react";
import { BackButtonIcon } from "/library-modules/theming/icons/BackButtonIcon";

export function DraftListingPage({
  className,
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex-col ${className}`}>
      <NavigationBar />
    </div>
  )
}

function NavigationBar({
  className="",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex-row ${className}`}>
      <BackButtonIcon height={24} width={24} />
    </div>
  )
}