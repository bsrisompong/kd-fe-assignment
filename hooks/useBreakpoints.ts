import { useMediaQuery } from "@mantine/hooks";

export const useBreakpoints = () => {
  const isSmallMobile = useMediaQuery("(max-width: 420px)");
  const isMobile = useMediaQuery("(min-width: 421px) and (max-width: 480px)");
  const isTablet = useMediaQuery("(min-width: 481px) and (max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return { isSmallMobile, isMobile, isTablet, isDesktop };
};
