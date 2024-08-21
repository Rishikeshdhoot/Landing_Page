import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    setWidth(newWidth);
    setHeight(newHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return { width, height };
};

export default useWindowResize;
