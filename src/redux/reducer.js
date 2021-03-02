import { createReducer } from "@reduxjs/toolkit";
import { addSucsess, getSucsess, deleteSuccess, onFilter } from "./actions";

const state = {
  contacts: {
    items: [],
    filter: "",
  },
};

export default createReducer(state.contacts, {
  [getSucsess]: (state, { payload }) => ({
    ...state,
    items: [...state.items, ...payload],
  }),
  [addSucsess]: (state, { payload }) => ({
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
  [deleteSuccess]: (state, { payload }) => ({
    ...state,
    items: [...state.items.filter((i) => i.id !== parseInt(payload))],
  }),
  [onFilter]: (state, { payload }) => ({
    ...state,
    filter: payload,
  }),
});
