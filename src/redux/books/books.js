/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice(
  {
    name: 'counter',
    initialState: { value: [] },
    reducers: {
      add: (state) => {
        state.value = [...state.value].concat('new book');
      },
      remove: (state) => {
        state.value = [...state.value].splice(0, 0);
      },
    },
  },
);

export const { add, remove } = bookSlice.actions;
export default bookSlice.reducer;
