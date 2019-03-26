import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const PopoverBody = ({ attributes, className, tag: Tag }) => {
  const classes = classNames(
    'popover-body',
    className
  );

  return <Tag {...attributes} className={classes} />;
};

PopoverBody.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

PopoverBody.defaultProps = {
  tag: "div"
};

export default PopoverBody;
export { PopoverBody as MDBPopoverBody };
