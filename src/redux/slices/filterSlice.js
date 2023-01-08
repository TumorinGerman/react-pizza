import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
  selectedTypeOfSort: { name: "популярности", type: "rating" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSortName: (state, action) => {
      state.selectedTypeOfSort = action.payload;
    },
  },
});

export const { setActiveCategory, setSortName } = filterSlice.actions;

export default filterSlice.reducer;
