import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet
require('./DatePickerStyles.css');

var today = new Date();

class DatePickerPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      showPicker : false
    }
    this.onClick = this.onClick.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
    this.datePick = this.datePick.bind(this);
    this.headerUpdate = this.headerUpdate.bind(this);
  }

  togglePicker(e) {
    e.preventDefault();
    this.setState({showPicker: !this.state.showPicker});
  }

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  onClick(e) {
    if (e.target.classList.contains('picker__holder')) {
      e.preventDefault();
      this.setState({showPicker: !this.state.showPicker});
    }
  }

  componentDidUpdate() {
    // Date Picker update
    if(this.state.showPicker) {
      // create Date Picker Header
      let datePicker = document.querySelector('.Cal__Container__root');
      datePicker.classList.add('picker__box');
      let dateWrapper = document.querySelector('.Cal__Header__root');
      while (dateWrapper.firstChild) { dateWrapper.removeChild(dateWrapper.firstChild); }
      dateWrapper.classList.remove('Cal__Header__root');
      dateWrapper.classList.add('picker__header');
      let newDateHeader = document.createElement('div');
      newDateHeader.className = 'picker__date-display';
      // create New Week Day
      let newWeekday = document.createElement('div');
      newWeekday.className = 'picker__weekday-display';
      let day = today.getDay();
      if (day === 0) { day = "Sunday" } if (day === 1) { day = "Monday" } if (day === 2) { day = "Tuesday" } if (day === 3) { day = "Wednesday" } if (day === 4) { day = "Thursday" } if (day === 5) { day = "Friday" } if (day === 6) { day = "Saturday" };
      newWeekday.innerHTML = day;
      // creat New Month
      let newMonth = document.createElement('div');
      newMonth.className = 'picker__month-display';
      let month = today.getMonth();
      if (month === 0) { month = "January" } if (month === 1) { month = "February" } if (month === 2) { month = "March" } if (month === 3) { month = "April" } if (month === 4) { month = "May" } if (month === 5) { month = "June" } if (month === 6) { month = "July" } if (month === 7) { month = "August"} if (month === 8) { month = "September" } if (month === 9) { month = "October" } if (month === 10) { month = "November" } if (month === 11) { month = "December" };
      newMonth.innerHTML = month.substr(0, 3);
      // create New Date
      let newDay = document.createElement('div');
      newDay.className = 'picker__day-display';
      newDay.innerHTML = today.getDate();
      // create New Year
      let newYear = document.createElement('div');
      newYear.className = 'picker__year-display';
      newYear.innerHTML = today.getFullYear();
      // append all
      newDateHeader.appendChild(newWeekday);
      newDateHeader.appendChild(newMonth);
      newDateHeader.appendChild(newDay);
      newDateHeader.appendChild(newYear);
      dateWrapper.appendChild(newDateHeader);
    }
  }

  datePick(date) {
    let dayOfMonth = date.getDate();
    let day = date.getDay();
    if (day === 0) { day = "Sunday" } if (day === 1) { day = "Monday" } if (day === 2) { day = "Tuesday" } if (day === 3) { day = "Wednesday" } if (day === 4) { day = "Thursday" } if (day === 5) { day = "Friday" } if (day === 6) { day = "Saturday" };
    let month = date.getMonth();
    if (month === 0) { month = "January" } if (month === 1) { month = "February" } if (month === 2) { month = "March" } if (month === 3) { month = "April" } if (month === 4) { month = "May" } if (month === 5) { month = "June" } if (month === 6) { month = "July" } if (month === 7) { month = "August"} if (month === 8) { month = "September" } if (month === 9) { month = "October" } if (month === 10) { month = "November" } if (month === 11) { month = "December" };
    let year = date.getFullYear();
    let pickedDate = dayOfMonth + " " + month + ", " + year;
    document.querySelector('.datepicker').placeholder = pickedDate;
    this.headerUpdate(day, month, dayOfMonth, year);
  }

  headerUpdate(day, month, dayOfMonth, year) {
    let headerWeekday = document.querySelector('.picker__weekday-display');
    let headerMonth = document.querySelector('.picker__month-display');
    let headerDay = document.querySelector('.picker__day-display');
    let headerYear = document.querySelector('.picker__year-display');
    headerWeekday.innerHTML = day;
    headerMonth.innerHTML = month.substr(0, 3);
    headerDay.innerHTML = dayOfMonth;
    headerYear.innerHTML = year;
  }

  render() {
    return(
      <div className="container mt-5">
        <div className="md-form">
            <input onClick={this.togglePicker} placeholder="Selected date" type="text" id="date-picker-example" className="form-control datepicker" />
        </div>
        {this.state.showPicker && <div className="picker picker--focused picker--opened"><div className="picker__holder"><div className="picker__frame"><InfiniteCalendar onSelect={this.datePick} width={300} height={400} selected={today} /></div></div></div>}
      </div>
    );
  }
};

export default DatePickerPage;
