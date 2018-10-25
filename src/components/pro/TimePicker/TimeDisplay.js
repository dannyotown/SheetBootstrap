import React from 'react';
import classNames from 'classnames';

const TimeDisplay = ({ hours, minutes, dayTime, unitsMode, handleModeChange, hoursFormat }) => {
  const hourClasses = classNames(
    'clockpicker-span-hours',
    unitsMode === 'h' && 'text-primary'
  );
  
  const minuteClasses = classNames(
    'clockpicker-span-minutes',
    unitsMode === 'm' && 'text-primary'
  );

  return (
    <div class="picker__date-display">
      <div class="clockpicker-display">
        <div class="clockpicker-display-column">
          <span 
            className={hourClasses}
            onClick={() => handleModeChange('h')}
          >{{ hours }}</span>:<span 
            className={minuteClasses}
            onClick={() => handleModeChange('m')}  
          >{{ minutes }}</span>
        </div>
        {
          hoursFormat === 12 &&
          <div className="clockpicker-display-column clockpicker-display-am-pm">
            <div className="clockpicker-span-am-pm">{{ dayTime }}</div>
          </div>
        }
      </div>
    </div>
  );
}

export default TimeDisplay;