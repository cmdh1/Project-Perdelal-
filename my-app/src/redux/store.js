import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/filterslice';
import cart from './slice/cartslice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
