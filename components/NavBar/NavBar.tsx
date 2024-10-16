import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, AppShell, Badge } from "@mantine/core";
import clsx from "clsx";

import { useFavorites } from "@/features/favorites";
import { links } from "@/layouts/PublicLayout";
import { checkLinkActive } from "@/utils";

import classes from "./NavBar.module.css";

interface NavBarProps {
  toggleSidebar: () => void;
}

const NavBar = ({ toggleSidebar }: NavBarProps) => {
  const pathname = usePathname();

  const { favoriteCount } = useFavorites();

  const injectedLinks = useMemo(() => {
    return links.map((link) => ({
      ...link,
      count: link.key === "favorites" ? favoriteCount : undefined,
    }));
  }, [favoriteCount]);
  return (
    <AppShell.Navbar p="md">
      {injectedLinks.map((link) => (
        <Anchor
          component={Link}
          key={link.label}
          href={link.link}
          className={clsx(classes.link, {
            [classes.active]: checkLinkActive(link.link, pathname),
          })}
          onClick={toggleSidebar}
        >
          {link.icon}
          {link.label}
          {link.count && (
            <Badge size="lg" circle color="red">
              {link.count}
            </Badge>
          )}
        </Anchor>
      ))}
    </AppShell.Navbar>
  );
};

export default NavBar;
