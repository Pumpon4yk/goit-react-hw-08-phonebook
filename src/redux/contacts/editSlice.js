import { createSlice } from '@reduxjs/toolkit';

const editSlice = createSlice({
    name: 'edit',
    initialState: '',
    reducers: {
            setEdit(state, {payload}) {
              return  state = payload;
            },
    },
});

export const { setEdit } = editSlice.actions;
export const editReducer = editSlice.reducer;
