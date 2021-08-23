import React from 'react';
import BooksContainer from '../../components/booksContainer/BooksContainer';
import CreateNewBook from '../../components/createNewBook/CreateNewBook';

const Home = () => (
  <>
    <CreateNewBook />
    <BooksContainer />
  </>
);
export default Home;
