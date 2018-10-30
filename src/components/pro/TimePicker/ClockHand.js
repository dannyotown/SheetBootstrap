import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  angle: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired
};

const ClockHand = ({ angle, color, scale }) => {
  const classes = classNames(
    'time-picker-clock__hand',
    color
  );

  return (
    <div className={classes} style={{ transform: `rotate(${angle}deg)`, height: `calc((50% - 28px) * ${scale})` }}></div>
  );
}

ClockHand.propTypes = propTypes;

export default ClockHand;
