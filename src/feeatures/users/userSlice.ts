import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
  id: number;
  username: string;
};

const initialState: SliceState[] = [];

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      return (state = state.filter((user) => user.id !== action.payload));
    },

    reset() {
      return initialState;
    },
  },
});

export const { addUser, deleteUser, reset } = userSlice.actions;

export default userSlice.reducer;
