import React from "react";
import { Link } from "react-router";
import { NavBarLink } from "./NavBarLink";
import { SidebarContainer } from "./SidebarContainer";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarContent } from "./SidebarContent";
import { MultipleHousesIcon } from "../theming/Icons/MultipleHousesIcon";
import { CalendarIcon } from "../theming/Icons/CalendarIcon";

interface SideNavBarProps {
  isOpen: boolean;
  onClose: () => void;
  role: "agent" | "tenant" | "landlord";
}

export function SideNavBar({ isOpen, onClose, role }: SideNavBarProps) {
  const commonLinks = {
    profile: (
      <Link to="/profile" className="hover:underline">
        Profile
      </Link>
    ),
    settings: (
      <Link to="/settings" className="hover:underline">
        Settings
      </Link>
    ),
  };

  const navLinks = {
    agent: (
      <>
        <NavBarLink to="/">Overview</NavBarLink>
        <NavBarLink to="/properties">
          <span className="flex items-center gap-2">
            <MultipleHousesIcon variant="light" />
            Managed Properties
          </span>
        </NavBarLink>
        <NavBarLink to="/calendar">
          <span className="flex items-center gap-2">
            <CalendarIcon variant="light" />
            Calendar
          </span>
        </NavBarLink>
        <NavBarLink to="/tasks">
          <span className="flex items-center gap-2">
            <CalendarIcon variant="light" />
            Tasks
          </span>
        </NavBarLink>
      </>
    ),
    tenant: (
      <>
        <NavBarLink to="/overview">
          <span className="flex items-center gap-2">
            <CalendarIcon variant="light" />
            Dashboard
          </span>
        </NavBarLink>
        <NavBarLink to="/properties">
          <span className="flex items-center gap-2">
            <MultipleHousesIcon variant="light" />
            My Properties
          </span>
        </NavBarLink>
      </>
    ),
    landlord: (
      <>
        <NavBarLink to="/overview">
          <span className="flex items-center gap-2">
            <CalendarIcon variant="light" />
            Dashboard
          </span>
        </NavBarLink>
        <NavBarLink to="/properties">
          <span className="flex items-center gap-2">
            <MultipleHousesIcon variant="light" />
            My Properties
          </span>
        </NavBarLink>
      </>
    ),
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader onClose={onClose} />
        <SidebarContent
          nav={navLinks[role]}
          bottom={
            <>
              {commonLinks.profile}
              {commonLinks.settings}
            </>
          }
        />
      </SidebarContainer>

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
