import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";


const MDBEdgeHeader = ({color, className, ...atributes }) => {

  const edgeHeaderClasses = classNames(
    "edge-header",
    color && color,
    className
  )

  return (
    <div className={edgeHeaderClasses} {...atributes}></div>
  )
}

MDBEdgeHeader.PropTypes = {
  color: PropTypes.string,
  className: PropTypes.string
}

export default MDBEdgeHeader;
