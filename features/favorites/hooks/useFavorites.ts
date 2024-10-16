import { GifID, IGif } from "@giphy/js-types";

import { useAppSelector, useAppDispatch } from "@/stores";
import { addFavorite, removeFavorite, toggleFavorite } from "@/features/favorites";

interface UseFavoritesResult {
  favorites: IGif[];
  favoriteCount: number;
  isFavorite: (id: GifID) => boolean;
  addFavorite: (gif: IGif) => void;
  removeFavorite: (id: GifID) => void;
  toggleFavorite: (gif: IGif) => void;
}

export const useFavorites = (): UseFavoritesResult => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.favorites.items);

  const favorites = Object.values(items);

  const favoriteCount = Object.keys(items).length;

  const isFavorite = (id: GifID): boolean => {
    return !!items[id];
  };

  const addToFavorites = (gif: IGif): void => {
    dispatch(addFavorite(gif));
  };

  const removeFromFavorites = (id: GifID): void => {
    dispatch(removeFavorite(id));
  };

  const toggleFavoriteStatus = (gif: IGif): void => {
    dispatch(toggleFavorite(gif));
  };

  return {
    favorites,
    favoriteCount,
    isFavorite,
    addFavorite: addToFavorites,
    removeFavorite: removeFromFavorites,
    toggleFavorite: toggleFavoriteStatus,
  };
};
