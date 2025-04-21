import { useEffect, useState } from "react";

/**
 * Preload a list of images so that they are ready to use in a component.
 * @param imageUrlList list of image urls to preload
 * @returns `[whether the images have finished loading, any urls that failed to load]`
 */
export function useImagePreload(imageUrlList: string[]): [boolean, string[]] {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [failedLoadUrls, setFailedLoadUrls] = useState<string[]>([]);

  useEffect(() => {
    const preloadImages = async () => {
      const promiseList = imageUrlList.map((imageUrl) =>
        preloadImage(imageUrl)
      );
      const results = await Promise.allSettled(promiseList);

      const failedLoadUrls = results
        .map((res) => {
          if (res.status === "rejected") {
            return res.reason;
          }
        })
        .filter((value) => value !== undefined);

      setFailedLoadUrls(failedLoadUrls);
      setImagesLoaded(true);
    };
    preloadImages();
  }, [imageUrlList]);

  return [imagesLoaded, failedLoadUrls];
}

function preloadImage(imageUrl: string): Promise<string> {
  const img = new Image();
  img.src = imageUrl;

  return new Promise((resolve, reject) => {
    img.onload = () => resolve(imageUrl);
    img.onerror = () => reject(imageUrl);
  });
}
