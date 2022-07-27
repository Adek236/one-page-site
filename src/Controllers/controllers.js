import { useEffect, useState, useCallback } from "react";

export const useWindowWidth = (myRef) => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWindowWidth(myRef.current.offsetWidth);
  }, [myRef]);

  useEffect(() => {
    if (myRef.current) {
      setWindowWidth(myRef.current.offsetWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [myRef, handleResize]);

  return { windowWidth };
};

export const getImageSizeByWidth = (windowWidth) => {
  const sizes = [
    { name: "imgSmall", minWidth: 0, maxWidth: 640 },
    { name: "imgMedium", minWidth: 641, maxWidth: 1200 },
    { name: "imgLarge", minWidth: 1201, maxWidth: 99999 },
  ];
  const filterSizes = sizes.filter((size) => {
    return windowWidth >= size.minWidth && windowWidth <= size.maxWidth;
  });
  return filterSizes[0]?.name;
};
