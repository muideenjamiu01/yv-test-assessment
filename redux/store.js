// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import atcReducer from "./features/atcSlice";

export const store = configureStore({
  reducer: {
     atcReducer,
  },
});
