import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addBook } from '../../redux/books/books';
import { ID } from '../../utils/idGenerator';

const CreateNewBook = () => {
  const dispatch = useDispatch();
  const titleInput = useRef(null);
  const authorInput = useRef(null);

  const submitBookToStore = () => {
    const newBook = {
      id: ID(),
      title: titleInput?.current?.value,
      author: authorInput?.current?.value,
    };
    dispatch(addBook(newBook));
  };

  const clearInputs = () => {
    titleInput.current.value = '';
    authorInput.current.value = '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitBookToStore();
    clearInputs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleInput} type="text" name="title" placeholder="Book title" />
      <input ref={authorInput} type="text" name="author" placeholder="Book author" />
      <input label="Create" type="submit" name="create" value="Create" />
    </form>
  );
};

export default CreateNewBook;
