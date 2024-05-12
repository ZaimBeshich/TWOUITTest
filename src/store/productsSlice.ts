// features/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsState } from '../constants/types';

const initialState: ProductsState = {
  products: [],
  isLoading: true,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setCatalogLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setProducts, setCatalogLoading } = productsSlice.actions;

export default productsSlice.reducer;
