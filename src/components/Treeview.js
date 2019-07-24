import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MDBIcon, MDBBtn, MDBCollapse } from "mdbreact";

class Treeview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  openFolder = e => {
    this.setState({ open: !this.state.open });

    if (e.target.closest(".treeview-animated-items").children.length < 2) {
      let isOpen = e.target.closest("span").classList.contains("open");
      let container = e.target.closest(".treeview-animated");
      if (container) {
        let children = Array.from(
          container.querySelectorAll(".treeview-animated-items")
        );
        children
          .filter(child => child.children.length < 2)
          .map(child => child.querySelector("span"))
          .map(child => child.classList.remove("open"));

        !isOpen && e.target.closest("span").classList.toggle("open");
      }
    } else e.target.closest("span").classList.toggle("open");
  };

  render() {
    const {
      className,
      children,
      header,
      item,
      icon,
      title,
      nested,
      far,
      fab,
      fal,
      tag,
      animated,
      ...attributes
    } = this.props;

    const { open } = this.state;

    const classes = classNames(
      header && "border",

      header ? (animated ? "treeview-animated" : "treeview") : "", //for div
      !header && "treeview-animated-items", //for li

      className
    );

    const ulClasses = classNames(
      "mb-1 pl-3 pb-2",
      animated && "treeview-animated-list"
    );

    const nestedClasses = classNames(
      "nested list-unstyled overflow-hidden",
      animated ? "pl-4" : "pl-5",
      open && "active"
    );
    const childClasses = classNames(
      "treeview-animated-element d-block closed px-0"
    );

    let Tag = header ? "div" : "li";
    return (
      <Tag {...attributes} className={classes}>
        {header && (
          <>
            <h6 className="pt-3 pl-3">{header}</h6>
            <hr />
            <ul className={ulClasses}>{children}</ul>
          </>
        )}
        {!header && (
          <>
            <span className={childClasses} onClick={this.openFolder}>
              {nested && (
                <MDBBtn flat className="m-0 py-0 px-2 z-depth-0" onClick={this.openFolder}>
                  <MDBIcon
                    icon="angle-right"
                    rotate={open ? "90" : "0"}
                    className="rotate"
                  />
                </MDBBtn>
              )}

              <MDBIcon
                icon={icon}
                far={far}
                fab={fab}
                fal={fal}
                className={nested ? "ml-1 mr-2" : "mx-2"}
              />
              {title}
            </span>
            {children && animated && (
              <MDBCollapse isOpen={open}>
                <ul className={nestedClasses}>{children}</ul>
              </MDBCollapse>
            )}
            {children && !animated && (
              <ul className={nestedClasses}>{children}</ul>
            )}
          </>
        )}
      </Tag>
    );
  }
}

Treeview.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  item: PropTypes.bool,
  header: PropTypes.string,
  nested: PropTypes.bool,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  open: PropTypes.bool,
  animated: PropTypes.bool
};

Treeview.defaultProps = {
  icon: "folder-open",
  tag: "div",
  fab: false,
  fal: false,
  far: false,
  open: false,
  animated: false
};

export default Treeview;
export { Treeview as MDBTreeview };