import React from "react";

export function BackButtonIcon({
  height,
  width,
}: {
  height: number;
  width: number;
}): React.JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 17.375L0.875 9.5L10.5 1.625"
        stroke="black"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.125 9.5H0.875"
        stroke="black"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
