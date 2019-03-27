import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import "../Transitions.css";
import Waves from "../Waves";
import ScrollBar from './PerfectScrollbar';

class SideNav extends React.Component {

  constructor(props) {
    super(props);

    function isOpen() {
      if (props.fixed) {

        if ((window.innerWidth <= props.breakWidth)) {
          return props.responsive ? false : true
        }

        return true;

      } else {
        if (props.triggerOpening) {
          if ((window.innerWidth > props.breakWidth)) {
            return true
          }

          return false;

        }
        return false;
      }
    }

    this.state = {
      initiallyFixed: props.fixed,
      isFixed: !isOpen() ? false : props.fixed,
      isOpen: isOpen(),
      cursorPos: {}
    };
  }



  componentDidMount() {
    if (this.props.triggerOpening && !this.props.responsive) {
      throw new Error('Received "triggerOpening" prop for a  non-responsive Sidebar. If you want to contidionally render Sidenav, set the responsive prop to true');
    }

    window.addEventListener("resize", this.updatePredicate);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.triggerOpening !== this.props.triggerOpening) {

      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    if (!this.props.hidden && this.props.responsive) {
      this.setState({ isOpen: window.innerWidth > this.props.breakWidth });

      if (window.innerWidth > this.props.breakWidth) {
        this.setState({ isOpen: true, isFixed: this.state.initiallyFixed });
      } else {
        this.setState({
          isOpen: false,
          isFixed: false
        });
      }
    }


  };

  handleOverlayClick = () => {
    if (this.state.isFixed) return
    this.setState({
      isOpen: false
    });
    if (this.props.onOverlayClick) {
      this.props.onOverlayClick();
    }
  };

  handleClick = e => {
    if (!this.props.disabled) {
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos: cursorPos });
      // do the passed in callback:
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
    e.stopPropagation();
  };

  render() {
    const {
      bg,
      breakWidth,
      children,
      className,
      hidden,
      href,
      logo,
      mask,
      onOverlayClick,
      right,
      triggerOpening,
      showOverlay,
      fixed,
      responsive,
      tag: Tag,
      ...attributes
    } = this.props;

    const { isOpen, isFixed } = this.state;

    const classes = classNames(
      "side-nav",
      right && "right-aligned",
      className
    );

    const overlay = (
      <div
        id="sidenav-overlay"
        onClick={this.handleOverlayClick}
      />
    );

    const sidenav = (
      <Tag
        {...attributes}
        ref={this.sideNavRef}
        className={classes}
        data-animate={isFixed ? false : undefined}
        style={bg ? { backgroundImage: `url(${bg}` } : undefined}
        onTouchMove={this.handleOverlayClick}
      >
        <ScrollBar option={{ suppressScrollX: true }}>
          <ul className="list-unstyled">
            {logo && (
              <li>
                <div className="logo-wrapper">
                  <a
                    href={href}
                    className="Ripple-parent"
                    onClick={this.handleClick}
                  >
                    <img
                      src={logo}
                      alt=""
                      className="img-fluid flex-center d-block"
                    />
                    <Waves cursorPos={this.state.cursorPos} />
                  </a>
                </div>
              </li>
            )}
            {children}
          </ul>
        </ScrollBar >
        {mask && <div className={`sidenav-bg mask-${mask}`} />}
      </Tag>
    );


    return (
      <>
        {
          isFixed ?
            sidenav
            :
            (
              <CSSTransition
                appear={!this.state.isFixed}
                timeout={{ enter: 300, exit: 300 }}
                classNames={right ? "right-side-slide" : "side-slide"}
                in={isOpen}
              >
                {sidenav}
              </CSSTransition>
            )
        }
        {isFixed ? false : (showOverlay && isOpen) && overlay}
      </>
    )
  }
}

SideNav.propTypes = {
  bg: PropTypes.string,
  breakWidth: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  href: PropTypes.string,
  logo: PropTypes.string,
  mask: PropTypes.string,
  onOverlayClick: PropTypes.func,
  right: PropTypes.bool,
  triggerOpening: PropTypes.bool,
  tag: PropTypes.string,
  fixed: PropTypes.bool,
  showOverlay: PropTypes.bool,
  responsive: PropTypes.bool
};

SideNav.defaultProps = {
  bg: '',
  breakWidth: 1400,
  className: '',
  hidden: false,
  href: "#",
  logo: '',
  mask: '',
  onOverlayClick: () => { },
  right: false,
  triggerOpening: false,
  tag: "div",
  fixed: false,
  responsive: true,
  showOverlay: true
};

export default SideNav;
export { SideNav as MDBSideNav };
