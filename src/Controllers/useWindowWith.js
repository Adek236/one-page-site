import { useEffect, useState } from "react";

// export default function useWindowWith () {
//   const [windowWith, setWindowWith] = useState(window.innerWidth)
  
//   console.log("0- ", windowWith)

//   useEffect(()=>{
//     function handleResize() {
//         console.log("resizee")
//         setWindowWith(prev => window.innerWidth);
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   },[]);

//   return windowWith;
// }

// export default useWindowWith;

function getWindowDimensions() {
    const width = window.innerWidth;
    return {
        width
    };
  }
  
  export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
  
    useEffect(() => {
      function handleResize() {
        const width2 = window.innerWidth;
        console.log("dd", width2)
        const elo = getWindowDimensions();
        setWindowDimensions(elo);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }