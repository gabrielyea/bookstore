import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../redux/books/books';

const Home = () => {
  const books = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>{books}</div>
      <button type="button" aria-label="add" onClick={() => dispatch(add())}>
        Add book
      </button>
      <button type="button" aria-label="add" onClick={() => dispatch(remove())}>
        Remove books
      </button>
    </>
  );
};
export default Home;
