/* eslint-disable react/prop-types */
import React from 'react';

const Book = (props) => {
  const { title } = props;
  return (
    <div>
      I am a book, my title is
      {title}
    </div>
  );
};
export default Book;
