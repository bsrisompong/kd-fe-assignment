"use client";

import { useEffect, useMemo } from "react";
import { Group, LoadingOverlay } from "@mantine/core";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Masonry, RenderComponentProps } from "masonic";
import { IGif } from "@giphy/js-types";
import clsx from "clsx";

// hooks
import { useGetColumns, useQueryParams } from "@/hooks";
// apis
import { fetchSearchGiftsInfinite, fetchTrendingGiftsInfinite } from "../apis";
// components
import { BottomLoader, GIFItem } from "@/features/search";
import { NotFound, Searchbar } from "@/components";

import classes from "./SearchPage.module.css";

const LIMIT = 20;

export default function SearchPage() {
  const { columns } = useGetColumns();
  const { getQueryParams } = useQueryParams();
  const { search } = getQueryParams();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["trending-gifts", search],
      queryFn: (ctx) =>
        search
          ? fetchSearchGiftsInfinite({
              term: String(search),
              options: { limit: LIMIT, offset: ctx.pageParam },
            })
          : fetchTrendingGiftsInfinite({ offset: ctx.pageParam, limit: LIMIT }),
      getNextPageParam: (lastGroup) => {
        const _hasNextPage = lastGroup.rows.pagination?.total_count > lastGroup.nextOffset;
        return _hasNextPage ? lastGroup.nextOffset : undefined;
      },
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
        {...item}
      />
    );
  };

  return (
    <>
      <Group className={clsx(classes.searchWrapper)}>
        <Searchbar />
      </Group>
      <div className="relative min-h-[calc(100dvh-100px)]">
        <div className="relative max-w-[1440px] mx-auto">
          {!isFetching && !isFetchingNextPage && allItems.length === 0 && (
            <NotFound className="h-full" />
          )}
          <Masonry<IGif>
            key={String(search) || "trending"}
            items={allItems}
            columnCount={columns}
            columnGutter={20}
            render={(props) => renderItem(props)}
            overscanBy={5}
          />
          <BottomLoader visible={hasNextPage && isFetchingNextPage} />
        </div>
      </div>
      <LoadingOverlay
        visible={isLoading}
        loaderProps={{ type: "oval", size: "lg", color: "black" }}
      />
    </>
  );
}
