import React from "react";
import { BackButtonIcon } from "/library-modules/theming/icons/BackButtonIcon";

// TODO: DraftListingPage is likely the actual listing page as well

export function DraftListingPage({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* TODO: change to server data */}
      <NavigationBar headingText="86 Fury Lane - Draft Property Listing" />
      <DraftListingPageContent
        number="86"
        street="Fury Lane"
        suburb="Toorak"
        state="VIC"
        postCode="3166"
        summaryDescription="The house of your dreams, yadda yadda yes this house is very lorem ipsum."
        propertyStatus={PropertyStatus.VACANT}
        propertyDescription="Fake property description"
      />
    </div>
  );
}

function DraftListingPageContent({
  number,
  street,
  suburb,
  state,
  postCode,
  summaryDescription,
  propertyStatus,
  propertyDescription,
  className = "",
}: {
  number: string;
  street: string;
  suburb: string;
  state: string;
  postCode: string;
  summaryDescription: string;
  propertyStatus: PropertyStatus;
  propertyDescription: string;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`${className}`}>
      <ListingSummary
        number={number}
        street={street}
        suburb={suburb}
        state={state}
        postCode={postCode}
        summaryDescription={summaryDescription}
        propertyStatus={propertyStatus}
      />
      <ImageCarousel className="mt-6" />
      <ListingDescription description={propertyDescription} />
    </div>
  );
}

function ImageCarousel({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return <div className={`h-[445px] w-[724px] bg-[#EEEEEE] ${className}`}>Image Carousel</div>;
}

function ListingDescription({
  description,
  className=""
} : {
  description: string,
  className?: string
}): React.JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="geist-semibold mb-1">Description</span>
      <span className="geist-regular text-[16px]">{description}</span>
    </div>
  );
}

function ListingSummary({
  number,
  street,
  suburb,
  state,
  postCode,
  summaryDescription,
  propertyStatus,
  className = "",
}: {
  number: string;
  street: string;
  suburb: string;
  state: string;
  postCode: string;
  summaryDescription: string;
  propertyStatus: PropertyStatus;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row items-center">
        <ListingSummaryAddress
          number={number}
          street={street}
          suburb={suburb}
          state={state}
          postCode={postCode}
          className="mr-6"
        />
        <ListingStatusPill propertyStatus={propertyStatus} />
      </div>

      <ListingSummaryDescription description={summaryDescription} />
    </div>
  );
}

function ListingSummaryAddress({
  number,
  street,
  suburb,
  state,
  postCode,
  className = "",
}: {
  number: string;
  street: string;
  suburb: string;
  state: string;
  postCode: string;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-row items-end ${className}`}>
      <span className="geist-semibold text-[20px] mr-3">{`${number} ${street}`}</span>
      <span className="geist-regular text-[17px]">{`${suburb}, ${state}, ${postCode}`}</span>
    </div>
  );
}

function ListingSummaryDescription({
  description,
  className = "",
}: {
  description: string;
  className?: string;
}): React.JSX.Element {
  return (
    <span className={`geist-regular text-(--body-tertiary) ${className}`}>
      {description}
    </span>
  );
}

function ListingStatusPill({
  propertyStatus,
  className = "",
}: {
  propertyStatus: PropertyStatus;
  className?: string;
}): React.JSX.Element {
  const text = (() => {
    switch (propertyStatus) {
      case PropertyStatus.VACANT:
        return "Vacant";
    }
  })();

  const color = (() => {
    switch (propertyStatus) {
      case PropertyStatus.VACANT:
        return "--status-green";
    }
  })();

  return (
    <span
      className={`px-5 py-0.5 h-min text-[12px] rounded-full bg-(${color}) ${className}`}
    >
      {text}
    </span>
  );
}

enum PropertyStatus {
  VACANT,
}

function NavigationBar({
  headingText,
  className = "",
}: {
  headingText: string;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <BackButtonIcon className="mr-3" />
      <NavigationBarHeading text={headingText} />
    </div>
  );
}

function NavigationBarHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}): React.JSX.Element {
  return <span className={`geist-semibold text-lg ${className}`}>{text}</span>;
}
