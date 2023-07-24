import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groupName: '',
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    createGroup(state, action) {
      state.groupName = action.payload;
    },
    reset() {
      return initialState;
    },
  },
});

export const { createGroup, reset } = groupSlice.actions;

export default groupSlice.reducer;
