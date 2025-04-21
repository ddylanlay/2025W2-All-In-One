import React from "react";
import { useImagePreload } from "/ui-modules/hooks/useImagePreload";

export function ImageCarousel({
  imageUrls,
  className = "",
}: {
  imageUrls: string[];
  className?: string;
}): React.JSX.Element {
  const [imagesLoaded, failedUrls] = useImagePreload(imageUrls);
  const images = imageUrls.map((url) => (
    <img key={url} src={url} className="h-[445px] w-[724px]" />
  ));

  return (
    <div className={`h-[445px] w-[724px] bg-[#EEEEEE] ${className}`}>
      {!imagesLoaded ? "Loading..." : images}
      {failedUrls.length > 0 ? "Some failed images" : "No failed images"}
    </div>
  );
}
