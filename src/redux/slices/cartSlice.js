import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  itemsInCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.itemsInCart.push(action.payload);
      state.totalPrice = state.itemsInCart.reduce(
        (sum, obj) => (sum += obj.price),
        0
      );
    },
    removeProduct: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (obj) => obj.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
