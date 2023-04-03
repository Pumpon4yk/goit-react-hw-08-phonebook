import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const isLoadingContacts = state => state.contacts.isLoading;
export const errorContacts = state => state.contacts.error;
export const getStatusFilter = state => state.filter;
export const getEditId = state => state.edit;

export const contactsFilter = createSelector(
  [getContacts, getStatusFilter],
  (contacts, filterName) =>
    contacts.filter(e =>
      e.name.toLowerCase().includes(filterName.toLowerCase())
    )
);


export const idFilter = createSelector(
  [getContacts, getEditId],
  (contacts, id) =>
    contacts.filter(e =>
      e.id === id
    )
);