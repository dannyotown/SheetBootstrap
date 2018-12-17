import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import React from 'react'

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
