import { useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ActionIcon, Anchor, AppShell, Badge, Group, Text, Title } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import clsx from "clsx";

import { links } from "@/layouts/PublicLayout";
import { useFavorites } from "@/features/favorites";
import { checkLinkActive } from "@/utils";
import { Giphy as GiphyIcon } from "@/assets";

import classes from "./Header.module.css";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const { favoriteCount } = useFavorites();

  const injectedLinks = useMemo(() => {
    return links.map((link) => ({
      ...link,
      count: link.key === "favorites" ? favoriteCount : undefined,
    }));
  }, [favoriteCount]);

  return (
    <AppShell.Header className={classes.container}>
      <Group className="flex-start xs:justify-between w-full gap-5">
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
        {/* <Searchbar
          flex={1}
          size="md"
          classNames={{ input: "border-none rounded-full", wrapper: "h-full" }}
        /> */}
        <Group className={classes.linkWrapper}>
          {injectedLinks.map((link) => (
            <Anchor
              component={Link}
              href={link.link}
              key={link.label}
              className={clsx(classes.link, {
                [classes.active]: checkLinkActive(pathname, link.link),
              })}
              style={{
                textDecoration: "none",
              }}
            >
              {link.icon}
              {link.label}
              {!!link.count && (
                <Badge color="red" size="lg" circle>
                  {link.count}
                </Badge>
              )}
            </Anchor>
          ))}
        </Group>
      </Group>
    </AppShell.Header>
  );
};

export default Header;
