import React from "react";

export function ListingFeatures({
  featuresList,
  className = "",
}: {
  featuresList: string[];
  className?: string;
}): React.JSX.Element {
  return (
    <div className={className}>
      <span className="geist-semibold text-[18px] block mb-2">Features</span>

      <div className={`flex flex-row flex-wrap gap-y-2 w-[300px] ${className}`}>
        {featuresList.map((feature) => (
          <ListingFeaturesPill key={feature} text={feature} className="mr-2" />
        ))}
      </div>
      
    </div>
  );
}

function ListingFeaturesPill({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}): React.JSX.Element {
  return (
    <span
      className={`px-2 py-0.5 h-min text-[12px] bg-(--body-quaternary) rounded-full ${className}`}
    >
      {text}
    </span>
  );
}
