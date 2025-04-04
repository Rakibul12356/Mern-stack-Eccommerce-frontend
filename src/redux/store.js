import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./feature/cart/cart"
export const store = configureStore({
  reducer: {
    cart:cartReducer
  },
})