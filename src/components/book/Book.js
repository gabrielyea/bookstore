/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { React, useState } from 'react';
import { deleteBook } from '../../redux/books/bookSlice';
import ProgressCircle from '../progressCircle/ProgressCircle';
import styles from './bookStyle.module.scss';

const Book = (props) => {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(0);
  const {
    id, title, category, variants,
  } = props;
  const handleRemove = () => {
    dispatch(deleteBook({ id }));
  };

  const changeHandler = (event) => {
    setPercent(event.target.value / 100);
  };

  return (
    <motion.li variants={variants}>
      <input onChange={changeHandler} type="text" name="value" placeholder="test percent" />
      <motion.div className={styles.mainContainer}>
        <div className={styles.dataContainer}>
          <p className={styles.category}>
            {category}
          </p>
          <p className={styles.title}>
            {title}
          </p>
          <p className={styles.author}>
            author
          </p>
          <div className={styles.optionsContainer}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.btn}
              type="button"
            >
              Comments
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.btn}
              onClick={handleRemove}
              type="motion.button"
            >
              Remove
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.btn}
              type="button"
            >
              Edit
            </motion.button>
          </div>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.circlePercent}>
            <ProgressCircle
              percent={percent}
            />
          </div>
        </div>
        <div className={styles.chapterContainer}>
          <p className={styles.currentChapter}>CURRENT CHAPTER</p>
          <p className={styles.chapterName}>A chapter</p>
          <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className={styles.btn2}
            type="button"
          >
            UPDATE PROGRESS
          </motion.button>
        </div>
      </motion.div>
    </motion.li>
  );
};
export default Book;
