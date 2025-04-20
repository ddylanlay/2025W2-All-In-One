import React from "react";

export function ThemedButton({
  buttonBgColorTwClass = "bg-(--active-primary)",
  children,
  className = "",
}: {
  children: React.ReactNode;
  buttonBgColorTwClass?: string;
  className?: string;
}): React.JSX.Element {
  return (
    <button
      className={`${buttonBgColorTwClass} px-3 py-1.5 rounded-md cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
