import React from "react";

/**
 * Basic button themed according to PropManager figma designs.
 */
export function ThemedButton({
  bgColorClass = "bg-(--active-primary-color)",
  onClick,
  children,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  bgColorClass?: string;
  className?: string;
}): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${bgColorClass} px-3 py-1.5 rounded-md cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
