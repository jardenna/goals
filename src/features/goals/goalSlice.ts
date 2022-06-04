import { RootState } from '../../app/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { goalsUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';
import { GoalErrorState, goalErrObj } from '../../utils/utils';
import { KeyValuePair } from '../../interfaces/interfaces';

interface goals {
  _id: string;
  text: string;
}

interface toggle {
  element: string;
  open: boolean;
}
interface GoalsState {
  goals: goals[];
  isLoading: boolean;
  isError: GoalErrorState;
  toggle: toggle[];
  elemToggled: boolean;
}

const initialState = {
  goals: [],
  isError: goalErrObj,
  isLoading: false,
  toggle: [],
  elemToggled: false,
} as GoalsState;

//Get goals

export const getGoals = createAsyncThunk(
  'goals/getGoals',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState() as RootState;
    const response = await fetchApi('get', goalsUrl);
    if (token.auth.isAuthenticated) {
      return response;
    }
  }
);

export const createGoals = createAsyncThunk(
  'goals/createGoals',
  async (goals: KeyValuePair<string>, thunkAPI) => {
    const token = thunkAPI.getState() as RootState;
    const response = await fetchApi('post', goalsUrl, goals);

    if (token.auth.isAuthenticated) {
      return response;
    }
  }
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

    toggleElement: (state, action) => {
      state.elemToggled = !state.elemToggled;
      state.toggle = [
        {
          element: action.payload,
          open: state.elemToggled,
        },
      ];

      //state.toggle = [action.payload, ...state.toggle];
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

export const { reset, toggleElement } = goalSlice.actions;
export const selectGoals = (state: RootState) => state.goals;
export default goalSlice.reducer;
