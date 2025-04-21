import React from "react";

export function LeftCircularArrowIcon({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <svg
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32.5002 20.3333L20.3335 31.9999M20.3335 31.9999L32.5002 43.6666M20.3335 31.9999H44.6668M62.9168 31.9999C62.9168 48.1082 49.2988 61.1666 32.5002 61.1666C15.7015 61.1666 2.0835 48.1082 2.0835 31.9999C2.0835 15.8916 15.7015 2.83325 32.5002 2.83325C49.2988 2.83325 62.9168 15.8916 62.9168 31.9999Z"
        stroke="#F3F3F3"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
