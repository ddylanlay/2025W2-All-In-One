import React from "react";
import { Link } from "react-router";
import { EscapeIcon } from "../icons/EscapeIcon";
import { MultipleHousesIcon } from "../icons/MultipleHousesIcon";
import { CalendarIcon } from "../icons/CalendarIcon";

interface SideNavBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideNavBar({
  isOpen,
  onClose,
}: SideNavBarProps): React.JSX.Element {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Navigation</span>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black focus:outline-none"
          >
            <EscapeIcon variant="light" />
          </button>
        </div>

        {/* Sidebar content wrapper */}
        <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
          {/* Scrollable nav links */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="flex flex-col gap-3">
              <Link to="/" className="hover:underline">
                Overview
              </Link>
              <Link
                to="/properties"
                className="hover:underline flex items-center space-x-2"
              >
                <MultipleHousesIcon variant="light" />
                <span>Managed Properties</span>
              </Link>
              <Link
                to="/properties"
                className="hover:underline flex items-center space-x-2"
              >
                <CalendarIcon variant="light" />
                <span>Calendar</span>
              </Link>
              <Link to="/support" className="hover:underline">
                Tasks
              </Link>
              <Link to="/support" className="hover:underline">
                Messages
              </Link>
              <Link to="/support" className="hover:underline">
                Search Properties
              </Link>
            </nav>
          </div>

          {/* Always visible bottom links */}
          <div className="flex flex-col gap-2 p-4 border-t border-gray-200">
            <Link to="/support" className="hover:underline">
              Profile
            </Link>
            <Link to="/support" className="hover:underline">
              Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black z-40"
          onClick={onClose}
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
      )}
    </>
  );
}
