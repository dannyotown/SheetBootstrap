import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './clock.css';
import TimeDisplay from './TimeDisplay';
import ClockpickerPlate from './ClockpickerPlate';
import ClockpickerAmPmBlock from './ClockpickerAmPmBlock';
import ClockpickerFooter from './ClockpickerFooter';

const propTypes = {
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.string.isRequired,
  clearable: PropTypes.bool,
  color: PropTypes.string,
  getValue: PropTypes.func,
  hours: PropTypes.number,
  hoursFormat: PropTypes.number,
  label: PropTypes.string,
  minutes: PropTypes.number,
  placeholder: PropTypes.string,
  startFromInner: PropTypes.bool
};

const defaultProps = {
  allowedValues: [],
  clearable: false,
  color: 'primary',
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
      dayTime: 'am',
      hours: this.props.hours,
      minutes: this.props.minutes,
      pickerDialogOpen: false,
      unitsMode: 'h',
      value: ''
    };
  }

  componentDidMount() {
    this.setState({
      computedHours: this.computeTimeNumber(this.state.hours),
      computedMinutes: this.computeTimeNumber(this.state.minutes)
    }, () => this.setInputText());
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.minutes !== this.state.minutes) {
      this.setState({ computedMinutes: this.computeTimeNumber(this.state.minutes) });
    }

    if(prevState.hours !== this.state.hours) {
      this.setState({ computedHours: this.computeTimeNumber(this.state.hours) });
    }
  }

  setInputText = () => {
    this.setState({ 
      value: this.props.hoursFormat === 12 
      ? `${this.state.computedHours}:${this.state.computedMinutes}${this.state.dayTime}` 
      : `${this.state.computedHours}:${this.state.computedMinutes}`,
      unitsMode: 'h'  
    });
  }
  
  computeTimeNumber = (number) => {
    number = (this.state.unitsMode === 'h' && number === 24) ? 0 : number; 
    return number < 10 ? `0${number.toString()}` : `${number.toString()}`;
  }

  handlePickerDialogOpen = () => this.setState({ pickerDialogOpen: !this.state.pickerDialogOpen });

  handleModeChange = (unitsMode) => this.setState({ unitsMode });

  handleDayTimeChange = (dayTime) => this.setState({ dayTime });

  handleMinutesChange = (minutes) => this.setState({ minutes });

  handleHoursChange = (hours) => this.setState({ hours });

  handleDoneClick = () => {
    this.setInputText();
    this.handlePickerDialogOpen();
  }

  handleClearClick = () => {
    this.handleHoursChange(this.props.hours);
    this.handleMinutesChange(this.props.minutes);
    this.handleModeChange('h');
    this.handleDayTimeChange('am');
  }

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
      clearable,
      color,
      hoursFormat,
      id,
      label,
      placeholder,
      startFromInner
    } = this.props;

    const inputClasses = classNames(
      "form-control",
      "timepicker",
      pickerDialogOpen && "picker__input picker__input--active"
    );

    const clockClasses = classNames(
      "clockpicker",
      "picker",
      pickerDialogOpen && "picker--opened"
    );

    return (
      <div className="md-form">
        <input 
          type="text" 
          placeholder={placeholder} 
          id={id} 
          className={inputClasses}
          value={value} 
          onClick={this.handlePickerDialogOpen}
          readOnly
        />
        <label htmlFor={id} className="active">{label}</label>
        
        { 
          pickerDialogOpen && 
          <div className={clockClasses} >
            <div className="picker__holder">
              <div className="picker__frame">
                <div className="picker__wrap">
                  <div className="picker__box">
                    <TimeDisplay 
                      hours={computedHours}
                      minutes={computedMinutes} 
                      dayTime={dayTime} 
                      unitsMode={unitsMode} 
                      handleModeChange={this.handleModeChange} 
                      hoursFormat={hoursFormat} 
                    />
                    <ClockpickerPlate
                      color={color}
                      handleMinutesChange={this.handleMinutesChange} 
                      handleHoursChange={this.handleHoursChange} 
                      handleModeChange={this.handleModeChange} 
                      hours={hours}
                      hoursFormat={hoursFormat} 
                      minutes={minutes}
                      startFromInner={startFromInner}
                      unitsMode={unitsMode} 
                    />
                    {
                      hoursFormat === 12 &&
                      <ClockpickerAmPmBlock dayTime={dayTime} handleDayTimeChange={this.handleDayTimeChange} />
                    }
                    <ClockpickerFooter clearable={clearable} handleClearClick={this.handleClearClick} handleDoneClick={this.handleDoneClick} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;