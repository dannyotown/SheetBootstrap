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
              min={1} 
              max={hoursFormat} 
              step={1}
              rotate={30} 
              color={color}
              value={hours}
              double={hoursFormat === 24}
              handleChange={handleHoursChange}
            />
          )
          : (
            <TimePickerClock
              min={0} 
              max={59} 
              step={5}
              rotate={0} 
              color={color}
              value={minutes}
              handleChange={handleMinutesChange}
            />
          )
        }

      </div>
    </div>
  );
}

export default ClockpickerPlate;
