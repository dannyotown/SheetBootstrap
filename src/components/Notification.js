import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Notification extends React.Component {
  state = {
    componentState: this.props.show ? "show" : "hide"
  };

  componentDidMount() {
    if(this.props.autohide>0) this.hide(this.props.autohide);
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
      header,
      body,
      className,
      children,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      !header && !body ? "toast" : false, 
      fade ? "fade" : false,
      header && !fade && !show && !body ? "toast-header" : false, 
      body && !fade && !show && !header ? "toast-body" : false, 

      this.state.componentState,
      className
    );

    return (
      <Tag {...attributes} className={classes} >
        {children}
      </Tag>
    );
  }
}

Notification.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  fade: PropTypes.bool,
  autohide: PropTypes.number,
  header: PropTypes.bool,
  body: PropTypes.bool,
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Notification.defaultProps = {
  tag: "div"
};

export default Notification;
export { Notification as MDBNotification };
