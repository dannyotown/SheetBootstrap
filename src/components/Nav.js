import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Nav extends Component {
  render() {
    const {
      children,
      className,
      tag: Tag,
      tabs,
      color,
      gradient,
      classicTabs,
      navPills,
      pills,
      header,
      rounded,
      outline,
      ...attributes
    } = this.props;

    const classes = classNames(
      "nav",
      tabs && "md-tabs",
      navPills && "nav-pills",
      pills && "md-pills",
      header && "nav-pills card-header-pills",
      color && !tabs && !classicTabs && !pills ? `${color}` : false,
      pills && gradient && !tabs ? `pills-${gradient}-gradient` : false,
      pills && color ? `pills-${color}` : false,
      pills && outline ? `pills-outline-${outline}` : false,
      pills && rounded ? "pills-rounded" : false,
      (tabs || classicTabs) && color ? `tabs-${color}` : false,
      className
    );

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

Nav.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  gradient: PropTypes.string,
  classicTabs: PropTypes.bool,
  pills: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.string,
  tabs: PropTypes.bool,
  header: PropTypes.bool
};

Nav.defaultProps = {
  tag: "ul",
  classicTabs: false,
  pills: false,
  tabs: false,
  header: false
};

export default Nav;
export { Nav as MDBNav };
