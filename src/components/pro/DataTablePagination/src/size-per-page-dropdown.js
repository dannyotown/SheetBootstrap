import React from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
import SizePerPageOption from './size-per-page-option';
import { MDBSelect, MDBSelectInput, MDBSelectDropdown } from '../../../../';

const sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

class SizePerPageDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '10',
    }
    this.optionClick = this.optionClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.otherDropdownsClose = this.otherDropdownsClose.bind(this);
  }

  optionClick(value) {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({value: value});
  }

  onClick(e) {
    if (e.target.classList.contains('select-dropdown')) {
      this.otherDropdownsClose();
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.add('fadeIn');
      }
    } else {
      this.otherDropdownsClose();
    }
  }

  otherDropdownsClose() {
    let dropdowns = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('fadeIn')) {
        dropdowns[i].classList.remove('fadeIn');
      }
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  render() {
    const {
      open,
      hidden,
      options,
      className,
      variation,
      onSizePerPageChange
    } = this.props;

    const dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };
    const dropdownClasses = cs(
      open ? 'open show' : '',
      sizePerPageDefaultClass,
      variation,
      className,
    );

    return (
      <span
        style={ dropDownStyle }
        className={ dropdownClasses }
      >
        Show entries
        <MDBSelect>
          <MDBSelectInput value={this.state.value}></MDBSelectInput>
          <MDBSelectDropdown>
            {
              options.map(option => (
              <SizePerPageOption
                { ...option }
                key={ option.text }
                onSizePerPageChange={ onSizePerPageChange }
                triggerOptionClick= { this.optionClick }
              />
              ))
            }
          </MDBSelectDropdown>
        </MDBSelect>
      </span>
    );
  };
};

SizePerPageDropDown.propTypes = {
  currSizePerPage: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSizePerPageChange: PropTypes.func.isRequired,
  open: PropTypes.bool,
  hidden: PropTypes.bool,
  btnContextual: PropTypes.string,
  variation: PropTypes.oneOf(['dropdown', 'dropup']),
  className: PropTypes.string
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default',
  variation: 'dropdown',
  className: ''
};


export default SizePerPageDropDown;
