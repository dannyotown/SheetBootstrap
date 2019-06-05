import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MDBCloseIcon from './CloseIcon';

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
      body,
      labelColor,
      time,
      title,
      className,
      children,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      "toast",
      fade ? "fade" : false,

      this.state.componentState,
      className
    );

    return (
      <Tag {...attributes} className={classes} >
        <div className='toast-header'>
        <svg
              className="rounded mr-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect fill={labelColor} width="100%" height="100%" />
            </svg>
            <strong className="mr-auto">{title}</strong>
            <small>{time}</small>
            <MDBCloseIcon className="ml-2 mb-1" onClick={()=> this.hide(1)}/>
            </div>
            <div className="toast-body">
              {body}
            </div>
      </Tag>
    );
  }
}

Notification.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  fade: PropTypes.bool,
  autohide: PropTypes.number,
  labelColor: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Notification.defaultProps = {
  tag: "div"
};

export default Notification;
export { Notification as MDBNotification };
