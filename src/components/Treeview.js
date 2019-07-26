import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Treeview extends React.Component {
  state = {
    active: document.querySelector("body")
  };

  getChildContext() {
    return {
      active: this.state.active,
      animated: this.props.animated,
      getActive: this.getActive
    };
  }

  getActive = target => {
    this.setState({ active: target });
    return target;
  };

  componentDidUpdate() {
    this.props.getActive &&
      this.props.getActive(this.state.active.closest("li"));
  }
  render() {
    const {
      animated,
      children,
      className,
      getActive,
      header,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      "border",
      animated ? "treeview-animated" : "treeview",
      className
    );
    const ulClasses = classNames(
      "mb-1 pl-3 pb-2",
      animated && "treeview-animated-list"
    );

    const head = header && (
      <>
        <h6 className="pt-3 pl-3">{header}</h6>
        <hr />
      </>
    );

    return (
      <Tag {...attributes} className={classes}>
        {head}
        <ul className={ulClasses}>{children}</ul>
      </Tag>
    );
  }
}

Treeview.propTypes = {
  animated: PropTypes.bool,
  className: PropTypes.string,
  getActive: PropTypes.func,
  header: PropTypes.string,
  item: PropTypes.bool,
  nested: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Treeview.defaultProps = {
  animated: false,
  getActive: () => {},
  tag: "div"
};

Treeview.childContextTypes = {
  active: PropTypes.any,
  animated: PropTypes.bool,
  getActive: PropTypes.func
};

export default Treeview;
export { Treeview as MDBTreeview };
