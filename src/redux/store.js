import { configureStore } from '@reduxjs/toolkit'
import user from './user/userSlice'

export const store = configureStore({
  reducer: { user: user }
})
