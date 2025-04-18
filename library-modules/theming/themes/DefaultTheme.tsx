import React from "react";

export function DefaultTheme({children}: {children: React.ReactNode}): React.JSX.Element {
  return (
    <div className="geist-regular">
      { children }
    </div>
  );
}