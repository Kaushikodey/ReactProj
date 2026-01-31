import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
    },
    increment: (state, action) => {
      action.payload.quantity++;
    },
    decrement: (state, action) => {
      action.payload.quantity--;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
