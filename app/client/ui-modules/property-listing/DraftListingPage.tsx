import React from "react";
import { PropertyFeatures } from "./components/PropertyFeatures";
import { ListingPropertyDetails } from "./components/ListingPropertyDetails";
import {
  PropertyStatusPillVariant,
  ListingSummary,
} from "./components/ListingSummary";
import { ListingDescription } from "./components/ListingDescription";
import { LeftCircularArrowIcon } from "../theming/icons/LeftCircularArrowIcon";
import { RightCircularArrowIcon } from "../theming/icons/RightCircularArrowIcon";
import { ImageCarousel } from "../theming/components/ImageCarousel";
import {
  InspectionBookingListUiState,
  PropertyInspections,
} from "/app/client/ui-modules/property-listing/components/PropertyInspections";
import { ApplyButton } from "/app/client/ui-modules/property-listing/components/ApplyButton";
import { ContactAgentButton } from "/app/client/ui-modules/property-listing/components/ContactAgentButton";
import {
  ListingStatusPill,
  ListingStatusPillVariant,
} from "/app/client/ui-modules/property-listing/components/ListingStatusPill";
import { BackLink } from "/app/client/ui-modules/theming/components/BackLink";
import { BackButtonIcon } from "/app/client/ui-modules/theming/icons/BackButtonIcon";
import { twMerge } from "tailwind-merge";

export function DraftListingPage({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <DraftListingPageContent
      streetNumber="86"
      street="Fury Lane"
      suburb="Toorak"
      province="VIC"
      postcode="3166"
      summaryDescription="The house of your dreams, yadda yadda yes this house is very lorem ipsum."
      propertyStatusText="Vacant"
      propertyStatusPillVariant={PropertyStatusPillVariant.VACANT}
      propertyDescription="Fake property description"
      propertyFeatures={[
        "Pool",
        "Gym",
        "Garage",
        "Pet friendly",
        "Washing machine",
      ]}
      propertyType="Apartment"
      propertyLandArea="500m²"
      propertyBathrooms="2"
      propertyParkingSpaces="2"
      propertyBedrooms="4"
      propertyPrice="$1500/mth"
      inspectionBookingUiStateList={[
        {
          date: "21st Jan 2025",
          startingTime: "11:25pm",
          endingTime: "11:55pm",
        },
        {
          date: "22nd Jan 2025",
          startingTime: "1:20pm",
          endingTime: "1:50pm",
        },
      ]}
      listingImageUrls={[
        "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
      ]}
      listingStatusText="DRAFT LISTING"
      listingStatusPillVariant={ListingStatusPillVariant.DRAFT}
      onBack={() => {
        console.log("back button pressed");
      }}
      onBook={(index: number) => {
        console.log(`booking button ${index} pressed`);
      }}
      onApply={() => {
        console.log("applied!");
      }}
      onContactAgent={() => console.log("contacting agent!")}
      className={className}
    />
  );
}

function DraftListingPageContent({
  streetNumber,
  street,
  suburb,
  province,
  postcode,
  summaryDescription,
  propertyStatusText,
  propertyStatusPillVariant,
  propertyDescription,
  propertyFeatures,
  propertyType,
  propertyLandArea,
  propertyBathrooms,
  propertyParkingSpaces,
  propertyBedrooms,
  propertyPrice,
  inspectionBookingUiStateList,
  listingImageUrls,
  listingStatusText,
  listingStatusPillVariant,
  onBack,
  onBook,
  onApply,
  onContactAgent,
  className = "",
}: {
  streetNumber: string;
  street: string;
  suburb: string;
  province: string;
  postcode: string;
  summaryDescription: string;
  propertyStatusText: string;
  propertyStatusPillVariant: PropertyStatusPillVariant;
  propertyDescription: string;
  propertyFeatures: string[];
  propertyType: string;
  propertyLandArea: string;
  propertyBathrooms: string;
  propertyParkingSpaces: string;
  propertyBedrooms: string;
  propertyPrice: string;
  inspectionBookingUiStateList: InspectionBookingListUiState[];
  listingImageUrls: string[];
  listingStatusText: string;
  listingStatusPillVariant: ListingStatusPillVariant;
  onBack: () => void;
  onBook: (index: number) => void;
  onApply: () => void;
  onContactAgent: () => void;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={className}>
      <TopBar
        listingStatusText={listingStatusText}
        listingStatusPillVariant={listingStatusPillVariant}
        onBack={onBack}
      />
      <ListingHero
        streetNumber={streetNumber}
        street={street}
        suburb={suburb}
        province={province}
        postcode={postcode}
        summaryDescription={summaryDescription}
        propertyStatusText={propertyStatusText}
        propertyStatusPillVariant={propertyStatusPillVariant}
        propertyType={propertyType}
        propertyLandArea={propertyLandArea}
        propertyBathrooms={propertyBathrooms}
        propertyParkingSpaces={propertyParkingSpaces}
        propertyBedrooms={propertyBedrooms}
        propertyPrice={propertyPrice}
        listingImageUrls={listingImageUrls}
        onApply={onApply}
        onContactAgent={onContactAgent}
      />
      <ListingDetails
        propertyDescription={propertyDescription}
        inspectionBookingUiStateList={inspectionBookingUiStateList}
        onBook={onBook}
        propertyFeatures={propertyFeatures}
      />
    </div>
  );
}

function TopBar({
  listingStatusText,
  listingStatusPillVariant,
  onBack,
  className = "",
}: {
  listingStatusText: string;
  listingStatusPillVariant: ListingStatusPillVariant;
  onBack: () => void;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={twMerge("flex items-start", className)}>
      <BackLink
        label="Back to Properties"
        backButtonIcon={<BackButtonIcon />}
        onClick={onBack}
        className="mr-auto"
      />
      <ListingStatusPill
        text={listingStatusText}
        variant={listingStatusPillVariant}
      />
    </div>
  );
}

function ListingHero({
  className = "",
  streetNumber,
  street,
  suburb,
  province,
  postcode,
  summaryDescription,
  propertyStatusText,
  propertyStatusPillVariant,
  propertyType,
  propertyLandArea,
  propertyBathrooms,
  propertyParkingSpaces,
  propertyBedrooms,
  propertyPrice,
  listingImageUrls,
  onApply,
  onContactAgent,
}: {
  className?: string;
  streetNumber: string;
  street: string;
  suburb: string;
  province: string;
  postcode: string;
  summaryDescription: string;
  propertyStatusText: string;
  propertyStatusPillVariant: PropertyStatusPillVariant;
  propertyType: string;
  propertyLandArea: string;
  propertyBathrooms: string;
  propertyParkingSpaces: string;
  propertyBedrooms: string;
  propertyPrice: string;
  listingImageUrls: string[];
  onApply: () => void;
  onContactAgent: () => void;
}): React.JSX.Element {
  return (
    <div className={twMerge("flex", className)}>
      <ImageCarousel
        imageUrls={listingImageUrls}
        leftArrowIcon={<LeftCircularArrowIcon />}
        rightArrowIcon={<RightCircularArrowIcon />}
      />
      <div className="flex flex-col">
        <ListingSummary
          streetNumber={streetNumber}
          street={street}
          suburb={suburb}
          province={province}
          postcode={postcode}
          summaryDescription={summaryDescription}
          propertyStatusText={propertyStatusText}
          propertyStatusPillVariant={propertyStatusPillVariant}
        />
        <ListingPropertyDetails
          propertyType={propertyType}
          area={propertyLandArea}
          bathrooms={propertyBathrooms}
          parking={propertyParkingSpaces}
          bedrooms={propertyBedrooms}
          price={propertyPrice}
        />
        <div className="inline-block">
          <ApplyButton onClick={onApply} />
          <ContactAgentButton onClick={onContactAgent} />
        </div>
      </div>
    </div>
  );
}

function ListingDetails({
  propertyDescription,
  inspectionBookingUiStateList,
  onBook,
  propertyFeatures,
  className = "",
}: {
  propertyDescription: string;
  inspectionBookingUiStateList: InspectionBookingListUiState[];
  onBook: (index: number) => void;
  propertyFeatures: string[];
  className?: string;
}): React.JSX.Element {
  return (
    <div className={twMerge("flex", className)}>
      <div className="flex flex-col">
        <ListingDescription description={propertyDescription} />
        <PropertyInspections
          bookingUiStateList={inspectionBookingUiStateList}
          onBook={onBook}
        />
      </div>

      <div className="flex flex-col">
        <PropertyFeatures featuresList={propertyFeatures} />
      </div>
    </div>
  );
}
