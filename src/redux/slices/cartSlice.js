import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";

const { totalPrice, itemsInCart } = getCartFromLocalStorage();

const initialState = {
  totalPrice,
  itemsInCart,
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

      state.totalPrice = calcTotalPrice(state.itemsInCart);
    },
    removeProduct: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.itemsInCart);
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
