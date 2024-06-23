import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProductsAsync = createAsyncThunk("products/getProductsAsync",async()=> {
    const res = await axios.get("https://66777142145714a1bd74bfb9.mockapi.io/api/v1/products")
    return res.data
} )


export const selectProducts = (state) => state.products.items
export const selectProductsStatus = (state) => state.products.status
export const selectProductsError = (state) => state.products.error


export const productsSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        status:"idle",
        error:null
    },

    reducers:{

    },
    extraReducers:(builder)=> {
        builder
        .addCase(getProductsAsync.pending, (state,action)=> {
            state.status = "loading"
        })
        .addCase(getProductsAsync.rejected, (state,action)=> {
            state.status = "failed"
            state.error = action.error.message
            console.log(action.error.message)
        })
        .addCase(getProductsAsync.fulfilled, (state,action)=> {
            state.status = "succeeded"
            state.items = action.payload
        })
    }
})


export default productsSlice.reducer