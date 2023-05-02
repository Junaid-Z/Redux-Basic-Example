import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import loginSlice from "../reducers/loginSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		login: loginSlice,
	},
})