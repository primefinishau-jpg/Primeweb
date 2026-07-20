import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1280;

export function useDevice() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const update = () => setWidth(window.innerWidth);

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    width,
    isMobile: width < MOBILE_BREAKPOINT,
    isTablet:
      width >= MOBILE_BREAKPOINT &&
      width < TABLET_BREAKPOINT,
    isDesktop: width >= TABLET_BREAKPOINT,
  };
}