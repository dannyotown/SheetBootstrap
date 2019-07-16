import React from "react";
import { MDBContainer } from "mdbreact";
import classNames from "classnames";

const SectionContainer = ({
  children,
  className,
  description,
  fluid,
  header,
  noBorder,
  tag,
  title,
  style,
  noBottom
}) => {
  const classes = classNames(
    "section",
    !noBottom && "mb-5",
    !noBorder ? "border p-3" : "px-0",
    className
  );
  return (
    <>
      {title && (
        <h2 className="mb-3">
          <strong>{title}</strong>
        </h2>
      )}
      {header && (
        <h4 className="mb-2">
          <strong>{header}</strong>
        </h4>
      )}
      {description && <p>{description}</p>}
      {children && (
        <MDBContainer fluid={fluid} tag={tag} className={classes} style={style}>
          {children}
        </MDBContainer>
      )}
    </>
  );
};

export default SectionContainer;
