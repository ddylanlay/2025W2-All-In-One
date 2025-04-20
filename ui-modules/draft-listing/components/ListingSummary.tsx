import React from "react";

export enum ListingStatusPillState {
  VACANT,
}

export function ListingSummary({
  streetNumber,
  street,
  suburb,
  province,
  postcode,
  summaryDescription,
  listingStatusText,
  listingStatusPillState,
  className = "",
}: {
  streetNumber: string;
  street: string;
  suburb: string;
  province: string;
  postcode: string;
  summaryDescription: string;
  listingStatusText: string;
  listingStatusPillState: ListingStatusPillState;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row items-center">
        <Address
          streetNumber={streetNumber}
          street={street}
          suburb={suburb}
          province={province}
          postcode={postcode}
          className="mr-6"
        />
        <StatusPill text={listingStatusText} state={listingStatusPillState} />
      </div>

      <Description description={summaryDescription} />
    </div>
  );
}

function Address({
  streetNumber,
  street,
  suburb,
  province,
  postcode,
  className = "",
}: {
  streetNumber: string;
  street: string;
  suburb: string;
  province: string;
  postcode: string;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-row items-end ${className}`}>
      <span className="geist-semibold text-[20px] mr-3">{`${streetNumber} ${street}`}</span>
      <span className="geist-regular text-[17px]">{`${suburb}, ${province}, ${postcode}`}</span>
    </div>
  );
}

function Description({
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

function StatusPill({
  text,
  state,
  className = "",
}: {
  text: string;
  state: ListingStatusPillState;
  className?: string;
}): React.JSX.Element {
  const bgColorClass = (() => {
    switch (state) {
      case ListingStatusPillState.VACANT:
        return "bg-(--status-green)";
    }
  })();

  return (
    <span
      className={`px-5 py-0.5 h-min text-[12px] rounded-full ${bgColorClass} ${className}`}
    >
      {text}
    </span>
  );
}
