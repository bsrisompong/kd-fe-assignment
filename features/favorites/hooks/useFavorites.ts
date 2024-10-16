import { IGif } from "@giphy/js-types";

import { useAppSelector, useAppDispatch } from "@/stores";
import { addFavorite, removeFavorite, toggleFavorite } from "@/features/favorites";

interface UseFavoritesResult {
  favorites: IGif[];
  isFavorite: (id: string) => boolean;
  addFavorite: (gif: IGif) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (gif: IGif) => void;
}

export const useFavorites = (): UseFavoritesResult => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.favorites.items);

  const favorites = Object.values(items);

  const isFavorite = (id: string): boolean => {
    return !!items[id];
  };

  const addToFavorites = (gif: IGif): void => {
    dispatch(addFavorite(gif));
  };

  const removeFromFavorites = (id: string): void => {
    dispatch(removeFavorite(id));
  };

  const toggleFavoriteStatus = (gif: IGif): void => {
    dispatch(toggleFavorite(gif));
  };

  return {
    favorites,
    isFavorite,
    addFavorite: addToFavorites,
    removeFavorite: removeFromFavorites,
    toggleFavorite: toggleFavoriteStatus,
  };
};
