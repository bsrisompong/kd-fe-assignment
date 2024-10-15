import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, AppShell } from "@mantine/core";
import clsx from "clsx";

import { links } from "@/layouts/PublicLayout";
import { checkLinkActive } from "@/utils";

import classes from "./NavBar.module.css";

interface NavBarProps {
  toggleSidebar: () => void;
}

const NavBar = ({ toggleSidebar }: NavBarProps) => {
  const pathname = usePathname();

  return (
    <AppShell.Navbar p="md">
      {links.map((link) => (
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
        </Anchor>
      ))}
    </AppShell.Navbar>
  );
};

export default NavBar;
