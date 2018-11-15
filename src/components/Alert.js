import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

class Alert extends Component {
  state={
    isOpen: true
  }

  closeAlert = () => {
    this.setState({isOpen: false});
  }

  handleOnExit = (node) => {
    node.classList.add("fade");
    this.props.onClose && this.props.onClose()
  };

  handleOnExited = node => {
    this.props.onClosed && this.props.onClosed()
  }

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
        <button onClick={this.closeAlert} type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      );
    }

   return (
    <Transition
      in={this.state.isOpen}
      timeout={150}
      unmountOnExit
      onExit={node => this.handleOnExit(node)}
      onExited={node => this.handleOnExited(node)}
    >
      <div className={alertClasses} role="alert">
        {children}
        {closeBtn && closeBtn}
      </div>
    </Transition>
    );
  }
}

Alert.defaultProps = {
  color: "primary",
};

Alert.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  onClose: PropTypes.func,
  onClosed: PropTypes.func
};

export default Alert;
export { Alert as MDBAlert };
