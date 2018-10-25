import React from 'react';
import classNames from 'classnames';

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
    <div className="clockpicker-am-pm-block">
      <button type="button" className={classesAM} onClick={() => handleDayTimeChange('am')}>AM</button>
      <button type="button" className={classesPM} onClick={() => handleDayTimeChange('pm')}>PM</button>
    </div>
  );
}

export default ClockpickerAmPmBlock;