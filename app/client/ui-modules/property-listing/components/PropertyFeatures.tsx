import React from "react";

export function PropertyFeatures({
  featuresList,
  className = "",
}: {
  featuresList: string[];
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`w-[400px] ${className}`}>
      <Heading text="Features" className="block mb-2" />
      <FeaturesPillList featuresList={featuresList} />
    </div>
  );
}

function Heading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}): React.JSX.Element {
  return (
    <span className={`geist-semibold text-[18px] ${className}`}>{text}</span>
  );
}

function FeaturesPillList({
  featuresList,
  className = "",
}: {
  featuresList: string[];
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`flex flex-row flex-wrap gap-y-2 ${className}`}>
      {featuresList.map((feature) => (
        <FeaturesPill key={feature} text={feature} className="mr-2" />
      ))}
    </div>
  );
}

function FeaturesPill({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}): React.JSX.Element {
  return (
    <span
      className={`px-2 py-0.5 h-min text-[12px] bg-(--body-quaternary-color) rounded-full ${className}`}
    >
      {text}
    </span>
  );
}
