import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  clearable: PropTypes.bool.isRequired,
  handleClearClick: PropTypes.func.isRequired,
  handleDoneClick: PropTypes.func.isRequired
};

const ClockpickerFooter = ({ clearable, handleClearClick, handleDoneClick }) => {
  return (
    <div className="picker__footer d-flex justify-content-between">
      {
        clearable &&
        <button type="button" className="btn btn-flat clockpicker-button" tabIndex="0" onClick={handleClearClick}>Clear</button>
      }
      <button type="button" className="btn btn-flat clockpicker-button" tabIndex="0" onClick={handleDoneClick}>Done</button>
    </div>
  );
}

ClockpickerFooter.propTypes = propTypes;

export default ClockpickerFooter;
