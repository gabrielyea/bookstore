/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksFromApi } from '../../redux/books/books';
import Book from '../book/Book';

const BooksContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  console.log(books);

  useEffect(() => {
    dispatch(getBooksFromApi());
  }, []);

  const createBooks = (booksCollection) => booksCollection.map((book) => {
    console.log(book);
    return (
      <Book
        key={Math.random()}
        id={book.id}
        author={book.author}
        title={book.title}
        description={book.description}
      />
    );
  });

  return (
    <section>
      <ul>
        {createBooks([books].flat())}
      </ul>
    </section>
  );
};

export default BooksContainer;
