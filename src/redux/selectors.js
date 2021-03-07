// import { createSelector } from "@reduxjs/toolkit";

export const allContacts = (state) => state.contacts.items;
export const contactName = (state) => state.contacts.items.name;
export const contactNumber = (state) => state.contacts.items.number;
export const filterValue = (state) => state.contacts.filter;

// export const memoAllContacts = createSelector(
//   allContacts,
//   contactName,
//   contactNumber,
//   (contacts, name, number) => (contacts, name, number)
// );
