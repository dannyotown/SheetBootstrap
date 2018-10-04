import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Transition from "react-motion-ui-pack";
import Waves from "../Waves";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isThere: false,
      showOverlay: false,
      cursorPos: {}
    };
  }

  componentDidMount() {
    if (this.props.fixed) {
      this.setState({
        isThere: true
      });
      return;
    }
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.triggerOpening !== this.props.triggerOpening) {
      this.setState({
        isThere: true,
        showOverlay: true
      });
    }
  }

  componentWillUnmount() {
    if (this.props.fixed) {
      return;
    }
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    if (!this.props.hidden) {
      this.setState({ isThere: window.innerWidth > this.props.breakWidth });
    }
  };

  handleOverlayClick = () => {
    this.setState({
      isThere: false,
      showOverlay: false
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
      e.stopPropagation();
    }
    e.stopPropagation();
  };

  render() {
    const {
      tag: Tag,
      fixed,
      logo,
      bg,
      href,
      children,
      className,
      breakWidth,
      hidden,
      right,
      triggerOpening,
      key,
      onOverlayClick,
      mask,
      ...attributes
    } = this.props;

    let { isThere, showOverlay } = this.state;

    const classes = classNames(
      "side-nav",
      fixed && "fixed",
      right && "right-aligned",
      className
    );

    const overlay = (
      <div
        id="sidenav-overlay"
        onClick={this.handleOverlayClick}
        key="overlay"
      />
    );
    const translateX = right ? 300 : -300;

    const sidenav = (
      <Tag
        {...attributes}
        className={classes}
        style={{ backgroundImage: `url(${bg}` }}
        key="{key}"
      >
        <ul className="custom-scrollbar list-unstyled">
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
        {mask && <div className={`sidenav-bg mask-${mask}`} />}
      </Tag>
    );

    return (
      <div>
        <Transition
          component={false}
          enter={{ opacity: 1, translateX: 0 }}
          leave={{ opacity: 0.2, translateX: translateX }}
        >
          {isThere && sidenav}
        </Transition>
        {showOverlay && overlay}
      </div>
    );
  }
}

SideNav.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  breakWidth: PropTypes.number,
  triggerOpening: PropTypes.bool,
  bg: PropTypes.string,
  mask: PropTypes.string
};

SideNav.defaultProps = {
  tag: "div",
  href: "#",
  breakWidth: 1400
};

export default SideNav;
export { SideNav as MDBSideNav };
