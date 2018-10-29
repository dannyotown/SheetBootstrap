import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  angle: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired
};

const ClockHand = ({ angle, scale }) => {
  return (
    <div className="time-picker-clock__hand" style={{ transform: `rotate(${angle}deg)`, height: `calc((50% - 28px) * ${scale})` }}></div>
  );
}

ClockHand.propTypes = propTypes;

export default ClockHand;
