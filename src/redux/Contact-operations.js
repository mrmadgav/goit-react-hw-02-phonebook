import contactActions from "./Contact-actions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const addContact = (data) => (dispatch) => {
  dispatch(contactActions.addRequest());
  axios
    .post("/contacts", data)
    .then(({ data }) => dispatch(contactActions.addSuccess(data)))
    .catch((error) => dispatch(contactActions.addError(error.message)));
};

export const getContact = () => (dispatch) => {
  dispatch(contactActions.getRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactActions.getSuccess(data)))
    .catch((error) => dispatch(contactActions.getError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(contactActions.deleteRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactActions.deleteSuccess(id)))
    .catch((error) => dispatch(contactActions.deleteError(error)));
};
