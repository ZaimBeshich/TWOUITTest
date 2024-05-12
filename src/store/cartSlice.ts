// src/components/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../constants/types';

const initialState: CartState = {
  items: [],
  isLoading: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    setCartLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    //
    addItem: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => String(item.id) !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart, setCartItems, setCartLoading } =
  cartSlice.actions;

export default cartSlice.reducer;
