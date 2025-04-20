import React from "react";
import { ListingFeatures } from "/ui-modules/draft-listing/components/ListingFeatures";
import { ListingPropertyDetails } from "/ui-modules/draft-listing/components/ListingPropertyDetails";
import { ImageCarousel } from "/ui-modules/draft-listing/components/ImageCarousel";
import { ListingStatusPillState, ListingSummary } from "/ui-modules/draft-listing/components/ListingSummary";
import { ListingNavbar } from "/ui-modules/draft-listing/components/ListingNavbar";
import { ListingDescription } from "/ui-modules/draft-listing/components/ListingDescription";

// TODO: DraftListingPage is likely the actual listing page as well
// TODO: Use ui object instead of huge list of props
// TODO: Change DraftListingPage to use server data

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
        listingFeatures={["Pool", "Gym", "Garage", "Pet friendly", "Washing machine"]}
        listingStatusText="Vacant"
        listingStatusPillState={ListingStatusPillState.VACANT}
        summaryDescription="The house of your dreams, yadda yadda yes this house is very lorem ipsum."
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
  streetNumber,
  street,
  suburb,
  province,
  postcode,
  listingFeatures,
  listingStatusText,
  listingStatusPillState,
  summaryDescription,
  propertyDescription,
  propertyType,
  area,
  bathrooms,
  parking,
  bedrooms,
  price,
  className = "",
}: {
  streetNumber: string;
  street: string;
  suburb: string;
  province: string;
  postcode: string;
  listingFeatures: string[];
  listingStatusText: string;
  listingStatusPillState: ListingStatusPillState;
  summaryDescription: string;
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
        streetNumber={streetNumber}
        street={street}
        suburb={suburb}
        province={province}
        postcode={postcode}
        summaryDescription={summaryDescription}
        listingStatusText={listingStatusText}
        listingStatusPillState={listingStatusPillState}
      />
      <ImageCarousel />
      <ListingDescription description={propertyDescription} />
      <ListingPropertyDetails
        propertyType={propertyType}
        area={area}
        bathrooms={bathrooms}
        parking={parking}
        bedrooms={bedrooms}
        price={price}
      />
      <ListingFeatures featuresList={listingFeatures} />
    </div>
  );
}





