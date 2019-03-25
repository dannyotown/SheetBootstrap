import React, { useState } from "react";
import { Manager, Reference, Popper } from "react-popper";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Tooltip.css";

const Tooltip = ({ children, placement, modifiers, clickable, domElement, tag }) => {
  const [visible, setVisible] = useState(false);

  const tooltipClasses = classNames(
    "tooltip fade tooltip-inner",
    visible ? "show" : "",
  );

  const placementDict = {
    'left': ['left', '-2px'],
    'right': ['left', '2px'],
    'top': ['top', '-7px'],
    'bottom': ['top', '7px']
  }

  const popperStyle = { [placementDict[placement][0]]: `${placementDict[placement][1]}` };

  const Wrapper = children[0];
  const Content = children[1];

  const Tag = tag;

  return (
    <Manager>
      <Reference>
        {
          ({ ref }) => (
            !domElement
              ? <Wrapper.type
                {...Wrapper.props}
                onMouseEnter={() => !clickable && setVisible(true)}
                onMouseLeave={() => !clickable && setVisible(false)}
                onTouchStart={() => !clickable && setVisible(true)}
                onTouchEnd={() => !clickable && setVisible(false)}
                onClick={() => clickable && setVisible(!visible)}
                innerRef={ref}
              />
              : <Wrapper.type
                {...Wrapper.props}
                onMouseEnter={() => !clickable && setVisible(true)}
                onMouseLeave={() => !clickable && setVisible(false)}
                onTouchStart={() => !clickable && setVisible(true)}
                onTouchEnd={() => !clickable && setVisible(false)}
                onClick={() => clickable && setVisible(!visible)}
                ref={ref}
              />
          )
        }
      </Reference>
      <Tag>
        <Popper
          modifiers={modifiers}
          eventsEnabled={true}
          positionFixed={false}
          placement={placement}
        >
          {
            ({ placement, ref, style, arrowProps }) => (
              <Tag ref={ref} style={Object.assign({ ...style }, popperStyle)} data-placement={placement} className={tooltipClasses}>
                <Content.type {...Content.props} />
                <span ref={arrowProps.ref} style={arrowProps.style} data-placement={placement} className="arrow" />
              </Tag>
            )
          }
        </Popper>
      </Tag>
    </Manager>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node,
  clickable: PropTypes.bool,
  domElement: PropTypes.bool,
  placement: PropTypes.string,
  modifiers: PropTypes.object,
  tag: PropTypes.string,
};

Tooltip.defaultProps = {
  clickable: false,
  domElement: false,
  placement: 'top',
  tag: 'div'
}

export default Tooltip;
export { Tooltip as MDBTooltip };
