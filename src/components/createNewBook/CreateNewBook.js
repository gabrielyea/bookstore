/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addBook } from '../../redux/books/books';

const CreateNewBook = () => {
  const dispatch = useDispatch();
  const titleInput = useRef(null);
  const authorInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(titleInput?.current?.value);
    console.log(authorInput?.current?.value);
  };

  // const submitBookToStore = () => {
  //   const newBook = {
  //     id: 'id',
  //     title: 'title',
  //     author: 'author',
  //   };
  // };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleInput} type="text" name="title" placeholder="Book title" />
      <input ref={authorInput} type="text" name="author" placeholder="Book author" />
      <input label="Create" type="submit" name="create" value="Create" />
    </form>
  );
};

export default CreateNewBook;
