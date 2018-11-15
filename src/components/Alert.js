import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

class Alert extends Component {

  render() {

    const {
      className,
      color,
      children,
      dismiss
    } = this.props;

    const alertClasses = classNames(
      "alert",
      color && `alert-${color}`,
      className,
    );

    let closeBtn;

    if(dismiss){
      closeBtn = (
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>)
    }

   return (
      <div className={alertClasses} role="alert">
        {children}
        {closeBtn && closeBtn}
      </div>
    );
  }
}

Alert.defaultProps = {
  color: "primary"
};

Alert.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};

export default Alert;
export { Alert as MDBAlert };
