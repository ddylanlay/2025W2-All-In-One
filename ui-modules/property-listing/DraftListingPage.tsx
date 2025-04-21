import React from "react";
import { PropertyFeatures } from "/ui-modules/property-listing/components/PropertyFeatures";
import { ListingPropertyDetails } from "/ui-modules/property-listing/components/ListingPropertyDetails";
import { ImageCarousel } from "/ui-modules/property-listing/components/ImageCarousel";
import {
  ListingStatusPillState,
  ListingSummary,
} from "/ui-modules/property-listing/components/ListingSummary";
import { ListingNavbar } from "/ui-modules/property-listing/components/ListingNavbar";
import { ListingDescription } from "/ui-modules/property-listing/components/ListingDescription";
import {
  InspectionBookingList,
  InspectionBookingListUiState,
} from "/ui-modules/property-listing/components/InspectionBookingList";

// TODO: Improve the naming of props, areas -> propertyArea
// TODO: Change DraftListingPage to use server data
// TODO: Image carousel needs the arrows (animations can come later)

export function DraftListingPage({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      <ListingNavbar headingText="86 Fury Lane - Draft Property Listing" />
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
        imageUrls={
          [
            "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          ]
        }
        area="500m²"
        bathrooms="2"
        parking="2"
        bedrooms="4"
        price="$1500/mth"
        onBook={() => {}}
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
  inspectionBookingUiStateList,
  imageUrls,
  area,
  bathrooms,
  parking,
  bedrooms,
  price,
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
  inspectionBookingUiStateList: InspectionBookingListUiState[];
  imageUrls: string[]
  area: string;
  bathrooms: string;
  parking: string;
  bedrooms: string;
  price: string;
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
      <ImageCarousel imageUrls={imageUrls} />
      <ListingDescription description={propertyDescription} />
      <ListingPropertyDetails
        propertyType={propertyType}
        area={area}
        bathrooms={bathrooms}
        parking={parking}
        bedrooms={bedrooms}
        price={price}
      />
      <PropertyFeatures featuresList={propertyFeatures} className="w-[300px]" />
      <InspectionBookingList
        bookingUiStateList={inspectionBookingUiStateList}
        onBook={onBook}
      />
    </div>
  );
}
