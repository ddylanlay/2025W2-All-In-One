import React from "react";
import { useSelector } from "react-redux";
import { AboutPageUiState } from "./state/AboutPageUiState";
import { selectAboutPageUiState } from "./state/reducers/about-page-slice";
import { UserDropdown } from "../theming/UserDropdown";
import { SideNavBar } from "../navigation-bars/SideNavbar";
import { TopNavbar } from "../navigation-bars/Navbar";
import Title from "../theming/typography/Title";
import BodyText from "../theming/typography/BodyText";

// disclaimer:
// This About Page is not final and is a work in progress as we refine our product vision
export function AboutPage(): React.JSX.Element {
  const aboutPageUiState: AboutPageUiState = useSelector(
    selectAboutPageUiState
  );

  return (
    <AboutPageBase aboutPageUiState={aboutPageUiState} />
    // Other components can go here if needed
  );
}

function AboutPageBase({
  aboutPageUiState,
}: {
  aboutPageUiState: AboutPageUiState;
}): React.JSX.Element {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  if (aboutPageUiState.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      {/* Top Navigation */}
      <TopNavbar onSideBarOpened={setSidebarOpen} />

      {/* Sidebar Navigation */}
      <SideNavBar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        role="landlord"
      />

      {/* Main Content */}
      <Title level={1}>About Prop Manager</Title>

      <section className="app-description">
        <BodyText>
          Prop Manager is an all-in-one application for renters, agents, and
          landlords. This first-class tool reduces the manual work needed
          throughout the rental process — from first listing to ongoing tenancy.
          Here's how each type of user benefits:
        </BodyText>

        <UserDropdown title="Landlords">
          <BodyText>
            Manage multiple properties, track rent payments, and communicate
            directly with agents. Sign and review lease agreements and choose
            your preferred tenant.
          </BodyText>
        </UserDropdown>

        <UserDropdown title="Tenants">
          <BodyText>
            Find rental properties, apply, submit maintenance requests, and
            communicate with your agent. Receive reminders for rent payments and
            lease expirations.
          </BodyText>
        </UserDropdown>

        <UserDropdown title="Agents">
          <BodyText>
            List new properties, review applicants, and communicate with both
            tenants and landlords. Manage requests and schedule inspections
            efficiently.
          </BodyText>
        </UserDropdown>
      </section>
    </div>
  );
}
