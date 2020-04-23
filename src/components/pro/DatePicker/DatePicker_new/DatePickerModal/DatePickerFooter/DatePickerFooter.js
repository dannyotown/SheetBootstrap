import React from 'react';
import { MDBBtn } from 'mdbreact';
import classNames from 'classnames';
import { takeThemeColor } from '../../Utils';

const DatePickerFooter = ({
  initialGetYears,
  cancelLabel,
  okLabel,
  clearLabel,
  clearable,
  theme,
  onClickCancel,
  onClickClear,
  onClickOk
}) => {
  const buttonsClassNames = classNames('px-3 py-2');
  const buttonsStyles = { color: takeThemeColor(theme) };

  return (
    <div
      className='picker__footer d-flex flex-row-reverse justify-content-between'
      style={{ borderTop: initialGetYears && '1px solid #e0e0e0' }}
    >
      <div>
        <MDBBtn flat onClick={onClickCancel} className={buttonsClassNames} style={buttonsStyles}>
          {cancelLabel}
        </MDBBtn>
        <MDBBtn flat onClick={onClickOk} className={buttonsClassNames} style={buttonsStyles}>
          {okLabel}
        </MDBBtn>
      </div>
      {clearable && (
        <MDBBtn flat onClick={onClickClear} className={buttonsClassNames} style={buttonsStyles}>
          {clearLabel}
        </MDBBtn>
      )}
    </div>
  );
};

export default DatePickerFooter;
