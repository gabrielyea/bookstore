import { motion } from 'framer-motion';
import { React } from 'react';
import styles from './chapterStyle.module.scss';

const containerA = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2.5,
    },
  },
};

const childVariantA = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};

const childVariantB = {
  initial: {
    x: 100,
    opacity: 0,
    scale: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};

const Chapter = () => (
  <motion.div
    className={styles.chapterContainer}
    variants={containerA}
    initial="initial"
    animate="animate"
  >
    <motion.p
      className={styles.currentChapter}
      variants={childVariantA}
    >
      CURRENT CHAPTER
    </motion.p>
    <motion.p
      className={styles.chapterName}
      variants={childVariantA}
    >
      A chapter
    </motion.p>
    <motion.div variants={childVariantB}>
      <motion.button
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
        className={styles.btn}
        type="button"
      >
        UPDATE PROGRESS
      </motion.button>
    </motion.div>
  </motion.div>
);

export default Chapter;
