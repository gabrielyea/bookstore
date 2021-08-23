/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem = ({
  index, to, text,
}) => {
  const style = { border: `2px solid ${colors[index]}` };
  return (
    <li
      key={index}
    >
      <NavLink
        to={to}
        exact
      >
        <button
          type="button"
          className="btn"
          style={style}
        >
          {text}
        </button>
      </NavLink>
    </li>
  );
};

export default MenuItem;
