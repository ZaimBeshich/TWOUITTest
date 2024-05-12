// store.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartItemsReducer from './cartSlice';
import profileReducer from './profileSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartItemsReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
