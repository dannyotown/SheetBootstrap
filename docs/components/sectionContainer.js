import React from "react";
import { MDBContainer } from "mdbreact";
import classNames from "classnames";

let SectionContainer = ({
  children,
  className,
  description,
  header,
  noBorder,
  noBottom,
  style,
  title
}) => {
  const classes = classNames("section", !noBottom && "mb-5", !noBorder ? "border p-3" : "px-0", className);

  description = description ? <p>{description}</p> : "";
  title = title ? <h2 className="mb-3">{title}</h2> : "";
  header = header ? <h4 className="mb-2">{header}</h4> : "";

  return (
    <>
      {title}
      {header}
      <MDBContainer fluid className={classes} style={style}>
        {description}
        {children}
      </MDBContainer>
    </>
  );
};

export default SectionContainer;
