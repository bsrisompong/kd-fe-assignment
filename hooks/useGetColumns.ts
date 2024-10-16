import { useBreakpoints } from "./useBreakpoints";

const getColumnNumber = ({
  isSmallMobile,
  isMobile,
  isTablet,
  isDesktop,
}: {
  isSmallMobile?: boolean;
  isMobile?: boolean;
  isSmallTablet?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}) => {
  if (isSmallMobile) return 1;
  if (isMobile) return 2;
  if (isTablet) return 3;
  if (isDesktop) return 4;
  return 1;
};

export const useGetColumns = () => {
  const breakpoints = useBreakpoints();
  const columns = getColumnNumber({ ...breakpoints });
  return { columns };
};
