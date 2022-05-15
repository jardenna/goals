import { RootState } from './../../app/store';
import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
export interface Post {
  title?: string;
  id?: string;
}

interface PostState {
  list: Post[];
}

const initialState: PostState = {
  list: [
    { title: 'Escape from Tarkow', id: nanoid(5) },
    { title: 'Hunt: Showdown', id: nanoid(5) },
    { title: 'Hell lets loose', id: nanoid(5) },
    { title: 'New game', id: nanoid(5) },
  ],
};
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        const newProduct = action.payload;
        state.list = [newProduct, ...state.list];
      },
      prepare: (post: Post) => {
        return { payload: { id: nanoid(3), title: post.title } };
      },
    },
  },
});

//Code removed from component
export const createPost = (state: RootState) => state.posts;

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
