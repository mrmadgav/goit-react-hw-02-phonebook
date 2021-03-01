import { createReducer } from "@reduxjs/toolkit";
import { onMount, onSubmit, onDelete, onFilter } from "./actions";
import { v4 as uuidv4 } from "uuid";

const state = {
  contacts: {
    items: [],
    filter: "",
  },
};

export default createReducer(state.contacts, {
  [onMount]: (state, { payload }) => ({
    ...state,
    items: [...state.items, ...payload],
  }),
  [onSubmit]: (state, { payload }) => ({
    ...state,
    items: [
      ...state.items,
      {
        name: payload.name,
        number: payload.number,
        id: uuidv4(),
      },
    ],
  }),
  [onDelete]: (state, { payload }) => ({
    ...state,
    items: [...state.items.filter((i) => i.id !== payload)],
  }),
  [onFilter]: (state, { payload }) => ({
    ...state,
    filter: payload,
  }),
});
