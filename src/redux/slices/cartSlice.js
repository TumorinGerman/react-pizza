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
      const findProduct = state.itemsInCart.find(
        (obj) => obj.id === action.payload.id
      );
      if (findProduct) {
        findProduct.count++;
      } else {
        state.itemsInCart.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.itemsInCart.reduce(
        (sum, obj) => obj.count * obj.price + sum,
        0
      );
    },
    removeProduct: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = state.itemsInCart.reduce(
        (sum, obj) => (sum += obj.count * obj.price),
        0
      );
    },
    increaseCount: (state, action) => {
      const findProduct = state.itemsInCart.find(
        (obj) => obj.id === action.payload
      );
      if (findProduct) {
        findProduct.count++;
        state.totalPrice += findProduct.price;
      }
    },
    decreaseCount: (state, action) => {
      const findProduct = state.itemsInCart.find(
        (obj) => obj.id === action.payload
      );
      if (findProduct) {
        findProduct.count--;
        state.totalPrice -= findProduct.price;
      }
    },
    clearCart: (state) => {
      state.itemsInCart = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseCount,
  decreaseCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
