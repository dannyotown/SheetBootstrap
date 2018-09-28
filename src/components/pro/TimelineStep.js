import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Fa from "../Fa";

const TimelineStep = props => {
  const {
    href,
    color,
    icon,
    className,
    children,
    inverted,
    colorful,
    hoverable,
    label
  } = props;

  const circleClasses = classNames(
    "circle",
    "z-depth-1-half",
    color ? color : "primary-color",
    className
  );

  const stepContentClasses = classNames(
    "step-content",
    "z-depth-1",
    "ml-xl-0",
    colorful ? "p-0 mt-2" : "p-4",
    hoverable && "hoverable"
  );

  const liClasses = classNames(inverted && "timeline-inverted");

  return (
    <li className={liClasses}>
      <a href={href}>
        <span className={circleClasses}>
          {icon && <Fa icon={icon} />}
          {label}
        </span>
      </a>
      <div className={stepContentClasses}>{children}</div>
    </li>
  );
};

TimelineStep.propTypes = {
  href: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string
};

TimelineStep.defaultProps = {
  href: "#"
};

export default TimelineStep;
export { TimelineStep as MDBTimelineStep };
