import React from 'react';
import TimePickerClock from './TimePickerClock';

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

export default ClockpickerPlate;
