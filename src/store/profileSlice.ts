// features/profileSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileState } from '../constants/types';

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
