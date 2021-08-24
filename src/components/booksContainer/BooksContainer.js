/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksFromApi } from '../../redux/books/books';
import Book from '../book/Book';

const BooksContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromApi());
  }, []);

  const createBooks = (booksCollection) => booksCollection.map((book) => {
    return (
      <Book
        key={book.item_id}
        id={book.item_id}
        category={book.category}
        title={book.title}
      />
    );
  });

  return (
    <section>
      <ul>
        {createBooks(books)}
      </ul>
    </section>
  );
};

export default BooksContainer;
