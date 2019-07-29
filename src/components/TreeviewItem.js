import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MDBIcon } from "mdbreact";

class TreeviewItem extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      target: ""
    };

    this.targetRef = React.createRef();
  }

  componentDidMount() {
    if (this.targetRef && this.targetRef.current) {
      this.setState({
        target: this.targetRef.current
      });
    }
  }

  handleClick = e => {
    this.context.getActive(e.target);
  };

  render() {
    const { fab, fal, far, icon, tag: Tag, title, ...attributes } = this.props;
    const { target } = this.state;
    const { theme } = this.context;

    const classes = classNames(theme && `treeview-${theme}-items`);
    const iconClasses = classNames("mr-2");
    let context;
    if (this.context.active) {
      context = this.context.active.closest(".closed");
    }
    const item = classNames(
      theme && `closed treeview-${theme}-element d-block`,
      context && context === target.childNodes[0] && !context.classList.contains("opened") ? "opened" : ""
    );

    return (
      <Tag {...attributes} className={classes} ref={this.targetRef}>
        <span className={item} onClick={e => this.handleClick(e)}>
          <MDBIcon
            className={iconClasses}
            fab={fab}
            fal={fal}
            far={far}
            icon={icon}
          />
          <span>{title}</span>
        </span>
      </Tag>
    );
  }
}

TreeviewItem.propTypes = {
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string,
  open: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

TreeviewItem.defaultProps = {
  fab: false,
  fal: false,
  far: false,
  icon: "folder-open",
  open: false,
  tag: "li"
};
TreeviewItem.contextTypes = {
  theme: PropTypes.string,
  active: PropTypes.any,
  getActive: PropTypes.func
};
export default TreeviewItem;
export { TreeviewItem as MDBTreeviewItem };
