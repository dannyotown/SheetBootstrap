import React from "react";
import { MDBContainer, MDBRow, MDBRangeInput } from "mdbreact";
import DocsLink from "../DocsLink";

class SliderPage extends React.Component {
  render() {
    return (
      <MDBContainer className="my-5">
        <DocsLink
          title="Inputs"
          href="https://mdbootstrap.com/docs/react/forms/slider/"
        />
        <MDBContainer className="mt-5">
          <div className="my-5">
            <label htmlFor="customRange1">Example range</label>
            <input type="range" className="custom-range" id="customRange1" />
          </div>

          <div className="my-5">
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
            />
          </div>
          <MDBRow style={{ flexDirection: "column" }} className="my-5">
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-25"
            />
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-50"
            />
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-75"
            />
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-100"
            />
          </MDBRow>

          <MDBRow center>
            <span className="font-weight-bold indigo-text mr-2">0</span>
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-25"
            />
            <span class="font-weight-bold indigo-text ml-2">100</span>
          </MDBRow>
          <MDBRow center>
            <span className="font-weight-bold blue-text mr-2">0</span>
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-50"
            />
            <span class="font-weight-bold blue-text ml-2">100</span>
          </MDBRow>
          <MDBRow center>
            <span className="font-weight-bold purple-text mr-2">0</span>
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName="w-75"
            />
            <span class="font-weight-bold purple-text ml-2">100</span>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default SliderPage;
