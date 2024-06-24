import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import uniqid from "uniqid"

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
          id:uniqid(),
            date: new Date().toISOString().split('T')[0],
            totalPrice:action.payload.totalPrice,
            products:action.payload.products,
            name:action.payload.name,
            address:action.payload.address,

        }
      state.items.push(order);
      localStorage.setItem("orders",JSON.stringify(state.items))
      message.success("your order saved successfully",5)
      console.log("new order", order);
    },
    
  },
  extraReducers: (builder) => {},
});

export const { newOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
