import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MDBBtn, MDBIcon, MDBCollapse } from "mdbreact";

class TreeviewList extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      open: this.props.open
    };
  }

  handleSwitch = () => {
    if (this.props.children) {
      this.setState({ open: !this.state.open });
    }
  };

  render() {
    const { icon, title, children, tag: Tag, fab, fal, far } = this.props;
    const { open } = this.state;
    const { animated } = this.context;

    //class
    const classes = classNames(animated && "treeview-animated-items");
    const iconClasses = classNames("mr-2");
    const nestedClasses = classNames("nested", open && "active");
    const folder = classNames(animated && "closed", open && "open");

    //render
    const child = children && <ul className={nestedClasses}>{children}</ul>;
    const collapse = animated && children && (
      <MDBCollapse isOpen={open}>{child}</MDBCollapse>
    );
    const btn = children && (
      <MDBBtn
        flat
        className="m-0 py-0 pl-0 pr-2 z-depth-0"
        onClick={e => this.handleSwitch(e)}
      >
        <MDBIcon
          icon="angle-right"
          rotate={open ? "90 down" : "0"}
          className="rotate"
        />
      </MDBBtn>
    );

    return (
      <Tag className={classes}>
        <a onClick={e => animated && this.handleSwitch(e)} className={folder}>
          {btn}
          <span>
            <MDBIcon
              icon={icon}
              far={far}
              fab={fab}
              fal={fal}
              className={iconClasses}
            />
            {title}
          </span>
        </a>
        {collapse || child}
      </Tag>
    );
  }
}

TreeviewList.propTypes = {
  animated: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  open: PropTypes.bool,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string
};

TreeviewList.defaultProps = {
  animated: false,
  tag: "li",
  open: false,
  fab: false,
  fal: false,
  far: false,
  icon: "folder-open"
};
TreeviewList.contextTypes = {
  animated: PropTypes.bool
};
export default TreeviewList;
export { TreeviewList as MDBTreeviewList };
