import { createAction } from "@reduxjs/toolkit";

export const onMount = createAction("phone/mount");
export const onSubmit = createAction("phone/submit");
export const onDelete = createAction("phone/delete");
export const onFilter = createAction("phone/filter");
