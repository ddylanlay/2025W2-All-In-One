import React from "react";

export function ListingPropertyDetails({
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
