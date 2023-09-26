import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, current } from './authOperations';

import { toast } from 'react-hot-toast';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        toast.error(
          `Invalid registration data: You should enter a more secure password or another email`
        );
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        toast.error(`Invalid registration data`);
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(current.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(current.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload.data;
        state.token = action.payload.tokenNew;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(current.rejected, state => {
        state.isRefreshing = false;
        state.token = '';
      });
  },
});

export const authReducer = authSlice.reducer;
