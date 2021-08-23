import Book from '../book/Book';

const BooksContainer = () => {
  const bookList = [{ author: ' place holder 1', title: ' place holder 1' },
    { author: ' place holder 2', title: ' place holder 2' },
    { author: ' place holder 3', title: ' place holder 3' }];
  const createBooks = (booksCollection) => booksCollection.map((book) => (
    <Book
      key={Math.random()}
      index={book.id}
      author={book.author}
      title={book.author}
      description={book.description}
    />
  ));

  return (
    <section>
      <ul>
        {createBooks(bookList)}
      </ul>
    </section>
  );
};

export default BooksContainer;
