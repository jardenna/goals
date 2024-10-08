import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import goalsReducer from '../features/goals/goalSlice';

const reducers = {
  auth: authReducer,
  goals: goalsReducer,
};

export const store = configureStore({
  reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
