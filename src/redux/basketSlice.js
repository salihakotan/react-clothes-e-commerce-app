import { createSlice } from "@reduxjs/toolkit";

const savedBasket = localStorage.getItem("basket")
export const basketSelector = (state) => state.basket.items;


export const basketSlice = createSlice({
    name:"basket",
    initialState:{
        items:savedBasket ? JSON.parse(savedBasket): [],
        status:"idle",
        error:null
    },
    reducers:{
        addToBasket: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("basket",JSON.stringify(state.items))
            console.log("payl", action.payload);
          },
          removeFromBasket: (state, action) => {
            const index = state.items.findIndex((item)=> item.id === action.payload.id);
            if (index > -1) {
              // only splice array when item is found
              state.items.splice(index, 1); // 2nd parameter means remove one item only
              localStorage.setItem("basket",JSON.stringify(state.items))
              console.log("finded index", action.payload);
            }}
    },
    extraReducers:(builder)=>{

    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;


export default basketSlice.reducer