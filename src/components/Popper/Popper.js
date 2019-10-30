import React, { useState, useEffect } from 'react';
import Popper from 'popper.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Popper.css';

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popperJS: null,
      visible: props.isVisible
    };

    this.popoverRef = React.createRef();
    this.popoverWrapperRef = React.createRef();
    this.referenceElm = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setPopperJS();
    // if (
    //   prevProps.isVisible !== this.props.isVisible ||
    //   (this.props.isVisible !== this.state.showPopper &&
    //     this.state.showPopper !== prevProps.showPopper)
    // ) {
    //   this.setState({ showPopper: this.props.isVisible });
    // }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setPopperJS(), 3);

    document.addEventListener('click', this.handleClick);
  }

  setPopperJS = () => {
    this.state.popperJS
      ? this.state.popperJS.scheduleUpdate()
      : this.createPopper();
    setTimeout(() => clearInterval(this.timer), 1000);
  };

  createPopper = () => {
    this.state.popperJS = new Popper(
      this.referenceElm,
      this.popoverWrapperRef,
      {
        placement: this.props.placement,
        ...this.props.modifiers
      }
    );
  };

  doToggle = toggler => {
    if (this.referenceElm) {
      this.setState({
        visible: typeof toggler !== 'undefined' ? toggler : !this.state.visible
      });
    }
  };

  handleClick = e => {
    const { target } = e;
    if (this.popoverWrapperRef) {
      if (
        this.popoverWrapperRef.contains(target) ||
        this.referenceElm.contains(target) ||
        target === this.referenceElm
      )
        return;
    }
    this.doToggle(false);
  };

  render() {
    const {
      children,
      className,
      clickable,
      domElement,
      modifiers,
      id,
      isVisible,
      onChange,
      placement,
      popover,
      style,
      tag: Tag,
      ...attributes
    } = this.props;

    const { visible } = this.state;
    // const [visible, setVisible] = useState(isVisible);

    // useEffect(() => {
    //   setVisible(isVisible);
    // }, [isVisible]);

    // useEffect(() => {
    //   onChange && onChange(visible);
    // }, [onChange, visible]);

    // useEffect(() => {
    //   window.addEventListener('click', handleClick);

    //   return () => window.removeEventListener('click', handleClick);
    // });

    // function handleClick(e) {
    //   const element = document
    //     .elementsFromPoint(e.clientX, e.clientY)
    //     .find(el => el.dataset.popper === id);
    //   if (element) return;

    //   setVisible(false);
    // }

    // const Wrapper = children[0];
    // const Content = children[1];
    // console.log('Wrapper:', Wrapper);
    // console.log('Content:', Content);
    // const Tag = tag;

    // const tooltipClasses = classNames(
    //   'fade',
    //   popover
    //     ? `popover bs-popover-${placement} popover-enter-done`
    //     : `tooltip bs-tooltip-${placement}`,
    //   showPopper && 'show',
    //   className && className
    // );

    // const popperClasses = classNames(popover ? 'popover' : 'tooltip px-2');

    const popper = children[1];
    const Wrapper = children[0];
    return (
      <>
        {!domElement ? (
          <Wrapper.type
            {...Wrapper.props}
            onMouseEnter={() => !clickable && this.doToggle(true)}
            onMouseLeave={() => !clickable && this.doToggle(false)}
            onTouchStart={() => !clickable && this.doToggle(true)}
            onTouchEnd={() => !clickable && this.doToggle(false)}
            onMouseDown={() => clickable && this.doToggle(!visible)}
            innerRef={ref => (this.referenceElm = ref)}
            data-popper={id}
          />
        ) : (
          <Wrapper.type
            {...Wrapper.props}
            onMouseEnter={() => !clickable && this.doToggle(true)}
            onMouseLeave={() =>
              !clickable && setTimeout(() => this.doToggle(false), 100)
            }
            onTouchStart={() => !clickable && this.doToggle(true)}
            onTouchEnd={() => !clickable && this.doToggle(false)}
            onMouseDown={() => clickable && this.doToggle(!visible)}
            ref={ref => (this.referenceElm = ref)}
            data-popper={id}
          />
        )}
        <Tag
          ref={ref => (this.popoverWrapperRef = ref)}
          className={classNames(
            visible && 'show',
            popover ? 'popover' : 'tooltip px-2',
            className
          )}
          {...attributes}
        >
          {popper}
          <span x-arrow='' className='popover_arrow'></span>
        </Tag>
      </>
    );
  }
}

Popover.propTypes = {
  children: PropTypes.node,
  clickable: PropTypes.bool,
  domElement: PropTypes.bool,
  modifiers: PropTypes.object,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  placement: PropTypes.string,
  popover: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  tag: PropTypes.string
};

Popover.defaultProps = {
  clickable: false,
  domElement: false,
  id: 'popper',
  isVisible: false,
  placement: 'top',
  popover: false,
  style: { display: 'inline-block' },
  tag: 'div'
};

export default Popover;
export { Popover as MDBPopper };
export { Popover as MDBTooltip };
export { Popover as Tooltip };
export { Popover as MDBPopover };
// export { Popover as Popover };
