import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./Auth-actions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.LoginSuccess]: (_, { payload }) => payload.user,
  [authActions.LogoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.LoginSuccess]: (_, { payload }) => payload.token,
  [authActions.LogoutSuccess]: () => null,
});
const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.LoginError]: (_, { payload }) => payload,
  [authActions.LogoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
