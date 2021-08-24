import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postBookToApi } from '../../redux/books/books';

const CreateNewBook = () => {
  const dispatch = useDispatch();
  const titleInput = useRef(null);
  const categoryInput = useRef(null);

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title: titleInput?.current?.value,
      category: categoryInput?.current?.value,
    };
    dispatch(postBookToApi(newBook));
  };

  const clearInputs = () => {
    titleInput.current.value = '';
    categoryInput.current.value = '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitBookToStore();
    clearInputs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleInput} type="text" name="title" placeholder="Title" />
      <input ref={categoryInput} type="text" name="category" placeholder="Category" />
      <input label="Create" type="submit" name="create" value="Create" />
    </form>
  );
};

export default CreateNewBook;
