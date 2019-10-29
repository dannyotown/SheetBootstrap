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
      popover: props.children[1],
      wrapper: props.children[0],
      showPopper: props.isVisible
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
    console.log('run X times :(');
    setTimeout(() => clearInterval(this.timer), 1000);
  };

  createPopper = () => {
    this.state.popperJS = new Popper(this.referenceElm, this.popoverRef, {
      placement: this.props.placement,
      ...this.props.modifiers
    });
  };

  doToggle = toggler => {
    this.setState({
      showPopper: toggler ? toggler : !this.state.showPopper
    });
  };

  handleClick = e => {
    const { target } = e;
    console.log(target.find(this.popoverWrapperRef));
    // console.log(this.popoverWrapperRef);
    // let find = this.popoverWrapperRef.contains('span')
    // console.log(find)
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
      tag
    } = this.props;

    const { showPopper, wrapper } = this.state;
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

    const popperClasses = classNames(popover ? 'popover' : 'tooltip px-2');

    return (
      <>
        {!domElement ? (
          <wrapper.type
            {...wrapper.props}
            onMouseEnter={() => !clickable && this.doToggle(true)}
            onMouseLeave={() => !clickable && this.doToggle(false)}
            onTouchStart={() => !clickable && this.doToggle(true)}
            onTouchEnd={() => !clickable && this.doToggle(false)}
            onMouseDown={() => clickable && this.doToggle(!showPopper)}
            innerRef={ref => (this.referenceElm = ref)}
            data-popper={id}
          />
        ) : (
          <wrapper.type
            {...wrapper.props}
            onMouseEnter={() => !clickable && this.doToggle(true)}
            onMouseLeave={() => !clickable && this.doToggle(false)}
            onTouchStart={() => !clickable && this.doToggle(true)}
            onTouchEnd={() => !clickable && this.doToggle(false)}
            onMouseDown={() => clickable && this.doToggle(!showPopper)}
            ref={ref => (this.referenceElm = ref)}
            data-popper={id}
          />
        )}
        <span
          ref={ref => (this.popoverWrapperRef = ref)}
          className={classNames(showPopper && 'show')}
        >
          <span ref={ref => (this.popoverRef = ref)} className={popperClasses}>
            {this.state.popover}
            <span x-arrow='' className='popover_arrow'></span>
          </span>
        </span>
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
