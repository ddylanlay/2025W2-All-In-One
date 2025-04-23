import React from "react";
import { twMerge } from "tailwind-merge";

export enum ListingStatusPillVariant {
  DRAFT,
  CURRENT,
}

export function ListingStatusPill({
  variant,
  text,
  className,
}: {
  variant: ListingStatusPillVariant;
  text: string;
  className?: string;
}): React.JSX.Element {
  const bgColorClass: { [key in ListingStatusPillVariant]: string } = {
    [ListingStatusPillVariant.DRAFT]: "bg-(--status-orange-color)",
    [ListingStatusPillVariant.CURRENT]: "bg-(--status-dark-blue-color)",
  };

  return (
    <span
      className={twMerge(
        `${bgColorClass[variant]} geist-semibold text-white py-2 px-5 rounded-full`,
        className
      )}
    >
      {text}
    </span>
  );
}
