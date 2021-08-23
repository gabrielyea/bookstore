/* eslint-disable react/prop-types */
import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <p>
        I am a book, my title is
        {title}
      </p>
      <p>
        And my author is
        {author}
      </p>
    </div>
  );
};
export default Book;
