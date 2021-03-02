import { createAction } from "@reduxjs/toolkit";
import Axios from "axios";

export const addSucsess = createAction("contacts/addSucsess");
export const getSucsess = createAction("contacts/getSucsess");
export const deleteSuccess = createAction("contacts/deleteSuccess");
export const onFilter = createAction("phone/filter");

Axios.defaults.baseURL = "http://localhost:3004";

export const addContact = (data) => (dispatch) => {
  console.log("Data, которая пришла в AddContact", data);

  dispatch({ type: "contacts/addRequest" });

  Axios.post("/contacts", data)
    .then(({ data }) =>
      dispatch({ type: "contacts/addSucsess", payload: data })
    )
    .catch((error) => dispatch({ type: "contacts/addError", payload: error }));
};

export const getContact = () => (dispatch) => {
  dispatch({ type: "contacts/getRequest" });
  console.log("Пытаемся получить контакт");

  Axios.get("/contacts")
    .then(({ data }) =>
      dispatch({ type: "contacts/getSucsess", payload: data })
    )
    .catch((error) => dispatch({ type: "contacts/getError", payload: error }));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch({ type: "contacts/deleteRequest" });
  console.log("Пытаемся удалить контакт");

  Axios.delete(`/contacts/${id}`)
    .then(() => dispatch({ type: "contacts/deleteSuccess", payload: id }))
    .catch((error) =>
      dispatch({ type: "contacts/deleteError", payload: error })
    );
};
