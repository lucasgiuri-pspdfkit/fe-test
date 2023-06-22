import { useEffect, useState } from "react";

const screens = {
  md: "441px",
  lg: "745px",
  xl: "991px",
};

export type ScreenSize = "sm" | keyof typeof screens;

const useScreenSize = () => {
  const [device, setDevice] = useState<ScreenSize>("sm");

  useEffect(() => {
    // Subtract one pixel from the `md` size to define the `max-width` for mobile,
    // as `min-width` and `max-width` are inclusive
    const mobileMaxWidthSize = `${parseInt(screens.md, 10) - 1}px`;
    const mediaQueryMobile = window.matchMedia(
      `(max-width: ${mobileMaxWidthSize})`
    );
    const tabletMaxWidthSize = `${parseInt(screens.xl, 10) - 1}px`;
    const mediaQueryTablet = window.matchMedia(
      `(min-width: ${screens.md}) and (max-width: ${tabletMaxWidthSize})`
    );
    const mediaQueryDesktop = window.matchMedia(`(min-width: ${screens.xl})`);
    const handleMediaQuery = () => {
      const isMobile = mediaQueryMobile.matches;
      const isTablet = mediaQueryTablet.matches;
      const isDesktop = mediaQueryDesktop.matches;

      if (isMobile) setDevice("sm");
      else if (isTablet) setDevice("md");
      else if (isDesktop) setDevice("xl");
    };

    handleMediaQuery();

    mediaQueryMobile.addEventListener("change", handleMediaQuery);
    mediaQueryTablet.addEventListener("change", handleMediaQuery);
    mediaQueryDesktop.addEventListener("change", handleMediaQuery);

    return () => {
      mediaQueryMobile.removeEventListener("change", handleMediaQuery);
      mediaQueryTablet.removeEventListener("change", handleMediaQuery);
      mediaQueryDesktop.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  return { device };
};

export default useScreenSize;
