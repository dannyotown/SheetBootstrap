import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBRangeInput,
  MDBCard,
  MDBCol,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBIcon
} from "mdbreact";
import DocsLink from "../DocsLink";

class SliderPage extends React.Component {
  render() {
    return (
      <MDBContainer className="my-5">
        <DocsLink
          title="Slider"
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
          <MDBRow className="my-5" center>
            <MDBCol style={{ maxWidth: "22rem" }}>
              <MDBCard>
                <MDBCardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
                  overlay="white-slight"
                  hover
                  waves
                  alt="Card image cap"
                />
                <MDBCardBody>
                  <MDBCardTitle>Choose your slider option</MDBCardTitle>
                  <hr />
                  <MDBCardText>
                    <MDBRow className="my-4" center>
                      <MDBIcon
                        className="font-weight-bold blue-text mr-2 mt-1"
                        icon="thumbs-o-down"
                      />
                      <MDBRangeInput
                        getValue={this.handleChange}
                        min={0}
                        max={100}
                        value={50}
                        formClassName="w-75"
                      />
                      <MDBIcon
                        className="font-weight-bold blue-text ml-2 mt-1"
                        icon="thumbs-o-up"
                      />
                    </MDBRow>
                    <MDBRow className="my-4" center>
                      <MDBIcon
                        className="font-weight-bold indigo-text mr-2 mt-1"
                        icon="dollar"
                      />
                      <MDBRangeInput
                        getValue={this.handleChange}
                        min={0}
                        max={100}
                        value={50}
                        formClassName="w-75"
                      />
                      <MDBIcon
                        className="font-weight-bold indigo-text ml-2 mt-1"
                        icon="eur"
                      />
                    </MDBRow>
                    <MDBRow className="my-4" center>
                      <MDBIcon
                        className="font-weight-bold indigo-text mr-2 mt-1"
                        icon="minus"
                      />
                      <MDBRangeInput
                        getValue={this.handleChange}
                        min={0}
                        max={100}
                        value={50}
                        formClassName="w-75"
                      />
                      <MDBIcon
                        className="font-weight-bold indigo-text ml-2 mt-1"
                        icon="plus"
                      />
                    </MDBRow>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default SliderPage;
