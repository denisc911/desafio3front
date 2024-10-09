// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import savingsReducer from './slices/savingsSlice';

export const store = configureStore({
  reducer: {
    savings: savingsReducer,
  },
});
