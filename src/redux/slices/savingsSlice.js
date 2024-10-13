// src/redux/slices/savingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const savingsSlice = createSlice({
  name: 'savings',
  initialState: {
    type: null,
  },
  reducers: {
    setSavingsType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setSavingsType } = savingsSlice.actions;
export default savingsSlice.reducer;
