import React, { useState, useRef } from "react";
import { Reference, Popper } from "react-popper";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Tooltip.css";

const Tooltip = (props) => {
  const [visible, setVisible] = useState(true);
  const wrapperRef = useRef();
  const popperRef = useRef();

  console.log(popperRef.current, wrapperRef.current);

  const {
    placement,
    component,
    componentStyle,
    className,
    children,
    tooltipContent,
    tooltipClass,
    arrowClass,
    componentTooltip,
    componentClass,
    wrapperStyle,
    tag
  } = props;

  const tooltipClasses = classNames(
    "tooltip fade tooltip-inner",
    visible ? "show" : "",
    tooltipClass
  );

  const arrowClasses = classNames("arrow", arrowClass);

  const modifiers = {
    flip: { enabled: false },
    preventOverflow: { enabled: false },
    hide: { enabled: false },
  };

  const Wrapper = children[0];
  const Content = children[1];

  return (
    <>
      <Reference>
        {
          ({ ref }) => (
            <Wrapper.type
              {...Wrapper.props}
              // onMouseEnter={() => setVisible(true)}
              // onMouseLeave={() => setVisible(false)}
              // onTouchStart={() => setVisible(true)}
              // onTouchEnd={() => setVisible(false)}
              onClick={() => setVisible(!visible)}
              innerRef={ref}
            />
          )
        }
      </Reference>
      <div>
        <Popper
          modifiers={modifiers}
          eventsEnabled={true}
          positionFixed={false}
          placement={placement}
        >
          {
            ({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement} className={tooltipClasses}>
                <Content.type {...Content.props} />
                <div ref={arrowProps.ref} style={arrowProps.style} data-placement={placement} className={arrowClasses} />
              </div>
            )
          }
        </Popper>
      </div>
    </>
  );
}

Tooltip.propTypes = {
  placement: PropTypes.string,
  component: PropTypes.string,
  componentStyle: PropTypes.string,
  tooltipContent: PropTypes.string,
  tooltipClass: PropTypes.string,
  arrowClass: PropTypes.string,
  componentTooltip: PropTypes.string,
  componentClass: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  wrapperStyle: PropTypes.object
};

export default Tooltip;
export { Tooltip as MDBTooltip };
