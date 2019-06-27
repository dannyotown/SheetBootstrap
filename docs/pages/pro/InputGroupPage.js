import React from "react";
import {
  MDBContainer,
  MDBInputGroup,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBIcon,
  MDBCol,
  MDBInput,
  MDBRow
} from "mdbreact";
import DocsLink from "../../components/docsLink";

class InputGroupPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mb-5">
        <DocsLink
          title="Inputs Group"
          href="https://mdbootstrap.com/docs/react/forms/inputs/"
        />
        <h2>Examples & customizations</h2>
        <MDBRow>
          <MDBCol tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                material
                containerClassName="mb-3 mt-0"
                placeholder="Product name"
                ariaLabel="Product name"
                prepend={
                  <MDBBtn
                    rounded
                    color="danger"
                    size="md"
                    className="m-0 z-depth-0"
                  >
                    HATE IT
                  </MDBBtn>
                }
                append={
                  <MDBBtn
                    rounded
                    color="success"
                    size="md"
                    className="m-0 z-depth-0"
                  >
                    LOVE IT
                  </MDBBtn>
                }
              />
              <MDBInputGroup
                material
                containerClassName="mb-3 mt-0"
                placeholder="Product name"
                prepend={
                  <span>
                    <MDBBtn rounded color="indigo" size="md" className="m-0">
                      HATE IT
                    </MDBBtn>
                  </span>
                }
                append={
                  <span>
                    <MDBBtn rounded color="pink" size="md" className="m-0">
                      LOVE IT
                    </MDBBtn>
                  </span>
                }
              />
              <MDBInputGroup
                material
                containerClassName="mb-3 mt-0"
                placeholder="Product name"
                prepend={
                  <span>
                    <MDBBtn
                      rounded
                      outline
                      color="default"
                      size="md"
                      className="m-0"
                    >
                      HATE IT
                    </MDBBtn>
                  </span>
                }
                append={
                  <span>
                    <MDBBtn
                      rounded
                      outline
                      color="pink"
                      size="md"
                      className="m-0"
                    >
                      LOVE IT
                    </MDBBtn>
                  </span>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Checkboxes and radios</h2>
        <MDBRow>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                containerClassName="mb-3"
                prepend={
                  <div className="input-group-text">
                    <MDBInput label type="checkbox" id="checkbox1" />
                  </div>
                }
              />
              <MDBInputGroup
                containerClassName="mb-3"
                prepend={
                  <div className="input-group-text">
                    <MDBInput label filled type="checkbox" id="checkbox2" />
                  </div>
                }
              />
              <MDBInputGroup
                containerClassName="mb-3"
                prepend={
                  <div className="input-group-text">
                    <MDBInput
                      label
                      type="radio"
                      id="exampleRadios1"
                      name="exampleRadios"
                    />
                  </div>
                }
              />
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                containerClassName="mb-3 mt-0"
                material
                prepend={
                  <div className="input-group-text md-addon">
                    <MDBInput
                      onFocus={() => console.log("console")}
                      label
                      type="checkbox"
                      id="checkboxMaterial1"
                    />
                  </div>
                }
              />
              <MDBInputGroup
                containerClassName="mb-3 mt-0"
                material
                prepend={
                  <div className="input-group-text md-addon">
                    <MDBInput
                      label
                      filled
                      type="checkbox"
                      id="checkboxMaterial2"
                    />
                  </div>
                }
              />
              <MDBInputGroup
                containerClassName="mb-3"
                material
                prepend={
                  <div className="input-group-text md-addon">
                    <MDBInput
                      label
                      type="radio"
                      id="exampleRadios2"
                      name="exampleRadios"
                    />
                  </div>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Buttons with dropdowns</h2>
        <MDBRow>
          <MDBCol tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                material
                containerClassName="mb-3 mt-0"
                prepend={
                  <MDBDropdown>
                    <MDBDropdownToggle
                      outline
                      color="secondary"
                      size="md"
                      className="m-0 px-3 z-depth-0"
                    >
                      Dropdown <MDBIcon icon="caret-down" className="ml-1" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="secondary">
                      <MDBDropdownItem>Action</MDBDropdownItem>
                      <MDBDropdownItem>Another Action</MDBDropdownItem>
                      <MDBDropdownItem>Something else here</MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem>Separated link</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                }
              />

              <MDBInputGroup
                material
                containerClassName="mb-3 mt-0"
                append={
                  <MDBDropdown>
                    <MDBDropdownToggle
                      outline
                      color="info"
                      size="md"
                      className="m-0 px-3 z-depth-0"
                    >
                      Dropdown <MDBIcon icon="caret-down" className="ml-1" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="info">
                      <MDBDropdownItem>Action</MDBDropdownItem>
                      <MDBDropdownItem>Another Action</MDBDropdownItem>
                      <MDBDropdownItem>Something else here</MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem>Separated link</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Segmented buttons</h2>
        <MDBRow>
          <MDBCol tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                material
                containerClassName="mb-3 mt-0"
                prepend={
                  <>
                    <MDBBtn
                      color="elegant"
                      size="md"
                      className="m-0 px-3 py-2 z-depth-0 rounded-0"
                    >
                      ACTION
                    </MDBBtn>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        color="elegant"
                        size="md"
                        className="m-0 px-2 z-depth-1 rounded-0"
                      >
                        <MDBIcon icon="caret-down" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu color="dark">
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </>
                }
              />

              <MDBInputGroup
                material
                containerClassName="mb-3 mt-0"
                append={
                  <>
                    <MDBBtn
                      color="ins"
                      size="md"
                      className="m-0 px-3 py-2 z-depth-0 rounded-0"
                    >
                      ACTION
                    </MDBBtn>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        color="ins"
                        size="md"
                        className="m-0 px-2 z-depth-1 rounded-0"
                      >
                        <MDBIcon icon="caret-down" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu color="ins">
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default InputGroupPage;
