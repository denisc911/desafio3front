import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';


const initialState = {
	user: null,
	token: null,
	isError: false,
	isSuccess: false,
	message: '',
};

/* export const register = createAsyncThunk('auth/register', async (userData) => {
	console.log('desde store', userData);

	try {
		return await authService.register(userData);
	} catch (error) {
		console.error(error);
	}
}); */

export const deleteUser = createAsyncThunk(
	'auth/deleteUser',
	async (userId, thunkAPI) => {
		try {
			return await authService.deleteUser(userId);
		} catch (error) {
			const message = error.response.data.error;
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getOneUser = createAsyncThunk(
	'auth/getOneUser',
	async (_, thunkAPI) => {
		try {
			return await authService.getOneUser();
		} catch (error) {
			const message = error.response.data.error;
			return thunkAPI.rejectWithValue(message);
		}
	}
)

export const getAllUsers = createAsyncThunk(
	'auth/getAllUsers',
	async (_, thunkAPI) => {
		try {
			return await authService.getAllUsers();
		} catch (error) {
			const message = error.response.data.error;
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	try {
		return await authService.login(user);
	} catch (error) {
		const message = error.response.data.error;
		return thunkAPI.rejectWithValue(message);
	}
});

export const access = createAsyncThunk('auth/access', async (_,thunkAPI) => {
	try {
		return await authService.access();
	} catch (error) {
		const message = error.response.data.error;
		return thunkAPI.rejectWithValue(message);
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
	reducers: {
		reset: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.token = action.payload.token;
				state.isSuccess = true;
				state.message = action.payload.message;
			})
			.addCase(login.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(logout.fulfilled, (state) => {
				state.token = null;
			})

			.addCase(access.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isSuccess = true;
				state.message = 'Access granted';
			})
			.addCase(access.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})

			.addCase(deleteUser.fulfilled, (state, action) => {
				// Opcionalmente, puedes actualizar el estado eliminando el usuario localmente
				state.message = `Usuario ${action.payload} eliminado exitosamente`;
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})


			.addCase(getAllUsers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.token = action.payload;
				state.isSuccess = true;
			})
			.addCase(getAllUsers.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})


			.addCase(getOneUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getOneUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload;
				state.isSuccess = true;
			})
			.addCase(getOneUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
