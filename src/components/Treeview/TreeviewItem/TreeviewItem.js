import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MDBIcon } from "mdbreact";
import { TreeviewContext } from "../Treeview";

const TreeviewItem = props => {
  const [target, setTarget] = useState("");
  const targetRef = useRef(null);

  const { fab, fal, far, icon, open, tag: Tag, title, ...attributes } = props;
  const { theme, active, getActive } = useContext(TreeviewContext);

  useEffect(() => {
    if (targetRef && targetRef.current) {
      setTarget(targetRef.current);
      open && getActive(targetRef.current);
    }
  }, []);

  const handleClick = () => {
    target.classList.contains("opened") ? getActive(null) : getActive(target);
  };

  const classes = classNames(
    theme && `treeview-${theme}-items treeview-${theme}-element closed mb-1`,
    active === target && !active.classList.contains("opened") ? "opened" : ""
  );
  return (
    <Tag
      {...attributes}
      className={classes}
      ref={targetRef}
      onClick={handleClick}
      style={{ transform: "translateY(0.3em)" }}
    >
      <MDBIcon className="mr-2" fab={fab} fal={fal} far={far} icon={icon} />
      <span>{title}</span>
    </Tag>
  );
};

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
