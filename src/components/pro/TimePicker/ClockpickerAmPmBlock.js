import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  dayTime: PropTypes.string.isRequired,
  handleDayTimeChange: PropTypes.func.isRequired
}

const ClockpickerAmPmBlock = ({ dayTime, handleDayTimeChange }) => {
  const classesAM = classNames(
    'btn-floating', 'btn-flat', 'clockpicker-button', 'am-button',
    dayTime === 'am' && 'active'
  );

  const classesPM = classNames(
    'btn-floating', 'btn-flat', 'clockpicker-button', 'am-button',
    dayTime === 'pm' && 'active'
  );

  return (
    <div className="clockpicker-am-pm-block d-flex justify-content-between">
      <button type="button" className={classesAM} onClick={() => handleDayTimeChange('am')}>AM</button>
      <button type="button" className={classesPM} onClick={() => handleDayTimeChange('pm')}>PM</button>
    </div>
  );
}

ClockpickerAmPmBlock.propTypes = propTypes;

export default ClockpickerAmPmBlock;