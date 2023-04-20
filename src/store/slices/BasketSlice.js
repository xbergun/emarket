import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    addProduct: (state, action) => {
      const { id, name, price } = action.payload;
      const existingItem = state.products.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.products.push({ id, name, price, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.products.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.products.splice(state.products.indexOf(existingItem), 1);
        } else {
          existingItem.quantity -= 1;
        }
      }
    
    },
    clearCart: (state) => {
      state.products = [];
    },


  },
})


export const { 
  addProduct,
  removeProduct,
  clearCart
} = basketSlice.actions

export default basketSlice.reducer