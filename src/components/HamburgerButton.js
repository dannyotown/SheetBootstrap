import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './HamburgerButton.css';

class HamburgerButton extends React.Component {

    state={
        checked: this.props.isOpen || false
    }

    checkHandler = () => {
console.log('saljdnasnd')    }
  
    render() {
    let {
        id,
        isOpen,
        color,
        className,
        ...attributes
    } = this.props;

    const classes = classNames(
      className,
    );

    return (
        <React.Fragment >
            <input type="checkbox"  className="hamburger-button__checkbox" id={id} />
            <label id="nav-icon1" className="hamburger-button__button" htmlFor={id}>
                <span style={{background: color}}></span>
                <span style={{background: color}}></span>
                <span style={{background: color}}></span>
            </label>
        </React.Fragment>
    );
  }
}

HamburgerButton.propTypes = {
id: PropTypes.string,   
  color: PropTypes.string,
  className: PropTypes.string
};

export default HamburgerButton;
export { HamburgerButton as MDBHamburgerBtn };
