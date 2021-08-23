/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import Book from '../book/Book';
import { add, remove } from '../../redux/books/books';

const BooksContainer = () => {
  const books = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const createBooks = (booksCollection) => booksCollection.map((book) => (
    <Book
      key={Math.random()}
      index={book.id}
      author=" place holder author"
      title=" place holder title"
      description={book.description}
    />
  ));

  return (
    <section>
      <div>
        <button
          type="button"
          onClick={() => dispatch(add())}
        >
          Create Book
        </button>
        <button
          type="button"
          onClick={() => dispatch(remove())}
        >
          Remove book
        </button>
      </div>
      <ul>
        {createBooks(books)}
      </ul>
    </section>
  );
};

export default BooksContainer;
