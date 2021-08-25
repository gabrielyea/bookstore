/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import { deleteBook } from '../../redux/books/bookSlice';
import ProgressCircle from '../progressCircle/ProgressCircle';

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
    <div>
      <input onChange={changeHandler} type="text" name="value" placeholder="circle" />
      <p>
        {}
      </p>
      <p>
        I am a book, my title is:
        {title}
      </p>
      <p>
        And my category is:
        {' '}
        {category}
      </p>
      <button onClick={handleRemove} type="button">Remove me</button>
      <ProgressCircle
        percent={percent}
      />
    </div>
  );
};
export default Book;
