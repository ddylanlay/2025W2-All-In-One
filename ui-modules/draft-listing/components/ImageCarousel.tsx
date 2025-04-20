import React from "react";

// TODO: Background colour is temporary
export function ImageCarousel({
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