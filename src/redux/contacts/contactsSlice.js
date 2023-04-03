import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null
}
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers:{
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [editContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [editContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [editContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map(e => {
        if(e.id === action.payload.id){
          return action.payload
        }
        return e
      });
    },

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = false;
      state.items = state.items.filter(e => e.id !== action.payload.id);
    },
  }
});

export const contactsReducer = contactsSlice.reducer