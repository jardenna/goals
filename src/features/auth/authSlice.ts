import { RootState } from './../../app/store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUrl, logoutUrl, signupUrl, userUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';
import { KeyValuePair } from '../../interfaces/interfaces';

import goalErrObj, { ErrorObjState, GoalErrorState } from '../../utils/utils';
//import { current } from 'immer';

interface UsersState {
  isAuthenticated: boolean;
  user: any;
  isLoading: boolean;
  isError: any;
}
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  bluredError: '',
  isError: goalErrObj,
} as UsersState;

//Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user: KeyValuePair<string>, thunkAPI) => {
    try {
      const response = await fetchApi('post', signupUrl, user);
      return response;
    } catch (error: any) {
      const message = error?.response?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData: KeyValuePair<string>) => {
    const response = await fetchApi('post', loginUrl, formData);
    return response;
  }
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
      state.isError = goalErrObj;
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
        state.isAuthenticated = action.payload?.user?._id ? true : false;
        state.isError = action.payload.errors;
      })
      .addCase(register.rejected, (state) => {
        state.isAuthenticated = false;
        state.isError = goalErrObj;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = action.payload?.user?._id ? true : false;
        state.isError = action.payload.errors;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.isError = goalErrObj;
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
        state.isAuthenticated = action.payload.status ? false : true;
      })
      .addCase(currentUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.isError = goalErrObj;
      });
  },
});

export const { reset } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
