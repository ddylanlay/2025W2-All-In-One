import React from "react";

interface SidebarContentProps {
  nav: React.ReactNode;
  bottom?: React.ReactNode;
}

export const SidebarContent = ({ nav, bottom }: SidebarContentProps) => (
  <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
    <div className="flex-1 overflow-y-auto p-4">
      <nav className="flex flex-col gap-3">{nav}</nav>
    </div>
    <div className="flex flex-col gap-2 p-4 border-t border-gray-200">
      {bottom}
    </div>
  </div>
);
