import React from "react";
import { BackButtonIcon } from "/library-modules/theming/icons/BackButtonIcon";

export function DraftListingPage({
  className="",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>

      {/* TODO: change to server data */}
      <NavigationBar headingText="86 Fury Lane - Draft Property Listing" />

    </div>
  )
}

function NavigationBar({
  headingText,
  className=""
}: {
  headingText: string,
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <BackButtonIcon className="mr-3"/>
      <NavigationBarHeading text={headingText} />
    </div>
  )
}

function NavigationBarHeading({
  text,
  className="",
}: {
  text: string
  className?: string,
}): React.JSX.Element {
  return (
    <text className={`geist-semibold text-lg ${className}`}>{text}</text>
  )
}