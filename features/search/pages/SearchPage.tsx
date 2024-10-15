"use client";

import { useEffect, useMemo, useRef } from "react";
import { Container } from "@mantine/core";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";

// hooks
import { useBreakpoints } from "@/hooks";
// apis
import { fetchTrendingGiftsInfinite } from "../apis";
// components
import GIFItem from "../components/GIFItem";

import classes from "./SearchPage.module.css";

import { mockData } from "./mockData";

const LIMIT = 20;
// const GAP = 10;

const getColumnNumber = ({
  isSmallMobile,
  isMobile,
  isTablet,
  isDesktop,
}: {
  isSmallMobile?: boolean;
  isMobile?: boolean;
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
  const ref = useRef<HTMLDivElement>(null);
  const breakpoints = useBreakpoints();
  const columns = getColumnNumber({ ...breakpoints });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["trending-gifts"],
    queryFn: (ctx) => fetchTrendingGiftsInfinite({ offset: ctx.pageParam, limit: LIMIT }),
    getNextPageParam: (lastGroup) => lastGroup.nextOffset,
    initialPageParam: 0,
  });

  // const allItems = useMemo(() => data?.pages?.flatMap((page) => page.rows.data) || [], [data]);
  const allItems = useMemo(() => mockData?.data?.flatMap((page) => page) || [], [data]);

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allItems.length + 1 : allItems.length,
    getScrollElement: () => ref.current,
    estimateSize: (i) => Number(allItems[i]?.images?.fixed_width?.height) || 0,
    overscan: 5,
    // lanes: 4,
    lanes: columns,
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();
    if (!lastItem) return;

    if (lastItem.index >= allItems.length - 1 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allItems.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);

  const render = () => {
    // if (status === "pending") return <div>Loading...</div>;
    // if (status === "error") return <div>Error</div>;

    return (
      <div className={classes.container} ref={ref}>
        <div className={classes.gridContainer}>
          {allItems.map((item, index) => (
            <GIFItem
              key={item.id}
              imageUrl={item.images.fixed_width_downsampled?.url}
              imageWidth={Number(item.images.fixed_width_downsampled?.width)}
              imageHeight={Number(item.images.fixed_width_downsampled?.height)}
              altText={`GIF ${index}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Container size="100%" className="h-full" p={0} h="100%">
      {render()}
    </Container>
  );
}
