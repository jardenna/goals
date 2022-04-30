import { RootState } from '../../app/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { goalsUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';
import errorObj, { ErrorObjState } from '../../utils/utils';
import { KeyValuePair } from '../../interfaces/interfaces';

interface goalsArr {
  id: string;
  text: string;
  status?: string;
}
interface GoalsState {
  goals: goalsArr[];
  isLoading: boolean;
  isError: ErrorObjState | unknown;
}

const initialState = {
  goals: [],
  isError: errorObj,
  isLoading: false,
} as GoalsState;

//Get goals

export const getGoals = createAsyncThunk(
  'goals/getGoals',
  async (_, thunkAPI) => {
    const token: any = thunkAPI.getState();
    try {
      const response = await fetchApi('get', goalsUrl);
      if (token.auth.isAuthenticated) {
        return response;
      }
    } catch (error: any) {
      const message = error?.response?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createGoals = createAsyncThunk(
  'goals/createGoals',
  async (goals: KeyValuePair<string>, thunkAPI) => {
    try {
      const token: any = thunkAPI.getState();
      const response = await fetchApi('post', goalsUrl, goals);

      if (token.auth.isAuthenticated) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = errorObj;
      state.goals = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.goals = action.payload;
      })
      .addCase(getGoals.rejected, (state) => {
        state.isLoading = false;
        state.goals = [];
        state.isError = errorObj;
      })
      .addCase(createGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.goals = [action.payload, ...state.goals];
      })
      .addCase(createGoals.rejected, (state, action) => {
        state.goals = [];
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { reset } = goalSlice.actions;
export const selectGoals = (state: RootState) => state.goals;
export default goalSlice.reducer;
