import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: {
    sortBy: "createdAt",
    order: "desc",
  },
  brands: [],
  models: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setBrands(state, action) {
      state.brands = action.payload;
    },
    setModels(state, action) {
      state.models = action.payload;
    },
  },
});

export const {
    setSortBy,
    setBrands,
    setModels,
} = filterSlice.actions;
export default filterSlice.reducer;
