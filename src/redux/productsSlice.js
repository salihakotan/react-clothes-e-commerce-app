import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProductsAsync = createAsyncThunk("products/getProductsAsync",async()=> {
    const resMen = await axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
    const resWomen = await axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
    const allClothes = [...resMen.data,...resWomen.data]

    return allClothes
} )


export const getProductDetailAsync = createAsyncThunk("products/getProductDetailAsync",async(id)=> {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return res.data
} )



export const selectProducts = (state) => state.products.items
export const selectProductsStatus = (state) => state.products.status
export const selectProductsError = (state) => state.products.error


export const selectProduct = (state) => state.products.product.item
export const selectProductStatus = (state) => state.products.product.status
export const selectProductError = (state) => state.products.product.error


export const productsSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        status:"idle",
        error:null,
        product:{
            item:{},
            status:"idle",
            error:null
        }
        
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

        .addCase(getProductDetailAsync.pending, (state,action)=> {
            state.product.status = "loading"
        })
        .addCase(getProductDetailAsync.rejected, (state,action)=> {
            state.product.status = "failed"
            state.product.error = action.error.message
            console.log(action.error.message)
        })
        .addCase(getProductDetailAsync.fulfilled, (state,action)=> {
            state.product.status = "succeeded"
            state.product.item = action.payload
        })
    }
})


export default productsSlice.reducer