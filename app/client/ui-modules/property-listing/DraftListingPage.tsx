import React from "react";
import { PropertyFeatures } from "./components/PropertyFeatures";
import { ListingPropertyDetails } from "./components/ListingPropertyDetails";
import {
  ListingStatusPillState,
  ListingSummary,
} from "./components/ListingSummary";
import { ListingNavbar } from "./components/ListingNavbar";
import { ListingDescription } from "./components/ListingDescription";
import {
  InspectionBookingList,
  InspectionBookingListUiState,
} from "./components/InspectionBookingList";
import { LeftCircularArrowIcon } from "../theming/icons/LeftCircularArrowIcon";
import { RightCircularArrowIcon } from "../theming/icons/RightCircularArrowIcon";
import { ImageCarousel } from "../theming/components/ImageCarousel";

export function DraftListingPage({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      <ListingNavbar
        headingText="86 Fury Lane - Draft Property Listing"
        onBack={() => {
          console.log("back pressed");
        }}
      />
      <DraftListingPageContent
        streetNumber="86"
        street="Fury Lane"
        suburb="Toorak"
        province="VIC"
        postcode="3166"
        listingStatusText="Vacant"
        listingStatusPillState={ListingStatusPillState.VACANT}
        summaryDescription="The house of your dreams, yadda yadda yes this house is very lorem ipsum."
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
        onBook={(index: number) => {
          console.log(`booking button ${index} pressed`);
        }}
      />
    </div>
  );
}

function DraftListingPageContent({
  streetNumber,
  street,
  suburb,
  province,
  postcode,
  listingStatusText,
  listingStatusPillState,
  summaryDescription,
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
  onBook,
  className = "",
}: {
  streetNumber: string;
  street: string;
  suburb: string;
  province: string;
  postcode: string;
  listingStatusText: string;
  listingStatusPillState: ListingStatusPillState;
  summaryDescription: string;
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
  onBook: (index: number) => void;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`${className}`}>
      <ListingSummary
        streetNumber={streetNumber}
        street={street}
        suburb={suburb}
        province={province}
        postcode={postcode}
        summaryDescription={summaryDescription}
        listingStatusText={listingStatusText}
        listingStatusPillState={listingStatusPillState}
      />
      <ImageCarousel
        imageUrls={listingImageUrls}
        leftArrowIcon={<LeftCircularArrowIcon />}
        rightArrowIcon={<RightCircularArrowIcon />}
      />
      <ListingDescription description={propertyDescription} />
      <ListingPropertyDetails
        propertyType={propertyType}
        area={propertyLandArea}
        bathrooms={propertyBathrooms}
        parking={propertyParkingSpaces}
        bedrooms={propertyBedrooms}
        price={propertyPrice}
      />
      <PropertyFeatures featuresList={propertyFeatures} className="w-[300px]" />
      <InspectionBookingList
        bookingUiStateList={inspectionBookingUiStateList}
        onBook={onBook}
      />
    </div>
  );
}
