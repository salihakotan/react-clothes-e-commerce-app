import { createSlice } from "@reduxjs/toolkit";

export const ordersSelector = (state) => state.orders.items;

const savedOrders = JSON.parse(localStorage.getItem("orders"))



export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: savedOrders ? savedOrders : [],
    status: "idle",
    error: null,
  },
  reducers: {
    newOrder: (state, action) => {
        const order = {
            date:"06-24-2024",
            totalPrice:action.payload.totalPrice,
            products:action.payload.products,
        }
      state.items.push(order);
      localStorage.setItem("orders",JSON.stringify(state.items))
      console.log("new order", order);
    },
    
  },
  extraReducers: (builder) => {},
});

export const { newOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
