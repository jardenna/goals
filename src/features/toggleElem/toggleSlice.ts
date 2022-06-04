import { RootState } from '../../app/store';
import { createSlice } from '@reduxjs/toolkit';

interface Toggle {
  element: string;
  completed: boolean;
}

interface ToggleState {
  toggleObj: Toggle;
}
const initialState = {
  toggleObj: {},
} as ToggleState;

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleElem: (state, action) => {
      state.toggleObj.element = action.payload.id;
      state.toggleObj.completed = !state.toggleObj.completed;
    },
  },
});
export const { toggleElem } = toggleSlice.actions;
export const selectToggle = (state: RootState) => state.toggle;
export default toggleSlice.reducer;
