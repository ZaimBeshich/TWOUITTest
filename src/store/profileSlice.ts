// features/profileSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsState } from '../constants/types';

export type Profile = {
  name: string;
  email: string;
};

export type HistoryItem = {
  productId: number;
  quantity: number;
};

export type History = {
  id: number;
  items: HistoryItem[];
  total: number;
  createdAt: string;
  image: string;
};

export interface ProfileState {
  profile: Profile;
  history: History[];
  isLoading: boolean;
}

const initialState: ProfileState = {
  profile: { name: '', email: '' },
  history: [],
  isLoading: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
    },
    setHistory: (state, action: PayloadAction<any>) => {
      state.history = action.payload;
    },
    setProfileLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setProfile, setHistory, setProfileLoading } =
  profileSlice.actions;

export default profileSlice.reducer;
