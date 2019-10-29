import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../clock.css';
import TimePickerDisplay from '../TimePickerDisplay';
import TimePickerClock from '../TimePickerClock';
import TimePickerAmPmBlock from '../TimePickerAmPmBlock';
import TimePickerFooter from '../TimePickerFooter';

const propTypes = {
  id: PropTypes.string.isRequired,
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  autoSwitch: PropTypes.bool,
  cancelable: PropTypes.bool,
  cancelText: PropTypes.string,
  clearable: PropTypes.bool,
  clearText: PropTypes.string,
  closeOnCancel: PropTypes.bool,
  color: PropTypes.string,
  dayTime: PropTypes.string,
  doneText: PropTypes.string,
  getValue: PropTypes.func,
  hours: PropTypes.number,
  hoursFormat: PropTypes.number,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  minutes: PropTypes.number,
  placeholder: PropTypes.string,
  startFromInner: PropTypes.bool
};

const defaultProps = {
  allowedValues: [],
  autoSwitch: true,
  cancelable: false,
  cancelText: 'Cancel',
  clearable: false,
  clearText: 'Clear',
  closeOnCancel: false,
  color: 'primary',
  dayTime: 'am',
  doneText: 'Done',
  getValue: () => {},
  hours: 12,
  hoursFormat: 12,
  label: '',
  minutes: 0,
  placeholder: '',
  startFromInner: true
};

class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowedValues: [],
      computedHours: '',
      computedMinutes: '',
      dayTime: this.props.dayTime,
      hours: this.props.hours,
      minutes: this.props.minutes,
      pickerDialogOpen: false,
      unitsMode: 'h',
      value: ''
    };
  }

  componentDidMount() {
    this.setState(
      {
        computedHours: this.computeTimeNumber(this.state.hours),
        computedMinutes: this.computeTimeNumber(this.state.minutes)
      },
      () => this.setInputText()
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.minutes !== this.state.minutes) {
      this.setState({
        computedMinutes: this.computeTimeNumber(this.state.minutes)
      });
    }

    if (prevState.hours !== this.state.hours) {
      this.setState({
        computedHours: this.computeTimeNumber(this.state.hours)
      });
    }

    if (prevState.value !== this.state.value) {
      this.props.getValue(this.state.value);
    }

    if (prevProps.hours !== this.props.hours) {
      this.setState(
        {
          computedHours: this.computeTimeNumber(this.props.hours),
          hours: this.props.hours
        },
        () => {
          this.setInputText();
        }
      );
    }

    if (prevProps.minutes !== this.props.minutes) {
      this.setState(
        {
          computedMinutes: this.computeTimeNumber(this.props.minutes),
          minutes: this.props.minutes
        },
        () => {
          this.setInputText();
        }
      );
    }
    if (prevProps.dayTime !== this.props.dayTime) {
      this.setState(
        {
          dayTime: this.props.dayTime
        },
        () => {
          this.setInputText();
        }
      );
    }
  }

  setInputText = () => {
    let value = '';

    if (
      this.state.hours !== null &&
      this.state.minutes !== null &&
      this.state.hours < 25 &&
      this.state.hours >= 0 &&
      this.state.minutes < 60 &&
      this.state.minutes >= 0
    ) {
      if (this.props.hoursFormat === 12) {
        if (this.state.hours > 12 && this.state.hours < 24) {
          value = `${this.state.computedHours - 12}:${
            this.state.computedMinutes
          }PM`;
        } else if (this.state.hours === 24 || this.state.hours === 0) {
          value = `${parseInt(this.state.computedHours) + 12}:${
            this.state.computedMinutes
          }AM`;
        } else {
          console.log(this.state.dayTime);
          value = `${this.state.computedHours}:${
            this.state.computedMinutes
          }${this.state.dayTime.toUpperCase()}`;
        }
      } else {
        value = `${this.state.computedHours}:${this.state.computedMinutes}`;
      }
    }

    this.setState({
      value,
      unitsMode: 'h',
      dayTime: 'am'
    });
  };

  computeTimeNumber = number => {
    if (number !== null) {
      number = this.state.unitsMode === 'h' && number === 24 ? 0 : number;
      return number < 10 ? `0${number.toString()}` : `${number.toString()}`;
    }

    return '';
  };

  handlePickerDialogOpen = () =>
    this.setState({ pickerDialogOpen: !this.state.pickerDialogOpen });

  handleModeChange = unitsMode => this.setState({ unitsMode });

  handleDayTimeChange = dayTime => this.setState({ dayTime });

  handleMinutesChange = minutes => this.setState({ minutes });

  handleHoursChange = hours => {
    this.setState({ hours });
  };

  handleBackdropClick = e => {
    if (e.target.classList.value === 'picker__holder') {
      this.handlePickerDialogOpen();
    }
  };

  handleDoneClick = () => {
    this.setInputText();
    this.handlePickerDialogOpen();
  };

  handleClearClick = () => {
    this.handleHoursChange(null);
    this.handleMinutesChange(null);
    this.handleModeChange('h');
    this.handleDayTimeChange('am');
  };

  handleCancelClick = () => {
    this.handleHoursChange(this.props.hours);
    this.handleMinutesChange(this.props.minutes);
    this.handleModeChange('h');
    this.handleDayTimeChange('am');

    if (this.props.closeOnCancel) {
      this.handlePickerDialogOpen();
    }
  };

  render() {
    const {
      computedHours,
      computedMinutes,
      dayTime,
      hours,
      minutes,
      pickerDialogOpen,
      unitsMode,
      value
    } = this.state;

    const {
      allowedValues,
      autoSwitch,
      cancelable,
      cancelText,
      clearable,
      clearText,
      color,
      doneText,
      hoursFormat,
      id,
      label,
      placeholder,
      startFromInner
    } = this.props;

    const inputClasses = classNames(
      'form-control',
      'timepicker',
      pickerDialogOpen && 'picker__input picker__input--active'
    );

    const clockClasses = classNames(
      'clockpicker',
      'picker',
      pickerDialogOpen && 'picker--opened'
    );

    const hoursClasses = classNames(
      'clockpicker-hours',
      unitsMode !== 'h' && 'clockpicker-dial-out'
    );

    const minutesClasses = classNames(
      'clockpicker-minutes',
      unitsMode !== 'm' && 'clockpicker-dial-out'
    );

    return (
      <div className='md-form'>
        <input
          type='text'
          placeholder={placeholder}
          id={id}
          className={inputClasses}
          value={value}
          onClick={this.handlePickerDialogOpen}
          readOnly
        />
        <label htmlFor={id} className='active'>
          {label}
        </label>

        {pickerDialogOpen && (
          <div className={clockClasses}>
            <div className='picker__holder' onClick={this.handleBackdropClick}>
              <div className='picker__frame'>
                <div className='picker__wrap'>
                  <div className='picker__box'>
                    <TimePickerDisplay
                      color={color}
                      hours={computedHours}
                      minutes={computedMinutes}
                      dayTime={dayTime}
                      unitsMode={unitsMode}
                      handleModeChange={this.handleModeChange}
                      hoursFormat={hoursFormat}
                    />
                    <div className='picker__calendar-container'>
                      <div className='clockpicker-plate'>
                        {unitsMode === 'h' ? (
                          <TimePickerClock
                            allowedValues={allowedValues}
                            autoSwitch={autoSwitch}
                            className={hoursClasses}
                            color={color}
                            double={hoursFormat === 24}
                            handleChange={this.handleHoursChange}
                            handleModeChange={this.handleModeChange}
                            min={1}
                            max={hoursFormat}
                            step={1}
                            rotate={30}
                            startFromInner={startFromInner}
                            value={hours}
                          />
                        ) : (
                          <TimePickerClock
                            className={minutesClasses}
                            color={color}
                            handleChange={this.handleMinutesChange}
                            min={0}
                            max={59}
                            step={5}
                            rotate={0}
                            startFromInner={startFromInner}
                            value={minutes}
                          />
                        )}
                      </div>
                      {hoursFormat === 12 && (
                        <TimePickerAmPmBlock
                          color={color}
                          dayTime={dayTime}
                          handleDayTimeChange={this.handleDayTimeChange}
                        />
                      )}
                    </div>
                    <TimePickerFooter
                      cancelText={cancelText}
                      clearText={clearText}
                      doneText={doneText}
                      cancelable={cancelable}
                      clearable={clearable}
                      handleCancelClick={this.handleCancelClick}
                      handleClearClick={this.handleClearClick}
                      handleDoneClick={this.handleDoneClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
export { TimePicker as MDBTimePicker };
