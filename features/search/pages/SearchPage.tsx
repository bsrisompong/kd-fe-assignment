"use client";

import { useEffect, useMemo } from "react";
import { Container, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
// import { useVirtualizer } from "@tanstack/react-virtual";
import { IGif } from "@giphy/js-types";
import { Masonry, RenderComponentProps, useContainerPosition, usePositioner } from "masonic";

// hooks
import { useBreakpoints, useQueryParams } from "@/hooks";
// apis
import { fetchTrendingGiftsInfinite } from "../apis";
// components
import { GIFItem } from "@/features/search";
import { Searchbar } from "@/components";

import classes from "./SearchPage.module.css";

const LIMIT = 20;

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

export default function HomePage() {
  const breakpoints = useBreakpoints();
  const columns = getColumnNumber({ ...breakpoints });

  const { getQueryParams } = useQueryParams();
  console.log(getQueryParams());

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["trending-gifts"],
    queryFn: (ctx) => fetchTrendingGiftsInfinite({ offset: ctx.pageParam, limit: LIMIT }),
    getNextPageParam: (lastGroup) => lastGroup.nextOffset,
    initialPageParam: 0,
  });

  const allItems = useMemo(() => data?.pages?.flatMap((page) => page.rows.data) || [], [data]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.scrollHeight - 100;
      if (scrollPosition >= threshold && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const renderItem = (props: RenderComponentProps<IGif>) => {
    const { data: item } = props;
    return (
      <GIFItem
        key={item.id}
        imageUrl={item?.images?.downsized?.url}
        imageWidth={Number(item?.images?.downsized?.width)}
        imageHeight={Number(item?.images?.downsized?.height)}
        altText={item.title}
      />
    );
  };

  return (
    <Container size="100%" className="h-full w-full relative p-0">
      <Group classNames={{ root: classes.bgEffect }}>
        <Searchbar />
      </Group>
      <Masonry<IGif>
        items={allItems}
        columnCount={columns}
        columnGutter={10}
        render={(props) => renderItem(props)}
        overscanBy={5}
      />
      {status === "pending" && (
        <div className="position-absolute right-1/2 left-1/2 bottom-20 z-50 ">Loading...</div>
      )}
    </Container>
  );
}
