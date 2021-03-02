// import { createSelector } from "@reduxjs/toolkit";

export const allContacts = (state) => state.items;
export const contactName = (state) => state.items.name;
export const contactNumber = (state) => state.items.number;
export const filterValue = (state) => state.filter;

// export const memoAllContacts = createSelector(
//   allContacts,
//   contactName,
//   contactNumber,
//   (contacts, name, number) => (contacts, name, number)
// );

// Все селекторы напрямую обращаются к состоянию...что тогда мемоизировать...
