/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';

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

  useEffect(() => {
    setEnd(percent);
  }, [percent]);

  const style = {
    transform: 'rotate(-0.25turn) scale(0.25)',
    fill: 'blue',
  };

  return (
    <div>
      <svg
        viewBox="-1 -1 2 2"
        style={style}
      >
        <path
          d={pathData}
        />
      </svg>
    </div>
  );
};
export default ProgressCircle;
