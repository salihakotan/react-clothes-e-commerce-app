import { configureStore } from "@reduxjs/toolkit";
import productsSlice  from "./productsSlice";
import favoritesSlice from "./favoritesSlice";
import basketSlice  from "./basketSlice";
import ordersSlice from "./ordersSlice";


export const store = configureStore({
    reducer:{
        products:productsSlice,
        favorites:favoritesSlice,
        orders:ordersSlice,
        basket:basketSlice,
    }
})