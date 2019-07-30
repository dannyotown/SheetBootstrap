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

  handleClick = () => {
    this.state.target.classList.contains("opened")
      ? this.context.getActive(null)
      : this.context.getActive(this.state.target);
  };

  render() {
    const { fab, fal, far, icon, tag: Tag, title, ...attributes } = this.props;
    const { target } = this.state;
    const { theme, active } = this.context;

    const classes = classNames(
      theme && `treeview-${theme}-items treeview-${theme}-element closed mb-1`,
      active === target && !active.classList.contains("opened") ? "opened" : ""
    );
    return (
      <Tag
        {...attributes}
        className={classes}
        ref={this.targetRef}
        onClick={this.handleClick}
        style={{ transform: "translateY(0.3em)" }}
      >
        <MDBIcon className="mr-2" fab={fab} fal={fal} far={far} icon={icon} />
        <span>{title}</span>
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
