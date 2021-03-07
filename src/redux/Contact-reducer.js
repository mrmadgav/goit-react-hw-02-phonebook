import { createReducer } from "@reduxjs/toolkit";
import contactActions from "./Contact-actions";

const state = {
  contacts: {
    items: [],
    filter: "",
  },
};

export default createReducer(state.contacts, {
  [contactActions.getSuccess]: (state, { payload }) => ({
    ...state,
    items: [...payload],
  }),
  [contactActions.addSuccess]: (state, { payload }) => ({
    ...state,
    items: [
      ...state.items,
      {
        name: payload.name,
        number: payload.number,
        id: payload.id,
      },
    ],
  }),
  [contactActions.deleteSuccess]: (state, { payload }) => ({
    ...state,
    items: [...state.items.filter((i) => i.id !== payload)],
  }),
  [contactActions.onFilter]: (state, { payload }) => ({
    ...state,
    filter: payload,
  }),
});
