import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MDBIcon } from "mdbreact";

class TreeviewItem extends React.Component {
  constructor(prop) {
    super(prop);
    this.state={
      thisTarget: ''
    }
  }

  componentDidMount() {
    this.setState({
      thisTarget: ReactDOM.findDOMNode(this)
    })
  }
  

  handleClick = (e) => {
    this.context.getActive(e.target)
  }
  
  render() {
    const { icon, title, tag: Tag, fab, fal, far } = this.props;
    const { thisTarget } = this.state;
    const { animated } = this.context;

    //class
    const classes = classNames(animated && "treeview-animated-items");
    const iconClasses = classNames("mr-2");
    let context = this.context.active.closest("a") || false;
    const folder = classNames(animated && "closed", context && context == thisTarget.querySelector("a.closed") ? "open" : "");



    return (
      <Tag className={classes}>
        <a className={folder} onClick={(e)=>this.handleClick(e)}>
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
      </Tag>
    );
  }
}

TreeviewItem.propTypes = {
  animated: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  open: PropTypes.bool,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string
};

TreeviewItem.defaultProps = {
  animated: false,
  tag: "li",
  open: false,
  fab: false,
  fal: false,
  far: false,
  icon: "folder-open"
};
TreeviewItem.contextTypes = {
  animated: PropTypes.bool,
  active: PropTypes.any,
  getActive: PropTypes.func
};
export default TreeviewItem;
export { TreeviewItem as MDBTreeviewItem };
