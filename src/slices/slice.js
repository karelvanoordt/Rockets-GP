import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    deleteBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

console.log(booksSlice);

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
