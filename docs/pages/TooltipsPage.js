import React from "react";
import { MDBTooltip, MDBContainer, MDBBtn, MDBBtnFixed } from "mdbreact";
import DocsLink from "./../components/docsLink";

const TooltipsPage = () => {
  const style = { display: "inline-block", maxWidth: "50vh" };
  return (
    <MDBContainer>
      <DocsLink
        title="Tooltips"
        href="https://mdbootstrap.com/docs/react/advanced/tooltips/"
      />
      <div className="m-5 text-center">

        <MDBTooltip
          placement="top"
        >
          <MDBBtn>Top tooltip</MDBBtn>
          <div>
            MDBTooltip on top
          </div>
        </MDBTooltip>

        <div>
          <div style={style} className="text-right">
            <MDBTooltip
              placement="left"
            >
              <MDBBtn>Left tooltip</MDBBtn>
              <div>
                MDBTooltip on left
            </div>
            </MDBTooltip>
          </div>

          <div style={style} className="text-left">
            <MDBTooltip
              placement="right"
            >
              <MDBBtn>Right tooltip</MDBBtn>
              <div>
                MDBTooltip on right
            </div>
            </MDBTooltip>
          </div>
        </div>

        <MDBTooltip
          placement="bottom"
        >
          <MDBBtn>Top tooltip</MDBBtn>
          <div>
            MDBTooltip on bottom
          </div>
        </MDBTooltip>

        <MDBTooltip
          placement="left"
        >
          <MDBBtnFixed floating color="indigo" icon="pencil-alt" style={{ padding: 0, bottom: "145px", right: "24px" }} />
          <div>
            MDBTooltip on fixed button
          </div>
        </MDBTooltip>

      </div>
    </MDBContainer>
  );
}

export default TooltipsPage;
