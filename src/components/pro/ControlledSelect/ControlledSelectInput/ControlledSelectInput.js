import React from 'react';
import PropTypes from 'prop-types';

const ControlledSelectInput = React.forwardRef(
  ({ value, required }, inputRef) => {
    return (
      <input
        data-test='controlled-select-input'
        type='text'
        ref={inputRef}
        required={required}
        readOnly
        value={value}
        onChange={() => {}}
        className='select-dropdown'
        onFocus={e => (e.target.style.caretColor = 'transparent')}
      />
    );
  }
);

ControlledSelectInput.propTypes = {
  required: PropTypes.bool,
  value: PropTypes.string
};

ControlledSelectInput.defaultProps = {
  required: false
};

export default ControlledSelectInput;
