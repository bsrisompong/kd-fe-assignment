export const checkLinkActive = (pathname: string, link: string) => {
  if (link === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(link);
};
