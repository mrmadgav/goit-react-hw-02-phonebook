import { createAction } from "@reduxjs/toolkit";

const addRequest = createAction("contact/addRequest");
const addSuccess = createAction("contact/addSuccess");
const addError = createAction("contact/addError");

const getRequest = createAction("contact/getRequest");
const getSuccess = createAction("contact/getSuccess");
const getError = createAction("contact/getError");

const deleteRequest = createAction("contact/deleteRequest");
const deleteSuccess = createAction("contact/deleteSuccess");
const deleteError = createAction("contact/deleteError");

export const onFilter = createAction("phone/filter");

export default {
  addRequest,
  addSuccess,
  addError,
  getRequest,
  getSuccess,
  getError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  onFilter,
};
