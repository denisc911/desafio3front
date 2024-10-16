// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import savingsReducer from './slices/savingsSlice';
import auth from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth, 
    savings: savingsReducer
  },
});
