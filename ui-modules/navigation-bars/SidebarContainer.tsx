import React from "react";

interface SidebarContainerProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const SidebarContainer = ({ isOpen, children }: SidebarContainerProps) => (
  <div
    className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {children}
  </div>
);
