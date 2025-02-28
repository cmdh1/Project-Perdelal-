import { createSlice } from '@reduxjs/toolkit';

const calcTotalPrice = (items) => items.reduce((sum, obj) => sum + obj.price * obj.count, 0);

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const findItem = state.items.find(obj => obj.id === item.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...item,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action) {
      const id = action.payload;
      const findItem = state.items.find(obj => obj.id === id);

      if (findItem) {
        findItem.count--;
          if(findItem.count <= 0) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
          }
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;