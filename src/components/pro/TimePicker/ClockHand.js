import React from 'react';

const ClockHand = ({ angle, scale }) => {
  return (
    <div className="time-picker-clock__hand" style={{ transform: `rotate(${angle}deg) scaleY(${scale})`}}></div>
  );
}

export default ClockHand;
