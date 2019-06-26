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
  MDBRow
} from "mdbreact";
import DocsLink from "../../components/docsLink";

class InputGroupPage extends React.Component {
  render() {
    return (
      <MDBContainer>
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
                className="mb-3 mt-0"
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
                className="mb-3 mt-0"
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
                className="mb-3 mt-0"
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
                className="mb-3"
                prepend={
                  <div className="input-group-text">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheckbox1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="defaultCheckbox1"
                    />
                  </div>
                }
              />
              <MDBInputGroup
                className="mb-3"
                prepend={
                  <div className="input-group-text">
                    <input
                      className="form-check-input filled-in"
                      type="checkbox"
                      value=""
                      id="filledInCheckbox1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="filledInCheckbox1"
                    />
                  </div>
                }
              />
              <MDBInputGroup
                className="mb-3"
                prepend={
                  <div className="input-group-text">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    />
                  </div>
                }
              />
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                className="mb-3 mt-0"
                material
                prepend={
                  <div className="input-group-text md-addon">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheckbox2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="defaultCheckbox2"
                    />
                  </div>
                }
              />
              <MDBInputGroup
                className="mb-3 mt-0"
                material
                prepend={
                  <div className="input-group-text md-addon">
                    <input
                      className="form-check-input filled-in"
                      type="checkbox"
                      value=""
                      id="filledInCheckbox2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="filledInCheckbox2"
                    />
                  </div>
                }
              />
              <MDBInputGroup
                className="mb-3 mt-0"
                material
                prepend={
                  <div className="input-group-text md-addon">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
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
                className="mb-3 mt-0"
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
                className="mb-3 mt-0"
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
                className="mb-3 mt-0"
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
                className="mb-3 mt-0"
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
