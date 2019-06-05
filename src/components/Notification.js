import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MDBCloseIcon from "./CloseIcon";

class Notification extends React.Component {
  state = {
    componentState: this.props.show ? "show" : "hide"
  };

  componentDidMount() {
    if (this.props.autohide > 0) this.hide(this.props.autohide);
  }

  hide = time => {
    setTimeout(() => {
      this.setState({ componentState: "" }, () => {
        setTimeout(() => {
          this.setState({
            componentState: "hide"
          });
        }, 150);
      });
    }, time);
  };

  render() {
    const {
      show,
      fade,
      body,
      bodyColor,
      bodyTextColor,
      labelColor,
      title,
      titleColor,
      titleTextColor,
      time,
      className,
      closeClassName,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      "toast",
      fade ? "fade" : false,
      this.state.componentState,
      className
    );

    const headerClasses = classNames(
      "toast-header",
      titleColor
    );
    const bodyClasses = classNames(
      "toast-body",
      bodyColor
    );

    const HTextColor = classNames(
      titleTextColor ? `${titleTextColor}-text` : false
    );
    const BTextColor = classNames(
      bodyTextColor ? `${titleTextColor}-text` : false
    );

    return (
      <Tag { ...attributes } className={ classes }>
        <div className={ headerClasses }>
          <svg
            className="rounded mr-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect fill={ labelColor } width="100%" height="100%" />
          </svg>
          <strong className={ "mr-auto " + HTextColor }>{ title }</strong>
          <small className={ HTextColor }>{ time }</small>
          <MDBCloseIcon
            className={`ml-2 mb-1 ${ closeClassName || "" }`}
            onClick={() => this.hide(1)}
          />
        </div>
        <div className={ bodyClasses + " " + BTextColor }>{ body }</div>
      </Tag>
    );
  }
}

Notification.propTypes = {
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  show: PropTypes.bool,
  fade: PropTypes.bool,
  autohide: PropTypes.number,
  labelColor: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleTextColor: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Notification.defaultProps = {
  tag: "div",
  labelColor: "#007aff"
};

export default Notification;
export { Notification as MDBNotification };
