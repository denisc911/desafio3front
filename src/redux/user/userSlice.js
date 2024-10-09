import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const { } = user.reducer
export default user.reducer
