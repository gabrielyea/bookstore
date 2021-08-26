import React from 'react';
import MenuItem from './menuItem/MenuItem';
import styles from './navBarStyle.module.scss';

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
    <nav className={styles.navBar}>
      <div className={styles.mainContainer}>
        <div className={styles.logo}><h1>Bookstore</h1></div>
        <ul>
          {createLinks(links)}
        </ul>
      </div>
    </nav>
  );
};

export { NavBar as default };
