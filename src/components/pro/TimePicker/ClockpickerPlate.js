import React from 'react';
import TimePickerClock from './TimePickerClock';

const ClockpickerPlate = ({ color, hoursFormat, hours, minutes, onHoursChange, onMinutesChange, unitsMode }) => {
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
              scrollable={true}
              value={hours}
              double={hoursFormat === 24}
              onChange={onHoursChange}
            />
          )
          : (
            <TimePickerClock
              min={0} 
              max={59} 
              step={5}
              rotate={0} 
              color={color}
              scrollable={true}
              value={minutes}
              onChange={onMinutesChange}
            />
          )
        }

      </div>
    </div>
  );
}

export default ClockpickerPlate;
