import { configureStore } from '@reduxjs/toolkit';
import producReducer from "../features/productSlice";


export const store = configureStore({
  reducer: {
    product: producReducer,
  },
});
