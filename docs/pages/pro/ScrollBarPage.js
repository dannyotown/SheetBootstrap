import React from "react";
import { MDBContainer, MDBScrollbar } from "mdbreact";
import DocsLink from "./../../components/docsLink";

const ScrollBarPage = () => {
  const outerContainerStyle = { width: "800px", height: "400px" };
  return (
    <MDBContainer>
      <DocsLink title="ScrollBar" href="https://mdbootstrap.com/docs/react/" />
      <MDBContainer style={outerContainerStyle} className="mt-5">
        <MDBScrollbar className="scrollbar-primary">
          <img
            alt=""
            src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg"
          />
        </MDBScrollbar>
      </MDBContainer>
    </MDBContainer>
  );
}

export default ScrollBarPage;
