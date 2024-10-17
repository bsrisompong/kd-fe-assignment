"use client";

import { Title } from "@mantine/core";
import { Masonry, RenderComponentProps } from "masonic";
import { IGif } from "@giphy/js-types";

import { useFavorites } from "@/features/favorites";
import { GIFItem } from "@/features/search";

import { useGetColumns } from "@/hooks";
import { NotFound } from "@/components";

export default function FavoritesPage() {
  const { columns } = useGetColumns();

  const { favorites, favoriteCount } = useFavorites();

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
      <div className="relative min-h-[calc(100dvh-100px)]">
        <div className="relative max-w-[1440px] mx-auto py-5 px-5">
          <Title className="mb-5">
            Favorites <span>({favoriteCount})</span>
          </Title>
          {!favoriteCount && <NotFound label="No Favorites" />}
          <Masonry<IGif>
            key={`favorites-${favoriteCount}`}
            items={favorites}
            columnCount={columns}
            columnGutter={20}
            render={(props) => renderItem(props)}
            overscanBy={5}
          />
        </div>
      </div>
    </>
  );
}
