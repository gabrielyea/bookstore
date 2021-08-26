/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
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
  exit: {
    scale: 0,
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
  const selectorBooks = useSelector((state) => state.books.entities);
  const dispatch = useDispatch();
  const mainContainer = useRef(null);

  useEffect(() => {
    dispatch(fetchAllBooks());
    mainContainer.current.addEventListener('DOMNodeInserted', (event) => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    });
  }, []);

  const createBooks = (list) => list.map((book) => {
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
      ref={mainContainer}
    >
      {selectorBooks
      && (
      <motion.ul variants={container} initial="initial" animate="animate" className={styles.listContainer}>
        {createBooks(selectorBooks)}
      </motion.ul>
      )}
    </motion.section>
  );
};

export default BooksContainer;
