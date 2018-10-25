
import React from 'react';
import TimePickerClock from './TimePickerClock';

const ClockpickerPlate = ({ color, hoursFormat, hours, minutes, onHoursChange, onMinutesChange, unitsMode }) => {
  return (
    <div class="picker__calendar-container">
      <div class="clockpicker-plate">
        {
          unitsMode === 'h' 
          ? (
            <TimePickerClock 
              v-if="unitsMode === 'h'" 
              min={1} 
              max={hoursFormat} 
              step={1}
              rotate={30} 
              color={color}
              scrollable={true}
              value={hours}
              ref="clock"
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
              ref="clock"
              onChange={onMinutesChange}
            />
          )
        }

      </div>
    </div>
  );
}

export default ClockpickerPlate;
