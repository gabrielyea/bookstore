/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchAllBooks } from '../../redux/books/bookSlice';
import styles from './bookContainerStyle.module.scss';
import Book from '../book/Book';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
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
    <section className={styles.mainContainer}>
      <ul className={styles.listContainer}>
        {createBooks(books.entities)}
      </ul>
    </section>
  );
};

export default BooksContainer;