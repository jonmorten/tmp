import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../features/cart/Cart.slice";
import productsSlice from "../features/products/Products.slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
