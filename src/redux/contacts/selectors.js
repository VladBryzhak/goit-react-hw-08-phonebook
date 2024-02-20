import { createSelector } from "@reduxjs/toolkit";

const selectContacts = store => store.contactsGroup;

export const selectContactsItems = createSelector(selectContacts, contactsGroup => contactsGroup.items);

export const selectContactsFilter = createSelector(selectContacts, store => store.filter);

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectContactsFilter],
  (contacts, filter) => {
    return contacts?.filter(contact => {
      return contact.name.toLowerCase().includes(filter.trim().toLowerCase());
    })
  }
)