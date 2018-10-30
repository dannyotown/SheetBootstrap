import React from 'react';
import PropTypes from 'prop-types';
import Button from './../../Button';

const propTypes = {
  cancelable: PropTypes.bool.isRequired,
  cancelText: PropTypes.string.isRequired,
  clearable: PropTypes.bool.isRequired,
  clearText: PropTypes.string.isRequired,
  doneText: PropTypes.string.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
  handleClearClick: PropTypes.func.isRequired,
  handleDoneClick: PropTypes.func.isRequired
};

const ClockpickerFooter = ({ cancelable, cancelText, clearable, clearText, doneText, handleCancelClick, handleClearClick, handleDoneClick }) => {
  return (
    <div className="picker__footer">
      {
        clearable &&
        <Button flat className="clockpicker-button" tabIndex="0" onClick={handleClearClick}>{clearText}</Button>
      }
      {
        cancelable &&
        <Button flat className="clockpicker-button" tabIndex="0" onClick={handleCancelClick}>{cancelText}</Button>
      }
      <Button flat className="clockpicker-button" tabIndex="0" onClick={handleDoneClick}>{doneText}</Button>
    </div>
  );
}

ClockpickerFooter.propTypes = propTypes;

export default ClockpickerFooter;
