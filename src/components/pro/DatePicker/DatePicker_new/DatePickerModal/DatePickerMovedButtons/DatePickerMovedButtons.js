import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import moment from 'moment';
import classNames from 'classNames';
import { takeAcutalDate } from '../../Utils';

const DatePickerMovedButtons = ({
  initialGetYears,
  scrolledYears,
  leftArrowIcon,
  rightArrowIcon,
  maxDate,
  minDate,
  disablePast,
  disableFuture,
  initialActualDate,
  getUpdateMonth,
  getUpdateYear,
  chunkYears,
  initialMonthDate
}) => {
  const DATE = takeAcutalDate(initialActualDate);

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

  const changeMonth = step => {
    const NEW_MONTH = takeAcutalDate(initialActualDate)
      .add(step, 'months')
      .set({ date: step > 0 ? 1 : 0 });
    getUpdateMonth(NEW_MONTH);
  };

  const changeYear = step => {
    const NEW_YEAR = takeAcutalDate(initialActualDate).add(step, 'year');
    const MAX_TYPE = moment(NEW_YEAR).isAfter(moment(maxDate), 'year') && moment(maxDate);
    const MIN_TYPE = moment(NEW_YEAR).isBefore(moment(minDate), 'year') && moment(minDate);

    getUpdateYear(MAX_TYPE, MIN_TYPE, NEW_YEAR);
  };

  return (
    <div className='picker__btn-wrapper position-absolute'>
      <MDBBtn
        flat
        onClick={() => {
          initialGetYears && (scrolledYears ? changeMonth(0) : changeYear(-chunkYears));
          initialGetYears && scrolledYears && changeYear(-chunkYears);
          !initialGetYears && changeMonth(0);
          initialMonthDate && initialGetYears && changeMonth(0);
        }}
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
        onClick={() => {
          initialGetYears && (scrolledYears ? changeMonth(1) : changeYear(chunkYears));
          initialGetYears && scrolledYears && changeYear(chunkYears);
          !initialGetYears && changeMonth(1);
          initialMonthDate && initialGetYears && changeMonth(1);
        }}
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
};

export default DatePickerMovedButtons;
