import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { getColorClass } from "./utils";

class Breadcrumb extends React.Component {
  render() {
    const { className, color , light, ...attributes } = this.props;

    let classes = classNames(
      "breadcrumb",
      light && "white-text",
      color && getColorClass(color),
      className
    );

    return (
      <nav>
        <ol {...attributes} className={classes}>
          {this.props.children}
        </ol>
      </nav>
    );
  }
}

Breadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Breadcrumb;
export { Breadcrumb as MDBBreadcrumb };
