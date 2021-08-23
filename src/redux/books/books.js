/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice(
  {
    name: 'counter',
    initialState: { value: [''] },
    reducers: {
      add: (state) => {
        state.value = [...state.value, ' newbook'];
      },
    },
  },
);

export const { add } = bookSlice.actions;
export default bookSlice.reducer;
