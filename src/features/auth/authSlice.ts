/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { KeyValuePair } from '../../interfaces/interfaces';
import { loginUrl, logoutUrl, signupUrl, userUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';
import errorObj from '../../utils/utils';

export interface User {
  _id: string;
  createdAt: string;
  email: string;
  name: string;
  password: string;
  pic: string;
  updatedAt: string;
}

interface UsersState {
  isAuthenticated: boolean;
  isError: any;
  isLoading: boolean;
  user: User | null;
}
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  isError: errorObj,
} as UsersState;

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user: KeyValuePair<string>) => {
    const response = await fetchApi('post', signupUrl, user);
    return response;
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData: KeyValuePair<string>) => {
    const response = await fetchApi('post', loginUrl, formData);
    return response;
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await fetchApi('get', logoutUrl);

  return response;
});

export const currentUser = createAsyncThunk('auth/user', async () => {
  const response = await fetchApi('get', userUrl);

  return response;
});
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = errorObj;
    },
    clearErrors: (state) => {
      state.isError = errorObj;
    },
    blurErrors: (state, action) => {
      state.isError[action.payload] = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = !!action.payload?.user?._id;
        state.isError = action.payload.errors;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = !!action.payload?.user?._id;
        state.isError = action.payload.errors;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = !action.payload?.status;
      });
  },
});

export const { reset, clearErrors, blurErrors } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
