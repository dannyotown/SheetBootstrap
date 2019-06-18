import React from "react";
import {
  MDBContainer,
  MDBInputGroup,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBIcon
} from "mdbreact";

class ChartsPage extends React.Component {
  render() {
    return (
      <MDBContainer>
        <h2 className="mt-5">Input Groups</h2>
        <h3 className="mb-4">Default input groups</h3>

        <MDBInputGroup className="mb-3" prepend={"tekst"} inputPlaceholder="Bla foo"/>
        <MDBInputGroup className="mb-3" append={"@example.com"} />
        <label htmlFor="basic-url">Your vanity URL</label>
        <MDBInputGroup
          className="mb-3"
          prepend="https://example.com/users/"
          inputID="basic-url"
        />
        <MDBInputGroup className="mb-3" prepend="$" append=".00" />
        <MDBInputGroup
          className="mb-3"
          prepend="With textarea"
          inputTag="textarea"
        />

        <h3 className="mb-4 mt-5">Material input groups</h3>
        <MDBInputGroup
          material
          className="mb-3"
          prepend={"tekst"}
          textClassName="md-addon"
        />
        <MDBInputGroup
          material
          className="mb-3"
          append={"@example.com"}
          textClassName="md-addon"
        />
        <label htmlFor="basic-url" className="mb-0">
          Your vanity URL
        </label>
        <MDBInputGroup
          material
          className="mb-3 mt-0"
          prepend="https://example.com/users/"
          inputID="basic-url"
          textClassName="md-addon pl-0"
        />
        <MDBInputGroup
          material
          className="mb-3"
          prepend="$"
          append=".00"
          textClassName="md-addon"
        />
        <MDBInputGroup
          material
          className="mb-3"
          prepend="With textarea"
          inputTag="textarea"
          inputType="text"
          textClassName="md-addon"
        />

        <h2 className="mt-5">Wrapping</h2>
        <p>
          Input groups wrap by default via flex-wrap: wrap in order to
          accommodate custom form field validation within an input group. You
          may disable this with .flex-nowrap.
        </p>
        <MDBInputGroup className="flex-nowrap mb-3" prepend="@" />

        <h2 className="mt-5">Sizing</h2>
        <h3 className="mb-4">Default input group</h3>

        <MDBInputGroup className="mb-3" prepend="Small" size="sm" />
        <MDBInputGroup className="mb-3" prepend="Default" />
        <MDBInputGroup className="mb-3" prepend="Large" size="lg" />

        <h3 className="mb-4 mt-5">Material input group</h3>
        <MDBInputGroup
          material
          textClassName="md-addon"
          className="mb-3"
          prepend="Small"
          size="sm"
        />
        <MDBInputGroup
          material
          textClassName="md-addon"
          className="mb-3"
          prepend="Default"
        />
        <MDBInputGroup
          material
          textClassName="md-addon"
          className="mb-3"
          prepend="Large"
          size="lg"
        />

        <h2 className="mt-5">Checkboxes and radios (PRO)</h2>
        <h3 className="mb-4">Default input group</h3>

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
              <label className="form-check-label" htmlFor="defaultCheckbox1" />
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
              <label className="form-check-label" htmlFor="filledInCheckbox1" />
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
              <label className="form-check-label" htmlFor="exampleRadios1" />
            </div>
          }
        />

        <h3 className="mb-4 mt-5">Material input group</h3>

        <MDBInputGroup
          className="mb-3"
          material
          prepend={
            <div className="input-group-text md-addon">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheckbox2"
              />
              <label className="form-check-label" htmlFor="defaultCheckbox2" />
            </div>
          }
        />
        <MDBInputGroup
          className="mb-3"
          material
          prepend={
            <div className="input-group-text md-addon">
              <input
                className="form-check-input filled-in"
                type="checkbox"
                value=""
                id="filledInCheckbox2"
              />
              <label className="form-check-label" htmlFor="filledInCheckbox2" />
            </div>
          }
        />
        <MDBInputGroup
          className="mb-3"
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
              <label className="form-check-label" htmlFor="exampleRadios2" />
            </div>
          }
        />

        <h2 className="mt-5">Multiple inputs</h2>
        <h3 className="mb-4">Default input groups</h3>
        <MDBInputGroup
          className="mb-3"
          prepend="First and last name"
          inputs={
            <>
              <input type="text" className="form-control" />
              <input type="text" className="form-control" />
            </>
          }
        />

        <h3 className="mb-4 mt-5">Material input groups</h3>
        <MDBInputGroup
          material
          className="mb-3"
          prepend="First and last name"
          textClassName="md-addon"
          inputs={
            <>
              <input
                type="text"
                className="form-control"
                placeholder="Type sth"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Type sth"
              />
            </>
          }
        />

        <h2 className="mt-5">Multiple addons</h2>
        <h3 className="mb-4">Default input groups</h3>
        <MDBInputGroup
          className="mb-3"
          prepend={
            <>
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
            </>
          }
        />

        <MDBInputGroup
          className="mb-3"
          append={
            <>
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
            </>
          }
        />

        <h3 className="mb-4 mt-5">Material input groups</h3>
        <MDBInputGroup
          className="mb-3"
          material
          prepend={
            <>
              <span className="input-group-text md-addon">$</span>
              <span className="input-group-text md-addon">0.00</span>
            </>
          }
        />
        <MDBInputGroup
          className="mb-3"
          material
          append={
            <>
              <span className="input-group-text md-addon">$</span>
              <span className="input-group-text md-addon">0.00</span>
            </>
          }
        />

        <h2 className="mt-5">Button addons</h2>
        <h3 className="mb-4">Default input groups</h3>
        <MDBInputGroup
          className="mb-3"
          prepend={
            <MDBBtn
              color="primary"
              outline
              size="md"
              className="m-0 px-3 py-2 z-depth-0"
            >
              BUTTON
            </MDBBtn>
          }
        />

        <MDBInputGroup
          className="mb-3"
          append={
            <MDBBtn outline size="md" className="m-0 px-3 py-2 z-depth-0">
              BUTTON
            </MDBBtn>
          }
        />

        <MDBInputGroup
          className="mb-3"
          prepend={
            <>
              <MDBBtn
                color="secondary"
                outline
                size="md"
                className="m-0 px-3 py-2 z-depth-0"
              >
                BUTTON
              </MDBBtn>
              <MDBBtn
                color="secondary"
                outline
                size="md"
                className="m-0 px-3 py-2 z-depth-0"
              >
                BUTTON
              </MDBBtn>
            </>
          }
        />

        <MDBInputGroup
          className="mb-3"
          append={
            <>
              <MDBBtn
                color="info"
                outline
                size="md"
                className="m-0 px-3 py-2 z-depth-0"
              >
                BUTTON
              </MDBBtn>
              <MDBBtn
                color="info"
                outline
                size="md"
                className="m-0 px-3 py-2 z-depth-0"
              >
                BUTTON
              </MDBBtn>
            </>
          }
        />

        <h3 className="mb-4 mt-5">Material input groups</h3>

        <MDBInputGroup
          material
          className="mb-3"
          prepend={
            <MDBBtn size="md" className="m-0 px-3 py-2 z-depth-0">
              BUTTON
            </MDBBtn>
          }
        />

        <MDBInputGroup
          material
          className="mb-3"
          append={
            <MDBBtn
              color="secondary"
              size="md"
              className="m-0 px-3 py-2 z-depth-0"
            >
              BUTTON
            </MDBBtn>
          }
        />

        <MDBInputGroup
          material
          className="mb-3"
          prepend={
            <>
              <MDBBtn
                color="info"
                size="md"
                className="m-0 px-3 py-2 z-depth-0"
              >
                BUTTON
              </MDBBtn>
              <MDBBtn
                color="info"
                size="md"
                className="m-0 px-3 py-2 z-depth-0"
              >
                BUTTON
              </MDBBtn>
            </>
          }
        />

        <MDBInputGroup
          material
          className="mb-3"
          append={
            <>
              <MDBBtn
                color="primary"
                size="md"
                className="m-0 px-3 py-2 z-depth-0"
              >
                BUTTON
              </MDBBtn>
              <MDBBtn
                color="primary"
                size="md"
                className="m-0 px-3 py-2 z-depth-0"
              >
                BUTTON
              </MDBBtn>
            </>
          }
        />

        <h2 className="mt-5">Buttons with dropdowns</h2>
        <h3 className="mb-4">Default input groups</h3>

        <MDBInputGroup
          className="mb-3"
          prepend={
            <MDBDropdown>
              <MDBDropdownToggle
                color="primary"
                size="md"
                className="m-0 px-3 z-depth-0"
              >
                Dropdown <MDBIcon icon="caret-down" className="ml-1" />
              </MDBDropdownToggle>
              <MDBDropdownMenu color="primary">
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
          className="mb-3"
          append={
            <MDBDropdown>
              <MDBDropdownToggle
                color="default"
                size="md"
                className="m-0 px-3 z-depth-0"
              >
                Dropdown <MDBIcon icon="caret-down" className="ml-1" />
              </MDBDropdownToggle>
              <MDBDropdownMenu color="default">
                <MDBDropdownItem>Action</MDBDropdownItem>
                <MDBDropdownItem>Another Action</MDBDropdownItem>
                <MDBDropdownItem>Something else here</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem>Separated link</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          }
        />

        <h3 className="mb-4 mt-5">Material input groups</h3>
        <MDBInputGroup
          material
          className="mb-3"
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
          className="mb-3"
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
        <h2 className="mt-5">Segmented buttons</h2>
        <h3 className="mb-4">Default input groups</h3>

        <MDBInputGroup
          className="mb-3"
          prepend={
            <>
              <MDBBtn
                outline
                color="primary"
                size="md"
                className="m-0 px-3 py-2 z-depth-0 rounded-0"
              >
                ACTION
              </MDBBtn>
              <MDBDropdown>
                <MDBDropdownToggle
                  outline
                  color="primary"
                  size="md"
                  className="m-0 px-2 z-depth-0 rounded-0"
                >
                  <MDBIcon icon="caret-down" />
                </MDBDropdownToggle>
                <MDBDropdownMenu color="primary">
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
          className="mb-3"
          append={
            <>
              <MDBBtn
                outline
                color="info"
                size="md"
                className="m-0 px-3 py-2 z-depth-0 rounded-0"
              >
                ACTION
              </MDBBtn>
              <MDBDropdown>
                <MDBDropdownToggle
                  outline
                  color="info"
                  size="md"
                  className="m-0 px-2 z-depth-0 rounded-0"
                >
                  <MDBIcon icon="caret-down" />
                </MDBDropdownToggle>
                <MDBDropdownMenu color="info">
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

        <h3 className="mb-4 mt-5">Material input groups</h3>

        <MDBInputGroup
          material
          className="mb-3"
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
                  className="m-0 px-2 z-depth-0 rounded-0"
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
          className="mb-3"
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
                  className="m-0 px-2 z-depth-0 rounded-0"
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

        <h2 className="mt-5">Custom select</h2>
        <MDBInputGroup
          className="mb-3"
          prepend="Options"
          inputs={
            <select className="browser-default custom-select">
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          }
        />

        <MDBInputGroup
          className="mb-3"
          append="Options"
          inputs={
            <select className="browser-default custom-select">
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          }
        />

        <MDBInputGroup
          className="mb-3"
          prepend={
            <MDBBtn
              color="mdb-color"
              outline
              size="md"
              className="m-0 px-3 py-2 z-depth-0"
            >
              BUTTON
            </MDBBtn>
          }
          inputs={
            <select className="browser-default custom-select">
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          }
        />

        <MDBInputGroup
          className="mb-3"
          append={
            <MDBBtn
              color="mdb-color"
              outline
              size="md"
              className="m-0 px-3 py-2 z-depth-0"
            >
              BUTTON
            </MDBBtn>
          }
          inputs={
            <select className="browser-default custom-select">
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          }
        />

        <h2 className="mt-5">Custom file input</h2>
        <MDBInputGroup
          prepend="Upload"
          inputs={
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
          }
          className="mb-3"
        />

        <MDBInputGroup
          append="Upload"
          inputs={
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
          }
          className="mb-3"
        />

        <MDBInputGroup
          prepend={
            <MDBBtn
              color="mdb-color"
              outline
              size="md"
              className="m-0 px-3 py-2 z-depth-0"
            >
              BUTTON
            </MDBBtn>
          }
          inputs={
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
          }
          className="mb-3"
        />

        <MDBInputGroup
          append={
            <MDBBtn
              color="mdb-color"
              outline
              size="md"
              className="m-0 px-3 py-2 z-depth-0"
            >
              BUTTON
            </MDBBtn>
          }
          inputs={
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
          }
          className="mb-3"
        />
      </MDBContainer>
    );
  }
}

export default ChartsPage;