import React, { useEffect } from "react";
import type { AppDispatch } from "/app/store"; 
import { AboutPageUiState } from "./state/AboutPageUiState";
import { loadTasks, selectAboutPageUiState } from "./state/reducers/about-page-slice";
import { useDispatch, useSelector } from "react-redux";
import { UserDropdown } from "/ui-modules/shared/UserDropdown";

export function AboutPage(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const AboutPageUiState: AboutPageUiState = useSelector(selectAboutPageUiState)

  useEffect(() => {
    dispatch(loadTasks());
  }, []);


  return (
    <AboutPageBase
      aboutPageUiState={AboutPageUiState}
    />
    // Some other components here too that would also receive aboutPageUiState
  );
}

function AboutPageBase({
  aboutPageUiState
}: {
  aboutPageUiState: AboutPageUiState;
}): React.JSX.Element {
  if (aboutPageUiState.isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="p-5">

        {/* This should be a seperate react component */}
        <h1 className="title-example-style">About Prop Manager</h1>

        <section className="app-description">
          <p>
            Prop manager is an all in one application for renters, agents and landlords.
            This first class tool will reduce the manual work needed from tenants, agents 
            and landlords throughout the rental process, from first listing to ongoing renting.
            Here is how each type of user can benefit from using our app: 
          </p>

        {/* Landlord Dropdown */}
        <UserDropdown title="Landlords">
          <p>
            As a landlord, you can manage multiple properties, track rent payments,
            and communicate directly with your agent. The app allows you to sign and review
            lease agreements and select your preffered tenant.
          </p>
        </UserDropdown>

        {/* Tenant Dropdown */}
        <UserDropdown title='Tenants'>
          <p>
            Tenants can use the app to find potential rental properties, apply for them, submit maintenance requests, and
            communicate with their agent. The app also provides reminders for
            upcoming rent payments and lease expiration dates.
          </p>
        </UserDropdown>          

        {/* Agent Dropdown */}
        <UserDropdown title='Agents'>
          <p>
            Agents use the app to manage their listings. They can list a new property for rental, review and select an applicant 
            and communicate with tenants and landlords. The app helps agents manage requests and schedule upcoming inspections.
          </p>
        </UserDropdown>        

        </section>
      </div>
    );
  }
}
