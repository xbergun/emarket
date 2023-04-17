import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (state) => {
      state.count += 1
    }
  },
})


export const {  } = basketSlice.actions

export default basketSlice.reducer