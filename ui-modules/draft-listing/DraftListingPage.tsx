import React from "react";
import { BackButtonIcon } from "/library-modules/theming/icons/BackButtonIcon";

// TODO: DraftListingPage is likely the actual listing page as well
// TODO: Use ui object instead of huge list of props
// TODO: Add a text prop to listing status pill to allow for custom text

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
        propertyType="Apartment"
        area="500m²"
        bathrooms="2"
        parking="2"
        bedrooms="4"
        price="$1500/mth"
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
  propertyType,
  area,
  bathrooms,
  parking,
  bedrooms,
  price,
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
  propertyType: string;
  area: string;
  bathrooms: string;
  parking: string;
  bedrooms: string;
  price: string;
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
      <ImageCarousel />
      <ListingDescription description={propertyDescription} />
      <PropertyDetails
        propertyType={propertyType}
        area={area}
        bathrooms={bathrooms}
        parking={parking}
        bedrooms={bedrooms}
        price={price}
      />
    </div>
  );
}

function PropertyDetails({
  propertyType,
  area,
  bathrooms,
  parking,
  bedrooms,
  price,
  className = "",
}: {
  propertyType: string;
  area: string;
  bathrooms: string;
  parking: string;
  bedrooms: string;
  price: string;
  className?: string;
}): React.JSX.Element {
  return (
    <div
      className={`grid grid-cols-3 grid-rows-3 gap-y-4 w-[300px] ${className}`}
    >
      <PropertyDetailEntry label="Type" text={propertyType} />
      <PropertyDetailEntry label="Area" text={area} className="col-span-2" />

      <PropertyDetailEntry label="Bathrooms" text={bathrooms} />
      <PropertyDetailEntry label="Parking" text={parking} />
      <PropertyDetailEntry label="Bedrooms" text={bedrooms} />

      <PropertyDetailEntry
        label="Price"
        text={price}
        textColorCssVar="--active-primary"
        className="col-span-full"
      />
    </div>
  );
}

function PropertyDetailEntry({
  label,
  text,
  textColorCssVar,
  className = "",
}: {
  label: string;
  text: string;
  textColorCssVar?: string;
  className?: string;
}): React.JSX.Element {
  const textColorClassName = textColorCssVar ? `text-(${textColorCssVar})` : "";

  return (
    <div className={`flex flex-col ${className}`}>
      <span className="geist-regular text-[14px] text-(--body-secondary)">
        {label}
      </span>
      <span className={`geist-medium text-[16px] ${textColorClassName}`}>
        {text}
      </span>
    </div>
  );
}

function ImageCarousel({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`h-[445px] w-[724px] bg-[#EEEEEE] ${className}`}>
      Image Carousel
    </div>
  );
}

function ListingDescription({
  description,
  className = "",
}: {
  description: string;
  className?: string;
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
