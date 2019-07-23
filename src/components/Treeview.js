import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MDBIcon } from "mdbreact";

class Treeview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openFolder = () => this.setState({ open: !this.state.open });

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
      ...attributes
    } = this.props;

    const { open } = this.state;

    const classes = classNames(!item && "treeview border", className);
    const nestedClasses = classNames(
      "nested list-unstyled ml-4 pl-3",
      open && "active"
    );

    let Tag = item ? "li" : "div";

    return (
      <Tag {...attributes} className={classes}>
        {header && (
          <>
            <h6 className="pt-3 pl-3">{header}</h6>
            <hr />
            <ul className="mb-1 pl-3 pb-2">{children}</ul>
          </>
        )}
        {!header && (
          <>
            {nested && (
              <MDBIcon
                icon="angle-right"
                rotate={open ? "90" : "0"}
                className="rotate mr-2 ml-1"
                onClick={this.openFolder}
              />
            )}

            <MDBIcon
              icon={icon}
              far={far}
              fab={fab}
              fal={fal}
              className="mr-2"
            />
            <span>{title}</span>

            {children && <ul className={nestedClasses}>{children}</ul>}
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
  far: PropTypes.bool
};

Treeview.defaultProps = {
  icon: "folder-open",
  tag: "div",
  fab: false,
  fal: false,
  far: false
};

export default Treeview;
export { Treeview as MDBTreeview };
