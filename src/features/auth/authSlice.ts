import { RootState } from './../../app/store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUrl, logoutUrl, signupUrl, userUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';
import { KeyValuePair } from '../../interfaces/interfaces';
import errorObj from '../../utils/utils';

interface User {
  createdAt: string;
  email: string;
  name: string;
  password: string;
  pic: string;
  updatedAt: string;
  _id: string;
}

interface UsersState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  isError: any;
}
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  isError: errorObj,
} as UsersState;

//Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user: KeyValuePair<string>) => {
    const response = await fetchApi('post', signupUrl, user);
    return response;
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
        state.isAuthenticated = action.payload?.user?._id ? true : false;
        state.isError = action.payload.errors;
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
        state.isAuthenticated = action.payload?.status ? false : true;
      });
  },
});

export const { reset, clearErrors, blurErrors } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
