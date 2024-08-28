import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { KeyValuePair } from '../../interfaces/interfaces';

interface ToggleState {
  toggleObj: KeyValuePair<string>;
}
const initialState = {
  toggleObj: {},
} as ToggleState;

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleElem: (state, action) => {
      const id = action.payload;
      state.toggleObj = { ...state.toggleObj, [id]: !state.toggleObj[id] };
    },
  },
});

export const { toggleElem } = toggleSlice.actions;
export const selectToggle = (state: RootState) => state.toggle.toggleObj;
export default toggleSlice.reducer;
