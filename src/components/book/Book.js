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
      <button type="button">Remove me</button>
    </div>
  );
};
export default Book;
