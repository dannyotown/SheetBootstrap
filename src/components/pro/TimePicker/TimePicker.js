import React, { Component } from 'react';
import classNames from 'classnames';
import TimeDisplay from './TimeDisplay';
import ClockpickerPlate from './ClockpickerPlate';
import ClockpickerAmPmBlock from './ClockpickerAmPmBlock';
import ClockpickerFooter from './ClockpickerFooter';

class TimePicker extends Component {
  state = {
    computedHours: '',
    computedMinutes: '',
    dayTime: 'am',
    hours: 12,
    hoursFormat: 12,
    minutes: 0,
    pickerDialogOpen: false ,
    unitsMode: 'h',
    value: null
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.minutes !== this.state.minutes) {
      this.setState({ minutes: this.computeTimeNumber(this.state.minutes) });
    }

    if(prevState.hours !== this.state.hours) {
      this.setState({ hours: this.computeTimeNumber(this.state.hours) });
    }
  }
  
  computeTimeNumber = (number) => number < 10 ? `0${number.toString()}` : `${number.toString()}`;

  handlePickerDialogOpen = () => this.setState({ pickerDialogOpen: !this.state.pickerDialogOpen });

  handleModeChange = (unitsMode) => this.setState({ unitsMode });

  handleDayTimeChange = (dayTime) => this.setState({ dayTime });

  handleMinutesChange = (minutes) => this.setState({ minutes });

  handleHoursChange = (hours) => this.setState({ hours });

  handleDoneClicked = () => {
    this.setState({ 
      value: this.state.hoursFormat === 12 
      ? `${this.state.computedHours}:${this.state.computedMinutes}${this.state.dayTime}` 
      : `${this.state.computedHours}:${this.state.computedMinutes}`,
      unitsMode: 'h'  
    });
    this.handlePickerDialogOpen();
  }

  render() {
    const {
      computedHours,
      computedMinutes,
      dayTime,
      hours,
      hoursFormat,
      minutes,
      pickerDialogOpen,
      unitsMode,
      value
    } = this.state;

    const {
      color,
      id,
      label,
      placeholder
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
      <div class="md-form">
        <input 
          type="text" 
          placeholder={placeholder} 
          id={id} 
          className={inputClasses}
          value={value} 
          onClick={this.handlePickerDialogOpen}
        />
        <label for={id} className="active">{label}</label>
        
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
                      handleMinutesChange={this.handleMinutesChange} 
                      handleHoursChange={this.handleHoursChange} 
                      handleModeChange={this.handleModeChange} 
                      hours={hours}
                      minutes={minutes}
                      unitsMode={unitsMode} 
                      color={color} 
                      hoursFormat={hoursFormat} 
                    />
                    {
                      hoursFormat === 12 &&
                      <ClockpickerAmPmBlock handleDayTimeChange={this.handleDayTimeChange} />
                    }
                    <ClockpickerFooter handleDoneClicked={this.handleDoneClicked} />
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

export default TimePicker;