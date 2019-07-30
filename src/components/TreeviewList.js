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
    const {
      children,
      fab,
      fal,
      far,
      icon,
      tag: Tag,
      title,
      ...attributes
    } = this.props;
    const { open } = this.state;
    const { theme } = this.context;

    const classes = classNames(theme && `treeview-${theme}-items px-0`);
    const iconClasses = classNames(theme ? "mx-2" : "mr-2");
    const nestedClasses = classNames("nested", open && "active");
    const folder = classNames(
      theme && `closed treeview-${theme}-element d-block`,
      open && "opened"
    );

    const child = children && (
      <ul
        className={nestedClasses}
        style={{ height: "calc(100% + 0.6rem)", marginLeft: "2px" }}
      >
        {children}
      </ul>
    );
    const collapse = theme && <MDBCollapse isOpen={open}>{child}</MDBCollapse>;
    const arrow = (
      <MDBIcon
        icon={
          theme !== "colorful"
            ? "angle-right"
            : open
            ? "minus-circle"
            : "plus-circle"
        }
        rotate={theme !== "colorful" ? (open ? "90 down" : "0") : ""}
        className="rotate"
      />
    );
    const btn = children && (
      <MDBBtn
        flat
        className="m-0 py-0 px-1 mr-1 z-depth-0"
        onClick={this.handleSwitch}
      >
        {arrow}
      </MDBBtn>
    );

    return (
      <Tag {...attributes} className={classes}>
        <span className={folder} onClick={e => theme && this.handleSwitch(e)}>
          {theme ? arrow : btn}
          <span>
            <MDBIcon
              className={iconClasses}
              fab={fab}
              fal={fal}
              far={far}
              icon={icon}
            />
            {title}
          </span>
        </span>
        {collapse || child}
      </Tag>
    );
  }
}

TreeviewList.propTypes = {
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string,
  open: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

TreeviewList.defaultProps = {
  fab: false,
  fal: false,
  far: false,
  icon: "folder-open",
  open: false,
  tag: "li"
};

TreeviewList.contextTypes = {
  theme: PropTypes.string
};

export default TreeviewList;
export { TreeviewList as MDBTreeviewList };
