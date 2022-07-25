import { useEffect, useState } from "react";

const getWindowWidth = () => {
  const windowWidth = window.innerWidth;
  return {
    windowWidth,
  };
}

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

// export const useImageSizeByWidth = () => {
//   const { windowWidth } = useWindowWidth();
  
//   const sizes = [
//     { name: "small", minWidth: 0, maxWidth: 420 },
//     { name: "medium", minWidth:421, maxWidth: 1200 },
//     { name: "large" , minWidth:1201, maxWidth: 99999}
//   ];
//   const filterSizes = sizes.filter(size => {
//     return windowWidth >= size.minWidth && windowWidth <= size.maxWidth;
//   })
//   console.log(filterSizes[0]?.name)

//   return filterSizes[0]?.name;
// }