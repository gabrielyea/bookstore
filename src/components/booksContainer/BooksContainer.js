import { useSelector } from 'react-redux';
import Book from '../book/Book';

const BooksContainer = () => {
  const books = useSelector((state) => state.booksReducer);

  const createBooks = (booksCollection) => booksCollection.map((book) => (
    <Book
      key={Math.random()}
      id={book.id}
      author={book.author}
      title={book.title}
      description={book.description}
    />
  ));

  return (
    <section>
      <ul>
        {createBooks(books)}
      </ul>
    </section>
  );
};

export default BooksContainer;
