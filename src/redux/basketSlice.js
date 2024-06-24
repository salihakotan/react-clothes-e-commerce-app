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
          },
          removeFromBasket: (state, action) => {
            const index = state.items.findIndex((item)=> item.id === action.payload.id);
            if (index > -1) {
              // only splice array when item is found
              state.items.splice(index, 1); // 2nd parameter means remove one item only
              localStorage.setItem("basket",JSON.stringify(state.items))
            }},
           clearBasket: (state, action) => {
              
                // only splice array when item is found
                state.items.splice(0, state.items.length); // 2nd parameter means remove one item only
                localStorage.setItem("basket",JSON.stringify(state.items))
              },
    },
    extraReducers:(builder)=>{

    }
})

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;


export default basketSlice.reducer