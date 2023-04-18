import { configureStore } from '@reduxjs/toolkit'
import BasketSlice from './slices/BasketSlice'
import ProductsSlice from './slices/ProductsSlice'
import FavoriteSlice from './slices/FavoriteSlice'

export const store = configureStore({
  reducer: {
    basket: BasketSlice,
    products : ProductsSlice,
    favorites: FavoriteSlice,

  },
})  
