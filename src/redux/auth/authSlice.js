import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
 [signUp.fulfilled](state, action){
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
 },
 [logIn.fulfilled](state, action){
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
 },
 [logOut.fulfilled](state){
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
 },
 [refreshUser.fulfilled](state, action){
  state.user = action.payload;
  state.isRefreshing = false;
  state.isLoggedIn = true;
 },
 

  }
})

export const authReducer = authSlice.reducer;