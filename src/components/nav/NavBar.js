import { motion } from 'framer-motion';
import React from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import styles from './navBar.module.scss';
import MobileMenu from '../mobile-menu/MobileMenu';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Joke',
    },
  ];

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const createLinks = (linkCollection) => linkCollection.map((link) => (
    <motion.li
      key={link.id}
    >

      <NavLink
        to={link.path}
        className={styles.link}
        activeClassName={styles.active}
        exact
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >

          {link.text}
        </motion.button>
      </NavLink>
    </motion.li>
  ));

  return (
    <>
      <Media queries={{
        small: '(max-width: 599px)',
        medium: '(min-width: 600px) and (max-width: 1980px)',
        large: '(min-width: 1200px)',
      }}
      >
        {(matches) => (
          <>
            {matches.small
            && (
            <nav className={styles.navBar}>
              <MobileMenu
                variants={variants}
                createLinksFunc={createLinks}
                links={links}
              />
            </nav>
            )}
            {matches.medium
            && (
            <nav className={styles.navBar}>
              <div className="logo"><h1>Math Magicians</h1></div>
              <motion.ul
                variants={variants}
              >
                {createLinks(links)}
              </motion.ul>
            </nav>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export { NavBar as default };
