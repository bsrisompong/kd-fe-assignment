// src/features/favoritesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGif } from "@giphy/js-types";

interface FavoritesState {
  items: { [id: string]: IGif };
}

const initialState: FavoritesState = {
  items: {},
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IGif>) {
      const id = action.payload.id;
      if (id) {
        state.items[id] = action.payload;
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      delete state.items[action.payload];
    },
    toggleFavorite(state, action: PayloadAction<IGif>) {
      const id = action.payload.id;
      if (id) {
        if (state.items[id]) {
          delete state.items[id];
        } else {
          state.items[id] = action.payload;
        }
      }
    },
  },
});
export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
