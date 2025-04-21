import React from "react";

export function RightCircularArrowIcon({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <svg
      width="63"
      height="60"
      viewBox="0 0 63 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M31.5 19L43 30M43 30L31.5 41M43 30H20M2.75 30C2.75 45.1878 15.6218 57.5 31.5 57.5C47.3782 57.5 60.25 45.1878 60.25 30C60.25 14.8122 47.3782 2.5 31.5 2.5C15.6218 2.5 2.75 14.8122 2.75 30Z"
        stroke="#F3F3F3"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
