import { configureStore } from '@reduxjs/toolkit';

import groupReducer from '../feeatures/Home/groupSlice';
import userReducer from '../feeatures/users/userSlice';
import expenseReducer from '../feeatures/expense/expenseSlice';

const store = configureStore({
  reducer: {
    group: groupReducer,
    user: userReducer,
    expense: expenseReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
