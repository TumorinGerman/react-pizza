import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async ({ category, sortBy, order }) => {
    const { data } = await axios.get(
      `https://63b68ed61907f863aaf9d6ee.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    );
    return data;
  }
);

const initialState = {
  products: [],
  fetchStatus: "",
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.fetchStatus = "loading";
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.products = action.payload;
      state.fetchStatus = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.fetchStatus = "error";
      state.products = [];
    });
  },
});

export const { getProducts } = pizzasSlice.actions;

export default pizzasSlice.reducer;
