import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MDBIcon } from "mdbreact";

class TreeviewItem extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      thisTarget: ""
    };
  }

  componentDidMount() {
    this.setState({
      thisTarget: ReactDOM.findDOMNode(this)
    });
  }

  handleClick = e => {
    this.context.getActive(e.target);
  };

  render() {
    const { fab, fal, far, icon, tag: Tag, title, ...attributes } = this.props;
    const { thisTarget } = this.state;
    const { animated } = this.context;

    //class
    const classes = classNames(animated && "treeview-animated-items");
    const iconClasses = classNames("mr-2");
    let context = this.context.active.closest(".closed") || false;
    const folder = classNames(
      animated && "closed",
      context && context === thisTarget.querySelector(".closed") ? "open" : ""
    );

    return (
      <Tag {...attributes} className={classes}>
        <span className={folder} onClick={e => this.handleClick(e)}>
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
  animated: PropTypes.bool,
  active: PropTypes.any,
  getActive: PropTypes.func
};
export default TreeviewItem;
export { TreeviewItem as MDBTreeviewItem };
