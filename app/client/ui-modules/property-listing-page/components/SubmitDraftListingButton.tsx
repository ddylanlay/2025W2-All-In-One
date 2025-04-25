import React from "react";
import { twMerge } from "tailwind-merge";

export function SubmitDraftListingButton({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "px-7 py-2 rounded-full bg-(--status-orange-color)",
        className
      )}
    >
      <span className="geist-semibold text-[20px] text-white">
        CONTACT AGENT
      </span>
    </button>
  );
}
