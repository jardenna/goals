import { RootState } from '../../app/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getGoalUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';
import errorObj, { ErrorObjState } from '../../utils/utils';

interface GoalsState {
  goals: string[];
  isLoading: boolean;
  isError: ErrorObjState;
}

const initialState = {
  goals: [],
  isError: errorObj,
  isLoading: false,
} as GoalsState;

//Get goals

export const getGoals = createAsyncThunk(
  'auth/api/goals',
  async (_, thunkAPI) => {
    try {
      const response = await fetchApi('get', getGoalUrl);
      if (response.status) {
        return response.status;
      }

      return response;
    } catch (error: any) {
      const message = error?.response?.message;
      return thunkAPI.rejectWithValue(message);
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
      });
  },
});

export const { reset } = goalSlice.actions;
export const selectGoals = (state: RootState) => state.goals;
export default goalSlice.reducer;
