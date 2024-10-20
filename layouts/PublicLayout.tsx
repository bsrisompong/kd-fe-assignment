"use client";

import { AppShell, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHeart, IconPhotoSearch } from "@tabler/icons-react";

import { Header, NavBar } from "@/components";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const links = [
  {
    icon: <IconPhotoSearch className="search" />,
    link: "/",
    label: "Search",
    key: "search",
  },
  {
    icon: <IconHeart className="fav" />,
    link: "/favorites",
    label: "Favorites",
    key: "favorites",
  },
];

const PublicLayout = ({ children }: PublicLayoutProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 480, collapsed: { mobile: !opened, desktop: true } }}
      footer={{ height: 40 }}
    >
      <Header toggleSidebar={toggle} />
      <NavBar toggleSidebar={toggle} />
      <AppShell.Main miw={320}>{children}</AppShell.Main>
      <AppShell.Footer className="px-2 xs:px-4 py-2 bg-black border-none">
        <Text size="sm" c="dimmed">
          ABC LTD @ 2021
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
};

export default PublicLayout;
