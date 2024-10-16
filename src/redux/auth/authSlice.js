import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const userStorage = JSON.parse(localStorage.getItem('user'));
const tokenStorage = JSON.parse(localStorage.getItem('token'));

const initialState = {
	user: userStorage ? userStorage : null,
	token: tokenStorage ? tokenStorage : null,
};

export const register = createAsyncThunk('auth/register', async (userData) => {
	console.log('desde store', userData);

	try {
		return await authService.register(userData);
	} catch (error) {
		console.error(error);
	}
});

export const login = createAsyncThunk('auth/login', async (userData) => {
	try {
		return await authService.login(userData);
	} catch (error) {
		console.error(error);
	}
});

export const logout = createAsyncThunk('auth/logout', async () => {
	try {
		return await authService.logout();
	} catch (error) {
		console.error(error);
	}
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		})
        .addCase(logout.fulfilled, (state) => {
            state.user = null
            state.token = null
            })

	},
});
export default authSlice.reducer;
