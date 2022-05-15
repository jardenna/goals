import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Post {
  id?: string;
  title: string;
  content: string;
}

const initialState: Post[] = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza.',
  },
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.unshift(action.payload);
      },
      prepare: (post) => {
        return {
          payload: {
            id: nanoid(3),
            title: post.title,
            content: post.content,
          },
        };
      },
    },
  },
});
export const selectAllPosts = (state: RootState) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
