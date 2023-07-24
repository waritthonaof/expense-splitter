import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
  id: number;
  name: string;
  expense: number;
};

const initialState: SliceState[] = [];

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense(state, action) {
      state.push(action.payload);
    },
    deleteExpense(state, action) {
      return state.filter((expense) => expense.id !== action.payload);
    },
    reset() {
      return initialState;
    },
  },
});

export const { addExpense, deleteExpense, reset } = expenseSlice.actions;

export default expenseSlice.reducer;
