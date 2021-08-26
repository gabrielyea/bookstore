/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchAllBooks } from '../../redux/books/bookSlice';
import styles from './bookContainerStyle.module.scss';
import Book from '../book/Book';

const container = {
  initial: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

const childVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  console.log(books);

  const createBooks = (booksCollection) => booksCollection.map((book) => {
    return (
      <Book
        key={book.item_id}
        id={book.item_id}
        category={book.category}
        title={book.title}
        variants={childVariant}
      />
    );
  });

  return (
    <motion.section
      className={styles.mainContainer}
      initial="show"
    >
      {books
      && (
      <motion.ul variants={container} initial="initial" animate="animate" whileHover="hover" className={styles.listContainer}>
          {createBooks(books.entities)}
      </motion.ul>
      )}
    </motion.section>
  );
};

export default BooksContainer;
