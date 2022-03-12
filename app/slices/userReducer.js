import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	loading: false,
	users: [],
	user: {},
	hasErrors: false,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUsers: (state) => {
			state.loading = true;
		},
		getUsersSuccess: (state, { payload }) => {
			state.users = payload;
			state.loading = false;
			state.hasErrors = false;
		},
		getUserSuccess: (state, { payload }) => {
			state.user = payload;
			state.loading = false;
			state.hasErrors = false;
		},
		getUsersFailure: (state) => {
			state.loading = false;
			state.hasErrors = true;
		},
	},
});

export const { getUsers, getUsersSuccess, getUserSuccess, getUsersFailure } =
	usersSlice.actions;
export const usersSelector = (state) => state.users;
export default usersSlice.reducer;

// Asynchronous thunk action
// For all users
export function fetchUsers() {
	return async (dispatch) => {
		dispatch(getUsers());
		try {
			const response = await fetch('https://reqres.in/api/users');
			const data = await response.json();
			dispatch(getUsersSuccess(data));
		} catch (error) {
			dispatch(getUsersFailure());
		}
	};
}

// For Single User
export function fetchUser(id) {
	return async (dispatch) => {
		dispatch(getUsers());
		try {
			const response = await fetch(`https://reqres.in/api/users/${id}`);
			const data = await response.json();
			dispatch(getUserSuccess(data.data));
		} catch (error) {
			dispatch(getUsersFailure());
		}
	};
}
