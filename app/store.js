import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import githubTypeheadReducer from 'components/github-typehead/githubTypeheadSlice';
import messageReducer from './reducer/messageSlice';

export function makeStore() {
	return configureStore({
		reducer: {
			githubTypehead: githubTypeheadReducer,
			message: messageReducer,
		},
	});
}

const store = makeStore();

export default store;
