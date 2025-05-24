import React, { useEffect } from "react";
import { Link } from "react-router";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from "./components/SidebarContainer";

import { NavLinkItem } from "./components/NavBarLink";
import { NavBarLinks } from "./components/NavBarLink";
import { NavGroup } from "./components/NavGroup";
import { ProfileFooter } from "./components/ProfileFooter";
import { useAppSelector, useAppDispatch } from "/app/client/store";
import { apiGetProfileData } from "/app/client/library-modules/apis/user/user-role-api";
import { setProfileData } from "/app/client/ui-modules/profiles/state/profile-slice";

interface SideNavBarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinkItem[];
}

export function SideNavBar({ isOpen, onClose, navLinks }: SideNavBarProps) {
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

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader onClose={onClose} />
        <SidebarContent
          nav={<NavBarLinks links={navLinks} />}
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


interface RoleSideNavBarProps {
  isOpen: boolean;
  onClose: () => void;
  dashboardLinks: NavLinkItem[];
  settingsLinks: NavLinkItem[];
}

export function RoleSideNavBar({
  isOpen,
  onClose,
  dashboardLinks = [],
  settingsLinks = []
}: RoleSideNavBarProps) {
  const dispatch = useAppDispatch();
  const profileUser = useAppSelector((state) => state.profile.data);
  const currentUser = useAppSelector((state) => state.currentUser.currentUser);
  const firstName = profileUser?.firstName || "Unknown";
  const lastName = profileUser?.lastName || "User";
  const profilePicture = profileUser?.profilePicture || "/images/test-image.png"

  useEffect(() => {
      const loadProfile = async () => {
        try {
          if (!currentUser?.profileDataId)
            throw new Error("User is not logged in");

          const data = await apiGetProfileData(currentUser.profileDataId);
          dispatch(setProfileData(data)); //Updating redux store
        } catch (error) {
          console.error("Failed to retrieve profile:", error);
        }
      };
      loadProfile();
    }, [currentUser?.profileDataId]);


  const getUserRole = () => {
    if (!profileUser) return "Guest";
    if ('agentId' in profileUser) return "Agent";
    if ('landlordId' in profileUser) return "Landlord";
    if ('tenantId' in profileUser) return "Tenant";
    return "Guest";
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader onClose={onClose} />
        <SidebarContent
          nav={
            <>
              <NavGroup title="Dashboard">
                <NavBarLinks links={dashboardLinks} />
              </NavGroup>
              <NavGroup title="Settings">
                <NavBarLinks links={settingsLinks} />
              </NavGroup>
            </>
          }
        />
        <SidebarFooter>
          <div className="flex items-center gap-3 p-4 border-t">
            <ProfileFooter
              firstName={firstName}
              lastName={lastName}
              title={getUserRole()}
              profileImage={profilePicture}
            />
          </div>
        </SidebarFooter>
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