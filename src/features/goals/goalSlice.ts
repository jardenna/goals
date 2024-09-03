import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { KeyValuePair } from '../../interfaces/interfaces';
import { goalsUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';
import { goalErrObj } from '../../utils/utils';

interface GoalErrorState {
  text: string;
}

interface Goals {
  _id: string;
  text: string;
  title: string;
}
interface GoalsState {
  goals: Goals[];
  isError: GoalErrorState;
  isLoading: boolean;
}

const initialState = {
  goals: [],
  isError: goalErrObj,
  isLoading: false,
} as GoalsState;

// Get goals
export const getGoals = createAsyncThunk(
  'goals/getGoals',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState() as RootState;
    const response = await fetchApi('get', goalsUrl);
    if (token.auth.isAuthenticated) {
      return response;
    }
    return null;
  },
);

export const createGoals = createAsyncThunk(
  'goals/createGoals',
  async (goals: KeyValuePair<string>, thunkAPI) => {
    const token = thunkAPI.getState() as RootState;
    const response = await fetchApi('post', goalsUrl, goals);

    if (token.auth.isAuthenticated) {
      return response;
    }
    return null;
  },
);

export const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = goalErrObj;
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
      .addCase(createGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.goals = [action.payload, ...state.goals];
        state.isError = action.payload.errors;
      });
  },
});

export const { reset } = goalSlice.actions;
export const selectGoals = (state: RootState) => state.goals;
export default goalSlice.reducer;
