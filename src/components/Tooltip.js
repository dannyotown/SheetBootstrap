import React, { useState, useRef } from "react";
import { Reference, Popper } from "react-popper";
import PropTypes from "prop-types";
import classNames from "classnames";

const Tooltip = (props) => {
  const [visible, setVisible] = useState(false);
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
    "tooltip fade",
    placement ? "bs-tooltip-" + placement : "",
    visible ? "show" : "",
    tooltipClass
  );

  const arrowClasses = classNames("arrow", arrowClass);

  const Wrapper = children[0];
  const Content = children[1];
  const Arrow = () => <div className={arrowClasses} />;

  return (
    <>
      <Reference>
        {
          ({ wrapperRef }) => (
            <Wrapper.type
              {...Wrapper.props}
              // onMouseEnter={() => setVisible(true)}
              // onMouseLeave={() => setVisible(false)}
              // onTouchStart={() => setVisible(true)}
              // onTouchEnd={() => setVisible(false)}
              onClick={() => setVisible(!visible)}
              ref={wrapperRef}
            />
          )
        }
      </Reference>
      {
        visible &&
        <Popper
          modifiers={{ preventOverflow: { enabled: false } }}
          eventsEnabled={true}
          positionFixed={false}
        >
          {
            ({ placement, innerRef, style, arrowProps }) => (
              <div ref={innerRef} data-placement={placement} >
                <Content.type {...Content.props} className={tooltipClasses} />
                <Arrow />
              </div>
            )
          }
        </Popper>
      }
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
