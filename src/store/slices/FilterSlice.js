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
      const brands = action.payload;

      const newBrands = Object.keys(brands).filter((brand) => brands[brand]);

      state.brands = newBrands;
    },
    setModels(state, action) {
      const models = action.payload;

      const newModels = Object.keys(models).filter((model) => models[model]);

      state.models = newModels;
    },
  },
});

export const { setSortBy, setBrands, setModels } = filterSlice.actions;
export default filterSlice.reducer;
