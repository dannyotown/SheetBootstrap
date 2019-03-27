import React, { useState, useEffect, useRef } from "react";
import { Manager, Reference, Popper } from "react-popper";
import PropTypes from "prop-types";
import classNames from "classnames";

const Tooltip = ({ children, clickable, domElement, modifiers, placement, popover, style, tag }) => {
  const [visible, setVisible] = useState(false);

  const tooltipClasses = classNames(
    "fade",
    popover ? `popover bs-popover-${placement} popover-enter-done` : `tooltip bs-tooltip-${placement}`,
    visible ? "show" : "",
  );

  const contentClasses = classNames(
    !popover && "tooltip-inner"
  );

  const placementDict = {
    'left': 'left',
    'right': 'left',
    'top': 'top',
    'bottom': 'top'
  }

  const arrowStyle = placementDict[placement] === 'top' ? { transform: 'translateX(-4px)' } : {};

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
      <Tag style={style}>
        <Popper
          modifiers={modifiers}
          eventsEnabled={true}
          positionFixed={false}
          placement={placement}
        >
          {
            ({ placement, ref, style, arrowProps }) => (
              <Tag ref={ref} style={style} data-placement={placement} className={tooltipClasses}>
                <Content.type {...Content.props} className={contentClasses}>
                  {Content.props.children}
                </Content.type>
                <span ref={arrowProps.ref} style={Object.assign({ ...arrowProps.style }, arrowStyle)} data-placement={placement} className="arrow" />
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
  modifiers: PropTypes.object,
  placement: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  tag: PropTypes.string,
};

Tooltip.defaultProps = {
  clickable: false,
  domElement: false,
  placement: 'top',
  style: { display: 'block' },
  tag: 'div'
}

export default Tooltip;
export { Tooltip as MDBTooltip };
