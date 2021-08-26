/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { React, useState, useEffect } from 'react';
import styles from './progressCircleStyle.module.scss';

const containerA = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1.5,
    },
  },
};

const childVariantA = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};

const ProgressCircle = (props) => {
  const { percent } = props;
  const [endPoint, setEnd] = useState(0);

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const start = 0;

  const [startX, startY] = getCoordinatesForPercent(start);
  const [endX, endY] = getCoordinatesForPercent(endPoint);

  const largeArcFlag = endPoint > 0.5 ? 1 : 0;

  const pathData = [
    `M ${startX} ${startY}`, // Move
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
    'L 0 0', // Line
  ].join(' ');

  const style = {
    fill: `rgb( 0 0 ${percent * 100 + 150} )`,
  };

  useEffect(() => {
    setEnd(percent);
  }, [percent]);

  return (
    <motion.div className={styles.mainContainer}>
      <motion.div
        className={styles.percentContainer}
        variants={containerA}
        initial="initial"
        animate="animate"
      >
        <motion.svg
          variants={childVariantA}
          style={style}
          className={styles.circlePercent}
          viewBox="-1 -1 2 2"
        >
          <path
            d={pathData}
          />
        </motion.svg>
        <motion.div
          className={styles.textContainer}
          variants={childVariantA}
        >
          <p className={styles.number}>{`${percent * 100}%`}</p>
          <p className={styles.text}>Completed</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default ProgressCircle;
