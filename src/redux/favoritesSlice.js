import { createSlice } from "@reduxjs/toolkit";

export const favoritesSelector = (state) => state.favorites.items;

const savedFavs = JSON.parse(localStorage.getItem("favorites"))

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: savedFavs ? savedFavs : [],
    status: "idle",
    error: null,
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("favorites",JSON.stringify(state.items))
    },
    removeFromFavorites: (state, action) => {
      const index = state.items.findIndex((item)=> item.id === action.payload.id);
      if (index > -1) {
        // only splice array when item is found
        state.items.splice(index, 1); // 2nd parameter means remove one item only
        localStorage.setItem("favorites",JSON.stringify(state.items))
      }
     
    },
  },
  extraReducers: (builder) => {},
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
