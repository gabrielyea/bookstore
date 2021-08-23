import React from 'react';
import MenuItem from './menuItem/MenuItem';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  const createLinks = (linkCollection) => linkCollection.map((link) => (
    <MenuItem
      key={link.id}
      index={link.id}
      to={link.path}
      text={link.text}
    />
  ));

  return (
    <nav className="nav">
      <div className="logo"><h1>Bookstore</h1></div>
      <ul>
        {createLinks(links)}
      </ul>
    </nav>
  );
};

export { NavBar as default };
