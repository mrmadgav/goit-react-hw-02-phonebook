import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const LoginRequest = createAction("auth/LoginRequest");
const LoginSuccess = createAction("auth/LoginSuccess");
const LoginError = createAction("auth/LoginError");

const LogoutRequest = createAction("auth/LogoutRequest");
const LogoutSuccess = createAction("auth/LogoutSuccess");
const LogoutError = createAction("auth/LogoutError");

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

export default {
  registerRequest,
  registerSuccess,
  registerError,
  LoginRequest,
  LoginSuccess,
  LoginError,
  LogoutRequest,
  LogoutSuccess,
  LogoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
