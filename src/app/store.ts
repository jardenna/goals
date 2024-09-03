import { configureStore } from '@reduxjs/toolkit';

import auth from '../features/auth/authSlice';
import goals from '../features/goals/goalSlice';
import localStorageMiddleware from './middleware/localStorageMiddleware';

const reducer = {
  goals,
  auth,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
