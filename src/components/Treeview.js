import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

class Treeview extends React.Component {
  state = {
    active: document.querySelector("body")
  };

  getChildContext() {
    return {
      animated: this.props.animated,
      getActive: this.getActive,
      active: this.state.active 
    };
  }

  getActive = target => {
    this.setState({active: target})
    return target
  }

  render() {
    const {
      header,
      animated,
      tag: Tag,
      className,
      children,
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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  item: PropTypes.bool,
  header: PropTypes.string,
  nested: PropTypes.bool,
  animated: PropTypes.bool
};

Treeview.defaultProps = {
  tag: "div",
  animated: false
};

Treeview.childContextTypes = {
  animated: PropTypes.bool,
  getActive: PropTypes.any,
  active: PropTypes.any
};

export default Treeview;
export { Treeview as MDBTreeview };
