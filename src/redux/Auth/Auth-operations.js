import authActions from "./Auth-actions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

export const login = (credentials) => async (dispatch) => {
  dispatch(authActions.LoginRequest());

  try {
    const response = await axios.post("/users/login", credentials);

    token.set(response.data.token);
    dispatch(authActions.LoginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.LoginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(authActions.LogoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();
    dispatch(authActions.LogoutSuccess());
  } catch (error) {
    dispatch(authActions.LogoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    authReducer: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());
  try {
    const response = await axios.get("/users/current");
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};
