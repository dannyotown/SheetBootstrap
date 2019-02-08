import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "./Waves";
import { NavLink as NavigationLink } from "react-router-dom";
import { Link as SmoothScroll } from "react-scroll";

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick = e => {
    if (!this.props.disabled) {
      e.stopPropagation();
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos: cursorPos });
    }
  };

  render() {
    const {
      children,
      className,
      disabled,
      active,
      to,
      spy,
      smooth,
      offset,
      duration,
      ...attributes
    } = this.props;

    const classes = classNames(
      "nav-link",
      disabled ? "disabled" : "Ripple-parent",
      active && "active",
      className
    );

    if (!smooth) {
      return (
        <NavigationLink
          className={classes}
          onMouseUp={this.handleClick}
          onTouchStart={this.handleClick}
          to={to}
          {...attributes}
        >
          {children}
          {this.props.disabled ? (
            false
          ) : (
              <Waves cursorPos={this.state.cursorPos} />
            )}
        </NavigationLink>
      );
    }
    else {
      return (
        <SmoothScroll
          className={classes}
          onMouseUp={this.handleClick}
          onTouchStart={this.handleClick}
          to={to}
          spy={spy}
          smooth={smooth}
          offset={offset}
          duration={duration}
          {...attributes}
        >
          {children}
          {this.props.disabled ? (
            false
          ) : (
              <Waves cursorPos={this.state.cursorPos} />
            )}
        </SmoothScroll>
      );
    }

  }
}

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  active: PropTypes.bool,
  spy: PropTypes.bool,
  smooth: PropTypes.bool,
  offset: PropTypes.number,
  duration: PropTypes.number
};

NavLink.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  spy: true,
  smooth: false,
  offset: -70,
  duration: 500
}

export default NavLink;
export { NavLink as MDBNavLink };
