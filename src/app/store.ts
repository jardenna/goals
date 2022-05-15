import { configureStore } from '@reduxjs/toolkit';
//import logger from 'redux-logger';

//MIDDLEWARE
const localStorageMiddleware = ({ getState }: any) => {
  return (next: (arg0: any) => any) => (action: any) => {
    const result = next(action);
    localStorage.setItem(
      'isAuthenticated',
      JSON.stringify(getState().auth.isAuthenticated)
    );
    return result;
  };
};
import posts from '../features/posts/postSlice';
import goals from '../features/goals/goalSlice';
import authReducer from '../features/auth/authSlice';

const reducer = {
  goals,
  posts,
  auth: authReducer,
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
