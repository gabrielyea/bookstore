/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import React from 'react';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, category } = props;
  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <p>
        I am a book, my title is
        {' '}
        {title}
      </p>
      <p>
        And my category is
        {' '}
        {category}
      </p>
      <button onClick={handleRemove} type="button">Remove me</button>
    </div>
  );
};
export default Book;
