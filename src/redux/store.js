import { configureStore } from "@reduxjs/toolkit";
import productsSlice  from "./productsSlice";
import favoritesSlice from "./favoritesSlice";
import basketSlice  from "./basketSlice";


export const store = configureStore({
    reducer:{
        products:productsSlice,
        favorites:favoritesSlice,
        basket:basketSlice,
    }
})