/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import { deleteBook } from '../../redux/books/bookSlice';
import ProgressCircle from '../progressCircle/ProgressCircle';
import styles from './bookStyle.module.scss';

const Book = (props) => {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(0);
  const { id, title, category } = props;
  const handleRemove = () => {
    dispatch(deleteBook({ id }));
  };

  const changeHandler = (event) => {
    setPercent(event.target.value / 100);
  };

  return (
    <>
      <input onChange={changeHandler} type="text" name="value" placeholder="test percent" />
      <div className={styles.mainContainer}>
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
            <button className={styles.btn} type="button">Comments</button>
            <button className={styles.btn} onClick={handleRemove} type="button">Remove</button>
            <button className={styles.btn} type="button">Edit</button>
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
          <button className={styles.btn2} type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};
export default Book;
