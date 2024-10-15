import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ActionIcon, Anchor, AppShell, Group, Text, Title } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import clsx from "clsx";

import { links } from "@/layouts/PublicLayout";
import { Giphy as GiphyIcon } from "@/assets";
import { checkLinkActive } from "@/utils";

import classes from "./Header.module.css";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <AppShell.Header className={classes.container}>
      <Group className="flex-start xs:justify-between w-full">
        <ActionIcon
          className="xs:hidden ml-4"
          variant="outline"
          color="default"
          size="lg"
          onClick={toggleSidebar}
        >
          <IconMenu2 />
        </ActionIcon>
        <Group className={classes.logoWrapper} onClick={() => router.push("/")}>
          <GiphyIcon />
          <Title>
            GIPHY <Text>Search</Text>
          </Title>
        </Group>
        <Group className={classes.linkWrapper}>
          {links.map((link) => (
            <Anchor
              component={Link}
              href={link.link}
              key={link.label}
              className={clsx(classes.link, {
                [classes.active]: checkLinkActive(pathname, link.link),
              })}
            >
              {link.icon}
              {link.label}
            </Anchor>
          ))}
        </Group>
      </Group>
    </AppShell.Header>
  );
};

export default Header;
