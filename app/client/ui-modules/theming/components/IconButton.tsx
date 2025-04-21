import React from "react";

export function IconButton({
  icon,
  onClick,
  className = "",
}: {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}): React.JSX.Element {
  return (
    <button onClick={onClick} className={`cursor-pointer ${className}`}>
      {icon}
    </button>
  );
}
