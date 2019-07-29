import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Treeview extends React.Component {
  state = {
    active: null
  };

  getChildContext() {
    return {
      active: this.state.active,
      theme: this.props.theme,
      getActive: this.getActive
    };
  }

  getActive = target => {
    this.setState({ active: target }, () => this.state.active);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.getActive) {
      if (prevState.active !== this.state.active) {
        this.props.getActive({
          item: this.state.active.closest("li"),
          value: this.state.active.closest("li").childNodes[0].childNodes[1]
            .textContent
        });
      }
    }
  }

  render() {
    const {
      theme,
      children,
      className,
      getActive,
      header,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      "border",
      theme ? `treeview-${theme}` : "treeview",
      className
    );
    const ulClasses = classNames(
      header ? "pb-2 mb-1" : "py-2 my-1",
      theme && `treeview-${theme}-list`,
      theme === "animated" && "pl-3"
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
  theme: PropTypes.string,
  className: PropTypes.string,
  getActive: PropTypes.func,
  header: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Treeview.defaultProps = {
  theme: "",
  getActive: () => {},
  tag: "div"
};

Treeview.childContextTypes = {
  active: PropTypes.any,
  theme: PropTypes.string,
  getActive: PropTypes.func
};

export default Treeview;
export { Treeview as MDBTreeview };
