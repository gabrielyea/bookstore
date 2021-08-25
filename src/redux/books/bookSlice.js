/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { access } from '../../api/api-access';
import routes from '../../api/api-routes';

export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks', async (thunkAPI) => {
  const response = await access.getApi(routes.MAIN);
  return response;
});

export const createBook = createAsyncThunk('books/createBook', async ({ item_id, category, title }) => {
  const response = await access.postApi(routes.MAIN, { item_id, category, title });
  if (response.ok) {
    return { item_id, category, title };
  }
  return '';
});

export const deleteBook = createAsyncThunk('books/deleteBook', async ({ id }) => {
  const response = await access.deleteApi(routes.MAIN, { item_id: id });
  if (response.ok) {
    return id;
  }
  return '';
});

export const bookSlice = createSlice({
  name: 'books',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        Object.entries(action.payload).forEach((book) => {
          const { category, title } = book[1][0];
          const newBook = {
            item_id: book[0],
            title,
            category,
          };
          state.entities = [...state.entities, newBook];
        });
        state.loading = 'idle';
      });
    builder.addCase(createBook.fulfilled, (state, action) => {
      state.entities = [...state.entities, action.payload];
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      const filterArr = state.entities.filter((book) => book.item_id !== action.payload);
      state.entities = filterArr;
    });
  },
});
export default bookSlice.reducer;
