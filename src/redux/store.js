import contactsReducer from "./reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  console.groupEnd(action.type);
  return next(action);
};

const middleware = [...getDefaultMiddleware({}), loggerMiddleware];

const store = configureStore({
  reducer: contactsReducer,
  middleware,
});
export default store;
