import React from 'react';
import PropTypes from 'prop-types';
import TimePickerClock from './TimePickerClock';

const propTypes = {
  color: PropTypes.string.isRequired,
  hoursFormat: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  handleHoursChange: PropTypes.func.isRequired,
  handleMinutesChange: PropTypes.func.isRequired,
  unitsMode: PropTypes.string.isRequired
};

const ClockpickerPlate = ({ color, hoursFormat, hours, minutes, handleHoursChange, handleMinutesChange, unitsMode }) => {
  return (
    <div className="picker__calendar-container">
      <div className="clockpicker-plate">
        {
          unitsMode === 'h' 
          ? (
            <TimePickerClock
              color={color}
              double={hoursFormat === 24}
              handleChange={handleHoursChange}
              hoursFormat={hoursFormat}
              min={1} 
              max={hoursFormat} 
              step={1}
              rotate={30} 
              value={hours}
            />
          )
          : (
            <TimePickerClock
              color={color}
              handleChange={handleMinutesChange}
              min={0} 
              max={59} 
              step={5}
              rotate={0} 
              value={minutes}
            />
          )
        }

      </div>
    </div>
  );
}

ClockpickerPlate.propTypes = propTypes;

export default ClockpickerPlate;
