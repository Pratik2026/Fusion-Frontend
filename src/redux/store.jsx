import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moduleReducer from './moduleslice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    module: moduleReducer,
  },
});
