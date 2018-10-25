import React from 'react';

const ClockpickerFooter = ({ handleDoneClick }) => {
  return (
    <div class="picker__footer">
      <button type="button" className="btn btn-flat clockpicker-button" tabIndex="0" onClick={handleDoneClick}>Done</button>
    </div>
  );
}

export default ClockpickerFooter;
