import classNames from 'classnames';
import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
// import './_default-date.scss';
import { makeFirstLetterUpper, makeRandomID } from './Utils';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from 'react-dom';

class DatePickerV5 extends Component {
  state = {
    actualDate: null,
    hovered: null,
    inputValue: '',
    lastDate: null,
    dayDate: [],
    modalOpen: false,
    selectedDate: null,
    getYears: false,
    years: [],
    weekDays: [],
    topPositionOfInput: 0,
    leftPositionOfInput: 0,
    rightPositionOfInput: 0,
    windowX: 0,
    windowY: 0,
    yearsArray: [],
    scrolledYears: false,
    toggleTransition: false,
    initialTheme: ''
  };

  monthDaysRef = [];
  yearsRef = createRef();
  inputRef;
  containerRef = createRef();
  inlinePicker = createRef();

  componentDidMount() {
    const { actualDate, modalOpen } = this.state;
    const { locale, format, value, valueDefault, minDate, inline, maxDate } = this.props;

    this.addYears(moment(minDate).get('years'), moment(maxDate).get('years'), true);
    this.makeYears();

    this.setState({
      actualDate: value || valueDefault,
      dayDate: this.makeMonth(value || valueDefault || new Date()),
      weekDays: moment.localeData(locale).weekdays(),
      inputValue: moment(actualDate)
        .locale(locale)
        .format(format)
    });

    if (inline && !modalOpen) {
      const { top, left, right } = this.inputRef.getBoundingClientRect();
      this.setState({
        topPositionOfInput: top,
        leftPositionOfInput: left,
        rightPositionOfInput: right
      });
    }

    document.addEventListener('keydown', this.keyboardChangeDate);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardChangeDate);
    document.removeEventListener('scroll resize', this.checkPositionInline);
  }

  componentDidUpdate(prevProps, prevState) {
    const { getValue, keyboard, value, format, inline, theme } = this.props;
    const { actualDate, modalOpen, hoverButton, dayDate } = this.state;

    if (getValue && prevState.modalOpen !== modalOpen && !modalOpen) {
      getValue(moment(actualDate)._d);
    }

    if (`${value}` !== `${prevProps.value}`) {
      this.setState({
        actualDate: value,
        dayDate: this.makeMonth(value)
      });
    }

    if (modalOpen && actualDate !== prevState.actualDate) {
      this.setState({
        inputValue: keyboard && `${moment(actualDate).format(format)}`
      });
    }

    if (modalOpen && inline && prevState.modalOpen !== modalOpen) {
      document.body.classList.add('picker-body-disable-scroll');
      document.addEventListener('scroll resize', this.checkPositionInline());
      document.addEventListener('mousedown', this.handleClickOutside);
    } else if (!modalOpen && inline) {
      document.body.classList.remove('picker-body-disable-scroll');
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    if (prevState.hoverButton !== hoverButton) {
      this.setState({ hoverButton });
    }
  }

  updateDimensions = () => {
    this.setState({ windowX: window.innerWidth, windowY: window.innerHeight });
  };

  handleClickOutside = event => {
    if (this.inlinePicker && !this.inlinePicker.contains(event.target)) {
      this.toggleModal();
    }
  };

  addYears = (from, to, state) => {
    let years = [];
    for (let i = from; i <= to; i++) {
      years.push(i);
    }

    if (state) {
      return this.setState({ years });
    } else {
      return years;
    }
  };

  hideYears = () => {
    this.setState({ getYears: false });
  };

  checkPositionInline = e => {
    const { left, right, top, bottom } = document.getElementById(this.inputRef.id).getBoundingClientRect();

    if (right <= 310 && left <= 310) {
      this.setState({
        leftPositionOfInput: left - (310 - right)
      });
    } else {
      this.setState({
        leftPositionOfInput: left
      });
    }
    if (window.innerHeight - bottom <= 360) {
      this.setState({
        topPositionOfInput: 'unset',
        bottomPositionOfInput: window.innerHeight - top
      });
    } else if (window.innerHeight - (window.innerHeight - top) <= 360) {
      this.setState({
        topPositionOfInput: bottom + 10
      });
    } else {
      this.setState({
        topPositionOfInput: bottom + 10
      });
    }
  };

  showYear = () =>
    this.setState({ getYears: !this.state.getYears }, () => {
      if (this.state.getYears) {
        const { actualDate } = this.state;
        const { inline, scrolledYears } = this.props;

        const isInline = inline ? 180 : 280;
        if (scrolledYears) {
          // const actualYear = Array.from(this.yearsRef.current.children).filter(
          //   el => el.innerText === `${moment(actualDate || new Date()).format('YYYY')}`
          // )[0];
          // document.querySelector('.picker__scrollMobile-height').scroll({
          //   left: 0,
          //   top: actualYear.offsetTop - isInline,
          //   behavior: this.props.animateYearScrolling ? 'smooth' : 'auto'
          // });
        }
      }
    });

  keyboardChangeDate = event => {
    const { allowKeyboardControl, disableFuture, disablePast, maxDate, minDate } = this.props;
    const { actualDate, modalOpen, getYears, yearsArray } = this.state;
    const { key } = event;
    const firstDayInMonth = new Date(moment(actualDate || new Date())._d).getDate();
    const actualIndex = yearsArray[0].findIndex(e => e === Number(moment(actualDate || new Date()).get('year')));

    if (allowKeyboardControl) {
      if (modalOpen) {
        const changeTypes = (step, types, type) => {
          let _date = actualDate ? actualDate : new Date();
          let newTypes = moment(_date).add(step, types);

          const AFTER = disableFuture && moment(newTypes).isAfter(new Date(), type);
          const BEFORE = disablePast && moment(newTypes).isBefore(new Date(), type);

          const MAX_TYPE = moment(newTypes).isAfter(moment(maxDate), type);
          const MIN_TYPE = moment(newTypes).isBefore(moment(minDate), type);

          this.setState({
            actualDate: AFTER || BEFORE || MAX_TYPE || MIN_TYPE ? moment(_date) : moment(newTypes),
            dayDate: AFTER || BEFORE || MAX_TYPE || MIN_TYPE ? this.makeMonth(_date) : this.makeMonth(newTypes)
          });

          if (types === 'years') {
            this.makeYears();
          }
        };

        const skipMonth = moved => {
          return moment(actualDate || new Date())
            .add((moved === 'up' && -1) || (moved === 'down' && 1), 'months')
            .daysInMonth();
        };

        if (key === 'ArrowUp') {
          event.preventDefault();

          getYears ? changeTypes(-3, 'years', 'year') : changeTypes(-7, 'days', 'date');

          // const actualYear = Array.from(this.yearsRef.current.children).filter(
          //   el => el.innerText === `${moment(actualDate || new Date()).format('YYYY')}`
          // )[0];

          // document.querySelector('.picker__scrollMobile-height').scrollTo({
          //   left: 0,
          //   top: actualYear.offsetTop + actualYear.offsetHeight,
          //   behavior: this.props.animateYearScrolling ? 'smooth' : 'auto'
          // });
        }

        if (key === 'ArrowDown') {
          event.preventDefault();

          getYears ? changeTypes(3, 'years', 'year') : changeTypes(7, 'days', 'date');

          // const actualYear = Array.from(this.yearsRef.current.children).filter(
          //   el => el.innerText === `${moment(actualDate || new Date()).format('YYYY')}`
          // )[0];

          // document.querySelector('.picker__scrollMobile-height').scroll({
          //   left: 0,
          //   top: actualYear.offsetTop - 182,
          //   behavior: this.props.animateYearScrolling ? 'smooth' : 'auto'
          // });
        }
        if (key === 'ArrowLeft') {
          event.preventDefault();

          getYears ? changeTypes(-1, 'years', 'year') : changeTypes(-1, 'days', 'date');
        }
        if (key === 'ArrowRight') {
          event.preventDefault();

          getYears ? changeTypes(1, 'years', 'year') : changeTypes(1, 'days', 'date');
        }
        if (key === 'PageUp') {
          event.preventDefault();

          getYears ? changeTypes(-12, 'years', 'year') : changeTypes(-skipMonth('up'), 'days', 'date');
        }
        if (key === 'PageDown') {
          event.preventDefault();

          getYears ? changeTypes(12, 'years', 'year') : changeTypes(skipMonth('up'), 'days', 'date');
        }
        if (key === 'Home') {
          event.preventDefault();

          getYears ? changeTypes(-actualIndex, 'years', 'year') : changeTypes(-firstDayInMonth + 1, 'days', 'date');
        }
        if (key === 'End') {
          event.preventDefault();
          const actualDaysInMonth = moment(actualDate || new Date()).daysInMonth();

          getYears
            ? changeTypes(yearsArray[0].length - 1 - actualIndex, 'years', 'year')
            : changeTypes(actualDaysInMonth - firstDayInMonth, 'days', 'date');
        }

        if (key === 'Escape') {
          this.cancelModal();
        }

        if (key === 'Enter') {
          event.preventDefault();
          if (getYears) {
            this.setState({ getYears: false });
          } else {
            this.setState({ modalOpen: false });
          }
        }

        if (event.shiftKey && event.code === 'KeyQ') {
          event.preventDefault();

          this.setState({ getYears: !this.state.getYears });
        }
      }
    }
  };

  makeMonth = date => {
    let month = [];
    let dayDate = [];
    let firstDayID = Number(
      moment(date)
        .startOf('month')
        .format('d')
    );
    let days = moment(date).daysInMonth();

    for (let i = 0; i < firstDayID; i++) {
      month.push('');
    }
    for (let i = 0; i < days; i++) {
      month.push(i + 1);
    }

    while (month.length > 0) {
      let arr = [];

      for (let i = 0; i < 7; i++) {
        let day = month.shift();
        let data = {
          id: day || '',
          day:
            day &&
            moment(date)
              .locale(this.props.locale)
              .set('date', day)
        };
        arr.push(data);
      }
      dayDate.push(arr);
    }

    return dayDate;
  };

  makeYears = () => {
    const { actualDate } = this.state;
    const { minDate, maxDate } = this.props;

    const chunk = (arr, size) =>
      arr.reduce((acc, _, i) => {
        if (i % size === 0) {
          acc.push(arr.slice(i, i + size));
        }
        return acc;
      }, []);

    const chunkedYears = chunk(this.addYears(moment(minDate).get('years'), moment(maxDate).get('years')), 12);
    const actualYear = Number(moment(actualDate || new Date()).format('YYYY'));
    const yearsArray = chunkedYears.filter(years => years.includes(actualYear));

    return this.setState({ yearsArray });
  };

  changeMonth = step => {
    const { actualDate } = this.state;

    const NEW_MONTH = moment(actualDate || new Date())
      .add(step, 'months')
      .set({ date: step > 0 ? 1 : 0 });

    this.setState({
      actualDate: NEW_MONTH,
      dayDate: this.makeMonth(NEW_MONTH._d)
    });
  };

  changeYear = step => {
    const { actualDate } = this.state;
    const { maxDate, minDate } = this.props;

    const NEW_YEAR = moment(actualDate || new Date()).add(step, 'year');
    const MAX_TYPE = moment(NEW_YEAR).isAfter(moment(maxDate), 'year') && moment(maxDate);
    const MIN_TYPE = moment(NEW_YEAR).isBefore(moment(minDate), 'year') && moment(minDate);

    this.setState(
      {
        actualDate: MAX_TYPE || MIN_TYPE || moment(NEW_YEAR),
        dayDate: this.makeMonth(NEW_YEAR._d),
        toggleTransition: true
      },
      () => {
        this.makeYears();

        setTimeout(() => {
          this.setState({
            toggleTransition: false
          });
        }, 300);
      }
    );
  };

  toggleModal = () =>
    setTimeout(() => {
      this.setState({
        modalOpen: false
      });
    }, 300);

  openModal = () =>
    this.setState({
      lastDate: this.state.actualDate,
      modalOpen: true,
      getYears: false
    });

  escapeButton = () => {
    this.setState({
      actualDate: null,
      dayDate: this.makeMonth(new Date())
    });
  };

  cancelModal = () => {
    this.toggleModal();
    this.setState({
      actualDate: this.state.lastDate,
      dayDate: this.makeMonth(this.state.lastDate || new Date())
    });
  };

  setActive = e => {
    const { dayDate } = this.state;
    const { autoOk, format } = this.props;
    const date = dayDate
      .flat()
      .filter(el => moment(el.day).format(format) === e.currentTarget.getAttribute('aria-label'))[0].day;

    this.setState({
      actualDate: moment(date),
      modalOpen: !autoOk
    });
  };

  setActiveYear = e => {
    const { actualDate } = this.state;
    const { autoOk } = this.props;

    let _year = e.currentTarget.innerText;
    let _newDate = moment(actualDate || new Date()).set('year', Number(_year));
    setTimeout(() => {
      this.setState({
        actualDate: _newDate,
        dayDate: this.makeMonth(_newDate),
        modalOpen: !autoOk,
        getYears: false
      });
    }, 300);
  };

  setToday = () =>
    this.setState({
      actualDate: new Date(),
      dayDate: this.makeMonth(new Date())
    });

  changeHandler = event => {
    const { value } = event.target;
    const { maxDate, minDate } = this.props;
    this.setState({ inputValue: value }, () => {
      const date = moment(value, this.props.format, true)._d;

      const isDate = date != ('Invalid Date' || '');
      const isBetween = moment(date).isBetween(moment(minDate), moment(maxDate), 'date');

      this.setState({
        actualDate: (isDate && isBetween && moment(date)) || moment(new Date()),
        dayDate: this.makeMonth((isDate && isBetween && date) || moment(new Date()))
      });
    });
  };

  setHover = e => {
    const { actualDate } = this.state;

    this.setState({
      actualDate,
      hoverButton: true
    });
  };
  unsetHover = () => this.setState({ hoverButton: false });

  render() {
    const {
      theme,
      adornmentPosition,
      allowKeyboardControl,
      animateYearScrolling,
      autoOk,
      cancelLabel,
      clearable,
      clearLabel,
      disableFuture,
      disableOpenOnEnter,
      disablePast,
      emptyLabel,
      InputAdornmentProps,
      invalidDateMessage,
      invalidLabel,
      keyboard,
      keyboardIcon,
      leftArrowIcon,
      mask,
      maxDate,
      maxDateMessage,
      minDate,
      minDateMessage,
      okLabel,
      onInputChange,
      openToYearSelection,
      rightArrowIcon,
      showTodayButton,
      TextFieldComponent,
      todayLabel,
      locale,
      format,
      className,
      getValue,
      value,
      labelTitle,
      backdrop,
      valueDefault,
      keyboardIconFar,
      keyboardIconFas,
      keyboardIconFab,
      inline,
      scrolledYears,
      tag: Tag,
      ...attributes
    } = this.props;

    const {
      actualDate,
      getYears,
      inputValue,
      modalOpen,
      dayDate,
      bottomPositionOfInput,
      leftPositionOfInput,
      topPositionOfInput,
      weekDays,
      years,
      yearsArray,
      hoverButton
    } = this.state;

    //Alias
    const DATE = moment(actualDate || new Date());

    const themeColors = {
      danger: '#ff3547',
      warning: '#fb3',
      success: '#00c851',
      primary: '#4285f4',
      info: '#33b5e5',
      secondary: '#a6c',
      light: '#e0e0e0 ',
      dark: '#212121'
    };

    const takeThemeColor = theme => themeColors[theme];

    //ClassNames
    const classes = classNames('md-form', 'mdb-react-date__picker', className);
    const buttonsClassNames = classNames('px-3 py-2');
    const validClassNames = classNames('red-text');

    const prevMonthClasses = () =>
      classNames(
        'picker__nav--prev ml-3',
        DATE.isSameOrBefore(moment(minDate), 'months') && 'disabled',
        disablePast && DATE.isSameOrBefore(new Date(), 'months') && 'disabled'
      );

    const nextMonthClasses = () =>
      classNames(
        'picker__nav--next mr-3',
        DATE.isSameOrAfter(moment(maxDate), 'months') && 'disabled',
        disableFuture && DATE.isSameOrAfter(new Date(), 'months') && 'disabled'
      );

    //Functional ClassNames
    const dateDisplayClasses = picker =>
      classNames(
        `picker__${picker}-display pt-2 cursor-pointer`,
        picker === 'year' ? (getYears ? 'text-white' : 'text-white-50') : !getYears ? 'text-white' : 'text-white-50'
      );

    const dayClasses = days => {
      const { day, id } = days;

      const FUTURE = day && disableFuture && moment(day._d).isAfter(new Date(), 'date');
      const PAST = day && disablePast && moment(day._d).isBefore(new Date(), 'date');
      const TODAY = day && moment(day._d).isSame(new Date(), 'date');
      const ACTUAL = day && moment(day).isSame(moment(actualDate), 'date');

      const MIN = day && moment(day._d).isBefore(moment(minDate), 'date');
      const MAX = day && moment(day._d).isAfter(moment(maxDate), 'date');

      return classNames(
        'text-center',
        'p-0',
        (id === '' || FUTURE || PAST || MIN || MAX) && 'disabled text-black-50',
        TODAY && !ACTUAL && `${theme}-text`,
        hoverButton && theme
      );
    };

    //Styles
    const inputStyles = {
      borderBottom: keyboard && moment(inputValue, format, true)._d == ('Invalid Date' || '') && '1px solid red'
    };

    const calendarButtonStyles = {
      height: '45px',
      width: '45px',
      position: 'absolute',
      top: '16px',
      right: '-4px'
    };
    const validDateStyles = { position: 'absolute', top: '70px' };
    const buttonsStyles = { color: takeThemeColor(theme) };

    //Functional Styles
    const thisYearStyles = year => {
      return {
        padding: '10px 20px',
        color: year === moment(actualDate || new Date()).get('year') ? takeThemeColor(theme) : '#212529',
        cursor: 'pointer',
        border: year === moment(actualDate || new Date()).get('year') && `1px solid ${takeThemeColor(theme)}`
      };
    };

    //Boolean
    const INPUT_VALUE = keyboard
      ? inputValue
      : actualDate
      ? moment(actualDate)
          .locale(locale)
          .format(format)
      : emptyLabel;

    const INPUT_VALID = moment(inputValue, format, true);
    const VALID = INPUT_VALID._d == ('Invalid Date' || '');
    const IS_AFTER_MAX = moment(INPUT_VALID._d).isAfter(moment(maxDate), 'date');
    const IS_BEFORE_MIN = moment(INPUT_VALID._d).isBefore(moment(minDate), 'date');

    const IS_FLAT = day => !moment(day).isSame(moment(actualDate), 'date') || day === '' || !day;

    const SET_COLOR = day => (day && moment(day).isSame(moment(actualDate), 'date') && theme) || '';

    const IS_FLAT_YEAR = year => !moment(year).isSame(moment(actualDate), 'year') || year === '' || !year;
    const SET_COLOR_YEAR = year => {
      return (year && moment(`${year}`).isSame(moment(actualDate), 'year') && theme) || '';
    };

    //Node
    const validMessage = message => (
      <small className={validClassNames} style={validDateStyles}>
        {message}
      </small>
    );

    //Set format to display date
    moment.locale(locale);
    moment.updateLocale(moment.locale(), {
      invalidDateMessage: emptyLabel,
      invalidDate: emptyLabel
    });

    const showMovedButtons = () => {
      if (getYears) {
        if (!scrolledYears) {
          return (
            <div className='picker__btn-wrapper position-absolute'>
              <MDBBtn
                flat
                onClick={() => (scrolledYears ? this.changeMonth(0) : this.changeYear(-12))}
                className={prevMonthClasses()}
                style={{ borderRadius: '100%' }}
              >
                <MDBIcon
                  icon={leftArrowIcon}
                  style={{
                    height: 36,
                    width: 36,
                    fontSize: '.75rem'
                  }}
                  className='d-flex justify-content-center align-items-center'
                />
              </MDBBtn>
              <MDBBtn
                flat
                onClick={() => (scrolledYears ? this.changeMonth(1) : this.changeYear(12))}
                className={nextMonthClasses()}
                style={{ borderRadius: '100%' }}
              >
                <MDBIcon
                  icon={rightArrowIcon}
                  style={{
                    height: 36,
                    width: 36,
                    fontSize: '.75rem'
                  }}
                  className='d-flex justify-content-center align-items-center'
                />
              </MDBBtn>
            </div>
          );
        }
      } else {
        return (
          <div className='picker__btn-wrapper position-absolute'>
            <MDBBtn
              flat
              onClick={() => this.changeMonth(0)}
              className={prevMonthClasses()}
              style={{ borderRadius: '100%' }}
            >
              <MDBIcon
                icon={leftArrowIcon}
                style={{
                  height: 36,
                  width: 36,
                  fontSize: '.75rem'
                }}
                className='d-flex justify-content-center align-items-center'
              />
            </MDBBtn>
            <MDBBtn
              flat
              onClick={() => this.changeMonth(1)}
              className={nextMonthClasses()}
              style={{ borderRadius: '100%' }}
            >
              <MDBIcon
                icon={rightArrowIcon}
                style={{
                  height: 36,
                  width: 36,
                  fontSize: '.75rem'
                }}
                className='d-flex justify-content-center align-items-center'
              />
            </MDBBtn>
          </div>
        );
      }
    };
    return (
      <Tag
        data-test='date-picker'
        className={classes}
        style={{
          position: 'relative'
        }}
        ref={ref => (this.containerRef = ref)}
      >
        <MDBInput
          value={INPUT_VALUE}
          onClick={() => !keyboard && this.openModal()}
          onChange={this.changeHandler}
          inputRef={e => (this.inputRef = e)}
          aria-haspopup='dialog'
          style={{ marginLeft: 0, marginRight: 0, width: '100%' }}
          id={makeRandomID('1')}
          icon={keyboard && keyboardIcon}
          iconStyle={keyboard && { right: 12, bottom: 4, cursor: 'pointer' }}
          iconRegular
        />

        {keyboard && (
          <>
            <MDBBtn flat rounded style={calendarButtonStyles} className='p-0' onClick={this.openModal} />
            {VALID && validMessage(invalidDateMessage)}
            {!VALID && IS_AFTER_MAX && validMessage(maxDateMessage)}
            {!VALID && IS_BEFORE_MIN && validMessage(minDateMessage)}
          </>
        )}

        <label htmlFor='date-picker-example'>{labelTitle}</label>
        {modalOpen &&
          ReactDOM.createPortal(
            !inline ? (
              <CSSTransition in={modalOpen} classNames='my-node-1' timeout={300} unmountOnExit appear>
                <div className='mdb-react-date__picker'>
                  <div className='picker picker--opened picker--focused' id='falseY_root' aria-hidden='false'>
                    <div
                      className='picker__holder'
                      onClick={e => e.target.classList.contains('picker__holder') && this.toggleModal()}
                    >
                      <div
                        className='picker__frame'
                        style={{
                          transform: 'translate(-50%, -50%)',
                          top: '50%',
                          left: '50%',
                          right: '50%',
                          margin: 'unset'
                        }}
                      >
                        <div className='picker__box'>
                          <div className='picker__header' style={{ backgroundColor: takeThemeColor(theme) }}>
                            <div className='picker__date-display' style={{ backgroundColor: takeThemeColor(theme) }}>
                              <div
                                onClick={() => this.setState({ getYears: true })}
                                className={dateDisplayClasses('year')}
                              >{`Select ${getYears ? 'Year' : 'Date'}`}</div>
                              <div
                                className='picker__controls d-flex align-items-end'
                                onClick={this.hideYears}
                                style={{ cursor: 'pointer' }}
                              >
                                <div className='row picker__date-mobile'>
                                  <div className={dateDisplayClasses('weekday')}>
                                    {makeFirstLetterUpper(DATE.locale(locale).format('ddd'))},
                                  </div>
                                  <div className='ml-2'>
                                    <div className={dateDisplayClasses('month')}>
                                      {makeFirstLetterUpper(DATE.locale(locale).format('MMM'))}
                                      <span className='ml-2'>{DATE.locale(locale).format('D')}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='picker__body'>
                            <div className='d-flex justify-content-between pt-3 position-relative'>
                              <div className='picker__date-wrapper'>
                                <span className='picker__month'>
                                  {makeFirstLetterUpper(DATE.locale(locale).format('MMMM'))}
                                </span>
                                <span className='picker__year ml-1'>{DATE.locale(locale).format('YYYY')}</span>

                                <MDBBtn
                                  flat
                                  className='p-0'
                                  onClick={this.showYear}
                                  style={{ borderRadius: '100%', height: 36, width: 36 }}
                                >
                                  <MDBIcon
                                    icon={`caret-${!getYears ? 'down' : 'up'}`}
                                    className='d-flex justify-content-center align-items-center'
                                  />
                                </MDBBtn>
                              </div>
                              {showMovedButtons()}
                            </div>

                            {(!getYears && (
                              <div className='picker__table-wrapper'>
                                <table
                                  className='picker__table'
                                  id='picker-example_table'
                                  role='grid'
                                  aria-controls='picker-example'
                                  aria-readonly='true'
                                >
                                  <thead>
                                    <tr>
                                      {weekDays.map((dayWeek, key) => (
                                        <th
                                          key={key}
                                          className='picker__weekday grey-text font-weight-normal'
                                          scope='col'
                                        >
                                          <small>{moment.weekdaysMin()[key]}</small>
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {dayDate.map((tr, key) => (
                                      <tr
                                        key={key}
                                        ref={ref => {
                                          this.monthDaysRef[key] = ref;
                                        }}
                                      >
                                        {tr.map((td, id) => {
                                          return (
                                            <td key={id}>
                                              {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
                                              <MDBBtn
                                                rounded
                                                flat={IS_FLAT(td.day)}
                                                color={SET_COLOR(td.day)}
                                                onMouseDown={this.setActive}
                                                onTouchStart={this.setActive}
                                                aria-label={
                                                  td.day && moment(td.day) > 20 ? moment(td.day).format(format) : ''
                                                }
                                                className={dayClasses(td)}
                                                style={{
                                                  height: 36,
                                                  width: 36,
                                                  margin: 0
                                                }}
                                                onMouseEnter={e => this.setHover(e, td)}
                                                onMouseLeave={this.unsetHover}
                                              >
                                                {td.id}
                                              </MDBBtn>
                                            </td>
                                          );
                                        })}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )) || (
                              <CSSTransition in={getYears} classNames='my-node-2' timeout={300} unmountOnExit appear>
                                <div
                                  style={{
                                    height: '263px',
                                    scrollBehavior: animateYearScrolling ? 'smooth' : 'auto',
                                    margin: 1,
                                    overflowY: 'scroll'
                                  }}
                                  ref={this.yearsRef}
                                  className='d-flex flex-wrap justify-content-center picker__scrollMobile-height'
                                >
                                  {years.map(year => {
                                    return (
                                      <div key={year} className='picker__years'>
                                        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
                                        <MDBBtn
                                          rounded
                                          flat
                                          color={SET_COLOR_YEAR(year)}
                                          onMouseDown={e => this.setActiveYear(e)}
                                          onTouchStart={e => this.setActiveYear(e)}
                                          style={thisYearStyles(year)}
                                          aria-label={year}
                                          onMouseOver={() => this.setHoverYear()}
                                        >
                                          {year}
                                        </MDBBtn>
                                      </div>
                                    );
                                  })}
                                </div>
                              </CSSTransition>
                            )}
                          </div>
                          <div
                            className='picker__footer d-flex flex-row-reverse justify-content-between'
                            style={{ borderTop: getYears && '1px solid #d0c9c9' }}
                          >
                            <div>
                              <MDBBtn
                                flat
                                onClick={this.cancelModal}
                                className={buttonsClassNames}
                                style={buttonsStyles}
                              >
                                {cancelLabel}
                              </MDBBtn>
                              <MDBBtn
                                flat
                                onClick={this.toggleModal}
                                className={buttonsClassNames}
                                style={buttonsStyles}
                              >
                                {okLabel}
                              </MDBBtn>
                            </div>
                            {(clearable && (
                              <MDBBtn
                                flat
                                onClick={this.escapeButton}
                                className={buttonsClassNames}
                                style={buttonsStyles}
                              >
                                {clearLabel}
                              </MDBBtn>
                            )) ||
                              (showTodayButton && (
                                <MDBBtn
                                  flat
                                  onClick={this.setToday}
                                  className={buttonsClassNames}
                                  style={buttonsStyles}
                                >
                                  {todayLabel}
                                </MDBBtn>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ) : (
              <CSSTransition in={modalOpen} classNames='my-node-3' timeout={300} unmountOnExit appear>
                <div className='mdb-react-date__picker'>
                  <div
                    className='picker picker--opened picker--focused'
                    id={makeRandomID()}
                    aria-hidden='false'
                    ref={node => (this.inlinePicker = node)}
                  >
                    {backdrop && (
                      <div
                        className='position-fixed'
                        onClick={this.toggleModal}
                        style={{ top: 0, bottom: 0, left: 0, right: 0, zIndex: 9999 }}
                      />
                    )}
                    <div
                      className='picker__frame picker__frame--inline'
                      style={{
                        top: topPositionOfInput,
                        left: leftPositionOfInput,
                        bottom: bottomPositionOfInput,
                        margin: 'unset',
                        transition: 'unset'
                      }}
                      id={makeRandomID()}
                    >
                      <div className='picker__box'>
                        <div className='picker__body'>
                          <div className='d-flex justify-content-between pt-3 position-relative'>
                            <div className='picker__date-wrapper'>
                              <span className='picker__month'>
                                {makeFirstLetterUpper(DATE.locale(locale).format('MMMM'))}
                              </span>
                              <span className='picker__year ml-1'>{DATE.locale(locale).format('YYYY')}</span>

                              <MDBBtn
                                flat
                                className='p-0'
                                onClick={this.showYear}
                                style={{ borderRadius: '100%', height: 36, width: 36 }}
                              >
                                <MDBIcon
                                  icon={`caret-${!getYears ? 'down' : 'up'}`}
                                  className='d-flex justify-content-center align-items-center'
                                />
                              </MDBBtn>
                            </div>
                            {showMovedButtons()}
                          </div>

                          {(!getYears && (
                            <div className='picker__table-wrapper'>
                              <table
                                className='picker__table'
                                id='picker-example_table'
                                role='grid'
                                aria-controls='picker-example'
                                aria-readonly='true'
                              >
                                <thead>
                                  <tr>
                                    {weekDays.map((dayWeek, key) => (
                                      <th
                                        key={key}
                                        className='picker__weekday grey-text font-weight-normal'
                                        scope='col'
                                      >
                                        <small>{moment.weekdaysMin()[key]}</small>
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {dayDate.map((tr, key) => (
                                    <tr
                                      key={key}
                                      ref={ref => {
                                        this.monthDaysRef[key] = ref;
                                      }}
                                    >
                                      {tr.map((td, id) => {
                                        return (
                                          <td key={id}>
                                            <MDBBtn
                                              rounded
                                              flat={IS_FLAT(td.day)}
                                              color={SET_COLOR(td.day)}
                                              onClick={this.setActive}
                                              onTouchStart={this.setActive}
                                              aria-label={
                                                td.day && moment(td.day) > 20 ? moment(td.day).format(format) : ''
                                              }
                                              className={dayClasses(td)}
                                              style={{
                                                height: 36,
                                                width: 36,
                                                margin: 0
                                              }}
                                            >
                                              {td.id}
                                            </MDBBtn>
                                          </td>
                                        );
                                      })}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )) || (
                            <TransitionGroup classNames='check'>
                              <CSSTransition in={getYears} classNames='my-node-4' timeout={300} unmountOnExit appear>
                                {scrolledYears ? (
                                  <div
                                    style={{
                                      height: '263px',
                                      scrollBehavior: animateYearScrolling ? 'smooth' : 'auto',
                                      margin: 1,
                                      overflowY: 'scroll'
                                    }}
                                    ref={this.yearsRef}
                                    className='d-flex flex-wrap justify-content-center picker__scrollMobile-height'
                                  >
                                    {years.map(year => {
                                      return (
                                        <div key={year} className='picker__years'>
                                          <MDBBtn
                                            rounded
                                            flat
                                            color={SET_COLOR_YEAR(year)}
                                            onMouseDown={e => this.setActiveYear(e)}
                                            onTouchStart={e => this.setActiveYear(e)}
                                            style={thisYearStyles(year)}
                                            aria-label={year}
                                          >
                                            {year}
                                          </MDBBtn>
                                        </div>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  <div ref={this.yearsRef}>
                                    {yearsArray.map((e, i) => {
                                      return (
                                        <div
                                          key={e + i}
                                          style={{ top: 10, transition: '.3s ease' }}
                                          className='d-flex flex-wrap justify-content-center picker__scrollMobile-height position-relative'
                                        >
                                          {e.map(year => {
                                            return (
                                              <div key={year} className='picker__years'>
                                                <MDBBtn
                                                  key={year}
                                                  onMouseDown={e => this.setActiveYear(e)}
                                                  rounded
                                                  flat
                                                  aria-label={year}
                                                  style={thisYearStyles(year)}
                                                >
                                                  {year}
                                                </MDBBtn>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      );
                                    })}{' '}
                                  </div>
                                )}
                              </CSSTransition>
                            </TransitionGroup>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ),
            document.body
          )}
      </Tag>
    );
  }
}

DatePickerV5.propTypes = {
  adornmentPosition: PropTypes.string,
  allowKeyboardControl: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  autoOk: PropTypes.bool,
  cancelLabel: PropTypes.node,
  className: PropTypes.string,
  clearable: PropTypes.bool,
  clearLabel: PropTypes.node,
  disableFuture: PropTypes.bool,
  disableOpenOnEnter: PropTypes.bool,
  disablePast: PropTypes.bool,
  emptyLabel: PropTypes.string,
  format: PropTypes.string,
  getValue: PropTypes.func,
  InputAdornmentProps: PropTypes.object,
  invalidDateMessage: PropTypes.node,
  invalidLabel: PropTypes.string,
  keyboard: PropTypes.bool,
  keyboardIcon: PropTypes.node,
  leftArrowIcon: PropTypes.node,
  locale: PropTypes.string,
  mask: PropTypes.any,
  maxDate: PropTypes.string,
  maxDateMessage: PropTypes.node,
  minDate: PropTypes.string,
  minDateMessage: PropTypes.node,
  okLabel: PropTypes.node,
  onInputChange: PropTypes.func,
  openToYearSelection: PropTypes.bool,
  rightArrowIcon: PropTypes.node,
  showTodayButton: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  TextFieldComponent: PropTypes.string,
  theme: PropTypes.object,
  todayLabel: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  valueDefault: PropTypes.instanceOf(Date)
};

DatePickerV5.defaultProps = {
  animateYearScrolling: false,
  allowKeyboardControl: true,
  backdrop: true,
  autoOk: false,
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  emptyLabel: '',
  format: 'LL',
  inline: false,
  invalidDateMessage: 'Invalid Date Format',
  keyboardIcon: 'calendar',
  leftArrowIcon: 'angle-left',
  locale: 'en-US',
  maxDate: '2099-01-01',
  maxDateMessage: 'Date should not be after maximal date',
  minDate: '1900-01-01',
  minDateMessage: 'Date should not be before minimal date',
  okLabel: 'Ok',
  rightArrowIcon: 'angle-right',
  tag: 'div',
  theme: 'primary',
  todayLabel: 'Today',
  value: null,
  valueDefault: new Date(),
  getValue: () => {},
  labelTitle: 'Try me...',
  scrolledYears: false
};

export default DatePickerV5;
export { DatePickerV5 as MDBDatePickerV5 };
